import type { TimelineEvent } from "./types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "land_plant_origin",
    era: "オルドビス紀",
    mya: 470,
    title: "陸上植物の成立",
    description:
      "緑藻の祖先から陸上植物が進化。水中から陸上へ進出した最初の植物グループ。クチクラ・気孔など陸上適応の形質を獲得。",
    color: "#4ade80",
  },
  {
    id: "bryophyte_diverge",
    era: "オルドビス紀〜シルル紀",
    mya: 460,
    title: "コケ植物の多様化",
    description:
      "コケ植物（蘚類・苔類・ツノゴケ類）が分岐。維管束をもたない最も原始的な陸上植物群。",
    color: "#86efac",
  },
  {
    id: "vascular_plant",
    era: "シルル紀",
    mya: 430,
    title: "維管束植物の成立",
    description:
      "水・栄養分を効率よく運ぶ維管束（木部・師部）を獲得。これにより植物は大型化が可能になった。",
    color: "#22c55e",
  },
  {
    id: "seed_plant",
    era: "デボン紀〜石炭紀",
    mya: 360,
    title: "種子植物の成立",
    description:
      "種子という新しい繁殖形式を獲得。種子は乾燥に耐え、遠くへ散布できる。裸子植物の祖先が登場。",
    color: "#16a34a",
  },
  {
    id: "gymnosperm_diversify",
    era: "石炭紀〜ペルム紀",
    mya: 300,
    title: "裸子植物の展開",
    description:
      "マツ・スギなどの針葉樹、イチョウ、ソテツなどの裸子植物が多様化。中生代には陸上植生の主役に。",
    color: "#15803d",
    groupId: "gymnospermae",
  },
  {
    id: "ginkgo_origin",
    era: "ペルム紀〜三畳紀",
    mya: 250,
    title: "イチョウ類の出現",
    description:
      "イチョウ科の祖先が出現。かつては多くの種が存在したが、現在はGinkgo biloba 1種のみが生存する「生きた化石」。",
    color: "#ca8a04",
    groupId: "gymnospermae",
  },
  {
    id: "angiosperm_origin",
    era: "白亜紀前期",
    mya: 130,
    title: "被子植物の出現",
    description:
      "花・果実・被覆種子をもつ被子植物が突然登場。ダーウィンが「忌まわしい謎」と呼んだ急激な多様化。",
    color: "#f97316",
  },
  {
    id: "basal_angiosperm",
    era: "白亜紀前期",
    mya: 125,
    title: "基部被子植物の分岐",
    description:
      "ドクダミ科を含むコショウ目など、被子植物の早期分岐群が成立。単子葉・双子葉に分かれる前の古い系統。",
    color: "#fb923c",
    groupId: "basal_angiosperm",
  },
  {
    id: "monocot_eudicot_split",
    era: "白亜紀前期〜中期",
    mya: 120,
    title: "単子葉類と真正双子葉類の分岐",
    description:
      "被子植物が単子葉類（イネ・ユリなど）と真正双子葉類（バラ・キクなど）に大きく分岐。",
    color: "#ef4444",
  },
  {
    id: "rosid_diversify",
    era: "白亜紀後期",
    mya: 90,
    title: "バラ類・スズカケノキ類の多様化",
    description:
      "バラ科・スズカケノキ科などを含むグループが多様化。果実の多様化が動物散布を促進。",
    color: "#dc2626",
    groupId: "eudicots",
  },
  {
    id: "asterid_diversify",
    era: "白亜紀後期〜古第三紀",
    mya: 80,
    title: "キク類の多様化",
    description:
      "キク科・オオバコ科などを含むキク類が多様化。頭状花序など高度に特殊化した花のつき方を進化させた。",
    color: "#b91c1c",
    groupId: "eudicots",
  },
  {
    id: "grass_origin",
    era: "白亜紀後期〜古第三紀",
    mya: 75,
    title: "イネ科の出現・草原の形成",
    description:
      "イネ科が出現し、新第三紀以降に草原（サバンナ・草地）生態系を形成。C4光合成の進化も含む。",
    color: "#65a30d",
    groupId: "monocots",
  },
];
