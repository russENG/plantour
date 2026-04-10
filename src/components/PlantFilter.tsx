"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { familyTraits, seedPlantFamilyIds, type FamilyTraits } from "@/data/familyTraits";
import { families } from "@/data/families";
import { plants } from "@/data/plants";
import type { Plant, PlantTraits } from "@/data/types";
import type { Locale } from "@/dictionaries";
import { getTraitIcon } from "@/components/TraitIcons";

// ── フィルタグループ定義 ──────────────────────────────────────
interface FilterOption {
  value: string;
  labelJa: string;
  labelEn: string;
}
interface FilterGroup {
  id: keyof PlantTraits;
  labelJa: string;
  labelEn: string;
  section: "leaf" | "habit" | "flower" | "ecology";
  options: FilterOption[];
}

const FILTER_GROUPS: FilterGroup[] = [
  { id: "leafArr", labelJa: "葉序（葉のつき方）", labelEn: "Leaf arrangement", section: "leaf", options: [
    { value: "alt", labelJa: "互生", labelEn: "Alternate" },
    { value: "opp", labelJa: "対生", labelEn: "Opposite" },
    { value: "whor", labelJa: "輪生", labelEn: "Whorled" },
  ]},
  { id: "leafType", labelJa: "葉の型", labelEn: "Leaf type", section: "leaf", options: [
    { value: "simple", labelJa: "単葉", labelEn: "Simple" },
    { value: "compound", labelJa: "複葉", labelEn: "Compound" },
  ]},
  { id: "venation", labelJa: "葉脈", labelEn: "Venation", section: "leaf", options: [
    { value: "parallel", labelJa: "平行脈", labelEn: "Parallel" },
    { value: "reticulate", labelJa: "網状脈", labelEn: "Reticulate" },
  ]},
  { id: "margin", labelJa: "葉の縁", labelEn: "Leaf margin", section: "leaf", options: [
    { value: "entire", labelJa: "全縁", labelEn: "Entire" },
    { value: "serrate", labelJa: "鋸歯縁", labelEn: "Serrate" },
    { value: "lobed", labelJa: "裂片状", labelEn: "Lobed" },
  ]},
  { id: "shape", labelJa: "葉の形", labelEn: "Leaf shape", section: "leaf", options: [
    { value: "linear", labelJa: "線形", labelEn: "Linear" },
    { value: "ovate", labelJa: "卵形", labelEn: "Ovate" },
    { value: "cordate", labelJa: "心形", labelEn: "Cordate" },
    { value: "needle", labelJa: "針形", labelEn: "Needle" },
    { value: "round", labelJa: "円形", labelEn: "Round" },
    { value: "palmate", labelJa: "掌状", labelEn: "Palmate" },
  ]},
  { id: "habit", labelJa: "生活形", labelEn: "Growth form", section: "habit", options: [
    { value: "tree", labelJa: "高木", labelEn: "Tree" },
    { value: "shrub", labelJa: "低木", labelEn: "Shrub" },
    { value: "herb", labelJa: "草本", labelEn: "Herb" },
    { value: "vine", labelJa: "つる", labelEn: "Vine" },
  ]},
  { id: "deciduous", labelJa: "常緑 / 落葉", labelEn: "Evergreen / Deciduous", section: "habit", options: [
    { value: "evergreen", labelJa: "常緑", labelEn: "Evergreen" },
    { value: "deciduous", labelJa: "落葉", labelEn: "Deciduous" },
  ]},
  { id: "petalCount", labelJa: "花弁の数", labelEn: "Petal count", section: "flower", options: [
    { value: "3", labelJa: "3枚", labelEn: "3" },
    { value: "4", labelJa: "4枚", labelEn: "4" },
    { value: "5", labelJa: "5枚", labelEn: "5" },
    { value: "many", labelJa: "多数", labelEn: "Many" },
  ]},
  { id: "petalFusion", labelJa: "花弁の合着", labelEn: "Petal fusion", section: "flower", options: [
    { value: "fused", labelJa: "合弁", labelEn: "Fused" },
    { value: "free", labelJa: "離弁", labelEn: "Free" },
    { value: "none", labelJa: "花弁なし", labelEn: "No petals" },
  ]},
  { id: "flowerColor", labelJa: "花の色", labelEn: "Flower color", section: "flower", options: [
    { value: "white",  labelJa: "白",   labelEn: "White" },
    { value: "yellow", labelJa: "黄",   labelEn: "Yellow" },
    { value: "pink",   labelJa: "桃",   labelEn: "Pink" },
    { value: "red",    labelJa: "赤",   labelEn: "Red" },
    { value: "purple", labelJa: "紫",   labelEn: "Purple" },
    { value: "blue",   labelJa: "青",   labelEn: "Blue" },
    { value: "orange", labelJa: "橙",   labelEn: "Orange" },
    { value: "green",  labelJa: "緑",   labelEn: "Green" },
    { value: "brown",  labelJa: "褐",   labelEn: "Brown" },
    { value: "none",   labelJa: "花なし", labelEn: "No flowers" },
  ]},
  { id: "floweringSeason", labelJa: "開花期", labelEn: "Flowering season", section: "ecology", options: [
    { value: "spring",        labelJa: "春",    labelEn: "Spring" },
    { value: "summer",        labelJa: "夏",    labelEn: "Summer" },
    { value: "fall",          labelJa: "秋",    labelEn: "Autumn" },
    { value: "winter",        labelJa: "冬",    labelEn: "Winter" },
    { value: "spring-summer", labelJa: "春〜夏", labelEn: "Spring\u2013Summer" },
    { value: "summer-fall",   labelJa: "夏〜秋", labelEn: "Summer\u2013Autumn" },
    { value: "year-round",    labelJa: "通年",  labelEn: "Year-round" },
  ]},
  { id: "habitat", labelJa: "生育地", labelEn: "Habitat", section: "ecology", options: [
    { value: "roadside",   labelJa: "道ばた",    labelEn: "Roadside" },
    { value: "grassland",  labelJa: "草地・原野", labelEn: "Grassland" },
    { value: "mountain",   labelJa: "山地",      labelEn: "Mountain" },
    { value: "forest",     labelJa: "林内",      labelEn: "Forest" },
    { value: "wetland",    labelJa: "湿地・水辺", labelEn: "Wetland" },
    { value: "aquatic",    labelJa: "水生",      labelEn: "Aquatic" },
    { value: "coastal",    labelJa: "海岸",      labelEn: "Coastal" },
    { value: "cultivated", labelJa: "栽培",      labelEn: "Cultivated" },
  ]},
];

