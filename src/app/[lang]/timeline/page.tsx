import type { Metadata } from "next";
import Link from "next/link";
import TimelineView from "@/components/TimelineView";
import { families } from "@/data/families";
import { familyIdToTimelineEvent } from "@/data/timeline";
import { getDictionary, type Locale } from "@/dictionaries";

const BASE_URL = "https://plantour-pearl.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  const title = isEn ? "Evolution Timeline - Plantour" : "進化史タイムライン - Plantour";
  const description = isEn
    ? "Explore the evolutionary history of plants from 4.6 billion years ago to the present day."
    : "46億年前から現代までの植物の進化史をタイムラインで辿ります。";
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/timeline`,
      languages: { ja: `${BASE_URL}/ja/timeline`, en: `${BASE_URL}/en/timeline`, "x-default": `${BASE_URL}/ja/timeline` },
    },
    openGraph: { title, description, url: `${BASE_URL}/${lang}/timeline`, siteName: "Plantour", locale: isEn ? "en_US" : "ja_JP", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

/** 科ルックアップ（id → jaName / enName）*/
const familyMap = Object.fromEntries(families.map((f) => [f.id, { jaName: f.jaName, enName: f.enName }]));

/** イベントID → 関連する科一覧 */
const relatedFamiliesByEvent: Record<string, Array<{ id: string; jaName: string; enName: string }>> = {};
for (const [familyId, eventId] of Object.entries(familyIdToTimelineEvent)) {
  const f = familyMap[familyId];
  if (!f) continue;
  if (!relatedFamiliesByEvent[eventId]) relatedFamiliesByEvent[eventId] = [];
  relatedFamiliesByEvent[eventId].push({ id: familyId, jaName: f.jaName, enName: f.enName });
}

export default async function TimelinePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.timeline;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.heading}</h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          {t.description}
          <span className="text-gray-400"> {t.subtext}</span>
        </p>
      </div>

      <TimelineView relatedFamiliesByEvent={relatedFamiliesByEvent} lang={locale} />

      <div className="mt-10 flex gap-3">
        <Link
          href={`/${locale}/taxonomy`}
          className="text-sm border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50"
        >
          {t.taxonomyLink}
        </Link>
      </div>
    </main>
  );
}
