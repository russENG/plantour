"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PlantFilter from "@/components/PlantFilter";
import TaxonomyListView from "@/components/TaxonomyListView";
import { findTaxonomyNode } from "@/data/taxonomy";
import { seedPlantFamilyIds } from "@/data/familyTraits";
import type { Locale } from "@/dictionaries";

const spermatophytaResult = findTaxonomyNode("spermatophyta");
const spermatophytaNode = spermatophytaResult?.node ?? null;

const dict = {
  ja: {
    heading: "植物検索表",
    description: "葉や植物体の特徴でフィルタを切り替えて、候補の科を絞り込みます。",
    scopeNote: "※ 現在は種子植物（裸子植物＋被子植物）のみ対応しています。コケ植物・シダ植物は対象外です。",
    sidebarHeading: "種子植物の分類",
    filterCount: (n: number) => `（${n} 科が候補）`,
    mobileShowSidebar: "種子植物の分類を表示",
    taxonomyLink: "← 分類体系ツリーで探す",
  },
  en: {
    heading: "Plant Identification Key",
    description: "Toggle filters based on leaf and plant characteristics to narrow down candidate families.",
    scopeNote: "* Currently supports seed plants (gymnosperms + angiosperms) only. Mosses and ferns are not covered.",
    sidebarHeading: "Seed Plant Classification",
    filterCount: (n: number) => `(${n} candidate families)`,
    mobileShowSidebar: "Show seed plant classification",
    taxonomyLink: "\u2190 Explore taxonomy tree",
  },
};

export default function KeyPage() {
  const pathname = usePathname();
  const lang: Locale = pathname.startsWith("/en") ? "en" : "ja";
  const t = dict[lang];

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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.heading}</h1>
        <p className="text-sm text-gray-500">{t.description}</p>
        <p className="text-xs text-gray-400 mt-1">{t.scopeNote}</p>
      </div>

      <div className="lg:flex lg:gap-6">
        <div className="lg:w-3/5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <PlantFilter onFilterChange={handleFilterChange} lang={lang} />
          </div>

          <div className="mt-6">
            <Link
              href={`/${lang}/taxonomy`}
              className="text-sm text-gray-500 hover:text-green-700 transition-colors"
            >
              {t.taxonomyLink}
            </Link>
          </div>
        </div>

        <div className="hidden lg:block lg:w-2/5">
          <div className="sticky top-4">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 max-h-[85vh] overflow-y-auto">
              <h2 className="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                {t.sidebarHeading}
                {isFiltered && (
                  <span className="text-xs text-gray-400 font-normal">
                    {t.filterCount(activeFamilyIds.size)}
                  </span>
                )}
              </h2>
              {spermatophytaNode ? (
                <TaxonomyListView
                  root={spermatophytaNode}
                  activeFamilyIds={isFiltered ? activeFamilyIds : undefined}
                  compact
                  lang={lang}
                />
              ) : (
                <p className="text-xs text-gray-400">-</p>
              )}
            </div>
          </div>
        </div>

        <MobileSidebar activeFamilyIds={activeFamilyIds} isFiltered={isFiltered} lang={lang} t={t} />
      </div>
    </main>
  );
}

function MobileSidebar({
  activeFamilyIds,
  isFiltered,
  lang,
  t,
}: {
  activeFamilyIds: Set<string>;
  isFiltered: boolean;
  lang: Locale;
  t: typeof dict.ja;
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
          {t.mobileShowSidebar}
          {isFiltered && (
            <span className="text-xs text-gray-400">{t.filterCount(activeFamilyIds.size)}</span>
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
            lang={lang}
          />
        </div>
      )}
    </div>
  );
}
