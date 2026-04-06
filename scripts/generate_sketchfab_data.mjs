/**
 * .sketchfab_species.json と既存の plants データを照合し、
 * 1) 完全な sketchfab マッピング (sketchfab.ts 用)
 * 2) 新規追加が必要な植物エントリ (plants.ts 追記用)
 * を生成する。
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// ── 既存データの読み込み ──────────────────────────────────
// plants.ts から id と jaName を抽出
const plantsTs = readFileSync(join(root, "src/data/plants.ts"), "utf-8");
const plantEntries = [];
const idRegex = /id:\s*"([^"]+)"/g;
const jaNameRegex = /jaName:\s*"([^"]+)"/g;
const sciRegex = /scientificName:\s*"([^"]+)"/g;

let m;
const ids = [];
while ((m = idRegex.exec(plantsTs))) ids.push(m[1]);
const jaNames = [];
while ((m = jaNameRegex.exec(plantsTs))) jaNames.push(m[1]);
const sciNames = [];
while ((m = sciRegex.exec(plantsTs))) sciNames.push(m[1]);

for (let i = 0; i < ids.length; i++) {
  plantEntries.push({
    id: ids[i],
    jaName: jaNames[i] || "",
    scientificName: sciNames[i] || "",
  });
}

console.error(`Existing plants: ${plantEntries.length}`);

// 和名 → plant ID のルックアップ
const jaNameToPlantId = new Map();
for (const p of plantEntries) {
  // 括弧を含む場合は括弧前の部分も登録
  const base = p.jaName.replace(/（.*$/, "").trim();
  jaNameToPlantId.set(base, p.id);
  jaNameToPlantId.set(p.jaName, p.id);
}

// 学名 → plant ID のルックアップ
const sciNameToPlantId = new Map();
for (const p of plantEntries) {
  if (p.scientificName) {
    sciNameToPlantId.set(p.scientificName.toLowerCase(), p.id);
    // 属名+種小名のみでもマッチ
    const parts = p.scientificName.split(" ");
    if (parts.length >= 2) {
      sciNameToPlantId.set((parts[0] + " " + parts[1]).toLowerCase(), p.id);
    }
  }
}

// ── Sketchfab 種リストの読み込み ───────────────────────────
const sketchfabSpecies = JSON.parse(
  readFileSync(join(root, ".sketchfab_species.json"), "utf-8")
);
console.error(`Sketchfab species: ${sketchfabSpecies.length}`);

// 省略学名の補完マップ（手動で主要なものを登録）
const abbreviatedSciNames = {
  "ムサシアブミ": "Arisaema ringens",
  "スダジイ": "Castanopsis sieboldii",
  "イタドリ": "Fallopia japonica",
  "アカメガシワ": "Mallotus japonicus",
  "ハゼノキ": "Toxicodendron succedaneum",
  "ヤブカンゾウ": "Hemerocallis fulva",
  "オオシマザクラ": "Cerasus speciosa",
  "ヤマボウシ": "Cornus kousa",
  "サネカズラ": "Kadsura japonica",
  "シロダモ": "Neolitsea sericea",
  "トウビシ": "Trapa bicornis",
  "カントウマムシグサ": "Arisaema serratum",
  "モミジバフウ": "Liquidambar styraciflua",
  "リュウキンカ": "Caltha palustris",
  "ツタ": "Parthenocissus tricuspidata",
  "オヒルギ": "Bruguiera gymnorhiza",
  "イチイガシ": "Quercus gilva",
  "トチノキ": "Aesculus turbinata",
  "タラヨウ": "Ilex latifolia",
  "カンザン": "Prunus serrulata",
  "アラカシ": "Quercus glauca",
  "メヒルギ": "Kandelia obovata",
  "カラマツ": "Larix kaempferi",
  "コバノタツナミ": "Scutellaria indica",
  "センダイハギ": "Thermopsis lupinoides",
  "ゲンゲ": "Astragalus sinicus",
  "マテバシイ": "Lithocarpus edulis",
  "クマザサ": "Sasa veitchii",
  "ビワ": "Eriobotrya japonica",
  "ツルマンネングサ": "Sedum sarmentosum",
  "キランソウ": "Ajuga decumbens",
  "ミツマタ": "Edgeworthia chrysantha",
  "ガジュマル": "Ficus microcarpa",
  "ウバユリ": "Cardiocrinum cordatum",
  "ウリノキ": "Alangium platanifolium",
  "モチノキ": "Ilex integra",
  "モミ": "Abies firma",
  "アセビ": "Pieris japonica",
  "シマカンギク": "Chrysanthemum indicum",
  "アオキ": "Aucuba japonica",
  "イヌビワ": "Ficus erecta",
  "メタセコイア": "Metasequoia glyptostroboides",
  "ヤマザクラ": "Prunus jamasakura",
  "ゼニゴケ": "Marchantia polymorpha",
  "フイリアマドコロ": "Polygonatum odoratum",
  "カキドオシ": "Glechoma hederacea",
  "ヤハズエンドウ": "Vicia sativa",
  "ヤマフジ": "Wisteria brachybotrys",
  "テイカカズラ": "Trachelospermum asiaticum",
  "オオバヤシャブシ": "Alnus sieboldiana",
  "キカラスウリ": "Trichosanthes kirilowii",
  "マムシグサ": "Arisaema japonicum",
  "タブノキ": "Machilus thunbergii",
  "ホオノキ": "Magnolia obovata",
  "ミヤマガマズミ": "Viburnum wrightii",
  "サカキ": "Cleyera japonica",
  "オニタビラコ": "Youngia japonica",
  "フウトウカズラ": "Piper kadsura",
  "イヌタデ": "Persicaria longiseta",
  "ウマノアシガタ": "Ranunculus japonicus",
  "デンジソウ": "Marsilea quadrifolia",
  "ハマナス": "Rosa rugosa",
  "オニユリ": "Lilium lancifolium",
  "コメツブツメクサ": "Trifolium dubium",
  "ホウチャクソウ": "Disporum sessile",
  "シロツメクサ": "Trifolium repens",
  "コオニビシ": "Trapa natans",
  "ヤマネコノメソウ": "Chrysosplenium japonicum",
  "キショウブ": "Iris pseudacorus",
  "マツバウンラン": "Nuttallanthus canadensis",
  "サツマイナモリ": "Ophiorrhiza japonica",
  "ヒメシャラ": "Stewartia monadelpha",
  "シャガ": "Iris japonica",
  "コブシ": "Magnolia kobus",
  "サルスベリ": "Lagerstroemia indica",
  "フキ": "Petasites japonicus",
  "オランダガラシ": "Nasturtium officinale",
  "オオアラセイトウ": "Orychophragmus violaceus",
  "ヤブミョウガ": "Pollia japonica",
  "キバナコスモス": "Cosmos sulphureus",
  "フジ": "Wisteria floribunda",
  "ハマボウ": "Hibiscus hamabo",
  "カワヅザクラ": "Prunus lannesiana",
  "オオカナダモ": "Egeria densa",
  "スノードロップ": "Galanthus nivalis",
  "ヒマラヤスギ": "Cedrus deodara",
  "センニンサボテン": "Opuntia dillenii",
  "ハクモクレン": "Magnolia denudata",
  "ヤエヤマヒルギ": "Rhizophora mucronata",
  "コムギ": "Triticum aestivum",
  "スイセン": "Narcissus tazetta",
  "ストック": "Matthiola incana",
  "アキノエノコログサ": "Setaria faberi",
  "ハチク": "Phyllostachys nigra",
  "ハハコグサ": "Pseudognaphalium affine",
  "ケテイカカズラ": "Trachelospermum jasminoides",
  "シロバナマンジュシャゲ": "Lycoris albiflora",
  "タカサゴユリ": "Lilium formosanum",
  "オランダミミナグサ": "Cerastium glomeratum",
  "オオムギ": "Hordeum vulgare",
  "ツワブキ": "Farfugium japonicum",
  "マンゴー": "Mangifera indica",
  "バナナ": "Musa paradisiaca",
  "カンガレイ": "Schoenoplectus triangulatus",
  "イチゴ": "Fragaria × ananassa",
  "アンズ": "Prunus armeniaca",
  "ジャガイモ": "Solanum tuberosum",
  "スモモ": "Prunus salicina",
  "セイヨウアブラナ": "Brassica napus",
  "ハクサイ": "Brassica rapa",
  "ナシ": "Pyrus pyrifolia",
  "セイヨウナシ": "Pyrus communis",
  "エンドウ": "Pisum sativum",
  "レンギョウ": "Forsythia suspensa",
  "ベニシダ": "Dryopteris erythrosora",
  "オニノゲシ": "Sonchus asper",
  "ヒメノキシノブ": "Lepisorus onoei",
  "ノキシノブ": "Lepisorus thunbergianus",
  "ヤブソテツ": "Cyrtomium fortunei",
  "オオハナワラビ": "Botrychium japonicum",
  "ミツデウラボシ": "Selliguea hastata",
  "クリハラン": "Neocheiropteris ensata",
  "ヒトツバ": "Pyrrosia lingua",
  "アオネカズラ": "Polypodium niponicum",
  "オドリコソウ": "Lamium album",
  "シキミ": "Illicium anisatum",
  "キツネノボタン": "Ranunculus silerifolius",
  "マルバウツギ": "Deutzia scabra",
  "パッションフルーツ": "Passiflora edulis",
  "レモン": "Citrus limon",
  "リンゴ": "Malus pumila",
  "サクランボ": "Prunus avium",
  "オリーブ": "Olea europaea",
  "サトイモ": "Colocasia esculenta",
  "ケキツネノボタン": "Ranunculus cantoniensis",
  "トゲミノキツネノボタン": "Ranunculus muricatus",
  "モウソウチク": "Phyllostachys edulis",
  "スターチス": "Limonium sinuatum",
  "ハルジオン": "Erigeron philadelphicus",
  "シロバナタンポポ": "Taraxacum albidum",
  "フクジュソウ": "Adonis ramosa",
  "サギゴケ": "Mazus miquelii",
  "ヒラドツツジ": "Rhododendron × pulchrum",
  "オオオナモミ": "Xanthium occidentale",
  "ムラサキケマン": "Corydalis incisa",
  "ニシキウツギ": "Weigela decora",
  "コスギゴケ": "Pogonatum inflexum",
  "サツキ": "Rhododendron indicum",
};

// ── マッチング処理 ────────────────────────────────────────
const matched = [];     // Plantour に存在する種
const unmatched = [];   // 新規追加が必要な種

for (const sp of sketchfabSpecies) {
  // 学名を補完
  if (!sp.scientificName && abbreviatedSciNames[sp.jaName]) {
    sp.scientificName = abbreviatedSciNames[sp.jaName];
  }

  // マッチング: 和名 → 学名 の順
  let plantId = jaNameToPlantId.get(sp.jaName);

  // ヤハズエンドウ = カラスエンドウ の特例
  if (sp.jaName === "ヤハズエンドウ") plantId = jaNameToPlantId.get("カラスエンドウ") || plantId;

  if (!plantId && sp.scientificName) {
    plantId = sciNameToPlantId.get(sp.scientificName.toLowerCase());
    if (!plantId) {
      // 属名+種小名でマッチ
      const parts = sp.scientificName.split(" ");
      if (parts.length >= 2) {
        plantId = sciNameToPlantId.get((parts[0] + " " + parts[1]).toLowerCase());
      }
    }
  }

  if (plantId) {
    matched.push({ plantId, ...sp });
  } else {
    unmatched.push(sp);
  }
}

console.error(`Matched: ${matched.length}, Unmatched: ${unmatched.length}`);

// ── 出力 ──────────────────────────────────────────────────

// 1) sketchfab マッピング (matched)
const mappingLines = [];
for (const m of matched) {
  const modelJa = m.jaName;
  const modelEn = m.enName || m.jaName;
  const sci = m.scientificName || "";
  mappingLines.push(
    `  ${m.plantId}: { uid: "${m.uid}", modelJaName: "${modelJa}", modelEnName: "${modelEn}", modelScientificName: "${sci}", matchLevel: "exact" },`
  );
}

// 2) 新規追加が必要な種のリスト
const newSpecies = unmatched.map((u) => ({
  uid: u.uid,
  jaName: u.jaName,
  enName: u.enName || "",
  scientificName: u.scientificName || "",
  originalName: u.originalName,
}));

const output = {
  matched: matched.map((m) => ({
    plantId: m.plantId,
    uid: m.uid,
    jaName: m.jaName,
    enName: m.enName,
    scientificName: m.scientificName,
  })),
  unmatched: newSpecies,
  mappingCode: mappingLines.join("\n"),
};

process.stdout.write(JSON.stringify(output, null, 2));
