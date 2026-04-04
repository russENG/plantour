const TAG = "ajikennoko-22";

export interface AffiliateLink {
  label: string;
  url: string;
}

// ─── URL ヘルパー ─────────────────────────────────────────────

function book(asin: string, label: string): AffiliateLink {
  return { label, url: `https://www.amazon.co.jp/dp/${asin}?tag=${TAG}` };
}

function foodSearch(jaName: string): AffiliateLink {
  return {
    label: `${jaName}をAmazonで探す`,
    url: `https://www.amazon.co.jp/s?k=${encodeURIComponent(jaName)}&i=food-beverage&tag=${TAG}`,
  };
}

function bookSearch(query: string): AffiliateLink {
  return {
    label: `${query}の図鑑を探す`,
    url: `https://www.amazon.co.jp/s?k=${encodeURIComponent(query + " 図鑑")}&i=books&tag=${TAG}`,
  };
}

// ─── 確認済み書籍 ASIN ────────────────────────────────────────

const BOOKS = {
  koke:      book("4816366415", "コケ図鑑（ナツメ社）"),
  jumoku:    book("4816355901", "樹木図鑑（ナツメ社）"),
  yasou:     book("4816355898", "野草図鑑（ナツメ社）"),
  sannyaso:  book("4023333182", "山野草図鑑（朝日新聞出版）"),
  shida:     book("4635063542", "くらべてわかるシダ（山と渓谷社）"),
  mizukusa:  book("4829930349", "日本水草図鑑（文一総合出版）"),
  ineka:     book("482991078X", "イネ科ハンドブック（文一総合出版）"),
  sakura:    book("4829901810", "サクラハンドブック（文一総合出版）"),
  bara:      book("4635580369", "新・薔薇大図鑑2200（山と渓谷社）"),
  tanpopo:   book("4886223141", "日本のタンポポとセイヨウタンポポ"),
};

// ─── 食品植物ID（食材リンクを使う）─────────────────────────────

const FOOD_PLANT_IDS = new Set([
  // 穀物・豆
  "ine", "komugi", "omugi", "daizu", "azuki", "toumorokoshi", "soba",
  // 野菜
  "daikon", "kyabetsu", "ninjin", "tomato", "kyuuri", "tamanegi",
  "jagaimo", "hourensou", "gobou", "negi", "ninniku", "kabocha",
  "satsumaimo", "wasabi", "shiso", "shoga", "nanohana",
  // 果物
  "mikan", "ringo", "momo", "nashi", "ichigo", "suika",
]);

// ─── 種ごとの個別上書き ───────────────────────────────────────

const PLANT_OVERRIDE: Record<string, AffiliateLink[]> = {
  sakura:  [BOOKS.sakura, BOOKS.jumoku],
  bara:    [BOOKS.bara],
  tanpopo: [BOOKS.tanpopo, BOOKS.yasou],
  susuki:  [BOOKS.ineka, BOOKS.yasou],
  ine:     [BOOKS.ineka, foodSearch("米")],
  komugi:  [foodSearch("小麦粉"), BOOKS.ineka],
  daizu:   [foodSearch("大豆"), bookSearch("豆類")],
  azuki:   [foodSearch("小豆"), bookSearch("豆類")],
  soba:    [foodSearch("そば粉"), bookSearch("ソバ")],
  toumorokoshi: [foodSearch("とうもろこし")],
};

// ─── 科ごとのリンク ───────────────────────────────────────────

const FAMILY_LINKS: Record<string, AffiliateLink[]> = {
  poaceae:     [BOOKS.ineka],
  orchidaceae: [bookSearch("日本のラン")],
  rosaceae:    [BOOKS.bara, BOOKS.jumoku],
  asteraceae:  [BOOKS.yasou, BOOKS.sannyaso],
  fabaceae:    [BOOKS.yasou],
  liliaceae:   [BOOKS.sannyaso],
  amaryllidaceae: [BOOKS.sannyaso],
  violaceae:   [BOOKS.yasou, BOOKS.sannyaso],
  ranunculaceae:  [BOOKS.yasou, BOOKS.sannyaso],
  ericaceae:   [BOOKS.jumoku],
  fagaceae:    [BOOKS.jumoku],
  betulaceae:  [BOOKS.jumoku],
  sapindaceae: [BOOKS.jumoku],
  pinaceae:    [BOOKS.jumoku],
  cupressaceae:[BOOKS.jumoku],
  magnoliaceae:[BOOKS.jumoku],
};

// ─── コケ・シダ科ID セット ────────────────────────────────────

const MOSS_FAMILY_IDS = new Set([
  "marchantiaceae","polytrichaceae","sphagnaceae","grimmiaceae",
  "funariaceae","bryaceae","mniaceae","hypnaceae","thuidiaceae",
  "conocephalaceae","pelliaceae","aytoniaceae","aneuraceae",
  "pallaviciniaceae","porellaceae","lejeuneaceae","radulaceae",
  "frullaniaceae","calymperaceae","pottiaceae",
]);

const FERN_FAMILY_IDS = new Set([
  "equisetaceae","osmundaceae","dryopteridaceae","aspleniaceae",
  "thelypteridaceae","polypodiaceae","adiantaceae","pteridaceae",
  "dennstaedtiaceae","athyriaceae","blechnaceae","salviniaceae",
  "marsileaceae","selaginellaceae","lycopodiaceae","psilotaceae",
  "marattiaceae","ophioglossaceae","angiopteridaceae","gleicheniaceae",
]);

// ─── メイン関数 ───────────────────────────────────────────────

/** 種ページ用アフィリエイトリンク一覧 */
export function getPlantAffiliateLinks(
  plantId: string,
  jaName: string,
  familyId: string,
  habit?: string,
  habitat?: string,
): AffiliateLink[] {
  // 1. 個別上書き
  if (PLANT_OVERRIDE[plantId]) return PLANT_OVERRIDE[plantId];

  // 2. 食品植物 → 食材リンク
  if (FOOD_PLANT_IDS.has(plantId)) return [foodSearch(jaName)];

  // 3. コケ
  if (MOSS_FAMILY_IDS.has(familyId)) return [BOOKS.koke];

  // 4. シダ
  if (FERN_FAMILY_IDS.has(familyId)) return [BOOKS.shida];

  // 5. 水生植物
  if (habitat === "aquatic") return [BOOKS.mizukusa];

  // 6. イネ科
  if (familyId === "poaceae") return [BOOKS.ineka];

  // 7. 科ごとのリンク
  if (FAMILY_LINKS[familyId]) return FAMILY_LINKS[familyId];

  // 8. 習性ベース
  if (habit === "tree" || habit === "shrub") return [BOOKS.jumoku];

  // 9. デフォルト：野草図鑑 + 山野草図鑑
  return [BOOKS.yasou, BOOKS.sannyaso];
}

/** 科ページ用アフィリエイトリンク一覧 */
export function getFamilyAffiliateLinks(
  familyId: string,
  jaName: string,
): AffiliateLink[] {
  if (MOSS_FAMILY_IDS.has(familyId)) return [BOOKS.koke];
  if (FERN_FAMILY_IDS.has(familyId)) return [BOOKS.shida];
  if (FAMILY_LINKS[familyId]) return FAMILY_LINKS[familyId];
  return [bookSearch(jaName)];
}
