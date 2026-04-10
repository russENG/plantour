"use client";

import type { Locale } from "@/dictionaries";

const MILESTONES = [5, 10, 15, 20, 25, 30, 50, 100];
const SITE_URL = "https://plantour-pearl.vercel.app";

const dict = {
  ja: {
    streakLabel: (n: number) => `${n} 問連続正解！`,
    shareX: "Xでシェア",
    tweetSpecies: (n: number) => `Plantour 種クイズで ${n} 問連続正解しました！🌿\n`,
    tweetFamily: (n: number) => `Plantour 科クイズで ${n} 問連続正解しました！🔬\n`,
  },
  en: {
    streakLabel: (n: number) => `${n} correct in a row!`,
    shareX: "Share on X",
    tweetSpecies: (n: number) => `I got ${n} correct answers in a row on the Plantour Species Quiz! 🌿\n`,
    tweetFamily: (n: number) => `I got ${n} correct answers in a row on the Plantour Family Quiz! 🔬\n`,
  },
};

export function shouldShowShare(streak: number): boolean {
  return streak >= 5;
}

export default function StreakShareButton({
  streak,
  quizType,
  lang = "ja",
}: {
  streak: number;
  quizType: "species" | "family";
  lang?: Locale;
}) {
  if (!shouldShowShare(streak)) return null;

  const t = dict[lang];
  const tweetFn = quizType === "species" ? t.tweetSpecies : t.tweetFamily;
  const quizPath = `/${lang}/quiz`;
  const text = tweetFn(streak) + `${SITE_URL}${quizPath}`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

  // Find highest milestone reached
  const milestone = [...MILESTONES].reverse().find((m) => streak >= m) ?? streak;

  return (
    <div className="flex items-center gap-3 mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
      <span className="text-2xl">{streak >= 10 ? "🔥" : "🎯"}</span>
      <div className="flex-1">
        <p className="font-bold text-amber-800 text-sm">{t.streakLabel(streak)}</p>
      </div>
      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-bold flex-shrink-0"
      >
        {t.shareX}
      </a>
    </div>
  );
}
