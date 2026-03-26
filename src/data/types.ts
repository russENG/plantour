// ─── 出典・レビュー管理 ──────────────────────────────────────

/** 出典の種別 */
export type SourceType =
  | "ylist"         // YList（日本産植物和名・学名インデックス）
  | "apg"           // APG体系（被子植物の分類体系）
  | "wikipedia_ja"  // Wikipedia 日本語版
  | "wikipedia_en"  // Wikipedia 英語版
  | "wfo"           // World Flora Online
  | "powo"          // Plants of the World Online
  | "gbif"          // GBIF
  | "field_guide"   // 植物図鑑（印刷物）
  | "web_flora"     // Webの植物図鑑（三河の植物観察など）
  | "claude_ai"     // Claude AIによる生成（要確認）
  | "other";

export interface DataSource {
  type: SourceType;
  label: string;       // 表示名（例: "YList - セイヨウタンポポ"）
  url?: string;        // 参照URL
  note?: string;       // 補足（引用箇所など）
}

/** レビュー（点検）状態 */
export type ReviewStatus =
  | "ai_generated"   // AI生成、未確認
  | "needs_review"   // 要確認（誤りが疑われる）
  | "reviewed"       // 専門家・文献で確認済み
  | "verified";      // 複数の出典で確認済み

export interface ReviewMeta {
  status: ReviewStatus;
  note?: string;       // 確認メモ（誰が何で確認したか等）
  reviewedAt?: string; // 確認日（ISO8601）
}

// ─── 植物データ ──────────────────────────────────────────────

export interface Plant {
  id: string;
  jaName: string;
  enName?: string;
  scientificName: string;
  familyId: string;
  familyJaName: string;
  description: string;
  identificationPoints: string[];
  habitat: string;
  season: string;
  imageUrl?: string;
  externalLinks: ExternalLink[];
  evolutionNote?: string;
  tags: string[];
  // 出典・レビュー
  sources: DataSource[];
  review: ReviewMeta;
}

export interface Family {
  id: string;
  jaName: string;
  enName: string;
  scientificName: string;
  order: string;
  overview: string;
  characteristics: string[];
  phylogeneticPosition: string;
  divergenceEra: string;
  representativeGenera: string[];
  evolutionEvents: string[];
  externalLinks: ExternalLink[];
  // 出典・レビュー
  sources?: DataSource[];
  review?: ReviewMeta;
}

export interface ExternalLink {
  label: string;
  url: string;
}

// ─── 分類体系 ──────────────────────────────────────────────

export interface TaxonomyNode {
  id: string;
  name: string;
  rank: "domain" | "kingdom" | "phylum" | "class" | "order" | "family" | "genus" | "species";
  children?: TaxonomyNode[];
  familyId?: string;
  plantId?: string;
  description?: string;
  imageUrl?: string;
}

// ─── 進化史タイムライン ────────────────────────────────────

export interface TimelineEvent {
  id: string;
  era: string;
  mya: number; // million years ago
  title: string;
  description: string;
  groupId?: string;
  familyIds?: string[];
  color: string;
  sources?: DataSource[];
  review?: ReviewMeta;
}

// ─── 検索表 ──────────────────────────────────────────────

export interface KeyNode {
  id: string;
  question: string;
  hint?: string;
  options: KeyOption[];
}

export interface KeyOption {
  id: string;
  label: string;
  nextNodeId?: string;
  resultFamilyIds?: string[];
  resultPlantIds?: string[];
}
