"use client";

import { useState, Suspense } from "react";
import TaxonomyTree from "@/components/TaxonomyTree";
import TaxonomyListView from "@/components/TaxonomyListView";
import type { TaxonomyNode } from "@/data/types";
import type { Locale } from "@/dictionaries";

type View = "tree" | "list";

export default function TaxonomyViewSwitcher({ data, lang = "ja" }: { data: TaxonomyNode; lang?: Locale }) {
  const [view, setView] = useState<View>("tree");

  return (
    <div>
      {/* トグル */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded-xl p-1 w-fit">
        <button
          onClick={() => setView("tree")}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
            view === "tree"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {lang === "en" ? "Tree" : "樹形図"}
        </button>
        <button
          onClick={() => setView("list")}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
            view === "list"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {lang === "en" ? "List" : "階層リスト"}
        </button>
      </div>

      {/* 表示 */}
      {view === "tree" ? (
        <Suspense fallback={<div className="text-sm text-gray-400 text-center py-16">{lang === "en" ? "Loading\u2026" : "読み込み中…"}</div>}>
          <TaxonomyTree data={data} lang={lang} />
        </Suspense>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 max-h-[75vh] overflow-y-auto">
          <TaxonomyListView root={data} lang={lang} />
        </div>
      )}
    </div>
  );
}
