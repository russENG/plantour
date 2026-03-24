import { taxonomyTree } from "@/data/taxonomy";
import TaxonomyTree from "@/components/TaxonomyTree";

export default function TaxonomyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">分類体系</h1>
        <p className="text-sm text-gray-500">
          植物の分類体系を木構造で辿ります。ノードをクリックすると詳細が表示され、科・種のページへ移動できます。
        </p>
      </div>
      <TaxonomyTree data={taxonomyTree} />
    </main>
  );
}
