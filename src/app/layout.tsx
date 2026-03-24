import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらんつあ Plantour - 植物を全体像で学ぶ",
  description: "日本の植物を分類体系・進化史・検索表でつないで学ぶWEBサービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 font-sans">
        <Navigation />
        <div className="flex-1">{children}</div>
        <footer className="bg-green-900 text-green-300 text-xs text-center py-4">
          ぷらんつあ Plantour — 日本の植物学習サービス（開発中）
        </footer>
      </body>
    </html>
  );
}
