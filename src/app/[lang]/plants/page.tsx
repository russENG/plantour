"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import type { Locale } from "@/dictionaries";

// Only surface tags that are shared by multiple plants — singletons add
// noise without helping the user filter. Sort by frequency desc so the most
// useful tags come first.
const MIN_TAG_COUNT = 2;

function rankTags(tagLists: string[][]): Array<[string, number]> {
  const counts = new Map<string, number>();
  for (const list of tagLists) {
    for (const t of list) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .filter(([, c]) => c >= MIN_TAG_COUNT)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

const allTags = rankTags(plants.map((p) => p.tags));
const allEnTags = rankTags(plants.map((p) => p.enTags ?? []));

const dict = {
  ja: {
    heading: "植物一覧",
    count: (n: number) => `${n} 種収録`,
    searchPlaceholder: "和名・学名・科名で検索...",
    filterByTag: "タグで絞り込む",
    resultCount: (n: number) => `${n} 件`,
    noResults: "該当する植物が見つかりませんでした",
    showAllTags: (n: number) => `すべてのタグを表示（+${n}）`,
    showFewerTags: "よく使うタグだけ表示",
  },
  en: {
    heading: "Plant List",
    count: (n: number) => `${n} species`,
    searchPlaceholder: "Search by name, scientific name, or family...",
    filterByTag: "Filter by tag",
    resultCount: (n: number) => `${n} results`,
    noResults: "No matching plants found",
    showAllTags: (n: number) => `Show all tags (+${n})`,
    showFewerTags: "Show common tags only",
  },
};

export default function PlantsPage() {
  const pathname = usePathname();
  const lang: Locale = pathname.startsWith("/en") ? "en" : "ja";
  const t = dict[lang];

  const tags = lang === "en" && allEnTags.length > 0 ? allEnTags : allTags;
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? tags : tags.slice(0, 30);

  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const hiddenTagCount = Math.max(0, tags.length - visibleTags.length);

  const filtered = plants.filter((p) => {
    const q = query.toLowerCase();
    const matchQuery =
      !query ||
      p.jaName.includes(query) ||
      (p.enName ?? "").toLowerCase().includes(q) ||
      p.scientificName.toLowerCase().includes(q) ||
      p.familyJaName.includes(query) ||
      (p.familyEnName ?? "").toLowerCase().includes(q);
    const matchTag = !selectedTag || p.tags.includes(selectedTag) || (p.enTags ?? []).includes(selectedTag);
    return matchQuery && matchTag;
  });

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-baseline gap-3 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{t.heading}</h1>
        <span className="text-sm text-gray-500">{t.count(plants.length)}</span>
      </div>

      {/* 検索 */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">{t.filterByTag}</option>
          {tags.map(([tag, count]) => (
            <option key={tag} value={tag}>
              {tag} ({count})
            </option>
          ))}
        </select>
      </div>

      {/* タグフィルター */}
      <div className="flex flex-wrap gap-2 mb-3">
        {visibleTags.map(([tag, count]) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors inline-flex items-center gap-1.5 ${
              selectedTag === tag
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-600 border-gray-300 hover:border-green-400"
            }`}
          >
            <span>{tag}</span>
            <span
              className={`text-[10px] ${
                selectedTag === tag ? "text-green-100" : "text-gray-400"
              }`}
            >
              {count}
            </span>
          </button>
        ))}
      </div>
      {hiddenTagCount > 0 && (
        <button
          onClick={() => setShowAllTags(true)}
          className="text-xs text-green-700 hover:underline mb-6"
        >
          {t.showAllTags(hiddenTagCount)}
        </button>
      )}
      {showAllTags && tags.length > 30 && (
        <button
          onClick={() => setShowAllTags(false)}
          className="text-xs text-gray-500 hover:underline mb-6"
        >
          {t.showFewerTags}
        </button>
      )}

      <p className="text-sm text-gray-500 mb-4">{t.resultCount(filtered.length)}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((plant) => (
          <PlantCard key={plant.id} plant={plant} lang={lang} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">{t.noResults}</p>
      )}
    </main>
  );
}
