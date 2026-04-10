"use client";

import { useState } from "react";
import QuizGame from "@/components/QuizGame";
import FamilyQuiz from "@/components/FamilyQuiz";
import type { Locale } from "@/dictionaries";

type QuizType = "species" | "family";

const dict = {
  ja: {
    heading: "クイズ",
    speciesQuiz: "種クイズ",
    speciesDesc: "写真や3Dモデルから植物の種を同定する",
    familyQuiz: "科クイズ",
    familyDesc: "科の特徴から、どの科か多肢選択で答える",
    back: "クイズ選択に戻る",
  },
  en: {
    heading: "Quiz",
    speciesQuiz: "Species Quiz",
    speciesDesc: "Identify plant species from photos or 3D models",
    familyQuiz: "Family Quiz",
    familyDesc: "Identify families from their characteristics (multiple choice)",
    back: "Back to quiz selection",
  },
};

export default function QuizSelector({ lang = "ja" }: { lang?: Locale }) {
  const t = dict[lang];
  const [quizType, setQuizType] = useState<QuizType | null>(null);

  if (quizType === "species") {
    return (
      <div>
        <button
          onClick={() => setQuizType(null)}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors mb-4"
        >
          &larr; {t.back}
        </button>
        <QuizGame lang={lang} />
      </div>
    );
  }

  if (quizType === "family") {
    return (
      <div>
        <button
          onClick={() => setQuizType(null)}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors mb-4"
        >
          &larr; {t.back}
        </button>
        <FamilyQuiz lang={lang} />
      </div>
    );
  }

  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-6">🧪</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">{t.heading}</h2>
      <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => setQuizType("species")}
          className="p-6 rounded-xl border-2 border-gray-200 hover:border-green-400 bg-white transition-colors text-left"
        >
          <div className="text-3xl mb-3">🌿</div>
          <div className="font-bold text-gray-800 mb-1">{t.speciesQuiz}</div>
          <div className="text-xs text-gray-500">{t.speciesDesc}</div>
        </button>
        <button
          onClick={() => setQuizType("family")}
          className="p-6 rounded-xl border-2 border-gray-200 hover:border-teal-400 bg-white transition-colors text-left"
        >
          <div className="text-3xl mb-3">🔬</div>
          <div className="font-bold text-gray-800 mb-1">{t.familyQuiz}</div>
          <div className="text-xs text-gray-500">{t.familyDesc}</div>
        </button>
      </div>
    </div>
  );
}
