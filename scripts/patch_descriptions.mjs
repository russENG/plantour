/**
 * scripts/new_descriptions.json の内容で plants.ts の
 * Sketchfab 由来の新規追加種（description: "（準備中）"）を更新する
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const descs = JSON.parse(readFileSync(join(__dirname, "new_descriptions.json"), "utf-8"));
const plantsPath = join(root, "src/data/plants.ts");
let src = readFileSync(plantsPath, "utf-8");

let updated = 0;
let missing = 0;
const missingIds = [];

for (const [id, d] of Object.entries(descs)) {
  // Match the exact stub block for this id
  const re = new RegExp(
    `(\\{\\s*\\n\\s*id:\\s*"${id}",[\\s\\S]*?description:\\s*)"（準備中）"([\\s\\S]*?identificationPoints:\\s*)\\[\\]([\\s\\S]*?habitat:\\s*)"（準備中）"([\\s\\S]*?season:\\s*)"（準備中）"([\\s\\S]*?tags:\\s*)\\[\\]`
  );
  if (!re.test(src)) {
    missing++;
    missingIds.push(id);
    continue;
  }
  const idPointsArr = d.identificationPoints.map(p => `        ${JSON.stringify(p)},`).join("\n");
  const tagsArr = d.tags.map(t => JSON.stringify(t)).join(", ");
  src = src.replace(re,
    `$1${JSON.stringify(d.description)}$2[\n${idPointsArr}\n      ]$3${JSON.stringify(d.habitat)}$4${JSON.stringify(d.season)}$5[${tagsArr}]`
  );
  updated++;
}

writeFileSync(plantsPath, src);
console.log(`Updated: ${updated}, Missing: ${missing}`);
if (missingIds.length) console.log("Missing IDs:", missingIds.join(", "));
