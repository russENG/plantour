"use client";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import Link from "next/link";
import type { TaxonomyNode } from "@/data/types";

interface Props {
  data: TaxonomyNode;
}

const rankColors: Record<string, string> = {
  kingdom: "#166534",
  phylum: "#15803d",
  class: "#16a34a",
  order: "#22c55e",
  family: "#4ade80",
  genus: "#86efac",
  species: "#bbf7d0",
};

interface D3Node extends d3.HierarchyPointNode<TaxonomyNode> {}

export default function TaxonomyTree({ data }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selected, setSelected] = useState<TaxonomyNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

  useEffect(() => {
    const updateSize = () => {
      const w = Math.min(window.innerWidth - 32, 1000);
      setDimensions({ width: w, height: w });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;
    const { width, height } = dimensions;
    const radius = Math.min(width, height) / 2 - 80;

    const root = d3.hierarchy<TaxonomyNode>(data, (d) => d.children);
    // d3.tree() uses the tidy-tree algorithm which prevents line crossings
    const treeLayout = d3
      .tree<TaxonomyNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);
    treeLayout(root);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // ズーム
    const zoom = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.3, 4]).on("zoom", (event) => {
      g.attr("transform", `translate(${event.transform.x + width / 2},${event.transform.y + height / 2}) scale(${event.transform.k})`);
    });
    svg.call(zoom);

    // リンク
    const linkRadial = d3
      .linkRadial<d3.HierarchyPointLink<TaxonomyNode>, d3.HierarchyPointNode<TaxonomyNode>>()
      .angle((d) => d.x)
      .radius((d) => d.y);

    g.append("g")
      .selectAll("path")
      .data(root.links() as d3.HierarchyPointLink<TaxonomyNode>[])
      .join("path")
      .attr("fill", "none")
      .attr("stroke", "#d1fae5")
      .attr("stroke-width", 1.5)
      .attr("d", linkRadial);

    // ノード
    const node = g
      .append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => {
        const angle = (d as D3Node).x - Math.PI / 2;
        const r = (d as D3Node).y;
        return `translate(${r * Math.cos(angle)},${r * Math.sin(angle)})`;
      })
      .style("cursor", "pointer")
      .on("click", (_, d) => setSelected(d.data));

    node
      .append("circle")
      .attr("r", (d) => (d.depth === 0 ? 10 : d.depth <= 2 ? 7 : 5))
      .attr("fill", (d) => rankColors[d.data.rank] ?? "#4ade80")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => ((d as D3Node).x < Math.PI === !d.children ? 8 : -8))
      .attr("text-anchor", (d) => ((d as D3Node).x < Math.PI === !d.children ? "start" : "end"))
      .attr("transform", (d) => {
        const angle = ((d as D3Node).x * 180) / Math.PI - 90;
        return `rotate(${(d as D3Node).x >= Math.PI ? angle + 180 : angle})`;
      })
      .attr("font-size", (d) => (d.depth <= 1 ? 12 : d.depth <= 3 ? 10 : 9))
      .attr("font-weight", (d) => (d.depth <= 2 ? "bold" : "normal"))
      .attr("fill", "#1f2937")
      .text((d) => d.data.name);
  }, [data, dimensions]);

  return (
    <div className="relative">
      <div className="text-xs text-gray-400 mb-2 text-center">
        ピンチ/スクロールでズーム、ドラッグで移動、ノードをクリックで詳細表示
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <svg ref={svgRef} className="w-full" style={{ maxHeight: "80vh" }} />
      </div>

      {/* 凡例 */}
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {Object.entries(rankColors).map(([rank, color]) => (
          <div key={rank} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-xs text-gray-500">{rank}</span>
          </div>
        ))}
      </div>

      {/* 選択ノード詳細 */}
      {selected && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
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
          </div>
        </div>
      )}
    </div>
  );
}
