import type { TimelineEvent } from "./types";

/** 地質時代の区分（百万年前）。メイン表示範囲は 500〜0 Ma */
export const geoEras = [
  { name: "オルドビス紀", enName: "Ordovician",    start: 500, end: 444, color: "#e0f2fe" },
  { name: "シルル紀",     enName: "Silurian",      start: 444, end: 419, color: "#f0fdf4" },
  { name: "デボン紀",     enName: "Devonian",      start: 419, end: 359, color: "#fef3c7" },
  { name: "石炭紀",       enName: "Carboniferous", start: 359, end: 299, color: "#d1fae5" },
  { name: "ペルム紀",     enName: "Permian",       start: 299, end: 252, color: "#fce7f3" },
  { name: "三畳紀",       enName: "Triassic",      start: 252, end: 201, color: "#fee2e2" },
  { name: "ジュラ紀",     enName: "Jurassic",      start: 201, end: 145, color: "#dcfce7" },
  { name: "白亜紀",       enName: "Cretaceous",    start: 145, end:  66, color: "#bbf7d0" },
  { name: "古第三紀",     enName: "Paleogene",     start:  66, end:  23, color: "#ffedd5" },
  { name: "新第三紀〜",   enName: "Neogene\u2013", start:  23, end:   0, color: "#fef9c3" },
];

/**
 * 科ID → 最も関連が深いタイムラインイベントID のマッピング。
 * 植物詳細ページの「進化史で見る」リンクに使用。
 */
export const familyIdToTimelineEvent: Record<string, string> = {
  // 裸子植物
  pinaceae:        "gymnosperm_diversify",
  cupressaceae:    "gymnosperm_diversify",
  cycadaceae:      "cycad_origin",
  ginkgoaceae:     "ginkgo_origin",
  // シダ・トクサ類
  equisetaceae:    "fern_origin",
  osmundaceae:     "fern_origin",
  pteridaceae:     "fern_origin",
  aspleniaceae:    "fern_origin",
  dryopteridaceae: "fern_origin",
  // 被子植物 基部
  saururaceae:     "basal_angiosperm",
  lauraceae:       "basal_angiosperm",
  magnoliaceae:    "basal_angiosperm",
  ranunculaceae:   "basal_angiosperm",
  // 真正双子葉類（バラ類）
  rosaceae:        "rosid_diversify",
  fabaceae:        "rosid_diversify",
  fagaceae:        "rosid_diversify",
  betulaceae:      "rosid_diversify",
  salicaceae:      "rosid_diversify",
  sapindaceae:     "rosid_diversify",
  violaceae:       "rosid_diversify",
  oxalidaceae:     "rosid_diversify",
  ulmaceae:        "rosid_diversify",
  platanaceae:     "rosid_diversify",
  hydrangeaceae:   "rosid_diversify",
  crassulaceae:    "rosid_diversify",
  theaceae:        "rosid_diversify",
  // 真正双子葉類（キク類）
  asteraceae:      "asterid_diversify",
  campanulaceae:   "asterid_diversify",
  solanaceae:      "asterid_diversify",
  convolvulaceae:  "asterid_diversify",
  rubiaceae:       "asterid_diversify",
  caprifoliaceae:  "asterid_diversify",
  cornaceae:       "asterid_diversify",
  // 単子葉類
  amaryllidaceae:  "monocot_eudicot_split",
  commelinaceae:   "monocot_eudicot_split",
  typhaceae:       "monocot_eudicot_split",
  araceae:         "monocot_eudicot_split",
  poaceae:         "grass_origin",
  // 追加: フウ科ほか（バラ類）
  altingiaceae:    "rosid_diversify",
  // 追加: ツツジ目・キク類
  pentaphylacaceae:"asterid_diversify",
  garryaceae:      "asterid_diversify",
  mazaceae:        "asterid_diversify",
  // 追加: 単子葉
  asphodelaceae:   "monocot_eudicot_split",
  // コケ植物（蘚類・苔類）
  polytrichaceae:  "bryophyte_diverge",
  bartramiaceae:   "bryophyte_diverge",
  bryaceae:        "bryophyte_diverge",
  hypnaceae:       "bryophyte_diverge",
  climaciaceae:    "bryophyte_diverge",
  marchantiaceae:  "bryophyte_diverge",
  conocephalaceae: "bryophyte_diverge",
};

