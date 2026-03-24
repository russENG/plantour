import type { DataSource } from "@/data/types";

interface Props {
  sources: DataSource[] | undefined;
}

const sourceIcons: Record<string, string> = {
  ylist: "📋",
  apg: "🌿",
  wikipedia_ja: "📖",
  wikipedia_en: "📖",
  wfo: "🌍",
  powo: "🌍",
  gbif: "🗺",
  field_guide: "📚",
  web_flora: "🔗",
  claude_ai: "🤖",
  other: "🔗",
};

export default function SourcesList({ sources }: Props) {
  if (!sources || sources.length === 0) return null;

  const verifiable = sources.filter((s) => s.url);
  const unverifiable = sources.filter((s) => !s.url);

  return (
    <section>
      <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
        データ出典・WEBで確認
      </h2>
      <div className="space-y-2">
        {verifiable.map((source, i) => (
          <a
            key={i}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-blue-600 hover:text-blue-800 border border-blue-200 rounded-lg px-3 py-2 hover:bg-blue-50 transition-colors"
          >
            <span className="flex-shrink-0 mt-0.5">{sourceIcons[source.type] ?? "🔗"}</span>
            <span className="flex-1">
              {source.label}
              {source.note && (
                <span className="block text-xs text-gray-400 mt-0.5">{source.note}</span>
              )}
            </span>
            <span className="flex-shrink-0 text-blue-400">↗</span>
          </a>
        ))}
        {unverifiable.map((source, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50"
          >
            <span className="flex-shrink-0 mt-0.5">{sourceIcons[source.type] ?? "🔗"}</span>
            <span className="flex-1">
              {source.label}
              {source.note && (
                <span className="block text-xs text-gray-400 mt-0.5">{source.note}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
