import { notFound } from "next/navigation";
import Link from "next/link";
import { plants } from "@/data/plants";
import ReviewBadge from "@/components/ReviewBadge";
import SourcesList from "@/components/SourcesList";
import PlantImage from "@/components/PlantImage";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PlantPage({ params }: Props) {
  const { id } = await params;
  const plant = plants.find((p) => p.id === id);
  if (!plant) notFound();

  const pageUrl = `https://plantour.app/plants/${plant.id}`;
  const xShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${plant.jaName}（${plant.scientificName}）— Plantour で学ぶ\n${pageUrl}`
  )}`;
  const taxonomyUrl = `/taxonomy?plant=${plant.id}`;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* パンくず */}
      <nav className="text-xs text-gray-500 mb-6 flex gap-2">
        <Link href="/" className="hover:underline">トップ</Link>
        <span>/</span>
        <Link href="/plants" className="hover:underline">植物一覧</Link>
        <span>/</span>
        <span>{plant.jaName}</span>
      </nav>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* ヘッダー画像エリア */}
        <div className="h-40 sm:h-56 overflow-hidden">
          <PlantImage
            src={plant.imageUrl}
            alt={plant.jaName}
            className="h-40 sm:h-56"
            fallbackClassName="h-40 sm:h-56 text-7xl sm:text-8xl"
            fallbackEmoji="🌿"
            width={800}
          />
        </div>

        <div className="p-6">
          {/* 基本情報 */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{plant.jaName}</h1>
                <ReviewBadge review={plant.review} />
              </div>
              <p className="text-gray-500 italic text-sm mt-1">{plant.scientificName}</p>
              {plant.enName && (
                <p className="text-gray-400 text-sm">{plant.enName}</p>
              )}
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

          <div className="flex flex-wrap gap-2 mb-6">
            <Link
              href={`/families/${plant.familyId}`}
              className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
            >
              {plant.familyJaName}
            </Link>
            {plant.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* 説明 */}
          <section className="mb-6">
            <p className="text-gray-700 leading-relaxed">{plant.description}</p>
          </section>

          {/* 見分けポイント */}
          <section className="mb-6">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">見分けポイント</h2>
            <ul className="space-y-2">
              {plant.identificationPoints.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* 基本データ */}
          <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">生育環境</p>
              <p className="text-sm text-gray-700">{plant.habitat}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">季節</p>
              <p className="text-sm text-gray-700">{plant.season}</p>
            </div>
          </section>

          {/* 進化メモ */}
          {plant.evolutionNote && (
            <section className="mb-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">進化・系統メモ</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">{plant.evolutionNote}</p>
                <Link href="/timeline" className="text-xs text-amber-600 hover:underline mt-2 inline-block">
                  進化史タイムラインで見る →
                </Link>
              </div>
            </section>
          )}

          {/* 導線 */}
          <section className="mb-6 flex flex-wrap gap-3">
            <Link
              href={`/families/${plant.familyId}`}
              className="text-sm border border-green-300 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              {plant.familyJaName}のページを見る
            </Link>
            <Link
              href={taxonomyUrl}
              className="text-sm border border-green-300 text-green-700 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              🌿 分類体系で位置を見る
            </Link>
          </section>

          {/* 出典・WEBで確認 */}
          <SourcesList sources={plant.sources} />
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return plants.map((p) => ({ id: p.id }));
}
