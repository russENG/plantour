/**
 * .sketchfab_final.json → sketchfab.ts + plants.ts 追記
 */
import { readFileSync, writeFileSync, appendFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const { mapping, newPlants } = JSON.parse(readFileSync(join(root, ".sketchfab_final.json"), "utf-8"));

// ── sketchfab.ts 生成 ──────────────────────────────────────
const lines = [];
lines.push(`/**
 * 九州大学 鹿野研究室（ffishAsia-and-floraZia）の
 * Sketchfab 3D モデルと Plantour 植物のマッピング。
 * ライセンス: CC0（パブリックドメイン）
 * https://sketchfab.com/ffishAsia-and-floraZia
 *
 * 全 ${mapping.length} 種のマッピング（自動生成）
 */

export interface SketchfabModel {
  /** Sketchfab モデル UID */
  uid: string;
  /** 3Dモデルの和名 */
  modelJaName: string;
  /** 3Dモデルの英名 */
  modelEnName: string;
  /** 3Dモデルの学名 */
  modelScientificName: string;
  /** "exact": 同一種, "genus": 同属別種, "family": 同科別属 */
  matchLevel: "exact" | "genus" | "family";
}

export const sketchfabModels: Record<string, SketchfabModel> = {`);

for (const m of mapping) {
  const en = (m.enName || "").replace(/"/g, '\\"').replace(/[,].*/, "").replace(/[？?]/g, "").trim();
  const sci = (m.sci || "").replace(/"/g, '\\"');
  lines.push(`  ${m.plantId}: { uid: "${m.uid}", modelJaName: "${m.jaName}", modelEnName: "${en}", modelScientificName: "${sci}", matchLevel: "${m.match}" },`);
}

lines.push(`};

/** Sketchfab の埋め込み iframe URL を生成 */
export function sketchfabEmbedUrl(uid: string): string {
  return \`https://sketchfab.com/models/\${uid}/embed?autostart=1&ui_theme=dark&transparent=1\`;
}

/** Sketchfab のモデルページ URL を生成 */
export function sketchfabModelUrl(uid: string): string {
  return \`https://sketchfab.com/3d-models/\${uid}\`;
}
`);

writeFileSync(join(root, "src/data/sketchfab.ts"), lines.join("\n"));
console.log(`Written sketchfab.ts with ${mapping.length} entries`);

// ── plants.ts 追記 ──────────────────────────────────────────
const plantLines = [];
for (const p of newPlants) {
  const en = (p.enName || "").replace(/"/g, '\\"');
  const sci = (p.sci || "").replace(/"/g, '\\"');
  plantLines.push(`    {
      id: "${p.id}",
      jaName: "${p.jaName}",
      enName: "${en}",
      scientificName: "${sci}",
      familyId: "${p.fId}",
      familyJaName: "${p.fJa}",
      description: "（準備中）",
      identificationPoints: [],
      habitat: "（準備中）",
      season: "（準備中）",
      externalLinks: [],
      tags: [],
      sources: [{ type: "claude_ai" as const, label: "Claude AI" }],
      review: { status: "ai_generated" as const },
    },`);
}

// plants.ts の末尾 ]; の前に挿入
const plantsPath = join(root, "src/data/plants.ts");
let plantsContent = readFileSync(plantsPath, "utf-8");
const insertPoint = plantsContent.lastIndexOf("];");
if (insertPoint === -1) {
  console.error("Could not find ]; in plants.ts");
  process.exit(1);
}
const before = plantsContent.substring(0, insertPoint);
const after = plantsContent.substring(insertPoint);
plantsContent = before + "\n    // ── Sketchfab 3D モデル由来の追加種 ──\n" + plantLines.join("\n") + "\n" + after;
writeFileSync(plantsPath, plantsContent);
console.log(`Added ${newPlants.length} new plants to plants.ts`);
