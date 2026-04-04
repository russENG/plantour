/**
 * 画像の権利帰属表示コンポーネント。
 * Wikimedia Commons の Special:FilePath URL から
 * ファイルページ（ライセンス情報掲載）へのリンクを自動生成する。
 */

import type { Locale } from "@/dictionaries";

interface Props {
  src?: string;
  note?: string;
  lang?: Locale;
}

function getCommonsFileUrl(src: string): string | null {
  // パターン1: commons.wikimedia.org/wiki/Special:FilePath/Filename.jpg
  const m1 = src.match(/Special:FilePath\/([^?]+)/);
  if (m1) {
    return `https://commons.wikimedia.org/wiki/File:${m1[1]}`;
  }
  // パターン2: upload.wikimedia.org/wikipedia/commons/thumb/X/XX/Filename.jpg/NNpx-...
  const m2 = src.match(/\/wikipedia\/commons\/(?:thumb\/[0-9a-f]\/[0-9a-f]{2}\/|)([^/]+?)(?:\/\d+px-[^/]*)?$/);
  if (m2 && src.includes("wikimedia.org")) {
    return `https://commons.wikimedia.org/wiki/File:${m2[1]}`;
  }
  return null;
}

export default function ImageAttribution({ src, note, lang = "ja" }: Props) {
  if (!src && !note) return null;
  const fileUrl = src ? getCommonsFileUrl(src) : null;

  return (
    <div className="text-xs text-gray-400 text-right mt-1 space-y-0.5">
      {note && (
        <p className="text-amber-500">※ {note}</p>
      )}
      {fileUrl && (
        <p>
          {lang === "en" ? "Image: " : "画像: "}
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-600"
          >
            Wikimedia Commons
          </a>
          {lang === "en" ? " (See link for license)" : "（ライセンスはリンク先で確認）"}
        </p>
      )}
    </div>
  );
}
