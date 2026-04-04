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

/** 種レベルの形態特性（検索表フィルタ用） */
export interface PlantTraits {
  leafArr?: "alt" | "opp" | "whor";
  leafType?: "simple" | "compound";
  venation?: "parallel" | "reticulate";
  margin?: "entire" | "serrate" | "lobed";
  shape?: "linear" | "ovate" | "cordate" | "needle" | "round" | "palmate";
  habit?: "tree" | "shrub" | "herb" | "vine";
  deciduous?: "evergreen" | "deciduous";
  petalCount?: 3 | 4 | 5 | "many";
  petalFusion?: "fused" | "free" | "none";
  flowerColor?: "white" | "yellow" | "pink" | "red" | "purple" | "blue" | "orange" | "green" | "brown" | "none";
  floweringSeason?: "spring" | "summer" | "fall" | "winter" | "spring-summer" | "summer-fall" | "year-round";
  habitat?: "roadside" | "grassland" | "mountain" | "forest" | "wetland" | "aquatic" | "coastal" | "cultivated";
}

export interface Plant {
  id: string;
  jaName: string;
  enName?: string;
  scientificName: string;
  familyId: string;
  familyJaName: string;
  familyEnName?: string;
  description: string;
  enDescription?: string;
  identificationPoints: string[];
  enIdentificationPoints?: string[];
  habitat: string;
  enHabitat?: string;
  season: string;
  enSeason?: string;
  imageUrl?: string;
  /** 画像に関する注記（代替画像など）。ページ上に表示される。 */
  imageNote?: string;
  externalLinks: ExternalLink[];
  evolutionNote?: string;
  enEvolutionNote?: string;
  tags: string[];
  enTags?: string[];
  /** 形態特性（検索表フィルタ用） */
  traits?: PlantTraits;
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
  enOverview?: string;
  characteristics: string[];
  enCharacteristics?: string[];
  phylogeneticPosition: string;
  enPhylogeneticPosition?: string;
  divergenceEra: string;
  enDivergenceEra?: string;
  representativeGenera: string[];
  evolutionEvents: string[];
  enEvolutionEvents?: string[];
  externalLinks: ExternalLink[];
  imageUrl?: string;
  /** 日本産種数（YList準拠）。ラジアルツリーのノードサイズに使用 */
  japaneseSpeciesCount?: number;
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
  enEra?: string;
  mya: number; // million years ago
  title: string;
  enTitle?: string;
  description: string;
  enDescription?: string;
  isMajor: boolean;
  /** 中学生向けの平易な概要（1〜2文） */
  summary?: string;
  enSummary?: string;
  /** 代表画像 URL (Wikimedia Commons など) */
  imageUrl?: string;
  /** "prehistory": >500 Ma の文脈イベント（左端に表示）
   *  "modern": <1 Ma の現代イベント（右端に表示）
   *  undefined: メイン500-0 Maタイムライン上に表示 */
  section?: "prehistory" | "modern";
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
  enQuestion?: string;
  hint?: string;
  enHint?: string;
  options: KeyOption[];
}

export interface KeyOption {
  id: string;
  label: string;
  enLabel?: string;
  nextNodeId?: string;
  resultFamilyIds?: string[];
  resultPlantIds?: string[];
}
