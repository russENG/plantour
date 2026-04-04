"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { plants } from "@/data/plants";
import { families } from "@/data/families";
import { keyNodes, keyStartNodeId } from "@/data/key";
import PlantImage from "@/components/PlantImage";
import type { Plant, KeyOption } from "@/data/types";
import type { Locale } from "@/dictionaries";
import { keyQuestion, keyHint, keyOptionLabel, plantName, plantFamilyName } from "@/lib/i18n-helpers";

// Only plants with images
const quizPlants = plants.filter((p) => p.imageUrl);

interface QuizState {
  plant: Plant;
  currentNodeId: string;
  history: Array<{ nodeId: string; chosenOptionId: string }>;
  result: "correct" | "incorrect" | null;
}

function pickRandom(): Plant {
  return quizPlants[Math.floor(Math.random() * quizPlants.length)];
}

/** Check if a terminal option's result families contain the plant's family */
function checkAnswer(option: KeyOption, plant: Plant): "correct" | "incorrect" {
  if (option.resultPlantIds?.includes(plant.id)) return "correct";
  if (option.resultFamilyIds?.includes(plant.familyId)) return "correct";
  return "incorrect";
}

const dict = {
  ja: {
    heading: "植物クイズ",
    description: "写真の植物を、検索表の質問に答えて特定してください。",
    start: "クイズを始める",
    nextQuestion: "次の問題",
    correct: "正解！",
    incorrect: "不正解…",
    correctAnswer: (name: string) => `正解は ${name} でした`,
    score: (c: number, t: number) => `スコア: ${c} / ${t}`,
    showHint: "ヒントを見る",
    identifyThis: "この植物は？",
    back: "前に戻る",
    restart: "最初からやり直す",
    viewPlant: "この植物のページを見る →",
    family: "科",
    step: (n: number) => `ステップ ${n}`,
  },
  en: {
    heading: "Plant Quiz",
    description: "Identify the plant in the photo by answering identification key questions.",
    start: "Start Quiz",
    nextQuestion: "Next Question",
    correct: "Correct!",
    incorrect: "Incorrect\u2026",
    correctAnswer: (name: string) => `The answer was ${name}`,
    score: (c: number, t: number) => `Score: ${c} / ${t}`,
    showHint: "Show hint",
    identifyThis: "What plant is this?",
    back: "Go back",
    restart: "Start over",
    viewPlant: "View this plant\u2019s page \u2192",
    family: "family",
    step: (n: number) => `Step ${n}`,
  },
};

