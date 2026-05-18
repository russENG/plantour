import type { MetadataRoute } from "next";

// output: 'export' で静的書き出しするために必要
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://plantour.app/sitemap.xml",
  };
}
