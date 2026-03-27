"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import PlantFilter from "@/components/PlantFilter";
import TaxonomyListView from "@/components/TaxonomyListView";
import { findTaxonomyNode } from "@/data/taxonomy";
import { seedPlantFamilyIds } from "@/data/familyTraits";

// 種子植物ノードをサイドバーのルートにする
const spermatophytaResult = findTaxonomyNode("spermatophyta");
const spermatophytaNode = spermatophytaResult?.node ?? null;

export default function KeyPage() {
  const [activeFamilyIds, setActiveFamilyIds] = useState<Set<string>>(
    () => new Set(seedPlantFamilyIds),
  );

  const handleFilterChange = useCallback((ids: Set<string>) => {
    setActiveFamilyIds(ids);
  }, []);

  const isFiltered = activeFamilyIds.size < seedPlantFamilyIds.length;

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">植物検索表</h1>
        <p className="text-sm text-gray-500">
          葉や植物体の特徴でフィルタを切り替えて、候補の科を絞り込みます。
        </p>
        <p className="text-xs text-gray-400 mt-1">
          ※ 現在は種子植物（裸子植物＋被子植物）のみ対応しています。コケ植物・シダ植物は対象外です。
        </p>
      </div>

      <div className="lg:flex lg:gap-6">
        {/* ── フィルタ（左側） ─────────────────────────────────── */}
        <div className="lg:w-3/5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <PlantFilter onFilterChange={handleFilterChange} />
          </div>

          <div className="mt-6">
            <Link
              href="/taxonomy"
              className="text-sm text-gray-500 hover:text-green-700 transition-colors"
            >
              ← 分類体系ツリーで探す
            </Link>
          </div>
        </div>

        {/* ── 分類ツリーサイドバー（右側） ─────────────────────── */}
        <div className="hidden lg:block lg:w-2/5">
          <div className="sticky top-4">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 max-h-[85vh] overflow-y-auto">
              <h2 className="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                種子植物の分類
                {isFiltered && (
                  <span className="text-xs text-gray-400 font-normal">
                    （{activeFamilyIds.size} 科が候補）
                  </span>
                )}
              </h2>
              {spermatophytaNode ? (
                <TaxonomyListView
                  root={spermatophytaNode}
                  activeFamilyIds={isFiltered ? activeFamilyIds : undefined}
                  compact
                />
              ) : (
                <p className="text-xs text-gray-400">分類データを読み込めません</p>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: 折りたたみ */}
        <MobileSidebar activeFamilyIds={activeFamilyIds} isFiltered={isFiltered} />
      </div>
    </main>
  );
}

function MobileSidebar({
  activeFamilyIds,
  isFiltered,
}: {
  activeFamilyIds: Set<string>;
  isFiltered: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-sm font-medium text-gray-600 border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          種子植物の分類を表示
          {isFiltered && (
            <span className="text-xs text-gray-400">（{activeFamilyIds.size} 科が候補）</span>
          )}
        </span>
        <span className="text-gray-400">{open ? "▲" : "▼"}</span>
      </button>
      {open && spermatophytaNode && (
        <div className="mt-2 rounded-xl border border-gray-200 bg-white shadow-sm p-4 max-h-[60vh] overflow-y-auto">
          <TaxonomyListView
            root={spermatophytaNode}
            activeFamilyIds={isFiltered ? activeFamilyIds : undefined}
            compact
          />
        </div>
      )}
    </div>
  );
}
