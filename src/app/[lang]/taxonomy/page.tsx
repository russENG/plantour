import type { Metadata } from "next";
import TaxonomyViewSwitcher from "@/components/TaxonomyViewSwitcher";
import { taxonomyTree } from "@/data/taxonomy";
import { getDictionary, type Locale } from "@/dictionaries";

const BASE_URL = "https://plantour-pearl.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const title = isEn ? "Taxonomy - Plantour" : "分類体系 - Plantour";
  const description = isEn
    ? "Explore the APG IV plant classification system with an interactive tree and hierarchical list view."
    : "APG IV分類体系に基づく植物の分類を、インタラクティブな樹形図と階層リストで探索できます。";
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/taxonomy`,
      languages: { ja: `${BASE_URL}/ja/taxonomy`, en: `${BASE_URL}/en/taxonomy`, "x-default": `${BASE_URL}/ja/taxonomy` },
    },
    openGraph: { title, description, url: `${BASE_URL}/${lang}/taxonomy`, siteName: "Plantour", locale: isEn ? "en_US" : "ja_JP", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default async function TaxonomyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const dict = await getDictionary(locale);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{dict.taxonomy.heading}</h1>
        <p className="text-sm text-gray-500">{dict.taxonomy.description}</p>
      </div>
      <TaxonomyViewSwitcher data={taxonomyTree} lang={locale} />
    </main>
  );
}
