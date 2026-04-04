/**
 * 植物の和名に付与する絵文字のマッピング。
 * 種ID → 絵文字（個別指定が優先）、なければ科ID → 絵文字にフォールバック。
 */

const PLANT_EMOJI: Record<string, string> = {
  // キク科
  himawari:   "🌻",
  tanpopo:    "🌼",
  cosmos:     "🌸",
  kiku:       "🌸",
  yomogi:     "🌿",
  gobou:      "🌿",
  // バラ科
  sakura:     "🌸",
  ume:        "🌸",
  bara:       "🌹",
  ringo:      "🍎",
  momo:       "🍑",
  nashi:      "🍐",
  ichigo:     "🍓",
  // イネ科
  susuki:     "🌾",
  ine:        "🌾",
  komugi:     "🌾",
  omugi:      "🌾",
  toumorokoshi:"🌽",
  mosochiku:  "🎋",
  // マメ科
  daizu:      "🫘",
  azuki:      "🫘",
  fuji:       "💜",
  // アブラナ科
  nanohana:   "🌼",
  daikon:     "🌿",
  kyabetsu:   "🥬",
  wasabi:     "🌿",
  // セリ科
  ninjin:     "🥕",
  // ナス科
  tomato:     "🍅",
  jagaimo:    "🥔",
  // ウリ科
  kyuuri:     "🥒",
  suika:      "🍉",
  kabocha:    "🎃",
  // ミカン科
  mikan:      "🍊",
  sansho:     "🌿",
  // ヒルガオ科
  asagao:     "🌸",
  satsumaimo: "🍠",
  // カエデ（ムクロジ科）
  iroha_momiji:"🍁",
  tou_kaede:  "🍁",
  // 裸子植物
  ginkgo:     "🍃",
  akamatsu:   "🌲",
  kuromatsu:  "🌲",
  sugi:       "🌲",
  // ブナ科
  konara:     "🌳",
  kunugi:     "🌳",
  buna:       "🌳",
  // ツバキ科
  tsubaki:    "🌺",
  sazanka:    "🌺",
  // ユリ科
  tulip:      "🌷",
  // ヒガンバナ科
  suisen:     "🌼",
  // ラン科
  hoganran:   "🌸",
  // ネギ属（ヒガンバナ科）
  tamanegi:   "🧅",
  negi:       "🌿",
  ninniku:    "🌿",
  // その他
  ajisai:     "🌸",
  tsutsuji:   "🌸",
  shirakaba:  "🌳",
  kusunoki:   "🌿",
  kobushi:    "🌸",
  gama:       "🌾",
  mizubasho:  "🌿",
  utsubo_kazura:"🪴",
  soba:       "🌸",
  hourensou:  "🌿",
  shiso:      "🌿",
  shoga:      "🌿",
};

const FAMILY_EMOJI: Record<string, string> = {
  asteraceae:      "🌼",
  rosaceae:        "🌸",
  poaceae:         "🌾",
  fabaceae:        "🌿",
  brassicaceae:    "🌼",
  lamiaceae:       "🌿",
  violaceae:       "💜",
  liliaceae:       "🌷",
  amaryllidaceae:  "🌺",
  orchidaceae:     "🌸",
  pinaceae:        "🌲",
  cupressaceae:    "🌲",
  sciadopityaceae: "🌲",
  cycadaceae:      "🌴",
  ginkgoaceae:     "🍃",
  fagaceae:        "🌳",
  betulaceae:      "🌳",
  sapindaceae:     "🍁",
  magnoliaceae:    "🌸",
  salicaceae:      "🌿",
  lauraceae:       "🌿",
  theaceae:        "🌺",
  araceae:         "🌿",
  cactaceae:       "🌵",
  malvaceae:       "🌺",
  convolvulaceae:  "🌸",
  apiaceae:        "🌿",
  ericaceae:       "🌸",
  hydrangeaceae:   "🌸",
  campanulaceae:   "🌸",
  rutaceae:        "🍊",
  typhaceae:       "🌾",
  asparagaceae:    "🌿",
  commelinaceae:   "💧",
  bromeliaceae:    "🍍",
  nepenthaceae:    "🪴",
  ranunculaceae:   "🌸",
  caryophyllaceae: "🌸",
  primulaceae:     "🌸",
  gentianaceae:    "🌸",
  apocynaceae:     "🌸",
  solanaceae:      "🌿",
  polygonaceae:    "🌿",
  platanaceae:     "🌳",
  cornaceae:       "🌸",
  anacardiaceae:   "🍂",
  equisetaceae:    "🌿",
  osmundaceae:     "🌿",
};

export function getPlantEmoji(plantId: string, familyId: string): string | undefined {
  return PLANT_EMOJI[plantId] ?? FAMILY_EMOJI[familyId];
}

export function getFamilyEmoji(familyId: string): string | undefined {
  return FAMILY_EMOJI[familyId];
}
