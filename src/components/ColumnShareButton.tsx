import type { Locale } from "@/dictionaries";

const SITE_URL = "https://plantour-pearl.vercel.app";

const dict = {
  ja: {
    label: "この記事をシェア",
    share: "Xでポスト",
  },
  en: {
    label: "Share this article",
    share: "Post on X",
  },
};

export default function ColumnShareButton({
  title,
  lang,
  slug,
}: {
  title: string;
  lang: Locale;
  slug: string;
}) {
  const t = dict[lang];
  const url = `${SITE_URL}/${lang}/columns/${slug}`;
  const text = `${title}\n${url}`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

  return (
    <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between gap-3">
      <span className="text-sm text-gray-600">{t.label}</span>
      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-bold inline-flex items-center gap-1.5"
        aria-label={t.share}
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        {t.share}
      </a>
    </div>
  );
}
