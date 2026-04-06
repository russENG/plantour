/**
 * 最終スクリプト: 全 Sketchfab モデルを Plantour に統合
 * 出力:
 *   .sketchfab_final.json  — { mapping: [...], newPlants: [...] }
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// ── 既存 plants.ts から ID・和名・学名を抽出 ────────────────
const plantsTs = readFileSync(join(root, "src/data/plants.ts"), "utf-8");
const plantBlocks = plantsTs.split(/\n\s{4}\{/).slice(1);

const existingPlants = [];
for (const block of plantBlocks) {
  const id = block.match(/id:\s*"([^"]+)"/)?.[1] || "";
  const jaName = block.match(/jaName:\s*"([^"]+)"/)?.[1] || "";
  const enName = block.match(/enName:\s*"([^"]+)"/)?.[1] || "";
  const sci = block.match(/scientificName:\s*"([^"]+)"/)?.[1] || "";
  const familyId = block.match(/familyId:\s*"([^"]+)"/)?.[1] || "";
  const familyJaName = block.match(/familyJaName:\s*"([^"]+)"/)?.[1] || "";
  if (id) existingPlants.push({ id, jaName, enName, scientificName: sci, familyId, familyJaName });
}
console.error(`Existing plants: ${existingPlants.length}`);

// 検索用マップ
const jaToPlant = new Map();
for (const p of existingPlants) {
  jaToPlant.set(p.jaName, p);
  jaToPlant.set(p.jaName.replace(/（.*$/, "").trim(), p);
}
const sciToPlant = new Map();
for (const p of existingPlants) {
  if (p.scientificName) {
    sciToPlant.set(p.scientificName.toLowerCase(), p);
    const parts = p.scientificName.split(" ");
    if (parts.length >= 2) sciToPlant.set((parts[0] + " " + parts[1]).toLowerCase(), p);
  }
}

// ── Sketchfab 全種リスト ────────────────────────────────────
const allSpecies = JSON.parse(readFileSync(join(root, ".sketchfab_species.json"), "utf-8"));

// 除外リスト（非植物・重複・ゴミ）
const EXCLUDE_JANAMES = new Set([
  "相良村瀬戸堤自然生態園", "既定のライセンスを越えて利用する場合", "カタツムリ", "サソリ",
  "福岡県秋月森林再生", "風に揺れるアキノエノコログサ", "クスノキ御神木", "桜", "山桜",
  "タブノキ新芽", "モミジウリノキ", // 不完全データ
]);

// 和名の別名マッピング（Sketchfab和名 → Plantour和名）
const JA_ALIASES = {
  "ガクアジサイ": "アジサイ",
  "タンポポ": "タンポポ（セイヨウタンポポ）",
  "ブドウ": "ブドウ",
  "オオバコ": "オオバコ",
  "オオバノイノモトソウ": "イノモトソウ",
  "ヤハズエンドウ": "カラスエンドウ",
  "ホソバコケシノブ": "コケシノブ",
  "コウヤコケシノブ": "コケシノブ",
  "ケゼニゴケ": null, // 別種
  "イエギク": null, // Plantourに菊はない
  "ヤマツツジ類": "ヤマツツジ",
  "カエデ類・モミジ類": "イロハモミジ",
  "フクジュソウ類": null,
  "レンギョウ類": null,
  "シノブゴケ類": null,
  "ヤブソテツ類": null,
  "アブラナ類": null,
  "セイヨウアジサイ": "アジサイ",
  "ヨウコウ": null,
  "カンザン": null, // 品種
  "エンコウカエデ": null,
  "カエデドコロ": null,
};

// 学名補完
const SCI_NAME_MAP = {
  "クロガネモチ": "Ilex rotunda", "フウ": "Liquidambar formosana", "スダジイ": "Castanopsis sieboldii",
  "ムサシアブミ": "Arisaema ringens", "ヒサカキ": "Eurya japonica", "アオキ": "Aucuba japonica",
  "カラマツ": "Larix kaempferi", "タブノキ": "Machilus thunbergii", "オヒルギ": "Bruguiera gymnorhiza",
  "ヤエヤマヒルギ": "Rhizophora mucronata", "オオハナワラビ": "Botrychium japonicum",
  "キツネノボタン": "Ranunculus silerifolius", "マルバウツギ": "Deutzia scabra",
  "イヌビワ": "Ficus erecta", "カントウマムシグサ": "Arisaema serratum",
  "ハゼノキ": "Toxicodendron succedaneum", "ヤブカンゾウ": "Hemerocallis fulva",
  "オオシマザクラ": "Cerasus speciosa", "サギゴケ": "Mazus miquelii",
  "モミジバフウ": "Liquidambar styraciflua", "シロダモ": "Neolitsea sericea",
  "トウビシ": "Trapa bicornis", "アオネカズラ": "Polypodium niponicum",
  "ヤマザクラ": "Prunus jamasakura", "イチイガシ": "Quercus gilva",
  "トチノキ": "Aesculus turbinata", "アラカシ": "Quercus glauca",
  "タラヨウ": "Ilex latifolia", "タラノキ": "Aralia elata",
  "ミゾソバ": "Persicaria thunbergii", "ハッサク": "Citrus hassaku",
  "ゲンゲ": "Astragalus sinicus", "マテバシイ": "Lithocarpus edulis",
  "クマザサ": "Sasa veitchii", "ビワ": "Eriobotrya japonica",
  "ベニシダ": "Dryopteris erythrosora", "ヒメヒオウギズイセン": "Crocosmia × crocosmiiflora",
  "チャノキ": "Camellia sinensis", "ホテイチク": "Phyllostachys aurea",
  "ミツデウラボシ": "Selliguea hastata", "タマゴケ": "Bartramia pomiformis",
  "リュウキンカ": "Caltha palustris", "ツタ": "Parthenocissus tricuspidata",
  "アキノエノコログサ": "Setaria faberi", "オオカサゴケ": "Rhodobryum giganteum",
  "シャガ": "Iris japonica", "ヒメシャラ": "Stewartia monadelpha",
  "サルスベリ": "Lagerstroemia indica", "ヤマフジ": "Wisteria brachybotrys",
  "ナガミヒナゲシ": "Papaver dubium", "シキミ": "Illicium anisatum",
  "センダイハギ": "Thermopsis lupinoides", "ヒラドツツジ": "Rhododendron × pulchrum",
  "キヅタ": "Hedera rhombea", "ハクモクレン": "Magnolia denudata",
  "ヤマボウシ": "Cornus kousa", "ガジュマル": "Ficus microcarpa",
  "ムラサキケマン": "Corydalis incisa", "オオオナモミ": "Xanthium occidentale",
  "ゲジゲジシダ": "Phegopteris decursivepinnata", "サツマイナモリ": "Ophiorrhiza japonica",
  "ギシギシ": "Rumex japonicus", "モミ": "Abies firma",
  "アセビ": "Pieris japonica", "シマカンギク": "Chrysanthemum indicum",
  "ハンゲショウ": "Saururus chinensis", "エノキ": "Celtis sinensis",
  "オオバタネツケバナ": "Cardamine scutata", "センニンソウ": "Clematis terniflora",
  "サトイモ": "Colocasia esculenta", "カキドオシ": "Glechoma hederacea",
  "メタセコイア": "Metasequoia glyptostroboides", "エンドウ": "Pisum sativum",
  "アンズ": "Prunus armeniaca", "ハチク": "Phyllostachys nigra",
  "シロバナタンポポ": "Taraxacum albidum", "スモモ": "Prunus salicina",
  "ヒメノキシノブ": "Lepisorus onoei", "フデリンドウ": "Gentiana zollingeri",
  "オドリコソウ": "Lamium album", "ケテイカカズラ": "Trachelospermum jasminoides",
  "コオニユリ": "Lilium leichtlinii", "ハハコグサ": "Pseudognaphalium affine",
  "ヤブミョウガ": "Pollia japonica", "シロバナマンジュシャゲ": "Lycoris albiflora",
  "ツワブキ": "Farfugium japonicum", "ヒマラヤスギ": "Cedrus deodara",
  "センニンサボテン": "Opuntia dillenii", "オオカナダモ": "Egeria densa",
  "ハマボウ": "Hibiscus hamabo", "スノードロップ": "Galanthus nivalis",
  "マンゴー": "Mangifera indica", "オランダミミナグサ": "Cerastium glomeratum",
  "サツキ": "Rhododendron indicum", "コウヤノマンネングサ": "Climacium japonicum",
  "ツガ": "Tsuga sieboldii", "カヤ": "Torreya nucifera",
  "カワヅザクラ": "Prunus lannesiana", "ハナウド": "Heracleum sphondylium",
  "カタヒバ": "Selaginella involvens", "ジャゴケ": "Conocephalum conicum",
  "サイハイラン": "Cremastra appendiculata", "マムシグサ": "Arisaema japonicum",
  "ザボン": "Citrus maxima", "マダケ": "Phyllostachys reticulata",
  "マサキ": "Euonymus japonicus", "クリハラン": "Neocheiropteris ensata",
  "サカキ": "Cleyera japonica", "オニタビラコ": "Youngia japonica",
  "ミヤマガマズミ": "Viburnum wrightii", "オニノゲシ": "Sonchus asper",
  "カラフトイソツツジ": "Ledum palustre", "ムベ": "Stauntonia hexaphylla",
  "イヌタデ": "Persicaria longiseta", "ウマノアシガタ": "Ranunculus japonicus",
  "ハマナス": "Rosa rugosa", "オニユリ": "Lilium lancifolium",
  "コメツブツメクサ": "Trifolium dubium", "ケキツネノボタン": "Ranunculus cantoniensis",
  "コオニビシ": "Trapa natans", "エンジュ": "Styphnolobium japonicum",
  "ウツギ": "Deutzia crenata", "エゾスカシユリ": "Lilium pensylvanicum",
  "アコウ": "Ficus subpisocarpa", "リンゴ": "Malus pumila",
  "レモン": "Citrus limon", "ギランイヌビワ": "Ficus variegata",
  "ヤマネコノメソウ": "Chrysosplenium japonicum", "サクランボ": "Prunus avium",
  "ニシキウツギ": "Weigela decora", "キショウブ": "Iris pseudacorus",
  "ハクサイ": "Brassica rapa", "シモクレン": "Magnolia liliiflora",
  "クサイチゴ": "Rubus hirsutus", "ユキヤナギ": "Spiraea thunbergii",
  "シラン": "Bletilla striata", "バナナ": "Musa paradisiaca",
  "セリバオオバコ": "Plantago coronopus", "トゲミノキツネノボタン": "Ranunculus muricatus",
  "コスギゴケ": "Pogonatum inflexum", "オオアラセイトウ": "Orychophragmus violaceus",
  "ストック": "Matthiola incana", "クサゴケ": "Callicladium haldanianum",
  "スターチス": "Limonium sinuatum", "パッションフルーツ": "Passiflora edulis",
  "コウホネ": "Nuphar japonicum", "メロン": "Cucumis melo",
  "ホウチャクソウ": "Disporum sessile", "シロツメクサ": "Trifolium repens",
  "セイヨウナシ": "Pyrus communis", "ノカンゾウ": "Hemerocallis fulva var. longituba",
  "キジムシロ": "Potentilla fragarioides", "エゾキスゲ": "Hemerocallis citrina",
  "エゾゼンテイカ": "Hemerocallis dumortieri", "ヒトヨシテンナンショウ": "Arisaema heterocephalum",
  "シラヌヒ": "Citrus reticulata", "ゼニゴケ": "Marchantia polymorpha",
  "オランダガラシ": "Nasturtium officinale", "キバナコスモス": "Cosmos sulphureus",
  "フジ": "Wisteria floribunda", "ナツミカン": "Citrus natsudaidai",
  "ジャガイモ": "Solanum tuberosum", "セイヨウアブラナ": "Brassica napus",
  "サトイモ": "Colocasia esculenta", "ヒメヒオウギズイセン": "Crocosmia × crocosmiiflora",
  "タンポポ": "Taraxacum officinale", "ブドウ": "Vitis vinifera",
};

// 科の割り当て（学名の属から推定）
const GENUS_TO_FAMILY = {
  Ilex: ["aquifoliaceae", "モチノキ科", "Aquifoliaceae"],
  Liquidambar: ["altingiaceae", "フウ科", "Altingiaceae"],
  Castanopsis: ["fagaceae", "ブナ科", "Fagaceae"],
  Arisaema: ["araceae", "サトイモ科", "Araceae"],
  Eurya: ["pentaphylacaceae", "サカキ科", "Pentaphylacaceae"],
  Aucuba: ["garryaceae", "ガリア科", "Garryaceae"],
  Larix: ["pinaceae", "マツ科", "Pinaceae"],
  Ranunculus: ["ranunculaceae", "キンポウゲ科", "Ranunculaceae"],
  Machilus: ["lauraceae", "クスノキ科", "Lauraceae"],
  Bruguiera: ["rhizophoraceae", "ヒルギ科", "Rhizophoraceae"],
  Rhizophora: ["rhizophoraceae", "ヒルギ科", "Rhizophoraceae"],
  Botrychium: ["ophioglossaceae", "ハナヤスリ科", "Ophioglossaceae"],
  Deutzia: ["hydrangeaceae", "アジサイ科", "Hydrangeaceae"],
  Ficus: ["moraceae", "クワ科", "Moraceae"],
  Toxicodendron: ["anacardiaceae", "ウルシ科", "Anacardiaceae"],
  Hemerocallis: ["asphodelaceae", "ワスレグサ科", "Asphodelaceae"],
  Cerasus: ["rosaceae", "バラ科", "Rosaceae"],
  Mazus: ["mazaceae", "サギゴケ科", "Mazaceae"],
  Neolitsea: ["lauraceae", "クスノキ科", "Lauraceae"],
  Trapa: ["lythraceae", "ミソハギ科", "Lythraceae"],
  Polypodium: ["polypodiaceae", "ウラボシ科", "Polypodiaceae"],
  Quercus: ["fagaceae", "ブナ科", "Fagaceae"],
  Aesculus: ["sapindaceae", "ムクロジ科", "Sapindaceae"],
  Aralia: ["araliaceae", "ウコギ科", "Araliaceae"],
  Persicaria: ["polygonaceae", "タデ科", "Polygonaceae"],
  Citrus: ["rutaceae", "ミカン科", "Rutaceae"],
  Adonis: ["ranunculaceae", "キンポウゲ科", "Ranunculaceae"],
  Astragalus: ["fabaceae", "マメ科", "Fabaceae"],
  Lithocarpus: ["fagaceae", "ブナ科", "Fagaceae"],
  Sasa: ["poaceae", "イネ科", "Poaceae"],
  Eriobotrya: ["rosaceae", "バラ科", "Rosaceae"],
  Dryopteris: ["dryopteridaceae", "オシダ科", "Dryopteridaceae"],
  Crocosmia: ["iridaceae", "アヤメ科", "Iridaceae"],
  Camellia: ["theaceae", "ツバキ科", "Theaceae"],
  Phyllostachys: ["poaceae", "イネ科", "Poaceae"],
  Selliguea: ["polypodiaceae", "ウラボシ科", "Polypodiaceae"],
  Bartramia: ["bartramiaceae", "タマゴケ科", "Bartramiaceae"],
  Caltha: ["ranunculaceae", "キンポウゲ科", "Ranunculaceae"],
  Parthenocissus: ["vitaceae", "ブドウ科", "Vitaceae"],
  Setaria: ["poaceae", "イネ科", "Poaceae"],
  Rhodobryum: ["bryaceae", "ハリガネゴケ科", "Bryaceae"],
  Iris: ["iridaceae", "アヤメ科", "Iridaceae"],
  Stewartia: ["theaceae", "ツバキ科", "Theaceae"],
  Lagerstroemia: ["lythraceae", "ミソハギ科", "Lythraceae"],
  Wisteria: ["fabaceae", "マメ科", "Fabaceae"],
  Papaver: ["papaveraceae", "ケシ科", "Papaveraceae"],
  Illicium: ["schisandraceae", "マツブサ科", "Schisandraceae"],
  Thermopsis: ["fabaceae", "マメ科", "Fabaceae"],
  Rhododendron: ["ericaceae", "ツツジ科", "Ericaceae"],
  Hedera: ["araliaceae", "ウコギ科", "Araliaceae"],
  Magnolia: ["magnoliaceae", "モクレン科", "Magnoliaceae"],
  Cornus: ["cornaceae", "ミズキ科", "Cornaceae"],
  Corydalis: ["papaveraceae", "ケシ科", "Papaveraceae"],
  Xanthium: ["asteraceae", "キク科", "Asteraceae"],
  Phegopteris: ["thelypteridaceae", "ヒメシダ科", "Thelypteridaceae"],
  Ophiorrhiza: ["rubiaceae", "アカネ科", "Rubiaceae"],
  Rumex: ["polygonaceae", "タデ科", "Polygonaceae"],
  Abies: ["pinaceae", "マツ科", "Pinaceae"],
  Pieris: ["ericaceae", "ツツジ科", "Ericaceae"],
  Chrysanthemum: ["asteraceae", "キク科", "Asteraceae"],
  Saururus: ["saururaceae", "ドクダミ科", "Saururaceae"],
  Celtis: ["cannabaceae", "アサ科", "Cannabaceae"],
  Cardamine: ["brassicaceae", "アブラナ科", "Brassicaceae"],
  Clematis: ["ranunculaceae", "キンポウゲ科", "Ranunculaceae"],
  Colocasia: ["araceae", "サトイモ科", "Araceae"],
  Glechoma: ["lamiaceae", "シソ科", "Lamiaceae"],
  Metasequoia: ["cupressaceae", "ヒノキ科", "Cupressaceae"],
  Pisum: ["fabaceae", "マメ科", "Fabaceae"],
  Forsythia: ["oleaceae", "モクセイ科", "Oleaceae"],
  Prunus: ["rosaceae", "バラ科", "Rosaceae"],
  Taraxacum: ["asteraceae", "キク科", "Asteraceae"],
  Lepisorus: ["polypodiaceae", "ウラボシ科", "Polypodiaceae"],
  Gentiana: ["gentianaceae", "リンドウ科", "Gentianaceae"],
  Orychophragmus: ["brassicaceae", "アブラナ科", "Brassicaceae"],
  Lamium: ["lamiaceae", "シソ科", "Lamiaceae"],
  Trachelospermum: ["apocynaceae", "キョウチクトウ科", "Apocynaceae"],
  Lilium: ["liliaceae", "ユリ科", "Liliaceae"],
  Pseudognaphalium: ["asteraceae", "キク科", "Asteraceae"],
  Pollia: ["commelinaceae", "ツユクサ科", "Commelinaceae"],
  Lycoris: ["amaryllidaceae", "ヒガンバナ科", "Amaryllidaceae"],
  Farfugium: ["asteraceae", "キク科", "Asteraceae"],
  Cedrus: ["pinaceae", "マツ科", "Pinaceae"],
  Opuntia: ["cactaceae", "サボテン科", "Cactaceae"],
  Egeria: ["hydrocharitaceae", "トチカガミ科", "Hydrocharitaceae"],
  Hibiscus: ["malvaceae", "アオイ科", "Malvaceae"],
  Galanthus: ["amaryllidaceae", "ヒガンバナ科", "Amaryllidaceae"],
  Mangifera: ["anacardiaceae", "ウルシ科", "Anacardiaceae"],
  Cerastium: ["caryophyllaceae", "ナデシコ科", "Caryophyllaceae"],
  Climacium: ["climaciaceae", "コウヤノマンネングサ科", "Climaciaceae"],
  Tsuga: ["pinaceae", "マツ科", "Pinaceae"],
  Torreya: ["taxaceae", "イチイ科", "Taxaceae"],
  Heracleum: ["apiaceae", "セリ科", "Apiaceae"],
  Selaginella: ["selaginellaceae", "イワヒバ科", "Selaginellaceae"],
  Conocephalum: ["conocephalaceae", "ジャゴケ科", "Conocephalaceae"],
  Cremastra: ["orchidaceae", "ラン科", "Orchidaceae"],
  Marchantia: ["marchantiaceae", "ゼニゴケ科", "Marchantiaceae"],
  Kandelia: ["rhizophoraceae", "ヒルギ科", "Rhizophoraceae"],
  Euonymus: ["celastraceae", "ニシキギ科", "Celastraceae"],
  Neocheiropteris: ["polypodiaceae", "ウラボシ科", "Polypodiaceae"],
  Cleyera: ["pentaphylacaceae", "サカキ科", "Pentaphylacaceae"],
  Youngia: ["asteraceae", "キク科", "Asteraceae"],
  Viburnum: ["adoxaceae", "レンプクソウ科", "Adoxaceae"],
  Sonchus: ["asteraceae", "キク科", "Asteraceae"],
  Ledum: ["ericaceae", "ツツジ科", "Ericaceae"],
  Stauntonia: ["lardizabalaceae", "アケビ科", "Lardizabalaceae"],
  Rosa: ["rosaceae", "バラ科", "Rosaceae"],
  Trifolium: ["fabaceae", "マメ科", "Fabaceae"],
  Styphnolobium: ["fabaceae", "マメ科", "Fabaceae"],
  Spiraea: ["rosaceae", "バラ科", "Rosaceae"],
  Rubus: ["rosaceae", "バラ科", "Rosaceae"],
  Malus: ["rosaceae", "バラ科", "Rosaceae"],
  Weigela: ["caprifoliaceae", "スイカズラ科", "Caprifoliaceae"],
  Nuphar: ["nymphaeaceae", "スイレン科", "Nymphaeaceae"],
  Cucumis: ["cucurbitaceae", "ウリ科", "Cucurbitaceae"],
  Potentilla: ["rosaceae", "バラ科", "Rosaceae"],
  Disporum: ["colchicaceae", "イヌサフラン科", "Colchicaceae"],
  Pyrus: ["rosaceae", "バラ科", "Rosaceae"],
  Solanum: ["solanaceae", "ナス科", "Solanaceae"],
  Brassica: ["brassicaceae", "アブラナ科", "Brassicaceae"],
  Musa: ["musaceae", "バショウ科", "Musaceae"],
  Plantago: ["plantaginaceae", "オオバコ科", "Plantaginaceae"],
  Pogonatum: ["polytrichaceae", "スギゴケ科", "Polytrichaceae"],
  Callicladium: ["hypnaceae", "ハイゴケ科", "Hypnaceae"],
  Limonium: ["plumbaginaceae", "イソマツ科", "Plumbaginaceae"],
  Passiflora: ["passifloraceae", "トケイソウ科", "Passifloraceae"],
  Nasturtium: ["brassicaceae", "アブラナ科", "Brassicaceae"],
  Cosmos: ["asteraceae", "キク科", "Asteraceae"],
  Polygonatum: ["asparagaceae", "キジカクシ科", "Asparagaceae"],
  Matthiola: ["brassicaceae", "アブラナ科", "Brassicaceae"],
  Bletilla: ["orchidaceae", "ラン科", "Orchidaceae"],
  Chrysosplenium: ["saxifragaceae", "ユキノシタ科", "Saxifragaceae"],
  Vitis: ["vitaceae", "ブドウ科", "Vitaceae"],
  Trichosanthes: ["cucurbitaceae", "ウリ科", "Cucurbitaceae"],
  Narcissus: ["amaryllidaceae", "ヒガンバナ科", "Amaryllidaceae"],
  Schoenoplectus: ["cyperaceae", "カヤツリグサ科", "Cyperaceae"],
  Hordeum: ["poaceae", "イネ科", "Poaceae"],
  Piper: ["piperaceae", "コショウ科", "Piperaceae"],
  Hamamelis: ["hamamelidaceae", "マンサク科", "Hamamelidaceae"],
  Chimonanthus: ["calycanthaceae", "ロウバイ科", "Calycanthaceae"],
  Fragaria: ["rosaceae", "バラ科", "Rosaceae"],
  Olea: ["oleaceae", "モクセイ科", "Oleaceae"],
};

// 和名 → ID のローマ字変換（簡易）
const ROMAJI_MAP = {
  "クロガネモチ": "kuroganemochi", "フウ": "fuu", "スダジイ": "sudajii",
  "ムサシアブミ": "musashi_abumi", "ヒサカキ": "hisakaki", "アオキ": "aoki",
  "カラマツ": "karamatsu", "トゲミノキツネノボタン": "togemino_kitsune_no_botan",
  "タブノキ": "tabunoki", "コスギゴケ": "kosugigoke", "オヒルギ": "ohirugi",
  "ヤエヤマヒルギ": "yaeyama_hirugi", "オオハナワラビ": "oohana_warabi",
  "キツネノボタン": "kitsune_no_botan", "マルバウツギ": "maruba_utsugi",
  "セリバオオバコ": "seriba_oobako", "イヌビワ": "inubiwa",
  "カントウマムシグサ": "kantou_mamushigusa", "ハゼノキ": "hazenoki",
  "ヤブカンゾウ": "yabukanzou", "オオシマザクラ": "ooshima_zakura",
  "サギゴケ": "sagigoke", "モミジバフウ": "momijiba_fuu",
  "シロダモ": "shirodamo", "トウビシ": "toubishi",
  "アオネカズラ": "aonekazura", "ヤマザクラ": "yamazakura",
  "イチイガシ": "ichiigashi", "トチノキ": "tochinoki",
  "アラカシ": "arakashi", "タラヨウ": "tarayou",
  "タラノキ": "taranoki", "ミゾソバ": "mizosoba",
  "ハッサク": "hassaku", "ゲンゲ": "genge",
  "マテバシイ": "matebashii", "クマザサ": "kumazasa",
  "ビワ": "biwa", "ベニシダ": "benishida",
  "ヒメヒオウギズイセン": "hime_hiougi_zuisen", "チャノキ": "chanoki",
  "ホテイチク": "hoteichiku", "ミツデウラボシ": "mitsude_uraboshi",
  "タマゴケ": "tamagoke", "リュウキンカ": "ryuukinka",
  "ツタ": "tsuta", "アキノエノコログサ": "akino_enokoro",
  "オオカサゴケ": "ookasagoke", "シャガ": "shaga",
  "ヒメシャラ": "himeshara", "サルスベリ": "sarusuberi",
  "ヤマフジ": "yamafuji", "ナガミヒナゲシ": "nagami_hinageshi",
  "シキミ": "shikimi", "センダイハギ": "sendai_hagi",
  "ヒラドツツジ": "hirado_tsutsuji", "キヅタ": "kiduta",
  "ハクモクレン": "haku_mokuren", "ヤマボウシ": "yamaboushi",
  "ガジュマル": "gajumaru", "ムラサキケマン": "murasaki_keman",
  "オオオナモミ": "ooonamomi", "ゲジゲジシダ": "gejigejishida",
  "サツマイナモリ": "satsuma_inamori", "ギシギシ": "gishigishi",
  "モミ": "momi", "アセビ": "asebi",
  "シマカンギク": "shima_kangiku", "ハンゲショウ": "hangeshou",
  "エノキ": "enoki", "オオバタネツケバナ": "ooba_tanetsukebana",
  "センニンソウ": "senninsou", "サトイモ": "satoimo",
  "カキドオシ": "kakidooshi", "メタセコイア": "metasequoia",
  "エンドウ": "endou", "アンズ": "anzu",
  "ハチク": "hachiku", "シロバナタンポポ": "shirobana_tanpopo",
  "スモモ": "sumomo", "ヒメノキシノブ": "hime_nokishinobu",
  "フデリンドウ": "fude_rindou", "オオアラセイトウ": "ooaraseitou",
  "オドリコソウ": "odorikosou", "ケテイカカズラ": "keteika_kazura",
  "コオニユリ": "kooniyuri", "ハハコグサ": "hahakogusa",
  "ヤブミョウガ": "yabumyouga", "シロバナマンジュシャゲ": "shirobana_manjushage",
  "ツワブキ": "tsuwabuki", "ヒマラヤスギ": "himalaya_sugi",
  "センニンサボテン": "sennin_saboten", "オオカナダモ": "ookanadamo",
  "ハマボウ": "hamabou", "スノードロップ": "snowdrop",
  "マンゴー": "mango", "オランダミミナグサ": "oranda_miminagusa",
  "サツキ": "satsuki", "コウヤノマンネングサ": "kouya_mannengusa",
  "ツガ": "tsuga", "カヤ": "kaya",
  "カワヅザクラ": "kawazu_zakura", "ハナウド": "hanaudo",
  "カタヒバ": "katahiba", "ジャゴケ": "jagoke",
  "サイハイラン": "sahairan", "マムシグサ": "mamushigusa",
  "ザボン": "zabon", "マダケ": "madake",
  "マサキ": "masaki", "クリハラン": "kuriharan",
  "サカキ": "sakaki", "オニタビラコ": "oni_tabirako",
  "ミヤマガマズミ": "miyama_gamazumi", "オニノゲシ": "oninogeshi",
  "カラフトイソツツジ": "karafuto_isotsutsuji", "ムベ": "mube",
  "イヌタデ": "inutade", "ウマノアシガタ": "umano_ashigata",
  "ハマナス": "hamanasu", "オニユリ": "oniyuri",
  "コメツブツメクサ": "kometsubu_tsumekusa", "ケキツネノボタン": "kekitsune_no_botan",
  "コオニビシ": "koonibishi", "エンジュ": "enju",
  "ウツギ": "utsugi", "エゾスカシユリ": "ezo_sukashi_yuri",
  "アコウ": "akou", "リンゴ": "ringo",
  "レモン": "lemon", "ノカンゾウ": "nokanzou",
  "ギランイヌビワ": "giran_inubiwa", "キジムシロ": "kijimushiro",
  "ヤマネコノメソウ": "yamanekonomesou", "サクランボ": "sakuranbo",
  "ニシキウツギ": "nishiki_utsugi", "キショウブ": "kishoubu",
  "ハクサイ": "hakusai", "シモクレン": "shimokuren",
  "クサイチゴ": "kusaichigo", "ユキヤナギ": "yukiyanagi",
  "シラン": "shiran", "バナナ": "banana",
  "ストック": "stock", "スターチス": "statice",
  "パッションフルーツ": "passion_fruit", "コウホネ": "kouhone",
  "メロン": "melon", "ホウチャクソウ": "houchakusou",
  "セイヨウナシ": "seiyou_nashi", "セイヨウアブラナ": "seiyou_aburana",
  "エゾキスゲ": "ezo_kisuge", "エゾゼンテイカ": "ezo_zenteika",
  "ヒトヨシテンナンショウ": "hitoyoshi_tennanshou", "シラヌヒ": "shiranuhi",
  "ゼニゴケ": "zenigoke", "オランダガラシ": "oranda_garashi",
  "キバナコスモス": "kibana_cosmos", "ナガミヒナゲシ": "nagami_hinageshi",
  "ミゾソバ": "mizosoba", "ホウチャクソウ": "houchakusou",
  "タンポポ": "tanpopo2", "ブドウ": "budou2", "ガクアジサイ": "gaku_ajisai",
  "オオバコ": "oobako2", "オオバノイノモトソウ": "ooba_inomotosou",
  "カンガレイ": "kangarei", "ナツミカン": "natsumikan",
  "ジャガイモ": "jagaimo2",
  // 既存 Plantour にあるがマッチング失敗した種（IDは既存と同じ → 新規作成はスキップ）
  "デンジソウ": "denji_so", "ワラビ": "warabi", "キブシ": "kibushi",
  "ユキノシタ": "yukino_shita", "イヌガヤ": "inugaya", "ノアザミ": "noazami",
  "オオハルシャギク": "cosmos", "スギナ": "sugina", "ノイバラ": "noibara",
  "ススキ": "susuki", "キャベツ": "kyabetsu", "パイナップル": "ananas",
  "スミレ": "sumire", "ホソバコケシノブ": "koke_shinobu", "ハス": "hasu",
  "シロツメクサ": "shiro_tsumekusa", "ツクネイモ": "tsukumeimo",
  "ヒマワリ": "himawari", "ヨモギ": "yomogi", "ヤブラン": "yabran",
  "フジ": "fuji2", "ハイビスカス": "hibiscus", "カキノキ": "kaki",
  "オオムギ": "omugi", "オオイヌノフグリ": "ooinunofuguri",
  "フウトウカズラ": "fuutoukazura", "ナンバンギセル": "nanban_giseru",
};

// ── メイン処理 ────────────────────────────────────────────
const mapping = []; // sketchfab.ts 用
const newPlants = []; // plants.ts 追加用
const usedIds = new Set(existingPlants.map(p => p.id));

for (const sp of allSpecies) {
  // 除外判定
  if (EXCLUDE_JANAMES.has(sp.jaName)) continue;
  if (/類$/.test(sp.jaName) && !ROMAJI_MAP[sp.jaName]) continue;
  if (!sp.jaName || sp.jaName.length < 2) continue;

  // 学名補完
  if (!sp.scientificName && SCI_NAME_MAP[sp.jaName]) {
    sp.scientificName = SCI_NAME_MAP[sp.jaName];
  }

  // 和名のエイリアスチェック
  const aliasJa = JA_ALIASES[sp.jaName];
  if (aliasJa === null) continue; // 明示的にスキップ

  // マッチング
  const searchJa = aliasJa || sp.jaName;
  let plant = jaToPlant.get(searchJa);
  if (!plant && sp.scientificName) {
    const sci = sp.scientificName.toLowerCase();
    plant = sciToPlant.get(sci);
    if (!plant) {
      const parts = sp.scientificName.split(" ");
      if (parts.length >= 2) plant = sciToPlant.get((parts[0] + " " + parts[1]).toLowerCase());
    }
  }

  if (plant) {
    // 既存植物にマッチ
    mapping.push({
      plantId: plant.id,
      uid: sp.uid,
      jaName: sp.jaName,
      enName: sp.enName || "",
      scientificName: sp.scientificName || plant.scientificName,
      matchLevel: "exact",
    });
  } else {
    // 新規追加
    const id = ROMAJI_MAP[sp.jaName];
    if (!id) {
      console.error(`SKIP (no ID): ${sp.jaName}`);
      continue;
    }
    if (usedIds.has(id)) {
      // ID が既に使用済み → マッピングのみ
      mapping.push({
        plantId: id,
        uid: sp.uid,
        jaName: sp.jaName,
        enName: sp.enName || "",
        scientificName: sp.scientificName || "",
        matchLevel: "exact",
      });
      continue;
    }
    usedIds.add(id);

    // 科を推定
    const genus = (sp.scientificName || "").split(" ")[0];
    const familyInfo = GENUS_TO_FAMILY[genus] || ["unknown", "不明科", "Unknown"];

    mapping.push({
      plantId: id,
      uid: sp.uid,
      jaName: sp.jaName,
      enName: sp.enName || "",
      scientificName: sp.scientificName || "",
      matchLevel: "exact",
    });

    newPlants.push({
      id,
      jaName: sp.jaName,
      enName: (sp.enName || "").replace(/[,].*/,"").replace(/[？?]/g,"").trim(),
      scientificName: sp.scientificName || "",
      familyId: familyInfo[0],
      familyJaName: familyInfo[1],
    });
  }
}

// 重複除去（同一 plantId は最初のもののみ）
const seen = new Set();
const uniqueMapping = [];
for (const m of mapping) {
  if (!seen.has(m.plantId)) {
    seen.add(m.plantId);
    uniqueMapping.push(m);
  }
}

console.error(`Final mapping: ${uniqueMapping.length} entries`);
console.error(`New plants to add: ${newPlants.length} entries`);

writeFileSync(
  join(root, ".sketchfab_final.json"),
  JSON.stringify({ mapping: uniqueMapping, newPlants }, null, 2)
);
console.error("Written to .sketchfab_final.json");
