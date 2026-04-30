/**
 * scripts/missing-images.json をもとに Wikimedia Commons を検索し、
 * 各エントリの代替画像候補を取得して proposed-fixes.json に書き出す。
 * 学名で検索し、ヒットした上位の中から JPEG/PNG・幅 >= 800px・属名一致のものを選ぶ。
 *
 * 実行: npx tsx scripts/fix-image-urls.ts
 */
import { plants } from "../src/data/plants";
import { families } from "../src/data/families";
import { readFileSync, writeFileSync, existsSync } from "fs";

const UA = "PlantourBot/1.0 (https://plantour-pearl.vercel.app)";

interface Broken {
  kind: "plant" | "family";
  id: string;
  jaName: string;
  imageUrl: string;
  filename: string;
}

interface Fix {
  kind: "plant" | "family";
  id: string;
  jaName: string;
  scientificName: string;
  oldUrl: string;
  newUrl: string | null;
  candidateTitle: string | null;
  candidateSize: string | null;
  reason?: string;
}

if (!existsSync("scripts/missing-images.json")) {
  console.error("先に check-image-urls.ts を実行してください。");
  process.exit(1);
}

const broken: Broken[] = JSON.parse(readFileSync("scripts/missing-images.json", "utf-8"));

const plantMap = new Map(plants.map((p) => [p.id, p]));
const familyMap = new Map(families.map((f) => [f.id, f]));

interface SearchPage {
  pageid: number;
  title: string;
  imageinfo?: { url: string; width: number; height: number; mime: string }[];
  index?: number;
}

async function search(sciName: string): Promise<SearchPage[]> {
  const q = encodeURIComponent(`"${sciName}"`);
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${q}&gsrlimit=10&gsrnamespace=6&prop=imageinfo&iiprop=url|size|mime&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as { query?: { pages: Record<string, SearchPage> } };
  const pages = Object.values(data.query?.pages ?? {});
  pages.sort((a, b) => (a.index ?? 999) - (b.index ?? 999));
  return pages;
}

function pickCandidate(sciName: string, pages: SearchPage[]): SearchPage | null {
  // 属名（学名の最初のトークン）でファイル名フィルタ
  const genus = sciName.split(" ")[0].toLowerCase();
  for (const p of pages) {
    const ii = p.imageinfo?.[0];
    if (!ii) continue;
    if (!ii.mime.startsWith("image/")) continue;
    if (ii.mime === "image/svg+xml") continue; // 写真がほしい
    if (ii.width < 800) continue;
    if (ii.width > 8000) continue; // 巨大すぎは避ける
    const titleLow = p.title.toLowerCase();
    // 学名のいずれかのトークンが含まれていれば採用（属名 or 種小名）
    const tokens = sciName.toLowerCase().split(/\s+/).filter((t) => t.length >= 4);
    const hasMatch = tokens.some((t) => titleLow.includes(t));
    if (!hasMatch && !titleLow.includes(genus)) continue;
    return p;
  }
  return null;
}

(async () => {
  const fixes: Fix[] = [];
  let i = 0;
  for (const b of broken) {
    i++;
    const entity =
      b.kind === "plant" ? plantMap.get(b.id) : familyMap.get(b.id);
    if (!entity) {
      fixes.push({
        kind: b.kind,
        id: b.id,
        jaName: b.jaName,
        scientificName: "",
        oldUrl: b.imageUrl,
        newUrl: null,
        candidateTitle: null,
        candidateSize: null,
        reason: "entity not found",
      });
      continue;
    }
    const sciName = entity.scientificName;
    if (!sciName) {
      fixes.push({
        kind: b.kind,
        id: b.id,
        jaName: b.jaName,
        scientificName: "",
        oldUrl: b.imageUrl,
        newUrl: null,
        candidateTitle: null,
        candidateSize: null,
        reason: "no scientificName",
      });
      continue;
    }

    try {
      const results = await search(sciName);
      const cand = pickCandidate(sciName, results);
      if (cand && cand.imageinfo?.[0]) {
        const filename = cand.title.replace(/^File:/, "").replace(/ /g, "_");
        const newUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
        const ii = cand.imageinfo[0];
        fixes.push({
          kind: b.kind,
          id: b.id,
          jaName: b.jaName,
          scientificName: sciName,
          oldUrl: b.imageUrl,
          newUrl,
          candidateTitle: cand.title,
          candidateSize: `${ii.width}x${ii.height}`,
        });
      } else {
        fixes.push({
          kind: b.kind,
          id: b.id,
          jaName: b.jaName,
          scientificName: sciName,
          oldUrl: b.imageUrl,
          newUrl: null,
          candidateTitle: null,
          candidateSize: null,
          reason: "no suitable candidate",
        });
      }
    } catch (e) {
      fixes.push({
        kind: b.kind,
        id: b.id,
        jaName: b.jaName,
        scientificName: sciName,
        oldUrl: b.imageUrl,
        newUrl: null,
        candidateTitle: null,
        candidateSize: null,
        reason: `search error: ${(e as Error).message}`,
      });
    }
    process.stdout.write(`  ${i}/${broken.length} (修復済 ${fixes.filter((f) => f.newUrl).length})\r`);
    await new Promise((r) => setTimeout(r, 250)); // 礼儀スロットリング
  }
  console.log("\n");

  const fixed = fixes.filter((f) => f.newUrl);
  const failed = fixes.filter((f) => !f.newUrl);

  console.log(`── 結果 ──`);
  console.log(`✅ 候補取得: ${fixed.length}`);
  console.log(`❌ 候補なし: ${failed.length}`);
  if (failed.length > 0) {
    console.log(`\n候補が見つからなかったエントリ:`);
    for (const f of failed) {
      console.log(`  [${f.kind}] ${f.jaName} (${f.id}) sci=${f.scientificName} reason=${f.reason}`);
    }
  }

  writeFileSync("scripts/proposed-fixes.json", JSON.stringify(fixes, null, 2));
  console.log(`\n→ scripts/proposed-fixes.json に書き出し`);
})();
