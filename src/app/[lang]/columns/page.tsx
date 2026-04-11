import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getColumns } from "@/data/columns";
import type { Locale } from "@/dictionaries";

const BASE_URL = "https://plantour-pearl.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const title = isEn ? "Columns - Plantour" : "コラム - Plantour";
  const description = isEn
    ? "Articles and guides about Plantour and the plant world."
    : "Plantour の使い方や植物の世界をめぐるコラム。";
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/columns`,
      languages: { ja: `${BASE_URL}/ja/columns`, en: `${BASE_URL}/en/columns` },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}/columns`,
      siteName: "Plantour",
      locale: isEn ? "en_US" : "ja_JP",
      type: "website",
    },
    twitter: { card: "summary", title, description },
  };
}

const dict = {
  ja: {
    heading: "コラム",
    description: "Plantour の使い方や、植物の世界をめぐるトピックを発信しています。",
    readMore: "続きを読む →",
    empty: "記事はまだありません。",
  },
  en: {
    heading: "Columns",
    description: "Articles about Plantour and the plant world.",
    readMore: "Read more →",
    empty: "No articles yet.",
  },
};

export default async function ColumnsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const t = dict[locale];
  const columns = getColumns(locale);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.heading}</h1>
        <p className="text-sm text-gray-500 leading-relaxed">{t.description}</p>
      </div>

      {columns.length === 0 ? (
        <p className="text-sm text-gray-400">{t.empty}</p>
      ) : (
        <ul className="space-y-6">
          {columns.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/${locale}/columns/${c.slug}`}
                className="block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-green-400 hover:shadow-md transition-all"
              >
                <div className="sm:flex">
                  <div className="sm:w-64 sm:flex-shrink-0 relative h-48 sm:h-auto bg-gray-100">
                    <Image
                      src={c.coverImage}
                      alt={c.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 256px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="text-xs text-gray-400 mb-2">{c.date}</div>
                    <h2 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{c.title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-3">{c.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-green-700 font-medium">{t.readMore}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
