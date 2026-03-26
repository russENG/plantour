import Link from "next/link";
import { plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";

const features = [
  {
    href: "/taxonomy",
    icon: "🌳",
    title: "分類体系から見る",
    desc: "植物のまとまりをインタラクティブな木構造で辿る",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
  },
  {
    href: "/timeline",
    icon: "⏳",
    title: "進化史から見る",
    desc: "植物がどのように出現・多様化したかをタイムラインで追う",
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
  },
  {
    href: "/key",
    icon: "🔍",
    title: "検索表を使う",
    desc: "植物の特徴を辿りながら、候補を絞り込む",
    color: "bg-sky-50 border-sky-200 hover:bg-sky-100",
  },
  {
    href: "/plants",
    icon: "📋",
    title: "よく見かける植物を見る",
    desc: "日本でよく見かける植物を一覧で見る",
    color: "bg-rose-50 border-rose-200 hover:bg-rose-100",
  },
];

export default function Home() {
  const featured = plants.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-10 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">ぷらんつあ <span className="text-green-300 text-xl sm:text-2xl font-normal">Plantour</span></h1>
          <p className="text-lg sm:text-xl text-green-100 mb-2">植物を、全体像の中で学ぶ。</p>
          <p className="text-green-200 text-sm">
            分類体系・進化史・検索表・個別ページを1つにつないだ日本の植物学習サービス
          </p>
          <p className="text-green-300 text-sm mt-3">
            現在 <span className="font-bold text-white">{plants.length}</span> 種を収録
          </p>
        </div>
      </section>

      {/* 4導線 */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">4つの学び方</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className={`border rounded-xl p-6 transition-colors ${f.color}`}
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="font-bold text-gray-900 mb-1">{f.title}</div>
              <div className="text-sm text-gray-600">{f.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* よく見かける植物 */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">よく見かける植物</h2>
          <Link href="/plants" className="text-sm text-green-700 hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {featured.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
    </main>
  );
}
