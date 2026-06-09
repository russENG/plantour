/**
 * next build 後に out/ から RSC payload (.txt) を削除する。
 *
 * Next.js は `output: 'export'` でも各ルートに 5 種程度の RSC payload
 * TXT を出力する:
 *   - __next._full.txt / __next._head.txt / __next._index.txt
 *     / __next._tree.txt / __next.<dynamic>.txt
 *   - <route>.txt (例: plants.txt, families.txt, columns.txt, index.txt)
 *   - $d$<param>.txt (dynamic route のテンプレート)
 *   - __PAGE__.txt （その他のページマーカー）
 *
 * これは Next.js ランタイム上での <Link> プリフェッチ最適化用で、
 * 純粋な静的ホスティング (Cloudflare Pages 等) では参照されない。
 *
 * 削除しないと 2230 ルート × ~9 ファイル ≈ 20,000 ファイル超が
 * 上乗せされ、out/ 内の総ファイル数が Cloudflare Pages のデプロイ
 * 上限 (20,000) を超えるため、ビルドはローカルで成功してもデプロイ
 * 時に hang する。
 *
 * 例外: out/robots.txt は標準的な意味の静的ファイルなので保持。
 *
 * Plantour で削除しても以下に影響なし:
 *  - 表示・SEO・OG・JSON-LD（HTML 内に完結）
 *  - 内部リンク（next/link でも CSR 遷移時に HTML を fetch するだけ）
 *  - 検索・クイズ・分類体系（クライアント側 React で動作）
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "out");

let removed = 0;
let scanned = 0;

// 残すべき静的 .txt ファイル（out/ 直下からの相対パスで判定）
const PRESERVE = new Set(["robots.txt"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      scanned++;
      if (!entry.name.endsWith(".txt")) continue;
      const rel = path.relative(OUT_DIR, full).replaceAll("\\", "/");
      if (PRESERVE.has(rel)) continue;
      await fs.unlink(full);
      removed++;
    }
  }
}

try {
  await fs.access(OUT_DIR);
} catch {
  console.error(`out/ not found at ${OUT_DIR}. Did next build succeed?`);
  process.exit(1);
}

await walk(OUT_DIR);
console.log(
  `[strip-rsc-payloads] removed ${removed} __next.*.txt files (${scanned - removed} files remain in out/)`,
);
