"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import type { Locale } from "@/dictionaries";

const navKeys = ["home", "plants", "taxonomy", "timeline", "key", "quiz", "columns"] as const;
const navPaths = ["", "/plants", "/taxonomy", "/timeline", "/key", "/quiz", "/columns"];

const labels: Record<Locale, Record<(typeof navKeys)[number], string>> = {
  ja: { home: "トップ", plants: "植物一覧", taxonomy: "分類体系", timeline: "進化史", key: "検索表", quiz: "クイズ", columns: "コラム" },
  en: { home: "Home", plants: "Plants", taxonomy: "Taxonomy", timeline: "Evolution", key: "Key", quiz: "Quiz", columns: "Columns" },
};

export default function Navigation({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const otherLang: Locale = lang === "ja" ? "en" : "ja";
  // Replace /ja/... or /en/... with the other locale
  const switchedPath = pathname.replace(/^\/(ja|en)/, `/${otherLang}`);

  const navItems = navKeys.map((key, i) => ({
    href: `/${lang}${navPaths[i]}`,
    label: labels[lang][key],
  }));

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between sm:justify-start sm:gap-6">
        <Link href={`/${lang}`} className="font-bold text-lg tracking-tight text-green-100 sm:mr-4">
          {lang === "ja" ? "ぷらんつあ " : ""}
          <span className={lang === "ja" ? "text-green-300 font-normal text-sm" : ""}>Plantour</span>
        </Link>

        {/* デスクトップ用ナビ */}
        <div className="hidden sm:flex items-center gap-6 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-green-200 ${
                isActive(item.href) ? "text-white border-b-2 border-green-300" : "text-green-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 言語トグル（デスクトップ） */}
        <Link
          href={switchedPath}
          className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-green-200 hover:text-white border border-green-600 hover:border-green-400 rounded-md px-2.5 py-1.5 transition-colors"
        >
          🌐 {otherLang.toUpperCase()}
        </Link>

        {/* モバイル: 言語トグル + ハンバーガー */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href={switchedPath}
            className="text-xs font-medium text-green-200 hover:text-white border border-green-600 rounded-md px-2 py-1.5"
          >
            🌐 {otherLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg hover:bg-green-700 transition-colors"
            aria-label={open ? (lang === "ja" ? "メニューを閉じる" : "Close menu") : (lang === "ja" ? "メニューを開く" : "Open menu")}
            aria-expanded={open}
          >
            <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={open ? { transform: "rotate(45deg) translateY(6px)" } : {}} />
            <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={open ? { opacity: 0 } : {}} />
            <div className="w-5 h-0.5 bg-white transition-all" style={open ? { transform: "rotate(-45deg) translateY(-6px)" } : {}} />
          </button>
        </div>
      </div>

      {/* モバイルドロップダウン */}
      {open && (
        <div className="sm:hidden border-t border-green-700 px-4 py-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "bg-green-700 text-white"
                  : "text-green-200 hover:bg-green-700 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
