"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import type { Locale } from "@/dictionaries";

const allTags = Array.from(new Set(plants.flatMap((p) => p.tags))).sort();
const allEnTags = Array.from(new Set(plants.flatMap((p) => p.enTags ?? []))).sort();

const dict = {
  ja: {
    heading: "植物一覧",
    count: (n: number) => `${n} 種収録`,
    searchPlaceholder: "和名・学名・科名で検索...",
    filterByTag: "タグで絞り込む",
    resultCount: (n: number) => `${n} 件`,
    noResults: "該当する植物が見つかりませんでした",
  },
  en: {
    heading: "Plant List",
    count: (n: number) => `${n} species`,
    searchPlaceholder: "Search by name, scientific name, or family...",
    filterByTag: "Filter by tag",
    resultCount: (n: number) => `${n} results`,
    noResults: "No matching plants found",
  },
};

export default function PlantsPage() {
  const pathname = usePathname();
  const lang: Locale = pathname.startsWith("/en") ? "en" : "ja";
  const t = dict[lang];

  const tags = lang === "en" && allEnTags.length > 0 ? allEnTags : allTags;

  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

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
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* タグフィルター */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              selectedTag === tag
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-600 border-gray-300 hover:border-green-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

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
