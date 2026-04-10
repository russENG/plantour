import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { families } from "@/data/families";
import { plants } from "@/data/plants";
import { familyIdToTimelineEvent } from "@/data/timeline";
import SourcesList from "@/components/SourcesList";
import PlantImage from "@/components/PlantImage";
import ImageAttribution from "@/components/ImageAttribution";
import { getFamilyEmoji } from "@/lib/emoji";
import { getFamilyAffiliateLinks } from "@/lib/affiliate";
import { getDictionary, type Locale } from "@/dictionaries";
import { familyName, familyOverview, familyChars, familyPhylo, familyDivergence, familyEvoEvents, plantName } from "@/lib/i18n-helpers";

const BASE_URL = "https://plantour-pearl.vercel.app";

interface Props {
  params: Promise<{ lang: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, id } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const family = families.find((f) => f.id === id);
  if (!family) return {};
  const name = familyName(family, locale);
  const overview = familyOverview(family, locale);
  const title = locale === "en"
    ? `${name} (${family.scientificName}) - Plantour`
    : `${name}（${family.scientificName}）- Plantour`;
  const description = overview.length > 160 ? overview.slice(0, 157) + "..." : overview;
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/families/${id}`,
      languages: {
        ja: `${BASE_URL}/ja/families/${id}`,
        en: `${BASE_URL}/en/families/${id}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}/families/${id}`,
      siteName: "Plantour",
      locale: locale === "en" ? "en_US" : "ja_JP",
      type: "article",
      ...(family.imageUrl ? { images: [family.imageUrl] } : {}),
    },
    twitter: {
      card: family.imageUrl ? "summary_large_image" : "summary",
      title,
      description,
    },
  };
}

export default async function FamilyPage({ params }: Props) {
  const { lang, id } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.familyDetail;

  const family = families.find((f) => f.id === id);
  if (!family) notFound();

  const memberPlants = plants.filter((p) => p.familyId === id);
  const name = familyName(family, locale);

  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${name}（${family.scientificName}）— Plantour`
  )}`;
  const timelineUrl = familyIdToTimelineEvent[id] ? `/${locale}/timeline#${familyIdToTimelineEvent[id]}` : `/${locale}/timeline`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: name,
    headline: name,
    description: familyOverview(family, locale),
    url: `${BASE_URL}/${locale}/families/${family.id}`,
    ...(family.imageUrl ? { image: family.imageUrl } : {}),
    publisher: { "@type": "Organization", name: "Plantour" },
    about: {
      "@type": "Thing",
      name: family.scientificName,
      alternateName: locale === "ja" ? family.enName : family.jaName,
    },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-xs text-gray-500 mb-6 flex gap-2">
        <Link href={`/${locale}`} className="hover:underline">{t.breadcrumbHome}</Link>
        <span>/</span>
        <Link href={`/${locale}/plants`} className="hover:underline">{t.breadcrumbPlants}</Link>
        <span>/</span>
        <span>{name}</span>
      </nav>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-40 sm:h-52 overflow-hidden relative">
          <PlantImage
            src={family.imageUrl}
            alt={name}
            className="h-40 sm:h-52"
            fallbackClassName="h-40 sm:h-52"
            fallbackEmoji="🌿"
            width={800}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-4 py-2">
            <span className="text-sm font-medium text-white/90 italic">{family.scientificName}</span>
          </div>
        </div>
        <div className="px-6 pt-1">
          <ImageAttribution src={family.imageUrl} lang={locale} />
        </div>

        <div className="p-6 pt-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {name}{getFamilyEmoji(family.id) && <span className="ml-1">{getFamilyEmoji(family.id)}</span>}
                </h1>
              </div>
              <p className="text-gray-500 text-sm italic mt-1">{family.scientificName}</p>
              <p className="text-gray-400 text-sm">{locale === "ja" ? family.enName : family.jaName}</p>
            </div>
            <a
              href={xShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
            >
              {t.shareX}
            </a>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">{familyOverview(family, locale)}</p>

          <section className="mb-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">{t.characteristics}</h2>
            <ul className="space-y-2">
              {familyChars(family, locale).map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-teal-500 flex-shrink-0 mt-0.5">●</span>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">{t.phylogeny}</p>
              <p className="text-sm text-gray-700">{familyPhylo(family, locale)}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">{t.divergence}</p>
              <p className="text-sm text-gray-700">{familyDivergence(family, locale)}</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">{t.genera}</h2>
            <div className="flex flex-wrap gap-2">
              {family.representativeGenera.map((g, i) => (
                <span key={i} className="text-sm bg-teal-50 text-teal-800 border border-teal-200 px-3 py-1 rounded-lg">
                  {g}
                </span>
              ))}
            </div>
          </section>

          {familyEvoEvents(family, locale).length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{t.evolutionEvents}</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <ul className="space-y-1">
                  {familyEvoEvents(family, locale).map((e, i) => (
                    <li key={i} className="text-sm text-amber-800">・{e}</li>
                  ))}
                </ul>
                <Link href={timelineUrl} className="text-xs text-amber-600 hover:underline mt-2 inline-block">
                  {t.timelineLink}
                </Link>
              </div>
            </section>
          )}

          {memberPlants.length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                {t.memberPlants.replace("{name}", name)}
              </h2>
              <div className="flex flex-wrap gap-2">
                {memberPlants.map((p) => (
                  <Link
                    key={p.id}
                    href={`/${locale}/plants/${p.id}`}
                    className="text-sm bg-green-50 text-green-800 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    {plantName(p, locale)}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mb-6 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/taxonomy?family=${family.id}`}
              className="text-sm border border-green-300 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              {t.taxonomyLink}
            </Link>
          </section>

          <section className="mt-6 flex flex-wrap gap-2">
            {getFamilyAffiliateLinks(family.id, family.jaName).map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-700 border border-amber-200 bg-amber-50 rounded-lg px-4 py-2 hover:bg-amber-100 transition-colors"
              >
                <span>📚</span>
                <span>{link.label}</span>
              </a>
            ))}
          </section>

          <SourcesList sources={family.sources} lang={locale} />
          {(family.review?.status === "ai_generated" || family.review?.status === "needs_review") && (
            <p className="text-xs text-gray-400 mt-4">
              {family.review.status === "ai_generated" ? dict.plantDetail.reviewAi : dict.plantDetail.reviewNeeds}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return families.map((f) => ({ id: f.id }));
}
