/**
 * scripts/proposed-fixes.json を読み、plants.ts / families.ts を実際に書き換える。
 * - newUrl がある場合: oldUrl → newUrl で文字列置換
 * - newUrl が無い場合 (候補なし):
 *     - family なら imageUrl 行を削除（member plant にフォールバックする）
 *     - plant なら一旦 imageUrl 行を削除（クイズ対象外になる）。後で手動補完する
 *
 * 実行: npx tsx scripts/apply-image-fixes.ts
 */
import { readFileSync, writeFileSync, existsSync } from "fs";

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

if (!existsSync("scripts/proposed-fixes.json")) {
  console.error("先に fix-image-urls.ts を実行してください。");
  process.exit(1);
}

const fixes: Fix[] = JSON.parse(readFileSync("scripts/proposed-fixes.json", "utf-8"));

// 改行コードを保持して読み書きするため、Buffer 経由で扱う
function readPreserveCrlf(path: string): { content: string; eol: string } {
  const buf = readFileSync(path, "utf-8");
  const eol = buf.includes("\r\n") ? "\r\n" : "\n";
  return { content: buf, eol };
}

const plantsPath = "src/data/plants.ts";
const familiesPath = "src/data/families.ts";
let plantsTxt = readPreserveCrlf(plantsPath);
let familiesTxt = readPreserveCrlf(familiesPath);

let replaced = 0;
let removedFamily = 0;
let removedPlant = 0;
const failed: Fix[] = [];

for (const f of fixes) {
  const target = f.kind === "plant" ? plantsTxt : familiesTxt;
  if (f.newUrl) {
    // 単純文字列置換: oldUrl は一意のはず（同じ画像 URL は普通他に出てこない）
    const oldEsc = f.oldUrl;
    const before = target.content;
    const after = before.replace(oldEsc, f.newUrl);
    if (before === after) {
      failed.push({ ...f, reason: "oldUrl not found in source file" });
      continue;
    }
    if (f.kind === "plant") plantsTxt = { ...plantsTxt, content: after };
    else familiesTxt = { ...familiesTxt, content: after };
    replaced++;
  } else {
    // imageUrl 行ごと削除（行末カンマ含む）
    // パターン: `    imageUrl: "<oldUrl>",\n` (CRLF or LF). 余分な空行を残さないため改行込みで消す
    const eol = f.kind === "plant" ? plantsTxt.eol : familiesTxt.eol;
    const before = f.kind === "plant" ? plantsTxt.content : familiesTxt.content;
    // 様々なインデント (4 or 6 spaces) と末尾カンマに対応
    const re = new RegExp(`[ \\t]*imageUrl:\\s*"${f.oldUrl.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}",[ \\t]*${eol === "\\r\\n" ? "\\r\\n" : "\\n"}`);
    const after = before.replace(re, "");
    if (before === after) {
      // フォールバック: 単純削除（行を空文字に）
      const reSimple = new RegExp(`[ \\t]*imageUrl:\\s*"${f.oldUrl.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}",[ \\t]*`);
      const after2 = before.replace(reSimple, "");
      if (before === after2) {
        failed.push({ ...f, reason: "imageUrl line not found" });
        continue;
      }
      if (f.kind === "plant") plantsTxt = { ...plantsTxt, content: after2 };
      else familiesTxt = { ...familiesTxt, content: after2 };
    } else {
      if (f.kind === "plant") plantsTxt = { ...plantsTxt, content: after };
      else familiesTxt = { ...familiesTxt, content: after };
    }
    if (f.kind === "family") removedFamily++;
    else removedPlant++;
  }
}

writeFileSync(plantsPath, plantsTxt.content, "utf-8");
writeFileSync(familiesPath, familiesTxt.content, "utf-8");

console.log(`── 結果 ──`);
console.log(`✅ 置換 (新URL): ${replaced}`);
console.log(`🗑️  imageUrl 削除 (family): ${removedFamily}（member plant にフォールバック）`);
console.log(`🗑️  imageUrl 削除 (plant): ${removedPlant}（手動補完が望ましい）`);
console.log(`❌ 失敗: ${failed.length}`);
if (failed.length > 0) {
  for (const f of failed) {
    console.log(`  [${f.kind}] ${f.jaName} (${f.id}): ${f.reason}`);
  }
}
