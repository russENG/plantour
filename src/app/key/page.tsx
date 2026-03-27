"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import PlantKey from "@/components/PlantKey";
import TaxonomyListView from "@/components/TaxonomyListView";
import { taxonomyTree } from "@/data/taxonomy";
import { keyStartNodeId } from "@/data/key";
import { getReachableFamilies } from "@/data/keyUtils";

export default function KeyPage() {
  const [currentNodeId, setCurrentNodeId] = useState(keyStartNodeId);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNodeChange = useCallback((nodeId: string) => {
    setCurrentNodeId(nodeId);
  }, []);

  const activeFamilyIds = useMemo(
    () => getReachableFamilies(currentNodeId),
    [currentNodeId],
  );

  const isFiltered = currentNodeId !== keyStartNodeId;

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">植物検索表</h1>
        <p className="text-sm text-gray-500">
          設問に答えていくと候補が絞り込まれます。右側の分類ツリーもリアルタイムに連動します。
        </p>
      </div>

      <div className="lg:flex lg:gap-6">
        {/* ── 検索表（左側） ─────────────────────────────────── */}
        <div className="lg:w-3/5">
          <PlantKey onNodeChange={handleNodeChange} />

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
        {/* Desktop: 常時表示 */}
        <div className="hidden lg:block lg:w-2/5">
          <div className="sticky top-4">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 max-h-[85vh] overflow-y-auto">
              <h2 className="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                分類体系
                {isFiltered && (
                  <span className="text-xs text-gray-400 font-normal">
                    （{activeFamilyIds.size} 科が候補）
                  </span>
                )}
              </h2>
              <TaxonomyListView
                root={taxonomyTree}
                activeFamilyIds={isFiltered ? activeFamilyIds : undefined}
                compact
              />
            </div>
          </div>
        </div>

        {/* Mobile: 折りたたみパネル */}
        <div className="lg:hidden mt-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full text-sm font-medium text-gray-600 border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              分類体系を表示
              {isFiltered && (
                <span className="text-xs text-gray-400">
                  （{activeFamilyIds.size} 科が候補）
                </span>
              )}
            </span>
            <span className="text-gray-400">{sidebarOpen ? "▲" : "▼"}</span>
          </button>
          {sidebarOpen && (
            <div className="mt-2 rounded-xl border border-gray-200 bg-white shadow-sm p-4 max-h-[60vh] overflow-y-auto">
              <TaxonomyListView
                root={taxonomyTree}
                activeFamilyIds={isFiltered ? activeFamilyIds : undefined}
                compact
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
