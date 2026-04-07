"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import { plants } from "@/data/plants";
import { families } from "@/data/families";
import PlantFilter from "@/components/PlantFilter";
import PlantImage from "@/components/PlantImage";
import { sketchfabModels } from "@/data/sketchfab";
import type { Plant } from "@/data/types";
import type { Locale } from "@/dictionaries";
import { plantName, plantFamilyName } from "@/lib/i18n-helpers";

type QuizMode = "images" | "3d";

// Only seed plants with images (matching key page scope)
const quizPlants = plants.filter(
  (p) => p.imageUrl && p.traits && Object.keys(p.traits).length > 0,
);

// Plants with an exact-match Sketchfab 3D model and traits (for 3D quiz mode).
// Non-exact matches would reveal a different species name and mislead players.
const quizPlants3d = plants.filter(
  (p) =>
    p.traits &&
    Object.keys(p.traits).length > 0 &&
    sketchfabModels[p.id]?.matchLevel === "exact",
);

function pickRandom(mode: QuizMode): Plant {
  const pool = mode === "3d" ? quizPlants3d : quizPlants;
  return pool[Math.floor(Math.random() * pool.length)];
}

/** Sketchfab embed URL with model info hidden (for quiz — must not reveal species name). */
function quizSketchfabEmbedUrl(uid: string): string {
  return `https://sketchfab.com/models/${uid}/embed?autostart=1&ui_theme=dark&transparent=1&ui_infos=0&ui_watermark=0&ui_annotations=0&ui_inspector=0&ui_help=0&ui_settings=0&ui_vr=0&ui_hint=0`;
}

