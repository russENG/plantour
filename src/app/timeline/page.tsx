import Link from "next/link";
import { timelineEvents } from "@/data/timeline";

export default function TimelinePage() {
  const minMya = Math.min(...timelineEvents.map((e) => e.mya));
  const maxMya = Math.max(...timelineEvents.map((e) => e.mya));
  const range = maxMya - minMya;

  // mya順にソートしてカード重なりを防ぐ最小間隔を確保
  const containerWidth = timelineEvents.length * 160;
  const minSpacingPct = (148 / containerWidth) * 100;

  const rawPositions: Record<string, number> = {};
  timelineEvents.forEach((event) => {
    const pos = 1 - (event.mya - minMya) / range;
    rawPositions[event.id] = pos * 90 + 4;
  });

  // mya順（左→右）でソートして間隔を確保
  const sorted = [...timelineEvents].sort((a, b) => b.mya - a.mya);
  const adjustedPositions: Record<string, number> = {};
  sorted.forEach((event, i) => {
    if (i === 0) {
      adjustedPositions[event.id] = rawPositions[event.id];
    } else {
      const prevId = sorted[i - 1].id;
      const natural = rawPositions[event.id];
      adjustedPositions[event.id] = Math.max(natural, adjustedPositions[prevId] + minSpacingPct);
    }
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">植物の進化史</h1>
        <p className="text-sm text-gray-500">
          植物がどのような順番で出現し、多様化したかを時間軸で追います。左が古い時代、右が新しい時代です。
        </p>
      </div>

      {/* 時間軸スクロールエリア（横スクロール） */}
      <p className="text-xs text-gray-400 mb-2 sm:hidden">← 左右にスクロールできます →</p>
      <div className="overflow-x-auto pb-4">
        <div className="relative" style={{ minWidth: `${containerWidth}px`, height: "560px" }}>
          {/* 時間軸ライン */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-800 via-amber-500 to-red-700 rounded-full" />

          {/* 地質時代ラベル */}
          <div className="absolute top-1/2 mt-4 left-0 right-0 flex">
            {["デボン紀", "石炭紀", "ペルム紀", "三畳紀", "ジュラ紀", "白亜紀", "古第三紀〜"].map((era) => (
              <div key={era} className="flex-1 text-center text-xs text-gray-400">
                {era}
              </div>
            ))}
          </div>

          {/* イベントカード */}
          {timelineEvents.map((event, index) => {
            const leftPct = adjustedPositions[event.id];
            const isTop = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${leftPct}%`,
                  transform: "translateX(-50%)",
                  width: "140px",
                  ...(isTop
                    ? { top: "5%", bottom: "50%" }
                    : { top: "50%", bottom: "5%" }),
                }}
              >
                {isTop ? (
                  <>
                    {/* カード（上側） */}
                    <div
                      className="rounded-xl p-3 shadow-sm border text-left w-full"
                      style={{
                        backgroundColor: event.color + "20",
                        borderColor: event.color + "60",
                      }}
                    >
                      <div className="text-xs font-bold" style={{ color: event.color }}>
                        {event.era}
                      </div>
                      <div className="text-xs text-gray-500 mb-1">{event.mya}百万年前</div>
                      <div className="font-bold text-gray-900 text-xs leading-tight mb-1">
                        {event.title}
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-3">{event.description}</p>
                    </div>
                    {/* コネクター線（カード下端からタイムラインまで伸びる） */}
                    <div className="flex-1 w-px bg-gray-300 min-h-2" />
                    {/* タイムライン上のドット */}
                    <div
                      className="w-3 h-3 rounded-full border-2 border-white shadow-sm flex-shrink-0 mb-[-6px]"
                      style={{ backgroundColor: event.color }}
                    />
                  </>
                ) : (
                  <>
                    {/* タイムライン上のドット */}
                    <div
                      className="w-3 h-3 rounded-full border-2 border-white shadow-sm flex-shrink-0 mt-[-6px]"
                      style={{ backgroundColor: event.color }}
                    />
                    {/* コネクター線（タイムラインからカード上端まで伸びる） */}
                    <div className="flex-1 w-px bg-gray-300 min-h-2" />
                    {/* カード（下側） */}
                    <div
                      className="rounded-xl p-3 shadow-sm border text-left w-full"
                      style={{
                        backgroundColor: event.color + "20",
                        borderColor: event.color + "60",
                      }}
                    >
                      <div className="text-xs font-bold" style={{ color: event.color }}>
                        {event.era}
                      </div>
                      <div className="text-xs text-gray-500 mb-1">{event.mya}百万年前</div>
                      <div className="font-bold text-gray-900 text-xs leading-tight mb-1">
                        {event.title}
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-3">{event.description}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* イベント一覧（モバイル対応） */}
      <div className="mt-12">
        <h2 className="text-lg font-bold text-gray-800 mb-6">イベント一覧</h2>
        <div className="space-y-4">
          {[...timelineEvents].reverse().map((event) => (
            <div
              key={event.id}
              className="flex gap-4 p-4 rounded-xl border bg-white"
              style={{ borderLeftColor: event.color, borderLeftWidth: "4px" }}
            >
              <div className="flex-shrink-0 text-right min-w-[80px]">
                <div className="text-xs font-bold" style={{ color: event.color }}>{event.era}</div>
                <div className="text-xs text-gray-400">{event.mya}百万年前</div>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">{event.title}</div>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/taxonomy" className="text-sm border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50">
          分類体系で見る
        </Link>
      </div>
    </main>
  );
}
