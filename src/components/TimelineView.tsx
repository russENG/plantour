"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { timelineEvents, geoEras } from "@/data/timeline";
import type { TimelineEvent } from "@/data/types";

// ── レイアウト定数 ────────────────────────────────────────────
const PREHIST_W = 180;  // 先史セクション幅（GOE 等）
const BREAK_W   = 32;   // スケールブレーク幅
const MAIN_PAD  = 50;   // メインタイムライン左右余白
const SCALE     = 4;    // px / Ma（メイン）
const MAX_MYA   = 500;  // メイン範囲
const MODERN_W  = 240;  // 現代セクション幅

const MAIN_OFFSET  = PREHIST_W + BREAK_W;            // 212
const MAIN_W       = MAX_MYA * SCALE + MAIN_PAD * 2; // 2100
const MODERN_BREAK = MAIN_OFFSET + MAIN_W;           // 2312
const CONTAINER_W  = MODERN_BREAK + BREAK_W + MODERN_W; // 2584
const CONTAINER_H  = 560;
const AXIS_Y       = 260;

/** メイン区間（0–500 Ma）の x 座標変換 */
function mya2left(mya: number): number {
  return MAIN_OFFSET + (MAX_MYA - mya) * SCALE + MAIN_PAD;
}

// ── スケールブレーク記号 ─────────────────────────────────────
function ScaleBreak({ x }: { x: number }) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left: x, top: 0, width: BREAK_W, height: CONTAINER_H }}
    >
      <div className="flex flex-col items-center gap-1 text-gray-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-0.5 h-4 bg-gray-300 rotate-12" />
        ))}
        <span className="text-[9px] text-gray-400 font-medium" style={{ writingMode: "vertical-rl" }}>
          スケール省略
        </span>
      </div>
    </div>
  );
}

// ── 主要イベントカード（タイムライン上）──────────────────────
function MajorCard({
  event,
  index,
  centerX,
  selected,
  onClick,
}: {
  event: TimelineEvent;
  index: number;
  centerX: number;
  selected: boolean;
  onClick: () => void;
}) {
  const CARD_W = 144;
  const isAbove = index % 2 === 0;

  const cardEl = (
    <button
      onClick={onClick}
      className="rounded-xl p-2.5 shadow-sm border text-left w-full cursor-pointer transition-all hover:shadow-md"
      style={{
        backgroundColor: selected ? event.color + "30" : event.color + "14",
        borderColor: selected ? event.color : event.color + "55",
        borderWidth: selected ? 2 : 1,
      }}
    >
      <div className="text-[10px] font-bold mb-0.5" style={{ color: event.color }}>
        {event.era}
      </div>
      <div className="text-[10px] text-gray-400 mb-1">
        {event.mya >= 1 ? `${event.mya} Ma` : `${Math.round(event.mya * 1000)}千年前`}
      </div>
      <div className="font-bold text-gray-900 text-xs leading-snug">{event.title}</div>
    </button>
  );

  const dot = (
    <div
      className="w-4 h-4 rounded-full border-2 border-white shadow flex-shrink-0 self-center"
      style={{ backgroundColor: event.color }}
    />
  );

  const connector = (
    <div className="flex-1 flex justify-center min-h-[8px]">
      <div className="w-px bg-gray-300" />
    </div>
  );

  return (
    <div
      id={event.id}
      className="absolute flex flex-col"
      style={{
        left: centerX - CARD_W / 2,
        width: CARD_W,
        ...(isAbove
          ? { top: 0, height: AXIS_Y }
          : { top: AXIS_Y, height: CONTAINER_H - AXIS_Y - 36 }),
      }}
    >
      {isAbove ? (
        <>{cardEl}{connector}<div className="self-center mb-[-8px]">{dot}</div></>
      ) : (
        <><div className="self-center mt-[-8px]">{dot}</div>{connector}{cardEl}</>
      )}
    </div>
  );
}

// ── 副次イベントドット ────────────────────────────────────────
function MinorDot({
  event,
  centerX,
  selected,
  onClick,
}: {
  event: TimelineEvent;
  centerX: number;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      id={event.id}
      title={`${event.title} — ${event.mya >= 1 ? `${event.mya} Ma` : `${Math.round(event.mya * 1000)}千年前`}`}
      onClick={onClick}
      className="absolute cursor-pointer group"
      style={{ left: centerX - 5, top: AXIS_Y - 5, width: 10, height: 10 }}
    >
      <div
        className="w-2.5 h-2.5 rounded-full border-[1.5px] border-white shadow-sm transition-transform group-hover:scale-150"
        style={{
          backgroundColor: event.color,
          transform: selected ? "scale(1.7)" : "scale(1)",
          outline: selected ? `2px solid ${event.color}` : "none",
          outlineOffset: "2px",
        }}
      />
    </button>
  );
}

