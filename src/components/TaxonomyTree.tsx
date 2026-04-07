"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import * as d3 from "d3";
import Link from "next/link";
import type { TaxonomyNode } from "@/data/types";
import { families } from "@/data/families";
import { cladeColors, defaultCladeColors, cladeRootIds, cladeLegend } from "@/data/cladeColors";

interface Props {
  data: TaxonomyNode;
}

export default function TaxonomyTree({ data }: Props) {
  const searchParams = useSearchParams();
  const highlightPlantId  = searchParams.get("plant")  ?? undefined;
  const highlightFamilyId = searchParams.get("family") ?? undefined;
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef(0); // 現在のツリー回転角度（ラジアン）
  const [selected, setSelected] = useState<TaxonomyNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateSize = () => {
      const w = containerRef.current?.clientWidth ?? window.innerWidth - 32;
      setDimensions({
        width: w,
        height: Math.round(window.innerHeight * 0.8),
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svgW = dimensions.width;
    const svgH = dimensions.height;

    // ── データ駆動ツリーサイズ計算 ──────────────────────────────────────
    // 葉ノード数から「全ラベルが被らず並ぶ最小半径」を逆算する。
    const root = d3.hierarchy<TaxonomyNode>(data, (d) => d.children);
    const leafCount = root.leaves().length;
    const minArcPerLeaf = 20; // px / leaf
    const dataRadius = Math.ceil((leafCount * minArcPerLeaf) / (2 * Math.PI));
    const radius = Math.max(dataRadius, 300);
    const svgSize = radius * 2 + 180; // ツリー内部の論理サイズ

    // クレード祖先を辿って色を決定
    function getNodeColor(d: d3.HierarchyNode<TaxonomyNode>): string {
      let cur: d3.HierarchyNode<TaxonomyNode> | null = d;
      while (cur) {
        if (cladeRootIds.has(cur.data.id)) {
          return cladeColors[cur.data.id][d.data.rank] ?? "#4ade80";
        }
        cur = cur.parent;
      }
      return defaultCladeColors[d.data.rank] ?? "#94a3b8";
    }

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const treeLayout = d3
      .tree<TaxonomyNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);
    treeLayout(root);

    // 非線形ラジアル配置
    const maxD = Math.max(...root.descendants().map(d => d.depth), 1);
    root.each(d => {
      if (d.depth > 0) {
        (d as d3.HierarchyPointNode<TaxonomyNode>).y =
          radius * Math.pow(d.depth / maxD, 0.60);
      }
    });

    // SVG はビューポートサイズに固定（overflow なし）
    svg.attr("width", svgW).attr("height", svgH);

    const g = svg.append("g");

    // ズーム倍率から表示できる最大深度を計算
    function calcMaxDepth(k: number): number {
      for (let depth = maxD; depth >= 1; depth--) {
        const nodesAtDepth = root.descendants().filter(d => d.depth === depth).length;
        if (nodesAtDepth === 0) continue;
        const r = radius * Math.pow(depth / maxD, 0.60);
        const arcPerNode = (2 * Math.PI * r * k) / nodesAtDepth;
        if (arcPerNode >= minArcPerLeaf) return depth;
      }
      return 1;
    }

    // ハイライト対象 ID セット（サブツリー強調用）
    const highlightedIds = new Set<string>();

    // calcMaxDepth の結果をキャッシュ（zoom レベルを 0.05 刻みで丸める）
    const maxDepthCache = new Map<number, number>();
    function calcMaxDepthCached(k: number): number {
      const key = Math.round(k * 20) / 20;
      if (maxDepthCache.has(key)) return maxDepthCache.get(key)!;
      const result = calcMaxDepth(k);
      maxDepthCache.set(key, result);
      return result;
    }

    let rafId: ReturnType<typeof requestAnimationFrame> | null = null;
    function updateLabels(k: number) {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const visibleDepth = calcMaxDepthCached(k);
        const hl = highlightedIds.size > 0;
        g.selectAll<SVGTextElement, d3.HierarchyPointNode<TaxonomyNode>>("text")
          .attr("opacity", d => {
            if (hl && !highlightedIds.has(d.data.id)) return 0;
            return d.depth <= visibleDepth ? 1 : 0;
          })
          .attr("font-size", d => {
            const base = d.depth <= 1 ? 13 : d.depth <= 3 ? 11 : 9;
            const minScreenPx = d.depth <= 2 ? 11 : 0;
            // Screen-pixel cap: at high zoom, labels would otherwise grow as base*k
            // and overlap so badly that scheduleHideOverlapping hides large numbers of them.
            // Cap with an inverse-scale ceiling so on-screen size stays bounded.
            const maxScreenPx = d.depth <= 1 ? 18 : d.depth <= 3 ? 16 : 14;
            return Math.max(minScreenPx / k, Math.min(base, maxScreenPx / k));
          });
        rafId = null;
      });
    }

    // 衝突検出はズーム終了時のみ実行（高コストな getBoundingClientRect を限定）
    let hideRafId: ReturnType<typeof requestAnimationFrame> | null = null;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    function scheduleHideOverlapping() {
      if (hideTimer !== null) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        if (hideRafId !== null) cancelAnimationFrame(hideRafId);
        hideRafId = requestAnimationFrame(() => {
          const items: Array<{ el: SVGTextElement; rect: DOMRect; depth: number }> = [];
          g.selectAll<SVGTextElement, d3.HierarchyPointNode<TaxonomyNode>>("text").each(function (d) {
            if (parseFloat(this.getAttribute("opacity") ?? "0") < 0.5) return;
            const rect = this.getBoundingClientRect();
            if (rect.width > 0) items.push({ el: this, rect, depth: d.depth });
          });
          items.sort((a, b) => a.depth - b.depth);
          const shown: DOMRect[] = [];
          for (const { el, rect } of items) {
            const overlaps = shown.some(
              sr => rect.left < sr.right + 2 && rect.right > sr.left - 2 &&
                    rect.top  < sr.bottom + 2 && rect.bottom > sr.top  - 2
            );
            if (!overlaps) shown.push(rect);
            else el.setAttribute("opacity", "0");
          }
          hideRafId = null;
        });
        hideTimer = null;
      }, 150);
    }

    // ズーム変換：ツリー全体の回転 rotRef を含めて適用
    const zoom = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.1, 8])
      .on("zoom", (event) => {
        const { x, y, k } = event.transform;
        const rotDeg = rotRef.current * (180 / Math.PI);
        g.attr("transform", `translate(${x},${y}) scale(${k}) rotate(${rotDeg})`);
        // ストローク幅を画面上で一定に保つ（最小0.8px、最大2px）
        const sw = Math.min(2, Math.max(0.8, 1.5 / k));
        g.selectAll<SVGPathElement, unknown>("path").attr("stroke-width", sw);
        g.selectAll<SVGCircleElement, unknown>("circle").attr("stroke-width", Math.min(2, Math.max(0.5, 1.5 / k)));
        updateLabels(k);
      })
      .on("end", () => scheduleHideOverlapping());
    svg.call(zoom);

    const linkRadial = d3
      .linkRadial<d3.HierarchyPointLink<TaxonomyNode>, d3.HierarchyPointNode<TaxonomyNode>>()
      .angle((d) => d.x)
      .radius((d) => d.y);

    const linkSelection = g.append("g")
      .selectAll("path")
      .data(root.links() as d3.HierarchyPointLink<TaxonomyNode>[])
      .join("path")
      .attr("fill", "none")
      .attr("stroke", "#d1fae5")
      .attr("stroke-width", 1.5)
      .attr("d", linkRadial);

    // サブツリーのハイライト・リセット
    function applyHighlight(ids: Set<string>) {
      highlightedIds.clear();
      ids.forEach(id => highlightedIds.add(id));
      const hl = highlightedIds.size > 0;

      node.select("circle")
        .transition().duration(300)
        .attr("opacity", nd => !hl || highlightedIds.has(nd.data.id) ? 1 : 0.35);

      node.select("text")
        .transition().duration(300)
        .attr("fill", nd => !hl || highlightedIds.has(nd.data.id) ? "#1f2937" : "#9ca3af");

      linkSelection
        .transition().duration(300)
        .attr("stroke", (l) => {
          if (!hl) return "#d1fae5";
          if (highlightedIds.has(l.source.data.id) && highlightedIds.has(l.target.data.id)) return "#4ade80";
          return "#e5e7eb";
        })
        .attr("opacity", (l) => {
          if (!hl) return 1;
          return (highlightedIds.has(l.source.data.id) && highlightedIds.has(l.target.data.id)) ? 1 : 0.4;
        });
    }

    const node = g
      .append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => {
        const angle = (d as d3.HierarchyPointNode<TaxonomyNode>).x - Math.PI / 2;
        const r = (d as d3.HierarchyPointNode<TaxonomyNode>).y;
        return `translate(${r * Math.cos(angle)},${r * Math.sin(angle)})`;
      })
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        event.stopPropagation();
        setSelected(d.data);

        // サブツリー + 祖先パスをハイライト
        const highlighted = new Set(d.descendants().map(desc => desc.data.id));
        d.ancestors().forEach(anc => highlighted.add(anc.data.id));
        applyHighlight(highlighted);
        const currentZoomK = d3.zoomTransform(svgRef.current!).k;
        updateLabels(currentZoomK);

        const pn = d as d3.HierarchyPointNode<TaxonomyNode>;

        // ノードが右側（angle = π/2）に来るよう回転角を決定
        const targetRot = Math.PI / 2 - pn.x; // ラジアン
        rotRef.current = targetRot;

        // 回転後のノード座標を計算（元の座標を targetRot で回転）
        const nx0 = pn.y * Math.cos(pn.x - Math.PI / 2);
        const ny0 = pn.y * Math.sin(pn.x - Math.PI / 2);
        const cosR = Math.cos(targetRot);
        const sinR = Math.sin(targetRot);
        const nx = nx0 * cosR - ny0 * sinR;
        const ny = nx0 * sinR + ny0 * cosR;

        const currentK = d3.zoomTransform(svgRef.current!).k;
        const kTarget = Math.max(currentK * 1.5, d.depth <= 2 ? 2 : 3);

        svg.transition().duration(500).call(
          zoom.transform,
          d3.zoomIdentity
            .translate(svgW / 2 - nx * kTarget, svgH / 2 - ny * kTarget)
            .scale(kTarget)
        );
        updateTextAngles(targetRot, 500);
      });

    // 背景クリックでハイライトリセット
    svg.on("click", () => {
      setSelected(null);
      applyHighlight(new Set());
      updateLabels(d3.zoomTransform(svgRef.current!).k);
    });

    const familyMap = new Map(families.map(f => [f.id, f]));
    const nodeRadius = (d: d3.HierarchyNode<TaxonomyNode>): number => {
      if (d.depth === 0) return 12;
      if (d.depth <= 2) return 8;
      if (d.data.rank === "family" && d.data.familyId) {
        const n = familyMap.get(d.data.familyId)?.japaneseSpeciesCount ?? 0;
        if (n >= 500) return 9;
        if (n >= 100) return 7;
        if (n >= 10)  return 5.5;
        return 4;
      }
      return 5;
    };

    node
      .append("circle")
      .attr("r", nodeRadius)
      .attr("fill", (d) => getNodeColor(d))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => ((d as d3.HierarchyPointNode<TaxonomyNode>).x < Math.PI === !d.children ? 8 : -8))
      .attr("text-anchor", (d) => ((d as d3.HierarchyPointNode<TaxonomyNode>).x < Math.PI === !d.children ? "start" : "end"))
      .attr("transform", (d) => {
        const pn = d as d3.HierarchyPointNode<TaxonomyNode>;
        const angle = (pn.x * 180) / Math.PI - 90;
        return `rotate(${pn.x >= Math.PI ? angle + 180 : angle})`;
      })
      .attr("font-size", (d) => (d.depth <= 1 ? 12 : d.depth <= 3 ? 10 : 9))
      .attr("font-weight", (d) => {
        if (d.depth <= 2) return "bold";
        if (d.data.rank === "family" && d.data.familyId) {
          const n = familyMap.get(d.data.familyId)?.japaneseSpeciesCount ?? 0;
          return n >= 100 ? "bold" : "normal";
        }
        return "normal";
      })
      .attr("fill", "#1f2937")
      .text((d) => d.data.name);

    // ツリー回転後にテキスト角度を再計算（逆さま防止）
    // グループ自体が rotDeg 回転するため、textAngle = desiredScreenAngle - rotDeg とする
    function updateTextAngles(rotRad: number, duration = 500) {
      const rotDeg = rotRad * (180 / Math.PI);
      node.selectAll<SVGTextElement, d3.HierarchyPointNode<TaxonomyNode>>("text")
        .transition().duration(duration)
        .attr("transform", (d) => {
          const pn = d as d3.HierarchyPointNode<TaxonomyNode>;
          const effX = ((pn.x + rotRad) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
          const desired = (effX * 180) / Math.PI - 90 + (effX >= Math.PI ? 180 : 0);
          return `rotate(${desired - rotDeg})`;
        })
        .attr("x", (d) => {
          const pn = d as d3.HierarchyPointNode<TaxonomyNode>;
          const effX = ((pn.x + rotRad) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
          return (effX < Math.PI === !d.children) ? 8 : -8;
        })
        .attr("text-anchor", (d) => {
          const pn = d as d3.HierarchyPointNode<TaxonomyNode>;
          const effX = ((pn.x + rotRad) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
          return (effX < Math.PI === !d.children) ? "start" : "end";
        });
    }

    // ハイライト対象ノードを探してズーム
    const targetNode = root.descendants().find(d =>
      (highlightPlantId && d.data.plantId === highlightPlantId) ||
      (highlightFamilyId && d.data.familyId === highlightFamilyId)
    ) as d3.HierarchyPointNode<TaxonomyNode> | undefined;

    if (targetNode) {
      // ハイライトリング
      node
        .filter(d =>
          (!!highlightPlantId && d.data.plantId === highlightPlantId) ||
          (!!highlightFamilyId && d.data.familyId === highlightFamilyId)
        )
        .select("circle")
        .attr("stroke", "#f59e0b")
        .attr("stroke-width", 3)
        .attr("r", (d) => (d.depth <= 2 ? 10 : 8));

      // ノードをビューポート中心に表示（右側に来るよう回転）
      const targetRot = Math.PI / 2 - targetNode.x;
      rotRef.current = targetRot;
      const nx0 = targetNode.y * Math.cos(targetNode.x - Math.PI / 2);
      const ny0 = targetNode.y * Math.sin(targetNode.x - Math.PI / 2);
      const nx = nx0 * Math.cos(targetRot) - ny0 * Math.sin(targetRot);
      const ny = nx0 * Math.sin(targetRot) + ny0 * Math.cos(targetRot);
      const k = 3;
      svg.call(
        zoom.transform,
        d3.zoomIdentity.translate(svgW / 2 - nx * k, svgH / 2 - ny * k).scale(k)
      );
      updateTextAngles(targetRot, 0);
      setTimeout(() => scheduleHideOverlapping(), 50);
    } else {
      // 初期表示：ツリー全体がビューポートに収まるようフィット
      const kFit = Math.min(svgW, svgH) / svgSize * 0.92;
      svg.call(
        zoom.transform,
        d3.zoomIdentity.translate(svgW / 2, svgH / 2).scale(kFit)
      );
      updateLabels(kFit);
    }
  }, [data, dimensions, highlightPlantId, highlightFamilyId]);

  return (
    <div className="relative">
      <div className="text-xs text-gray-400 mb-2 text-center">
        ピンチ/スクロールでズームすると詳細が表示されます。ドラッグで移動、ノードをクリックで詳細表示
      </div>
      <div ref={containerRef} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <svg ref={svgRef} style={{ display: "block" }} />
      </div>

      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {cladeLegend.map(({ id, label }) => (
          <div key={id} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cladeColors[id].order }} />
            <span className="text-xs text-gray-500">{label}</span>
          </div>
        ))}
        <div className="w-full text-center text-xs text-gray-400 mt-1">
          濃色 = 上位分類（界・門）　淡色 = 下位分類（科・種）
        </div>
      </div>

      {selected && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-11/12 max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ×
          </button>
          <p className="text-xs text-gray-400 uppercase mb-1">{selected.rank}</p>
          <p className="font-bold text-gray-900 text-lg">{selected.name}</p>
          {selected.description && (
            <p className="text-sm text-gray-600 mt-2">{selected.description}</p>
          )}
          <div className="flex gap-2 mt-3">
            {selected.familyId && (
              <Link
                href={`/families/${selected.familyId}`}
                className="text-xs bg-teal-600 text-white px-3 py-1.5 rounded-lg hover:bg-teal-700"
              >
                科ページへ
              </Link>
            )}
            {selected.plantId && (
              <Link
                href={`/plants/${selected.plantId}`}
                className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700"
              >
                種ページへ
              </Link>
            )}
            {selected.rank !== "family" && selected.rank !== "species" && (
              <Link
                href={`/taxonomy/${selected.id}`}
                className="text-xs bg-gray-700 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800"
              >
                詳細ページへ
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
