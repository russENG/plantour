"use client";
import { useState } from "react";

interface Props {
  src?: string;
  alt: string;
  className?: string;
  fallbackEmoji?: string;
  fallbackClassName?: string;
}

/**
 * 画像表示コンポーネント。
 * - src が未設定またはロード失敗時は fallbackEmoji を表示する。
 * - Wikimedia Commons の Special:FilePath などの外部 URL に対応。
 */
export default function PlantImage({
  src,
  alt,
  className = "",
  fallbackEmoji = "🌿",
  fallbackClassName = "",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-green-50 ${fallbackClassName || className}`}
        aria-label={alt}
      >
        <span className="text-5xl select-none">{fallbackEmoji}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`object-cover w-full h-full ${className}`}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
