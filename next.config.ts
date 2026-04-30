import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
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