/** Fetch additional images from Wikimedia Commons category for a species */
async function fetchCommonsImages(scientificName: string): Promise<string[]> {
  try {
    // Try category first: "Category:Taraxacum officinale"
    const catTitle = `Category:${scientificName}`;
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmlimit=8&gcmtitle=${encodeURIComponent(catTitle)}&prop=imageinfo&iiprop=url&iiurlwidth=600&format=json&origin=*`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return [];
    return Object.values(pages)
      .map((p: any) => p.imageinfo?.[0]?.thumburl)
      .filter((u: any): u is string => !!u && !u.includes(".svg"));
  } catch {
    return [];
  }
}

const dict = {
  ja: {
    heading: "植物クイズ",
    description:
      "写真の植物を、検索表のフィルタを使って特定してください。候補を絞り込んだら、種を選んで回答しましょう。",
    howToPlay: "遊び方",
    howToPlayText:
      "このクイズは検索表（植物同定キー）の使い方を練習するためのものです。写真の植物を観察し、葉の形・花の色・生育環境などのフィルタを切り替えて候補を絞り込みます。候補が十分に絞れたら、リストから正しい種を選んで回答してください。",
    start: "クイズを始める",
    nextQuestion: "次の問題",
    correct: "正解！",
    incorrect: "不正解…",
    correctAnswer: (name: string) => `正解は ${name} でした`,
    score: (c: number, t: number) => `スコア: ${c} / ${t}`,
    identifyThis: "この植物は？",
    viewPlant: "この植物のページを見る →",
    giveUp: "ギブアップ（答えを見る）",
    candidateSpecies: (n: number) => `候補の種（${n}）— 種を選んで回答`,
    narrow: "フィルタで候補を絞り込んでから、種を選んで回答してください。",
    skipPlant: "この植物をスキップ",
    photos: "写真",
    loadingImages: "画像を読み込み中…",
    chooseMode: "出題形式を選択",
    modeImages: "写真で識別",
    modeImagesDesc: "Wikimedia Commons の複数枚の写真を見て同定します",
    mode3d: "3D モデルで識別",
    mode3dDesc: "九州大学の3D標本モデルを回転・拡大しながら同定します",
    viewImages: "写真",
    view3d: "3D モデル",
    no3d: "この種の3Dモデルは利用できません",
  },
  en: {
    heading: "Plant Quiz",
    description:
      "Identify the plant in the photo using the identification key filters. Narrow down the candidates, then select a species to answer.",
    howToPlay: "How to play",
    howToPlayText:
      "This quiz helps you practice using the plant identification key. Observe the plant in the photos, then toggle filters for leaf shape, flower color, habitat, etc. to narrow down candidates. Once you have a short list, select the correct species to answer.",
    start: "Start Quiz",
    nextQuestion: "Next Question",
    correct: "Correct!",
    incorrect: "Incorrect\u2026",
    correctAnswer: (name: string) => `The answer was ${name}`,
    score: (c: number, t: number) => `Score: ${c} / ${t}`,
    identifyThis: "What plant is this?",
    viewPlant: "View this plant\u2019s page \u2192",
    giveUp: "Give up (show answer)",
    candidateSpecies: (n: number) => `Candidate species (${n}) \u2014 select to answer`,
    narrow: "Use the filters to narrow down candidates, then select a species to answer.",
    skipPlant: "Skip this plant",
    photos: "Photos",
    loadingImages: "Loading images\u2026",
    chooseMode: "Choose quiz format",
    modeImages: "Identify by photos",
    modeImagesDesc: "Examine multiple photos from Wikimedia Commons",
    mode3d: "Identify by 3D model",
    mode3dDesc: "Rotate and zoom 3D specimen models from Kyushu University",
    viewImages: "Photos",
    view3d: "3D Model",
    no3d: "No 3D model is available for this species",
  },
};

type Result = "correct" | "incorrect" | null;

export default function QuizGame({ lang = "ja" }: { lang?: Locale }) {
  const t = dict[lang];

  const [quizMode, setQuizMode] = useState<QuizMode>("images");
  const [viewMode, setViewMode] = useState<QuizMode>("images");
  const [targetPlant, setTargetPlant] = useState<Plant | null>(null);
  const [result, setResult] = useState<Result>(null);
  const [chosenPlant, setChosenPlant] = useState<Plant | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [activeFamilyIds, setActiveFamilyIds] = useState<Set<string>>(new Set());
  const [filterKey, setFilterKey] = useState(0);
  const [showHowTo, setShowHowTo] = useState(false);

  // Multiple images from Wikimedia Commons
  const [extraImages, setExtraImages] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  // Fetch extra images when target plant changes
  useEffect(() => {
    if (!targetPlant) return;
    setExtraImages([]);
    setSelectedImageIdx(0);
    setLoadingImages(true);
    let cancelled = false;
    fetchCommonsImages(targetPlant.scientificName).then((urls) => {
      if (cancelled) return;
      setExtraImages(urls);
      setLoadingImages(false);
    });
    return () => { cancelled = true; };
  }, [targetPlant]);

  // All available images: original + extras (deduplicated)
  const allImages = useMemo(() => {
    if (!targetPlant?.imageUrl) return extraImages;
    const original = targetPlant.imageUrl.includes("Special:FilePath/")
      ? `${targetPlant.imageUrl}?width=600`
      : targetPlant.imageUrl;
    // Deduplicate by checking if the original filename appears in extras
    const origFile = targetPlant.imageUrl.split("/").pop()?.split("?")[0] ?? "";
    const filtered = extraImages.filter((u) => !u.includes(origFile));
    return [original, ...filtered];
  }, [targetPlant, extraImages]);

  const startNewRound = useCallback(
    (mode?: QuizMode) => {
      const m = mode ?? quizMode;
      setQuizMode(m);
      setViewMode(m);
      setTargetPlant(pickRandom(m));
      setResult(null);
      setChosenPlant(null);
      setFilterKey((k) => k + 1);
    },
    [quizMode],
  );

  // Sketchfab model for the current target (if any)
  const sketchfabModel = targetPlant ? sketchfabModels[targetPlant.id] : undefined;
  const has3dForCurrent = sketchfabModel?.matchLevel === "exact";

  const handleFilterChange = useCallback((ids: Set<string>) => {
    setActiveFamilyIds(ids);
  }, []);

  const handleAnswer = useCallback(
    (plant: Plant) => {
      if (!targetPlant || result) return;
      const isCorrect = plant.id === targetPlant.id;
      setChosenPlant(plant);
      setResult(isCorrect ? "correct" : "incorrect");
      setScore((s) => ({
        correct: s.correct + (isCorrect ? 1 : 0),
        total: s.total + 1,
      }));
    },
    [targetPlant, result],
  );

  const handleGiveUp = useCallback(() => {
    if (!targetPlant || result) return;
    setChosenPlant(null);
    setResult("incorrect");
    setScore((s) => ({ ...s, total: s.total + 1 }));
  }, [targetPlant, result]);

  const candidatePlants = useMemo(() => {
    if (activeFamilyIds.size === 0) return [];
    return quizPlants.filter((p) => activeFamilyIds.has(p.familyId));
  }, [activeFamilyIds]);

  // Not started
  if (!targetPlant) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">🌿</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{t.heading}</h2>
        <p className="text-gray-500 mb-4 max-w-md mx-auto">{t.description}</p>

        {/* How to play */}
        <div className="max-w-lg mx-auto mb-8">
          <button
            onClick={() => setShowHowTo(!showHowTo)}
            className="text-sm text-blue-500 hover:text-blue-700 transition-colors"
          >
            {showHowTo ? "▲" : "▼"} {t.howToPlay}
          </button>
          {showHowTo && (
            <div className="mt-3 bg-blue-50 rounded-xl p-4 text-sm text-gray-600 text-left">
              {t.howToPlayText}
            </div>
          )}
        </div>

        {/* Mode selection */}
        <div className="max-w-lg mx-auto mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
            {t.chooseMode}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => setQuizMode("images")}
              className={`p-4 rounded-xl border-2 text-left transition-colors ${
                quizMode === "images"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-2xl mb-1">📷</div>
              <div className="font-bold text-sm text-gray-800">{t.modeImages}</div>
              <div className="text-[11px] text-gray-500 mt-1">{t.modeImagesDesc}</div>
            </button>
            <button
              onClick={() => setQuizMode("3d")}
              className={`p-4 rounded-xl border-2 text-left transition-colors ${
                quizMode === "3d"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="text-2xl mb-1">🧊</div>
              <div className="font-bold text-sm text-gray-800">{t.mode3d}</div>
              <div className="text-[11px] text-gray-500 mt-1">{t.mode3dDesc}</div>
            </button>
          </div>
        </div>

        <button
          onClick={() => startNewRound()}
          className="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-md"
        >
          {t.start}
        </button>
        {score.total > 0 && (
          <p className="text-sm text-gray-400 mt-4">
            {t.score(score.correct, score.total)}
          </p>
        )}
      </div>
    );
  }

  const name = plantName(targetPlant, lang);
  const famName = plantFamilyName(targetPlant, lang);

  return (
    <div>
      {/* Score bar */}
      {score.total > 0 && (
        <div className="text-right text-sm text-gray-400 mb-2">
          {t.score(score.correct, score.total)}
        </div>
      )}

      {/* View toggle (only when 3D model is also available) */}
      {has3dForCurrent && (
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => setViewMode("images")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors ${
              viewMode === "images"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-600 border-gray-300 hover:border-green-400"
            }`}
          >
            📷 {t.viewImages}
          </button>
          <button
            onClick={() => setViewMode("3d")}
            className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors ${
              viewMode === "3d"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-600 border-gray-300 hover:border-green-400"
            }`}
          >
            🧊 {t.view3d}
          </button>
        </div>
      )}

      {/* 3D model viewer */}
      {viewMode === "3d" && sketchfabModel && (
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mb-4 bg-gray-900">
          <div className="relative w-full" style={{ paddingBottom: "75%" }}>
            <iframe
              key={sketchfabModel.uid}
              title={t.identifyThis}
              src={quizSketchfabEmbedUrl(sketchfabModel.uid)}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
            />
            {/* Full-width opaque top bar — masks Sketchfab's title/link overlay
                that slides in on hover or interaction. Doubles as the quiz label. */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gray-900 flex items-center justify-center px-3 z-10 border-b border-gray-700">
              <span className="text-white text-sm font-bold">
                {t.identifyThis}
              </span>
            </div>
            {/* Full-width opaque bottom bar — masks Sketchfab's title/author/watermark
                strip that appears centered along the bottom and reveals the species name. */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gray-900 z-10 border-t border-gray-700" />
          </div>
        </div>
      )}

      {/* Plant image gallery */}
      {viewMode === "images" && (
      <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mb-4">
        {/* Main image */}
        <div className="h-56 sm:h-72 relative bg-gray-100">
          {allImages.length > 0 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={allImages[selectedImageIdx] ?? allImages[0]}
              alt={t.identifyThis}
              className="object-cover w-full h-full"
              onError={(e) => {
                // Skip broken image
                const next = (selectedImageIdx + 1) % allImages.length;
                if (next !== selectedImageIdx) setSelectedImageIdx(next);
              }}
            />
          ) : (
            <PlantImage
              src={targetPlant.imageUrl}
              alt={t.identifyThis}
              className="h-56 sm:h-72"
              fallbackClassName="h-56 sm:h-72 text-7xl"
              fallbackEmoji="🌿"
              width={600}
            />
          )}
          <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full">
            {t.identifyThis}
          </div>
          {allImages.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {selectedImageIdx + 1} / {allImages.length}
            </div>
          )}
        </div>

        {/* Thumbnail strip */}
        {allImages.length > 1 && (
          <div className="flex gap-1 p-2 bg-gray-50 overflow-x-auto">
            {allImages.map((url, i) => (
              <button
                key={i}
                onClick={() => setSelectedImageIdx(i)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                  i === selectedImageIdx
                    ? "border-green-500"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`${t.photos} ${i + 1}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </button>
            ))}
            {loadingImages && (
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-[10px] text-gray-400">...</span>
              </div>
            )}
          </div>
        )}
      </div>
      )}

      {/* Result display */}
      {result && (
        <div
          className={`rounded-xl p-5 mb-6 border ${
            result === "correct"
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">
              {result === "correct" ? "🎉" : "😢"}
            </span>
            <div>
              <p
                className={`font-bold text-lg ${
                  result === "correct" ? "text-green-700" : "text-red-700"
                }`}
              >
                {result === "correct" ? t.correct : t.incorrect}
              </p>
              {result === "incorrect" && (
                <p className="text-sm text-gray-600">
                  {t.correctAnswer(name)}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 mb-4">
            <p className="font-bold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500 italic">
              {targetPlant.scientificName}
            </p>
            <p className="text-xs text-green-600 mt-1">{famName}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => startNewRound()}
              className="px-6 py-2.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
            >
              {t.nextQuestion}
            </button>
            <Link
              href={`/${lang}/plants/${targetPlant.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              {t.viewPlant}
            </Link>
          </div>
        </div>
      )}

      {/* Identification key (PlantFilter) */}
      {!result && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-4">
          <PlantFilter
            key={filterKey}
            onFilterChange={handleFilterChange}
            lang={lang}
          />

          {/* Candidate species - clickable answer buttons */}
          {candidatePlants.length > 0 && candidatePlants.length <= 50 && (
            <div className="mt-6 pt-4 border-t border-dashed border-green-300">
              <h3 className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">
                {t.candidateSpecies(candidatePlants.length)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                {candidatePlants.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleAnswer(p)}
                    className="flex items-center gap-2 p-2 rounded-lg border border-green-200 hover:border-green-500 hover:bg-green-50 transition-colors text-left"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs font-medium text-gray-700 block truncate">
                        {lang === "en" && p.enName ? p.enName : p.jaName}
                      </span>
                      <span className="text-[10px] text-gray-400 block truncate">
                        {lang === "en"
                          ? p.familyEnName ?? p.familyJaName
                          : p.familyJaName}{" "}
                        / <i>{p.scientificName}</i>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {candidatePlants.length > 50 && (
            <p className="mt-4 text-xs text-gray-400">{t.narrow}</p>
          )}
        </div>
      )}

      {/* Give up / Skip */}
      {!result && (
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGiveUp}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            {t.giveUp}
          </button>
          <button
            onClick={() => startNewRound()}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            {t.skipPlant}
          </button>
        </div>
      )}
    </div>
  );
}
