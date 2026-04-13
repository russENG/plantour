"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { TaxonomyNode } from "@/data/types";
import { families } from "@/data/families";
import { plants } from "@/data/plants";
import { cladeColors, defaultCladeColors, cladeRootIds } from "@/data/cladeColors";
import { getActiveAncestors } from "@/data/keyUtils";
import { getFamilyEmoji } from "@/lib/emoji";
import type { Locale } from "@/dictionaries";

/** ノード表示名をロケールに応じて返す */
function getNodeName(node: TaxonomyNode, locale: Locale): string {
  if (locale === "ja") return node.name;
  if (node.enName) return node.enName;
  if (node.familyId) {
    const fam = families.find((f) => f.id === node.familyId);
    if (fam?.enName) return fam.enName;
  }
  if (node.plantId) {
    const pl = plants.find((p) => p.id === node.plantId);
    if (pl?.enName) return pl.enName;
  }
  return node.name;
}

// ── Props ─────────────────────────────────────────────────────
export interface TaxonomyListViewProps {
  /** 表示するツリーのルートノード */
  root: TaxonomyNode;
  /** フィルタ: この科IDセットに含まれない科をグレーアウト (undefined = フィルタなし) */
  activeFamilyIds?: Set<string>;
  /** 展開する階層の深さ上限 (undefined = 制限なし) */
  maxDepth?: number;
  /** コンパクト表示（サイドバー向け: 画像なし・小フォント） */
  compact?: boolean;
  /** 言語 */
  lang?: Locale;
}

// ── ランクラベル ──────────────────────────────────────────────
const rankLabelsJa: Record<string, string> = {
  kingdom: "界", phylum: "門", class: "綱", order: "目",
  family: "科", genus: "属", species: "種",
};
const rankLabelsEn: Record<string, string> = {
  kingdom: "Kingdom", phylum: "Phylum", class: "Class", order: "Order",
  family: "Family", genus: "Genus", species: "Species",
};

// ── 色計算 ────────────────────────────────────────────────────
function resolveColor(nodeId: string, rank: string, ancestorClade: string | null): string {
  if (cladeColors[nodeId]) {
    return cladeColors[nodeId][rank] ?? defaultCladeColors[rank] ?? "#94a3b8";
  }
  if (ancestorClade && cladeColors[ancestorClade]) {
    return cladeColors[ancestorClade][rank] ?? defaultCladeColors[rank] ?? "#94a3b8";
  }
  return defaultCladeColors[rank] ?? "#94a3b8";
}

