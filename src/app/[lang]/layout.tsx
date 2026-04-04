import Navigation from "@/components/Navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Locale } from "@/dictionaries";

export async function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return lang === "en"
    ? { title: "Plantour - Learn Plants in Context", description: "Learn about Japanese plants through taxonomy, evolution, identification keys, and species pages." }
    : { title: "ぷらんつあ Plantour - 植物を全体像で学ぶ", description: "日本の植物を分類体系・進化史・検索表でつないで学ぶWEBサービス" };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;

  return (
    <>
      <Navigation lang={locale} />
      <div className="flex-1">{children}</div>
      <footer className="bg-green-900 text-green-300 text-xs text-center py-4">
        {locale === "en"
          ? "Plantour \u2014 A Japanese plant learning service (in development)"
          : "ぷらんつあ Plantour \u2014 日本の植物学習サービス（開発中）"}
      </footer>
      <GoogleAnalytics gaId="G-K657FP7CTE" />
    </>
  );
}
