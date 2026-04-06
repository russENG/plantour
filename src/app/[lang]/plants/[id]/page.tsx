import { notFound } from "next/navigation";
import Link from "next/link";
import { plants } from "@/data/plants";
import { families } from "@/data/families";
import { familyIdToTimelineEvent } from "@/data/timeline";
import SourcesList from "@/components/SourcesList";
import PlantImage from "@/components/PlantImage";
import ImageAttribution from "@/components/ImageAttribution";
import SketchfabViewer from "@/components/SketchfabViewer";
import { sketchfabModels } from "@/data/sketchfab";
import { getPlantEmoji } from "@/lib/emoji";
import { getPlantAffiliateLinks } from "@/lib/affiliate";
import { getDictionary, type Locale } from "@/dictionaries";
import { plantName, plantDesc, plantHabitat, plantSeason, plantIdPoints, plantTags, plantEvoNote, plantFamilyName, familyPhylo, familyDivergence } from "@/lib/i18n-helpers";

interface Props {
  params: Promise<{ lang: string; id: string }>;
}

export default async function PlantPage({ params }: Props) {
  const { lang, id } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const dict = await getDictionary(locale);

  const plant = plants.find((p) => p.id === id);
  if (!plant) notFound();

  const family = families.find((f) => f.id === plant.familyId);
  const name = plantName(plant, locale);
  const famName = plantFamilyName(plant, locale);

  const pageUrl = `https://plantour.app/plants/${plant.id}`;
  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${name}（${plant.scientificName}）— Plantour\n${pageUrl}`
  )}`;
  const taxonomyUrl = `/${locale}/taxonomy?plant=${plant.id}`;
  const timelineEventId = familyIdToTimelineEvent[plant.familyId];
  const timelineUrl = timelineEventId ? `/${locale}/timeline#${timelineEventId}` : `/${locale}/timeline`;

  const t = dict.plantDetail;
  const tt = dict.traits;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* パンくず */}
      <nav className="text-xs text-gray-500 mb-6 flex gap-2">
        <Link href={`/${locale}`} className="hover:underline">{t.breadcrumbHome}</Link>
        <span>/</span>
        <Link href={`/${locale}/plants`} className="hover:underline">{t.breadcrumbPlants}</Link>
        <span>/</span>
        <span>{name}</span>
      </nav>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-40 sm:h-56 overflow-hidden">
          <PlantImage
            src={plant.imageUrl}
            alt={name}
            className="h-40 sm:h-56"
            fallbackClassName="h-40 sm:h-56 text-7xl sm:text-8xl"
            fallbackEmoji="🌿"
            width={800}
          />
        </div>
        <div className="px-6 pt-1">
          <ImageAttribution src={plant.imageUrl} note={plant.imageNote} lang={locale} />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {name}{getPlantEmoji(plant.id, plant.familyId) && <span className="ml-1">{getPlantEmoji(plant.id, plant.familyId)}</span>}
                </h1>
              </div>
              <p className="text-gray-500 italic text-sm mt-1">{plant.scientificName}</p>
              {locale === "en" && <p className="text-gray-400 text-sm">{plant.jaName}</p>}
              {locale === "ja" && plant.enName && <p className="text-gray-400 text-sm">{plant.enName}</p>}
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

          <div className="flex flex-wrap gap-2 mb-6">
            <Link
              href={`/${locale}/families/${plant.familyId}`}
              className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
            >
              {famName}
            </Link>
            {plantTags(plant, locale).map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <section className="mb-6">
            <p className="text-gray-700 leading-relaxed">{plantDesc(plant, locale)}</p>
          </section>

          <section className="mb-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">{t.identification}</h2>
            <ul className="space-y-2">
              {plantIdPoints(plant, locale).map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">{t.habitatLabel}</p>
              <p className="text-sm text-gray-700">{plantHabitat(plant, locale)}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">{t.seasonLabel}</p>
              <p className="text-sm text-gray-700">{plantSeason(plant, locale)}</p>
            </div>
          </section>

          {/* 3D 標本モデル */}
          {sketchfabModels[plant.id] && (
            <SketchfabViewer
              model={sketchfabModels[plant.id]}
              plantJaName={plant.jaName}
              plantEnName={plant.enName}
              locale={locale}
            />
          )}

          {/* 形態特性 */}
          {plant.traits && Object.keys(plant.traits).length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                {t.traits}
                <span className="text-[10px] font-normal text-amber-500 ml-2 normal-case">{t.traitsAiNote}</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {plant.traits.leafArr && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.leafArr}</p>
                    <p className="text-xs text-gray-700 font-medium">{tt.values[plant.traits.leafArr]}</p>
                  </div>
                )}
                {plant.traits.leafType && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.leafType}</p>
                    <p className="text-xs text-gray-700 font-medium">{tt.values[plant.traits.leafType]}</p>
                  </div>
                )}
                {plant.traits.venation && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.venation}</p>
                    <p className="text-xs text-gray-700 font-medium">{tt.values[plant.traits.venation]}</p>
                  </div>
                )}
                {plant.traits.margin && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.margin}</p>
                    <p className="text-xs text-gray-700 font-medium">{tt.values[plant.traits.margin]}</p>
                  </div>
                )}
                {plant.traits.shape && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.shape}</p>
                    <p className="text-xs text-gray-700 font-medium">{tt.values[plant.traits.shape]}</p>
                  </div>
                )}
                {plant.traits.habit && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.habit}</p>
                    <p className="text-xs text-gray-700 font-medium">{tt.values[plant.traits.habit]}</p>
                  </div>
                )}
                {plant.traits.deciduous && plant.traits.habit !== "herb" && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.deciduous}</p>
                    <p className="text-xs text-gray-700 font-medium">
                      {plant.traits.deciduous === "evergreen" ? tt.values.evergreen : (tt.values as Record<string, string>).deciduousVal}
                    </p>
                  </div>
                )}
                {plant.traits.petalCount && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.petalCount}</p>
                    <p className="text-xs text-gray-700 font-medium">
                      {plant.traits.petalCount === "many" ? tt.petalCountMany : `${plant.traits.petalCount}${tt.petalCountUnit}`}
                    </p>
                  </div>
                )}
                {plant.traits.petalFusion && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-[10px] text-gray-400">{tt.petalFusion}</p>
                    <p className="text-xs text-gray-700 font-medium">
                      {plant.traits.petalFusion === "none" ? tt.values.none : tt.values[plant.traits.petalFusion]}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 系統上の位置 */}
          {(family?.phylogeneticPosition || family?.divergenceEra) && (
            <section className="mb-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                {t.phylogeny}
                <Link
                  href={`/${locale}/families/${plant.familyId}`}
                  className="text-[10px] font-normal text-teal-600 hover:underline ml-2 normal-case"
                >
                  {famName} →
                </Link>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {family.phylogeneticPosition && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">{t.phylogeny}</p>
                    <p className="text-sm text-gray-700">{familyPhylo(family, locale)}</p>
                  </div>
                )}
                {family.divergenceEra && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">{t.divergence}</p>
                    <p className="text-sm text-gray-700">{familyDivergence(family, locale)}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 進化メモ */}
          {plant.evolutionNote && (
            <section className="mb-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{t.evolutionNote}</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">{plantEvoNote(plant, locale)}</p>
                <Link href={timelineUrl} className="text-xs text-amber-600 hover:underline mt-2 inline-block">
                  {t.timelineLink}
                </Link>
              </div>
            </section>
          )}

          {/* 導線 */}
          <section className="mb-6 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/families/${plant.familyId}`}
              className="text-sm border border-green-300 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              {t.familyPageLink.replace("{name}", famName)}
            </Link>
            <Link
              href={taxonomyUrl}
              className="text-sm border border-green-300 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              {t.taxonomyLink}
            </Link>
          </section>

          {/* 関連書籍 */}
          <section className="mt-6 flex flex-wrap gap-2">
            {getPlantAffiliateLinks(plant.id, plant.jaName, plant.familyId, plant.traits?.habit, plant.traits?.habitat).map((link) => (
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

          <SourcesList sources={plant.sources} lang={locale} />
          {(plant.review?.status === "ai_generated" || plant.review?.status === "needs_review") && (
            <p className="text-xs text-gray-400 mt-4">
              {plant.review.status === "ai_generated" ? t.reviewAi : t.reviewNeeds}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return plants.map((p) => ({ id: p.id }));
}
