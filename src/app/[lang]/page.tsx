import Link from "next/link";
import { plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import { getDictionary, type Locale } from "@/dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const dict = await getDictionary(locale);

  const featured = plants.slice(0, 4);

  const features = [
    {
      href: `/${locale}/taxonomy`,
      icon: "🌳",
      title: dict.home.featTaxonomy,
      desc: dict.home.featTaxonomyDesc,
      color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    },
    {
      href: `/${locale}/timeline`,
      icon: "⏳",
      title: dict.home.featTimeline,
      desc: dict.home.featTimelineDesc,
      color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
    },
    {
      href: `/${locale}/key`,
      icon: "🔍",
      title: dict.home.featKey,
      desc: dict.home.featKeyDesc,
      color: "bg-sky-50 border-sky-200 hover:bg-sky-100",
    },
    {
      href: `/${locale}/plants`,
      icon: "📋",
      title: dict.home.featPlants,
      desc: dict.home.featPlantsDesc,
      color: "bg-rose-50 border-rose-200 hover:bg-rose-100",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-10 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            {dict.home.heroTitle}{" "}
            <span className="text-green-300 text-xl sm:text-2xl font-normal">
              {locale === "ja" ? "Plantour" : ""}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-green-100 mb-2">{dict.home.heroSubtitle}</p>
          <p className="text-green-200 text-sm">{dict.home.heroDesc}</p>
          <p className="text-green-300 text-sm mt-3">
            {dict.home.speciesCount.replace("{count}", String(plants.length))}
          </p>
        </div>
      </section>

      {/* 4導線 */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">{dict.home.fourWays}</h2>
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
          <h2 className="text-xl font-bold text-gray-800">{dict.home.commonPlants}</h2>
          <Link href={`/${locale}/plants`} className="text-sm text-green-700 hover:underline">
            {dict.home.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {featured.map((plant) => (
            <PlantCard key={plant.id} plant={plant} lang={locale} />
          ))}
        </div>
      </section>
    </main>
  );
}
