import { Suspense } from "react";
import TaxonomyTree from "@/components/TaxonomyTree";
import { taxonomyTree } from "@/data/taxonomy";

export default function TaxonomyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">分類体系</h1>
        <p className="text-sm text-gray-500">
          ノードをクリックすると詳細が表示されます。ピンチ/スクロールでズーム、ドラッグで移動できます。
        </p>
      </div>
      <Suspense fallback={<div className="text-sm text-gray-400 text-center py-16">読み込み中…</div>}>
        <TaxonomyTree data={taxonomyTree} />
      </Suspense>
    </main>
  );
}
