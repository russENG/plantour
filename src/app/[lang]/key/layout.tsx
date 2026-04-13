import type { Metadata } from "next";

const BASE_URL = "https://plantour-pearl.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const title = isEn ? "Plant Identification Key - Plantour" : "植物検索表 - Plantour";
  const description = isEn
    ? "Identify plants step by step using an interactive dichotomous key based on leaf shape, flower structure, and more."
    : "葉の形や花の特徴から植物を段階的に同定できるインタラクティブ検索表です。";
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/key`,
      languages: { ja: `${BASE_URL}/ja/key`, en: `${BASE_URL}/en/key`, "x-default": `${BASE_URL}/ja/key` },
    },
    openGraph: { title, description, url: `${BASE_URL}/${lang}/key`, siteName: "Plantour", locale: isEn ? "en_US" : "ja_JP", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function KeyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
