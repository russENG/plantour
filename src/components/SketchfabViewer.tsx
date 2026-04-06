"use client";

import { useState } from "react";
import type { SketchfabModel } from "@/data/sketchfab";
import { sketchfabEmbedUrl, sketchfabModelUrl } from "@/data/sketchfab";

interface Props {
  model: SketchfabModel;
  plantJaName: string;
  plantEnName?: string;
  locale: "ja" | "en";
}

const matchLabels = {
  exact: { ja: "同一種", en: "Same species" },
  genus: { ja: "同属の近縁種", en: "Related species (same genus)" },
  family: { ja: "同科の近縁種", en: "Related species (same family)" },
} as const;

export default function SketchfabViewer({ model, plantJaName, plantEnName, locale }: Props) {
  const [loaded, setLoaded] = useState(false);

  const heading = locale === "ja" ? "3D 標本モデル" : "3D Specimen Model";
  const credit =
    locale === "ja"
      ? "九州大学 鹿野研究室 提供（CC0）"
      : "Kyushu University, Shikano Lab (CC0)";
  const viewOn = locale === "ja" ? "Sketchfab で見る" : "View on Sketchfab";
  const loadLabel = locale === "ja" ? "3D モデルを読み込む" : "Load 3D Model";
  const matchLabel = matchLabels[model.matchLevel][locale];

  const modelName = locale === "ja" ? model.modelJaName : model.modelEnName;

  return (
    <section className="mb-6">
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
        {heading}
      </h2>

      {model.matchLevel !== "exact" && (
        <p className="text-xs text-amber-600 mb-2">
          {locale === "ja"
            ? `※ ${plantJaName}の3Dモデルはまだ公開されていないため、${matchLabel}の ${model.modelJaName}（${model.modelScientificName}）を表示しています。`
            : `Note: No 3D model is available for ${plantEnName ?? plantJaName} yet. Showing ${matchLabel}: ${model.modelEnName} (${model.modelScientificName}).`}
        </p>
      )}

      <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-900">
        {loaded ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              title={`3D model: ${modelName}`}
              src={sketchfabEmbedUrl(model.uid)}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="w-full flex flex-col items-center justify-center gap-3 py-12 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            <span className="text-sm font-medium">{loadLabel}</span>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between mt-2">
        <p className="text-[10px] text-gray-400">{credit}</p>
        <a
          href={sketchfabModelUrl(model.uid)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-teal-600 hover:underline"
        >
          {viewOn} &rarr;
        </a>
      </div>
    </section>
  );
}
