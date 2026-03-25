"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/plants", label: "植物一覧" },
  { href: "/taxonomy", label: "分類体系" },
  { href: "/timeline", label: "進化史" },
  { href: "/key", label: "検索表" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ルート変更時にメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between sm:justify-start sm:gap-6">
        <Link href="/" className="font-bold text-lg tracking-tight text-green-100 sm:mr-4">
          ぷらんつあ <span className="text-green-300 font-normal text-sm">Plantour</span>
        </Link>

        {/* デスクトップ用ナビ */}
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-green-200 ${
                pathname === item.href ? "text-white border-b-2 border-green-300" : "text-green-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* モバイル用ハンバーガー */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden p-2 rounded-lg hover:bg-green-700 transition-colors"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
        >
          <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={open ? { transform: "rotate(45deg) translateY(6px)" } : {}} />
          <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={open ? { opacity: 0 } : {}} />
          <div className="w-5 h-0.5 bg-white transition-all" style={open ? { transform: "rotate(-45deg) translateY(-6px)" } : {}} />
        </button>
      </div>

      {/* モバイルドロップダウン */}
      {open && (
        <div className="sm:hidden border-t border-green-700 px-4 py-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                pathname === item.href
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
