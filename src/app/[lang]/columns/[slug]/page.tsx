import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ColumnComments from "@/components/ColumnComments";
import ColumnShareButton from "@/components/ColumnShareButton";
import { getColumn, getColumns } from "@/data/columns";
import type { Locale } from "@/dictionaries";

const BASE_URL = "https://plantour-pearl.vercel.app";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ["ja", "en"] as const) {
    for (const c of getColumns(lang)) {
      params.push({ lang, slug: c.slug });
    }
  }
  return params;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const col = getColumn(locale, slug);
  if (!col) return {};
  const isEn = locale === "en";
  return {
    title: `${col.title} - Plantour`,
    description: col.excerpt,
    alternates: {
      canonical: `${BASE_URL}/${locale}/columns/${slug}`,
      languages: {
        ja: `${BASE_URL}/ja/columns/${slug}`,
        en: `${BASE_URL}/en/columns/${slug}`,
        "x-default": `${BASE_URL}/ja/columns/${slug}`,
      },
    },
    openGraph: {
      title: col.title,
      description: col.excerpt,
      url: `${BASE_URL}/${locale}/columns/${slug}`,
      siteName: "Plantour",
      locale: isEn ? "en_US" : "ja_JP",
      type: "article",
      publishedTime: col.date,
      images: [{ url: `${BASE_URL}${col.coverImage}`, alt: col.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: col.title,
      description: col.excerpt,
      images: [`${BASE_URL}${col.coverImage}`],
    },
  };
}

const dict = {
  ja: { back: "← コラム一覧", published: "公開日" },
  en: { back: "← Back to columns", published: "Published" },
};

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const col = getColumn(locale, slug);
  if (!col) notFound();

  const t = dict[locale];

  const { default: Post } = await import(`@/content/columns/${slug}.${locale}.mdx`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: col.title,
    description: col.excerpt,
    image: `${BASE_URL}${col.coverImage}`,
    datePublished: col.date,
    author: { "@type": "Organization", name: "Plantour" },
    publisher: { "@type": "Organization", name: "Plantour" },
    mainEntityOfPage: `${BASE_URL}/${locale}/columns/${slug}`,
    inLanguage: locale === "en" ? "en" : "ja",
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-6">
        <Link href={`/${locale}/columns`} className="text-sm text-green-700 hover:underline">
          {t.back}
        </Link>
      </div>

      <div className="mb-6 text-xs text-gray-400">
        {t.published}: {col.date}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {col.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <article className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-sm prose-hr:my-8">
        <Post />
      </article>

      <ColumnShareButton title={col.title} lang={locale} slug={slug} />

      <ColumnComments lang={locale} slug={slug} />

      <div className="mt-10">
        <Link href={`/${locale}/columns`} className="text-sm text-green-700 hover:underline">
          {t.back}
        </Link>
      </div>
    </main>
  );
}
