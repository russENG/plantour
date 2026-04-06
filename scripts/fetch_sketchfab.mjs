/**
 * Sketchfab API から九大 ffishAsia-and-floraZia の植物モデルを全件取得し、
 * 種ごとに重複排除して JSON 出力する。
 */

const USER = "ffishAsia-and-floraZia";
const CATEGORY = "nature-plants";
const PAGE_SIZE = 24;

async function fetchAllModels() {
  const models = [];
  let cursor = null;
  let page = 0;

  while (true) {
    const url = new URL("https://api.sketchfab.com/v3/search");
    url.searchParams.set("type", "models");
    url.searchParams.set("user", USER);
    url.searchParams.set("categories", CATEGORY);
    url.searchParams.set("count", String(PAGE_SIZE));
    if (cursor) url.searchParams.set("cursor", cursor);

    const res = await fetch(url.toString());
    if (!res.ok) {
      console.error(`HTTP ${res.status} at cursor=${cursor}`);
      break;
    }
    const data = await res.json();
    if (!data.results || data.results.length === 0) break;

    for (const m of data.results) {
      models.push({
        uid: m.uid,
        name: m.name,
        tags: (m.tags || []).map((t) => t.name),
      });
    }

    page++;
    process.stderr.write(`Page ${page}: ${data.results.length} models (total ${models.length})\n`);

    cursor = data.cursors?.next;
    if (!cursor) break;

    // Rate limit
    await new Promise((r) => setTimeout(r, 300));
  }

  return models;
}

/**
 * モデル名からメタデータをパースする。
 * 典型パターン: "CC0 ヤブツバキ Tsubaki, Camellia japonica"
 *               "CC0 ドクダミ Fish Mint, Houttuynia cordata"
 */
function parseModelName(name) {
  // CC0 プレフィックスを除去
  let cleaned = name.replace(/^CC0\s+/, "").replace(/^\[.*?\]\s*/, "").replace(/^Donation.*$/, "");
  // 絵文字を除去
  cleaned = cleaned.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "").trim();
  // 漢字の補足情報を除去 (例: "蕾", "雄株", "果実")
  cleaned = cleaned.replace(/\s+(蕾|雄株|雌株|果実|新芽|松ぼっくり大|紅白ピンク|赤|白|山茶花|梅|栗|蔦|藤|銀杏|茶)\s*/g, " ").trim();

  // 学名を検出 (イタリック的なパターン: 大文字で始まる+小文字の2語)
  const sciMatch = cleaned.match(/[,\s]+([A-Z][a-z]+\s+[a-z]+(?:\s+(?:var\.|subsp\.|f\.)\s+[a-z]+)?)/);
  const scientificName = sciMatch ? sciMatch[1].trim() : "";

  // 和名を取得 (最初の日本語部分)
  const jaMatch = cleaned.match(/^([^\x00-\x7F][^\s,]*)(?:\s|$)/);
  const jaName = jaMatch ? jaMatch[1].replace(/[？?]/g, "").trim() : "";

  // 英名を取得 (和名と学名の間の英語部分)
  let enName = "";
  if (jaName && scientificName) {
    const afterJa = cleaned.substring(cleaned.indexOf(jaName) + jaName.length);
    const beforeSci = afterJa.substring(0, afterJa.indexOf(scientificName));
    enName = beforeSci.replace(/^[\s,]+/, "").replace(/[\s,]+$/, "").trim();
  } else if (jaName) {
    const afterJa = cleaned.substring(cleaned.indexOf(jaName) + jaName.length);
    enName = afterJa.replace(/^[\s,]+/, "").replace(/[\s,]+$/, "").trim();
  }

  return { jaName, enName, scientificName };
}

/**
 * 和名から plant ID を生成 (ローマ字化の簡易版)
 */
function jaNameToId(jaName) {
  // 既知の和名→ID マッピング用、ここではそのまま返す
  return jaName;
}

// 菌類・地衣類・動物をフィルタするキーワード
const EXCLUDE_KEYWORDS = [
  "Mushroom", "mushroom", "🍄", "キノコ", "タケ属",
  "Lichen", "lichen", "ゴケ属", "地衣",
  "Beetle", "beetle", "Bug", "bug", "Crab", "crab",
  "Frog", "frog", "Mantis", "mantis", "Moth", "moth",
  "Grasshopper", "grasshopper", "Locust", "locust",
  "water bug", "Isopod", "isopod",
  "Bagworm", "ミノムシ", "タガメ", "グソクムシ",
  "ドジョウ", "カメ", "イシガメ",
  "Donation", "寄付", "Support",
  "Misgurnus", "Kirkaldyia", "Mauremys",
];

function isExcluded(name, tags) {
  const text = name + " " + tags.join(" ");
  // 菌類判定
  if (/シイタケ|マツタケ|アミガサタケ|タヌキノチャブクロ|オニフスベ|ツチグリ|ハナイグチ|チャワンタケ|シロオニタケ|ツエタケ|ヒイロ|エノキタケ/u.test(text)) return true;
  // 地衣類判定
  if (/ウメノキゴケ|マツゲゴケ|クロミキゴケ/u.test(text)) return true;
  for (const kw of EXCLUDE_KEYWORDS) {
    if (text.includes(kw)) return true;
  }
  return false;
}

async function main() {
  console.error("Fetching all models from Sketchfab...");
  const allModels = await fetchAllModels();
  console.error(`Total models fetched: ${allModels.length}`);

  // フィルタ: 菌類・動物を除外
  const plantModels = allModels.filter((m) => !isExcluded(m.name, m.tags));
  console.error(`After filtering: ${plantModels.length} plant models`);

  // 種ごとに重複排除 (和名で集約、最初のモデルを採用)
  const speciesMap = new Map();
  for (const m of plantModels) {
    const parsed = parseModelName(m.name);
    if (!parsed.jaName) continue;
    // 和名で重複チェック (「類」「属」を含む場合はスキップ)
    if (/類$|属$|園芸品種|cv\.|未同定|sp\.\/spp/u.test(parsed.jaName + parsed.scientificName)) continue;

    const key = parsed.jaName;
    if (!speciesMap.has(key)) {
      speciesMap.set(key, {
        uid: m.uid,
        jaName: parsed.jaName,
        enName: parsed.enName,
        scientificName: parsed.scientificName,
        originalName: m.name,
      });
    }
  }

  const species = Array.from(speciesMap.values());
  console.error(`Unique species: ${species.length}`);

  // JSON で出力
  process.stdout.write(JSON.stringify(species, null, 2));
}

main().catch(console.error);
