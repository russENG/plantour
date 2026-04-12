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
    imageUrl: "/columns/tanpopo-war/asteraceae-grid.svg",
    jaName: "キク科",
    enName: "Daisy family",
    scientificName: "Asteraceae",
    order: "キク目",
    overview:
      "被子植物で最大級の科のひとつ。約24,000種が知られ、世界中に分布する。頭状花序（多数の小花が集まって1つの花のように見える）が最大の特徴。タンポポ・ヒマワリ・キク・コスモス・アザミなど身近な植物が多く属する。",
    enOverview: "One of the largest families of angiosperms. Approximately 24,000 species are known, distributed worldwide. The most distinctive feature is the capitulum (flower head), in which numerous small florets are clustered to resemble a single flower. Includes many familiar plants such as dandelions, sunflowers, chrysanthemums, cosmos, and thistles.",
    characteristics: [
      "頭状花序（多数の小花が集まって1つの花に見える）",
      "舌状花（花弁が1方向に伸びる）と管状花（筒状）の組み合わせ",
      "果実は痩果（そうか）で、冠毛（綿毛）をもつことが多い",
      "葉は互生が多く、形は多様",
    ],
    enCharacteristics: ["Capitulum (flower head): numerous small florets clustered to resemble a single flower", "Combination of ray florets (petals extending in one direction) and disc florets (tubular)", "Fruit is an achene, often bearing a pappus (feathery bristles)", "Leaves mostly alternate, highly variable in shape"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キク目 > キク科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Asterales > Asteraceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 80–70 million years ago)",
    representativeGenera: [
      "タンポポ属（Taraxacum）",
      "ヒマワリ属（Helianthus）",
      "キク属（Chrysanthemum）",
      "アザミ属（Cirsium）",
      "ヒメジョオン属（Erigeron）",
      "ヨモギ属（Artemisia）",
    ],
    evolutionEvents: ["頭状花序の進化", "冠毛による種子の風散布の発達"],
    enEvolutionEvents: ["Evolution of the capitulum (flower head)", "Development of wind dispersal of seeds via pappus"],
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
    enOverview: "A large family including cherries, plums, apples, strawberries, and roses. Approximately 3,000 species are known, predominantly in temperate regions of the Northern Hemisphere. Remarkable for its diversity of fruit types and close agricultural ties with humans.",
    characteristics: [
      "花弁は5枚が基本",
      "萼片も5枚",
      "雄しべが多数",
      "果実の形は多様（核果・仁果・集合果・痩果など）",
      "托葉をもつことが多い",
    ],
    enCharacteristics: ["Typically 5 petals", "5 sepals", "Numerous stamens", "Highly diverse fruit types (drupes, pomes, aggregate fruits, achenes, etc.)", "Stipules commonly present"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ目 > バラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosales > Rosaceae",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    enDivergenceEra: "Late Cretaceous (approx. 90 million years ago onward)",
    representativeGenera: [
      "サクラ属（Prunus）",
      "バラ属（Rosa）",
      "リンゴ属（Malus）",
      "イチゴ属（Fragaria）",
      "ナシ属（Pyrus）",
    ],
    evolutionEvents: ["花の基本形（5数性）の確立", "肉質果実による動物散布の進化"],
    enEvolutionEvents: ["Establishment of the basic pentamerous flower plan", "Evolution of animal dispersal via fleshy fruits"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/バラ科" },
    ],
  },

  // ── イネ科 ──────────────────────────────────────────
  {
    id: "poaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Oryza_sativa_MS.JPG",
    jaName: "イネ科",
    enName: "Grass family",
    scientificName: "Poaceae",
    order: "イネ目",
    overview:
      "単子葉植物の中で最も繁栄している科のひとつ。イネ・コムギ・トウモロコシなど主要穀物を含む。草原・草地生態系の基盤を形成し、地球陸地の40%以上を覆う。",
    enOverview: "One of the most successful monocot families. Includes major cereal crops such as rice, wheat, and maize. Forms the foundation of grassland ecosystems and covers over 40% of Earth's land surface.",
    characteristics: [
      "茎（稈・かん）は中空で節がある",
      "葉は細長く、葉鞘が茎を包む",
      "小穂（しょうすい）という独特の花のまとまり",
      "風媒花で花弁は退化",
      "葉脈は平行脈",
    ],
    enCharacteristics: ["Stems (culms) are hollow with distinct nodes", "Leaves are elongated; leaf sheaths wrap around the stem", "Spikelets: distinctive floral units unique to grasses", "Wind-pollinated; petals reduced", "Leaf venation is parallel"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ類 > イネ目 > イネ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Commelinids > Poales > Poaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 80–70 million years ago)",
    representativeGenera: [
      "イネ属（Oryza）",
      "コムギ属（Triticum）",
      "ススキ属（Miscanthus）",
      "エノコログサ属（Setaria）",
      "タケ亜科（Bambusoideae）",
      "ヨシ属（Phragmites）",
    ],
    evolutionEvents: ["C4光合成の独立的進化（複数系統で）", "草原生態系の形成（新第三紀〜）"],
    enEvolutionEvents: ["Independent evolution of C4 photosynthesis (in multiple lineages)", "Formation of grassland ecosystems (from the Neogene onward)"],
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
    enOverview: "A massive family with approximately 20,000 known species. Includes important food crops such as soybeans, common beans, and peas. The most notable feature is nitrogen fixation through symbiosis with rhizobia, enabling growth in poor soils. Identified by papilionaceous flowers and legume pods.",
    characteristics: [
      "蝶形花（旗弁・翼弁・竜骨弁の組み合わせ）が多い",
      "果実はさや（莢果・きょうか）",
      "根に根粒菌が共生し窒素固定を行う",
      "葉は複葉が多い",
    ],
    enCharacteristics: ["Papilionaceous flowers common (standard, wing, and keel petals)", "Fruit is a legume (pod)", "Root nodules harbor symbiotic rhizobia for nitrogen fixation", "Leaves mostly compound"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > マメ目 > マメ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Fabales > Fabaceae",
    divergenceEra: "白亜紀末〜古第三紀（約7000万〜6000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 70–60 million years ago)",
    representativeGenera: [
      "ツメクサ属（Trifolium）",
      "ソラマメ属（Vicia）",
      "ダイズ属（Glycine）",
      "ネムノキ属（Albizia）",
    ],
    evolutionEvents: ["根粒菌との共生進化", "白亜紀末〜古第三紀の急速な多様化"],
    enEvolutionEvents: ["Evolution of symbiosis with rhizobia", "Rapid diversification from the late Cretaceous to Paleogene"],
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
    enOverview: "A family including cabbage, radish, rapeseed, and shepherd's purse. The most distinctive feature is the four petals arranged in a cross shape (hence the former name Cruciferae). Approximately 370 genera and 4,000 species worldwide.",
    characteristics: [
      "花弁は4枚で十字形に並ぶ（十字花）",
      "萼片も4枚",
      "雄しべは通常6本（外側2本が短い）",
      "果実は長角果または短角果",
    ],
    enCharacteristics: ["4 petals arranged in a cruciform pattern", "4 sepals", "Usually 6 stamens (the 2 outer ones shorter; tetradynamous)", "Fruit is a silique or silicle"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > アブラナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Brassicales > Brassicaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ナズナ属（Capsella）",
      "アブラナ属（Brassica）",
      "ダイコン属（Raphanus）",
      "イヌガラシ属（Rorippa）",
    ],
    evolutionEvents: ["十字形花弁の進化（受粉効率化）", "マスタードオイル配糖体の獲得（草食者への防御）"],
    enEvolutionEvents: ["Evolution of cruciform petals (improved pollination efficiency)", "Acquisition of glucosinolates (mustard oil glycosides) as herbivore defense"],
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
    enOverview: "A family rich in aromatic plants including perilla, mint, lavender, and basil. The most distinctive features are bilabiate (two-lipped) flowers and square stems. Approximately 240 genera and 7,000 species are known.",
    characteristics: [
      "茎の断面が四角形",
      "葉は対生",
      "唇形花（上唇2裂・下唇3裂）",
      "果実は4個の分果（小堅果）",
      "多くの種が精油（エッセンシャルオイル）を含む",
    ],
    enCharacteristics: ["Square stem cross-section", "Opposite leaves", "Bilabiate flowers (upper lip 2-lobed, lower lip 3-lobed)", "Fruit splits into 4 nutlets", "Many species contain essential oils"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > シソ目 > シソ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Lamiales > Lamiaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ホトケノザ属（Lamium）",
      "シソ属（Perilla）",
      "ハッカ属（Mentha）",
      "ラベンダー属（Lavandula）",
    ],
    evolutionEvents: ["精油・芳香成分の多様な進化", "唇形花による特定昆虫への適応"],
    enEvolutionEvents: ["Diverse evolution of essential oils and aromatic compounds", "Adaptation to specific insect pollinators via bilabiate flowers"],
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
    enOverview: "A family including knotweed, sorrel, Japanese knotweed, and buckwheat. Characteristically, the stem nodes are swollen and enclosed by a membranous ochrea (stipular sheath). Approximately 55 genera and 1,100 species worldwide.",
    characteristics: [
      "茎の節を包む托葉鞘（膜状の鞘）",
      "花弁は退化し、萼片が花弁状になることが多い",
      "果実は三稜形または扁平な痩果",
      "葉は単葉で互生が多い",
    ],
    enCharacteristics: ["Ochrea (membranous sheath) enclosing stem nodes", "Petals reduced; sepals often petaloid", "Fruit is a trigonous or flattened achene", "Leaves simple, mostly alternate"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ナデシコ目 > タデ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Caryophyllales > Polygonaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "スイバ属（Rumex）",
      "タデ属（Polygonum）",
      "イタドリ属（Reynoutria）",
      "ソバ属（Fagopyrum）",
    ],
    evolutionEvents: ["世界各地への広域分布の形成"],
    enEvolutionEvents: ["Establishment of a widespread global distribution"],
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
    enOverview: "A family including chickweed, pinks, and carnations. Characterized by petals that are often deeply bifid and swollen stem nodes. Approximately 88 genera and 2,200 species, mainly distributed in temperate regions.",
    characteristics: [
      "花弁がしばしば深く2裂する",
      "茎の節がふくらむことがある",
      "葉は対生で単葉",
      "果実はさく果",
    ],
    enCharacteristics: ["Petals often deeply bifid (cleft into two)", "Stem nodes sometimes swollen", "Leaves opposite, simple", "Fruit is a capsule"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ナデシコ目 > ナデシコ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Caryophyllales > Caryophyllaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
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
    enOverview: "A family significantly reorganized under the APG system, incorporating parts of the former Scrophulariaceae. Includes Plantago (plantains) as well as Veronica (speedwells), Digitalis (foxgloves), and others.",
    characteristics: [
      "葉脈が弓なりに走る（オオバコ属）",
      "風媒花が多い（オオバコ属）",
      "花は4数性が多い",
      "APG体系での科の大幅再編でさまざまな植物を含む",
    ],
    enCharacteristics: ["Leaf veins run in an arcuate pattern (Plantago)", "Many are wind-pollinated (Plantago)", "Flowers often tetramerous (4-parted)", "Broadly reorganized under the APG system, encompassing diverse genera"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > シソ目 > オオバコ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Lamiales > Plantaginaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "オオバコ属（Plantago）",
      "クワガタソウ属（Veronica）",
      "ジギタリス属（Digitalis）",
    ],
    evolutionEvents: ["APG体系での科の大幅再編"],
    enEvolutionEvents: ["Major taxonomic reorganization under the APG system"],
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
    enOverview: "A family centered on the genus Viola. Approximately 23 genera and 830 species are known, with over 500 species in Viola alone. Distinguished by a spur on the lower petal (lip) containing nectar. Many species also produce seeds from cleistogamous (closed, self-pollinating) flowers.",
    characteristics: [
      "5枚の花弁（左右相称）",
      "下の花弁（唇弁）の基部に距がある",
      "閉鎖花をつけることが多い",
      "種子に好蟻体（エライオソーム）があり、アリが散布",
    ],
    enCharacteristics: ["5 petals (zygomorphic)", "Spur at the base of the lower petal (lip)", "Cleistogamous flowers frequently produced", "Seeds bear elaiosomes, dispersed by ants (myrmecochory)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キントラノオ目 > スミレ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Malpighiales > Violaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "スミレ属（Viola）",
    ],
    evolutionEvents: ["閉鎖花と開放花の二型的な繁殖戦略の進化", "アリによる種子散布の進化"],
    enEvolutionEvents: ["Evolution of a dual reproductive strategy with cleistogamous and chasmogamous flowers", "Evolution of seed dispersal by ants (myrmecochory)"],
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
    enOverview: "A family primarily composed of the genus Oxalis. Approximately 900 species are known, distributed from the tropics to temperate regions, with the center of diversity in South America.",
    characteristics: [
      "葉は3出複葉（ハート形の小葉3枚）が多い",
      "就眠運動（夜間・曇天に葉・花を閉じる）",
      "5弁花",
      "葉にシュウ酸が含まれ酸味がある",
    ],
    enCharacteristics: ["Leaves mostly trifoliate (three heart-shaped leaflets)", "Nyctinastic movements (leaves and flowers close at night or in overcast weather)", "5-petaled flowers", "Leaves contain oxalic acid, giving a sour taste"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > カタバミ目 > カタバミ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Oxalidales > Oxalidaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: ["カタバミ属（Oxalis）"],
    evolutionEvents: ["南米での爆発的多様化"],
    enEvolutionEvents: ["Explosive diversification in South America"],
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
    enOverview: "A small family of ancient lineage belonging to the basal angiosperms. Consists of only 4 genera and 6 species. Placed in the order Piperales, near the earliest divergences of angiosperms.",
    characteristics: [
      "花弁・萼片なし（苞が花弁状になる）",
      "独特の強いにおい",
      "湿地・日陰に生育",
      "地下茎で広がる多年草",
    ],
    enCharacteristics: ["No petals or sepals (bracts become petaloid)", "Distinctive strong odor", "Grows in wetlands and shaded areas", "Perennial spreading by rhizomes"],
    phylogeneticPosition: "被子植物 > 基部被子植物 > コショウ目 > ドクダミ科",
    enPhylogeneticPosition: "Angiosperms > Basal angiosperms > Piperales > Saururaceae",
    divergenceEra: "白亜紀（基部被子植物として非常に古い系統）",
    enDivergenceEra: "Cretaceous (a very ancient lineage as basal angiosperms)",
    representativeGenera: ["ドクダミ属（Houttuynia）"],
    evolutionEvents: ["基部被子植物の古い系統として初期被子植物の特徴を保持"],
    enEvolutionEvents: ["Retains ancestral angiosperm characteristics as an ancient basal lineage"],
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
    enOverview: "A small family comprising the genera Typha (cattails) and Sparganium (bur-reeds). Primarily large perennials growing in wetlands and along waterways. Distributed worldwide; the sausage-shaped inflorescence of Typha is universally recognizable.",
    characteristics: [
      "水辺・湿地に生育",
      "葉は細長くて平ら",
      "ガマ属は特徴的なソーセージ状の花穂",
      "風媒花",
    ],
    enCharacteristics: ["Grows along waterways and in wetlands", "Leaves long and flat", "Typha has a characteristic sausage-shaped spike inflorescence", "Wind-pollinated"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ類 > イネ目 > ガマ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Commelinids > Poales > Typhaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ガマ属（Typha）",
      "ミクリ属（Sparganium）",
    ],
    evolutionEvents: ["水辺環境への特殊化"],
    enEvolutionEvents: ["Specialization to aquatic and wetland environments"],
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
    enOverview: "A large family including taro, skunk cabbage, calla lilies, and Monstera. The most distinctive feature is the combination of a spathe (large bract) and spadix (fleshy spike inflorescence). Approximately 140 genera and 3,750 species are known.",
    characteristics: [
      "仏炎苞（大きな包葉）と肉穂花序（棒状の花序）",
      "多くの種に毒性（シュウ酸カルシウムなど）",
      "葉は多様（ハート形・裂けたもの・幅広いものなど）",
      "熱帯に多様性の中心がある",
    ],
    enCharacteristics: ["Spathe (large bract) and spadix (fleshy spike inflorescence)", "Many species are toxic (calcium oxalate crystals, etc.)", "Highly variable leaf shapes (cordate, lobed, broad, etc.)", "Center of diversity in the tropics"],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > サトイモ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Araceae",
    divergenceEra: "白亜紀後期",
    enDivergenceEra: "Late Cretaceous",
    representativeGenera: [
      "ミズバショウ属（Lysichiton）",
      "サトイモ属（Colocasia）",
      "マムシグサ属（Arisaema）",
    ],
    evolutionEvents: ["仏炎苞による昆虫誘引機構の進化", "肉穂花序による発熱（体温調節）の進化"],
    enEvolutionEvents: ["Evolution of insect-attracting mechanisms via the spathe", "Evolution of thermogenesis in the spadix"],
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
    enOverview: "A small family containing only the genus Platanus (plane trees/sycamores). Disjunctly distributed across North America, the eastern Mediterranean, and East Asia. Widely used as street trees worldwide.",
    characteristics: [
      "樹皮が板状にはがれて迷彩状になる",
      "大型の掌状複葉",
      "球状の複合果（頭状果）",
      "単性花・風媒花",
    ],
    enCharacteristics: ["Bark peels off in plates, creating a camouflage-like pattern", "Large palmately lobed leaves", "Spherical aggregate fruit (globose head)", "Unisexual flowers; wind-pollinated"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ヤマモガシ目 > スズカケノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Proteales > Platanaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (approx. 100 million years ago onward)",
    representativeGenera: ["スズカケノキ属（Platanus）"],
    evolutionEvents: ["基部真正双子葉類の古い系統", "白亜紀の化石記録あり"],
    enEvolutionEvents: ["An ancient lineage among basal eudicots", "Fossil record extends back to the Cretaceous"],
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
    enOverview: "A family including beech, oak, chestnut, and chinquapin. Major components of deciduous broadleaf forests in the Northern Hemisphere temperate zone. Known for producing acorns (nuts). Plays a central role in satoyama (traditional rural) ecosystems.",
    characteristics: [
      "果実は堅果（どんぐり）で、殻斗（かくと）に包まれる",
      "葉は単葉で互生",
      "風媒花（花は小さく目立たない）",
      "雌雄同株",
    ],
    enCharacteristics: ["Fruit is a nut (acorn) enclosed in a cupule", "Leaves simple, alternate", "Wind-pollinated (flowers small and inconspicuous)", "Monoecious"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ブナ目 > ブナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Fagales > Fagaceae",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    enDivergenceEra: "Late Cretaceous (approx. 90 million years ago onward)",
    representativeGenera: [
      "コナラ属（Quercus）",
      "ブナ属（Fagus）",
      "シイ属（Castanopsis）",
      "クリ属（Castanea）",
    ],
    evolutionEvents: ["どんぐりによる動物散布の進化", "北半球落葉樹林の形成"],
    enEvolutionEvents: ["Evolution of animal dispersal via acorns", "Formation of deciduous forests in the Northern Hemisphere"],
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
    enOverview: "A family including camphor tree, cinnamon, avocado, and bay laurel. Many species are rich in essential oils and aromatic compounds, important for spices, food, and medicine. An ancient lineage belonging to the basal angiosperm group (Magnoliids).",
    characteristics: [
      "葉・樹皮に独特の芳香をもつことが多い",
      "花弁・萼片の区別がなく花被片が6枚",
      "果実は液果（1個の種子をもつ）",
      "常緑が多い",
    ],
    enCharacteristics: ["Leaves and bark often possess distinctive aromas", "No differentiation between petals and sepals; 6 tepals", "Fruit is a drupe or berry (single-seeded)", "Mostly evergreen"],
    phylogeneticPosition: "被子植物 > モクレン類 > クスノキ目 > クスノキ科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Laurales > Lauraceae",
    divergenceEra: "白亜紀前期（約1億2000万年前〜）",
    enDivergenceEra: "Early Cretaceous (approx. 120 million years ago onward)",
    representativeGenera: [
      "クスノキ属（Cinnamomum）",
      "ゲッケイジュ属（Laurus）",
      "アボカド属（Persea）",
    ],
    evolutionEvents: ["被子植物の基部グループとして古い形質を保持", "精油成分の多様な進化"],
    enEvolutionEvents: ["Retention of ancestral traits as a basal angiosperm group", "Diverse evolution of essential oil compounds"],
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
    enOverview: "A family including camellia, sasanqua, and tea (Camellia sinensis). The center of diversity is in East Asia. Characterized by numerous stamens with fused filaments. Globally important as the source of tea.",
    characteristics: [
      "多数の雄しべ（花糸が合着して束になる）",
      "光沢のある革質の葉",
      "常緑低木〜高木が多い",
      "花弁は5枚基本",
    ],
    enCharacteristics: ["Numerous stamens (filaments fused into bundles)", "Glossy, coriaceous (leathery) leaves", "Mostly evergreen shrubs to trees", "Basically 5 petals"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ツツジ目 > ツバキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Ericales > Theaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ツバキ属（Camellia）",
    ],
    evolutionEvents: ["東アジアでの多様化", "茶の原料植物としての人類との関係"],
    enEvolutionEvents: ["Diversification in East Asia", "Relationship with humans as the source plant for tea"],
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
    enOverview: "A family including magnolias, Kobushi magnolia, and tulip trees. Belongs to a relatively ancient lineage among angiosperms, retaining primitive features of insect-pollinated flowers (e.g., undifferentiated tepals). Fossil record extends back to the Early Cretaceous.",
    characteristics: [
      "花弁と萼片の境界が不明確（花被片が多数）",
      "雄しべと雌しべが多数で螺旋状",
      "葉は単葉互生",
      "葉に托葉の痕跡がある",
    ],
    enCharacteristics: ["Boundary between petals and sepals indistinct (numerous tepals)", "Numerous stamens and carpels arranged spirally", "Leaves simple, alternate", "Stipule scars present on leaves"],
    phylogeneticPosition: "被子植物 > モクレン類 > モクレン目 > モクレン科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Magnoliales > Magnoliaceae",
    divergenceEra: "白亜紀前期（約1億年前〜）",
    enDivergenceEra: "Early Cretaceous (approx. 100 million years ago onward)",
    representativeGenera: [
      "モクレン属（Magnolia）",
      "ユリノキ属（Liriodendron）",
    ],
    evolutionEvents: ["甲虫による受粉（原始的な花の進化）", "被子植物の初期多様化期に分岐"],
    enEvolutionEvents: ["Beetle pollination (cantharophily) as a primitive floral adaptation", "Diverged during the early diversification of angiosperms"],
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
    enOverview: "A gymnosperm family including pines, spruces, firs, and cedars. Approximately 11 genera and 230 species are known, widely distributed in boreal to temperate regions of the Northern Hemisphere. One of the most important families in forestry.",
    characteristics: [
      "常緑（ほとんど）の針葉樹",
      "葉は針状で束になる（マツ属は2〜5本束）",
      "球果（まつかさ）をつける裸子植物",
      "樹脂（松脂）を含む",
    ],
    enCharacteristics: ["Mostly evergreen conifers", "Needle-like leaves in fascicles (Pinus: 2–5 per bundle)", "Gymnosperms bearing cones (strobili)", "Contain resin (pine pitch)"],
    phylogeneticPosition: "裸子植物 > マツ綱 > マツ目 > マツ科",
    enPhylogeneticPosition: "Gymnosperms > Pinopsida > Pinales > Pinaceae",
    divergenceEra: "三畳紀〜ジュラ紀（約2億年前〜）",
    enDivergenceEra: "Triassic to Jurassic (approx. 200 million years ago onward)",
    representativeGenera: [
      "マツ属（Pinus）",
      "モミ属（Abies）",
      "トウヒ属（Picea）",
      "カラマツ属（Larix）",
    ],
    evolutionEvents: ["中生代の針葉樹大繁栄期", "寒帯タイガ林の形成"],
    enEvolutionEvents: ["Major conifer dominance during the Mesozoic", "Formation of boreal taiga forests"],
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
    enOverview: "A conifer family including Japanese cedar (Cryptomeria), Japanese cypress (Chamaecyparis), and sequoias. The broadly defined Cupressaceae includes Cryptomeria (post-APG classification). The world's largest trees, sequoias, belong to this family.",
    characteristics: [
      "常緑針葉樹が多い",
      "葉は鱗片状または針状",
      "球果をつける裸子植物",
      "樹脂を含み芳香がある",
    ],
    enCharacteristics: ["Mostly evergreen conifers", "Leaves scale-like or needle-like", "Gymnosperms bearing cones", "Contain aromatic resins"],
    phylogeneticPosition: "裸子植物 > マツ綱 > マツ目 > ヒノキ科",
    enPhylogeneticPosition: "Gymnosperms > Pinopsida > Pinales > Cupressaceae",
    divergenceEra: "三畳紀（約2億3000万年前〜）",
    enDivergenceEra: "Triassic (approx. 230 million years ago onward)",
    representativeGenera: [
      "スギ属（Cryptomeria）",
      "ヒノキ属（Chamaecyparis）",
      "セコイア属（Sequoia）",
      "ネズミサシ属（Juniperus）",
    ],
    evolutionEvents: ["裸子植物針葉樹類の中生代大繁栄", "球果による種子保護の進化"],
    enEvolutionEvents: ["Major conifer proliferation during the Mesozoic", "Evolution of seed protection via cones"],
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
    enOverview: "Only one extant species, Ginkgo biloba. Once encompassed many species but now survives as a 'living fossil.' An extremely ancient lineage among gymnosperms.",
    characteristics: [
      "扇形の葉（二叉脈）",
      "雌雄異株",
      "種子（銀杏）は外種皮が肉質で悪臭",
      "落葉性",
    ],
    enCharacteristics: ["Fan-shaped leaves with dichotomous venation", "Dioecious", "Seeds (ginkgo nuts) have a fleshy, foul-smelling outer coat", "Deciduous"],
    phylogeneticPosition: "裸子植物 > イチョウ綱 > イチョウ目 > イチョウ科",
    enPhylogeneticPosition: "Gymnosperms > Ginkgoopsida > Ginkgoales > Ginkgoaceae",
    divergenceEra: "ペルム紀〜三畳紀（約2億5000万年前〜）",
    enDivergenceEra: "Permian to Triassic (approx. 250 million years ago onward)",
    representativeGenera: ["イチョウ属（Ginkgo）"],
    evolutionEvents: ["裸子植物から分岐した独立した系統", "中生代に多様化し現在は1種に縮小"],
    enEvolutionEvents: ["An isolated lineage that diverged early among gymnosperms", "Diversified during the Mesozoic but reduced to a single species today"],
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
    enOverview: "A family including birches, alders, and hazels. Distributed in temperate to boreal regions of the Northern Hemisphere, characterized by white bark and long catkin inflorescences. Alders form symbiotic associations with nitrogen-fixing Frankia bacteria and are pioneer species on wetlands and disturbed sites.",
    characteristics: [
      "尾状花序（長いひも状の花序）",
      "風媒花",
      "果実は翼のある小堅果",
      "白い樹皮がはがれやすい種が多い",
    ],
    enCharacteristics: ["Catkins (long, pendulous inflorescences)", "Wind-pollinated", "Fruit is a small winged nutlet", "Many species have peeling white bark"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ブナ目 > カバノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Fagales > Betulaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "カバノキ属（Betula）",
      "ハンノキ属（Alnus）",
      "ハシバミ属（Corylus）",
    ],
    evolutionEvents: ["北半球冷温帯林の形成に貢献"],
    enEvolutionEvents: ["Contributed to the formation of cool-temperate forests in the Northern Hemisphere"],
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
    enOverview: "A family including hydrangeas and Deutzia. The center of diversity is in East Asia. Transferred from Scrophulariales to Cornales under the APG system. Distinguished by ornamental sterile flowers with enlarged sepals.",
    characteristics: [
      "装飾花（萼片が発達した大型の不稔花）をもつ",
      "土壌pHにより花色が変化するものがある",
      "落葉低木〜高木",
      "対生葉",
    ],
    enCharacteristics: ["Ornamental sterile flowers with enlarged, showy sepals", "Flower color changes with soil pH in some species", "Deciduous shrubs to trees", "Opposite leaves"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ミズキ目 > アジサイ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Cornales > Hydrangeaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "アジサイ属（Hydrangea）",
      "ウツギ属（Deutzia）",
    ],
    evolutionEvents: ["装飾花による送粉効率の向上"],
    enEvolutionEvents: ["Improved pollination efficiency through ornamental sterile flowers"],
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
    enOverview: "A family including Zelkova, elms, and hackberries. Mostly deciduous tall trees widely distributed in temperate regions of the Northern Hemisphere. Characterized by asymmetric leaf bases. Wind-pollinated, with many species producing winged fruits.",
    characteristics: [
      "葉の基部が左右非対称",
      "単葉互生で縁に鋸歯",
      "風媒花（花は小さく目立たない）",
      "果実は翼果または核果",
    ],
    enCharacteristics: ["Asymmetric leaf bases", "Simple, alternate leaves with serrate margins", "Wind-pollinated (flowers small and inconspicuous)", "Fruit is a samara or drupe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > バラ目 > ニレ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Rosales > Ulmaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
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
    enOverview: "A family including morning glories, bindweeds, and sweet potatoes. Many species are climbing vines, characterized by funnel-shaped flowers. Sweet potato is an important food crop. Approximately 58 genera and 1,880 species worldwide.",
    characteristics: [
      "ラッパ（じょうご）状の合弁花",
      "つる性（左巻きが多い）",
      "葉はハート形〜3裂が多い",
      "茎を切ると乳液が出ることがある",
    ],
    enCharacteristics: ["Funnel-shaped sympetalous flowers", "Twining vines (mostly sinistrose/left-twining)", "Leaves mostly cordate to 3-lobed", "Stems may exude milky latex when cut"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ナス目 > ヒルガオ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Solanales > Convolvulaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "アサガオ属（Ipomoea）",
      "ヒルガオ属（Calystegia）",
    ],
    evolutionEvents: ["つる性による他植物を利用した成長戦略"],
    enEvolutionEvents: ["Climbing growth strategy utilizing other plants as support"],
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
    enOverview: "A family represented solely by the extant genus Equisetum (horsetails). Tree-sized species once formed Carboniferous forests, but only herbaceous species survive today. Characterized by jointed stems with whorled branches and leaves. A spore-producing plant (seedless).",
    characteristics: [
      "茎に節があり、節ごとに輪生する側枝",
      "葉は退化して鱗片状（節に鞘として残る）",
      "茎にシリカ（ケイ素）を含み硬い",
      "胞子嚢穂（胞子を作る穂）をつける",
    ],
    enCharacteristics: ["Stems with distinct nodes; whorled branches at each node", "Leaves reduced to scale-like sheaths at the nodes", "Stems contain silica, making them rigid and abrasive", "Produce strobili (spore-bearing cones)"],
    phylogeneticPosition: "維管束植物 > シダ植物 > トクサ目 > トクサ科",
    enPhylogeneticPosition: "Vascular plants > Ferns > Equisetales > Equisetaceae",
    divergenceEra: "古生代デボン紀（約4億年前〜）",
    enDivergenceEra: "Paleozoic Devonian (approx. 400 million years ago onward)",
    representativeGenera: ["トクサ属（Equisetum）"],
    evolutionEvents: ["石炭紀に木本（高さ30m超）として繁栄", "現代では草本のみに縮小"],
    enEvolutionEvents: ["Thrived as tree-sized plants (over 30 m tall) during the Carboniferous", "Reduced to herbaceous forms only in the modern era"],
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
    enOverview: "A small family including Osmunda (royal ferns) and related genera. One of the most ancient fern lineages, with a fossil record dating back to the Triassic. Distinguished by the separation of sterile (vegetative) and fertile (spore-bearing) fronds.",
    characteristics: [
      "栄養葉と胞子葉（または胞子嚢をつける部分）が分かれる",
      "大型で羽状複葉",
      "若芽は渦巻き状に巻いて展開する（ゼンマイ）",
      "根茎は太く直立する",
    ],
    enCharacteristics: ["Sterile (vegetative) and fertile (sporangium-bearing) fronds are separate", "Large, pinnately compound fronds", "Young fronds unfurl from coiled fiddleheads", "Rhizome thick and erect"],
    phylogeneticPosition: "維管束植物 > シダ植物 > ゼンマイ目 > ゼンマイ科",
    enPhylogeneticPosition: "Vascular plants > Ferns > Osmundales > Osmundaceae",
    divergenceEra: "三畳紀（約2億5000万年前〜）",
    enDivergenceEra: "Triassic (approx. 250 million years ago onward)",
    representativeGenera: ["ゼンマイ属（Osmunda）"],
    evolutionEvents: ["シダ植物の古い系統として「生きた化石」的存在"],
    enEvolutionEvents: ["A 'living fossil' lineage among ferns"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ゼンマイ科" },
    ],
  },

  // ── コウヤワラビ科 ──────────────────────────────────────
  {
    id: "onocleaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Matteuccia_struthiopteris_-_Strau%C3%9Fenfarn.jpg",
    jaName: "コウヤワラビ科",
    enName: "Sensitive Fern family",
    scientificName: "Onocleaceae",
    order: "シダ目",
    overview:
      "コウヤワラビ・クサソテツ（コゴミ）・イヌガンソクなどを含む小さな科。栄養葉と胞子葉の二形性が顕著で、胞子葉は球状に丸まった小羽片が数珠状に連なる独特の形態をとる。北半球の温帯に分布。",
    enOverview: "A small fern family including Onoclea, Matteuccia (ostrich fern / kogomi), and Pentarhizidium. Notable for pronounced frond dimorphism: fertile fronds bear bead-like, tightly rolled pinnae. Distributed in temperate regions of the Northern Hemisphere.",
    characteristics: [
      "栄養葉と胞子葉の二形性が顕著",
      "胞子葉は球状に丸まった小羽片が数珠状",
      "栄養葉は大型の羽状複葉",
      "湿った林床や水辺に生育",
    ],
    enCharacteristics: ["Pronounced dimorphism between sterile and fertile fronds", "Fertile fronds with bead-like, tightly rolled pinnae", "Sterile fronds large, pinnately compound", "Grows in moist forest floors and near water"],
    phylogeneticPosition: "維管束植物 > シダ植物 > シダ目 > コウヤワラビ科",
    enPhylogeneticPosition: "Vascular plants > Ferns > Polypodiales > Onocleaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (approx. 100 million years ago onward)",
    representativeGenera: ["コウヤワラビ属（Onoclea）", "クサソテツ属（Matteuccia）"],
    evolutionEvents: ["胞子葉の二形性という独自の進化"],
    enEvolutionEvents: ["Distinctive evolution of frond dimorphism for spore dispersal"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コウヤワラビ科" },
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
    enOverview: "A large family that merged Aceraceae and Hippocastanaceae under the APG system. Includes maples, horse chestnuts, and soapberries. A key evolutionary innovation is the propeller-shaped samara for wind dispersal. Approximately 2,000 species, widely distributed from temperate to tropical regions.",
    characteristics: [
      "多くは対生複葉または掌状裂葉",
      "翼果（プロペラ状果実）による風散布（カエデ属）",
      "秋の紅葉・黄葉が美しい種が多い",
      "花は小さく、蜜を出して虫媒",
    ],
    enCharacteristics: ["Mostly opposite compound or palmately lobed leaves", "Samaras (propeller-shaped winged fruits) for wind dispersal (Acer)", "Many species display beautiful autumn foliage (red and yellow)", "Flowers small, nectariferous, insect-pollinated"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ムクロジ目 > ムクロジ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Sapindales > Sapindaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "カエデ属（Acer）",
      "トチノキ属（Aesculus）",
      "ムクロジ属（Sapindus）",
    ],
    evolutionEvents: ["翼果による効率的な風散布の獲得", "秋の紅葉・黄葉（アントシアニン・カロテノイド蓄積）"],
    enEvolutionEvents: ["Acquisition of efficient wind dispersal via samaras", "Autumn leaf coloration (anthocyanin and carotenoid accumulation)"],
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
    enOverview: "A family including flowering dogwood, kousa dogwood, and Cornus. Widely distributed in temperate regions of the Northern Hemisphere. Many species have large, showy involucral bracts that resemble petals, making them popular ornamentals. Closely related to Apiales in the APG system.",
    characteristics: [
      "総苞片が花弁状に発達する種が多い（ハナミズキ・ヤマボウシ）",
      "対生葉で弧状脈が目立つ",
      "果実は核果（液果状）",
      "落葉または常緑の低木〜高木",
    ],
    enCharacteristics: ["Large petaloid involucral bracts in many species (Cornus florida, C. kousa)", "Opposite leaves with prominent arcuate venation", "Fruit is a drupe", "Deciduous or evergreen shrubs to trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > ミズキ目 > ミズキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Cornales > Cornaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ミズキ属（Cornus）",
    ],
    evolutionEvents: ["大型総苞片による送粉者誘引の獲得"],
    enEvolutionEvents: ["Acquisition of large involucral bracts for pollinator attraction"],
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
    enOverview: "A family including willows and poplars. Broadly expanded under the APG system to incorporate former Flacourtiaceae and other tropical genera. Commonly found near water and in wetlands; characterized by wind dispersal via cottony seed hairs (willow catkin fluff).",
    characteristics: [
      "雌雄異株（ヤナギ・ポプラ）",
      "尾状花序（柳の穂）",
      "種子に綿毛がつき風散布（柳絮）",
      "水辺・湿地を好む種が多い",
    ],
    enCharacteristics: ["Dioecious (willows and poplars)", "Catkin inflorescences", "Seeds with cottony hairs for wind dispersal", "Many species prefer riparian and wetland habitats"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キントラノオ目 > ヤナギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Malpighiales > Salicaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ヤナギ属（Salix）",
      "ポプラ属（Populus）",
    ],
    evolutionEvents: ["綿毛つき種子による遠距離風散布の獲得", "水辺環境への適応（柔軟な枝・根系）"],
    enEvolutionEvents: ["Acquisition of long-distance wind dispersal via cottony seeds", "Adaptation to riparian environments (flexible branches and root systems)"],
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
    enOverview: "A family including red spider lilies, daffodils, onions, and chives. Under the APG system, it now incorporates the Allioideae (formerly in Liliaceae and Alliaceae). Many species have beautiful flowers and are widely cultivated as ornamentals. Some species contain toxic alkaloids such as lycorine.",
    characteristics: [
      "花被片6枚が2輪に並ぶ",
      "地下に鱗茎（球根）をもつ種が多い",
      "葉は線形〜帯状",
      "アルカロイドを含む有毒種がある",
    ],
    enCharacteristics: ["6 tepals arranged in two whorls", "Many species have underground bulbs", "Leaves linear to strap-shaped", "Some species contain toxic alkaloids"],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > ヒガンバナ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Asparagales > Amaryllidaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ヒガンバナ属（Lycoris）",
      "スイセン属（Narcissus）",
      "ネギ属（Allium）",
    ],
    evolutionEvents: ["鱗茎による養分貯蔵と季節的休眠の獲得", "リコリン等アルカロイドによる草食動物忌避"],
    enEvolutionEvents: ["Acquisition of nutrient storage and seasonal dormancy via bulbs", "Herbivore deterrence through alkaloids such as lycorine"],
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
    enOverview: "A monocot family including Commelina (dayflowers) and Tradescantia (spiderworts). Characterized by ephemeral flowers that bloom in the morning and close by midday. Mainly distributed in tropical and subtropical regions, with a history of use in cytological and genetic research.",
    characteristics: [
      "1日限りで閉じる一日花",
      "花被片3枚（外花被）＋3枚（内花被、うち2枚が青く目立つ）",
      "茎の節が膨らみ、节から根が出やすい",
      "葉は互生、葉鞘をもつ",
    ],
    enCharacteristics: ["Ephemeral flowers lasting only one day", "3 outer tepals + 3 inner tepals (2 of which are conspicuously blue)", "Swollen stem nodes that readily produce adventitious roots", "Leaves alternate, with leaf sheaths"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ目 > ツユクサ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Commelinales > Commelinaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "ツユクサ属（Commelina）",
      "ムラサキツユクサ属（Tradescantia）",
    ],
    evolutionEvents: ["一日花による効率的な送粉", "節からの不定根発生による栄養繁殖"],
    enEvolutionEvents: ["Efficient pollination through ephemeral flowers", "Vegetative propagation via adventitious roots from stem nodes"],
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
    enOverview: "Extensively reorganized under the APG system; many former members transferred to Asparagaceae, Amaryllidaceae, and other families. The current narrow circumscription centers on bulbous perennials such as Lilium (lilies), Tulipa (tulips), and Erythronium (trout lilies).",
    characteristics: [
      "地下に鱗茎（球根）をもつ",
      "花被片6枚（外3＋内3）",
      "葉脈は平行脈（単子葉類）",
      "花が大きく目立つ種が多い",
    ],
    enCharacteristics: ["Underground bulbs present", "6 tepals (3 outer + 3 inner)", "Parallel leaf venation (monocot)", "Many species have large, showy flowers"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ユリ目 > ユリ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Liliales > Liliaceae",
    divergenceEra: "白亜紀後期",
    enDivergenceEra: "Late Cretaceous",
    representativeGenera: [
      "ユリ属（Lilium）",
      "チューリップ属（Tulipa）",
      "カタクリ属（Erythronium）",
    ],
    evolutionEvents: ["鱗茎による越冬・養分蓄積戦略", "大型花による送粉者誘引"],
    enEvolutionEvents: ["Overwintering and nutrient storage strategy via bulbs", "Pollinator attraction through large, conspicuous flowers"],
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
    enOverview: "A family including Geranium (cranesbills) and Pelargonium (garden geraniums). Characterized by explosive ballistic seed dispersal when fruits ripen. Some species are known as traditional medicinal plants (e.g., Geranium thunbergii).",
    characteristics: [
      "5花弁の花",
      "果実が成熟すると反り返り種子を飛ばす（弾性散布）",
      "葉は掌状〜羽状複葉、多くに独特の香り",
      "茎・葉に腺毛をもつ種が多い",
    ],
    enCharacteristics: ["5-petaled flowers", "Fruits curl back explosively at maturity, catapulting seeds (ballistic dispersal)", "Leaves palmately to pinnately compound, many with distinctive scent", "Many species have glandular hairs on stems and leaves"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > フウロソウ目 > フウロソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Geraniales > Geraniaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "フウロソウ属（Geranium）",
      "テンジクアオイ属（Pelargonium）",
    ],
    evolutionEvents: ["弾性果実（爆弾状散布）による効率的な種子散布"],
    enEvolutionEvents: ["Efficient seed dispersal via explosive ballistic fruits"],
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
    enOverview: "A family including bellflowers (Platycodon, Campanula) and Lobelia. Characterized by bell-shaped or star-shaped flowers. Placed in Asterales under the APG system, with some classifications merging Lobeliaceae into this family. The balloon flower (Platycodon) is one of Japan's 'Seven Herbs of Autumn.'",
    characteristics: [
      "合弁花で鐘形〜星形",
      "花弁5枚が合着",
      "乳液（白い汁）を含む種が多い",
      "葉は互生、単葉",
    ],
    enCharacteristics: ["Sympetalous flowers, bell-shaped to stellate", "5 fused petals", "Many species contain milky latex", "Leaves alternate, simple"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キク目 > キキョウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Asterales > Campanulaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "キキョウ属（Platycodon）",
      "ホタルブクロ属（Campanula）",
    ],
    evolutionEvents: ["鐘形花冠による特定ハチ類との送粉共生"],
    enEvolutionEvents: ["Pollination mutualism with specific bee species via bell-shaped corollas"],
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
    enOverview: "A family including water dropwort, mitsuba, carrots, and parsley. Characterized by compound umbels in which numerous small flowers are arranged in umbrella-like clusters. Contains edible, medicinal, and poisonous species that can be easily confused due to similar appearance.",
    characteristics: [
      "複散形花序（傘状に広がる）",
      "茎は中空または髄がある",
      "葉は羽状複葉が多く、葉鞘をもつ",
      "精油を含み独特の香り",
    ],
    enCharacteristics: ["Compound umbel inflorescence (umbrella-shaped)", "Stems hollow or with pith", "Leaves mostly pinnately compound, with sheathing bases", "Contain essential oils with distinctive aromas"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > セリ目 > セリ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Apiales > Apiaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "セリ属（Oenanthe）",
      "ニンジン属（Daucus）",
      "ドクニンジン属（Conium）",
    ],
    evolutionEvents: ["複散形花序による多数の小花の集合で送粉効率を向上"],
    enEvolutionEvents: ["Enhanced pollination efficiency through aggregation of numerous small flowers in compound umbels"],
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
    enOverview: "A large family incorporating many former families (Ruscaceae, Hyacinthaceae, Agavaceae, etc.) under the APG system. Includes asparagus, liriope, lily of the valley, grape hyacinth, and others. Important as shade- and drought-tolerant ground cover plants.",
    characteristics: [
      "花被片6枚（3＋3）",
      "地下茎・球根・根茎をもつ種が多い",
      "耐陰性が高く、林床・日陰でも生育",
      "葉脈は平行脈（単子葉類）",
    ],
    enCharacteristics: ["6 tepals (3 + 3)", "Many species have rhizomes, bulbs, or corms", "Highly shade-tolerant, growing on forest floors and in shaded areas", "Parallel leaf venation (monocot)"],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > キジカクシ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Asparagales > Asparagaceae",
    divergenceEra: "白亜紀後期",
    enDivergenceEra: "Late Cretaceous",
    representativeGenera: [
      "クサスギカズラ属（Asparagus）",
      "ヤブラン属（Liriope）",
      "スズラン属（Convallaria）",
    ],
    evolutionEvents: ["耐陰性の獲得による林床環境への進出"],
    enEvolutionEvents: ["Colonization of forest floor habitats through acquisition of shade tolerance"],
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
    enOverview: "One of the most ancient lineages among extant gymnosperms. Dioecious, characterized by large pinnately compound leaves and cones (female plants bear seeds directly). In Japan, a single species (Cycas revoluta) occurs naturally near coasts of the southwestern islands.",
    characteristics: [
      "雌雄異株",
      "大型の羽状複葉で、幹頂部に螺旋状に密生",
      "雄球果は直立した円柱状、雌株は大型の羽状心皮に種子をつける",
      "根にシアノバクテリアが共生し窒素固定を行うサンゴ根をもつ",
    ],
    enCharacteristics: ["Dioecious", "Large pinnately compound leaves densely spiraling at the trunk apex", "Male cones erect and cylindrical; female plants bear seeds on large pinnate megasporophylls", "Coralloid roots harboring symbiotic cyanobacteria for nitrogen fixation"],
    phylogeneticPosition: "裸子植物 > ソテツ綱 > ソテツ目 > ソテツ科",
    enPhylogeneticPosition: "Gymnosperms > Cycadopsida > Cycadales > Cycadaceae",
    divergenceEra: "古生代ペルム紀〜中生代三畳紀（約2億8000万年前〜）",
    enDivergenceEra: "Paleozoic Permian to Mesozoic Triassic (approx. 280 million years ago onward)",
    representativeGenera: ["ソテツ属（Cycas）"],
    evolutionEvents: [
      "古生代末の大量絶滅後に生き残った「生きた化石」的系統",
      "シアノバクテリアとの共生根（サンゴ根）の獲得",
    ],
    enEvolutionEvents: ["A 'living fossil' lineage that survived the end-Paleozoic mass extinction", "Acquisition of coralloid roots with symbiotic cyanobacteria"],
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
    enOverview: "A monotypic family endemic to Japan, consisting of a single species (Sciadopitys verticillata, Japanese umbrella pine). Fossil records extend back to the Cretaceous, indicating a formerly wider distribution. The whorled 'leaves' are actually cladodes (fused short shoots) rather than true leaves.",
    characteristics: [
      "輪生する葉状枝（仮葉）は2枚の葉が癒合したもの",
      "球果は木質化し、鱗片数が比較的少ない",
      "樹皮は赤褐色で縦に剥がれる",
      "日本の固有属・固有種（コウヤマキ1種のみ）",
    ],
    enCharacteristics: ["Whorled cladodes (pseudo-leaves) formed by fusion of two leaves", "Cones are woody with relatively few scales", "Bark reddish-brown, peeling vertically", "Endemic to Japan (single genus and species: Sciadopitys verticillata)"],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > コウヤマキ科",
    enPhylogeneticPosition: "Gymnosperms > Conifers > Pinales > Sciadopityaceae",
    divergenceEra: "中生代白亜紀（約1億4000万年前〜）",
    enDivergenceEra: "Mesozoic Cretaceous (approx. 140 million years ago onward)",
    representativeGenera: ["コウヤマキ属（Sciadopitys）"],
    evolutionEvents: [
      "白亜紀〜第三紀に北半球で広域分布していたが、現在は日本に隔離分布する残存系統",
      "葉状枝（短枝の癒合）という独特の器官形態の進化",
    ],
    enEvolutionEvents: ["A relictual lineage that was widely distributed across the Northern Hemisphere from the Cretaceous to Tertiary, now disjunctly surviving only in Japan", "Evolution of a unique organ morphology: cladodes formed by fusion of short shoots"],
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
    enOverview: "A conifer family distributed mainly in tropical and subtropical regions of the Southern Hemisphere. In Japan, Nageia and Podocarpus species grow naturally in warm-temperate zones. Seeds are often enclosed in a fleshy receptacle (epimatium), adapted for bird dispersal.",
    characteristics: [
      "種子が肉質の種托（エピマティウム）に包まれるものが多い",
      "葉は扁平・針状・鱗片状と多様",
      "球果は小さく、鱗片数が少ない",
      "南半球に最も多様性が集中する",
    ],
    enCharacteristics: ["Seeds often enclosed in a fleshy epimatium (receptacle)", "Leaves variable: flat, needle-like, or scale-like", "Cones small with few scales", "Greatest diversity concentrated in the Southern Hemisphere"],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > マキ科",
    enPhylogeneticPosition: "Gymnosperms > Conifers > Pinales > Podocarpaceae",
    divergenceEra: "中生代ジュラ紀（約1億8000万年前〜）",
    enDivergenceEra: "Mesozoic Jurassic (approx. 180 million years ago onward)",
    representativeGenera: [
      "マキ属（Podocarpus）",
      "ナギ属（Nageia）",
    ],
    evolutionEvents: [
      "肉質種托による鳥類散布への適応",
      "ゴンドワナ大陸の分裂に伴う南半球への分布拡大",
    ],
    enEvolutionEvents: ["Adaptation to bird dispersal via fleshy receptacles", "Distribution expansion into the Southern Hemisphere associated with Gondwana breakup"],
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
    enOverview: "An ancient conifer family that flourished globally during the Mesozoic. Now restricted to the Southern Hemisphere, though fossils are widely found in the Northern Hemisphere. Not native to Japan but cultivated in parks and botanical gardens.",
    characteristics: [
      "大型の球果と大きな種子",
      "葉は卵形〜針形で、枝に螺旋状または対生につく",
      "球果は熟すと全体が崩壊して種子を散布する",
    ],
    enCharacteristics: ["Large cones and large seeds", "Leaves ovate to needle-like, spirally or oppositely arranged on branches", "Cones disintegrate at maturity to release seeds"],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > ナンヨウスギ科",
    enPhylogeneticPosition: "Gymnosperms > Conifers > Pinales > Araucariaceae",
    divergenceEra: "中生代三畳紀末〜ジュラ紀（約2億年前〜）",
    enDivergenceEra: "Late Mesozoic Triassic to Jurassic (approx. 200 million years ago onward)",
    representativeGenera: [
      "ナンヨウスギ属（Araucaria）",
      "アガシス属（Agathis）",
    ],
    evolutionEvents: [
      "中生代の恐竜時代に北半球でも繁栄し、白亜紀末以降に南半球へ後退",
      "1994年発見のウォレミア松（Wollemia）は「生きた化石」として注目",
    ],
    enEvolutionEvents: ["Flourished in the Northern Hemisphere during the Mesozoic dinosaur era; retreated to the Southern Hemisphere after the late Cretaceous", "Wollemia nobilis, discovered in 1994, gained attention as a 'living fossil'"],
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
    enOverview: "A small family of evergreen conifers distributed in East Asia. In Japan, Cephalotaxus harringtonii grows naturally in moist montane forests. Seeds are enclosed in a drupe-like aril, resembling Taxaceae but phylogenetically independent.",
    characteristics: [
      "葉は線形〜披針形で、2列に並び、裏面に2本の白色気孔帯をもつ",
      "種子は仮種皮（肉質の外層）に包まれ、核果状",
      "雌雄異株",
    ],
    enCharacteristics: ["Leaves linear to lanceolate, arranged in two ranks, with two white stomatal bands on the undersurface", "Seeds enclosed in a fleshy aril, drupe-like", "Dioecious"],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > イヌガヤ科",
    enPhylogeneticPosition: "Gymnosperms > Conifers > Pinales > Cephalotaxaceae",
    divergenceEra: "中生代白亜紀（約1億年前〜）",
    enDivergenceEra: "Mesozoic Cretaceous (approx. 100 million years ago onward)",
    representativeGenera: ["イヌガヤ属（Cephalotaxus）"],
    evolutionEvents: [
      "肉質仮種皮による動物散布への収斂進化（イチイ科と独立に）",
      "東アジアへの分布収縮",
    ],
    enEvolutionEvents: ["Convergent evolution toward animal dispersal via fleshy arils (independently from Taxaceae)", "Range contraction to East Asia"],
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
    enOverview: "A family of evergreen conifers distributed mainly in the Northern Hemisphere. In Japan, Taxus cuspidata and T. cuspidata var. nana occur naturally. Seeds are enclosed in a fleshy red aril, but the seed itself is toxic. An unusual conifer that does not produce cones.",
    characteristics: [
      "球果をもたず、種子は赤い肉質の仮種皮（アリルス）に包まれる",
      "葉は線形で2列に配列し、裏面に淡い気孔帯",
      "雌雄異株",
      "種子・葉・樹皮にタキシンという有毒アルカロイドを含む（仮種皮の果肉は無毒）",
    ],
    enCharacteristics: ["No cones; seeds enclosed in a fleshy red aril", "Leaves linear, arranged in two ranks, with pale stomatal bands beneath", "Dioecious", "Seeds, leaves, and bark contain the toxic alkaloid taxine (aril flesh is non-toxic)"],
    phylogeneticPosition: "裸子植物 > 球果植物 > マツ目 > イチイ科",
    enPhylogeneticPosition: "Gymnosperms > Conifers > Pinales > Taxaceae",
    divergenceEra: "中生代ジュラ紀（約1億8000万年前〜）",
    enDivergenceEra: "Mesozoic Jurassic (approx. 180 million years ago onward)",
    representativeGenera: [
      "イチイ属（Taxus）",
      "カヤ属（Torreya）",
    ],
    evolutionEvents: [
      "球果の消失と肉質仮種皮による鳥類・哺乳類散布への適応",
      "抗がん剤タキソール（パクリタキセル）の原料として医学的に注目",
    ],
    enEvolutionEvents: ["Loss of cones and adaptation to bird and mammal dispersal via fleshy arils", "Medically notable as the source of the anticancer drug Taxol (paclitaxel)"],
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
    enOverview: "A gymnosperm family belonging to the Gnetales, distributed in arid regions. Stems are green and photosynthetic; leaves are reduced to scales. Includes Ephedra sinica, known as a source of the traditional Chinese medicine ma-huang and the alkaloid ephedrine.",
    characteristics: [
      "茎は緑色・節があり光合成を行う",
      "葉は鱗片状に退化し、対生または輪生",
      "雌雄異株または同株",
      "乾燥・荒廃地に強い",
    ],
    enCharacteristics: ["Stems green, jointed, and photosynthetic", "Leaves reduced to scales, opposite or whorled", "Dioecious or monoecious", "Highly tolerant of arid and degraded habitats"],
    phylogeneticPosition: "裸子植物 > グネツム類 > グネツム目 > マオウ科",
    enPhylogeneticPosition: "Gymnosperms > Gnetophytes > Gnetales > Ephedraceae",
    divergenceEra: "中生代白亜紀（約1億2000万年前〜）",
    enDivergenceEra: "Mesozoic Cretaceous (approx. 120 million years ago onward)",
    representativeGenera: ["マオウ属（Ephedra）"],
    evolutionEvents: [
      "乾燥環境への高度な適応（茎による光合成、葉の退化）",
      "アルカロイド（エフェドリン）の生合成経路の獲得",
    ],
    enEvolutionEvents: ["Advanced adaptation to arid environments (stem photosynthesis, leaf reduction)", "Acquisition of the biosynthetic pathway for the alkaloid ephedrine"],
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
    enOverview: "Gymnosperms distributed in tropical regions, either as climbing or woody plants. Their vessel elements, opposite leaves, and perianth-like structures resemble those of angiosperms, leading to prolonged debate about their relationship to flowering plants. In Southeast Asia, the seeds of some species are edible.",
    characteristics: [
      "対生する幅広の葉（網状脈をもち被子植物の葉に似る）",
      "木部に導管をもつ（ほかの裸子植物には稀）",
      "花に花被片（苞）があり、被子植物の花に収斂",
      "雌雄異株",
    ],
    enCharacteristics: ["Broad opposite leaves with reticulate venation resembling angiosperm leaves", "Vessel elements present in the xylem (rare among other gymnosperms)", "Flowers with perianth-like bracts, convergent with angiosperm flowers", "Dioecious"],
    phylogeneticPosition: "裸子植物 > グネツム類 > グネツム目 > グネツム科",
    enPhylogeneticPosition: "Gymnosperms > Gnetales > Gnetales > Gnetaceae",
    divergenceEra: "中生代白亜紀（約1億年前〜）",
    enDivergenceEra: "Mesozoic Cretaceous (ca. 100 Ma onwards)",
    representativeGenera: ["グネツム属（Gnetum）"],
    evolutionEvents: [
      "被子植物様形質（導管・対生葉・花被）の収斂的進化",
      "熱帯林環境への適応とつる性生活型の獲得",
    ],
    enEvolutionEvents: ["Convergent evolution of angiosperm-like traits (vessels, opposite leaves, perianth)", "Adaptation to tropical forest environments and acquisition of a climbing habit"],
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
    enOverview: "A small family of aquatic angiosperms positioned at the base of the angiosperm phylogeny. Brasenia schreberi is native to Japan, and its young leaves and stems are eaten as a delicacy, prized for their mucilaginous coating.",
    characteristics: [
      "水中または水面に浮かぶ葉をもつ水生植物",
      "ジュンサイの新芽は厚いゼラチン質のムチレージで覆われる",
      "花弁・萼片は各3枚",
    ],
    enCharacteristics: ["Aquatic plants with submerged or floating leaves", "Young shoots of Brasenia are covered with a thick gelatinous mucilage", "Petals and sepals in sets of 3"],
    phylogeneticPosition: "被子植物 > 基部被子植物 > スイレン目 > ジュンサイ科",
    enPhylogeneticPosition: "Angiosperms > Basal angiosperms > Nymphaeales > Cabombaceae",
    divergenceEra: "白亜紀前期〜中期（約1億〜9000万年前）",
    enDivergenceEra: "Early to mid-Cretaceous (ca. 100–90 Ma)",
    representativeGenera: [
      "ジュンサイ属（Brasenia）",
      "ハゴロモモ属（Cabomba）",
    ],
    evolutionEvents: [
      "被子植物の基部系統における水生環境への独立した適応",
      "ムチレージ（粘液）による植食者防御機構の進化",
    ],
    enEvolutionEvents: ["Independent adaptation to aquatic environments within the basal angiosperm lineage", "Evolution of mucilage-based herbivore defense mechanisms"],
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
    enOverview: "A family of aquatic plants distributed in temperate to tropical regions worldwide. Positioned at the base of the angiosperm phylogeny, characterized by large floating leaves and showy flowers. Nymphaea tetragona is native to Japan, and numerous cultivars are planted in ponds.",
    characteristics: [
      "大型の円形〜楕円形の浮葉（葉柄が長く水面に浮く）",
      "花は多数の花弁・萼片・雄しべをもち、らせん配列",
      "根茎が発達し水底の泥中に固定",
    ],
    enCharacteristics: ["Large round to elliptical floating leaves with long petioles", "Flowers with numerous petals, sepals, and stamens in spiral arrangement", "Well-developed rhizomes anchored in bottom mud"],
    phylogeneticPosition: "被子植物 > 基部被子植物 > スイレン目 > スイレン科",
    enPhylogeneticPosition: "Angiosperms > Basal angiosperms > Nymphaeales > Nymphaeaceae",
    divergenceEra: "白亜紀前期（約1億1000万年前〜）",
    enDivergenceEra: "Early Cretaceous (ca. 110 Ma onwards)",
    representativeGenera: [
      "スイレン属（Nymphaea）",
      "コウホネ属（Nuphar）",
      "オニバス属（Euryale）",
    ],
    evolutionEvents: [
      "被子植物の初期多様化における水生適応の一事例",
      "花部のらせん配列という原始的形質の保持",
    ],
    enEvolutionEvents: ["An example of aquatic adaptation during early angiosperm diversification", "Retention of the primitive trait of spiral arrangement in floral organs"],
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
    enOverview: "A family recognized under APG III, including Schisandra, Kadsura, and Illicium. Belongs to the basal angiosperm lineage. In China, Schisandra chinensis (five-flavor berry) is an important traditional medicinal plant.",
    characteristics: [
      "木本性のつる植物または小高木",
      "花は単性で、花被片は6〜12枚程度、らせん配列",
      "果実は集合果（液果が多数集まる）",
      "芳香性の成分を多くもつ",
    ],
    enCharacteristics: ["Woody climbers or small trees", "Flowers unisexual with 6–12 tepals in spiral arrangement", "Fruit an aggregate of berries", "Rich in aromatic compounds"],
    phylogeneticPosition: "被子植物 > 基部被子植物（基部双子葉類） > マツブサ目 > マツブサ科",
    enPhylogeneticPosition: "Angiosperms > Basal angiosperms > Austrobaileyales > Schisandraceae",
    divergenceEra: "白亜紀前期（約1億2000万年前〜）",
    enDivergenceEra: "Early Cretaceous (ca. 120 Ma onwards)",
    representativeGenera: [
      "マツブサ属（Schisandra）",
      "サネカズラ属（Kadsura）",
      "シキミ属（Illicium）",
    ],
    evolutionEvents: [
      "基部被子植物の系統における芳香性化合物の多様化",
      "果実のらせん配列という原始的形質の保持",
    ],
    enEvolutionEvents: ["Diversification of aromatic compounds within the basal angiosperm lineage", "Retention of the primitive trait of spiral arrangement in fruit"],
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
    enOverview: "A small family whose phylogenetic position among angiosperms was long uncertain. Under APG III, it forms the sole family in Chloranthales. Sarcandra glabra is native to Japan and widely used as a New Year's ornamental for its beautiful red berries. Flowers are extremely simple, lacking petals and sepals.",
    characteristics: [
      "花は非常に単純で、花弁・萼片を欠く",
      "雄しべは1〜3個、雌しべは1個",
      "対生する葉で、鋸歯縁",
      "果実は核果状で赤く熟す（センリョウ）",
    ],
    enCharacteristics: ["Flowers extremely simple, lacking petals and sepals", "1–3 stamens and 1 pistil", "Opposite leaves with serrate margins", "Fruit drupe-like, ripening red (Sarcandra)"],
    phylogeneticPosition: "被子植物 > 基部被子植物 > センリョウ目 > センリョウ科",
    enPhylogeneticPosition: "Angiosperms > Basal angiosperms > Chloranthales > Chloranthaceae",
    divergenceEra: "白亜紀前期（約1億3000万年前〜）",
    enDivergenceEra: "Early Cretaceous (ca. 130 Ma onwards)",
    representativeGenera: [
      "センリョウ属（Chloranthus）",
    ],
    evolutionEvents: [
      "被子植物の初期進化において花の単純化（花弁・萼の喪失）が起きた系統",
      "白亜紀の化石花粉が多数知られ、被子植物初期分散の証拠となっている",
    ],
    enEvolutionEvents: ["A lineage in which floral simplification (loss of petals and sepals) occurred during early angiosperm evolution", "Numerous Cretaceous fossil pollen grains known, providing evidence for early angiosperm dispersal"],
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
    enOverview: "A family of about 3,600 species centered in the tropics. Black pepper is one of the most widely used spices in the world. Piper kadsura is native to southern Kyushu and the Ryukyu Islands in Japan.",
    characteristics: [
      "茎の節が膨らみ、しばしばつる性",
      "花は非常に小さく、花弁・萼を欠き、穂状花序につく",
      "葉は単葉・全縁で芳香をもつ",
    ],
    enCharacteristics: ["Swollen stem nodes, often climbing", "Flowers very small, lacking petals and sepals, borne in spicate inflorescences", "Leaves simple, entire, and aromatic"],
    phylogeneticPosition: "被子植物 > マグノリア類 > コショウ目 > コショウ科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Piperales > Piperaceae",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    enDivergenceEra: "Late Cretaceous (ca. 90 Ma onwards)",
    representativeGenera: [
      "コショウ属（Piper）",
      "サダソウ属（Peperomia）",
    ],
    evolutionEvents: [
      "熱帯林における林床・つる性生活型への適応",
      "胡椒アルカロイド（ピペリン）など防御化合物の多様化",
    ],
    enEvolutionEvents: ["Adaptation to understory and climbing habits in tropical forests", "Diversification of defensive alkaloids such as piperine"],
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
    enOverview: "Aristolochia and Asarum species are native to Japan. The flowers have distinctive morphology that attracts and temporarily traps insects for pollination. Known as the host plant for Chinese windmill butterfly larvae, and the coevolution between Luehdorfia butterflies and Asarum is also well documented.",
    characteristics: [
      "花は花弁を欠き、萼が花弁状に発達（しばしば臭気をもつ）",
      "筒状花の内壁に毛があり昆虫を一時的に閉じ込めて受粉させる",
      "葉は単葉・全縁、心形が多い",
      "アリストロキア酸（腎毒性・発がん性物質）を含む",
    ],
    enCharacteristics: ["Flowers lack petals; calyx is petaloid and often malodorous", "Inner wall of tubular flowers bears hairs that temporarily trap insects for pollination", "Leaves simple, entire, often cordate", "Contains aristolochic acid (nephrotoxic and carcinogenic)"],
    phylogeneticPosition: "被子植物 > マグノリア類 > コショウ目 > ウマノスズクサ科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Piperales > Aristolochiaceae",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    enDivergenceEra: "Late Cretaceous (ca. 90 Ma onwards)",
    representativeGenera: [
      "ウマノスズクサ属（Aristolochia）",
      "カンアオイ属（Asarum）",
    ],
    evolutionEvents: [
      "昆虫捕捉型の受粉メカニズムの進化",
      "ジャコウアゲハ・ギフチョウなどのチョウ類との共進化",
    ],
    enEvolutionEvents: ["Evolution of insect-trapping pollination mechanisms", "Coevolution with butterflies such as Byasa alcinous and Luehdorfia"],
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
    enOverview: "The largest family in Magnoliales with about 2,500 species centered in the tropics. Includes important fruit and aromatic plants such as sugar apple, cherimoya, and ylang-ylang. Ylang-ylang is cultivated in Okinawa. Flowers are fleshy and predominantly beetle-pollinated.",
    characteristics: [
      "花弁は6枚（内外各3枚）、肉質で芳香をもつ",
      "甲虫媒が多い",
      "雄しべ・心皮ともに多数でらせん配列（原始的形質）",
      "果実は集合果または分果",
    ],
    enCharacteristics: ["6 petals (3 inner and 3 outer), fleshy and fragrant", "Predominantly beetle-pollinated", "Numerous stamens and carpels in spiral arrangement (primitive trait)", "Fruit an aggregate or individual fruitlets"],
    phylogeneticPosition: "被子植物 > マグノリア類 > モクレン目 > バンレイシ科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Magnoliales > Annonaceae",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    enDivergenceEra: "Late Cretaceous (ca. 90 Ma onwards)",
    representativeGenera: [
      "バンレイシ属（Annona）",
      "イランイラン属（Cananga）",
    ],
    evolutionEvents: [
      "甲虫媒受粉という古典的な受粉様式の保持",
      "熱帯での果実の多様化と大型哺乳類による種子散布",
    ],
    enEvolutionEvents: ["Retention of beetle pollination as an ancestral pollination mode", "Diversification of fruits in the tropics and seed dispersal by large mammals"],
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
    enOverview: "A small family placed in Laurales under APG III. Chimonanthus praecox is native to China and widely planted in Japan, producing waxy yellow flowers in winter. Tepals and stamens are spirally arranged, retaining primitive angiosperm traits.",
    characteristics: [
      "花被片・雄しべはらせん配列で外側と内側が連続的に移行",
      "花はカップ状で芳香をもつ",
      "対生する葉で、揉むと芳香がある",
    ],
    enCharacteristics: ["Tepals and stamens in spiral arrangement with gradual transition from outer to inner", "Flowers cup-shaped and fragrant", "Opposite leaves, aromatic when crushed"],
    phylogeneticPosition: "被子植物 > マグノリア類 > クスノキ目 > ロウバイ科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Laurales > Calycanthaceae",
    divergenceEra: "白亜紀後期（約9000万年前〜）",
    enDivergenceEra: "Late Cretaceous (ca. 90 Ma onwards)",
    representativeGenera: [
      "ロウバイ属（Chimonanthus）",
      "カリカンサス属（Calycanthus）",
    ],
    evolutionEvents: [
      "花部のらせん配列という被子植物の原始的形質の保持",
      "昆虫誘引のための揮発性芳香成分の発達",
    ],
    enEvolutionEvents: ["Retention of spiral floral arrangement as a primitive angiosperm trait", "Development of volatile aromatic compounds for insect attraction"],
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
    enOverview: "A tropical family placed in Laurales under APG III. Hernandia nymphaeifolia is native to the Ryukyu Islands in Japan, found near mangrove forest margins along coasts. Fruits are enclosed in wing-like involucral bracts, adapted for wind and water dispersal.",
    characteristics: [
      "大型の葉（楯形または掌状に裂ける）",
      "果実は翼状の苞に包まれ、風散布・水流散布に適応",
      "花は小さく、花被片は4〜8枚",
    ],
    enCharacteristics: ["Large leaves (peltate or palmately lobed)", "Fruits enclosed in wing-like bracts, adapted for wind and water dispersal", "Flowers small with 4–8 tepals"],
    phylogeneticPosition: "被子植物 > マグノリア類 > クスノキ目 > ハスノハギリ科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Laurales > Hernandiaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前〜）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80 Ma onwards)",
    representativeGenera: [
      "ハスノハギリ属（Hernandia）",
    ],
    evolutionEvents: [
      "果実の翼状構造による長距離散布（島嶼への分散）への適応",
      "熱帯海岸環境への特化",
    ],
    enEvolutionEvents: ["Adaptation for long-distance dispersal to islands via winged fruit structures", "Specialization to tropical coastal environments"],
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
    enOverview: "A monotypic family (1 genus, 2 species) at the very base of the monocot phylogeny. Under APG III, it represents the sister group to all other monocots and one of the most ancient monocot lineages. Acorus calamus is native to Japan and used for traditional iris baths on Boys' Day.",
    characteristics: [
      "剣形の葉が2列に並ぶ",
      "肉穂花序に小さな両性花が密生",
      "根茎が横に伸び、特有の芳香をもつ",
      "湿地・水辺に生育",
    ],
    enCharacteristics: ["Sword-shaped leaves arranged in two ranks", "Small bisexual flowers densely packed on a spadix", "Creeping rhizome with a distinctive aroma", "Grows in wetlands and along waterways"],
    phylogeneticPosition: "被子植物 > 単子葉植物 > ショウブ目 > ショウブ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Acorales > Acoraceae",
    divergenceEra: "白亜紀後期（約1億年前〜）",
    enDivergenceEra: "Late Cretaceous (ca. 100 Ma onwards)",
    representativeGenera: ["ショウブ属（Acorus）"],
    evolutionEvents: [
      "単子葉植物の最基部系統として、単子葉類の起源を理解する鍵となる系統",
      "サトイモ科と独立に肉穂花序を進化させた収斂進化の例",
    ],
    enEvolutionEvents: ["A key lineage for understanding the origin of monocots as the most basal monocot group", "Convergent evolution of spadix inflorescence independently from Araceae"],
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
    enOverview: "A monocot family of aquatic or semi-aquatic plants. Sagittaria and Alisma are native to Japan, found in rice paddies and ponds. Leaves are sagittate (Sagittaria) or elliptical, and flowers typically have 3 white petals.",
    characteristics: [
      "水生または湿生の草本",
      "花弁3枚・萼片3枚",
      "多数の雌しべが集まった集合果（痩果の集合）",
      "葉は根生葉で矢尻形・心形・楕円形など多様",
    ],
    enCharacteristics: ["Aquatic or semi-aquatic herbs", "3 petals and 3 sepals", "Aggregate fruit of numerous achenes", "Basal leaves variable: sagittate, cordate, or elliptical"],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > オモダカ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Alismataceae",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    enDivergenceEra: "Paleogene (ca. 60–50 Ma)",
    representativeGenera: [
      "オモダカ属（Sagittaria）",
      "サジオモダカ属（Alisma）",
    ],
    evolutionEvents: [
      "水生環境への適応と多様な葉形の進化",
      "水田農業に伴い分布を拡大した雑草性種の出現",
    ],
    enEvolutionEvents: ["Adaptation to aquatic environments and evolution of diverse leaf shapes", "Emergence of weedy species that expanded with rice paddy agriculture"],
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
    enOverview: "An aquatic monocot family. Hydrocharis, Ottelia, and Hydrilla are native to Japan, found in ponds, rivers, and rice paddies. Includes diverse species adapted to freshwater, brackish, and marine environments with various growth forms.",
    characteristics: [
      "淡水〜海水まで幅広い水環境に適応",
      "沈水・浮水・抽水など多様な生育型",
      "花弁3枚・萼片3枚",
      "水媒または水面媒受粉をするものが多い",
    ],
    enCharacteristics: ["Adapted to a wide range of aquatic environments from freshwater to seawater", "Diverse growth forms: submerged, floating, and emergent", "3 petals and 3 sepals", "Many species pollinated by water (hydrophily) or at the water surface"],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > トチカガミ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Hydrocharitaceae",
    divergenceEra: "古第三紀（約6000万〜5500万年前）",
    enDivergenceEra: "Paleogene (ca. 60–55 Ma)",
    representativeGenera: [
      "トチカガミ属（Hydrocharis）",
      "クロモ属（Hydrilla）",
      "ミズオオバコ属（Ottelia）",
    ],
    evolutionEvents: [
      "淡水から海水への二次的適応",
      "水媒受粉の進化",
    ],
    enEvolutionEvents: ["Secondary adaptation from freshwater to marine environments", "Evolution of water pollination (hydrophily)"],
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
    enOverview: "One of the few flowering plants fully adapted to the marine environment. Zostera marina and Z. japonica are widely distributed in Japan, forming seagrass beds in sheltered bays that serve as habitats for diverse marine organisms. Has evolved submarine pollination.",
    characteristics: [
      "完全水中生の海生植物",
      "葉は線形で葉鞘をもち、海底に匍匐茎で広がる",
      "花は退化的で、花弁・萼を欠く",
      "糸状の花粉が水中を漂い受粉（水中媒）",
    ],
    enCharacteristics: ["Fully submerged marine plants", "Linear leaves with sheathing bases, spreading across the seafloor via rhizomes", "Flowers reduced, lacking petals and sepals", "Filamentous pollen drifts through water for submarine pollination"],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > アマモ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Zosteraceae",
    divergenceEra: "白亜紀末〜古第三紀（約7000万年前〜）",
    enDivergenceEra: "Latest Cretaceous to Paleogene (ca. 70 Ma onwards)",
    representativeGenera: [
      "アマモ属（Zostera）",
    ],
    evolutionEvents: [
      "陸上植物から海洋環境への完全な二次的適応（海草の進化）",
      "水中媒受粉と糸状花粉という独特の受粉システムの進化",
    ],
    enEvolutionEvents: ["Complete secondary adaptation from terrestrial to marine environments (evolution of seagrass)", "Evolution of a unique pollination system with submarine pollination and filamentous pollen"],
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
    enOverview: "A freshwater aquatic monocot family. Many species including Potamogeton, P. crispus, and P. oxyphyllus are native to Japan, found in ponds, rivers, and rice paddies.",
    characteristics: [
      "沈水または浮水の水生植物",
      "葉は線形〜楕円形で、沈水葉と浮葉の二形をもつ種がある",
      "穂状花序が水面上に出る（風媒）",
      "花は退化的で、花被片は4枚",
    ],
    enCharacteristics: ["Submerged or floating aquatic plants", "Leaves linear to elliptical; some species with dimorphic submerged and floating leaves", "Spicate inflorescences emerge above the water surface (wind-pollinated)", "Flowers reduced, with 4 tepals"],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > ヒルムシロ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Potamogetonaceae",
    divergenceEra: "白亜紀末〜古第三紀（約7000万年前〜）",
    enDivergenceEra: "Latest Cretaceous to Paleogene (ca. 70 Ma onwards)",
    representativeGenera: [
      "ヒルムシロ属（Potamogeton）",
    ],
    evolutionEvents: [
      "淡水水生環境への高度な適応と沈水生活型の確立",
      "風媒受粉への移行と花部の単純化",
    ],
    enEvolutionEvents: ["Advanced adaptation to freshwater aquatic environments and establishment of submerged life form", "Transition to wind pollination and simplification of floral parts"],
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
    enOverview: "A monotypic family (1 genus) specialized in brackish water environments. Ruppia maritima is native to Japan, found in sheltered bays, brackish lakes, and salt marshes. Highly salt-tolerant, adapted to environments inhospitable to most angiosperms.",
    characteristics: [
      "汽水〜塩水域に生育する沈水植物",
      "細い糸状の葉",
      "花は極度に単純化（花被を欠く）",
      "水媒受粉",
    ],
    enCharacteristics: ["Submerged plants growing in brackish to saline waters", "Thin filiform leaves", "Flowers extremely reduced (lacking perianth)", "Water-pollinated"],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > ホッスモ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Ruppiaceae",
    divergenceEra: "古第三紀（約5000万年前〜）",
    enDivergenceEra: "Paleogene (ca. 50 Ma onwards)",
    representativeGenera: ["ホッスモ属（Ruppia）"],
    evolutionEvents: [
      "汽水・塩水という極端な塩分環境への特化",
      "花部の極端な単純化と水媒受粉の進化",
    ],
    enEvolutionEvents: ["Specialization to extreme saline environments in brackish and salt waters", "Extreme simplification of floral parts and evolution of water pollination"],
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
    enOverview: "A seagrass family distributed in tropical to subtropical oceans. In Japan, Thalassodendron and others occur on shallow sandy-muddy bottoms in the Ryukyu Islands, supporting coral reef ecosystems. Like Zosteraceae, fully marine flowering plants.",
    characteristics: [
      "完全海生の沈水植物",
      "匍匐茎が海底に広がり、海草藻場を形成",
      "花は退化的で、水中媒受粉",
      "細長い線形葉に葉鞘をもつ",
    ],
    enCharacteristics: ["Fully marine submerged plants", "Rhizomes spread across the seafloor, forming seagrass meadows", "Flowers reduced, submarine-pollinated", "Elongate linear leaves with sheathing bases"],
    phylogeneticPosition: "被子植物 > 単子葉植物 > オモダカ目 > シラスナ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Cymodoceaceae",
    divergenceEra: "古第三紀（約5500万年前〜）",
    enDivergenceEra: "Paleogene (ca. 55 Ma onwards)",
    representativeGenera: [
      "リュウキュウスガモ属（Cymodocea）",
    ],
    evolutionEvents: [
      "陸上植物から海洋への二次的適応（アマモ科と独立の進化）",
      "熱帯海草藻場の形成による生物多様性ホットスポットの創出",
    ],
    enEvolutionEvents: ["Secondary adaptation from land to sea (independent of Zosteraceae)", "Creation of biodiversity hotspots through formation of tropical seagrass meadows"],
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
    enOverview: "A family including olive, fragrant olive (Osmanthus), lilac, ash, and privet. About 25 genera and 600 species are known, distributed in temperate to tropical regions. Many species have fragrant flowers and are widely used as garden trees and perfumery plants.",
    characteristics: [
      "花は4数性で花弁は基部が合着することが多い",
      "雄しべは2本（多くの科で例外的に少ない）",
      "葉は対生で単葉または羽状複葉",
      "果実は核果・翼果・液果など多様",
      "芳香成分をもつ種が多い",
    ],
    enCharacteristics: ["Flowers 4-merous with petals often fused at the base", "Stamens reduced to 2 (exceptionally few among dicots)", "Leaves opposite, simple or pinnately compound", "Fruits diverse: drupes, samaras, or berries", "Many species with aromatic compounds"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > モクセイ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Oleaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万〜6000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70–60 Ma)",
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
    enEvolutionEvents: ["Advanced reduction to 2 stamens (optimization of pollination efficiency)", "Maintenance of both wind and insect pollination strategies within the lineage"],
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
    enOverview: "A family including Conandron, African violets (Saintpaulia), and Sinningia. About 160 genera and over 3,500 species are known, adapted to diverse tropical to subtropical ecosystems. In Japan, Conandron ramondioides grows on rock walls and in gorges.",
    characteristics: [
      "花冠は合弁で左右相称（唇形）が多い",
      "雄しべは2〜4本（花冠に着生）",
      "葉は対生または輪生、肉厚なものが多い",
      "湿潤な岩壁・林床など日陰を好む",
      "種子は非常に小さく多数",
    ],
    enCharacteristics: ["Corolla sympetalous, mostly zygomorphic (bilabiate)", "2–4 stamens attached to the corolla", "Leaves opposite or whorled, often fleshy", "Prefers shaded habitats such as moist rock walls and forest floors", "Seeds very small and numerous"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > イワタバコ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Gesneriaceae",
    divergenceEra: "古第三紀（約6500万〜5000万年前）",
    enDivergenceEra: "Paleogene (ca. 65–50 Ma)",
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
    enEvolutionEvents: ["Independent diversification in the Old World and New World", "Adaptation to specialized environments such as rock walls and epiphytic habitats"],
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
    enOverview: "A family greatly reduced through major reclassification under APG. Many genera formerly included were transferred to Plantaginaceae, Orobanchaceae, Phrymaceae, and others. Currently includes Scrophularia, Verbascum, and related genera.",
    characteristics: [
      "花冠は合弁で左右相称または放射相称",
      "雄しべは4本（2長2短）または5本",
      "APG体系で大幅に縮小・再編された科",
      "葉は対生または互生",
    ],
    enCharacteristics: ["Corolla sympetalous, zygomorphic or actinomorphic", "Stamens 4 (didynamous) or 5", "Greatly reduced and reorganized under the APG system", "Leaves opposite or alternate"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ゴマノハグサ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Scrophulariaceae",
    divergenceEra: "古第三紀（約5000万年前〜）",
    enDivergenceEra: "Paleogene (ca. 50 Ma onwards)",
    representativeGenera: [
      "ゴマノハグサ属（Scrophularia）",
      "モウズイカ属（Verbascum）",
      "バルボフィラ属（Buddleja）",
    ],
    evolutionEvents: [
      "APG体系再編による科の縮小（多くの属が他科へ移動）",
      "多様な送粉者に対応した花形の分化",
    ],
    enEvolutionEvents: ["Reduction of the family through APG reclassification (many genera transferred to other families)", "Differentiation of flower forms in response to diverse pollinators"],
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
    enOverview: "A family represented by sesame (Sesamum indicum). About 13 genera and 95 species are known, distributed in arid to semi-arid regions of Africa and Asia. Many species have hooked projections on fruits for dispersal by attachment to animals or clothing.",
    characteristics: [
      "花冠は合弁で左右相称・唇形",
      "雄しべは4本（2長2短）",
      "果実や茎にしばしば粘液腺や鈎状突起をもつ",
      "葉は対生または上部で互生",
    ],
    enCharacteristics: ["Corolla sympetalous, zygomorphic and bilabiate", "Stamens 4 (didynamous)", "Fruits and stems often with mucilage glands or hooked projections", "Leaves opposite or alternate in the upper part"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ゴマ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Pedaliaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
    representativeGenera: [
      "ゴマ属（Sesamum）",
      "ツノゴマ属近縁（Uncarina）",
      "ペダリウム属（Pedalium）",
    ],
    evolutionEvents: [
      "粘液腺・鈎状突起による付着散布の進化",
      "乾燥地帯への適応",
    ],
    enEvolutionEvents: ["Evolution of epizoochory via mucilage glands and hooked projections", "Adaptation to arid regions"],
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
    enOverview: "A family expanded under the APG system with the inclusion of Mimulus and related genera. Phryma leptostachya is native to Japan, with fruits that attach to clothing for dispersal. The diversity center is among Mimulus species in western North America.",
    characteristics: [
      "花冠は合弁で左右相称・唇形",
      "雄しべは4本（2長2短）",
      "ハエドクソウ属の果実は萼に包まれ逆刺で付着散布",
      "葉は対生",
    ],
    enCharacteristics: ["Corolla sympetalous, zygomorphic and bilabiate", "Stamens 4 (didynamous)", "Fruits of Phryma enclosed in calyx with retrorsely barbed hooks for epizoochory", "Leaves opposite"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ハエドクソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Phrymaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
    representativeGenera: [
      "ハエドクソウ属（Phryma）",
      "ミゾホオズキ属（Mimulus）",
      "エリスランテ属（Erythranthe）",
    ],
    evolutionEvents: [
      "APG体系でのミゾホオズキ属の組み入れによる科の拡張",
      "逆刺による付着散布の進化",
    ],
    enEvolutionEvents: ["Expansion of the family through inclusion of Mimulus under the APG system", "Evolution of epizoochory via retrorsely barbed hooks"],
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
    enOverview: "A family containing many parasitic and hemiparasitic plants. Under the APG system, genera formerly in Scrophulariaceae such as Phtheirospermum, Melampyrum, and Aeginetia were incorporated. Ranges from holoparasites lacking chlorophyll to hemiparasites that also photosynthesize.",
    characteristics: [
      "他の植物の根に寄生する（全寄生または半寄生）",
      "全寄生種は葉緑素をもたず黄褐色〜白色",
      "花冠は合弁で唇形",
      "吸器（ハウストリウム）で宿主から栄養を吸収",
      "種子は非常に小さく多数",
    ],
    enCharacteristics: ["Parasitic on roots of other plants (holoparasitic or hemiparasitic)", "Holoparasitic species lack chlorophyll and are yellowish-brown to white", "Corolla sympetalous and bilabiate", "Haustoria absorb nutrients from host plants", "Seeds very small and numerous"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ハマウツボ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Orobanchaceae",
    divergenceEra: "古第三紀（約5000万年前〜）",
    enDivergenceEra: "Paleogene (ca. 50 Ma onwards)",
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
    enEvolutionEvents: ["Evolutionary transitions from hemiparasitism to holoparasitism (multiple times within the lineage)", "Loss of chlorophyll and increased host dependency"],
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
    enOverview: "A carnivorous plant family including Utricularia, Pinguicula, and Genlisea. About 3 genera and 350 species are known, mainly growing in wetlands, aquatic habitats, and on rock faces. Utricularia species use small bladder traps to capture aquatic microorganisms.",
    characteristics: [
      "食虫植物（捕虫嚢または粘着葉で昆虫・微生物を捕食）",
      "タヌキモ属は水中に捕虫嚢をもつ",
      "ムシトリスミレ属は葉が粘着性",
      "花冠は合弁で唇形・距をもつことが多い",
      "貧栄養環境（湿地・岩壁）に生育",
    ],
    enCharacteristics: ["Carnivorous plants (prey captured via bladder traps or sticky leaves)", "Utricularia has underwater bladder traps", "Pinguicula has sticky (adhesive) leaves", "Corolla sympetalous, bilabiate, often with a spur", "Grows in nutrient-poor environments (wetlands, rock faces)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > タヌキモ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Lentibulariaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
    representativeGenera: [
      "タヌキモ属（Utricularia）",
      "ムシトリスミレ属（Pinguicula）",
      "ミミカキグサ属（Genlisea）",
    ],
    evolutionEvents: [
      "負圧式捕虫嚢の進化（タヌキモ属：植物界最速の運動機構のひとつ）",
      "貧栄養湿地環境への特殊適応",
    ],
    enEvolutionEvents: ["Evolution of suction bladder traps (Utricularia: one of the fastest movements in the plant kingdom)", "Specialized adaptation to nutrient-poor wetland environments"],
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
    enOverview: "A family including Justicia, Peristrophe, and Acanthus. About 220 genera and over 4,000 species are known, with the diversity center in the tropics and subtropics. Many species have well-developed bracts that protect the flowers.",
    characteristics: [
      "花冠は合弁で左右相称・唇形",
      "雄しべは2〜4本",
      "苞が大きく発達することが多い",
      "葉は対生",
      "種子にしばしば弾きとばし散布機構をもつ",
    ],
    enCharacteristics: ["Corolla sympetalous, zygomorphic and bilabiate", "Stamens 2–4", "Bracts often large and conspicuous", "Leaves opposite", "Seeds often with explosive dehiscence mechanism"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > キツネノマゴ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Acanthaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
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
    enEvolutionEvents: ["Diversification in tropical rainforests and pollination coevolution with insects and birds", "Evolution of ballistic seed dispersal via elastic capsules"],
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
    enOverview: "A family including Campsis, Paulownia, Spathodea, and Catalpa. About 82 genera and 800 species are known, with the diversity center in tropical America. Characterized by large trumpet-shaped flowers and winged seeds.",
    characteristics: [
      "花冠は合弁で大きなラッパ形・唇形",
      "雄しべは4本（2長2短）または2本",
      "果実は長いさや状（蒴果）で翼をもつ種子を多数含む",
      "多くは木本（高木・つる植物）",
      "葉は対生で複葉が多い",
    ],
    enCharacteristics: ["Corolla sympetalous, large and trumpet-shaped or bilabiate", "Stamens 4 (didynamous) or 2", "Fruit a long pod-like capsule containing numerous winged seeds", "Mostly woody (trees or climbers)", "Leaves opposite, often compound"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ノウゼンカズラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Bignoniaceae",
    divergenceEra: "古第三紀〜新第三紀（約5000万年前〜）",
    enDivergenceEra: "Paleogene to Neogene (ca. 50 Ma onwards)",
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
    enEvolutionEvents: ["Evolution of wind dispersal via winged seeds", "Development of bird and bat pollination through large flowers and nectar"],
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
    enOverview: "A family including Verbena, Lantana, and Clerodendrum. Under the APG system, many former Verbenaceae genera were transferred to Lamiaceae, reducing the family to about 35 genera and 1,200 species. Distributed in tropical to temperate regions.",
    characteristics: [
      "花冠は合弁で左右相称・4〜5裂",
      "雄しべは4本（2長2短）",
      "葉は対生または輪生",
      "茎はしばしば四角形",
      "APG体系で大幅に縮小・再編された科",
    ],
    enCharacteristics: ["Corolla sympetalous, zygomorphic, 4–5-lobed", "Stamens 4 (didynamous)", "Leaves opposite or whorled", "Stems often quadrangular", "Greatly reduced and reorganized under the APG system"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > クマツヅラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Verbenaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
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
    enEvolutionEvents: ["Reduction of the family through APG reclassification (many genera transferred to Lamiaceae)", "Adaptation to the tropics and worldwide range expansion"],
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
    enOverview: "A small family containing Proboscidea and related genera. About 5 genera and 16 species are known, mainly native to tropical America. Fruits bear long hooked horns that entangle in animal hooves and fur for a unique dispersal strategy.",
    characteristics: [
      "果実に長い鈎状の角（つの）が発達",
      "花冠は合弁で左右相称・唇形",
      "雄しべは4本（2長2短）",
      "葉は対生または互生・粘毛をもつ",
      "動物付着散布（動物の蹄・毛に絡まる）",
    ],
    enCharacteristics: ["Fruits with long hooked horns (claws)", "Corolla sympetalous, zygomorphic and bilabiate", "Stamens 4 (didynamous)", "Leaves opposite or alternate, with sticky glandular hairs", "Epizoochory (fruits attach to animal hooves and fur)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > シソ目 > ツノゴマ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Lamiales > Martyniaceae",
    divergenceEra: "新第三紀〜第四紀",
    enDivergenceEra: "Neogene to Quaternary",
    representativeGenera: [
      "ツノゴマ属（Proboscidea）",
      "マルティニア属（Martynia）",
    ],
    evolutionEvents: [
      "鈎状角による大型動物（有蹄類）への付着散布の進化",
    ],
    enEvolutionEvents: ["Evolution of epizoochory via hooked horns for attachment to large mammals (ungulates)"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツノゴマ科" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── ヤマイモモドキ科 ──────────────────────────────────────
  {
    id: "cardiopteridaceae",
    jaName: "ヤマイモモドキ科",
    enName: "Cardiopteris family",
    scientificName: "Cardiopteridaceae",
    order: "アキノキリンソウ目",
    overview:
      "小さな科で、約5属約45種が知られる。熱帯アジア〜太平洋に分布し、日本にはヒトツバタゴ近縁のグループは含まれないが、南西諸島周辺に分布する種がある。APG体系で独立した科として認識されている。",
    enOverview: "A small family of about 5 genera and 45 species. Distributed in tropical Asia to the Pacific. Some species occur around the Ryukyu Islands in Japan. Recognized as an independent family under the APG system.",
    characteristics: [
      "高木・木本のつる植物が多い",
      "葉は単葉で互生",
      "花は小さく、集散花序につく",
      "果実は翼をもつことがある",
    ],
    enCharacteristics: ["Mostly trees or woody climbers", "Leaves simple and alternate", "Flowers small, in cymose inflorescences", "Fruits sometimes winged"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アキノキリンソウ目 > ヤマイモモドキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Aquifoliales > Cardiopteridaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
    representativeGenera: [
      "カルジオプテリス属（Cardiopteris）",
      "ゴイトチャ属（Gonocaryum）",
    ],
    evolutionEvents: [
      "熱帯アジアでの分布形成",
    ],
    enEvolutionEvents: ["Establishment of distribution range in tropical Asia"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤマイモモドキ科" },
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
    enOverview: "A family consisting solely of the genus Ilex. About 400–600 species are known, distributed widely in tropical to temperate regions. Ilex integra, I. crenata, I. pedunculosa, and I. rotunda are native to Japan. Red fruits are eaten by birds for seed dispersal.",
    characteristics: [
      "常緑または落葉の木本（高木〜低木）",
      "葉はしばしば鋸歯状・刺状の縁をもつ",
      "花は小さく4〜6数性",
      "果実は赤〜黒の液果（核果）",
      "雌雄異株が多い",
    ],
    enCharacteristics: ["Evergreen or deciduous woody plants (trees to shrubs)", "Leaves often with serrate or spinose margins", "Flowers small, 4–6-merous", "Fruits red to black berries (drupes)", "Mostly dioecious"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アキノキリンソウ目 > モチノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Aquifoliales > Aquifoliaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前〜）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80 Ma onwards)",
    representativeGenera: [
      "モチノキ属（Ilex）",
    ],
    evolutionEvents: [
      "液果による鳥類散布の発達",
      "刺状鋸歯による草食動物への防御",
    ],
    enEvolutionEvents: ["Development of bird dispersal via fleshy fruits", "Defense against herbivores through spinose leaf margins"],
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
    enOverview: "An aquatic and wetland family including Menyanthes, Nymphoides, and related genera. About 5 genera and 60 species are known. Belongs to Asterales but is highly adapted to aquatic environments, morphologically very different from Asteraceae or Apiaceae.",
    characteristics: [
      "水生または湿地生の多年草",
      "花冠は5裂し、縁に流蘇状（ひも状）の付属物をもつ（ミツガシワ属）",
      "葉は3出複葉（ミツガシワ）または単葉",
      "キク目に属するが水生に特化",
    ],
    enCharacteristics: ["Aquatic or wetland perennial herbs", "Corolla 5-lobed with fimbriate (fringe-like) appendages along the margins (Menyanthes)", "Leaves trifoliate (Menyanthes) or simple", "Belongs to Asterales but specialized for aquatic life"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キク目 > ミツガシワ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Asterales > Menyanthaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
    representativeGenera: [
      "ミツガシワ属（Menyanthes）",
      "アサザ属（Nymphoides）",
      "ガガブタ属（Nymphoides s.l.）",
    ],
    evolutionEvents: [
      "水生環境への二次的適応",
      "浮葉・湿地生活への形態的特化",
    ],
    enEvolutionEvents: ["Secondary adaptation to aquatic environments", "Morphological specialization for floating-leaf and wetland lifestyles"],
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
    enOverview: "A family including Scaevola. About 12 genera and 430 species are known, with the diversity center in Australia. In Japan, Scaevola taccada grows on coastal sandy areas near coral reefs. Characterized by a cup-shaped pollen-presenting device called an indusium.",
    characteristics: [
      "花冠は合弁で左右相称・5裂（扇形に広がる）",
      "柱頭に花粉を蓄えるカップ状のインジュジウム（花粉呈示装置）をもつ",
      "葉は単葉で互生",
      "海岸・乾燥地に生育することが多い",
    ],
    enCharacteristics: ["Corolla sympetalous, zygomorphic, 5-lobed (spreading in a fan shape)", "Stigma with a cup-shaped indusium (pollen-presenting device)", "Leaves simple and alternate", "Often grows in coastal and arid environments"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キク目 > クサトベラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Asterales > Goodeniaceae",
    divergenceEra: "古第三紀〜新第三紀（主にオーストラリアで多様化）",
    enDivergenceEra: "Paleogene to Neogene (diversified mainly in Australia)",
    representativeGenera: [
      "クサトベラ属（Scaevola）",
      "グッデニア属（Goodenia）",
    ],
    evolutionEvents: [
      "インジュジウム（花粉呈示装置）の進化",
      "オーストラリアでの爆発的多様化",
    ],
    enEvolutionEvents: ["Evolution of the indusium (pollen-presenting device)", "Explosive diversification in Australia"],
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
    enOverview: "A family reorganized under the APG system by transferring Sambucus and Viburnum from Caprifoliaceae. Includes Adoxa, Sambucus, Viburnum, and related genera. About 5 genera and 200 species are known, distributed mainly in the Northern Hemisphere.",
    characteristics: [
      "花は小さく集散花序〜散房状",
      "花冠は4〜5裂",
      "果実は液果（核果）で赤〜黒く熟す",
      "葉は対生で羽状複葉または単葉",
    ],
    enCharacteristics: ["Flowers small, in cymose to corymbose inflorescences", "Corolla 4–5-lobed", "Fruits are berries (drupes) ripening red to black", "Leaves opposite, pinnately compound or simple"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > マツムシソウ目 > レンプクソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Dipsacales > Adoxaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "レンプクソウ属（Adoxa）",
      "ニワトコ属（Sambucus）",
      "ガマズミ属（Viburnum）",
    ],
    evolutionEvents: [
      "APG体系による科の再編（スイカズラ科からの分離）",
      "液果による鳥類散布の発達",
    ],
    enEvolutionEvents: ["Reorganization of the family under the APG system (separation from Caprifoliaceae)", "Development of bird dispersal via fleshy fruits"],
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
    enOverview: "A family including Lonicera, Weigela, Patrinia, Scabiosa, and related genera. Under the APG system, Valerianaceae and Dipsacaceae were merged into this family. About 860 species are known, predominantly in temperate Northern Hemisphere.",
    characteristics: [
      "花冠は合弁で左右相称または放射相称",
      "葉は対生",
      "果実は液果・痩果・さく果など多様",
      "APG体系で複数の旧科を統合した拡張科",
    ],
    enCharacteristics: ["Corolla sympetalous, zygomorphic or actinomorphic", "Leaves opposite", "Fruits diverse: berries, achenes, or capsules", "Expanded family through merger of several former families under the APG system"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > マツムシソウ目 > スイカズラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Dipsacales > Caprifoliaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
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
    enEvolutionEvents: ["Merger of Valerianaceae, Dipsacaceae, and others under the APG system", "Pollination coevolution with specific insects and birds through nectary development"],
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
    enOverview: "A family centered on the genus Pittosporum. About 9 genera and over 200 species are known, distributed in the Old World tropics to temperate regions. In Japan, Pittosporum tobira grows as a coastal evergreen shrub resistant to salt spray. Fruits split open to expose seeds covered in sticky resin.",
    characteristics: [
      "常緑木本（低木〜高木）",
      "葉は革質で光沢があり互生",
      "花弁は5枚で筒形〜反り返る",
      "果実は蒴果で粘液を分泌して種子を覆う",
      "海岸・乾燥環境に生育することが多い",
    ],
    enCharacteristics: ["Evergreen woody plants (shrubs to trees)", "Leaves coriaceous, glossy, and alternate", "5 petals, tubular to recurved", "Fruit a capsule that secretes sticky resin covering the seeds", "Often grows in coastal and dry environments"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > セリ目 > トベラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Apiales > Pittosporaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
    representativeGenera: [
      "トベラ属（Pittosporum）",
      "ビリャルシア属（Billardiera）",
    ],
    evolutionEvents: [
      "粘液による種子散布（鳥類への付着）の進化",
      "海岸環境への適応",
    ],
    enEvolutionEvents: ["Evolution of seed dispersal via sticky resin (attachment to birds)", "Adaptation to coastal environments"],
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
    enOverview: "A family including Aralia, Fatsia, Chengiopanax, Dendropanax, Hedera, and ginseng (Panax). About 43 genera and 1,500 species are known, widely distributed in tropical to temperate regions. Confirmed as closely related to Apiaceae under the APG system.",
    characteristics: [
      "花は小さく散形花序に集まる",
      "花弁は5枚（まれに4枚）",
      "果実は液果（核果）で鳥類に散布される",
      "葉は掌状複葉または羽状複葉が多い",
      "茎や葉に毛・刺をもつことが多い",
    ],
    enCharacteristics: ["Flowers small, in umbellate inflorescences", "Petals 5 (rarely 4)", "Fruits are berries (drupes) dispersed by birds", "Leaves mostly palmately or pinnately compound", "Stems and leaves often with hairs or spines"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > セリ目 > ウコギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Apiales > Araliaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前〜）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70 Ma onwards)",
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
    enEvolutionEvents: ["Evolution of umbellate inflorescences from a common ancestor with Apiaceae", "Widespread distribution from tropics to temperate regions via bird dispersal of fleshy fruits"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウコギ科" },
    ],
    japaneseSpeciesCount: 195,
    review: { status: "ai_generated" },
  },

  // ── サクライソウ科 ──────────────────────────────────
  {
    id: "petrosaviaceae",
    jaName: "サクライソウ科",
    enName: "Petrosavia family",
    scientificName: "Petrosaviaceae",
    order: "ペトロサヴィア目",
    overview:
      "東アジア・東南アジアの熱帯〜亜熱帯林床に生育する、葉緑素をもたない腐生植物の小さな科。日本ではサクライソウ（Petrosavia sakuraii）が知られる。APG体系では単子葉類の中でも早期分岐したペトロサヴィア目を構成する。",
    enOverview: "A small family of achlorophyllous mycoheterotrophic plants growing on forest floors in tropical to subtropical East and Southeast Asia. Petrosavia sakuraii is known from Japan. Under the APG system, it constitutes Petrosaviales, an early-diverging lineage within monocots.",
    characteristics: [
      "葉緑素を欠く腐生植物（菌従属栄養植物）",
      "鱗片状の葉をもち、光合成を行わない",
      "花被片6枚、雄しべ6本",
      "熱帯〜亜熱帯の薄暗い林床に生育",
    ],
    enCharacteristics: ["Achlorophyllous mycoheterotrophic (saprophytic) plants", "Leaves reduced to scales, non-photosynthetic", "6 tepals and 6 stamens", "Grows on dim forest floors in tropical to subtropical regions"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ペトロサヴィア目 > サクライソウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Petrosaviales > Petrosaviaceae",
    divergenceEra: "白亜紀（単子葉類の初期分岐、約1億2000万年前以降）",
    enDivergenceEra: "Cretaceous (early divergence within monocots, ca. 120 Ma onwards)",
    representativeGenera: [
      "サクライソウ属（Petrosavia）",
      "ミヤマウキツリボタン属（Japonolirion）",
    ],
    evolutionEvents: [
      "葉緑素喪失による菌従属栄養（腐生）への移行",
      "単子葉類の基部に位置する早期分岐系統として残存",
    ],
    enEvolutionEvents: ["Transition to mycoheterotrophy through loss of chlorophyll", "Persistence as an early-diverging lineage at the base of monocots"],
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
    enOverview: "A family containing many small mycoheterotrophic plants growing on tropical to subtropical forest floors. Burmannia championii occurs in Japan. Many species have lost photosynthetic ability and produce small white to pale purple flowers.",
    characteristics: [
      "多くの種が葉緑素を欠く菌従属栄養植物",
      "花被は筒状で、翼状の稜をもつ種が多い",
      "果実はさく果で、種子は非常に微小",
      "熱帯林床の腐植土上に生育",
    ],
    enCharacteristics: ["Many species are achlorophyllous mycoheterotrophic plants", "Perianth tubular, often with winged ridges", "Fruit a capsule with extremely minute seeds", "Grows on humus-rich soil of tropical forest floors"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ヤマノイモ目 > ヒナノシャクジョウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Dioscoreales > Burmanniaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ヒナノシャクジョウ属（Burmannia）",
      "ヒナノハイゴロモ属（Gymnosiphon）",
    ],
    evolutionEvents: [
      "ヤマノイモ目内での独立した菌従属栄養への進化",
      "種子の超微小化による菌根菌依存的な散布戦略の確立",
    ],
    enEvolutionEvents: ["Independent evolution of mycoheterotrophy within Dioscoreales", "Establishment of mycorrhizal-dependent dispersal strategy through extreme seed miniaturization"],
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
    enOverview: "A family including Dioscorea japonica, D. bulbifera, and D. tokoro. Famous for large edible tubers, widely distributed in tropical and temperate regions. Most species are climbing plants and dioecious.",
    characteristics: [
      "つる性植物が多く、右巻き・左巻きは種によって決まる",
      "地下に大型の塊茎・球根をもつ",
      "雌雄異株",
      "葉は心形で葉脈は弧状の平行脈",
      "花は小さく、花被片6枚",
    ],
    enCharacteristics: ["Mostly climbing plants; twining direction (left or right) is species-specific", "Large underground tubers or bulbils", "Dioecious", "Leaves cordate with arcuate parallel venation", "Flowers small with 6 tepals"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ヤマノイモ目 > ヤマノイモ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Dioscoreales > Dioscoreaceae",
    divergenceEra: "白亜紀後期（約9000万〜8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 90–80 Ma)",
    representativeGenera: [
      "ヤマノイモ属（Dioscorea）",
    ],
    evolutionEvents: [
      "大型塊茎による乾季・冬季を乗り越える貯蔵戦略の確立",
      "つる性による林縁・攀縁生態への適応",
    ],
    enEvolutionEvents: ["Establishment of storage strategy via large tubers for surviving dry and winter seasons", "Adaptation to forest-edge and climbing ecology through the twining habit"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤマノイモ科" },
    ],
    japaneseSpeciesCount: 54,
    review: { status: "ai_generated" },
  },

  // ── ホンゴウソウ科 ────────────────────────────────
  {
    id: "triuridaceae",
    jaName: "ホンゴウソウ科",
    enName: "Triuris family",
    scientificName: "Triuridaceae",
    order: "パンダナレス目",
    overview:
      "熱帯・亜熱帯の薄暗い林床に生育する、すべての種が菌従属栄養（腐生）の小さな科。葉緑素をもたず、地上部は花茎のみで紅色〜白色の花をつける。フィリピン・マレーシアなどに産する。",
    enOverview: "A small family in which all species are mycoheterotrophic (saprophytic), growing on dim forest floors in tropical and subtropical regions. Lacking chlorophyll, the aboveground parts consist only of flowering stems bearing reddish to white flowers. Found in the Philippines, Malaysia, and similar regions.",
    characteristics: [
      "葉緑素を完全に欠く腐生（菌従属栄養）植物",
      "葉は鱗片状に退化",
      "花は単性または両性で、花被片に長い突起をもつ種が多い",
      "地下茎で菌根菌に依存して栄養を得る",
    ],
    enCharacteristics: ["Completely achlorophyllous mycoheterotrophic (saprophytic) plants", "Leaves reduced to scales", "Flowers unisexual or bisexual; tepals often with long appendages", "Underground stems depend on mycorrhizal fungi for nutrition"],
    phylogeneticPosition: "被子植物 > 単子葉類 > パンダナレス目 > ホンゴウソウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Pandanales > Triuridaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "Triuris属（Triuris）",
      "Sciaphila属（Sciaphila）",
    ],
    evolutionEvents: [
      "単子葉類内での完全な腐生生活への移行",
      "花被の特殊化（突起・腺毛）による送粉者誘引の進化",
    ],
    enEvolutionEvents: ["Transition to a fully mycoheterotrophic lifestyle within monocots", "Evolution of pollinator attraction through specialized tepals (appendages and glandular hairs)"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホンゴウソウ科" },
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
    enOverview: "A small family distributed in East to Southeast Asia and Australia. Stemona japonica occurs in Japan, and its tuberous roots are used in traditional Chinese medicine as 'Baibu'. Climbing or erect herbs.",
    characteristics: [
      "葉は対生または輪生で、葉脈は横方向に弧状に走る",
      "花被片4枚、雄しべ4本",
      "根は太い塊根状で薬用になる",
      "つる性または直立草本",
    ],
    enCharacteristics: ["Leaves opposite or whorled with transversely arcuate venation", "4 tepals and 4 stamens", "Thick tuberous roots used medicinally", "Climbing or erect herbs"],
    phylogeneticPosition: "被子植物 > 単子葉類 > パンダナレス目 > ビャクブ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Pandanales > Stemonaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "ビャクブ属（Stemona）",
      "Croomia属（Croomia）",
    ],
    evolutionEvents: [
      "東アジアでの独自の分布域形成",
      "塊根へのアルカロイド蓄積による防御機構の獲得",
    ],
    enEvolutionEvents: ["Establishment of a unique distribution range in East Asia", "Acquisition of defense mechanisms through alkaloid accumulation in tuberous roots"],
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
    enOverview: "A family widely distributed from tropical Asia to Pacific islands. In Japan, Pandanus boninensis is native to Okinawa and the Ogasawara Islands. The trunk produces numerous prop roots (aerial roots) resembling octopus legs, which inspired the Japanese name. Leaves are used as pandan leaf flavoring in cooking.",
    characteristics: [
      "幹から多数の支柱根（気根）を伸ばす",
      "葉は螺旋状に密着し、細長く硬い",
      "雌雄異株",
      "果実は集合果で大型",
    ],
    enCharacteristics: ["Trunk produces numerous prop roots (aerial roots)", "Leaves spirally arranged, elongate, and stiff", "Dioecious", "Fruit a large compound syncarp"],
    phylogeneticPosition: "被子植物 > 単子葉類 > タコノキ目 > タコノキ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Pandanales > Pandanaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前以降）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70 Ma onwards)",
    representativeGenera: [
      "タコノキ属（Pandanus）",
    ],
    evolutionEvents: [
      "支柱根による海岸・湿地環境への構造的適応",
      "大型集合果による動物（コウモリ・鳥）散布の進化",
    ],
    enEvolutionEvents: ["Structural adaptation to coastal and wetland environments via prop roots", "Evolution of dispersal by animals (bats, birds) via large compound fruits"],
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
    enOverview: "A family including Smilax china, S. glabra, and S. riparia. Woody or herbaceous climbers characterized by tendrils on the petioles. Dioecious with attractive red berries. About 10 species are native to Japan.",
    characteristics: [
      "葉柄の基部につる（まきひげ）をもつ",
      "葉に弧状の平行脈と網状脈が混在する",
      "雌雄異株、花は小さく6数性",
      "果実は液果で赤〜黒色に熟す",
      "茎にとげをもつ種が多い",
    ],
    enCharacteristics: ["Tendrils at the base of petioles", "Leaves with both arcuate parallel and reticulate venation", "Dioecious; flowers small and 3-merous (6 tepals)", "Fruit a berry ripening red to black", "Stems often thorny"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ユリ目 > サルトリイバラ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Liliales > Smilacaceae",
    divergenceEra: "白亜紀後期（約8000万年前以降）",
    enDivergenceEra: "Late Cretaceous (ca. 80 Ma onwards)",
    representativeGenera: [
      "サルトリイバラ属（Smilax）",
    ],
    evolutionEvents: [
      "まきひげによるつる性生活への移行",
      "肉質液果による鳥類散布の発達",
    ],
    enEvolutionEvents: ["Transition to a climbing habit via tendrils", "Development of bird dispersal through fleshy berries"],
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
    enOverview: "One of the largest angiosperm families with about 28,000 species. Distinguished by unique flower morphology and dependence on mycorrhizal fungi. Distributed in virtually all terrestrial environments, with about 250 species native to Japan. Flower shapes show remarkable adaptations to pollinators (bees, butterflies, moths, flies, etc.).",
    characteristics: [
      "唇弁（リップ）と呼ばれる特殊化した花弁をもつ",
      "雄しべと雌しべが合着した「ずい柱（蕊柱）」",
      "花粉が塊（花粉塊）になっている",
      "種子は超微小で、菌根菌なしには発芽できない",
      "多くが着生植物（熱帯）または地生植物（温帯）",
    ],
    enCharacteristics: ["Specialized petal called the labellum (lip)", "Stamens and pistil fused into a column (gynostemium)", "Pollen aggregated into pollinia (pollen masses)", "Seeds extremely minute, unable to germinate without mycorrhizal fungi", "Mostly epiphytic (tropics) or terrestrial (temperate regions)"],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > ラン科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Asparagales > Orchidaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7600万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80–76 Ma)",
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
    enEvolutionEvents: ["Evolution of the column (fusion of stamens and pistil) dramatically increasing pollination efficiency", "Establishment of extremely minute seeds requiring mycorrhizal-dependent germination", "Independent evolution of diverse flower forms and deceptive pollination mechanisms for different pollinators"],
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
    enOverview: "A small herbaceous family distributed in tropical to temperate regions. Curculigo orchioides occurs in Kyushu and Okinawa in Japan. Many species have bulb-like rhizomes underground and produce yellow flowers.",
    characteristics: [
      "線形〜披針形の葉が根元から叢生する",
      "花被片6枚で黄色が多い",
      "地下に球根状・根茎状の貯蔵器官をもつ",
      "花茎は葉間に直立し、花は少数",
    ],
    enCharacteristics: ["Linear to lanceolate leaves tufted from the base", "6 tepals, often yellow", "Bulb-like or rhizomatous underground storage organs", "Flowering stems erect among the leaves, with few flowers"],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > キンバイザサ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Asparagales > Hypoxidaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "キンバイザサ属（Curculigo）",
      "Hypoxis属（Hypoxis）",
    ],
    evolutionEvents: [
      "球根・根茎による季節的乾燥への貯蔵適応",
      "熱帯〜亜熱帯の草地・林縁への分布拡大",
    ],
    enEvolutionEvents: ["Storage adaptation to seasonal drought via bulbs and rhizomes", "Range expansion into tropical to subtropical grasslands and forest margins"],
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
    enOverview: "A family including irises, Japanese water irises, crocuses, and gladioli. Characterized by the iris-type flower in which outer and inner tepals differ in shape. About 66 genera and 2,200 species are known worldwide, with approximately 15 species native to Japan.",
    characteristics: [
      "外花被3枚と内花被3枚が異なる形をもつ（特にアヤメ属）",
      "雄しべは3本",
      "葉は扁平で2列に互生（扇状に並ぶ）",
      "球根・根茎・球茎をもつことが多い",
    ],
    enCharacteristics: ["Three outer tepals and three inner tepals differ in shape (especially in genus Iris)", "Three stamens", "Leaves are flat and distichous (arranged in a fan shape)", "Often possess bulbs, rhizomes, or corms"],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > アヤメ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Asparagales > Iridaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前以降）",
    enDivergenceEra: "Late Cretaceous to Paleogene (from about 80 million years ago)",
    representativeGenera: [
      "アヤメ属（Iris）",
      "クロッカス属（Crocus）",
      "グラジオラス属（Gladiolus）",
    ],
    evolutionEvents: [
      "花被の分化（外・内花被の機能的分業）による送粉特殊化",
      "球根・球茎による季節的不良環境への適応",
    ],
    enEvolutionEvents: ["Pollination specialization through tepal differentiation (functional division between outer and inner tepals)", "Adaptation to seasonally unfavorable environments through bulbs and corms"],
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
    enOverview: "A family separated and expanded from Liliaceae under the APG system, including subfamilies Asphodeloideae, Alooideae, and Hemerocallidoideae. In Japan, species such as Hemerocallis (daylilies) grow natively.",
    characteristics: [
      "花被片6枚（3＋3）、多くが黄色・橙色・赤色",
      "葉は多肉質または線形で根元から叢生",
      "雄しべ6本",
      "多くが乾燥・日当たりの良い環境に適応",
    ],
    enCharacteristics: ["Six tepals (3+3), often yellow, orange, or red", "Leaves are succulent or linear, forming basal rosettes", "Six stamens", "Many species adapted to dry, sunny environments"],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > ツルボラン科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Asparagales > Xanthorrhoeaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ワスレグサ属（Hemerocallis）",
      "アロエ属（Aloe）",
      "ハラン属（Aspidistra）",
    ],
    evolutionEvents: [
      "葉の多肉化による乾燥適応（アロエ亜科）",
      "大型花による鳥・蛾への送粉特殊化",
    ],
    enEvolutionEvents: ["Adaptation to arid conditions through leaf succulence (subfamily Alooideae)", "Pollination specialization toward birds and moths through large flowers"],
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
    enOverview: "A family including coconut palms, Livistona palms, and Trachycarpus palms. About 2,600 species are found in tropical to subtropical regions, most being unbranched single-trunked trees. Coconuts, dates, and palm oil are deeply tied to human life. In Japan, Livistona chinensis grows natively in the Nansei Islands.",
    characteristics: [
      "幹は分岐せず、頂部にのみ大型羽状・掌状葉が叢生する",
      "幹に葉痕が残る",
      "花は小さく3数性、肉穂花序",
      "果実は核果または液果で大型のものが多い",
    ],
    enCharacteristics: ["Trunk is unbranched, with large pinnate or palmate leaves clustered only at the apex", "Leaf scars remain on the trunk", "Flowers are small, trimerous, borne in spadix inflorescences", "Fruits are drupes or berries, often large"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ヤシ目 > ヤシ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Arecales > Arecaceae",
    divergenceEra: "白亜紀後期（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous (about 80–70 million years ago)",
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
    enEvolutionEvents: ["Establishment of the single-trunk arborescent growth strategy unique to monocots", "Evolution of dispersal via large animals through large fruits"],
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
    enOverview: "A monotypic family (single genus) growing in wetlands and riverbanks of Southeast Asia. Comprises a few species in the genus Hanguana. Bears large basal leaves and forms colonies on moist forest floors and waterside habitats. Not native to Japan.",
    characteristics: [
      "大型の楕円形〜披針形の根生葉",
      "花は小さく、6数性",
      "湿地・河岸の湿潤な環境に生育",
      "1属のみからなる単型科",
    ],
    enCharacteristics: ["Large elliptic to lanceolate basal leaves", "Flowers are small, hexamerous", "Grows in moist wetland and riverbank environments", "Monotypic family consisting of a single genus"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ目 > ハングアナ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Commelinales > Hanguanaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
    representativeGenera: [
      "Hanguana属（Hanguana）",
    ],
    evolutionEvents: [
      "東南アジア湿潤熱帯における独自の系統として残存",
      "湿地・水辺環境への根生葉適応",
    ],
    enEvolutionEvents: ["Persistence as a unique lineage in the humid tropics of Southeast Asia", "Adaptation to wetland and waterside environments through basal leaves"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハングアナ科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── タヌキアヤメ科 ────────────────────────────────────
  {
    id: "philydraceae",
    jaName: "タヌキアヤメ科",
    enName: "Philydrum family",
    scientificName: "Philydraceae",
    order: "ツユクサ目",
    overview:
      "東アジア〜オーストラリアの湿地・水辺に生育する小さな科。穂状花序に黄色い花をつける。ミズアオイ科（Pontederiaceae）とは別科で、APG体系でツユクサ目に含まれる。",
    enOverview: "A small family growing in wetlands and waterside habitats from East Asia to Australia. Bears yellow flowers in spike inflorescences. Distinct from Pontederiaceae, placed in Commelinales under the APG system.",
    characteristics: [
      "茎は直立し、葉は細長く扁平で2列",
      "花は黄色、花被片4枚で左右相称",
      "穂状花序",
      "湿地・水辺の浅水域に生育",
    ],
    enCharacteristics: ["Stems are erect; leaves are elongate, flat, and distichous", "Flowers are yellow, zygomorphic with four tepals", "Spike inflorescences", "Grows in shallow water of wetlands and waterside habitats"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ目 > タヌキアヤメ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Commelinales > Philydraceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "フィリドルム属（Philydrum）",
      "Helmholtzia属（Helmholtzia）",
    ],
    evolutionEvents: [
      "東アジア・オーストラリア間の分布形成",
      "湿地環境への扁平葉による水中・浅水適応",
    ],
    enEvolutionEvents: ["Formation of disjunct distribution between East Asia and Australia", "Adaptation to aquatic and shallow water environments through flat leaves"],
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
    enOverview: "A family of aquatic and semi-aquatic herbs. In Japan, Monochoria korsakowii and M. vaginalis grow natively and are known as paddy field weeds. Flowers are attractively blue to purple. Water hyacinth (Eichhornia crassipes) is a globally invasive alien species.",
    characteristics: [
      "水生または湿生の草本",
      "花被片6枚で青〜紫色が多い",
      "雄しべの長さが異なる異型雄しべをもつ種がある",
      "葉は心形〜矢形で光沢がある",
    ],
    enCharacteristics: ["Aquatic or semi-aquatic herbs", "Six tepals, often blue to purple", "Some species have heteromorphic stamens of different lengths", "Leaves are cordate to sagittate with a glossy surface"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ目 > ミズアオイ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Commelinales > Pontederiaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "ミズアオイ属（Monochoria）",
      "ホテイアオイ属（Eichhornia）",
      "Pontederia属（Pontederia）",
    ],
    evolutionEvents: [
      "水生環境への完全適応（浮水・抽水型の分化）",
      "異型雄しべによる交差受粉促進機構の進化",
    ],
    enEvolutionEvents: ["Full adaptation to aquatic environments (differentiation into floating and emergent forms)", "Evolution of cross-pollination promoting mechanisms through heterostyly and heteromorphic stamens"],
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
    enOverview: "A family including the bird of paradise flower (Strelitzia reginae) and traveller's tree (Ravenala). Distributed in South Africa, Madagascar, and tropical America. An early-diverging lineage within Zingiberales, bearing large leaves and highly specialized flower morphology.",
    characteristics: [
      "大型で卵形〜長楕円形の葉が2列に並ぶ",
      "花は独特の鳥嘴状の苞から突き出す",
      "鳥媒花（バードポリネーション）に特殊化",
      "茎は高木〜低木状になる種もある",
    ],
    enCharacteristics: ["Large ovate to oblong leaves arranged in two ranks", "Flowers protrude from distinctive beak-shaped spathes", "Specialized for bird pollination (ornithophily)", "Some species develop tree-like or shrub-like stems"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > ゴクラクチョウカ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Zingiberales > Strelitziaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ゴクラクチョウカ属（Strelitzia）",
      "オウムバショウ属（Ravenala）",
    ],
    evolutionEvents: [
      "ゴンドワナ超大陸分裂に伴う南半球への分布形成",
      "鳥媒花への特殊化による高度な共進化",
    ],
    enEvolutionEvents: ["Formation of Southern Hemisphere distribution associated with the breakup of Gondwana", "Advanced coevolution through specialization for bird pollination"],
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
    enOverview: "A monotypic family (single genus) distributed in tropical America and Pacific islands. Comprises about 200 species in genus Heliconia. Known for colorful bracts and widely cultivated as ornamentals. Especially famous for coevolution with hummingbirds.",
    characteristics: [
      "大型の葉がバナナに似る",
      "苞葉は鮮やかな赤・橙・黄色",
      "花は苞葉の内側に列状に並ぶ",
      "ハチドリ媒花として特殊化",
    ],
    enCharacteristics: ["Large leaves resembling banana plants", "Bracts are vividly red, orange, or yellow", "Flowers are arranged in rows inside the bracts", "Specialized for hummingbird pollination"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > ヘリコニア科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Zingiberales > Heliconiaceae",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    enDivergenceEra: "Paleogene (about 60–50 million years ago)",
    representativeGenera: [
      "ヘリコニア属（Heliconia）",
    ],
    evolutionEvents: [
      "ハチドリとの緊密な共進化による苞葉の多様化",
      "熱帯アメリカにおける単型科としての系統的孤立",
    ],
    enEvolutionEvents: ["Diversification of bracts through tight coevolution with hummingbirds", "Phylogenetic isolation as a monotypic family in tropical America"],
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
    enOverview: "A family including bananas and Japanese fiber banana. Banana is one of the world's most important fruit crops. These are large herbs (enlarged leaf sheaths overlap to form a pseudostem) rather than true trees. In Japan, Musa basjoo grows as far north as southern Honshu.",
    characteristics: [
      "巨大な葉鞘が積み重なって偽茎（仮茎）を形成",
      "葉は大型で長楕円形、主脈が太い",
      "花序は下垂し、大きな苞葉が包む",
      "果実は液果（バナナ）で、栽培品は三倍体で種なし",
    ],
    enCharacteristics: ["Massive leaf sheaths stack to form a pseudostem", "Leaves are large, oblong, with a thick midrib", "Inflorescence is pendulous, enclosed by large bracts", "Fruit is a berry (banana); cultivated varieties are triploid and seedless"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > バショウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Zingiberales > Musaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約6500万年前以降）",
    enDivergenceEra: "Late Cretaceous to Paleogene (from about 65 million years ago)",
    representativeGenera: [
      "バナナ属（Musa）",
      "エンセーテ属（Ensete）",
    ],
    evolutionEvents: [
      "偽茎形成による巨大草本の進化（木質化なし）",
      "三倍体バナナの人為選択による種なし・大果化",
    ],
    enEvolutionEvents: ["Evolution of giant herbaceous habit through pseudostem formation (without lignification)", "Artificial selection of triploid bananas producing seedless, enlarged fruits"],
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
    enOverview: "A monotypic family (single genus) native to tropical America. Comprises about 10 species of genus Canna, cultivated worldwide as ornamentals. Characterized by large red, orange, or yellow flowers and broad leaves. Bears large underground rhizomes, with some species used as a starch source.",
    characteristics: [
      "雄しべが花弁状に変化した仮雄しべ（仮弁）が発達",
      "大型の葉が2列に互生する",
      "地下に大型の塊根茎をもつ",
      "1属のみからなる単型科",
    ],
    enCharacteristics: ["Staminodes (petaloid stamens) are well-developed, resembling petals", "Large leaves arranged alternately in two ranks", "Large tuberous rhizomes underground", "Monotypic family consisting of a single genus"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > カンナ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Zingiberales > Cannaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "カンナ属（Canna）",
    ],
    evolutionEvents: [
      "雄しべの花弁状変形による装飾的花形の進化",
      "熱帯アメリカから全世界熱帯・亜熱帯への栽培拡散",
    ],
    enEvolutionEvents: ["Evolution of ornate flower morphology through petaloid transformation of stamens", "Cultivation-driven dispersal from tropical America to tropical and subtropical regions worldwide"],
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
    enOverview: "A family distributed on tropical forest floors in the Americas, Africa, and Asia. Starch from arrowroot (Maranta arundinacea) is used as a food source. Popular as foliage plants (Calathea, Maranta) for their beautifully patterned leaves.",
    characteristics: [
      "葉に模様（斑）をもつ種が多く、観葉植物として重要",
      "葉は昼夜で動く（就眠運動）",
      "有効雄しべは1本のみ、ほかは花弁状",
      "花は左右相称",
    ],
    enCharacteristics: ["Many species have patterned (variegated) leaves, important as foliage plants", "Leaves move between day and night (nyctinasty / sleep movements)", "Only one fertile stamen; others are petaloid", "Flowers are zygomorphic"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > クズウコン科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Zingiberales > Marantaceae",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    enDivergenceEra: "Paleogene (about 60–50 million years ago)",
    representativeGenera: [
      "クズウコン属（Maranta）",
      "カラテア属（Calathea）",
      "ストロマンテ属（Stromanthe）",
    ],
    evolutionEvents: [
      "葉の就眠運動の進化（草食者回避・水分節約）",
      "爆発的な受粉機構（雄しべのばね機構）の獲得",
    ],
    enEvolutionEvents: ["Evolution of nyctinastic leaf movements (herbivore avoidance and water conservation)", "Acquisition of explosive pollination mechanism (spring-loaded stamen trigger)"],
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
    enOverview: "Formerly included in Zingiberaceae but separated as an independent family under the APG system. Distinguished by the unique morphology of leaves spiraling up the stem. Distributed in tropical America, Africa, and Asia, bearing showy flowers in large spike inflorescences.",
    characteristics: [
      "葉が螺旋状に茎を回りながら並ぶ（ショウガ科との識別点）",
      "根茎をもち、香りはショウガ科より弱い",
      "唇弁（リップ）が大きく発達した花",
      "苞葉は堅く、球状〜円柱状の花序を形成",
    ],
    enCharacteristics: ["Leaves arranged spirally around the stem (key distinction from Zingiberaceae)", "Possesses rhizomes; aroma is weaker than in Zingiberaceae", "Flowers with a well-developed labellum (lip)", "Bracts are tough, forming globose to cylindrical inflorescences"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > コスタス科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Zingiberales > Costaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "コスタス属（Costus）",
      "Tapeinochilos属（Tapeinochilos）",
    ],
    evolutionEvents: [
      "ショウガ科からの系統分岐と螺旋葉序の独立進化",
      "熱帯林の林縁・林床への適応分化",
    ],
    enEvolutionEvents: ["Phylogenetic divergence from Zingiberaceae and independent evolution of spiral phyllotaxis", "Adaptive radiation into tropical forest edges and understories"],
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
    enOverview: "A family containing important spices such as ginger, turmeric, myoga, and cardamom. About 50 genera and 1,600 species are known, with the center of diversity in tropical Asia. In Japan, ginger, myoga, and Alpinia are cultivated or grow natively. Essential oils and pigments accumulate in rhizomes.",
    characteristics: [
      "根茎に芳香性の精油を含む",
      "葉鞘が発達し、葉舌をもつ",
      "有効雄しべは1本、ほかは唇弁状に変化",
      "花は左右相称で唇弁（リップ）が発達",
      "果実はさく果または液果",
    ],
    enCharacteristics: ["Rhizomes contain aromatic essential oils", "Leaf sheaths are well-developed, with a ligule present", "Only one fertile stamen; others are modified into a labellum", "Flowers are zygomorphic with a well-developed labellum (lip)", "Fruit is a capsule or berry"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ショウガ目 > ショウガ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Zingiberales > Zingiberaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前以降）",
    enDivergenceEra: "Late Cretaceous to Paleogene (from about 80 million years ago)",
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
    enEvolutionEvents: ["Accumulation of secondary metabolites such as essential oils and curcumin in rhizomes", "Rapid diversification in tropical Asia"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ショウガ科" },
    ],
    japaneseSpeciesCount: 88,
    review: { status: "ai_generated" },
  },

  // ── トウエンソウ科 ──────────────────────────────────
  {
    id: "xyridaceae",
    jaName: "トウエンソウ科",
    enName: "Yellow-eyed grass family",
    scientificName: "Xyridaceae",
    order: "イネ目",
    overview:
      "湿地・泥炭地・貧栄養地に生育する草本の科。日本にはキバナノイグサ（Xyris japonica）が関東〜九州の湿地に産する。細い葉が根元に叢生し、穂状花序に黄色い花をつける。",
    enOverview: "A family of herbs growing in wetlands, peat bogs, and nutrient-poor habitats. In Japan, Xyris japonica occurs in wetlands from Kanto to Kyushu. Narrow basal leaves form rosettes, and yellow flowers are borne in spike inflorescences.",
    characteristics: [
      "根元に細長い葉が叢生する",
      "花は3数性で黄色（まれに白・青）",
      "硬い苞に包まれた穂状花序",
      "貧栄養・酸性の湿地に特徴的",
    ],
    enCharacteristics: ["Narrow elongate leaves form basal rosettes", "Flowers are trimerous, yellow (rarely white or blue)", "Spike inflorescences enclosed in hard bracts", "Characteristic of nutrient-poor, acidic wetlands"],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > トウエンソウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Poales > Xyridaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "キバナノイグサ属（Xyris）",
    ],
    evolutionEvents: [
      "貧栄養湿地への特殊適応による分布の限定化",
      "イネ目の中での水辺生態系への収斂",
    ],
    enEvolutionEvents: ["Range restriction through specialization to nutrient-poor wetlands", "Convergent adaptation to waterside ecosystems within Poales"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トウエンソウ科" },
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
    enOverview: "A family of herbs growing in wetlands and waterside habitats. Many species including Eriocaulon and Syngonanthus are native to Japan and are representative autumn wetland plants. Characterized by white, cottony capitulate inflorescences, with about 400 species known.",
    characteristics: [
      "白色〜灰白色の綿毛状の頭状花序",
      "葉は根元に叢生し、透明な横隔壁をもつ種が多い",
      "花は単性で非常に小さい",
      "湿地・浅い水中に生育",
    ],
    enCharacteristics: ["White to grayish-white cottony capitulate inflorescences", "Leaves form basal rosettes; many species have translucent cross-septa", "Flowers are unisexual and very small", "Grows in wetlands and shallow water"],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > ホシクサ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Poales > Eriocaulaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "ホシクサ属（Eriocaulon）",
      "イヌノヒゲ属（Syngonanthus）",
    ],
    evolutionEvents: [
      "頭状花序（綿毛状）による風媒への特殊化",
      "湿地〜水中への生態的適応",
    ],
    enEvolutionEvents: ["Specialization for wind pollination through cottony capitulate inflorescences", "Ecological adaptation to wetland and aquatic habitats"],
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
    enOverview: "A family including rushes (Juncus), woodrushes (Luzula), and related genera. Widely distributed in wetlands, grasslands, and mountains, with about 100 species native to Japan. Best known for the soft rush used in traditional tatami mats. Flowers are wind-pollinated with six reduced, inconspicuous tepals.",
    characteristics: [
      "茎は円柱形で中空または髄が充満",
      "花被片6枚で褐色〜緑色の地味な花",
      "風媒花で花粉量が多い",
      "葉は円柱形または扁平、葉鞘をもつ",
    ],
    enCharacteristics: ["Stems are cylindrical, hollow or filled with pith", "Six tepals, inconspicuous brown to green flowers", "Wind-pollinated with abundant pollen production", "Leaves are cylindrical or flat, with leaf sheaths"],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > イグサ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Poales > Juncaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "イグサ属（Juncus）",
      "スズメノヤリ属（Luzula）",
    ],
    evolutionEvents: [
      "花被の退化・風媒化による乾燥・開放環境への適応",
      "湿地〜高山帯まで広い生態幅の確立",
    ],
    enEvolutionEvents: ["Adaptation to dry, open environments through tepal reduction and shift to wind pollination", "Establishment of a broad ecological range from wetlands to alpine zones"],
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
    enOverview: "A large family including sedges (Carex), galingales (Cyperus), bulrushes, and papyrus. About 5,000 species are known, widely distributed in wetlands, waterside habitats, and grasslands worldwide. Similar to grasses but distinguished by triangular stems without nodes. About 600 species are native to Japan.",
    characteristics: [
      "茎の断面は三角形で節がない（「カヤツリグサの三角」）",
      "葉鞘の口が閉じている",
      "小穂は鱗片と1花からなる",
      "風媒花で花被は糸状または鱗片状",
      "湿地・水辺に特に多い",
    ],
    enCharacteristics: ["Stem cross-section is triangular without nodes ('sedges have edges')", "Leaf sheath margins are closed (fused)", "Spikelets consist of a scale and a single flower", "Wind-pollinated; perianth is filamentous or scale-like", "Especially abundant in wetlands and waterside habitats"],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > カヤツリグサ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Poales > Cyperaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (about 80–70 million years ago)",
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
    enEvolutionEvents: ["Establishment of the morphological innovation of triangular stems and closed leaf sheaths", "Ecological radiation from wetlands to alpine zones"],
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
      "オーストラリア・ニュージーランド・東南アジアに分布する小さな科。日本には分布しない。極めて小型の草本で、湿地・岩場に生育する。花は高度に退化・単純化しており、APG体系でサンアソウ科に近縁。",
    enOverview: "A small family distributed in Australia, New Zealand, and Southeast Asia. Not found in Japan. Extremely small herbs growing in wetlands and rocky habitats. Flowers are highly reduced and simplified; closely related to Restionaceae under the APG system.",
    characteristics: [
      "極めて小型で、葉は糸状〜毛状",
      "花は非常に単純で花被を欠くか退化",
      "湿地・岩場の貧栄養環境に生育",
      "APG体系でサンアソウ科に近縁",
    ],
    enCharacteristics: ["Extremely small plants with thread-like to hair-like leaves", "Flowers are very simple, lacking or with reduced perianth", "Grows in nutrient-poor wetland and rocky habitats", "Closely related to Restionaceae under the APG system"],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > ホソバノイグサ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Poales > Centrolepidaceae",
    divergenceEra: "古第三紀〜新第三紀",
    enDivergenceEra: "Paleogene to Neogene",
    representativeGenera: [
      "Centrolepis属（Centrolepis）",
    ],
    evolutionEvents: [
      "南半球を中心とした分布形成（ゴンドワナ起源の可能性）",
      "花の極度の退化・単純化",
    ],
    enEvolutionEvents: ["Formation of predominantly Southern Hemisphere distribution (possible Gondwanan origin)", "Extreme reduction and simplification of flowers"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホソバノイグサ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── サンアソウ科 ────────────────────────────────────────
  {
    id: "restionaceae",
    jaName: "サンアソウ科",
    enName: "Restio family",
    scientificName: "Restionaceae",
    order: "イネ目",
    overview:
      "南アフリカ（ケープ地方）・オーストラリアの貧栄養な砂質土壌・草地に多様性の中心をもつ科。光合成は葉ではなく茎で行う（葉は退化または鱗片状）。日本には自生しないが、観賞用に栽培される種がある。",
    enOverview: "A family with its center of diversity in nutrient-poor sandy soils and grasslands of South Africa (Cape region) and Australia. Photosynthesis is performed by stems rather than leaves (leaves are reduced or scale-like). Not native to Japan, but some species are cultivated as ornamentals.",
    characteristics: [
      "葉が退化し、緑色の茎が光合成を担う",
      "茎は細長く、節間に苞がある",
      "風媒花で小穂状の花序",
      "貧栄養・乾燥した砂質土に適応",
    ],
    enCharacteristics: ["Leaves are reduced; green stems perform photosynthesis", "Stems are slender and elongate, with bracts at internodes", "Wind-pollinated with spikelet-like inflorescences", "Adapted to nutrient-poor, dry sandy soils"],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > サンアソウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Poales > Restionaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "Restio属（Restio）",
      "Thamnochortus属（Thamnochortus）",
    ],
    evolutionEvents: [
      "南半球の貧栄養土壌（フィンボス・スクラブ）への特殊適応",
      "葉の光合成機能の茎への移転",
    ],
    enEvolutionEvents: ["Specialized adaptation to nutrient-poor Southern Hemisphere soils (fynbos and scrub)", "Transfer of photosynthetic function from leaves to stems"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サンアソウ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── トウツルモドキ科 ──────────────────────────────────────
  {
    id: "flagellariaceae",
    jaName: "トウツルモドキ科",
    enName: "Flagellaria family",
    scientificName: "Flagellariaceae",
    order: "イネ目",
    overview:
      "熱帯アジア〜太平洋・アフリカに分布する単型科。トウアズキ（Flagellaria indica）1種のみが知られ、日本では沖縄・小笠原に自生する。葉先がまきひげ状になって他の植物に絡まるつる性草本。",
    enOverview: "A monotypic family distributed from tropical Asia to the Pacific and Africa. Only Flagellaria indica is known; in Japan it grows natively in Okinawa and the Ogasawara Islands. A climbing herb whose leaf tips are modified into tendrils that twine around other plants.",
    characteristics: [
      "葉先がまきひげ状になり、他の植物に絡みつく",
      "茎は細く長くのび、林縁を這い上がる",
      "花は小さく白色、円錐花序",
      "果実は球形の液果",
    ],
    enCharacteristics: ["Leaf tips are modified into tendrils that twine around other plants", "Stems are slender and elongate, climbing along forest edges", "Flowers are small, white, in panicle inflorescences", "Fruit is a spherical berry"],
    phylogeneticPosition: "被子植物 > 単子葉類 > イネ目 > トウツルモドキ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Poales > Flagellariaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "トウアズキ属（Flagellaria）",
    ],
    evolutionEvents: [
      "葉先のまきひげ化によるつる性への構造的革新",
      "インド洋〜太平洋の熱帯海岸沿いへの広域分散",
    ],
    enEvolutionEvents: ["Structural innovation toward climbing habit through tendril modification of leaf tips", "Wide dispersal along tropical coasts of the Indian and Pacific Oceans"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トウツルモドキ科" },
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
    enOverview: "A family of aquatic plants widely distributed in freshwater habitats worldwide. A small family comprising only a few species such as hornwort (Ceratophyllum demersum). Lacks roots entirely and lives fully submerged in water. Occupies a unique phylogenetic position among angiosperms (outside the eudicots).",
    characteristics: [
      "根を完全に欠く（根なし水草）",
      "葉は輪生し、先端が二叉に分岐した糸状",
      "花は単性で花被を欠く、極めて単純",
      "完全沈水植物で水媒花",
      "節間に浮力をもち、水中を浮遊する",
    ],
    enCharacteristics: ["Completely lacks roots (rootless aquatic plant)", "Leaves are whorled, filamentous with dichotomously forked tips", "Flowers are unisexual, lacking perianth, extremely simple", "Fully submerged plant with hydrophilous (water) pollination", "Buoyant internodes allow floating in water"],
    phylogeneticPosition: "被子植物 > キンギョモ目 > キンギョモ科（真正双子葉類の基部に近い位置）",
    enPhylogeneticPosition: "Angiosperms > Ceratophyllales > Ceratophyllaceae (positioned near the base of eudicots)",
    divergenceEra: "白亜紀前期〜中期（約1億2000万〜1億年前）",
    enDivergenceEra: "Early to Mid-Cretaceous (about 120–100 million years ago)",
    representativeGenera: [
      "キンギョモ属（Ceratophyllum）",
    ],
    evolutionEvents: [
      "根の完全消失による完全沈水・浮遊生活への進化",
      "被子植物としての最古の分岐系統のひとつとして系統的孤立",
    ],
    enEvolutionEvents: ["Evolution toward fully submerged, free-floating life through complete loss of roots", "Phylogenetic isolation as one of the earliest diverging lineages among angiosperms"],
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
    enOverview: "A small family of evergreen to deciduous shrubs and trees including bayberry (Morella rubra). Known for nitrogen fixation through symbiosis with actinobacteria (Frankia), enabling growth on poor soils. Drupe-like fruits are sometimes covered with a waxy coating.",
    characteristics: [
      "根にFrankia属放線菌が共生し窒素固定を行う",
      "葉は互生で芳香をもつことが多い",
      "花は単性で花被を欠く小さな穂状花序",
      "果実は核果または偽果で、表面に蝋質の粒をもつものがある",
    ],
    enCharacteristics: ["Frankia actinobacteria form root nodule symbiosis for nitrogen fixation", "Leaves are alternate, often aromatic", "Flowers are unisexual, lacking perianth, in small catkin-like inflorescences", "Fruits are drupes or pseudofruits, sometimes with waxy granules on the surface"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ブナ目 > ヤマモモ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Fagales > Myricaceae",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    enDivergenceEra: "Paleogene (about 60–50 million years ago)",
    representativeGenera: [
      "ヤマモモ属（Morella）",
      "ハイイロヤマモモ属（Myrica）",
      "コンプトニア属（Comptonia）",
    ],
    evolutionEvents: [
      "Frankia属放線菌との共生進化による窒素固定能の獲得",
      "ブナ目内での早期分岐",
    ],
    enEvolutionEvents: ["Acquisition of nitrogen fixation through coevolution with Frankia actinobacteria", "Early divergence within Fagales"],
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
    enOverview: "A family of large deciduous trees including walnuts, hickories, and pecans. Key identifying features are pinnately compound leaves and drupes (nuts) containing large edible seeds. About 10 genera and 50 species are distributed in temperate to tropical regions of the Northern Hemisphere; Japanese walnut (Juglans mandshurica) is native to Japan.",
    characteristics: [
      "羽状複葉が多く、芳香をもつ",
      "花は単性で、雄花は垂れ下がる尾状花序",
      "果実は核果で、外果皮は肉質または乾燥し、内果皮は硬い殻",
      "大型の落葉高木が多い",
    ],
    enCharacteristics: ["Mostly pinnately compound leaves, often aromatic", "Flowers are unisexual; male flowers form pendulous catkins", "Fruit is a drupe with fleshy or dry exocarp and a hard endocarp (shell)", "Mostly large deciduous trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ブナ目 > クルミ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Fagales > Juglandaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約9000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (about 90–70 million years ago)",
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
    enEvolutionEvents: ["Adaptive evolution toward mammal dispersal through large nuts", "Independent evolution of wind pollination within Fagales"],
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
    enOverview: "A family native to Australia and Southeast Asia. Casuarina equisetifolia is planted in Japan for windbreaks and sand stabilization. Has a distinctive morphology where leaves are reduced and photosynthesis is carried out by green, jointed branchlets (cladodes), giving a conifer-like appearance.",
    characteristics: [
      "葉は極度に退化し輪生する小さな鱗片状",
      "節のある細い緑色の枝が光合成を行う（葉状枝）",
      "木質化した球果状の偽果",
      "根にFrankia属が共生し窒素固定を行う",
    ],
    enCharacteristics: ["Leaves are extremely reduced to small, whorled scales", "Slender green jointed branchlets (cladodes) perform photosynthesis", "Woody cone-like pseudofruits", "Frankia actinobacteria form root symbiosis for nitrogen fixation"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ブナ目 > モクマオウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Fagales > Casuarinaceae",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    enDivergenceEra: "Paleogene (about 50–40 million years ago)",
    representativeGenera: [
      "モクマオウ属（Casuarina）",
      "トクサバモクマオウ属（Allocasuarina）",
    ],
    evolutionEvents: [
      "乾燥・貧栄養環境への適応としての葉の退化と葉状枝の発達",
      "窒素固定共生の独立獲得",
    ],
    enEvolutionEvents: ["Leaf reduction and cladode development as adaptation to arid, nutrient-poor environments", "Independent acquisition of nitrogen-fixing symbiosis"],
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
    enOverview: "A small family of about 1 genus and 15 species. Coriaria japonica is native to Japan. The entire plant contains the toxic compound coriamyrtin, and accidental poisoning from fruit ingestion is well documented. Characterized by opposite leaves and distinctive inflorescences.",
    characteristics: [
      "葉は対生または輪生し、基部から3脈が出る",
      "花は小さく5数性、果実は花後に発達した花弁が肉質になって果実を包む",
      "全草に神経毒コリアミルチンを含む有毒植物",
      "Frankia属との共生による窒素固定",
    ],
    enCharacteristics: ["Leaves are opposite or whorled, with three veins from the base", "Flowers are small, pentamerous; petals become fleshy after flowering and enclose the fruit", "Entire plant is poisonous, containing the neurotoxin coriamyrtin", "Nitrogen fixation through symbiosis with Frankia"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > ドクウツギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Cucurbitales > Coriariaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万〜6000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (about 70–60 million years ago)",
    representativeGenera: [
      "ドクウツギ属（Coriaria）",
    ],
    evolutionEvents: [
      "コリアミルチンなど神経毒の進化（草食者への防御）",
      "花弁が果肉化するユニークな偽果構造の進化",
    ],
    enEvolutionEvents: ["Evolution of neurotoxins such as coriamyrtin (defense against herbivores)", "Evolution of a unique pseudofruit structure where petals become fleshy"],
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
    enOverview: "A family containing many globally important vegetables and fruits such as cucumbers, pumpkins, watermelons, and bitter gourds. Mostly climbing herbs that cling to supports with tendrils. Monoecious with unisexual flowers; fruits are a distinctive berry type called a pepo.",
    characteristics: [
      "つる性草本で腋生の巻きひげをもつ",
      "葉は互生し、しばしば掌状に裂ける",
      "花は単性（雌雄同株が多い）、花弁は合着して5裂",
      "果実は瓜果（ウリ果）で、果皮が硬化しやすい",
    ],
    enCharacteristics: ["Climbing herbs with axillary tendrils", "Leaves are alternate, often palmately lobed", "Flowers are unisexual (mostly monoecious), with fused petals 5-lobed", "Fruit is a pepo with a rind that tends to harden"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > ウリ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Cucurbitales > Cucurbitaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (about 80–70 million years ago)",
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
    enEvolutionEvents: ["Evolution of the pepo, a unique fruit type", "Development of cucurbitacins as bitter defense compounds against herbivores"],
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
    enOverview: "A small family of only two species with a disjunct distribution between the eastern Mediterranean to Central Asia/India and North America. Large perennial herbs with unisexual flowers. Roots host Frankia for nitrogen fixation. Belongs to Cucurbitales, related to Begoniaceae and Cucurbitaceae.",
    characteristics: [
      "大型の多年生草本（高さ1〜2m）",
      "葉は羽状複葉状に深く裂ける",
      "花は単性で花弁を欠くか小さい",
      "根にFrankia属が共生し窒素固定を行う",
    ],
    enCharacteristics: ["Large perennial herbs (1–2 m tall)", "Leaves are deeply divided in a pinnately compound manner", "Flowers are unisexual, lacking petals or with small petals", "Frankia actinobacteria form root symbiosis for nitrogen fixation"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > ダティスカ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Cucurbitales > Datiscaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ダティスカ属（Datisca）",
    ],
    evolutionEvents: [
      "ウリ目内での窒素固定共生の独立獲得",
      "旧世界〜新世界の隔離分布の形成",
    ],
    enEvolutionEvents: ["Independent acquisition of nitrogen-fixing symbiosis within Cucurbitales", "Formation of disjunct distribution between the Old and New Worlds"],
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
    enOverview: "A family widely cultivated as ornamentals, including hardy begonia (Begonia grandis). Over 2,000 species in about 2 genera are known, widely distributed in tropical and subtropical regions. The most distinctive feature is the markedly asymmetric leaves.",
    characteristics: [
      "葉が著しく左右非対称（非対称葉）",
      "花は単性で、雌花には翼のある子房が目立つ",
      "多肉質の茎をもつものが多い",
      "托葉が発達する",
    ],
    enCharacteristics: ["Leaves are markedly asymmetric (oblique leaves)", "Flowers are unisexual; female flowers have conspicuously winged ovaries", "Many species have succulent stems", "Stipules are well-developed"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > シュウカイドウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Cucurbitales > Begoniaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前〜）",
    enDivergenceEra: "Late Cretaceous to Paleogene (from about 70 million years ago)",
    representativeGenera: [
      "シュウカイドウ属（Begonia）",
      "ヒレカズラ属（Hillebrandia）",
    ],
    evolutionEvents: [
      "左右非対称の葉という特殊形態の進化",
      "熱帯林床環境への適応",
    ],
    enEvolutionEvents: ["Evolution of asymmetric leaves as a specialized morphology", "Adaptation to tropical forest floor environments"],
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
    enOverview: "A family including familiar Japanese woody plants such as winged spindle tree (Euonymus alatus), Japanese spindle (E. japonicus), and oriental bittersweet. About 90 genera and 1,400 species are known, widely distributed from tropical to temperate regions. Characterized by a well-developed floral disc and fruits with orange-red arils.",
    characteristics: [
      "花盤（花托の肥厚した組織）が発達する",
      "果実はさく果が多く、橙赤色の肉質仮種皮で種子を包む",
      "葉は単葉で対生または互生",
      "小さな4〜5数性の花",
    ],
    enCharacteristics: ["Floral disc (thickened receptacle tissue) is well-developed", "Fruits are mostly capsules; seeds are enclosed in orange-red fleshy arils", "Leaves are simple, opposite or alternate", "Small tetramerous or pentamerous flowers"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > ニシキギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Celastrales > Celastraceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (about 80–70 million years ago)",
    representativeGenera: [
      "ニシキギ属（Euonymus）",
      "ツルウメモドキ属（Celastrus）",
      "マユミ属（Euonymus）",
    ],
    evolutionEvents: [
      "橙赤色仮種皮による鳥類を介した種子散布戦略の進化",
      "花盤の発達による蜜線の多様化",
    ],
    enEvolutionEvents: ["Evolution of bird-mediated seed dispersal through orange-red arils", "Diversification of nectaries through floral disc development"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ニシキギ科" },
    ],
    japaneseSpeciesCount: 159,
    review: { status: "ai_generated" },
  },

  // ── マメモドキ科 ──────────────────────────────────────
  {
    id: "connaraceae",
    jaName: "マメモドキ科",
    enName: "Connarus family",
    scientificName: "Connaraceae",
    order: "ニシキギ目",
    overview:
      "約12属180種からなる熱帯性の科で、日本では南西諸島にテリハゴウカン（Rourea minor）などが生育する。木本のつる植物または小高木が多く、複葉と特徴的な裂開する果実をもつ。",
    enOverview: "A tropical family of about 12 genera and 180 species. In Japan, Rourea minor and others grow in the Nansei Islands. Mostly woody climbers or small trees, with compound leaves and characteristically dehiscent fruits.",
    characteristics: [
      "木本のつる植物または低木・小高木",
      "葉は奇数羽状複葉",
      "花は5数性で小さく、芳香をもつものがある",
      "果実は革質の袋果（のう果）で熟すと裂け、橙赤色の仮種皮をもつ種子を露出する",
    ],
    enCharacteristics: ["Woody climbers or shrubs and small trees", "Leaves are odd-pinnately compound", "Flowers are pentamerous, small, sometimes fragrant", "Fruit is a leathery follicle that dehisces when ripe, exposing seeds with orange-red arils"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > マメモドキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Celastrales > Connaraceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "コンナラス属（Connarus）",
      "ルウレア属（Rourea）",
    ],
    evolutionEvents: [
      "熱帯林における木本つる植物としての生活型の確立",
    ],
    enEvolutionEvents: ["Establishment of the woody climbing life form in tropical forests"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マメモドキ科" },
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
    enOverview: "A family of about 27 genera and 350 species distributed in temperate to tropical regions of the Southern Hemisphere. Most diverse in South Africa, Australia, and South Pacific islands; some species are cultivated as ornamentals in Japan. Mostly evergreen trees with opposite compound leaves.",
    characteristics: [
      "葉は対生し、羽状複葉または単葉",
      "托葉が葉柄間に発達する（葉間托葉）",
      "花は小さく4〜5数性",
      "果実はさく果または液果",
    ],
    enCharacteristics: ["Leaves are opposite, pinnately compound or simple", "Interpetiolar stipules are well-developed", "Flowers are small, tetramerous or pentamerous", "Fruit is a capsule or berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > クノニア科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Celastrales > Cunoniaceae",
    divergenceEra: "白亜紀後期〜古第三紀（ゴンドワナ分裂期）",
    enDivergenceEra: "Late Cretaceous to Paleogene (during Gondwana breakup)",
    representativeGenera: [
      "クノニア属（Cunonia）",
      "ウェインマンニア属（Weinmannia）",
      "カルポドエタス属（Carpodetus）",
    ],
    evolutionEvents: [
      "ゴンドワナ大陸分裂に伴う南半球各地域への分散",
    ],
    enEvolutionEvents: ["Dispersal to various Southern Hemisphere regions associated with the breakup of Gondwana"],
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
    enOverview: "A family including evergreen trees such as Elaeocarpus sylvestris. About 12 genera and 600 species are known, widely distributed in tropical to temperate regions of the Old World. Identified by petal tips that are fringed (laciniate).",
    characteristics: [
      "花弁の先端が細かく裂ける（流蘇状・フリンジ状）",
      "葉は互生し、秋に一部の葉が紅葉して落葉する（常緑樹でも）",
      "果実は核果または蒴果",
      "常緑高木が多い",
    ],
    enCharacteristics: ["Petal tips are finely divided (fringed/laciniate)", "Leaves are alternate; some leaves turn red and drop in autumn (even in evergreen species)", "Fruit is a drupe or capsule", "Mostly evergreen tall trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > ホルトノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Celastrales > Elaeocarpaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ホルトノキ属（Elaeocarpus）",
      "スロアネア属（Sloanea）",
      "アリスタンドラ属（Aristotelia）",
    ],
    evolutionEvents: [
      "流蘇状（フリンジ状）花弁という特殊な花形態の進化",
    ],
    enEvolutionEvents: ["Evolution of fringed (laciniate) petals as a specialized floral morphology"],
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
    enOverview: "A representative family forming coastal mangrove forests in tropical and subtropical regions. In Japan, Kandelia obovata and Rhizophora stylosa grow in Okinawa and elsewhere. Known for viviparous seeds (germinating while still attached to the parent tree, with the hypocotyl elongating before dispersal).",
    characteristics: [
      "胎生種子（果実が母樹についたまま種子が発芽・胚軸が伸びる）",
      "気根（支柱根または膝根）が発達する",
      "葉は対生で厚い革質",
      "塩類排出または塩分貯留による塩害適応",
    ],
    enCharacteristics: ["Viviparous seeds (seeds germinate and hypocotyls elongate while still on the parent tree)", "Aerial roots (prop roots or knee roots) are well-developed", "Leaves are opposite, thick, and coriaceous", "Salt tolerance through salt excretion or salt accumulation"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ニシキギ目 > ヒルギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Celastrales > Rhizophoraceae",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    enDivergenceEra: "Paleogene (about 50–40 million years ago)",
    representativeGenera: [
      "ヒルギ属（Rhizophora）",
      "メヒルギ属（Kandelia）",
      "オヒルギ属（Bruguiera）",
    ],
    evolutionEvents: [
      "胎生種子という海岸適応の進化",
      "マングローブ生態系の形成・維持機能の進化",
    ],
    enEvolutionEvents: ["Evolution of viviparous seeds as a coastal adaptation", "Evolution of mangrove ecosystem formation and maintenance functions"],
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
    enOverview: "A family of about 4 genera and 250 species including the coca plant (Erythroxylum coca). Mainly distributed in tropical South America. Globally known because coca leaves contain coca alkaloids, precursors to cocaine. Mostly woody plants with small white five-petaled flowers.",
    characteristics: [
      "木本（低木〜中高木）が多い",
      "葉は互生で托葉が発達する",
      "花は小さく5数性、花弁に付属体をもつ",
      "果実は核果",
    ],
    enCharacteristics: ["Mostly woody plants (shrubs to medium-tall trees)", "Leaves are alternate with well-developed stipules", "Flowers are small, pentamerous, with appendages on petals", "Fruit is a drupe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > コカノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Erythroxylaceae",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    enDivergenceEra: "Paleogene (about 60–50 million years ago)",
    representativeGenera: [
      "コカノキ属（Erythroxylum）",
    ],
    evolutionEvents: [
      "コカアルカロイドの生合成経路の進化（草食者への化学防御）",
    ],
    enEvolutionEvents: ["Evolution of coca alkaloid biosynthetic pathways (chemical defense against herbivores)"],
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
    enOverview: "A family of parasitic plants including Rafflesia, known for producing the world's largest flowers. Lacking leaves, stems, and roots, it exists as mycelium-like tissue within the host plant (Vitaceae and others), emerging only when flowering. About 3 genera and 40 species are distributed in tropical Asia.",
    characteristics: [
      "葉・茎・根をもたない完全寄生植物",
      "宿主の組織内に糸状体として存在する",
      "花は非常に大型で腐敗臭を発し、ハエ類を花粉媒介者とする",
      "ラフレシア属では花径1m以上に達する種がある",
    ],
    enCharacteristics: ["Holoparasitic plant lacking leaves, stems, and roots", "Exists as filamentous tissue within host plant tissues", "Flowers are very large, emitting a rotting smell to attract fly pollinators", "Some Rafflesia species produce flowers exceeding 1 m in diameter"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > ラフレシア科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Rafflesiaceae",
    divergenceEra: "古第三紀（約4500万〜3500万年前）",
    enDivergenceEra: "Paleogene (about 45–35 million years ago)",
    representativeGenera: [
      "ラフレシア属（Rafflesia）",
      "サプリア属（Sapria）",
      "ミトラステモン属（Mitrastemon）",
    ],
    evolutionEvents: [
      "完全寄生への進化に伴う植物体の極端な退化（葉・茎・根の消失）",
      "腐敗臭による送粉者（ハエ類）への特殊化",
    ],
    enEvolutionEvents: ["Extreme vegetative body reduction (loss of leaves, stems, and roots) accompanying evolution toward holoparasitism", "Specialization for fly pollinators through carrion-like odor"],
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
    enOverview: "A large, extremely diverse family including spurges, poinsettias, rubber trees, and castor oil plants. About 300 genera and 6,500 species are distributed from tropical to temperate regions. Many species produce toxic latex (white sap), and the inflorescence (cyathium) is distinctive.",
    characteristics: [
      "多くの種が有毒の白色乳液（ラテックス）をもつ",
      "花は単性で花弁を欠くことが多い",
      "杯状花序（サイアシウム）という独特の花の集まり（Euphorbus属）",
      "果実は弾性のある蒴果で、熟すと種子を弾き飛ばす",
    ],
    enCharacteristics: ["Many species produce toxic white latex", "Flowers are unisexual, often lacking petals", "Cyathium, a distinctive pseudanthial inflorescence (in genus Euphorbia)", "Fruit is an explosive capsule that ejects seeds when ripe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > トウダイグサ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Euphorbiaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約9000万〜8000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (about 90–80 million years ago)",
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
    enEvolutionEvents: ["Defense against herbivores through independent diversification of latex", "Evolution of the cyathium as a pseudanthial (false flower) structure"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トウダイグサ科" },
    ],
    japaneseSpeciesCount: 438,
    review: { status: "ai_generated" },
  },

  // ── ミゾハコベ科 ──────────────────────────────────────
  {
    id: "elatinaceae",
    jaName: "ミゾハコベ科",
    enName: "Waterwort family",
    scientificName: "Elatinaceae",
    order: "キントラノオ目",
    overview:
      "ミズハコベ（Elatine triandra）など小型の湿地・水生植物を含む小科。約2属35種が世界の温帯〜熱帯の湿地・水際に分布し、日本でも水田・池沼に生育する。葉は対生で非常に小さく、花も極めて小さい。",
    enOverview: "A small family of small wetland and aquatic plants such as Elatine triandra. About 2 genera and 35 species are distributed in wetlands and waterside habitats from temperate to tropical regions worldwide; in Japan they grow in rice paddies and ponds. Leaves are opposite and very small; flowers are extremely tiny.",
    characteristics: [
      "小型の湿生・水生草本",
      "葉は対生で単葉、非常に小さい",
      "花は2〜4数性で非常に小さく、花弁は白色〜淡紅色",
      "果実はさく果",
    ],
    enCharacteristics: ["Small wetland and aquatic herbs", "Leaves are opposite, simple, and very small", "Flowers are dimerous to tetramerous, very small, with white to pale pink petals", "Fruit is a capsule"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > ミゾハコベ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Elatinaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "ミズハコベ属（Elatine）",
      "ベルギア属（Bergia）",
    ],
    evolutionEvents: [
      "湿地・水際環境への小型化による適応",
    ],
    enEvolutionEvents: ["Adaptation to wetland and waterside environments through miniaturization"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミゾハコベ科" },
    ],
    japaneseSpeciesCount: 11,
    review: { status: "ai_generated" },
  },

  // ── キントラノオ科 ──────────────────────────────────────
  {
    id: "malpighiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Malpighia_glabra.jpg",
    jaName: "キントラノオ科",
    enName: "Barbados cherry family",
    scientificName: "Malpighiaceae",
    order: "キントラノオ目",
    overview:
      "約75属1300種の熱帯性科で、アセロラ（Malpighia emarginata）が日本でもビタミンC源として知られる。T字形・Y字形の腺毛（マルピーギア型毛）をもつことと、翼のある果実が特徴。主に新熱帯区に分布。",
    enOverview: "A tropical family of about 75 genera and 1,300 species. Acerola (Malpighia emarginata) is known in Japan as a vitamin C source. Distinguished by T-shaped or Y-shaped glandular hairs (Malpighian trichomes) and winged fruits. Distributed mainly in the Neotropics.",
    characteristics: [
      "葉の両面または裏面にT字形・Y字形の腺毛（マルピーギア型毛）をもつ",
      "花弁5枚のうち1枚が旗弁状に大きくなり、爪部が発達する",
      "果実は分果（翼果）で、風散布に適応するものが多い",
      "木本のつる植物が多い",
    ],
    enCharacteristics: ["T-shaped or Y-shaped glandular hairs (Malpighian trichomes) on leaf surfaces", "One of five petals is enlarged as a banner petal with a developed claw", "Fruits are schizocarps (samaras), many adapted for wind dispersal", "Mostly woody climbers"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > キントラノオ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Malpighiaceae",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    enDivergenceEra: "Paleogene (about 60–50 million years ago)",
    representativeGenera: [
      "マルピーギア属（Malpighia）",
      "バンニステリア属（Banisteriopsis）",
      "ヒプタゲ属（Hiptage）",
    ],
    evolutionEvents: [
      "翼果による風散布の多様な進化",
      "マルピーギア型毛（T字形腺毛）の特殊化",
    ],
    enEvolutionEvents: ["Diverse evolution of wind dispersal through winged fruits (samaras)", "Specialization of Malpighian trichomes (T-shaped glandular hairs)"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/キントラノオ科" },
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
    enOverview: "A family known for plants with complex flowers resembling clock faces, such as the blue passionflower (Passiflora caerulea). About 27 genera and 900 species are distributed in tropical to subtropical regions, widely cultivated as ornamentals in Japan. Mostly climbing herbs and woody plants with tendrils.",
    characteristics: [
      "花の中心に「副花冠」と呼ばれる糸状〜板状の構造をもつ",
      "つる性草本〜木本で腋生の巻きひげをもつ",
      "葉は互生し、しばしば掌状に裂ける",
      "果実は液果（パッションフルーツなど食用）",
    ],
    enCharacteristics: ["Flowers have a corona of filamentous to plate-like structures at the center", "Climbing herbs to woody plants with axillary tendrils", "Leaves are alternate, often palmately lobed", "Fruit is a berry (edible in passion fruit and others)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > トケイソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Passifloraceae",
    divergenceEra: "古第三紀（約6500万〜5500万年前）",
    enDivergenceEra: "Paleogene (about 65–55 million years ago)",
    representativeGenera: [
      "トケイソウ属（Passiflora）",
      "アデニア属（Adenia）",
    ],
    evolutionEvents: [
      "副花冠という特殊な花構造の進化（ハチドリ・蝶への適応）",
      "チョウ類（ヘリコニウス属）との共進化",
    ],
    enEvolutionEvents: ["Evolution of the corona as a specialized floral structure (adaptation to hummingbirds and butterflies)", "Coevolution with Heliconius butterflies"],
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
    enOverview: "A family with flax (Linum usitatissimum) as its representative species. Long utilized by humans as a fiber and oil crop. About 22 genera and 300 species are widely distributed from temperate to tropical regions; Linum stelleroides is native to Japan.",
    characteristics: [
      "葉は単葉で互生または対生、小さく線形のものが多い",
      "花は5数性で整形、花弁は青〜白または黄色",
      "果実はさく果で10個の種子",
      "茎の繊維が発達する（アマ繊維の原料）",
    ],
    enCharacteristics: ["Leaves are simple, alternate or opposite, often small and linear", "Flowers are pentamerous, actinomorphic, with blue, white, or yellow petals", "Fruit is a capsule with 10 seeds", "Stem fibers are well-developed (source of linen fiber)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > アマ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Linaceae",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    enDivergenceEra: "Paleogene (about 60–50 million years ago)",
    representativeGenera: [
      "アマ属（Linum）",
      "ラインハルティア属（Reinwardtia）",
    ],
    evolutionEvents: [
      "繊維質茎の発達",
      "亜麻仁油（α-リノレン酸）の豊富な種子油の獲得",
    ],
    enEvolutionEvents: ["Development of fibrous stems", "Acquisition of seed oil rich in linseed oil (alpha-linolenic acid)"],
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
    enOverview: "A family of plants with yellow flowers including St. John's wort (Hypericum erectum), also known in the broad sense as the mangosteen family. About 9 genera and 590 species are distributed from temperate to tropical regions, with many species native to Japan. Characterized by oil glands and black gland dots on leaves.",
    characteristics: [
      "葉に油腺（透明腺点）または黒色腺点をもつ",
      "花は5数性で整形、雄しべが多数束になる",
      "花弁は黄色が多い",
      "果実はさく果または液果",
    ],
    enCharacteristics: ["Leaves bear oil glands (translucent dots) or black gland dots", "Flowers are pentamerous, actinomorphic, with stamens in numerous fascicles", "Petals are mostly yellow", "Fruit is a capsule or berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > オトギリソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Clusiaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (about 80–70 million years ago)",
    representativeGenera: [
      "オトギリソウ属（Hypericum）",
      "マンゴスチン属（Garcinia）",
      "カルオフィルム属（Calophyllum）",
    ],
    evolutionEvents: [
      "ヒペリシン・ヒペルフォリンなどの二次代謝産物（薬効成分）の進化",
      "油腺（腺点）の多様化",
    ],
    enEvolutionEvents: ["Evolution of secondary metabolites with medicinal properties such as hypericin and hyperforin", "Diversification of oil glands (gland dots)"],
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
    enOverview: "A family of highly specialized aquatic plants that grow attached to rocks in rapids and waterfalls. The plant body is flattened and moss-like or alga-like, with indistinct differentiation of roots, stems, and leaves. Several species including Cladopus japonicus occur in Japan. About 50 genera and 270 species are distributed in tropical rapids.",
    characteristics: [
      "岩壁に固着する扁平な「根状体」で増殖する",
      "根・茎・葉の区別が不明瞭な極端な退化形態",
      "急流・飛沫帯の岩着生に特化した水生植物",
      "乾季に一年生として枯れ、水位回復後に発芽する種も多い",
    ],
    enCharacteristics: ["Propagates via flattened thalloid structures (root-like bodies) attached to rocks", "Extremely reduced morphology with indistinct root, stem, and leaf differentiation", "Aquatic plants specialized for rheophytic (rock-attached) growth in rapids and spray zones", "Many species die as annuals in the dry season and germinate after water levels recover"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > カワゴケソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Podostemaceae",
    divergenceEra: "古第三紀（約4000万〜3000万年前）",
    enDivergenceEra: "Paleogene (about 40–30 million years ago)",
    representativeGenera: [
      "カワゴケソウ属（Cladopus）",
      "ポドステモン属（Podostemum）",
    ],
    evolutionEvents: [
      "急流・岩着生への極端な体制変化（植物体の平板化・器官融合）",
      "被子植物中で最も異形な植物体形態の進化",
    ],
    enEvolutionEvents: ["Extreme body plan transformation for rheophytic rock-attached life (flattening and organ fusion)", "Evolution of the most aberrant vegetative body morphology among angiosperms"],
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
    enOverview: "A family of tropical and subtropical woody plants including Rangoon creeper (Combretum indicum), tropical almond (Terminalia catappa), and others. About 20 genera and 500 species are distributed worldwide; native species occur in Okinawa and the Nansei Islands of Japan. Includes some mangrove component species.",
    characteristics: [
      "葉は単葉で互生、しばしば葉柄に腺体をもつ",
      "花は4〜5数性で花弁をもつものともたないものがある",
      "果実は翼のある核果または液果",
      "大型の落葉〜常緑高木が多い",
    ],
    enCharacteristics: ["Leaves are simple, alternate, often with glands on the petiole", "Flowers are tetramerous or pentamerous, with or without petals", "Fruits are winged drupes or berries", "Mostly large deciduous to evergreen trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > シクンシ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Myrtales > Combretaceae",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    enDivergenceEra: "Paleogene (about 50–40 million years ago)",
    representativeGenera: [
      "シクンシ属（Quisqualis）",
      "モモタマナ属（Terminalia）",
      "コンブレタム属（Combretum）",
    ],
    evolutionEvents: [
      "翼果による風散布の発達",
      "熱帯マングローブから内陸乾燥地への多様な生態適応",
    ],
    enEvolutionEvents: ["Development of wind dispersal through winged fruits", "Diverse ecological adaptation from tropical mangroves to inland arid lands"],
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
    enOverview: "A diverse family including loosestrife (Lythrum anceps), crape myrtle (Lagerstroemia indica), and pomegranate (Punica granatum). About 32 genera and 650 species are distributed from tropical to temperate regions. Under APG IV, broadly circumscribed to include former Punicaceae and Trapaceae.",
    characteristics: [
      "花弁は萼筒（カリクスチューブ）の縁から出て、しわ・波打つことが多い",
      "茎は4稜〜6稜になることが多い",
      "葉は対生または輪生が多い",
      "果実はさく果または液果・漿果",
    ],
    enCharacteristics: ["Petals arise from the rim of the calyx tube, often crinkled or wavy", "Stems are often 4- to 6-angled", "Leaves are mostly opposite or whorled", "Fruit is a capsule, berry, or drupe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > ミソハギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Myrtales > Lythraceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (about 80–70 million years ago)",
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
    enEvolutionEvents: ["Development of heteromorphic stamens of different lengths in crape myrtle and others", "Expansion of family circumscription to include Punicaceae and others (APG IV)"],
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
    enOverview: "A family including willowherb (Epilobium), evening primrose (Oenothera biennis), and Circaea. About 22 genera and 650 species are distributed from temperate to tropical regions. Characterized by a stigma that splits into a cross shape and pollen grains connected by viscin threads.",
    characteristics: [
      "花は4数性（花弁4・萼片4・雄しべ8）が基本",
      "柱頭がしばしば十字形（4裂）",
      "花粉がビスシン（粘着糸）でつながる",
      "果実はさく果または液果",
    ],
    enCharacteristics: ["Flowers are basically tetramerous (4 petals, 4 sepals, 8 stamens)", "Stigma is often cross-shaped (4-lobed)", "Pollen grains are connected by viscin threads", "Fruit is a capsule or berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > アカバナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Myrtales > Onagraceae",
    divergenceEra: "古第三紀（約6000万〜5000万年前）",
    enDivergenceEra: "Paleogene (about 60–50 million years ago)",
    representativeGenera: [
      "アカバナ属（Epilobium）",
      "マツヨイグサ属（Oenothera）",
      "ミズタマソウ属（Circaea）",
    ],
    evolutionEvents: [
      "夜咲き花（マツヨイグサ属）によるスズメガ媒花への適応",
      "ビスシン（花粉粘着糸）の進化による効率的な花粉媒介",
    ],
    enEvolutionEvents: ["Adaptation to hawkmoth pollination through night-blooming flowers (genus Oenothera)", "Efficient pollination through evolution of viscin threads connecting pollen grains"],
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
    enOverview: "A large family including Eucalyptus, guava, Syzygium, and feijoa. Over 5,500 species in about 131 genera are distributed from the tropics to temperate regions of the Southern Hemisphere. Characterized by leaves with translucent oil glands and flowers with numerous clustered stamens.",
    characteristics: [
      "葉に精油を含む透明な腺点が散在する",
      "雄しべが多数（しばしば100本以上）で目立つ",
      "葉は対生で全縁、革質",
      "果実は液果・核果・さく果など多様",
    ],
    enCharacteristics: ["Translucent oil glands scattered throughout the leaves", "Numerous stamens (often over 100) that are conspicuous", "Leaves opposite, entire-margined, and coriaceous", "Fruits diverse: berries, drupes, or capsules"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > フトモモ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Myrtales > Myrtaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 80–70 million years ago)",
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
    enEvolutionEvents: ["Adaptation of Eucalyptus to arid conditions and wildfires (epicormic resprouting and fire resistance)", "Diversification of essential oils (terpenoids) for insect defense and antimicrobial activity"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フトモモ科" },
    ],
    japaneseSpeciesCount: 101,
    review: { status: "ai_generated" },
  },

  // ── クリソバラヌス科 ──────────────────────────────────────
  {
    id: "chrysobalanaceae",
    jaName: "クリソバラヌス科",
    enName: "Coco plum family",
    scientificName: "Chrysobalanaceae",
    order: "バラ目",
    overview:
      "約18属530種の熱帯性科で、ゾウの食物として知られるココプラム（Chrysobalanus icaco）などを含む。かつてはバラ科に含まれていたが、分子系統学によって独立した科として認識された。核果をもつ木本が多い。",
    enOverview: "A tropical family of about 18 genera and 530 species, including cocoplum (Chrysobalanus icaco), known as elephant food. Formerly placed within Rosaceae but recognized as an independent family through molecular phylogenetics. Mostly woody plants bearing drupes.",
    characteristics: [
      "核果をもつ木本（高木〜低木）",
      "花は5数性でしばしば左右相称",
      "雄しべは多数で一側に偏って発達する（左右非対称雄蕊群）",
      "葉は単葉で互生、全縁",
    ],
    enCharacteristics: ["Woody plants (trees to shrubs) bearing drupes", "Flowers pentamerous, often zygomorphic", "Numerous stamens developing asymmetrically to one side", "Leaves simple, alternate, entire-margined"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ目 > クリソバラヌス科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosales > Chrysobalanaceae",
    divergenceEra: "古第三紀（約5500万〜5000万年前）",
    enDivergenceEra: "Paleogene (approx. 55–50 million years ago)",
    representativeGenera: [
      "ココプラム属（Chrysobalanus）",
      "パリナリ属（Parinari）",
      "リカニア属（Licania）",
    ],
    evolutionEvents: [
      "バラ科からの独立（分子系統学的再評価）",
      "熱帯雨林林冠木として優占する種の多様化",
    ],
    enEvolutionEvents: ["Separation from Rosaceae through molecular phylogenetic reassessment", "Diversification of species dominant as tropical rainforest canopy trees"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クリソバラヌス科" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── カイナンボク科 ──────────────────────────────────────
  {
    id: "dichapetalaceae",
    jaName: "カイナンボク科",
    enName: "Dichapetalum family",
    scientificName: "Dichapetalaceae",
    order: "キントラノオ目",
    overview:
      "約3属165種の熱帯性科で、アフリカ・アジア・アメリカの熱帯雨林に分布する。ジカペタラム（Dichapetalum）属の一部の種はモノフルオロ酢酸などの強力な毒を含み、家畜の中毒事故が知られる。木本のつる植物が多い。",
    enOverview: "A tropical family of about 3 genera and 165 species distributed in tropical rainforests of Africa, Asia, and the Americas. Some species of Dichapetalum contain potent toxins such as monofluoroacetic acid, known to cause livestock poisoning. Mostly woody climbers.",
    characteristics: [
      "木本のつる植物または低木",
      "葉は互生で単葉",
      "花弁は先端が2裂する（二裂花弁、属名の由来）",
      "花序が葉柄または主脈に着生することがある",
    ],
    enCharacteristics: ["Woody climbers or shrubs", "Leaves alternate, simple", "Petals bifid at the apex (the basis of the genus name)", "Inflorescences sometimes borne on the petiole or midrib"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > カイナンボク科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Dichapetalaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (approx. 50 million years ago)",
    representativeGenera: [
      "ジカペタラム属（Dichapetalum）",
      "タポウラ属（Tapura）",
    ],
    evolutionEvents: [
      "フルオロ脂肪酸（モノフルオロ酢酸）という特殊な化学防御の進化",
      "花弁二裂という特殊な形態の進化",
    ],
    enEvolutionEvents: ["Evolution of fluorofatty acids (monofluoroacetic acid) as a specialized chemical defense", "Evolution of the distinctive bifid petal morphology"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カイナンボク科" },
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
    enOverview: "A small family of about 4 genera and 28 species from tropical Africa and Asia. Formerly considered allied to Euphorbiaceae or Violaceae, now placed in Malpighiales. Trees or shrubs bearing drupes.",
    characteristics: [
      "高木または低木",
      "葉は互生で単葉",
      "花は単性で小さく5数性",
      "果実は核果で大型のものがある",
    ],
    enCharacteristics: ["Trees or shrubs", "Leaves alternate, simple", "Flowers unisexual, small, pentamerous", "Fruits are drupes, sometimes large"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > パンダ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Pandaceae",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    enDivergenceEra: "Paleogene (approx. 50–40 million years ago)",
    representativeGenera: [
      "パンダ属（Panda）",
      "ミクロデスミス属（Microdesmis）",
    ],
    evolutionEvents: [
      "キントラノオ目内での独立した進化的位置の確立（分子系統学的再評価）",
    ],
    enEvolutionEvents: ["Establishment of an independent phylogenetic position within Malpighiales through molecular reassessment"],
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
    enOverview: "A small family consisting solely of the genus Euptelea, distributed in Japan, China, and the Himalayas. In early spring, conspicuous red stamens appear before the leaves in wind-pollinated flowers. A phylogenetically isolated group at the base of the eudicots.",
    characteristics: [
      "花弁・萼片を欠く（花被なし）",
      "多数の雄しべが房状に集まり、早春に咲く",
      "葉は互生で鋸歯があり先端がとがる",
      "果実は翼果で風散布",
      "落葉高木〜低木",
    ],
    enCharacteristics: ["Lacking petals and sepals (no perianth)", "Numerous stamens clustered in tufts, flowering in early spring", "Leaves alternate, serrate with acuminate tips", "Fruits are samaras, wind-dispersed", "Deciduous trees to shrubs"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > フサザクラ目 > フサザクラ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Eupteleales > Eupteleaceae",
    divergenceEra: "白亜紀前期〜中期（約1億1000万年前）",
    enDivergenceEra: "Early to Middle Cretaceous (approx. 110 million years ago)",
    representativeGenera: [
      "フサザクラ属（Euptelea）",
    ],
    evolutionEvents: [
      "花弁・萼片を失った風媒花への退化的進化",
      "真正双子葉類の基部系統として早期に分岐",
    ],
    enEvolutionEvents: ["Reductive evolution toward wind pollination with loss of petals and sepals", "Early divergence as a basal lineage of the eudicots"],
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
    enOverview: "A family of about 44 genera and 800 species including poppies (Papaver), Chelidonium, and Corydalis. Many produce latex (white to yellow sap containing alkaloids). Placed in Ranunculales under APG IV; Papaver, Corydalis, and others occur in Japan.",
    characteristics: [
      "切ると乳液（ラテックス）が出るものが多い",
      "花弁は4〜6枚、しわになりやすい",
      "雄しべは多数",
      "果実は蒴果で多数の種子を含む",
      "モルヒネ・コデインなどアルカロイドを含む種がある",
    ],
    enCharacteristics: ["Many exude latex when cut", "Petals 4–6, easily crumpled", "Stamens numerous", "Fruits are capsules containing numerous seeds", "Some species contain alkaloids such as morphine and codeine"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > ケシ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Ranunculales > Papaveraceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7500万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 75 million years ago)",
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
    enEvolutionEvents: ["Evolution of alkaloid biosynthesis pathways (morphine, berberine, etc.)", "Divergence into Papaveroideae and Fumarioideae (with zygomorphic flower evolution)"],
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
    enOverview: "A family including Akebia, Stauntonia, and other woody climbing plants familiar in Japan. Exhibits a disjunct distribution between East Asia and Chile. Flowers are unisexual, and plants produce fleshy berries with sweet pulp.",
    characteristics: [
      "木本性のつる植物が多い",
      "葉は掌状複葉または羽状複葉",
      "雌雄異花（同株または異株）",
      "花弁状の萼片3枚が目立つ",
      "果実は肉質で甘く、野生動物に食べられて種子散布",
    ],
    enCharacteristics: ["Mostly woody climbers", "Leaves palmately or pinnately compound", "Unisexual flowers (monoecious or dioecious)", "Three petaloid sepals conspicuous", "Fruits fleshy and sweet, seeds dispersed by wild animals"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > アケビ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Ranunculales > Lardizabalaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "アケビ属（Akebia）",
      "ムベ属（Stauntonia）",
      "ゴヨウアケビ属（Decaisnea）",
    ],
    evolutionEvents: [
      "東アジア〜チリという不連続分布の成立（大陸移動・気候変動による隔離）",
      "肉質果実による動物散布の獲得",
    ],
    enEvolutionEvents: ["Establishment of the East Asia–Chile disjunct distribution through continental drift and climatic isolation", "Acquisition of fleshy fruits for animal-mediated seed dispersal"],
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
    enOverview: "A family dominated by woody climbers including Sinomenium and Cocculus, with about 70 genera and 400 species mainly in the tropics and subtropics. Rich in alkaloids, some species are known as the source of curare (arrow poison).",
    characteristics: [
      "木本性つる植物が主体",
      "葉は単葉で互生、盾状葉になることも",
      "花は小さく3数性",
      "雌雄異株",
      "核果で種子は特徴的な馬蹄形",
    ],
    enCharacteristics: ["Predominantly woody climbers", "Leaves simple, alternate, sometimes peltate", "Flowers small, trimerous", "Dioecious", "Drupes with characteristically horseshoe-shaped seeds"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > ツヅラフジ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Ranunculales > Menispermaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (approx. 80 million years ago)",
    representativeGenera: [
      "ツヅラフジ属（Sinomenium）",
      "オオツヅラフジ属（Cocculus）",
      "アオツヅラフジ属（Stephania）",
    ],
    evolutionEvents: [
      "多様なアルカロイド（クラーレ成分・テトランドリンなど）の合成経路の進化",
      "熱帯を中心とした多様化と温帯への拡散",
    ],
    enEvolutionEvents: ["Evolution of diverse alkaloid biosynthesis pathways (curare components, tetrandrine, etc.)", "Diversification centered in the tropics with expansion into temperate regions"],
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
    enOverview: "A family of about 14 genera and 700 species including Berberis, Nandina, Mahonia, and Epimedium. Widely distributed in temperate regions of the Northern Hemisphere. Rich in yellow alkaloids (berberine), also used in traditional medicine.",
    characteristics: [
      "花弁と萼片が3数性（各3〜6枚）",
      "雄しべは触ると葯が内側に動く（虫が触れると花粉を付ける仕組み）",
      "ベルベリンなどの黄色アルカロイドを含む",
      "葉に棘をもつ種がある（メギなど）",
      "果実は液果または蒴果",
    ],
    enCharacteristics: ["Petals and sepals trimerous (3–6 each)", "Stamens exhibit touch-sensitive movement, snapping inward to deposit pollen on visiting insects", "Contain yellow alkaloids such as berberine", "Some species bear spiny leaves (e.g., Berberis)", "Fruits are berries or capsules"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > メギ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Ranunculales > Berberidaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 70 million years ago)",
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
    enEvolutionEvents: ["Evolution of the stamen 'spring' mechanism for pollen deposition", "Establishment of the berberine biosynthesis pathway (antimicrobial and herbivore deterrent)"],
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
    enOverview: "A large family of about 60 genera and 2,500 species including Ranunculus, Anemone, Clematis, Aconitum, and Aquilegia. Belongs to a basal group of the eudicots, retaining many primitive floral features with diverse flower morphology.",
    characteristics: [
      "花弁・萼片の数が不定（5枚基本だが変異が大きい）",
      "雄しべ・雌しべともに多数で螺旋状に配置",
      "アルカロイド（トリカブト毒・アネモニンなど）を含む種が多い",
      "多くは草本、まれに木本性つる（クレマチス）",
      "葉は多くが深裂または複葉",
    ],
    enCharacteristics: ["Number of petals and sepals variable (typically 5 but highly variable)", "Stamens and carpels numerous, spirally arranged", "Many species contain alkaloids (aconitine, anemonin, etc.)", "Mostly herbaceous, rarely woody climbers (Clematis)", "Leaves mostly deeply lobed or compound"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > キンポウゲ目 > キンポウゲ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Ranunculales > Ranunculaceae",
    divergenceEra: "白亜紀後期（約9000万〜8000万年前）",
    enDivergenceEra: "Late Cretaceous (approx. 90–80 million years ago)",
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
    enEvolutionEvents: ["Diversification of floral architecture (petal modification, nectary formation, etc.)", "Establishment of herbivore defense through potent alkaloids", "Rapid diversification of floral spurs (nectar-bearing projections) in Aquilegia"],
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
    enOverview: "A family of woody plants distributed from East to Southeast Asia, including Meliosma and Sabia, with about 4 genera and 160 species. Placed in Proteales (a basal eudicot group) under APG IV, making it phylogenetically unique.",
    characteristics: [
      "木本（高木〜つる性低木）",
      "葉は単葉または奇数羽状複葉、互生",
      "花は小さく両性、5数性",
      "雄しべ5本のうち外側2本のみ完全、残り3本は仮雄しべ（退化）",
      "核果または翼果",
    ],
    enCharacteristics: ["Woody plants (trees to climbing shrubs)", "Leaves simple or odd-pinnately compound, alternate", "Flowers small, bisexual, pentamerous", "Of 5 stamens, only 2 outer ones fertile; remaining 3 are staminodes (reduced)", "Drupes or samaras"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > プロテア目 > アワブキ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Proteales > Sabiaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "アワブキ属（Meliosma）",
      "サビア属（Sabia）",
    ],
    evolutionEvents: [
      "雄しべの退化（仮雄しべ化）による特殊化",
      "プロテア目内での東アジア固有の多様化",
    ],
    enEvolutionEvents: ["Specialization through stamen reduction (formation of staminodes)", "Diversification endemic to East Asia within the Proteales"],
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
    enOverview: "A large family of about 80 genera and 1,600 species centered in the Southern Hemisphere (Australia, South Africa, South America). Helicia occurs naturally in southern Kyushu and Okinawa in Japan. An ancient Gondwanan family, with Protea and Banksia well known as ornamentals.",
    characteristics: [
      "花被片は4枚で、しばしば合着して管状になる",
      "雄しべは花被片に対生して4本",
      "痩せた土壌（リン欠乏環境）への適応が顕著",
      "プロテオイド根（クラスター根）で貧栄養土壌から養分を吸収",
      "木本が主体",
    ],
    enCharacteristics: ["Tepals 4, often fused into a tube", "Stamens 4, opposite the tepals", "Prominent adaptation to nutrient-poor soils (phosphorus-deficient environments)", "Proteoid roots (cluster roots) absorb nutrients from impoverished soils", "Predominantly woody"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > プロテア目 > ヤマモガシ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Proteales > Proteaceae",
    divergenceEra: "白亜紀前期〜中期（約1億1500万〜1億年前）",
    enDivergenceEra: "Early to Middle Cretaceous (approx. 115–100 million years ago)",
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
    enEvolutionEvents: ["Establishment of disjunct Southern Hemisphere distributions through the breakup of Gondwana", "Adaptive evolution of proteoid roots for nutrient acquisition in impoverished soils"],
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
    enOverview: "A small family comprising just two species: Trochodendron aralioides and Tetracentron sinense. Distributed in East Asia as evergreen or deciduous trees. Uniquely primitive among angiosperms in lacking vessels, transporting water through tracheids only.",
    characteristics: [
      "道管（導管）を欠き、仮道管で水分輸送（被子植物では例外的）",
      "花は両性または雑性、花弁を欠く",
      "常緑または落葉の高木",
      "葉は単葉、枝先に輪生状に集まる",
      "果実は多数の心皮が集まった集合果",
    ],
    enCharacteristics: ["Lacking vessels, transporting water via tracheids (exceptional among angiosperms)", "Flowers bisexual or polygamous, apetalous", "Evergreen or deciduous trees", "Leaves simple, clustered in pseudo-whorls at branch tips", "Fruits are aggregate fruits of numerous carpels"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > ヤマグルマ目 > ヤマグルマ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Trochodendrales > Trochodendraceae",
    divergenceEra: "白亜紀前期（約1億2000万年前）",
    enDivergenceEra: "Early Cretaceous (approx. 120 million years ago)",
    representativeGenera: [
      "ヤマグルマ属（Trochodendron）",
      "テトラセントロン属（Tetracentron）",
    ],
    evolutionEvents: [
      "被子植物で道管を欠く原始的木部の保持",
      "東アジアへの分布限定（ゴンドワナ起源から北半球への移動）",
    ],
    enEvolutionEvents: ["Retention of primitive vesselless wood among angiosperms", "Restriction of distribution to East Asia (migration from Gondwanan origins to the Northern Hemisphere)"],
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
    enOverview: "A small family including Buxus and Pachysandra, with about 6 genera and 120 species in temperate to tropical regions. Placed in Buxales (a basal eudicot group) under APG IV, outside the core eudicots. Boxwood timber is prized for its dense grain in fine craftsmanship.",
    characteristics: [
      "常緑性の低木〜高木またはつる植物",
      "葉は革質で対生または互生",
      "花は単性、花弁を欠く",
      "雌雄同株が多い",
      "蒴果または核果",
    ],
    enCharacteristics: ["Evergreen shrubs to trees or climbers", "Leaves coriaceous, opposite or alternate", "Flowers unisexual, apetalous", "Mostly monoecious", "Capsules or drupes"],
    phylogeneticPosition: "被子植物 > 真正双子葉類基部 > ツゲ目 > ツゲ科",
    enPhylogeneticPosition: "Angiosperms > Basal eudicots > Buxales > Buxaceae",
    divergenceEra: "白亜紀中期（約1億年前）",
    enDivergenceEra: "Middle Cretaceous (approx. 100 million years ago)",
    representativeGenera: [
      "ツゲ属（Buxus）",
      "フッキソウ属（Pachysandra）",
      "サルコッカ属（Sarcococca）",
    ],
    evolutionEvents: [
      "コア真正双子葉類と分岐する真正双子葉類基部での早期分岐",
      "革質葉による乾燥・日陰への適応",
    ],
    enEvolutionEvents: ["Early divergence at the base of eudicots, branching off before the core eudicots", "Adaptation to drought and shade through coriaceous leaves"],
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
    enOverview: "A monotypic family of about 40 species in the genus Gunnera, distributed in temperate to tropical highland regions of the Southern Hemisphere. Ranges from giant herbs with leaves exceeding 2 m in diameter to small forms. Notable as the only angiosperm harboring endosymbiotic cyanobacteria (Nostoc) in stems for nitrogen fixation.",
    characteristics: [
      "葉は巨大になる種がある（直径2m超）",
      "茎・葉柄にシアノバクテリアが共生し窒素固定",
      "花は非常に小さく、穂状花序に多数つく",
      "根茎性の多年草が多い",
      "果実は小さな核果",
    ],
    enCharacteristics: ["Some species have gigantic leaves (over 2 m in diameter)", "Cyanobacteria symbiotic in stems and petioles for nitrogen fixation", "Flowers very small, numerous in spike-like inflorescences", "Mostly rhizomatous perennials", "Fruits are small drupes"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > グンネラ目 > グンネラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Gunnerales > Gunneraceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 80 million years ago)",
    representativeGenera: [
      "グンネラ属（Gunnera）",
    ],
    evolutionEvents: [
      "シアノバクテリアとの共生による窒素固定（被子植物では唯一の例）",
      "葉の巨大化と矮小化の両方向への多様化",
    ],
    enEvolutionEvents: ["Nitrogen fixation through cyanobacterial symbiosis (unique among angiosperms)", "Bidirectional diversification toward both leaf gigantism and dwarfism"],
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
    enOverview: "A family of about 10 genera and 500 species distributed in the tropics and subtropics. No native species in Japan, though some are cultivated as ornamentals. Its phylogenetic position within the core eudicots has been long debated.",
    characteristics: [
      "花弁は5枚、黄色または白色が多い",
      "雄しべは多数で束状になることがある",
      "葉は大型で主脈と側脈が平行に並ぶ",
      "萼片は宿存し果実を包む",
      "木本（高木〜低木）またはつる植物",
    ],
    enCharacteristics: ["Petals 5, mostly yellow or white", "Stamens numerous, sometimes fasciculate", "Leaves large with parallel primary and secondary veins", "Sepals persistent, enclosing the fruit", "Woody plants (trees to shrubs) or climbers"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビワモドキ目 > ビワモドキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Dilleniales > Dilleniaceae",
    divergenceEra: "白亜紀後期（約8500万年前）",
    enDivergenceEra: "Late Cretaceous (approx. 85 million years ago)",
    representativeGenera: [
      "ビワモドキ属（Dillenia）",
      "ヒベルティア属（Hibbertia）",
    ],
    evolutionEvents: [
      "コア真正双子葉類の基部グループとしての早期分岐",
      "熱帯アジア・オーストラリアへの分布拡大",
    ],
    enEvolutionEvents: ["Early divergence as a basal group within the core eudicots", "Range expansion into tropical Asia and Australia"],
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
    enOverview: "A monotypic family of about 30 species in the genus Paeonia, distributed in temperate Eurasia and northwestern North America. In Japan, Paeonia japonica, P. obovata, and P. lactiflora occur. Formerly included in Ranunculaceae but now treated as a separate family.",
    characteristics: [
      "花弁は5〜多数枚、大型で美しい",
      "雄しべは多数",
      "心皮は2〜5個で、肉質の花盤に包まれる",
      "種子は大型で仮種皮をもつ",
      "多年草または落葉低木",
    ],
    enCharacteristics: ["Petals 5 to many, large and showy", "Stamens numerous", "Carpels 2–5, enclosed by a fleshy floral disc", "Seeds large, with an aril", "Perennial herbs or deciduous shrubs"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > ボタン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Paeoniaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 70 million years ago)",
    representativeGenera: [
      "ボタン属（Paeonia）",
    ],
    evolutionEvents: [
      "キンポウゲ科から独立した単型科としての系統的孤立",
      "花盤（肉質の蜜腺組織）の発達",
    ],
    enEvolutionEvents: ["Phylogenetic isolation as a monotypic family separated from Ranunculaceae", "Development of a fleshy floral disc (nectariferous tissue)"],
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
    enOverview: "A family of about 30 genera and 100 species including Hamamelis, Corylopsis, and Distylium. Woody plants distributed in temperate to subtropical Northern Hemisphere. Hamamelis, flowering in early spring with distinctive ribbon-like yellow petals before leaf emergence, is a representative Japanese species.",
    characteristics: [
      "花弁は細長い線形（ひも状）が多い",
      "葉は互生で非対称になることがある",
      "木本（高木〜低木）",
      "果実は木質化した蒴果で、熟すと弾けて種子を飛ばす",
      "星状毛や盾状毛を持つことが多い",
    ],
    enCharacteristics: ["Petals mostly narrow and linear (ribbon-like)", "Leaves alternate, sometimes asymmetric", "Woody plants (trees to shrubs)", "Fruits are woody capsules that dehisce explosively to eject seeds", "Often bearing stellate or peltate trichomes"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > マンサク科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Hamamelidaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 70 million years ago)",
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
    enEvolutionEvents: ["Evolution of extreme phenological adaptation with early spring flowering", "Development of ballistic seed dispersal through woody capsules"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マンサク科" },
    ],
    japaneseSpeciesCount: 48,
    review: { status: "ai_generated" },
  },

  // ── フウ科 ──────────────────────────────────────────
  {
    id: "altingiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Liquidambar_styraciflua_JPG1Fu.jpg",
    jaName: "フウ科",
    enName: "Sweetgum family",
    scientificName: "Altingiaceae",
    order: "ユキノシタ目",
    overview:
      "落葉高木からなる小さな科で、フウ属（Liquidambar）を中心に約15種が知られる。アジア・北米・地中海東部に隔離分布する。掌状に裂ける葉と、とげ状の突起をもつ球形の集合果が特徴。日本では中国原産のフウ、北米原産のモミジバフウが街路樹・公園樹として広く植栽される。かつてはマンサク科に含まれていたが、APG II（2003）以降に独立科として分離された。",
    enOverview: "A small family of deciduous trees, with about 15 species centered on the genus Liquidambar. Disjunctly distributed across Asia, North America, and the eastern Mediterranean. Characterized by palmately lobed leaves and spiky spherical compound fruits. In Japan, the Chinese sweetgum (Liquidambar formosana) and American sweetgum (L. styraciflua) are widely planted as street and park trees. Formerly included within Hamamelidaceae, it was separated as an independent family from APG II (2003) onward.",
    characteristics: [
      "落葉高木で、樹皮はしばしばコルク質で割れる",
      "葉は互生し、掌状に3〜7裂、長い葉柄をもつ",
      "雌雄同株で、雌花序・雄花序ともに球状",
      "果実は木質の蒴果が集まった球形の集合果で、表面にとげ状突起",
      "種子は小型で翼をもち、風散布",
    ],
    enCharacteristics: [
      "Deciduous trees, often with corky, fissured bark",
      "Leaves alternate, palmately 3- to 7-lobed, with long petioles",
      "Monoecious, with both female and male inflorescences spherical",
      "Fruit a spiky spherical aggregate of woody capsules",
      "Seeds small and winged, dispersed by wind",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > フウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Altingiaceae",
    divergenceEra: "白亜紀後期（約9000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous (approx. 90–70 million years ago)",
    representativeGenera: [
      "フウ属（Liquidambar）",
    ],
    evolutionEvents: [
      "マンサク科からの分離独立（APG II, 2003）",
      "アジア・北米・地中海東部への隔離分布の成立",
    ],
    enEvolutionEvents: [
      "Separation from Hamamelidaceae (APG II, 2003)",
      "Establishment of disjunct distribution across Asia, North America, and the eastern Mediterranean",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フウ科" },
    ],
    japaneseSpeciesCount: 0,
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
    enOverview: "A monotypic family consisting of 1 genus and 2 species (Cercidiphyllum japonicum and C. magnificum). Deciduous trees distributed in Japan and China. Famous for the sweet fragrance (maltol) emitted by autumn fallen leaves. An ancient lineage formerly widespread across the Northern Hemisphere during the Cretaceous.",
    characteristics: [
      "葉はハート形（心形）で対生",
      "落葉時に焦がした砂糖のような甘い香り（マルトール）",
      "花は単性で花弁を欠く（風媒花）",
      "樹皮は縦に裂けて繊維状",
      "落葉高木で大木になる",
    ],
    enCharacteristics: ["Leaves heart-shaped (cordate), opposite", "Fallen leaves emit a sweet caramel-like fragrance (maltol)", "Flowers unisexual, apetalous (wind-pollinated)", "Bark fissured longitudinally into fibrous strips", "Large deciduous trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > カツラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Cercidiphyllaceae",
    divergenceEra: "白亜紀前期〜中期（約1億年前）",
    enDivergenceEra: "Early to Middle Cretaceous (approx. 100 million years ago)",
    representativeGenera: [
      "カツラ属（Cercidiphyllum）",
    ],
    evolutionEvents: [
      "第三紀の北半球広域分布から東アジア固有への後退",
      "花弁を失った風媒花への進化",
    ],
    enEvolutionEvents: ["Retreat from a widespread Northern Hemisphere distribution in the Tertiary to an East Asian endemic", "Evolution toward wind pollination with loss of petals"],
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
    enOverview: "A monotypic family of about 30 species in the genus Daphniphyllum, distributed from East to Southeast Asia as evergreen trees or shrubs. In Japan, Daphniphyllum macropodum is well known for its use in New Year decorations. Contains unique Daphniphyllum alkaloids and occupies a phylogenetically isolated position.",
    characteristics: [
      "常緑性の高木または低木",
      "葉は大型で革質、互生",
      "花は小さく花弁を欠く、単性花",
      "雌雄異株",
      "核果（青黒色に熟す）",
    ],
    enCharacteristics: ["Evergreen trees or shrubs", "Leaves large, coriaceous, alternate", "Flowers small, apetalous, unisexual", "Dioecious", "Drupes (ripening to dark blue-black)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > ユズリハ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Daphniphyllaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "ユズリハ属（Daphniphyllum）",
    ],
    evolutionEvents: [
      "ユズリハアルカロイドという独自の防御化合物の進化",
      "東アジア〜東南アジアへの分布特化",
    ],
    enEvolutionEvents: ["Evolution of unique Daphniphyllum alkaloids as defensive compounds", "Distributional specialization to East and Southeast Asia"],
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
    enOverview: "A family consisting of a single genus Ribes with about 150 species (under APG IV). Widely distributed in temperate to subarctic regions of the Northern Hemisphere, with Ribes species native to Japan. Many species produce edible fruits used for jams and fruit wines.",
    characteristics: [
      "低木で、枝に棘をもつ種がある",
      "葉は手状に裂ける",
      "花は小さく5数性、筒状の萼筒が発達",
      "液果（ベリー）を実らせ食用になる",
      "雌雄同株",
    ],
    enCharacteristics: ["Shrubs, some species bearing thorns on branches", "Leaves palmately lobed", "Flowers small, pentamerous, with a well-developed tubular hypanthium", "Produce edible berries", "Monoecious"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > スグリ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Grossulariaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (approx. 50 million years ago)",
    representativeGenera: [
      "スグリ属（Ribes）",
    ],
    evolutionEvents: [
      "ユキノシタ科から独立した単型属科としての分化",
      "北半球寒冷環境への適応と多様化",
    ],
    enEvolutionEvents: ["Differentiation as a monogeneric family separated from Saxifragaceae", "Adaptation and diversification in cold Northern Hemisphere environments"],
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
    enOverview: "A family of about 33 genera and 640 species including Saxifraga, Astilbe, Chrysosplenium, and Parnassia. Widely distributed in temperate and montane regions of the Northern Hemisphere. Many grow on rocky substrates and along streams, with the genus name meaning 'stone-breaker' reflecting their lithophytic habit.",
    characteristics: [
      "草本が主体（まれに低木）",
      "花は5数性で放射相称が基本",
      "萼筒が発達し、子房は下位〜半下位になることが多い",
      "葉は単葉で多くが根生葉または互生",
      "湿った岩場・渓流沿いを好む種が多い",
    ],
    enCharacteristics: ["Mostly herbaceous (rarely shrubby)", "Flowers basically pentamerous and actinomorphic", "Hypanthium well developed; ovary often inferior to semi-inferior", "Leaves simple, mostly basal or alternate", "Many species favor moist rocky habitats and streamside environments"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > ユキノシタ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Saxifragaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 70 million years ago)",
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
    enEvolutionEvents: ["Adaptation to rocky and alpine environments (leaf and root system modifications)", "Major familial reorganization within Saxifragales (APG revisions)"],
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
    enOverview: "A large family of about 34 genera and 1,400 species including Hylotelephium, Sedum, Kalanchoe, and Echeveria. Known as succulents, many species perform CAM photosynthesis adapted to arid conditions. Widely distributed on rocky and dry habitats from the tropics to temperate regions.",
    characteristics: [
      "多肉質の葉・茎に水分を貯蔵",
      "CAM光合成（夜間にCO₂を取り込み昼間固定）による乾燥適応",
      "花は4〜5数性でしばしば星形",
      "雄しべは花弁と同数または2倍",
      "果実は袋果（のう果）が多数集まる集合果",
    ],
    enCharacteristics: ["Succulent leaves and stems store water", "CAM photosynthesis (nocturnal CO2 uptake, daytime fixation) for drought adaptation", "Flowers 4- to 5-merous, often star-shaped", "Stamens equal in number to or twice the petals", "Fruits are aggregate follicles"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > ベンケイソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Crassulaceae",
    divergenceEra: "古第三紀（約5000万〜4000万年前）",
    enDivergenceEra: "Paleogene (approx. 50–40 million years ago)",
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
    enEvolutionEvents: ["Independent evolution of CAM photosynthesis in multiple lineages", "Adaptation to arid and rocky environments through succulence"],
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
    enOverview: "A family of about 8 genera and 145 species including Gonocarpus and Myriophyllum, comprising terrestrial to aquatic herbs. In Japan, Gonocarpus and Myriophyllum species are present. Aquatic species have finely pinnately dissected leaves adapted to reduce water resistance.",
    characteristics: [
      "草本（陸生〜水生）",
      "水生種では葉が羽状細裂して水中に適応",
      "花は小さく風媒または水媒",
      "花弁は4枚または退化して欠ける",
      "果実は堅果または核果状",
    ],
    enCharacteristics: ["Herbs (terrestrial to aquatic)", "Aquatic species have finely pinnately dissected leaves adapted to submerged life", "Flowers small, wind- or water-pollinated", "Petals 4 or reduced and absent", "Fruits are nutlets or drupe-like"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ユキノシタ目 > アリノトウグサ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Saxifragales > Haloragaceae",
    divergenceEra: "白亜紀後期〜古第三紀",
    enDivergenceEra: "Late Cretaceous to Paleogene",
    representativeGenera: [
      "フサモ属（Myriophyllum）",
      "アリノトウグサ属（Haloragis）",
    ],
    evolutionEvents: [
      "陸生から水生環境への二次的適応（葉の羽状細裂化）",
      "ゴンドワナ起源の南半球分布から北半球への拡散",
    ],
    enEvolutionEvents: ["Secondary adaptation from terrestrial to aquatic habitats (pinnate leaf dissection)", "Dispersal from a Gondwanan Southern Hemisphere distribution to the Northern Hemisphere"],
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
    enOverview: "A family of about 14 genera and 910 species including Vitis, Cayratia, Parthenocissus, and Ampelopsis. Mostly climbers using tendrils for support. Grapevine (Vitis) is one of the world's most important fruit crops, also used in winemaking. Belongs to the rosids within the core eudicots.",
    characteristics: [
      "木本性つる植物が多い",
      "巻きひげ（葉の変形）で絡みつく",
      "葉は掌状に裂けるか複葉",
      "花は小さく5数性、しばしば花弁が帽子状に落下",
      "液果（ベリー）で果皮は薄く果肉が多い",
    ],
    enCharacteristics: ["Mostly woody climbers", "Cling by tendrils (modified leaves)", "Leaves palmately lobed or compound", "Flowers small, pentamerous; petals often fall as a cap (calyptra)", "Berries with thin skin and abundant pulp"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > ブドウ目 > ブドウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Vitales > Vitaceae",
    divergenceEra: "白亜紀後期（約9000万〜8500万年前）",
    enDivergenceEra: "Late Cretaceous (approx. 90–85 million years ago)",
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
    enEvolutionEvents: ["Acquisition of the climbing habit through tendrils", "Establishment of a phylogenetic position as an early-diverging lineage within the rosids"],
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
    enOverview: "A family of about 22 genera and 285 species including Tribulus and Guaiacum, with many plants adapted to arid and saline habitats, distributed from deserts to coastal sands. In Japan, Tribulus terrestris grows on coastal sandy areas, notable for its sharply spiny fruits.",
    characteristics: [
      "乾燥地・塩性土壌への適応が顕著",
      "葉は偶数羽状複葉で多くは対生",
      "花は5数性で放射相称",
      "果実に棘・翼をもつものが多い",
      "多くは低木または草本",
    ],
    enCharacteristics: ["Prominent adaptation to arid and saline soils", "Leaves even-pinnately compound, mostly opposite", "Flowers pentamerous, actinomorphic", "Fruits often bearing spines or wings", "Mostly shrubs or herbs"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > キントラノオ目 > ハマビシ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Malpighiales > Zygophyllaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (approx. 55 million years ago)",
    representativeGenera: [
      "ハマビシ属（Tribulus）",
      "クレオソートブッシュ属（Larrea）",
      "グアヤコン属（Guaiacum）",
    ],
    evolutionEvents: [
      "乾燥地・塩性土壌への耐性機構の進化",
      "棘のある果実による動物付着散布の発達",
    ],
    enEvolutionEvents: ["Evolution of tolerance mechanisms for arid and saline soils", "Development of epizoochory through spiny fruits"],
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
    enOverview: "A small family of about 5 genera and 8 species centered on Suriana, adapted to tropical coastal sands and rocky shores as shrubs or trees. Placed in Fabales under APG IV. In Japan, Suriana grows on the coasts of the Ogasawara Islands.",
    characteristics: [
      "海岸砂地・岩礁環境への強い適応",
      "葉は革質で多肉になることがある",
      "花は5数性で放射相称",
      "果実は複数の分果からなる",
      "低木〜小高木",
    ],
    enCharacteristics: ["Strongly adapted to coastal sandy and rocky shore environments", "Leaves coriaceous, sometimes somewhat succulent", "Flowers pentamerous, actinomorphic", "Fruit composed of multiple mericarps", "Shrubs to small trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > マメ目 > スリアナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Fabales > Surianaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (approx. 50 million years ago)",
    representativeGenera: [
      "スリアナ属（Suriana）",
      "ケイサニア属（Cadellia）",
    ],
    evolutionEvents: [
      "マメ目内での系統的孤立（根粒菌共生を欠く）",
      "海岸環境への特化による分布限定",
    ],
    enEvolutionEvents: ["Phylogenetic isolation within Fabales (lacking rhizobial symbiosis)", "Restricted distribution due to specialization in coastal environments"],
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
    enOverview: "A family of about 21 genera and 1,000 species including Polygala and Securidaca, widely distributed from the tropics to temperate regions. Polygala japonica grows in grasslands in Japan. The flowers resemble legume papilionaceous flowers but are phylogenetically unrelated (convergent evolution).",
    characteristics: [
      "花はマメ科に似た蝶形（収斂進化）だが構造は異なる",
      "萼片5枚のうち内側2枚が花弁状で大きく目立つ",
      "花弁は3枚（下の1枚が竜骨弁状）",
      "草本〜低木〜高木まで形態が多様",
      "蒴果または翼果",
    ],
    enCharacteristics: ["Flowers resemble legume papilionaceous flowers (convergent evolution) but structurally different", "Two inner sepals of five are large and petaloid", "Petals 3 (the lower one keel-shaped)", "Diverse in habit from herbs to shrubs to trees", "Capsules or samaras"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > キントラノオ目 > ヒメハギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Malpighiales > Polygalaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 70 million years ago)",
    representativeGenera: [
      "ヒメハギ属（Polygala）",
      "セネガ属（Polygala）",
      "ムレムレ属（Monnina）",
    ],
    evolutionEvents: [
      "マメ科型の蝶形花への収斂進化（花粉媒介者誘引）",
      "熱帯を中心とする広域な多様化",
    ],
    enEvolutionEvents: ["Convergent evolution toward legume-like papilionaceous flowers for pollinator attraction", "Widespread diversification centered in the tropics"],
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
    enOverview: "A family of about 3 genera and 90 species including Elaeagnus and Shepherdia, distributed in temperate to subtropical regions of the Northern Hemisphere. Associates with the actinobacterium Frankia in root nodules for nitrogen fixation. Characterized by dense silvery-white to brownish lepidote scales on leaves and fruits.",
    characteristics: [
      "葉・果実に銀白色または褐色の鱗状毛が密生",
      "根に放線菌フランキアが共生し窒素固定",
      "花は筒状で4裂、花弁を欠く（萼が花弁状）",
      "果実は偽果（萼筒が肉質化して果肉を形成）",
      "低木〜高木、まれにつる性",
    ],
    enCharacteristics: ["Dense silvery-white or brownish lepidote scales on leaves and fruits", "Root nodules with the actinobacterium Frankia for nitrogen fixation", "Flowers tubular, 4-lobed, apetalous (sepals petaloid)", "Fruits are pseudocarps (the hypanthium becomes fleshy)", "Shrubs to trees, rarely climbing"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > グミ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Rosales > Elaeagnaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (approx. 55 million years ago)",
    representativeGenera: [
      "グミ属（Elaeagnus）",
      "ハリモモ属（Hippophae）",
      "バッファローベリー属（Shepherdia）",
    ],
    evolutionEvents: [
      "放線菌フランキアとの共生による窒素固定の獲得",
      "鱗状毛による乾燥・塩性環境への適応",
    ],
    enEvolutionEvents: ["Acquisition of nitrogen fixation through symbiosis with the actinobacterium Frankia", "Adaptation to arid and saline environments through lepidote scales"],
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
    enOverview: "A family of about 52 genera and 900 species including Rhamnus, Berchemia, Ziziphus, and Hovenia. Widely distributed from the tropics to temperate regions worldwide. About 10 genera are native to Japan, where the sweet fleshy peduncle of Hovenia dulcis is edible in autumn.",
    characteristics: [
      "木本（高木・低木・つる木）が主体",
      "花は小さく5数性、花弁は小さく凹み雄しべを包む",
      "棘をもつ種が多い",
      "核果・翼果・蒴果など果実の形態は多様",
      "葉は互生で3主脈が目立つことが多い",
    ],
    enCharacteristics: ["Predominantly woody (trees, shrubs, or woody climbers)", "Flowers small, pentamerous; petals small and concave, enclosing the stamens", "Many species thorny", "Fruit types diverse: drupes, samaras, or capsules", "Leaves alternate, often with 3 prominent main veins"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > クロウメモドキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Rosales > Rhamnaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (approx. 80 million years ago)",
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
    enEvolutionEvents: ["Widespread distribution from tropics to temperate regions with evolution of diverse fruit types", "Acquisition of nitrogen fixation through Frankia symbiosis in some lineages"],
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
    enOverview: "A family of about 11 genera and 170 species including Cannabis, Humulus, Celtis, and Aphananthe. Under APG IV, groups formerly separated from Ulmaceae were merged here. In Japan, the family includes deciduous trees like Celtis and Aphananthe as well as the fiber crop Cannabis.",
    characteristics: [
      "草本〜高木まで形態が多様",
      "葉は互生で鋸歯があり、基部が非対称になることが多い",
      "花は小さく単性、花弁を欠く",
      "雌雄異株または同株",
      "核果または痩果",
    ],
    enCharacteristics: ["Diverse in habit from herbs to large trees", "Leaves alternate, serrate, often with asymmetric bases", "Flowers small, unisexual, apetalous", "Dioecious or monoecious", "Drupes or achenes"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > アサ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Rosales > Cannabaceae",
    divergenceEra: "古第三紀（約5500万〜5000万年前）",
    enDivergenceEra: "Paleogene (approx. 55–50 million years ago)",
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
    enEvolutionEvents: ["Familial reorganization and merger from Ulmaceae and Moraceae relatives under APG IV", "Evolution of the tetrahydrocannabinol (THC) biosynthesis pathway in Cannabis"],
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
    enOverview: "A family of about 38 genera and 1,100 species including Morus, Ficus, Artocarpus, Broussonetia, and others, centered in the tropics and subtropics. Ficus is notable for its intimate coevolution with fig wasps, and many members exude latex.",
    characteristics: [
      "切ると乳液（ラテックス）を分泌する種が多い",
      "花は単性で小さく、しばしば肉質の花序托に埋まる（イチジクの隠頭花序）",
      "果実は偽果（花序全体が果実状になる）が多い",
      "葉は互生で鋸歯をもつ",
      "木本（高木〜低木）が主体",
    ],
    enCharacteristics: ["Many species exude latex when cut", "Flowers unisexual and small, often embedded in a fleshy receptacle (the syconium of Ficus)", "Fruits commonly pseudocarps (the entire inflorescence becoming fruit-like)", "Leaves alternate, serrate", "Predominantly woody (trees to shrubs)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > クワ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Rosales > Moraceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (approx. 80–70 million years ago)",
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
    enEvolutionEvents: ["Intimate coevolution between Ficus and fig wasps (species-specific one-to-one pollination mutualism)", "Evolution of the syconium, a specialized enclosed inflorescence bearing flowers inside a hollow receptacle"],
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
    enOverview: "A family of about 54 genera and 2,600 species including Urtica, Boehmeria, and Laportea, distributed worldwide. Many species bear stinging hairs containing formic acid. Boehmeria nivea (ramie) has been used since antiquity as a fiber crop and is a raw material for traditional Japanese textiles.",
    characteristics: [
      "刺毛（蟻酸・ヒスタミンを含む中空の毛）を持つ種が多い",
      "花は単性で非常に小さく、花弁を欠く",
      "風媒花で花粉を弾き飛ばす仕組みをもつ種がある",
      "葉は対生または互生、鋸歯あり",
      "草本または低木が主体",
    ],
    enCharacteristics: ["Many species bear stinging hairs (hollow trichomes containing formic acid and histamine)", "Flowers unisexual, very small, apetalous", "Some species have explosive pollen release mechanisms for wind pollination", "Leaves opposite or alternate, serrate", "Predominantly herbs or shrubs"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > バラ目 > イラクサ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Rosales > Urticaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (approx. 50 million years ago)",
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
    enEvolutionEvents: ["Evolution of stinging trichomes as a herbivore defense mechanism", "Evolution of explosive pollen catapulting mechanisms (adaptation to wind pollination)"],
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
    enOverview: "A monotypic family of about 43 species in the genus Nothofagus, distributed in South America (Chile, Argentina), Australia, New Zealand, New Caledonia, and New Guinea. Formerly included in Fagaceae, but molecular phylogenetics revealed it as a separate lineage that diverged early, leading to its recognition as an independent family. Not native to Japan.",
    characteristics: [
      "落葉または常緑の高木",
      "葉は小型〜中型で鋸歯があり互生",
      "花は単性、雌雄同株",
      "果実は3裂するいがに包まれたナッツ",
      "南半球の山岳〜亜寒帯林を形成する",
    ],
    enCharacteristics: ["Deciduous or evergreen trees", "Leaves small to medium, serrate, alternate", "Flowers unisexual, monoecious", "Nuts enclosed in a 3-valved cupule", "Form montane to subpolar forests in the Southern Hemisphere"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > バラ類 > ブナ目 > ナンキョクブナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Rosids > Fagales > Nothofagaceae",
    divergenceEra: "白亜紀後期（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous (approx. 80–70 million years ago)",
    representativeGenera: [
      "ナンキョクブナ属（Nothofagus）",
    ],
    evolutionEvents: [
      "ゴンドワナ大陸の分裂による南半球各大陸への隔離分布の成立",
      "ブナ科から独立した単型科としての系統的孤立の確認（分子系統学）",
    ],
    enEvolutionEvents: ["Establishment of disjunct distributions across Southern Hemisphere continents through the breakup of Gondwana", "Confirmation of phylogenetic isolation as a monotypic family separate from Fagaceae (molecular phylogenetics)"],
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
    enOverview: "An extant family of the lycopsids (class Lycopodiopsida) that flourished extensively in the Carboniferous. Sporophytes are creeping or erect, bearing small scale-like leaves (microphylls) in spiral or opposite arrangement. Sporangia form in leaf axils or in strobili, and the plants are homosporous.",
    characteristics: [
      "維管束をもつが微葉（小葉）からなる",
      "同形胞子性（胞子は1種類）",
      "胞子嚢は葉腋または頂端の胞子葉穂に集まる",
      "前葉体（配偶体）は地中性で菌根共生",
      "茎は二叉分岐する",
    ],
    enCharacteristics: ["Vascular but with microphylls (small leaves)", "Homosporous (one type of spore)", "Sporangia borne in leaf axils or terminal strobili", "Prothallus (gametophyte) subterranean with mycorrhizal association", "Stems dichotomously branching"],
    phylogeneticPosition: "維管束植物 > ヒカゲノカズラ植物門 > ヒカゲノカズラ綱 > ヒカゲノカズラ目 > ヒカゲノカズラ科",
    enPhylogeneticPosition: "Vascular plants > Lycophyta > Lycopodiopsida > Lycopodiales > Lycopodiaceae",
    divergenceEra: "デボン紀〜石炭紀（約4億年前〜）",
    enDivergenceEra: "Devonian to Carboniferous (approx. 400 million years ago onward)",
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
    enEvolutionEvents: ["Establishment of terrestrial colonization through acquisition of vascular tissue (xylem and phloem)", "Evolution into trees over 30 m tall as Lepidodendron in the Carboniferous (extant species are all herbaceous)", "Survival as small herbs after the end-Permian mass extinction"],
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
    enOverview: "Belonging to the lycopsids (Lycopodiopsida), this is the only extant lycophyte family to have acquired heterospory. About 750 species are distributed mainly in the tropics, with several species growing in Japan. Some species are desiccation-tolerant, known as 'resurrection plants.'",
    characteristics: [
      "異形胞子性（大胞子と小胞子の2種類）",
      "葉は4列に並ぶ（背腹性）",
      "茎の内部にリグリュール（小舌）をもつ",
      "大胞子嚢と小胞子嚢がストロビルス内に共存",
    ],
    enCharacteristics: ["Heterosporous (two types: megaspores and microspores)", "Leaves arranged in 4 ranks (dorsiventral)", "Stems possess a ligule (small tongue-like appendage)", "Megasporangia and microsporangia coexist within the strobilus"],
    phylogeneticPosition: "維管束植物 > ヒカゲノカズラ植物門 > ヒカゲノカズラ綱 > イワヒバ目 > イワヒバ科",
    enPhylogeneticPosition: "Vascular plants > Lycophyta > Lycopodiopsida > Selaginellales > Selaginellaceae",
    divergenceEra: "石炭紀（約3億5000万年前〜）",
    enDivergenceEra: "Carboniferous (approx. 350 million years ago onward)",
    representativeGenera: ["イワヒバ属（Selaginella）"],
    evolutionEvents: [
      "異形胞子性の獲得（大胞子・小胞子の分化）",
      "種子植物の祖先的形質に類似した大胞子の保護機構の発達",
    ],
    enEvolutionEvents: ["Acquisition of heterospory (differentiation into megaspores and microspores)", "Development of megaspore protection mechanisms resembling ancestral traits of seed plants"],
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
    enOverview: "A family of small aquatic or wetland herbs, with only the genus Isoetes comprising about 200 extant species. Outwardly resembling chives with tufted leaves, it has a characteristic corm-like stem. Closely related to the giant Carboniferous tree Sigillaria, often called a 'living fossil.'",
    characteristics: [
      "異形胞子性（大胞子と小胞子）",
      "葉の基部に胞子嚢をもつ",
      "茎は短縮した球茎状",
      "葉内に気室（ラクナ）が発達",
    ],
    enCharacteristics: ["Heterosporous (megaspores and microspores)", "Sporangia borne at the base of leaves", "Stem reduced to a corm-like structure", "Leaves with well-developed air chambers (lacunae)"],
    phylogeneticPosition: "維管束植物 > ヒカゲノカズラ植物門 > ヒカゲノカズラ綱 > ミズニラ目 > ミズニラ科",
    enPhylogeneticPosition: "Vascular plants > Lycophyta > Lycopodiopsida > Isoetales > Isoetaceae",
    divergenceEra: "三畳紀（約2億3000万年前〜）",
    enDivergenceEra: "Triassic (approx. 230 million years ago onward)",
    representativeGenera: ["ミズニラ属（Isoetes）"],
    evolutionEvents: [
      "石炭紀巨大樹木（フウインボク類）からの矮小化・草本化",
      "水生適応（気室の発達・CAM光合成の獲得）",
    ],
    enEvolutionEvents: ["Miniaturization and herbaceous reduction from giant Carboniferous trees (Sigillaria relatives)", "Aquatic adaptation (development of air chambers and acquisition of CAM photosynthesis)"],
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
    enOverview: "A distinctive group of ferns lacking true leaves (or with extremely reduced leaves), where stems perform photosynthesis. Consists of only two genera: Psilotum and Tmesipteris. Molecular phylogenetics has revealed a close relationship to Ophioglossaceae.",
    characteristics: [
      "真葉をもたない（葉は鱗片状または退化）",
      "茎は二叉分岐し、緑色で光合成を行う",
      "胞子嚢は2〜3室に合着した合生胞子嚢（シナンジウム）",
      "同形胞子性",
    ],
    enCharacteristics: ["Lacking true leaves (leaves scale-like or vestigial)", "Stems dichotomously branching, green and photosynthetic", "Sporangia fused into 2- to 3-chambered synangium", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ハナヤスリ綱 > マツバラン目 > マツバラン科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Ophioglossopsida > Psilotales > Psilotaceae",
    divergenceEra: "デボン紀（約3億8000万年前〜）",
    enDivergenceEra: "Devonian (approx. 380 million years ago onward)",
    representativeGenera: [
      "マツバラン属（Psilotum）",
      "ヒレワラビ属（Tmesipteris）",
    ],
    evolutionEvents: [
      "真葉の喪失または未獲得（葉の退化）",
      "茎による光合成への特化",
    ],
    enEvolutionEvents: ["Loss or non-acquisition of true leaves (leaf reduction)", "Specialization for photosynthesis via stems"],
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
    enOverview: "One of the most primitive lineages among ferns. Leaves have a distinctive structure where a trophophore and a sporophore differentiate from a single common stalk. Includes Ophioglossum, Botrychium, and related genera, with multiple species native to Japan.",
    characteristics: [
      "栄養葉と胞子葉が1枚の葉から分化する（共通柄）",
      "胞子嚢は壁が厚く（厚壁性）、環帯をもたない",
      "前葉体は地中性で菌根共生",
      "染色体数が非常に多い種がある（世界最多級）",
    ],
    enCharacteristics: ["Trophophore and sporophore differentiate from a single leaf (common stalk)", "Sporangia thick-walled (eusporangiate), lacking an annulus", "Prothallus subterranean with mycorrhizal association", "Some species have extremely high chromosome numbers (among the highest known)"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ハナヤスリ綱 > ハナヤスリ目 > ハナヤスリ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Ophioglossopsida > Ophioglossales > Ophioglossaceae",
    divergenceEra: "デボン紀〜石炭紀（約3億6000万年前〜）",
    enDivergenceEra: "Devonian to Carboniferous (approx. 360 million years ago onward)",
    representativeGenera: [
      "ハナヤスリ属（Ophioglossum）",
      "ナツノハナワラビ属（Botrychium）",
    ],
    evolutionEvents: [
      "厚壁性胞子嚢の維持（原始的特徴）",
      "超多倍体化（一部の種で染色体数2n=1440に達する）",
    ],
    enEvolutionEvents: ["Retention of eusporangiate sporangia (a primitive characteristic)", "Extreme polyploidization (chromosome numbers reaching 2n=1440 in some species)"],
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
    enOverview: "An ancient group of ferns that prospered in the Carboniferous, representing one of the most primitive lineages among extant euphyllophytes (megaphyll ferns). Characterized by large pinnately compound leaves and massive rhizomes. Distributed in the tropics and subtropics; in Japan, Angiopteris grows in southern Kyushu and Okinawa.",
    characteristics: [
      "大型の羽状複葉（葉柄基部に大きな耳状突起をもつ）",
      "胞子嚢は複数合着してシナンジウムを形成",
      "厚壁性胞子嚢で環帯を欠く",
      "根茎は短く塊状で、デンプンを蓄積",
    ],
    enCharacteristics: ["Large pinnately compound leaves (with large stipule-like auricles at the petiole base)", "Sporangia fused into synangia", "Eusporangiate, lacking an annulus", "Rhizome short and massive, storing starch"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > マラッチア綱 > リュウビンタイ目 > リュウビンタイ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Marattiopsida > Marattiales > Marattiaceae",
    divergenceEra: "石炭紀（約3億2000万年前〜）",
    enDivergenceEra: "Carboniferous (approx. 320 million years ago onward)",
    representativeGenera: [
      "リュウビンタイ属（Angiopteris）",
      "マラッチア属（Marattia）",
    ],
    evolutionEvents: [
      "石炭紀における大型羽状複葉の確立",
      "シナンジウム（合生胞子嚢群）の進化",
    ],
    enEvolutionEvents: ["Establishment of large pinnately compound leaves in the Carboniferous", "Evolution of synangia (fused sporangial clusters)"],
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
    enOverview: "A distinctive group of ferns with translucent membranous fronds only 1–2 cells thick. Epiphytic on trees, rocks, and damp forest surfaces in high-humidity environments, intolerant of desiccation. About 600 species distributed in humid habitats from the tropics to temperate regions, with Hymenophyllum species native to Japan.",
    characteristics: [
      "葉身が細胞1〜2層の膜状（半透明）",
      "乾燥に非常に弱く、高湿度環境に特化",
      "胞子嚢群は葉縁に筒状または2弁の包膜に包まれる",
      "根茎は細長く匍匐し、多くは着生性",
    ],
    enCharacteristics: ["Frond lamina membranous, only 1–2 cells thick (translucent)", "Extremely desiccation-sensitive, specialized for high-humidity environments", "Sori marginal, enclosed in tubular or bivalved involucres", "Rhizome slender, creeping; mostly epiphytic"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > コケシノブ目 > コケシノブ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Hymenophyllales > Hymenophyllaceae",
    divergenceEra: "ジュラ紀（約1億8000万年前〜）",
    enDivergenceEra: "Jurassic (approx. 180 million years ago onward)",
    representativeGenera: [
      "コケシノブ属（Hymenophyllum）",
      "ホウビカンジュ属（Trichomanes）",
    ],
    evolutionEvents: [
      "葉肉の極限的薄板化（クロロフィル密度最大化への適応）",
      "配偶体（前葉体）が独立して永続する特殊な繁殖戦略",
    ],
    enEvolutionEvents: ["Extreme laminar thinning of the leaf blade (adaptation to maximize chlorophyll density)", "Specialized reproductive strategy with independently persistent gametophytes"],
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
    enOverview: "An ancient fern lineage characterized by pseudodichotomous branching, in which the apex undergoes temporary dormancy and repeatedly forks. About 125 species distributed from the tropics to temperate regions; in Japan, Dicranopteris forms colonies on sunny slopes in warm areas.",
    characteristics: [
      "仮二叉分岐による葉軸の無限伸長",
      "胞子嚢群は裸出（包膜なし）で葉裏に列をなす",
      "先駆植物として荒地・崩壊地に大群落を形成",
      "同形胞子性",
    ],
    enCharacteristics: ["Indeterminate frond growth through pseudodichotomous branching", "Sori exindusiate (without indusia), arranged in rows on the abaxial surface", "Pioneer plants forming large colonies on disturbed and landslide sites", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > コシダ目 > コシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Gleicheniales > Gleicheniaceae",
    divergenceEra: "三畳紀〜ジュラ紀（約2億年前〜）",
    enDivergenceEra: "Triassic to Jurassic (approx. 200 million years ago onward)",
    representativeGenera: [
      "コシダ属（Dicranopteris）",
      "ウラジロ属（Gleichenia）",
    ],
    evolutionEvents: [
      "仮二叉分岐による葉の無限成長戦略の確立",
      "先駆植物としての光競争戦略（高密度群落形成）",
    ],
    enEvolutionEvents: ["Establishment of an indeterminate growth strategy through pseudodichotomous branching", "Light competition strategy as pioneer plants (formation of dense colonies)"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コシダ科" },
    ],
    japaneseSpeciesCount: 31,
    review: { status: "ai_generated" },
  },

  // ── キジノオシダ科（Cheiropleuriaceae） ──────────────────────
  {
    id: "cheiropleuriaceae",
    jaName: "スジヒトツバ科",
    enName: "Cheiropleuria family",
    scientificName: "Cheiropleuriaceae",
    order: "ウラボシ目",
    overview:
      "東アジアの熱帯・亜熱帯に分布するCheiropleuriaの1属のみからなる小さな科。単葉で不規則二叉脈をもつ大型の葉と、胞子嚢が葉裏全面に散在する独特の形態が特徴。日本では沖縄・小笠原に自生する。",
    enOverview: "A small family consisting of the single genus Cheiropleuria, distributed in tropical and subtropical East Asia. Characterized by large simple leaves with irregular dichotomous venation and sporangia scattered uniformly across the entire abaxial surface. Native to Okinawa and Ogasawara in Japan.",
    characteristics: [
      "単葉で二叉脈",
      "胞子嚢が葉裏全面に均一に散在（ソーラスを形成しない）",
      "包膜なし",
      "着生または岩上生の常緑多年草",
    ],
    enCharacteristics: ["Simple leaves with dichotomous venation", "Sporangia scattered uniformly across the entire abaxial surface (not forming discrete sori)", "Exindusiate (without indusia)", "Evergreen perennials, epiphytic or epilithic"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > スジヒトツバ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Cheiropleuriaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (approx. 100 million years ago onward)",
    representativeGenera: ["キジノオシダ属（Cheiropleuria）"],
    evolutionEvents: [
      "ウラボシ目の初期分岐系統としての保存的葉脈構造の維持",
      "胞子嚢の葉裏全面散在という原始的胞子嚢配置の保持",
    ],
    enEvolutionEvents: ["Retention of conserved venation patterns as an early-diverging lineage within Polypodiales", "Preservation of a primitive sporangial arrangement with sporangia scattered across the entire leaf undersurface"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スジヒトツバ科" },
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
    enOverview: "A family centered on Dipteris, characterized by a distinctive frond that bifurcates into a fan-shaped expansion. Native from Southeast Asia to warm temperate Japan, representing an ancient lineage preserving Jurassic-era venation patterns.",
    characteristics: [
      "葉身が二裂して扇状または翼状に広がる",
      "網状脈（二叉脈が網を形成）",
      "胞子嚢群は裸出（包膜なし）で散在",
      "同形胞子性",
    ],
    enCharacteristics: ["Frond lamina bifurcating into a fan-shaped or wing-like expansion", "Reticulate venation (dichotomous veins forming a network)", "Sori exindusiate, scattered", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > コシダ目 > ウラジロ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Gleicheniales > Dipteridaceae",
    divergenceEra: "三畳紀〜ジュラ紀（約2億年前〜）",
    enDivergenceEra: "Triassic to Jurassic (approx. 200 million years ago onward)",
    representativeGenera: ["ウラジロ属（Dipteris）"],
    evolutionEvents: [
      "葉身の二裂・扇状展開による受光面積最大化",
      "網状脈の発達によるジュラ紀的葉脈構造の保存",
    ],
    enEvolutionEvents: ["Maximization of light-capturing surface area through bifurcation and fan-shaped expansion of the lamina", "Preservation of Jurassic-era venation through the development of reticulate veins"],
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
    enOverview: "A family of tree ferns distributed mainly in temperate to tropical regions of the Southern Hemisphere. Large pinnately compound fronds are borne in a crown atop a trunk-like stem. Not native to Japan but occasionally introduced for horticulture.",
    characteristics: [
      "木性（茎が直立し樹幹状）",
      "大型の2〜3回羽状複葉",
      "胞子嚢群は葉縁の小脈先端に位置し、2弁の包膜に包まれる",
      "同形胞子性",
    ],
    enCharacteristics: ["Arborescent (stems erect and trunk-like)", "Large 2- to 3-pinnately compound fronds", "Sori positioned at veinlet tips along the margin, enclosed by bivalved indusia", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ヒメシダ目 > ジクソニア科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Cyatheales > Dicksoniaceae",
    divergenceEra: "ジュラ紀（約1億8000万年前〜）",
    enDivergenceEra: "Jurassic (approx. 180 million years ago onward)",
    representativeGenera: [
      "ジクソニア属（Dicksonia）",
      "シボトゥム属（Cibotium）",
    ],
    evolutionEvents: [
      "木性化（茎の肥大・直立化）による高さ競争への適応",
      "ヘゴ科と独立した収斂的な木性シダの進化",
    ],
    enEvolutionEvents: ["Adaptation for height competition through arborescence (stem thickening and erect growth)", "Convergent evolution of tree fern habit independently from Cyatheaceae"],
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
    enOverview: "The largest family of tree ferns, widely distributed in tropical to subtropical regions. Approximately 600 species are known, centered on the genus Cyathea. In Japan, species such as Cyathea spinulosa grow natively in Amami-Oshima, Okinawa, and the Ogasawara Islands, serving as iconic plants of subtropical forests.",
    characteristics: [
      "木性（茎が直立し高さ数m〜十数mに達することも）",
      "大型の2〜3回羽状複葉",
      "胞子嚢群は杯状（盃形）の包膜に包まれる",
      "同形胞子性",
    ],
    enCharacteristics: ["Arborescent (trunk erect, reaching several to over ten meters in height)", "Large, 2- to 3-pinnate compound fronds", "Sori enclosed by cup-shaped (cyathiform) indusia", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ヘゴ目 > ヘゴ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Cyatheales > Cyatheaceae",
    divergenceEra: "ジュラ紀〜白亜紀（約1億5000万年前〜）",
    enDivergenceEra: "Jurassic to Cretaceous (ca. 150 million years ago–)",
    representativeGenera: [
      "ヘゴ属（Cyathea）",
      "アルソフィラ属（Alsophila）",
    ],
    evolutionEvents: [
      "木性化による高木層への進出（収斂進化）",
      "杯状包膜（カップ型インジウム）の進化",
    ],
    enEvolutionEvents: ["Arborescence enabling access to the canopy layer (convergent evolution)", "Evolution of cup-shaped indusia (cyathiform indusium)"],
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
    enOverview: "Aquatic or wetland heterosporous ferns. Leaves consist of four leaflets arranged in a clover-like pattern (Marsilea). Sporangia are enclosed in specialized hard, bean-shaped sporocarps that withstand desiccation. In Japan, Marsilea quadrifolia grows along rice paddies and pond margins but is currently endangered.",
    characteristics: [
      "異形胞子性（大胞子と小胞子）",
      "胞子嚢が胞子果（硬い莢状構造）に包まれる",
      "水生または湿地性",
      "葉は4小葉（クローバー状）または1小葉",
    ],
    enCharacteristics: ["Heterosporous (megaspores and microspores)", "Sporangia enclosed in sporocarps (hard, pod-like structures)", "Aquatic or semi-aquatic", "Leaves with 4 leaflets (clover-like) or 1 leaflet"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > サンショウモ目 > デンジソウ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Salviniales > Marsileaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (ca. 100 million years ago–)",
    representativeGenera: [
      "デンジソウ属（Marsilea）",
      "タチデンジソウ属（Pilularia）",
    ],
    evolutionEvents: [
      "水生環境への完全適応",
      "胞子果（硬い莢）の進化による乾燥耐性胞子保護機構",
    ],
    enEvolutionEvents: ["Complete adaptation to aquatic environments", "Evolution of sporocarps (hard pods) as a desiccation-resistant spore protection mechanism"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/デンジソウ科" },
    ],
    japaneseSpeciesCount: 3,
    review: { status: "ai_generated" },
  },

  // ── キジノオシダ科（Plagiogyriaceae） ────────────────────────
  {
    id: "plagiogyriaceae",
    jaName: "キジノオシダ科",
    enName: "Plagiogyria family",
    scientificName: "Plagiogyriaceae",
    order: "ゼンマイ目",
    overview:
      "東アジア〜アメリカの熱帯山地に分布するPlagiogyria属のみからなる単型科。栄養葉と胞子葉が明瞭に2形に分かれ（二形葉性）、胞子葉は細長く葉縁が巻き込んで胞子嚢群を覆う偽包膜を形成する。日本ではキジノオシダが山地の林縁に自生する。",
    enOverview: "A monotypic family consisting solely of the genus Plagiogyria, distributed in tropical montane regions from East Asia to the Americas. Fronds are distinctly dimorphic (sterile and fertile), with fertile fronds being narrow and their margins revolute, forming a false indusium covering the sori. In Japan, Plagiogyria japonica grows along montane forest edges.",
    characteristics: [
      "二形葉性（栄養葉と胞子葉が明確に異なる）",
      "胞子葉の葉縁が巻き込んで偽包膜を形成",
      "根茎は太く直立または斜上",
      "同形胞子性",
    ],
    enCharacteristics: ["Dimorphic fronds (sterile and fertile fronds distinctly different)", "Fertile frond margins revolute, forming a false indusium", "Rhizome thick, erect or ascending", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ゼンマイ目 > キジノオシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Osmundales > Plagiogyriaceae",
    divergenceEra: "白亜紀（約9000万年前〜）",
    enDivergenceEra: "Cretaceous (ca. 90 million years ago–)",
    representativeGenera: ["キジノオシダ属（Plagiogyria）"],
    evolutionEvents: [
      "二形葉性（栄養葉と胞子葉の機能分化）の独立した進化",
      "偽包膜（葉縁の巻き込みによる胞子保護）の発達",
    ],
    enEvolutionEvents: ["Independent evolution of frond dimorphism (functional differentiation between sterile and fertile fronds)", "Development of false indusium (spore protection through revolute leaf margins)"],
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
    enOverview: "Climbing or erect ferns with a distinctive morphology in which sporangia are arranged in a single row along the frond margins. In Japan, Lygodium japonicum is widely distributed from temperate to warm-temperate zones, twining around other plants. A prominent single longitudinal annulus on the sporangium is a primitive feature.",
    characteristics: [
      "胞子嚢に縦位の環帯が1本（完全環帯）",
      "胞子嚢は葉縁の小葉に並ぶ",
      "ツル性（カニクサ属）または直立性",
      "同形胞子性",
    ],
    enCharacteristics: ["Sporangia with a single longitudinal annulus (complete annulus)", "Sporangia arranged on marginal pinnules", "Climbing (Lygodium) or erect", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > カニクサ目 > カニクサ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Schizaeales > Schizaeaceae",
    divergenceEra: "ジュラ紀〜白亜紀（約1億5000万年前〜）",
    enDivergenceEra: "Jurassic to Cretaceous (ca. 150 million years ago–)",
    representativeGenera: [
      "カニクサ属（Lygodium）",
      "アネミア属（Anemia）",
    ],
    evolutionEvents: [
      "完全環帯型胞子嚢の確立（原始的特徴の維持）",
      "ツル性による高所への進出（カニクサ属に限る）",
    ],
    enEvolutionEvents: ["Establishment of sporangia with a complete annulus (retention of a primitive trait)", "Climbing habit enabling access to elevated positions (limited to Lygodium)"],
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
    enOverview: "A family centered on the genus Adiantum (maidenhair ferns), distinguished by fan-shaped pinnules and revolute leaf margins forming false indusia. The glossy, dark-colored stipes are also characteristic.",
    characteristics: [
      "扇形の小葉（末羽片）",
      "葉縁が巻き込んで偽包膜を形成（真の包膜なし）",
      "葉柄は黒色〜暗褐色で光沢がある",
      "脈は遊離の二叉脈",
    ],
    enCharacteristics: ["Fan-shaped pinnules (ultimate segments)", "Revolute leaf margins forming false indusia (true indusia absent)", "Stipes black to dark brown with a glossy sheen", "Veins free and dichotomously forking"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ホウライシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Adiantaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (ca. 100 million years ago–)",
    representativeGenera: ["ホウライシダ属（Adiantum）"],
    evolutionEvents: [
      "偽包膜（葉縁の巻き込み）による胞子保護機構の確立",
      "石灰岩・湿岩壁への特殊適応の発達",
    ],
    enEvolutionEvents: ["Establishment of spore protection through false indusia (revolute leaf margins)", "Development of specialized adaptations to limestone and wet rock faces"],
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
    enOverview: "Ferns characterized by elongated, strap-shaped simple fronds and sori arranged in grooves near the frond margins. Epiphytic on tree trunks and rocks in tropical to subtropical regions. In Japan, Vittaria species occur in the Nansei Islands and southern Kyushu.",
    characteristics: [
      "単葉でテープ状〜線形（細長い）",
      "胞子嚢群は葉縁に沿った溝（コミッサー）に並ぶ",
      "包膜なし",
      "着生性（樹幹・岩壁）",
    ],
    enCharacteristics: ["Simple fronds, strap-shaped to linear (elongated)", "Sori arranged in grooves (commissures) along the frond margins", "Indusia absent", "Epiphytic (on tree trunks and rock faces)"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > シシラン科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Vittariaceae",
    divergenceEra: "白亜紀〜古第三紀（約8000万年前〜）",
    enDivergenceEra: "Cretaceous to Paleogene (ca. 80 million years ago–)",
    representativeGenera: [
      "シシラン属（Vittaria）",
      "アンタロフィス属（Antrophyum）",
    ],
    evolutionEvents: [
      "単葉テープ状への葉の極端な単純化",
      "着生生活への特化と前葉体の無性繁殖による分布拡大",
    ],
    enEvolutionEvents: ["Extreme simplification of fronds into strap-shaped simple leaves", "Specialization for epiphytic life and range expansion through asexual reproduction of gametophytes"],
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
    enOverview: "A diverse family centered on the genus Pteris (brake ferns). In Japan, species such as Pteris multifida and P. cretica are commonly found along forest edges and near human settlements. Sori are arranged continuously or intermittently along the frond margins, covered by false indusia.",
    characteristics: [
      "胞子嚢群は葉縁に沿って線状に配列",
      "偽包膜（葉縁の折り返し）が胞子嚢群を覆う",
      "葉は1〜4回羽状複葉",
      "同形胞子性",
    ],
    enCharacteristics: ["Sori arranged linearly along the frond margins", "False indusia (reflexed leaf margins) covering the sori", "Fronds 1- to 4-pinnate", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > イノモトソウ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Pteridaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (ca. 100 million years ago–)",
    representativeGenera: [
      "イノモトソウ属（Pteris）",
      "ワカナシダ属（Pellaea）",
    ],
    evolutionEvents: [
      "偽包膜（葉縁折り返し）による胞子保護の確立",
      "岩場・乾燥地への適応（チェイランテス属等）",
    ],
    enEvolutionEvents: ["Establishment of spore protection through false indusia (reflexed leaf margins)", "Adaptation to rocky and arid habitats (Cheilanthes and allies)"],
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
    enOverview: "A family including bracken (Pteridium aquilinum), distributed worldwide. Bracken is one of the most widely distributed ferns on Earth, forming large colonies in open grasslands, montane areas, and logged sites.",
    characteristics: [
      "地下に長く匍匐する根茎（アレロパシー物質含有）",
      "胞子嚢群は葉縁に沿って配列（偽包膜に覆われる）",
      "大型の2〜4回羽状複葉",
      "同形胞子性",
    ],
    enCharacteristics: ["Long-creeping subterranean rhizomes (containing allelopathic compounds)", "Sori arranged along frond margins (covered by false indusia)", "Large, 2- to 4-pinnate compound fronds", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ワラビ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Dennstaedtiaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (ca. 100 million years ago–)",
    representativeGenera: [
      "ワラビ属（Pteridium）",
      "デンスタエティア属（Dennstaedtia）",
      "ヒメワラビ属（Microlepia）",
    ],
    evolutionEvents: [
      "アレロパシー（他感作用）による競合植物排除機構の発達",
      "地下根茎による撹乱地への急速な再侵入戦略",
    ],
    enEvolutionEvents: ["Development of allelopathic mechanisms to suppress competing plants", "Rapid recolonization strategy for disturbed sites via subterranean rhizomes"],
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
    enOverview: "A fern family widely distributed in tropical to subtropical regions. In Japan, the genus Lindsaea occurs in the Nansei Islands and southern Kyushu. Fronds are 1- to 2-pinnate with fan-shaped to cuneate pinnules, and sori are arranged linearly along or near the frond margins.",
    characteristics: [
      "小葉は扇形〜くさび形が多い",
      "胞子嚢群は葉縁〜葉縁近くに線状に並ぶ",
      "包膜は葉縁側に開口",
      "同形胞子性",
    ],
    enCharacteristics: ["Pinnules mostly fan-shaped to cuneate", "Sori arranged linearly along or near the frond margins", "Indusia opening toward the margin", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ホングウシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Lindsaeaceae",
    divergenceEra: "白亜紀（約9000万年前〜）",
    enDivergenceEra: "Cretaceous (ca. 90 million years ago–)",
    representativeGenera: [
      "ホングウシダ属（Lindsaea）",
      "オドントソリア属（Odontosoria）",
    ],
    evolutionEvents: [
      "葉縁型胞子嚢配置の発達",
      "熱帯林床の安定した高湿度環境への特化",
    ],
    enEvolutionEvents: ["Development of marginal sorus arrangement", "Specialization for stable, high-humidity environments on tropical forest floors"],
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
    enOverview: "A large family centered on the genus Asplenium (spleenworts), with approximately 700 species distributed worldwide. Found in a wide range of habitats including rock faces, tree trunks, and forest floors, with numerous species native to Japan. Sori are linear, covered by indusia that open on one side (linear indusia).",
    characteristics: [
      "胞子嚢群は線状（ソーラスが線形）",
      "包膜は葉脈の片側に付着し、外側に開口（線形包膜）",
      "葉は単葉〜多回羽状複葉まで多様",
      "雑種（自然交雑）が非常に多い",
    ],
    enCharacteristics: ["Sori linear", "Indusia attached on one side of the vein, opening outward (linear indusia)", "Fronds range from simple to multiply pinnate", "Natural hybridization is extremely common"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > チャセンシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Aspleniaceae",
    divergenceEra: "ジュラ紀〜白亜紀（約1億5000万年前〜）",
    enDivergenceEra: "Jurassic to Cretaceous (ca. 150 million years ago–)",
    representativeGenera: [
      "チャセンシダ属（Asplenium）",
      "カミガモシダ属（Hymenasplenium）",
    ],
    evolutionEvents: [
      "線形包膜（片側開口型）の進化と安定した放散",
      "雑種形成・倍数体化による種分化の促進",
    ],
    enEvolutionEvents: ["Evolution of linear indusia (unilaterally opening) and subsequent stable radiation", "Promotion of speciation through hybridization and polyploidization"],
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
    enOverview: "A family including the genus Athyrium (lady ferns) and others. One of the most commonly encountered fern families in Japan, with many species such as Athyrium niponicum and A. yokoscense growing on forest floors and along stream valleys. Sori are typically covered by J-shaped to horseshoe-shaped indusia.",
    characteristics: [
      "胞子嚢群はJ字形・馬蹄形・線形など多様な包膜に覆われる",
      "葉は1〜3回羽状複葉",
      "根茎は匍匐または直立",
      "同形胞子性",
    ],
    enCharacteristics: ["Sori covered by indusia of diverse shapes: J-shaped, horseshoe-shaped, or linear", "Fronds 1- to 3-pinnate", "Rhizomes creeping or erect", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > メシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Woodsiaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (ca. 100 million years ago–)",
    representativeGenera: [
      "メシダ属（Athyrium）",
      "ミヤマシケシダ属（Deparia）",
      "ウッドシア属（Woodsia）",
    ],
    evolutionEvents: [
      "多様な包膜形態（J字形・馬蹄形・腎形）の並行進化",
      "温帯山地林床への高度適応",
    ],
    enEvolutionEvents: ["Parallel evolution of diverse indusium morphologies (J-shaped, horseshoe-shaped, reniform)", "Advanced adaptation to temperate montane forest floors"],
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
    enOverview: "A large family including many genera such as Thelypteris, Stegnogramma, and Onoclea. Widely distributed in wetlands, waterside habitats, and montane forest floors, with many common species in Japan. A distinctive feature is the anastomosis of opposing veinlet tips.",
    characteristics: [
      "対生する小脈の先端が合着（コネクティング脈）",
      "胞子嚢群は丸形〜腎形の包膜に覆われる（または裸出）",
      "葉は1〜2回羽状複葉",
      "毛（針状毛〜鱗片）が発達することが多い",
    ],
    enCharacteristics: ["Tips of opposing veinlets anastomosing (connecting veins)", "Sori covered by round to reniform indusia (or exindusiate)", "Fronds 1- to 2-pinnate", "Hairs (acicular hairs to scales) often well-developed"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ヒメシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Thelypteridaceae",
    divergenceEra: "白亜紀（約9000万年前〜）",
    enDivergenceEra: "Cretaceous (ca. 90 million years ago–)",
    representativeGenera: [
      "ヒメシダ属（Thelypteris）",
      "ミゾシダ属（Stegnogramma）",
      "コウヤワラビ属（Phegopteris）",
    ],
    evolutionEvents: [
      "コネクティング脈（対生小脈の合着）の進化",
      "湿地・水辺環境への特化",
    ],
    enEvolutionEvents: ["Evolution of connecting veins (anastomosis of opposing veinlets)", "Specialization for wetland and waterside environments"],
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
    enOverview: "A family centered on the genus Blechnum, most notably characterized by sori arranged in continuous lines parallel to the veins. Many species exhibit dimorphic fronds (sterile and fertile). In Japan, species such as Struthiopteris niponica and Blechnum amabile are found on moist montane forest floors.",
    characteristics: [
      "胞子嚢群は中肋（主脈）に平行した連続する線状（コソリウム）に配列",
      "包膜は胞子嚢群の外側（葉縁側）に開口",
      "栄養葉と胞子葉の二形性が発達する種が多い",
      "同形胞子性",
    ],
    enCharacteristics: ["Sori arranged in continuous lines (coenosori) parallel to the costa (midrib)", "Indusia opening outward (toward the margin)", "Frond dimorphism (sterile and fertile) well-developed in many species", "Homosporous"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > シシガシラ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Blechnaceae",
    divergenceEra: "白亜紀（約1億年前〜）",
    enDivergenceEra: "Cretaceous (ca. 100 million years ago–)",
    representativeGenera: [
      "コウヤシダ属（Blechnum）",
      "シシガシラ属（Struthiopteris）",
    ],
    evolutionEvents: [
      "コソリウム型胞子嚢配列（葉脈平行型）の確立",
      "栄養葉・胞子葉の二形性による効率的な光合成と胞子生産の分業",
    ],
    enEvolutionEvents: ["Establishment of coenosorate sorus arrangement (parallel to veins)", "Division of labor between sterile and fertile fronds for efficient photosynthesis and spore production"],
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
    enOverview: "A large family including many genera such as Dryopteris (wood ferns), Cyrtomium, and Arachniodes. One of the most species-rich fern families in Japan, growing in diverse habitats centered on montane forest floors. Sori are typically round, covered by reniform indusia.",
    characteristics: [
      "胞子嚢群は丸形（腎形〜円形の包膜に覆われる）",
      "鱗片（葉柄基部等）が発達",
      "葉は1〜4回羽状複葉",
      "根茎は直立〜斜上（束生型が多い）",
    ],
    enCharacteristics: ["Sori round (covered by reniform to orbicular indusia)", "Scales well-developed (especially at stipe base)", "Fronds 1- to 4-pinnate", "Rhizomes erect to ascending (often caespitose)"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > オシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Dryopteridaceae",
    divergenceEra: "白亜紀〜古第三紀（約8000万年前〜）",
    enDivergenceEra: "Cretaceous to Paleogene (ca. 80 million years ago–)",
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
    enEvolutionEvents: ["Stable retention of reniform indusia and extensive speciation", "Promotion of speciation through polyploidization", "Development of evergreenness enabling dominance on winter forest floors"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/オシダ科" },
    ],
    japaneseSpeciesCount: 1675,
    review: { status: "ai_generated" },
  },

  // ── ナナバケシダ科 ──────────────────────────────────────────
  {
    id: "lomariopsidaceae",
    jaName: "ナナバケシダ科",
    enName: "Lomariopsis family",
    scientificName: "Lomariopsidaceae",
    order: "ウラボシ目",
    overview:
      "熱帯を中心に分布する着生または地生のシダ植物の科。タマシダ（Nephrolepis cordifolia）が南西諸島〜九州南部に自生し、観葉植物としても広く栽培される。",
    enOverview: "A family of epiphytic or terrestrial ferns distributed mainly in the tropics. Nephrolepis cordifolia (tuberous sword fern) grows natively from the Nansei Islands to southern Kyushu and is also widely cultivated as an ornamental foliage plant.",
    characteristics: [
      "1回羽状複葉で小葉は多数",
      "根茎は匍匐し、細いストロン（匍匐茎）を出す種がある",
      "胞子嚢群は丸形〜腎形の包膜に覆われる",
      "着生または地生",
    ],
    enCharacteristics: ["Once-pinnate fronds with numerous pinnae", "Rhizomes creeping, with some species producing slender stolons", "Sori covered by round to reniform indusia", "Epiphytic or terrestrial"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ナナバケシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Lomariopsidaceae",
    divergenceEra: "白亜紀〜古第三紀（約7000万年前〜）",
    enDivergenceEra: "Cretaceous to Paleogene (ca. 70 million years ago–)",
    representativeGenera: [
      "ヒモカズラ属（Lomariopsis）",
      "タマシダ属（Nephrolepis）",
    ],
    evolutionEvents: [
      "ストロン（匍匐茎）による栄養繁殖の高効率化",
      "着生生活と地生生活の間の可塑的適応",
    ],
    enEvolutionEvents: ["Highly efficient vegetative reproduction via stolons", "Plastic adaptation between epiphytic and terrestrial lifestyles"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ナナバケシダ科" },
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
    enOverview: "A monotypic family consisting solely of the genus Oleandra, distributed across tropical Asia, Africa, and the Americas. Epiphytic or epilithic herbs characterized by simple, coriaceous fronds and an articulation (joint) at the base of the stipe.",
    characteristics: [
      "単葉で披針形〜楕円形、革質",
      "葉柄基部に関節（節）をもつ",
      "胞子嚢群は丸形〜腎形の包膜に覆われる",
      "着生または岩上生",
    ],
    enCharacteristics: ["Simple fronds, lanceolate to elliptic, coriaceous", "Stipe base with an articulation (joint)", "Sori covered by round to reniform indusia", "Epiphytic or epilithic"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > タマシダ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Oleandraceae",
    divergenceEra: "白亜紀〜古第三紀（約7000万年前〜）",
    enDivergenceEra: "Cretaceous to Paleogene (ca. 70 million years ago–)",
    representativeGenera: ["タマシダ属（Oleandra）"],
    evolutionEvents: [
      "葉柄基部の関節（脱離帯）による老葉の効率的脱落機構の確立",
      "着生環境への特化",
    ],
    enEvolutionEvents: ["Establishment of efficient old-frond abscission via stipe-base articulation (abscission zone)", "Specialization for epiphytic habitats"],
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
    enOverview: "A family of epiphytic ferns centered on the genus Davallia (hare's foot ferns). Rhizomes are densely covered with scale-like hairs. In Japan, Davallia mariesii grows epiphytically on tree trunks and rock faces in temperate regions and is also used in bonsai and lantern decorations.",
    characteristics: [
      "根茎は長く匍匐し、茶色い鱗片（毛）で密に覆われる",
      "胞子嚢群は葉縁の杯形〜袋形の包膜に収まる",
      "葉は3〜4回羽状複葉で精巧に分裂",
      "着生性（樹幹・岩壁）",
    ],
    enCharacteristics: ["Rhizomes long-creeping, densely covered with brown scales (hairs)", "Sori enclosed in cup-shaped to pouch-shaped marginal indusia", "Fronds finely dissected, 3- to 4-pinnate", "Epiphytic (on tree trunks and rock faces)"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > シノブ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Davalliaceae",
    divergenceEra: "古第三紀（約5000万年前〜）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago–)",
    representativeGenera: ["シノブ属（Davallia）"],
    evolutionEvents: [
      "杯形（コップ型）包膜の独特の進化",
      "鱗片状根茎による乾燥耐性の獲得（着生適応）",
    ],
    enEvolutionEvents: ["Distinctive evolution of cup-shaped indusia", "Acquisition of desiccation tolerance through scaly rhizomes (epiphytic adaptation)"],
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
    enOverview: "A large family predominantly of epiphytic ferns. Sori are typically exindusiate (without indusia), round to elliptic, and positioned at the junctions of veins (nodes of anastomosing veins). In Japan, species such as Polypodium, Lepisorus, and Crypsinus grow epiphytically on tree trunks and rock faces.",
    characteristics: [
      "胞子嚢群は裸出（包膜をもたない）",
      "胞子嚢群は円形〜楕円形で葉脈の交点に位置",
      "網状脈が発達",
      "着生性が多い（樹幹・岩壁）",
    ],
    enCharacteristics: ["Sori exindusiate (lacking indusia)", "Sori round to elliptic, positioned at vein junctions", "Anastomosing venation well-developed", "Predominantly epiphytic (on tree trunks and rock faces)"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ウラボシ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Polypodiaceae",
    divergenceEra: "白亜紀〜古第三紀（約7000万年前〜）",
    enDivergenceEra: "Cretaceous to Paleogene (ca. 70 million years ago–)",
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
    enEvolutionEvents: ["Loss of indusia (transition to exindusiate sori)", "Extensive adaptation to epiphytic life", "Occupation of epiphytic niches in conjunction with angiosperm canopy expansion"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウラボシ科" },
    ],
    japaneseSpeciesCount: 382,
    review: { status: "ai_generated" },
  },

  // ── ヒメウラボシ科 ──────────────────────────────────────────
  {
    id: "grammitidaceae",
    jaName: "ヒメウラボシ科",
    enName: "Grammitid fern family",
    scientificName: "Grammitidaceae",
    order: "ウラボシ目",
    overview:
      "熱帯〜温帯山地の霧林に着生する小型のシダ植物。ウラボシ科に近縁で、胞子嚢群は裸出の円形。葉は小型で単葉〜深裂するものが多く、葉裏にしばしば毛が密生する。日本では小笠原・南西諸島に数種が生育する。",
    enOverview: "Small epiphytic ferns found in cloud forests of tropical to temperate mountains. Closely related to Polypodiaceae, with exindusiate, round sori. Fronds are small, ranging from simple to deeply lobed, and the abaxial surface is often densely hairy. A few species occur in the Ogasawara and Nansei Islands of Japan.",
    characteristics: [
      "小型の着生性シダ",
      "胞子嚢群は裸出（包膜なし）",
      "葉裏に多細胞毛が密生することが多い",
      "胞子嚢柄が1列の細胞列からなる",
    ],
    enCharacteristics: ["Small epiphytic ferns", "Sori exindusiate (lacking indusia)", "Abaxial surface often densely covered with multicellular hairs", "Sporangial stalks consisting of a single row of cells"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > ウラボシ目 > ヒメウラボシ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Polypodiales > Grammitidaceae",
    divergenceEra: "古第三紀（約5000万年前〜）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago–)",
    representativeGenera: ["グラミティス属（Grammitis）"],
    evolutionEvents: [
      "霧林・高湿度山地環境への特化（超小型着生ニッチ）",
      "胞子嚢柄の単列化（ウラボシ科との系統的分岐）",
    ],
    enEvolutionEvents: ["Specialization for cloud forest and high-humidity montane environments (ultra-small epiphytic niche)", "Reduction of sporangial stalks to a single cell row (phylogenetic divergence from Polypodiaceae)"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒメウラボシ科" },
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
    enOverview: "Free-floating, heterosporous aquatic ferns. The genus Salvinia lacks roots and possesses water-repellent micro-hairs on the surface of floating leaves. In Japan, Salvinia natans is found in rice paddies and ponds but its populations are declining.",
    characteristics: [
      "根をもたない浮遊性水生シダ",
      "異形胞子性（大胞子嚢・小胞子嚢が胞子果に収まる）",
      "浮葉の表面に撥水性の微細毛（テニスラケット状）",
      "対生する浮葉2枚と水中葉（根の代わり）1枚の計3葉",
    ],
    enCharacteristics: ["Free-floating aquatic fern lacking roots", "Heterosporous (megasporangia and microsporangia enclosed in sporocarps)", "Water-repellent micro-hairs (tennis-racket shaped) on floating leaf surfaces", "Three leaves per node: two opposite floating leaves and one submerged leaf (functioning as a root substitute)"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > サンショウモ目 > サンショウモ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Salviniales > Salviniaceae",
    divergenceEra: "白亜紀〜古第三紀（約8000万年前〜）",
    enDivergenceEra: "Cretaceous to Paleogene (ca. 80 million years ago–)",
    representativeGenera: ["サンショウモ属（Salvinia）"],
    evolutionEvents: [
      "根の喪失と水中葉（根の機能代替）の進化",
      "撥水性微細毛（ロータス効果の生物的起源）の発達",
    ],
    enEvolutionEvents: ["Loss of roots and evolution of submerged leaves as functional root substitutes", "Development of water-repellent micro-hairs (a biological origin of the lotus effect)"],
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
    enOverview: "A monotypic family of free-floating aquatic ferns comprising only the genus Azolla. Harbors symbiotic cyanobacteria (Anabaena azollae) within leaf cavities, enabling nitrogen fixation. Used as green manure in Asian rice paddies. In Japan, Azolla species are found in rice paddies and ponds.",
    characteristics: [
      "異形胞子性の水生シダ",
      "葉腔にシアノバクテリア（Anabaena）を共生（窒素固定）",
      "葉は小さく2裂し、水面を覆うように重なる",
      "秋に赤色（アントシアニン）に色づく",
    ],
    enCharacteristics: ["Heterosporous aquatic fern", "Symbiotic cyanobacteria (Anabaena) housed in leaf cavities (nitrogen fixation)", "Leaves small and bilobed, overlapping to cover the water surface", "Turns red (anthocyanin pigmentation) in autumn"],
    phylogeneticPosition: "維管束植物 > シダ植物門 > ポリポジウム綱 > サンショウモ目 > アカウキクサ科",
    enPhylogeneticPosition: "Vascular plants > Polypodiophyta > Polypodiopsida > Salviniales > Azollaceae",
    divergenceEra: "白亜紀（約8000万年前〜）",
    enDivergenceEra: "Cretaceous (ca. 80 million years ago–)",
    representativeGenera: ["アカウキクサ属（Azolla）"],
    evolutionEvents: [
      "シアノバクテリア（Anabaena）との葉内共生（窒素固定）の確立",
      "白亜紀末〜暁新世の「アゾラ事件」（北極海での大量繁殖）への関与",
    ],
    enEvolutionEvents: ["Establishment of endosymbiosis with cyanobacteria (Anabaena) for nitrogen fixation within leaf cavities", "Involvement in the 'Azolla Event' of the late Cretaceous to Paleocene (massive proliferation in the Arctic Ocean)"],
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
    enOverview: "A gymnosperm family endemic to the Namib Desert of southwestern Africa. A monotypic family consisting of a single species, Welwitschia mirabilis. Only two leaves grow throughout the plant's entire lifespan, and individuals are estimated to live for hundreds to thousands of years.",
    characteristics: [
      "葉は2枚のみで生涯成長し続け、裂けて帯状になる",
      "茎は短く肥大した木質の根茎状",
      "雌雄異株で、花は球果状の胞子葉球",
      "極端な乾燥地に適応した独自の形態",
    ],
    enCharacteristics: ["Only two leaves that grow continuously throughout life, splitting into strap-like segments", "Stem short and swollen into a woody, caudex-like structure", "Dioecious, with cone-like strobili", "Unique morphology adapted to extreme arid conditions"],
    phylogeneticPosition: "裸子植物 > グネツム類 > グネツム目 > ウェルウィッチア科",
    enPhylogeneticPosition: "Gymnosperms > Gnetophytes > Gnetales > Welwitschiaceae",
    divergenceEra: "ジュラ紀〜白亜紀（約1億3000万年前）",
    enDivergenceEra: "Jurassic to Cretaceous (ca. 130 million years ago)",
    representativeGenera: [
      "ウェルウィッチア属（Welwitschia）",
    ],
    evolutionEvents: [
      "裸子植物グネツム類の独立した進化系統として分岐",
      "ナミブ砂漠への極端な乾燥適応",
      "2枚の葉のみで生涯を送る独自の成長戦略の獲得",
    ],
    enEvolutionEvents: ["Divergence as an independent evolutionary lineage within the gnetophytes", "Extreme xerophytic adaptation to the Namib Desert", "Acquisition of a unique growth strategy of living with only two leaves for life"],
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
    enOverview: "A family of evergreen trees growing in tropical rainforests. Approximately 20 genera and 500 species are known, distributed across tropical Asia, Africa, and the Americas. Best known for producing nutmeg (Myristica fragrans), with the seed aril used as the spice mace.",
    characteristics: [
      "常緑高木で精油を含む",
      "花被片は3枚の合着した筒状",
      "雌雄異株が多い",
      "種子は大きく、赤い網状の仮種皮（アリル）に包まれる",
      "切断すると赤い樹液（血の木）が出る種もある",
    ],
    enCharacteristics: ["Evergreen trees containing essential oils", "Perianth of 3 fused, tubular tepals", "Mostly dioecious", "Seeds large, enclosed in a red, reticulate aril", "Some species exude red sap ('blood trees') when cut"],
    phylogeneticPosition: "被子植物 > マグノリア類 > モクレン目 > ニクズク科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Magnoliales > Myristicaceae",
    divergenceEra: "白亜紀前期〜中期（約1億1000万年前）",
    enDivergenceEra: "Early to mid-Cretaceous (ca. 110 million years ago)",
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
    enEvolutionEvents: ["Emergence in the Early Cretaceous as an early-diverging lineage of magnoliids", "Acquisition of seed dispersal by birds and mammals via red arils", "Development of insect and herbivore defense through essential oil compounds (myristicin, etc.)"],
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
    enOverview: "A very ancient angiosperm family endemic only to the Fiji Islands. A near-monotypic family comprising 1 genus with 2 species (Degeneria vitiensis and D. roseiflora). The floral morphology retains many ancestral features of angiosperms, making it highly significant for research on floral evolution.",
    characteristics: [
      "花弁・萼片の区別が不明瞭で多数の花被片をもつ",
      "雄しべは扁平な葉状で、葯が3室（祖先的形質）",
      "雌しべは折りたたまれた1心皮",
      "常緑高木で、芳香性の花を咲かせる",
    ],
    enCharacteristics: ["Petals and sepals poorly differentiated, with numerous tepals", "Stamens flattened and leaf-like, with 3-locular anthers (ancestral trait)", "Pistil a single, conduplicate carpel", "Evergreen tree with fragrant flowers"],
    phylogeneticPosition: "被子植物 > マグノリア類 > モクレン目 > デゲネリア科",
    enPhylogeneticPosition: "Angiosperms > Magnoliids > Magnoliales > Degeneriaceae",
    divergenceEra: "白亜紀前期（約1億2000万年前）",
    enDivergenceEra: "Early Cretaceous (ca. 120 million years ago)",
    representativeGenera: [
      "デゲネリア属（Degeneria）",
    ],
    evolutionEvents: [
      "マグノリア類の基底的系統として初期被子植物の祖先的形質を保持",
      "フィジー諸島への孤立による独自進化",
      "扁平な雄しべという被子植物の花進化を示す証拠の保存",
    ],
    enEvolutionEvents: ["Retention of ancestral angiosperm traits as a basal lineage of magnoliids", "Independent evolution through isolation on the Fiji Islands", "Preservation of flattened stamens as evidence of early angiosperm floral evolution"],
    externalLinks: [
      { label: "Wikipedia（英語）", url: "https://en.wikipedia.org/wiki/Degeneriaceae" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ハナイ科 ──────────────────────────────────────────
  {
    id: "butomaceae",
    jaName: "ハナイ科",
    enName: "Flowering rush family",
    scientificName: "Butomaceae Rich.",
    order: "オモダカ目",
    overview:
      "ユーラシア原産の水生・湿生植物の科。1属1種（Butomus umbellatus、ハナイ）のみからなる単型科。花は美しいピンク色で散形花序を形成し、観賞用に栽培されることもある。日本では帰化植物として確認されている。",
    enOverview: "A family of aquatic and wetland plants native to Eurasia. A monotypic family consisting of a single species, Butomus umbellatus (flowering rush). Flowers are an attractive pink, forming umbel-like inflorescences, and the plant is sometimes cultivated as an ornamental. It has been recorded as a naturalized species in Japan.",
    characteristics: [
      "葉は細長い三稜形で、直立する",
      "花は3数性でピンク色、花被片6枚",
      "散形花序で多数の花をつける",
      "水辺・湿地に生育する多年草",
    ],
    enCharacteristics: ["Leaves elongated and triangular in cross-section, erect", "Flowers trimerous, pink, with 6 tepals", "Umbel-like inflorescence bearing numerous flowers", "Perennial growing in waterside and wetland habitats"],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > ハナイ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Butomaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8500万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 85 million years ago)",
    representativeGenera: [
      "ブトムス属（Butomus）",
    ],
    evolutionEvents: [
      "単子葉類水生植物の初期分岐系統として出現",
      "水辺環境への適応と散形花序の進化",
    ],
    enEvolutionEvents: ["Emergence as an early-diverging lineage of monocot aquatic plants", "Adaptation to waterside environments and evolution of umbel-like inflorescences"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ブトムス科" },
    ],
    japaneseSpeciesCount: 2,
    review: { status: "ai_generated" },
  },

  // ── ヒルムシロ目ホロムイソウ科 ──────────────────────────────────────────
  {
    id: "scheuchzeriaceae",
    jaName: "ホロムイソウ科",
    enName: "Rannoch-rush family",
    scientificName: "Scheuchzeriaceae F.Rudolphi",
    order: "オモダカ目",
    overview:
      "北半球の寒冷湿地・泥炭地に分布する水生植物の科。1属1種（Scheuchzeria palustris、ツルコケモモ目）のみからなる単型科。日本では北海道・本州の高層湿原に稀に見られる。",
    enOverview: "A family of aquatic plants distributed in cold wetlands and peatlands of the Northern Hemisphere. A monotypic family consisting of a single species, Scheuchzeria palustris. In Japan, it is rarely found in raised bogs in Hokkaido and Honshu.",
    characteristics: [
      "細長い葉で、基部に葉鞘をもつ",
      "花被片6枚、雄しべ6本",
      "果実は袋果（ぶくか）",
      "泥炭地・高層湿原の特殊環境に生育",
    ],
    enCharacteristics: ["Leaves elongated and narrow, with a basal sheath", "Tepals 6, stamens 6", "Fruit a follicle", "Grows in specialized peatland and raised bog environments"],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > ホロムイソウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Scheuchzeriaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
    representativeGenera: [
      "シュークゼリア属（Scheuchzeria）",
    ],
    evolutionEvents: [
      "単子葉類水生系統からの分岐",
      "北半球寒冷湿地への適応",
    ],
    enEvolutionEvents: ["Divergence from the monocot aquatic lineage", "Adaptation to cold wetlands of the Northern Hemisphere"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホロムイソウ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── レースソウ科 ──────────────────────────────────────────
  {
    id: "aponogetonaceae",
    jaName: "レースソウ科",
    enName: "Cape-pondweed family",
    scientificName: "Aponogetonaceae J.Agardh",
    order: "オモダカ目",
    overview:
      "熱帯〜暖温帯の水中・湿地に生育する水生植物の科。1属（Aponogeton）約55種からなる。アフリカ・アジア・オーストラリアに分布し、日本では観賞用として水槽に用いられることが多い。",
    enOverview: "A family of aquatic plants growing submerged or in wetlands in tropical to warm-temperate regions. Comprises a single genus (Aponogeton) with approximately 55 species. Distributed in Africa, Asia, and Australia; in Japan, species are mainly cultivated as aquarium plants.",
    characteristics: [
      "葉は水中または浮水性で、細長いか楕円形",
      "花は穂状花序または分枝する穂状花序",
      "花被片は1〜3枚、白または淡色",
      "根茎（塊茎）から生育する多年草",
    ],
    enCharacteristics: ["Leaves submerged or floating, elongated or elliptic", "Flowers in spicate or branched spicate inflorescences", "Tepals 1 to 3, white or pale-colored", "Perennial growing from a rhizome (tuber)"],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > レースソウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Aponogetonaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
    representativeGenera: [
      "アポノゲトン属（Aponogeton）",
    ],
    evolutionEvents: [
      "単子葉類水生系統として分岐",
      "水中葉の発達と水媒花への適応",
    ],
    enEvolutionEvents: ["Divergence as a monocot aquatic lineage", "Development of submerged leaves and adaptation to hydrophilous pollination"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/レースソウ科" },
    ],
    japaneseSpeciesCount: 6,
    review: { status: "ai_generated" },
  },

  // ── シバナ科 ──────────────────────────────────────────
  {
    id: "juncaginaceae",
    jaName: "シバナ科",
    enName: "Arrow-grass family",
    scientificName: "Juncaginaceae Rich.",
    order: "オモダカ目",
    overview:
      "湿地・塩性湿地・水辺に生育する単子葉植物の科。3〜4属約25種が知られ、北半球の温帯から極地にかけて分布する。日本にはイグサモ属（Triglochin）の数種が塩湿地や干潟に生育する。",
    enOverview: "A monocot family growing in wetlands, salt marshes, and waterside habitats. Approximately 3 to 4 genera and 25 species are known, distributed from temperate to polar regions of the Northern Hemisphere. In Japan, several species of Triglochin (arrowgrass) grow in salt marshes and tidal flats.",
    characteristics: [
      "葉は細長い線形で、根元から束生",
      "花は小さく3数性、穂状花序",
      "果実は裂開する分果",
      "塩性湿地に適応した塩生植物を含む",
    ],
    enCharacteristics: ["Leaves narrow-linear, tufted from the base", "Flowers small, trimerous, in spicate inflorescences", "Fruit a dehiscent schizocarp", "Includes halophytes adapted to salt marshes"],
    phylogeneticPosition: "被子植物 > 単子葉類 > オモダカ目 > シバナ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Alismatales > Juncaginaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
    representativeGenera: [
      "イグサモ属（Triglochin）",
      "テトラゴノカルプス属（Tetroncium）",
    ],
    evolutionEvents: [
      "塩性湿地・干潟環境への特殊適応",
      "風媒花による送粉様式の確立",
    ],
    enEvolutionEvents: ["Specialized adaptation to salt marshes and tidal flat environments", "Establishment of anemophilous (wind) pollination"],
    externalLinks: [
      { label: "Wikipedia（英語）", url: "https://en.wikipedia.org/wiki/Juncaginaceae" },
    ],
    japaneseSpeciesCount: 5,
    review: { status: "ai_generated" },
  },

  // ── クワズイモ目クルクリゴ科 ──────────────────────────────────────────
  {
    id: "cyclanthaceae",
    jaName: "パナマソウ科",
    enName: "Panama-hat family",
    scientificName: "Cyclanthaceae Poit. ex A.Rich.",
    order: "タコノキ目",
    overview:
      "中南米の熱帯雨林に分布する単子葉植物の科。約12属230種が知られ、パナマ帽の原料となるトキワタケヤシ（Carludovica palmata）が有名。葉はヤシに似た大型の扇状または二叉状。",
    enOverview: "A monocot family distributed in Central and South American tropical rainforests. Approximately 12 genera and 230 species are known. Famous for Carludovica palmata (Panama hat palm), whose leaves are the raw material for Panama hats. Leaves are large, fan-shaped or bifid, resembling those of palms.",
    characteristics: [
      "葉は大型の扇状または二叉状、ヤシ状の外観",
      "雌雄同株、肉穂花序に花を密生",
      "雄花と雌花が交互に配置される独特の花序",
      "果実は集合して肉質の集合果となる",
    ],
    enCharacteristics: ["Leaves large, fan-shaped or bifid, with a palm-like appearance", "Monoecious, flowers densely packed in a spadix", "Distinctive inflorescence with male and female flowers alternately arranged", "Fruits aggregate into fleshy multiple fruits"],
    phylogeneticPosition: "被子植物 > 単子葉類 > タコノキ目 > パナマソウ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Pandanales > Cyclanthaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80 million years ago)",
    representativeGenera: [
      "カルルドヴィカ属（Carludovica）",
      "キクランタス属（Cyclanthus）",
      "アスプルンディア属（Asplundia）",
    ],
    evolutionEvents: [
      "タコノキ目の系統内で熱帯雨林林床への適応",
      "ヤシ状の大型葉の収斂進化",
    ],
    enEvolutionEvents: ["Adaptation to tropical rainforest floors within the Pandanales lineage", "Convergent evolution of large, palm-like leaves"],
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
    enOverview: "A monocot family distributed mainly in tropical and subtropical Central and South America. Approximately 75 genera and 3,700 species are known, including pineapple (Ananas comosus) and numerous epiphytes (such as Tillandsia). In Japan, they are cultivated as ornamental plants, with some species having escaped into the wild.",
    characteristics: [
      "葉はロゼット状に配列し、多くは革質・縁に刺をもつ",
      "葉の基部が杯状に水をためる「タンク型」が多い",
      "花は3数性で、苞が鮮やかに着色されることが多い",
      "着生・地生・岩生と多様な生活形をもつ",
    ],
    enCharacteristics: ["Leaves arranged in rosettes, mostly coriaceous with spiny margins", "Many are 'tank-type,' with leaf bases forming cups that hold water", "Flowers trimerous, with bracts often brightly colored", "Diverse life forms: epiphytic, terrestrial, and epilithic"],
    phylogeneticPosition: "被子植物 > 単子葉類 > ツユクサ類 > イネ目 > パイナップル科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Commelinids > Poales > Bromeliaceae",
    divergenceEra: "古第三紀（約6500万〜5000万年前）",
    enDivergenceEra: "Paleogene (ca. 65–50 million years ago)",
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
    enEvolutionEvents: ["Dispersal from South American origin to Central America and the Caribbean", "Acquisition of CAM photosynthesis (independently evolved in epiphytic bromeliads)", "Evolution of tank-type bromeliads (rainwater and organic matter storage)", "Co-evolution of pollination with hummingbirds and insects"],
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
    enOverview: "A carnivorous plant family endemic to Western Australia. A monotypic family consisting of a single species, Cephalotus follicularis (Albany pitcher plant). Some leaves are modified into pitcher-shaped traps (pitfall type) that capture and digest insects.",
    characteristics: [
      "葉の一部が落とし穴型の袋状捕虫器に変形",
      "捕虫器の口部には蓋と格子状のリブがある",
      "花は小さく白色、6枚の花被片をもつ",
      "栄養葉と捕虫葉の両方を持つ多年草",
    ],
    enCharacteristics: ["Some leaves modified into pitfall-type pitcher traps", "Pitcher mouth with a lid and lattice-like ribs", "Flowers small, white, with 6 tepals", "Perennial bearing both foliage leaves and pitcher leaves"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > カタバミ目 > フクロユキノシタ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Oxalidales > Cephalotaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80–70 million years ago)",
    representativeGenera: [
      "フクロユキノシタ属（Cephalotus）",
    ],
    evolutionEvents: [
      "カタバミ目内で捕虫器の独立進化（収斂進化）",
      "オーストラリア西部の貧栄養湿地への適応",
    ],
    enEvolutionEvents: ["Independent evolution of pitcher traps within Oxalidales (convergent evolution)", "Adaptation to nutrient-poor wetlands of Western Australia"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/フクロユキノシタ科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── バターナット科 ──────────────────────────────────────────
  {
    id: "caryocaraceae",
    jaName: "バターナット科",
    enName: "Souari family",
    scientificName: "Caryocaraceae Voigt",
    order: "キントラノオ目",
    overview:
      "南米の熱帯雨林に分布する高木の科。1属（Caryocar）約15種からなる。種子は食用油（スアリナッツ）として利用され、アマゾン先住民の重要な食糧源となっている。",
    enOverview: "A family of tall trees distributed in South American tropical rainforests. Comprises a single genus (Caryocar) with approximately 15 species. Seeds are used for edible oil (souari nuts) and serve as an important food source for Amazonian indigenous peoples.",
    characteristics: [
      "大型の対生三出複葉",
      "花は大きく黄色〜白色、雄しべが多数で目立つ",
      "果実は核果で大型、硬い果皮に包まれた種子をもつ",
      "常緑の大高木",
    ],
    enCharacteristics: ["Large, opposite, trifoliate compound leaves", "Flowers large, yellow to white, with numerous conspicuous stamens", "Fruit a large drupe with seeds enclosed in a hard endocarp", "Evergreen large trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キントラノオ目 > バターナット科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malpighiales > Caryocaraceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
    representativeGenera: [
      "カリオカル属（Caryocar）",
    ],
    evolutionEvents: [
      "南米熱帯雨林の大高木系統として分岐",
      "大型種子と哺乳類による種子散布の共進化",
    ],
    enEvolutionEvents: ["Divergence as a large-tree lineage of South American tropical rainforests", "Co-evolution of large seeds and mammal-mediated seed dispersal"],
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
    enOverview: "A large family with over 170 genera and 5,000 species, centered in tropical and subtropical regions. In Japan, Melastoma candidum is found along roadsides and wastelands in Kyushu and Okinawa. Easily identified by the characteristic pattern of veins running in arcs from the leaf base.",
    characteristics: [
      "葉は対生で、基部から3〜7本の主脈が弧状に走る（弧状脈）",
      "花は4〜5数性、花弁は鮮やかな色（紫・ピンク・白）",
      "雄しべは異形雄蕊（おしべの形が2種類）",
      "果実は液果または蒴果",
    ],
    enCharacteristics: ["Leaves opposite, with 3 to 7 main veins running in arcs from the base (acrodromous venation)", "Flowers 4- to 5-merous, petals brightly colored (purple, pink, or white)", "Stamens heteromorphic (dimorphic stamens of two different forms)", "Fruit a berry or capsule"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > フトモモ目 > ノボタン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Myrtales > Melastomataceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80 million years ago)",
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
    enEvolutionEvents: ["Evolution of acrodromous venation as a distinctive leaf-vein pattern", "Pollination specialization through heteromorphic stamens", "Rapid speciation across the entire tropics"],
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
    enOverview: "A family of deciduous shrubs to small trees distributed in temperate regions of the Northern Hemisphere. Approximately 2 genera and 50 species are known. In Japan, Staphylea bumalda and Euscaphis japonica are native. The inflated, bladder-like fruits are characteristic.",
    characteristics: [
      "葉は羽状複葉または3出複葉",
      "花は5数性で白色〜淡緑色、円錐花序",
      "果実は薄い膜質の袋（蒴果）で風船状に膨らむ",
      "落葉低木〜小高木",
    ],
    enCharacteristics: ["Leaves pinnately compound or trifoliate", "Flowers 5-merous, white to pale green, in panicles", "Fruit a thin, membranous, inflated bladder-like capsule", "Deciduous shrubs to small trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > クロッソソマ目 > ミツバウツギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Crossosomatales > Staphyleaceae",
    divergenceEra: "古第三紀（約6000万年前）",
    enDivergenceEra: "Paleogene (ca. 60 million years ago)",
    representativeGenera: [
      "ミツバウツギ属（Staphylea）",
      "ゴンズイ属（Euscaphis）",
    ],
    evolutionEvents: [
      "クロッソソマ目内での温帯林適応",
      "膨張した果実による風散布・水散布の発達",
    ],
    enEvolutionEvents: ["Adaptation to temperate forests within Crossosomatales", "Development of inflated fruits for wind and water dispersal"],
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
    enOverview: "A family of deciduous shrubs to small trees distributed in East and Southeast Asia. Comprises a single genus (Stachyurus) with approximately 6 species. In Japan, S. praecox and S. macrocarpus are native, producing pendulous, pale yellow spicate inflorescences before the leaves emerge in early spring.",
    characteristics: [
      "葉は互生で鋸歯縁",
      "花は4数性で淡黄色、穂状花序が垂れ下がる",
      "葉に先立って早春に開花",
      "果実は漿果状の蒴果",
    ],
    enCharacteristics: ["Leaves alternate with serrate margins", "Flowers 4-merous, pale yellow, in pendulous spicate inflorescences", "Flowering in early spring before leaf emergence", "Fruit a berry-like capsule"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > クロッソソマ目 > キブシ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Crossosomatales > Stachyuraceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
    representativeGenera: [
      "キブシ属（Stachyurus）",
    ],
    evolutionEvents: [
      "東アジアの温帯落葉林への適応",
      "早春開花という送粉戦略の確立",
    ],
    enEvolutionEvents: ["Adaptation to temperate deciduous forests of East Asia", "Establishment of an early-spring flowering pollination strategy"],
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
    enOverview: "A family of trees widely distributed in tropical regions. Approximately 20 genera and 700 species are known, including species that produce aromatic resins such as frankincense and myrrh. In Japan, several species of Canarium are found in Okinawa and Amami.",
    characteristics: [
      "樹皮から芳香性樹脂を分泌する",
      "葉は羽状複葉で互生",
      "花は小さく3〜5数性",
      "果実は核果で、外皮が剥離することが多い",
    ],
    enCharacteristics: ["Bark exuding aromatic resins", "Leaves pinnately compound, alternate", "Flowers small, 3- to 5-merous", "Fruit a drupe, with the exocarp often peeling off"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > カンラン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Sapindales > Burseraceae",
    divergenceEra: "白亜紀後期（約9000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 90 million years ago)",
    representativeGenera: [
      "カンラン属（Canarium）",
      "ボスウェリア属（Boswellia）",
      "コミフォラ属（Commiphora）",
    ],
    evolutionEvents: [
      "ムクロジ目内で芳香性樹脂産生能力の確立",
      "熱帯各地域への拡散と種分化",
    ],
    enEvolutionEvents: ["Establishment of aromatic resin production within Sapindales", "Dispersal and speciation across tropical regions worldwide"],
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
    enOverview: "A family of trees and shrubs distributed from tropical to temperate regions. Approximately 80 genera and 870 species are known, producing mango, cashew nuts, and pistachio. In Japan, native species include Toxicodendron vernicifluum (lacquer tree), Toxicodendron succedaneum, Rhus javanica, and Pistacia chinensis, with urushiol-induced contact dermatitis being well known.",
    characteristics: [
      "樹皮・葉にウルシオール等のフェノール性化合物を含み、接触性炎症を起こす種がある",
      "葉は羽状複葉または単葉",
      "花は小さく5数性、円錐花序",
      "果実は核果が多い",
    ],
    enCharacteristics: ["Bark and leaves contain phenolic compounds such as urushiol, causing contact dermatitis in some species", "Leaves pinnately compound or simple", "Flowers small, 5-merous, in panicles", "Fruit mostly drupes"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > ウルシ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Sapindales > Anacardiaceae",
    divergenceEra: "白亜紀後期（約8500万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 85 million years ago)",
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
    enEvolutionEvents: ["Evolution of defensive compounds such as urushiol", "Development of animal-mediated seed dispersal through edible fruits (mango, cashew, etc.)", "Domestication of lacquer tree in the Japanese archipelago and the origins of lacquerware culture"],
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
    enOverview: "A large family of woody plants distributed from tropical to temperate regions. Approximately 160 genera and 2,100 species are known, including mandarin oranges, lemons, grapefruits, Zanthoxylum (Japanese pepper), and Orixa. Aromatic essential oil glands are characteristic of the entire family. Japan has numerous native and cultivated species.",
    characteristics: [
      "葉・樹皮に精油腺（半透明の点）をもち芳香がある",
      "葉は複葉または単葉（翼葉をもつことが多い）",
      "花は4〜5数性で白色が多い",
      "果実は液果（柑橘類のヘスペリジウム）または翼果・核果",
    ],
    enCharacteristics: ["Leaves and bark with essential oil glands (translucent dots), aromatic", "Leaves compound or simple (often with winged petioles)", "Flowers mostly 4- to 5-merous, usually white", "Fruit a berry (hesperidium in citrus), samara, or drupe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > ミカン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Sapindales > Rutaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8500万〜7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 85–70 million years ago)",
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
    enEvolutionEvents: ["Establishment of essential oil production and its use for insect defense and pollinator attraction", "Origin and diversification of citrus (Citrus) in East Asia", "Differentiation of Japanese endemic species (Orixa, Phellodendron, etc.)"],
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
    enOverview: "A family of trees and shrubs distributed from tropical to temperate regions. Approximately 20 genera and 100 species are known, rich in bitter compounds (quassinoids). In Japan, Picrasma quassioides is native and has extremely bitter bark. Ailanthus altissima (tree of heaven) has spread nationwide as a naturalized species.",
    characteristics: [
      "樹皮・材にクアシノイドという強い苦味成分を含む",
      "葉は羽状複葉が多い",
      "花は小さく4〜5数性",
      "果実は翼果または核果",
    ],
    enCharacteristics: ["Bark and wood contain quassinoids, intensely bitter compounds", "Leaves mostly pinnately compound", "Flowers small, 4- to 5-merous", "Fruit a samara or drupe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > ニガキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Sapindales > Simaroubaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80 million years ago)",
    representativeGenera: [
      "ニガキ属（Picrasma）",
      "ニワウルシ属（Ailanthus）",
      "クアッシア属（Quassia）",
    ],
    evolutionEvents: [
      "クアシノイドという独自の苦味防御物質の進化",
      "ニワウルシ（Ailanthus altissima）の都市環境への適応と世界的拡散",
    ],
    enEvolutionEvents: ["Evolution of quassinoids as unique bitter defensive compounds", "Adaptation of Ailanthus altissima to urban environments and its global spread"],
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
    enOverview: "A family of trees distributed in tropical to subtropical regions. Approximately 50 genera and 600 species are known, including high-quality timber trees such as mahogany (Swietenia). In Japan, Melia azedarach (chinaberry) is native to Kyushu and Okinawa and is also planted on temple grounds.",
    characteristics: [
      "葉は羽状複葉で互生",
      "花は5数性で雄しべは合生して筒状（雄しべ管）",
      "果実は液果・蒴果・核果など多様",
      "多くの種が昆虫忌避成分（トリテルペノイド）を含む",
    ],
    enCharacteristics: ["Leaves pinnately compound, alternate", "Flowers 5-merous with stamens fused into a tube (staminal tube)", "Fruit diverse: berries, capsules, or drupes", "Many species contain insect-repellent compounds (triterpenoids)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムクロジ目 > センダン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Sapindales > Meliaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80 million years ago)",
    representativeGenera: [
      "センダン属（Melia）",
      "マホガニー属（Swietenia）",
      "チャンチン属（Toona）",
    ],
    evolutionEvents: [
      "合生雄しべ管（雄しべ管）の進化",
      "熱帯木材資源として人間による利用と移植の歴史",
    ],
    enEvolutionEvents: ["Evolution of the staminal tube (fused stamen tube)", "History of human utilization and transplantation as tropical timber resources"],
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
    enOverview: "Under APG IV, the broadly circumscribed Malvaceae includes the former Bombacaceae, Tiliaceae, and Sterculiaceae. Approximately 250 genera and 4,200 species are known, including cotton, cacao, hibiscus, and hollyhock. Japan has numerous native and naturalized species such as Malva, Hibiscus mutabilis, and H. syriacus.",
    characteristics: [
      "雄しべが多数合着して筒状の雄しべ束（単体雄蕊）を形成",
      "花弁は5枚、しばしば鮮やかな色",
      "葉は互生で掌状脈または掌状複葉が多い",
      "果実は蒴果・分果など多様",
    ],
    enCharacteristics: ["Stamens numerous, fused into a tubular column (monadelphous stamens)", "Petals 5, often brightly colored", "Leaves alternate, mostly palmately veined or palmately compound", "Fruit diverse: capsules, schizocarps, etc."],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > アオイ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malvales > Malvaceae",
    divergenceEra: "白亜紀後期（約8000万〜9000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80–90 million years ago)",
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
    enEvolutionEvents: ["Evolution of monadelphous stamens (numerous fused stamens)", "Domestication of cotton (Gossypium) and its impact on the global economy", "Utilization of cacao (Theobroma cacao) in Central America and its worldwide spread"],
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
    enOverview: "A family of woody plants and herbs distributed from tropical to temperate regions. Approximately 50 genera and 900 species are known. In Japan, Daphne odora (winter daphne), Daphne kiusiana, Diplomorpha sikokiana, and Edgeworthia chrysantha are native or cultivated. The bark is extremely tough, and Edgeworthia bark is used as a raw material for Japanese washi paper.",
    characteristics: [
      "樹皮が強靱な繊維質で剥がれにくい",
      "花被片は4〜5枚の合生した筒状（花弁はなく萼が花弁状）",
      "花は芳香をもつ種が多い",
      "果実は核果または液果",
    ],
    enCharacteristics: ["Bark with tough, fibrous tissue that is difficult to strip", "Tepals 4 to 5, fused into a tube (petals absent; sepals petaloid)", "Flowers fragrant in many species", "Fruit a drupe or berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > ジンチョウゲ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malvales > Thymelaeaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
    representativeGenera: [
      "ジンチョウゲ属（Daphne）",
      "ミツマタ属（Edgeworthia）",
      "ガンピ属（Wikstroemia）",
    ],
    evolutionEvents: [
      "花弁が退化し萼が花弁状になる独自の花形の進化",
      "強靱な樹皮繊維の発達（和紙・繊維利用の文化的背景）",
    ],
    enEvolutionEvents: ["Evolution of a unique floral form with reduced petals and petaloid sepals", "Development of tough bark fibers (providing the cultural basis for washi paper and fiber use)"],
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
    enOverview: "A small family of shrubs and small trees native to tropical America. Centered on a single species, Bixa orellana (annatto tree). The red pigment (annatto) from the seeds is used worldwide as a food coloring. In Japan, it is cultivated as an ornamental in Okinawa and warm regions.",
    characteristics: [
      "葉は卵形で互生",
      "花は大きくピンク〜白色、5数性",
      "果実は刺のある球状蒴果で、赤い色素を含む種子を多数含む",
      "常緑低木〜小高木",
    ],
    enCharacteristics: ["Leaves ovate, alternate", "Flowers large, pink to white, 5-merous", "Fruit a spiny, globose capsule containing numerous seeds with red pigment", "Evergreen shrubs to small trees"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > ベニノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malvales > Bixaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
    representativeGenera: [
      "ベニノキ属（Bixa）",
    ],
    evolutionEvents: [
      "アナトー（ビキシン）という赤色カロテノイド色素産生能力の進化",
      "中南米先住民による食料・染料としての長期利用",
    ],
    enEvolutionEvents: ["Evolution of the ability to produce annatto (bixin), a red carotenoid pigment", "Long-term use as food and dye by indigenous peoples of Central and South America"],
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
    enOverview: "A family of shrubs and herbs distributed mainly around the Mediterranean and in western Asia. Approximately 8 genera and 200 species are known. In Japan, some species are cultivated or have escaped as naturalized plants. The ephemeral flowers, lasting only a day (or just a morning), give the Japanese name meaning 'half-day flower.'",
    characteristics: [
      "花は5数性で花弁が1〜2日で落ちる（短命花）",
      "花弁はシワがよったように見える",
      "葉は対生または互生で、腺毛・星状毛を持つことが多い",
      "低木または多年草",
    ],
    enCharacteristics: ["Flowers 5-merous, petals dropping after 1 to 2 days (ephemeral flowers)", "Petals appearing crumpled", "Leaves opposite or alternate, often with glandular or stellate hairs", "Shrubs or perennial herbs"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > ハンニチバナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malvales > Cistaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
    representativeGenera: [
      "ハンニチバナ属（Cistus）",
      "ヘリアンテムム属（Helianthemum）",
    ],
    evolutionEvents: [
      "地中海性気候（夏季乾燥）への耐乾適応",
      "短命花という送粉戦略の確立",
    ],
    enEvolutionEvents: ["Drought adaptation to Mediterranean climate (summer-dry conditions)", "Establishment of ephemeral flowering as a pollination strategy"],
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
    enOverview: "A family of giant trees known as the dominant species of Southeast Asian tropical rainforests. Approximately 17 genera and 695 species are known, forming the major component of Southeast Asian rainforests. Named for the two wing-like enlarged sepals on the fruit. A major source of tropical timber (lauan/meranti, etc.).",
    characteristics: [
      "大高木で、高さ40〜80mに達する種もある",
      "果実に2〜5枚の翼状萼片をもち、回転しながら落下する",
      "葉は単葉で革質、互生",
      "マスティング（一斉開花・結実）という現象を示す",
    ],
    enCharacteristics: ["Large trees, with some species reaching 40 to 80 m in height", "Fruit bearing 2 to 5 wing-like sepals, gyrating as it falls", "Leaves simple, coriaceous, alternate", "Exhibits mast flowering and fruiting (mass synchronized reproduction)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アオイ目 > フタバガキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core eudicots > Malvales > Dipterocarpaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
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
    enEvolutionEvents: ["Evolution of gyrating dispersal via wing-like sepals", "Predator satiation strategy through mast flowering and fruiting", "Specialization and dominance in Southeast Asian tropical rainforests"],
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
    enOverview: "A herbaceous family native to the South American Andes, comprising about 90 species in a single genus (Tropaeolum). Nasturtium (Tropaeolum majus) is widely cultivated worldwide as both an ornamental and edible plant, and is popular in Japan as a garden plant.",
    characteristics: [
      "葉は円形の盾状葉で、長い葉柄をもつ",
      "花は左右相称、花弁5枚、後方に距（蜜腺管）をもつ",
      "花・葉は食用可能でピリッとした辛味がある（イソチオシアン酸塩）",
      "茎は多肉質でつる性または直立",
    ],
    enCharacteristics: ["Leaves are circular and peltate with long petioles", "Flowers are zygomorphic with 5 petals and a posterior spur (nectar tube)", "Flowers and leaves are edible with a peppery flavor (isothiocyanates)", "Stems are succulent, either climbing or erect"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > ノウゼンハレン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Brassicales > Tropaeolaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70 million years ago)",
    representativeGenera: [
      "ノウゼンハレン属（Tropaeolum）",
    ],
    evolutionEvents: [
      "アブラナ目内でのグルコシノレート（辛味成分）の収斂進化",
      "花の距によるハチドリとの共進化（アンデス高地）",
    ],
    enEvolutionEvents: ["Convergent evolution of glucosinolates (pungent compounds) within Brassicales", "Coevolution with hummingbirds through floral spurs (Andean highlands)"],
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
    enOverview: "A family of woody plants native to Africa, Arabia, and India, comprising 13 species in a single genus (Moringa). Moringa oleifera, known as the 'miracle tree,' has leaves, seeds, and roots used for food, medicine, and water purification. It is also cultivated in Okinawa and other warm regions of Japan.",
    characteristics: [
      "落葉または半落葉高木、根は大根状に肥大する種もある",
      "葉は2〜3回羽状複葉",
      "花は5数性で左右相称、白色〜淡黄色",
      "果実は長い莢状の蒴果（長さ30〜100cm）",
    ],
    enCharacteristics: ["Deciduous or semi-deciduous trees; some species have tuberous, radish-like roots", "Leaves are 2- to 3-pinnately compound", "Flowers are pentamerous and zygomorphic, white to pale yellow", "Fruit is a long pod-like capsule (30–100 cm in length)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > ワサビノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Brassicales > Moringaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70 million years ago)",
    representativeGenera: [
      "モリンガ属（Moringa）",
    ],
    evolutionEvents: [
      "乾燥地への適応（根の肥大・落葉性）",
      "栄養価の高い葉と食用油を含む種子の進化",
    ],
    enEvolutionEvents: ["Adaptation to arid environments (tuberous roots and deciduousness)", "Evolution of highly nutritious leaves and oil-rich seeds"],
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
    enOverview: "A family of woody plants distributed in tropical America and Africa, comprising about 6 genera and 34 species. Papaya (Carica papaya) is an important fruit crop cultivated throughout the tropics. In Japan, it is cultivated and naturalized in Okinawa and Ogasawara, and grown as an ornamental in warm regions.",
    characteristics: [
      "茎は木質だが中空で、自立する樹木状の形態",
      "葉は大型で掌状に深裂し、頂部に集まる（ヤシ状外観）",
      "雌雄異株または雑性株",
      "乳液（パパイン酵素）を含む",
      "果実は大型の液果",
    ],
    enCharacteristics: ["Stems are woody but hollow, with an erect tree-like habit", "Leaves are large and palmately lobed, clustered at the apex (palm-like appearance)", "Dioecious or polygamous", "Contains latex with papain enzyme", "Fruit is a large berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > パパイア科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Brassicales > Caricaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70 million years ago)",
    representativeGenera: [
      "パパイア属（Carica）",
      "ヤスミナム属類縁（Vasconcellea）",
    ],
    evolutionEvents: [
      "タンパク質分解酵素（パパイン）の進化による草食動物防御",
      "中南米起源から熱帯全域への人間による拡散",
    ],
    enEvolutionEvents: ["Evolution of proteolytic enzyme (papain) as a defense against herbivores", "Human-mediated dispersal from Central/South American origin to pan-tropical distribution"],
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
    enOverview: "A herbaceous family centered around the Mediterranean and western Asia, comprising about 6 genera and 75 species. In Japan, the naturalized species Reseda luteola and R. lutea have been recorded. Many species have fragrant flowers.",
    characteristics: [
      "葉は互生で全縁または羽状裂",
      "花は左右相称、花弁は4〜8枚で縁が深裂する",
      "雄しべは多数",
      "果実は蒴果で上部が開口する",
    ],
    enCharacteristics: ["Leaves are alternate, entire or pinnately lobed", "Flowers are zygomorphic with 4–8 petals that are deeply fringed at the margins", "Stamens are numerous", "Fruit is a capsule open at the top"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > モクセイソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Brassicales > Resedaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
    representativeGenera: [
      "モクセイソウ属（Reseda）",
      "アストロカルプス属（Astrocarpus）",
    ],
    evolutionEvents: [
      "地中海性気候への乾燥適応",
      "グルコシノレートを含むアブラナ目内での系統的位置の確認",
    ],
    enEvolutionEvents: ["Adaptation to the dry Mediterranean climate", "Phylogenetic placement within glucosinolate-producing Brassicales confirmed"],
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
    enOverview: "A family of woody and herbaceous plants distributed in tropical to subtropical regions, comprising about 33 genera and 700 species. Capers (flower buds of Capparis spinosa) are used as food. In Japan, several species of Cleome are native to the Ryukyu Islands.",
    characteristics: [
      "花は4数性で花弁・萼片は各4枚",
      "雄しべは多数で花糸が長く目立つ（フウチョウ様）",
      "葉は互生で単葉または複葉",
      "果実は蒴果または液果",
    ],
    enCharacteristics: ["Flowers are tetramerous with 4 petals and 4 sepals", "Stamens are numerous with long, conspicuous filaments (spider-like appearance)", "Leaves are alternate, simple or compound", "Fruit is a capsule or berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > アブラナ目 > フウチョウソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Brassicales > Capparaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70 million years ago)",
    representativeGenera: [
      "フウチョウソウ属（Cleome）",
      "ケッパー属（Capparis）",
    ],
    evolutionEvents: [
      "グルコシノレート系の防御物質の進化（アブラナ目共通）",
      "多数の長い雄しべを用いた送粉者誘引の発達",
    ],
    enEvolutionEvents: ["Evolution of glucosinolate-based defense compounds (shared across Brassicales)", "Development of pollinator attraction through numerous long stamens"],
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
    enOverview: "A family of holoparasitic plants distributed in tropical to subtropical regions, comprising about 17 genera and 44 species. They lack chlorophyll and parasitize the roots of host plants. In Japan, Balanophora japonica and related species occur in Kyushu, Shikoku, and Okinawa.",
    characteristics: [
      "葉緑素をもたない全寄生植物で、光合成能力なし",
      "花序は棒状〜球状の肉質塊状、赤〜橙色",
      "花は極めて退化・縮小",
      "宿主の根に接続する特殊な吸根（ハウストリウム）をもつ",
    ],
    enCharacteristics: ["Holoparasitic plants lacking chlorophyll with no photosynthetic capacity", "Inflorescence is a fleshy, club-shaped to globular mass, red to orange", "Flowers are extremely reduced and simplified", "Possess specialized haustoria connecting to host roots"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > ツチトリモチ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Santalales > Balanophoraceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万〜6000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70–60 million years ago)",
    representativeGenera: [
      "ツチトリモチ属（Balanophora）",
      "ヘルシア属（Hachettea）",
    ],
    evolutionEvents: [
      "光合成能力の完全喪失と全寄生性への移行",
      "花器官の極端な退化と縮小",
      "APG IVでビャクダン目に再配置された分類学的転換",
    ],
    enEvolutionEvents: ["Complete loss of photosynthetic ability and transition to holoparasitism", "Extreme reduction and simplification of floral organs", "Taxonomic reclassification into Santalales under APG IV"],
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
    enOverview: "A family of woody plants widely distributed in tropical regions (partially split and reorganized under APG IV), comprising about 30 genera and 180 species. Many are hemiparasitic or holoparasitic woody plants. In Japan, one species of Olax occurs in the Ryukyu Islands.",
    characteristics: [
      "多くが宿主根に寄生する半寄生〜全寄生性",
      "葉は互生で単葉、革質",
      "花は小さく3〜5数性",
      "果実は核果",
    ],
    enCharacteristics: ["Many species are hemiparasitic to holoparasitic on host roots", "Leaves are alternate, simple, and coriaceous", "Flowers are small, 3- to 5-merous", "Fruit is a drupe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > オラクス科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Santalales > Olacaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80 million years ago)",
    representativeGenera: [
      "オラクス属（Olax）",
      "エクサカラ属（Ximenia）",
    ],
    evolutionEvents: [
      "ビャクダン目の根寄生性系統としての分岐",
      "APG IVによる分類再編（旧広義オラクス科の分割）",
    ],
    enEvolutionEvents: ["Divergence as a root-parasitic lineage within Santalales", "Taxonomic reorganization under APG IV (splitting of the former broadly circumscribed Olacaceae)"],
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
    enOverview: "A small family of woody plants distributed in the Old World tropics (Africa, Asia, Australia), comprising about 10 genera and 30 species. Many are root-parasitic. No native species have been confirmed in Japan, though related species may occur in the Nansei Islands.",
    characteristics: [
      "常緑低木〜高木、根寄生性",
      "葉は単葉で互生",
      "花は小さく4〜5数性",
      "果実は核果",
    ],
    enCharacteristics: ["Evergreen shrubs to trees, root-parasitic", "Leaves are simple and alternate", "Flowers are small, 4- to 5-merous", "Fruit is a drupe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > オピリア科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Santalales > Opiliaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約7500万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 75 million years ago)",
    representativeGenera: [
      "オピリア属（Opilia）",
      "チャウノキア属（Champereia）",
    ],
    evolutionEvents: [
      "ビャクダン目内での根寄生性系統として分岐",
      "旧熱帯への分散と各地域での種分化",
    ],
    enEvolutionEvents: ["Divergence as a root-parasitic lineage within Santalales", "Dispersal across the Old World tropics with regional speciation"],
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
    enOverview: "A family of hemiparasitic to holoparasitic plants distributed from tropical to temperate regions worldwide (broadly circumscribed under APG IV to include parts of former Viscaceae and Balanophoraceae). Comprising about 44 genera and 990 species, the aromatic heartwood of sandalwood (Santalum album) is highly valued. In Japan, the family includes relatives of Pedicularis and Thesium.",
    characteristics: [
      "多くが根寄生または茎寄生の半寄生植物",
      "葉は単葉で互生または対生（退化する種もある）",
      "花は小さく3〜5数性",
      "果実は核果・液果",
    ],
    enCharacteristics: ["Most are hemiparasitic, parasitizing roots or stems", "Leaves are simple, alternate or opposite (reduced in some species)", "Flowers are small, 3- to 5-merous", "Fruit is a drupe or berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > ビャクダン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Santalales > Santalaceae",
    divergenceEra: "白亜紀後期（約8500万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 85 million years ago)",
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
    enEvolutionEvents: ["Evolution of root parasitism and establishment of host dependency", "Evolution of aromatic heartwood in sandalwood (S. album) and its human utilization", "Major expansion of the family through taxonomic reorganization under APG IV"],
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
    enOverview: "A family of stem-parasitic hemiparasites distributed from tropical to temperate regions worldwide, comprising about 75 genera and 950 species. They parasitize stems and trunks of host plants. In Japan, several species including Taxillus and Loranthus are native, forming conspicuous green clumps on host branches in winter deciduous forests.",
    characteristics: [
      "宿主植物の茎・枝に寄生する常緑半寄生植物",
      "葉は対生で革質、光合成能力を保持（半寄生）",
      "花は3〜6数性で小さい",
      "果実は液果で粘液質、鳥による種子散布",
    ],
    enCharacteristics: ["Evergreen hemiparasites parasitizing stems and branches of host plants", "Leaves are opposite and coriaceous, retaining photosynthetic ability (hemiparasitic)", "Flowers are small, 3- to 6-merous", "Fruit is a viscid berry, dispersed by birds"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ビャクダン目 > ヤドリギ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Santalales > Loranthaceae",
    divergenceEra: "白亜紀後期（約8500万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 85 million years ago)",
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
    enEvolutionEvents: ["Acquisition of stem parasitism and development of host tissue penetration mechanisms", "Coevolution of viscid berries with bird-mediated seed dispersal", "Parasitic strategy retaining photosynthetic ability as green hemiparasites"],
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
    enOverview: "A family of shrubs and small trees distributed in arid and saline habitats from the Mediterranean to Central and East Asia, comprising about 4 genera and 78 species. Tamarix chinensis, native to China, has been planted and naturalized in Japan. These are highly salt-tolerant plants.",
    characteristics: [
      "葉は非常に小さく鱗片状、塩腺から余分な塩を排出する",
      "花は小さく4〜5数性、ピンク〜白色の穂状花序",
      "細い羽毛状の小枝が特徴的",
      "塩性地・砂地・河原に適応",
    ],
    enCharacteristics: ["Leaves are very small and scale-like; salt glands excrete excess salt", "Flowers are small and 4- to 5-merous, in pink to white spicate inflorescences", "Slender, feathery branchlets are characteristic", "Adapted to saline soils, sandy areas, and riverbanks"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ギョリュウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Tamaricaceae",
    divergenceEra: "古第三紀〜新第三紀（約4000万年前）",
    enDivergenceEra: "Paleogene to Neogene (ca. 40 million years ago)",
    representativeGenera: [
      "ギョリュウ属（Tamarix）",
      "ミリカリア属（Myricaria）",
    ],
    evolutionEvents: [
      "塩腺による塩類排出機構の進化（耐塩性の獲得）",
      "乾燥・塩性土壌への特殊適応",
    ],
    enEvolutionEvents: ["Evolution of salt glands for salt excretion (acquisition of salt tolerance)", "Specialized adaptation to arid and saline soils"],
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
    enOverview: "A family of herbs and shrubs widely distributed along coasts, salt marshes, and arid regions worldwide, comprising about 30 genera and 800 species. In Japan, Limonium tetragonum and related species grow natively in coastal salt marshes. Statice (Limonium) is widely used as a cut flower.",
    characteristics: [
      "葉は根元から叢生（ロゼット状）することが多い",
      "花は5数性で、萼は膜質で残存する（かくれ花弁様）",
      "花序は穂状・散房状で、乾燥しても形を保つ",
      "塩腺をもち、過剰な塩を葉から排出する種が多い",
    ],
    enCharacteristics: ["Leaves often form basal rosettes", "Flowers are pentamerous; calyx is membranous and persistent (petal-like)", "Inflorescences are spicate or corymbose, retaining shape when dried", "Many species have salt glands that excrete excess salt from leaves"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > イソマツ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Plumbaginaceae",
    divergenceEra: "古第三紀〜新第三紀（約4000万〜3000万年前）",
    enDivergenceEra: "Paleogene to Neogene (ca. 40–30 million years ago)",
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
    enEvolutionEvents: ["Evolution of salt gland excretion mechanism and adaptation to coastal saline environments", "Evolution of inflorescences that retain color and shape when dried (everlasting flower trait)", "Coastline distribution and inter-island speciation"],
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
    enOverview: "A small family of carnivorous plants with about 200 species worldwide. They capture insects using sticky glandular hairs and trapping leaves, adapted to nitrogen-poor wetland environments. In Japan, Drosera rotundifolia, D. spathulata, and D. anglica are native.",
    characteristics: [
      "腺毛（粘液を分泌する毛）で昆虫を捕獲・消化する",
      "葉は互生または根生し、丸みを帯びた形が多い",
      "花は5数性で白色〜淡紅色、総状または集散花序",
      "果実は蒴果（さくか）で多数の小さな種子を含む",
    ],
    enCharacteristics: ["Capture and digest insects using glandular hairs (trichomes secreting mucilage)", "Leaves are alternate or basal, often rounded in shape", "Flowers are pentamerous, white to pale pink, in racemose or cymose inflorescences", "Fruit is a capsule containing numerous small seeds"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > モウセンゴケ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Droseraceae",
    divergenceEra: "白亜紀後期（約9000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 90 million years ago)",
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
    enEvolutionEvents: ["Acquisition of carnivory (insect capture via sticky glandular hairs)", "Adaptation to nutrient-poor wetland environments", "Specialization of Venus flytrap (Dionaea) with snap-trap mechanism"],
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
    enOverview: "A family of carnivorous plants centered in tropical Asia, comprising about 170 species in a single genus (Nepenthes). Tubular pitcher traps (pitfall traps) develop at leaf tips, dissolving and absorbing insects with digestive fluids. In Japan, escaped and cultivated specimens occur in Okinawa and Ogasawara.",
    characteristics: [
      "葉の先端が変形した壺状の捕虫袋（ネペンテス壺）をもつ",
      "捕虫袋の内部には消化液が分泌される",
      "雌雄異株で、花は小さく花弁がない",
      "つる性木本または半木本で熱帯林に生育",
    ],
    enCharacteristics: ["Possess pitcher-shaped traps (Nepenthes pitchers) modified from leaf tips", "Digestive fluids are secreted inside the pitchers", "Dioecious with small, apetalous flowers", "Climbing woody or semi-woody plants growing in tropical forests"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ウツボカズラ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Nepenthaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "ウツボカズラ属（Nepenthes）",
    ],
    evolutionEvents: [
      "葉先端が変形した落とし穴型捕虫袋の独自進化",
      "消化酵素・細菌共生による消化機構の確立",
      "熱帯雨林の貧栄養土壌への適応放散",
    ],
    enEvolutionEvents: ["Unique evolution of pitfall-type pitcher traps modified from leaf tips", "Establishment of digestive mechanisms through digestive enzymes and bacterial symbiosis", "Adaptive radiation into nutrient-poor soils of tropical rainforests"],
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
    enOverview: "A monogeneric family of woody lianas distributed at forest margins in tropical Asia and Africa, comprising about 20 species in Ancistrocladus. They cling to other plants using hook-shaped branches and are known for distinctive secondary metabolites including naphthalene derivatives. Not native to Japan.",
    characteristics: [
      "枝先がかぎ爪状に変形し、他植物に絡みつく",
      "葉は単葉・互生、腺点をもつことがある",
      "花は5数性で小さく、白色〜淡紅色",
      "果実は翼をもつ堅果で風散布される",
    ],
    enCharacteristics: ["Branch tips are modified into hooks for climbing on other plants", "Leaves are simple and alternate, sometimes with glandular dots", "Flowers are small, pentamerous, white to pale pink", "Fruit is a winged nut, wind-dispersed"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > アンシストロクラダス科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Ancistrocladaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "アンシストロクラダス属（Ancistrocladus）",
    ],
    evolutionEvents: [
      "かぎ爪状枝による他感的攀縁形質の獲得",
      "ナフタレン系二次代謝産物（アンシストロクラジン類）の進化",
    ],
    enEvolutionEvents: ["Acquisition of hook-shaped branch climbing habit", "Evolution of naphthalene-based secondary metabolites (ancistrocladines)"],
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
    enOverview: "An expanded family under APG IV incorporating Chenopodiaceae, comprising about 2,500 species. It includes food plants such as spinach, chard, and sugar beet, as well as common weeds like Amaranthus and Chenopodium. Many lineages are well-adapted to saline and arid environments, with multiple independent acquisitions of C4 photosynthesis.",
    characteristics: [
      "花は小さく花弁がなく（または退化）、苞片・萼片が目立つ",
      "果実は胞果（ほうか）または瘦果で、苞に包まれることが多い",
      "多くの種がC4光合成または塩生植物の生理を示す",
      "茎・葉に結晶体（シュウ酸カルシウム）をもつ種が多い",
    ],
    enCharacteristics: ["Flowers are small, apetalous (or with reduced petals); bracts and sepals are conspicuous", "Fruit is a utricle or achene, often enclosed in bracts", "Many species exhibit C4 photosynthesis or halophytic physiology", "Many species contain calcium oxalate crystals in stems and leaves"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ヒユ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Amaranthaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万〜6500万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80–65 million years ago)",
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
    enEvolutionEvents: ["Major radiation within Caryophyllales through merger with Chenopodiaceae", "Multiple independent origins of C4 photosynthesis for adaptation to arid and hot environments", "Development of salt glands and salt bladder cells for adaptation to saline environments"],
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
    enOverview: "A family of about 1,800 species centered in southern Africa, with many species having succulent leaves. In Japan, Tetragonia tetragonioides (New Zealand spinach) grows natively on coasts, and Carpobrotus, Lampranthus, and others are cultivated or naturalized. The family is also known for 'living stones' (Lithops) adapted to stony, arid environments.",
    characteristics: [
      "葉は多肉質で光沢をもつことが多い",
      "花弁状の多数の萼片または雄しべの変形花糸が目立つ",
      "果実は液果または蒴果で、湿潤時に開裂する水散布型も多い",
      "CAM光合成を行う種が多い",
    ],
    enCharacteristics: ["Leaves are mostly succulent and often glossy", "Numerous petal-like sepals or modified staminodial filaments are conspicuous", "Fruit is a berry or capsule; many have hygrochastic capsules that open when wet (rain-dispersed)", "Many species perform CAM photosynthesis"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ツルナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Aizoaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
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
    enEvolutionEvents: ["Acquisition of CAM photosynthesis for adaptation to extremely arid environments", "Development of water storage through leaf succulence", "Explosive diversification in the Karoo region of southern Africa"],
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
    enOverview: "A family of about 30 species distributed mainly in tropical and subtropical America. In Japan, Phytolacca americana (North American origin) is naturalized and grows vigorously in suburban areas. The berries contain red-purple pigments (betacyanins) and have been used for dyeing and folk medicine.",
    characteristics: [
      "大型の多年草または木本",
      "葉は単葉・互生で大きい",
      "花は小さく花弁がなく、萼片5枚が花弁状",
      "果実は液果で鮮やかな赤紫色に熟す",
      "根・葉・果実に有毒成分（フィトラッカトキシン）を含む",
    ],
    enCharacteristics: ["Large perennial herbs or woody plants", "Leaves are simple, alternate, and large", "Flowers are small and apetalous, with 5 petal-like sepals", "Fruit is a berry, ripening to vivid red-purple", "Roots, leaves, and fruits contain toxic compounds (phytolaccatoxin)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ヤマゴボウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Phytolaccaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "ヤマゴボウ属（Phytolacca）",
      "ピソニア属（Pisonia）",
      "リヴィナ属（Rivina）",
    ],
    evolutionEvents: [
      "ベタレイン色素（ベタシアニン・ベタキサンチン）の進化",
      "液果による鳥類散布への適応",
    ],
    enEvolutionEvents: ["Evolution of betalain pigments (betacyanins and betaxanthins)", "Adaptation to bird-mediated seed dispersal via fleshy berries"],
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
    enOverview: "A family of about 400 species distributed mainly in tropical and subtropical regions. In Japan, Mirabilis jalapa (four o'clock flower, from South America) is widely naturalized and cultivated. The family is characterized by the absence of petals, with petal-like sepals appearing as the 'flower.' Bougainvillea is a famous ornamental in this family.",
    characteristics: [
      "花弁がなく、花弁状に発達した萼が目立つ",
      "苞が花弁状に変形することがある（ブーゲンビレアなど）",
      "果実は萼筒に包まれた瘦果",
      "葉は単葉・対生または互生",
    ],
    enCharacteristics: ["Petals absent; conspicuous petal-like sepals serve as the perianth", "Bracts may become petal-like (e.g., Bougainvillea)", "Fruit is an achene enclosed in the persistent calyx tube", "Leaves are simple, opposite or alternate"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > オシロイバナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Nyctaginaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
    representativeGenera: [
      "オシロイバナ属（Mirabilis）",
      "ブーゲンビレア属（Bougainvillea）",
      "ピソニア属（Pisonia）",
    ],
    evolutionEvents: [
      "花弁の消失と萼の花弁状化による花の形態転換",
      "苞の花弁状化（ブーゲンビレア）による送粉者誘引の革新",
    ],
    enEvolutionEvents: ["Morphological transformation of flowers through loss of petals and petaloid sepals", "Innovation in pollinator attraction through petaloid bracts (Bougainvillea)"],
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
    enOverview: "A small family of about 120 species distributed in arid and sandy habitats in tropical and subtropical regions. In Japan, Mollugo (naturalized from Asia) grows along roadsides and in fields. Most are small herbs with inconspicuous flowers.",
    characteristics: [
      "小型の草本で茎は匍匐または直立",
      "葉は単葉・輪生状または対生",
      "花弁がなく、萼片5枚が花弁状",
      "果実は蒴果で多数の種子を含む",
    ],
    enCharacteristics: ["Small herbs with prostrate or erect stems", "Leaves are simple, whorled or opposite", "Petals absent; 5 sepals are petal-like", "Fruit is a capsule containing numerous seeds"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ザクロソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Molluginaceae",
    divergenceEra: "古第三紀（約4500万年前）",
    enDivergenceEra: "Paleogene (ca. 45 million years ago)",
    representativeGenera: [
      "ザクロソウ属（Mollugo）",
      "グリナス属（Glinus）",
    ],
    evolutionEvents: [
      "貧栄養・乾燥砂地環境への適応",
      "花弁の消失と小型化による花の簡略化",
    ],
    enEvolutionEvents: ["Adaptation to nutrient-poor, dry sandy environments", "Simplification of flowers through petal loss and reduction in size"],
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
    enOverview: "A small family of climbing succulent herbs of tropical American origin, comprising about 20 species. In Japan, Basella alba (Malabar spinach, of Asian origin) is widely cultivated as a vegetable and naturalized in warm areas. The leaves are succulent and mucilaginous, and are edible.",
    characteristics: [
      "つる性の多肉草本",
      "葉は単葉・互生で多肉質・光沢がある",
      "花は小さく萼片5枚、花弁はない",
      "果実は多肉質の萼に包まれた1種子果",
    ],
    enCharacteristics: ["Climbing succulent herbs", "Leaves are simple, alternate, succulent, and glossy", "Flowers are small with 5 sepals and no petals", "Fruit is a single-seeded fruit enclosed in fleshy persistent sepals"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > ツルムラサキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Basellaceae",
    divergenceEra: "古第三紀（約4500万年前）",
    enDivergenceEra: "Paleogene (ca. 45 million years ago)",
    representativeGenera: [
      "ツルムラサキ属（Basella）",
      "アンレデラ属（Anredera）",
      "ウルバニア属（Ullucus）",
    ],
    evolutionEvents: [
      "多肉質茎・葉への変化による水分貯蔵能の獲得",
      "つる性習性による林縁攀縁生活への適応",
    ],
    enEvolutionEvents: ["Acquisition of water storage capacity through succulent stems and leaves", "Adaptation to forest margin climbing habit through twining growth"],
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
    enOverview: "A small family distributed from temperate to tropical regions worldwide. Under APG IV, many former members were transferred to Montiaceae and others, but Portulaca remains in this family. In Japan, Portulaca oleracea (purslane) grows widely along roadsides and in fields, used as food and folk medicine.",
    characteristics: [
      "多肉質の草本（C4光合成またはCAM）",
      "葉は互生〜対生で多肉質",
      "花弁は2枚（萼片2枚との区別が必要）",
      "果実は蓋裂する蒴果",
      "種子には仮種皮（アリルスト）をもつものがある",
    ],
    enCharacteristics: ["Succulent herbs (C4 or CAM photosynthesis)", "Leaves are alternate to opposite, succulent", "Petals are 2 (distinguished from 2 sepals)", "Fruit is a circumscissile capsule (pyxidium)", "Some seeds have an aril (strophiole)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > スベリヒユ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Portulacaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "スベリヒユ属（Portulaca）",
    ],
    evolutionEvents: [
      "CAM光合成の獲得による極度の乾燥・高温環境への適応",
      "2枚花弁という独特の花形の確立",
    ],
    enEvolutionEvents: ["Acquisition of CAM photosynthesis for adaptation to extremely arid and hot environments", "Establishment of a distinctive floral form with only 2 petals"],
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
    enOverview: "A succulent plant family native to the New World, comprising about 1,750 species. They possess specialized organs called areoles and have leaves modified into spines. Adapted to desert environments through CAM photosynthesis, storing water in succulent stems. No native species occur in Japan; widely cultivated as ornamentals.",
    characteristics: [
      "棘座（アレオール）という特殊な器官から棘・毛が生える",
      "葉は棘に退化し、茎が光合成を担う",
      "茎は多肉質で水を貯蔵する",
      "CAM光合成で夜間にCO2を固定",
      "花は両性花で多数の花弁・雄しべをもつ",
    ],
    enCharacteristics: ["Spines and hairs arise from specialized organs called areoles", "Leaves are reduced to spines; stems perform photosynthesis", "Stems are succulent and store water", "CAM photosynthesis fixes CO2 at night", "Flowers are bisexual with numerous petals and stamens"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナデシコ目 > サボテン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Caryophyllales > Cactaceae",
    divergenceEra: "古第三紀（約3500万年前）",
    enDivergenceEra: "Paleogene (ca. 35 million years ago)",
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
    enEvolutionEvents: ["Unique evolution of areoles", "Reduction of leaves to spines and conversion of stems into photosynthetic organs", "Advanced CAM photosynthesis for desert adaptation"],
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
    enOverview: "A family of about 265 species distributed mainly in arid and rocky habitats in the Americas. Many species have sharp, hook-like or stinging hairs that attach to clothing and animals for seed dispersal. Not native to Japan; some are cultivated as ornamentals.",
    characteristics: [
      "茎・葉に刺状またはかぎ爪状の粗毛が密生する",
      "花弁は5枚で白色〜黄色、雄しべは多数",
      "葉は単葉・互生または対生",
      "果実は蒴果で多数の種子を含む",
    ],
    enCharacteristics: ["Stems and leaves are densely covered with stinging or hook-shaped barbed hairs", "Petals are 5, white to yellow, with numerous stamens", "Leaves are simple, alternate or opposite", "Fruit is a capsule containing numerous seeds"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ウリ目 > ロアサ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Cucurbitales > Loasaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "ロアサ属（Loasa）",
      "メンツェリア属（Mentzelia）",
      "ブラシア属（Blumenbachia）",
    ],
    evolutionEvents: [
      "かぎ爪状粗毛による動物付着散布への適応",
      "乾燥岩礫地への特殊化",
    ],
    enEvolutionEvents: ["Adaptation to epizoochory (animal-mediated dispersal) via hooked barbed hairs", "Specialization to dry, rocky habitats"],
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
    enOverview: "A family distributed mainly in tropical Asia and Africa, comprising about 1,000 species of Impatiens and the small monotypic genus Hydrocera. In Japan, Impatiens textorii, I. noli-tangere, and I. hypophylla are native. The family is famous for explosive seed dispersal when fruits mature.",
    characteristics: [
      "花は左右相称で、萼片の1枚が距（きょ）に変形する",
      "果実は成熟時に急激に裂開して種子を弾き飛ばす",
      "茎は多汁質・半透明で折れやすい",
      "葉は単葉で鋸歯がある",
    ],
    enCharacteristics: ["Flowers are zygomorphic; one sepal is modified into a spur", "Fruits dehisce explosively at maturity, catapulting seeds", "Stems are succulent, semi-translucent, and fragile", "Leaves are simple with serrate margins"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ツリフネソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Balsaminaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "ツリフネソウ属（Impatiens）",
      "ヒドロケラ属（Hydrocera）",
    ],
    evolutionEvents: [
      "萼片の距への変形による蜜誘導機構の発達",
      "弾性果皮による爆発的種子散布機構の獲得",
      "熱帯山岳環境での急速な種分化",
    ],
    enEvolutionEvents: ["Development of nectar-guiding mechanism through sepal modification into a spur", "Acquisition of explosive seed dispersal through elastic pericarp", "Rapid speciation in tropical montane environments"],
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
    enOverview: "A family of about 400 species distributed mainly in western North America. In Japan, Polemonium grows natively in Hokkaido and alpine zones of Honshu, and is known as a rare species. The family includes ornamentally valued plants such as Phlox and Jacob's ladder.",
    characteristics: [
      "花冠は合弁で筒状〜漏斗状、5裂する",
      "雄しべ5本が花冠筒に付着する",
      "葉は羽状複葉または単葉で互生",
      "果実は蒴果で3室",
    ],
    enCharacteristics: ["Corolla is sympetalous, tubular to funnelform, 5-lobed", "Five stamens are attached to the corolla tube", "Leaves are pinnately compound or simple, alternate", "Fruit is a 3-locular capsule"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ハナシノブ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Polemoniaceae",
    divergenceEra: "古第三紀（約4000万年前）",
    enDivergenceEra: "Paleogene (ca. 40 million years ago)",
    representativeGenera: [
      "ハナシノブ属（Polemonium）",
      "フロックス属（Phlox）",
      "ギリア属（Gilia）",
    ],
    evolutionEvents: [
      "合弁花冠の筒状化による特定送粉者（蝶・蜂・ハチドリ）への適応",
      "北米西部乾燥地での爆発的多様化",
    ],
    enEvolutionEvents: ["Adaptation to specific pollinators (butterflies, bees, hummingbirds) through tubular sympetalous corolla", "Explosive diversification in arid western North America"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハナシノブ科" },
    ],
    japaneseSpeciesCount: 63,
    review: { status: "ai_generated" },
  },

  // ── サガリバナ科 ──────────────────────────────────────────
  {
    id: "lecythidaceae",
    jaName: "サガリバナ科",
    enName: "Brazil nut family",
    scientificName: "Lecythidaceae A.Rich.",
    order: "ツツジ目",
    overview:
      "熱帯アメリカを中心に分布する大型木本の科で、約350種が知られる。ブラジルナッツの採れるBertholletia excelsa、パラダイスナッツなどが属する。日本への自生はない。花は大きく美しく、蜂による送粉に特化した複雑な構造をもつ。",
    enOverview: "A family of large tropical trees centered in the Americas, comprising about 350 species. It includes the Brazil nut tree (Bertholletia excelsa) and paradise nut. Not native to Japan. Flowers are large and showy, with complex structures specialized for bee pollination.",
    characteristics: [
      "大型の熱帯常緑高木",
      "花は大型で両性、萼片・花弁は4〜6枚",
      "雄しべは多数で片側に偏り、フード状の構造をもつ",
      "果実は大型の木質蒴果または液果",
    ],
    enCharacteristics: ["Large evergreen tropical trees", "Flowers are large and bisexual with 4–6 sepals and petals", "Stamens are numerous, asymmetrically arranged with a hood-like structure (ligule)", "Fruit is a large woody capsule (pyxidium) or berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > サガリバナ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Lecythidaceae",
    divergenceEra: "白亜紀後期〜古第三紀（約8000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 80 million years ago)",
    representativeGenera: [
      "レキティス属（Lecythis）",
      "ベルトレティア属（Bertholletia）",
      "ガスタビア属（Gustavia）",
    ],
    evolutionEvents: [
      "雄しべのフード状構造による蜂媒授粉の特殊化",
      "大型木質果実による哺乳類散布への適応",
    ],
    enEvolutionEvents: ["Specialization for bee pollination through hood-like staminal structures", "Adaptation to mammal-mediated dispersal through large woody fruits"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サガリバナ科" },
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
    enOverview: "A family of woody plants distributed in tropical and subtropical regions, comprising about 1,100 species. Characterized by containing latex; some species produce chicle (raw material for chewing gum) and gutta-percha. In Japan, Planchonella and related species are native to Okinawa and Ogasawara.",
    characteristics: [
      "切断すると乳白色の乳液が出る",
      "葉は単葉・互生で革質・光沢がある",
      "花は小さく合弁花冠をもち、萼・花弁・雄しべは同数",
      "果実は液果で大型になることが多く、甘味がある",
    ],
    enCharacteristics: ["Exudes milky white latex when cut", "Leaves are simple, alternate, coriaceous, and glossy", "Flowers are small with sympetalous corolla; sepals, petals, and stamens are equal in number", "Fruit is a berry, often large and sweet"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > アカテツ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Sapotaceae",
    divergenceEra: "古第三紀（約6000万年前）",
    enDivergenceEra: "Paleogene (ca. 60 million years ago)",
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
    enEvolutionEvents: ["Establishment of latex production mechanism", "Adaptation to dispersal by large mammals and birds through large, sweet fruits"],
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
    enOverview: "A family of woody plants distributed in tropical to subtropical regions, comprising about 770 species. In Japan, Diospyros kaki (persimmon), D. lotus, and D. maritima are native or cultivated; persimmon is an important fruit tree. Ebony, a prized timber for fine furniture and musical instruments, is obtained from Diospyros species.",
    characteristics: [
      "葉は単葉・互生で全縁、革質",
      "花は雌雄異株（または同株）、合弁花冠で壺状〜鐘状",
      "萼・花冠は3〜7裂で宿存性",
      "果実は液果（ベリー型）でタンニンを多く含む（渋柿）",
    ],
    enCharacteristics: ["Leaves are simple, alternate, entire, and coriaceous", "Flowers are dioecious (or monoecious), with urceolate to campanulate sympetalous corolla", "Calyx and corolla are 3- to 7-lobed and persistent", "Fruit is a berry, rich in tannins (astringent persimmon)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > カキノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Ebenaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
    representativeGenera: [
      "カキノキ属（Diospyros）",
      "ロイアルコア属（Royena）",
    ],
    evolutionEvents: [
      "タンニン蓄積による果実防衛機構の発達と成熟後の甘化",
      "熱帯高木としての心材暗色化（黒檀）の進化",
    ],
    enEvolutionEvents: ["Development of fruit defense through tannin accumulation, with sweetening upon maturity", "Evolution of dark heartwood (ebony) in tropical trees"],
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
    enOverview: "An expanded family under APG IV incorporating Myrsinaceae and parts of other families. It includes diverse herbs such as Primula, Lysimachia, and Ardisia. In Japan, many species are native, including Primula sieboldii (endangered) and numerous others.",
    characteristics: [
      "花冠は合弁で5裂、雄しべは花冠裂片と対生する（対生雄しべが特徴）",
      "葉は互生・対生・輪生、根生葉をもつ種も多い",
      "果実は蒴果で中軸胎座または特立中央胎座",
      "乳液をもつ種（ヤブコウジ科旧来種）がある",
    ],
    enCharacteristics: ["Corolla is sympetalous and 5-lobed; stamens are opposite to corolla lobes (obdiplostemony is characteristic)", "Leaves are alternate, opposite, or whorled; many species have basal leaves", "Fruit is a capsule with axile or free-central placentation", "Some species (former Myrsinaceae) contain latex"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > サクラソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Primulaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
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
    enEvolutionEvents: ["Establishment of the distinctive arrangement of stamens opposite to corolla lobes", "Diverse adaptive radiation into alpine and wetland environments", "Enlargement of the family through APG IV merger with Myrsinaceae, Theophrastaceae, and others"],
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
    enOverview: "A family of woody plants distributed in tropical to temperate regions of Asia and the Americas, comprising about 320 species in a single genus (Symplocos). In Japan, Symplocos myrtacea, S. sawafutagi, S. lucida, and S. tanakana are native. The family is known for hyperaccumulating aluminum in leaves.",
    characteristics: [
      "葉は単葉・互生で鋸歯があることが多い",
      "花は小さく白色〜黄色、5数性で雄しべが多数",
      "雄しべは多数で目立つ",
      "果実は核果または液果",
      "葉にアルミニウムを高濃度で蓄積する（媒染植物）",
    ],
    enCharacteristics: ["Leaves are simple, alternate, often serrate", "Flowers are small, white to yellow, pentamerous with numerous stamens", "Stamens are numerous and conspicuous", "Fruit is a drupe or berry", "Leaves hyperaccumulate aluminum (used historically as mordant plants)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ハイノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Symplocaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "ハイノキ属（Symplocos）",
    ],
    evolutionEvents: [
      "アルミニウム過蓄積機構の独自進化",
      "アジアと新大陸の両方での分布（ゴンドワナ的分布または長距離分散）",
    ],
    enEvolutionEvents: ["Unique evolution of aluminum hyperaccumulation mechanism", "Distribution in both Asia and the Americas (Gondwanan distribution or long-distance dispersal)"],
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
    enOverview: "A small family of about 15 species distributed in alpine and arctic regions of the Northern Hemisphere. In Japan, Diapensia, Shortia, and Schizocodon grow on rocky slopes and grasslands of alpine zones. Many species grow as prostrate mats in harsh environments.",
    characteristics: [
      "常緑の矮小草本または低木",
      "高山・岩場・北極圏ツンドラに適応",
      "花は5数性で白色〜淡紅色",
      "雄しべは5本（稔性）と5本（仮雄しべ）をもつ種がある",
      "果実は蒴果",
    ],
    enCharacteristics: ["Evergreen dwarf herbs or subshrubs", "Adapted to alpine, rocky, and arctic tundra habitats", "Flowers are pentamerous, white to pale pink", "Some species have 5 fertile stamens and 5 staminodes", "Fruit is a capsule"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > イワウメ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Diapensiaceae",
    divergenceEra: "古第三紀（約4500万年前）",
    enDivergenceEra: "Paleogene (ca. 45 million years ago)",
    representativeGenera: [
      "イワウメ属（Diapensia）",
      "イワカガミ属（Shortia）",
      "スキミア属（Galax）",
    ],
    evolutionEvents: [
      "高山・北極圏の厳しい環境への矮小化・匍匐化適応",
      "北半球での隔離分布（北米・ヒマラヤ・日本・北極圏）",
    ],
    enEvolutionEvents: ["Dwarfing and prostrate growth adaptation to harsh alpine and arctic environments", "Disjunct distribution across the Northern Hemisphere (North America, Himalayas, Japan, Arctic)"],
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
    enOverview: "A family of woody plants distributed in East Asia, North America, and the Mediterranean, comprising about 160 species. In Japan, Styrax japonica, S. obassia, Pterostyrax hispida, and P. corymbosa are native, with beautiful pendant white flowers. The family is also a source of benzoin resin.",
    characteristics: [
      "落葉または常緑の高木〜低木",
      "花は白色で下垂する、5〜7数性",
      "花冠は深裂して反り返ることが多い",
      "果実は核果状で星状毛に覆われることが多い",
      "サポニンを含み、果実は有毒（エゴノキ名の由来）",
    ],
    enCharacteristics: ["Deciduous or evergreen trees to shrubs", "Flowers are white and pendulous, 5- to 7-merous", "Corolla is often deeply lobed and recurved", "Fruit is drupe-like, often covered with stellate hairs", "Contains saponins; fruits are toxic (origin of the Japanese name 'Egonoki')"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > エゴノキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Styracaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "エゴノキ属（Styrax）",
      "アサガラ属（Pterostyrax）",
      "オオバアサガラ属（Melliodendron）",
    ],
    evolutionEvents: [
      "サポニン（サポニン系毒）の果実への蓄積による被食防衛",
      "東アジア・北米・地中海の隔離分布（白亜紀以降の大陸移動反映）",
    ],
    enEvolutionEvents: ["Anti-herbivory defense through saponin accumulation in fruits", "Disjunct distribution across East Asia, North America, and the Mediterranean (reflecting post-Cretaceous continental drift)"],
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
    enOverview: "A family of carnivorous plants distributed in North and South America, comprising about 30 species in 3 genera: Sarracenia, Darlingtonia, and Heliamphora. They capture and digest insects using tubular pitcher leaves (pitfall traps). Not native to Japan; cultivated as ornamentals.",
    characteristics: [
      "葉が管状・壺状に変形した落とし穴型捕虫器をもつ",
      "捕虫器内部は消化腺・下向き毛・蝋質で昆虫を閉じ込める",
      "花は大型で美しく、倒立した傘状の雌しべが特徴",
      "湿地・泥炭地の窒素貧栄養環境に生育",
    ],
    enCharacteristics: ["Possess pitfall traps from leaves modified into tubular or pitcher-shaped structures", "Interior of traps has digestive glands, downward-pointing hairs, and waxy surfaces to trap insects", "Flowers are large and showy, with a distinctive inverted umbrella-shaped pistil", "Grow in nitrogen-poor wetland and peatland environments"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > サラセニア科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Sarraceniaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "サラセニア属（Sarracenia）",
      "ダーリングトニア属（Darlingtonia）",
      "ヘリアンフォラ属（Heliamphora）",
    ],
    evolutionEvents: [
      "葉の管状捕虫器への変形（収斂進化、ウツボカズラ科とは独立）",
      "窒素貧栄養の泥炭湿地への特化",
    ],
    enEvolutionEvents: ["Modification of leaves into tubular pitcher traps (convergent evolution, independent of Nepenthaceae)", "Specialization to nitrogen-poor peat bogs"],
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
    enOverview: "A family of woody climbing plants centered in East Asia, comprising about 360 species. In Japan, Actinidia polygama (silver vine), A. arguta (hardy kiwi), and A. kolomikta are native; A. arguta is closely related to kiwifruit. Kiwifruit (Actinidia deliciosa) is the most well-known fruit of this family.",
    characteristics: [
      "つる性の落葉または常緑木本",
      "葉は単葉・互生、鋸歯がある",
      "花は白色〜淡黄色で5数性、雄しべ多数",
      "果実は液果（キウイ型）で多数の種子を含む",
      "雌雄異株のものが多い",
    ],
    enCharacteristics: ["Climbing deciduous or evergreen woody plants", "Leaves are simple, alternate, with serrate margins", "Flowers are white to pale yellow, pentamerous, with numerous stamens", "Fruit is a berry (kiwi-type) containing numerous seeds", "Many species are dioecious"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > マタタビ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Actinidiaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
    representativeGenera: [
      "マタタビ属（Actinidia）",
      "サルスベリ属内マタタビ類",
    ],
    evolutionEvents: [
      "つる性木本への進化による林内攀縁生活への適応",
      "ネコ科動物を誘引するマタタビラクトン等の二次代謝産物の進化",
    ],
    enEvolutionEvents: ["Evolution into woody climbers adapted to ascending within forest canopies", "Evolution of secondary metabolites such as actinidine lactones that attract felids"],
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
    enOverview: "A family of woody plants distributed in Asia, the Americas, and Macaronesia, comprising about 75 species in a single genus (Clethra). In Japan, Clethra barbinervis is widespread in montane deciduous forests, bearing pendant white racemes in early summer. Young leaves have historically been eaten as a mountain vegetable.",
    characteristics: [
      "落葉または常緑の高木〜低木",
      "葉は単葉・互生で鋸歯がある",
      "花は白色で5数性、芳香をもつ",
      "雄しべ10本で葯は逆さに開く（孔開）",
      "果実は蒴果",
    ],
    enCharacteristics: ["Deciduous or evergreen trees to shrubs", "Leaves are simple, alternate, with serrate margins", "Flowers are white, pentamerous, and fragrant", "Ten stamens with anthers opening by apical pores (poricidal dehiscence)", "Fruit is a capsule"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > リョウブ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Clethraceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
    representativeGenera: [
      "リョウブ属（Clethra）",
    ],
    evolutionEvents: [
      "アジア・新大陸・マカロネシアの隔離分布（テチス海・大西洋の開裂反映）",
      "葯の孔開方式という独自の花粉放出機構の確立",
    ],
    enEvolutionEvents: ["Disjunct distribution across Asia, the Americas, and Macaronesia (reflecting Tethys Sea and Atlantic Ocean opening)", "Establishment of a distinctive pollen release mechanism through poricidal anther dehiscence"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/リョウブ科" },
    ],
    japaneseSpeciesCount: 4,
    review: { status: "ai_generated" },
  },

  // ── ヤッコソウ科 ──────────────────────────────────────────
  {
    id: "mitrastemonaceae",
    jaName: "ヤッコソウ科",
    enName: "Mitrastemon family",
    scientificName: "Mitrastemonaceae Makino",
    order: "ツツジ目",
    overview:
      "全寄生植物の単型科で、ミトラステモン属2種のみからなる。カシ類やシイ類（ブナ科）の根に寄生し、葉緑素をもたない。日本ではミトラステモン（ミヤマウズラの一種）が四国・九州・沖縄の照葉樹林に生育し、特異な形態で知られる。",
    enOverview: "A monogeneric holoparasitic family comprising only 2 species of Mitrastemon. They parasitize roots of oaks and chinquapins (Fagaceae) and lack chlorophyll. In Japan, Mitrastemon yamamotoi grows in evergreen broad-leaved forests of Shikoku, Kyushu, and Okinawa, known for its distinctive morphology.",
    characteristics: [
      "葉緑素をもたない全寄生植物（宿主はブナ科の根）",
      "茎・葉は退化し、花だけが地上に現れる",
      "花は両性花で花弁・萼が癒合した筒状",
      "雄しべは輪状に癒合し帽子状（ミトラ状）になる",
    ],
    enCharacteristics: ["Holoparasitic plant lacking chlorophyll (host: Fagaceae roots)", "Stems and leaves are vestigial; only flowers emerge above ground", "Flowers are bisexual with fused petals and sepals forming a tube", "Stamens are fused into a ring forming a cap-like (mitrate) structure"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ヤッコソウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Mitrastemonaceae",
    divergenceEra: "古第三紀〜新第三紀（約3000万年前）",
    enDivergenceEra: "Paleogene to Neogene (ca. 30 million years ago)",
    representativeGenera: [
      "ミトラステモン属（Mitrastemon）",
    ],
    evolutionEvents: [
      "全寄生性の獲得（光合成能の完全消失）",
      "茎・葉の退化と地下寄生構造への特化",
      "雄しべの帽子状癒合という独特の送粉形態の進化",
    ],
    enEvolutionEvents: ["Acquisition of holoparasitism (complete loss of photosynthetic ability)", "Reduction of stems and leaves with specialization to subterranean parasitic structures", "Evolution of a unique pollination morphology through cap-like fusion of stamens"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヤッコソウ科" },
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
    enOverview: "A large family under APG IV incorporating former Empetraceae and other groups, comprising about 4,000 species. In Japan, diverse species of Rhododendron (azaleas and rhododendrons), Vaccinium (blueberry, lingonberry), Pieris, and others are native or cultivated. Many species form ericoid mycorrhizae for adaptation to nutrient-poor environments.",
    characteristics: [
      "葉は単葉・互生で全縁または鋸歯、革質のことが多い",
      "花冠は合弁で鐘状〜壺状、5裂",
      "葯は孔（孔開葯）から花粉を放出する",
      "エリコイド菌根を形成する種が多い",
      "果実は液果・核果・蒴果と多様",
    ],
    enCharacteristics: ["Leaves are simple, alternate, entire or serrate, often coriaceous", "Corolla is sympetalous, campanulate to urceolate, 5-lobed", "Anthers release pollen through apical pores (poricidal dehiscence)", "Many species form ericoid mycorrhizae", "Fruit types are diverse: berries, drupes, or capsules"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ツツジ目 > ツツジ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Ericales > Ericaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
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
    enEvolutionEvents: ["Evolution of poricidal anthers (buzz pollination)", "Adaptation to nutrient-poor acidic soils through ericoid mycorrhizal symbiosis", "Large-scale family consolidation and reorganization under APG IV"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツツジ科" },
    ],
    japaneseSpeciesCount: 749,
    review: { status: "ai_generated" },
  },

  // ── クロタキカズラ科 ──────────────────────────────────────────
  {
    id: "icacinaceae",
    jaName: "クロタキカズラ科",
    enName: "Icacina family",
    scientificName: "Icacinaceae Miers",
    order: "アスター類（系統的位置再検討中）",
    overview:
      "熱帯・亜熱帯に分布する木本の科で、APG IVでは系統的位置が確定していない「incertae sedis」として扱われる。日本ではカツラギが沖縄・南西諸島の低地林に自生する。",
    enOverview: "A family of woody plants distributed in tropical and subtropical regions. Under APG IV, it is treated as 'incertae sedis' with uncertain phylogenetic placement. In Japan, Icacinaceae species are native to lowland forests of Okinawa and the Nansei Islands.",
    characteristics: [
      "高木〜低木またはつる性木本",
      "葉は単葉・互生で全縁",
      "花は小さく5数性、花弁は離弁または合弁",
      "果実は核果",
    ],
    enCharacteristics: ["Trees, shrubs, or woody lianas", "Leaves are simple, alternate, and entire", "Flowers are small, pentamerous, with free or fused petals", "Fruit is a drupe"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > アスター類 > 系統的位置未確定（Icacinaceae）",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Asterids > Incertae sedis (Icacinaceae)",
    divergenceEra: "白亜紀後期〜古第三紀（約7000万年前）",
    enDivergenceEra: "Late Cretaceous to Paleogene (ca. 70 million years ago)",
    representativeGenera: [
      "カツラギ属（Apodytes）",
      "イカシナ属（Icacina）",
      "ゴニオデンドロン属（Gonocaryum）",
    ],
    evolutionEvents: [
      "熱帯雨林内での木本つる性への適応",
      "分類学的位置の不安定性（分子系統で複数回の収斂進化が示唆される）",
    ],
    enEvolutionEvents: ["Adaptation to woody liana habit within tropical rainforests", "Taxonomic instability (molecular phylogenetics suggests multiple instances of convergent evolution)"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クロタキカズラ科" },
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
    enOverview: "A monotypic family from China, consisting of a single species, Eucommia ulmoides. It grows wild in central to southwestern China and is widely cultivated in Japan as a source of traditional Chinese medicine. Famous for its distinctive property of producing latex threads when leaves are torn.",
    characteristics: [
      "葉を引き裂くとゴム質の白い糸（グタペルカ）が伸びる",
      "落葉高木で葉は単葉・互生・鋸歯縁",
      "花は花弁がなく雌雄異株、風媒花",
      "果実は翼果（有翼の堅果）で風散布",
    ],
    enCharacteristics: ["Tearing a leaf reveals stretchy white rubber threads (gutta-percha)", "Deciduous tree with simple, alternate, serrate leaves", "Flowers are apetalous, dioecious, and wind-pollinated", "Fruit is a winged samara, wind-dispersed"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ガリア目 > トチュウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Garryales > Eucommiaceae",
    divergenceEra: "白亜紀後期（約9000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 90 million years ago)",
    representativeGenera: [
      "トチュウ属（Eucommia）",
    ],
    evolutionEvents: [
      "グタペルカ（トランスポリイソプレン）の葉への蓄積という独自形質の進化",
      "単型科・単種として白亜紀以降に生き残った「生きた化石」的系統",
    ],
    enEvolutionEvents: ["Evolution of the unique trait of gutta-percha (trans-polyisoprene) accumulation in leaves", "Survival as a monotypic 'living fossil' lineage since the Cretaceous"],
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
    enOverview: "The fourth-largest angiosperm family, with about 13,000 species distributed worldwide, centered in the tropics. It includes many economically and medicinally important plants such as coffee, cinchona (source of quinine for malaria), Gardenia, Rubia, and Paederia. About 60 species are native to Japan.",
    characteristics: [
      "葉は単葉・対生（または輪生）で全縁",
      "葉柄間または葉腋に托葉をもつ（重要な識別点）",
      "花は合弁花冠で4〜5裂、子房下位",
      "果実は液果・核果・蒴果・分果と多様",
    ],
    enCharacteristics: ["Leaves are simple, opposite (or whorled), and entire", "Interpetiolar or axillary stipules are present (key diagnostic feature)", "Corolla is sympetalous, 4- to 5-lobed, with inferior ovary", "Fruit types are diverse: berries, drupes, capsules, or schizocarps"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > リンドウ目 > アカネ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Gentianales > Rubiaceae",
    divergenceEra: "白亜紀後期（約8000万年前）",
    enDivergenceEra: "Late Cretaceous (ca. 80 million years ago)",
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
    enEvolutionEvents: ["Establishment of a stable morphological combination of opposite leaves and stipules", "Diverse evolution of alkaloids (caffeine, quinine, strychnine, etc.)", "Explosive diversification in tropical forests"],
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
    enOverview: "A family of about 1,700 species distributed mainly in temperate and alpine regions worldwide. In Japan, diverse species of Gentiana, Swertia, Halenia, and others are native. The family contains bitter glycosides (gentianin) and has been historically used as a source of bitter stomachic remedies.",
    characteristics: [
      "花冠は合弁で鐘状〜漏斗状、4〜12裂",
      "雄しべは花冠裂片と互生し、裂片と同数",
      "葉は単葉・対生（まれに互生）で全縁",
      "果実は蒴果で多数の微細種子を含む",
      "苦味配糖体（ゲンチオピクロシド等）を含む",
    ],
    enCharacteristics: ["Corolla is sympetalous, campanulate to funnelform, 4- to 12-lobed", "Stamens alternate with corolla lobes and are equal in number", "Leaves are simple, opposite (rarely alternate), and entire", "Fruit is a capsule containing numerous minute seeds", "Contains bitter glycosides (gentiopicroside, etc.)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > リンドウ目 > リンドウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Gentianales > Gentianaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
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
    enEvolutionEvents: ["Establishment of herbivore defense through accumulation of bitter glycosides", "Rapid diversification of flower color and form in alpine environments"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/リンドウ科" },
    ],
    japaneseSpeciesCount: 267,
    review: { status: "ai_generated" },
  },

  // ── マチン科 ──────────────────────────────────────────
  {
    id: "loganiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Strychnos_nux-vomica.jpg",
    jaName: "マチン科",
    enName: "Logania family",
    scientificName: "Loganiaceae R.Br. ex Mart.",
    order: "リンドウ目",
    overview:
      "熱帯〜亜熱帯に分布する木本・草本の科で、約420種が知られる。ストリキニーネを含むマチン（Strychnos）、日本に自生するフジウツギ（Buddleja）などを含む。APG IVではフジウツギ属はゴマノハグサ科に移動する扱いもあるが、広義では本科に残される。",
    enOverview: "A family of woody and herbaceous plants distributed in tropical to subtropical regions, comprising about 420 species. It includes Strychnos (source of strychnine) and Buddleja (butterfly bush, native to Japan). Under APG IV, Buddleja is sometimes transferred to Scrophulariaceae, but is retained in this family in the broad sense.",
    characteristics: [
      "葉は単葉・対生で全縁〜鋸歯",
      "托葉が葉柄間にある（またはライン状の葉柄間線）",
      "花冠は合弁で4〜5裂",
      "果実は蒴果または液果",
    ],
    enCharacteristics: ["Leaves are simple, opposite, entire to serrate", "Interpetiolar stipules present (or as an interpetiolar line)", "Corolla is sympetalous, 4- to 5-lobed", "Fruit is a capsule or berry"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > リンドウ目 > マチン科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Gentianales > Loganiaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
    representativeGenera: [
      "フジウツギ属（Buddleja）",
      "マチン属（Strychnos）",
      "ロガニア属（Logania）",
    ],
    evolutionEvents: [
      "ストリキニーネ・ブルシンなど高毒性アルカロイドの進化（Strychnos）",
      "フジウツギの蝶媒花への適応（芳香・密集した花序）",
    ],
    enEvolutionEvents: ["Evolution of highly toxic alkaloids such as strychnine and brucine (Strychnos)", "Adaptation of Buddleja to butterfly pollination (fragrance and dense inflorescences)"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/マチン科" },
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
    enOverview: "A large family under APG IV incorporating Asclepiadaceae (milkweed family), comprising about 5,000 species. It includes diverse plants such as oleander, plumeria, Adenium, Trachelospermum, and Marsdenia. Many species are toxic, containing latex, cardiac glycosides, and alkaloids.",
    characteristics: [
      "切断すると乳白色の乳液が出る種が多い",
      "花冠は合弁で5裂、花弁が螺旋状にねじれることがある",
      "果実は袋果（袋状に開裂）で、長い綿毛付き種子が多い",
      "副花冠（コロナ）をもつ種がある（ガガイモ類）",
      "強心配糖体・モノテルペンインドールアルカロイドを含む",
    ],
    enCharacteristics: ["Many species exude milky white latex when cut", "Corolla is sympetalous, 5-lobed, sometimes with spirally twisted petals", "Fruit is a follicle (opening along one side), often with seeds bearing long silky hairs (coma)", "Some species (asclepiad group) have a corona (subsidiary corolla)", "Contains cardiac glycosides and monoterpene indole alkaloids"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > リンドウ目 > キョウチクトウ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Gentianales > Apocynaceae",
    divergenceEra: "古第三紀（約5500万年前）",
    enDivergenceEra: "Paleogene (ca. 55 million years ago)",
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
    enEvolutionEvents: ["Major expansion of the family through merger with Asclepiadaceae", "Evolution of efficient pollination via pollinia (pollen masses) in the asclepiad group", "Development of herbivore defense through latex and cardiac glycosides"],
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
    enOverview: "A family of about 2,700 species distributed from temperate to tropical regions. In Japan, Lithospermum, Myosotis (forget-me-not), Bothriospermum, Omphalodes, and Symphytum (comfrey) are native or cultivated. Many species have rough hairs on stems and leaves, and blue-purple flowers are common.",
    characteristics: [
      "茎・葉に粗毛（ケイ酸質の剛毛）が多い",
      "花は青〜紫色が多く、サソリ花序（巻散花序）につく",
      "花冠は漏斗状〜高坏状で5裂、咽頭部に付属物をもつ",
      "果実は分果（小堅果）4個に分かれる",
    ],
    enCharacteristics: ["Stems and leaves bear abundant coarse hairs (silicified bristles)", "Flowers are often blue to purple, borne in scorpioid cymes (helicoid cymes)", "Corolla is funnelform to salverform, 5-lobed, with fornices (throat appendages)", "Fruit splits into 4 nutlets (mericarps)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ムラサキ目 > ムラサキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Boraginales > Boraginaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
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
    enEvolutionEvents: ["Evolution of the distinctive scorpioid cyme (helicoid cyme) inflorescence type", "Development of physical herbivore defense through silicified bristles", "Adaptation to bee pollination through blue anthocyanin pigments"],
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
    enOverview: "One of the most economically and agriculturally important families, encompassing tomato, eggplant, pepper, potato, tobacco, and petunia, with approximately 2,700 known species. In Japan, native and naturalized members include Alkekengi (Physalis), Solanum lyratum, Solanum carolinense, and Lycium chinense. Many species contain toxic alkaloids such as solanine, atropine, and nicotine.",
    characteristics: [
      "花冠は合弁で5裂、星形〜鐘形",
      "葯は合着して円錐形になり、孔開または裂開する",
      "葉は単葉・互生、しばしば異臭をもつ",
      "果実は液果（トマト型）または蒴果（ハナビタバコ型）",
      "アルカロイドを含む種が多い",
    ],
    enCharacteristics: ["Corolla sympetalous and 5-lobed, stellate to campanulate", "Anthers connivent into a cone, dehiscing by apical pores or longitudinal slits", "Leaves simple, alternate, often with a pungent odor", "Fruit a berry (tomato type) or a capsule (Nicotiana type)", "Many species produce alkaloids"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > ナス目 > ナス科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Solanales > Solanaceae",
    divergenceEra: "古第三紀（約5000万年前）",
    enDivergenceEra: "Paleogene (ca. 50 million years ago)",
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
    enEvolutionEvents: ["Evolution of diverse alkaloids including solanine, capsaicin, nicotine, and atropine", "Domestication centered in South America followed by global dispersal", "Adaptation to bird-mediated dispersal via fleshy berries and diversification of fruit coloration"],
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
    enOverview: "A monotypic family of tropical and subtropical paddy fields and wetlands, comprising only the genus Sphenoclea with 2 species. In Japan it has become established as a paddy weed, occasionally affecting rice cultivation. Plants are small annuals bearing dense spike-like inflorescences.",
    characteristics: [
      "水生または湿地性の一年草",
      "茎は中空で海綿質",
      "葉は単葉・互生で全縁",
      "花は小さく密な穂状花序につき、5数性",
      "果実は蓋裂する蒴果（特異な開裂方法）",
    ],
    enCharacteristics: ["Aquatic or wetland annual herbs", "Stems hollow and spongy (aerenchymatous)", "Leaves simple, alternate, with entire margins", "Flowers small, 5-merous, borne in dense spicate inflorescences", "Fruit a circumscissile capsule (a distinctive dehiscence mechanism)"],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > コア真正双子葉類 > キキョウ目 > スフェノクレア科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Core Eudicots > Campanulales > Sphenocleaceae",
    divergenceEra: "古第三紀（約4500万年前）",
    enDivergenceEra: "Paleogene (ca. 45 million years ago)",
    representativeGenera: [
      "スフェノクレア属（Sphenoclea）",
    ],
    evolutionEvents: [
      "水田・湿地環境への特化（海綿質茎による浮力・酸素供給）",
      "蒴果の蓋裂という独特の開裂様式の進化",
    ],
    enEvolutionEvents: ["Specialization to paddy and wetland habitats, with spongy stems providing buoyancy and internal oxygen transport", "Evolution of circumscissile capsule dehiscence, a distinctive fruit-opening mechanism"],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スフェノクレア科" },
    ],
    japaneseSpeciesCount: 1,
    review: { status: "ai_generated" },
  },

  // ── ワスレグサ科 ────────────────────────────────────
  {
    id: "asphodelaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hemerocallis_fulva.jpg",
    jaName: "ワスレグサ科",
    enName: "Daylily / Asphodel family",
    scientificName: "Asphodelaceae",
    order: "キジカクシ目",
    overview:
      "APG IV でツルボラン科・アロエ科・ワスレグサ科（ヘメロカリス科）を統合した科。日本ではワスレグサ属（ヤブカンゾウ・ノカンゾウ・エゾキスゲなど）が湿原や草地に広く自生する。多くは1日花で、夏に咲く。",
    enOverview: "Under APG IV, this family unites the former Xanthorrhoeaceae, Aloeaceae, and Hemerocallidaceae. In Japan, daylilies (Hemerocallis) are widely distributed in wetlands and grasslands. Many species bear short-lived (one-day) flowers in summer.",
    characteristics: [
      "葉は線形または剣状で根元から束生",
      "花は3数性、6枚の花被片、しばしばラッパ状",
      "1日花が多く、開花期間は短い",
      "果実は蒴果",
    ],
    enCharacteristics: [
      "Leaves linear or sword-shaped, clustered at the base",
      "Flowers trimerous with 6 tepals, often funnel-shaped",
      "Many flowers are ephemeral, lasting only one day",
      "Fruit is a capsule",
    ],
    phylogeneticPosition: "被子植物 > 単子葉類 > キジカクシ目 > ワスレグサ科",
    enPhylogeneticPosition: "Angiosperms > Monocots > Asparagales > Asphodelaceae",
    divergenceEra: "白亜紀後期",
    enDivergenceEra: "Late Cretaceous",
    representativeGenera: [
      "ワスレグサ属（Hemerocallis）",
      "ツルボラン属（Asphodelus）",
    ],
    evolutionEvents: [
      "1日花による効率的な送粉戦略の進化",
    ],
    enEvolutionEvents: [
      "Evolution of one-day flowers as an efficient pollination strategy",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ワスレグサ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── ガリア科 ────────────────────────────────────────
  {
    id: "garryaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aucuba_japonica1.jpg",
    jaName: "ガリア科",
    enName: "Silk-tassel family",
    scientificName: "Garryaceae",
    order: "ガリア目",
    overview:
      "常緑の低木〜小高木からなる小さな科。アオキ属（Aucuba）とガリア属（Garrya）の2属からなり、日本ではアオキが林床に広く分布する。雌雄異株で、雌株は赤い液果をつける。APG II 以降にアオキ科（Aucubaceae）を統合した。",
    enOverview: "A small family of evergreen shrubs and small trees comprising two genera, Aucuba and Garrya. In Japan, Aucuba japonica is widespread in the forest understory. Plants are dioecious; female plants bear red berries. APG II merged the former Aucubaceae into this family.",
    characteristics: [
      "常緑、葉は対生で革質",
      "雌雄異株",
      "雌花序・雄花序ともに尾状花序",
      "果実は赤色の液果",
    ],
    enCharacteristics: [
      "Evergreen with opposite, leathery leaves",
      "Dioecious",
      "Both female and male inflorescences are catkin-like",
      "Fruit is a red berry",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キク類 > ラミアナ類 > ガリア目 > ガリア科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Asterids > Lamiids > Garryales > Garryaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "アオキ属（Aucuba）",
      "ガリア属（Garrya）",
    ],
    evolutionEvents: [
      "アオキ科（Aucubaceae）との統合（APG II, 2003）",
    ],
    enEvolutionEvents: [
      "Merger with the former Aucubaceae (APG II, 2003)",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ガリア科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── サギゴケ科 ──────────────────────────────────────
  {
    id: "mazaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mazus_miquelii.jpg",
    jaName: "サギゴケ科",
    enName: "Mazaceae",
    scientificName: "Mazaceae",
    order: "シソ目",
    overview:
      "小型の多年草からなる科で、日本ではサギゴケ・トキワハゼなどが田の畔や湿った草地に普通に見られる。かつてはゴマノハグサ科、その後ハエドクソウ科に含まれていたが、分子系統解析により独立科として APG IV で認知された。",
    enOverview: "A family of small perennial herbs. In Japan, Mazus miquelii and Mazus pumilus are common in paddy edges and damp grasslands. Formerly placed in Scrophulariaceae, then in Phrymaceae, the group was recognized as an independent family in APG IV based on molecular phylogenetics.",
    characteristics: [
      "草本で匍匐茎をもつものが多い",
      "葉は対生またはロゼット状",
      "唇形花、紫または白",
      "蒴果",
    ],
    enCharacteristics: [
      "Herbaceous, often with creeping stems",
      "Leaves opposite or in basal rosettes",
      "Flowers two-lipped, purple or white",
      "Fruit a capsule",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キク類 > ラミアナ類 > シソ目 > サギゴケ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Asterids > Lamiids > Lamiales > Mazaceae",
    divergenceEra: "古第三紀",
    enDivergenceEra: "Paleogene",
    representativeGenera: [
      "サギゴケ属（Mazus）",
    ],
    evolutionEvents: [
      "ハエドクソウ科からの分離独立（APG IV, 2016）",
    ],
    enEvolutionEvents: [
      "Separation from Phrymaceae (APG IV, 2016)",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サギゴケ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── サカキ科 ────────────────────────────────────────
  {
    id: "pentaphylacaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cleyera_japonica1.jpg",
    jaName: "サカキ科",
    enName: "Pentaphylacaceae",
    scientificName: "Pentaphylacaceae",
    order: "ツツジ目",
    overview:
      "常緑の木本からなる科で、日本ではサカキ・ヒサカキが照葉樹林に普通に分布する。サカキは古来より神事に用いられる神聖な木として知られる。かつてはツバキ科に含まれていたが、APG II 以降にサカキ亜科を独立科として分離。",
    enOverview: "A family of evergreen trees and shrubs. In Japan, Cleyera japonica (sakaki) and Eurya japonica (hisakaki) are common in evergreen broad-leaved forests. Sakaki has been used in Shinto rituals as a sacred tree since ancient times. Originally part of Theaceae, the subfamily was separated as an independent family from APG II onward.",
    characteristics: [
      "常緑で葉は互生、革質",
      "花は小型で白色〜淡黄色、5数性",
      "果実は液果または蒴果",
      "雌雄異株または両性",
    ],
    enCharacteristics: [
      "Evergreen with alternate, leathery leaves",
      "Flowers small, white to pale yellow, 5-merous",
      "Fruits are berries or capsules",
      "Dioecious or hermaphroditic",
    ],
    phylogeneticPosition: "被子植物 > 真正双子葉類 > キク類 > ツツジ目 > サカキ科",
    enPhylogeneticPosition: "Angiosperms > Eudicots > Asterids > Ericales > Pentaphylacaceae",
    divergenceEra: "白亜紀後期",
    enDivergenceEra: "Late Cretaceous",
    representativeGenera: [
      "サカキ属（Cleyera）",
      "ヒサカキ属（Eurya）",
    ],
    evolutionEvents: [
      "ツバキ科からの分離独立（APG II, 2003）",
    ],
    enEvolutionEvents: [
      "Separation from Theaceae (APG II, 2003)",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サカキ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── スギゴケ科 ──────────────────────────────────────
  {
    id: "polytrichaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Polytrichum_commune.jpg",
    jaName: "スギゴケ科",
    enName: "Haircap moss family",
    scientificName: "Polytrichaceae",
    order: "スギゴケ目",
    overview:
      "蘚類の中では大型で立ち上がる茎をもつ独特な科。葉に縦走するラメラ（薄板）があり、内部に水を保持して乾燥に耐える。日本ではスギゴケ・コスギゴケが庭園・林床で広く見られる。",
    enOverview: "A distinctive moss family with relatively large, erect stems. Leaves bear longitudinal lamellae that retain water internally, helping the plants withstand drought. In Japan, Polytrichum and Pogonatum are commonly seen in gardens and forest floors.",
    characteristics: [
      "茎は直立し、しばしば数cmに達する",
      "葉に縦走するラメラ（薄板）をもつ",
      "胞子体（蒴）に毛のような帽（カリプトラ）をかぶる",
    ],
    enCharacteristics: [
      "Erect stems, often several centimeters tall",
      "Leaves bear longitudinal lamellae (vertical plates)",
      "Sporophyte capsule covered by a hairy calyptra",
    ],
    phylogeneticPosition: "コケ植物 > 蘚類 > スギゴケ目 > スギゴケ科",
    enPhylogeneticPosition: "Bryophyta > Mosses > Polytrichales > Polytrichaceae",
    divergenceEra: "石炭紀以降",
    enDivergenceEra: "Carboniferous onward",
    representativeGenera: [
      "スギゴケ属（Polytrichum）",
      "コスギゴケ属（Pogonatum）",
    ],
    evolutionEvents: [
      "ラメラによる内部貯水機構の獲得",
    ],
    enEvolutionEvents: [
      "Acquisition of internal water storage via lamellae",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スギゴケ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── タマゴケ科 ──────────────────────────────────────
  {
    id: "bartramiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bartramia_pomiformis.jpg",
    jaName: "タマゴケ科",
    enName: "Apple moss family",
    scientificName: "Bartramiaceae",
    order: "ハリガネゴケ目",
    overview:
      "蘚類の科で、球形の蒴（さく）が熟すと小さなリンゴのように見えることから英名は「Apple moss」。日本では林床や岩上にタマゴケが分布する。",
    enOverview: "A moss family known for spherical capsules that resemble tiny apples when mature, giving rise to the English name 'apple moss.' Bartramia pomiformis grows on forest floors and rocks in Japan.",
    characteristics: [
      "葉は線状披針形",
      "蒴は球形でしばしば直立",
      "中肋が長く伸びる",
    ],
    enCharacteristics: [
      "Leaves linear-lanceolate",
      "Capsules spherical, often erect",
      "Costa long and prominent",
    ],
    phylogeneticPosition: "コケ植物 > 蘚類 > ハリガネゴケ目 > タマゴケ科",
    enPhylogeneticPosition: "Bryophyta > Mosses > Bryales > Bartramiaceae",
    divergenceEra: "中生代以降",
    enDivergenceEra: "Mesozoic onward",
    representativeGenera: [
      "タマゴケ属（Bartramia）",
    ],
    evolutionEvents: [],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/タマゴケ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── ハリガネゴケ科 ──────────────────────────────────
  {
    id: "bryaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhodobryum_giganteum.jpg",
    jaName: "ハリガネゴケ科",
    enName: "Bryaceae",
    scientificName: "Bryaceae",
    order: "ハリガネゴケ目",
    overview:
      "蘚類の代表的な科で、世界中に広く分布する。ハリガネゴケ・オオカサゴケなどを含み、土上・岩上・コンクリートなどさまざまな基物に生える。",
    enOverview: "A widespread and species-rich moss family found worldwide. Includes Bryum and Rhodobryum and grows on soil, rocks, and even concrete surfaces.",
    characteristics: [
      "葉は卵形〜広披針形、中肋がある",
      "蒴はしばしば下垂",
      "胞子体は赤褐色のことが多い",
    ],
    enCharacteristics: [
      "Leaves ovate to broadly lanceolate, with a costa",
      "Capsules often pendulous",
      "Sporophytes often reddish-brown",
    ],
    phylogeneticPosition: "コケ植物 > 蘚類 > ハリガネゴケ目 > ハリガネゴケ科",
    enPhylogeneticPosition: "Bryophyta > Mosses > Bryales > Bryaceae",
    divergenceEra: "中生代以降",
    enDivergenceEra: "Mesozoic onward",
    representativeGenera: [
      "ハリガネゴケ属（Bryum）",
      "オオカサゴケ属（Rhodobryum）",
    ],
    evolutionEvents: [],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハリガネゴケ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── ハイゴケ科 ──────────────────────────────────────
  {
    id: "hypnaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hypnum_cupressiforme.jpg",
    jaName: "ハイゴケ科",
    enName: "Hypnaceae",
    scientificName: "Hypnaceae",
    order: "ハイゴケ目",
    overview:
      "匍匐性の蘚類からなる大きな科で、樹幹・岩上・地表などにマット状に広がる。日本ではハイゴケ・クサゴケなどが普通に見られる。",
    enOverview: "A large family of pleurocarpous mosses that form mats on tree trunks, rocks, and the ground. Hypnum and Callicladium are common in Japan.",
    characteristics: [
      "茎は匍匐性で羽状に分枝",
      "葉は瓦状に重なる",
      "蒴は側生",
    ],
    enCharacteristics: [
      "Stems creeping, pinnately branched",
      "Leaves imbricate (overlapping like roof tiles)",
      "Capsules borne laterally",
    ],
    phylogeneticPosition: "コケ植物 > 蘚類 > ハイゴケ目 > ハイゴケ科",
    enPhylogeneticPosition: "Bryophyta > Mosses > Hypnales > Hypnaceae",
    divergenceEra: "中生代以降",
    enDivergenceEra: "Mesozoic onward",
    representativeGenera: [
      "ハイゴケ属（Hypnum）",
      "クサゴケ属（Callicladium）",
    ],
    evolutionEvents: [],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハイゴケ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── コウヤノマンネングサ科 ──────────────────────────
  {
    id: "climaciaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Climacium_dendroides.jpg",
    jaName: "コウヤノマンネングサ科",
    enName: "Tree moss family",
    scientificName: "Climaciaceae",
    order: "ハイゴケ目",
    overview:
      "蘚類の中でも独特な「樹状」の形態をもつ科。地下茎から直立した幹が伸び、その先に枝を放射状に広げて小さな樹のように見える。日本では林床にコウヤノマンネングサが分布する。",
    enOverview: "A moss family with a distinctive 'tree-like' growth form: erect stems rise from a creeping rhizome and bear radiating branches at the top, resembling miniature trees. Climacium japonicum is found on forest floors in Japan.",
    characteristics: [
      "地下茎から直立茎を伸ばす樹状の形態",
      "枝は頂部で放射状に広がる",
      "葉は卵状披針形",
    ],
    enCharacteristics: [
      "Tree-like growth: erect stems from a creeping rhizome",
      "Branches radiate from the top",
      "Leaves ovate-lanceolate",
    ],
    phylogeneticPosition: "コケ植物 > 蘚類 > ハイゴケ目 > コウヤノマンネングサ科",
    enPhylogeneticPosition: "Bryophyta > Mosses > Hypnales > Climaciaceae",
    divergenceEra: "中生代以降",
    enDivergenceEra: "Mesozoic onward",
    representativeGenera: [
      "コウヤノマンネングサ属（Climacium）",
    ],
    evolutionEvents: [
      "樹状成長型の進化",
    ],
    enEvolutionEvents: [
      "Evolution of the tree-like growth form",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コウヤノマンネングサ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── ゼニゴケ科 ──────────────────────────────────────
  {
    id: "marchantiaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Marchantia_polymorpha.jpg",
    jaName: "ゼニゴケ科",
    enName: "Liverwort family",
    scientificName: "Marchantiaceae",
    order: "ゼニゴケ目",
    overview:
      "苔類（ハイゴケ類とは別系統）の代表的な科で、平たい葉状体と特徴的な傘状の生殖器官（雄器托・雌器托）をもつ。湿った地表に広がり、無性芽（杯状体）でも繁殖する。",
    enOverview: "A flagship family of liverworts (a lineage distinct from mosses), with flat thalloid bodies and characteristic umbrella-shaped reproductive structures (antheridiophores and archegoniophores). They spread on damp soil and also reproduce vegetatively via gemma cups.",
    characteristics: [
      "葉状体（平たい葉状の体）",
      "雄器托・雌器托が傘状",
      "杯状体（gemma cup）で無性繁殖",
    ],
    enCharacteristics: [
      "Thalloid body (flat, ribbon-like)",
      "Umbrella-shaped antheridiophores and archegoniophores",
      "Asexual reproduction via gemma cups",
    ],
    phylogeneticPosition: "コケ植物 > 苔類 > ゼニゴケ目 > ゼニゴケ科",
    enPhylogeneticPosition: "Bryophyta > Liverworts > Marchantiales > Marchantiaceae",
    divergenceEra: "古生代以降",
    enDivergenceEra: "Paleozoic onward",
    representativeGenera: [
      "ゼニゴケ属（Marchantia）",
    ],
    evolutionEvents: [
      "杯状体による無性繁殖の進化",
    ],
    enEvolutionEvents: [
      "Evolution of asexual reproduction via gemma cups",
    ],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ゼニゴケ科" },
    ],
    review: { status: "ai_generated" },
  },

  // ── ジャゴケ科 ──────────────────────────────────────
  {
    id: "conocephalaceae",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Conocephalum_conicum.jpg",
    jaName: "ジャゴケ科",
    enName: "Snakeskin liverwort family",
    scientificName: "Conocephalaceae",
    order: "ゼニゴケ目",
    overview:
      "苔類の科で、葉状体の表面に多角形の気室パターンが浮き出して蛇の皮のように見えることが和名・英名の由来。日本では渓流沿いの湿った岩や土上にジャゴケが普通に生える。",
    enOverview: "A liverwort family whose name comes from the polygonal air chamber pattern on the thallus surface, resembling snakeskin. Conocephalum conicum is common on damp rocks and soil along streams in Japan.",
    characteristics: [
      "葉状体の表面に多角形の気室パターン",
      "強い香気をもつ種が多い",
      "雄器托・雌器托は柄をもつ",
    ],
    enCharacteristics: [
      "Polygonal air chamber pattern on the thallus surface",
      "Many species are strongly aromatic",
      "Antheridiophores and archegoniophores stalked",
    ],
    phylogeneticPosition: "コケ植物 > 苔類 > ゼニゴケ目 > ジャゴケ科",
    enPhylogeneticPosition: "Bryophyta > Liverworts > Marchantiales > Conocephalaceae",
    divergenceEra: "古生代以降",
    enDivergenceEra: "Paleozoic onward",
    representativeGenera: [
      "ジャゴケ属（Conocephalum）",
    ],
    evolutionEvents: [],
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ジャゴケ科" },
    ],
    review: { status: "ai_generated" },
  },
];
