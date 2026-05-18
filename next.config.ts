import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Cloudflare Pages 向け: 静的サイトとして書き出す
  // 副作用: redirect()/middleware/API routes は使えない（Plantour は使っていない）
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  // 静的書き出しでは末尾 / 付きにして各ページを `out/foo/index.html` に出力
  // Cloudflare Pages はどちらでも動くが trailingSlash で URL 安定化
  trailingSlash: true,
};

// GFM 拡張を有効化（パイプテーブル / 取り消し線 / タスクリスト等）。
// Turbopack はオプションのシリアライズを要求するため、プラグインを
// 関数参照ではなく文字列パスで指定する。
const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm"]],
  },
});

export default withMDX(nextConfig);
