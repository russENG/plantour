/**
 * クレードごとの色スケール（上位ほど濃い、kingdom→species の順）
 * TaxonomyTree（D3 ラジアルツリー）と TaxonomyListView（HTMLツリー）で共有。
 */
export const cladeColors: Record<string, Record<string, string>> = {
  bryophyta:      { kingdom:"#78350f", phylum:"#92400e", class:"#b45309", order:"#d97706", family:"#f59e0b", genus:"#fbbf24", species:"#fde68a" },
  pteridophyta:   { kingdom:"#365314", phylum:"#3f6212", class:"#4d7c0f", order:"#65a30d", family:"#84cc16", genus:"#a3e635", species:"#d9f99d" },
  gymnospermae:   { kingdom:"#1e3a8a", phylum:"#1e40af", class:"#1d4ed8", order:"#2563eb", family:"#3b82f6", genus:"#60a5fa", species:"#bfdbfe" },
  ana_grade:      { kingdom:"#134e4a", phylum:"#115e59", class:"#0f766e", order:"#0d9488", family:"#14b8a6", genus:"#2dd4bf", species:"#99f6e4" },
  magnoliids:     { kingdom:"#4a1d96", phylum:"#5b21b6", class:"#6d28d9", order:"#7c3aed", family:"#8b5cf6", genus:"#a78bfa", species:"#ddd6fe" },
  monocots:       { kingdom:"#7c2d12", phylum:"#9a3412", class:"#c2410c", order:"#ea580c", family:"#f97316", genus:"#fb923c", species:"#fed7aa" },
  basal_eudicots: { kingdom:"#881337", phylum:"#9f1239", class:"#be123c", order:"#e11d48", family:"#f43f5e", genus:"#fb7185", species:"#fecdd3" },
  core_eudicots:  { kingdom:"#14532d", phylum:"#166534", class:"#15803d", order:"#16a34a", family:"#22c55e", genus:"#4ade80", species:"#bbf7d0" },
};

/** 中間ノード（spermatophyta / angiospermae / eudicots など）はスレート系 */
export const defaultCladeColors: Record<string, string> = {
  kingdom:"#1e293b", phylum:"#334155", class:"#475569", order:"#64748b", family:"#94a3b8", genus:"#cbd5e1", species:"#f1f5f9",
};

export const cladeRootIds = new Set(Object.keys(cladeColors));

export const cladeLegend: { id: string; label: string }[] = [
  { id: "bryophyta",      label: "コケ植物" },
  { id: "pteridophyta",   label: "シダ植物" },
  { id: "gymnospermae",   label: "裸子植物" },
  { id: "ana_grade",      label: "被子: ANA基部群" },
  { id: "magnoliids",     label: "被子: モクレン類" },
  { id: "monocots",       label: "被子: 単子葉類" },
  { id: "basal_eudicots", label: "被子: 基部真正双子葉" },
  { id: "core_eudicots",  label: "被子: コア真正双子葉" },
];

/**
 * ノードのクレード色を決定する。
 * 祖先を辿り最初に見つかったクレードルートの色パレットを使う。
 */
export function getCladeColor(
  nodeId: string,
  rank: string,
  ancestorIds: string[],
): string {
  // ノード自身がクレードルートか
  if (cladeColors[nodeId]) {
    return cladeColors[nodeId][rank] ?? defaultCladeColors[rank] ?? "#94a3b8";
  }
  // 祖先を辿る（近い方から）
  for (const aid of ancestorIds) {
    if (cladeColors[aid]) {
      return cladeColors[aid][rank] ?? defaultCladeColors[rank] ?? "#94a3b8";
    }
  }
  return defaultCladeColors[rank] ?? "#94a3b8";
}
