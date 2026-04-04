import TaxonomyViewSwitcher from "@/components/TaxonomyViewSwitcher";
import { taxonomyTree } from "@/data/taxonomy";
import { getDictionary, type Locale } from "@/dictionaries";

export default async function TaxonomyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;
  const dict = await getDictionary(locale);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{dict.taxonomy.heading}</h1>
        <p className="text-sm text-gray-500">{dict.taxonomy.description}</p>
      </div>
      <TaxonomyViewSwitcher data={taxonomyTree} lang={locale} />
    </main>
  );
}
