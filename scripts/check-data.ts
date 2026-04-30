/**
 * データ整合性チェック
 *
 * 種・科・分類体系・検索表・クイズ間の不整合を検出する。
 * 実行: npx tsx scripts/check-data.ts
 */
import { plants } from "../src/data/plants";
import { families } from "../src/data/families";
import { familyTraits } from "../src/data/familyTraits";
import { taxonomyTree } from "../src/data/taxonomy";
import type { TaxonomyNode } from "../src/data/types";

// ── ヘルパー ────────────────────────────────────────────────

/** taxonomy ツリーから全 plantId / familyId を収集 */
function collectTaxonomyIds(node: TaxonomyNode) {
  const plantIds = new Set<string>();
  const familyIds = new Set<string>();
  const familyOfPlant = new Map<string, string>(); // plantId → 親familyId

  function walk(n: TaxonomyNode, parentFamilyId: string | undefined) {
    const fid = n.familyId ?? parentFamilyId;
    if (n.familyId) familyIds.add(n.familyId);
    if (n.plantId) {
      plantIds.add(n.plantId);
      if (fid) familyOfPlant.set(n.plantId, fid);
    }
    for (const child of n.children ?? []) {
      walk(child, fid);
    }
  }
  walk(node, undefined);
  return { plantIds, familyIds, familyOfPlant };
}

// ── データ収集 ───────────────────────────────────────────────

const plantMap = new Map(plants.map((p) => [p.id, p]));
const familyMap = new Map(families.map((f) => [f.id, f]));
const {
  plantIds: taxPlantIds,
  familyIds: taxFamilyIds,
  familyOfPlant: taxFamilyOfPlant,
} = collectTaxonomyIds(taxonomyTree);

// ── チェック実行 ─────────────────────────────────────────────

interface Issue {
  level: "error" | "warn";
  category: string;
  message: string;
}

const issues: Issue[] = [];

function error(category: string, message: string) {
  issues.push({ level: "error", category, message });
}
function warn(category: string, message: string) {
  issues.push({ level: "warn", category, message });
}

// 0. plants 内の重複ID検出
const plantIdCounts = new Map<string, number>();
for (const p of plants) {
  plantIdCounts.set(p.id, (plantIdCounts.get(p.id) ?? 0) + 1);
}
for (const [id, count] of plantIdCounts) {
  if (count > 1) {
    const names = plants.filter((p) => p.id === id).map((p) => p.jaName).join(" / ");
    error("duplicate", `plants.ts に id "${id}" が ${count} 件重複（${names}）`);
  }
}

// 1. plants → taxonomy: 種が分類体系に登録されているか
for (const p of plants) {
  if (!taxPlantIds.has(p.id)) {
    error("taxonomy", `種 "${p.jaName}" (${p.id}) が taxonomy.ts に未登録`);
  }
}

// 2. taxonomy → plants: taxonomy に plantId があるが plants.ts に種がない
for (const pid of taxPlantIds) {
  if (!plantMap.has(pid)) {
    error("taxonomy", `taxonomy.ts の plantId "${pid}" に対応する種が plants.ts にない`);
  }
}

// 3. plants → families: 種の familyId が families.ts に存在するか
for (const p of plants) {
  if (!familyMap.has(p.familyId)) {
    error("family", `種 "${p.jaName}" (${p.id}) の familyId "${p.familyId}" が families.ts にない`);
  }
}

// 4. taxonomy 上の配置整合: 種の familyId と taxonomy 上の親科が一致するか
for (const p of plants) {
  const taxFamily = taxFamilyOfPlant.get(p.id);
  if (taxFamily && taxFamily !== p.familyId) {
    error(
      "taxonomy",
      `種 "${p.jaName}" (${p.id}): plants.ts では familyId="${p.familyId}" だが taxonomy.ts では "${taxFamily}" の下に配置`,
    );
  }
}

// 5. families → taxonomy: 科が分類体系に登録されているか
for (const f of families) {
  if (!taxFamilyIds.has(f.id)) {
    warn("taxonomy", `科 "${f.jaName}" (${f.id}) が taxonomy.ts に未登録`);
  }
}

// 6. taxonomy → families: taxonomy に familyId があるが families.ts にない
for (const fid of taxFamilyIds) {
  if (!familyMap.has(fid)) {
    warn("taxonomy", `taxonomy.ts の familyId "${fid}" に対応する科が families.ts にない`);
  }
}

// 7. 検索表: familyTraits が存在するか
for (const f of families) {
  if (!familyTraits[f.id]) {
    warn("key", `科 "${f.jaName}" (${f.id}) に familyTraits がない（検索表で使用不可）`);
  }
}

// 8. 検索表: 種に traits があるか
for (const p of plants) {
  if (!p.traits || Object.keys(p.traits).length === 0) {
    warn("key", `種 "${p.jaName}" (${p.id}) に traits がない（検索表フィルタ対象外）`);
  }
}

// 9. クイズ: imageUrl があるか
for (const p of plants) {
  if (!p.imageUrl) {
    warn("quiz", `種 "${p.jaName}" (${p.id}) に imageUrl がない（クイズ対象外）`);
  }
}

// 10. クイズ: imageUrl + traits 両方ないとクイズに出ない
for (const p of plants) {
  if (p.imageUrl && (!p.traits || Object.keys(p.traits).length === 0)) {
    warn("quiz", `種 "${p.jaName}" (${p.id}): imageUrl はあるが traits がない（クイズ対象外）`);
  }
}

// 11. 英語対応: enName / enDescription の欠落
let missingEnName = 0;
let missingEnDesc = 0;
for (const p of plants) {
  if (!p.enName) missingEnName++;
  if (!p.enDescription) missingEnDesc++;
}
if (missingEnName > 0) warn("i18n", `${missingEnName} 種に enName がない`);
if (missingEnDesc > 0) warn("i18n", `${missingEnDesc} 種に enDescription がない`);

// ── 結果出力 ─────────────────────────────────────────────────

const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warn");

// カテゴリ別にグループ化して表示
const categories = ["duplicate", "taxonomy", "family", "key", "quiz", "i18n"];
for (const cat of categories) {
  const catIssues = issues.filter((i) => i.category === cat);
  if (catIssues.length === 0) continue;

  const catErrors = catIssues.filter((i) => i.level === "error");
  const catWarns = catIssues.filter((i) => i.level === "warn");

  console.log(`\n── ${cat.toUpperCase()} ──`);
  for (const i of catErrors) console.log(`  ❌ ${i.message}`);
  for (const i of catWarns) console.log(`  ⚠️  ${i.message}`);
}

// サマリー
console.log("\n── SUMMARY ──");
console.log(`  種: ${plants.length}  科: ${families.length}  taxonomy種: ${taxPlantIds.size}  taxonomy科: ${taxFamilyIds.size}`);
console.log(`  ❌ Error: ${errors.length}  ⚠️  Warn: ${warnings.length}`);

if (errors.length > 0) {
  process.exit(1);
}
