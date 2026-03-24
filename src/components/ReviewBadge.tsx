import type { ReviewMeta } from "@/data/types";

interface Props {
  review: ReviewMeta | undefined;
  size?: "sm" | "md";
}

const configs = {
  ai_generated: {
    label: "AI生成・要確認",
    className: "bg-amber-100 text-amber-800 border-amber-300",
  },
  needs_review: {
    label: "要確認",
    className: "bg-red-100 text-red-700 border-red-300",
  },
  reviewed: {
    label: "確認済み",
    className: "bg-blue-100 text-blue-700 border-blue-300",
  },
  verified: {
    label: "検証済み",
    className: "bg-green-100 text-green-700 border-green-300",
  },
};

export default function ReviewBadge({ review, size = "md" }: Props) {
  if (!review) return null;
  const config = configs[review.status];
  const sizeClass = size === "sm" ? "text-xs px-1.5 py-0.5" : "text-xs px-2 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1 border rounded-full font-medium ${sizeClass} ${config.className}`}
      title={review.note}
    >
      {review.status === "ai_generated" || review.status === "needs_review" ? "⚠" : "✓"}
      {config.label}
    </span>
  );
}
