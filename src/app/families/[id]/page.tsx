import { notFound } from "next/navigation";
import Link from "next/link";
import { families } from "@/data/families";
import { plants } from "@/data/plants";
import ReviewBadge from "@/components/ReviewBadge";
import SourcesList from "@/components/SourcesList";
import PlantImage from "@/components/PlantImage";
import ImageAttribution from "@/components/ImageAttribution";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FamilyPage({ params }: Props) {
  const { id } = await params;
  const family = families.find((f) => f.id === id);
  if (!family) notFound();

  const memberPlants = plants.filter((p) => p.familyId === id);

  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${family.jaName}（${family.scientificName}）— Plantour で学ぶ`
  )}`;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* パンくず */}
      <nav className="text-xs text-gray-500 mb-6 flex gap-2">
        <Link href="/" className="hover:underline">トップ</Link>
        <span>/</span>
        <Link href="/plants" className="hover:underline">植物一覧</Link>
        <span>/</span>
        <span>{family.jaName}</span>
      </nav>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-40 sm:h-52 overflow-hidden relative">
          <PlantImage
            src={family.imageUrl}
            alt={family.jaName}
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
          <ImageAttribution src={family.imageUrl} />
        </div>

        <div className="p-6 pt-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{family.jaName}</h1>
                <ReviewBadge review={family.review} />
              </div>
              <p className="text-gray-500 text-sm italic mt-1">{family.scientificName}</p>
              <p className="text-gray-400 text-sm">{family.enName}</p>
            </div>
            <a
              href={xShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
            >
              X で共有
            </a>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">{family.overview}</p>

          {/* 主な特徴 */}
          <section className="mb-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">主な特徴</h2>
            <ul className="space-y-2">
              {family.characteristics.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-teal-500 flex-shrink-0 mt-0.5">●</span>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* 系統情報 */}
          <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">系統上の位置</p>
              <p className="text-sm text-gray-700">{family.phylogeneticPosition}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">出現・多様化時期</p>
              <p className="text-sm text-gray-700">{family.divergenceEra}</p>
            </div>
          </section>

          {/* 代表的な属 */}
          <section className="mb-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">代表的な属・種</h2>
            <div className="flex flex-wrap gap-2">
              {family.representativeGenera.map((g, i) => (
                <span key={i} className="text-sm bg-teal-50 text-teal-800 border border-teal-200 px-3 py-1 rounded-lg">
                  {g}
                </span>
              ))}
            </div>
          </section>

          {/* 進化イベント */}
          {family.evolutionEvents.length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">関連する進化イベント</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <ul className="space-y-1">
                  {family.evolutionEvents.map((e, i) => (
                    <li key={i} className="text-sm text-amber-800">・{e}</li>
                  ))}
                </ul>
                <Link href="/timeline" className="text-xs text-amber-600 hover:underline mt-2 inline-block">
                  進化史タイムラインで見る →
                </Link>
              </div>
            </section>
          )}

          {/* この科に属する植物 */}
          {memberPlants.length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                このサービスに収録されている {family.jaName} の植物
              </h2>
              <div className="flex flex-wrap gap-2">
                {memberPlants.map((p) => (
                  <Link
                    key={p.id}
                    href={`/plants/${p.id}`}
                    className="text-sm bg-green-50 text-green-800 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    {p.jaName}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* 導線 */}
          <section className="mb-6 flex flex-wrap gap-3">
            <Link
              href={`/taxonomy?family=${family.id}`}
              className="text-sm border border-green-300 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              🌿 分類体系で位置を見る
            </Link>
          </section>

          {/* 出典・WEBで確認 */}
          <SourcesList sources={family.sources} />
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return families.map((f) => ({ id: f.id }));
}
