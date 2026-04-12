import type { Locale } from "@/dictionaries";

export type ColumnMeta = {
  slug: string;
  lang: Locale;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  tags: string[];
  draft?: boolean;
};

import { metadata as plantourIntroJa } from "@/content/columns/plantour-intro.ja.mdx";
import { metadata as plantourIntroEn } from "@/content/columns/plantour-intro.en.mdx";
import { metadata as nanakusaApgJa } from "@/content/columns/nanakusa-apg.ja.mdx";
import { metadata as nanakusaApgEn } from "@/content/columns/nanakusa-apg.en.mdx";
import { metadata as tanpopoWarJa } from "@/content/columns/tanpopo-war.ja.mdx";
import { metadata as tanpopoWarEn } from "@/content/columns/tanpopo-war.en.mdx";

const allColumns: ColumnMeta[] = [
  plantourIntroJa as ColumnMeta,
  plantourIntroEn as ColumnMeta,
  nanakusaApgJa as ColumnMeta,
  nanakusaApgEn as ColumnMeta,
  tanpopoWarJa as ColumnMeta,
  tanpopoWarEn as ColumnMeta,
];

export function getColumns(lang: Locale): ColumnMeta[] {
  return allColumns
    .filter((c) => c.lang === lang && !c.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getColumnSlugs(lang: Locale): string[] {
  return getColumns(lang).map((c) => c.slug);
}

export function getColumn(lang: Locale, slug: string): ColumnMeta | undefined {
  return allColumns.find((c) => c.lang === lang && c.slug === slug && !c.draft);
}
