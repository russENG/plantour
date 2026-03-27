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

  // ── ソテツ科 ──────────────────────────────────────────
  {
    id: "cycadaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cycas_revoluta_plant_03.JPG",
    jaName: "ソテツ科",
    enName: "Cycad family",
    scientificName: "Cycadaceae",
    order: "ソテツ目",
    overview:
      "現生裸子植物の中で最も古い系統のひとつ。雌雄異株で、大型の羽状複葉と球果（雌株では種子を直接つける）を特徴とする。日本ではソテツ1属1種が自生し、南西諸島の海岸近くに見られる。",
    characteristics: [
      "雌雄異株",
      "大型の羽状複葉で、幹頂部に螺旋状に密生",
      "雄球果は直立した円柱状、雌株は大型の羽状心皮に種子をつける",
      "根にシアノバクテリアが共生し窒素固定を行うサンゴ根をもつ",
    ],
    phylogeneticPosition: "裸子植物 > ソテツ綱 > ソテツ目 > ソテツ科",
    divergenceEra: "古生代ペルム紀〜中生代三畳紀（約2億8000万年前〜）",
    representativeGenera: ["ソテツ属（Cycas）"],
    evolutionEvents: [
      "古生代末の大量絶滅後に生き残った「生きた化石」的系統",
      "シアノバクテリアとの共生根（サンゴ根）の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ソテツ科" },
    ],
    japaneseSpeciesCount: 3051,
    review: { status: "ai_generated" },
  },

  // ── コウヤマキ科 ──────────────────────────────────────
  {
    id: "sciadopityaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sciadopitys_verticillata_01.jpg",
    jaName: "コウヤマキ科",
    enName: "Japanese umbrella-pine family",
    scientificName: "Sciadopityaceae",
    order: "マツ目",
    overview:
      "日本固有の1属1種（コウヤマキ）からなる単型科。化石記録は白亜紀まで遡り、かつてはより広い分布域をもっていた。輪生する「葉」は実際には短枝が癒合した葉状枝（仮葉）であることが特徴的。",
    characteristics: [
      "輪生する葉状枝（仮葉）は2枚の葉が癒合したもの",
      "球果は木質化し、鱗片数が比較的少ない",
      "樹皮は赤褐色で縦に剥がれる",
      "日本の固有属・固有種（コウヤマキ1種のみ）",
    ],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > コウヤマキ科",
    divergenceEra: "中生代白亜紀（約1億4000万年前〜）",
    representativeGenera: ["コウヤマキ属（Sciadopitys）"],
    evolutionEvents: [
      "白亜紀〜第三紀に北半球で広域分布していたが、現在は日本に隔離分布する残存系統",
      "葉状枝（短枝の癒合）という独特の器官形態の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コウヤマキ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── マキ科 ──────────────────────────────────────────
  {
    id: "podocarpaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Podocarpus_polystachyus.JPG",
    jaName: "マキ科",
    enName: "Podocarp family",
    scientificName: "Podocarpaceae",
    order: "マツ目",
    overview:
      "主に南半球の熱帯・亜熱帯に分布する球果植物の科。日本ではナギ・マキなどが暖温帯に自生する。種子は肉質の種托（花托が発達したもの）に包まれることが多く、鳥による散布に適応している。",
    characteristics: [
      "種子が肉質の種托（エピマティウム）に包まれるものが多い",
      "葉は扁平・針状・鱗片状と多様",
      "球果は小さく、鱗片数が少ない",
      "南半球に最も多様性が集中する",
    ],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > マキ科",
    divergenceEra: "中生代ジュラ紀（約1億8000万年前〜）",
    representativeGenera: [
      "マキ属（Podocarpus）",
      "ナギ属（Nageia）",
    ],
    evolutionEvents: [
      "肉質種托による鳥類散布への適応",
      "ゴンドワナ大陸の分裂に伴う南半球への分布拡大",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マキ科" },
    ],
    japaneseSpeciesCount: 32,
    review: { status: "ai_generated" },
  },

  // ── ナンヨウスギ科 ──────────────────────────────────
  {
    id: "araucariaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Araucaria_araucana_0001.JPG",
    jaName: "ナンヨウスギ科",
    enName: "Araucaria family",
    scientificName: "Araucariaceae",
    order: "マツ目",
    overview:
      "中生代に世界的に繁栄した古い系統の球果植物科。現在は南半球に限られるが、化石は北半球にも広く分布した。日本には自生しないが、公園・植物園で栽培される。",
    characteristics: [
      "大型の球果と大きな種子",
      "葉は卵形〜針形で、枝に螺旋状または対生につく",
      "球果は熟すと全体が崩壊して種子を散布する",
    ],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > ナンヨウスギ科",
    divergenceEra: "中生代三畳紀末〜ジュラ紀（約2億年前〜）",
    representativeGenera: [
      "ナンヨウスギ属（Araucaria）",
      "アガシス属（Agathis）",
    ],
    evolutionEvents: [
      "中生代の恐竜時代に北半球でも繁栄し、白亜紀末以降に南半球へ後退",
      "1994年発見のウォレミア松（Wollemia）は「生きた化石」として注目",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ナンヨウスギ科" },
    ],
    japaneseSpeciesCount: 13,
    review: { status: "ai_generated" },
  },

  // ── イヌガヤ科 ──────────────────────────────────────
  {
    id: "cephalotaxaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cephalotaxus_harringtonia.jpg",
    jaName: "イヌガヤ科",
    enName: "Plum-yew family",
    scientificName: "Cephalotaxaceae",
    order: "マツ目",
    overview:
      "東アジアに分布する常緑針葉樹の小科。日本にはイヌガヤが自生し、山地の湿った林内に見られる。種子は核果状の仮種皮に包まれ、イチイ科に似るが系統的には独立している。",
    characteristics: [
      "葉は線形〜披針形で、2列に並び、裏面に2本の白色気孔帯をもつ",
      "種子は仮種皮（肉質の外層）に包まれ、核果状",
      "雌雄異株",
    ],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > イヌガヤ科",
    divergenceEra: "中生代白亜紀（約1億年前〜）",
    representativeGenera: ["イヌガヤ属（Cephalotaxus）"],
    evolutionEvents: [
      "肉質仮種皮による動物散布への収斂進化（イチイ科と独立に）",
      "東アジアへの分布収縮",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イヌガヤ科" },
    ],
    japaneseSpeciesCount: 17,
    review: { status: "ai_generated" },
  },

  // ── イチイ科 ──────────────────────────────────────
  {
    id: "taxaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Taxus_x_media.JPG",
    jaName: "イチイ科",
    enName: "Yew family",
    scientificName: "Taxaceae",
    order: "マツ目",
    overview:
      "北半球を中心に分布する常緑針葉樹の科。日本にはイチイ・キャラボクなどが自生する。種子は赤い肉質の仮種皮（アリルス）に包まれるが、種子本体は有毒。球果をもたない珍しい針葉樹。",
    characteristics: [
      "球果をもたず、種子は赤い肉質の仮種皮（アリルス）に包まれる",
      "葉は線形で2列に配列し、裏面に淡い気孔帯",
      "雌雄異株",
      "種子・葉・樹皮にタキシンという有毒アルカロイドを含む（仮種皮の果肉は無毒）",
    ],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > イチイ科",
    divergenceEra: "中生代ジュラ紀（約1億8000万年前〜）",
    representativeGenera: [
      "イチイ属（Taxus）",
      "カヤ属（Torreya）",
    ],
    evolutionEvents: [
      "球果の消失と肉質仮種皮による鳥類・哺乳類散布への適応",
      "抗がん剤タキソール（パクリタキセル）の原料として医学的に注目",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イチイ科" },
    ],
    japaneseSpeciesCount: 53,
    review: { status: "ai_generated" },
  },

  // ── マオウ科 ──────────────────────────────────────
  {
    id: "ephedraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ephedra_sinica.jpg",
    jaName: "マオウ科",
    enName: "Joint-pine family",
    scientificName: "Ephedraceae",
    order: "グネツム目",
    overview:
      "グネツム類に属する裸子植物の科で、乾燥地帯に分布する。茎は緑色で光合成を行い、葉は退化して鱗片状。漢方薬・エフェドリンの原料として知られるシナマオウを含む。",
    characteristics: [
      "茎は緑色・節があり光合成を行う",
      "葉は鱗片状に退化し、対生または輪生",
      "雌雄異株または同株",
      "乾燥・荒廃地に強い",
    ],
    phylogeneticPosition: "裸子植物 > グネツム類 > グネツム目 > マオウ科",
    divergenceEra: "中生代白亜紀（約1億2000万年前〜）",
    representativeGenera: ["マオウ属（Ephedra）"],
    evolutionEvents: [
      "乾燥環境への高度な適応（茎による光合成、葉の退化）",
      "アルカロイド（エフェドリン）の生合成経路の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マオウ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── グネツム科 ──────────────────────────────────────
  {
    id: "gnetaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gnetum_gnemon.jpg",
    jaName: "グネツム科",
    enName: "Jointfir family",
    scientificName: "Gnetaceae",
    order: "グネツム目",
    overview:
      "熱帯域に分布するつる性または木本の裸子植物。被子植物に類似した導管・対生葉・花被をもつことから、被子植物との関係が長く議論されてきた。東南アジアでは種子が食用になる種もある。",
    characteristics: [
      "対生する幅広の葉（網状脈をもち被子植物の葉に似る）",
      "木部に導管をもつ（ほかの裸子植物には稀）",
      "花に花被片（苞）があり、被子植物の花に収斂",
      "雌雄異株",
    ],
    phylogeneticPosition: "裸子植物 > グネツム類 > グネツム目 > グネツム科",
    divergenceEra: "中生代白亜紀（約1億年前〜）",
    representativeGenera: ["グネツム属（Gnetum）"],
    evolutionEvents: [
      "被子植物様形質（導管・対生葉・花被）の収斂的進化",
      "熱帯林環境への適応とつる性生活型の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/グネツム科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ジュンサイ科 ──────────────────────────────────
  {
    id: "cabombaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cabomba_aquatica.jpg",
    jaName: "ジュンサイ科",
    enName: "Water-shield family",
    scientificName: "Cabombaceae",
    order: "スイレン目",
    overview:
      "水生の被子植物の小科。被子植物の基部系統に位置する。日本にはジュンサイが自生し、若い葉や茎は食用（ぬめりが特徴）。",
    characteristics: [
      "水中または水面に浮かぶ葉をもつ水生植物",
      "ジュンサイの新芽は厚いゼラチン質のムチレージで覆われる",
      "花弁・萼片は各3枚",
    ],
    phylogeneticPosition: "被子植物 > 基部被子植物 > スイレン目 > ジュンサイ科",
    divergenceEra: "白亜紀前期〜中期（約1億〜9000万年前）",
    representativeGenera: [
      "ジュンサイ属（Brasenia）",
      "ハゴロモモ属（Cabomba）",
    ],
    evolutionEvents: [
      "被子植物の基部系統における水生環境への独立した適応",
      "ムチレージ（粘液）による植食者防御機構の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ジュンサイ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── スイレン科 ──────────────────────────────────────
  {
    id: "nymphaeaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Nymphaea_alba_1.JPG",
    jaName: "スイレン科",
    enName: "Water-lily family",
    scientificName: "Nymphaeaceae",
    order: "スイレン目",
    overview:
      "世界の温帯〜熱帯に分布する水生植物の科。被子植物の基部系統に位置し、大型の浮葉と鮮やかな花が特徴。日本にはヒツジグサ（在来種）が自生し、多数の栽培品種が池に植えられる。",
    characteristics: [
      "大型の円形〜楕円形の浮葉（葉柄が長く水面に浮く）",
      "花は多数の花弁・萼片・雄しべをもち、らせん配列",
      "根茎が発達し水底の泥中に固定",
    ],
    phylogeneticPosition: "被子植物 > 基部被子植物 > スイレン目 > スイレン科",
    divergenceEra: "白亜紀前期（約1億1000万年前〜）",
    representativeGenera: [
      "スイレン属（Nymphaea）",
      "コウホネ属（Nuphar）",
      "オニバス属（Euryale）",
    ],
    evolutionEvents: [
      "被子植物の初期多様化における水生適応の一事例",
      "花部のらせん配列という原始的形質の保持",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スイレン科" },
    ],
    japaneseSpeciesCount: 51,
    review: { status: "ai_generated" },
  },

  // ── マツブサ科 ──────────────────────────────────────
  {
    id: "schisandraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Schisandra_chinensis.jpg",
    jaName: "マツブサ科",
    enName: "Schisandra family",
    scientificName: "Schisandraceae",
    order: "マツブサ目",
    overview:
      "APG IIIで認められた科で、マツブサ・サネカズラ（ビナンカズラ）・シキミなどを含む。被子植物の基部系統に属し、中国では五味子（ゴミシ）が漢方薬として重要。",
    characteristics: [
      "木本性のつる植物または小高木",
      "花は単性で、花被片は6〜12枚程度、らせん配列",
      "果実は集合果（液果が多数集まる）",
      "芳香性の成分を多くもつ",
    ],
    phylogeneticPosition: "被子植物 > 基部被子植物（基部双子葉類） > マツブサ目 > マツブサ科",
    divergenceEra: "白亜紀前期（約1億2000万年前〜）",
    representativeGenera: [
      "マツブサ属（Schisandra）",
      "サネカズラ属（Kadsura）",
      "シキミ属（Illicium）",
    ],
    evolutionEvents: [
      "基部被子植物の系統における芳香性化合物の多様化",
      "果実のらせん配列という原始的形質の保持",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マツブサ科" },
    ],
    japaneseSpeciesCount: 11,
    review: { status: "ai_generated" },
  },

  // ── センリョウ科 ──────────────────────────────────────
  {
    id: "chloranthaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chloranthus_japonicus.jpg",
    jaName: "センリョウ科",
    enName: "Chloranthus family",
    scientificName: "Chloranthaceae",
    order: "センリョウ目",
    overview:
      "被子植物の中で系統的位置が長らく不明確だった小科。APG IIIではセンリョウ目として単独の目をなす。日本にはセンリョウが自生し、赤い実が美しく正月の縁起物として広く利用される。花は非常に単純で、花弁・萼を欠く。",
    characteristics: [
      "花は非常に単純で、花弁・萼片を欠く",
      "雄しべは1〜3個、雌しべは1個",
      "対生する葉で、鋸歯縁",
      "果実は核果状で赤く熟す（センリョウ）",
    ],
    phylogeneticPosition: "被子植物 > 基部被子植物 > センリョウ目 > センリョウ科",
    divergenceEra: "白亜紀前期（約1億3000万年前〜）",
    representativeGenera: [
      "センリョウ属（Chloranthus）",
    ],
    evolutionEvents: [
      "被子植物の初期進化において花の単純化（花弁・萼の喪失）が起きた系統",
      "白亜紀の化石花粉が多数知られ、被子植物初期分散の証拠となっている",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/センリョウ科" },
    ],
    japaneseSpeciesCount: 15,
    review: { status: "ai_generated" },
  },

  // ── コショウ科 ──────────────────────────────────────
  {
    id: "piperaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Piper_nigrum_Koehler_drawing.jpg",
    jaName: "コショウ科",
    enName: "Pepper family",
    scientificName: "Piperaceae",
    order: "コショウ目",
    overview:
      "熱帯を中心に約3,600種が知られる科。コショウは世界で最も広く使われるスパイスのひとつ。日本にはフウトウカズラが九州南部〜南西諸島に自生する。",
    characteristics: [
      "茎の節が膨らみ、しばしばつる性",
      "花は非常に小さく、花弁・萼を欠き、穂状花序につく",
      "葉は単葉・全縁で芳香をもつ",
    ],
    phylogeneticPosition: "被子植物 > マグノリア類 > コショウ目 > コショウ科",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    representativeGenera: [
      "コショウ属（Piper）",
      "サダソウ属（Peperomia）",
    ],
    evolutionEvents: [
      "熱帯林における林床・つる性生活型への適応",
      "胡椒アルカロイド（ピペリン）など防御化合物の多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コショウ科" },
    ],
    japaneseSpeciesCount: 48,
    review: { status: "ai_generated" },
  },

  // ── ウマノスズクサ科 ──────────────────────────────────
  {
    id: "aristolochiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aristolochia_clematitis.jpg",
    jaName: "ウマノスズクサ科",
    enName: "Birthwort family",
    scientificName: "Aristolochiaceae",
    order: "コショウ目",
    overview:
      "日本にはウマノスズクサ・カンアオイ類などが自生する。花は特異な形態で昆虫を誘引・捕捉して受粉させる。ジャコウアゲハの幼虫の食草として知られ、ギフチョウ・ヒメギフチョウとカンアオイ属との共進化も著名。",
    characteristics: [
      "花は花弁を欠き、萼が花弁状に発達（しばしば臭気をもつ）",
      "筒状花の内壁に毛があり昆虫を一時的に閉じ込めて受粉させる",
      "葉は単葉・全縁、心形が多い",
      "アリストロキア酸（腎毒性・発がん性物質）を含む",
    ],
    phylogeneticPosition: "被子植物 > マグノリア類 > コショウ目 > ウマノスズクサ科",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    representativeGenera: [
      "ウマノスズクサ属（Aristolochia）",
      "カンアオイ属（Asarum）",
    ],
    evolutionEvents: [
      "昆虫捕捉型の受粉メカニズムの進化",
      "ジャコウアゲハ・ギフチョウなどのチョウ類との共進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウマノスズクサ科" },
    ],
    japaneseSpeciesCount: 254,
    review: { status: "ai_generated" },
  },

  // ── バンレイシ科 ──────────────────────────────────────
  {
    id: "annonaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Asimina_triloba_fruits.jpg",
    jaName: "バンレイシ科",
    enName: "Custard-apple family",
    scientificName: "Annonaceae",
    order: "モクレン目",
    overview:
      "熱帯を中心に約2,500種が知られるモクレン目最大の科。バンレイシ・チェリモヤ・イランイランなど重要な果樹・香料植物を含む。日本ではイランイランが沖縄で栽培される。花は肉質で甲虫媒が多い。",
    characteristics: [
      "花弁は6枚（内外各3枚）、肉質で芳香をもつ",
      "甲虫媒が多い",
      "雄しべ・心皮ともに多数でらせん配列（原始的形質）",
      "果実は集合果または分果",
    ],
    phylogeneticPosition: "被子植物 > マグノリア類 > モクレン目 > バンレイシ科",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    representativeGenera: [
      "バンレイシ属（Annona）",
      "イランイラン属（Cananga）",
    ],
    evolutionEvents: [
      "甲虫媒受粉という古典的な受粉様式の保持",
      "熱帯での果実の多様化と大型哺乳類による種子散布",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/バンレイシ科" },
    ],
    japaneseSpeciesCount: 27,
    review: { status: "ai_generated" },
  },

  // ── ロウバイ科 ──────────────────────────────────────
  {
    id: "calycanthaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chimonanthus_praecox_1.jpg",
    jaName: "ロウバイ科",
    enName: "Sweetshrub family",
    scientificName: "Calycanthaceae",
    order: "クスノキ目",
    overview:
      "APG IIIでクスノキ目に置かれる小科。ロウバイは中国原産で日本に広く植栽され、冬に蝋細工のような黄色い花を咲かせる。花被片と雄しべはらせん配列で、被子植物の原始的な形質を残す。",
    characteristics: [
      "花被片・雄しべはらせん配列で外側と内側が連続的に移行",
      "花はカップ状で芳香をもつ",
      "対生する葉で、揉むと芳香がある",
    ],
    phylogeneticPosition: "被子植物 > マグノリア類 > クスノキ目 > ロウバイ科",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    representativeGenera: [
      "ロウバイ属（Chimonanthus）",
      "カリカンサス属（Calycanthus）",
    ],
    evolutionEvents: [
      "花部のらせん配列という被子植物の原始的形質の保持",
      "昆虫誘引のための揮発性芳香成分の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ロウバイ科" },
    ],
    japaneseSpeciesCount: 11,
    review: { status: "ai_generated" },
  },

  // ── ハスノハギリ科 ──────────────────────────────────
  {
    id: "hernandiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hernandia_nymphaeifolia.jpg",
    jaName: "ハスノハギリ科",
    enName: "Hernandia family",
    scientificName: "Hernandiaceae",
    order: "クスノキ目",
    overview:
      "APG IIIでクスノキ目（Laurales）に置かれる熱帯性の科。日本（南西諸島）にはハスノハギリが自生し、海岸近くのマングローブ林縁などに見られる。果実は翼状の総苞片に包まれ、風・水による散布に適応している。",
    characteristics: [
      "大型の葉（楯形または掌状に裂ける）",
      "果実は翼状の苞に包まれ、風散布・水流散布に適応",
      "花は小さく、花被片は4〜8枚",
    ],
    phylogeneticPosition: "被子植物 > マグノリア類 > クスノキ目 > ハスノハギリ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前〜）",
    representativeGenera: [
      "ハスノハギリ属（Hernandia）",
    ],
    evolutionEvents: [
      "果実の翼状構造による長距離散布（島嶼への分散）への適応",
      "熱帯海岸環境への特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハスノハギリ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── ショウブ科 ──────────────────────────────────────
  {
    id: "acoraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Acorus_calamus_Sturm22.jpg",
    jaName: "ショウブ科",
    enName: "Sweet-flag family",
    scientificName: "Acoraceae",
    order: "ショウブ目",
    overview:
      "単子葉植物の最も基部に位置する単型科（1属2種）。APG IIIでは単子葉植物の姉妹群に相当し、進化的に最も古い単子葉系統のひとつ。日本にはショウブが自生し、端午の節句に菖蒲湯として利用される。",
    characteristics: [
      "剣形の葉が2列に並ぶ",
      "肉穂花序に小さな両性花が密生",
      "根茎が横に伸び、特有の芳香をもつ",
      "湿地・水辺に生育",
    ],
    phylogeneticPosition: "被子植物 > 単子葉植物 > ショウブ目 > ショウブ科",
    divergenceEra: "白亜紀後期（約1億年前〜）",
    representativeGenera: ["ショウブ属（Acorus）"],
    evolutionEvents: [
      "単子葉植物の最基部系統として、単子葉類の起源を理解する鍵となる系統",
      "サトイモ科と独立に肉穂花序を進化させた収斂進化の例",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ショウブ科" },
    ],
    japaneseSpeciesCount: 8,
    review: { status: "ai_generated" },
  },

  // ── オモダカ科 ──────────────────────────────────────
  {
    id: "alismataceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Alisma_plantago-aquatica.jpg",
    jaName: "オモダカ科",
    enName: "Water-plantain family",
    scientificName: "Alismataceae",
    order: "オモダカ目",
    overview:
      "水生または湿生の単子葉植物の科。日本にはオモダカ・サジオモダカなどが自生し、田んぼや池沼に見られる。葉は矢尻形（オモダカ）または楕円形で、花弁は3枚・白色が多い。",
    characteristics: [
      "水生または湿生の草本",
      "花弁3枚・萼片3枚",
      "多数の雌しべが集まった集合果（痩果の集合）",
      "葉は根生葉で矢尻形・心形・楕円形など多様",
    ],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > オモダカ科",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    representativeGenera: [
      "オモダカ属（Sagittaria）",
      "サジオモダカ属（Alisma）",
    ],
    evolutionEvents: [
      "水生環境への適応と多様な葉形の進化",
      "水田農業に伴い分布を拡大した雑草性種の出現",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/オモダカ科" },
    ],
    japaneseSpeciesCount: 42,
    review: { status: "ai_generated" },
  },

  // ── トチカガミ科 ──────────────────────────────────
  {
    id: "hydrocharitaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Elodea_canadensis.jpg",
    jaName: "トチカガミ科",
    enName: "Frogbit family",
    scientificName: "Hydrocharitaceae",
    order: "オモダカ目",
    overview:
      "水生の単子葉植物の科。日本にはトチカガミ・ミズオオバコ・クロモなどが自生し、池沼・河川・水田に見られる。淡水・汽水・海水に適応した多様な種を含み、さまざまな生育型をもつ。",
    characteristics: [
      "淡水〜海水まで幅広い水環境に適応",
      "沈水・浮水・抽水など多様な生育型",
      "花弁3枚・萼片3枚",
      "水媒または水面媒受粉をするものが多い",
    ],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > トチカガミ科",
    divergenceEra: "古第三紀（約6000万〜5500万年前）",
    representativeGenera: [
      "トチカガミ属（Hydrocharis）",
      "クロモ属（Hydrilla）",
      "ミズオオバコ属（Ottelia）",
    ],
    evolutionEvents: [
      "淡水から海水への二次的適応",
      "水媒受粉の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トチカガミ科" },
    ],
    japaneseSpeciesCount: 62,
    review: { status: "ai_generated" },
  },

  // ── アマモ科 ──────────────────────────────────────
  {
    id: "zosteraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zostera_marina.jpg",
    jaName: "アマモ科",
    enName: "Seagrass family",
    scientificName: "Zosteraceae",
    order: "オモダカ目",
    overview:
      "完全に海洋に適応した数少ない顕花植物のひとつ。日本にはアマモ・コアマモが広く分布し、内湾・藻場を形成して多様な海洋生物の生息場となる。水中で受粉を行う水中媒花を進化させている。",
    characteristics: [
      "完全水中生の海生植物",
      "葉は線形で葉鞘をもち、海底に匍匐茎で広がる",
      "花は退化的で、花弁・萼を欠く",
      "糸状の花粉が水中を漂い受粉（水中媒）",
    ],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > アマモ科",
    divergenceEra: "白亜紀末〜古第三紀（約7000万年前〜）",
    representativeGenera: [
      "アマモ属（Zostera）",
    ],
    evolutionEvents: [
      "陸上植物から海洋環境への完全な二次的適応（海草の進化）",
      "水中媒受粉と糸状花粉という独特の受粉システムの進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アマモ科" },
    ],
    japaneseSpeciesCount: 12,
    review: { status: "ai_generated" },
  },

  // ── ヒルムシロ科 ──────────────────────────────────
  {
    id: "potamogetonaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Potamogeton_natans.jpg",
    jaName: "ヒルムシロ科",
    enName: "Pondweed family",
    scientificName: "Potamogetonaceae",
    order: "オモダカ目",
    overview:
      "淡水の水生単子葉植物の科。日本にはヒルムシロ・エビモ・ヤナギモなど多くの種が自生し、池沼・河川・水田に見られる。",
    characteristics: [
      "沈水または浮水の水生植物",
      "葉は線形〜楕円形で、沈水葉と浮葉の二形をもつ種がある",
      "穂状花序が水面上に出る（風媒）",
      "花は退化的で、花被片は4枚",
    ],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > ヒルムシロ科",
    divergenceEra: "白亜紀末〜古第三紀（約7000万年前〜）",
    representativeGenera: [
      "ヒルムシロ属（Potamogeton）",
    ],
    evolutionEvents: [
      "淡水水生環境への高度な適応と沈水生活型の確立",
      "風媒受粉への移行と花部の単純化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒルムシロ科" },
    ],
    japaneseSpeciesCount: 72,
    review: { status: "ai_generated" },
  },

  // ── ホッスモ科 ──────────────────────────────────────
  {
    id: "ruppiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruppia_maritima.jpg",
    jaName: "ホッスモ科",
    enName: "Ditchgrass family",
    scientificName: "Ruppiaceae",
    order: "オモダカ目",
    overview:
      "汽水域（塩分を含む水）に特化した水生植物の単型科（1属）。日本にはホッスモが内湾・汽水湖・塩湿地に自生する。塩分耐性が高く、他の被子植物が生育しにくい環境に適応している。",
    characteristics: [
      "汽水〜塩水域に生育する沈水植物",
      "細い糸状の葉",
      "花は極度に単純化（花被を欠く）",
      "水媒受粉",
    ],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > ホッスモ科",
    divergenceEra: "古第三紀（約5000万年前〜）",
    representativeGenera: ["ホッスモ属（Ruppia）"],
    evolutionEvents: [
      "汽水・塩水という極端な塩分環境への特化",
      "花部の極端な単純化と水媒受粉の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホッスモ科" },
    ],
    japaneseSpeciesCount: 16,
    review: { status: "ai_generated" },
  },

  // ── シラスナ科 ──────────────────────────────────────
  {
    id: "cymodoceaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cymodocea_nodosa.jpg",
    jaName: "シラスナ科",
    enName: "Manatee-grass family",
    scientificName: "Cymodoceaceae",
    order: "オモダカ目",
    overview:
      "熱帯〜亜熱帯の海洋に分布する海草科。日本では南西諸島の浅い砂泥底にリュウキュウスガモなどが分布し、サンゴ礁域の生態系を支える。アマモ科と同じく完全海生の顕花植物。",
    characteristics: [
      "完全海生の沈水植物",
      "匍匐茎が海底に広がり、海草藻場を形成",
      "花は退化的で、水中媒受粉",
      "細長い線形葉に葉鞘をもつ",
    ],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > シラスナ科",
    divergenceEra: "古第三紀（約5500万年前〜）",
    representativeGenera: [
      "リュウキュウスガモ属（Cymodocea）",
    ],
    evolutionEvents: [
      "陸上植物から海洋への二次的適応（アマモ科と独立の進化）",
      "熱帯海草藻場の形成による生物多様性ホットスポットの創出",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シラスナ科" },
    ],
    japaneseSpeciesCount: 12,
    review: { status: "ai_generated" },
  },

  // ── モクセイ科 ──────────────────────────────────────
  {
    id: "oleaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Olea_europaea_002.JPG",
    jaName: "モクセイ科",
    enName: "Olive family",
    scientificName: "Oleaceae",
    order: "シソ目",
    overview:
      "オリーブ・キンモクセイ・ライラック・トネリコ・イボタノキなどを含む科。約25属600種が知られ、温帯〜熱帯に分布する。芳香をもつ花が多く、庭木・香料植物として広く利用される。",
    characteristics: [
      "花は4数性で花弁は基部が合着することが多い",
      "雄しべは2本（多くの科で例外的に少ない）",
      "葉は対生で単葉または羽状複葉",
      "果実は核果・翼果・液果など多様",
      "芳香成分をもつ種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > モクセイ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万〜6000万年前）",
    representativeGenera: [
      "オリーブ属（Olea）",
      "モクセイ属（Osmanthus）",
      "トネリコ属（Fraxinus）",
      "ライラック属（Syringa）",
      "イボタノキ属（Ligustrum）",
    ],
    evolutionEvents: [
      "雄しべ2本への高度な退縮（受粉効率の最適化）",
      "風媒・虫媒の両戦略を系統内で維持",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/モクセイ科" },
    ],
    japaneseSpeciesCount: 274,
    review: { status: "ai_generated" },
  },

  // ── イワタバコ科 ──────────────────────────────────────
  {
    id: "gesneriaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Streptocarpus_rexii.jpg",
    jaName: "イワタバコ科",
    enName: "Gesneriad family",
    scientificName: "Gesneriaceae",
    order: "シソ目",
    overview:
      "イワタバコ・セントポーリア（アフリカスミレ）・グロキシニアなどを含む科。約160属3500種以上が知られ、熱帯〜亜熱帯の多様な生態系に適応する。日本ではイワタバコが岩壁・渓谷に生育する。",
    characteristics: [
      "花冠は合弁で左右相称（唇形）が多い",
      "雄しべは2〜4本（花冠に着生）",
      "葉は対生または輪生、肉厚なものが多い",
      "湿潤な岩壁・林床など日陰を好む",
      "種子は非常に小さく多数",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > イワタバコ科",
    divergenceEra: "古第三紀（約6500万〜5000万年前）",
    representativeGenera: [
      "イワタバコ属（Conandron）",
      "セントポーリア属（Saintpaulia）",
      "ストレプトカーパス属（Streptocarpus）",
      "グロキシニア属（Gloxinia）",
    ],
    evolutionEvents: [
      "旧世界と新世界での独立した多様化",
      "岩壁・着生など特殊環境への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イワタバコ科" },
    ],
    japaneseSpeciesCount: 75,
    review: { status: "ai_generated" },
  },

  // ── ゴマノハグサ科 ──────────────────────────────────────
  {
    id: "scrophulariaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Scrophularia_nodosa.jpg",
    jaName: "ゴマノハグサ科",
    enName: "Figwort family",
    scientificName: "Scrophulariaceae",
    order: "シソ目",
    overview:
      "APG体系での大幅な再編を経て縮小した科。旧来のゴマノハグサ科に含まれていた多くの属はオオバコ科・ハマウツボ科・ハエドクソウ科などへ移された。現在はゴマノハグサ属・モウズイカ属などを含む。",
    characteristics: [
      "花冠は合弁で左右相称または放射相称",
      "雄しべは4本（2長2短）または5本",
      "APG体系で大幅に縮小・再編された科",
      "葉は対生または互生",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ゴマノハグサ科",
    divergenceEra: "古第三紀（約5000万年前〜）",
    representativeGenera: [
      "ゴマノハグサ属（Scrophularia）",
      "モウズイカ属（Verbascum）",
      "バルボフィラ属（Buddleja）",
    ],
    evolutionEvents: [
      "APG体系再編による科の縮小（多くの属が他科へ移動）",
      "多様な送粉者に対応した花形の分化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ゴマノハグサ科" },
    ],
    japaneseSpeciesCount: 757,
    review: { status: "ai_generated" },
  },

  // ── ゴマ科 ──────────────────────────────────────
  {
    id: "pedaliaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sesamum_indicum.jpg",
    jaName: "ゴマ科",
    enName: "Sesame family",
    scientificName: "Pedaliaceae",
    order: "シソ目",
    overview:
      "ゴマ（Sesamum indicum）を代表種とする科。約13属95種が知られ、アフリカ・アジアの乾燥〜半乾燥地帯に分布する。果実に鈎状突起をもつものが多く、動物や衣服への付着で散布する。",
    characteristics: [
      "花冠は合弁で左右相称・唇形",
      "雄しべは4本（2長2短）",
      "果実や茎にしばしば粘液腺や鈎状突起をもつ",
      "葉は対生または上部で互生",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ゴマ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "ゴマ属（Sesamum）",
      "ツノゴマ属近縁（Uncarina）",
      "ペダリウム属（Pedalium）",
    ],
    evolutionEvents: [
      "粘液腺・鈎状突起による付着散布の進化",
      "乾燥地帯への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ゴマ科" },
    ],
    japaneseSpeciesCount: 10,
    review: { status: "ai_generated" },
  },

  // ── ハエドクソウ科 ──────────────────────────────────────
  {
    id: "phrymaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mimulus_guttatus.jpg",
    jaName: "ハエドクソウ科",
    enName: "Lopseed family",
    scientificName: "Phrymaceae",
    order: "シソ目",
    overview:
      "APG体系でミゾホオズキ属（Mimulus）などが加わり拡張された科。日本にはハエドクソウが自生し、果実が衣服に付着して散布する。北アメリカ西部のミゾホオズキ類が多様性の中心。",
    characteristics: [
      "花冠は合弁で左右相称・唇形",
      "雄しべは4本（2長2短）",
      "ハエドクソウ属の果実は萼に包まれ逆刺で付着散布",
      "葉は対生",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ハエドクソウ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "ハエドクソウ属（Phryma）",
      "ミゾホオズキ属（Mimulus）",
      "エリスランテ属（Erythranthe）",
    ],
    evolutionEvents: [
      "APG体系でのミゾホオズキ属の組み入れによる科の拡張",
      "逆刺による付着散布の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハエドクソウ科" },
    ],
    japaneseSpeciesCount: 13,
    review: { status: "ai_generated" },
  },

  // ── ハマウツボ科 ──────────────────────────────────────
  {
    id: "orobanchaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Orobanche_rapum-genistae.jpg",
    jaName: "ハマウツボ科",
    enName: "Broomrape family",
    scientificName: "Orobanchaceae",
    order: "シソ目",
    overview:
      "寄生植物または半寄生植物を多く含む科。APG体系で旧ゴマノハグサ科のコシオガマ属・ママコナ属・ナンバンギセル属なども統合された。葉緑素をもたない全寄生から、光合成も行う半寄生まで多様な栄養様式がある。",
    characteristics: [
      "他の植物の根に寄生する（全寄生または半寄生）",
      "全寄生種は葉緑素をもたず黄褐色〜白色",
      "花冠は合弁で唇形",
      "吸器（ハウストリウム）で宿主から栄養を吸収",
      "種子は非常に小さく多数",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ハマウツボ科",
    divergenceEra: "古第三紀（約5000万年前〜）",
    representativeGenera: [
      "ナンバンギセル属（Aeginetia）",
      "ハマウツボ属（Orobanche）",
      "コシオガマ属（Phtheirospermum）",
      "ママコナ属（Melampyrum）",
      "シオガマギク属（Pedicularis）",
    ],
    evolutionEvents: [
      "半寄生から全寄生への進化的移行（系統内で複数回）",
      "葉緑素の喪失と宿主依存性の強化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハマウツボ科" },
    ],
    japaneseSpeciesCount: 29,
    review: { status: "ai_generated" },
  },

  // ── タヌキモ科 ──────────────────────────────────────
  {
    id: "lentibulariaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Utricularia_vulgaris.jpg",
    jaName: "タヌキモ科",
    enName: "Bladderwort family",
    scientificName: "Lentibulariaceae",
    order: "シソ目",
    overview:
      "タヌキモ・ムシトリスミレ・ミミカキグサなどを含む食虫植物の科。約3属350種が知られ、主に湿地・水中・岩壁に生育する。タヌキモ属は小さな捕虫嚢で微小な水生生物を捕食する。",
    characteristics: [
      "食虫植物（捕虫嚢または粘着葉で昆虫・微生物を捕食）",
      "タヌキモ属は水中に捕虫嚢をもつ",
      "ムシトリスミレ属は葉が粘着性",
      "花冠は合弁で唇形・距をもつことが多い",
      "貧栄養環境（湿地・岩壁）に生育",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > タヌキモ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "タヌキモ属（Utricularia）",
      "ムシトリスミレ属（Pinguicula）",
      "ミミカキグサ属（Genlisea）",
    ],
    evolutionEvents: [
      "負圧式捕虫嚢の進化（タヌキモ属：植物界最速の運動機構のひとつ）",
      "貧栄養湿地環境への特殊適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/タヌキモ科" },
    ],
    japaneseSpeciesCount: 70,
    review: { status: "ai_generated" },
  },

  // ── キツネノマゴ科 ──────────────────────────────────────
  {
    id: "acanthaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Acanthus_mollis5.jpg",
    jaName: "キツネノマゴ科",
    enName: "Acanthus family",
    scientificName: "Acanthaceae",
    order: "シソ目",
    overview:
      "キツネノマゴ・ハグロソウ・アカンサスなどを含む科。約220属4000種以上が知られ、熱帯〜亜熱帯に多様性の中心がある。包が発達し、花を保護する種が多い。",
    characteristics: [
      "花冠は合弁で左右相称・唇形",
      "雄しべは2〜4本",
      "苞が大きく発達することが多い",
      "葉は対生",
      "種子にしばしば弾きとばし散布機構をもつ",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > キツネノマゴ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "キツネノマゴ属（Justicia）",
      "ハグロソウ属（Peristrophe）",
      "アカンサス属（Acanthus）",
      "ツルウメモドキ属近縁（Thunbergia）",
    ],
    evolutionEvents: [
      "熱帯雨林での多様化と昆虫・鳥類との送粉共進化",
      "弾力的なさや果による種子射出散布の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キツネノマゴ科" },
    ],
    japaneseSpeciesCount: 160,
    review: { status: "ai_generated" },
  },

  // ── ノウゼンカズラ科 ──────────────────────────────────────
  {
    id: "bignoniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Campsis_radicans_flower.jpg",
    jaName: "ノウゼンカズラ科",
    enName: "Trumpet creeper family",
    scientificName: "Bignoniaceae",
    order: "シソ目",
    overview:
      "ノウゼンカズラ・キリ・カエンボク・カタルパなどを含む科。約82属800種が知られ、熱帯アメリカに多様性の中心がある。大きなラッパ形の花と翼をもつ種子が特徴的。",
    characteristics: [
      "花冠は合弁で大きなラッパ形・唇形",
      "雄しべは4本（2長2短）または2本",
      "果実は長いさや状（蒴果）で翼をもつ種子を多数含む",
      "多くは木本（高木・つる植物）",
      "葉は対生で複葉が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ノウゼンカズラ科",
    divergenceEra: "古第三紀〜新第三紀（約5000万年前〜）",
    representativeGenera: [
      "ノウゼンカズラ属（Campsis）",
      "キリ属（Paulownia）",
      "カタルパ属（Catalpa）",
      "ジャカランダ属（Jacaranda）",
    ],
    evolutionEvents: [
      "翼をもつ種子による風散布の進化",
      "大型花・蜜による鳥類・コウモリ媒の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ノウゼンカズラ科" },
    ],
    japaneseSpeciesCount: 60,
    review: { status: "ai_generated" },
  },

  // ── クマツヅラ科 ──────────────────────────────────────
  {
    id: "verbenaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Verbena_officinalis.jpg",
    jaName: "クマツヅラ科",
    enName: "Verbena family",
    scientificName: "Verbenaceae",
    order: "シソ目",
    overview:
      "クマツヅラ・バーベナ・クサギ・ランタナなどを含む科。APG体系で旧クマツヅラ科の多くはシソ科に移され、現在は約35属1200種に縮小。熱帯〜温帯に分布する。",
    characteristics: [
      "花冠は合弁で左右相称・4〜5裂",
      "雄しべは4本（2長2短）",
      "葉は対生または輪生",
      "茎はしばしば四角形",
      "APG体系で大幅に縮小・再編された科",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > クマツヅラ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "バーベナ属（Verbena）",
      "ランタナ属（Lantana）",
      "クマツヅラ属（Verbena s.l.）",
      "スタキタルペタ属（Stachytarpheta）",
    ],
    evolutionEvents: [
      "APG体系再編による科の縮小（多くの属がシソ科へ移動）",
      "熱帯への適応と世界規模への分布拡大",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クマツヅラ科" },
    ],
    japaneseSpeciesCount: 209,
    review: { status: "ai_generated" },
  },

  // ── ツノゴマ科 ──────────────────────────────────────
  {
    id: "martyniaceae",
    jaName: "ツノゴマ科",
    enName: "Unicorn plant family",
    scientificName: "Martyniaceae",
    order: "シソ目",
    overview:
      "ツノゴマ属を含む小さな科。約5属16種が知られ、主に熱帯アメリカ原産。果実に長い鈎状の角（つの）をもち、動物の蹄や毛に絡まって散布する独特の散布戦略をもつ。",
    characteristics: [
      "果実に長い鈎状の角（つの）が発達",
      "花冠は合弁で左右相称・唇形",
      "雄しべは4本（2長2短）",
      "葉は対生または互生・粘毛をもつ",
      "動物付着散布（動物の蹄・毛に絡まる）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ツノゴマ科",
    divergenceEra: "新第三紀〜第四紀",
    representativeGenera: [
      "ツノゴマ属（Proboscidea）",
      "マルティニア属（Martynia）",
    ],
    evolutionEvents: [
      "鈎状角による大型動物（有蹄類）への付着散布の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツノゴマ科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── カルジオプテリス科 ──────────────────────────────────────
  {
    id: "cardiopteridaceae",
    jaName: "カルジオプテリス科",
    enName: "Cardiopteris family",
    scientificName: "Cardiopteridaceae",
    order: "アキノキリンソウ目",
    overview:
      "小さな科で、約5属約45種が知られる。熱帯アジア〜太平洋に分布し、日本にはヒトツバタゴ近縁のグループは含まれないが、南西諸島周辺に分布する種がある。APG体系で独立した科として認識されている。",
    characteristics: [
      "高木・木本のつる植物が多い",
      "葉は単葉で互生",
      "花は小さく、集散花序につく",
      "果実は翼をもつことがある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アキノキリンソウ目 > カルジオプテリス科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "カルジオプテリス属（Cardiopteris）",
      "ゴイトチャ属（Gonocaryum）",
    ],
    evolutionEvents: [
      "熱帯アジアでの分布形成",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カルジオプテリス科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── モチノキ科 ──────────────────────────────────────
  {
    id: "aquifoliaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ilex_aquifolium.jpg",
    jaName: "モチノキ科",
    enName: "Holly family",
    scientificName: "Aquifoliaceae",
    order: "アキノキリンソウ目",
    overview:
      "モチノキ属（Ilex）のみからなる科。約400〜600種が知られ、熱帯〜温帯の広い範囲に分布する。日本にはモチノキ・イヌツゲ・ソヨゴ・クロガネモチなどが自生する。赤い果実が鳥類に食べられて種子散布される。",
    characteristics: [
      "常緑または落葉の木本（高木〜低木）",
      "葉はしばしば鋸歯状・刺状の縁をもつ",
      "花は小さく4〜6数性",
      "果実は赤〜黒の液果（核果）",
      "雌雄異株が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アキノキリンソウ目 > モチノキ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前〜）",
    representativeGenera: [
      "モチノキ属（Ilex）",
    ],
    evolutionEvents: [
      "液果による鳥類散布の発達",
      "刺状鋸歯による草食動物への防御",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/モチノキ科" },
    ],
    japaneseSpeciesCount: 145,
    review: { status: "ai_generated" },
  },

  // ── ミツガシワ科 ──────────────────────────────────────
  {
    id: "menyanthaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Menyanthes_trifoliata.jpg",
    jaName: "ミツガシワ科",
    enName: "Buckbean family",
    scientificName: "Menyanthaceae",
    order: "キク目",
    overview:
      "ミツガシワ・アサザ・ガガブタなどを含む水生・湿地性の科。約5属60種が知られる。キク目に属するが、水生環境への適応が著しく、形態的にはキクやニンジンとは大きく異なる。",
    characteristics: [
      "水生または湿地生の多年草",
      "花冠は5裂し、縁に流蘇状（ひも状）の付属物をもつ（ミツガシワ属）",
      "葉は3出複葉（ミツガシワ）または単葉",
      "キク目に属するが水生に特化",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キク目 > ミツガシワ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "ミツガシワ属（Menyanthes）",
      "アサザ属（Nymphoides）",
      "ガガブタ属（Nymphoides s.l.）",
    ],
    evolutionEvents: [
      "水生環境への二次的適応",
      "浮葉・湿地生活への形態的特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミツガシワ科" },
    ],
    japaneseSpeciesCount: 16,
    review: { status: "ai_generated" },
  },

  // ── クサトベラ科 ──────────────────────────────────────
  {
    id: "goodeniaceae",
    jaName: "クサトベラ科",
    enName: "Goodenia family",
    scientificName: "Goodeniaceae",
    order: "キク目",
    overview:
      "クサトベラを含む科。約12属430種が知られ、オーストラリアに多様性の中心がある。日本ではクサトベラが海岸砂地・珊瑚礁付近に分布する。花粉をすくい取る「花粉呈示装置（インジュジウム）」が特徴的。",
    characteristics: [
      "花冠は合弁で左右相称・5裂（扇形に広がる）",
      "柱頭に花粉を蓄えるカップ状のインジュジウム（花粉呈示装置）をもつ",
      "葉は単葉で互生",
      "海岸・乾燥地に生育することが多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キク目 > クサトベラ科",
    divergenceEra: "古第三紀〜新第三紀（主にオーストラリアで多様化）",
    representativeGenera: [
      "クサトベラ属（Scaevola）",
      "グッデニア属（Goodenia）",
    ],
    evolutionEvents: [
      "インジュジウム（花粉呈示装置）の進化",
      "オーストラリアでの爆発的多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クサトベラ科" },
    ],
    japaneseSpeciesCount: 10,
    review: { status: "ai_generated" },
  },

  // ── レンプクソウ科 ──────────────────────────────────────
  {
    id: "adoxaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sambucus_nigra_flowers.jpg",
    jaName: "レンプクソウ科",
    enName: "Moschatel family",
    scientificName: "Adoxaceae",
    order: "マツムシソウ目",
    overview:
      "APG体系でニワトコ属・ガマズミ属をスイカズラ科から移し再編した科。レンプクソウ・ニワトコ・ガマズミ・カンボク・オオカメノキなどを含む。約5属200種が知られ、北半球を中心に分布する。",
    characteristics: [
      "花は小さく集散花序〜散房状",
      "花冠は4〜5裂",
      "果実は液果（核果）で赤〜黒く熟す",
      "葉は対生で羽状複葉または単葉",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > マツムシソウ目 > レンプクソウ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "レンプクソウ属（Adoxa）",
      "ニワトコ属（Sambucus）",
      "ガマズミ属（Viburnum）",
    ],
    evolutionEvents: [
      "APG体系による科の再編（スイカズラ科からの分離）",
      "液果による鳥類散布の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/レンプクソウ科" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── スイカズラ科 ──────────────────────────────────────
  {
    id: "caprifoliaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lonicera_caprifolium_01.jpg",
    jaName: "スイカズラ科",
    enName: "Honeysuckle family",
    scientificName: "Caprifoliaceae",
    order: "マツムシソウ目",
    overview:
      "スイカズラ・タニウツギ・オミナエシ・マツムシソウ・ツキヌキニンドウなどを含む科。APG体系での再編でオミナエシ科・マツムシソウ科などを統合。約860種が知られ、北半球の温帯に多い。",
    characteristics: [
      "花冠は合弁で左右相称または放射相称",
      "葉は対生",
      "果実は液果・痩果・さく果など多様",
      "APG体系で複数の旧科を統合した拡張科",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > マツムシソウ目 > スイカズラ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "スイカズラ属（Lonicera）",
      "タニウツギ属（Weigela）",
      "オミナエシ属（Patrinia）",
      "マツムシソウ属（Scabiosa）",
      "ツルカノコソウ属（Valeriana）",
    ],
    evolutionEvents: [
      "APG体系によるオミナエシ科・マツムシソウ科等の統合",
      "蜜腺の発達による特定昆虫・鳥との送粉共進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スイカズラ科" },
    ],
    japaneseSpeciesCount: 345,
    review: { status: "ai_generated" },
  },

  // ── トベラ科 ──────────────────────────────────────
  {
    id: "pittosporaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pittosporum_tobira.jpg",
    jaName: "トベラ科",
    enName: "Pittosporum family",
    scientificName: "Pittosporaceae",
    order: "セリ目",
    overview:
      "トベラ属を中心とする科。約9属200種以上が知られ、旧世界熱帯〜温帯に分布する。日本ではトベラが海岸の潮風に強い常緑低木として分布する。果実は裂けて粘液に覆われた種子を露出する。",
    characteristics: [
      "常緑木本（低木〜高木）",
      "葉は革質で光沢があり互生",
      "花弁は5枚で筒形〜反り返る",
      "果実は蒴果で粘液を分泌して種子を覆う",
      "海岸・乾燥環境に生育することが多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > セリ目 > トベラ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "トベラ属（Pittosporum）",
      "ビリャルシア属（Billardiera）",
    ],
    evolutionEvents: [
      "粘液による種子散布（鳥類への付着）の進化",
      "海岸環境への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トベラ科" },
    ],
    japaneseSpeciesCount: 25,
    review: { status: "ai_generated" },
  },

  // ── ウコギ科 ──────────────────────────────────────
  {
    id: "araliaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fatsia_japonica.jpg",
    jaName: "ウコギ科",
    enName: "Aralia family",
    scientificName: "Araliaceae",
    order: "セリ目",
    overview:
      "タラノキ・ヤツデ・コシアブラ・カクレミノ・キヅタ・高麗人参（オタネニンジン）などを含む科。約43属1500種が知られ、熱帯〜温帯に広く分布する。APG体系でセリ科と近縁であることが確認された。",
    characteristics: [
      "花は小さく散形花序に集まる",
      "花弁は5枚（まれに4枚）",
      "果実は液果（核果）で鳥類に散布される",
      "葉は掌状複葉または羽状複葉が多い",
      "茎や葉に毛・刺をもつことが多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > セリ目 > ウコギ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前〜）",
    representativeGenera: [
      "タラノキ属（Aralia）",
      "ヤツデ属（Fatsia）",
      "キヅタ属（Hedera）",
      "ニンジン属（Panax）",
      "カクレミノ属（Dendropanax）",
    ],
    evolutionEvents: [
      "セリ科との共通祖先から散形花序の進化",
      "液果による鳥類散布と熱帯〜温帯への広域分布",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウコギ科" },
    ],
    japaneseSpeciesCount: 195,
    review: { status: "ai_generated" },
  },

  // ── ペトロサヴィア科 ──────────────────────────────────
  {
    id: "petrosaviaceae",
    jaName: "ペトロサヴィア科",
    enName: "Petrosavia family",
    scientificName: "Petrosaviaceae",
    order: "ペトロサヴィア目",
    overview:
      "東アジア・東南アジアの熱帯〜亜熱帯林床に生育する、葉緑素をもたない腐生植物の小さな科。日本ではサクライソウ（Petrosavia sakuraii）が知られる。APG体系では単子葉類の中でも早期分岐したペトロサヴィア目を構成する。",
    characteristics: [
      "葉緑素を欠く腐生植物（菌従属栄養植物）",
      "鱗片状の葉をもち、光合成を行わない",
      "花被片6枚、雄しべ6本",
      "熱帯〜亜熱帯の薄暗い林床に生育",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ペトロサヴィア目 > ペトロサヴィア科",
    divergenceEra: "白亜紀（単子葉類の初期分岐、約1億2000万年前以降）",
    representativeGenera: [
      "サクライソウ属（Petrosavia）",
      "ミヤマウキツリボタン属（Japonolirion）",
    ],
    evolutionEvents: [
      "葉緑素喪失による菌従属栄養（腐生）への移行",
      "単子葉類の基部に位置する早期分岐系統として残存",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ペトロサビア科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── ヒナノシャクジョウ科 ──────────────────────────────
  {
    id: "burmanniaceae",
    jaName: "ヒナノシャクジョウ科",
    enName: "Burmannia family",
    scientificName: "Burmanniaceae",
    order: "ヤマノイモ目",
    overview:
      "熱帯〜亜熱帯の林床に生育する小型の腐生植物を多く含む科。日本にはヒナノシャクジョウ（Burmannia championii）などが産する。光合成能力を失った菌従属栄養植物が多く、白色・淡紫色の小さな花をつける。",
    characteristics: [
      "多くの種が葉緑素を欠く菌従属栄養植物",
      "花被は筒状で、翼状の稜をもつ種が多い",
      "果実はさく果で、種子は非常に微小",
      "熱帯林床の腐植土上に生育",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ヤマノイモ目 > ヒナノシャクジョウ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ヒナノシャクジョウ属（Burmannia）",
      "ヒナノハイゴロモ属（Gymnosiphon）",
    ],
    evolutionEvents: [
      "ヤマノイモ目内での独立した菌従属栄養への進化",
      "種子の超微小化による菌根菌依存的な散布戦略の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒナノシャクジョウ科" },
    ],
    japaneseSpeciesCount: 22,
    review: { status: "ai_generated" },
  },

  // ── ヤマノイモ科 ──────────────────────────────────────
  {
    id: "dioscoreaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dioscorea_bulbifera.jpg",
    jaName: "ヤマノイモ科",
    enName: "Yam family",
    scientificName: "Dioscoreaceae",
    order: "ヤマノイモ目",
    overview:
      "ヤマノイモ・ニガカシュウ・オニドコロなどを含む科。食用になる巨大なイモをもつことで有名で、熱帯・温帯に広く分布する。つる性の植物が多く、雌雄異株。",
    characteristics: [
      "つる性植物が多く、右巻き・左巻きは種によって決まる",
      "地下に大型の塊茎・球根をもつ",
      "雌雄異株",
      "葉は心形で葉脈は弧状の平行脈",
      "花は小さく、花被片6枚",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ヤマノイモ目 > ヤマノイモ科",
    divergenceEra: "白亜紀後期（約9000万〜8000万年前）",
    representativeGenera: [
      "ヤマノイモ属（Dioscorea）",
    ],
    evolutionEvents: [
      "大型塊茎による乾季・冬季を乗り越える貯蔵戦略の確立",
      "つる性による林縁・攀縁生態への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤマノイモ科" },
    ],
    japaneseSpeciesCount: 54,
    review: { status: "ai_generated" },
  },

  // ── シャクジョウソウ科 ────────────────────────────────
  {
    id: "triuridaceae",
    jaName: "シャクジョウソウ科",
    enName: "Triuris family",
    scientificName: "Triuridaceae",
    order: "パンダナレス目",
    overview:
      "熱帯・亜熱帯の薄暗い林床に生育する、すべての種が菌従属栄養（腐生）の小さな科。葉緑素をもたず、地上部は花茎のみで紅色〜白色の花をつける。フィリピン・マレーシアなどに産する。",
    characteristics: [
      "葉緑素を完全に欠く腐生（菌従属栄養）植物",
      "葉は鱗片状に退化",
      "花は単性または両性で、花被片に長い突起をもつ種が多い",
      "地下茎で菌根菌に依存して栄養を得る",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > パンダナレス目 > シャクジョウソウ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "Triuris属（Triuris）",
      "Sciaphila属（Sciaphila）",
    ],
    evolutionEvents: [
      "単子葉類内での完全な腐生生活への移行",
      "花被の特殊化（突起・腺毛）による送粉者誘引の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シャクジョウソウ科" },
    ],
    japaneseSpeciesCount: 22,
    review: { status: "ai_generated" },
  },

  // ── ビャクブ科 ────────────────────────────────────────
  {
    id: "stemonaceae",
    jaName: "ビャクブ科",
    enName: "Stemona family",
    scientificName: "Stemonaceae",
    order: "パンダナレス目",
    overview:
      "東アジア〜東南アジア・オーストラリアに分布する小さな科。日本にはビャクブ（Stemona japonica）が産し、その根は漢方薬「百部（びゃくぶ）」として利用される。つる性または直立性の草本。",
    characteristics: [
      "葉は対生または輪生で、葉脈は横方向に弧状に走る",
      "花被片4枚、雄しべ4本",
      "根は太い塊根状で薬用になる",
      "つる性または直立草本",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > パンダナレス目 > ビャクブ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "ビャクブ属（Stemona）",
      "Croomia属（Croomia）",
    ],
    evolutionEvents: [
      "東アジアでの独自の分布域形成",
      "塊根へのアルカロイド蓄積による防御機構の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ビャクブ科" },
    ],
    japaneseSpeciesCount: 14,
    review: { status: "ai_generated" },
  },

  // ── タコノキ科 ────────────────────────────────────────
  {
    id: "pandanaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pandanus_tectorius.jpg",
    jaName: "タコノキ科",
    enName: "Screwpine family",
    scientificName: "Pandanaceae",
    order: "タコノキ目",
    overview:
      "熱帯アジア〜太平洋諸島に広く分布する科。日本では沖縄・小笠原にタコノキ（Pandanus boninensis）などが自生する。幹から気根（支柱根）を多数伸ばし、タコの足のように見えることが名前の由来。葉はパンダンリーフとして料理にも使われる。",
    characteristics: [
      "幹から多数の支柱根（気根）を伸ばす",
      "葉は螺旋状に密着し、細長く硬い",
      "雌雄異株",
      "果実は集合果で大型",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > タコノキ目 > タコノキ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前以降）",
    representativeGenera: [
      "タコノキ属（Pandanus）",
    ],
    evolutionEvents: [
      "支柱根による海岸・湿地環境への構造的適応",
      "大型集合果による動物（コウモリ・鳥）散布の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/タコノキ科" },
    ],
    japaneseSpeciesCount: 29,
    review: { status: "ai_generated" },
  },

  // ── サルトリイバラ科 ──────────────────────────────────
  {
    id: "smilacaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Smilax_aspera.jpg",
    jaName: "サルトリイバラ科",
    enName: "Catbrier family",
    scientificName: "Smilacaceae",
    order: "ユリ目",
    overview:
      "サルトリイバラ・サンキライ・シオデなどを含む科。つる性木本または草本で、葉柄にまきひげをもつのが特徴。雌雄異株で、赤い果実が美しい。日本には10種程度が自生する。",
    characteristics: [
      "葉柄の基部につる（まきひげ）をもつ",
      "葉に弧状の平行脈と網状脈が混在する",
      "雌雄異株、花は小さく6数性",
      "果実は液果で赤〜黒色に熟す",
      "茎にとげをもつ種が多い",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ユリ目 > サルトリイバラ科",
    divergenceEra: "白亜紀後期（約8000万年前以降）",
    representativeGenera: [
      "サルトリイバラ属（Smilax）",
    ],
    evolutionEvents: [
      "まきひげによるつる性生活への移行",
      "肉質液果による鳥類散布の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サルトリイバラ科" },
    ],
    japaneseSpeciesCount: 109,
    review: { status: "ai_generated" },
  },

  // ── ラン科 ────────────────────────────────────────────
  {
    id: "orchidaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dendrobium_nobile_(BG_Zurich)-01.JPG",
    jaName: "ラン科",
    enName: "Orchid family",
    scientificName: "Orchidaceae",
    order: "キジカクシ目",
    overview:
      "被子植物最大の科のひとつで、約28,000種が知られる。独特の花の形と菌根菌への依存が最大の特徴。地球上のあらゆる陸上環境に分布し、日本にも約250種が自生する。花の形は送粉者（ハチ・蝶・蛾・コバエなど）への驚くべき適応を示す。",
    characteristics: [
      "唇弁（リップ）と呼ばれる特殊化した花弁をもつ",
      "雄しべと雌しべが合着した「ずい柱（蕊柱）」",
      "花粉が塊（花粉塊）になっている",
      "種子は超微小で、菌根菌なしには発芽できない",
      "多くが着生植物（熱帯）または地生植物（温帯）",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > ラン科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7600万年前）",
    representativeGenera: [
      "エビネ属（Calanthe）",
      "シュンラン属（Cymbidium）",
      "ネジバナ属（Spiranthes）",
      "サギソウ属（Pecteilis）",
      "カトレア属（Cattleya）",
      "バニラ属（Vanilla）",
    ],
    evolutionEvents: [
      "ずい柱（雄しべ・雌しべの合着）の進化による受粉効率の飛躍的向上",
      "種子の超微小化（菌従属的発芽）の確立",
      "送粉者ごとに多様な花形・騙し受粉（偽餌）機構の独立進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ラン科" },
    ],
    japaneseSpeciesCount: 1882,
    review: { status: "ai_generated" },
  },

  // ── キンバイザサ科 ────────────────────────────────────
  {
    id: "hypoxidaceae",
    jaName: "キンバイザサ科",
    enName: "Stargrass family",
    scientificName: "Hypoxidaceae",
    order: "キジカクシ目",
    overview:
      "熱帯〜温帯に分布する、草本の小さな科。日本にはキンバイザサ（Curculigo orchioides）が九州・沖縄に産する。地下に球根状の根茎をもち、黄色い花をつける種が多い。",
    characteristics: [
      "線形〜披針形の葉が根元から叢生する",
      "花被片6枚で黄色が多い",
      "地下に球根状・根茎状の貯蔵器官をもつ",
      "花茎は葉間に直立し、花は少数",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > キンバイザサ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "キンバイザサ属（Curculigo）",
      "Hypoxis属（Hypoxis）",
    ],
    evolutionEvents: [
      "球根・根茎による季節的乾燥への貯蔵適応",
      "熱帯〜亜熱帯の草地・林縁への分布拡大",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キンバイザサ科" },
    ],
    japaneseSpeciesCount: 8,
    review: { status: "ai_generated" },
  },

  // ── アヤメ科 ──────────────────────────────────────────
  {
    id: "iridaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Iris_pseudacorus_0001.JPG",
    jaName: "アヤメ科",
    enName: "Iris family",
    scientificName: "Iridaceae",
    order: "キジカクシ目",
    overview:
      "アヤメ・ハナショウブ・クロッカス・グラジオラスなどを含む科。外花被片と内花被片が異なる形をもつアヤメ型の花が特徴的。世界に約66属2200種が知られ、日本には15種ほどが自生する。",
    characteristics: [
      "外花被3枚と内花被3枚が異なる形をもつ（特にアヤメ属）",
      "雄しべは3本",
      "葉は扁平で2列に互生（扇状に並ぶ）",
      "球根・根茎・球茎をもつことが多い",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > アヤメ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前以降）",
    representativeGenera: [
      "アヤメ属（Iris）",
      "クロッカス属（Crocus）",
      "グラジオラス属（Gladiolus）",
    ],
    evolutionEvents: [
      "花被の分化（外・内花被の機能的分業）による送粉特殊化",
      "球根・球茎による季節的不良環境への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アヤメ科" },
    ],
    japaneseSpeciesCount: 111,
    review: { status: "ai_generated" },
  },

  // ── ツルボラン科 ──────────────────────────────────────
  {
    id: "xanthorrhoeaceae",
    jaName: "ツルボラン科",
    enName: "Asphodel family",
    scientificName: "Xanthorrhoeaceae",
    order: "キジカクシ目",
    overview:
      "APG体系でユリ科から分離・拡大された科で、ツルボラン亜科・アロエ亜科・ヘメロカリス亜科を含む。日本ではキスゲ・ワスレグサ・ユウスゲなどが自生する。",
    characteristics: [
      "花被片6枚（3＋3）、多くが黄色・橙色・赤色",
      "葉は多肉質または線形で根元から叢生",
      "雄しべ6本",
      "多くが乾燥・日当たりの良い環境に適応",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > ツルボラン科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ワスレグサ属（Hemerocallis）",
      "アロエ属（Aloe）",
      "ハラン属（Aspidistra）",
    ],
    evolutionEvents: [
      "葉の多肉化による乾燥適応（アロエ亜科）",
      "大型花による鳥・蛾への送粉特殊化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツルボラン科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── ヤシ科 ────────────────────────────────────────────
  {
    id: "arecaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cocos_nucifera_01.JPG",
    jaName: "ヤシ科",
    enName: "Palm family",
    scientificName: "Arecaceae",
    order: "ヤシ目",
    overview:
      "ヤシ・ビロウ・シュロなどを含む科。熱帯〜亜熱帯に約2600種が知られ、幹が分岐しない単幹性木本が多い。ヤシの実・ナツメヤシ・ヤシ油など人類生活に深く関わる。日本ではビロウが南西諸島に自生する。",
    characteristics: [
      "幹は分岐せず、頂部にのみ大型羽状・掌状葉が叢生する",
      "幹に葉痕が残る",
      "花は小さく3数性、肉穂花序",
      "果実は核果または液果で大型のものが多い",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ヤシ目 > ヤシ科",
    divergenceEra: "白亜紀後期（約8000万〜7000万年前）",
    representativeGenera: [
      "ビロウ属（Livistona）",
      "シュロ属（Trachycarpus）",
      "ヤシ属（Cocos）",
      "ナツメヤシ属（Phoenix）",
    ],
    evolutionEvents: [
      "単幹性木本という単子葉類に特有の樹木様成長戦略の確立",
      "大型果実による大型動物を介した散布の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤシ科" },
    ],
    japaneseSpeciesCount: 188,
    review: { status: "ai_generated" },
  },

  // ── ハングアナ科 ──────────────────────────────────────
  {
    id: "hanguanaceae",
    jaName: "ハングアナ科",
    enName: "Hanguana family",
    scientificName: "Hanguanaceae",
    order: "ツユクサ目",
    overview:
      "東南アジアの湿地・河岸に生育する単型科（1属のみ）。Hanguana属1属数種からなる。大型の根生葉をもち、湿潤な林床や水辺に群生する。日本には自生しない。",
    characteristics: [
      "大型の楕円形〜披針形の根生葉",
      "花は小さく、6数性",
      "湿地・河岸の湿潤な環境に生育",
      "1属のみからなる単型科",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ目 > ハングアナ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "Hanguana属（Hanguana）",
    ],
    evolutionEvents: [
      "東南アジア湿潤熱帯における独自の系統として残存",
      "湿地・水辺環境への根生葉適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハングアナ科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── フィリドルム科 ────────────────────────────────────
  {
    id: "philydraceae",
    jaName: "フィリドルム科",
    enName: "Philydrum family",
    scientificName: "Philydraceae",
    order: "ツユクサ目",
    overview:
      "東アジア〜オーストラリアの湿地・水辺に生育する小さな科。穂状花序に黄色い花をつける。ミズアオイ科（Pontederiaceae）とは別科で、APG体系でツユクサ目に含まれる。",
    characteristics: [
      "茎は直立し、葉は細長く扁平で2列",
      "花は黄色、花被片4枚で左右相称",
      "穂状花序",
      "湿地・水辺の浅水域に生育",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ目 > フィリドルム科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "フィリドルム属（Philydrum）",
      "Helmholtzia属（Helmholtzia）",
    ],
    evolutionEvents: [
      "東アジア・オーストラリア間の分布形成",
      "湿地環境への扁平葉による水中・浅水適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミズアオイ目" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ミズアオイ科 ──────────────────────────────────────
  {
    id: "pontederiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Eichhornia_crassipes.jpg",
    jaName: "ミズアオイ科",
    enName: "Pickerelweed family",
    scientificName: "Pontederiaceae",
    order: "ツユクサ目",
    overview:
      "水生・湿生の草本からなる科。日本にはミズアオイ（Monochoria korsakowii）・コナギが自生し、水田の雑草としても知られる。花は青〜紫色で美しく、ホテイアオイ（ウォーターヒヤシンス）は世界的な侵略的外来種でもある。",
    characteristics: [
      "水生または湿生の草本",
      "花被片6枚で青〜紫色が多い",
      "雄しべの長さが異なる異型雄しべをもつ種がある",
      "葉は心形〜矢形で光沢がある",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ目 > ミズアオイ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "ミズアオイ属（Monochoria）",
      "ホテイアオイ属（Eichhornia）",
      "Pontederia属（Pontederia）",
    ],
    evolutionEvents: [
      "水生環境への完全適応（浮水・抽水型の分化）",
      "異型雄しべによる交差受粉促進機構の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミズアオイ科" },
    ],
    japaneseSpeciesCount: 19,
    review: { status: "ai_generated" },
  },

  // ── ゴクラクチョウカ科 ────────────────────────────────
  {
    id: "strelitziaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Strelitzia_reginae.jpg",
    jaName: "ゴクラクチョウカ科",
    enName: "Bird-of-paradise family",
    scientificName: "Strelitziaceae",
    order: "ショウガ目",
    overview:
      "ゴクラクチョウカ（Strelitzia reginae）・オウムバショウ（Ravenala）などを含む科。南アフリカ・マダガスカル・熱帯アメリカに分布する。ショウガ目の中で早期分岐した系統で、大型の葉と特殊化した花形をもつ。",
    characteristics: [
      "大型で卵形〜長楕円形の葉が2列に並ぶ",
      "花は独特の鳥嘴状の苞から突き出す",
      "鳥媒花（バードポリネーション）に特殊化",
      "茎は高木〜低木状になる種もある",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > ゴクラクチョウカ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ゴクラクチョウカ属（Strelitzia）",
      "オウムバショウ属（Ravenala）",
    ],
    evolutionEvents: [
      "ゴンドワナ超大陸分裂に伴う南半球への分布形成",
      "鳥媒花への特殊化による高度な共進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ゴクラクチョウカ科" },
    ],
    japaneseSpeciesCount: 6,
    review: { status: "ai_generated" },
  },

  // ── ヘリコニア科 ──────────────────────────────────────
  {
    id: "heliconiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Heliconia_psittacorum.jpg",
    jaName: "ヘリコニア科",
    enName: "Heliconia family",
    scientificName: "Heliconiaceae",
    order: "ショウガ目",
    overview:
      "熱帯アメリカ・太平洋諸島に分布する単型科（1属のみ）。ヘリコニア属の約200種からなる。カラフルな苞葉が美しく、観賞用に広く栽培される。ハチドリとの共進化が特に有名。",
    characteristics: [
      "大型の葉がバナナに似る",
      "苞葉は鮮やかな赤・橙・黄色",
      "花は苞葉の内側に列状に並ぶ",
      "ハチドリ媒花として特殊化",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > ヘリコニア科",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    representativeGenera: [
      "ヘリコニア属（Heliconia）",
    ],
    evolutionEvents: [
      "ハチドリとの緊密な共進化による苞葉の多様化",
      "熱帯アメリカにおける単型科としての系統的孤立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヘリコニア科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── バショウ科 ────────────────────────────────────────
  {
    id: "musaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Musa_acuminata_kz1.JPG",
    jaName: "バショウ科",
    enName: "Banana family",
    scientificName: "Musaceae",
    order: "ショウガ目",
    overview:
      "バナナ・バショウを含む科。バナナは世界最重要の果物作物のひとつ。大型の草本（巨大化した葉鞘が重なって偽茎を形成）で、本当の木ではない。日本ではバショウ（Musa basjoo）が本州南部まで自生する。",
    characteristics: [
      "巨大な葉鞘が積み重なって偽茎（仮茎）を形成",
      "葉は大型で長楕円形、主脈が太い",
      "花序は下垂し、大きな苞葉が包む",
      "果実は液果（バナナ）で、栽培品は三倍体で種なし",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > バショウ科",
    divergenceEra: "白亜紀後期〜古第三紀（約6500万年前以降）",
    representativeGenera: [
      "バナナ属（Musa）",
      "エンセーテ属（Ensete）",
    ],
    evolutionEvents: [
      "偽茎形成による巨大草本の進化（木質化なし）",
      "三倍体バナナの人為選択による種なし・大果化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/バショウ科" },
    ],
    japaneseSpeciesCount: 36,
    review: { status: "ai_generated" },
  },

  // ── カンナ科 ──────────────────────────────────────────
  {
    id: "cannaceae",
    jaName: "カンナ科",
    enName: "Canna family",
    scientificName: "Cannaceae",
    order: "ショウガ目",
    overview:
      "熱帯アメリカ原産の単型科（1属のみ）。カンナ属約10種からなり、観賞用に世界中で栽培される。大型の赤・橙・黄色の花と大きな葉が特徴。地下に大型の根茎をもち、食用（デンプン源）になる種もある。",
    characteristics: [
      "雄しべが花弁状に変化した仮雄しべ（仮弁）が発達",
      "大型の葉が2列に互生する",
      "地下に大型の塊根茎をもつ",
      "1属のみからなる単型科",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > カンナ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "カンナ属（Canna）",
    ],
    evolutionEvents: [
      "雄しべの花弁状変形による装飾的花形の進化",
      "熱帯アメリカから全世界熱帯・亜熱帯への栽培拡散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カンナ科" },
    ],
    japaneseSpeciesCount: 9,
    review: { status: "ai_generated" },
  },

  // ── クズウコン科 ──────────────────────────────────────
  {
    id: "marantaceae",
    jaName: "クズウコン科",
    enName: "Arrowroot family",
    scientificName: "Marantaceae",
    order: "ショウガ目",
    overview:
      "熱帯アメリカ・アフリカ・アジアの熱帯林床に分布する科。クズウコン（Maranta arundinacea）のデンプンはアロールートとして食用になる。葉に美しい模様をもつ観葉植物（カラテア・マランタ）としても人気が高い。",
    characteristics: [
      "葉に模様（斑）をもつ種が多く、観葉植物として重要",
      "葉は昼夜で動く（就眠運動）",
      "有効雄しべは1本のみ、ほかは花弁状",
      "花は左右相称",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > クズウコン科",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    representativeGenera: [
      "クズウコン属（Maranta）",
      "カラテア属（Calathea）",
      "ストロマンテ属（Stromanthe）",
    ],
    evolutionEvents: [
      "葉の就眠運動の進化（草食者回避・水分節約）",
      "爆発的な受粉機構（雄しべのばね機構）の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クズウコン科" },
    ],
    japaneseSpeciesCount: 24,
    review: { status: "ai_generated" },
  },

  // ── コスタス科 ────────────────────────────────────────
  {
    id: "costaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Costus_speciosus.jpg",
    jaName: "コスタス科",
    enName: "Costus family",
    scientificName: "Costaceae",
    order: "ショウガ目",
    overview:
      "かつてショウガ科に含まれていたが、APG体系で独立した科。葉が螺旋状に茎を巻き上がる独特の形態が特徴。熱帯アメリカ・アフリカ・アジアに分布し、大きな穂状花序に鮮やかな花をつける。",
    characteristics: [
      "葉が螺旋状に茎を回りながら並ぶ（ショウガ科との識別点）",
      "根茎をもち、香りはショウガ科より弱い",
      "唇弁（リップ）が大きく発達した花",
      "苞葉は堅く、球状〜円柱状の花序を形成",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > コスタス科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "コスタス属（Costus）",
      "Tapeinochilos属（Tapeinochilos）",
    ],
    evolutionEvents: [
      "ショウガ科からの系統分岐と螺旋葉序の独立進化",
      "熱帯林の林縁・林床への適応分化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コスタス科" },
    ],
    japaneseSpeciesCount: 6,
    review: { status: "ai_generated" },
  },

  // ── ショウガ科 ────────────────────────────────────────
  {
    id: "zingiberaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Zingiber_officinale_001.JPG",
    jaName: "ショウガ科",
    enName: "Ginger family",
    scientificName: "Zingiberaceae",
    order: "ショウガ目",
    overview:
      "ショウガ・ウコン・ミョウガ・カルダモンなど重要な香辛料を含む科。約50属1600種が知られ、アジア熱帯に多様性の中心がある。日本にはショウガ・ミョウガ・ハナミョウガなどが自生・栽培される。根茎に精油・色素を蓄える。",
    characteristics: [
      "根茎に芳香性の精油を含む",
      "葉鞘が発達し、葉舌をもつ",
      "有効雄しべは1本、ほかは唇弁状に変化",
      "花は左右相称で唇弁（リップ）が発達",
      "果実はさく果または液果",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > ショウガ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前以降）",
    representativeGenera: [
      "ショウガ属（Zingiber）",
      "ウコン属（Curcuma）",
      "カルダモン属（Elettaria）",
      "ハナミョウガ属（Alpinia）",
    ],
    evolutionEvents: [
      "根茎への精油・クルクミンなど二次代謝産物の集積",
      "アジア熱帯における急速な多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ショウガ科" },
    ],
    japaneseSpeciesCount: 88,
    review: { status: "ai_generated" },
  },

  // ── キバナノイグサ科 ──────────────────────────────────
  {
    id: "xyridaceae",
    jaName: "キバナノイグサ科",
    enName: "Yellow-eyed grass family",
    scientificName: "Xyridaceae",
    order: "イネ目",
    overview:
      "湿地・泥炭地・貧栄養地に生育する草本の科。日本にはキバナノイグサ（Xyris japonica）が関東〜九州の湿地に産する。細い葉が根元に叢生し、穂状花序に黄色い花をつける。",
    characteristics: [
      "根元に細長い葉が叢生する",
      "花は3数性で黄色（まれに白・青）",
      "硬い苞に包まれた穂状花序",
      "貧栄養・酸性の湿地に特徴的",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > キバナノイグサ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "キバナノイグサ属（Xyris）",
    ],
    evolutionEvents: [
      "貧栄養湿地への特殊適応による分布の限定化",
      "イネ目の中での水辺生態系への収斂",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キバナノイグサ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ホシクサ科 ────────────────────────────────────────
  {
    id: "eriocaulaceae",
    jaName: "ホシクサ科",
    enName: "Pipewort family",
    scientificName: "Eriocaulaceae",
    order: "イネ目",
    overview:
      "湿地・水辺に生育する草本の科。日本にはホシクサ・イヌノヒゲなど多くの種が自生し、秋の湿地の代表的な植物。白い綿毛状の頭状花序が特徴的で、約400種が知られる。",
    characteristics: [
      "白色〜灰白色の綿毛状の頭状花序",
      "葉は根元に叢生し、透明な横隔壁をもつ種が多い",
      "花は単性で非常に小さい",
      "湿地・浅い水中に生育",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > ホシクサ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "ホシクサ属（Eriocaulon）",
      "イヌノヒゲ属（Syngonanthus）",
    ],
    evolutionEvents: [
      "頭状花序（綿毛状）による風媒への特殊化",
      "湿地〜水中への生態的適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホシクサ科" },
    ],
    japaneseSpeciesCount: 104,
    review: { status: "ai_generated" },
  },

  // ── イグサ科 ──────────────────────────────────────────
  {
    id: "juncaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Juncus_effusus.jpg",
    jaName: "イグサ科",
    enName: "Rush family",
    scientificName: "Juncaceae",
    order: "イネ目",
    overview:
      "イグサ・スズメノヤリ・コウガイゼキショウなどを含む科。湿地・草地・山地に広く分布し、日本に約100種が自生する。畳表の原料となるイグサが最も有名。花は風媒で、花被片6枚が退化した地味な花をつける。",
    characteristics: [
      "茎は円柱形で中空または髄が充満",
      "花被片6枚で褐色〜緑色の地味な花",
      "風媒花で花粉量が多い",
      "葉は円柱形または扁平、葉鞘をもつ",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > イグサ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "イグサ属（Juncus）",
      "スズメノヤリ属（Luzula）",
    ],
    evolutionEvents: [
      "花被の退化・風媒化による乾燥・開放環境への適応",
      "湿地〜高山帯まで広い生態幅の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イグサ科" },
    ],
    japaneseSpeciesCount: 143,
    review: { status: "ai_generated" },
  },

  // ── カヤツリグサ科 ────────────────────────────────────
  {
    id: "cyperaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cyperus_papyrus_01_by_Line1.JPG",
    jaName: "カヤツリグサ科",
    enName: "Sedge family",
    scientificName: "Cyperaceae",
    order: "イネ目",
    overview:
      "スゲ・カヤツリグサ・ホタルイ・パピルスなどを含む大きな科。約5000種が知られ、世界中の湿地・水辺・草地に広く分布する。イネ科と似るが「茎は三角形で節はない」のが見分けのポイント。日本に約600種が自生する。",
    characteristics: [
      "茎の断面は三角形で節がない（「カヤツリグサの三角」）",
      "葉鞘の口が閉じている",
      "小穂は鱗片と1花からなる",
      "風媒花で花被は糸状または鱗片状",
      "湿地・水辺に特に多い",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > カヤツリグサ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "スゲ属（Carex）",
      "カヤツリグサ属（Cyperus）",
      "ホタルイ属（Schoenoplectus）",
      "ワタスゲ属（Eriophorum）",
    ],
    evolutionEvents: [
      "三角形茎・閉じた葉鞘という形態革新の確立",
      "湿地〜高山帯への生態的放散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カヤツリグサ科" },
    ],
    japaneseSpeciesCount: 1897,
    review: { status: "ai_generated" },
  },

  // ── ホソバノイグサ科 ──────────────────────────────────
  {
    id: "centrolepidaceae",
    jaName: "ホソバノイグサ科",
    enName: "Centrolepis family",
    scientificName: "Centrolepidaceae",
    order: "イネ目",
    overview:
      "オーストラリア・ニュージーランド・東南アジアに分布する小さな科。日本には分布しない。極めて小型の草本で、湿地・岩場に生育する。花は高度に退化・単純化しており、APG体系でレスチオ科に近縁。",
    characteristics: [
      "極めて小型で、葉は糸状〜毛状",
      "花は非常に単純で花被を欠くか退化",
      "湿地・岩場の貧栄養環境に生育",
      "APG体系でレスチオ科に近縁",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > ホソバノイグサ科",
    divergenceEra: "古第三紀〜新第三紀",
    representativeGenera: [
      "Centrolepis属（Centrolepis）",
    ],
    evolutionEvents: [
      "南半球を中心とした分布形成（ゴンドワナ起源の可能性）",
      "花の極度の退化・単純化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホソバノイグサ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── レスチオ科 ────────────────────────────────────────
  {
    id: "restionaceae",
    jaName: "レスチオ科",
    enName: "Restio family",
    scientificName: "Restionaceae",
    order: "イネ目",
    overview:
      "南アフリカ（ケープ地方）・オーストラリアの貧栄養な砂質土壌・草地に多様性の中心をもつ科。光合成は葉ではなく茎で行う（葉は退化または鱗片状）。日本には自生しないが、観賞用に栽培される種がある。",
    characteristics: [
      "葉が退化し、緑色の茎が光合成を担う",
      "茎は細長く、節間に苞がある",
      "風媒花で小穂状の花序",
      "貧栄養・乾燥した砂質土に適応",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > レスチオ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "Restio属（Restio）",
      "Thamnochortus属（Thamnochortus）",
    ],
    evolutionEvents: [
      "南半球の貧栄養土壌（フィンボス・スクラブ）への特殊適応",
      "葉の光合成機能の茎への移転",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/レスチオ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── トウアズキ科 ──────────────────────────────────────
  {
    id: "flagellariaceae",
    jaName: "トウアズキ科",
    enName: "Flagellaria family",
    scientificName: "Flagellariaceae",
    order: "イネ目",
    overview:
      "熱帯アジア〜太平洋・アフリカに分布する単型科。トウアズキ（Flagellaria indica）1種のみが知られ、日本では沖縄・小笠原に自生する。葉先がまきひげ状になって他の植物に絡まるつる性草本。",
    characteristics: [
      "葉先がまきひげ状になり、他の植物に絡みつく",
      "茎は細く長くのび、林縁を這い上がる",
      "花は小さく白色、円錐花序",
      "果実は球形の液果",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > トウアズキ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "トウアズキ属（Flagellaria）",
    ],
    evolutionEvents: [
      "葉先のまきひげ化によるつる性への構造的革新",
      "インド洋〜太平洋の熱帯海岸沿いへの広域分散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トウアズキ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── キンギョモ科 ──────────────────────────────────────
  {
    id: "ceratophyllaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ceratophyllum_demersum.jpg",
    jaName: "キンギョモ科",
    enName: "Hornwort family",
    scientificName: "Ceratophyllaceae",
    order: "キンギョモ目",
    overview:
      "世界の淡水域に広く分布する水生植物の科。キンギョモ（Ceratophyllum demersum）など数種のみからなる小科。根をもたず、水中に完全に沈水して生活する。被子植物の中でも特殊な系統位置（真正双子葉類の外側）をもつ。",
    characteristics: [
      "根を完全に欠く（根なし水草）",
      "葉は輪生し、先端が二叉に分岐した糸状",
      "花は単性で花被を欠く、極めて単純",
      "完全沈水植物で水媒花",
      "節間に浮力をもち、水中を浮遊する",
    ],
    phylogeneticPosition: "被子植物 > キンギョモ目 > キンギョモ科（真正双子葉類の基部に近い位置）",
    divergenceEra: "白亜紀前期〜中期（約1億2000万〜1億年前）",
    representativeGenera: [
      "キンギョモ属（Ceratophyllum）",
    ],
    evolutionEvents: [
      "根の完全消失による完全沈水・浮遊生活への進化",
      "被子植物としての最古の分岐系統のひとつとして系統的孤立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キンギョモ科" },
    ],
    japaneseSpeciesCount: 10,
    review: { status: "ai_generated" },
  },

  // ── ヤマモモ科 ──────────────────────────────────────
  {
    id: "myricaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Myrica_rubra.jpg",
    jaName: "ヤマモモ科",
    enName: "Bayberry family",
    scientificName: "Myricaceae",
    order: "ブナ目",
    overview:
      "ヤマモモ（Morella rubra）など常緑〜落葉低木・高木を含む小科。根粒菌（Frankia属）との共生による窒素固定能力をもつことで知られ、痩せた土地にも生育できる。核果状の果実は蝋質の皮膜で覆われることがある。",
    characteristics: [
      "根にFrankia属放線菌が共生し窒素固定を行う",
      "葉は互生で芳香をもつことが多い",
      "花は単性で花被を欠く小さな穂状花序",
      "果実は核果または偽果で、表面に蝋質の粒をもつものがある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ブナ目 > ヤマモモ科",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    representativeGenera: [
      "ヤマモモ属（Morella）",
      "ハイイロヤマモモ属（Myrica）",
      "コンプトニア属（Comptonia）",
    ],
    evolutionEvents: [
      "Frankia属放線菌との共生進化による窒素固定能の獲得",
      "ブナ目内での早期分岐",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤマモモ科" },
    ],
    japaneseSpeciesCount: 15,
    review: { status: "ai_generated" },
  },

  // ── クルミ科 ──────────────────────────────────────
  {
    id: "juglandaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Juglans_regia_001.JPG",
    jaName: "クルミ科",
    enName: "Walnut family",
    scientificName: "Juglandaceae",
    order: "ブナ目",
    overview:
      "クルミ・ヒッコリー・ペカンなどの大型落葉樹を含む科。羽状複葉と核果（堅果）が主な識別点で、大型の食用種子を多く含む。約10属50種が北半球の温帯〜熱帯に分布し、日本にはオニグルミなどが自生する。",
    characteristics: [
      "羽状複葉が多く、芳香をもつ",
      "花は単性で、雄花は垂れ下がる尾状花序",
      "果実は核果で、外果皮は肉質または乾燥し、内果皮は硬い殻",
      "大型の落葉高木が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ブナ目 > クルミ科",
    divergenceEra: "白亜紀後期〜古第三紀（約9000万〜7000万年前）",
    representativeGenera: [
      "クルミ属（Juglans）",
      "ヒッコリー属（Carya）",
      "サワグルミ属（Pterocarya）",
      "エンゲルハルディア属（Engelhardia）",
    ],
    evolutionEvents: [
      "大型堅果による哺乳類散布への適応進化",
      "ブナ目内での風媒花の独立進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クルミ科" },
    ],
    japaneseSpeciesCount: 24,
    review: { status: "ai_generated" },
  },

  // ── モクマオウ科 ──────────────────────────────────────
  {
    id: "casuarinaceae",
    jaName: "モクマオウ科",
    enName: "She-oak family",
    scientificName: "Casuarinaceae",
    order: "ブナ目",
    overview:
      "オーストラリア・東南アジア原産の科で、モクマオウ（Casuarina equisetifolia）が防風林・砂防として日本でも植栽される。葉が退化して緑色の節のある細枝（葉状枝）が光合成を担う独特の形態をもち、一見針葉樹に似る。",
    characteristics: [
      "葉は極度に退化し輪生する小さな鱗片状",
      "節のある細い緑色の枝が光合成を行う（葉状枝）",
      "木質化した球果状の偽果",
      "根にFrankia属が共生し窒素固定を行う",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ブナ目 > モクマオウ科",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    representativeGenera: [
      "モクマオウ属（Casuarina）",
      "トクサバモクマオウ属（Allocasuarina）",
    ],
    evolutionEvents: [
      "乾燥・貧栄養環境への適応としての葉の退化と葉状枝の発達",
      "窒素固定共生の独立獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/モクマオウ科" },
    ],
    japaneseSpeciesCount: 6,
    review: { status: "ai_generated" },
  },

  // ── ドクウツギ科 ──────────────────────────────────────
  {
    id: "coriariaceae",
    jaName: "ドクウツギ科",
    enName: "Tanner's tree family",
    scientificName: "Coriariaceae",
    order: "ウリ目",
    overview:
      "1属15種ほどからなる小科で、日本にはドクウツギ（Coriaria japonica）が自生する。全草に有毒なコリアミルチンを含み、特に果実の誤食による中毒事故が知られる。葉の対生と独特の花序が特徴。",
    characteristics: [
      "葉は対生または輪生し、基部から3脈が出る",
      "花は小さく5数性、果実は花後に発達した花弁が肉質になって果実を包む",
      "全草に神経毒コリアミルチンを含む有毒植物",
      "Frankia属との共生による窒素固定",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > ドクウツギ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万〜6000万年前）",
    representativeGenera: [
      "ドクウツギ属（Coriaria）",
    ],
    evolutionEvents: [
      "コリアミルチンなど神経毒の進化（草食者への防御）",
      "花弁が果肉化するユニークな偽果構造の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ドクウツギ科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── ウリ科 ──────────────────────────────────────
  {
    id: "cucurbitaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cucurbita_pepo_plant.jpg",
    jaName: "ウリ科",
    enName: "Gourd family",
    scientificName: "Cucurbitaceae",
    order: "ウリ目",
    overview:
      "キュウリ・カボチャ・スイカ・ゴーヤなど世界的に重要な野菜・果物を多数含む科。つる性の草本が多く、巻きひげで支持物に絡みつく。雌雄同株で花は単性、果実は「瓜果（ウリ果）」と呼ばれる独特の液果。",
    characteristics: [
      "つる性草本で腋生の巻きひげをもつ",
      "葉は互生し、しばしば掌状に裂ける",
      "花は単性（雌雄同株が多い）、花弁は合着して5裂",
      "果実は瓜果（ウリ果）で、果皮が硬化しやすい",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > ウリ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "キュウリ属（Cucumis）",
      "カボチャ属（Cucurbita）",
      "スイカ属（Citrullus）",
      "ヘチマ属（Luffa）",
      "カラスウリ属（Trichosanthes）",
    ],
    evolutionEvents: [
      "瓜果（ウリ果）という独自の果実型の進化",
      "苦味物質ククルビタシンの発達（草食者への防御）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウリ科" },
    ],
    japaneseSpeciesCount: 138,
    review: { status: "ai_generated" },
  },

  // ── ダティスカ科 ──────────────────────────────────────
  {
    id: "datiscaceae",
    jaName: "ダティスカ科",
    enName: "Datisca family",
    scientificName: "Datiscaceae",
    order: "ウリ目",
    overview:
      "2種のみからなる小科で、地中海東部〜中央アジア・インドと北米に隔離分布する。大型の多年生草本で、花は単性。根にFrankia属が共生して窒素固定を行う。ベゴニア科・ウリ科と近縁のウリ目に属する。",
    characteristics: [
      "大型の多年生草本（高さ1〜2m）",
      "葉は羽状複葉状に深く裂ける",
      "花は単性で花弁を欠くか小さい",
      "根にFrankia属が共生し窒素固定を行う",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > ダティスカ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ダティスカ属（Datisca）",
    ],
    evolutionEvents: [
      "ウリ目内での窒素固定共生の独立獲得",
      "旧世界〜新世界の隔離分布の形成",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ダティスカ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── シュウカイドウ科 ──────────────────────────────────────
  {
    id: "begoniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Begonia_semperflorens.jpg",
    jaName: "シュウカイドウ科",
    enName: "Begonia family",
    scientificName: "Begoniaceae",
    order: "ウリ目",
    overview:
      "シュウカイドウ（Begonia grandis）など観賞植物として広く栽培される科。約2属2000種以上が知られ、熱帯・亜熱帯に広く分布。葉が著しく左右非対称になることが最大の特徴。",
    characteristics: [
      "葉が著しく左右非対称（非対称葉）",
      "花は単性で、雌花には翼のある子房が目立つ",
      "多肉質の茎をもつものが多い",
      "托葉が発達する",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > シュウカイドウ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前〜）",
    representativeGenera: [
      "シュウカイドウ属（Begonia）",
      "ヒレカズラ属（Hillebrandia）",
    ],
    evolutionEvents: [
      "左右非対称の葉という特殊形態の進化",
      "熱帯林床環境への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シュウカイドウ科" },
    ],
    japaneseSpeciesCount: 60,
    review: { status: "ai_generated" },
  },

  // ── ニシキギ科 ──────────────────────────────────────
  {
    id: "celastraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Euonymus_europaeus_fruits.jpg",
    jaName: "ニシキギ科",
    enName: "Bittersweet family",
    scientificName: "Celastraceae",
    order: "ニシキギ目",
    overview:
      "ニシキギ・マサキ・ツルウメモドキなど日本でも身近な木本を含む科。約90属1400種が知られ、熱帯〜温帯に広く分布する。花盤（はなばん）が発達することと、果実が橙赤色の仮種皮をもつものが多いことが特徴。",
    characteristics: [
      "花盤（花托の肥厚した組織）が発達する",
      "果実はさく果が多く、橙赤色の肉質仮種皮で種子を包む",
      "葉は単葉で対生または互生",
      "小さな4〜5数性の花",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > ニシキギ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "ニシキギ属（Euonymus）",
      "ツルウメモドキ属（Celastrus）",
      "マユミ属（Euonymus）",
    ],
    evolutionEvents: [
      "橙赤色仮種皮による鳥類を介した種子散布戦略の進化",
      "花盤の発達による蜜線の多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ニシキギ科" },
    ],
    japaneseSpeciesCount: 159,
    review: { status: "ai_generated" },
  },

  // ── コンナラス科 ──────────────────────────────────────
  {
    id: "connaraceae",
    jaName: "コンナラス科",
    enName: "Connarus family",
    scientificName: "Connaraceae",
    order: "ニシキギ目",
    overview:
      "約12属180種からなる熱帯性の科で、日本では南西諸島にテリハゴウカン（Rourea minor）などが生育する。木本のつる植物または小高木が多く、複葉と特徴的な裂開する果実をもつ。",
    characteristics: [
      "木本のつる植物または低木・小高木",
      "葉は奇数羽状複葉",
      "花は5数性で小さく、芳香をもつものがある",
      "果実は革質の袋果（のう果）で熟すと裂け、橙赤色の仮種皮をもつ種子を露出する",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > コンナラス科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "コンナラス属（Connarus）",
      "ルウレア属（Rourea）",
    ],
    evolutionEvents: [
      "熱帯林における木本つる植物としての生活型の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コンナラス科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── クノニア科 ──────────────────────────────────────
  {
    id: "cunoniaceae",
    jaName: "クノニア科",
    enName: "Cunonia family",
    scientificName: "Cunoniaceae",
    order: "ニシキギ目",
    overview:
      "南半球の温帯〜熱帯に分布する約27属350種の科。南アフリカ・オーストラリア・南太平洋諸島に多く、日本では観賞植物として一部が栽培される。常緑高木が多く対生の複葉をもつ。",
    characteristics: [
      "葉は対生し、羽状複葉または単葉",
      "托葉が葉柄間に発達する（葉間托葉）",
      "花は小さく4〜5数性",
      "果実はさく果または液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > クノニア科",
    divergenceEra: "白亜紀後期〜古第三紀（ゴンドワナ分裂期）",
    representativeGenera: [
      "クノニア属（Cunonia）",
      "ウェインマンニア属（Weinmannia）",
      "カルポドエタス属（Carpodetus）",
    ],
    evolutionEvents: [
      "ゴンドワナ大陸分裂に伴う南半球各地域への分散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クノニア科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ホルトノキ科 ──────────────────────────────────────
  {
    id: "elaeocarpaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Elaeocarpus_reticulatus.jpg",
    jaName: "ホルトノキ科",
    enName: "Elaeocarpus family",
    scientificName: "Elaeocarpaceae",
    order: "ニシキギ目",
    overview:
      "ホルトノキ（Elaeocarpus sylvestris）やシャリンバイに似た常緑高木を含む科。約12属600種が知られ、旧世界の熱帯〜温帯に広く分布。花弁先端が流蘇状（フリンジ状）に裂けることが識別の目安。",
    characteristics: [
      "花弁の先端が細かく裂ける（流蘇状・フリンジ状）",
      "葉は互生し、秋に一部の葉が紅葉して落葉する（常緑樹でも）",
      "果実は核果または蒴果",
      "常緑高木が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > ホルトノキ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ホルトノキ属（Elaeocarpus）",
      "スロアネア属（Sloanea）",
      "アリスタンドラ属（Aristotelia）",
    ],
    evolutionEvents: [
      "流蘇状（フリンジ状）花弁という特殊な花形態の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホルトノキ科" },
    ],
    japaneseSpeciesCount: 28,
    review: { status: "ai_generated" },
  },

  // ── ヒルギ科 ──────────────────────────────────────
  {
    id: "rhizophoraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhizophora_mangle.jpg",
    jaName: "ヒルギ科",
    enName: "Mangrove family",
    scientificName: "Rhizophoraceae",
    order: "ニシキギ目",
    overview:
      "熱帯・亜熱帯の海岸マングローブ林を形成する代表的な科。日本では沖縄などにメヒルギ・ヤエヤマヒルギが生育する。胎生種子（果実が木についたまま発芽して胚軸が伸長する）という特殊な繁殖様式をもつ。",
    characteristics: [
      "胎生種子（果実が母樹についたまま種子が発芽・胚軸が伸びる）",
      "気根（支柱根または膝根）が発達する",
      "葉は対生で厚い革質",
      "塩類排出または塩分貯留による塩害適応",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > ヒルギ科",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    representativeGenera: [
      "ヒルギ属（Rhizophora）",
      "メヒルギ属（Kandelia）",
      "オヒルギ属（Bruguiera）",
    ],
    evolutionEvents: [
      "胎生種子という海岸適応の進化",
      "マングローブ生態系の形成・維持機能の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒルギ科" },
    ],
    japaneseSpeciesCount: 14,
    review: { status: "ai_generated" },
  },

  // ── コカノキ科 ──────────────────────────────────────
  {
    id: "erythroxylaceae",
    jaName: "コカノキ科",
    enName: "Coca family",
    scientificName: "Erythroxylaceae",
    order: "キントラノオ目",
    overview:
      "コカノキ（Erythroxylum coca）を含む約4属250種の科。南アメリカ熱帯が主な分布域。コカノキの葉にはコカインの前駆物質であるコカアルカロイドが含まれることで世界的に知られる。木本が多く小さな白い5弁花をもつ。",
    characteristics: [
      "木本（低木〜中高木）が多い",
      "葉は互生で托葉が発達する",
      "花は小さく5数性、花弁に付属体をもつ",
      "果実は核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > コカノキ科",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    representativeGenera: [
      "コカノキ属（Erythroxylum）",
    ],
    evolutionEvents: [
      "コカアルカロイドの生合成経路の進化（草食者への化学防御）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コカノキ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── ラフレシア科 ──────────────────────────────────────
  {
    id: "rafflesiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rafflesia_arnoldii.jpg",
    jaName: "ラフレシア科",
    enName: "Rafflesia family",
    scientificName: "Rafflesiaceae",
    order: "キントラノオ目",
    overview:
      "世界最大の花として知られるラフレシアを含む寄生植物の科。葉・茎・根をもたず、宿主植物（ブドウ科など）の組織内に菌糸状の組織として存在し、開花時だけ宿主の外へ花を出す。3属約40種が熱帯アジアに分布。",
    characteristics: [
      "葉・茎・根をもたない完全寄生植物",
      "宿主の組織内に糸状体として存在する",
      "花は非常に大型で腐敗臭を発し、ハエ類を花粉媒介者とする",
      "ラフレシア属では花径1m以上に達する種がある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > ラフレシア科",
    divergenceEra: "古第三紀（約4500万〜3500万年前）",
    representativeGenera: [
      "ラフレシア属（Rafflesia）",
      "サプリア属（Sapria）",
      "ミトラステモン属（Mitrastemon）",
    ],
    evolutionEvents: [
      "完全寄生への進化に伴う植物体の極端な退化（葉・茎・根の消失）",
      "腐敗臭による送粉者（ハエ類）への特殊化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ラフレシア科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── トウダイグサ科 ──────────────────────────────────────
  {
    id: "euphorbiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ricinus_communis_003.JPG",
    jaName: "トウダイグサ科",
    enName: "Spurge family",
    scientificName: "Euphorbiaceae",
    order: "キントラノオ目",
    overview:
      "トウダイグサ・ポインセチア・ゴムノキ・トウゴマなど極めて多様な植物を含む大科。約300属6500種が熱帯〜温帯に分布する。有毒な乳液（白い樹液）をもつものが多く、花序（杯状花序）が独特。",
    characteristics: [
      "多くの種が有毒の白色乳液（ラテックス）をもつ",
      "花は単性で花弁を欠くことが多い",
      "杯状花序（サイアシウム）という独特の花の集まり（Euphorbus属）",
      "果実は弾性のある蒴果で、熟すと種子を弾き飛ばす",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > トウダイグサ科",
    divergenceEra: "白亜紀後期〜古第三紀（約9000万〜8000万年前）",
    representativeGenera: [
      "トウダイグサ属（Euphorbia）",
      "トウゴマ属（Ricinus）",
      "パラゴムノキ属（Hevea）",
      "アカメガシワ属（Mallotus）",
    ],
    evolutionEvents: [
      "乳液（ラテックス）の独立的多様化による草食動物への防御",
      "杯状花序（サイアシウム）という偽花の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トウダイグサ科" },
    ],
    japaneseSpeciesCount: 438,
    review: { status: "ai_generated" },
  },

  // ── ミズハコベ科 ──────────────────────────────────────
  {
    id: "elatinaceae",
    jaName: "ミズハコベ科",
    enName: "Waterwort family",
    scientificName: "Elatinaceae",
    order: "キントラノオ目",
    overview:
      "ミズハコベ（Elatine triandra）など小型の湿地・水生植物を含む小科。約2属35種が世界の温帯〜熱帯の湿地・水際に分布し、日本でも水田・池沼に生育する。葉は対生で非常に小さく、花も極めて小さい。",
    characteristics: [
      "小型の湿生・水生草本",
      "葉は対生で単葉、非常に小さい",
      "花は2〜4数性で非常に小さく、花弁は白色〜淡紅色",
      "果実はさく果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > ミズハコベ科",
    divergenceEra: "古第三紀",
    representativeGenera: [
      "ミズハコベ属（Elatine）",
      "ベルギア属（Bergia）",
    ],
    evolutionEvents: [
      "湿地・水際環境への小型化による適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミズハコベ科" },
    ],
    japaneseSpeciesCount: 11,
    review: { status: "ai_generated" },
  },

  // ── マルピーギア科 ──────────────────────────────────────
  {
    id: "malpighiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Malpighia_glabra.jpg",
    jaName: "マルピーギア科",
    enName: "Barbados cherry family",
    scientificName: "Malpighiaceae",
    order: "キントラノオ目",
    overview:
      "約75属1300種の熱帯性科で、アセロラ（Malpighia emarginata）が日本でもビタミンC源として知られる。T字形・Y字形の腺毛（マルピーギア型毛）をもつことと、翼のある果実が特徴。主に新熱帯区に分布。",
    characteristics: [
      "葉の両面または裏面にT字形・Y字形の腺毛（マルピーギア型毛）をもつ",
      "花弁5枚のうち1枚が旗弁状に大きくなり、爪部が発達する",
      "果実は分果（翼果）で、風散布に適応するものが多い",
      "木本のつる植物が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > マルピーギア科",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    representativeGenera: [
      "マルピーギア属（Malpighia）",
      "バンニステリア属（Banisteriopsis）",
      "ヒプタゲ属（Hiptage）",
    ],
    evolutionEvents: [
      "翼果による風散布の多様な進化",
      "マルピーギア型毛（T字形腺毛）の特殊化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マルピーギア科" },
    ],
    japaneseSpeciesCount: 12,
    review: { status: "ai_generated" },
  },

  // ── トケイソウ科 ──────────────────────────────────────
  {
    id: "passifloraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Passiflora_caerulea.jpg",
    jaName: "トケイソウ科",
    enName: "Passionflower family",
    scientificName: "Passifloraceae",
    order: "キントラノオ目",
    overview:
      "トケイソウ（Passiflora caerulea）など時計の文字盤に似た複雑な花をもつ植物で知られる科。約27属900種が熱帯〜亜熱帯に分布し、日本でも観賞用に広く栽培される。つる性草本・木本が多く、巻きひげで絡まる。",
    characteristics: [
      "花の中心に「副花冠」と呼ばれる糸状〜板状の構造をもつ",
      "つる性草本〜木本で腋生の巻きひげをもつ",
      "葉は互生し、しばしば掌状に裂ける",
      "果実は液果（パッションフルーツなど食用）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > トケイソウ科",
    divergenceEra: "古第三紀（約6500万〜5500万年前）",
    representativeGenera: [
      "トケイソウ属（Passiflora）",
      "アデニア属（Adenia）",
    ],
    evolutionEvents: [
      "副花冠という特殊な花構造の進化（ハチドリ・蝶への適応）",
      "チョウ類（ヘリコニウス属）との共進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トケイソウ科" },
    ],
    japaneseSpeciesCount: 28,
    review: { status: "ai_generated" },
  },

  // ── アマ科 ──────────────────────────────────────
  {
    id: "linaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Linum_usitatissimum.jpg",
    jaName: "アマ科",
    enName: "Flax family",
    scientificName: "Linaceae",
    order: "キントラノオ目",
    overview:
      "アマ（Linum usitatissimum）を代表種とする科。繊維植物・油料植物として古くから人類に利用されてきた。約22属300種が温帯〜熱帯に広く分布し、日本にはマツバニンジン（Linum stelleroides）が自生する。",
    characteristics: [
      "葉は単葉で互生または対生、小さく線形のものが多い",
      "花は5数性で整形、花弁は青〜白または黄色",
      "果実はさく果で10個の種子",
      "茎の繊維が発達する（アマ繊維の原料）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > アマ科",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    representativeGenera: [
      "アマ属（Linum）",
      "ラインハルティア属（Reinwardtia）",
    ],
    evolutionEvents: [
      "繊維質茎の発達",
      "亜麻仁油（α-リノレン酸）の豊富な種子油の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アマ科" },
    ],
    japaneseSpeciesCount: 119,
    review: { status: "ai_generated" },
  },

  // ── オトギリソウ科 ──────────────────────────────────────
  {
    id: "clusiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hypericum_perforatum_flowers.jpg",
    jaName: "オトギリソウ科",
    enName: "St. John's wort family",
    scientificName: "Clusiaceae",
    order: "キントラノオ目",
    overview:
      "オトギリソウ（Hypericum erectum）など黄色い花をもつ植物を含む科（広義にはマンゴスチン科とも）。約9属590種が温帯〜熱帯に分布し、日本にも多くの種が自生する。葉に油腺・黒腺点をもつことが特徴。",
    characteristics: [
      "葉に油腺（透明腺点）または黒色腺点をもつ",
      "花は5数性で整形、雄しべが多数束になる",
      "花弁は黄色が多い",
      "果実はさく果または液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > オトギリソウ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "オトギリソウ属（Hypericum）",
      "マンゴスチン属（Garcinia）",
      "カルオフィルム属（Calophyllum）",
    ],
    evolutionEvents: [
      "ヒペリシン・ヒペルフォリンなどの二次代謝産物（薬効成分）の進化",
      "油腺（腺点）の多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/オトギリソウ科" },
    ],
    japaneseSpeciesCount: 171,
    review: { status: "ai_generated" },
  },

  // ── カワゴケソウ科 ──────────────────────────────────────
  {
    id: "podostemaceae",
    jaName: "カワゴケソウ科",
    enName: "River-weed family",
    scientificName: "Podostemaceae",
    order: "キントラノオ目",
    overview:
      "急流・滝の岩壁に着生する高度に特殊化した水生植物の科。植物体は扁平なコケ・藻類状で、根・茎・葉の区別が不明瞭。日本にはカワゴケソウ（Cladopus japonicus）など数種が生育する。約50属270種が熱帯の急流域に分布。",
    characteristics: [
      "岩壁に固着する扁平な「根状体」で増殖する",
      "根・茎・葉の区別が不明瞭な極端な退化形態",
      "急流・飛沫帯の岩着生に特化した水生植物",
      "乾季に一年生として枯れ、水位回復後に発芽する種も多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > カワゴケソウ科",
    divergenceEra: "古第三紀（約4000万〜3000万年前）",
    representativeGenera: [
      "カワゴケソウ属（Cladopus）",
      "ポドステモン属（Podostemum）",
    ],
    evolutionEvents: [
      "急流・岩着生への極端な体制変化（植物体の平板化・器官融合）",
      "被子植物中で最も異形な植物体形態の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カワゴケソウ科" },
    ],
    japaneseSpeciesCount: 17,
    review: { status: "ai_generated" },
  },

  // ── シクンシ科 ──────────────────────────────────────
  {
    id: "combretaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Terminalia_catappa.jpg",
    jaName: "シクンシ科",
    enName: "White mangrove family",
    scientificName: "Combretaceae",
    order: "フトモモ目",
    overview:
      "シクンシ（Quisqualis indica）・モモタマナ（Terminalia catappa）・シロバナシクンシなど熱帯・亜熱帯の木本を含む科。約20属500種が分布し、日本では沖縄・南西諸島に自生種がある。マングローブ構成種（シロバナシラタマノキなど）も含む。",
    characteristics: [
      "葉は単葉で互生、しばしば葉柄に腺体をもつ",
      "花は4〜5数性で花弁をもつものともたないものがある",
      "果実は翼のある核果または液果",
      "大型の落葉〜常緑高木が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > シクンシ科",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    representativeGenera: [
      "シクンシ属（Quisqualis）",
      "モモタマナ属（Terminalia）",
      "コンブレタム属（Combretum）",
    ],
    evolutionEvents: [
      "翼果による風散布の発達",
      "熱帯マングローブから内陸乾燥地への多様な生態適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シクンシ科" },
    ],
    japaneseSpeciesCount: 13,
    review: { status: "ai_generated" },
  },

  // ── ミソハギ科 ──────────────────────────────────────
  {
    id: "lythraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lythrum-salicaria-flowers.JPG",
    jaName: "ミソハギ科",
    enName: "Loosestrife family",
    scientificName: "Lythraceae",
    order: "フトモモ目",
    overview:
      "ミソハギ（Lythrum anceps）・サルスベリ（Lagerstroemia indica）・ザクロ（Punica granatum）などを含む多様な科。約32属650種が熱帯〜温帯に分布。APG IVではザクロ科・ミズキンバイ科などを含む広義に統合されている。",
    characteristics: [
      "花弁は萼筒（カリクスチューブ）の縁から出て、しわ・波打つことが多い",
      "茎は4稜〜6稜になることが多い",
      "葉は対生または輪生が多い",
      "果実はさく果または液果・漿果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > ミソハギ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "ミソハギ属（Lythrum）",
      "サルスベリ属（Lagerstroemia）",
      "ザクロ属（Punica）",
      "ヘンナ属（Lawsonia）",
    ],
    evolutionEvents: [
      "サルスベリなどでの長短二型雄しべの発達",
      "ザクロ科・ノボタン科などを包含した科の拡大（APG IV）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミソハギ科" },
    ],
    japaneseSpeciesCount: 57,
    review: { status: "ai_generated" },
  },

  // ── アカバナ科 ──────────────────────────────────────
  {
    id: "onagraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Epilobium_angustifolium.jpg",
    jaName: "アカバナ科",
    enName: "Evening primrose family",
    scientificName: "Onagraceae",
    order: "フトモモ目",
    overview:
      "アカバナ（Epilobium pyrricholophum）・マツヨイグサ（Oenothera biennis）・ミズタマソウなどを含む科。約22属650種が温帯〜熱帯に分布。柱頭が十字形に裂け、花粉粒が糸状の粘着物（ビスシン）でつながるのが特徴。",
    characteristics: [
      "花は4数性（花弁4・萼片4・雄しべ8）が基本",
      "柱頭がしばしば十字形（4裂）",
      "花粉がビスシン（粘着糸）でつながる",
      "果実はさく果または液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > アカバナ科",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    representativeGenera: [
      "アカバナ属（Epilobium）",
      "マツヨイグサ属（Oenothera）",
      "ミズタマソウ属（Circaea）",
    ],
    evolutionEvents: [
      "夜咲き花（マツヨイグサ属）によるスズメガ媒花への適応",
      "ビスシン（花粉粘着糸）の進化による効率的な花粉媒介",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アカバナ科" },
    ],
    japaneseSpeciesCount: 189,
    review: { status: "ai_generated" },
  },

  // ── フトモモ科 ──────────────────────────────────────
  {
    id: "myrtaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Eucalyptus_globulus.jpg",
    jaName: "フトモモ科",
    enName: "Myrtle family",
    scientificName: "Myrtaceae",
    order: "フトモモ目",
    overview:
      "ユーカリ・グアバ・フトモモ・フェイジョアなどを含む大科。約131属5500種以上が熱帯〜南半球の温帯に分布する。精油を含む腺点をもつ葉と、雄しべが多数集まった花が特徴。",
    characteristics: [
      "葉に精油を含む透明な腺点が散在する",
      "雄しべが多数（しばしば100本以上）で目立つ",
      "葉は対生で全縁、革質",
      "果実は液果・核果・さく果など多様",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > フトモモ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "ユーカリ属（Eucalyptus）",
      "グアバ属（Psidium）",
      "フトモモ属（Syzygium）",
      "フトモモモドキ属（Melaleuca）",
    ],
    evolutionEvents: [
      "ユーカリ属の乾燥地・山火事適応（再萌芽・耐火性）",
      "精油（テルペン類）の多様化による昆虫防御・抗菌",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フトモモ科" },
    ],
    japaneseSpeciesCount: 101,
    review: { status: "ai_generated" },
  },

  // ── シロタマモドキ科 ──────────────────────────────────────
  {
    id: "chrysobalanaceae",
    jaName: "シロタマモドキ科",
    enName: "Coco plum family",
    scientificName: "Chrysobalanaceae",
    order: "バラ目",
    overview:
      "約18属530種の熱帯性科で、ゾウの食物として知られるココプラム（Chrysobalanus icaco）などを含む。かつてはバラ科に含まれていたが、分子系統学によって独立した科として認識された。核果をもつ木本が多い。",
    characteristics: [
      "核果をもつ木本（高木〜低木）",
      "花は5数性でしばしば左右相称",
      "雄しべは多数で一側に偏って発達する（左右非対称雄蕊群）",
      "葉は単葉で互生、全縁",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ目 > シロタマモドキ科",
    divergenceEra: "古第三紀（約5500万〜5000万年前）",
    representativeGenera: [
      "ココプラム属（Chrysobalanus）",
      "パリナリ属（Parinari）",
      "リカニア属（Licania）",
    ],
    evolutionEvents: [
      "バラ科からの独立（分子系統学的再評価）",
      "熱帯雨林林冠木として優占する種の多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シロタマモドキ科" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── ジカペタラム科 ──────────────────────────────────────
  {
    id: "dichapetalaceae",
    jaName: "ジカペタラム科",
    enName: "Dichapetalum family",
    scientificName: "Dichapetalaceae",
    order: "キントラノオ目",
    overview:
      "約3属165種の熱帯性科で、アフリカ・アジア・アメリカの熱帯雨林に分布する。ジカペタラム（Dichapetalum）属の一部の種はモノフルオロ酢酸などの強力な毒を含み、家畜の中毒事故が知られる。木本のつる植物が多い。",
    characteristics: [
      "木本のつる植物または低木",
      "葉は互生で単葉",
      "花弁は先端が2裂する（二裂花弁、属名の由来）",
      "花序が葉柄または主脈に着生することがある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > ジカペタラム科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "ジカペタラム属（Dichapetalum）",
      "タポウラ属（Tapura）",
    ],
    evolutionEvents: [
      "フルオロ脂肪酸（モノフルオロ酢酸）という特殊な化学防御の進化",
      "花弁二裂という特殊な形態の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ジカペタラム科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── パンダ科 ──────────────────────────────────────
  {
    id: "pandaceae",
    jaName: "パンダ科",
    enName: "Panda family",
    scientificName: "Pandaceae",
    order: "キントラノオ目",
    overview:
      "約4属28種からなる熱帯アフリカ・アジア産の小科。かつてはトウダイグサ科またはスミレ科に近縁とされたが、現在はキントラノオ目に置かれている。高木または低木で、核果をもつ。",
    characteristics: [
      "高木または低木",
      "葉は互生で単葉",
      "花は単性で小さく5数性",
      "果実は核果で大型のものがある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > パンダ科",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    representativeGenera: [
      "パンダ属（Panda）",
      "ミクロデスミス属（Microdesmis）",
    ],
    evolutionEvents: [
      "キントラノオ目内での独立した進化的位置の確立（分子系統学的再評価）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/パンダ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── フサザクラ科 ──────────────────────────────────────
  {
    id: "eupteleaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Euptelea_pleiosperma.jpg",
    jaName: "フサザクラ科",
    enName: "Euptelea family",
    scientificName: "Eupteleaceae",
    order: "フサザクラ目",
    overview:
      "フサザクラ属のみからなる小さな科で、日本・中国・ヒマラヤに分布する。早春に葉が出る前に赤い雄しべが目立つ風媒花を咲かせる。被子植物の中でも系統的に孤立した位置にある真正双子葉類基部の一群。",
    characteristics: [
      "花弁・萼片を欠く（花被なし）",
      "多数の雄しべが房状に集まり、早春に咲く",
      "葉は互生で鋸歯があり先端がとがる",
      "果実は翼果で風散布",
      "落葉高木〜低木",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > フサザクラ目 > フサザクラ科",
    divergenceEra: "白亜紀前期〜中期（約1億1000万年前）",
    representativeGenera: [
      "フサザクラ属（Euptelea）",
    ],
    evolutionEvents: [
      "花弁・萼片を失った風媒花への退化的進化",
      "真正双子葉類の基部系統として早期に分岐",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フサザクラ科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── ケシ科 ──────────────────────────────────────────
  {
    id: "papaveraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chelidonium_majus_002.JPG",
    jaName: "ケシ科",
    enName: "Poppy family",
    scientificName: "Papaveraceae",
    order: "キンポウゲ目",
    overview:
      "ケシ・クサノオウ・エンゴサクなど約44属800種を含む科。乳液（アルカロイドを含む白色〜黄色の乳汁）を持つものが多い。APG IVではキンポウゲ目に置かれ、日本にはケシ・ヒナゲシ・エンゴサクなどが分布する。",
    characteristics: [
      "切ると乳液（ラテックス）が出るものが多い",
      "花弁は4〜6枚、しわになりやすい",
      "雄しべは多数",
      "果実は蒴果で多数の種子を含む",
      "モルヒネ・コデインなどアルカロイドを含む種がある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > ケシ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7500万年前）",
    representativeGenera: [
      "ケシ属（Papaver）",
      "エンゴサク属（Corydalis）",
      "クサノオウ属（Chelidonium）",
      "ヤマブキソウ属（Hylomecon）",
    ],
    evolutionEvents: [
      "アルカロイド（モルヒネ・ベルベリンなど）の生合成経路の進化",
      "ケシ亜科とキケマン亜科（花の左右対称化）への分化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ケシ科" },
    ],
    japaneseSpeciesCount: 177,
    review: { status: "ai_generated" },
  },

  // ── アケビ科 ──────────────────────────────────────────
  {
    id: "lardizabalaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Akebia_quinata.jpg",
    jaName: "アケビ科",
    enName: "Lardizabala family",
    scientificName: "Lardizabalaceae",
    order: "キンポウゲ目",
    overview:
      "アケビ・ムベ・ミツバアケビなど日本になじみ深い木本性つる植物を含む科。東アジアとチリに分布する不連続な分布パターンをもつ。雌雄異花で、甘い果肉をもつ液果を実らせる。",
    characteristics: [
      "木本性のつる植物が多い",
      "葉は掌状複葉または羽状複葉",
      "雌雄異花（同株または異株）",
      "花弁状の萼片3枚が目立つ",
      "果実は肉質で甘く、野生動物に食べられて種子散布",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > アケビ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "アケビ属（Akebia）",
      "ムベ属（Stauntonia）",
      "ゴヨウアケビ属（Decaisnea）",
    ],
    evolutionEvents: [
      "東アジア〜チリという不連続分布の成立（大陸移動・気候変動による隔離）",
      "肉質果実による動物散布の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アケビ科" },
    ],
    japaneseSpeciesCount: 16,
    review: { status: "ai_generated" },
  },

  // ── ツヅラフジ科 ──────────────────────────────────────
  {
    id: "menispermaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Menispermum_canadense.jpg",
    jaName: "ツヅラフジ科",
    enName: "Moonseed family",
    scientificName: "Menispermaceae",
    order: "キンポウゲ目",
    overview:
      "ツヅラフジ・オオツヅラフジなどを含む木本性つる植物が多い科。熱帯・亜熱帯を中心に約70属400種が知られる。アルカロイドを多く含み、クラーレ（矢毒）の原料としても知られる。",
    characteristics: [
      "木本性つる植物が主体",
      "葉は単葉で互生、盾状葉になることも",
      "花は小さく3数性",
      "雌雄異株",
      "核果で種子は特徴的な馬蹄形",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > ツヅラフジ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "ツヅラフジ属（Sinomenium）",
      "オオツヅラフジ属（Cocculus）",
      "アオツヅラフジ属（Stephania）",
    ],
    evolutionEvents: [
      "多様なアルカロイド（クラーレ成分・テトランドリンなど）の合成経路の進化",
      "熱帯を中心とした多様化と温帯への拡散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツヅラフジ科" },
    ],
    japaneseSpeciesCount: 40,
    review: { status: "ai_generated" },
  },

  // ── メギ科 ──────────────────────────────────────────
  {
    id: "berberidaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahonia_aquifolium_002.JPG",
    jaName: "メギ科",
    enName: "Barberry family",
    scientificName: "Berberidaceae",
    order: "キンポウゲ目",
    overview:
      "メギ・ナンテン・ヒイラギナンテン・イカリソウなどを含む約14属700種の科。北半球温帯に広く分布する。黄色いアルカロイド（ベルベリン）を多く含み、生薬としても利用される。",
    characteristics: [
      "花弁と萼片が3数性（各3〜6枚）",
      "雄しべは触ると葯が内側に動く（虫が触れると花粉を付ける仕組み）",
      "ベルベリンなどの黄色アルカロイドを含む",
      "葉に棘をもつ種がある（メギなど）",
      "果実は液果または蒴果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > メギ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "メギ属（Berberis）",
      "ナンテン属（Nandina）",
      "イカリソウ属（Epimedium）",
      "ヒイラギナンテン属（Mahonia）",
    ],
    evolutionEvents: [
      "雄しべの「バネ」機構による花粉付着の仕組みの進化",
      "ベルベリン合成経路の確立（抗菌・草食動物忌避）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/メギ科" },
    ],
    japaneseSpeciesCount: 97,
    review: { status: "ai_generated" },
  },

  // ── キンポウゲ科 ──────────────────────────────────────
  {
    id: "ranunculaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aconitum_napellus_008.JPG",
    jaName: "キンポウゲ科",
    enName: "Buttercup family",
    scientificName: "Ranunculaceae",
    order: "キンポウゲ目",
    overview:
      "キンポウゲ・アネモネ・クレマチス・トリカブト・オダマキなどを含む約60属2500種の大科。真正双子葉類の基部グループに属し、花の構造が多様で原始的な特徴を多く残す。",
    characteristics: [
      "花弁・萼片の数が不定（5枚基本だが変異が大きい）",
      "雄しべ・雌しべともに多数で螺旋状に配置",
      "アルカロイド（トリカブト毒・アネモニンなど）を含む種が多い",
      "多くは草本、まれに木本性つる（クレマチス）",
      "葉は多くが深裂または複葉",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > キンポウゲ科",
    divergenceEra: "白亜紀後期（約9000万〜8000万年前）",
    representativeGenera: [
      "キンポウゲ属（Ranunculus）",
      "トリカブト属（Aconitum）",
      "クレマチス属（Clematis）",
      "アネモネ属（Anemone）",
      "オダマキ属（Aquilegia）",
    ],
    evolutionEvents: [
      "花の構造の多様化（花弁の変形・蜜腺化など）",
      "強力なアルカロイドによる草食動物防御の確立",
      "オダマキ属での花距（蜜腺突起）の急速な多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キンポウゲ科" },
    ],
    japaneseSpeciesCount: 1079,
    review: { status: "ai_generated" },
  },

  // ── アワブキ科 ──────────────────────────────────────
  {
    id: "sabiaceae",
    jaName: "アワブキ科",
    enName: "Sabia family",
    scientificName: "Sabiaceae",
    order: "プロテア目",
    overview:
      "アワブキ・ミヤマハハソなど東アジア〜東南アジアに分布する木本植物の科。約4属約160種が知られる。APG IVではプロテア目（真正双子葉類の基部グループ）に置かれる系統的にユニークな科。",
    characteristics: [
      "木本（高木〜つる性低木）",
      "葉は単葉または奇数羽状複葉、互生",
      "花は小さく両性、5数性",
      "雄しべ5本のうち外側2本のみ完全、残り3本は仮雄しべ（退化）",
      "核果または翼果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > プロテア目 > アワブキ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "アワブキ属（Meliosma）",
      "サビア属（Sabia）",
    ],
    evolutionEvents: [
      "雄しべの退化（仮雄しべ化）による特殊化",
      "プロテア目内での東アジア固有の多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アワブキ科" },
    ],
    japaneseSpeciesCount: 21,
    review: { status: "ai_generated" },
  },

  // ── ヤマモガシ科 ──────────────────────────────────────
  {
    id: "proteaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Banksia_serrata.jpg",
    jaName: "ヤマモガシ科",
    enName: "Protea family",
    scientificName: "Proteaceae",
    order: "プロテア目",
    overview:
      "南半球（オーストラリア・南アフリカ・南米）を中心に約80属1600種が知られる大科。日本にはヤマモガシ属が九州南部・沖縄に自生する。ゴンドワナ大陸起源の古い科で、観賞用のプロテアやバンクシアが有名。",
    characteristics: [
      "花被片は4枚で、しばしば合着して管状になる",
      "雄しべは花被片に対生して4本",
      "痩せた土壌（リン欠乏環境）への適応が顕著",
      "プロテオイド根（クラスター根）で貧栄養土壌から養分を吸収",
      "木本が主体",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > プロテア目 > ヤマモガシ科",
    divergenceEra: "白亜紀前期〜中期（約1億1500万〜1億年前）",
    representativeGenera: [
      "ヤマモガシ属（Helicia）",
      "プロテア属（Protea）",
      "バンクシア属（Banksia）",
      "マカダミア属（Macadamia）",
    ],
    evolutionEvents: [
      "ゴンドワナ大陸の分裂による南半球各地への隔離分布の成立",
      "プロテオイド根による貧栄養土壌への適応進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤマモガシ科" },
    ],
    japaneseSpeciesCount: 11,
    review: { status: "ai_generated" },
  },

  // ── ヤマグルマ科 ──────────────────────────────────────
  {
    id: "trochodendraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Trochodendron_aralioides.jpg",
    jaName: "ヤマグルマ科",
    enName: "Trochodendron family",
    scientificName: "Trochodendraceae",
    order: "ヤマグルマ目",
    overview:
      "ヤマグルマ1種とテトラセントロン1種からなる小科。東アジアに分布する常緑・落葉の高木。被子植物の中で道管（導管）を欠き、仮道管で水分を輸送するという極めて原始的な特徴をもつ。",
    characteristics: [
      "道管（導管）を欠き、仮道管で水分輸送（被子植物では例外的）",
      "花は両性または雑性、花弁を欠く",
      "常緑または落葉の高木",
      "葉は単葉、枝先に輪生状に集まる",
      "果実は多数の心皮が集まった集合果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > ヤマグルマ目 > ヤマグルマ科",
    divergenceEra: "白亜紀前期（約1億2000万年前）",
    representativeGenera: [
      "ヤマグルマ属（Trochodendron）",
      "テトラセントロン属（Tetracentron）",
    ],
    evolutionEvents: [
      "被子植物で道管を欠く原始的木部の保持",
      "東アジアへの分布限定（ゴンドワナ起源から北半球への移動）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤマグルマ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── ツゲ科 ──────────────────────────────────────────
  {
    id: "buxaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Buxus_sempervirens_flowers.jpg",
    jaName: "ツゲ科",
    enName: "Box family",
    scientificName: "Buxaceae",
    order: "ツゲ目",
    overview:
      "ツゲ・フッキソウなどを含む小さな科。約6属120種が知られ、温帯〜熱帯に分布する。APG IVでは真正双子葉類の基部グループ（ツゲ目）に置かれ、コア真正双子葉類には含まれない。ツゲ材は緻密で高級細工物に利用される。",
    characteristics: [
      "常緑性の低木〜高木またはつる植物",
      "葉は革質で対生または互生",
      "花は単性、花弁を欠く",
      "雌雄同株が多い",
      "蒴果または核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > ツゲ目 > ツゲ科",
    divergenceEra: "白亜紀中期（約1億年前）",
    representativeGenera: [
      "ツゲ属（Buxus）",
      "フッキソウ属（Pachysandra）",
      "サルコッカ属（Sarcococca）",
    ],
    evolutionEvents: [
      "コア真正双子葉類と分岐する真正双子葉類基部での早期分岐",
      "革質葉による乾燥・日陰への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツゲ科" },
    ],
    japaneseSpeciesCount: 29,
    review: { status: "ai_generated" },
  },

  // ── グンネラ科 ──────────────────────────────────────
  {
    id: "gunneraceae",
    jaName: "グンネラ科",
    enName: "Gunnera family",
    scientificName: "Gunneraceae",
    order: "グンネラ目",
    overview:
      "グンネラ属1属約40種からなる単型科。南半球の温帯〜熱帯高地に分布する。葉が直径2mを超える巨大草本から小型のものまで形態が多様。茎内にシアノバクテリア（ネンジュモ属）を共生させ窒素固定を行う被子植物として知られる。",
    characteristics: [
      "葉は巨大になる種がある（直径2m超）",
      "茎・葉柄にシアノバクテリアが共生し窒素固定",
      "花は非常に小さく、穂状花序に多数つく",
      "根茎性の多年草が多い",
      "果実は小さな核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > グンネラ目 > グンネラ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    representativeGenera: [
      "グンネラ属（Gunnera）",
    ],
    evolutionEvents: [
      "シアノバクテリアとの共生による窒素固定（被子植物では唯一の例）",
      "葉の巨大化と矮小化の両方向への多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/グンネラ科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── ビワモドキ科 ──────────────────────────────────────
  {
    id: "dilleniaceae",
    jaName: "ビワモドキ科",
    enName: "Dillenia family",
    scientificName: "Dilleniaceae",
    order: "ビワモドキ目",
    overview:
      "熱帯〜亜熱帯に分布する約10属500種の科。日本にはビワモドキは自生しないが、観賞用に栽培される種がある。コア真正双子葉類の中で系統的な位置が長く議論されてきた。",
    characteristics: [
      "花弁は5枚、黄色または白色が多い",
      "雄しべは多数で束状になることがある",
      "葉は大型で主脈と側脈が平行に並ぶ",
      "萼片は宿存し果実を包む",
      "木本（高木〜低木）またはつる植物",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビワモドキ目 > ビワモドキ科",
    divergenceEra: "白亜紀後期（約8500万年前）",
    representativeGenera: [
      "ビワモドキ属（Dillenia）",
      "ヒベルティア属（Hibbertia）",
    ],
    evolutionEvents: [
      "コア真正双子葉類の基部グループとしての早期分岐",
      "熱帯アジア・オーストラリアへの分布拡大",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ビワモドキ科" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── ボタン科 ──────────────────────────────────────────
  {
    id: "paeoniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Paeonia_suffruticosa.jpg",
    jaName: "ボタン科",
    enName: "Peony family",
    scientificName: "Paeoniaceae",
    order: "ユキノシタ目",
    overview:
      "ボタン属1属約30種からなる単型科。ユーラシアと北西アメリカの温帯に分布し、日本にはヤマシャクヤク・ベニバナヤマシャクヤク・シャクヤクが自生する。かつてキンポウゲ科に含まれていたが、現在は独立した科として扱われる。",
    characteristics: [
      "花弁は5〜多数枚、大型で美しい",
      "雄しべは多数",
      "心皮は2〜5個で、肉質の花盤に包まれる",
      "種子は大型で仮種皮をもつ",
      "多年草または落葉低木",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > ボタン科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "ボタン属（Paeonia）",
    ],
    evolutionEvents: [
      "キンポウゲ科から独立した単型科としての系統的孤立",
      "花盤（肉質の蜜腺組織）の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ボタン科" },
    ],
    japaneseSpeciesCount: 17,
    review: { status: "ai_generated" },
  },

  // ── マンサク科 ──────────────────────────────────────
  {
    id: "hamamelidaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hamamelis_japonica.jpg",
    jaName: "マンサク科",
    enName: "Witch-hazel family",
    scientificName: "Hamamelidaceae",
    order: "ユキノシタ目",
    overview:
      "マンサク・トサミズキ・イスノキなど約30属100種を含む科。北半球温帯〜亜熱帯に分布する木本植物。早春に葉の出る前に黄色いひも状の花弁をもつ特徴的な花を咲かせるマンサクが日本の代表種。",
    characteristics: [
      "花弁は細長い線形（ひも状）が多い",
      "葉は互生で非対称になることがある",
      "木本（高木〜低木）",
      "果実は木質化した蒴果で、熟すと弾けて種子を飛ばす",
      "星状毛や盾状毛を持つことが多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > マンサク科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "マンサク属（Hamamelis）",
      "ロロペタルム属（Loropetalum）",
      "コリロプシス属（Corylopsis）",
      "フウ属（Liquidambar）",
    ],
    evolutionEvents: [
      "早春開花という極端な季節適応の進化",
      "木質蒴果による種子の弾性散布機構の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マンサク科" },
    ],
    japaneseSpeciesCount: 48,
    review: { status: "ai_generated" },
  },

  // ── カツラ科 ──────────────────────────────────────────
  {
    id: "cercidiphyllaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cercidiphyllum_japonicum.jpg",
    jaName: "カツラ科",
    enName: "Katsura-tree family",
    scientificName: "Cercidiphyllaceae",
    order: "ユキノシタ目",
    overview:
      "カツラ1属2種（カツラとヒロハカツラ）のみからなる単型科。日本と中国に分布する落葉高木。秋の落ち葉が甘い香り（マルトール）を放つことで有名。白亜紀に北半球に広く分布していた古い系統。",
    characteristics: [
      "葉はハート形（心形）で対生",
      "落葉時に焦がした砂糖のような甘い香り（マルトール）",
      "花は単性で花弁を欠く（風媒花）",
      "樹皮は縦に裂けて繊維状",
      "落葉高木で大木になる",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > カツラ科",
    divergenceEra: "白亜紀前期〜中期（約1億年前）",
    representativeGenera: [
      "カツラ属（Cercidiphyllum）",
    ],
    evolutionEvents: [
      "第三紀の北半球広域分布から東アジア固有への後退",
      "花弁を失った風媒花への進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カツラ科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── ユズリハ科 ──────────────────────────────────────
  {
    id: "daphniphyllaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Daphniphyllum_macropodum.jpg",
    jaName: "ユズリハ科",
    enName: "Daphniphyllum family",
    scientificName: "Daphniphyllaceae",
    order: "ユキノシタ目",
    overview:
      "ユズリハ属1属約30種からなる単型科。東アジア〜東南アジアに分布する常緑高木または低木。日本では正月飾りに使われるユズリハが有名。独特のユズリハアルカロイドを含み、系統的に孤立した位置を占める。",
    characteristics: [
      "常緑性の高木または低木",
      "葉は大型で革質、互生",
      "花は小さく花弁を欠く、単性花",
      "雌雄異株",
      "核果（青黒色に熟す）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > ユズリハ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "ユズリハ属（Daphniphyllum）",
    ],
    evolutionEvents: [
      "ユズリハアルカロイドという独自の防御化合物の進化",
      "東アジア〜東南アジアへの分布特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ユズリハ科" },
    ],
    japaneseSpeciesCount: 27,
    review: { status: "ai_generated" },
  },

  // ── スグリ科 ──────────────────────────────────────────
  {
    id: "grossulariaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ribes_rubrum.jpg",
    jaName: "スグリ科",
    enName: "Gooseberry family",
    scientificName: "Grossulariaceae",
    order: "ユキノシタ目",
    overview:
      "スグリ属1属約150種からなる科（APG IVによる）。北半球の温帯〜亜寒帯に広く分布し、日本にはスグリ・サワスグリ・マルスグリなどが自生する。果実は食用になるものが多く、ジャムや果実酒に利用される。",
    characteristics: [
      "低木で、枝に棘をもつ種がある",
      "葉は手状に裂ける",
      "花は小さく5数性、筒状の萼筒が発達",
      "液果（ベリー）を実らせ食用になる",
      "雌雄同株",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > スグリ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "スグリ属（Ribes）",
    ],
    evolutionEvents: [
      "ユキノシタ科から独立した単型属科としての分化",
      "北半球寒冷環境への適応と多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スグリ科" },
    ],
    japaneseSpeciesCount: 46,
    review: { status: "ai_generated" },
  },

  // ── ユキノシタ科 ──────────────────────────────────────
  {
    id: "saxifragaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Saxifraga_granulata.jpg",
    jaName: "ユキノシタ科",
    enName: "Saxifrage family",
    scientificName: "Saxifragaceae",
    order: "ユキノシタ目",
    overview:
      "ユキノシタ・チダケサシ・ネコノメソウ・ウメバチソウなど約33属640種を含む科。北半球の温帯・山岳地帯に多く分布する。岩場や渓流沿いに生育するものが多く、「石を砕く」という属名の由来通り岩上に生える種もある。",
    characteristics: [
      "草本が主体（まれに低木）",
      "花は5数性で放射相称が基本",
      "萼筒が発達し、子房は下位〜半下位になることが多い",
      "葉は単葉で多くが根生葉または互生",
      "湿った岩場・渓流沿いを好む種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > ユキノシタ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "ユキノシタ属（Saxifraga）",
      "ネコノメソウ属（Chrysosplenium）",
      "チダケサシ属（Astilbe）",
      "ウメバチソウ属（Parnassia）",
    ],
    evolutionEvents: [
      "岩場・高山環境への適応（葉・根系の変化）",
      "ユキノシタ目内での大規模な科の再編（APG改訂）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ユキノシタ科" },
    ],
    japaneseSpeciesCount: 634,
    review: { status: "ai_generated" },
  },

  // ── ベンケイソウ科 ──────────────────────────────────────
  {
    id: "crassulaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sempervivum_tectorum.jpg",
    jaName: "ベンケイソウ科",
    enName: "Stonecrop family",
    scientificName: "Crassulaceae",
    order: "ユキノシタ目",
    overview:
      "ベンケイソウ・マンネングサ・カランコエ・エチェベリアなど約34属1400種を含む大科。多肉植物として知られ、乾燥地に適応したCAM光合成を行う種が多い。熱帯〜温帯の岩場・乾燥地に広く分布する。",
    characteristics: [
      "多肉質の葉・茎に水分を貯蔵",
      "CAM光合成（夜間にCO₂を取り込み昼間固定）による乾燥適応",
      "花は4〜5数性でしばしば星形",
      "雄しべは花弁と同数または2倍",
      "果実は袋果（のう果）が多数集まる集合果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > ベンケイソウ科",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    representativeGenera: [
      "マンネングサ属（Sedum）",
      "ベンケイソウ属（Hylotelephium）",
      "カランコエ属（Kalanchoe）",
      "エチェベリア属（Echeveria）",
    ],
    evolutionEvents: [
      "CAM光合成の独立的進化（複数系統で）",
      "多肉化による乾燥・岩場環境への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ベンケイソウ科" },
    ],
    japaneseSpeciesCount: 269,
    review: { status: "ai_generated" },
  },

  // ── アリノトウグサ科 ──────────────────────────────────────
  {
    id: "haloragaceae",
    jaName: "アリノトウグサ科",
    enName: "Water-milfoil family",
    scientificName: "Haloragaceae",
    order: "ユキノシタ目",
    overview:
      "アリノトウグサ・フサモ（ミリオフィラム）など約8属145種を含む科。陸生〜水生の草本で、日本にはアリノトウグサ・フサモなどが分布する。水生種では葉が羽状に細かく分裂し、水の抵抗を減らすことに適応している。",
    characteristics: [
      "草本（陸生〜水生）",
      "水生種では葉が羽状細裂して水中に適応",
      "花は小さく風媒または水媒",
      "花弁は4枚または退化して欠ける",
      "果実は堅果または核果状",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > アリノトウグサ科",
    divergenceEra: "白亜紀後期〜古第三紀",
    representativeGenera: [
      "フサモ属（Myriophyllum）",
      "アリノトウグサ属（Haloragis）",
    ],
    evolutionEvents: [
      "陸生から水生環境への二次的適応（葉の羽状細裂化）",
      "ゴンドワナ起源の南半球分布から北半球への拡散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アリノトウグサ科" },
    ],
    japaneseSpeciesCount: 24,
    review: { status: "ai_generated" },
  },

  // ── ブドウ科 ──────────────────────────────────────────
  {
    id: "vitaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Vitis_vinifera_003.JPG",
    jaName: "ブドウ科",
    enName: "Grape family",
    scientificName: "Vitaceae",
    order: "ブドウ目",
    overview:
      "ブドウ・ヤブガラシ・ツタ・ノブドウなど約14属910種を含む科。つる植物が多く、巻きひげで支持物に絡みつく。ブドウは世界で最も重要な果樹のひとつで、ワイン醸造にも用いられる。コア真正双子葉類のバラ類に属する。",
    characteristics: [
      "木本性つる植物が多い",
      "巻きひげ（葉の変形）で絡みつく",
      "葉は掌状に裂けるか複葉",
      "花は小さく5数性、しばしば花弁が帽子状に落下",
      "液果（ベリー）で果皮は薄く果肉が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > ブドウ目 > ブドウ科",
    divergenceEra: "白亜紀後期（約9000万〜8500万年前）",
    representativeGenera: [
      "ブドウ属（Vitis）",
      "ツタ属（Parthenocissus）",
      "ヤブガラシ属（Cayratia）",
      "ノブドウ属（Ampelopsis）",
    ],
    evolutionEvents: [
      "巻きひげによるつる性生活様式の獲得",
      "バラ類の中での早期分岐系統としての系統的位置の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ブドウ科" },
    ],
    japaneseSpeciesCount: 133,
    review: { status: "ai_generated" },
  },

  // ── ハマビシ科 ──────────────────────────────────────
  {
    id: "zygophyllaceae",
    jaName: "ハマビシ科",
    enName: "Caltrop family",
    scientificName: "Zygophyllaceae",
    order: "キントラノオ目",
    overview:
      "ハマビシ・ジンチョウゲ近縁のグアヤコンなど約22属285種を含む科。乾燥地帯・塩性地に適応した植物が多く、砂漠〜海岸砂地に分布する。日本にはハマビシが海岸砂地に自生し、鋭い棘を持つ果実が特徴的。",
    characteristics: [
      "乾燥地・塩性土壌への適応が顕著",
      "葉は偶数羽状複葉で多くは対生",
      "花は5数性で放射相称",
      "果実に棘・翼をもつものが多い",
      "多くは低木または草本",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > キントラノオ目 > ハマビシ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "ハマビシ属（Tribulus）",
      "クレオソートブッシュ属（Larrea）",
      "グアヤコン属（Guaiacum）",
    ],
    evolutionEvents: [
      "乾燥地・塩性土壌への耐性機構の進化",
      "棘のある果実による動物付着散布の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハマビシ科" },
    ],
    japaneseSpeciesCount: 6,
    review: { status: "ai_generated" },
  },

  // ── スリアナ科 ──────────────────────────────────────
  {
    id: "surianaceae",
    jaName: "スリアナ科",
    enName: "Suriana family",
    scientificName: "Surianaceae",
    order: "マメ目",
    overview:
      "スリアナ属を中心に約5属8種からなる小科。熱帯の海岸砂地・岩礁に適応した低木または高木。APG IVではマメ目に置かれる。日本では小笠原諸島などの海岸にスリアナが生育する。",
    characteristics: [
      "海岸砂地・岩礁環境への強い適応",
      "葉は革質で多肉になることがある",
      "花は5数性で放射相称",
      "果実は複数の分果からなる",
      "低木〜小高木",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > マメ目 > スリアナ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "スリアナ属（Suriana）",
      "ケイサニア属（Cadellia）",
    ],
    evolutionEvents: [
      "マメ目内での系統的孤立（根粒菌共生を欠く）",
      "海岸環境への特化による分布限定",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スリアナ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ヒメハギ科 ──────────────────────────────────────
  {
    id: "polygalaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Polygala_vulgaris.jpg",
    jaName: "ヒメハギ科",
    enName: "Milkwort family",
    scientificName: "Polygalaceae",
    order: "キントラノオ目",
    overview:
      "ヒメハギ・セネガなど約21属1000種を含む科。熱帯〜温帯に広く分布し、日本にはヒメハギが草地に自生する。花がマメ科の蝶形花に似るが系統的には全く異なる（収斂進化）。",
    characteristics: [
      "花はマメ科に似た蝶形（収斂進化）だが構造は異なる",
      "萼片5枚のうち内側2枚が花弁状で大きく目立つ",
      "花弁は3枚（下の1枚が竜骨弁状）",
      "草本〜低木〜高木まで形態が多様",
      "蒴果または翼果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > キントラノオ目 > ヒメハギ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "ヒメハギ属（Polygala）",
      "セネガ属（Polygala）",
      "ムレムレ属（Monnina）",
    ],
    evolutionEvents: [
      "マメ科型の蝶形花への収斂進化（花粉媒介者誘引）",
      "熱帯を中心とする広域な多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒメハギ科" },
    ],
    japaneseSpeciesCount: 35,
    review: { status: "ai_generated" },
  },

  // ── グミ科 ──────────────────────────────────────────
  {
    id: "elaeagnaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Elaeagnus_umbellata.jpg",
    jaName: "グミ科",
    enName: "Oleaster family",
    scientificName: "Elaeagnaceae",
    order: "バラ目",
    overview:
      "グミ・ナワシログミ・ヤナギグミなど約3属90種を含む科。北半球の温帯〜亜熱帯に分布する。根に放線菌（フランキア）を共生させ窒素固定を行う。葉や果実に銀白色〜褐色の鱗状毛が密生するのが特徴。",
    characteristics: [
      "葉・果実に銀白色または褐色の鱗状毛が密生",
      "根に放線菌フランキアが共生し窒素固定",
      "花は筒状で4裂、花弁を欠く（萼が花弁状）",
      "果実は偽果（萼筒が肉質化して果肉を形成）",
      "低木〜高木、まれにつる性",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > グミ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "グミ属（Elaeagnus）",
      "ハリモモ属（Hippophae）",
      "バッファローベリー属（Shepherdia）",
    ],
    evolutionEvents: [
      "放線菌フランキアとの共生による窒素固定の獲得",
      "鱗状毛による乾燥・塩性環境への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/グミ科" },
    ],
    japaneseSpeciesCount: 83,
    review: { status: "ai_generated" },
  },

  // ── クロウメモドキ科 ──────────────────────────────────────
  {
    id: "rhamnaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhamnus_cathartica.jpg",
    jaName: "クロウメモドキ科",
    enName: "Buckthorn family",
    scientificName: "Rhamnaceae",
    order: "バラ目",
    overview:
      "クロウメモドキ・クマヤナギ・ナツメ・ケンポナシなど約52属900種を含む科。世界の熱帯〜温帯に広く分布する。日本には10属前後が自生し、秋に実るケンポナシの甘い果軸は食用になる。",
    characteristics: [
      "木本（高木・低木・つる木）が主体",
      "花は小さく5数性、花弁は小さく凹み雄しべを包む",
      "棘をもつ種が多い",
      "核果・翼果・蒴果など果実の形態は多様",
      "葉は互生で3主脈が目立つことが多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > クロウメモドキ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "クロウメモドキ属（Rhamnus）",
      "ケンポナシ属（Hovenia）",
      "クマヤナギ属（Berchemia）",
      "ナツメ属（Ziziphus）",
    ],
    evolutionEvents: [
      "熱帯〜温帯への広域分布と多様な果実型の進化",
      "一部系統でのフランキア共生による窒素固定の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クロウメモドキ科" },
    ],
    japaneseSpeciesCount: 108,
    review: { status: "ai_generated" },
  },

  // ── アサ科 ──────────────────────────────────────────
  {
    id: "cannabaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cannabis_sativa_leaf.jpg",
    jaName: "アサ科",
    enName: "Hemp family",
    scientificName: "Cannabaceae",
    order: "バラ目",
    overview:
      "アサ・クワクサ・エノキ・ムクノキなど約11属170種を含む科。APG IVではニレ科から分離されたグループが統合されている。日本にはエノキ・ムクノキなどの落葉高木から繊維作物のアサまで多様な植物が含まれる。",
    characteristics: [
      "草本〜高木まで形態が多様",
      "葉は互生で鋸歯があり、基部が非対称になることが多い",
      "花は小さく単性、花弁を欠く",
      "雌雄異株または同株",
      "核果または痩果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > アサ科",
    divergenceEra: "古第三紀（約5500万〜5000万年前）",
    representativeGenera: [
      "アサ属（Cannabis）",
      "カラハナソウ属（Humulus）",
      "エノキ属（Celtis）",
      "ムクノキ属（Aphananthe）",
    ],
    evolutionEvents: [
      "ニレ科・クワ科周辺からのAPG IVによる科の再編・統合",
      "テトラヒドロカンナビノール（THC）合成経路の進化（アサ属）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アサ科" },
    ],
    japaneseSpeciesCount: 9,
    review: { status: "ai_generated" },
  },

  // ── クワ科 ──────────────────────────────────────────
  {
    id: "moraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Morus-nigra.JPG",
    jaName: "クワ科",
    enName: "Mulberry family",
    scientificName: "Moraceae",
    order: "バラ目",
    overview:
      "クワ・イチジク・パンノキ・コウゾ・カジノキなど約38属1100種を含む科。熱帯〜亜熱帯を中心に分布する。イチジク属はイチジクコバチとの密接な共進化で知られ、乳液（ラテックス）を分泌するものが多い。",
    characteristics: [
      "切ると乳液（ラテックス）を分泌する種が多い",
      "花は単性で小さく、しばしば肉質の花序托に埋まる（イチジクの隠頭花序）",
      "果実は偽果（花序全体が果実状になる）が多い",
      "葉は互生で鋸歯をもつ",
      "木本（高木〜低木）が主体",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > クワ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "クワ属（Morus）",
      "イチジク属（Ficus）",
      "パンノキ属（Artocarpus）",
      "コウゾ属（Broussonetia）",
    ],
    evolutionEvents: [
      "イチジク属とイチジクコバチの密接な共進化（種ごとの1対1の送粉関係）",
      "隠頭花序（中空の花序托内に花を持つ）という特殊化した花序の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クワ科" },
    ],
    japaneseSpeciesCount: 160,
    review: { status: "ai_generated" },
  },

  // ── イラクサ科 ──────────────────────────────────────
  {
    id: "urticaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Urtica_dioica_001.JPG",
    jaName: "イラクサ科",
    enName: "Nettle family",
    scientificName: "Urticaceae",
    order: "バラ目",
    overview:
      "イラクサ・カラムシ・ヤブマオ・コアカソ・ミヤマイラクサなど約54属2600種を含む科。世界中に分布し、多くの種が刺毛（蟻酸を含む）を持つ。カラムシ（ラミー）は繊維作物として古くから利用され、日本の伝統的な布地の原料となる。",
    characteristics: [
      "刺毛（蟻酸・ヒスタミンを含む中空の毛）を持つ種が多い",
      "花は単性で非常に小さく、花弁を欠く",
      "風媒花で花粉を弾き飛ばす仕組みをもつ種がある",
      "葉は対生または互生、鋸歯あり",
      "草本または低木が主体",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > イラクサ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "イラクサ属（Urtica）",
      "カラムシ属（Boehmeria）",
      "コアカソ属（Oreocnide）",
      "ミズ属（Pilea）",
    ],
    evolutionEvents: [
      "刺毛（毒針毛）による草食動物防御機構の進化",
      "花粉の弾発散布機構の進化（風媒花への適応）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イラクサ科" },
    ],
    japaneseSpeciesCount: 306,
    review: { status: "ai_generated" },
  },

  // ── ナンキョクブナ科 ──────────────────────────────────────
  {
    id: "nothofagaceae",
    jaName: "ナンキョクブナ科",
    enName: "Southern beech family",
    scientificName: "Nothofagaceae",
    order: "ブナ目",
    overview:
      "ナンキョクブナ属1属約43種からなる単型科。南アメリカ（チリ・アルゼンチン）・オーストラリア・ニュージーランド・ニューカレドニア・ニューギニアに分布する。かつてブナ科に含まれていたが、分子系統解析でブナ科と早期に分岐した別系統であることが判明し独立科となった。日本には自生しない。",
    characteristics: [
      "落葉または常緑の高木",
      "葉は小型〜中型で鋸歯があり互生",
      "花は単性、雌雄同株",
      "果実は3裂するいがに包まれたナッツ",
      "南半球の山岳〜亜寒帯林を形成する",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > ブナ目 > ナンキョクブナ科",
    divergenceEra: "白亜紀後期（約8000万〜7000万年前）",
    representativeGenera: [
      "ナンキョクブナ属（Nothofagus）",
    ],
    evolutionEvents: [
      "ゴンドワナ大陸の分裂による南半球各大陸への隔離分布の成立",
      "ブナ科から独立した単型科としての系統的孤立の確認（分子系統学）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ナンキョクブナ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── シダ植物 (Polypodiopsida) ──────────────────────────────
  // ── ヒカゲノカズラ科 ──────────────────────────────────────
  {
    id: "lycopodiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lycopodium_clavatum_01.JPG",
    jaName: "ヒカゲノカズラ科",
    enName: "Clubmoss family",
    scientificName: "Lycopodiaceae",
    order: "ヒカゲノカズラ目",
    overview:
      "石炭紀に大繁栄した小葉類（ヒカゲノカズラ綱）の現生科。胞子体は匍匐または直立し、小さな鱗片状の葉（微葉）が螺旋状または対生につく。胞子嚢は葉腋または胞子葉穂（ストロビルス）に形成され、同形胞子性である。",
    characteristics: [
      "維管束をもつが微葉（小葉）からなる",
      "同形胞子性（胞子は1種類）",
      "胞子嚢は葉腋または頂端の胞子葉穂に集まる",
      "前葉体（配偶体）は地中性で菌根共生",
      "茎は二叉分岐する",
    ],
    phylogeneticPosition: "維管束植物 > ヒカゲノカズラ植物門 > ヒカゲノカズラ綱 > ヒカゲノカズラ目 > ヒカゲノカズラ科",
    divergenceEra: "デボン紀〜石炭紀（約4億年前〜）",
    representativeGenera: [
      "ヒカゲノカズラ属（Lycopodium）",
      "トウゲシバ属（Huperzia）",
      "ミズスギ属（Lycopodiella）",
    ],
    evolutionEvents: [
      "維管束（木質部・師部）の獲得による陸上進出の確立",
      "石炭紀のリンボク類として樹高30m超の樹木に進化（現生種は草本のみ）",
      "ペルム紀末の大量絶滅後に小型草本として生き残り",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒカゲノカズラ科" },
    ],
    japaneseSpeciesCount: 134,
    review: { status: "ai_generated" },
  },

  // ── イワヒバ科 ──────────────────────────────────────────
  {
    id: "selaginellaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Selaginella_martensii_fg01.JPG",
    jaName: "イワヒバ科",
    enName: "Spikemoss family",
    scientificName: "Selaginellaceae",
    order: "イワヒバ目",
    overview:
      "小葉類（ヒカゲノカズラ綱）に属し、異形胞子性を獲得した唯一の現生ヒカゲノカズラ類。約750種が熱帯を中心に分布し、日本にも数種が生育する。乾燥に強い種もあり、「復活植物」として知られるものもある。",
    characteristics: [
      "異形胞子性（大胞子と小胞子の2種類）",
      "葉は4列に並ぶ（背腹性）",
      "茎の内部にリグリュール（小舌）をもつ",
      "大胞子嚢と小胞子嚢がストロビルス内に共存",
    ],
    phylogeneticPosition: "維管束植物 > ヒカゲノカズラ植物門 > ヒカゲノカズラ綱 > イワヒバ目 > イワヒバ科",
    divergenceEra: "石炭紀（約3億5000万年前〜）",
    representativeGenera: ["イワヒバ属（Selaginella）"],
    evolutionEvents: [
      "異形胞子性の獲得（大胞子・小胞子の分化）",
      "種子植物の祖先的形質に類似した大胞子の保護機構の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イワヒバ科" },
    ],
    japaneseSpeciesCount: 44,
    review: { status: "ai_generated" },
  },

  // ── ミズニラ科 ──────────────────────────────────────────
  {
    id: "isoetaceae",
    jaName: "ミズニラ科",
    enName: "Quillwort family",
    scientificName: "Isoetaceae",
    order: "ミズニラ目",
    overview:
      "水生または湿地性の小型草本からなる科で、現生種はIsoetes属1属約200種のみ。外見は一見ニラに似た束状の葉をもち、球茎状の茎が特徴。石炭紀の巨大樹木フウインボク（Sigillaria）に近縁で、「生きた化石」ともいわれる。",
    characteristics: [
      "異形胞子性（大胞子と小胞子）",
      "葉の基部に胞子嚢をもつ",
      "茎は短縮した球茎状",
      "葉内に気室（ラクナ）が発達",
    ],
    phylogeneticPosition: "維管束植物 > ヒカゲノカズラ植物門 > ヒカゲノカズラ綱 > ミズニラ目 > ミズニラ科",
    divergenceEra: "三畳紀（約2億3000万年前〜）",
    representativeGenera: ["ミズニラ属（Isoetes）"],
    evolutionEvents: [
      "石炭紀巨大樹木（フウインボク類）からの矮小化・草本化",
      "水生適応（気室の発達・CAM光合成の獲得）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミズニラ科" },
    ],
    japaneseSpeciesCount: 10,
    review: { status: "ai_generated" },
  },

  // ── マツバラン科 ──────────────────────────────────────────
  {
    id: "psilotaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Psilotum_nudum.jpg",
    jaName: "マツバラン科",
    enName: "Whisk fern family",
    scientificName: "Psilotaceae",
    order: "マツバラン目",
    overview:
      "真葉をもたない（または極めて退化した）シダ植物で、茎が光合成を行う独特のグループ。Psilotum（マツバラン属）とTmesipteris（ヒレワラビ属）の2属のみからなる。分子系統ではハナヤスリ科に近縁であることが明らかになった。",
    characteristics: [
      "真葉をもたない（葉は鱗片状または退化）",
      "茎は二叉分岐し、緑色で光合成を行う",
      "胞子嚢は2〜3室に合着した合生胞子嚢（シナンジウム）",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ハナヤスリ綱 > マツバラン目 > マツバラン科",
    divergenceEra: "デボン紀（約3億8000万年前〜）",
    representativeGenera: [
      "マツバラン属（Psilotum）",
      "ヒレワラビ属（Tmesipteris）",
    ],
    evolutionEvents: [
      "真葉の喪失または未獲得（葉の退化）",
      "茎による光合成への特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マツバラン科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── ハナヤスリ科 ──────────────────────────────────────────
  {
    id: "ophioglossaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ophioglossum_vulgatum.jpg",
    jaName: "ハナヤスリ科",
    enName: "Adder's-tongue family",
    scientificName: "Ophioglossaceae",
    order: "ハナヤスリ目",
    overview:
      "シダ植物の中でも特に原始的な系統の1つ。葉は栄養葉と胞子葉が合一した「共通柄」から分化する独特の構造をもつ。ハナヤスリ属・ナツノハナワラビ属などを含み、日本には複数の種が自生する。",
    characteristics: [
      "栄養葉と胞子葉が1枚の葉から分化する（共通柄）",
      "胞子嚢は壁が厚く（厚壁性）、環帯をもたない",
      "前葉体は地中性で菌根共生",
      "染色体数が非常に多い種がある（世界最多級）",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ハナヤスリ綱 > ハナヤスリ目 > ハナヤスリ科",
    divergenceEra: "デボン紀〜石炭紀（約3億6000万年前〜）",
    representativeGenera: [
      "ハナヤスリ属（Ophioglossum）",
      "ナツノハナワラビ属（Botrychium）",
    ],
    evolutionEvents: [
      "厚壁性胞子嚢の維持（原始的特徴）",
      "超多倍体化（一部の種で染色体数2n=1440に達する）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハナヤスリ科" },
    ],
    japaneseSpeciesCount: 81,
    review: { status: "ai_generated" },
  },

  // ── リュウビンタイ科 ──────────────────────────────────────
  {
    id: "marattiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Marattia_salicina.jpg",
    jaName: "リュウビンタイ科",
    enName: "Giant fern family",
    scientificName: "Marattiaceae",
    order: "リュウビンタイ目",
    overview:
      "石炭紀に繁栄した古代的なシダ植物のグループで、現生の真葉性シダ（大葉類）の中では最も原始的な系統の1つ。大型の葉（羽状複葉）と塊状の根茎が特徴。熱帯・亜熱帯に分布し、日本ではリュウビンタイが九州南部・沖縄に生育する。",
    characteristics: [
      "大型の羽状複葉（葉柄基部に大きな耳状突起をもつ）",
      "胞子嚢は複数合着してシナンジウムを形成",
      "厚壁性胞子嚢で環帯を欠く",
      "根茎は短く塊状で、デンプンを蓄積",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > マラッチア綱 > リュウビンタイ目 > リュウビンタイ科",
    divergenceEra: "石炭紀（約3億2000万年前〜）",
    representativeGenera: [
      "リュウビンタイ属（Angiopteris）",
      "マラッチア属（Marattia）",
    ],
    evolutionEvents: [
      "石炭紀における大型羽状複葉の確立",
      "シナンジウム（合生胞子嚢群）の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/リュウビンタイ科" },
    ],
    japaneseSpeciesCount: 14,
    review: { status: "ai_generated" },
  },

  // ── コケシノブ科 ──────────────────────────────────────────
  {
    id: "hymenophyllaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hymenophyllum_tunbrigense.jpg",
    jaName: "コケシノブ科",
    enName: "Filmy fern family",
    scientificName: "Hymenophyllaceae",
    order: "コケシノブ目",
    overview:
      "葉が細胞1〜2層の半透明の薄い膜状になる独特のシダ植物。高湿度の森林・岩場・樹幹に着生し、乾燥に弱い。約600種が熱帯〜温帯の湿潤地に分布し、日本にもコケシノブ属などが自生する。",
    characteristics: [
      "葉身が細胞1〜2層の膜状（半透明）",
      "乾燥に非常に弱く、高湿度環境に特化",
      "胞子嚢群は葉縁に筒状または2弁の包膜に包まれる",
      "根茎は細長く匍匐し、多くは着生性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > コケシノブ目 > コケシノブ科",
    divergenceEra: "ジュラ紀（約1億8000万年前〜）",
    representativeGenera: [
      "コケシノブ属（Hymenophyllum）",
      "ホウビカンジュ属（Trichomanes）",
    ],
    evolutionEvents: [
      "葉肉の極限的薄板化（クロロフィル密度最大化への適応）",
      "配偶体（前葉体）が独立して永続する特殊な繁殖戦略",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コケシノブ科" },
    ],
    japaneseSpeciesCount: 237,
    review: { status: "ai_generated" },
  },

  // ── コシダ科 ──────────────────────────────────────────────
  {
    id: "gleicheniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gleichenia_polypodioides.jpg",
    jaName: "コシダ科",
    enName: "Forking fern family",
    scientificName: "Gleicheniaceae",
    order: "コシダ目",
    overview:
      "茎頂の分岐が一時的に休眠し二叉分岐を繰り返す「仮二叉分岐」が特徴の古い系統のシダ植物。熱帯〜温帯に約125種が分布し、日本ではコシダが暖地の日当たりのよい斜面に群落を形成する。",
    characteristics: [
      "仮二叉分岐による葉軸の無限伸長",
      "胞子嚢群は裸出（包膜なし）で葉裏に列をなす",
      "先駆植物として荒地・崩壊地に大群落を形成",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > コシダ目 > コシダ科",
    divergenceEra: "三畳紀〜ジュラ紀（約2億年前〜）",
    representativeGenera: [
      "コシダ属（Dicranopteris）",
      "ウラジロ属（Gleichenia）",
    ],
    evolutionEvents: [
      "仮二叉分岐による葉の無限成長戦略の確立",
      "先駆植物としての光競争戦略（高密度群落形成）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コシダ科" },
    ],
    japaneseSpeciesCount: 31,
    review: { status: "ai_generated" },
  },

  // ── キジノオシダ科（Cheiropleuriaceae） ──────────────────────
  {
    id: "cheiropleuriaceae",
    jaName: "キジノオシダ科",
    enName: "Cheiropleuria family",
    scientificName: "Cheiropleuriaceae",
    order: "ウラボシ目",
    overview:
      "東アジアの熱帯・亜熱帯に分布するCheiropleuriaの1属のみからなる小さな科。単葉で不規則二叉脈をもつ大型の葉と、胞子嚢が葉裏全面に散在する独特の形態が特徴。日本では沖縄・小笠原に自生する。",
    characteristics: [
      "単葉で二叉脈",
      "胞子嚢が葉裏全面に均一に散在（ソーラスを形成しない）",
      "包膜なし",
      "着生または岩上生の常緑多年草",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > キジノオシダ科",
    divergenceEra: "白亜紀（約1億年前〜）",
    representativeGenera: ["キジノオシダ属（Cheiropleuria）"],
    evolutionEvents: [
      "ウラボシ目の初期分岐系統としての保存的葉脈構造の維持",
      "胞子嚢の葉裏全面散在という原始的胞子嚢配置の保持",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キジノオシダ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── ウラジロ科（Dipteridaceae） ───────────────────────────
  {
    id: "dipteridaceae",
    jaName: "ウラジロ科",
    enName: "Dipteris family",
    scientificName: "Dipteridaceae",
    order: "コシダ目",
    overview:
      "Dipteris（ウラジロ属）を中心とし、葉身が二裂して扇状に広がる独特の形態が特徴。東南アジア〜日本の暖温帯に自生し、ジュラ紀的な葉脈構造を保存する古い系統。",
    characteristics: [
      "葉身が二裂して扇状または翼状に広がる",
      "網状脈（二叉脈が網を形成）",
      "胞子嚢群は裸出（包膜なし）で散在",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > コシダ目 > ウラジロ科",
    divergenceEra: "三畳紀〜ジュラ紀（約2億年前〜）",
    representativeGenera: ["ウラジロ属（Dipteris）"],
    evolutionEvents: [
      "葉身の二裂・扇状展開による受光面積最大化",
      "網状脈の発達によるジュラ紀的葉脈構造の保存",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウラジロ科_(シダ植物)" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ジクソニア科 ──────────────────────────────────────────
  {
    id: "dicksoniaceae",
    jaName: "ジクソニア科",
    enName: "Tree fern family",
    scientificName: "Dicksoniaceae",
    order: "ヒメシダ目",
    overview:
      "主に南半球の温帯〜熱帯に分布する木性シダの科。樹幹状の茎に大型の羽状複葉が冠状につく。日本への自生はないが園芸用に導入されることがある。",
    characteristics: [
      "木性（茎が直立し樹幹状）",
      "大型の2〜3回羽状複葉",
      "胞子嚢群は葉縁の小脈先端に位置し、2弁の包膜に包まれる",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ヒメシダ目 > ジクソニア科",
    divergenceEra: "ジュラ紀（約1億8000万年前〜）",
    representativeGenera: [
      "ジクソニア属（Dicksonia）",
      "シボトゥム属（Cibotium）",
    ],
    evolutionEvents: [
      "木性化（茎の肥大・直立化）による高さ競争への適応",
      "ヘゴ科と独立した収斂的な木性シダの進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ジクソニア科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── ヘゴ科 ────────────────────────────────────────────────
  {
    id: "cyatheaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cyathea_australis.jpg",
    jaName: "ヘゴ科",
    enName: "Tree fern family (Cyathea)",
    scientificName: "Cyatheaceae",
    order: "ヘゴ目",
    overview:
      "熱帯〜亜熱帯に広く分布する木性シダの科で、最大の木性シダ科。Cyathea属を中心に約600種が知られる。日本では奄美大島・沖縄・小笠原にヘゴなどが自生し、亜熱帯林の象徴的植物となっている。",
    characteristics: [
      "木性（茎が直立し高さ数m〜十数mに達することも）",
      "大型の2〜3回羽状複葉",
      "胞子嚢群は杯状（盃形）の包膜に包まれる",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ヘゴ目 > ヘゴ科",
    divergenceEra: "ジュラ紀〜白亜紀（約1億5000万年前〜）",
    representativeGenera: [
      "ヘゴ属（Cyathea）",
      "アルソフィラ属（Alsophila）",
    ],
    evolutionEvents: [
      "木性化による高木層への進出（収斂進化）",
      "杯状包膜（カップ型インジウム）の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヘゴ科" },
    ],
    japaneseSpeciesCount: 34,
    review: { status: "ai_generated" },
  },

  // ── デンジソウ科 ──────────────────────────────────────────
  {
    id: "marsileaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Marsilea_quadrifolia.jpg",
    jaName: "デンジソウ科",
    enName: "Water clover family",
    scientificName: "Marsileaceae",
    order: "サンショウモ目",
    overview:
      "水生または湿地性の異形胞子性シダ植物。葉が4枚の小葉からなるクローバー状（デンジソウ）の形をもつ。胞子嚢は特殊な硬い豆状の胞子果に包まれ、乾燥に耐える。日本ではデンジソウが水田・ため池畔に自生するが、現在は絶滅危惧種。",
    characteristics: [
      "異形胞子性（大胞子と小胞子）",
      "胞子嚢が胞子果（硬い莢状構造）に包まれる",
      "水生または湿地性",
      "葉は4小葉（クローバー状）または1小葉",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > サンショウモ目 > デンジソウ科",
    divergenceEra: "白亜紀（約1億年前〜）",
    representativeGenera: [
      "デンジソウ属（Marsilea）",
      "タチデンジソウ属（Pilularia）",
    ],
    evolutionEvents: [
      "水生環境への完全適応",
      "胞子果（硬い莢）の進化による乾燥耐性胞子保護機構",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/デンジソウ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── キジノオシダ科（Plagiogyriaceae） ────────────────────────
  {
    id: "plagiogyriaceae",
    jaName: "プラギオギリア科",
    enName: "Plagiogyria family",
    scientificName: "Plagiogyriaceae",
    order: "ゼンマイ目",
    overview:
      "東アジア〜アメリカの熱帯山地に分布するPlagiogyria属のみからなる単型科。栄養葉と胞子葉が明瞭に2形に分かれ（二形葉性）、胞子葉は細長く葉縁が巻き込んで胞子嚢群を覆う偽包膜を形成する。日本ではキジノオシダが山地の林縁に自生する。",
    characteristics: [
      "二形葉性（栄養葉と胞子葉が明確に異なる）",
      "胞子葉の葉縁が巻き込んで偽包膜を形成",
      "根茎は太く直立または斜上",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ゼンマイ目 > プラギオギリア科",
    divergenceEra: "白亜紀（約9000万年前〜）",
    representativeGenera: ["キジノオシダ属（Plagiogyria）"],
    evolutionEvents: [
      "二形葉性（栄養葉と胞子葉の機能分化）の独立した進化",
      "偽包膜（葉縁の巻き込みによる胞子保護）の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キジノオシダ科" },
    ],
    japaneseSpeciesCount: 24,
    review: { status: "ai_generated" },
  },

  // ── カニクサ科 ────────────────────────────────────────────
  {
    id: "schizaeaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lygodium_japonicum.jpg",
    jaName: "カニクサ科",
    enName: "Climbing fern family",
    scientificName: "Schizaeaceae",
    order: "カニクサ目",
    overview:
      "ツル性または直立性のシダ植物で、胞子嚢が葉縁部に一列に並ぶ独特の形態をもつ。日本ではカニクサが温帯〜暖温帯に広く分布し、他の植物に巻き付いて伸長する。胞子嚢に顕著な環帯（縦帯）が1本あることが原始的特徴。",
    characteristics: [
      "胞子嚢に縦位の環帯が1本（完全環帯）",
      "胞子嚢は葉縁の小葉に並ぶ",
      "ツル性（カニクサ属）または直立性",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > カニクサ目 > カニクサ科",
    divergenceEra: "ジュラ紀〜白亜紀（約1億5000万年前〜）",
    representativeGenera: [
      "カニクサ属（Lygodium）",
      "アネミア属（Anemia）",
    ],
    evolutionEvents: [
      "完全環帯型胞子嚢の確立（原始的特徴の維持）",
      "ツル性による高所への進出（カニクサ属に限る）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カニクサ科" },
    ],
    japaneseSpeciesCount: 16,
    review: { status: "ai_generated" },
  },

  // ── ホウライシダ科 ────────────────────────────────────────
  {
    id: "adiantaceae",
    jaName: "ホウライシダ科",
    enName: "Maidenhair fern family",
    scientificName: "Adiantaceae",
    order: "ウラボシ目",
    overview:
      "クジャクシダ（ホウライシダ）属（Adiantum）を中心とする科で、扇形の小葉と葉縁が巻き込んで偽包膜を形成する特徴が際立つ。黒光りする葉柄も特徴的。",
    characteristics: [
      "扇形の小葉（末羽片）",
      "葉縁が巻き込んで偽包膜を形成（真の包膜なし）",
      "葉柄は黒色〜暗褐色で光沢がある",
      "脈は遊離の二叉脈",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ホウライシダ科",
    divergenceEra: "白亜紀（約1億年前〜）",
    representativeGenera: ["ホウライシダ属（Adiantum）"],
    evolutionEvents: [
      "偽包膜（葉縁の巻き込み）による胞子保護機構の確立",
      "石灰岩・湿岩壁への特殊適応の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホウライシダ科" },
    ],
    japaneseSpeciesCount: 128,
    review: { status: "ai_generated" },
  },

  // ── シシラン科 ────────────────────────────────────────────
  {
    id: "vittariaceae",
    jaName: "シシラン科",
    enName: "Shoestring fern family",
    scientificName: "Vittariaceae",
    order: "ウラボシ目",
    overview:
      "細長いテープ状の単葉と葉縁近くに溝状に並ぶ胞子嚢群が特徴のシダ植物。熱帯〜亜熱帯の樹幹や岩に着生する。日本ではシシランが南西諸島・九州南部に分布する。",
    characteristics: [
      "単葉でテープ状〜線形（細長い）",
      "胞子嚢群は葉縁に沿った溝（コミッサー）に並ぶ",
      "包膜なし",
      "着生性（樹幹・岩壁）",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > シシラン科",
    divergenceEra: "白亜紀〜古第三紀（約8000万年前〜）",
    representativeGenera: [
      "シシラン属（Vittaria）",
      "アンタロフィス属（Antrophyum）",
    ],
    evolutionEvents: [
      "単葉テープ状への葉の極端な単純化",
      "着生生活への特化と前葉体の無性繁殖による分布拡大",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シシラン科" },
    ],
    japaneseSpeciesCount: 36,
    review: { status: "ai_generated" },
  },

  // ── イノモトソウ科 ────────────────────────────────────────
  {
    id: "pteridaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Adiantum_capillus-veneris.jpg",
    jaName: "イノモトソウ科",
    enName: "Brake fern family",
    scientificName: "Pteridaceae",
    order: "ウラボシ目",
    overview:
      "イノモトソウ属（Pteris）を中心とする多様な科。日本ではイノモトソウ・オオバノイノモトソウなどが林縁や人里近くに普通に見られる。胞子嚢群は葉縁に沿って連続または断続して並び、偽包膜に覆われる。",
    characteristics: [
      "胞子嚢群は葉縁に沿って線状に配列",
      "偽包膜（葉縁の折り返し）が胞子嚢群を覆う",
      "葉は1〜4回羽状複葉",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > イノモトソウ科",
    divergenceEra: "白亜紀（約1億年前〜）",
    representativeGenera: [
      "イノモトソウ属（Pteris）",
      "ワカナシダ属（Pellaea）",
    ],
    evolutionEvents: [
      "偽包膜（葉縁折り返し）による胞子保護の確立",
      "岩場・乾燥地への適応（チェイランテス属等）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イノモトソウ科" },
    ],
    japaneseSpeciesCount: 2091,
    review: { status: "ai_generated" },
  },

  // ── ワラビ科 ──────────────────────────────────────────────
  {
    id: "dennstaedtiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pteridium_aquilinum.jpg",
    jaName: "ワラビ科",
    enName: "Bracken family",
    scientificName: "Dennstaedtiaceae",
    order: "ウラボシ目",
    overview:
      "ワラビ（Pteridium aquilinum）を含む科で、世界中に広く分布する。ワラビは地球上で最も広域分布するシダ植物の1つで、開けた草地・山地・伐採跡地などに大群落を形成する。",
    characteristics: [
      "地下に長く匍匐する根茎（アレロパシー物質含有）",
      "胞子嚢群は葉縁に沿って配列（偽包膜に覆われる）",
      "大型の2〜4回羽状複葉",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ワラビ科",
    divergenceEra: "白亜紀（約1億年前〜）",
    representativeGenera: [
      "ワラビ属（Pteridium）",
      "デンスタエティア属（Dennstaedtia）",
      "ヒメワラビ属（Microlepia）",
    ],
    evolutionEvents: [
      "アレロパシー（他感作用）による競合植物排除機構の発達",
      "地下根茎による撹乱地への急速な再侵入戦略",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ワラビ科" },
    ],
    japaneseSpeciesCount: 103,
    review: { status: "ai_generated" },
  },

  // ── ホングウシダ科 ────────────────────────────────────────
  {
    id: "lindsaeaceae",
    jaName: "ホングウシダ科",
    enName: "Lindsaea family",
    scientificName: "Lindsaeaceae",
    order: "ウラボシ目",
    overview:
      "熱帯〜亜熱帯に広く分布するシダ植物の科。日本ではホングウシダ属が南西諸島・九州南部に自生する。葉は1〜2回羽状複葉で小葉は扇形〜くさび形が多く、胞子嚢群は葉縁〜葉縁近くに線状に並ぶ。",
    characteristics: [
      "小葉は扇形〜くさび形が多い",
      "胞子嚢群は葉縁〜葉縁近くに線状に並ぶ",
      "包膜は葉縁側に開口",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ホングウシダ科",
    divergenceEra: "白亜紀（約9000万年前〜）",
    representativeGenera: [
      "ホングウシダ属（Lindsaea）",
      "オドントソリア属（Odontosoria）",
    ],
    evolutionEvents: [
      "葉縁型胞子嚢配置の発達",
      "熱帯林床の安定した高湿度環境への特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホングウシダ科" },
    ],
    japaneseSpeciesCount: 76,
    review: { status: "ai_generated" },
  },

  // ── チャセンシダ科 ────────────────────────────────────────
  {
    id: "aspleniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Asplenium_marinum_001.JPG",
    jaName: "チャセンシダ科",
    enName: "Spleenwort family",
    scientificName: "Aspleniaceae",
    order: "ウラボシ目",
    overview:
      "チャセンシダ属（Asplenium）を中心とする大きな科で、約700種が世界に分布する。岩壁・樹幹・林床など幅広い環境に生育し、日本にも多数の種が自生する。胞子嚢群は線状で、片側に開口する包膜（線形包膜）に覆われる。",
    characteristics: [
      "胞子嚢群は線状（ソーラスが線形）",
      "包膜は葉脈の片側に付着し、外側に開口（線形包膜）",
      "葉は単葉〜多回羽状複葉まで多様",
      "雑種（自然交雑）が非常に多い",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > チャセンシダ科",
    divergenceEra: "ジュラ紀〜白亜紀（約1億5000万年前〜）",
    representativeGenera: [
      "チャセンシダ属（Asplenium）",
      "カミガモシダ属（Hymenasplenium）",
    ],
    evolutionEvents: [
      "線形包膜（片側開口型）の進化と安定した放散",
      "雑種形成・倍数体化による種分化の促進",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/チャセンシダ科" },
    ],
    japaneseSpeciesCount: 177,
    review: { status: "ai_generated" },
  },

  // ── メシダ科 ──────────────────────────────────────────────
  {
    id: "woodsiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Athyrium_vidalii_02.JPG",
    jaName: "メシダ科",
    enName: "Lady fern family",
    scientificName: "Woodsiaceae",
    order: "ウラボシ目",
    overview:
      "メシダ属（Athyrium）などを含む科。日本では最もよく見られるシダ科の1つで、イヌワラビ・サトメシダなど多くの種が林床・渓谷沿いに生育する。胞子嚢群はJ字形〜馬蹄形の包膜に覆われることが多い。",
    characteristics: [
      "胞子嚢群はJ字形・馬蹄形・線形など多様な包膜に覆われる",
      "葉は1〜3回羽状複葉",
      "根茎は匍匐または直立",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > メシダ科",
    divergenceEra: "白亜紀（約1億年前〜）",
    representativeGenera: [
      "メシダ属（Athyrium）",
      "ミヤマシケシダ属（Deparia）",
      "ウッドシア属（Woodsia）",
    ],
    evolutionEvents: [
      "多様な包膜形態（J字形・馬蹄形・腎形）の並行進化",
      "温帯山地林床への高度適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/メシダ科" },
    ],
    japaneseSpeciesCount: 618,
    review: { status: "ai_generated" },
  },

  // ── ヒメシダ科 ────────────────────────────────────────────
  {
    id: "thelypteridaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Phegopteris_connectilis_AT.JPG",
    jaName: "ヒメシダ科",
    enName: "Marsh fern family",
    scientificName: "Thelypteridaceae",
    order: "ウラボシ目",
    overview:
      "ヒメシダ属・ミゾシダ属・コウヤワラビ属など多くの属を含む大きな科。湿地・水辺・山地林床に広く分布し、日本でも多くの種が普通に見られる。葉脈が対生する小脈の先端が合着することが特徴。",
    characteristics: [
      "対生する小脈の先端が合着（コネクティング脈）",
      "胞子嚢群は丸形〜腎形の包膜に覆われる（または裸出）",
      "葉は1〜2回羽状複葉",
      "毛（針状毛〜鱗片）が発達することが多い",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ヒメシダ科",
    divergenceEra: "白亜紀（約9000万年前〜）",
    representativeGenera: [
      "ヒメシダ属（Thelypteris）",
      "ミゾシダ属（Stegnogramma）",
      "コウヤワラビ属（Phegopteris）",
    ],
    evolutionEvents: [
      "コネクティング脈（対生小脈の合着）の進化",
      "湿地・水辺環境への特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒメシダ科" },
    ],
    japaneseSpeciesCount: 335,
    review: { status: "ai_generated" },
  },

  // ── シシガシラ科 ──────────────────────────────────────────
  {
    id: "blechnaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Blechnum_spicant.jpg",
    jaName: "シシガシラ科",
    enName: "Chain fern family",
    scientificName: "Blechnaceae",
    order: "ウラボシ目",
    overview:
      "コウヤシダ属（Blechnum）を中心とする科で、胞子嚢群が葉脈に平行して連続する線状に配列することが最大の特徴。栄養葉と胞子葉が二形になる種が多い。日本ではシシガシラ・コウヤシダなどが山地の湿潤林床に見られる。",
    characteristics: [
      "胞子嚢群は中肋（主脈）に平行した連続する線状（コソリウム）に配列",
      "包膜は胞子嚢群の外側（葉縁側）に開口",
      "栄養葉と胞子葉の二形性が発達する種が多い",
      "同形胞子性",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > シシガシラ科",
    divergenceEra: "白亜紀（約1億年前〜）",
    representativeGenera: [
      "コウヤシダ属（Blechnum）",
      "シシガシラ属（Struthiopteris）",
    ],
    evolutionEvents: [
      "コソリウム型胞子嚢配列（葉脈平行型）の確立",
      "栄養葉・胞子葉の二形性による効率的な光合成と胞子生産の分業",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シシガシラ科" },
    ],
    japaneseSpeciesCount: 45,
    review: { status: "ai_generated" },
  },

  // ── オシダ科 ──────────────────────────────────────────────
  {
    id: "dryopteridaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dryopteris_crassirhizoma.JPG",
    jaName: "オシダ科",
    enName: "Shield fern family",
    scientificName: "Dryopteridaceae",
    order: "ウラボシ目",
    overview:
      "オシダ属（Dryopteris）・ヤブソテツ属・カナワラビ属など多くの属を含む大きな科。日本で最も種数が多いシダ科の1つで、山地林床を中心に多様な環境に生育する。胞子嚢群は丸形で腎形の包膜に覆われることが典型的。",
    characteristics: [
      "胞子嚢群は丸形（腎形〜円形の包膜に覆われる）",
      "鱗片（葉柄基部等）が発達",
      "葉は1〜4回羽状複葉",
      "根茎は直立〜斜上（束生型が多い）",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > オシダ科",
    divergenceEra: "白亜紀〜古第三紀（約8000万年前〜）",
    representativeGenera: [
      "オシダ属（Dryopteris）",
      "ヤブソテツ属（Cyrtomium）",
      "カナワラビ属（Polystichum）",
    ],
    evolutionEvents: [
      "腎形包膜の安定した維持と大規模な種分化",
      "倍数体化による種分化の促進",
      "常緑性の発達による冬季林床での優占",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/オシダ科" },
    ],
    japaneseSpeciesCount: 1675,
    review: { status: "ai_generated" },
  },

  // ── ヒモカズラ科 ──────────────────────────────────────────
  {
    id: "lomariopsidaceae",
    jaName: "ヒモカズラ科",
    enName: "Lomariopsis family",
    scientificName: "Lomariopsidaceae",
    order: "ウラボシ目",
    overview:
      "熱帯を中心に分布する着生または地生のシダ植物の科。タマシダ（Nephrolepis cordifolia）が南西諸島〜九州南部に自生し、観葉植物としても広く栽培される。",
    characteristics: [
      "1回羽状複葉で小葉は多数",
      "根茎は匍匐し、細いストロン（匍匐茎）を出す種がある",
      "胞子嚢群は丸形〜腎形の包膜に覆われる",
      "着生または地生",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ヒモカズラ科",
    divergenceEra: "白亜紀〜古第三紀（約7000万年前〜）",
    representativeGenera: [
      "ヒモカズラ属（Lomariopsis）",
      "タマシダ属（Nephrolepis）",
    ],
    evolutionEvents: [
      "ストロン（匍匐茎）による栄養繁殖の高効率化",
      "着生生活と地生生活の間の可塑的適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒモカズラ科" },
    ],
    japaneseSpeciesCount: 39,
    review: { status: "ai_generated" },
  },

  // ── タマシダ科 ────────────────────────────────────────────
  {
    id: "oleandraceae",
    jaName: "タマシダ科",
    enName: "Oleandra family",
    scientificName: "Oleandraceae",
    order: "ウラボシ目",
    overview:
      "熱帯アジア〜アフリカ・アメリカに分布するOleandra属のみからなる単型科。着生または岩上生の草本で、単葉で革質の葉と葉柄基部に関節をもつことが特徴。",
    characteristics: [
      "単葉で披針形〜楕円形、革質",
      "葉柄基部に関節（節）をもつ",
      "胞子嚢群は丸形〜腎形の包膜に覆われる",
      "着生または岩上生",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > タマシダ科",
    divergenceEra: "白亜紀〜古第三紀（約7000万年前〜）",
    representativeGenera: ["タマシダ属（Oleandra）"],
    evolutionEvents: [
      "葉柄基部の関節（脱離帯）による老葉の効率的脱落機構の確立",
      "着生環境への特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/タマシダ科" },
    ],
    japaneseSpeciesCount: 15,
    review: { status: "ai_generated" },
  },

  // ── シノブ科 ──────────────────────────────────────────────
  {
    id: "davalliaceae",
    jaName: "シノブ科",
    enName: "Hare's-foot fern family",
    scientificName: "Davalliaceae",
    order: "ウラボシ目",
    overview:
      "シノブ属（Davallia）を中心とする着生性シダの科。根茎が鱗片状の毛で覆われる。日本ではシノブが温帯の樹幹・岩壁に着生し、盆栽や行灯飾りにも使われる。",
    characteristics: [
      "根茎は長く匍匐し、茶色い鱗片（毛）で密に覆われる",
      "胞子嚢群は葉縁の杯形〜袋形の包膜に収まる",
      "葉は3〜4回羽状複葉で精巧に分裂",
      "着生性（樹幹・岩壁）",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > シノブ科",
    divergenceEra: "古第三紀（約5000万年前〜）",
    representativeGenera: ["シノブ属（Davallia）"],
    evolutionEvents: [
      "杯形（コップ型）包膜の独特の進化",
      "鱗片状根茎による乾燥耐性の獲得（着生適応）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シノブ科" },
    ],
    japaneseSpeciesCount: 54,
    review: { status: "ai_generated" },
  },

  // ── ウラボシ科 ────────────────────────────────────────────
  {
    id: "polypodiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Polypodium_vulgare_002.JPG",
    jaName: "ウラボシ科",
    enName: "Polypody family",
    scientificName: "Polypodiaceae",
    order: "ウラボシ目",
    overview:
      "着生性のシダが多い大きな科。胞子嚢群は裸出（包膜なし）の円形〜楕円形で、葉脈の交点（網状脈の結節）に位置することが典型的。日本ではエゾデンダ・ノキシノブ・ミツデウラボシなどが樹幹・岩壁に着生する。",
    characteristics: [
      "胞子嚢群は裸出（包膜をもたない）",
      "胞子嚢群は円形〜楕円形で葉脈の交点に位置",
      "網状脈が発達",
      "着生性が多い（樹幹・岩壁）",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ウラボシ科",
    divergenceEra: "白亜紀〜古第三紀（約7000万年前〜）",
    representativeGenera: [
      "ウラボシ属（Polypodium）",
      "ノキシノブ属（Lepisorus）",
      "エゾデンダ属（Polypodiodes）",
    ],
    evolutionEvents: [
      "包膜の喪失（裸出型胞子嚢群への移行）",
      "着生生活への広範な適応",
      "被子植物林の樹冠展開とともに着生ニッチを占有",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウラボシ科" },
    ],
    japaneseSpeciesCount: 382,
    review: { status: "ai_generated" },
  },

  // ── ウラゲシダ科 ──────────────────────────────────────────
  {
    id: "grammitidaceae",
    jaName: "ウラゲシダ科",
    enName: "Grammitid fern family",
    scientificName: "Grammitidaceae",
    order: "ウラボシ目",
    overview:
      "熱帯〜温帯山地の霧林に着生する小型のシダ植物。ウラボシ科に近縁で、胞子嚢群は裸出の円形。葉は小型で単葉〜深裂するものが多く、葉裏にしばしば毛が密生する。日本では小笠原・南西諸島に数種が生育する。",
    characteristics: [
      "小型の着生性シダ",
      "胞子嚢群は裸出（包膜なし）",
      "葉裏に多細胞毛が密生することが多い",
      "胞子嚢柄が1列の細胞列からなる",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ウラゲシダ科",
    divergenceEra: "古第三紀（約5000万年前〜）",
    representativeGenera: ["グラミティス属（Grammitis）"],
    evolutionEvents: [
      "霧林・高湿度山地環境への特化（超小型着生ニッチ）",
      "胞子嚢柄の単列化（ウラボシ科との系統的分岐）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウラゲシダ科" },
    ],
    japaneseSpeciesCount: 75,
    review: { status: "ai_generated" },
  },

  // ── サンショウモ科 ────────────────────────────────────────
  {
    id: "salviniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Salvinia_auriculata.jpg",
    jaName: "サンショウモ科",
    enName: "Floating fern family",
    scientificName: "Salviniaceae",
    order: "サンショウモ目",
    overview:
      "水面に浮遊する異形胞子性の水生シダ。サンショウモ属（Salvinia）は根をもたず、浮葉の表面に防水性の微細毛（撥水毛）をもつ。日本ではサンショウモが水田・ため池に分布するが、個体数が減少している。",
    characteristics: [
      "根をもたない浮遊性水生シダ",
      "異形胞子性（大胞子嚢・小胞子嚢が胞子果に収まる）",
      "浮葉の表面に撥水性の微細毛（テニスラケット状）",
      "対生する浮葉2枚と水中葉（根の代わり）1枚の計3葉",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > サンショウモ目 > サンショウモ科",
    divergenceEra: "白亜紀〜古第三紀（約8000万年前〜）",
    representativeGenera: ["サンショウモ属（Salvinia）"],
    evolutionEvents: [
      "根の喪失と水中葉（根の機能代替）の進化",
      "撥水性微細毛（ロータス効果の生物的起源）の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サンショウモ科" },
    ],
    japaneseSpeciesCount: 15,
    review: { status: "ai_generated" },
  },

  // ── アカウキクサ科 ────────────────────────────────────────
  {
    id: "azollaceae",
    jaName: "アカウキクサ科",
    enName: "Mosquito fern family",
    scientificName: "Azollaceae",
    order: "サンショウモ目",
    overview:
      "浮遊性の水生シダで、Azolla属1属のみからなる単型科。葉内にシアノバクテリア（Anabaena azollae）を共生させ、窒素固定を行う能力をもつ。アジアの水田では緑肥として利用されてきた。日本ではアカウキクサが水田・ため池に分布する。",
    characteristics: [
      "異形胞子性の水生シダ",
      "葉腔にシアノバクテリア（Anabaena）を共生（窒素固定）",
      "葉は小さく2裂し、水面を覆うように重なる",
      "秋に赤色（アントシアニン）に色づく",
    ],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > サンショウモ目 > アカウキクサ科",
    divergenceEra: "白亜紀（約8000万年前〜）",
    representativeGenera: ["アカウキクサ属（Azolla）"],
    evolutionEvents: [
      "シアノバクテリア（Anabaena）との葉内共生（窒素固定）の確立",
      "白亜紀末〜暁新世の「アゾラ事件」（北極海での大量繁殖）への関与",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アカウキクサ科" },
    ],
    japaneseSpeciesCount: 11,
    review: { status: "ai_generated" },
  },

  // ── ウェルウィッチア科 ──────────────────────────────────────────
  {
    id: "welwitschiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Welwitschia_mirabilis.jpg",
    jaName: "ウェルウィッチア科",
    enName: "Welwitschia family",
    scientificName: "Welwitschiaceae Caruel",
    order: "グネツム目",
    overview:
      "アフリカ南西部のナミブ砂漠に固有の裸子植物の科。ウェルウィッチア属1属1種（Welwitschia mirabilis）のみからなる単型科。葉は生涯を通じて2枚だけ成長し続け、個体は数百〜数千年生きるとされる。",
    characteristics: [
      "葉は2枚のみで生涯成長し続け、裂けて帯状になる",
      "茎は短く肥大した木質の根茎状",
      "雌雄異株で、花は球果状の胞子葉球",
      "極端な乾燥地に適応した独自の形態",
    ],
    phylogeneticPosition: "裸子植物 > グネツム類 > グネツム目 > ウェルウィッチア科",
    divergenceEra: "ジュラ紀〜白亜紀（約1億3000万年前）",
    representativeGenera: [
      "ウェルウィッチア属（Welwitschia）",
    ],
    evolutionEvents: [
      "裸子植物グネツム類の独立した進化系統として分岐",
      "ナミブ砂漠への極端な乾燥適応",
      "2枚の葉のみで生涯を送る独自の成長戦略の獲得",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウェルウィッチア" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ニクズク科 ──────────────────────────────────────────
  {
    id: "myristicaceae",
    jaName: "ニクズク科",
    enName: "Nutmeg family",
    scientificName: "Myristicaceae R.Br.",
    order: "モクレン目",
    overview:
      "熱帯雨林に生育する常緑高木からなる科。約20属500種が知られ、アジア・アフリカ・アメリカの熱帯域に分布する。香辛料のナツメグ（Myristica fragrans）を産することで知られ、種子を包む仮種皮はメースとして利用される。",
    characteristics: [
      "常緑高木で精油を含む",
      "花被片は3枚の合着した筒状",
      "雌雄異株が多い",
      "種子は大きく、赤い網状の仮種皮（アリル）に包まれる",
      "切断すると赤い樹液（血の木）が出る種もある",
    ],
    phylogeneticPosition: "被子植物 > マグノリア類 > モクレン目 > ニクズク科",
    divergenceEra: "白亜紀前期〜中期（約1億1000万年前）",
    representativeGenera: [
      "ニクズク属（Myristica）",
      "ホルスフィエルディア属（Horsfieldia）",
      "クノニア属（Knema）",
      "ビロウ属類縁（Gymnacranthera）",
    ],
    evolutionEvents: [
      "マグノリア類の初期分岐系統として白亜紀前期に出現",
      "赤色仮種皮による鳥類・哺乳類を介した種子散布の獲得",
      "精油成分（ミリスチシン等）による昆虫・草食者防御機構の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ニクズク科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── デゲネリア科 ──────────────────────────────────────────
  {
    id: "degeneriaceae",
    jaName: "デゲネリア科",
    enName: "Degeneria family",
    scientificName: "Degeneriaceae I.W.Bailey & A.C.Sm.",
    order: "モクレン目",
    overview:
      "フィジー諸島にのみ固有のきわめて古い系統の被子植物科。1属2種（Degeneria vitiensis・D. roseiflora）のみからなる単型に近い科。花の形態が被子植物の祖先的特徴を多く保持しており、花進化の研究上で重要な位置を占める。",
    characteristics: [
      "花弁・萼片の区別が不明瞭で多数の花被片をもつ",
      "雄しべは扁平な葉状で、葯が3室（祖先的形質）",
      "雌しべは折りたたまれた1心皮",
      "常緑高木で、芳香性の花を咲かせる",
    ],
    phylogeneticPosition: "被子植物 > マグノリア類 > モクレン目 > デゲネリア科",
    divergenceEra: "白亜紀前期（約1億2000万年前）",
    representativeGenera: [
      "デゲネリア属（Degeneria）",
    ],
    evolutionEvents: [
      "マグノリア類の基底的系統として初期被子植物の祖先的形質を保持",
      "フィジー諸島への孤立による独自進化",
      "扁平な雄しべという被子植物の花進化を示す証拠の保存",
    ],
    externalLinks: [
      { label: "Wikipedia（英語）", url: "https://en.wikipedia.org/wiki/Degeneriaceae" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── トチカガミ目ブトムス科 ──────────────────────────────────────────
  {
    id: "butomaceae",
    jaName: "トチカガミ目ブトムス科",
    enName: "Flowering rush family",
    scientificName: "Butomaceae Rich.",
    order: "トチカガミ目",
    overview:
      "ユーラシア原産の水生・湿生植物の科。1属1種（Butomus umbellatus、ハナイ）のみからなる単型科。花は美しいピンク色で散形花序を形成し、観賞用に栽培されることもある。日本では帰化植物として確認されている。",
    characteristics: [
      "葉は細長い三稜形で、直立する",
      "花は3数性でピンク色、花被片6枚",
      "散形花序で多数の花をつける",
      "水辺・湿地に生育する多年草",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > トチカガミ目 > ブトムス科",
    divergenceEra: "白亜紀後期〜古第三紀（約8500万年前）",
    representativeGenera: [
      "ブトムス属（Butomus）",
    ],
    evolutionEvents: [
      "単子葉類水生植物の初期分岐系統として出現",
      "水辺環境への適応と散形花序の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ブトムス科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── ヒルムシロ目シュークゼリア科 ──────────────────────────────────────────
  {
    id: "scheuchzeriaceae",
    jaName: "シュークゼリア科",
    enName: "Rannoch-rush family",
    scientificName: "Scheuchzeriaceae F.Rudolphi",
    order: "オモダカ目",
    overview:
      "北半球の寒冷湿地・泥炭地に分布する水生植物の科。1属1種（Scheuchzeria palustris、ツルコケモモ目）のみからなる単型科。日本では北海道・本州の高層湿原に稀に見られる。",
    characteristics: [
      "細長い葉で、基部に葉鞘をもつ",
      "花被片6枚、雄しべ6本",
      "果実は袋果（ぶくか）",
      "泥炭地・高層湿原の特殊環境に生育",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > シュークゼリア科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "シュークゼリア属（Scheuchzeria）",
    ],
    evolutionEvents: [
      "単子葉類水生系統からの分岐",
      "北半球寒冷湿地への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シュークゼリア科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ミズスギナ科 ──────────────────────────────────────────
  {
    id: "aponogetonaceae",
    jaName: "ミズスギナ科",
    enName: "Cape-pondweed family",
    scientificName: "Aponogetonaceae J.Agardh",
    order: "オモダカ目",
    overview:
      "熱帯〜暖温帯の水中・湿地に生育する水生植物の科。1属（Aponogeton）約55種からなる。アフリカ・アジア・オーストラリアに分布し、日本では観賞用として水槽に用いられることが多い。",
    characteristics: [
      "葉は水中または浮水性で、細長いか楕円形",
      "花は穂状花序または分枝する穂状花序",
      "花被片は1〜3枚、白または淡色",
      "根茎（塊茎）から生育する多年草",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > ミズスギナ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "アポノゲトン属（Aponogeton）",
    ],
    evolutionEvents: [
      "単子葉類水生系統として分岐",
      "水中葉の発達と水媒花への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミズスギナ科" },
    ],
    japaneseSpeciesCount: 6,
    review: { status: "ai_generated" },
  },

  // ── イグサモ科 ──────────────────────────────────────────
  {
    id: "juncaginaceae",
    jaName: "イグサモ科",
    enName: "Arrow-grass family",
    scientificName: "Juncaginaceae Rich.",
    order: "オモダカ目",
    overview:
      "湿地・塩性湿地・水辺に生育する単子葉植物の科。3〜4属約25種が知られ、北半球の温帯から極地にかけて分布する。日本にはイグサモ属（Triglochin）の数種が塩湿地や干潟に生育する。",
    characteristics: [
      "葉は細長い線形で、根元から束生",
      "花は小さく3数性、穂状花序",
      "果実は裂開する分果",
      "塩性湿地に適応した塩生植物を含む",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > イグサモ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "イグサモ属（Triglochin）",
      "テトラゴノカルプス属（Tetroncium）",
    ],
    evolutionEvents: [
      "塩性湿地・干潟環境への特殊適応",
      "風媒花による送粉様式の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（英語）", url: "https://en.wikipedia.org/wiki/Juncaginaceae" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── クワズイモ目クルクリゴ科 ──────────────────────────────────────────
  {
    id: "cyclanthaceae",
    jaName: "クルクリゴ目クルクリゴ科",
    enName: "Panama-hat family",
    scientificName: "Cyclanthaceae Poit. ex A.Rich.",
    order: "タコノキ目",
    overview:
      "中南米の熱帯雨林に分布する単子葉植物の科。約12属230種が知られ、パナマ帽の原料となるトキワタケヤシ（Carludovica palmata）が有名。葉はヤシに似た大型の扇状または二叉状。",
    characteristics: [
      "葉は大型の扇状または二叉状、ヤシ状の外観",
      "雌雄同株、肉穂花序に花を密生",
      "雄花と雌花が交互に配置される独特の花序",
      "果実は集合して肉質の集合果となる",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > タコノキ目 > クルクリゴ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    representativeGenera: [
      "カルルドヴィカ属（Carludovica）",
      "キクランタス属（Cyclanthus）",
      "アスプルンディア属（Asplundia）",
    ],
    evolutionEvents: [
      "タコノキ目の系統内で熱帯雨林林床への適応",
      "ヤシ状の大型葉の収斂進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クルクリゴ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── パイナップル科 ──────────────────────────────────────────
  {
    id: "bromeliaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ananas_comosus_fruit.jpg",
    jaName: "パイナップル科",
    enName: "Bromeliad family",
    scientificName: "Bromeliaceae Juss.",
    order: "イネ目",
    overview:
      "主に中南米の熱帯・亜熱帯に分布する単子葉植物の科。約75属3,700種が知られ、パイナップル（Ananas comosus）や多数の着生植物（ティランジア属など）を含む。日本では観賞植物として栽培されるほか、一部が逸出している。",
    characteristics: [
      "葉はロゼット状に配列し、多くは革質・縁に刺をもつ",
      "葉の基部が杯状に水をためる「タンク型」が多い",
      "花は3数性で、苞が鮮やかに着色されることが多い",
      "着生・地生・岩生と多様な生活形をもつ",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ類 > イネ目 > パイナップル科",
    divergenceEra: "古第三紀（約6500万〜5000万年前）",
    representativeGenera: [
      "パイナップル属（Ananas）",
      "ティランジア属（Tillandsia）",
      "グスマニア属（Guzmania）",
      "エクメア属（Aechmea）",
    ],
    evolutionEvents: [
      "南米起源から中米・カリブへの拡散",
      "CAM光合成の獲得（着生パイナップル類で独立進化）",
      "タンク型ブロメリアの進化（雨水・有機物の貯留）",
      "ハチドリや昆虫による送粉共進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/パイナップル科" },
    ],
    japaneseSpeciesCount: 57,
    review: { status: "ai_generated" },
  },

  // ── フクロユキノシタ科 ──────────────────────────────────────────
  {
    id: "cephalotaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cephalotus_follicularis.jpg",
    jaName: "フクロユキノシタ科",
    enName: "Albany pitcher plant family",
    scientificName: "Cephalotaceae Dumort.",
    order: "カタバミ目",
    overview:
      "オーストラリア西部に固有の食虫植物の科。1属1種（Cephalotus follicularis）のみからなる単型科。葉の一部が袋状の捕虫器（落とし穴型）に変化し、昆虫を捕らえて消化する。",
    characteristics: [
      "葉の一部が落とし穴型の袋状捕虫器に変形",
      "捕虫器の口部には蓋と格子状のリブがある",
      "花は小さく白色、6枚の花被片をもつ",
      "栄養葉と捕虫葉の両方を持つ多年草",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > カタバミ目 > フクロユキノシタ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    representativeGenera: [
      "フクロユキノシタ属（Cephalotus）",
    ],
    evolutionEvents: [
      "カタバミ目内で捕虫器の独立進化（収斂進化）",
      "オーストラリア西部の貧栄養湿地への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フクロユキノシタ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── カリオカル科 ──────────────────────────────────────────
  {
    id: "caryocaraceae",
    jaName: "カリオカル科",
    enName: "Souari family",
    scientificName: "Caryocaraceae Voigt",
    order: "キントラノオ目",
    overview:
      "南米の熱帯雨林に分布する高木の科。1属（Caryocar）約15種からなる。種子は食用油（スアリナッツ）として利用され、アマゾン先住民の重要な食糧源となっている。",
    characteristics: [
      "大型の対生三出複葉",
      "花は大きく黄色〜白色、雄しべが多数で目立つ",
      "果実は核果で大型、硬い果皮に包まれた種子をもつ",
      "常緑の大高木",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > カリオカル科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "カリオカル属（Caryocar）",
    ],
    evolutionEvents: [
      "南米熱帯雨林の大高木系統として分岐",
      "大型種子と哺乳類による種子散布の共進化",
    ],
    externalLinks: [
      { label: "Wikipedia（英語）", url: "https://en.wikipedia.org/wiki/Caryocaraceae" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ノボタン科 ──────────────────────────────────────────
  {
    id: "melastomataceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Melastoma_malabathricum.jpg",
    jaName: "ノボタン科",
    enName: "Melastome family",
    scientificName: "Melastomataceae Juss.",
    order: "フトモモ目",
    overview:
      "熱帯・亜熱帯を中心に約170属5,000種以上が知られる大科。日本にはノボタン（Melastoma candidum）が九州・沖縄の路傍や荒地に分布する。葉脈が基部から弧状に走る特徴的なパターンで識別しやすい。",
    characteristics: [
      "葉は対生で、基部から3〜7本の主脈が弧状に走る（弧状脈）",
      "花は4〜5数性、花弁は鮮やかな色（紫・ピンク・白）",
      "雄しべは異形雄蕊（おしべの形が2種類）",
      "果実は液果または蒴果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > ノボタン科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    representativeGenera: [
      "ノボタン属（Melastoma）",
      "コメバノキ属（Astronia）",
      "オソバナ属（Medinilla）",
    ],
    evolutionEvents: [
      "弧状脈という独特な葉脈パターンの進化",
      "異形雄蕊による送粉特殊化",
      "熱帯全域への急速な種分化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ノボタン科" },
    ],
    japaneseSpeciesCount: 67,
    review: { status: "ai_generated" },
  },

  // ── ミツバウツギ科 ──────────────────────────────────────────
  {
    id: "staphyleaceae",
    jaName: "ミツバウツギ科",
    enName: "Bladdernut family",
    scientificName: "Staphyleaceae (DC.) Lindl.",
    order: "クロッソソマ目",
    overview:
      "北半球の温帯域に分布する落葉低木〜小高木の科。約2属50種が知られ、日本にはミツバウツギ（Staphylea bumalda）とゴンズイ（Euscaphis japonica）の2種が自生する。膨らんだ気球状の果実が特徴的。",
    characteristics: [
      "葉は羽状複葉または3出複葉",
      "花は5数性で白色〜淡緑色、円錐花序",
      "果実は薄い膜質の袋（蒴果）で風船状に膨らむ",
      "落葉低木〜小高木",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > クロッソソマ目 > ミツバウツギ科",
    divergenceEra: "古第三紀（約6000万年前）",
    representativeGenera: [
      "ミツバウツギ属（Staphylea）",
      "ゴンズイ属（Euscaphis）",
    ],
    evolutionEvents: [
      "クロッソソマ目内での温帯林適応",
      "膨張した果実による風散布・水散布の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミツバウツギ科" },
    ],
    japaneseSpeciesCount: 20,
    review: { status: "ai_generated" },
  },

  // ── キブシ科 ──────────────────────────────────────────
  {
    id: "stachyuraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Stachyurus_praecox.jpg",
    jaName: "キブシ科",
    enName: "Stachyurus family",
    scientificName: "Stachyuraceae J.Agardh",
    order: "クロッソソマ目",
    overview:
      "東・東南アジアに分布する落葉低木〜小高木の科。1属（Stachyurus）約6種からなる。日本にはキブシ（S. praecox）とキイキブシ（S. macrocarpus）が自生し、早春に葉に先立って淡黄色の穂状花序を垂らす。",
    characteristics: [
      "葉は互生で鋸歯縁",
      "花は4数性で淡黄色、穂状花序が垂れ下がる",
      "葉に先立って早春に開花",
      "果実は漿果状の蒴果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > クロッソソマ目 > キブシ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "キブシ属（Stachyurus）",
    ],
    evolutionEvents: [
      "東アジアの温帯落葉林への適応",
      "早春開花という送粉戦略の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キブシ科" },
    ],
    japaneseSpeciesCount: 21,
    review: { status: "ai_generated" },
  },

  // ── カンラン科 ──────────────────────────────────────────
  {
    id: "burseraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Boswellia_sacra.jpg",
    jaName: "カンラン科",
    enName: "Frankincense family",
    scientificName: "Burseraceae Kunth",
    order: "ムクロジ目",
    overview:
      "熱帯域に広く分布する高木の科。約20属700種が知られ、乳香（フランキンセンス）やミルラなどの芳香樹脂を産する種を含む。日本では沖縄・奄美にカンラン属（Canarium）の数種が分布する。",
    characteristics: [
      "樹皮から芳香性樹脂を分泌する",
      "葉は羽状複葉で互生",
      "花は小さく3〜5数性",
      "果実は核果で、外皮が剥離することが多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > カンラン科",
    divergenceEra: "白亜紀後期（約9000万年前）",
    representativeGenera: [
      "カンラン属（Canarium）",
      "ボスウェリア属（Boswellia）",
      "コミフォラ属（Commiphora）",
    ],
    evolutionEvents: [
      "ムクロジ目内で芳香性樹脂産生能力の確立",
      "熱帯各地域への拡散と種分化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カンラン科" },
    ],
    japaneseSpeciesCount: 7,
    review: { status: "ai_generated" },
  },

  // ── ウルシ科 ──────────────────────────────────────────
  {
    id: "anacardiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mangifera_indica.jpg",
    jaName: "ウルシ科",
    enName: "Cashew family",
    scientificName: "Anacardiaceae R.Br.",
    order: "ムクロジ目",
    overview:
      "熱帯〜温帯に分布する高木・低木の科。約80属870種が知られ、マンゴー・カシューナッツ・ピスタチオなどを産する。日本にはウルシ・ハゼノキ・ヌルデ・カイノキなどが自生し、ウルシによる接触性皮膚炎が知られる。",
    characteristics: [
      "樹皮・葉にウルシオール等のフェノール性化合物を含み、接触性炎症を起こす種がある",
      "葉は羽状複葉または単葉",
      "花は小さく5数性、円錐花序",
      "果実は核果が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > ウルシ科",
    divergenceEra: "白亜紀後期（約8500万年前）",
    representativeGenera: [
      "ウルシ属（Toxicodendron）",
      "ハゼノキ属（Rhus）",
      "マンゴー属（Mangifera）",
      "カイノキ属（Pistacia）",
    ],
    evolutionEvents: [
      "ウルシオール等の防御化合物の進化",
      "食用果実（マンゴー・カシュー等）による動物散布の発達",
      "日本列島でのウルシの栽培化と漆文化の始まり",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウルシ科" },
    ],
    japaneseSpeciesCount: 65,
    review: { status: "ai_generated" },
  },

  // ── ミカン科 ──────────────────────────────────────────
  {
    id: "rutaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Citrus_sinensis_flowers.jpg",
    jaName: "ミカン科",
    enName: "Citrus family",
    scientificName: "Rutaceae Juss.",
    order: "ムクロジ目",
    overview:
      "熱帯〜温帯に分布する木本植物の大科。約160属2,100種が知られ、ミカン・レモン・グレープフルーツ・サンショウ・コクサギなどを含む。精油腺による芳香が科全体の特徴。日本には多数の自生種と栽培種がある。",
    characteristics: [
      "葉・樹皮に精油腺（半透明の点）をもち芳香がある",
      "葉は複葉または単葉（翼葉をもつことが多い）",
      "花は4〜5数性で白色が多い",
      "果実は液果（柑橘類のヘスペリジウム）または翼果・核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > ミカン科",
    divergenceEra: "白亜紀後期〜古第三紀（約8500万〜7000万年前）",
    representativeGenera: [
      "ミカン属（Citrus）",
      "サンショウ属（Zanthoxylum）",
      "コクサギ属（Orixa）",
      "キハダ属（Phellodendron）",
    ],
    evolutionEvents: [
      "精油産生能力の確立と昆虫防御・送粉者誘引への活用",
      "柑橘類（Citrus属）の東アジアでの起源と多様化",
      "日本固有種（コクサギ・キハダ等）の分化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミカン科" },
    ],
    japaneseSpeciesCount: 248,
    review: { status: "ai_generated" },
  },

  // ── ニガキ科 ──────────────────────────────────────────
  {
    id: "simaroubaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ailanthus_altissima.jpg",
    jaName: "ニガキ科",
    enName: "Quassia family",
    scientificName: "Simaroubaceae DC.",
    order: "ムクロジ目",
    overview:
      "熱帯〜温帯に分布する高木・低木の科。約20属100種が知られ、苦味成分（クアシノイド）を豊富に含む。日本にはニガキ（Picrasma quassioides）が自生し、樹皮が極めて苦い。ニワウルシ（シンジュ）は帰化植物として全国に広がっている。",
    characteristics: [
      "樹皮・材にクアシノイドという強い苦味成分を含む",
      "葉は羽状複葉が多い",
      "花は小さく4〜5数性",
      "果実は翼果または核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > ニガキ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    representativeGenera: [
      "ニガキ属（Picrasma）",
      "ニワウルシ属（Ailanthus）",
      "クアッシア属（Quassia）",
    ],
    evolutionEvents: [
      "クアシノイドという独自の苦味防御物質の進化",
      "ニワウルシ（Ailanthus altissima）の都市環境への適応と世界的拡散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ニガキ科" },
    ],
    japaneseSpeciesCount: 12,
    review: { status: "ai_generated" },
  },

  // ── センダン科 ──────────────────────────────────────────
  {
    id: "meliaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Melia_azedarach.jpg",
    jaName: "センダン科",
    enName: "Mahogany family",
    scientificName: "Meliaceae Juss.",
    order: "ムクロジ目",
    overview:
      "熱帯〜亜熱帯に分布する高木の科。約50属600種が知られ、マホガニー（Swietenia）など高級木材を産する。日本にはセンダン（Melia azedarach）が九州・沖縄に自生し、寺社境内などにも植栽される。",
    characteristics: [
      "葉は羽状複葉で互生",
      "花は5数性で雄しべは合生して筒状（雄しべ管）",
      "果実は液果・蒴果・核果など多様",
      "多くの種が昆虫忌避成分（トリテルペノイド）を含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > センダン科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    representativeGenera: [
      "センダン属（Melia）",
      "マホガニー属（Swietenia）",
      "チャンチン属（Toona）",
    ],
    evolutionEvents: [
      "合生雄しべ管（雄しべ管）の進化",
      "熱帯木材資源として人間による利用と移植の歴史",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/センダン科" },
    ],
    japaneseSpeciesCount: 93,
    review: { status: "ai_generated" },
  },

  // ── アオイ科 ──────────────────────────────────────────
  {
    id: "malvaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hibiscus_moscheutos_002.JPG",
    jaName: "アオイ科",
    enName: "Mallow family",
    scientificName: "Malvaceae Juss.",
    order: "アオイ目",
    overview:
      "APG IV の広義アオイ科は旧バオバブ科・シナノキ科・パンヤ科などを含む大きな科。約250属4,200種が知られ、ワタ・カカオ・ハイビスカス・タチアオイなどを含む。日本にはゼニアオイ・フヨウ・ムクゲなど多数の自生・帰化種がある。",
    characteristics: [
      "雄しべが多数合着して筒状の雄しべ束（単体雄蕊）を形成",
      "花弁は5枚、しばしば鮮やかな色",
      "葉は互生で掌状脈または掌状複葉が多い",
      "果実は蒴果・分果など多様",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > アオイ科",
    divergenceEra: "白亜紀後期（約8000万〜9000万年前）",
    representativeGenera: [
      "フヨウ属（Hibiscus）",
      "アオイ属（Malva）",
      "ワタ属（Gossypium）",
      "カカオ属（Theobroma）",
      "バオバブ属（Adansonia）",
    ],
    evolutionEvents: [
      "単体雄蕊（多数合生雄しべ）の進化",
      "ワタ（Gossypium）の栽培化と世界経済への影響",
      "カカオ（Theobroma cacao）の中米での利用と世界拡散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アオイ科" },
    ],
    japaneseSpeciesCount: 149,
    review: { status: "ai_generated" },
  },

  // ── ジンチョウゲ科 ──────────────────────────────────────────
  {
    id: "thymelaeaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Daphne_mezereum.jpg",
    jaName: "ジンチョウゲ科",
    enName: "Daphne family",
    scientificName: "Thymelaeaceae Juss.",
    order: "アオイ目",
    overview:
      "熱帯〜温帯に分布する木本・草本の科。約50属900種が知られ、日本にはジンチョウゲ（Daphne odora）・コショウノキ・ガンピ・ミツマタなどが自生または栽培される。樹皮が非常に強靱で、ミツマタの樹皮は和紙の原料となる。",
    characteristics: [
      "樹皮が強靱な繊維質で剥がれにくい",
      "花被片は4〜5枚の合生した筒状（花弁はなく萼が花弁状）",
      "花は芳香をもつ種が多い",
      "果実は核果または液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > ジンチョウゲ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "ジンチョウゲ属（Daphne）",
      "ミツマタ属（Edgeworthia）",
      "ガンピ属（Wikstroemia）",
    ],
    evolutionEvents: [
      "花弁が退化し萼が花弁状になる独自の花形の進化",
      "強靱な樹皮繊維の発達（和紙・繊維利用の文化的背景）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ジンチョウゲ科" },
    ],
    japaneseSpeciesCount: 90,
    review: { status: "ai_generated" },
  },

  // ── ベニノキ科 ──────────────────────────────────────────
  {
    id: "bixaceae",
    jaName: "ベニノキ科",
    enName: "Achiote family",
    scientificName: "Bixaceae Kunth",
    order: "アオイ目",
    overview:
      "熱帯アメリカ原産の低木・小高木の科。1属1種（Bixa orellana、ベニノキ）を中心とする小科。種子の赤い色素（アナトー）は食品着色料として世界的に利用される。日本では観賞用として沖縄・温暖地で栽培される。",
    characteristics: [
      "葉は卵形で互生",
      "花は大きくピンク〜白色、5数性",
      "果実は刺のある球状蒴果で、赤い色素を含む種子を多数含む",
      "常緑低木〜小高木",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > ベニノキ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "ベニノキ属（Bixa）",
    ],
    evolutionEvents: [
      "アナトー（ビキシン）という赤色カロテノイド色素産生能力の進化",
      "中南米先住民による食料・染料としての長期利用",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ベニノキ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── ハンニチバナ科 ──────────────────────────────────────────
  {
    id: "cistaceae",
    jaName: "ハンニチバナ科",
    enName: "Rock-rose family",
    scientificName: "Cistaceae Juss.",
    order: "アオイ目",
    overview:
      "地中海沿岸〜西アジアに多く分布する低木・草本の科。約8属200種が知られ、日本では帰化植物または観賞植物として一部が栽培・逸出している。花は短命で1日（または午前中）のみ咲く「半日花」が名前の由来。",
    characteristics: [
      "花は5数性で花弁が1〜2日で落ちる（短命花）",
      "花弁はシワがよったように見える",
      "葉は対生または互生で、腺毛・星状毛を持つことが多い",
      "低木または多年草",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > ハンニチバナ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "ハンニチバナ属（Cistus）",
      "ヘリアンテムム属（Helianthemum）",
    ],
    evolutionEvents: [
      "地中海性気候（夏季乾燥）への耐乾適応",
      "短命花という送粉戦略の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハンニチバナ科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── フタバガキ科 ──────────────────────────────────────────
  {
    id: "dipterocarpaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Shorea_robusta.jpg",
    jaName: "フタバガキ科",
    enName: "Dipterocarp family",
    scientificName: "Dipterocarpaceae Blume",
    order: "アオイ目",
    overview:
      "東南アジア熱帯雨林の優占樹種として知られる巨大な高木の科。約17属695種が知られ、東南アジアの熱帯雨林の主要構成要素。果実に2枚の翼（萼片が翼状に発達）をもつことが名前の由来。熱帯木材（ラワン材など）の主要供給源。",
    characteristics: [
      "大高木で、高さ40〜80mに達する種もある",
      "果実に2〜5枚の翼状萼片をもち、回転しながら落下する",
      "葉は単葉で革質、互生",
      "マスティング（一斉開花・結実）という現象を示す",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > フタバガキ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "フタバガキ属（Dipterocarpus）",
      "ショレア属（Shorea）",
      "ドリオバラノプス属（Dryobalanops）",
    ],
    evolutionEvents: [
      "翼状萼片による回転散布の進化",
      "一斉開花・結実（マスティング）による種子捕食者飽和戦略",
      "東南アジア熱帯雨林への特化と優占",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フタバガキ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── ノウゼンハレン科 ──────────────────────────────────────────
  {
    id: "tropaeolaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tropaeolum_majus.jpg",
    jaName: "ノウゼンハレン科",
    enName: "Nasturtium family",
    scientificName: "Tropaeolaceae Juss. ex DC.",
    order: "アブラナ目",
    overview:
      "南米アンデス原産の草本の科。1属（Tropaeolum）約90種からなる。ナスタチウム（金蓮花、Tropaeolum majus）は観賞用・食用として世界中で広く栽培され、日本でも園芸植物として普及している。",
    characteristics: [
      "葉は円形の盾状葉で、長い葉柄をもつ",
      "花は左右相称、花弁5枚、後方に距（蜜腺管）をもつ",
      "花・葉は食用可能でピリッとした辛味がある（イソチオシアン酸塩）",
      "茎は多肉質でつる性または直立",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > ノウゼンハレン科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "ノウゼンハレン属（Tropaeolum）",
    ],
    evolutionEvents: [
      "アブラナ目内でのグルコシノレート（辛味成分）の収斂進化",
      "花の距によるハチドリとの共進化（アンデス高地）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ノウゼンハレン科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── ワサビノキ科 ──────────────────────────────────────────
  {
    id: "moringaceae",
    jaName: "ワサビノキ科",
    enName: "Moringa family",
    scientificName: "Moringaceae Martinov",
    order: "アブラナ目",
    overview:
      "アフリカ・アラビア・インド原産の木本植物の科。1属（Moringa）13種からなる単型に近い科。モリンガ（Moringa oleifera）は「奇跡の木」と呼ばれ、葉・種子・根などが食用・薬用・水質浄化に利用される。日本でも沖縄・温暖地で栽培される。",
    characteristics: [
      "落葉または半落葉高木、根は大根状に肥大する種もある",
      "葉は2〜3回羽状複葉",
      "花は5数性で左右相称、白色〜淡黄色",
      "果実は長い莢状の蒴果（長さ30〜100cm）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > ワサビノキ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "モリンガ属（Moringa）",
    ],
    evolutionEvents: [
      "乾燥地への適応（根の肥大・落葉性）",
      "栄養価の高い葉と食用油を含む種子の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ワサビノキ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── パパイア科 ──────────────────────────────────────────
  {
    id: "caricaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Carica_papaya_flowers.jpg",
    jaName: "パパイア科",
    enName: "Papaya family",
    scientificName: "Caricaceae Dumort.",
    order: "アブラナ目",
    overview:
      "熱帯アメリカおよびアフリカに分布する木本植物の科。約6属34種が知られ、パパイア（Carica papaya）は熱帯全域で栽培される重要果樹。日本では沖縄・小笠原で栽培・野生化し、暖地の観賞植物としても用いられる。",
    characteristics: [
      "茎は木質だが中空で、自立する樹木状の形態",
      "葉は大型で掌状に深裂し、頂部に集まる（ヤシ状外観）",
      "雌雄異株または雑性株",
      "乳液（パパイン酵素）を含む",
      "果実は大型の液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > パパイア科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "パパイア属（Carica）",
      "ヤスミナム属類縁（Vasconcellea）",
    ],
    evolutionEvents: [
      "タンパク質分解酵素（パパイン）の進化による草食動物防御",
      "中南米起源から熱帯全域への人間による拡散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/パパイア科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── モクセイソウ科 ──────────────────────────────────────────
  {
    id: "resedaceae",
    jaName: "モクセイソウ科",
    enName: "Mignonette family",
    scientificName: "Resedaceae Martinov",
    order: "アブラナ目",
    overview:
      "地中海沿岸〜西アジアを中心に分布する草本の科。約6属75種が知られ、日本では帰化植物のモクセイソウ（Reseda luteola）・キバナモクセイソウ（R. lutea）が確認されている。花は芳香をもつ種が多い。",
    characteristics: [
      "葉は互生で全縁または羽状裂",
      "花は左右相称、花弁は4〜8枚で縁が深裂する",
      "雄しべは多数",
      "果実は蒴果で上部が開口する",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > モクセイソウ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "モクセイソウ属（Reseda）",
      "アストロカルプス属（Astrocarpus）",
    ],
    evolutionEvents: [
      "地中海性気候への乾燥適応",
      "グルコシノレートを含むアブラナ目内での系統的位置の確認",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/モクセイソウ科" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── フウチョウソウ科 ──────────────────────────────────────────
  {
    id: "capparaceae",
    jaName: "フウチョウソウ科",
    enName: "Caper family",
    scientificName: "Capparaceae Juss.",
    order: "アブラナ目",
    overview:
      "熱帯〜亜熱帯に分布する木本・草本の科。約33属700種が知られ、ケッパー（Capparis spinosa の花蕾）は食用として利用される。日本には琉球列島にフウチョウソウ属の数種が自生する。",
    characteristics: [
      "花は4数性で花弁・萼片は各4枚",
      "雄しべは多数で花糸が長く目立つ（フウチョウ様）",
      "葉は互生で単葉または複葉",
      "果実は蒴果または液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > フウチョウソウ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "フウチョウソウ属（Cleome）",
      "ケッパー属（Capparis）",
    ],
    evolutionEvents: [
      "グルコシノレート系の防御物質の進化（アブラナ目共通）",
      "多数の長い雄しべを用いた送粉者誘引の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フウチョウソウ科" },
    ],
    japaneseSpeciesCount: 31,
    review: { status: "ai_generated" },
  },

  // ── ツチトリモチ科 ──────────────────────────────────────────
  {
    id: "balanophoraceae",
    jaName: "ツチトリモチ科",
    enName: "Balanophora family",
    scientificName: "Balanophoraceae Rich.",
    order: "ビャクダン目",
    overview:
      "熱帯〜亜熱帯に分布する全寄生植物の科。約17属44種が知られ、葉緑素をもたず宿主植物の根に寄生して生育する。日本にはツチトリモチ（Balanophora japonica）などが九州・四国・沖縄に分布する。",
    characteristics: [
      "葉緑素をもたない全寄生植物で、光合成能力なし",
      "花序は棒状〜球状の肉質塊状、赤〜橙色",
      "花は極めて退化・縮小",
      "宿主の根に接続する特殊な吸根（ハウストリウム）をもつ",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > ツチトリモチ科",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万〜6000万年前）",
    representativeGenera: [
      "ツチトリモチ属（Balanophora）",
      "ヘルシア属（Hachettea）",
    ],
    evolutionEvents: [
      "光合成能力の完全喪失と全寄生性への移行",
      "花器官の極端な退化と縮小",
      "APG IVでビャクダン目に再配置された分類学的転換",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツチトリモチ科" },
    ],
    japaneseSpeciesCount: 16,
    review: { status: "ai_generated" },
  },

  // ── オラクス科 ──────────────────────────────────────────
  {
    id: "olacaceae",
    jaName: "オラクス科",
    enName: "Olax family",
    scientificName: "Olacaceae R.Br.",
    order: "ビャクダン目",
    overview:
      "熱帯地域に広く分布する木本植物の科（APG IVにより一部分割・再編）。約30属180種が知られ、多くが半寄生性または全寄生性の木本植物。日本には琉球列島にオラクス属の1種が分布する。",
    characteristics: [
      "多くが宿主根に寄生する半寄生〜全寄生性",
      "葉は互生で単葉、革質",
      "花は小さく3〜5数性",
      "果実は核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > オラクス科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    representativeGenera: [
      "オラクス属（Olax）",
      "エクサカラ属（Ximenia）",
    ],
    evolutionEvents: [
      "ビャクダン目の根寄生性系統としての分岐",
      "APG IVによる分類再編（旧広義オラクス科の分割）",
    ],
    externalLinks: [
      { label: "Wikipedia（英語）", url: "https://en.wikipedia.org/wiki/Olacaceae" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── オピリア科 ──────────────────────────────────────────
  {
    id: "opiliaceae",
    jaName: "オピリア科",
    enName: "Opilia family",
    scientificName: "Opiliaceae Valeton",
    order: "ビャクダン目",
    overview:
      "旧熱帯（アフリカ・アジア・オーストラリア）に分布する木本植物の小科。約10属30種が知られ、多くが根寄生性。日本では固有の種は確認されていないが、南西諸島に近縁種が分布する可能性がある。",
    characteristics: [
      "常緑低木〜高木、根寄生性",
      "葉は単葉で互生",
      "花は小さく4〜5数性",
      "果実は核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > オピリア科",
    divergenceEra: "白亜紀後期〜古第三紀（約7500万年前）",
    representativeGenera: [
      "オピリア属（Opilia）",
      "チャウノキア属（Champereia）",
    ],
    evolutionEvents: [
      "ビャクダン目内での根寄生性系統として分岐",
      "旧熱帯への分散と各地域での種分化",
    ],
    externalLinks: [
      { label: "Wikipedia（英語）", url: "https://en.wikipedia.org/wiki/Opiliaceae" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ビャクダン科 ──────────────────────────────────────────
  {
    id: "santalaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Santalum_album.jpg",
    jaName: "ビャクダン科",
    enName: "Sandalwood family",
    scientificName: "Santalaceae R.Br.",
    order: "ビャクダン目",
    overview:
      "世界の熱帯〜温帯に分布する半寄生〜全寄生植物の科（APG IVで旧ヤドリギ科・ツチトリモチ科の一部を含む広義の科）。約44属990種が知られ、ビャクダン（Santalum album）の芳香性木材は珍重される。日本にはシオガマギク属類縁やヒナノキンチャク等が含まれる。",
    characteristics: [
      "多くが根寄生または茎寄生の半寄生植物",
      "葉は単葉で互生または対生（退化する種もある）",
      "花は小さく3〜5数性",
      "果実は核果・液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > ビャクダン科",
    divergenceEra: "白亜紀後期（約8500万年前）",
    representativeGenera: [
      "ビャクダン属（Santalum）",
      "カスタ属（Korthalsella）",
      "コマ属（Comandra）",
      "ヒナノキンチャク属（Thesium）",
    ],
    evolutionEvents: [
      "根寄生性の進化と宿主依存性の確立",
      "ビャクダン（S. album）の芳香性心材の進化と人間による利用",
      "APG IVでの分類再編による科の大幅な拡張",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ビャクダン科" },
    ],
    japaneseSpeciesCount: 10,
    review: { status: "ai_generated" },
  },

  // ── ヤドリギ科 ──────────────────────────────────────────
  {
    id: "loranthaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Viscum_album.jpg",
    jaName: "ヤドリギ科",
    enName: "Mistletoe family",
    scientificName: "Loranthaceae Juss.",
    order: "ビャクダン目",
    overview:
      "世界の熱帯〜温帯に分布する茎寄生半寄生植物の科。約75属950種が知られ、宿主植物の茎や幹に寄生して生育する。日本にはオオバヤドリギ・ホザキヤドリギなど数種が自生し、冬の落葉樹林で宿主の枝に球状の緑のかたまりを形成する。",
    characteristics: [
      "宿主植物の茎・枝に寄生する常緑半寄生植物",
      "葉は対生で革質、光合成能力を保持（半寄生）",
      "花は3〜6数性で小さい",
      "果実は液果で粘液質、鳥による種子散布",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > ヤドリギ科",
    divergenceEra: "白亜紀後期（約8500万年前）",
    representativeGenera: [
      "ヤドリギ属（Viscum）",
      "オオバヤドリギ属（Taxillus）",
      "ホザキヤドリギ属（Loranthus）",
    ],
    evolutionEvents: [
      "茎寄生性の獲得と宿主組織への侵入機構の発達",
      "鳥による種子散布と粘液質果実の共進化",
      "緑色半寄生として光合成能力を維持しながらの寄生戦略",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤドリギ科" },
    ],
    japaneseSpeciesCount: 76,
    review: { status: "ai_generated" },
  },

  // ── ギョリュウ科 ──────────────────────────────────────────
  {
    id: "tamaricaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tamarix_ramosissima.jpg",
    jaName: "ギョリュウ科",
    enName: "Tamarisk family",
    scientificName: "Tamaricaceae Link",
    order: "ナデシコ目",
    overview:
      "地中海沿岸〜中央アジア・東アジアの乾燥地・塩性土地に分布する低木・小高木の科。約4属78種が知られ、ギョリュウ（Tamarix chinensis）は中国原産で日本にも植栽・帰化している。塩類土壌に強い耐塩性植物。",
    characteristics: [
      "葉は非常に小さく鱗片状、塩腺から余分な塩を排出する",
      "花は小さく4〜5数性、ピンク〜白色の穂状花序",
      "細い羽毛状の小枝が特徴的",
      "塩性地・砂地・河原に適応",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ギョリュウ科",
    divergenceEra: "古第三紀〜新第三紀（約4000万年前）",
    representativeGenera: [
      "ギョリュウ属（Tamarix）",
      "ミリカリア属（Myricaria）",
    ],
    evolutionEvents: [
      "塩腺による塩類排出機構の進化（耐塩性の獲得）",
      "乾燥・塩性土壌への特殊適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ギョリュウ科" },
    ],
    japaneseSpeciesCount: 6,
    review: { status: "ai_generated" },
  },

  // ── イソマツ科 ──────────────────────────────────────────
  {
    id: "plumbaginaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Limonium_vulgare.jpg",
    jaName: "イソマツ科",
    enName: "Leadwort family",
    scientificName: "Plumbaginaceae Juss.",
    order: "ナデシコ目",
    overview:
      "世界の海岸・塩性湿地・乾燥地に広く分布する草本・低木の科。約30属800種が知られ、日本にはイソマツ（Limonium tetragonum）・ハマサジなどが海岸の塩性湿地に自生する。スターチス（リモニウム）は切り花として広く利用される。",
    characteristics: [
      "葉は根元から叢生（ロゼット状）することが多い",
      "花は5数性で、萼は膜質で残存する（かくれ花弁様）",
      "花序は穂状・散房状で、乾燥しても形を保つ",
      "塩腺をもち、過剰な塩を葉から排出する種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > イソマツ科",
    divergenceEra: "古第三紀〜新第三紀（約4000万〜3000万年前）",
    representativeGenera: [
      "イソマツ属（Limonium）",
      "ハマサジ属（Limonium）",
      "イソコクリュウ属（Plumbago）",
      "アルメリア属（Armeria）",
    ],
    evolutionEvents: [
      "塩腺による塩類排出機構の進化と沿岸塩性環境への適応",
      "乾燥しても色・形を保つ花序（ドライフラワー性）の進化",
      "海岸線に沿った分布と島嶼間の種分化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イソマツ科" },
    ],
    japaneseSpeciesCount: 34,
    review: { status: "ai_generated" },
  },

  // ── モウセンゴケ科 ──────────────────────────────────────
  {
    id: "droseraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Drosera_rotundifolia,_Japan_3.JPG",
    jaName: "モウセンゴケ科",
    enName: "Sundew family",
    scientificName: "Droseraceae Salisb.",
    order: "ナデシコ目",
    overview:
      "食虫植物を含む小科で、世界に約200種が知られる。粘着性の腺毛や捕虫葉によって昆虫を捕食し、窒素の乏しい湿地環境に適応している。日本にはモウセンゴケ・コモウセンゴケ・ナガバノモウセンゴケなどが自生する。",
    characteristics: [
      "腺毛（粘液を分泌する毛）で昆虫を捕獲・消化する",
      "葉は互生または根生し、丸みを帯びた形が多い",
      "花は5数性で白色〜淡紅色、総状または集散花序",
      "果実は蒴果（さくか）で多数の小さな種子を含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > モウセンゴケ科",
    divergenceEra: "白亜紀後期（約9000万年前）",
    representativeGenera: [
      "モウセンゴケ属（Drosera）",
      "ディオネア属（Dionaea）",
      "アルドロバンダ属（Aldrovanda）",
    ],
    evolutionEvents: [
      "食虫性（粘着腺毛による昆虫捕獲）の獲得",
      "貧栄養湿地環境への適応",
      "ハエトリグサ（Dionaea）の瞬時閉合トラップへの特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/モウセンゴケ科" },
    ],
    japaneseSpeciesCount: 26,
    review: { status: "ai_generated" },
  },

  // ── ウツボカズラ科 ──────────────────────────────────────
  {
    id: "nepenthaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Nepenthes_rajah.jpg",
    jaName: "ウツボカズラ科",
    enName: "Tropical pitcher plant family",
    scientificName: "Nepenthaceae Dumort.",
    order: "ナデシコ目",
    overview:
      "熱帯アジアを中心に分布する食虫植物の科で、Nepenthes属1属約170種からなる。筒状の捕虫袋（落とし穴型トラップ）が葉の先端に発達し、昆虫などを消化液で溶かして吸収する。日本では沖縄・小笠原に逸出・栽培例がある。",
    characteristics: [
      "葉の先端が変形した壺状の捕虫袋（ネペンテス壺）をもつ",
      "捕虫袋の内部には消化液が分泌される",
      "雌雄異株で、花は小さく花弁がない",
      "つる性木本または半木本で熱帯林に生育",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ウツボカズラ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "ウツボカズラ属（Nepenthes）",
    ],
    evolutionEvents: [
      "葉先端が変形した落とし穴型捕虫袋の独自進化",
      "消化酵素・細菌共生による消化機構の確立",
      "熱帯雨林の貧栄養土壌への適応放散",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウツボカズラ科" },
    ],
    japaneseSpeciesCount: 15,
    review: { status: "ai_generated" },
  },

  // ── アンシストロクラダス科 ──────────────────────────────────────
  {
    id: "ancistrocladaceae",
    jaName: "アンシストロクラダス科",
    enName: "Ancistrocladus family",
    scientificName: "Ancistrocladaceae Planch. ex Walp.",
    order: "ナデシコ目",
    overview:
      "熱帯アジアとアフリカの林縁に分布するつる性木本の単型科。Ancistrocladus属1属約20種からなる。かぎ爪状の枝で他の植物に絡みつく習性をもち、ナフタレン誘導体を含む特異な二次代謝産物で知られる。日本への自生はない。",
    characteristics: [
      "枝先がかぎ爪状に変形し、他植物に絡みつく",
      "葉は単葉・互生、腺点をもつことがある",
      "花は5数性で小さく、白色〜淡紅色",
      "果実は翼をもつ堅果で風散布される",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > アンシストロクラダス科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "アンシストロクラダス属（Ancistrocladus）",
    ],
    evolutionEvents: [
      "かぎ爪状枝による他感的攀縁形質の獲得",
      "ナフタレン系二次代謝産物（アンシストロクラジン類）の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アンシストロクラダス科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ヒユ科 ──────────────────────────────────────────
  {
    id: "amaranthaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Amaranthus_cruentus.jpg",
    jaName: "ヒユ科",
    enName: "Amaranth family",
    scientificName: "Amaranthaceae Juss.",
    order: "ナデシコ目",
    overview:
      "APG IVではアカザ科（Chenopodiaceae）を統合した拡大科で、約2,500種を含む。ホウレンソウ・フダンソウ・テンサイなど食用植物や、ヒユ・アカザなど路傍の雑草が属する。塩類環境・乾燥地への適応に優れ、C4光合成を獲得した系統も多い。",
    characteristics: [
      "花は小さく花弁がなく（または退化）、苞片・萼片が目立つ",
      "果実は胞果（ほうか）または瘦果で、苞に包まれることが多い",
      "多くの種がC4光合成または塩生植物の生理を示す",
      "茎・葉に結晶体（シュウ酸カルシウム）をもつ種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ヒユ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜6500万年前）",
    representativeGenera: [
      "ヒユ属（Amaranthus）",
      "アカザ属（Chenopodium）",
      "ホウレンソウ属（Spinacia）",
      "ハマアカザ属（Atriplex）",
      "オカヒジキ属（Salsola）",
    ],
    evolutionEvents: [
      "アカザ科との統合によるナデシコ目内での大型放散",
      "C4光合成の複数回独立進化による乾燥・高温環境への適応",
      "塩類腺・塩嚢細胞の発達による塩生環境への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒユ科" },
    ],
    japaneseSpeciesCount: 140,
    review: { status: "ai_generated" },
  },

  // ── ツルナ科 ──────────────────────────────────────────
  {
    id: "aizoaceae",
    jaName: "ツルナ科",
    enName: "Fig-marigold family",
    scientificName: "Aizoaceae Martinov",
    order: "ナデシコ目",
    overview:
      "南アフリカを中心に約1,800種が分布する科で、多肉質の葉をもつ種が多い。日本ではツルナ（浜菜）が海岸に自生し、ハマミズナ・マツバギクなどが栽培または帰化している。石質・砂質の乾燥環境に適応した「生きた石（リトープス）」でも知られる。",
    characteristics: [
      "葉は多肉質で光沢をもつことが多い",
      "花弁状の多数の萼片または雄しべの変形花糸が目立つ",
      "果実は液果または蒴果で、湿潤時に開裂する水散布型も多い",
      "CAM光合成を行う種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ツルナ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "ツルナ属（Tetragonia）",
      "リトープス属（Lithops）",
      "マツバギク属（Carpobrotus）",
      "メセンブリアンテムム属（Mesembryanthemum）",
    ],
    evolutionEvents: [
      "CAM光合成の獲得による極度の乾燥環境への適応",
      "葉の多肉化による水分貯蔵機能の発達",
      "南アフリカのカルー地域での爆発的多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツルナ科" },
    ],
    japaneseSpeciesCount: 23,
    review: { status: "ai_generated" },
  },

  // ── ヤマゴボウ科 ──────────────────────────────────────────
  {
    id: "phytolaccaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Phytolacca_americana.jpg",
    jaName: "ヤマゴボウ科",
    enName: "Pokeweed family",
    scientificName: "Phytolaccaceae R.Br.",
    order: "ナデシコ目",
    overview:
      "主に熱帯・亜熱帯アメリカに分布する科で、約30種が知られる。日本にはヨウシュヤマゴボウ（北米原産）が帰化し、都市郊外で旺盛に繁茂する。液果は赤紫色の色素（ベタシアニン）を含み、染色や民間薬に用いられてきた。",
    characteristics: [
      "大型の多年草または木本",
      "葉は単葉・互生で大きい",
      "花は小さく花弁がなく、萼片5枚が花弁状",
      "果実は液果で鮮やかな赤紫色に熟す",
      "根・葉・果実に有毒成分（フィトラッカトキシン）を含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ヤマゴボウ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "ヤマゴボウ属（Phytolacca）",
      "ピソニア属（Pisonia）",
      "リヴィナ属（Rivina）",
    ],
    evolutionEvents: [
      "ベタレイン色素（ベタシアニン・ベタキサンチン）の進化",
      "液果による鳥類散布への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤマゴボウ科" },
    ],
    japaneseSpeciesCount: 12,
    review: { status: "ai_generated" },
  },

  // ── オシロイバナ科 ──────────────────────────────────────────
  {
    id: "nyctaginaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bougainvillea_glabra.jpg",
    jaName: "オシロイバナ科",
    enName: "Four-o'clock family",
    scientificName: "Nyctaginaceae Juss.",
    order: "ナデシコ目",
    overview:
      "熱帯・亜熱帯を中心に約400種が分布する科。日本ではオシロイバナ（南米原産）が広く帰化・栽培されている。花弁がなく、花弁状の萼が「花」のように見える点が特徴。ブーゲンビレアも本科に属する観賞植物として有名。",
    characteristics: [
      "花弁がなく、花弁状に発達した萼が目立つ",
      "苞が花弁状に変形することがある（ブーゲンビレアなど）",
      "果実は萼筒に包まれた瘦果",
      "葉は単葉・対生または互生",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > オシロイバナ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "オシロイバナ属（Mirabilis）",
      "ブーゲンビレア属（Bougainvillea）",
      "ピソニア属（Pisonia）",
    ],
    evolutionEvents: [
      "花弁の消失と萼の花弁状化による花の形態転換",
      "苞の花弁状化（ブーゲンビレア）による送粉者誘引の革新",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/オシロイバナ科" },
    ],
    japaneseSpeciesCount: 32,
    review: { status: "ai_generated" },
  },

  // ── ザクロソウ科 ──────────────────────────────────────────
  {
    id: "molluginaceae",
    jaName: "ザクロソウ科",
    enName: "Carpetweed family",
    scientificName: "Molluginaceae Bartl.",
    order: "ナデシコ目",
    overview:
      "熱帯・亜熱帯の乾燥地・砂質地に分布する小科で、約120種が知られる。日本にはザクロソウ（アジア原産帰化種）が道端・畑地に自生する。小型の草本が多く、花は小さく目立たない。",
    characteristics: [
      "小型の草本で茎は匍匐または直立",
      "葉は単葉・輪生状または対生",
      "花弁がなく、萼片5枚が花弁状",
      "果実は蒴果で多数の種子を含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ザクロソウ科",
    divergenceEra: "古第三紀（約4500万年前）",
    representativeGenera: [
      "ザクロソウ属（Mollugo）",
      "グリナス属（Glinus）",
    ],
    evolutionEvents: [
      "貧栄養・乾燥砂地環境への適応",
      "花弁の消失と小型化による花の簡略化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ザクロソウ科" },
    ],
    japaneseSpeciesCount: 9,
    review: { status: "ai_generated" },
  },

  // ── ツルムラサキ科 ──────────────────────────────────────────
  {
    id: "basellaceae",
    jaName: "ツルムラサキ科",
    enName: "Madeira-vine family",
    scientificName: "Basellaceae Raf.",
    order: "ナデシコ目",
    overview:
      "熱帯アメリカ原産のつる性多肉草本の小科で、約20種が知られる。日本ではツルムラサキ（アジア原産）が野菜として広く栽培され、温暖地で帰化もしている。葉は多肉質でぬめりがあり、食用になる。",
    characteristics: [
      "つる性の多肉草本",
      "葉は単葉・互生で多肉質・光沢がある",
      "花は小さく萼片5枚、花弁はない",
      "果実は多肉質の萼に包まれた1種子果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ツルムラサキ科",
    divergenceEra: "古第三紀（約4500万年前）",
    representativeGenera: [
      "ツルムラサキ属（Basella）",
      "アンレデラ属（Anredera）",
      "ウルバニア属（Ullucus）",
    ],
    evolutionEvents: [
      "多肉質茎・葉への変化による水分貯蔵能の獲得",
      "つる性習性による林縁攀縁生活への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツルムラサキ科" },
    ],
    japaneseSpeciesCount: 6,
    review: { status: "ai_generated" },
  },

  // ── スベリヒユ科 ──────────────────────────────────────────
  {
    id: "portulacaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Portulaca_oleracea.jpg",
    jaName: "スベリヒユ科",
    enName: "Purslane family",
    scientificName: "Portulacaceae Juss.",
    order: "ナデシコ目",
    overview:
      "世界中の温帯〜熱帯に分布する小科で、APG IVでは旧スベリヒユ科の多くがモンティニア科などに再編されたが、Portulaca属は本科に残された。日本ではスベリヒユが道端・畑地に広く生育し、食用・民間薬としても使われてきた。",
    characteristics: [
      "多肉質の草本（C4光合成またはCAM）",
      "葉は互生〜対生で多肉質",
      "花弁は2枚（萼片2枚との区別が必要）",
      "果実は蓋裂する蒴果",
      "種子には仮種皮（アリルスト）をもつものがある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > スベリヒユ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "スベリヒユ属（Portulaca）",
    ],
    evolutionEvents: [
      "CAM光合成の獲得による極度の乾燥・高温環境への適応",
      "2枚花弁という独特の花形の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スベリヒユ科" },
    ],
    japaneseSpeciesCount: 34,
    review: { status: "ai_generated" },
  },

  // ── サボテン科 ──────────────────────────────────────────
  {
    id: "cactaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Opuntia_ficus-indica.JPG",
    jaName: "サボテン科",
    enName: "Cactus family",
    scientificName: "Cactaceae Juss.",
    order: "ナデシコ目",
    overview:
      "新大陸原産の多肉植物科で、約1,750種が知られる。棘座（アレオール）と呼ばれる特殊な器官をもち、葉は棘に変形している。CAM光合成によって乾燥砂漠に適応し、多肉質の茎に水分を蓄える。日本には自生種はなく、観賞用に広く栽培される。",
    characteristics: [
      "棘座（アレオール）という特殊な器官から棘・毛が生える",
      "葉は棘に退化し、茎が光合成を担う",
      "茎は多肉質で水を貯蔵する",
      "CAM光合成で夜間にCO2を固定",
      "花は両性花で多数の花弁・雄しべをもつ",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > サボテン科",
    divergenceEra: "古第三紀（約3500万年前）",
    representativeGenera: [
      "ウチワサボテン属（Opuntia）",
      "サボテン属（Cereus）",
      "エキノカクタス属（Echinocactus）",
      "マミラリア属（Mammillaria）",
    ],
    evolutionEvents: [
      "棘座（アレオール）の独自進化",
      "葉の棘への退化と茎の光合成器官への転換",
      "CAM光合成の高度化による砂漠適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サボテン科" },
    ],
    japaneseSpeciesCount: 48,
    review: { status: "ai_generated" },
  },

  // ── ロアサ科 ──────────────────────────────────────────
  {
    id: "loasaceae",
    jaName: "ロアサ科",
    enName: "Stickleaf family",
    scientificName: "Loasaceae Juss.",
    order: "ウリ目",
    overview:
      "主に南北アメリカの乾燥地・岩礫地に分布する科で、約265種が知られる。多くの種が鋭いかぎ爪状または刺状の毛をもち、衣服や動物に付着して種子を散布する。日本への自生はなく、一部が観賞用に栽培される。",
    characteristics: [
      "茎・葉に刺状またはかぎ爪状の粗毛が密生する",
      "花弁は5枚で白色〜黄色、雄しべは多数",
      "葉は単葉・互生または対生",
      "果実は蒴果で多数の種子を含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > ロアサ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "ロアサ属（Loasa）",
      "メンツェリア属（Mentzelia）",
      "ブラシア属（Blumenbachia）",
    ],
    evolutionEvents: [
      "かぎ爪状粗毛による動物付着散布への適応",
      "乾燥岩礫地への特殊化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ロアサ科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── ツリフネソウ科 ──────────────────────────────────────────
  {
    id: "balsaminaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Impatiens_noli-tangere.jpg",
    jaName: "ツリフネソウ科",
    enName: "Touch-me-not family",
    scientificName: "Balsaminaceae A.Rich.",
    order: "ツツジ目",
    overview:
      "主に熱帯アジア・アフリカに分布する科で、ツリフネソウ属（Impatiens）約1,000種と小型の単型属Hydrocera属からなる。日本にはツリフネソウ・キツリフネ・ハガクレツリフネが自生する。果実は成熟すると弾けて種子を飛ばす「爆発散布」が有名。",
    characteristics: [
      "花は左右相称で、萼片の1枚が距（きょ）に変形する",
      "果実は成熟時に急激に裂開して種子を弾き飛ばす",
      "茎は多汁質・半透明で折れやすい",
      "葉は単葉で鋸歯がある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ツリフネソウ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "ツリフネソウ属（Impatiens）",
      "ヒドロケラ属（Hydrocera）",
    ],
    evolutionEvents: [
      "萼片の距への変形による蜜誘導機構の発達",
      "弾性果皮による爆発的種子散布機構の獲得",
      "熱帯山岳環境での急速な種分化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツリフネソウ科" },
    ],
    japaneseSpeciesCount: 35,
    review: { status: "ai_generated" },
  },

  // ── ハナシノブ科 ──────────────────────────────────────────
  {
    id: "polemoniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Phlox_paniculata.jpg",
    jaName: "ハナシノブ科",
    enName: "Phlox family",
    scientificName: "Polemoniaceae Juss.",
    order: "ツツジ目",
    overview:
      "主に北米西部に分布する科で、約400種が知られる。日本には北海道と本州高山帯にハナシノブ（Polemonium）が自生し、希少種として知られる。フロックス・ヤコブのはしごなど観賞価値の高い植物を含む。",
    characteristics: [
      "花冠は合弁で筒状〜漏斗状、5裂する",
      "雄しべ5本が花冠筒に付着する",
      "葉は羽状複葉または単葉で互生",
      "果実は蒴果で3室",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ハナシノブ科",
    divergenceEra: "古第三紀（約4000万年前）",
    representativeGenera: [
      "ハナシノブ属（Polemonium）",
      "フロックス属（Phlox）",
      "ギリア属（Gilia）",
    ],
    evolutionEvents: [
      "合弁花冠の筒状化による特定送粉者（蝶・蜂・ハチドリ）への適応",
      "北米西部乾燥地での爆発的多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハナシノブ科" },
    ],
    japaneseSpeciesCount: 63,
    review: { status: "ai_generated" },
  },

  // ── サルノコシカケノキ科 ──────────────────────────────────────────
  {
    id: "lecythidaceae",
    jaName: "サルノコシカケノキ科",
    enName: "Brazil nut family",
    scientificName: "Lecythidaceae A.Rich.",
    order: "ツツジ目",
    overview:
      "熱帯アメリカを中心に分布する大型木本の科で、約350種が知られる。ブラジルナッツの採れるBertholletia excelsa、パラダイスナッツなどが属する。日本への自生はない。花は大きく美しく、蜂による送粉に特化した複雑な構造をもつ。",
    characteristics: [
      "大型の熱帯常緑高木",
      "花は大型で両性、萼片・花弁は4〜6枚",
      "雄しべは多数で片側に偏り、フード状の構造をもつ",
      "果実は大型の木質蒴果または液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > サルノコシカケノキ科",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    representativeGenera: [
      "レキティス属（Lecythis）",
      "ベルトレティア属（Bertholletia）",
      "ガスタビア属（Gustavia）",
    ],
    evolutionEvents: [
      "雄しべのフード状構造による蜂媒授粉の特殊化",
      "大型木質果実による哺乳類散布への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サルノコシカケノキ科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── アカテツ科 ──────────────────────────────────────────
  {
    id: "sapotaceae",
    jaName: "アカテツ科",
    enName: "Sapodilla family",
    scientificName: "Sapotaceae Juss.",
    order: "ツツジ目",
    overview:
      "熱帯・亜熱帯に分布する木本の科で、約1,100種が知られる。乳液（ラテックス）を含む点が特徴で、チクル（チューインガムの原料）やグタペルカを産する種がある。日本では沖縄・小笠原にアカテツ・ヤマアカテツ・タマシダが自生する。",
    characteristics: [
      "切断すると乳白色の乳液が出る",
      "葉は単葉・互生で革質・光沢がある",
      "花は小さく合弁花冠をもち、萼・花弁・雄しべは同数",
      "果実は液果で大型になることが多く、甘味がある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > アカテツ科",
    divergenceEra: "古第三紀（約6000万年前）",
    representativeGenera: [
      "アカテツ属（Planchonella）",
      "マニルカラ属（Manilkara）",
      "クリソフィルム属（Chrysophyllum）",
      "パラキウム属（Palaquium）",
    ],
    evolutionEvents: [
      "乳液（ラテックス）産生機構の確立",
      "大型甘果による大型哺乳類・鳥類への散布適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アカテツ科" },
    ],
    japaneseSpeciesCount: 21,
    review: { status: "ai_generated" },
  },

  // ── カキノキ科 ──────────────────────────────────────────
  {
    id: "ebenaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Diospyros_kaki_fruit.jpg",
    jaName: "カキノキ科",
    enName: "Ebony family",
    scientificName: "Ebenaceae Gürke",
    order: "ツツジ目",
    overview:
      "熱帯〜亜熱帯に分布する木本の科で、約770種が知られる。日本ではカキノキ・マメガキ・リュウキュウマメガキが自生または栽培され、カキは重要な果樹。エボニー（黒檀）の銘木材はDiospyros属から得られ、高級家具・楽器に珍重される。",
    characteristics: [
      "葉は単葉・互生で全縁、革質",
      "花は雌雄異株（または同株）、合弁花冠で壺状〜鐘状",
      "萼・花冠は3〜7裂で宿存性",
      "果実は液果（ベリー型）でタンニンを多く含む（渋柿）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > カキノキ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "カキノキ属（Diospyros）",
      "ロイアルコア属（Royena）",
    ],
    evolutionEvents: [
      "タンニン蓄積による果実防衛機構の発達と成熟後の甘化",
      "熱帯高木としての心材暗色化（黒檀）の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カキノキ科" },
    ],
    japaneseSpeciesCount: 29,
    review: { status: "ai_generated" },
  },

  // ── サクラソウ科 ──────────────────────────────────────────
  {
    id: "primulaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Primula_veris_001.JPG",
    jaName: "サクラソウ科",
    enName: "Primrose family",
    scientificName: "Primulaceae Batsch ex Borkh.",
    order: "ツツジ目",
    overview:
      "APG IVではヤブコウジ科・ハイノキ科の一部などを統合した拡大科。サクラソウ・クリンソウ・コイワカガミ・ハコベホウズキ・オカトラノオなど多様な草本を含む。日本にはサクラソウ（絶滅危惧）をはじめ多くの種が自生する。",
    characteristics: [
      "花冠は合弁で5裂、雄しべは花冠裂片と対生する（対生雄しべが特徴）",
      "葉は互生・対生・輪生、根生葉をもつ種も多い",
      "果実は蒴果で中軸胎座または特立中央胎座",
      "乳液をもつ種（ヤブコウジ科旧来種）がある",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > サクラソウ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "サクラソウ属（Primula）",
      "オカトラノオ属（Lysimachia）",
      "コイワカガミ属（Shortia）",
      "ミレット属（Soldanella）",
    ],
    evolutionEvents: [
      "雄しべの花冠裂片との対生配置という独特の構造の確立",
      "高山・湿地環境への多様な適応放散",
      "APG IVによるヤブコウジ科・リシア科等との統合による科の大型化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サクラソウ科" },
    ],
    japaneseSpeciesCount: 234,
    review: { status: "ai_generated" },
  },

  // ── ハイノキ科 ──────────────────────────────────────────
  {
    id: "symplocaceae",
    jaName: "ハイノキ科",
    enName: "Sweetleaf family",
    scientificName: "Symplocaceae Desf.",
    order: "ツツジ目",
    overview:
      "アジア・南北アメリカの熱帯〜温帯に分布する木本の科で、Symplocos属1属約320種からなる。日本ではハイノキ・サワフタギ・クロバイ・タンナサワフタギなどが自生する。葉にアルミニウムを高濃度で蓄積することで知られる。",
    characteristics: [
      "葉は単葉・互生で鋸歯があることが多い",
      "花は小さく白色〜黄色、5数性で雄しべが多数",
      "雄しべは多数で目立つ",
      "果実は核果または液果",
      "葉にアルミニウムを高濃度で蓄積する（媒染植物）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ハイノキ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "ハイノキ属（Symplocos）",
    ],
    evolutionEvents: [
      "アルミニウム過蓄積機構の独自進化",
      "アジアと新大陸の両方での分布（ゴンドワナ的分布または長距離分散）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハイノキ科" },
    ],
    japaneseSpeciesCount: 106,
    review: { status: "ai_generated" },
  },

  // ── イワウメ科 ──────────────────────────────────────────
  {
    id: "diapensiaceae",
    jaName: "イワウメ科",
    enName: "Diapensia family",
    scientificName: "Diapensiaceae Lindl.",
    order: "ツツジ目",
    overview:
      "北半球の高山・北極圏に分布する小科で、約15種が知られる。日本ではイワウメ・コイワカガミ・ヒメイワカガミ・イワカガミダマシなどが高山帯の岩場・草地に生育する。厳しい環境下で這い伏すマット状に成長する種が多い。",
    characteristics: [
      "常緑の矮小草本または低木",
      "高山・岩場・北極圏ツンドラに適応",
      "花は5数性で白色〜淡紅色",
      "雄しべは5本（稔性）と5本（仮雄しべ）をもつ種がある",
      "果実は蒴果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > イワウメ科",
    divergenceEra: "古第三紀（約4500万年前）",
    representativeGenera: [
      "イワウメ属（Diapensia）",
      "イワカガミ属（Shortia）",
      "スキミア属（Galax）",
    ],
    evolutionEvents: [
      "高山・北極圏の厳しい環境への矮小化・匍匐化適応",
      "北半球での隔離分布（北米・ヒマラヤ・日本・北極圏）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イワウメ科" },
    ],
    japaneseSpeciesCount: 45,
    review: { status: "ai_generated" },
  },

  // ── エゴノキ科 ──────────────────────────────────────────
  {
    id: "styracaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Styrax_japonica.jpg",
    jaName: "エゴノキ科",
    enName: "Storax family",
    scientificName: "Styracaceae DC. & Spreng.",
    order: "ツツジ目",
    overview:
      "東アジア・北米・地中海地方に分布する木本の科で、約160種が知られる。日本ではエゴノキ・ハクウンボク・オオバアサガラ・アサガラなどが自生し、白い垂れ下がった花が美しい。安息香（ベンゾイン）の産地でもある。",
    characteristics: [
      "落葉または常緑の高木〜低木",
      "花は白色で下垂する、5〜7数性",
      "花冠は深裂して反り返ることが多い",
      "果実は核果状で星状毛に覆われることが多い",
      "サポニンを含み、果実は有毒（エゴノキ名の由来）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > エゴノキ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "エゴノキ属（Styrax）",
      "アサガラ属（Pterostyrax）",
      "オオバアサガラ属（Melliodendron）",
    ],
    evolutionEvents: [
      "サポニン（サポニン系毒）の果実への蓄積による被食防衛",
      "東アジア・北米・地中海の隔離分布（白亜紀以降の大陸移動反映）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/エゴノキ科" },
    ],
    japaneseSpeciesCount: 29,
    review: { status: "ai_generated" },
  },

  // ── サラセニア科 ──────────────────────────────────────────
  {
    id: "sarraceniaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarracenia_purpurea.jpg",
    jaName: "サラセニア科",
    enName: "Pitcher plant family",
    scientificName: "Sarraceniaceae Dumort.",
    order: "ツツジ目",
    overview:
      "北米・南米に分布する食虫植物の科で、サラセニア属・ダーリングトニア属・ヘリアンフォラ属の3属約30種からなる。筒状の葉（落とし穴型トラップ）で昆虫を捕獲・消化する。日本への自生はなく、観賞用に栽培される。",
    characteristics: [
      "葉が管状・壺状に変形した落とし穴型捕虫器をもつ",
      "捕虫器内部は消化腺・下向き毛・蝋質で昆虫を閉じ込める",
      "花は大型で美しく、倒立した傘状の雌しべが特徴",
      "湿地・泥炭地の窒素貧栄養環境に生育",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > サラセニア科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "サラセニア属（Sarracenia）",
      "ダーリングトニア属（Darlingtonia）",
      "ヘリアンフォラ属（Heliamphora）",
    ],
    evolutionEvents: [
      "葉の管状捕虫器への変形（収斂進化、ウツボカズラ科とは独立）",
      "窒素貧栄養の泥炭湿地への特化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サラセニア科" },
    ],
    japaneseSpeciesCount: 8,
    review: { status: "ai_generated" },
  },

  // ── マタタビ科 ──────────────────────────────────────────
  {
    id: "actinidiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Actinidia_deliciosa_flowers.jpg",
    jaName: "マタタビ科",
    enName: "Kiwi family",
    scientificName: "Actinidiaceae Engl. & Gilg",
    order: "ツツジ目",
    overview:
      "東アジアを中心に分布する木本（つる性）の科で、約360種が知られる。日本ではマタタビ・サルナシ・ミヤママタタビが自生し、サルナシはキウイの近縁種。キウイフルーツ（Actinidia deliciosa）は本科の代表的果樹。",
    characteristics: [
      "つる性の落葉または常緑木本",
      "葉は単葉・互生、鋸歯がある",
      "花は白色〜淡黄色で5数性、雄しべ多数",
      "果実は液果（キウイ型）で多数の種子を含む",
      "雌雄異株のものが多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > マタタビ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "マタタビ属（Actinidia）",
      "サルスベリ属内マタタビ類",
    ],
    evolutionEvents: [
      "つる性木本への進化による林内攀縁生活への適応",
      "ネコ科動物を誘引するマタタビラクトン等の二次代謝産物の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マタタビ科" },
    ],
    japaneseSpeciesCount: 31,
    review: { status: "ai_generated" },
  },

  // ── リョウブ科 ──────────────────────────────────────────
  {
    id: "clethraceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Clethra_alnifolia.jpg",
    jaName: "リョウブ科",
    enName: "Clethra family",
    scientificName: "Clethraceae Klotzsch",
    order: "ツツジ目",
    overview:
      "アジア・南北アメリカ・マカロネシアに分布する木本の科で、Clethra属1属約75種からなる。日本ではリョウブが山地の落葉樹林に広く自生し、初夏に白い穂状花序を垂れ下げる。若葉は山菜として利用された歴史がある。",
    characteristics: [
      "落葉または常緑の高木〜低木",
      "葉は単葉・互生で鋸歯がある",
      "花は白色で5数性、芳香をもつ",
      "雄しべ10本で葯は逆さに開く（孔開）",
      "果実は蒴果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > リョウブ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "リョウブ属（Clethra）",
    ],
    evolutionEvents: [
      "アジア・新大陸・マカロネシアの隔離分布（テチス海・大西洋の開裂反映）",
      "葯の孔開方式という独自の花粉放出機構の確立",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/リョウブ科" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── ミトラステモン科 ──────────────────────────────────────────
  {
    id: "mitrastemonaceae",
    jaName: "ミトラステモン科",
    enName: "Mitrastemon family",
    scientificName: "Mitrastemonaceae Makino",
    order: "ツツジ目",
    overview:
      "全寄生植物の単型科で、ミトラステモン属2種のみからなる。カシ類やシイ類（ブナ科）の根に寄生し、葉緑素をもたない。日本ではミトラステモン（ミヤマウズラの一種）が四国・九州・沖縄の照葉樹林に生育し、特異な形態で知られる。",
    characteristics: [
      "葉緑素をもたない全寄生植物（宿主はブナ科の根）",
      "茎・葉は退化し、花だけが地上に現れる",
      "花は両性花で花弁・萼が癒合した筒状",
      "雄しべは輪状に癒合し帽子状（ミトラ状）になる",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ミトラステモン科",
    divergenceEra: "古第三紀〜新第三紀（約3000万年前）",
    representativeGenera: [
      "ミトラステモン属（Mitrastemon）",
    ],
    evolutionEvents: [
      "全寄生性の獲得（光合成能の完全消失）",
      "茎・葉の退化と地下寄生構造への特化",
      "雄しべの帽子状癒合という独特の送粉形態の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミトラステモン科" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── ツツジ科 ──────────────────────────────────────────
  {
    id: "ericaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhododendron_cv._031.JPG",
    jaName: "ツツジ科",
    enName: "Heath family",
    scientificName: "Ericaceae Juss.",
    order: "ツツジ目",
    overview:
      "APG IVでは旧ヤブコウジ科・ツツジ科等を統合した大科で、約4,000種が知られる。日本ではツツジ・シャクナゲ・ブルーベリー・スノキ・コケモモ・アセビなど多様な種が自生・栽培される。菌根（エリコイド菌根）と共生して貧栄養環境に適応する種が多い。",
    characteristics: [
      "葉は単葉・互生で全縁または鋸歯、革質のことが多い",
      "花冠は合弁で鐘状〜壺状、5裂",
      "葯は孔（孔開葯）から花粉を放出する",
      "エリコイド菌根を形成する種が多い",
      "果実は液果・核果・蒴果と多様",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ツツジ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "ツツジ属（Rhododendron）",
      "スノキ属（Vaccinium）",
      "アセビ属（Pieris）",
      "イチゴノキ属（Arbutus）",
      "コケモモ属（Vaccinium vitis-idaea）",
    ],
    evolutionEvents: [
      "孔開葯（振動授粉・バズポリネーション）の進化",
      "エリコイド菌根との共生による貧栄養酸性土壌への適応",
      "APG IVによる大規模な科の統合再編",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツツジ科" },
    ],
    japaneseSpeciesCount: 749,
    review: { status: "ai_generated" },
  },

  // ── カツラギ科 ──────────────────────────────────────────
  {
    id: "icacinaceae",
    jaName: "カツラギ科",
    enName: "Icacina family",
    scientificName: "Icacinaceae Miers",
    order: "アスター類（系統的位置再検討中）",
    overview:
      "熱帯・亜熱帯に分布する木本の科で、APG IVでは系統的位置が確定していない「incertae sedis」として扱われる。日本ではカツラギが沖縄・南西諸島の低地林に自生する。",
    characteristics: [
      "高木〜低木またはつる性木本",
      "葉は単葉・互生で全縁",
      "花は小さく5数性、花弁は離弁または合弁",
      "果実は核果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > アスター類 > 系統的位置未確定（Icacinaceae）",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    representativeGenera: [
      "カツラギ属（Apodytes）",
      "イカシナ属（Icacina）",
      "ゴニオデンドロン属（Gonocaryum）",
    ],
    evolutionEvents: [
      "熱帯雨林内での木本つる性への適応",
      "分類学的位置の不安定性（分子系統で複数回の収斂進化が示唆される）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カツラギ科" },
    ],
    japaneseSpeciesCount: 17,
    review: { status: "ai_generated" },
  },

  // ── トチュウ科 ──────────────────────────────────────────
  {
    id: "eucommiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Eucommia_ulmoides.jpg",
    jaName: "トチュウ科",
    enName: "Hardy rubber tree family",
    scientificName: "Eucommiaceae Engl.",
    order: "ガリア目",
    overview:
      "中国原産の単型科で、Eucommia ulmoides（トチュウ）1種のみからなる。野生では中国中部〜南西部に生育するが、日本では漢方薬原料として広く栽培される。葉を引き裂くとラテックスの糸が伸びる独特の性質で有名。",
    characteristics: [
      "葉を引き裂くとゴム質の白い糸（グタペルカ）が伸びる",
      "落葉高木で葉は単葉・互生・鋸歯縁",
      "花は花弁がなく雌雄異株、風媒花",
      "果実は翼果（有翼の堅果）で風散布",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ガリア目 > トチュウ科",
    divergenceEra: "白亜紀後期（約9000万年前）",
    representativeGenera: [
      "トチュウ属（Eucommia）",
    ],
    evolutionEvents: [
      "グタペルカ（トランスポリイソプレン）の葉への蓄積という独自形質の進化",
      "単型科・単種として白亜紀以降に生き残った「生きた化石」的系統",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トチュウ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── アカネ科 ──────────────────────────────────────────
  {
    id: "rubiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubia_tinctorum_001.JPG",
    jaName: "アカネ科",
    enName: "Coffee family",
    scientificName: "Rubiaceae Juss.",
    order: "リンドウ目",
    overview:
      "被子植物で4番目に大きな科で、約13,000種が熱帯を中心に世界中に分布する。コーヒー・キナ（マラリア薬キニーネ原料）・クチナシ・アカネ・ヘクソカズラなど経済的・薬学的に重要な植物を多く含む。日本には約60種が自生する。",
    characteristics: [
      "葉は単葉・対生（または輪生）で全縁",
      "葉柄間または葉腋に托葉をもつ（重要な識別点）",
      "花は合弁花冠で4〜5裂、子房下位",
      "果実は液果・核果・蒴果・分果と多様",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > リンドウ目 > アカネ科",
    divergenceEra: "白亜紀後期（約8000万年前）",
    representativeGenera: [
      "コーヒーノキ属（Coffea）",
      "アカネ属（Rubia）",
      "クチナシ属（Gardenia）",
      "ヘクソカズラ属（Paederia）",
      "フタバムグラ属（Galium）",
    ],
    evolutionEvents: [
      "対生葉と托葉の組み合わせという安定した形態の確立",
      "アルカロイド（カフェイン・キニーネ・ストリキニーネ等）の多様な進化",
      "熱帯林での爆発的多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アカネ科" },
    ],
    japaneseSpeciesCount: 621,
    review: { status: "ai_generated" },
  },

  // ── リンドウ科 ──────────────────────────────────────────
  {
    id: "gentianaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Gentiana_septemfida_var._lagodechiana_01.JPG",
    jaName: "リンドウ科",
    enName: "Gentian family",
    scientificName: "Gentianaceae Juss.",
    order: "リンドウ目",
    overview:
      "世界の温帯〜高山帯を中心に約1,700種が分布する科。日本ではリンドウ・エゾリンドウ・センブリ・ハナイカリ・ミヤマリンドウなど多様な種が自生する。苦味配糖体（ゲンチアナ）を含み、苦味健胃薬の原料として歴史的に利用されてきた。",
    characteristics: [
      "花冠は合弁で鐘状〜漏斗状、4〜12裂",
      "雄しべは花冠裂片と互生し、裂片と同数",
      "葉は単葉・対生（まれに互生）で全縁",
      "果実は蒴果で多数の微細種子を含む",
      "苦味配糖体（ゲンチオピクロシド等）を含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > リンドウ目 > リンドウ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "リンドウ属（Gentiana）",
      "センブリ属（Swertia）",
      "ハナイカリ属（Halenia）",
      "ムラサキセンブリ属（Cicendia）",
    ],
    evolutionEvents: [
      "苦味配糖体の蓄積による草食動物への防衛機構の確立",
      "高山環境での花色・花形の急速な多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/リンドウ科" },
    ],
    japaneseSpeciesCount: 267,
    review: { status: "ai_generated" },
  },

  // ── フジウツギ科 ──────────────────────────────────────────
  {
    id: "loganiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Strychnos_nux-vomica.jpg",
    jaName: "フジウツギ科",
    enName: "Logania family",
    scientificName: "Loganiaceae R.Br. ex Mart.",
    order: "リンドウ目",
    overview:
      "熱帯〜亜熱帯に分布する木本・草本の科で、約420種が知られる。ストリキニーネを含むマチン（Strychnos）、日本に自生するフジウツギ（Buddleja）などを含む。APG IVではフジウツギ属はゴマノハグサ科に移動する扱いもあるが、広義では本科に残される。",
    characteristics: [
      "葉は単葉・対生で全縁〜鋸歯",
      "托葉が葉柄間にある（またはライン状の葉柄間線）",
      "花冠は合弁で4〜5裂",
      "果実は蒴果または液果",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > リンドウ目 > フジウツギ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "フジウツギ属（Buddleja）",
      "マチン属（Strychnos）",
      "ロガニア属（Logania）",
    ],
    evolutionEvents: [
      "ストリキニーネ・ブルシンなど高毒性アルカロイドの進化（Strychnos）",
      "フジウツギの蝶媒花への適応（芳香・密集した花序）",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フジウツギ科" },
    ],
    japaneseSpeciesCount: 23,
    review: { status: "ai_generated" },
  },

  // ── キョウチクトウ科 ──────────────────────────────────────────
  {
    id: "apocynaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Nerium_oleander_flowers_leaves.jpg",
    jaName: "キョウチクトウ科",
    enName: "Dogbane family",
    scientificName: "Apocynaceae Juss.",
    order: "リンドウ目",
    overview:
      "APG IVではガガイモ科（Asclepiadaceae）を統合した大科で、約5,000種が知られる。キョウチクトウ・プルメリア・アデニウム・テイカカズラ・キジョランなど多様な植物を含む。乳液・強心配糖体・アルカロイドを含む有毒種が多い。",
    characteristics: [
      "切断すると乳白色の乳液が出る種が多い",
      "花冠は合弁で5裂、花弁が螺旋状にねじれることがある",
      "果実は袋果（袋状に開裂）で、長い綿毛付き種子が多い",
      "副花冠（コロナ）をもつ種がある（ガガイモ類）",
      "強心配糖体・モノテルペンインドールアルカロイドを含む",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > リンドウ目 > キョウチクトウ科",
    divergenceEra: "古第三紀（約5500万年前）",
    representativeGenera: [
      "キョウチクトウ属（Nerium）",
      "テイカカズラ属（Trachelospermum）",
      "キジョラン属（Marsdenia）",
      "ガガイモ属（Metaplexis）",
      "プルメリア属（Plumeria）",
    ],
    evolutionEvents: [
      "ガガイモ科との統合による科の大幅な拡大",
      "花粉塊（ポリニア）による効率的な送粉機構の進化（ガガイモ類）",
      "乳液・強心配糖体による草食者防衛の発達",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キョウチクトウ科" },
    ],
    japaneseSpeciesCount: 116,
    review: { status: "ai_generated" },
  },

  // ── ムラサキ科 ──────────────────────────────────────────
  {
    id: "boraginaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Borago_officinalis_001.JPG",
    jaName: "ムラサキ科",
    enName: "Borage family",
    scientificName: "Boraginaceae Juss.",
    order: "ムラサキ目",
    overview:
      "温帯〜熱帯に分布する科で、約2,700種が知られる。日本ではムラサキ・ワスレナグサ・ハナイバナ・ニホンルリソウ・コンフリーなどが自生・栽培される。茎や葉に荒い毛が生えるものが多く、花が青紫色の種が多い。",
    characteristics: [
      "茎・葉に粗毛（ケイ酸質の剛毛）が多い",
      "花は青〜紫色が多く、サソリ花序（巻散花序）につく",
      "花冠は漏斗状〜高坏状で5裂、咽頭部に付属物をもつ",
      "果実は分果（小堅果）4個に分かれる",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムラサキ目 > ムラサキ科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "ムラサキ属（Lithospermum）",
      "ワスレナグサ属（Myosotis）",
      "ハナイバナ属（Bothriospermum）",
      "コンフリー属（Symphytum）",
    ],
    evolutionEvents: [
      "サソリ花序（ヘリコイド花序）という独特の花序型の進化",
      "ケイ酸質剛毛による草食者への物理的防衛の発達",
      "青色アントシアニン系色素による蜂媒花への適応",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ムラサキ科" },
    ],
    japaneseSpeciesCount: 223,
    review: { status: "ai_generated" },
  },

  // ── ナス科 ──────────────────────────────────────────
  {
    id: "solanaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Solanum_lycopersicum_003.JPG",
    jaName: "ナス科",
    enName: "Nightshade family",
    scientificName: "Solanaceae Juss.",
    order: "ナス目",
    overview:
      "トマト・ナス・ピーマン・ジャガイモ・タバコ・ペチュニアなど経済的・農業的に最重要な科のひとつで、約2,700種が知られる。日本にはホオズキ・ヒヨドリジョウゴ・ワルナスビ・クコなどが自生・帰化する。アルカロイド（ソラニン・アトロピン・ニコチン）を含む有毒種が多い。",
    characteristics: [
      "花冠は合弁で5裂、星形〜鐘形",
      "葯は合着して円錐形になり、孔開または裂開する",
      "葉は単葉・互生、しばしば異臭をもつ",
      "果実は液果（トマト型）または蒴果（ハナビタバコ型）",
      "アルカロイドを含む種が多い",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナス目 > ナス科",
    divergenceEra: "古第三紀（約5000万年前）",
    representativeGenera: [
      "ナス属（Solanum）",
      "ホオズキ属（Physalis）",
      "クコ属（Lycium）",
      "タバコ属（Nicotiana）",
      "トウガラシ属（Capsicum）",
    ],
    evolutionEvents: [
      "多様なアルカロイド（ソラニン・カプサイシン・ニコチン・アトロピン）の進化",
      "南米を中心とした栽培化と世界的拡散",
      "液果による鳥類散布への適応と果実色の多様化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ナス科" },
    ],
    japaneseSpeciesCount: 243,
    review: { status: "ai_generated" },
  },

  // ── スフェノクレア科 ──────────────────────────────────────────
  {
    id: "sphenocleaceae",
    jaName: "スフェノクレア科",
    enName: "Sphenoclea family",
    scientificName: "Sphenocleaceae T.Baskerv.",
    order: "キキョウ目",
    overview:
      "熱帯・亜熱帯の水田・湿地に生育する単型科で、スフェノクレア属1属2種のみからなる。日本では水田雑草として侵入しており、稲作に影響を与えることがある。小型の一年草で密な穂状花序をもつ。",
    characteristics: [
      "水生または湿地性の一年草",
      "茎は中空で海綿質",
      "葉は単葉・互生で全縁",
      "花は小さく密な穂状花序につき、5数性",
      "果実は蓋裂する蒴果（特異な開裂方法）",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キキョウ目 > スフェノクレア科",
    divergenceEra: "古第三紀（約4500万年前）",
    representativeGenera: [
      "スフェノクレア属（Sphenoclea）",
    ],
    evolutionEvents: [
      "水田・湿地環境への特化（海綿質茎による浮力・酸素供給）",
      "蒴果の蓋裂という独特の開裂様式の進化",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スフェノクレア科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },
];
