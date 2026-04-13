/** 検索表フィルター用の植物形態イラスト（インライン SVG） */

const S = 28; // viewBox size

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${S} ${S}`} width={S} height={S} fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      {children}
    </svg>
  );
}

// ── 葉序（leafArr）──────────────────────────────────────────

/** 互生: 葉が茎に交互につく */
function LeafAlternate() {
  return (
    <Svg>
      {/* 茎 */}
      <line x1="14" y1="3" x2="14" y2="26" stroke="#6b7280" strokeWidth="1.5" />
      {/* 葉（左右交互） */}
      <ellipse cx="8" cy="8" rx="5" ry="3" transform="rotate(-30 8 8)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
      <ellipse cx="20" cy="14" rx="5" ry="3" transform="rotate(30 20 14)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
      <ellipse cx="8" cy="20" rx="5" ry="3" transform="rotate(-30 8 20)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
    </Svg>
  );
}

/** 対生: 葉が茎の同じ位置に対になってつく */
function LeafOpposite() {
  return (
    <Svg>
      <line x1="14" y1="3" x2="14" y2="26" stroke="#6b7280" strokeWidth="1.5" />
      {/* 対の葉 */}
      <ellipse cx="7" cy="9" rx="5" ry="3" transform="rotate(-30 7 9)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
      <ellipse cx="21" cy="9" rx="5" ry="3" transform="rotate(30 21 9)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
      <ellipse cx="7" cy="19" rx="5" ry="3" transform="rotate(-30 7 19)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
      <ellipse cx="21" cy="19" rx="5" ry="3" transform="rotate(30 21 19)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
    </Svg>
  );
}

/** 輪生: 葉が茎の一点から放射状につく */
function LeafWhorled() {
  return (
    <Svg>
      <line x1="14" y1="3" x2="14" y2="26" stroke="#6b7280" strokeWidth="1.5" />
      {/* 3枚が放射状 */}
      <ellipse cx="7" cy="14" rx="5" ry="2.5" transform="rotate(-20 7 14)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
      <ellipse cx="21" cy="14" rx="5" ry="2.5" transform="rotate(20 21 14)" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
      <ellipse cx="14" cy="7" rx="2.5" ry="5" fill="#86efac" stroke="#22c55e" strokeWidth="0.8" />
    </Svg>
  );
}

// ── 葉の型（leafType）──────────────────────────────────────

/** 単葉: 1枚の葉身 */
function LeafSimple() {
  return (
    <Svg>
      <line x1="14" y1="26" x2="14" y2="14" stroke="#6b7280" strokeWidth="1.2" />
      <ellipse cx="14" cy="11" rx="7" ry="9" fill="#bbf7d0" stroke="#22c55e" strokeWidth="1" />
      <line x1="14" y1="3" x2="14" y2="19" stroke="#22c55e" strokeWidth="0.6" />
    </Svg>
  );
}

/** 複葉: 小葉が複数 */
function LeafCompound() {
  return (
    <Svg>
      <line x1="14" y1="26" x2="14" y2="6" stroke="#6b7280" strokeWidth="1.2" />
      {/* 小葉 5枚 */}
      <ellipse cx="8" cy="10" rx="4" ry="2.5" transform="rotate(-25 8 10)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="20" cy="10" rx="4" ry="2.5" transform="rotate(25 20 10)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="8" cy="17" rx="4" ry="2.5" transform="rotate(-25 8 17)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="20" cy="17" rx="4" ry="2.5" transform="rotate(25 20 17)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="14" cy="5" rx="3" ry="4" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
    </Svg>
  );
}

// ── 複葉の型（compoundType）──────────────────────────────────

/** 羽状複葉: 小葉が軸に沿って左右に並ぶ */
function CompoundPinnate() {
  return (
    <Svg>
      <line x1="14" y1="26" x2="14" y2="3" stroke="#6b7280" strokeWidth="1.2" />
      {/* 小葉ペア */}
      <ellipse cx="8" cy="7" rx="4" ry="2" transform="rotate(-20 8 7)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="20" cy="7" rx="4" ry="2" transform="rotate(20 20 7)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="8" cy="13" rx="4" ry="2" transform="rotate(-20 8 13)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="20" cy="13" rx="4" ry="2" transform="rotate(20 20 13)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="8" cy="19" rx="4" ry="2" transform="rotate(-20 8 19)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="20" cy="19" rx="4" ry="2" transform="rotate(20 20 19)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
    </Svg>
  );
}

/** 掌状複葉: 小葉が1点から放射状に出る */
function CompoundPalmate() {
  return (
    <Svg>
      <line x1="14" y1="26" x2="14" y2="16" stroke="#6b7280" strokeWidth="1.2" />
      {/* 5枚の小葉が放射 */}
      <ellipse cx="14" cy="7" rx="2.5" ry="7" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="7" cy="9" rx="2.5" ry="6" transform="rotate(30 7 9)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="21" cy="9" rx="2.5" ry="6" transform="rotate(-30 21 9)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="4" cy="13" rx="2" ry="5" transform="rotate(55 4 13)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="24" cy="13" rx="2" ry="5" transform="rotate(-55 24 13)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
    </Svg>
  );
}

/** 三出複葉: 3枚の小葉 */
function CompoundTernate() {
  return (
    <Svg>
      <line x1="14" y1="26" x2="14" y2="16" stroke="#6b7280" strokeWidth="1.2" />
      {/* 3枚の小葉 */}
      <ellipse cx="14" cy="8" rx="3.5" ry="6" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="6" cy="14" rx="3.5" ry="5.5" transform="rotate(35 6 14)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="22" cy="14" rx="3.5" ry="5.5" transform="rotate(-35 22 14)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.7" />
    </Svg>
  );
}

/** 二回羽状複葉: 小葉がさらに羽状に分かれる */
function CompoundBipinnate() {
  return (
    <Svg>
      {/* 主軸 */}
      <line x1="14" y1="26" x2="14" y2="3" stroke="#6b7280" strokeWidth="1.2" />
      {/* 左側の小軸+小小葉 */}
      <line x1="14" y1="8" x2="5" y2="5" stroke="#6b7280" strokeWidth="0.7" />
      <ellipse cx="4" cy="3" rx="2" ry="1.2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
      <ellipse cx="8" cy="5" rx="2" ry="1.2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
      {/* 右側の小軸+小小葉 */}
      <line x1="14" y1="8" x2="23" y2="5" stroke="#6b7280" strokeWidth="0.7" />
      <ellipse cx="20" cy="5" rx="2" ry="1.2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
      <ellipse cx="24" cy="3" rx="2" ry="1.2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
      {/* 下段 */}
      <line x1="14" y1="16" x2="5" y2="13" stroke="#6b7280" strokeWidth="0.7" />
      <ellipse cx="4" cy="11" rx="2" ry="1.2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
      <ellipse cx="8" cy="13" rx="2" ry="1.2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
      <line x1="14" y1="16" x2="23" y2="13" stroke="#6b7280" strokeWidth="0.7" />
      <ellipse cx="20" cy="13" rx="2" ry="1.2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
      <ellipse cx="24" cy="11" rx="2" ry="1.2" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
    </Svg>
  );
}

// ── 托葉（stipules）──────────────────────────────────────────

/** 托葉あり: 葉柄の基部に付属体がある */
function StipulesPresent() {
  return (
    <Svg>
      {/* 茎 */}
      <line x1="14" y1="26" x2="14" y2="6" stroke="#6b7280" strokeWidth="1.2" />
      {/* 葉 */}
      <ellipse cx="21" cy="10" rx="5" ry="3.5" transform="rotate(20 21 10)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.8" />
      {/* 葉柄 */}
      <line x1="14" y1="14" x2="17" y2="11" stroke="#6b7280" strokeWidth="0.8" />
      {/* 托葉（小さな三角形2つ） */}
      <path d="M13 15 L11 12 L14 13Z" fill="#fde68a" stroke="#d97706" strokeWidth="0.6" />
      <path d="M15 15 L17 16 L14 16Z" fill="#fde68a" stroke="#d97706" strokeWidth="0.6" />
    </Svg>
  );
}

/** 托葉なし */
function StipulesAbsent() {
  return (
    <Svg>
      {/* 茎 */}
      <line x1="14" y1="26" x2="14" y2="6" stroke="#6b7280" strokeWidth="1.2" />
      {/* 葉 */}
      <ellipse cx="21" cy="10" rx="5" ry="3.5" transform="rotate(20 21 10)" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.8" />
      {/* 葉柄 */}
      <line x1="14" y1="14" x2="17" y2="11" stroke="#6b7280" strokeWidth="0.8" />
      {/* × マーク（托葉の位置） */}
      <line x1="11" y1="13" x2="14" y2="16" stroke="#ef4444" strokeWidth="0.8" opacity="0.6" />
      <line x1="14" y1="13" x2="11" y2="16" stroke="#ef4444" strokeWidth="0.8" opacity="0.6" />
    </Svg>
  );
}

// ── 葉脈（venation）──────────────────────────────────────────

/** 平行脈 */
function VenationParallel() {
  return (
    <Svg>
      <ellipse cx="14" cy="14" rx="7" ry="11" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      {/* 平行な脈 */}
      {[-3, 0, 3].map((dx) => (
        <line key={dx} x1={14 + dx} y1="4" x2={14 + dx} y2="24" stroke="#22c55e" strokeWidth="0.5" opacity="0.7" />
      ))}
    </Svg>
  );
}

/** 羽状脈: 主脈から側脈が羽状に出る */
function VenationPinnate() {
  return (
    <Svg>
      <ellipse cx="14" cy="14" rx="7" ry="11" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      {/* 主脈 */}
      <line x1="14" y1="4" x2="14" y2="24" stroke="#22c55e" strokeWidth="0.7" />
      {/* 側脈 */}
      <line x1="14" y1="8" x2="8" y2="6" stroke="#22c55e" strokeWidth="0.4" opacity="0.7" />
      <line x1="14" y1="8" x2="20" y2="6" stroke="#22c55e" strokeWidth="0.4" opacity="0.7" />
      <line x1="14" y1="12" x2="8" y2="11" stroke="#22c55e" strokeWidth="0.4" opacity="0.7" />
      <line x1="14" y1="12" x2="20" y2="11" stroke="#22c55e" strokeWidth="0.4" opacity="0.7" />
      <line x1="14" y1="16" x2="8" y2="17" stroke="#22c55e" strokeWidth="0.4" opacity="0.7" />
      <line x1="14" y1="16" x2="20" y2="17" stroke="#22c55e" strokeWidth="0.4" opacity="0.7" />
      <line x1="14" y1="20" x2="9" y2="22" stroke="#22c55e" strokeWidth="0.4" opacity="0.7" />
      <line x1="14" y1="20" x2="19" y2="22" stroke="#22c55e" strokeWidth="0.4" opacity="0.7" />
    </Svg>
  );
}

/** 掌状脈: 基部から複数の主脈が放射状に出る */
function VenationPalmate() {
  return (
    <Svg>
      <ellipse cx="14" cy="13" rx="9" ry="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      {/* 基部から放射する主脈 */}
      <line x1="14" y1="22" x2="14" y2="4" stroke="#22c55e" strokeWidth="0.6" />
      <line x1="14" y1="22" x2="6" y2="7" stroke="#22c55e" strokeWidth="0.5" opacity="0.7" />
      <line x1="14" y1="22" x2="22" y2="7" stroke="#22c55e" strokeWidth="0.5" opacity="0.7" />
      <line x1="14" y1="22" x2="5" y2="14" stroke="#22c55e" strokeWidth="0.4" opacity="0.6" />
      <line x1="14" y1="22" x2="23" y2="14" stroke="#22c55e" strokeWidth="0.4" opacity="0.6" />
    </Svg>
  );
}

// ── 葉の縁（margin）──────────────────────────────────────────

/** 全縁: 滑らかな縁 */
function MarginEntire() {
  return (
    <Svg>
      <path d="M14 3 C21 6, 22 12, 21 17 C20 22, 16 25, 14 25 C12 25, 8 22, 7 17 C6 12, 7 6, 14 3Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      <line x1="14" y1="4" x2="14" y2="24" stroke="#22c55e" strokeWidth="0.5" />
    </Svg>
  );
}

/** 鋸歯縁: 鋭い歯が前方（先端方向）を向く */
function MarginSerrate() {
  return (
    <Svg>
      <path d="M14 3 L16 5 L18 4 L19 6.5 L21 6 L21 9 L22 11 L21 13 L22 15 L21 17 L21 19 L19 20 L18 22 L16 21 L14 25 L12 21 L10 22 L9 20 L7 19 L7 17 L6 15 L7 13 L6 11 L7 9 L7 6 L9 6.5 L10 4 L12 5 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.8" />
      <line x1="14" y1="4" x2="14" y2="24" stroke="#22c55e" strokeWidth="0.5" />
    </Svg>
  );
}

/** 鈍鋸歯縁: 丸みのある波状の縁 */
function MarginCrenate() {
  return (
    <Svg>
      <path d="M14 3 C16 5, 18 4, 19 6 Q21 7, 21 9 Q22 11, 21 13 Q22 15, 21 17 Q21 19, 19 20 C18 22, 16 21, 14 25 C12 21, 10 22, 9 20 Q7 19, 7 17 Q6 15, 7 13 Q6 11, 7 9 Q7 7, 9 6 C10 4, 12 5, 14 3Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.8" />
      <line x1="14" y1="4" x2="14" y2="24" stroke="#22c55e" strokeWidth="0.5" />
    </Svg>
  );
}

/** 歯牙縁: 鋭い歯が外側を向く */
function MarginDentate() {
  return (
    <Svg>
      <path d="M14 3 L15.5 5.5 L19 4 L18.5 7.5 L22 8 L20.5 11 L23 13 L20.5 15 L22 18 L18.5 18.5 L19 22 L15.5 20.5 L14 25 L12.5 20.5 L9 22 L9.5 18.5 L6 18 L7.5 15 L5 13 L7.5 11 L6 8 L9.5 7.5 L9 4 L12.5 5.5 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.8" />
      <line x1="14" y1="4" x2="14" y2="24" stroke="#22c55e" strokeWidth="0.5" />
    </Svg>
  );
}

// ── 葉の形（shape）──────────────────────────────────────────

/** 線形 */
function ShapeLinear() {
  return (
    <Svg>
      <ellipse cx="14" cy="14" rx="2.5" ry="11" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      <line x1="14" y1="4" x2="14" y2="24" stroke="#22c55e" strokeWidth="0.4" />
    </Svg>
  );
}

/** 卵形 */
function ShapeOvate() {
  return (
    <Svg>
      <path d="M14 3 C20 7, 22 13, 20 18 C18 23, 10 23, 8 18 C6 13, 8 7, 14 3Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      <line x1="14" y1="4" x2="14" y2="22" stroke="#22c55e" strokeWidth="0.4" />
    </Svg>
  );
}

/** 心形 */
function ShapeCordate() {
  return (
    <Svg>
      <path d="M14 6 C10 3, 4 5, 5 10 C6 16, 14 24, 14 24 C14 24, 22 16, 23 10 C24 5, 18 3, 14 6Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      <line x1="14" y1="7" x2="14" y2="23" stroke="#22c55e" strokeWidth="0.4" />
    </Svg>
  );
}

/** 針形 */
function ShapeNeedle() {
  return (
    <Svg>
      <path d="M14 2 L15.5 24 L14 26 L12.5 24 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.8" />
      <line x1="14" y1="3" x2="14" y2="25" stroke="#22c55e" strokeWidth="0.4" />
    </Svg>
  );
}

/** 円形 */
function ShapeRound() {
  return (
    <Svg>
      <circle cx="14" cy="13" r="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      <line x1="14" y1="4" x2="14" y2="22" stroke="#22c55e" strokeWidth="0.4" />
      <line x1="14" y1="23" x2="14" y2="26" stroke="#6b7280" strokeWidth="1" />
    </Svg>
  );
}

/** 掌状 */
function ShapePalmate() {
  return (
    <Svg>
      {/* 5本の裂片が放射状 */}
      <path d="M14 26 L14 16" stroke="#6b7280" strokeWidth="1" />
      <ellipse cx="14" cy="8" rx="2.5" ry="7" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="7" cy="10" rx="2.5" ry="6" transform="rotate(30 7 10)" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="21" cy="10" rx="2.5" ry="6" transform="rotate(-30 21 10)" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="4" cy="14" rx="2" ry="5" transform="rotate(55 4 14)" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.7" />
      <ellipse cx="24" cy="14" rx="2" ry="5" transform="rotate(-55 24 14)" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.7" />
    </Svg>
  );
}

// ── 花弁の合着（petalFusion）──────────────────────────────────

/** 合弁: 花弁がくっついている */
function PetalFused() {
  return (
    <Svg>
      {/* 筒状の花冠 */}
      <path d="M8 14 Q8 8, 14 4 Q20 8, 20 14" stroke="#ec4899" strokeWidth="1" fill="#fce7f3" />
      <path d="M8 14 Q6 16, 7 18 L14 22 L21 18 Q22 16, 20 14" stroke="#ec4899" strokeWidth="1" fill="#fce7f3" />
      {/* 裂片 (上部のみ波打ち) */}
      <path d="M8 14 Q10 11, 14 13 Q18 11, 20 14" stroke="#ec4899" strokeWidth="0.6" fill="none" />
    </Svg>
  );
}

/** 離弁: 花弁がバラバラ */
function PetalFree() {
  return (
    <Svg>
      {/* 5枚の独立した花弁 */}
      <ellipse cx="14" cy="5" rx="3" ry="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="0.8" />
      <ellipse cx="22" cy="11" rx="3" ry="5" transform="rotate(72 22 11)" fill="#fce7f3" stroke="#ec4899" strokeWidth="0.8" />
      <ellipse cx="19" cy="21" rx="3" ry="5" transform="rotate(144 19 21)" fill="#fce7f3" stroke="#ec4899" strokeWidth="0.8" />
      <ellipse cx="9" cy="21" rx="3" ry="5" transform="rotate(-144 9 21)" fill="#fce7f3" stroke="#ec4899" strokeWidth="0.8" />
      <ellipse cx="6" cy="11" rx="3" ry="5" transform="rotate(-72 6 11)" fill="#fce7f3" stroke="#ec4899" strokeWidth="0.8" />
      <circle cx="14" cy="14" r="2.5" fill="#fbbf24" />
    </Svg>
  );
}

/** 花弁なし */
function PetalNone() {
  return (
    <Svg>
      {/* 雄しべだけ（花弁なし） */}
      <line x1="14" y1="26" x2="14" y2="14" stroke="#6b7280" strokeWidth="1.2" />
      <line x1="14" y1="14" x2="10" y2="6" stroke="#a3a3a3" strokeWidth="0.8" />
      <line x1="14" y1="14" x2="18" y2="6" stroke="#a3a3a3" strokeWidth="0.8" />
      <line x1="14" y1="14" x2="7" y2="10" stroke="#a3a3a3" strokeWidth="0.8" />
      <line x1="14" y1="14" x2="21" y2="10" stroke="#a3a3a3" strokeWidth="0.8" />
      <circle cx="10" cy="5.5" r="1.5" fill="#fbbf24" />
      <circle cx="18" cy="5.5" r="1.5" fill="#fbbf24" />
      <circle cx="6.5" cy="9.5" r="1.5" fill="#fbbf24" />
      <circle cx="21.5" cy="9.5" r="1.5" fill="#fbbf24" />
    </Svg>
  );
}

// ── エクスポート ──────────────────────────────────────────────

/** groupId + value → イラストコンポーネント。対応がなければ undefined を返す。 */
export function getTraitIcon(groupId: string, value: string): React.ReactNode | undefined {
  const key = `${groupId}:${value}`;
  switch (key) {
    // 葉序
    case "leafArr:alt":   return <LeafAlternate />;
    case "leafArr:opp":   return <LeafOpposite />;
    case "leafArr:whor":  return <LeafWhorled />;
    // 葉の型
    case "leafType:simple":   return <LeafSimple />;
    case "leafType:compound": return <LeafCompound />;
    // 複葉の型
    case "compoundType:pinnate":   return <CompoundPinnate />;
    case "compoundType:palmate":   return <CompoundPalmate />;
    case "compoundType:ternate":   return <CompoundTernate />;
    case "compoundType:bipinnate": return <CompoundBipinnate />;
    // 托葉
    case "stipules:present": return <StipulesPresent />;
    case "stipules:absent":  return <StipulesAbsent />;
    // 葉脈
    case "venation:pinnate":    return <VenationPinnate />;
    case "venation:palmate":    return <VenationPalmate />;
    case "venation:parallel":   return <VenationParallel />;
    // 葉の縁
    case "margin:entire":  return <MarginEntire />;
    case "margin:serrate": return <MarginSerrate />;
    case "margin:crenate": return <MarginCrenate />;
    case "margin:dentate": return <MarginDentate />;
    // 葉の形
    case "shape:linear":  return <ShapeLinear />;
    case "shape:ovate":   return <ShapeOvate />;
    case "shape:cordate": return <ShapeCordate />;
    case "shape:needle":  return <ShapeNeedle />;
    case "shape:round":   return <ShapeRound />;
    case "shape:palmate": return <ShapePalmate />;
    // 花弁の合着
    case "petalFusion:fused": return <PetalFused />;
    case "petalFusion:free":  return <PetalFree />;
    case "petalFusion:none":  return <PetalNone />;
    default: return undefined;
  }
}
