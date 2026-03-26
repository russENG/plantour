import { notFound } from "next/navigation";
import Link from "next/link";
import { findTaxonomyNode, listTaxonomyPageIds } from "@/data/taxonomy";
import PlantImage from "@/components/PlantImage";
import ImageAttribution from "@/components/ImageAttribution";

const rankLabels: Record<string, string> = {
  kingdom: "界",
  phylum: "門",
  class: "綱",
  order: "目",
  genus: "属",
};

export function generateStaticParams() {
  return listTaxonomyPageIds().map((id) => ({ id }));
}

export default async function TaxonomyNodePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = findTaxonomyNode(id);
  if (!result) notFound();
  const { node, ancestors } = result;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* パンくず */}
      <nav className="flex flex-wrap items-center gap-1 text-xs text-gray-400 mb-6">
        <Link href="/taxonomy" className="hover:text-green-700">分類体系</Link>
        {ancestors.map((a) => (
          a.rank !== "family" && a.rank !== "species" ? (
            <span key={a.id} className="flex items-center gap-1">
              <span>›</span>
              <Link href={`/taxonomy/${a.id}`} className="hover:text-green-700">{a.name}</Link>
            </span>
          ) : null
        ))}
        <span className="flex items-center gap-1">
          <span>›</span>
          <span className="text-gray-600">{node.name}</span>
        </span>
      </nav>

      {/* ヘッダー */}
      <div className="h-48 sm:h-64 overflow-hidden rounded-xl">
        <PlantImage
          src={node.imageUrl}
          alt={node.name}
          className="h-48 sm:h-64"
          fallbackClassName="h-48 sm:h-64"
          fallbackEmoji="🌿"
          width={800}
        />
      </div>
      <ImageAttribution src={node.imageUrl} />

      <p className="text-xs font-medium text-green-700 uppercase mb-1 mt-4">
        {rankLabels[node.rank] ?? node.rank}（{node.rank}）
      </p>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">{node.name}</h1>
      {node.description && (
        <p className="text-sm text-gray-600 leading-relaxed mb-8">{node.description}</p>
      )}

      {/* 子ノード一覧 */}
      {node.children && node.children.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">下位分類</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {node.children.map((child) => {
              const href =
                child.rank === "species" && child.plantId
                  ? `/plants/${child.plantId}`
                  : child.rank === "family" && child.familyId
                  ? `/families/${child.familyId}`
                  : `/taxonomy/${child.id}`;
              return (
                <Link
                  key={child.id}
                  href={href}
                  className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 hover:shadow-md transition-shadow bg-white"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <PlantImage
                      src={child.imageUrl}
                      alt={child.name}
                      className="w-14 h-14"
                      fallbackClassName="w-14 h-14"
                      fallbackEmoji="🌿"
                      width={200}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-green-700 font-medium">
                      {rankLabels[child.rank] ?? child.rank}
                    </p>
                    <p className="text-sm font-bold text-gray-900">{child.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <div className="mt-8">
        <Link href="/taxonomy" className="text-sm text-green-700 hover:underline">
          ← 分類体系ツリーに戻る
        </Link>
      </div>
    </main>
  );
}
