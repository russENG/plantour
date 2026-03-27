"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { familyTraits, seedPlantFamilyIds, type FamilyTraits } from "@/data/familyTraits";
import { families } from "@/data/families";

// ── フィルタグループ定義 ──────────────────────────────────────
interface FilterOption {
  value: string;
  label: string;
}
interface FilterGroup {
  id: keyof FamilyTraits;
  label: string;
  section: "leaf" | "habit" | "flower";
  options: FilterOption[];
}

const FILTER_GROUPS: FilterGroup[] = [
  // 葉の特徴
  { id: "leafArr", label: "葉序（葉のつき方）", section: "leaf", options: [
    { value: "alt", label: "互生" },
    { value: "opp", label: "対生" },
    { value: "whor", label: "輪生" },
  ]},
  { id: "leafType", label: "葉の型", section: "leaf", options: [
    { value: "simple", label: "単葉" },
    { value: "compound", label: "複葉" },
  ]},
  { id: "venation", label: "葉脈", section: "leaf", options: [
    { value: "parallel", label: "平行脈" },
    { value: "reticulate", label: "網状脈" },
  ]},
  { id: "margin", label: "葉の縁", section: "leaf", options: [
    { value: "entire", label: "全縁" },
    { value: "serrate", label: "鋸歯縁" },
    { value: "lobed", label: "裂片状" },
  ]},
  { id: "shape", label: "葉の形", section: "leaf", options: [
    { value: "linear", label: "線形" },
    { value: "ovate", label: "卵形" },
    { value: "cordate", label: "心形" },
    { value: "needle", label: "針形" },
    { value: "round", label: "円形" },
    { value: "palmate", label: "掌状" },
  ]},
  // 植物体
  { id: "habit", label: "生活形", section: "habit", options: [
    { value: "tree", label: "高木" },
    { value: "shrub", label: "低木" },
    { value: "herb", label: "草本" },
    { value: "vine", label: "つる" },
  ]},
  { id: "deciduous", label: "常緑 / 落葉", section: "habit", options: [
    { value: "evergreen", label: "常緑" },
    { value: "deciduous", label: "落葉" },
  ]},
  // 花（見えるとき）
  { id: "petalCount", label: "花弁の数", section: "flower", options: [
    { value: "3", label: "3枚" },
    { value: "4", label: "4枚" },
    { value: "5", label: "5枚" },
    { value: "many", label: "多数" },
  ]},
  { id: "petalFusion", label: "花弁の合着", section: "flower", options: [
    { value: "fused", label: "合弁" },
    { value: "free", label: "離弁" },
    { value: "none", label: "花弁なし" },
  ]},
];

type ActiveFilters = Record<string, string[]>;

// ── フィルタロジック ──────────────────────────────────────────
function filterFamilies(filters: ActiveFilters): string[] {
  const activeGroups = Object.entries(filters).filter(([, vals]) => vals.length > 0);
  if (activeGroups.length === 0) return seedPlantFamilyIds;

  return seedPlantFamilyIds.filter((id) => {
    const traits = familyTraits[id];
    if (!traits) return true; // データ未登録はスルー
    for (const [groupId, selectedValues] of activeGroups) {
      const traitValues = traits[groupId as keyof FamilyTraits];
      if (!traitValues || traitValues.length === 0) continue; // trait未定義ならスキップ
      // グループ内OR: 科のtraitに選択値のどれかが含まれるか
      const match = (traitValues as string[]).some((v) => selectedValues.includes(String(v)));
      if (!match) return false;
    }
    return true;
  });
}

// ── トグルボタン ──────────────────────────────────────────────
function ToggleButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all border ${
        active
          ? "bg-green-600 text-white border-green-600 shadow-sm"
          : "bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:bg-green-50"
      }`}
    >
      {label}
    </button>
  );
}

// ── メインコンポーネント ──────────────────────────────────────
interface PlantFilterProps {
  onFilterChange?: (familyIds: Set<string>) => void;
}

export default function PlantFilter({ onFilterChange }: PlantFilterProps) {
  const [filters, setFilters] = useState<ActiveFilters>({});

  const toggleFilter = useCallback((groupId: string, value: string) => {
    setFilters((prev) => {
      const current = prev[groupId] ?? [];
      // ラジオボタン式: 同じ値なら解除、違う値なら切替（1つだけ選択）
      const next = current.includes(value) ? [] : [value];
      return { ...prev, [groupId]: next };
    });
  }, []);

  const matchedIds = useMemo(() => filterFamilies(filters), [filters]);

  // 親コンポーネントに通知
  const matchedSet = useMemo(() => {
    const s = new Set(matchedIds);
    onFilterChange?.(s);
    return s;
  }, [matchedIds, onFilterChange]);

  const activeCount = Object.values(filters).filter((v) => v.length > 0).length;

  const handleReset = () => setFilters({});

  // セクション別にグループ化
  const sections = [
    { key: "leaf", label: "葉の特徴", hint: "年間を通じて観察できます" },
    { key: "habit", label: "植物体", hint: "" },
    { key: "flower", label: "花の特徴", hint: "花が見えるときだけ" },
  ];

  return (
    <div>
      {/* フィルタ数 + リセット */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500">
          <span className="text-2xl font-bold text-green-700">{matchedIds.length}</span>
          <span className="ml-1">科が候補</span>
          {activeCount > 0 && (
            <span className="text-gray-400 ml-2">（{activeCount} フィルタ適用中）</span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={handleReset}
            className="text-xs text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors"
          >
            すべて解除
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
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.options.map((opt) => (
                      <ToggleButton
                        key={opt.value}
                        label={opt.label}
                        active={(filters[group.id] ?? []).includes(opt.value)}
                        onClick={() => toggleFilter(group.id, opt.value)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* 候補科リスト */}
      <div className="mt-6 pt-4 border-t">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
          候補の科（{matchedIds.length}）
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto">
          {matchedIds.slice(0, 50).map((id) => {
            const family = families.find((f) => f.id === id);
            if (!family) return null;
            return (
              <Link
                key={id}
                href={`/families/${id}`}
                className="flex items-center gap-2 p-2 rounded-lg border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-700 truncate">{family.jaName}</span>
                <span className="text-[10px] text-gray-400 italic truncate">{family.scientificName}</span>
              </Link>
            );
          })}
          {matchedIds.length > 50 && (
            <div className="col-span-full text-xs text-gray-400 text-center py-2">
              他 {matchedIds.length - 50} 科...フィルタを追加して絞り込んでください
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
