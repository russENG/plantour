"use client";
import { useState } from "react";
import { plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";

const allTags = Array.from(new Set(plants.flatMap((p) => p.tags))).sort();

export default function PlantsPage() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filtered = plants.filter((p) => {
    const matchQuery =
      !query ||
      p.jaName.includes(query) ||
      p.scientificName.toLowerCase().includes(query.toLowerCase()) ||
      p.familyJaName.includes(query);
    const matchTag = !selectedTag || p.tags.includes(selectedTag);
    return matchQuery && matchTag;
  });

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">植物一覧</h1>

      {/* 検索 */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="和名・学名・科名で検索..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">タグで絞り込む</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* タグフィルター */}
      <div className="flex flex-wrap gap-2 mb-6">
        {allTags.map((tag) => (
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

      <p className="text-sm text-gray-500 mb-4">{filtered.length} 件</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">該当する植物が見つかりませんでした</p>
      )}
    </main>
  );
}