export const timelineEvents: TimelineEvent[] = [
  // ══ 文脈イベント（先史）══════════════════════════════════════
  {
    id: "great_oxidation",
    era: "原生代",
    enEra: "Proterozoic",
    mya: 2400,
    title: "大酸化イベント",
    enTitle: "Great Oxidation Event",
    summary:
      "シアノバクテリアが光合成で酸素をつくり続け、地球の空気が今のような「酸素がある空気」に変わりました。この大変化がその後の生命進化の土台になりました。",
    enSummary:
      "Cyanobacteria kept producing oxygen through photosynthesis, gradually transforming Earth's atmosphere into the oxygen-rich air we know today. This massive change laid the foundation for all later life on Earth.",
    description:
      "シアノバクテリア（藍藻）が光合成によって大量の酸素（O₂）を生産し始め、約24〜20億年前にかけて大気中の酸素濃度が急上昇した事件。それまでの地球大気はほぼ無酸素状態だった。この大酸化イベントにより、好気性呼吸を行う生物が進化できるようになり、現在の多細胞生物・植物・動物への道が開かれた。",
    enDescription:
      "Cyanobacteria began producing large quantities of oxygen (O\u2082) via oxygenic photosynthesis, causing atmospheric O\u2082 levels to rise sharply between approximately 2,400 and 2,000 Ma. Prior to this event, Earth's atmosphere was essentially anoxic. The Great Oxidation Event enabled the evolution of aerobic respiration and paved the way for multicellular organisms, plants, and animals.",
    isMajor: true,
    section: "prehistory",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Stromatolites_in_Shark_Bay.jpg",
    color: "#2563eb",
    sources: [
      {
        type: "wikipedia_en",
        label: "Great Oxidation Event – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Great_Oxidation_Event",
        note: "accepted range 2460–2060 Ma",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "mitochondria_endosymbiosis",
    era: "原生代",
    enEra: "Proterozoic",
    mya: 1800,
    title: "ミトコンドリアの共生",
    enTitle: "Mitochondrial Endosymbiosis",
    summary:
      "酸素を使ってエネルギーを作るバクテリア（α-プロテオバクテリア）が別の細胞の中に住みつき、やがて「ミトコンドリア」という細胞の発電所になりました。これが真核生物（核を持つ生き物）の始まりです。",
    enSummary:
      "An oxygen-using bacterium (an alpha-proteobacterium) moved inside another cell and eventually became the 'mitochondrion' — the powerhouse of the cell. This was the beginning of eukaryotes, the cells with nuclei from which all plants and animals descend.",
    description:
      "好気性のα-プロテオバクテリアが古細菌系統の宿主細胞に取り込まれ、ミトコンドリアへと進化した「一次共生（serial endosymbiosis）」事件。化石・分子時計証拠から約20億〜15億年前に起きたとされ、最古の真核生物化石（*Grypania* など）は約1.85 Ga。ミトコンドリアの獲得により細胞は酸素呼吸で大量のATPを得られるようになり、複雑な真核生物進化の前提となった。植物・動物・菌類を含むすべての真核生物の共通祖先がもつ。",
    enDescription:
      "An aerobic alpha-proteobacterium was engulfed by an archaeal host cell and evolved into the mitochondrion — the foundational event of eukaryotic evolution (serial endosymbiosis theory, Margulis 1967). Fossil and molecular-clock evidence place this between roughly 2.0 and 1.5 Ga; the oldest probable eukaryotic fossils (*Grypania*) are about 1.85 Ga. Mitochondria enabled large-scale ATP production via oxygen respiration, a prerequisite for complex eukaryotic life. Every eukaryote — plants, animals, and fungi — inherits this single ancient symbiosis.",
    isMajor: true,
    section: "prehistory",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Animal_mitochondrion_diagram_en.svg",
    color: "#7c3aed",
    sources: [
      {
        type: "wikipedia_en",
        label: "Symbiogenesis – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Symbiogenesis",
        note: "mitochondrial origin ~2.0–1.5 Ga; alphaproteobacterial ancestor",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "plastid_endosymbiosis",
    era: "原生代",
    enEra: "Proterozoic",
    mya: 1600,
    title: "葉緑体の共生（植物の誕生）",
    enTitle: "Plastid Endosymbiosis (Birth of Plants)",
    summary:
      "光合成をするバクテリア（シアノバクテリア）が、すでにミトコンドリアを持っていた細胞の中に取り込まれて「葉緑体」になりました。これが「植物（の祖先）」が生まれた瞬間です。",
    enSummary:
      "A photosynthetic bacterium (a cyanobacterium) was taken inside a cell that already had mitochondria, and became the 'chloroplast.' This was the very moment that the ancestor of all plants was born.",
    description:
      "シアノバクテリアが既存の真核細胞（ミトコンドリアを持つもの）に取り込まれ、葉緑体（プラスチド）として定着した「一次プラスチド共生（primary plastid endosymbiosis）」事件。約16〜10億年前に1度だけ起きたと考えられ、緑色植物（緑藻＋陸上植物）・紅藻・灰色藻を含む系統「アーケプラスチダ（Archaeplastida）」の共通祖先が生まれた。葉緑体ゲノムはシアノバクテリアと相同。後の二次・三次共生によって藻類の多くの系統に光合成能力が伝播した。",
    enDescription:
      "A cyanobacterium was engulfed by a eukaryotic host (already containing mitochondria) and became established as the chloroplast (plastid) — the primary plastid endosymbiosis. This is thought to have occurred only once, between approximately 1.6 and 1.0 Ga, giving rise to the common ancestor of Archaeplastida: green plants (green algae plus land plants), red algae, and glaucophytes. Chloroplast genomes remain homologous to cyanobacterial DNA. Later secondary and tertiary endosymbioses spread photosynthesis to many other algal lineages.",
    isMajor: true,
    section: "prehistory",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Plagiomnium_affine_laminazellen.jpeg",
    color: "#16a34a",
    sources: [
      {
        type: "wikipedia_en",
        label: "Plastid – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Plastid",
        note: "primary endosymbiosis ~1.6–1.0 Ga; single origin of Archaeplastida",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "snowball_earth",
    era: "クライオジェニアン",
    enEra: "Cryogenian",
    mya: 700,
    title: "全球凍結（スノーボールアース）",
    enTitle: "Snowball Earth",
    summary:
      "地球全体が赤道までほぼ氷で覆われた時代がありました。生き物には大ピンチでしたが、この凍結を乗り越えた後に多細胞生物が一気に多様化しました。",
    enSummary:
      "There was a time when nearly the entire Earth — even the equator — was covered in ice. It was a tough crisis for life, but after surviving the freeze, multicellular organisms exploded in diversity.",
    description:
      "クライオジェニアン紀（約720–635 Ma）に、氷床が赤道域まで達したとされる地球規模の氷河期。スターチアン氷期（~717–660 Ma）とマリノアン氷期（~650–635 Ma）の少なくとも2回起きた。海洋化学・大気CO₂・酸素レベルが大きく変動し、解氷後のエディアカラ紀には多細胞真核生物が急速に多様化した。",
    enDescription:
      "Global glaciation events during the Cryogenian (~720–635 Ma), when ice sheets are thought to have extended to the equator. At least two episodes occurred: the Sturtian (~717–660 Ma) and the Marinoan (~650–635 Ma). Ocean chemistry, atmospheric CO\u2082, and oxygen levels fluctuated dramatically, and the deglaciation was followed by the rapid diversification of multicellular eukaryotes during the Ediacaran.",
    isMajor: false,
    section: "prehistory",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Snowball_Earth.jpg",
    color: "#60a5fa",
    sources: [
      {
        type: "wikipedia_en",
        label: "Snowball Earth – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Snowball_Earth",
        note: "Sturtian 717–660 Ma, Marinoan 650–635 Ma",
      },
    ],
    review: { status: "reviewed" },
  },

  // ══ 主要イベント（500–0 Ma メインタイムライン）══════════════
  {
    id: "land_plant_origin",
    era: "オルドビス紀",
    enEra: "Ordovician",
    mya: 470,
    title: "陸上植物の成立",
    enTitle: "Origin of Land Plants",
    summary:
      "海の中で生きていた緑色の藻が、陸の上でも生きられるように進化しました。これが植物の「陸への上陸」です。",
    enSummary:
      "Green algae living in water evolved the ability to survive on land. This was the great 'invasion of the land' by plants.",
    description:
      "緑藻類（Charophyta）の祖先から陸上植物が進化。化石証拠（胞子化石）はオルドビス紀の約470 Ma にさかのぼる。クチクラ層・気孔・抗乾燥構造など陸上適応の形質を獲得し、水中から陸上へ進出。この出来事は大気中CO₂の低下・土壌形成・陸上生態系の創出をもたらした。",
    enDescription:
      "Land plants evolved from charophyte algae (Charophyta) ancestors. The earliest fossil evidence (cryptospores) dates to approximately 470 Ma in the Ordovician. These organisms acquired terrestrial adaptations including a cuticle layer, stomata, and desiccation-resistant structures, enabling the transition from aquatic to terrestrial habitats. This event drove atmospheric CO\u2082 reduction, soil formation, and the creation of terrestrial ecosystems.",
    isMajor: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Marchantia_polymorpha.jpg",
    color: "#4ade80",
    sources: [
      {
        type: "wikipedia_en",
        label: "Timeline of plant evolution – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Timeline_of_plant_evolution",
        note: "bryophyte-grade land plants ~470 Ma",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "vascular_plant",
    era: "シルル紀",
    enEra: "Silurian",
    mya: 430,
    title: "維管束植物の成立",
    enTitle: "Origin of Vascular Plants",
    summary:
      "水や栄養を体の中で運ぶ「パイプ（維管束）」を持つ植物が登場し、植物が大きく育てるようになりました。",
    enSummary:
      "Plants with internal 'pipes' (vascular tissue) for transporting water and nutrients appeared, allowing plants to grow much larger.",
    description:
      "水・栄養分を効率よく運ぶ維管束（木部・師部）を獲得。初期の維管束植物 *Cooksonia* はシルル紀前期（約433 Ma）に出現し、430 Ma頃に多様化が始まった。維管束の獲得により植物は数十cm〜数mへの大型化が可能となり、陸上への本格進出が始まった。",
    enDescription:
      "Plants acquired vascular tissue (xylem and phloem) for efficient transport of water and nutrients. The earliest vascular plant, *Cooksonia*, appeared in the early Silurian (~433 Ma), with diversification beginning around 430 Ma. The evolution of vascular tissue enabled plants to grow from centimeters to several meters in height, marking the beginning of their full-scale colonization of land.",
    isMajor: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cooksonia_NMNH.jpg",
    color: "#22c55e",
    sources: [
      {
        type: "wikipedia_en",
        label: "Evolutionary history of plants – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Evolutionary_history_of_plants",
        note: "earliest vascular plants 433–419 Ma",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "seed_plant",
    era: "デボン紀後期",
    enEra: "Late Devonian",
    mya: 370,
    title: "種子植物の成立",
    enTitle: "Origin of Seed Plants",
    summary:
      "「種」という仕組みを持つ植物が初めて登場しました。種は乾燥に強く遠くまで運ばれるので、植物が陸のすみずみまで広がるきっかけになりました。",
    enSummary:
      "Plants with seeds appeared for the first time. Seeds can survive dry conditions and travel far, helping plants spread to every corner of the land.",
    description:
      "最初の種子植物の化石は後期デボン紀（約385–365 Ma）にさかのぼる。前胚珠（*Runcaria* ~385 Ma）→ 種子シダ（*Elkinsia* ~365 Ma）へと段階的に進化。種子は乾燥に耐える保護組織と栄養を持ち、水なしに受精できる花粉管の進化と相まって植物の陸上分布域を劇的に拡大した。",
    enDescription:
      "The earliest seed plant fossils date to the Late Devonian (~385\u2013365 Ma), showing a stepwise evolution from pre-ovules (*Runcaria*, ~385 Ma) to seed ferns (*Elkinsia*, ~365 Ma). Seeds provided protective tissue and nutrient reserves resistant to desiccation. Combined with the evolution of the pollen tube\u2014enabling fertilization without free water\u2014seeds dramatically expanded plant distribution across terrestrial habitats.",
    isMajor: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A0%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5_%D1%81%D0%B5%D0%BC%D1%8F%D0%BD.jpg",
    color: "#16a34a",
    sources: [
      {
        type: "wikipedia_en",
        label: "Timeline of plant evolution – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Timeline_of_plant_evolution",
        note: "first seed plants Runcaria ~385 Ma, Elkinsia ~365 Ma",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "gymnosperm_diversify",
    era: "石炭紀〜ペルム紀",
    enEra: "Carboniferous\u2013Permian",
    mya: 300,
    title: "裸子植物の展開",
    enTitle: "Diversification of Gymnosperms",
    summary:
      "マツやスギのように、種を外に出した状態で実らせる植物グループが大繁栄しました。恐竜の時代はこの植物たちが地上を覆っていました。",
    enSummary:
      "Gymnosperms\u2014plants like pines and cedars that bear exposed seeds without fruit\u2014thrived on a massive scale. During the age of dinosaurs, these plants covered the land.",
    description:
      "針葉樹（マツ・スギなど）・イチョウ・ソテツなどの裸子植物が石炭紀〜ペルム紀に多様化。中生代（三畳紀〜白亜紀）には陸上植生の主役となり、恐竜と共存した。果実（被覆組織）で種子を包まない点が被子植物との大きな違い。",
    enDescription:
      "Gymnosperms\u2014including conifers (pines, cedars), ginkgoes, and cycads\u2014diversified from the Carboniferous through the Permian. During the Mesozoic (Triassic\u2013Cretaceous), they dominated terrestrial vegetation and coexisted with dinosaurs. The key distinction from angiosperms is that gymnosperm seeds are not enclosed within a fruit (ovary wall).",
    isMajor: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Skuleskogen_pine.jpg",
    color: "#15803d",
    groupId: "gymnospermae",
    sources: [
      {
        type: "wikipedia_en",
        label: "Gymnosperm – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Gymnosperm",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "angiosperm_origin",
    era: "白亜紀前期",
    enEra: "Early Cretaceous",
    mya: 130,
    title: "被子植物の出現",
    enTitle: "Origin of Angiosperms (Flowering Plants)",
    summary:
      "花を咲かせ、果実の中に種を持つ植物が突然登場しました。虫や鳥と助け合いながら猛スピードで種類を増やし、今日の地球の緑の大部分を占めるようになりました。",
    enSummary:
      "Plants with flowers and seeds enclosed in fruit appeared seemingly out of nowhere. By partnering with insects and birds for pollination, they multiplied rapidly and now make up most of the greenery on Earth.",
    description:
      "花・果実・被覆種子をもつ被子植物（顕花植物）が白亜紀前期（145–100 Ma）に急速に出現・多様化。ダーウィンが「忌まわしい謎（abominable mystery）」と呼んだ急激な多様化は、送粉者（昆虫・鳥など）との共進化が促進したと考えられている。現在の陸上植物種の約90%が被子植物。",
    enDescription:
      "Angiosperms (flowering plants)\u2014bearing flowers, fruits, and enclosed seeds\u2014emerged and diversified rapidly during the Early Cretaceous (145\u2013100 Ma). Darwin famously called their explosive radiation an 'abominable mystery.' Co-evolution with pollinators (insects, birds, etc.) is thought to have driven this rapid diversification. Today, approximately 90% of all land plant species are angiosperms.",
    isMajor: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Magnolia_sieboldii_flower_1.jpg",
    color: "#f97316",
    sources: [
      {
        type: "wikipedia_en",
        label: "Flowering plant – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Flowering_plant",
        note: "first angiosperms Early Cretaceous 145–130 Ma",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "monocot_eudicot_split",
    era: "白亜紀前期〜中期",
    enEra: "Early\u2013Mid Cretaceous",
    mya: 120,
    title: "単子葉類と真正双子葉類の分岐",
    enTitle: "Monocot\u2013Eudicot Divergence",
    summary:
      "被子植物がイネやユリのなかま（単子葉類）と、バラやキクのなかま（双子葉類）の二大グループに分かれました。葉脈や種子の形などが大きく異なります。",
    enSummary:
      "Flowering plants split into two major groups: monocots (grasses, lilies) and eudicots (roses, daisies). They differ clearly in leaf vein patterns, seed structure, and more.",
    description:
      "被子植物が単子葉類（Monocotyledoneae：イネ・ユリ・ラン・ヤシなど）と真正双子葉類（Eudicots：バラ・キク・マメ・ブナなど）に大きく分岐。子葉の枚数（単子葉:1枚 / 双子葉:2枚）・葉脈の形（平行脈 / 網状脈）・維管束の配置などで両者は明確に異なる。",
    enDescription:
      "Angiosperms diverged into monocotyledons (Monocotyledoneae: grasses, lilies, orchids, palms) and eudicots (Eudicots: roses, daisies, legumes, beeches). The two groups are distinguished by cotyledon number (monocots: 1, eudicots: 2), venation pattern (parallel vs. reticulate), and vascular bundle arrangement.",
    isMajor: true,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Monocot_vs_dicot_crop_Pengo.jpg",
    color: "#ef4444",
    sources: [
      {
        type: "wikipedia_en",
        label: "Monocotyledon – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Monocotyledon",
      },
    ],
    review: { status: "reviewed" },
  },

  // ══ 副次イベント（500–0 Ma メインタイムライン）══════════════
  {
    id: "bryophyte_diverge",
    era: "オルドビス紀〜シルル紀",
    enEra: "Ordovician\u2013Silurian",
    mya: 460,
    title: "コケ植物の多様化",
    enTitle: "Diversification of Bryophytes",
    summary:
      "維管束を持たない、最も原始的な陸上植物グループが多様化しました。現在も湿った場所に多く生育しています。",
    enSummary:
      "The most primitive group of land plants\u2014those without internal water-transport tubes\u2014diversified. They still thrive in moist habitats today.",
    description:
      "コケ植物（蘚類・苔類・ツノゴケ類）が分岐・多様化。維管束をもたない最も原始的な陸上植物群で、湿潤な環境に依存し胞子で繁殖する。葉緑体のタンパク質構成や細胞構造が陸上植物との系統的近縁性を示す。",
    enDescription:
      "Bryophytes (mosses, liverworts, and hornworts) diverged and diversified. As the most primitive group of land plants, they lack vascular tissue, depend on moist environments, and reproduce via spores. Chloroplast protein composition and cellular ultrastructure confirm their close phylogenetic relationship to other land plants.",
    isMajor: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Polytrichum_commune.jpg",
    color: "#86efac",
    sources: [
      {
        type: "wikipedia_en",
        label: "Bryophyte – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Bryophyte",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "fern_origin",
    era: "デボン紀",
    enEra: "Devonian",
    mya: 390,
    title: "シダ植物の多様化",
    enTitle: "Diversification of Ferns",
    summary:
      "種を持たず胞子で増えるシダ植物が大繁栄。石炭紀には高さ30メートルにもなる巨大な木性シダが森を作っていました。その枯れた木が地下に積み重なって石炭になりました。",
    enSummary:
      "Ferns\u2014seedless plants that reproduce by spores\u2014flourished greatly. In the Carboniferous, giant tree ferns up to 30 meters tall formed vast forests. Their dead remains piled up underground and eventually became coal.",
    description:
      "トクサ類・真正シダ類がデボン紀に多様化。種子を持たず胞子で繁殖するが維管束を持つ。石炭紀には樹高30m級の木性シダ（鱗木目など）が巨大な森林を形成し、その遺骸が石炭の主要な起源となった。現存するトクサ（*Equisetum*）は3億年以上形態が変わっていない「生きた化石」。",
    enDescription:
      "Horsetails and true ferns diversified during the Devonian. They lack seeds and reproduce via spores, yet possess vascular tissue. During the Carboniferous, arborescent ferns (e.g., Lepidodendrales) reaching 30 m in height formed vast swamp forests; their remains became a principal source of coal deposits. The extant genus *Equisetum* (horsetails) is a 'living fossil' whose morphology has remained essentially unchanged for over 300 million years.",
    isMajor: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Equisetum_arvense.jpg",
    color: "#34d399",
    groupId: "ferns",
    sources: [
      {
        type: "wikipedia_en",
        label: "Fern – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Fern",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "cycad_origin",
    era: "石炭紀末〜ペルム紀",
    enEra: "Late Carboniferous\u2013Permian",
    mya: 290,
    title: "ソテツ類の出現",
    enTitle: "Origin of Cycads",
    summary:
      "ヤシの木に似た見た目のソテツ類が登場しました。恐竜時代に大繁栄し「ソテツの時代」とも呼ばれます。現在も熱帯・亜熱帯に約300種が残る「生きた化石」のグループです。",
    enSummary:
      "Cycads\u2014palm-like plants\u2014appeared on the scene. They thrived so greatly during the age of dinosaurs that the era is sometimes called the 'Age of Cycads.' About 300 species survive today as living fossils in tropical and subtropical regions.",
    description:
      "ソテツ科（Cycadaceae）・ザミア科などのソテツ類が出現。最古のソテツ様葉化石は石炭紀末〜前期ペルム紀（約305–290 Ma）。裸子植物の中でも最古の系統のひとつで、三畳紀〜ジュラ紀に最盛期（「ソテツの時代」）を迎えた。現在は熱帯・亜熱帯に約300種が生存する「生きた化石」。",
    enDescription:
      "Cycads (Cycadaceae, Zamiaceae, and related families) appeared in the Late Carboniferous to early Permian (~305\u2013290 Ma), based on the oldest cycad-like leaf fossils. Among the most ancient gymnosperm lineages, cycads reached their zenith during the Triassic\u2013Jurassic ('Age of Cycads'). Approximately 300 species persist today in tropical and subtropical regions, making them prominent living fossils.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cycas_revoluta_kz01.jpg",
    color: "#a3e635",
    groupId: "gymnospermae",
    sources: [
      {
        type: "wikipedia_en",
        label: "Cycad – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Cycad",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "ginkgo_origin",
    era: "ペルム紀",
    enEra: "Permian",
    mya: 270,
    title: "イチョウ類の出現",
    enTitle: "Origin of Ginkgoes",
    summary:
      "扇形の葉でおなじみのイチョウの仲間が登場しました。かつては多くの種類がいましたが、今では世界に1種だけ生き残っている「生きた化石」です。",
    enSummary:
      "The ginkgo family, known for their fan-shaped leaves, appeared. Once containing many species, today only a single species survives\u2014a true living fossil.",
    description:
      "イチョウ科（Ginkgoaceae）の祖先がペルム紀〜三畳紀に出現。かつては世界中に多くの種が存在し繁栄したが、現在は *Ginkgo biloba*（イチョウ）1種のみが生存する「生きた化石」。二叉分岐脈と扇形の葉は原始的な植物形質を示す。中生代の化石記録は非常に豊富。",
    enDescription:
      "Ancestors of Ginkgoaceae appeared from the Permian through the Triassic. Once globally diverse and widespread, the lineage is now represented by a single extant species, *Ginkgo biloba*\u2014a renowned living fossil. Its dichotomously branching venation and fan-shaped leaves are considered primitive plant characters. The Mesozoic fossil record of ginkgoes is exceptionally rich.",
    isMajor: false,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Ginkgo_biloba_Frederick_MD1.jpg",
    color: "#ca8a04",
    groupId: "gymnospermae",
    sources: [
      {
        type: "wikipedia_en",
        label: "Ginkgo biloba – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Ginkgo_biloba",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "basal_angiosperm",
    era: "白亜紀前期",
    enEra: "Early Cretaceous",
    mya: 125,
    title: "基部被子植物の分岐",
    enTitle: "Divergence of Basal Angiosperms",
    summary:
      "被子植物の中で最も古い系統にあたるグループが分かれました。ドクダミやモクレンなど、花の構造が比較的シンプルな植物たちです。",
    enSummary:
      "The oldest lineages within flowering plants branched off. These include plants like lizard's tail and magnolias, which have relatively simple flower structures.",
    description:
      "ドクダミ科・クスノキ科・モクレン科・キンポウゲ科など、被子植物の早期分岐群（ANA グレード・マグノリア類）が成立。単子葉・双子葉に分かれる前の古い系統で、花被片と雄しべが螺旋状に配列するなど原始的な形質を多く残す。APG IV 体系（2016）で整理されている。",
    enDescription:
      "Early-diverging angiosperm lineages (ANA grade and magnoliids)\u2014including Saururaceae, Lauraceae, Magnoliaceae, and Ranunculaceae\u2014became established. These ancient lineages predate the monocot\u2013eudicot split and retain many primitive floral characters, such as spirally arranged tepals and stamens. Their classification was refined under the APG IV system (2016).",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Magnolia_kobus4.jpg",
    color: "#fb923c",
    groupId: "basal_angiosperm",
    sources: [
      {
        type: "wikipedia_en",
        label: "Basal angiosperms – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Basal_angiosperms",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "rosid_diversify",
    era: "白亜紀後期",
    enEra: "Late Cretaceous",
    mya: 90,
    title: "バラ類・ムクロジ類の多様化",
    enTitle: "Diversification of Rosids",
    summary:
      "バラ・マメ・ブナ・カエデなど、私たちに身近な植物の多くが含まれるグループが爆発的に種類を増やしました。",
    enSummary:
      "A group containing many familiar plants\u2014roses, beans, oaks, maples\u2014exploded in diversity.",
    description:
      "バラ科・マメ科・ブナ科・ヤナギ科・スミレ科などのバラ類（Rosids）とカエデ・クルミなどのムクロジ類が白亜紀後期に多様化。果実の多様化が動物による種子散布を促進し、植物と動物の共進化を加速させた。現在の被子植物の約1/3がこのグループに属する。",
    enDescription:
      "Rosids\u2014including Rosaceae, Fabaceae, Fagaceae, Salicaceae, and Violaceae\u2014along with Sapindales (maples, walnuts) diversified during the Late Cretaceous. The diversification of fruit types promoted animal-mediated seed dispersal, accelerating plant\u2013animal co-evolution. Approximately one-third of extant angiosperm species belong to this clade.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosa_acicularis.jpg",
    color: "#dc2626",
    groupId: "eudicots",
    sources: [
      {
        type: "wikipedia_en",
        label: "Rosids – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Rosids",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "asterid_diversify",
    era: "白亜紀後期〜古第三紀",
    enEra: "Late Cretaceous\u2013Paleogene",
    mya: 80,
    title: "キク類の多様化",
    enTitle: "Diversification of Asterids",
    summary:
      "キク・ナス・アカネなど、花弁が合わさった（合弁花）植物のグループが多様化しました。頭状花序などの特殊な花の仕組みを進化させたグループです。",
    enSummary:
      "The asterid group\u2014including daisies, nightshades, and coffee plants\u2014diversified. They evolved fused petals and specialized flower structures like the composite head.",
    description:
      "キク科・オオバコ科・ナス科・アカネ科・スイカズラ科などを含むキク類（Asterids）が多様化。頭状花序・萼・花弁・雄しべ・雌しべが合着する合弁花を進化させた。昆虫・鳥との高度に特化した送粉関係を発達させ、現在の被子植物の約1/3を占める。",
    enDescription:
      "Asterids\u2014including Asteraceae, Plantaginaceae, Solanaceae, Rubiaceae, and Caprifoliaceae\u2014diversified from the Late Cretaceous into the Paleogene. They evolved sympetalous (fused-petal) flowers with fused calyx, corolla, stamens, and pistil, as well as the capitulum (flower head). Highly specialized pollination relationships with insects and birds developed. Asterids comprise approximately one-third of extant angiosperm species.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Helianthus_annuus.jpg",
    color: "#b91c1c",
    groupId: "eudicots",
    sources: [
      {
        type: "wikipedia_en",
        label: "Asterids – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Asterids",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "grass_origin",
    era: "白亜紀前期〜後期",
    enEra: "Early\u2013Late Cretaceous",
    mya: 100,
    title: "イネ科の出現・草原の形成",
    enTitle: "Origin of Grasses and Grassland Formation",
    summary:
      "イネやムギ、トウモロコシの仲間（イネ科）が登場しました。後の時代に草原が広がることで、馬やウシのような草を食べる動物が進化し、人類の農業の土台にもなりました。",
    enSummary:
      "The grass family\u2014including rice, wheat, and corn\u2014appeared. As grasslands later spread across continents, grazing animals like horses and cattle evolved, and grasses ultimately became the foundation of human agriculture.",
    description:
      "イネ科（Poaceae）の起源は白亜紀前期〜後期（約113–100 Ma）にさかのぼり、恐竜の歯化石から検出された植物珪酸体（フィトリス）が証拠（2023年再評価）。新第三紀以降、C4光合成の進化により草原（サバンナ・ステップ・大草原）生態系を形成し、有蹄類や最終的に人類の農業の基盤となった。",
    enDescription:
      "The grass family (Poaceae) originated in the Early\u2013Late Cretaceous (~113\u2013100 Ma), evidenced by phytoliths detected in dinosaur tooth fossils (re-evaluated 2023). From the Neogene onward, the evolution of C\u2084 photosynthesis enabled grasses to form grassland ecosystems (savannas, steppes, prairies), driving the evolution of ungulates and ultimately providing the foundation for human agriculture.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Wheat_close-up.JPG",
    color: "#65a30d",
    groupId: "monocots",
    sources: [
      {
        type: "wikipedia_en",
        label: "Poaceae – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Poaceae",
        note: "oldest confirmed microfossils Albian ~113–100 Ma; dinosaur coprolite evidence ~66 Ma",
      },
    ],
    review: { status: "reviewed" },
  },

  {
    id: "mycorrhiza_origin",
    era: "デボン紀前期",
    enEra: "Early Devonian",
    mya: 407,
    title: "菌根（植物と菌の共生）の確立",
    enTitle: "Origin of Mycorrhizal Symbiosis",
    summary:
      "植物の根と菌（カビのなかま）が手を組むしくみ「菌根」がはっきりと残されています。植物は栄養を、菌は糖を受け取る助け合いで、植物の陸上進出を支えました。",
    enSummary:
      "Plant roots and fungi formed a partnership called 'mycorrhiza,' clearly preserved in fossils. Plants get nutrients, fungi get sugars — a mutual help that powered the colonization of land.",
    description:
      "スコットランドのライニーチャート（約407 Ma、前期デボン紀）から、現生のアーバスキュラー菌根（AM菌、グロムス門）と同じ構造をもつ菌根化石が発見されている。菌は植物にリン酸など土壌養分を、植物は菌に光合成産物を供給する相互共生で、最初期の陸上植物が貧栄養の土壌に進出する上で決定的な役割を果たした。現在も陸上植物の80%以上が何らかの菌根を形成する。",
    enDescription:
      "Fossils from the Rhynie chert in Scotland (~407 Ma, Early Devonian) preserve mycorrhizal structures essentially identical to modern arbuscular mycorrhizae (AM fungi, Glomeromycota). In this mutualism the fungus supplies the plant with phosphate and other soil nutrients, while the plant provides photosynthate. It was decisive in enabling the earliest land plants to thrive on nutrient-poor soils, and over 80% of extant land plants still form some kind of mycorrhizal association.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Arbuscular_mycorrhiza_microscope.jpg",
    color: "#a16207",
    sources: [
      {
        type: "wikipedia_en",
        label: "Mycorrhiza – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Mycorrhiza",
        note: "Rhynie chert ~407 Ma; Glomeromycota arbuscular mycorrhizae",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "first_forests",
    era: "デボン紀後期",
    enEra: "Late Devonian",
    mya: 385,
    title: "最初の森林の出現",
    enTitle: "Origin of the First Forests",
    summary:
      "高さ10m以上にもなる「本物の木」が地球に初めて現れました。アルカエオプテリスという木は、根を深く張って大地の風景を一変させました。",
    enSummary:
      "True trees over 10 meters tall appeared on Earth for the first time. *Archaeopteris* spread deep roots and completely transformed the landscape.",
    description:
      "*Archaeopteris*（アルカエオプテリス、前裸子植物）が後期デボン紀に出現し、樹高20–30m、深根をもつ初の本格的な樹木として地球史上最初の森林を形成。同時期にニューヨーク州ギルボアの化石林（*Eospermatopteris*、約385 Ma）も知られる。森林の出現は土壌形成を加速し、大気CO₂を急減させ、後期デボン紀の地球寒冷化と海洋無酸素事件にも影響したと考えられる。",
    enDescription:
      "*Archaeopteris*, a progymnosperm, appeared in the Late Devonian as the first true tree — reaching 20–30 m in height with deep root systems and forming Earth's first real forests. The Gilboa fossil forest in New York (*Eospermatopteris*, ~385 Ma) dates from the same interval. The rise of forests accelerated soil formation, drew down atmospheric CO\u2082 sharply, and is thought to have contributed to Late Devonian cooling and ocean anoxia.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Archaeopteris_hibernica.jpg",
    color: "#15803d",
    sources: [
      {
        type: "wikipedia_en",
        label: "Archaeopteris – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Archaeopteris",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "carboniferous_coal_forest",
    era: "石炭紀",
    enEra: "Carboniferous",
    mya: 310,
    title: "石炭紀の巨大森林と高酸素大気",
    enTitle: "Carboniferous Coal Forests and High-Oxygen Atmosphere",
    summary:
      "シダや木性シダの巨大な森が地球を覆い、その遺骸が地中に埋もれて石炭となりました。大気中の酸素は今より高い約30%にまで上がり、巨大な昆虫が飛び回りました。",
    enSummary:
      "Vast forests of giant ferns and tree ferns covered Earth, and their remains piled up to become coal. Atmospheric oxygen rose to about 30% — higher than today — and giant insects flew through the skies.",
    description:
      "石炭紀（359–299 Ma）には鱗木（*Lepidodendron*）・蘆木（*Calamites*）・木性シダなどが熱帯湿地で巨大な森林を形成。リグニンを分解する菌類がまだ十分発達していなかったため、植物遺骸が分解されずに堆積し石炭層となった。大気中O₂濃度は約30%にまで上昇し、メガネウラ（翼開長70cm級のトンボ類）など巨大節足動物が栄えた。",
    enDescription:
      "During the Carboniferous (359–299 Ma), tropical wetlands were dominated by enormous lycopsid trees (*Lepidodendron*), giant horsetails (*Calamites*), and tree ferns. Because lignin-degrading fungi had not yet fully evolved, plant remains accumulated undecayed and were buried as the world's principal coal deposits. Atmospheric O\u2082 climbed to roughly 30%, supporting giant arthropods such as *Meganeura* (a dragonfly relative with a 70-cm wingspan).",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Meyers_b15_s0272a.jpg",
    color: "#166534",
    groupId: "ferns",
    sources: [
      {
        type: "wikipedia_en",
        label: "Carboniferous – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Carboniferous",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "pt_extinction",
    era: "ペルム紀末",
    enEra: "End-Permian",
    mya: 252,
    title: "P-T 境界・史上最大の大量絶滅",
    enTitle: "End-Permian Mass Extinction",
    summary:
      "地球史上もっともひどい絶滅事件で、海の生き物の約9割が消えました。陸の植物の世界もリセットされ、その後にソテツや針葉樹の時代が本格的に始まりました。",
    enSummary:
      "The worst extinction event in Earth's history wiped out about 90% of marine species. Land plant communities were reset, and afterwards the age of cycads and conifers began in earnest.",
    description:
      "約2億5190万年前のペルム紀末に起きた史上最大の大量絶滅。シベリア・トラップの大規模火山活動による温室効果と海洋酸性化・海洋無酸素化が原因とされる。海洋無脊椎動物の約81%、陸上脊椎動物の約70%が絶滅。陸上植物相も大きく入れ替わり、グロッソプテリス相が消え、中生代型の裸子植物（ソテツ・針葉樹）が優勢となった。",
    enDescription:
      "The largest mass extinction in Earth's history, ~251.9 Ma at the Permian–Triassic boundary. It is attributed to massive volcanism of the Siberian Traps, which triggered greenhouse warming, ocean acidification, and ocean anoxia. About 81% of marine invertebrate species and ~70% of terrestrial vertebrate species went extinct. Land floras turned over dramatically: the Glossopteris flora vanished, and Mesozoic-type gymnosperms (cycads, conifers) came to dominate.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Extinction_intensity.svg",
    color: "#991b1b",
    sources: [
      {
        type: "wikipedia_en",
        label: "Permian–Triassic extinction event – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Permian%E2%80%93Triassic_extinction_event",
        note: "251.9 Ma; Siberian Traps trigger",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "kpg_extinction",
    era: "白亜紀末",
    enEra: "End-Cretaceous",
    mya: 66,
    title: "K-Pg 境界・恐竜の絶滅",
    enTitle: "K–Pg Extinction (End of the Dinosaurs)",
    summary:
      "巨大隕石がメキシコのユカタン半島に衝突し、恐竜（鳥以外）が絶滅しました。植物の世界では一時的にシダが大繁殖（シダスパイク）し、その後 被子植物がさらに広がっていきました。",
    enSummary:
      "A giant asteroid struck the Yucatán Peninsula in Mexico, ending the age of (non-avian) dinosaurs. In the plant world, ferns briefly bloomed everywhere (the 'fern spike'), and afterwards angiosperms spread even further.",
    description:
      "約6600万年前、直径約10kmの小惑星がメキシコ・ユカタン半島（チクシュルーブ・クレーター）に衝突し、白亜紀–古第三紀（K-Pg）境界の大量絶滅を引き起こした。鳥類を除く恐竜・アンモナイト・多くの海生爬虫類が絶滅。境界層直上では一時的にシダ胞子が異常に増える「シダスパイク」が世界中で観察される。被子植物は大きな打撃を受けつつも回復し、新生代に向けて多様性をさらに増した。",
    enDescription:
      "Approximately 66 Ma, a ~10 km asteroid struck the Yucatán Peninsula in Mexico (Chicxulub crater), causing the Cretaceous–Paleogene (K–Pg) mass extinction. Non-avian dinosaurs, ammonites, and many marine reptiles went extinct. Just above the boundary layer, a worldwide 'fern spike' of anomalously abundant fern spores is recorded. Angiosperms suffered heavy losses but recovered and diversified further heading into the Cenozoic.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicxulub_impact_-_artist_impression.jpg",
    color: "#dc2626",
    sources: [
      {
        type: "wikipedia_en",
        label: "Cretaceous–Paleogene extinction event – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_extinction_event",
        note: "Chicxulub impact ~66 Ma",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "c4_evolution",
    era: "漸新世〜中新世",
    enEra: "Oligocene\u2013Miocene",
    mya: 30,
    title: "C4光合成の進化と草原の拡大",
    enTitle: "Evolution of C\u2084 Photosynthesis and Grassland Expansion",
    summary:
      "イネ科の一部の植物が、暑くて乾いた場所でも効率よく光合成できる「C4」という新しいしくみを発明しました。これがサバンナや大草原を作り、馬やシマウマが進化する舞台を整えました。",
    enSummary:
      "Some grasses invented a new 'C4' photosynthesis pathway that works efficiently even in hot, dry places. This created savannas and prairies, setting the stage for horses and zebras to evolve.",
    description:
      "C4光合成は CO₂をいったん4炭素化合物として濃縮することで、高温・低CO₂条件でも光呼吸ロスを減らせる代謝経路。最古の証拠は漸新世（約30 Ma）にさかのぼり、独立に60回以上進化したと考えられる。中新世後期（約8–3 Ma）にはC4イネ科草本が急速に広がり、サバンナ・ステップ・大草原を形成。これに伴い有蹄類（馬・ウシ）の歯や脚も草食適応した。",
    enDescription:
      "C\u2084 photosynthesis concentrates CO\u2082 by first fixing it into 4-carbon compounds, reducing photorespiratory losses under hot, low-CO\u2082 conditions. The earliest evidence dates to the Oligocene (~30 Ma), and the pathway has evolved independently more than 60 times. In the late Miocene (~8–3 Ma), C\u2084 grasses spread rapidly and formed savannas, steppes, and prairies. Ungulates (horses, cattle) co-evolved teeth and limbs adapted to grazing in these new ecosystems.",
    isMajor: false,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti_Lion_Running_saturated.jpg",
    color: "#84cc16",
    groupId: "monocots",
    sources: [
      {
        type: "wikipedia_en",
        label: "C4 carbon fixation – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/C4_carbon_fixation",
        note: "oldest C4 ~30 Ma; grassland expansion 8–3 Ma",
      },
    ],
    review: { status: "reviewed" },
  },

  // ══ 文脈イベント（現代）══════════════════════════════════════
  {
    id: "human_origin",
    era: "更新世後期",
    enEra: "Late Pleistocene",
    mya: 0.3,
    title: "ホモ・サピエンスの登場",
    enTitle: "Emergence of Homo sapiens",
    summary:
      "私たち人間（ホモ・サピエンス）がアフリカに登場しました。道具を使い、集団で協力し、やがて世界中に広がっていきます。",
    enSummary:
      "Modern humans (Homo sapiens) appeared in Africa. Using tools and cooperating in groups, they eventually spread across the entire world.",
    description:
      "現生人類 *Homo sapiens* がアフリカに出現したのは約30万年前（0.3 Ma）。最古の化石はモロッコのジェベル・イルード（約315,000年前）で発見。植物採集・狩猟に依存する生活から始まり、やがて農耕・牧畜へ移行した。",
    enDescription:
      "Anatomically modern humans (*Homo sapiens*) appeared in Africa approximately 300,000 years ago (0.3 Ma). The oldest fossils were discovered at Jebel Irhoud, Morocco (~315,000 years ago). Early humans depended on plant gathering and hunting, eventually transitioning to agriculture and pastoralism.",
    isMajor: true,
    section: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Homo_Sapiens_Idaltu_-fossils_of_skull_of_man_and_child.JPG",
    color: "#7c3aed",
    sources: [
      {
        type: "wikipedia_en",
        label: "Homo sapiens – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/Homo_sapiens",
        note: "~300,000 years ago, Jebel Irhoud fossil",
      },
    ],
    review: { status: "reviewed" },
  },
  {
    id: "agriculture",
    era: "完新世",
    enEra: "Holocene",
    mya: 0.0115,
    title: "農業革命（最初の農耕）",
    enTitle: "Agricultural Revolution (First Farming)",
    summary:
      "人間が野生の植物を育て、コムギ・オオムギなどの作物として栽培し始めました。これにより人口が爆発的に増え、都市や文明の誕生につながりました。",
    enSummary:
      "Humans began cultivating wild plants, growing crops such as wheat and barley. This led to a population explosion and the birth of cities and civilizations.",
    description:
      "約1万1500年前（~9500 BCE）、西アジア（レバント地方）で最初の農耕が始まった。コムギ・オオムギ・ヒヨコマメ・レンズマメなど「8つの創始作物」の栽培化が確認されている。農業の発明は人口増加・都市文明・文字の誕生を可能にし、現在の地球表面の40%以上が農業利用地となった。",
    enDescription:
      "Approximately 11,500 years ago (~9,500 BCE), the first agriculture began in western Asia (the Levant). The domestication of the 'eight founder crops'\u2014emmer wheat, einkorn wheat, barley, chickpea, lentil, bitter vetch, flax, and pea\u2014has been confirmed. The invention of agriculture enabled population growth, urban civilization, and the development of writing. Today, over 40% of Earth's land surface is used for agriculture.",
    isMajor: true,
    section: "modern",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Wheat_close-up.JPG",
    color: "#92400e",
    sources: [
      {
        type: "wikipedia_en",
        label: "History of agriculture – Wikipedia EN",
        url: "https://en.wikipedia.org/wiki/History_of_agriculture",
        note: "Neolithic Revolution ~11,500 years ago; eight founder crops",
      },
    ],
    review: { status: "reviewed" },
  },
];