// ── 再帰ブランチ ──────────────────────────────────────────────
function TreeBranch({
  node,
  depth,
  maxDepth,
  compact,
  activeNodeIds,
  activeFamilyIds,
  filtering,
  ancestorClade,
  lang = "ja",
}: {
  node: TaxonomyNode;
  depth: number;
  maxDepth: number | undefined;
  compact: boolean;
  activeNodeIds: Set<string>;
  activeFamilyIds: Set<string> | undefined;
  filtering: boolean;
  ancestorClade: string | null;
  lang?: Locale;
}) {
  const rankLabels = lang === "en" ? rankLabelsEn : rankLabelsJa;
  const clade = cladeRootIds.has(node.id) ? node.id : ancestorClade;
  const color = resolveColor(node.id, node.rank, clade);
  const hasChildren = node.children && node.children.length > 0;
  const depthExceeded = maxDepth !== undefined && depth >= maxDepth;

  // フィルタモード時のアクティブ判定
  const isFamily = node.rank === "family" && !!node.familyId;
  const isFamilyActive = !filtering || !isFamily || activeFamilyIds!.has(node.familyId!);
  const isBranchActive = !filtering || activeNodeIds.has(node.id);
  const dimmed = filtering && !isBranchActive;

  // リンク先
  const href =
    node.rank === "species" && node.plantId
      ? `/${lang}/plants/${node.plantId}`
      : node.rank === "family" && node.familyId
      ? `/${lang}/families/${node.familyId}`
      : `/${lang}/taxonomy/${node.id}`;

  // 葉ノード or 深さ上限 → リンクのみ
  if (!hasChildren || depthExceeded) {
    return (
      <li
        className="transition-opacity duration-300"
        style={{ opacity: dimmed ? 0.25 : 1 }}
      >
        <Link
          href={href}
          className={`flex items-center gap-2 rounded-lg hover:bg-gray-50 transition-colors ${
            compact ? "py-1 px-2" : "py-1.5 px-3"
          }`}
        >
          <span
            className="flex-shrink-0 w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className={compact ? "text-xs" : "text-sm"}>
            <span className="font-medium text-gray-800">{getNodeName(node, lang)}{node.familyId && getFamilyEmoji(node.familyId) && <span className="ml-1">{getFamilyEmoji(node.familyId)}</span>}</span>
            {!compact && (
              <span className="text-gray-400 ml-1 text-xs">
                {rankLabels[node.rank] ?? node.rank}
              </span>
            )}
          </span>
        </Link>
      </li>
    );
  }

  // ブランチノード → <details>/<summary>
  // フィルタモードでアクティブなブランチは自動展開
  const shouldOpen = filtering ? isBranchActive : depth < 2;

  return (
    <li
      className="transition-opacity duration-300"
      style={{ opacity: dimmed ? 0.25 : 1 }}
    >
      <details open={shouldOpen || undefined}>
        <summary
          className={`flex items-center gap-2 cursor-pointer select-none rounded-lg hover:bg-gray-50 transition-colors list-none ${
            compact ? "py-1 px-2" : "py-1.5 px-3"
          }`}
          style={{ borderLeft: `3px solid ${color}` }}
        >
          <span className={`font-semibold ${compact ? "text-xs" : "text-sm"}`} style={{ color }}>
            {getNodeName(node, lang)}
          </span>
          {!compact && (
            <span className="text-gray-400 text-xs">
              {rankLabels[node.rank] ?? node.rank}
              {filtering && ` (${countActiveFamilies(node, activeFamilyIds!)})`}
            </span>
          )}
          {compact && filtering && (
            <span className="text-gray-400 text-[10px]">
              {countActiveFamilies(node, activeFamilyIds!)}
            </span>
          )}
        </summary>
        <ul className={compact ? "pl-3" : "pl-4"}>
          {node.children!.map((child) => (
            <TreeBranch
              key={child.id}
              node={child}
              depth={depth + 1}
              maxDepth={maxDepth}
              compact={compact}
              activeNodeIds={activeNodeIds}
              activeFamilyIds={activeFamilyIds}
              filtering={filtering}
              ancestorClade={clade}
              lang={lang}
            />
          ))}
        </ul>
      </details>
    </li>
  );
}

/** ノード配下でアクティブな科の数を数える */
function countActiveFamilies(node: TaxonomyNode, active: Set<string>): number {
  if (node.familyId) return active.has(node.familyId) ? 1 : 0;
  let count = 0;
  for (const child of node.children ?? []) {
    count += countActiveFamilies(child, active);
  }
  return count;
}

// ── メインコンポーネント ──────────────────────────────────────
export default function TaxonomyListView({
  root,
  activeFamilyIds,
  maxDepth,
  compact = false,
  lang = "ja",
}: TaxonomyListViewProps) {
  const filtering = activeFamilyIds !== undefined && activeFamilyIds.size > 0;

  const activeNodeIds = useMemo(() => {
    if (!filtering || !activeFamilyIds) return new Set<string>();
    return getActiveAncestors(root, activeFamilyIds);
  }, [root, activeFamilyIds, filtering]);

  return (
    <div className={compact ? "text-xs" : "text-sm"}>
      {filtering && (
        <div className="text-xs text-gray-400 mb-2">
          {lang === "en"
            ? `${activeFamilyIds!.size} candidate families remaining`
            : `${activeFamilyIds!.size} 科が候補に残っています`}
        </div>
      )}
      <ul className="space-y-0.5">
        {root.children ? (
          root.children.map((child) => (
            <TreeBranch
              key={child.id}
              node={child}
              depth={0}
              maxDepth={maxDepth}
              compact={compact}
              activeNodeIds={activeNodeIds}
              activeFamilyIds={activeFamilyIds}
              filtering={filtering}
              ancestorClade={null}
              lang={lang}
            />
          ))
        ) : (
          <li className="text-gray-400 py-2">
            {lang === "en" ? "No child nodes" : "子ノードがありません"}
          </li>
        )}
      </ul>
    </div>
  );
}
