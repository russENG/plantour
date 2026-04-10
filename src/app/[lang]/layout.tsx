import Navigation from "@/components/Navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Locale } from "@/dictionaries";

export async function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

const BASE_URL = "https://plantour-pearl.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const title = isEn
    ? "Plantour - Learn Plants in Context"
    : "ぷらんつあ Plantour - 植物を全体像で学ぶ";
  const description = isEn
    ? "Learn about Japanese plants through taxonomy, evolution, identification keys, and species pages."
    : "日本の植物を分類体系・進化史・検索表でつないで学ぶWEBサービス";
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: { ja: `${BASE_URL}/ja`, en: `${BASE_URL}/en` },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${lang}`,
      siteName: "Plantour",
      locale: isEn ? "en_US" : "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
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
          ? "Plantour \u2014 A Japanese plant learning service"
          : "ぷらんつあ Plantour \u2014 日本の植物学習サービス"}
      </footer>
      <GoogleAnalytics gaId="G-K657FP7CTE" />
    </>
  );
}
