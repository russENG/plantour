/**
 * 採用分類体系: APG IV (2016)
 * Angiosperm Phylogeny Group, Botanical Journal of the Linnean Society 181(1): 1–20 (2016)
 * https://doi.org/10.1111/boj.12385
 *
 * - 被子植物の分類・科の配置はすべて APG IV に準拠
 * - 裸子植物（イチョウ科・マツ科・ヒノキ科）は APG の対象外。伝統的な裸子植物分類を使用。
 * - シダ植物（トクサ科・ゼンマイ科）は APG の対象外。PPG I (2016) に基づく。
 * - APG V は2026年3月時点で未発行。APweb (mobot.org) を補完情報として参照。
 */
import type { Family } from "./types";

export const families: Family[] = [
  // ── キク科 ──────────────────────────────────────────
  {
    id: "asteraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Helianthus_annuus.jpg",
    jaName: "キク科",
    enName: "Daisy family",
    scientificName: "Asteraceae",
    order: "キク目",
    overview:
      "被子植物で最大級の科のひとつ。約24,000種が知られ、世界中に分布する。頭状花序（多数の小花が集まって1つの花のように見える）が最大の特徴。タンポポ・ヒマワリ・キク・コスモス・アザミなど身近な植物が多く属する。",
    characteristics: [
      "頭状花序（多数の小花が集まって1つの花に見える）",
      "舌状花（花弁が1方向に伸びる）と管状花（筒状）の組み合わせ",
      "果実は痩果（そうか）で、冠毛（綿毛）をもつことが多い",
      "葉は互生が多く、形は多様",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キク目 > キク科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "タンポポ属（Taraxacum）",
      "ヒマワリ属（Helianthus）",
      "キク属（Chrysanthemum）",
      "アザミ属（Cirsium）",
      "ヒメジョオン属（Erigeron）",
      "ヨモギ属（Artemisia）",
    ],
    evolutionEvents: ["頭状花序の進化", "冠毛による種子の風散布の発達"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キク科" },
    ],
  },

  // ── バラ科 ──────────────────────────────────────────
  {
    id: "rosaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosa_canina_3.jpg",
    jaName: "バラ科",
    enName: "Rose family",
    scientificName: "Rosaceae",
    order: "バラ目",
    overview:
      "サクラ・ウメ・リンゴ・イチゴ・バラなどを含む巨大な科。約3,000種が知られ、北半球の温帯域に多い。果実の多様性が際立ち、人間と密接な農業的つながりをもつ。",
    characteristics: [
      "花弁は5枚が基本",
      "萼片も5枚",
      "雄しべが多数",
      "果実の形は多様（核果・仁果・集合果・痩果など）",
      "托葉をもつことが多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ目 > バラ科",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    representativeGenera: [
      "サクラ属（Prunus）",
      "バラ属（Rosa）",
      "リンゴ属（Malus）",
      "イチゴ属（Fragaria）",
      "ナシ属（Pyrus）",
    ],
    evolutionEvents: ["花の基本形（5数性）の確立", "肉質果実による動物散布の進化"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/バラ科" },
    ],
  },

  // ── イネ科 ──────────────────────────────────────────
  {
    id: "poaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Oryza_sativa_-_Tianshui,_Gansu,_China.jpg",
    jaName: "イネ科",
    enName: "Grass family",
    scientificName: "Poaceae",
    order: "イネ目",
    overview:
      "単子葉植物の中で最も繁栄している科のひとつ。イネ・コムギ・トウモロコシなど主要穀物を含む。草原・草地生態系の基盤を形成し、地球陸地の40%以上を覆う。",
    characteristics: [
      "茎（稈・かん）は中空で節がある",
      "葉は細長く、葉鞘が茎を包む",
      "小穂（しょうすい）という独特の花のまとまり",
      "風媒花で花弁は退化",
      "葉脈は平行脈",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ類 > イネ目 > イネ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "イネ属（Oryza）",
      "コムギ属（Triticum）",
      "ススキ属（Miscanthus）",
      "エノコログサ属（Setaria）",
      "タケ亜科（Bambusoideae）",
      "ヨシ属（Phragmites）",
    ],
    evolutionEvents: ["C4光合成の独立的進化（複数系統で）", "草原生態系の形成（新第三紀〜）"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イネ科" },
    ],
  },

  // ── マメ科 ──────────────────────────────────────────
  {
    id: "fabaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Trifolium_repens_-_Köhler–s_Medizinal-Pflanzen-274.jpg",
    jaName: "マメ科",
    enName: "Legume family",
    scientificName: "Fabaceae",
    order: "マメ目",
    overview:
      "約20,000種が知られる巨大な科。大豆・インゲン・エンドウなど重要な食料作物を含む。根粒菌との共生による窒素固定が最大の特徴で、痩せた土地にも生育できる。蝶形花と豆のさや（莢果）が識別の目安。",
    characteristics: [
      "蝶形花（旗弁・翼弁・竜骨弁の組み合わせ）が多い",
      "果実はさや（莢果・きょうか）",
      "根に根粒菌が共生し窒素固定を行う",
      "葉は複葉が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > マメ目 > マメ科",
    divergenceEra: "白亜紀末〜古第三紀（約7000万〜6000万年前）",
    representativeGenera: [
      "ツメクサ属（Trifolium）",
      "ソラマメ属（Vicia）",
      "ダイズ属（Glycine）",
      "ネムノキ属（Albizia）",
    ],
    evolutionEvents: ["根粒菌との共生進化", "白亜紀末〜古第三紀の急速な多様化"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マメ科" },
    ],
  },

  // ── アブラナ科 ──────────────────────────────────────
  {
    id: "brassicaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Brassica_napus_Rapsfeld.jpg",
    jaName: "アブラナ科",
    enName: "Mustard family",
    scientificName: "Brassicaceae",
    order: "アブラナ目",
    overview:
      "キャベツ・ダイコン・アブラナ・ナズナなどを含む科。十字形に並ぶ4枚の花弁が最大の特徴（十字花科の旧称はここから）。世界に約370属4000種が知られる。",
    characteristics: [
      "花弁は4枚で十字形に並ぶ（十字花）",
      "萼片も4枚",
      "雄しべは通常6本（外側2本が短い）",
      "果実は長角果または短角果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > アブラナ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ナズナ属（Capsella）",
      "アブラナ属（Brassica）",
      "ダイコン属（Raphanus）",
      "イヌガラシ属（Rorippa）",
    ],
    evolutionEvents: ["十字形花弁の進化（受粉効率化）", "マスタードオイル配糖体の獲得（草食者への防御）"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アブラナ科" },
    ],
  },

  // ── シソ科 ──────────────────────────────────────────
  {
    id: "lamiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Perilla_frutescens_var_crispa.jpg",
    jaName: "シソ科",
    enName: "Mint family",
    scientificName: "Lamiaceae",
    order: "シソ目",
    overview:
      "シソ・ミント・ラベンダー・バジルなど芳香をもつ植物が多く属する科。唇形花（上唇と下唇に分かれた花）と四角い茎が最大の特徴。約240属7000種が知られる。",
    characteristics: [
      "茎の断面が四角形",
      "葉は対生",
      "唇形花（上唇2裂・下唇3裂）",
      "果実は4個の分果（小堅果）",
      "多くの種が精油（エッセンシャルオイル）を含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > シソ目 > シソ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ホトケノザ属（Lamium）",
      "シソ属（Perilla）",
      "ハッカ属（Mentha）",
      "ラベンダー属（Lavandula）",
    ],
    evolutionEvents: ["精油・芳香成分の多様な進化", "唇形花による特定昆虫への適応"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シソ科" },
    ],
  },

  // ── タデ科 ──────────────────────────────────────────
  {
    id: "polygonaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rumex_acetosa.jpg",
    jaName: "タデ科",
    enName: "Knotweed family",
    scientificName: "Polygonaceae",
    order: "ナデシコ目",
    overview:
      "タデ・スイバ・イタドリ・ソバなどを含む科。茎の節が膨らんで「托葉鞘（たくようしょう）」という特徴的な膜で包まれることが多い。世界に約55属1100種が知られる。",
    characteristics: [
      "茎の節を包む托葉鞘（膜状の鞘）",
      "花弁は退化し、萼片が花弁状になることが多い",
      "果実は三稜形または扁平な痩果",
      "葉は単葉で互生が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ナデシコ目 > タデ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "スイバ属（Rumex）",
      "タデ属（Polygonum）",
      "イタドリ属（Reynoutria）",
      "ソバ属（Fagopyrum）",
    ],
    evolutionEvents: ["世界各地への広域分布の形成"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/タデ科" },
    ],
  },

  // ── ナデシコ科 ──────────────────────────────────────
  {
    id: "caryophyllaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Stellaria_media_002.jpg",
    jaName: "ナデシコ科",
    enName: "Pink family",
    scientificName: "Caryophyllaceae",
    order: "ナデシコ目",
    overview:
      "ハコベ・ナデシコ・カーネーションなどを含む科。花弁が2裂することや、茎の節が膨らむことが特徴。約88属2200種が知られ、温帯を中心に分布する。",
    characteristics: [
      "花弁がしばしば深く2裂する",
      "茎の節がふくらむことがある",
      "葉は対生で単葉",
      "果実はさく果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ナデシコ目 > ナデシコ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ハコベ属（Stellaria）",
      "ナデシコ属（Dianthus）",
      "センノウ属（Lychnis）",
    ],
    evolutionEvents: [],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ナデシコ科" },
    ],
  },

  // ── オオバコ科 ──────────────────────────────────────
  {
    id: "plantaginaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Plantago_major_Broadleaf_Plantain.jpg",
    jaName: "オオバコ科",
    enName: "Plantain family",
    scientificName: "Plantaginaceae",
    order: "シソ目",
    overview:
      "APG体系ではゴマノハグサ科の一部などを取り込んで大きく再編された科。オオバコ属のほか、オオイヌノフグリ・ジギタリス・クワガタソウなども含む。",
    characteristics: [
      "葉脈が弓なりに走る（オオバコ属）",
      "風媒花が多い（オオバコ属）",
      "花は4数性が多い",
      "APG体系での科の大幅再編でさまざまな植物を含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > シソ目 > オオバコ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "オオバコ属（Plantago）",
      "クワガタソウ属（Veronica）",
      "ジギタリス属（Digitalis）",
    ],
    evolutionEvents: ["APG体系での科の大幅再編"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/オオバコ科" },
    ],
  },

  // ── スミレ科 ──────────────────────────────────────
  {
    id: "violaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Viola_odorata_fg01.jpg",
    jaName: "スミレ科",
    enName: "Violet family",
    scientificName: "Violaceae",
    order: "キントラノオ目",
    overview:
      "スミレ属を中心とする科。約23属830種が知られ、スミレ属だけで約500種以上ある。唇弁に距（きょ：蜜が入る突起）があることが特徴。閉鎖花（花が開かずに結実する）でも種子を作る。",
    characteristics: [
      "5枚の花弁（左右相称）",
      "下の花弁（唇弁）の基部に距がある",
      "閉鎖花をつけることが多い",
      "種子に好蟻体（エライオソーム）があり、アリが散布",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キントラノオ目 > スミレ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "スミレ属（Viola）",
    ],
    evolutionEvents: ["閉鎖花と開放花の二型的な繁殖戦略の進化", "アリによる種子散布の進化"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スミレ科" },
    ],
  },

  // ── カタバミ科 ──────────────────────────────────────
  {
    id: "oxalidaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Oxalis_acetosella_flowers.jpg",
    jaName: "カタバミ科",
    enName: "Wood-sorrel family",
    scientificName: "Oxalidaceae",
    order: "カタバミ目",
    overview:
      "主にカタバミ属（Oxalis）からなる科。世界に約900種が知られ、熱帯〜温帯に分布。南アメリカに多様性の中心がある。",
    characteristics: [
      "葉は3出複葉（ハート形の小葉3枚）が多い",
      "就眠運動（夜間・曇天に葉・花を閉じる）",
      "5弁花",
      "葉にシュウ酸が含まれ酸味がある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > カタバミ目 > カタバミ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: ["カタバミ属（Oxalis）"],
    evolutionEvents: ["南米での爆発的多様化"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カタバミ科" },
    ],
  },

  // ── ドクダミ科 ──────────────────────────────────────
  {
    id: "saururaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Houttuynia_cordata02.jpg",
    jaName: "ドクダミ科",
    enName: "Lizard's-tail family",
    scientificName: "Saururaceae",
    order: "コショウ目",
    overview:
      "基部被子植物に属する古い系統の小さな科。4属6種のみからなる。コショウ目に含まれ、被子植物の初期分岐に近い。",
    characteristics: [
      "花弁・萼片なし（苞が花弁状になる）",
      "独特の強いにおい",
      "湿地・日陰に生育",
      "地下茎で広がる多年草",
    ],
    phylogeneticPosition: "被子植物 > 基部被子植物 > コショウ目 > ドクダミ科",
    divergenceEra: "白亜紀（基部被子植物として非常に古い系統）",
    representativeGenera: ["ドクダミ属（Houttuynia）"],
    evolutionEvents: ["基部被子植物の古い系統として初期被子植物の特徴を保持"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ドクダミ科" },
    ],
  },

  // ── ガマ科 ──────────────────────────────────────────
  {
    id: "typhaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Typha_latifolia.jpg",
    jaName: "ガマ科",
    enName: "Cattail family",
    scientificName: "Typhaceae",
    order: "イネ目",
    overview:
      "ガマ属とミクリ属からなる小さな科。水辺・湿地に生育する大型多年草が中心。世界に広く分布し、ガマのソーセージ状の花穂は世界中で認識される。",
    characteristics: [
      "水辺・湿地に生育",
      "葉は細長くて平ら",
      "ガマ属は特徴的なソーセージ状の花穂",
      "風媒花",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ類 > イネ目 > ガマ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ガマ属（Typha）",
      "ミクリ属（Sparganium）",
    ],
    evolutionEvents: ["水辺環境への特殊化"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ガマ科" },
    ],
  },

  // ── サトイモ科 ──────────────────────────────────────
  {
    id: "araceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zantedeschia_aethiopica_flowers.jpg",
    jaName: "サトイモ科",
    enName: "Arum family",
    scientificName: "Araceae",
    order: "オモダカ目",
    overview:
      "サトイモ・ミズバショウ・カラー・モンステラなどを含む大きな科。仏炎苞（ぶつえんほう）と肉穂花序（にくすいかじょ）の組み合わせが最大の特徴。約140属3750種が知られる。",
    characteristics: [
      "仏炎苞（大きな包葉）と肉穂花序（棒状の花序）",
      "多くの種に毒性（シュウ酸カルシウムなど）",
      "葉は多様（ハート形・裂けたもの・幅広いものなど）",
      "熱帯に多様性の中心がある",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > サトイモ科",
    divergenceEra: "白亜紀後期",
    representativeGenera: [
      "ミズバショウ属（Lysichiton）",
      "サトイモ属（Colocasia）",
      "マムシグサ属（Arisaema）",
    ],
    evolutionEvents: ["仏炎苞による昆虫誘引機構の進化", "肉穂花序による発熱（体温調節）の進化"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サトイモ科" },
    ],
  },

  // ── スズカケノキ科 ──────────────────────────────────
  {
    id: "platanaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Platanus_x_hispanica_-_Barcelona.jpg",
    jaName: "スズカケノキ科",
    enName: "Plane-tree family",
    scientificName: "Platanaceae",
    order: "ヤマモガシ目",
    overview:
      "スズカケノキ属（Platanus）のみを含む小さな科。北アメリカ・東地中海・東アジアに隔離分布する。街路樹として世界中で使われる。",
    characteristics: [
      "樹皮が板状にはがれて迷彩状になる",
      "大型の掌状複葉",
      "球状の複合果（頭状果）",
      "単性花・風媒花",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ヤマモガシ目 > スズカケノキ科",
    divergenceEra: "白亜紀（約1億年前〜）",
    representativeGenera: ["スズカケノキ属（Platanus）"],
    evolutionEvents: ["基部真正双子葉類の古い系統", "白亜紀の化石記録あり"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スズカケノキ科" },
    ],
  },

  // ── ブナ科 ──────────────────────────────────────────
  {
    id: "fagaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Quercus_robur.jpg",
    jaName: "ブナ科",
    enName: "Beech family",
    scientificName: "Fagaceae",
    order: "ブナ目",
    overview:
      "ブナ・コナラ・クヌギ・カシ・シイなどを含む科。北半球温帯の落葉広葉樹林を構成する主要な樹木群。どんぐり（堅果）をつけることで知られる。里山の生態系において中心的な役割を果たす。",
    characteristics: [
      "果実は堅果（どんぐり）で、殻斗（かくと）に包まれる",
      "葉は単葉で互生",
      "風媒花（花は小さく目立たない）",
      "雌雄同株",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ブナ目 > ブナ科",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    representativeGenera: [
      "コナラ属（Quercus）",
      "ブナ属（Fagus）",
      "シイ属（Castanopsis）",
      "クリ属（Castanea）",
    ],
    evolutionEvents: ["どんぐりによる動物散布の進化", "北半球落葉樹林の形成"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ブナ科" },
    ],
  },

  // ── クスノキ科 ──────────────────────────────────────
  {
    id: "lauraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Laurus_nobilis_tree.jpg",
    jaName: "クスノキ科",
    enName: "Laurel family",
    scientificName: "Lauraceae",
    order: "クスノキ目",
    overview:
      "クスノキ・シナモン・アボカド・月桂樹などを含む科。精油や芳香成分を豊富にもつ植物が多く、香料・食料・薬用として重要。被子植物の基部的なグループ（モクレン類）に属する古い系統。",
    characteristics: [
      "葉・樹皮に独特の芳香をもつことが多い",
      "花弁・萼片の区別がなく花被片が6枚",
      "果実は液果（1個の種子をもつ）",
      "常緑が多い",
    ],
    phylogeneticPosition: "被子植物 > モクレン類 > クスノキ目 > クスノキ科",
    divergenceEra: "白亜紀前期（約1億2000万年前〜）",
    representativeGenera: [
      "クスノキ属（Cinnamomum）",
      "ゲッケイジュ属（Laurus）",
      "アボカド属（Persea）",
    ],
    evolutionEvents: ["被子植物の基部グループとして古い形質を保持", "精油成分の多様な進化"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クスノキ科" },
    ],
  },

  // ── ツバキ科 ──────────────────────────────────────
  {
    id: "theaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Camellia_japonica_flowers.jpg",
    jaName: "ツバキ科",
    enName: "Tea family",
    scientificName: "Theaceae",
    order: "ツツジ目",
    overview:
      "ツバキ・サザンカ・チャ（お茶）などを含む科。東アジアに多様性の中心がある。多数の雄しべが合着する特徴をもつ。お茶（Camellia sinensis）の原料として世界的に重要。",
    characteristics: [
      "多数の雄しべ（花糸が合着して束になる）",
      "光沢のある革質の葉",
      "常緑低木〜高木が多い",
      "花弁は5枚基本",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ツツジ目 > ツバキ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ツバキ属（Camellia）",
    ],
    evolutionEvents: ["東アジアでの多様化", "茶の原料植物としての人類との関係"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツバキ科" },
    ],
  },

  // ── モクレン科 ──────────────────────────────────────
  {
    id: "magnoliaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Magnolia_liliiflora1.jpg",
    jaName: "モクレン科",
    enName: "Magnolia family",
    scientificName: "Magnoliaceae",
    order: "モクレン目",
    overview:
      "モクレン・コブシ・ユリノキなどを含む科。被子植物の中で比較的古い系統に属し、虫媒花の原始的な特徴（花弁と萼が分化していないなど）を残す。白亜紀前期から化石記録がある。",
    characteristics: [
      "花弁と萼片の境界が不明確（花被片が多数）",
      "雄しべと雌しべが多数で螺旋状",
      "葉は単葉互生",
      "葉に托葉の痕跡がある",
    ],
    phylogeneticPosition: "被子植物 > モクレン類 > モクレン目 > モクレン科",
    divergenceEra: "白亜紀前期（約1億年前〜）",
    representativeGenera: [
      "モクレン属（Magnolia）",
      "ユリノキ属（Liriodendron）",
    ],
    evolutionEvents: ["甲虫による受粉（原始的な花の進化）", "被子植物の初期多様化期に分岐"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/モクレン科" },
    ],
  },

  // ── マツ科 ──────────────────────────────────────────
  {
    id: "pinaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pinus_sylvestris1.jpg",
    jaName: "マツ科",
    enName: "Pine family",
    scientificName: "Pinaceae",
    order: "マツ目",
    overview:
      "マツ・スギ・モミ・ヒマラヤスギなどを含む裸子植物の科。約11属230種が知られ、北半球の寒帯〜温帯に広く分布する。林業上も最も重要な科のひとつ。",
    characteristics: [
      "常緑（ほとんど）の針葉樹",
      "葉は針状で束になる（マツ属は2〜5本束）",
      "球果（まつかさ）をつける裸子植物",
      "樹脂（松脂）を含む",
    ],
    phylogeneticPosition: "裸子植物 > マツ綱 > マツ目 > マツ科",
    divergenceEra: "三畳紀〜ジュラ紀（約2億年前〜）",
    representativeGenera: [
      "マツ属（Pinus）",
      "モミ属（Abies）",
      "トウヒ属（Picea）",
      "カラマツ属（Larix）",
    ],
    evolutionEvents: ["中生代の針葉樹大繁栄期", "寒帯タイガ林の形成"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マツ科" },
    ],
  },

  // ── ヒノキ科 ──────────────────────────────────────
  {
    id: "cupressaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cryptomeria_japonica_05.jpg",
    jaName: "ヒノキ科",
    enName: "Cypress family",
    scientificName: "Cupressaceae",
    order: "マツ目",
    overview:
      "スギ・ヒノキ・セコイアなどを含む針葉樹の科。広義のヒノキ科にはスギ属も含まれる（APG体系以降）。世界最大の樹木であるセコイアもこの科に属する。",
    characteristics: [
      "常緑針葉樹が多い",
      "葉は鱗片状または針状",
      "球果をつける裸子植物",
      "樹脂を含み芳香がある",
    ],
    phylogeneticPosition: "裸子植物 > マツ綱 > マツ目 > ヒノキ科",
    divergenceEra: "三畳紀（約2億3000万年前〜）",
    representativeGenera: [
      "スギ属（Cryptomeria）",
      "ヒノキ属（Chamaecyparis）",
      "セコイア属（Sequoia）",
      "ネズミサシ属（Juniperus）",
    ],
    evolutionEvents: ["裸子植物針葉樹類の中生代大繁栄", "球果による種子保護の進化"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒノキ科" },
    ],
  },

  // ── イチョウ科 ──────────────────────────────────────
  {
    id: "ginkgoaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ginkgo_biloba_at_The_Morton_Arboretum_(30176248105).jpg",
    jaName: "イチョウ科",
    enName: "Ginkgo family",
    scientificName: "Ginkgoaceae",
    order: "イチョウ目",
    overview:
      "現存する種は Ginkgo biloba の1種のみ。かつては多くの種があったが、現在は「生きた化石」として残る。裸子植物の中でも非常に古い系統。",
    characteristics: [
      "扇形の葉（二叉脈）",
      "雌雄異株",
      "種子（銀杏）は外種皮が肉質で悪臭",
      "落葉性",
    ],
    phylogeneticPosition: "裸子植物 > イチョウ綱 > イチョウ目 > イチョウ科",
    divergenceEra: "ペルム紀〜三畳紀（約2億5000万年前〜）",
    representativeGenera: ["イチョウ属（Ginkgo）"],
    evolutionEvents: ["裸子植物から分岐した独立した系統", "中生代に多様化し現在は1種に縮小"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イチョウ科" },
    ],
  },

  // ── カバノキ科 ──────────────────────────────────────
  {
    id: "betulaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Betula_pendula_Roth_1.jpg",
    jaName: "カバノキ科",
    enName: "Birch family",
    scientificName: "Betulaceae",
    order: "ブナ目",
    overview:
      "シラカバ・ハンノキ・ハシバミなどを含む科。北半球の温帯〜寒帯に分布し、白い樹皮や長い尾状花序が特徴。ハンノキは根粒菌と共生し、湿地・荒地を先行的に占拠する。",
    characteristics: [
      "尾状花序（長いひも状の花序）",
      "風媒花",
      "果実は翼のある小堅果",
      "白い樹皮がはがれやすい種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ブナ目 > カバノキ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "カバノキ属（Betula）",
      "ハンノキ属（Alnus）",
      "ハシバミ属（Corylus）",
    ],
    evolutionEvents: ["北半球冷温帯林の形成に貢献"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カバノキ科" },
    ],
  },

  // ── アジサイ科 ──────────────────────────────────────
  {
    id: "hydrangeaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hydrangea_macrophylla_in_Shukkei-en.jpg",
    jaName: "アジサイ科",
    enName: "Hydrangea family",
    scientificName: "Hydrangeaceae",
    order: "ミズキ目",
    overview:
      "アジサイ・ウツギなどを含む科。東アジアに多様性の中心がある。APG体系ではゴマノハグサ目からミズキ目に移された。装飾花（萼が発達した不稔花）をもつことが特徴。",
    characteristics: [
      "装飾花（萼片が発達した大型の不稔花）をもつ",
      "土壌pHにより花色が変化するものがある",
      "落葉低木〜高木",
      "対生葉",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ミズキ目 > アジサイ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "アジサイ属（Hydrangea）",
      "ウツギ属（Deutzia）",
    ],
    evolutionEvents: ["装飾花による送粉効率の向上"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アジサイ科" },
    ],
  },

  // ── ニレ科 ──────────────────────────────────────────
  {
    id: "ulmaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zelkova_serrata_in_Kobe_Oji_Zoo.jpg",
    jaName: "ニレ科",
    enName: "Elm family",
    scientificName: "Ulmaceae",
    order: "バラ目",
    overview:
      "ケヤキ・ニレ・エノキなどを含む科。北半球の温帯に広く分布する落葉高木が多い。葉の基部が左右非対称であることが特徴。風媒花で、果実に翼をもつものが多い。",
    characteristics: [
      "葉の基部が左右非対称",
      "単葉互生で縁に鋸歯",
      "風媒花（花は小さく目立たない）",
      "果実は翼果または核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > バラ目 > ニレ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ケヤキ属（Zelkova）",
      "ニレ属（Ulmus）",
      "エノキ属（Celtis）",
    ],
    evolutionEvents: [],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ニレ科" },
    ],
  },

  // ── ヒルガオ科 ──────────────────────────────────────
  {
    id: "convolvulaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ipomoea_nil_(Morning_glory)_in_Kadavoor.jpg",
    jaName: "ヒルガオ科",
    enName: "Morning Glory family",
    scientificName: "Convolvulaceae",
    order: "ナス目",
    overview:
      "アサガオ・ヒルガオ・サツマイモなどを含む科。つる性植物が多く、ラッパ（じょうご）状の花が特徴。サツマイモは重要な食料作物。世界に約58属1880種が知られる。",
    characteristics: [
      "ラッパ（じょうご）状の合弁花",
      "つる性（左巻きが多い）",
      "葉はハート形〜3裂が多い",
      "茎を切ると乳液が出ることがある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ナス目 > ヒルガオ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "アサガオ属（Ipomoea）",
      "ヒルガオ属（Calystegia）",
    ],
    evolutionEvents: ["つる性による他植物を利用した成長戦略"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒルガオ科" },
    ],
  },

  // ── トクサ科 ──────────────────────────────────────
  {
    id: "equisetaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Equisetum_arvense.jpg",
    jaName: "トクサ科",
    enName: "Horsetail family",
    scientificName: "Equisetaceae",
    order: "トクサ目",
    overview:
      "現存するトクサ属のみからなる科。かつては大木になる種が石炭紀の森を構成したが、現在は草本のみ。茎に節があり輪生する側枝・葉が特徴。胞子植物（種子をもたない）。",
    characteristics: [
      "茎に節があり、節ごとに輪生する側枝",
      "葉は退化して鱗片状（節に鞘として残る）",
      "茎にシリカ（ケイ素）を含み硬い",
      "胞子嚢穂（胞子を作る穂）をつける",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物 > トクサ目 > トクサ科",
    divergenceEra: "古生代デボン紀（約4億年前〜）",
    representativeGenera: ["トクサ属（Equisetum）"],
    evolutionEvents: ["石炭紀に木本（高さ30m超）として繁栄", "現代では草本のみに縮小"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トクサ科" },
    ],
  },

  // ── ゼンマイ科 ──────────────────────────────────────
  {
    id: "osmundaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Osmunda_regalis_Habitus.jpg",
    jaName: "ゼンマイ科",
    enName: "Royal Fern family",
    scientificName: "Osmundaceae",
    order: "ゼンマイ目",
    overview:
      "ゼンマイ・ヤマドリゼンマイなどを含む小さな科。シダ植物の中でも古い系統で、三畳紀にさかのぼる化石記録がある。栄養葉と胞子葉が別々になる点が特徴的。",
    characteristics: [
      "栄養葉と胞子葉（または胞子嚢をつける部分）が分かれる",
      "大型で羽状複葉",
      "若芽は渦巻き状に巻いて展開する（ゼンマイ）",
      "根茎は太く直立する",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物 > ゼンマイ目 > ゼンマイ科",
    divergenceEra: "三畳紀（約2億5000万年前〜）",
    representativeGenera: ["ゼンマイ属（Osmunda）"],
    evolutionEvents: ["シダ植物の古い系統として「生きた化石」的存在"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ゼンマイ科" },
    ],
  },

  // ── ムクロジ科 ──────────────────────────────────────
  {
    id: "sapindaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Acer_palmatum_autumn_leaves.jpg",
    jaName: "ムクロジ科",
    enName: "Soapberry family",
    scientificName: "Sapindaceae",
    order: "ムクロジ目",
    overview:
      "APG体系でカエデ科・トチノキ科を統合した大きな科。カエデ・モミジ・トチノキ・ムクロジなどを含む。プロペラ状の翼果による風散布が進化のハイライト。世界に約2000種、温帯〜熱帯に広く分布する。",
    characteristics: [
      "多くは対生複葉または掌状裂葉",
      "翼果（プロペラ状果実）による風散布（カエデ属）",
      "秋の紅葉・黄葉が美しい種が多い",
      "花は小さく、蜜を出して虫媒",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ムクロジ目 > ムクロジ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "カエデ属（Acer）",
      "トチノキ属（Aesculus）",
      "ムクロジ属（Sapindus）",
    ],
    evolutionEvents: ["翼果による効率的な風散布の獲得", "秋の紅葉・黄葉（アントシアニン・カロテノイド蓄積）"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ムクロジ科" },
    ],
  },

  // ── ミズキ科 ──────────────────────────────────────
  {
    id: "cornaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cornus_florida_flowers.jpg",
    jaName: "ミズキ科",
    enName: "Dogwood family",
    scientificName: "Cornaceae",
    order: "ミズキ目",
    overview:
      "ハナミズキ・ヤマボウシ・ミズキなどを含む科。北半球の温帯に広く分布する。総苞片が大きく発達して花弁状に見えるものが多く、観賞用として人気が高い。APG体系ではセリ目に近縁。",
    characteristics: [
      "総苞片が花弁状に発達する種が多い（ハナミズキ・ヤマボウシ）",
      "対生葉で弧状脈が目立つ",
      "果実は核果（液果状）",
      "落葉または常緑の低木〜高木",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ミズキ目 > ミズキ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ミズキ属（Cornus）",
    ],
    evolutionEvents: ["大型総苞片による送粉者誘引の獲得"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミズキ科" },
    ],
  },

  // ── ヤナギ科 ──────────────────────────────────────
  {
    id: "salicaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Salix_babylonica_by_kenpei.jpg",
    jaName: "ヤナギ科",
    enName: "Willow family",
    scientificName: "Salicaceae",
    order: "キントラノオ目",
    overview:
      "ヤナギ・ポプラを含む科。APG体系では旧フタリシズカ科などを統合しており、熱帯のサリックス類も含む広義の科となった。水辺・湿地に多く、柳絮（柳の綿毛）による風散布が特徴。",
    characteristics: [
      "雌雄異株（ヤナギ・ポプラ）",
      "尾状花序（柳の穂）",
      "種子に綿毛がつき風散布（柳絮）",
      "水辺・湿地を好む種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キントラノオ目 > ヤナギ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ヤナギ属（Salix）",
      "ポプラ属（Populus）",
    ],
    evolutionEvents: ["綿毛つき種子による遠距離風散布の獲得", "水辺環境への適応（柔軟な枝・根系）"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤナギ科" },
    ],
  },

  // ── ヒガンバナ科 ──────────────────────────────────────
  {
    id: "amaryllidaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Narcissus_poeticus.jpg",
    jaName: "ヒガンバナ科",
    enName: "Amaryllis family",
    scientificName: "Amaryllidaceae",
    order: "キジカクシ目",
    overview:
      "ヒガンバナ・スイセン・ネギ・ニラなどを含む科。APG体系でネギ亜科（旧ユリ科・旧ネギ科）を統合した。花の構造が美しく、観賞用として広く栽培される種が多い。アルカロイド系の毒（リコリン等）を含む種がある。",
    characteristics: [
      "花被片6枚が2輪に並ぶ",
      "地下に鱗茎（球根）をもつ種が多い",
      "葉は線形〜帯状",
      "アルカロイドを含む有毒種がある",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > ヒガンバナ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ヒガンバナ属（Lycoris）",
      "スイセン属（Narcissus）",
      "ネギ属（Allium）",
    ],
    evolutionEvents: ["鱗茎による養分貯蔵と季節的休眠の獲得", "リコリン等アルカロイドによる草食動物忌避"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒガンバナ科" },
    ],
  },

  // ── ツユクサ科 ──────────────────────────────────────
  {
    id: "commelinaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Commelina_communis.jpg",
    jaName: "ツユクサ科",
    enName: "Dayflower family",
    scientificName: "Commelinaceae",
    order: "ツユクサ目",
    overview:
      "ツユクサ・ムラサキツユクサなどを含む単子葉植物の科。朝に咲いて昼には閉じる「一日花」が特徴。熱帯・亜熱帯に多く分布し、細胞・遺伝学研究の材料として使われた歴史がある。",
    characteristics: [
      "1日限りで閉じる一日花",
      "花被片3枚（外花被）＋3枚（内花被、うち2枚が青く目立つ）",
      "茎の節が膨らみ、节から根が出やすい",
      "葉は互生、葉鞘をもつ",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ目 > ツユクサ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "ツユクサ属（Commelina）",
      "ムラサキツユクサ属（Tradescantia）",
    ],
    evolutionEvents: ["一日花による効率的な送粉", "節からの不定根発生による栄養繁殖"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツユクサ科" },
    ],
  },

  // ── ユリ科 ──────────────────────────────────────────
  {
    id: "liliaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lilium_candidum_L.jpg",
    jaName: "ユリ科",
    enName: "Lily family",
    scientificName: "Liliaceae",
    order: "ユリ目",
    overview:
      "APG体系で大幅に再編され、旧ユリ科の多くがキジカクシ科・ヒガンバナ科などに移行した。現在の狭義ユリ科はユリ属・チューリップ属・カタクリ属など地下に鱗茎をもつ多年草を中心とする。",
    characteristics: [
      "地下に鱗茎（球根）をもつ",
      "花被片6枚（外3＋内3）",
      "葉脈は平行脈（単子葉類）",
      "花が大きく目立つ種が多い",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ユリ目 > ユリ科",
    divergenceEra: "白亜紀後期",
    representativeGenera: [
      "ユリ属（Lilium）",
      "チューリップ属（Tulipa）",
      "カタクリ属（Erythronium）",
    ],
    evolutionEvents: ["鱗茎による越冬・養分蓄積戦略", "大型花による送粉者誘引"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ユリ科" },
    ],
  },

  // ── フウロソウ科 ──────────────────────────────────────
  {
    id: "geraniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Geranium_pratense_a1.jpg",
    jaName: "フウロソウ科",
    enName: "Geranium family",
    scientificName: "Geraniaceae",
    order: "フウロソウ目",
    overview:
      "フウロソウ属（ゲンノショウコ等）・テンジクアオイ属（ゼラニウム）などを含む科。果実が熟すと弾ける爆発的散布（弾性散布）が特徴的。民間薬（ゲンノショウコ）として知られる種もある。",
    characteristics: [
      "5花弁の花",
      "果実が成熟すると反り返り種子を飛ばす（弾性散布）",
      "葉は掌状〜羽状複葉、多くに独特の香り",
      "茎・葉に腺毛をもつ種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > フウロソウ目 > フウロソウ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "フウロソウ属（Geranium）",
      "テンジクアオイ属（Pelargonium）",
    ],
    evolutionEvents: ["弾性果実（爆弾状散布）による効率的な種子散布"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フウロソウ科" },
    ],
  },

  // ── キキョウ科 ──────────────────────────────────────
  {
    id: "campanulaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Platycodon_grandiflorus_01.jpg",
    jaName: "キキョウ科",
    enName: "Bellflower family",
    scientificName: "Campanulaceae",
    order: "キク目",
    overview:
      "キキョウ・ホタルブクロなどを含む科。鐘形または星形の花が特徴。APG体系では広義にキク目に位置づけられ、ロベリア科を統合した分類もある。日本では秋の七草のひとつとして親しまれるキキョウが代表種。",
    characteristics: [
      "合弁花で鐘形〜星形",
      "花弁5枚が合着",
      "乳液（白い汁）を含む種が多い",
      "葉は互生、単葉",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キク目 > キキョウ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "キキョウ属（Platycodon）",
      "ホタルブクロ属（Campanula）",
    ],
    evolutionEvents: ["鐘形花冠による特定ハチ類との送粉共生"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キキョウ科" },
    ],
  },

  // ── セリ科 ──────────────────────────────────────────
  {
    id: "apiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Daucus_carota_subsp._carota_white_flowers.jpg",
    jaName: "セリ科",
    enName: "Carrot family",
    scientificName: "Apiaceae",
    order: "セリ目",
    overview:
      "セリ・ミツバ・ニンジン・パセリなどを含む科。多数の小花が傘状に集まる「複散形花序」が特徴。食用・薬用・有毒種が混在し、見た目が似ていることから混同しないよう注意が必要。",
    characteristics: [
      "複散形花序（傘状に広がる）",
      "茎は中空または髄がある",
      "葉は羽状複葉が多く、葉鞘をもつ",
      "精油を含み独特の香り",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > セリ目 > セリ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "セリ属（Oenanthe）",
      "ニンジン属（Daucus）",
      "ドクニンジン属（Conium）",
    ],
    evolutionEvents: ["複散形花序による多数の小花の集合で送粉効率を向上"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/セリ科" },
    ],
  },

  // ── キジカクシ科 ──────────────────────────────────────
  {
    id: "asparagaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Asparagus_officinalis_Meyers_Gross-Konversations-Lexikon.jpg",
    jaName: "キジカクシ科",
    enName: "Asparagus family",
    scientificName: "Asparagaceae",
    order: "キジカクシ目",
    overview:
      "APG体系でクサスギカズラ科・ヒヤシンス科・ムスカリ科・ユッカ科など多くの科を統合した大きな科。アスパラガス・ヤブラン・オモト・スズラン・ムスカリなどを含む。日陰や乾燥に強い地被植物として重要。",
    characteristics: [
      "花被片6枚（3＋3）",
      "地下茎・球根・根茎をもつ種が多い",
      "耐陰性が高く、林床・日陰でも生育",
      "葉脈は平行脈（単子葉類）",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > キジカクシ科",
    divergenceEra: "白亜紀後期",
    representativeGenera: [
      "クサスギカズラ属（Asparagus）",
      "ヤブラン属（Liriope）",
      "スズラン属（Convallaria）",
    ],
    evolutionEvents: ["耐陰性の獲得による林床環境への進出"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キジカクシ科" },
    ],
  },
];
