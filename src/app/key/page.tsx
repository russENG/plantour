import PlantKey from "@/components/PlantKey";

export default function KeyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">植物検索表</h1>
        <p className="text-sm text-gray-500">
          植物の特徴を選びながら、候補を絞り込みます。正確な同定より、植物を観察する眼を養うことを目的としています。
        </p>
      </div>
      <PlantKey />
    </main>
  );
}
