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
    hint: "大きな体制（形態）で分けます。根・茎・葉がはっきり区別できるか、花や種子があるかを見てください。",
    options: [
      { id: "s_bryo", label: "根・茎・葉の区別がはっきりしない（コケ状）", nextNodeId: "bryophyte" },
      { id: "s_spore", label: "根・茎・葉の区別はあるが花は咲かない（シダ状）", nextNodeId: "spore_plant" },
      { id: "s_seed", label: "花が咲く、または球果・種子がある", nextNodeId: "seed_plant" },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  コケ植物 (Bryophyta) — 科レベル未対応のため空配列
  // ══════════════════════════════════════════════════════════════
  bryophyte: {
    id: "bryophyte",
    question: "コケの体はどんな形？",
    hint: "蘚類は茎と葉がある立体的な形。苔類は地面に張り付く葉状体が多い。",
    options: [
      { id: "b_moss", label: "茎と小さな葉が区別できる（スギゴケ型）", resultFamilyIds: [] },
      { id: "b_liver", label: "扁平な葉状体で地面に張り付く（ゼニゴケ型）", resultFamilyIds: [] },
      { id: "b_horn", label: "角状の胞子体が目立つ", resultFamilyIds: [] },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  シダ・小葉植物 (胞子植物)
  // ══════════════════════════════════════════════════════════════
  spore_plant: {
    id: "spore_plant",
    question: "葉の特徴は？",
    hint: "小葉類（ヒカゲノカズラ類）は鱗片状の小さな葉。トクサ類は節がある茎と輪生する歯状の葉。シダ類は大きな羽状複葉。",
    options: [
      { id: "sp_lyco", label: "鱗片状の小さな葉が密生", nextNodeId: "lycophyte" },
      { id: "sp_equi", label: "茎に節があり、小さな葉が輪生", resultFamilyIds: ["equisetaceae"] },
      { id: "sp_fern", label: "大きな羽状〜掌状の葉（シダ型）", nextNodeId: "fern" },
    ],
  },
  lycophyte: {
    id: "lycophyte",
    question: "生育環境は？",
    hint: "ヒカゲノカズラ・イワヒバは地上の林床や岩上。ミズニラは水中〜湿地。",
    options: [
      { id: "ly_land", label: "地上・岩上（林床や岩壁）", resultFamilyIds: ["lycopodiaceae", "selaginellaceae"] },
      { id: "ly_aqua", label: "水中または水辺の泥上", resultFamilyIds: ["isoetaceae"] },
    ],
  },
  fern: {
    id: "fern",
    question: "生育形態は？",
    hint: "木性シダは幹がある大型種（ヘゴなど）。水生シダは水面に浮かぶ（サンショウモなど）。",
    options: [
      { id: "f_tree", label: "幹がある木性シダ", resultFamilyIds: ["cyatheaceae", "dicksoniaceae"] },
      { id: "f_aqua", label: "水面に浮かぶ・水中に沈む", resultFamilyIds: ["salviniaceae", "azollaceae", "marsileaceae"] },
      { id: "f_film", label: "非常に薄い透明な葉", resultFamilyIds: ["hymenophyllaceae"] },
      { id: "f_norm", label: "普通の地上性シダ", nextNodeId: "fern_normal" },
    ],
  },
  fern_normal: {
    id: "fern_normal",
    question: "胞子嚢（胞子をつくる部分）のつき方は？",
    hint: "多くのシダは葉の裏に胞子嚢群（ソーラス）がつきますが、一部は別の胞子専用葉を持ちます。",
    options: [
      { id: "fn_sep", label: "栄養葉と胞子葉が別々に分化", resultFamilyIds: ["osmundaceae", "ophioglossaceae", "psilotaceae", "marattiaceae"] },
      { id: "fn_sorus", label: "葉の裏面にソーラス（胞子嚢群）がつく", resultFamilyIds: [
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
    hint: "裸子植物（マツ・スギなど）は球果で種子がむき出し。被子植物（花をつける植物）は果実に種子が包まれています。",
    options: [
      { id: "sd_gymno", label: "球果・裸の種子（マツぼっくり状など）", nextNodeId: "gymnosperm" },
      { id: "sd_angio", label: "花が咲き、果実ができる", nextNodeId: "angiosperm" },
    ],
  },

  // ── 裸子植物 ──────────────────────────────────────────────
  gymnosperm: {
    id: "gymnosperm",
    question: "葉の形は？",
    hint: "イチョウは扇形の葉。ソテツはヤシに似た大きな羽状葉。針葉樹は針状〜鱗片状。",
    options: [
      { id: "g_fan", label: "扇形で二又に分かれる葉脈", resultFamilyIds: ["ginkgoaceae"] },
      { id: "g_palm", label: "大きな羽状複葉（ソテツ型）", resultFamilyIds: ["cycadaceae"] },
      { id: "g_needle", label: "針状・鱗片状（針葉樹）", nextNodeId: "conifer" },
      { id: "g_other", label: "その他（つる状・対生する幅広の葉など）", resultFamilyIds: ["ephedraceae", "gnetaceae", "welwitschiaceae"] },
    ],
  },
  conifer: {
    id: "conifer",
    question: "葉のつき方は？",
    hint: "マツ類は2〜5本が束になる。スギ・ヒノキは螺旋状〜十字対生。",
    options: [
      { id: "c_bundle", label: "2〜5本が短枝上に束になる", resultFamilyIds: ["pinaceae"] },
      { id: "c_spiral", label: "螺旋状に密生（スギ型）・傘状の輪生", resultFamilyIds: ["cupressaceae", "sciadopityaceae", "araucariaceae"] },
      { id: "c_scale", label: "対生または輪生する鱗片状の葉", resultFamilyIds: ["cupressaceae", "podocarpaceae", "cephalotaxaceae", "taxaceae"] },
    ],
  },

  // ── 被子植物 ──────────────────────────────────────────────
  angiosperm: {
    id: "angiosperm",
    question: "花びらの構成と葉脈は？",
    hint: "単子葉類は花被片が3の倍数・葉脈が平行。双子葉類は4〜5の倍数・葉脈が網状。基部被子植物は花被片が多数のものがある。",
    options: [
      { id: "a_mono", label: "花被片3の倍数・葉脈が平行（単子葉型）", nextNodeId: "monocot" },
      { id: "a_eudi", label: "花被片4〜5の倍数・葉脈が網状（双子葉型）", nextNodeId: "eudicot" },
      { id: "a_basal", label: "花被片が多数・らせん状、または水生で花が原始的", nextNodeId: "basal_angio" },
    ],
  },

  // ── 基部被子植物 ──────────────────────────────────────────
  basal_angio: {
    id: "basal_angio",
    question: "生育環境は？",
    hint: "スイレン科は水生。モクレン科・クスノキ科などは樹木。コショウ科・ドクダミ科はつる性や草本で独特の香りを持つものが多い。",
    options: [
      { id: "ba_aqua", label: "水生（水面に浮く大きな葉と花）", resultFamilyIds: ["nymphaeaceae", "cabombaceae", "ceratophyllaceae"] },
      { id: "ba_aroma", label: "草本〜つる性で独特の香り", resultFamilyIds: ["piperaceae", "aristolochiaceae", "saururaceae", "chloranthaceae"] },
      { id: "ba_tree", label: "木本で大型の花・芳香", resultFamilyIds: [
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
    hint: "イネ科は茎（稈）が中空で節がある。ラン科は左右対称の花が特徴。ヤシ科は木本。",
    options: [
      { id: "m_grass", label: "細い茎に節がある・花は目立たない（イネ・カヤツリ型）", nextNodeId: "monocot_grass" },
      { id: "m_flower", label: "大きく目立つ花がある", nextNodeId: "monocot_flower" },
      { id: "m_spadix", label: "肉穂花序（仏炎苞に包まれた穂状の花）", resultFamilyIds: ["araceae", "acoraceae"] },
      { id: "m_aqua", label: "水生植物", nextNodeId: "monocot_aqua" },
      { id: "m_woody", label: "木本（ヤシ型・タケ型・タコノキ型）", resultFamilyIds: ["arecaceae", "pandanaceae", "cyclanthaceae"] },
    ],
  },
  monocot_grass: {
    id: "monocot_grass",
    question: "茎の断面と葉鞘の形は？",
    hint: "イネ科は茎が丸く葉鞘が筒状。カヤツリグサ科は茎が三角で葉鞘が開く。イグサ科は丸い中実の茎。",
    options: [
      { id: "mg_round", label: "茎が丸く中空、葉鞘が筒状に閉じる", resultFamilyIds: ["poaceae", "flagellariaceae", "restionaceae"] },
      { id: "mg_tri", label: "茎が三角形、葉鞘が開く", resultFamilyIds: ["cyperaceae"] },
      { id: "mg_rush", label: "丸い中実の茎、花は地味", resultFamilyIds: ["juncaceae", "eriocaulaceae", "xyridaceae", "centrolepidaceae", "typhaceae"] },
    ],
  },
  monocot_flower: {
    id: "monocot_flower",
    question: "花の対称性は？",
    hint: "ラン科・ショウガ科は左右対称（唇弁がある）。ユリ科・アヤメ科は放射対称で花被片6枚。",
    options: [
      { id: "mf_zygo", label: "左右対称（唇弁・距など）", resultFamilyIds: [
        "orchidaceae", "zingiberaceae", "costaceae", "cannaceae",
        "musaceae", "marantaceae", "strelitziaceae", "heliconiaceae",
      ]},
      { id: "mf_radial", label: "放射対称で花被片6枚", nextNodeId: "monocot_6petal" },
    ],
  },
  monocot_6petal: {
    id: "monocot_6petal",
    question: "地下に球根・鱗茎があるか？",
    hint: "チューリップ・ヒガンバナ・クロッカスなどは球根がある。ツユクサ・ギボウシなどは根茎。",
    options: [
      { id: "m6_bulb", label: "球根・鱗茎がある", resultFamilyIds: ["liliaceae", "amaryllidaceae", "iridaceae", "hypoxidaceae"] },
      { id: "m6_no", label: "根茎・繊維根（球根なし）", resultFamilyIds: [
        "asparagaceae", "commelinaceae", "pontederiaceae", "xanthorrhoeaceae",
        "philydraceae", "hanguanaceae", "smilacaceae", "dioscoreaceae",
        "stemonaceae", "bromeliaceae",
      ]},
    ],
  },
  monocot_aqua: {
    id: "monocot_aqua",
    question: "生育環境は淡水？海水？",
    hint: "アマモ・ウミヒルモは海草。ミズオオバコ・ヒルムシロは淡水。",
    options: [
      { id: "ma_sea", label: "海水中（海草）", resultFamilyIds: ["zosteraceae", "cymodoceaceae", "ruppiaceae"] },
      { id: "ma_fresh", label: "淡水中", resultFamilyIds: [
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
    hint: "アサガオ・ツツジは花弁が合着（筒状）。サクラ・バラは花弁がバラバラに離れています。花弁がない場合もあります。",
    options: [
      { id: "e_sym", label: "花弁が合着（筒状・壺状・鐘形）", nextNodeId: "sympetalous" },
      { id: "e_chor", label: "花弁が離生（1枚ずつ離れている）", nextNodeId: "choripetalous" },
      { id: "e_none", label: "花弁がない・花被が萼片状・風媒花", nextNodeId: "apetalous" },
    ],
  },

  // ── 合弁花 ────────────────────────────────────────────────
  sympetalous: {
    id: "sympetalous",
    question: "花の形は？",
    hint: "頭状花序（タンポポ型）は多数の小花が集まったもの。唇形はシソ科に多い。放射対称はツツジ・ナス科など。",
    options: [
      { id: "sy_head", label: "頭状花序（多数の小花が集合）", resultFamilyIds: ["asteraceae", "campanulaceae", "goodeniaceae"] },
      { id: "sy_zygo", label: "左右対称（唇形花冠など）", nextNodeId: "symp_zygo" },
      { id: "sy_rad", label: "放射対称の筒形〜漏斗形", nextNodeId: "symp_radial" },
      { id: "sy_umbel", label: "散形花序（傘状に多数の小花）", resultFamilyIds: ["apiaceae", "araliaceae", "pittosporaceae"] },
    ],
  },
  symp_zygo: {
    id: "symp_zygo",
    question: "おしべの数は？",
    hint: "唇形花（シソ型）は4本が多い。2本はモクセイ科。5本はノウゼンカズラ科など。",
    options: [
      { id: "sz_4", label: "4本（2本が長い）", resultFamilyIds: [
        "lamiaceae", "plantaginaceae", "scrophulariaceae",
        "orobanchaceae", "phrymaceae", "pedaliaceae", "martyniaceae",
      ]},
      { id: "sz_2", label: "2本", resultFamilyIds: ["oleaceae", "acanthaceae"] },
      { id: "sz_5", label: "5本", resultFamilyIds: ["bignoniaceae", "verbenaceae", "gesneriaceae", "lentibulariaceae"] },
    ],
  },
  symp_radial: {
    id: "symp_radial",
    question: "果実や花の特徴は？",
    hint: "ナス科は液果（トマト型）が多い。ツツジ科は壺形〜鐘形で蒴果。ヒルガオ科はアサガオ型の漏斗形。",
    options: [
      { id: "sr_berry", label: "液果（ナス・トマト型）、花は星形〜漏斗形", resultFamilyIds: ["solanaceae"] },
      { id: "sr_urn", label: "壺形〜鐘形の花、蒴果", resultFamilyIds: [
        "ericaceae", "actinidiaceae", "clethraceae", "theaceae",
        "primulaceae", "ebenaceae", "sapotaceae", "styracaceae",
        "symplocaceae", "diapensiaceae", "sarraceniaceae", "lecythidaceae",
      ]},
      { id: "sr_funnel", label: "漏斗形（アサガオ型）", resultFamilyIds: ["convolvulaceae", "polemoniaceae"] },
      { id: "sr_tube", label: "筒状花冠、対生の葉", resultFamilyIds: [
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
    hint: "アブラナ科は4枚。バラ科・マメ科は5枚。キンポウゲ科は5枚以上（多数）のことも。",
    options: [
      { id: "ch_4", label: "4枚", nextNodeId: "chori_4" },
      { id: "ch_5", label: "5枚", nextNodeId: "chori_5" },
      { id: "ch_many", label: "多数（5枚以上）", resultFamilyIds: [
        "ranunculaceae", "papaveraceae", "berberidaceae", "lardizabalaceae",
        "menispermaceae", "paeoniaceae", "dilleniaceae", "nymphaeaceae",
      ]},
    ],
  },
  chori_4: {
    id: "chori_4",
    question: "おしべの数は？",
    hint: "アブラナ科は6本（4長2短）。アカバナ科は4本。ケシ科は多数。",
    options: [
      { id: "c4_6", label: "6本（うち4本が長い）", resultFamilyIds: ["brassicaceae", "capparaceae", "resedaceae"] },
      { id: "c4_4", label: "4本", resultFamilyIds: ["onagraceae", "cornaceae", "staphyleaceae"] },
      { id: "c4_many", label: "多数", resultFamilyIds: ["papaveraceae", "combretaceae", "lythraceae", "melastomataceae", "myrtaceae"] },
    ],
  },
  chori_5: {
    id: "chori_5",
    question: "子房の位置は？（花の付け根を見る）",
    hint: "子房上位：花弁とがくより上に子房がある。子房下位：子房が花の下に沈む（セリ科・ウリ科）。",
    options: [
      { id: "c5_sup", label: "子房上位（花弁やがくの内側に子房）", nextNodeId: "chori_5_sup" },
      { id: "c5_inf", label: "子房下位（子房が花の下に沈む）", resultFamilyIds: [
        "apiaceae", "araliaceae", "cornaceae",
        "cucurbitaceae", "begoniaceae", "datiscaceae",
        "hydrangeaceae", "grossulariaceae", "saxifragaceae",
      ]},
    ],
  },
  chori_5_sup: {
    id: "chori_5_sup",
    question: "葉のつき方と特徴は？",
    hint: "互生+托葉はバラ科の特徴。対生+十字はナデシコ科。掌状〜複葉はフウロソウ科やカタバミ科。",
    options: [
      { id: "c5s_stip", label: "互生、托葉がある", resultFamilyIds: [
        "rosaceae", "fabaceae", "rhamnaceae", "elaeagnaceae",
        "chrysobalanaceae", "connaraceae", "cunoniaceae",
      ]},
      { id: "c5s_opp", label: "対生、托葉なし", resultFamilyIds: [
        "caryophyllaceae", "clusiaceae", "celastraceae",
        "coriariaceae", "elatinaceae",
      ]},
      { id: "c5s_palm", label: "掌状・複葉・羽状複葉", resultFamilyIds: [
        "geraniaceae", "oxalidaceae", "sapindaceae", "rutaceae",
        "meliaceae", "simaroubaceae", "anacardiaceae", "burseraceae",
        "linaceae", "erythroxylaceae", "tropaeolaceae", "moringaceae",
        "caryocaraceae",
      ]},
      { id: "c5s_other", label: "その他（多様な葉形）", resultFamilyIds: [
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
    hint: "カシ・ブナ・シラカバなどは尾状花序（垂れ下がる穂状の花）を持つ木本。タデ・ヒユは花弁のない草本。",
    options: [
      { id: "ap_tree", label: "木本（尾状花序または目立たない花序）", resultFamilyIds: [
        "fagaceae", "betulaceae", "juglandaceae", "myricaceae",
        "nothofagaceae", "casuarinaceae", "salicaceae",
        "moraceae", "urticaceae", "cannabaceae", "ulmaceae",
        "platanaceae", "hamamelidaceae", "cercidiphyllaceae",
        "daphniphyllaceae", "eupteleaceae", "trochodendraceae",
        "buxaceae", "proteaceae", "gunneraceae", "sabiaceae",
      ]},
      { id: "ap_herb", label: "草本（花弁がない、または萼が花弁状）", resultFamilyIds: [
        "polygonaceae", "amaranthaceae", "phytolaccaceae",
        "nyctaginaceae", "molluginaceae", "basellaceae",
        "portulacaceae", "cactaceae", "aizoaceae",
        "plumbaginaceae", "tamaricaceae", "pandaceae",
        "droseraceae", "nepenthaceae", "cephalotaceae",
        "ancistrocladaceae",
      ]},
      { id: "ap_para", label: "寄生・腐生植物（葉緑素がない/少ない）", resultFamilyIds: [
        "balanophoraceae", "loranthaceae", "santalaceae",
        "olacaceae", "opiliaceae", "mitrastemonaceae",
        "triuridaceae", "petrosaviaceae", "burmanniaceae", "icacinaceae",
        "eucommiaceae",
      ]},
    ],
  },
};

export const keyStartNodeId = "start";
