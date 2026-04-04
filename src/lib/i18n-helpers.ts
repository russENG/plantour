import type { Locale } from "@/dictionaries";
import type { Plant, Family, TimelineEvent, KeyNode, KeyOption } from "@/data/types";

/** Pick the localized string, falling back to the Japanese default */
function pick(lang: Locale, ja: string, en?: string): string {
  return lang === "en" && en ? en : ja;
}

function pickArr(lang: Locale, ja: string[], en?: string[]): string[] {
  return lang === "en" && en?.length ? en : ja;
}

// ─── Plant helpers ────────────────────────────────────────────

export function plantName(p: Plant, lang: Locale) { return pick(lang, p.jaName, p.enName); }
export function plantDesc(p: Plant, lang: Locale) { return pick(lang, p.description, p.enDescription); }
export function plantHabitat(p: Plant, lang: Locale) { return pick(lang, p.habitat, p.enHabitat); }
export function plantSeason(p: Plant, lang: Locale) { return pick(lang, p.season, p.enSeason); }
export function plantIdPoints(p: Plant, lang: Locale) { return pickArr(lang, p.identificationPoints, p.enIdentificationPoints); }
export function plantTags(p: Plant, lang: Locale) { return pickArr(lang, p.tags, p.enTags); }
export function plantEvoNote(p: Plant, lang: Locale) { return pick(lang, p.evolutionNote ?? "", p.enEvolutionNote); }
export function plantFamilyName(p: Plant, lang: Locale) { return pick(lang, p.familyJaName, p.familyEnName); }

// ─── Family helpers ───────────────────────────────────────────

export function familyName(f: Family, lang: Locale) { return pick(lang, f.jaName, f.enName); }
export function familyOverview(f: Family, lang: Locale) { return pick(lang, f.overview, f.enOverview); }
export function familyChars(f: Family, lang: Locale) { return pickArr(lang, f.characteristics, f.enCharacteristics); }
export function familyPhylo(f: Family, lang: Locale) { return pick(lang, f.phylogeneticPosition, f.enPhylogeneticPosition); }
export function familyDivergence(f: Family, lang: Locale) { return pick(lang, f.divergenceEra, f.enDivergenceEra); }
export function familyEvoEvents(f: Family, lang: Locale) { return pickArr(lang, f.evolutionEvents, f.enEvolutionEvents); }

// ─── Timeline helpers ─────────────────────────────────────────

export function timelineTitle(e: TimelineEvent, lang: Locale) { return pick(lang, e.title, e.enTitle); }
export function timelineDesc(e: TimelineEvent, lang: Locale) { return pick(lang, e.description, e.enDescription); }
export function timelineSummary(e: TimelineEvent, lang: Locale) { return pick(lang, e.summary ?? "", e.enSummary); }
export function timelineEra(e: TimelineEvent, lang: Locale) { return pick(lang, e.era, e.enEra); }

// ─── Key helpers ──────────────────────────────────────────────

export function keyQuestion(n: KeyNode, lang: Locale) { return pick(lang, n.question, n.enQuestion); }
export function keyHint(n: KeyNode, lang: Locale) { return pick(lang, n.hint ?? "", n.enHint); }
export function keyOptionLabel(o: KeyOption, lang: Locale) { return pick(lang, o.label, o.enLabel); }
