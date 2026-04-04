import type { KeyNode } from "./types";

/**
 * 植物検索表（ステップ式分岐キー）
 * 全272科をカバー。各末端の resultFamilyIds を全てユニオンすると全科になる。
 */
export const keyNodes: Record<string, KeyNode> = {
  // ══════════════════════════════════════════════════════════════
  //  Level 0: 最初の大分岐
  // ══════════════════════════════════════════════════════════════
  start: {
    id: "start",
    question: "この植物の特徴は？",
    enQuestion: "What are the characteristics of this plant?",
    hint: "大きな体制（形態）で分けます。根・茎・葉がはっきり区別できるか、花や種子があるかを見てください。",
    enHint: "Start with the overall body plan. Can you clearly distinguish roots, stems, and leaves? Does it produce flowers or seeds?",
    options: [
      { id: "s_bryo", label: "根・茎・葉の区別がはっきりしない（コケ状）", enLabel: "Roots, stems, and leaves are not clearly differentiated (moss-like)", nextNodeId: "bryophyte" },
      { id: "s_spore", label: "根・茎・葉の区別はあるが花は咲かない（シダ状）", enLabel: "Has distinct roots, stems, and leaves but no flowers (fern-like)", nextNodeId: "spore_plant" },
      { id: "s_seed", label: "花が咲く、または球果・種子がある", enLabel: "Produces flowers, or has cones/seeds", nextNodeId: "seed_plant" },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  コケ植物 (Bryophyta) — 科レベル未対応のため空配列
  // ══════════════════════════════════════════════════════════════
  bryophyte: {
    id: "bryophyte",
    question: "コケの体はどんな形？",
    enQuestion: "What is the body form of this moss?",
    hint: "蘚類は茎と葉がある立体的な形。苔類は地面に張り付く葉状体が多い。",
    enHint: "Mosses (Bryopsida) have an upright form with stems and leaves. Liverworts (Marchantiopsida) often have flat thalli pressed against the ground.",
    options: [
      { id: "b_moss", label: "茎と小さな葉が区別できる（スギゴケ型）", enLabel: "Stems and small leaves are distinguishable (Polytrichum type)", resultFamilyIds: [] },
      { id: "b_liver", label: "扁平な葉状体で地面に張り付く（ゼニゴケ型）", enLabel: "Flat thallus pressed against the ground (Marchantia type)", resultFamilyIds: [] },
      { id: "b_horn", label: "角状の胞子体が目立つ", enLabel: "Horn-shaped sporophyte is prominent", resultFamilyIds: [] },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  シダ・小葉植物 (胞子植物)
  // ══════════════════════════════════════════════════════════════
  spore_plant: {
    id: "spore_plant",
    question: "葉の特徴は？",
    enQuestion: "What are the leaf characteristics?",
    hint: "小葉類（ヒカゲノカズラ類）は鱗片状の小さな葉。トクサ類は節がある茎と輪生する歯状の葉。シダ類は大きな羽状複葉。",
    enHint: "Lycophytes have small, scale-like microphylls. Horsetails (Equisetum) have jointed stems with whorled tooth-like leaves. Ferns have large pinnately compound megaphylls.",
    options: [
      { id: "sp_lyco", label: "鱗片状の小さな葉が密生", enLabel: "Small scale-like leaves densely arranged (microphylls)", nextNodeId: "lycophyte" },
      { id: "sp_equi", label: "茎に節があり、小さな葉が輪生", enLabel: "Jointed stem with small whorled leaves (horsetail)", resultFamilyIds: ["equisetaceae"] },
      { id: "sp_fern", label: "大きな羽状〜掌状の葉（シダ型）", enLabel: "Large pinnate to palmate fronds (fern type)", nextNodeId: "fern" },
    ],
  },
  lycophyte: {
    id: "lycophyte",
    question: "生育環境は？",
    enQuestion: "What is the growing environment?",
    hint: "ヒカゲノカズラ・イワヒバは地上の林床や岩上。ミズニラは水中〜湿地。",
    enHint: "Club mosses and spike mosses grow on forest floors or rocks. Quillworts (Isoetes) grow submerged or in wetlands.",
    options: [
      { id: "ly_land", label: "地上・岩上（林床や岩壁）", enLabel: "Terrestrial — forest floor or rock surfaces", resultFamilyIds: ["lycopodiaceae", "selaginellaceae"] },
      { id: "ly_aqua", label: "水中または水辺の泥上", enLabel: "Aquatic or on wet mud near water", resultFamilyIds: ["isoetaceae"] },
    ],
  },
  fern: {
    id: "fern",
    question: "生育形態は？",
    enQuestion: "What is the growth form?",
    hint: "木性シダは幹がある大型種（ヘゴなど）。水生シダは水面に浮かぶ（サンショウモなど）。",
    enHint: "Tree ferns have an upright trunk (e.g., Cyathea). Aquatic ferns float on the water surface (e.g., Salvinia).",
    options: [
      { id: "f_tree", label: "幹がある木性シダ", enLabel: "Tree fern with an upright trunk", resultFamilyIds: ["cyatheaceae", "dicksoniaceae"] },
      { id: "f_aqua", label: "水面に浮かぶ・水中に沈む", enLabel: "Floating on water or submerged", resultFamilyIds: ["salviniaceae", "azollaceae", "marsileaceae"] },
      { id: "f_film", label: "非常に薄い透明な葉", enLabel: "Very thin, translucent fronds (filmy fern)", resultFamilyIds: ["hymenophyllaceae"] },
      { id: "f_norm", label: "普通の地上性シダ", enLabel: "Ordinary terrestrial fern", nextNodeId: "fern_normal" },
    ],
  },
  fern_normal: {
    id: "fern_normal",
    question: "胞子嚢（胞子をつくる部分）のつき方は？",
    enQuestion: "How are the sporangia (spore-producing structures) arranged?",
    hint: "多くのシダは葉の裏に胞子嚢群（ソーラス）がつきますが、一部は別の胞子専用葉を持ちます。",
    enHint: "Most ferns bear sori (clusters of sporangia) on the underside of fronds, but some have separate fertile fronds dedicated to spore production.",
    options: [
      { id: "fn_sep", label: "栄養葉と胞子葉が別々に分化", enLabel: "Sterile and fertile fronds are differentiated", resultFamilyIds: ["osmundaceae", "ophioglossaceae", "psilotaceae", "marattiaceae"] },
      { id: "fn_sorus", label: "葉の裏面にソーラス（胞子嚢群）がつく", enLabel: "Sori (clusters of sporangia) on the underside of fronds", resultFamilyIds: [
        "plagiogyriaceae", "gleicheniaceae", "dipteridaceae", "schizaeaceae",
        "cheiropleuriaceae", "adiantaceae", "vittariaceae", "pteridaceae",
        "dennstaedtiaceae", "lindsaeaceae", "aspleniaceae", "woodsiaceae",
        "thelypteridaceae", "blechnaceae", "dryopteridaceae", "lomariopsidaceae",
        "oleandraceae", "davalliaceae", "polypodiaceae", "grammitidaceae",
      ]},
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  種子植物
  // ══════════════════════════════════════════════════════════════
  seed_plant: {
    id: "seed_plant",
    question: "種子は果実（子房壁）に包まれていますか？",
    enQuestion: "Are the seeds enclosed in a fruit (ovary wall)?",
    hint: "裸子植物（マツ・スギなど）は球果で種子がむき出し。被子植物（花をつける植物）は果実に種子が包まれています。",
    enHint: "Gymnosperms (pines, cedars, etc.) bear naked seeds on cone scales. Angiosperms (flowering plants) enclose seeds within a fruit derived from the ovary.",
    options: [
      { id: "sd_gymno", label: "球果・裸の種子（マツぼっくり状など）", enLabel: "Cones or naked seeds (e.g., pine cone type)", nextNodeId: "gymnosperm" },
      { id: "sd_angio", label: "花が咲き、果実ができる", enLabel: "Produces flowers and fruits", nextNodeId: "angiosperm" },
    ],
  },

  // ── 裸子植物 ──────────────────────────────────────────────
  gymnosperm: {
    id: "gymnosperm",
    question: "葉の形は？",
    enQuestion: "What is the leaf shape?",
    hint: "イチョウは扇形の葉。ソテツはヤシに似た大きな羽状葉。針葉樹は針状〜鱗片状。",
    enHint: "Ginkgo has fan-shaped leaves. Cycads have large palm-like pinnate leaves. Conifers have needle-like or scale-like leaves.",
    options: [
      { id: "g_fan", label: "扇形で二又に分かれる葉脈", enLabel: "Fan-shaped leaves with dichotomous venation", resultFamilyIds: ["ginkgoaceae"] },
      { id: "g_palm", label: "大きな羽状複葉（ソテツ型）", enLabel: "Large pinnately compound leaves (cycad type)", resultFamilyIds: ["cycadaceae"] },
      { id: "g_needle", label: "針状・鱗片状（針葉樹）", enLabel: "Needle-like or scale-like leaves (conifer)", nextNodeId: "conifer" },
      { id: "g_other", label: "その他（つる状・対生する幅広の葉など）", enLabel: "Other (vine-like, opposite broad leaves, etc.)", resultFamilyIds: ["ephedraceae", "gnetaceae", "welwitschiaceae"] },
    ],
  },
  conifer: {
    id: "conifer",
    question: "葉のつき方は？",
    enQuestion: "How are the leaves arranged?",
    hint: "マツ類は2〜5本が束になる。スギ・ヒノキは螺旋状〜十字対生。",
    enHint: "Pines have 2-5 needles in fascicles. Cryptomeria and Chamaecyparis have spirally to decussately arranged leaves.",
    options: [
      { id: "c_bundle", label: "2〜5本が短枝上に束になる", enLabel: "2-5 needles bundled in fascicles on short shoots", resultFamilyIds: ["pinaceae"] },
      { id: "c_spiral", label: "螺旋状に密生（スギ型）・傘状の輪生", enLabel: "Spirally dense (Cryptomeria type) or umbrella-like whorls", resultFamilyIds: ["cupressaceae", "sciadopityaceae", "araucariaceae"] },
      { id: "c_scale", label: "対生または輪生する鱗片状の葉", enLabel: "Opposite or whorled scale-like leaves", resultFamilyIds: ["cupressaceae", "podocarpaceae", "cephalotaxaceae", "taxaceae"] },
    ],
  },

  // ── 被子植物 ──────────────────────────────────────────────
  angiosperm: {
    id: "angiosperm",
    question: "花びらの構成と葉脈は？",
    enQuestion: "What is the petal arrangement and leaf venation?",
    hint: "単子葉類は花被片が3の倍数・葉脈が平行。双子葉類は4〜5の倍数・葉脈が網状。基部被子植物は花被片が多数のものがある。",
    enHint: "Monocots have tepals in multiples of 3 with parallel venation. Eudicots have parts in 4s or 5s with reticulate venation. Basal angiosperms may have numerous spirally arranged tepals.",
    options: [
      { id: "a_mono", label: "花被片3の倍数・葉脈が平行（単子葉型）", enLabel: "Tepals in multiples of 3, parallel venation (monocot type)", nextNodeId: "monocot" },
      { id: "a_eudi", label: "花被片4〜5の倍数・葉脈が網状（双子葉型）", enLabel: "Tepals in multiples of 4-5, reticulate venation (eudicot type)", nextNodeId: "eudicot" },
      { id: "a_basal", label: "花被片が多数・らせん状、または水生で花が原始的", enLabel: "Numerous spirally arranged tepals, or aquatic with primitive flowers", nextNodeId: "basal_angio" },
    ],
  },

  // ── 基部被子植物 ──────────────────────────────────────────
  basal_angio: {
    id: "basal_angio",
    question: "生育環境は？",
    enQuestion: "What is the growing environment?",
    hint: "スイレン科は水生。モクレン科・クスノキ科などは樹木。コショウ科・ドクダミ科はつる性や草本で独特の香りを持つものが多い。",
    enHint: "Nymphaeaceae are aquatic. Magnoliaceae and Lauraceae are trees. Piperaceae and Saururaceae are often vines or herbs with distinctive aromas.",
    options: [
      { id: "ba_aqua", label: "水生（水面に浮く大きな葉と花）", enLabel: "Aquatic (large floating leaves and flowers)", resultFamilyIds: ["nymphaeaceae", "cabombaceae", "ceratophyllaceae"] },
      { id: "ba_aroma", label: "草本〜つる性で独特の香り", enLabel: "Herb or vine with a distinctive aroma", resultFamilyIds: ["piperaceae", "aristolochiaceae", "saururaceae", "chloranthaceae"] },
      { id: "ba_tree", label: "木本で大型の花・芳香", enLabel: "Woody tree with large, fragrant flowers", resultFamilyIds: [
        "magnoliaceae", "annonaceae", "calycanthaceae", "lauraceae",
        "myristicaceae", "hernandiaceae", "degeneriaceae", "schisandraceae",
      ]},
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  単子葉類
  // ══════════════════════════════════════════════════════════════
  monocot: {
    id: "monocot",
    question: "最も目立つ特徴は？",
    enQuestion: "What is the most prominent feature?",
    hint: "イネ科は茎（稈）が中空で節がある。ラン科は左右対称の花が特徴。ヤシ科は木本。",
    enHint: "Grasses (Poaceae) have hollow culms with nodes. Orchids (Orchidaceae) have bilaterally symmetrical flowers. Palms (Arecaceae) are woody.",
    options: [
      { id: "m_grass", label: "細い茎に節がある・花は目立たない（イネ・カヤツリ型）", enLabel: "Slender stem with nodes, inconspicuous flowers (grass/sedge type)", nextNodeId: "monocot_grass" },
      { id: "m_flower", label: "大きく目立つ花がある", enLabel: "Large, showy flowers", nextNodeId: "monocot_flower" },
      { id: "m_spadix", label: "肉穂花序（仏炎苞に包まれた穂状の花）", enLabel: "Spadix (fleshy spike enclosed in a spathe)", resultFamilyIds: ["araceae", "acoraceae"] },
      { id: "m_aqua", label: "水生植物", enLabel: "Aquatic plant", nextNodeId: "monocot_aqua" },
      { id: "m_woody", label: "木本（ヤシ型・タケ型・タコノキ型）", enLabel: "Woody (palm, bamboo, or screwpine type)", resultFamilyIds: ["arecaceae", "pandanaceae", "cyclanthaceae"] },
    ],
  },
  monocot_grass: {
    id: "monocot_grass",
    question: "茎の断面と葉鞘の形は？",
    enQuestion: "What are the stem cross-section and leaf sheath like?",
    hint: "イネ科は茎が丸く葉鞘が筒状。カヤツリグサ科は茎が三角で葉鞘が開く。イグサ科は丸い中実の茎。",
    enHint: "Grasses have round, hollow stems with tubular sheaths. Sedges (Cyperaceae) have triangular stems with open sheaths. Rushes (Juncaceae) have round, solid stems.",
    options: [
      { id: "mg_round", label: "茎が丸く中空、葉鞘が筒状に閉じる", enLabel: "Round, hollow stem; leaf sheath closed into a tube", resultFamilyIds: ["poaceae", "flagellariaceae", "restionaceae"] },
      { id: "mg_tri", label: "茎が三角形、葉鞘が開く", enLabel: "Triangular stem; leaf sheath open", resultFamilyIds: ["cyperaceae"] },
      { id: "mg_rush", label: "丸い中実の茎、花は地味", enLabel: "Round, solid stem; inconspicuous flowers", resultFamilyIds: ["juncaceae", "eriocaulaceae", "xyridaceae", "centrolepidaceae", "typhaceae"] },
    ],
  },
  monocot_flower: {
    id: "monocot_flower",
    question: "花の対称性は？",
    enQuestion: "What is the floral symmetry?",
    hint: "ラン科・ショウガ科は左右対称（唇弁がある）。ユリ科・アヤメ科は放射対称で花被片6枚。",
    enHint: "Orchids and gingers are zygomorphic (bilaterally symmetrical with a labellum). Lilies and irises are actinomorphic (radially symmetrical) with 6 tepals.",
    options: [
      { id: "mf_zygo", label: "左右対称（唇弁・距など）", enLabel: "Zygomorphic (labellum, spur, etc.)", resultFamilyIds: [
        "orchidaceae", "zingiberaceae", "costaceae", "cannaceae",
        "musaceae", "marantaceae", "strelitziaceae", "heliconiaceae",
      ]},
      { id: "mf_radial", label: "放射対称で花被片6枚", enLabel: "Actinomorphic (radially symmetrical) with 6 tepals", nextNodeId: "monocot_6petal" },
    ],
  },
  monocot_6petal: {
    id: "monocot_6petal",
    question: "地下に球根・鱗茎があるか？",
    enQuestion: "Is there a bulb or corm underground?",
    hint: "チューリップ・ヒガンバナ・クロッカスなどは球根がある。ツユクサ・ギボウシなどは根茎。",
    enHint: "Tulips, Lycoris, and Crocus have bulbs or corms. Commelina and Hosta have rhizomes.",
    options: [
      { id: "m6_bulb", label: "球根・鱗茎がある", enLabel: "Has a bulb or corm", resultFamilyIds: ["liliaceae", "amaryllidaceae", "iridaceae", "hypoxidaceae"] },
      { id: "m6_no", label: "根茎・繊維根（球根なし）", enLabel: "Rhizome or fibrous roots (no bulb)", resultFamilyIds: [
        "asparagaceae", "commelinaceae", "pontederiaceae", "xanthorrhoeaceae",
        "philydraceae", "hanguanaceae", "smilacaceae", "dioscoreaceae",
        "stemonaceae", "bromeliaceae",
      ]},
    ],
  },
  monocot_aqua: {
    id: "monocot_aqua",
    question: "生育環境は淡水？海水？",
    enQuestion: "Is the habitat freshwater or saltwater?",
    hint: "アマモ・ウミヒルモは海草。ミズオオバコ・ヒルムシロは淡水。",
    enHint: "Zostera and Halophila are seagrasses. Ottelia and Potamogeton are freshwater plants.",
    options: [
      { id: "ma_sea", label: "海水中（海草）", enLabel: "Marine (seagrass)", resultFamilyIds: ["zosteraceae", "cymodoceaceae", "ruppiaceae"] },
      { id: "ma_fresh", label: "淡水中", enLabel: "Freshwater", resultFamilyIds: [
        "alismataceae", "hydrocharitaceae", "potamogetonaceae",
        "aponogetonaceae", "butomaceae", "scheuchzeriaceae", "juncaginaceae",
      ]},
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  真正双子葉類
  // ══════════════════════════════════════════════════════════════
  eudicot: {
    id: "eudicot",
    question: "花弁はくっついている（合弁花）か、離れている（離弁花）か？",
    enQuestion: "Are the petals fused (sympetalous) or separate (choripetalous)?",
    hint: "アサガオ・ツツジは花弁が合着（筒状）。サクラ・バラは花弁がバラバラに離れています。花弁がない場合もあります。",
    enHint: "Morning glories and azaleas have fused petals (tubular). Cherries and roses have free, separate petals. Some plants lack petals entirely.",
    options: [
      { id: "e_sym", label: "花弁が合着（筒状・壺状・鐘形）", enLabel: "Petals fused (tubular, urceolate, or bell-shaped)", nextNodeId: "sympetalous" },
      { id: "e_chor", label: "花弁が離生（1枚ずつ離れている）", enLabel: "Petals free (each petal separate)", nextNodeId: "choripetalous" },
      { id: "e_none", label: "花弁がない・花被が萼片状・風媒花", enLabel: "No petals, sepal-like perianth, or wind-pollinated", nextNodeId: "apetalous" },
    ],
  },

  // ── 合弁花 ────────────────────────────────────────────────
  sympetalous: {
    id: "sympetalous",
    question: "花の形は？",
    enQuestion: "What is the flower shape?",
    hint: "頭状花序（タンポポ型）は多数の小花が集まったもの。唇形はシソ科に多い。放射対称はツツジ・ナス科など。",
    enHint: "Capitula (dandelion type) consist of many small florets. Labiate (lipped) corollas are common in Lamiaceae. Radially symmetrical tubular flowers are found in Ericaceae and Solanaceae.",
    options: [
      { id: "sy_head", label: "頭状花序（多数の小花が集合）", enLabel: "Capitulum (many florets aggregated into a head)", resultFamilyIds: ["asteraceae", "campanulaceae", "goodeniaceae"] },
      { id: "sy_zygo", label: "左右対称（唇形花冠など）", enLabel: "Zygomorphic (bilabiate corolla, etc.)", nextNodeId: "symp_zygo" },
      { id: "sy_rad", label: "放射対称の筒形〜漏斗形", enLabel: "Actinomorphic tubular to funnel-shaped", nextNodeId: "symp_radial" },
      { id: "sy_umbel", label: "散形花序（傘状に多数の小花）", enLabel: "Umbel (many small flowers in an umbrella-like cluster)", resultFamilyIds: ["apiaceae", "araliaceae", "pittosporaceae"] },
    ],
  },
  symp_zygo: {
    id: "symp_zygo",
    question: "おしべの数は？",
    enQuestion: "How many stamens are there?",
    hint: "唇形花（シソ型）は4本が多い。2本はモクセイ科。5本はノウゼンカズラ科など。",
    enHint: "Labiate flowers (Lamiaceae type) usually have 4 stamens. Oleaceae have 2. Bignoniaceae often have 5.",
    options: [
      { id: "sz_4", label: "4本（2本が長い）", enLabel: "4 stamens (2 longer, didynamous)", resultFamilyIds: [
        "lamiaceae", "plantaginaceae", "scrophulariaceae",
        "orobanchaceae", "phrymaceae", "pedaliaceae", "martyniaceae",
      ]},
      { id: "sz_2", label: "2本", enLabel: "2 stamens", resultFamilyIds: ["oleaceae", "acanthaceae"] },
      { id: "sz_5", label: "5本", enLabel: "5 stamens", resultFamilyIds: ["bignoniaceae", "verbenaceae", "gesneriaceae", "lentibulariaceae"] },
    ],
  },
  symp_radial: {
    id: "symp_radial",
    question: "果実や花の特徴は？",
    enQuestion: "What are the fruit and flower characteristics?",
    hint: "ナス科は液果（トマト型）が多い。ツツジ科は壺形〜鐘形で蒴果。ヒルガオ科はアサガオ型の漏斗形。",
    enHint: "Solanaceae often produce berries (tomato type). Ericaceae have urceolate to campanulate flowers with capsular fruit. Convolvulaceae have funnel-shaped flowers (morning glory type).",
    options: [
      { id: "sr_berry", label: "液果（ナス・トマト型）、花は星形〜漏斗形", enLabel: "Berry (tomato type); star-shaped to funnel-shaped flowers", resultFamilyIds: ["solanaceae"] },
      { id: "sr_urn", label: "壺形〜鐘形の花、蒴果", enLabel: "Urceolate to campanulate flowers; capsular fruit", resultFamilyIds: [
        "ericaceae", "actinidiaceae", "clethraceae", "theaceae",
        "primulaceae", "ebenaceae", "sapotaceae", "styracaceae",
        "symplocaceae", "diapensiaceae", "sarraceniaceae", "lecythidaceae",
      ]},
      { id: "sr_funnel", label: "漏斗形（アサガオ型）", enLabel: "Funnel-shaped (morning glory type)", resultFamilyIds: ["convolvulaceae", "polemoniaceae"] },
      { id: "sr_tube", label: "筒状花冠、対生の葉", enLabel: "Tubular corolla with opposite leaves", resultFamilyIds: [
        "rubiaceae", "caprifoliaceae", "adoxaceae", "gentianaceae",
        "loganiaceae", "apocynaceae", "boraginaceae", "menyanthaceae",
        "aquifoliaceae", "cardiopteridaceae", "sphenocleaceae",
      ]},
    ],
  },

  // ── 離弁花 ────────────────────────────────────────────────
  choripetalous: {
    id: "choripetalous",
    question: "花弁の数は？",
    enQuestion: "How many petals are there?",
    hint: "アブラナ科は4枚。バラ科・マメ科は5枚。キンポウゲ科は5枚以上（多数）のことも。",
    enHint: "Brassicaceae have 4 petals. Rosaceae and Fabaceae have 5. Ranunculaceae may have 5 or more (numerous).",
    options: [
      { id: "ch_4", label: "4枚", enLabel: "4 petals", nextNodeId: "chori_4" },
      { id: "ch_5", label: "5枚", enLabel: "5 petals", nextNodeId: "chori_5" },
      { id: "ch_many", label: "多数（5枚以上）", enLabel: "Numerous (more than 5)", resultFamilyIds: [
        "ranunculaceae", "papaveraceae", "berberidaceae", "lardizabalaceae",
        "menispermaceae", "paeoniaceae", "dilleniaceae", "nymphaeaceae",
      ]},
    ],
  },
  chori_4: {
    id: "chori_4",
    question: "おしべの数は？",
    enQuestion: "How many stamens are there?",
    hint: "アブラナ科は6本（4長2短）。アカバナ科は4本。ケシ科は多数。",
    enHint: "Brassicaceae have 6 stamens (4 long + 2 short, tetradynamous). Onagraceae have 4. Papaveraceae have numerous stamens.",
    options: [
      { id: "c4_6", label: "6本（うち4本が長い）", enLabel: "6 stamens (4 long + 2 short, tetradynamous)", resultFamilyIds: ["brassicaceae", "capparaceae", "resedaceae"] },
      { id: "c4_4", label: "4本", enLabel: "4 stamens", resultFamilyIds: ["onagraceae", "cornaceae", "staphyleaceae"] },
      { id: "c4_many", label: "多数", enLabel: "Numerous stamens", resultFamilyIds: ["papaveraceae", "combretaceae", "lythraceae", "melastomataceae", "myrtaceae"] },
    ],
  },
  chori_5: {
    id: "chori_5",
    question: "子房の位置は？（花の付け根を見る）",
    enQuestion: "What is the ovary position? (Look at the base of the flower)",
    hint: "子房上位：花弁とがくより上に子房がある。子房下位：子房が花の下に沈む（セリ科・ウリ科）。",
    enHint: "Superior ovary: ovary is above the attachment of petals and sepals. Inferior ovary: ovary is embedded below the flower (Apiaceae, Cucurbitaceae).",
    options: [
      { id: "c5_sup", label: "子房上位（花弁やがくの内側に子房）", enLabel: "Superior ovary (ovary above petals and sepals)", nextNodeId: "chori_5_sup" },
      { id: "c5_inf", label: "子房下位（子房が花の下に沈む）", enLabel: "Inferior ovary (ovary embedded below the flower)", resultFamilyIds: [
        "apiaceae", "araliaceae", "cornaceae",
        "cucurbitaceae", "begoniaceae", "datiscaceae",
        "hydrangeaceae", "grossulariaceae", "saxifragaceae",
      ]},
    ],
  },
  chori_5_sup: {
    id: "chori_5_sup",
    question: "葉のつき方と特徴は？",
    enQuestion: "What is the leaf arrangement and characteristics?",
    hint: "互生+托葉はバラ科の特徴。対生+十字はナデシコ科。掌状〜複葉はフウロソウ科やカタバミ科。",
    enHint: "Alternate leaves with stipules are characteristic of Rosaceae. Opposite decussate leaves are typical of Caryophyllaceae. Palmate or compound leaves suggest Geraniaceae or Oxalidaceae.",
    options: [
      { id: "c5s_stip", label: "互生、托葉がある", enLabel: "Alternate leaves with stipules", resultFamilyIds: [
        "rosaceae", "fabaceae", "rhamnaceae", "elaeagnaceae",
        "chrysobalanaceae", "connaraceae", "cunoniaceae",
      ]},
      { id: "c5s_opp", label: "対生、托葉なし", enLabel: "Opposite leaves without stipules", resultFamilyIds: [
        "caryophyllaceae", "clusiaceae", "celastraceae",
        "coriariaceae", "elatinaceae",
      ]},
      { id: "c5s_palm", label: "掌状・複葉・羽状複葉", enLabel: "Palmate, compound, or pinnately compound leaves", resultFamilyIds: [
        "geraniaceae", "oxalidaceae", "sapindaceae", "rutaceae",
        "meliaceae", "simaroubaceae", "anacardiaceae", "burseraceae",
        "linaceae", "erythroxylaceae", "tropaeolaceae", "moringaceae",
        "caryocaraceae",
      ]},
      { id: "c5s_other", label: "その他（多様な葉形）", enLabel: "Other (various leaf forms)", resultFamilyIds: [
        "violaceae", "passifloraceae", "malvaceae", "thymelaeaceae",
        "bixaceae", "cistaceae", "dipterocarpaceae", "euphorbiaceae",
        "malpighiaceae", "podostemaceae", "rafflesiaceae",
        "elaeocarpaceae", "rhizophoraceae",
        "vitaceae", "polygalaceae", "zygophyllaceae", "surianaceae",
        "crassulaceae", "haloragaceae", "loasaceae", "balsaminaceae",
        "stachyuraceae", "caricaceae",
      ]},
    ],
  },

  // ── 無花弁類 ──────────────────────────────────────────────
  apetalous: {
    id: "apetalous",
    question: "木本か草本か？",
    enQuestion: "Is it woody or herbaceous?",
    hint: "カシ・ブナ・シラカバなどは尾状花序（垂れ下がる穂状の花）を持つ木本。タデ・ヒユは花弁のない草本。",
    enHint: "Oaks, beeches, and birches are woody plants with catkins (pendulous spike-like inflorescences). Polygonaceae and Amaranthaceae are herbaceous without petals.",
    options: [
      { id: "ap_tree", label: "木本（尾状花序または目立たない花序）", enLabel: "Woody (catkins or inconspicuous inflorescences)", resultFamilyIds: [
        "fagaceae", "betulaceae", "juglandaceae", "myricaceae",
        "nothofagaceae", "casuarinaceae", "salicaceae",
        "moraceae", "urticaceae", "cannabaceae", "ulmaceae",
        "platanaceae", "hamamelidaceae", "cercidiphyllaceae",
        "daphniphyllaceae", "eupteleaceae", "trochodendraceae",
        "buxaceae", "proteaceae", "gunneraceae", "sabiaceae",
      ]},
      { id: "ap_herb", label: "草本（花弁がない、または萼が花弁状）", enLabel: "Herbaceous (no petals, or sepals are petal-like)", resultFamilyIds: [
        "polygonaceae", "amaranthaceae", "phytolaccaceae",
        "nyctaginaceae", "molluginaceae", "basellaceae",
        "portulacaceae", "cactaceae", "aizoaceae",
        "plumbaginaceae", "tamaricaceae", "pandaceae",
        "droseraceae", "nepenthaceae", "cephalotaceae",
        "ancistrocladaceae",
      ]},
      { id: "ap_para", label: "寄生・腐生植物（葉緑素がない/少ない）", enLabel: "Parasitic or mycoheterotrophic (lacking or with reduced chlorophyll)", resultFamilyIds: [
        "balanophoraceae", "loranthaceae", "santalaceae",
        "olacaceae", "opiliaceae", "mitrastemonaceae",
        "triuridaceae", "petrosaviaceae", "burmanniaceae", "icacinaceae",
        "eucommiaceae",
      ]},
    ],
  },
};

export const keyStartNodeId = "start";
