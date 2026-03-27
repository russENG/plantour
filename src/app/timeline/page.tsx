import Link from "next/link";
import TimelineView from "@/components/TimelineView";
import { families } from "@/data/families";
import { familyIdToTimelineEvent } from "@/data/timeline";

/** 科ルックアップ（id → jaName）*/
const familyNameMap = Object.fromEntries(families.map((f) => [f.id, f.jaName]));

/** イベントID → 関連する科一覧（サーバー側で計算してクライアントへ渡す） */
const relatedFamiliesByEvent: Record<string, Array<{ id: string; jaName: string }>> = {};
for (const [familyId, eventId] of Object.entries(familyIdToTimelineEvent)) {
  const name = familyNameMap[familyId];
  if (!name) continue;
  if (!relatedFamiliesByEvent[eventId]) relatedFamiliesByEvent[eventId] = [];
  relatedFamiliesByEvent[eventId].push({ id: familyId, jaName: name });
}

export default function TimelinePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">植物の進化史</h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          左が古い時代、右が新しい時代。
          <span className="text-gray-400">
            {" "}主要イベントはカード、副次イベントは点で表示。クリックで詳細を開けます。
            先史セクション（大酸化イベント）と現代セクション（人類・農業）は時間軸のスケール外です。
          </span>
        </p>
      </div>

      <TimelineView relatedFamiliesByEvent={relatedFamiliesByEvent} />

      <div className="mt-10 flex gap-3">
        <Link
          href="/taxonomy"
          className="text-sm border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50"
        >
          分類体系で見る
        </Link>
      </div>
    </main>
  );
}
