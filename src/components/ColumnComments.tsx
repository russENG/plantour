"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/dictionaries";

const dict = {
  ja: {
    title: "コメント",
    notConfigured:
      "コメント機能は準備中です。ご意見・バグ報告は X でのリプライでお寄せください。",
  },
  en: {
    title: "Comments",
    notConfigured:
      "Comments are coming soon. Feedback and bug reports are welcome as X replies.",
  },
};

export default function ColumnComments({
  lang,
  slug,
}: {
  lang: Locale;
  slug: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;
  const configured = Boolean(repo && repoId && category && categoryId);

  useEffect(() => {
    if (!configured || !ref.current) return;
    ref.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", repo!);
    script.setAttribute("data-repo-id", repoId!);
    script.setAttribute("data-category", category!);
    script.setAttribute("data-category-id", categoryId!);
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", `column:${slug}`);
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-loading", "lazy");
    ref.current.appendChild(script);
  }, [configured, repo, repoId, category, categoryId, slug, lang]);

  const t = dict[lang];

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-4">{t.title}</h2>
      {configured ? (
        <div ref={ref} />
      ) : (
        <p className="text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-lg p-4">
          {t.notConfigured}
        </p>
      )}
    </section>
  );
}