export default function QuizGame({ lang = "ja" }: { lang?: Locale }) {
  const t = dict[lang];

  const [state, setState] = useState<QuizState | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showHint, setShowHint] = useState(false);

  const startNewRound = useCallback(() => {
    setState({
      plant: pickRandom(),
      currentNodeId: keyStartNodeId,
      history: [],
      result: null,
    });
    setShowHint(false);
  }, []);

  const handleOptionClick = useCallback((option: KeyOption) => {
    setState((prev) => {
      if (!prev || prev.result) return prev;

      // Terminal node — check answer
      if (option.resultFamilyIds || option.resultPlantIds) {
        const result = checkAnswer(option, prev.plant);
        setScore((s) => ({
          correct: s.correct + (result === "correct" ? 1 : 0),
          total: s.total + 1,
        }));
        return {
          ...prev,
          history: [...prev.history, { nodeId: prev.currentNodeId, chosenOptionId: option.id }],
          result,
        };
      }

      // Navigate to next node
      if (option.nextNodeId) {
        return {
          ...prev,
          currentNodeId: option.nextNodeId,
          history: [...prev.history, { nodeId: prev.currentNodeId, chosenOptionId: option.id }],
        };
      }

      return prev;
    });
    setShowHint(false);
  }, []);

  const handleBack = useCallback(() => {
    setState((prev) => {
      if (!prev || prev.history.length === 0) return prev;
      const newHistory = prev.history.slice(0, -1);
      const prevNodeId = newHistory.length > 0
        ? prev.history[prev.history.length - 2]?.nodeId
        : keyStartNodeId;
      // If the last entry was the question node, go back to it
      const lastEntry = prev.history[prev.history.length - 1];
      return {
        ...prev,
        currentNodeId: lastEntry.nodeId,
        history: newHistory,
        result: null,
      };
    });
    setShowHint(false);
  }, []);

  const currentNode = state ? keyNodes[state.currentNodeId] : null;

  // Lookup the correct family name
  const correctFamilyName = useMemo(() => {
    if (!state) return "";
    const family = families.find((f) => f.id === state.plant.familyId);
    return family ? (lang === "en" ? family.enName : family.jaName) : "";
  }, [state, lang]);

  // Not started
  if (!state) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">🌿</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{t.heading}</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">{t.description}</p>
        <button
          onClick={startNewRound}
          className="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-md"
        >
          {t.start}
        </button>
        {score.total > 0 && (
          <p className="text-sm text-gray-400 mt-4">{t.score(score.correct, score.total)}</p>
        )}
      </div>
    );
  }

  const name = plantName(state.plant, lang);
  const famName = plantFamilyName(state.plant, lang);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Score bar */}
      {score.total > 0 && (
        <div className="text-right text-sm text-gray-400 mb-2">
          {t.score(score.correct, score.total)}
        </div>
      )}

      {/* Plant image */}
      <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mb-6">
        <div className="h-56 sm:h-72">
          <PlantImage
            src={state.plant.imageUrl}
            alt={t.identifyThis}
            className="h-56 sm:h-72"
            fallbackClassName="h-56 sm:h-72 text-7xl"
            fallbackEmoji="🌿"
            width={800}
          />
        </div>
      </div>

      {/* Result display */}
      {state.result && (
        <div className={`rounded-xl p-5 mb-6 border ${
          state.result === "correct"
            ? "bg-green-50 border-green-200"
            : "bg-red-50 border-red-200"
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{state.result === "correct" ? "🎉" : "😢"}</span>
            <div>
              <p className={`font-bold text-lg ${
                state.result === "correct" ? "text-green-700" : "text-red-700"
              }`}>
                {state.result === "correct" ? t.correct : t.incorrect}
              </p>
              {state.result === "incorrect" && (
                <p className="text-sm text-gray-600">{t.correctAnswer(name)}</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 mb-4">
            <p className="font-bold text-gray-800">{name}</p>
            <p className="text-sm text-gray-500 italic">{state.plant.scientificName}</p>
            <p className="text-xs text-green-600 mt-1">{famName}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={startNewRound}
              className="px-6 py-2.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
            >
              {t.nextQuestion}
            </button>
            <Link
              href={`/${lang}/plants/${state.plant.id}`}
              className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              {t.viewPlant}
            </Link>
          </div>
        </div>
      )}

      {/* Question */}
      {!state.result && currentNode && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400">
              {t.step(state.history.length + 1)}
            </span>
            {state.history.length > 0 && (
              <button
                onClick={handleBack}
                className="text-xs text-gray-400 hover:text-gray-600"
              >
                ← {t.back}
              </button>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {keyQuestion(currentNode, lang)}
          </h3>

          {/* Hint */}
          {currentNode.hint && (
            <div className="mb-4">
              {showHint ? (
                <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                  {keyHint(currentNode, lang)}
                </p>
              ) : (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs text-blue-500 hover:text-blue-700"
                >
                  💡 {t.showHint}
                </button>
              )}
            </div>
          )}

          {/* Options */}
          <div className="space-y-2">
            {currentNode.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className="w-full text-left p-3.5 rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all text-sm text-gray-700"
              >
                {keyOptionLabel(option, lang)}
              </button>
            ))}
          </div>

          {/* Restart */}
          {state.history.length > 0 && (
            <button
              onClick={startNewRound}
              className="mt-4 text-xs text-gray-400 hover:text-gray-600"
            >
              {t.restart}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
