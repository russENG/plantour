import QuizGame from "@/components/QuizGame";
import type { Locale } from "@/dictionaries";

export default async function QuizPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "en" ? "en" : "ja") as Locale;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <QuizGame lang={locale} />
    </main>
  );
}
