/**
 * Wikimedia Commons の Special:FilePath 経由で参照している
 * plants.ts / families.ts の画像URLが Commons 側で削除/リネームされていないか
 * 一括チェックするスクリプト。
 *
 * 実行: npx tsx scripts/check-image-urls.ts
 *
 * 出力: missing-images.json（壊れているエントリのリスト）
 */
import { plants } from "../src/data/plants";
import { families } from "../src/data/families";
import { writeFileSync } from "fs";

interface Entry {
  kind: "plant" | "family";
  id: string;
  jaName: string;
  imageUrl: string;
  filename: string;
}

function extractFilename(url: string): string | null {
  // https://commons.wikimedia.org/wiki/Special:FilePath/<filename>
  const m = url.match(/Special:FilePath\/(.+?)(?:\?.*)?$/);
  if (m) return decodeURIComponent(m[1]);
  // https://upload.wikimedia.org/wikipedia/commons/<X>/<XX>/<filename>
  const m2 = url.match(/upload\.wikimedia\.org\/wikipedia\/commons\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/]+?)(?:\/[0-9]+px-.*)?$/);
  if (m2) return decodeURIComponent(m2[1]);
  return null;
}

const entries: Entry[] = [];
for (const p of plants) {
  if (!p.imageUrl) continue;
  const fn = extractFilename(p.imageUrl);
  if (!fn) continue;
  entries.push({ kind: "plant", id: p.id, jaName: p.jaName, imageUrl: p.imageUrl, filename: fn });
}
for (const f of families) {
  if (!f.imageUrl) continue;
  const fn = extractFilename(f.imageUrl);
  if (!fn) continue;
  entries.push({ kind: "family", id: f.id, jaName: f.jaName, imageUrl: f.imageUrl, filename: fn });
}

console.log(`チェック対象: ${entries.length} 件 (plants + families の Wikimedia 画像)`);

const UA = "PlantourBot/1.0 (https://plantour-pearl.vercel.app)";

interface QueryPage {
  title: string;
  missing?: string;
  imageinfo?: { url: string; width: number; height: number }[];
}

interface QueryResponse {
  query?: { pages: Record<string, QueryPage>; normalized?: { from: string; to: string }[] };
}

async function checkBatch(filenames: string[]): Promise<Map<string, QueryPage>> {
  const titles = filenames.map((f) => `File:${f}`).join("|");
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url|size&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as QueryResponse;
  const pages = data.query?.pages ?? {};
  const norm = new Map<string, string>();
  for (const n of data.query?.normalized ?? []) norm.set(n.from, n.to);
  // map: requested filename -> page
  const out = new Map<string, QueryPage>();
  for (const fn of filenames) {
    const reqTitle = `File:${fn}`;
    const normalized = norm.get(reqTitle) ?? reqTitle;
    const found = Object.values(pages).find((p) => p.title === normalized);
    if (found) out.set(fn, found);
  }
  return out;
}

const BATCH_SIZE = 50;
const broken: Entry[] = [];
const ok: Entry[] = [];

(async () => {
  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    const filenames = batch.map((e) => e.filename);
    try {
      const result = await checkBatch(filenames);
      for (const e of batch) {
        const page = result.get(e.filename);
        if (!page || page.missing !== undefined) {
          broken.push(e);
        } else {
          ok.push(e);
        }
      }
      process.stdout.write(`  ${i + batch.length}/${entries.length} (壊れ: ${broken.length})\r`);
    } catch (err) {
      console.error(`\nバッチ ${i}-${i + BATCH_SIZE} エラー:`, err);
    }
    // Wikimedia への礼儀として軽くスロットリング
    await new Promise((r) => setTimeout(r, 200));
  }
  console.log("\n");

  console.log(`── 結果 ──`);
  console.log(`✅ OK:    ${ok.length}`);
  console.log(`❌ 壊れ: ${broken.length}`);

  if (broken.length > 0) {
    console.log(`\n── 壊れているエントリ ──`);
    for (const e of broken) {
      console.log(`  [${e.kind}] ${e.jaName.padEnd(20)} (${e.id}) -> ${e.filename}`);
    }
    writeFileSync("scripts/missing-images.json", JSON.stringify(broken, null, 2));
    console.log(`\n詳細は scripts/missing-images.json に保存`);
  }
})();
