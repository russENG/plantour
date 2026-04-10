import type { Metadata } from "next";

const BASE_URL = "https://plantour-pearl.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const title = isEn ? "Plant List - Plantour" : "植物一覧 - Plantour";
  const description = isEn
    ? "Browse all plant species registered in Plantour. Search by name, scientific name, or filter by tags."
    : "Plantourに収録されている植物の一覧です。和名・学名・タグで検索・絞り込みできます。";
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/plants`,
      languages: { ja: `${BASE_URL}/ja/plants`, en: `${BASE_URL}/en/plants` },
    },
    openGraph: { title, description, url: `${BASE_URL}/${lang}/plants`, siteName: "Plantour", locale: isEn ? "en_US" : "ja_JP", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function PlantsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