type ActiveFilters = Record<string, string[]>;

// ── フィルタロジック ──────────────────────────────────────────

/** 検索表対象：種子植物のみ */
const seedPlants = plants.filter((p) => seedPlantFamilyIds.includes(p.familyId));

/** 種レベルでフィルタ: traits があればそれを使い、なければ科のデフォルトにフォールバック */
function filterPlants(filters: ActiveFilters): Plant[] {
  const activeGroups = Object.entries(filters).filter(([, vals]) => vals.length > 0);
  if (activeGroups.length === 0) return seedPlants;

  return seedPlants.filter((p) => {
    const plantT = p.traits;
    const familyT = familyTraits[p.familyId];

    for (const [groupId, selectedValues] of activeGroups) {
      const key = groupId as keyof PlantTraits;
      // 種レベルの値を優先、なければ科レベルにフォールバック
      const plantVal = plantT?.[key];
      if (plantVal !== undefined) {
        if (!selectedValues.includes(String(plantVal))) return false;
      } else {
        // 科レベルのフォールバック
        const famVals = familyT?.[groupId as keyof FamilyTraits];
        if (!famVals || famVals.length === 0) continue;
        const match = (famVals as string[]).some((v) => selectedValues.includes(String(v)));
        if (!match) return false;
      }
    }
    return true;
  });
}

/** 種の結果から候補科IDを抽出 */
function extractFamilyIds(matchedPlants: Plant[]): string[] {
  return [...new Set(matchedPlants.map((p) => p.familyId))];
}

