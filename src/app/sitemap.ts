import type { MetadataRoute } from "next";
import { plants } from "@/data/plants";
import { families } from "@/data/families";
import { getColumns } from "@/data/columns";

const BASE_URL = "https://plantour-pearl.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 静的ページ（ja / en）
  const staticPages = ["", "/plants", "/taxonomy", "/timeline", "/key", "/quiz", "/columns"];
  const staticEntries = staticPages.flatMap((page) => [
    {
      url: `${BASE_URL}/ja${page}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja${page}`,
          en: `${BASE_URL}/en${page}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en${page}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja${page}`,
          en: `${BASE_URL}/en${page}`,
        },
      },
    },
  ]);

  // 種ページ
  const plantEntries = plants.flatMap((p) => [
    {
      url: `${BASE_URL}/ja/plants/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/plants/${p.id}`,
          en: `${BASE_URL}/en/plants/${p.id}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/plants/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/plants/${p.id}`,
          en: `${BASE_URL}/en/plants/${p.id}`,
        },
      },
    },
  ]);

  // 科ページ
  const familyEntries = families.flatMap((f) => [
    {
      url: `${BASE_URL}/ja/families/${f.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/families/${f.id}`,
          en: `${BASE_URL}/en/families/${f.id}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/families/${f.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/families/${f.id}`,
          en: `${BASE_URL}/en/families/${f.id}`,
        },
      },
    },
  ]);

  // コラムページ
  const jaColumns = getColumns("ja");
  const enColumns = getColumns("en");
  const columnSlugs = Array.from(
    new Set([...jaColumns.map((c) => c.slug), ...enColumns.map((c) => c.slug)]),
  );
  const columnEntries = columnSlugs.flatMap((slug) => [
    {
      url: `${BASE_URL}/ja/columns/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/columns/${slug}`,
          en: `${BASE_URL}/en/columns/${slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/columns/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ja: `${BASE_URL}/ja/columns/${slug}`,
          en: `${BASE_URL}/en/columns/${slug}`,
        },
      },
    },
  ]);

  return [...staticEntries, ...plantEntries, ...familyEntries, ...columnEntries];
}