// ── モーダル（イベント詳細）────────────────────────────────────
function EventModal({
  event,
  relatedFamilies,
  onClose,
}: {
  event: TimelineEvent;
  relatedFamilies: Array<{ id: string; jaName: string }>;
  onClose: () => void;
}) {
  // ESC で閉じる
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const myaLabel =
    event.mya >= 1
      ? `約 ${event.mya} 百万年前`
      : event.mya >= 0.001
      ? `約 ${Math.round(event.mya * 10000) / 10}万年前`
      : `約 ${Math.round(event.mya * 1000 * 10) / 10}千年前`;

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ borderTop: `5px solid ${event.color}` }}
      >
        {/* 画像 */}
        {event.imageUrl && (
          <div className="relative h-44 sm:h-56 overflow-hidden rounded-t-2xl bg-gray-100">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        <div className="p-6">
          {/* ヘッダー */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-bold" style={{ color: event.color }}>
                  {event.era}
                </span>
                <span className="text-sm text-gray-500">{myaLabel}</span>
                {event.isMajor && (
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: event.color + "22", color: event.color }}
                  >
                    主要イベント
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{event.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-lg"
            >
              ×
            </button>
          </div>

          {/* 要約（中学生向け） */}
          {event.summary && (
            <div
              className="rounded-xl p-4 mb-4 text-sm leading-relaxed"
              style={{ backgroundColor: event.color + "12", borderLeft: `3px solid ${event.color}` }}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: event.color }}>
                やさしく言うと
              </div>
              <p className="text-gray-700">{event.summary}</p>
            </div>
          )}

          {/* 詳細説明 */}
          <p className="text-sm text-gray-600 leading-relaxed mb-5">{event.description}</p>

          {/* 関連する科へのリンク */}
          {relatedFamilies.length > 0 && (
            <div className="mb-5">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                このイベントに関係する科
              </div>
              <div className="flex flex-wrap gap-2">
                {relatedFamilies.map((f) => (
                  <Link
                    key={f.id}
                    href={`/families/${f.id}`}
                    onClick={onClose}
                    className="text-xs px-3 py-1.5 rounded-full border font-medium transition-colors hover:text-white"
                    style={{
                      borderColor: event.color,
                      color: event.color,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = event.color;
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = event.color;
                    }}
                  >
                    {f.jaName}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 出典 */}
          {event.sources && event.sources.length > 0 && (
            <div className="border-t pt-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">出典</div>
              <ul className="space-y-1">
                {event.sources.map((s, i) => (
                  <li key={i} className="text-xs text-gray-500 flex gap-1.5">
                    <span className="text-gray-300">›</span>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {s.label}
                      </a>
                    ) : (
                      <span>{s.label}</span>
                    )}
                    {s.note && <span className="text-gray-400">— {s.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── イベントカード一覧（ページ下部） ──────────────────────────
function EventCardList({
  selectedId,
  relatedFamiliesByEvent,
  onSelect,
}: {
  selectedId: string | null;
  relatedFamiliesByEvent: Record<string, Array<{ id: string; jaName: string }>>;
  onSelect: (id: string) => void;
}) {
  const prehistory = timelineEvents.filter((e) => e.section === "prehistory");
  const major = timelineEvents.filter((e) => e.isMajor && !e.section);
  const minor = timelineEvents.filter((e) => !e.isMajor && !e.section);
  const modern = timelineEvents.filter((e) => e.section === "modern");

  const CardItem = ({ event }: { event: TimelineEvent }) => {
    const isSelected = event.id === selectedId;
    const related = relatedFamiliesByEvent[event.id] ?? [];
    const myaLabel =
      event.mya >= 1
        ? `${event.mya} Ma`
        : event.mya >= 0.001
        ? `${Math.round(event.mya * 10000) / 10}万年前`
        : `${Math.round(event.mya * 1000 * 10) / 10}千年前`;

    return (
      <button
        onClick={() => onSelect(event.id)}
        className="text-left w-full rounded-xl border bg-white shadow-sm transition-all hover:shadow-md overflow-hidden"
        style={{
          borderLeftColor: event.color,
          borderLeftWidth: 4,
          outline: isSelected ? `2px solid ${event.color}` : "none",
          outlineOffset: "2px",
        }}
      >
        <div className="p-4">
          <div className="flex items-start gap-3">
            {event.imageUrl && (
              <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <span className="text-xs font-bold" style={{ color: event.color }}>
                  {event.era}
                </span>
                <span className="text-xs text-gray-400">{myaLabel}</span>
              </div>
              <div className="font-bold text-gray-900 text-sm mb-1">{event.title}</div>
              {event.summary ? (
                <p className="text-xs text-gray-500 line-clamp-2">{event.summary}</p>
              ) : (
                <p className="text-xs text-gray-500 line-clamp-2">{event.description}</p>
              )}
              {related.length > 0 && (
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {related.slice(0, 4).map((f) => (
                    <span
                      key={f.id}
                      className="text-[10px] px-1.5 py-0.5 rounded-full"
                      style={{ backgroundColor: event.color + "18", color: event.color }}
                    >
                      {f.jaName}
                    </span>
                  ))}
                  {related.length > 4 && (
                    <span className="text-[10px] text-gray-400">+{related.length - 4}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </button>
    );
  };

  const Section = ({
    label,
    events,
  }: {
    label: string;
    events: TimelineEvent[];
  }) => (
    <div>
      <h2 className="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
        <span
          className="inline-block w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: events[0]?.color ?? "#aaa" }}
        />
        {label}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {events.map((e) => (
          <CardItem key={e.id} event={e} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="mt-10 space-y-8">
      {prehistory.length > 0 && <Section label="先史（原生代）" events={prehistory} />}
      <Section label="主要イベント（植物進化）" events={major} />
      <Section label="その他のイベント" events={minor} />
      {modern.length > 0 && <Section label="現代（人類・農業）" events={modern} />}
    </div>
  );
}

// ── メインコンポーネント ──────────────────────────────────────
export default function TimelineView({
  relatedFamiliesByEvent,
}: {
  relatedFamiliesByEvent: Record<string, Array<{ id: string; jaName: string }>>;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [modalId, setModalId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const modalEvent = timelineEvents.find((e) => e.id === modalId) ?? null;

  const mainEvents    = timelineEvents.filter((e) => !e.section);
  const prehistEvents = timelineEvents.filter((e) => e.section === "prehistory");
  const modernEvents  = timelineEvents.filter((e) => e.section === "modern");
  const majorMain     = mainEvents.filter((e) => e.isMajor);
  const minorMain     = mainEvents.filter((e) => !e.isMajor);

  // 現代セクション内の x 座標（均等配置）
  const modernCenters: Record<string, number> = {};
  modernEvents.forEach((e, i) => {
    modernCenters[e.id] = MODERN_BREAK + BREAK_W + 40 + i * 100;
  });

  // 先史セクション内の x 座標
  const prehistCenters: Record<string, number> = {};
  prehistEvents.forEach((e, i) => {
    prehistCenters[e.id] = 40 + i * 90;
  });

  /** タイムライン上の指定イベントへ横スクロール */
  function scrollToEvent(event: TimelineEvent) {
    if (!scrollRef.current) return;
    let targetLeft: number;
    if (event.section === "prehistory") {
      targetLeft = prehistCenters[event.id] ?? 90;
    } else if (event.section === "modern") {
      targetLeft = modernCenters[event.id] ?? MODERN_BREAK + BREAK_W + 80;
    } else {
      targetLeft = mya2left(event.mya);
    }
    scrollRef.current.scrollLeft = targetLeft - scrollRef.current.clientWidth / 2;
  }

  // URL ハッシュからイベントへジャンプ
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const event = timelineEvents.find((e) => e.id === hash);
    if (!event) return;
    setSelectedId(hash);
    setModalId(hash);
    // DOM描画完了を待ってからスクロール（2フレーム後）
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToEvent(event);
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSelect(id: string) {
    const next = id === selectedId ? null : id;
    setSelectedId(next);
    if (next) {
      setModalId(next);
      const event = timelineEvents.find((e) => e.id === next);
      if (event) {
        requestAnimationFrame(() => scrollToEvent(event));
      }
    }
  }

  return (
    <div>
      {/* ── 横スクロールタイムライン ─────────────────────────────── */}
      <p className="text-xs text-gray-400 mb-2">← スクロールして全体を見る →</p>
      <div ref={scrollRef} className="overflow-x-auto pb-1 rounded-xl border bg-white shadow-sm">
        <div className="relative" style={{ width: CONTAINER_W, height: CONTAINER_H }}>

          {/* 先史セクション背景 */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: 0, width: PREHIST_W, backgroundColor: "#dbeafe" }}
          >
            <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-blue-400 font-medium">
              原生代（スケール外）
            </div>
          </div>

          {/* スケールブレーク（左） */}
          <ScaleBreak x={PREHIST_W} />

          {/* 地質時代 背景バンド（メイン区間） */}
          {geoEras.map((era) => {
            const left = mya2left(era.start);
            const width = (era.start - era.end) * SCALE;
            return (
              <div
                key={era.name}
                className="absolute top-0 bottom-0"
                style={{ left, width, backgroundColor: era.color }}
              >
                <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-gray-500 font-medium truncate px-0.5">
                  {era.name}
                </div>
              </div>
            );
          })}

          {/* スケールブレーク（右） */}
          <ScaleBreak x={MODERN_BREAK} />

          {/* 現代セクション背景 */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: MODERN_BREAK + BREAK_W, width: MODERN_W, backgroundColor: "#fef9c3" }}
          >
            <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-yellow-600 font-medium">
              完新世〜現在（スケール外）
            </div>
          </div>

          {/* 時間軸ライン（メイン） */}
          <div
            className="absolute h-0.5 bg-gray-400"
            style={{ left: MAIN_OFFSET, width: MAIN_W, top: AXIS_Y }}
          />
          {/* 時間軸ライン（先史） */}
          <div
            className="absolute h-0.5 bg-blue-300"
            style={{ left: 0, width: PREHIST_W, top: AXIS_Y }}
          />
          {/* 時間軸ライン（現代） */}
          <div
            className="absolute h-0.5 bg-yellow-400"
            style={{ left: MODERN_BREAK + BREAK_W, width: MODERN_W, top: AXIS_Y }}
          />

          {/* Ma 目盛り（大きく） */}
          {Array.from({ length: 11 }, (_, i) => MAX_MYA - i * 50).map((mya) => {
            const left = mya2left(mya);
            return (
              <div key={mya} className="absolute" style={{ left: left - 18, top: AXIS_Y + 5 }}>
                <div className="w-px h-3 bg-gray-500 mx-auto" />
                <div className="text-xs font-medium text-gray-600 text-center w-9 mt-0.5">
                  {mya === 0 ? "現在" : `${mya}Ma`}
                </div>
              </div>
            );
          })}

          {/* 主要イベントカード（メイン） */}
          {majorMain.map((event, i) => (
            <MajorCard
              key={event.id}
              event={event}
              index={i}
              centerX={mya2left(event.mya)}
              selected={event.id === selectedId}
              onClick={() => handleSelect(event.id)}
            />
          ))}

          {/* 副次イベントドット（メイン） */}
          {minorMain.map((event) => (
            <MinorDot
              key={event.id}
              event={event}
              centerX={mya2left(event.mya)}
              selected={event.id === selectedId}
              onClick={() => handleSelect(event.id)}
            />
          ))}

          {/* 先史イベント */}
          {prehistEvents.map((event) => {
            const cx = prehistCenters[event.id] ?? 90;
            return (
              <MajorCard
                key={event.id}
                event={event}
                index={0}
                centerX={cx}
                selected={event.id === selectedId}
                onClick={() => handleSelect(event.id)}
              />
            );
          })}

          {/* 現代イベント */}
          {modernEvents.map((event, i) => {
            const cx = modernCenters[event.id] ?? MODERN_BREAK + BREAK_W + 80;
            return (
              <MajorCard
                key={event.id}
                event={event}
                index={i}
                centerX={cx}
                selected={event.id === selectedId}
                onClick={() => handleSelect(event.id)}
              />
            );
          })}
        </div>
      </div>

      {/* ── モーダル ───────────────────────────────────────────── */}
      {modalEvent && (
        <EventModal
          event={modalEvent}
          relatedFamilies={relatedFamiliesByEvent[modalEvent.id] ?? []}
          onClose={() => { setModalId(null); setSelectedId(null); }}
        />
      )}

      {/* ── イベントカード一覧 ────────────────────────────────────── */}
      <EventCardList
        selectedId={selectedId}
        relatedFamiliesByEvent={relatedFamiliesByEvent}
        onSelect={handleSelect}
      />
    </div>
  );
}
