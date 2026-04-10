import type { Metadata } from "next";

const BASE_URL = "https://plantour-pearl.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const title = isEn ? "Plant Quiz - Plantour" : "植物クイズ - Plantour";
  const description = isEn
    ? "Test your plant identification skills with an interactive quiz using real plant images."
    : "実際の植物画像を使ったクイズで同定力を試しましょう。";
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/quiz`,
      languages: { ja: `${BASE_URL}/ja/quiz`, en: `${BASE_URL}/en/quiz` },
    },
    openGraph: { title, description, url: `${BASE_URL}/${lang}/quiz`, siteName: "Plantour", locale: isEn ? "en_US" : "ja_JP", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