// ── トグルボタン ──────────────────────────────────────────────
function ToggleButton({
  label,
  active,
  onClick,
  icon,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all border inline-flex items-center gap-1.5 ${
        active
          ? "bg-green-600 text-white border-green-600 shadow-sm"
          : "bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:bg-green-50"
      }`}
    >
      {icon && <span className={active ? "opacity-90" : ""}>{icon}</span>}
      {label}
    </button>
  );
}

// ── メインコンポーネント ──────────────────────────────────────
interface PlantFilterProps {
  onFilterChange?: (familyIds: Set<string>) => void;
  lang?: Locale;
}

export default function PlantFilter({ onFilterChange, lang = "ja" }: PlantFilterProps) {
  const L = (ja: string, en: string) => lang === "en" ? en : ja;
  const [filters, setFilters] = useState<ActiveFilters>({});

  const toggleFilter = useCallback((groupId: string, value: string) => {
    setFilters((prev) => {
      const current = prev[groupId] ?? [];
      // ラジオボタン式: 同じ値なら解除、違う値なら切替（1つだけ選択）
      const next = current.includes(value) ? [] : [value];
      return { ...prev, [groupId]: next };
    });
  }, []);

  // 種レベルでフィルタ → 科IDを抽出
  const matchedPlants = useMemo(() => filterPlants(filters), [filters]);
  const matchedFamilyIds = useMemo(() => extractFamilyIds(matchedPlants), [matchedPlants]);

  // 親コンポーネントに通知
  const matchedSet = useMemo(() => {
    const s = new Set(matchedFamilyIds);
    onFilterChange?.(s);
    return s;
  }, [matchedFamilyIds, onFilterChange]);

  const activeCount = Object.values(filters).filter((v) => v.length > 0).length;

  const handleReset = () => setFilters({});

  // セクション別にグループ化
  const sections = [
    { key: "leaf",    label: L("葉の特徴", "Leaf Traits"),       hint: L("年間を通じて観察できます", "Observable year-round") },
    { key: "habit",   label: L("植物体", "Plant Form"),          hint: "" },
    { key: "flower",  label: L("花の特徴", "Flower Traits"),     hint: L("花が見えるときだけ", "Only when flowers are visible") },
    { key: "ecology", label: L("生態・環境", "Ecology & Habitat"), hint: "" },
  ];

  return (
    <div>
      {/* フィルタ数 + リセット */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500">
          <span className="text-2xl font-bold text-green-700">{matchedFamilyIds.length}</span>
          <span className="ml-1">{L("科", "families")}</span>
          <span className="text-lg font-bold text-green-600 ml-2">{matchedPlants.length}</span>
          <span className="ml-1">{L("種が候補", "candidate species")}</span>
          {activeCount > 0 && (
            <span className="text-gray-400 ml-2">{L(`（${activeCount} フィルタ適用中）`, `(${activeCount} filters applied)`)}</span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={handleReset}
            className="text-xs text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors"
          >
            {L("すべて解除", "Clear all")}
          </button>
        )}
      </div>

      {/* フィルタセクション */}
      {sections.map((sec) => {
        const groups = FILTER_GROUPS.filter((g) => g.section === sec.key);
        return (
          <div key={sec.key} className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {sec.label}
              </h3>
              {sec.hint && (
                <span className="text-[10px] text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
                  {sec.hint}
                </span>
              )}
            </div>
            <div className="space-y-3">
              {groups.map((group) => (
                <div key={group.id} className="flex items-start gap-3">
                  <span className="text-xs text-gray-500 w-24 flex-shrink-0 pt-1.5 text-right">
                    {lang === "en" ? group.labelEn : group.labelJa}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.options.map((opt) => (
                      <ToggleButton
                        key={opt.value}
                        label={lang === "en" ? opt.labelEn : opt.labelJa}
                        active={(filters[group.id] ?? []).includes(opt.value)}
                        onClick={() => toggleFilter(group.id, opt.value)}
                        icon={getTraitIcon(group.id, opt.value)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* 候補の種 */}
      {matchedPlants.length > 0 && matchedPlants.length <= 100 && (
        <div className="mt-6 pt-4 border-t">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
            {L(`候補の種（${matchedPlants.length}）`, `Candidate species (${matchedPlants.length})`)}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto">
            {matchedPlants.map((p) => (
              <Link
                key={p.id}
                href={`/${lang}/plants/${p.id}`}
                className="flex items-center gap-2 p-2 rounded-lg border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-medium text-gray-700 block truncate">
                    {lang === "en" && p.enName ? p.enName : p.jaName}
                  </span>
                  <span className="text-[10px] text-gray-400 block truncate">
                    {lang === "en" ? p.familyEnName ?? p.familyJaName : p.familyJaName} / <i>{p.scientificName}</i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 候補科リスト */}
      <div className="mt-6 pt-4 border-t">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
          {L(`候補の科（${matchedFamilyIds.length}）`, `Candidate families (${matchedFamilyIds.length})`)}
        </h3>
        {matchedFamilyIds.length <= 80 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto">
            {matchedFamilyIds.map((id) => {
              const family = families.find((f) => f.id === id);
              if (!family) return null;
              const plantCount = matchedPlants.filter((p) => p.familyId === id).length;
              return (
                <Link
                  key={id}
                  href={`/${lang}/families/${id}`}
                  className="flex items-center gap-2 p-2 rounded-lg border border-gray-100 hover:border-teal-300 hover:bg-teal-50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-700 truncate">
                    {lang === "en" ? family.enName : family.jaName}
                  </span>
                  {plantCount > 0 && (
                    <span className="text-[10px] bg-green-100 text-green-700 rounded-full px-1.5 flex-shrink-0">
                      {plantCount}{L("種", "spp.")}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-gray-400">
            {L(
              `フィルタを追加して絞り込んでください（現在 ${matchedFamilyIds.length} 科）`,
              `Add filters to narrow down (currently ${matchedFamilyIds.length} families)`
            )}
          </p>
        )}
      </div>
    </div>
  );
}
