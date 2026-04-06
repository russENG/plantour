/**
 * 最終生成: .sketchfab_species.json → sketchfab.ts + plants.ts 追記
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// ── 既存 plants.ts から和名→ID・学名マップを構築 ────────────
const plantsTs = readFileSync(join(root, "src/data/plants.ts"), "utf-8");
const pairRegex = /\{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*jaName:\s*"([^"]+)",[\s\S]*?scientificName:\s*"([^"]*)"/g;
let pm;
const jaToId = new Map();
const sciToId = new Map();
const existingIds = new Set();
while ((pm = pairRegex.exec(plantsTs))) {
  const [, id, jaName, sci] = pm;
  existingIds.add(id);
  jaToId.set(jaName, id);
  jaToId.set(jaName.replace(/（.*$/, "").trim(), id);
  if (sci) {
    sciToId.set(sci.toLowerCase(), id);
    const parts = sci.split(" ");
    if (parts.length >= 2) sciToId.set((parts[0] + " " + parts[1]).toLowerCase(), id);
  }
}
console.error(`Existing plants: ${existingIds.size}`);

// ── Sketchfab 種リスト ──────────────────────────────────────
const allSpecies = JSON.parse(readFileSync(join(root, ".sketchfab_species.json"), "utf-8"));
console.error(`Sketchfab species: ${allSpecies.length}`);

// 除外（非植物・ゴミ・不完全）
const EXCLUDE = new Set([
  "相良村瀬戸堤自然生態園", "既定のライセンスを越えて利用する場合", "カタツムリ", "サソリ",
  "福岡県秋月森林再生", "風に揺れるアキノエノコログサ", "クスノキ御神木", "桜", "山桜",
  "タブノキ新芽", "モミジウリノキ",
]);

// Sketchfab和名→既存Plantour和名のエイリアス
const ALIASES = {
  "ガクアジサイ": "アジサイ", "セイヨウアジサイ": "アジサイ",
  "ヤマツツジ類": null, "カエデ類・モミジ類": null,
  "フクジュソウ類": null, "レンギョウ類": null,
  "シノブゴケ類": null, "ヤブソテツ類": null, "アブラナ類": null,
  "ヨウコウ": null, "カンザン": null, "エンコウカエデ": null, "カエデドコロ": null,
  "イエギク": null, "スギゴケ類": null,
};

// 学名の補完（省略形式のもの）
const SCI_FIX = {
  "ムサシアブミ": "Arisaema ringens", "スダジイ": "Castanopsis sieboldii",
  "ヒサカキ": "Eurya japonica", "アオキ": "Aucuba japonica",
  "カラマツ": "Larix kaempferi", "タブノキ": "Machilus thunbergii",
  "オヒルギ": "Bruguiera gymnorhiza", "ヤエヤマヒルギ": "Rhizophora mucronata",
  "オオハナワラビ": "Botrychium japonicum", "キツネノボタン": "Ranunculus silerifolius",
  "マルバウツギ": "Deutzia scabra", "イヌビワ": "Ficus erecta",
  "カントウマムシグサ": "Arisaema serratum", "ハゼノキ": "Toxicodendron succedaneum",
  "ヤブカンゾウ": "Hemerocallis fulva", "オオシマザクラ": "Cerasus speciosa",
  "サギゴケ": "Mazus miquelii", "モミジバフウ": "Liquidambar styraciflua",
  "シロダモ": "Neolitsea sericea", "トウビシ": "Trapa bicornis",
  "アオネカズラ": "Polypodium niponicum", "ヤマザクラ": "Prunus jamasakura",
  "イチイガシ": "Quercus gilva", "トチノキ": "Aesculus turbinata",
  "アラカシ": "Quercus glauca", "タラヨウ": "Ilex latifolia",
  "タラノキ": "Aralia elata", "ミゾソバ": "Persicaria thunbergii",
  "ハッサク": "Citrus hassaku", "ゲンゲ": "Astragalus sinicus",
  "マテバシイ": "Lithocarpus edulis", "クマザサ": "Sasa veitchii",
  "ビワ": "Eriobotrya japonica", "ベニシダ": "Dryopteris erythrosora",
  "チャノキ": "Camellia sinensis", "ホテイチク": "Phyllostachys aurea",
  "タマゴケ": "Bartramia pomiformis", "リュウキンカ": "Caltha palustris",
  "ツタ": "Parthenocissus tricuspidata", "シャガ": "Iris japonica",
  "ヒメシャラ": "Stewartia monadelpha", "サルスベリ": "Lagerstroemia indica",
  "ヤマフジ": "Wisteria brachybotrys", "ナガミヒナゲシ": "Papaver dubium",
  "シキミ": "Illicium anisatum", "センダイハギ": "Thermopsis lupinoides",
  "ヒラドツツジ": "Rhododendron × pulchrum", "キヅタ": "Hedera rhombea",
  "ハクモクレン": "Magnolia denudata", "ヤマボウシ": "Cornus kousa",
  "ガジュマル": "Ficus microcarpa", "ムラサキケマン": "Corydalis incisa",
  "オオオナモミ": "Xanthium occidentale", "サツマイナモリ": "Ophiorrhiza japonica",
  "ギシギシ": "Rumex japonicus", "モミ": "Abies firma",
  "アセビ": "Pieris japonica", "シマカンギク": "Chrysanthemum indicum",
  "ハンゲショウ": "Saururus chinensis", "エノキ": "Celtis sinensis",
  "センニンソウ": "Clematis terniflora", "サトイモ": "Colocasia esculenta",
  "カキドオシ": "Glechoma hederacea", "メタセコイア": "Metasequoia glyptostroboides",
  "アンズ": "Prunus armeniaca", "ハチク": "Phyllostachys nigra",
  "シロバナタンポポ": "Taraxacum albidum", "スモモ": "Prunus salicina",
  "オドリコソウ": "Lamium album", "コオニユリ": "Lilium leichtlinii",
  "ハハコグサ": "Pseudognaphalium affine", "ヤブミョウガ": "Pollia japonica",
  "シロバナマンジュシャゲ": "Lycoris albiflora", "ツワブキ": "Farfugium japonicum",
  "ヒマラヤスギ": "Cedrus deodara", "センニンサボテン": "Opuntia dillenii",
  "オオカナダモ": "Egeria densa", "ハマボウ": "Hibiscus hamabo",
  "スノードロップ": "Galanthus nivalis", "マンゴー": "Mangifera indica",
  "オランダミミナグサ": "Cerastium glomeratum", "サツキ": "Rhododendron indicum",
  "カワヅザクラ": "Prunus lannesiana", "マムシグサ": "Arisaema japonicum",
  "マダケ": "Phyllostachys reticulata", "マサキ": "Euonymus japonicus",
  "クリハラン": "Neocheiropteris ensata", "サカキ": "Cleyera japonica",
  "オニタビラコ": "Youngia japonica", "ミヤマガマズミ": "Viburnum wrightii",
  "ムベ": "Stauntonia hexaphylla", "イヌタデ": "Persicaria longiseta",
  "ウマノアシガタ": "Ranunculus japonicus", "ハマナス": "Rosa rugosa",
  "オニユリ": "Lilium lancifolium", "コメツブツメクサ": "Trifolium dubium",
  "コオニビシ": "Trapa natans", "ウツギ": "Deutzia crenata",
  "アコウ": "Ficus subpisocarpa", "リンゴ": "Malus pumila",
  "レモン": "Citrus limon", "ニシキウツギ": "Weigela decora",
  "キショウブ": "Iris pseudacorus", "シモクレン": "Magnolia liliiflora",
  "クサイチゴ": "Rubus hirsutus", "ユキヤナギ": "Spiraea thunbergii",
  "シラン": "Bletilla striata", "バナナ": "Musa paradisiaca",
  "ストック": "Matthiola incana", "パッションフルーツ": "Passiflora edulis",
  "コウホネ": "Nuphar japonicum", "メロン": "Cucumis melo",
  "ホウチャクソウ": "Disporum sessile", "オランダガラシ": "Nasturtium officinale",
  "キバナコスモス": "Cosmos sulphureus", "ジャゴケ": "Conocephalum conicum",
  "マンゴー": "Mangifera indica", "ゼニゴケ": "Marchantia polymorpha",
  "ミツデウラボシ": "Selliguea hastata", "ヒメノキシノブ": "Lepisorus onoei",
  "フデリンドウ": "Gentiana zollingeri", "セリバオオバコ": "Plantago coronopus",
  "オオアラセイトウ": "Orychophragmus violaceus",
  "クロガネモチ": "Ilex rotunda", "フウ": "Liquidambar formosana",
  "ケテイカカズラ": "Trachelospermum jasminoides",
  "オニノゲシ": "Sonchus asper", "スターチス": "Limonium sinuatum",
  "ヒメヒオウギズイセン": "Crocosmia × crocosmiiflora",
  "コスギゴケ": "Pogonatum inflexum", "オオカサゴケ": "Rhodobryum giganteum",
  "エゾスカシユリ": "Lilium pensylvanicum", "オオバタネツケバナ": "Cardamine scutata",
  "サクランボ": "Prunus avium", "エンジュ": "Styphnolobium japonicum",
  "カタヒバ": "Selaginella involvens", "サイハイラン": "Cremastra appendiculata",
  "カラフトイソツツジ": "Ledum palustre", "ギランイヌビワ": "Ficus variegata",
  "ヤマネコノメソウ": "Chrysosplenium japonicum", "ハナウド": "Heracleum sphondylium",
  "ゲジゲジシダ": "Phegopteris decursivepinnata",
  "センニンサボテン": "Opuntia dillenii", "ノカンゾウ": "Hemerocallis fulva var. longituba",
  "エゾキスゲ": "Hemerocallis citrina", "エゾゼンテイカ": "Hemerocallis dumortieri",
  "ヒトヨシテンナンショウ": "Arisaema heterocephalum",
  "シラヌヒ": "Citrus reticulata", "コスギゴケ": "Pogonatum inflexum",
  "クサゴケ": "Callicladium haldanianum",
  "トゲミノキツネノボタン": "Ranunculus muricatus",
  "ケキツネノボタン": "Ranunculus cantoniensis",
  "キジムシロ": "Potentilla fragarioides",
  "ツクネイモ": "Dioscorea opposita", "ハイビスカス": "Hibiscus rosa-sinensis",
  "ザボン": "Citrus maxima", "カンガレイ": "Schoenoplectus triangulatus",
  "ナツミカン": "Citrus natsudaidai", "ハッサク": "Citrus hassaku",
  "コウヤノマンネングサ": "Climacium japonicum", "ツガ": "Tsuga sieboldii",
  "カヤ": "Torreya nucifera",
};

// 科マッピング (属名 → [familyId, 和名科, 英名科])
const GENUS_FAM = JSON.parse(readFileSync(join(__dirname, "genus_family.json"), "utf-8"));

// ID 生成用ローマ字マップ
const ROMAJI = JSON.parse(readFileSync(join(__dirname, "romaji_ids.json"), "utf-8"));

// ── マッチング ──────────────────────────────────────────────
const mapping = [];
const newPlants = [];
const seenPlantIds = new Set();

for (const sp of allSpecies) {
  if (EXCLUDE.has(sp.jaName)) continue;
  if (!sp.jaName || sp.jaName.length < 2) continue;

  // エイリアス
  const alias = ALIASES[sp.jaName];
  if (alias === null) continue;

  // 学名補完
  if (!sp.scientificName) sp.scientificName = SCI_FIX[sp.jaName] || "";

  // マッチング: 和名 → 学名
  const searchJa = alias || sp.jaName;
  let plantId = jaToId.get(searchJa);
  if (!plantId && sp.scientificName) {
    plantId = sciToId.get(sp.scientificName.toLowerCase());
    if (!plantId) {
      const parts = sp.scientificName.split(" ");
      if (parts.length >= 2) plantId = sciToId.get((parts[0] + " " + parts[1]).toLowerCase());
    }
  }

  if (plantId) {
    if (!seenPlantIds.has(plantId)) {
      seenPlantIds.add(plantId);
      mapping.push({ plantId, uid: sp.uid, jaName: sp.jaName, enName: sp.enName || "", scientificName: sp.scientificName || "", matchLevel: "exact" });
    }
  } else {
    // 新規追加
    const newId = ROMAJI[sp.jaName];
    if (!newId) { console.error(`SKIP: ${sp.jaName}`); continue; }
    if (seenPlantIds.has(newId) || existingIds.has(newId)) continue;
    seenPlantIds.add(newId);

    const genus = (sp.scientificName || "").split(" ")[0];
    const fam = GENUS_FAM[genus] || ["unknown", "不明科"];

    mapping.push({ plantId: newId, uid: sp.uid, jaName: sp.jaName, enName: sp.enName || "", scientificName: sp.scientificName || "", matchLevel: "exact" });
    newPlants.push({ id: newId, jaName: sp.jaName, enName: (sp.enName || "").replace(/[,].*/, "").replace(/[？?]/g, "").trim(), scientificName: sp.scientificName || "", familyId: fam[0], familyJaName: fam[1] });
  }
}

console.error(`Mapping: ${mapping.length}, New plants: ${newPlants.length}`);
writeFileSync(join(root, ".sketchfab_final.json"), JSON.stringify({ mapping, newPlants }, null, 2));
