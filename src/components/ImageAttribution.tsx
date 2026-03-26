/**
 * 画像の権利帰属表示コンポーネント。
 * Wikimedia Commons の Special:FilePath URL から
 * ファイルページ（ライセンス情報掲載）へのリンクを自動生成する。
 */

interface Props {
  src?: string;
}

function getCommonsFileUrl(src: string): string | null {
  const match = src.match(/Special:FilePath\/([^?]+)/);
  if (match) {
    return `https://commons.wikimedia.org/wiki/File:${match[1]}`;
  }
  return null;
}

export default function ImageAttribution({ src }: Props) {
  if (!src) return null;
  const fileUrl = getCommonsFileUrl(src);
  if (!fileUrl) return null;

  return (
    <p className="text-xs text-gray-400 text-right mt-1">
      画像:{" "}
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-gray-600"
      >
        Wikimedia Commons
      </a>
      （ライセンスはリンク先で確認）
    </p>
  );
}
