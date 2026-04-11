declare module "*.mdx" {
  import type { ComponentType } from "react";
  export const metadata: {
    slug: string;
    lang: "ja" | "en";
    title: string;
    excerpt: string;
    date: string;
    coverImage: string;
    tags: string[];
  };
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
