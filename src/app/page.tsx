"use client";

// ルート / にアクセスされたら /ja/ にリダイレクト。
// output: 'export' では runtime の redirect() が使えないため、
// クライアント JS によるリダイレクトを使う。
// 同等のリダイレクト 301 は Cloudflare Pages の public/_redirects
// で先に edge レベルで返るため、このページが描画されるのは
// JS 無効な fallback ケースのみ。
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/ja/");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <a href="/ja/" className="text-green-700 underline">
        日本語版へ移動 / Go to Japanese version
      </a>
    </main>
  );
}
