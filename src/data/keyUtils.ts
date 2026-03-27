import { keyNodes } from "./key";
import type { TaxonomyNode } from "./types";

/**
 * 指定ノードから到達可能な全ての resultFamilyIds を収集する。
 * 検索表の現在位置からまだ候補に残っている科を計算するのに使う。
 */
export function getReachableFamilies(nodeId: string): Set<string> {
  const visited = new Set<string>();
  const families = new Set<string>();

  function traverse(id: string) {
    if (visited.has(id)) return;
    visited.add(id);
    const node = keyNodes[id];
    if (!node) return;
    for (const opt of node.options) {
      if (opt.resultFamilyIds) {
        for (const f of opt.resultFamilyIds) families.add(f);
      }
      if (opt.resultPlantIds) {
        // plantIds は科単位ではないが到達可能として記録
      }
      if (opt.nextNodeId) {
        traverse(opt.nextNodeId);
      }
    }
  }

  traverse(nodeId);
  return families;
}

/**
 * 分類ツリー上で activeFamilyIds に含まれる科の祖先ノードIDを全て返す。
 * TaxonomyListView で「このブランチにはアクティブな科がある」を判定するのに使う。
 */
export function getActiveAncestors(
  tree: TaxonomyNode,
  activeFamilyIds: Set<string>,
): Set<string> {
  const ancestors = new Set<string>();

  function traverse(node: TaxonomyNode): boolean {
    // 科ランクノード: familyId がアクティブセットに入っていれば true
    if (node.familyId && activeFamilyIds.has(node.familyId)) {
      ancestors.add(node.id);
      return true;
    }
    let hasActive = false;
    for (const child of node.children ?? []) {
      if (traverse(child)) {
        hasActive = true;
      }
    }
    if (hasActive) ancestors.add(node.id);
    return hasActive;
  }

  traverse(tree);
  return ancestors;
}

/**
 * 指定ノードから末端ノードまでの最大ステップ数を返す（プログレスバー用）。
 */
export function getMaxDepth(nodeId: string): number {
  const visited = new Set<string>();

  function traverse(id: string): number {
    if (visited.has(id)) return 0;
    visited.add(id);
    const node = keyNodes[id];
    if (!node) return 0;
    let maxChild = 0;
    for (const opt of node.options) {
      if (opt.nextNodeId) {
        maxChild = Math.max(maxChild, traverse(opt.nextNodeId));
      }
    }
    return 1 + maxChild;
  }

  return traverse(nodeId);
}
