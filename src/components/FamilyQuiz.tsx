"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { families } from "@/data/families";
import PlantImage from "@/components/PlantImage";
import type { Family } from "@/data/types";
import type { Locale } from "@/dictionaries";
import { familyName, familyChars, familyOverview } from "@/lib/i18n-helpers";
import StreakShareButton from "@/components/StreakShareButton";

// 特徴データが十分な科だけ対象（characteristics が 2 つ以上）
const quizFamilies = families.filter(
  (f) => f.characteristics.length >= 2 && (f.enCharacteristics?.length ?? 0) >= 2,
);

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestion(lang: Locale): {
  target: Family;
  choices: Family[];
  clues: string[];
} {
  const pool = shuffle(quizFamilies);
  const target = pool[0];
  // 同じ目の科を優先して不正解選択肢に（難易度を上げる）
  const sameOrder = pool.filter((f) => f.id !== target.id && f.order === target.order);
  const diffOrder = pool.filter((f) => f.id !== target.id && f.order !== target.order);
  const distractors = [...shuffle(sameOrder), ...shuffle(diffOrder)].slice(0, 3);
  const choices = shuffle([target, ...distractors]);
  const chars = familyChars(target, lang);
  // ランダムに 2〜3 個の特徴を手がかりとして出す
  const clueCount = Math.min(chars.length, Math.random() < 0.5 ? 2 : 3);
  const clues = shuffle(chars).slice(0, clueCount);
  return { target, choices, clues };
}

const dict = {
  ja: {
    heading: "科クイズ",
    description: "科の特徴から、どの科か当ててみましょう。",
    start: "クイズを始める",
    nextQuestion: "次の問題",
    correct: "正解！",
    incorrect: "不正解…",
    correctAnswer: (name: string) => `正解は ${name} でした`,
    score: (c: number, t: number) => `スコア: ${c} / ${t}`,
    question: "この特徴をもつ科は？",
    viewFamily: "この科のページを見る →",
    overview: "概要",
    clues: "ヒント（特徴）",
  },
  en: {
    heading: "Family Quiz",
    description: "Identify the plant family from its characteristics.",
    start: "Start Quiz",
    nextQuestion: "Next Question",
    correct: "Correct!",
    incorrect: "Incorrect\u2026",
    correctAnswer: (name: string) => `The answer was ${name}`,
    score: (c: number, t: number) => `Score: ${c} / ${t}`,
    question: "Which family has these characteristics?",
    viewFamily: "View this family\u2019s page \u2192",
    overview: "Overview",
    clues: "Clues (characteristics)",
  },
};

type QuestionState = {
  target: Family;
  choices: Family[];
  clues: string[];
};

export default function FamilyQuiz({ lang = "ja" }: { lang?: Locale }) {
  const t = dict[lang];
  const [question, setQuestion] = useState<QuestionState | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);

  const isAnswered = selected !== null;
  const isCorrect = selected === question?.target.id;

  const startNewRound = useCallback(() => {
    setQuestion(pickQuestion(lang));
    setSelected(null);
  }, [lang]);

  const handleAnswer = useCallback(
    (familyId: string) => {
      if (isAnswered || !question) return;
      const correct = familyId === question.target.id;
      setSelected(familyId);
      setScore((s) => ({
        correct: s.correct + (correct ? 1 : 0),
        total: s.total + 1,
      }));
      setStreak((s) => (correct ? s + 1 : 0));
    },
    [isAnswered, question],
  );

  // Not started
  if (!question) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">🔬</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{t.heading}</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">{t.description}</p>
        <button
          onClick={startNewRound}
          className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-md"
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

  const targetName = familyName(question.target, lang);

  return (
    <div>
      {/* Score */}
      {score.total > 0 && (
        <div className="text-right text-sm text-gray-400 mb-2">
          {t.score(score.correct, score.total)}
        </div>
      )}

      {/* Clues card */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-6">
        <h3 className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">
          {t.clues}
        </h3>
        <p className="font-bold text-gray-800 text-lg mb-4">{t.question}</p>
        <ul className="space-y-2">
          {question.clues.map((clue, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700">
              <span className="text-teal-500 flex-shrink-0 mt-0.5">●</span>
              {clue}
            </li>
          ))}
        </ul>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {question.choices.map((f) => {
          const name = familyName(f, lang);
          const isThis = f.id === selected;
          const isTarget = f.id === question.target.id;
          let borderColor = "border-gray-200";
          let bgColor = "bg-white hover:border-teal-400";
          if (isAnswered) {
            if (isTarget) {
              borderColor = "border-green-500";
              bgColor = "bg-green-50";
            } else if (isThis) {
              borderColor = "border-red-400";
              bgColor = "bg-red-50";
            } else {
              bgColor = "bg-gray-50 opacity-60";
            }
          }
          return (
            <button
              key={f.id}
              onClick={() => handleAnswer(f.id)}
              disabled={isAnswered}
              className={`text-left rounded-xl border-2 p-4 transition-colors ${borderColor} ${bgColor}`}
            >
              <div className="font-bold text-gray-900 text-sm">{name}</div>
              <div className="text-xs text-gray-400 italic">{f.scientificName}</div>
            </button>
          );
        })}
      </div>

      {/* Result */}
      {isAnswered && (
        <div
          className={`rounded-xl p-5 mb-6 border ${
            isCorrect
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{isCorrect ? "🎉" : "😢"}</span>
            <div>
              <p className={`font-bold text-lg ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                {isCorrect ? t.correct : t.incorrect}
              </p>
              {!isCorrect && (
                <p className="text-sm text-gray-600">{t.correctAnswer(targetName)}</p>
              )}
            </div>
          </div>

          {/* Show image + overview of the correct family */}
          <div className="bg-white rounded-lg overflow-hidden mb-4">
            {question.target.imageUrl && (
              <PlantImage
                src={question.target.imageUrl}
                alt={targetName}
                className="h-40 sm:h-52"
                fallbackClassName="h-40 sm:h-52"
                fallbackEmoji="🌿"
                width={800}
              />
            )}
            <div className="p-3">
              <p className="font-bold text-gray-800">{targetName}</p>
              <p className="text-xs text-gray-400 italic mb-2">{question.target.scientificName}</p>
              <p className="text-xs font-bold text-gray-500 uppercase mb-1">{t.overview}</p>
              <p className="text-sm text-gray-600">{familyOverview(question.target, lang)}</p>
            </div>
          </div>

          <StreakShareButton streak={streak} quizType="family" lang={lang} />

          <div className="flex flex-wrap gap-3 mt-3">
            <button
              onClick={startNewRound}
              className="px-6 py-2.5 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors"
            >
              {t.nextQuestion}
            </button>
            <Link
              href={`/${lang}/families/${question.target.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              {t.viewFamily}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
