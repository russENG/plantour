import type { Plant } from "./types";

export const plants: Plant[] = [
  // ── キク科 ──────────────────────────────────────────
  {
    id: "tanpopo",
    jaName: "セイヨウタンポポ",
    enName: "Common Dandelion",
    scientificName: "Taraxacum officinale",
    familyId: "asteraceae",
    familyJaName: "キク科",
    description:
      "春から初夏にかけて黄色い花を咲かせる多年草。道ばたや公園で最もよく見られる植物のひとつ。ヨーロッパ原産の帰化植物で、日本在来のタンポポとは外萼片（総苞外片）が反り返ることで区別できる。",
    identificationPoints: [
      "外萼片（総苞外片）が反り返っている（在来タンポポは直立）",
      "葉はロゼット状、深く切れ込む",
      "花は明るい黄色、綿毛が球状になって飛散する",
    ],
    habitat: "道ばた・公園・草地・畑",
    season: "3〜10月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/セイヨウタンポポ" },
      { label: "Wikipedia（English）", url: "https://en.wikipedia.org/wiki/Taraxacum_officinale" },
    ],
    evolutionNote: "キク科は被子植物の中でも最大の科のひとつ。頭状花序という独特の構造が受粉効率を高めた。",
    tags: ["草本", "帰化植物", "多年草", "黄色花", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/セイヨウタンポポ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "himawari",
    jaName: "ヒマワリ",
    enName: "Sunflower",
    scientificName: "Helianthus annuus",
    familyId: "asteraceae",
    familyJaName: "キク科",
    description:
      "北アメリカ原産の一年草。高さ1〜3mに達し、大きな黄色の頭状花序が特徴。種子は食用・油脂原料になる。学校の花壇や農地でよく栽培される。",
    identificationPoints: [
      "大きな黄色の花（実は多数の小花の集合体＝頭状花序）",
      "若い花は太陽を追って向きを変える",
      "茎に粗い毛が多い",
      "葉はハート形で大きい",
    ],
    habitat: "畑・花壇・道ばた",
    season: "7〜9月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒマワリ" },
    ],
    tags: ["草本", "一年草", "夏", "黄色花", "帰化植物", "栽培"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ヒマワリ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "himejoon",
    jaName: "ヒメジョオン",
    enName: "Annual Fleabane",
    scientificName: "Erigeron annuus",
    familyId: "asteraceae",
    familyJaName: "キク科",
    description:
      "北アメリカ原産の帰化植物。春〜秋にかけて白い小さな花を多数咲かせる一年草または二年草。道ばたや空き地に普通に見られる。よく似たハルジオンとの区別に注意。",
    identificationPoints: [
      "茎の断面が中実（ハルジオンは中空）",
      "茎の葉は茎を抱かない（ハルジオンは抱く）",
      "花びら（舌状花）は白く細い",
      "つぼみは下を向かない（ハルジオンは下向き）",
    ],
    habitat: "道ばた・空き地・草地",
    season: "5〜10月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒメジョオン" },
    ],
    tags: ["草本", "帰化植物", "一年草", "白花", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ヒメジョオン",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "harujion",
    jaName: "ハルジオン",
    enName: "Philadelphia Fleabane",
    scientificName: "Erigeron philadelphicus",
    familyId: "asteraceae",
    familyJaName: "キク科",
    description:
      "北アメリカ原産の帰化植物。春の道ばたに多い多年草。ヒメジョオンとよく似るが、開花期が早く（春のみ）、茎が中空で葉が茎を抱くことで区別できる。",
    identificationPoints: [
      "茎の断面が中空",
      "茎の葉が茎を包み込むように抱く",
      "つぼみが下を向いてうつむく",
      "ヒメジョオンより花弁が細く多い",
    ],
    habitat: "道ばた・空き地・草地",
    season: "4〜6月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハルジオン" },
    ],
    tags: ["草本", "帰化植物", "多年草", "白花", "春", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ハルジオン",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "yomogi",
    jaName: "ヨモギ",
    enName: "Japanese Mugwort",
    scientificName: "Artemisia indica var. maximowiczii",
    familyId: "asteraceae",
    familyJaName: "キク科",
    description:
      "日本全土の草地・道ばたに生える多年草。春の新芽は草もちに使われる。葉の裏が白い綿毛で覆われ、独特の香りがある。お灸の「もぐさ」の原料としても知られる。",
    identificationPoints: [
      "葉の裏が白い綿毛で覆われて白っぽい",
      "独特の芳香（香草の匂い）",
      "羽状に深く切れ込んだ葉",
      "秋に小さな茶色い花穂をつける",
    ],
    habitat: "道ばた・草地・河川敷・土手",
    season: "9〜10月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヨモギ" },
    ],
    tags: ["草本", "多年草", "薬草", "食用", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ヨモギ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "seitage",
    jaName: "セイタカアワダチソウ",
    enName: "Tall Goldenrod",
    scientificName: "Solidago altissima",
    familyId: "asteraceae",
    familyJaName: "キク科",
    description:
      "北アメリカ原産の帰化植物。秋に黄色い花の穂を立てて群生する。侵略的外来種として知られ、河川敷や荒地に大群落を作る。かつてはアレルゲンと誤解されていたが、花粉症の原因ではない（虫媒花）。",
    identificationPoints: [
      "秋に黄色い穂状の花序が上向きに弓なりに曲がる",
      "茎は高く（1〜2m以上）まっすぐ",
      "葉は細長く互生",
      "河川敷や荒地に大群落を形成",
    ],
    habitat: "河川敷・荒地・空き地・道ばた",
    season: "10〜11月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/セイタカアワダチソウ" },
    ],
    tags: ["草本", "帰化植物", "多年草", "黄色花", "秋", "河川敷"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/セイタカアワダチソウ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "cosmos",
    jaName: "コスモス",
    enName: "Garden Cosmos",
    scientificName: "Cosmos bipinnatus",
    familyId: "asteraceae",
    familyJaName: "キク科",
    description:
      "メキシコ原産の一年草。秋の代表的な花で、ピンク・白・赤などの花を咲かせる。葉は糸状に細かく切れ込む。「秋桜」とも書き、日本の秋の風物詩として親しまれる。",
    identificationPoints: [
      "葉が羽状に細かく糸状に切れ込む",
      "花弁は8枚が基本（舌状花）",
      "ピンク・白・赤・複色など色が多様",
      "茎は細くて風にゆれる",
    ],
    habitat: "花壇・畑・道ばた",
    season: "7〜11月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コスモス" },
    ],
    tags: ["草本", "帰化植物", "一年草", "秋", "ピンク花", "栽培"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/コスモス",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── バラ科 ──────────────────────────────────────────
  {
    id: "sakura",
    jaName: "ソメイヨシノ",
    enName: "Somei-yoshino Cherry",
    scientificName: "Prunus × yedoensis",
    familyId: "rosaceae",
    familyJaName: "バラ科",
    description:
      "日本で最も広く親しまれるサクラ。エドヒガンとオオシマザクラの交配種とされる。江戸時代末期に生まれ、現代の街路・公園のサクラの大部分を占める。葉が出る前に花が開くのが特徴。",
    identificationPoints: [
      "葉より先に花が開く",
      "花はうっすらピンク、ほぼ白に近い",
      "花柄・萼筒に毛が少ない",
      "クローン個体のため日本全国でほぼ同時期に開花",
    ],
    habitat: "公園・街路・河川敷",
    season: "3〜4月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ソメイヨシノ" },
    ],
    evolutionNote: "バラ科は白亜紀後期から急速に多様化した被子植物の代表的な科。",
    tags: ["木本", "落葉", "春", "ピンク花", "有名", "街路樹"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ソメイヨシノ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "ume",
    jaName: "ウメ",
    enName: "Japanese Apricot",
    scientificName: "Prunus mume",
    familyId: "rosaceae",
    familyJaName: "バラ科",
    description:
      "中国原産で古くから日本に伝わる落葉小高木。早春に葉より先に白〜ピンクの花を咲かせる。梅干しや梅酒の原料として重要。サクラより先に咲き、春の訪れを告げる。",
    identificationPoints: [
      "サクラより早く咲く（1〜3月）",
      "花は枝に直接つく（花柄がほぼない）",
      "香りが強い",
      "葉先がとがり、縁に細かい鋸歯",
    ],
    habitat: "公園・庭・梅林",
    season: "1〜3月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ウメ" },
    ],
    tags: ["木本", "落葉", "春", "白花", "食用", "栽培"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ウメ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "noibara",
    jaName: "ノイバラ",
    enName: "Japanese Rose",
    scientificName: "Rosa multiflora",
    familyId: "rosaceae",
    familyJaName: "バラ科",
    description:
      "日本の野山に自生するバラ。初夏に白い小さな5弁花を房状に咲かせ、秋に赤い小果をつける。枝にとげがある。バラの台木として使われることでも知られる。",
    identificationPoints: [
      "白い5弁花が房状に多数咲く",
      "枝にとげがある",
      "秋に赤い小さな球形の実（偽果）をつける",
      "葉は奇数羽状複葉",
    ],
    habitat: "野山・林縁・河川敷・道ばた",
    season: "5〜6月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ノイバラ" },
    ],
    tags: ["木本", "落葉", "夏", "白花", "とげ"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ノイバラ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── イネ科 ──────────────────────────────────────────
  {
    id: "susuki",
    jaName: "ススキ",
    enName: "Japanese Silver Grass",
    scientificName: "Miscanthus sinensis",
    familyId: "poaceae",
    familyJaName: "イネ科",
    description:
      "秋の代表的な植物。草原・河川敷・山野に群生し、銀色の穂が秋風になびく姿が美しい。単子葉植物イネ科の多年草で、茎は太くまっすぐ伸びる。",
    identificationPoints: [
      "葉の中脈が白く目立つ",
      "秋に銀色〜白色の穂をつける",
      "茎の根元がふくらんで束状",
      "葉の縁に細かい鋸歯がある（触ると切れる）",
    ],
    habitat: "草地・河川敷・山野・道ばた",
    season: "8〜10月（穂）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ススキ" },
    ],
    tags: ["草本", "単子葉", "多年草", "秋", "草原"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ススキ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "enokoro",
    jaName: "エノコログサ（ネコジャラシ）",
    enName: "Green Foxtail",
    scientificName: "Setaria viridis",
    familyId: "poaceae",
    familyJaName: "イネ科",
    description:
      "道ばたや空き地に最もよく見られるイネ科の一年草。夏〜秋に緑色〜黄褐色の円柱状の穂をつける。「ネコジャラシ」の愛称で親しまれ、子供が猫をじゃらす遊びに使われる。",
    identificationPoints: [
      "円柱状の穂（剛毛＝芒が多く、毛むくじゃらに見える）",
      "穂は下垂せずやや傾く",
      "葉は平らで線形",
      "茎は細く1m以下",
    ],
    habitat: "道ばた・畑・空き地",
    season: "8〜10月（穂）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/エノコログサ" },
    ],
    tags: ["草本", "単子葉", "一年草", "道ばた", "夏"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/エノコログサ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "yoshi",
    jaName: "ヨシ（アシ）",
    enName: "Common Reed",
    scientificName: "Phragmites australis",
    familyId: "poaceae",
    familyJaName: "イネ科",
    description:
      "河川・湖沼・湿地の岸辺に群生する大型多年草。高さ1〜3mに達し、秋に茶褐色の穂をつける。世界に広く分布し、茅葺き屋根の材料や水質浄化にも利用される。「葦」とも書く。",
    identificationPoints: [
      "水辺に大群落を形成する大型草",
      "茎は中空で丈夫",
      "葉は幅広く長い（幅2〜3cm）",
      "秋に茶褐色のふさふさした穂をつける",
    ],
    habitat: "河川敷・湖岸・湿地・水辺",
    season: "8〜10月（穂）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヨシ" },
    ],
    tags: ["草本", "単子葉", "多年草", "水辺", "大型"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ヨシ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── マメ科 ──────────────────────────────────────────
  {
    id: "shiro_tsumekusa",
    jaName: "シロツメクサ",
    enName: "White Clover",
    scientificName: "Trifolium repens",
    familyId: "fabaceae",
    familyJaName: "マメ科",
    description:
      "ヨーロッパ原産の帰化植物。公園・草地に広く見られる多年草。白い球状の花をつける。三つ葉（まれに四つ葉）が特徴で、四つ葉のクローバー探しで子供に親しまれる。根粒菌と共生して窒素固定を行う。",
    identificationPoints: [
      "3枚の小葉（まれに4枚）で、葉に淡い斑紋がある",
      "白い球状の花頭（多数の蝶形花が集まる）",
      "茎が地面を這って広がる（匍匐茎）",
      "踏みつけに強い",
    ],
    habitat: "公園・草地・道ばた・芝生",
    season: "4〜10月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シロツメクサ" },
    ],
    evolutionNote: "マメ科は根粒菌との共生により痩せた土地でも生育できる。白亜紀末〜古第三紀に急速に多様化。",
    tags: ["草本", "帰化植物", "多年草", "白花", "公園"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/シロツメクサ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "aka_tsumekusa",
    jaName: "アカツメクサ",
    enName: "Red Clover",
    scientificName: "Trifolium pratense",
    familyId: "fabaceae",
    familyJaName: "マメ科",
    description:
      "ヨーロッパ原産の帰化植物。牧草として導入され、道ばたや草地に帰化した多年草。赤紫色の球状花頭をつける。シロツメクサより大型で直立する。",
    identificationPoints: [
      "赤紫色の球状花頭",
      "シロツメクサより大型で茎が直立する",
      "葉に淡い斑紋（V字形の白紋）がある",
      "葉は3枚の小葉",
    ],
    habitat: "草地・道ばた・牧草地",
    season: "5〜8月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アカツメクサ" },
    ],
    tags: ["草本", "帰化植物", "多年草", "赤紫花", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/アカツメクサ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "karasu_endou",
    jaName: "カラスノエンドウ",
    enName: "Common Vetch",
    scientificName: "Vicia sativa",
    familyId: "fabaceae",
    familyJaName: "マメ科",
    description:
      "春の道ばたや草地に見られる一年草（越年草）。赤紫色の蝶形花を咲かせ、さやえんどうに似た黒い実をつける。巻きひげで他の植物や構造物に絡みつく。実が黒くなるのでカラスノエンドウの名がある。",
    identificationPoints: [
      "赤紫色の蝶形花（1〜3個腋生）",
      "葉先に巻きひげがある",
      "奇数羽状複葉",
      "熟した実は黒くなり、さやがねじれる",
    ],
    habitat: "道ばた・草地・畑のまわり",
    season: "3〜6月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カラスノエンドウ" },
    ],
    tags: ["草本", "一年草", "春", "赤紫花", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/カラスノエンドウ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── アブラナ科 ──────────────────────────────────────
  {
    id: "nazuna",
    jaName: "ナズナ（ペンペングサ）",
    enName: "Shepherd's Purse",
    scientificName: "Capsella bursa-pastoris",
    familyId: "brassicaceae",
    familyJaName: "アブラナ科",
    description:
      "春の七草のひとつ。道ばたや畑に生える一年草（越年草）。白い小さな4弁花をつけ、三角形のさや（果実）が特徴的。「ペンペングサ」の別名は実の形からきている。",
    identificationPoints: [
      "三角形（逆三角形）のさや（短角果）",
      "白い4弁花が総状花序につく",
      "根元の葉はロゼット状で深く切れ込む",
      "茎の葉は茎を抱く",
    ],
    habitat: "道ばた・畑・公園・空き地",
    season: "2〜6月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ナズナ" },
    ],
    tags: ["草本", "一年草", "春", "白花", "道ばた", "春の七草"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ナズナ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "nanohana",
    jaName: "セイヨウアブラナ（菜の花）",
    enName: "Rapeseed",
    scientificName: "Brassica napus",
    familyId: "brassicaceae",
    familyJaName: "アブラナ科",
    description:
      "ヨーロッパ原産で、食用油（キャノーラ油）の原料として重要な作物。春に鮮やかな黄色の花を一面に咲かせる。「菜の花」として河川敷や農地の春景色を作る帰化植物でもある。",
    identificationPoints: [
      "鮮やかな黄色い4弁花",
      "花は十字形（十字花科の特徴）",
      "茎の葉が茎を抱く",
      "実は細長いさや（長角果）",
    ],
    habitat: "農地・河川敷・畑",
    season: "3〜5月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/セイヨウアブラナ" },
    ],
    tags: ["草本", "帰化植物", "一年草", "春", "黄色花", "食用"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/セイヨウアブラナ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── シソ科 ──────────────────────────────────────────
  {
    id: "hotokenoza",
    jaName: "ホトケノザ",
    enName: "Henbit Deadnettle",
    scientificName: "Lamium amplexicaule",
    familyId: "lamiaceae",
    familyJaName: "シソ科",
    description:
      "春の畑や道ばたに群生する一年草（越年草）。赤紫色の唇形花をつける。茎を輪生するように葉がつく様子が蓮台（仏像の台座）に見えることから「仏の座」の名がある。春の七草の「ホトケノザ」はコオニタビラコを指し、この植物とは別種。",
    identificationPoints: [
      "茎を抱くように対生する扇形の葉",
      "赤紫色の唇形花",
      "茎の断面が四角形（シソ科の特徴）",
      "春に田畑や道ばたに群生",
    ],
    habitat: "畑・道ばた・空き地",
    season: "3〜6月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ホトケノザ" },
    ],
    tags: ["草本", "一年草", "春", "赤紫花", "畑"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ホトケノザ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "hime_odoriko",
    jaName: "ヒメオドリコソウ",
    enName: "Red Henbit",
    scientificName: "Lamium purpureum",
    familyId: "lamiaceae",
    familyJaName: "シソ科",
    description:
      "ヨーロッパ原産の帰化植物。春の道ばたや畑に生える一年草。ホトケノザに似るが、葉が三角形でしわしわ、上部の葉が赤紫色を帯びることで区別できる。",
    identificationPoints: [
      "上部の葉が赤紫色になる",
      "葉は三角〜円形でしわしわ",
      "ホトケノザより花が小さい",
      "茎の断面が四角形",
    ],
    habitat: "道ばた・畑・公園",
    season: "3〜5月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒメオドリコソウ" },
    ],
    tags: ["草本", "帰化植物", "一年草", "春", "赤紫花", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ヒメオドリコソウ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── タデ科 ──────────────────────────────────────────
  {
    id: "suiba",
    jaName: "スイバ",
    enName: "Common Sorrel",
    scientificName: "Rumex acetosa",
    familyId: "polygonaceae",
    familyJaName: "タデ科",
    description:
      "草地や道ばたに生える多年草。葉に強い酸味があり、「酸い葉（すいば）」の名の由来になっている。雌雄異株で、赤みを帯びた小さな花が穂状につく。",
    identificationPoints: [
      "葉を噛むと強い酸味がある（シュウ酸を含む）",
      "葉の基部が矢じり形に張り出す",
      "春〜初夏に赤みの穂状花序",
      "雌雄異株",
    ],
    habitat: "草地・道ばた・土手・草原",
    season: "5〜7月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スイバ" },
    ],
    tags: ["草本", "多年草", "道ばた", "食用（注意）"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/スイバ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "itadori",
    jaName: "イタドリ",
    enName: "Japanese Knotweed",
    scientificName: "Reynoutria japonica",
    familyId: "polygonaceae",
    familyJaName: "タデ科",
    description:
      "日本全土の道ばたや荒れ地に生える大型多年草。強健で、海外では侵略的外来植物として問題になっている。若い茎は酸味があり食用になる。秋に白い小花が多数咲く。",
    identificationPoints: [
      "大型（1〜2m）で茎が中空・節がある",
      "茎に赤い斑点がある",
      "葉はハート形で大きい",
      "秋に白〜淡いピンクの小花が穂状につく",
    ],
    habitat: "道ばた・荒地・河川敷・山野",
    season: "8〜10月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イタドリ" },
    ],
    tags: ["草本", "多年草", "道ばた", "大型", "食用（若芽）"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/イタドリ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ナデシコ科 ──────────────────────────────────────
  {
    id: "hakobe",
    jaName: "ハコベ",
    enName: "Chickweed",
    scientificName: "Stellaria media",
    familyId: "caryophyllaceae",
    familyJaName: "ナデシコ科",
    description:
      "春の七草のひとつ（ハコベラ）。年間を通じて道ばたや畑に見られる小さな草。白い5弁花は深く2裂し、10枚に見える。鳥のエサとしてよく知られる。",
    identificationPoints: [
      "白い小さな花（花弁5枚が深く2裂し、10枚に見える）",
      "茎の一列にだけ毛がある",
      "茎が折れにくく、引っ張るとしなる",
      "葉は卵形で対生",
    ],
    habitat: "道ばた・畑・公園・庭",
    season: "ほぼ年中（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハコベ" },
    ],
    tags: ["草本", "一年草", "白花", "道ばた", "春の七草"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ハコベ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── オオバコ科 ──────────────────────────────────────
  {
    id: "ooba_plantain",
    jaName: "オオバコ",
    enName: "Broadleaf Plantain",
    scientificName: "Plantago major",
    familyId: "plantaginaceae",
    familyJaName: "オオバコ科",
    description:
      "踏みつけに強く、道ばたや踏み固められた土地に生える多年草。葉が幅広で根元から広がるロゼット状。風媒花で、細長い花穂に小さな花が多数咲く。",
    identificationPoints: [
      "幅広の楕円形の葉、葉脈が弓なりに走る",
      "葉がロゼット状に広がる",
      "細い穂に小さな花が密につく",
      "葉柄に繊維が多く、引っ張ると糸状に残る",
    ],
    habitat: "道ばた・踏み固められた土地・公園",
    season: "5〜9月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/オオバコ" },
    ],
    tags: ["草本", "多年草", "道ばた", "踏みつけ強"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/オオバコ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "ooinunofuguri",
    jaName: "オオイヌノフグリ",
    enName: "Bird's-eye Speedwell",
    scientificName: "Veronica persica",
    familyId: "plantaginaceae",
    familyJaName: "オオバコ科",
    description:
      "ヨーロッパ原産の帰化植物。早春の道ばたや畑に青い小花を咲かせる一年草。コバルトブルーに近い鮮やかな青い花は春の代表的な光景。花の後に心臓形の実（果実）をつける。",
    identificationPoints: [
      "コバルトブルーの4弁花（10mm前後）",
      "花びらに濃い筋が入る",
      "葉は丸みのある卵形でギザギザ",
      "果実が心臓形",
    ],
    habitat: "道ばた・畑・公園・草地",
    season: "2〜5月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/オオイヌノフグリ" },
    ],
    tags: ["草本", "帰化植物", "一年草", "春", "青花", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/オオイヌノフグリ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── スミレ科 ──────────────────────────────────────
  {
    id: "tachitsubo",
    jaName: "タチツボスミレ",
    enName: "Standing Violet",
    scientificName: "Viola grypoceras",
    familyId: "violaceae",
    familyJaName: "スミレ科",
    description:
      "日本で最もよく見られるスミレ。早春に道ばたや林縁に青紫色の花を咲かせる多年草。茎が立ち上がるのが特徴で、葉はハート形。",
    identificationPoints: [
      "青紫色の5弁花（唇弁に白い筋が入る）",
      "茎が立ち上がる（立坪菫）",
      "葉は長いハート形",
      "托葉に切れ込みがある（くしの歯状）",
    ],
    habitat: "道ばた・林縁・草地・公園",
    season: "3〜5月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/タチツボスミレ" },
    ],
    tags: ["草本", "多年草", "春", "青紫花", "林縁"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/タチツボスミレ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── カタバミ科 ──────────────────────────────────────
  {
    id: "katabami",
    jaName: "カタバミ",
    enName: "Wood Sorrel",
    scientificName: "Oxalis corniculata",
    familyId: "oxalidaceae",
    familyJaName: "カタバミ科",
    description:
      "道ばたや庭に普通に生えるハート形3枚葉の小さな多年草。踏みつけに強く、除草しても根が残って再生する。黄色い5弁花を咲かせる。酸味があり、かつて子供が噛んで食べた。",
    identificationPoints: [
      "ハート形の小葉3枚（三つ葉状）",
      "夜や曇天に葉を閉じる（就眠運動）",
      "小さな黄色い5弁花",
      "細長い角状の実（さく果）",
    ],
    habitat: "道ばた・庭・畑・石畳の隙間",
    season: "4〜10月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/カタバミ" },
    ],
    tags: ["草本", "多年草", "道ばた", "黄色花", "小型"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/カタバミ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "murasaki_katabami",
    jaName: "ムラサキカタバミ",
    enName: "Pink Wood Sorrel",
    scientificName: "Oxalis corymbosa",
    familyId: "oxalidaceae",
    familyJaName: "カタバミ科",
    description:
      "南アメリカ原産の帰化植物。春〜夏に淡いピンク〜赤紫色の花を咲かせる。カタバミよりやや大型で、鱗茎（球根状の根）から増える。道ばたや庭にしばしば群生する。",
    identificationPoints: [
      "淡ピンク〜赤紫色の5弁花（やや大きめ）",
      "カタバミより葉が大きい",
      "球根（鱗茎）で増える",
      "花の中心が白い",
    ],
    habitat: "道ばた・庭・公園・花壇",
    season: "4〜7月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ムラサキカタバミ" },
    ],
    tags: ["草本", "帰化植物", "多年草", "ピンク花", "道ばた"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ムラサキカタバミ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ドクダミ科 ──────────────────────────────────────
  {
    id: "dokudami",
    jaName: "ドクダミ",
    enName: "Heartleaf Houttuynia",
    scientificName: "Houttuynia cordata",
    familyId: "saururaceae",
    familyJaName: "ドクダミ科",
    description:
      "独特の強いにおいのある多年草。湿った日陰によく生える。白い十字状の花（実は苞、真の花は穂状）が特徴。薬用・食用として古くから使われ、十薬（じゅうやく）とも呼ばれる。",
    identificationPoints: [
      "葉・茎に独特の強いにおい",
      "白い十字状の4枚の総苞片（花びらではない）",
      "ハート形の葉",
      "湿った日陰に群生する",
    ],
    habitat: "湿った日陰・庭・道ばた・林縁",
    season: "5〜7月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ドクダミ" },
    ],
    evolutionNote: "ドクダミ科はAPG体系で基部被子植物に近い分類群に属する古い系統。",
    tags: ["草本", "多年草", "日陰", "白花", "薬草"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ドクダミ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ガマ科 ──────────────────────────────────────────
  {
    id: "gama",
    jaName: "ガマ",
    enName: "Cattail",
    scientificName: "Typha latifolia",
    familyId: "typhaceae",
    familyJaName: "ガマ科",
    description:
      "水辺・湿地の代表的な植物。夏にソーセージ状の茶褐色の花穂をつける大型多年草。上部が雄花序、下部が雌花序。「因幡の白兎」の神話にも登場する。綿毛が飛ぶ様子も特徴的。",
    identificationPoints: [
      "ソーセージ（ホットドッグ）状の茶褐色の花穂",
      "上部が雄花序（黄色い花粉）、下部が雌花序（茶色い部分）",
      "葉は細長くて平らで硬い（幅1〜2cm）",
      "水辺・湿地に大群落を形成",
    ],
    habitat: "池・沼・湿地・河川の水辺",
    season: "7〜8月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ガマ" },
    ],
    tags: ["草本", "単子葉", "多年草", "水辺", "大型"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ガマ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── サトイモ科 ──────────────────────────────────────
  {
    id: "mizubasho",
    jaName: "ミズバショウ",
    enName: "Asian Skunk Cabbage",
    scientificName: "Lysichiton camtschatcensis",
    familyId: "araceae",
    familyJaName: "サトイモ科",
    description:
      "尾瀬など湿地帯の代表的な植物。春、雪解けとともに白い大きな仏炎苞を広げる。「夏の思い出」の歌にも詠まれる。葉は大きく、夏には1m近くに成長する。",
    identificationPoints: [
      "白い大きな苞（仏炎苞）が花を包む",
      "仏炎苞の中心に棒状の花序（肉穂花序）",
      "葉は春に展開して夏には巨大になる",
      "湿地や水辺の雪解け後に咲く",
    ],
    habitat: "高山・亜高山の湿地・尾瀬など",
    season: "4〜7月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ミズバショウ" },
    ],
    tags: ["草本", "単子葉", "多年草", "水辺", "高山", "白花", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ミズバショウ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── スズカケノキ科 ──────────────────────────────────
  {
    id: "suzukake",
    jaName: "プラタナス（スズカケノキ）",
    enName: "London Plane",
    scientificName: "Platanus × acerifolia",
    familyId: "platanaceae",
    familyJaName: "スズカケノキ科",
    description:
      "街路樹として日本中に植えられる落葉高木。樹皮が迷彩状にはがれるのが特徴。ヨーロッパで交配された種で、日本では「プラタナス」の名で親しまれる。",
    identificationPoints: [
      "樹皮が白・緑・茶色のまだら模様でパズル状にはがれる",
      "葉は大きく、カエデに似た掌状",
      "球状の実が垂れ下がってつく",
    ],
    habitat: "街路・公園",
    season: "通年（葉は春〜秋）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/プラタナス" },
    ],
    tags: ["木本", "落葉", "街路樹", "帰化植物"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/プラタナス",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ブナ科 ──────────────────────────────────────────
  {
    id: "konara",
    jaName: "コナラ",
    enName: "Konara Oak",
    scientificName: "Quercus serrata",
    familyId: "fagaceae",
    familyJaName: "ブナ科",
    description:
      "雑木林の代表的な落葉高木。ドングリをつける。秋の紅葉が美しく、クヌギとともに里山の主要構成種。炭材や薪材として利用されてきた。",
    identificationPoints: [
      "葉は長楕円形で縁に鋭い鋸歯（波状）",
      "どんぐり（堅果）がつく。ドングリはクヌギより小さめ",
      "樹皮は縦に割れる",
      "秋に黄褐色に紅葉",
    ],
    habitat: "雑木林・里山・山地",
    season: "通年（黄葉は10〜11月）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コナラ" },
    ],
    tags: ["木本", "落葉", "里山", "ドングリ"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/コナラ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "kunugi",
    jaName: "クヌギ",
    enName: "Sawtooth Oak",
    scientificName: "Quercus acutissima",
    familyId: "fagaceae",
    familyJaName: "ブナ科",
    description:
      "里山の代表的な落葉高木。大きなどんぐりをつける。樹液が出てカブトムシ・クワガタムシが集まることで有名。コナラとともに薪炭材として利用されてきた。",
    identificationPoints: [
      "細長い葉で縁に鋭いとげ状の鋸歯",
      "大きなまるいどんぐり（鱗片が反り返る）",
      "樹液がにじみ出る",
      "カブトムシ・クワガタムシが集まる",
    ],
    habitat: "雑木林・里山",
    season: "通年（黄葉は10〜11月）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クヌギ" },
    ],
    tags: ["木本", "落葉", "里山", "ドングリ", "虫"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/クヌギ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── クスノキ科 ──────────────────────────────────────
  {
    id: "kusunoki",
    jaName: "クスノキ",
    enName: "Camphor Tree",
    scientificName: "Cinnamomum camphora",
    familyId: "lauraceae",
    familyJaName: "クスノキ科",
    description:
      "西日本の神社仏閣に多い大型常緑高木。独特の芳香（樟脳の匂い）をもつ。葉に3本の目立つ葉脈（3行脈）がある。1000年を超える古木も存在する長命な樹木。",
    identificationPoints: [
      "葉に3本の主脈が目立つ（3行脈）",
      "葉・木材に樟脳のような強い芳香",
      "常緑で葉は光沢がある",
      "樹皮は縦に割れる",
    ],
    habitat: "神社・公園・街路・西日本の暖地",
    season: "通年",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クスノキ" },
    ],
    evolutionNote: "クスノキ科は被子植物の基部的なグループに属し、白亜紀前期から存在する古い系統。",
    tags: ["木本", "常緑", "大型", "神社", "街路樹", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/クスノキ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ツバキ科 ──────────────────────────────────────
  {
    id: "tsubaki",
    jaName: "ツバキ",
    enName: "Japanese Camellia",
    scientificName: "Camellia japonica",
    familyId: "theaceae",
    familyJaName: "ツバキ科",
    description:
      "日本原産の常緑小高木。冬〜春に赤・白・ピンクの花を咲かせる。花が丸ごとぽとりと落ちる様子から武士に忌まれた歴史もある。椿油は髪油や食用油として利用される。",
    identificationPoints: [
      "光沢のある濃い緑色の葉",
      "花が丸ごと落花する（花弁ではなく花全体）",
      "雄しべが多数、花糸が合着して筒状",
      "果実は球形、熟すと3裂",
    ],
    habitat: "山林・庭・公園",
    season: "12〜4月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ツバキ" },
    ],
    tags: ["木本", "常緑", "冬春", "赤花", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ツバキ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "sazanka",
    jaName: "サザンカ",
    enName: "Sasanqua Camellia",
    scientificName: "Camellia sasanqua",
    familyId: "theaceae",
    familyJaName: "ツバキ科",
    description:
      "ツバキに似るが秋〜初冬に咲く常緑低木。花弁がばらばらに散る（ツバキは花ごと落ちる）のが最大の違い。生垣や公園の植栽として広く使われる。",
    identificationPoints: [
      "秋〜冬（10〜12月）に咲く",
      "花弁が一枚ずつ散る（ツバキとの違い）",
      "ツバキより葉が小さい",
      "花は白〜ピンク",
    ],
    habitat: "庭・公園・生垣",
    season: "10〜12月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/サザンカ" },
    ],
    tags: ["木本", "常緑", "秋冬", "ピンク花", "生垣"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/サザンカ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── モクレン科 ──────────────────────────────────────
  {
    id: "kobushi",
    jaName: "コブシ",
    enName: "Kobushi Magnolia",
    scientificName: "Magnolia kobus",
    familyId: "magnoliaceae",
    familyJaName: "モクレン科",
    description:
      "春、葉が出る前に白い花を一面に咲かせる落葉高木。ソメイヨシノより少し早く咲く。花は6枚の白い花弁で、中心部がやや赤みを帯びる。北海道〜九州の山地に自生。",
    identificationPoints: [
      "白い6枚の花弁（ハクモクレンは9枚）",
      "葉より先に白い花が咲く",
      "花は横向き〜斜め上向き（ハクモクレンは上向き）",
      "果実はデコボコした赤い集合果（コブシの名の由来）",
    ],
    habitat: "山地・公園・街路",
    season: "3〜4月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/コブシ" },
    ],
    evolutionNote: "モクレン科は被子植物の中でも比較的古い系統で、白亜紀前期には出現していた。",
    tags: ["木本", "落葉", "春", "白花", "山地"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/コブシ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── マツ科 ──────────────────────────────────────────
  {
    id: "akamatsu",
    jaName: "アカマツ",
    enName: "Japanese Red Pine",
    scientificName: "Pinus densiflora",
    familyId: "pinaceae",
    familyJaName: "マツ科",
    description:
      "日本の里山・山地に広く分布する常緑針葉樹。幹の上部が赤みを帯びた樹皮になるのが特徴。松茸のキノコと共生し、盆栽としても人気が高い。",
    identificationPoints: [
      "幹（特に上部）が赤みがかる",
      "葉は2本1束で細く柔らかめ",
      "クロマツよりやや葉が短く柔らかい",
      "山地・丘陵地に多い",
    ],
    habitat: "山地・丘陵・林",
    season: "通年",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アカマツ" },
    ],
    evolutionNote: "マツ科は中生代から存在する古い裸子植物のグループ。",
    tags: ["木本", "常緑", "裸子植物", "針葉樹", "山地"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/アカマツ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "kuromatsu",
    jaName: "クロマツ",
    enName: "Japanese Black Pine",
    scientificName: "Pinus thunbergii",
    familyId: "pinaceae",
    familyJaName: "マツ科",
    description:
      "海岸沿いに多く分布する常緑針葉樹。海風・塩に強く、海岸の防風林や盆栽として広く利用される。葉が硬くとがっていて、触ると痛いことが特徴。",
    identificationPoints: [
      "葉が硬く鋭くとがっている（触ると痛い）",
      "アカマツより葉が長く硬い",
      "幹は灰黒色〜暗灰色",
      "海岸・防風林に多い",
    ],
    habitat: "海岸・防風林・公園・庭",
    season: "通年",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クロマツ" },
    ],
    tags: ["木本", "常緑", "裸子植物", "針葉樹", "海岸"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/クロマツ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ヒノキ科 ──────────────────────────────────────
  {
    id: "sugi",
    jaName: "スギ",
    enName: "Japanese Cedar",
    scientificName: "Cryptomeria japonica",
    familyId: "cupressaceae",
    familyJaName: "ヒノキ科",
    description:
      "日本固有の常緑針葉樹。山林の大部分を占め、花粉症の原因植物として知られる。材は軽くて加工しやすく、建築材・木工材として重用される。",
    identificationPoints: [
      "葉は針状、らせん状に茎に密着",
      "樹皮は赤褐色で縦に裂ける繊維状",
      "球果は丸く、鱗片の先端がとがる",
      "幹はまっすぐに伸びる",
    ],
    habitat: "山林・植林地",
    season: "通年",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スギ" },
    ],
    evolutionNote: "裸子植物の針葉樹類は中生代に大繁栄した。スギ属は日本と中国に隔離分布する。",
    tags: ["木本", "常緑", "裸子植物", "針葉樹", "花粉症"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/スギ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── イチョウ科 ──────────────────────────────────────
  {
    id: "ginkgo",
    jaName: "イチョウ",
    enName: "Ginkgo",
    scientificName: "Ginkgo biloba",
    familyId: "ginkgoaceae",
    familyJaName: "イチョウ科",
    description:
      "生きた化石と呼ばれる裸子植物。現存する最古の樹木のひとつで、イチョウ科はこの1種のみ。扇形の葉と秋の黄葉が有名。街路樹・神社の御神木として広く植えられる。",
    identificationPoints: [
      "扇形または二裂した葉",
      "秋に鮮やかに黄葉する",
      "雌株は悪臭のある銀杏（種子）をつける",
      "葉脈が二又分岐（二叉脈）",
    ],
    habitat: "街路・公園・神社仏閣",
    season: "通年（黄葉は10〜11月）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イチョウ" },
    ],
    evolutionNote: "約2億年前（三畳紀）にさかのぼる系統。かつては多くの種があったが、現在は1種のみ生存。",
    tags: ["木本", "落葉", "裸子植物", "街路樹", "黄葉", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/イチョウ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── カバノキ科 ──────────────────────────────────────
  {
    id: "shirakaba",
    jaName: "シラカバ（シラカンバ）",
    enName: "Japanese White Birch",
    scientificName: "Betula platyphylla var. japonica",
    familyId: "betulaceae",
    familyJaName: "カバノキ科",
    description:
      "北海道・高原地帯の代表的な白い幹の落葉高木。白い樹皮が美しく、高原の景観の象徴。葉は菱形〜三角形で鋸歯がある。秋に黄葉する。",
    identificationPoints: [
      "白い樹皮が特徴的で、紙状にはがれる",
      "葉は菱形〜三角形で二重鋸歯",
      "雄花序は長いこんにゃく状（尾状花序）",
      "秋に黄葉",
    ],
    habitat: "北海道・高原・山地",
    season: "通年（黄葉は10〜11月）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シラカバ" },
    ],
    tags: ["木本", "落葉", "北海道", "高原", "黄葉", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/シラカバ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── アジサイ科 ──────────────────────────────────────
  {
    id: "ajisai",
    jaName: "アジサイ",
    enName: "Hydrangea",
    scientificName: "Hydrangea macrophylla",
    familyId: "hydrangeaceae",
    familyJaName: "アジサイ科",
    description:
      "梅雨の代表的な花木。日本原産で、土壌のpHによって青〜赤紫に花色が変わる。花に見える部分はほとんどが装飾花（萼が発達したもの）で、真の花は中心部の小さな花。",
    identificationPoints: [
      "球状の大きな花序（多数の装飾花が集まる）",
      "土壌酸性で青、アルカリ性で赤紫に変わる",
      "花弁4枚の装飾花が目立つ",
      "葉は大きく対生",
    ],
    habitat: "庭・公園・寺社・道ばた",
    season: "6〜7月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アジサイ" },
    ],
    tags: ["木本", "落葉", "梅雨", "青花", "公園", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/アジサイ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ニレ科 ──────────────────────────────────────────
  {
    id: "keyaki",
    jaName: "ケヤキ",
    enName: "Japanese Zelkova",
    scientificName: "Zelkova serrata",
    familyId: "ulmaceae",
    familyJaName: "ニレ科",
    description:
      "日本の代表的な落葉高木。大木になり、優美な樹形から公園・街路樹として最もよく使われる樹木のひとつ。秋の紅葉が美しい。材は硬くて丈夫で、欅造りの建築に使われてきた。",
    identificationPoints: [
      "葉は卵形〜長楕円形で縁に鋭い鋸歯",
      "箒状に広がる樹形",
      "樹皮は鱗片状にはがれ、はがれた跡が橙色",
      "秋にオレンジ〜赤褐色に紅葉",
    ],
    habitat: "公園・街路・社寺境内・山地",
    season: "通年（紅葉は10〜11月）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ケヤキ" },
    ],
    tags: ["木本", "落葉", "街路樹", "紅葉", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ケヤキ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ヒルガオ科 ──────────────────────────────────────
  {
    id: "asagao",
    jaName: "アサガオ",
    enName: "Japanese Morning Glory",
    scientificName: "Ipomoea nil",
    familyId: "convolvulaceae",
    familyJaName: "ヒルガオ科",
    description:
      "熱帯アジア原産で、江戸時代から日本人に親しまれる一年草。朝に咲いて昼には閉じる。ラッパ状の花は青・紫・赤・白など多彩。小学校の理科の教材として定番。",
    identificationPoints: [
      "ラッパ（じょうご）状の花",
      "朝に開いて昼頃に閉じる",
      "茎が左巻きにつる状に伸びる",
      "葉はハート形〜3裂",
    ],
    habitat: "花壇・垣根・学校・道ばた",
    season: "7〜10月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/アサガオ" },
    ],
    tags: ["草本", "一年草", "夏", "青花", "つる", "栽培"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/アサガオ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── トクサ科（シダ植物） ──────────────────────────────
  {
    id: "sugina",
    jaName: "スギナ（ツクシ）",
    enName: "Field Horsetail",
    scientificName: "Equisetum arvense",
    familyId: "equisetaceae",
    familyJaName: "トクサ科",
    description:
      "畑や道ばたに見られるシダ植物。春にツクシ（胞子茎）が先に出て、後からスギナ（栄養茎）が出る。石炭紀に繁栄したトクサ類の現存種。地下茎で広がり除草が困難。",
    identificationPoints: [
      "春にツクシ（先端が太鼓のばちのような胞子茎）が出る",
      "後から松の木に似たスギナ（栄養茎）が展開する",
      "茎に節があり、節ごとに輪生する側枝",
      "葉は退化して鱗片状",
    ],
    habitat: "畑・道ばた・河川敷・草地",
    season: "3〜4月（ツクシ）、4〜10月（スギナ）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/スギナ" },
    ],
    evolutionNote: "トクサ類は古生代石炭紀に大木になる植物群として繁栄。現存するEquisetumは維管束植物の生きた化石。",
    tags: ["シダ植物", "多年草", "道ばた", "畑", "春"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/スギナ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ゼンマイ科（シダ植物） ──────────────────────────────
  {
    id: "zenmai",
    jaName: "ゼンマイ",
    enName: "Japanese Royal Fern",
    scientificName: "Osmunda japonica",
    familyId: "osmundaceae",
    familyJaName: "ゼンマイ科",
    description:
      "山野の湿った斜面や水辺に生えるシダ植物。春に出る若芽（ゼンマイ）は食用になる山菜として有名。栄養葉と胞子葉が別々で、胞子葉は茶褐色になって目立つ。",
    identificationPoints: [
      "若芽が渦巻き状に巻いた「ゼンマイ」の形で展開する",
      "綿毛をまとった若芽",
      "栄養葉と胞子葉（茶褐色）が別々",
      "大型（60cm〜1m）",
    ],
    habitat: "山地・湿った林縁・谷筋・水辺",
    season: "4〜5月（若芽）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ゼンマイ" },
    ],
    evolutionNote: "ゼンマイ科はシダ植物の中でも古い系統で、化石記録はトリアス紀にさかのぼる。",
    tags: ["シダ植物", "多年草", "山野", "食用", "水辺"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ゼンマイ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ムクロジ科 ──────────────────────────────────────
  {
    id: "iroha_momiji",
    jaName: "イロハモミジ",
    enName: "Japanese Maple",
    scientificName: "Acer palmatum",
    familyId: "sapindaceae",
    familyJaName: "ムクロジ科",
    description:
      "日本の秋を代表する落葉小高木。掌状に深く5〜7裂した葉が特徴で、秋に赤・橙・黄と美しく紅葉する。庭園・公園・山地に広く見られ、園芸品種も多い。「いろはにほへと…」と数えながら小葉を摘む遊びが名前の由来ともいわれる。",
    identificationPoints: [
      "葉は掌状に5〜7裂し、裂片の先が尖る",
      "秋に赤〜橙色に紅葉する",
      "翼果（プロペラ状の果実）がペアでつく",
      "対生葉",
    ],
    habitat: "山地の雑木林・庭園・公園",
    season: "4月（花）・10〜11月（紅葉）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/イロハモミジ" },
    ],
    evolutionNote: "カエデ属の翼果はプロペラ回転しながら落下し、風による種子散布に特化した形態。",
    tags: ["木本", "落葉", "紅葉", "庭園", "山地", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/イロハモミジ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
  {
    id: "tou_kaede",
    jaName: "トウカエデ",
    enName: "Trident Maple",
    scientificName: "Acer buergerianum",
    familyId: "sapindaceae",
    familyJaName: "ムクロジ科",
    description:
      "中国原産の落葉高木で、日本では街路樹・公園樹として広く植えられる。葉は3裂（三叉戟形）が特徴で、他のカエデと見分けやすい。秋に橙〜赤に紅葉し、幹は灰褐色でやや鱗状にはがれる。",
    identificationPoints: [
      "葉が3裂（先端部のみ裂け、基部は丸みを帯びる）",
      "裂片の先は比較的鈍頭",
      "翼果の両翼がほぼ平行〜鋭角",
      "街路樹として列植されていることが多い",
    ],
    habitat: "街路・公園（植栽）",
    season: "4月（花）・11月（紅葉）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/トウカエデ" },
    ],
    tags: ["木本", "落葉", "街路樹", "紅葉", "帰化植物"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/トウカエデ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ミズキ科 ──────────────────────────────────────
  {
    id: "hana_mizuki",
    jaName: "ハナミズキ",
    enName: "Flowering Dogwood",
    scientificName: "Cornus florida",
    familyId: "cornaceae",
    familyJaName: "ミズキ科",
    description:
      "北アメリカ原産の落葉小高木。日本では1912年に東京市長がワシントンDCにサクラを贈った返礼として贈られて以来広まった。4月頃、葉より先に白〜ピンクの大きな4枚の総苞片（花弁状）を開く。秋の紅葉と赤い実も美しい。",
    identificationPoints: [
      "花弁状の総苞片4枚（先端が凹む）が目立つ（本当の花は中央の小さな集まり）",
      "総苞片は白またはピンク",
      "秋に赤く紅葉し、赤い楕円形の実をつける",
      "葉は対生、弧状の葉脈が目立つ",
    ],
    habitat: "公園・街路・庭園（植栽）",
    season: "4月（花）・10〜11月（紅葉・実）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ハナミズキ" },
    ],
    evolutionNote: "ミズキ科の総苞片の発達は、小さな花を大きく見せる送粉者誘引の戦略。",
    tags: ["木本", "落葉", "春", "白花", "街路樹", "帰化植物", "有名"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ハナミズキ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ヤナギ科 ──────────────────────────────────────
  {
    id: "shidare_yanagi",
    jaName: "シダレヤナギ",
    enName: "Weeping Willow",
    scientificName: "Salix babylonica",
    familyId: "salicaceae",
    familyJaName: "ヤナギ科",
    description:
      "中国原産の落葉高木で、長く垂れ下がる枝が特徴。水辺・川沿いに多く植えられ、春に黄緑色の葉と柳の穂（尾状花序）を出す。柳絮（りゅうじょ）と呼ばれる綿毛つき種子が初夏に大量に飛散する。日本には奈良時代以前に伝来したとされる。",
    identificationPoints: [
      "枝が長く垂れ下がる（下垂性）",
      "葉は細長い披針形、両面ほぼ緑色",
      "春に細長い尾状花序をつける",
      "初夏に白い綿毛（柳絮）が飛散する",
    ],
    habitat: "水辺・川沿い・公園（植栽）",
    season: "3〜4月（花・展葉）・5〜6月（柳絮）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/シダレヤナギ" },
    ],
    evolutionNote: "ヤナギ科の綿毛つき種子は風による長距離散布に特化。水辺への定着能力が高い。",
    tags: ["木本", "落葉", "水辺", "帰化植物", "街路樹"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/シダレヤナギ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ブナ科（追加） ──────────────────────────────────────
  {
    id: "kuri",
    jaName: "クリ",
    enName: "Japanese Chestnut",
    scientificName: "Castanea crenata",
    familyId: "fagaceae",
    familyJaName: "ブナ科",
    description:
      "日本・朝鮮半島原産の落葉高木。秋に熟すイガに包まれた果実（栗）は縄文時代から食用にされてきた。雄花序は初夏に白い穂状で、独特の匂いがある。里山の代表的な食用樹のひとつ。",
    identificationPoints: [
      "葉は長楕円形で鋸歯が尖る",
      "初夏に白い穂状の雄花序（独特の匂い）",
      "秋にトゲのあるイガに包まれた実",
      "樹皮は縦に深く裂ける",
    ],
    habitat: "山地の雑木林・里山・栽培",
    season: "6〜7月（花）・9〜10月（実）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/クリ" },
    ],
    evolutionNote: "ブナ科のドングリ・クリ類は動物（リス・ネズミ）による貯食散布で広がった。",
    tags: ["木本", "落葉", "里山", "食用", "秋"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/クリ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── ヒノキ科（追加） ──────────────────────────────────────
  {
    id: "hinoki",
    jaName: "ヒノキ",
    enName: "Japanese Cypress",
    scientificName: "Chamaecyparis obtusa",
    familyId: "cupressaceae",
    familyJaName: "ヒノキ科",
    description:
      "日本固有の常緑針葉樹。材は光沢があり良い香りを放ち、神社・仏閣・風呂桶など高級建材として重用される。スギとともに日本の山林の主要造林樹種で、花粉症の原因植物でもある。葉の裏にY字形の白い気孔帯（白い紋様）がある。",
    identificationPoints: [
      "葉の裏にY字形（蝶型）の白い気孔帯がある",
      "葉は鱗状で、枝が平たく広がる",
      "球果は丸く小さい（径約1cm）",
      "材・葉ともに独特の良い香り",
    ],
    habitat: "山地（植林・自生）",
    season: "通年（常緑）・3〜4月（花粉飛散）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ヒノキ" },
    ],
    evolutionNote: "裸子植物の針葉樹類は中生代に繁栄。ヒノキ科はスギ科と統合されAPG体系では広義のCupressaceaeとなった。",
    tags: ["木本", "常緑", "裸子植物", "針葉樹", "花粉症", "建材"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ヒノキ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },

  // ── マメ科（追加） ──────────────────────────────────────
  {
    id: "nemu",
    jaName: "ネムノキ",
    enName: "Persian Silk Tree",
    scientificName: "Albizia julibrissin",
    familyId: "fabaceae",
    familyJaName: "マメ科",
    description:
      "夏に淡いピンクのふわふわとした花（雄しべの束）を咲かせる落葉高木。夜になると小葉が合わさるように閉じる就眠運動が特徴で、「眠りの木」がネムノキの名前の由来。河原・公園・道ばたに生え、マメ科らしく根に根粒菌をもつ。",
    identificationPoints: [
      "二回羽状複葉で、小葉が夜に閉じる（就眠運動）",
      "夏にピンク〜白の糸状の雄しべが多数目立つ花",
      "豆果（長い鞘）をつける",
      "樹皮は灰褐色で横長の皮目がある",
    ],
    habitat: "河原・道ばた・公園・山野",
    season: "6〜8月（花）",
    externalLinks: [
      { label: "Wikipedia（日本語）", url: "https://ja.wikipedia.org/wiki/ネムノキ" },
    ],
    evolutionNote: "マメ科は根粒菌との共生により窒素固定を行い、貧栄養環境でも生育できる。",
    tags: ["木本", "落葉", "夏", "ピンク花", "河原"],
    sources: [
      {
        type: "claude_ai",
        label: "Claude AI生成（未確認）",
        note: "内容の正確性は未確認。YList・Wikipedia等での点検が必要。",
      },
      {
        type: "wikipedia_ja",
        label: "Wikipedia 日本語版",
        url: "https://ja.wikipedia.org/wiki/ネムノキ",
      },
    ],
    review: {
      status: "ai_generated",
      note: "Claude AIが生成。学名・和名・分類・説明文すべて要確認。",
    },
  },
];
