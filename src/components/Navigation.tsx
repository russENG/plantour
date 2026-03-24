"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/plants", label: "植物一覧" },
  { href: "/taxonomy", label: "分類体系" },
  { href: "/timeline", label: "進化史" },
  { href: "/key", label: "検索表" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6 flex-wrap">
        <Link href="/" className="font-bold text-lg tracking-tight text-green-100 mr-4">
          ぷらんつあ <span className="text-green-300 font-normal text-sm">Plantour</span>
        </Link>
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
    </nav>
  );
}
