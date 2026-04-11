/**
 * 分類体系ツリー — APG IV (2016) 準拠
 * 被子植物の目・科の配置は APG IV に基づく。
 * 裸子植物・シダ植物は APG 対象外のため PPG I (2016) および伝統的分類を使用。
 */
import type { TaxonomyNode } from "./types";

export const taxonomyTree: TaxonomyNode = {
  id: "plantae",
  name: "植物界（広義）",
  rank: "kingdom",
  description: "光合成を行う生物の総称（コケ・シダ・種子植物など）",
  imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Diversity_of_plants_image_version_5.png",
  children: [
    // ─────────────────────────────────────────────────────
    // コケ植物
    // ─────────────────────────────────────────────────────
    {
      id: "bryophyta",
      name: "コケ植物",
      rank: "phylum",
      description: "維管束をもたない陸上植物。蘚類・苔類・ツノゴケ類からなる。",
      imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tortula_muralis_Habitus.jpeg",
      children: [
        {
          id: "musci",
          name: "蘚類（スギゴケなど）",
          rank: "class",
          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Polytrichum_commune.jpg",
          children: [
            { id: "polytrichaceae", name: "スギゴケ科", rank: "family", familyId: "polytrichaceae", children: [
                { id: "kosugigoke", name: "コスギゴケ", rank: "species", plantId: "kosugigoke" },
              ] },
            { id: "bartramiaceae", name: "タマゴケ科", rank: "family", familyId: "bartramiaceae", children: [
                { id: "tamagoke", name: "タマゴケ", rank: "species", plantId: "tamagoke" },
              ] },
            { id: "bryaceae", name: "ハリガネゴケ科", rank: "family", familyId: "bryaceae", children: [
                { id: "ookasagoke", name: "オオカサゴケ", rank: "species", plantId: "ookasagoke" },
              ] },
            { id: "hypnaceae", name: "ハイゴケ科", rank: "family", familyId: "hypnaceae", children: [
                { id: "kusagoke", name: "クサゴケ", rank: "species", plantId: "kusagoke" },
              ] },
            { id: "climaciaceae", name: "コウヤノマンネングサ科", rank: "family", familyId: "climaciaceae", children: [
                { id: "kouya_mannengusa", name: "コウヤノマンネングサ", rank: "species", plantId: "kouya_mannengusa" },
              ] },
          ],
        },
        {
          id: "hepaticae",
          name: "苔類（ゼニゴケなど）",
          rank: "class",
          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Marchantia_polymorpha.jpg",
          children: [
            { id: "marchantiaceae", name: "ゼニゴケ科", rank: "family", familyId: "marchantiaceae", children: [
                { id: "zenigoke", name: "ゼニゴケ", rank: "species", plantId: "zenigoke" },
              ] },
            { id: "conocephalaceae", name: "ジャゴケ科", rank: "family", familyId: "conocephalaceae", children: [
                { id: "jagoke", name: "ジャゴケ", rank: "species", plantId: "jagoke" },
              ] },
          ],
        },
        { id: "anthocerotae", name: "ツノゴケ類", rank: "class" },
      ],
    },
    // ─────────────────────────────────────────────────────
    // シダ植物
    // ─────────────────────────────────────────────────────
    {
      id: "pteridophyta",
      name: "シダ植物",
      rank: "phylum",
      description: "維管束をもつが種子をもたない植物。胞子で繁殖する。",
      imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dryopteris_filix-mas.jpg",
      children: [
        // ヒカゲノカズラ類
        {
          id: "lycopodiopsida",
          name: "ヒカゲノカズラ類",
          rank: "class",
          children: [
            {
              id: "lycopodiales",
              name: "ヒカゲノカズラ目",
              rank: "order",
              children: [
                { id: "lycopodiaceae", name: "ヒカゲノカズラ科", rank: "family", familyId: "lycopodiaceae", children: [

                    { id: "hikage_no_kazura", name: "ヒカゲノカズラ", rank: "species", plantId: "hikage_no_kazura" },

                  ] },
              ],
            },
            {
              id: "selaginellales",
              name: "イワヒバ目",
              rank: "order",
              children: [
                { id: "selaginellaceae", name: "イワヒバ科", rank: "family", familyId: "selaginellaceae", children: [

                    { id: "iwahiba", name: "イワヒバ", rank: "species", plantId: "iwahiba" },

                  ] },
              ],
            },
            {
              id: "isoetales",
              name: "ミズニラ目",
              rank: "order",
              children: [
                { id: "isoetaceae", name: "ミズニラ科", rank: "family", familyId: "isoetaceae", children: [

                    { id: "mizu_nira", name: "ミズニラ", rank: "species", plantId: "mizu_nira" },

                  ] },
              ],
            },
          ],
        },
        // トクサ類
        {
          id: "equisetopsida",
          name: "トクサ類",
          rank: "class",
          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Equisetum_arvense.jpg",
          children: [
            {
              id: "equisetales",
              name: "トクサ目",
              rank: "order",
              children: [
                {
                  id: "equisetaceae",
                  name: "トクサ科",
                  rank: "family",
                  familyId: "equisetaceae",
                  children: [
                    { id: "sugina", name: "スギナ（ツクシ）", rank: "species", plantId: "sugina" },
                  ],
                },
              ],
            },
          ],
        },
        // シダ類
        {
          id: "polypodiopsida",
          name: "シダ類",
          rank: "class",
          children: [
            {
              id: "ophioglossales",
              name: "ハナヤスリ目",
              rank: "order",
              children: [
                { id: "ophioglossaceae", name: "ハナヤスリ科", rank: "family", familyId: "ophioglossaceae", children: [

                    { id: "hana_yasuri", name: "ハナヤスリ", rank: "species", plantId: "hana_yasuri" },

                  ] },
              ],
            },
            {
              id: "psilotales",
              name: "マツバラン目",
              rank: "order",
              children: [
                { id: "psilotaceae", name: "マツバラン科", rank: "family", familyId: "psilotaceae", children: [

                    { id: "matsuba_ran", name: "マツバラン", rank: "species", plantId: "matsuba_ran" },

                  ] },
              ],
            },
            {
              id: "marattiales",
              name: "リュウビンタイ目",
              rank: "order",
              children: [
                { id: "marattiaceae", name: "リュウビンタイ科", rank: "family", familyId: "marattiaceae", children: [

                    { id: "ryuubintai", name: "リュウビンタイ", rank: "species", plantId: "ryuubintai" },

                  ] },
              ],
            },
            {
              id: "osmundales",
              name: "ゼンマイ目",
              rank: "order",
              children: [
                {
                  id: "osmundaceae",
                  name: "ゼンマイ科",
                  rank: "family",
                  familyId: "osmundaceae",
                  children: [
                    { id: "zenmai", name: "ゼンマイ", rank: "species", plantId: "zenmai" },
                  ],
                },
                { id: "plagiogyriaceae", name: "キジノオシダ科", rank: "family", familyId: "plagiogyriaceae", children: [

                    { id: "kansen_shida", name: "カンセンシダ", rank: "species", plantId: "kansen_shida" },

                  ] },
              ],
            },
            {
              id: "hymenophyllales",
              name: "コケシノブ目",
              rank: "order",
              children: [
                { id: "hymenophyllaceae", name: "コケシノブ科", rank: "family", familyId: "hymenophyllaceae", children: [

                    { id: "koke_shinobu", name: "コケシノブ", rank: "species", plantId: "koke_shinobu" },

                  ] },
              ],
            },
            {
              id: "gleicheniales",
              name: "コシダ目",
              rank: "order",
              children: [
                { id: "gleicheniaceae", name: "コシダ科", rank: "family", familyId: "gleicheniaceae", children: [

                    { id: "koshida", name: "コシダ", rank: "species", plantId: "koshida" },

                  ] },
                { id: "dipteridaceae", name: "ジョウロウホングウシダ科", rank: "family", familyId: "dipteridaceae", children: [

                    { id: "urajiro", name: "ウラジロ", rank: "species", plantId: "urajiro" },

                  ] },
              ],
            },
            {
              id: "schizaeales",
              name: "カニクサ目",
              rank: "order",
              children: [
                { id: "schizaeaceae", name: "カニクサ科", rank: "family", familyId: "schizaeaceae", children: [

                    { id: "kanikusa", name: "カニクサ", rank: "species", plantId: "kanikusa" },

                  ] },
              ],
            },
            {
              id: "cyatheales",
              name: "ヘゴ目",
              rank: "order",
              children: [
                { id: "dicksoniaceae", name: "コバノイシカグマ科", rank: "family", familyId: "dicksoniaceae", children: [

                    { id: "jikusonia", name: "ジクソニア", rank: "species", plantId: "jikusonia" },

                  ] },
                { id: "cyatheaceae", name: "ヘゴ科", rank: "family", familyId: "cyatheaceae", children: [

                    { id: "hego", name: "ヘゴ", rank: "species", plantId: "hego" },

                  ] },
              ],
            },
            {
              id: "polypodiales",
              name: "ウラボシ目",
              rank: "order",
              children: [
                { id: "cheiropleuriaceae", name: "チェイロプレウリア科", rank: "family", familyId: "cheiropleuriaceae", children: [

                    { id: "kijinoosida", name: "キジノオシダ", rank: "species", plantId: "kijinoosida" },

                  ] },
                { id: "adiantaceae", name: "アジアンタム科", rank: "family", familyId: "adiantaceae", children: [

                    { id: "hourai_shida", name: "ホウライシダ", rank: "species", plantId: "hourai_shida" },

                  ] },
                { id: "vittariaceae", name: "コタニワタリ科", rank: "family", familyId: "vittariaceae", children: [

                    { id: "shishiran", name: "シシラン", rank: "species", plantId: "shishiran" },

                  ] },
                { id: "pteridaceae", name: "イノモトソウ科", rank: "family", familyId: "pteridaceae", children: [

                    { id: "inomoto_sou", name: "イノモトソウ", rank: "species", plantId: "inomoto_sou" },

                  ] },
                { id: "dennstaedtiaceae", name: "コバノイシカグマ科", rank: "family", familyId: "dennstaedtiaceae", children: [

                    { id: "warabi", name: "ワラビ", rank: "species", plantId: "warabi" },

                  ] },
                { id: "lindsaeaceae", name: "ホラシノブ科", rank: "family", familyId: "lindsaeaceae", children: [

                    { id: "hongushida", name: "ホングウシダ", rank: "species", plantId: "hongushida" },

                  ] },
                { id: "aspleniaceae", name: "チャセンシダ科", rank: "family", familyId: "aspleniaceae", children: [

                    { id: "chasen_shida", name: "チャセンシダ", rank: "species", plantId: "chasen_shida" },

                  ] },
                { id: "woodsiaceae", name: "メシダ科", rank: "family", familyId: "woodsiaceae", children: [

                    { id: "inu_warabi", name: "イヌワラビ", rank: "species", plantId: "inu_warabi" },

                  ] },
                { id: "thelypteridaceae", name: "ヒメシダ科", rank: "family", familyId: "thelypteridaceae", children: [

                    { id: "hime_shida", name: "ヒメシダ", rank: "species", plantId: "hime_shida" },

                  ] },
                { id: "blechnaceae", name: "シシガシラ科", rank: "family", familyId: "blechnaceae", children: [

                    { id: "shishigashira", name: "シシガシラ", rank: "species", plantId: "shishigashira" },

                  ] },
                { id: "dryopteridaceae", name: "オシダ科", rank: "family", familyId: "dryopteridaceae", children: [

                    { id: "oni_yabusoba", name: "オニヤブソテツ", rank: "species", plantId: "oni_yabusoba" },

                  ] },
                { id: "lomariopsidaceae", name: "ロマリオプシス科", rank: "family", familyId: "lomariopsidaceae", children: [

                    { id: "himo_kazura", name: "ヒメヒモカズラ", rank: "species", plantId: "himo_kazura" },

                  ] },
                { id: "oleandraceae", name: "タマシダ科", rank: "family", familyId: "oleandraceae", children: [

                    { id: "tamashida", name: "タマシダ", rank: "species", plantId: "tamashida" },

                  ] },
                { id: "davalliaceae", name: "シノブ科", rank: "family", familyId: "davalliaceae", children: [

                    { id: "sinobu", name: "シノブ", rank: "species", plantId: "sinobu" },

                  ] },
                { id: "polypodiaceae", name: "ウラボシ科", rank: "family", familyId: "polypodiaceae", children: [

                    { id: "nokigiku_shida", name: "ノキシノブ", rank: "species", plantId: "nokigiku_shida" },

                  ] },
                { id: "grammitidaceae", name: "グラミティス科", rank: "family", familyId: "grammitidaceae", children: [

                    { id: "uragesida", name: "ウラゲシダ", rank: "species", plantId: "uragesida" },

                  ] },
                { id: "onocleaceae", name: "コウヤワラビ科", rank: "family", familyId: "onocleaceae", children: [
                    { id: "kogomi", name: "コゴミ", rank: "species", plantId: "kogomi" },
                  ] },
              ],
            },
            {
              id: "salviniales",
              name: "サンショウモ目",
              rank: "order",
              children: [
                { id: "marsileaceae", name: "デンジソウ科", rank: "family", familyId: "marsileaceae", children: [

                    { id: "denji_so", name: "デンジソウ", rank: "species", plantId: "denji_so" },

                  ] },
                { id: "salviniaceae", name: "サンショウモ科", rank: "family", familyId: "salviniaceae", children: [

                    { id: "sanshoumosou", name: "サンショウモ", rank: "species", plantId: "sanshoumosou" },

                  ] },
                { id: "azollaceae", name: "アカウキクサ科", rank: "family", familyId: "azollaceae", children: [

                    { id: "aka_ukikusa", name: "アカウキクサ", rank: "species", plantId: "aka_ukikusa" },

                  ] },
              ],
            },
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────
    // 種子植物（裸子植物 + 被子植物）
    // ─────────────────────────────────────────────────────
    {
      id: "spermatophyta",
      name: "種子植物",
      rank: "phylum",
      description: "種子によって繁殖する植物。裸子植物と被子植物からなる。",
      imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pinus_sylvestris_forest_Elet.jpg",
      children: [
    {
      id: "gymnospermae",
      name: "裸子植物",
      rank: "class",
      description: "種子をもつが、種子が果実に包まれない植物。針葉樹など。",
      imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pinus_sylvestris_forest_Elet.jpg",
      children: [
        {
          id: "cycadales",
          name: "ソテツ目",
          rank: "order",
          children: [
            { id: "cycadaceae", name: "ソテツ科", rank: "family", familyId: "cycadaceae", children: [

                { id: "sotetsu", name: "ソテツ", rank: "species", plantId: "sotetsu" },

              ] },
          ],
        },
        {
          id: "ginkgoales",
          name: "イチョウ目",
          rank: "order",
          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ginkgo_biloba_at_The_Morton_Arboretum_(30176248105).jpg",
          children: [
            {
              id: "ginkgoaceae",
              name: "イチョウ科",
              rank: "family",
              familyId: "ginkgoaceae",
              children: [
                { id: "ginkgo", name: "イチョウ", rank: "species", plantId: "ginkgo" },
              ],
            },
          ],
        },
        {
          id: "coniferales",
          name: "マツ目",
          rank: "order",
          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pinus_sylvestris_Taiga_trees.jpg",
          children: [
            {
              id: "pinaceae",
              name: "マツ科",
              rank: "family",
              familyId: "pinaceae",
              children: [
                { id: "akamatsu", name: "アカマツ", rank: "species", plantId: "akamatsu" },
                { id: "kuromatsu", name: "クロマツ", rank: "species", plantId: "kuromatsu" },
              ],
            },
            {
              id: "cupressaceae",
              name: "ヒノキ科",
              rank: "family",
              familyId: "cupressaceae",
              children: [
                { id: "sugi", name: "スギ", rank: "species", plantId: "sugi" },
                { id: "hinoki", name: "ヒノキ", rank: "species", plantId: "hinoki" },
              ],
            },
            { id: "sciadopityaceae", name: "コウヤマキ科", rank: "family", familyId: "sciadopityaceae", children: [

                { id: "kouyamaki", name: "コウヤマキ", rank: "species", plantId: "kouyamaki" },

              ] },
            { id: "podocarpaceae", name: "マキ科", rank: "family", familyId: "podocarpaceae", children: [

                { id: "inumaki", name: "イヌマキ", rank: "species", plantId: "inumaki" },

              ] },
            { id: "araucariaceae", name: "ナンヨウスギ科", rank: "family", familyId: "araucariaceae", children: [

                { id: "nanyo_sugi", name: "ナンヨウスギ", rank: "species", plantId: "nanyo_sugi" },

              ] },
            { id: "cephalotaxaceae", name: "イヌガヤ科", rank: "family", familyId: "cephalotaxaceae", children: [

                { id: "inugaya", name: "イヌガヤ", rank: "species", plantId: "inugaya" },

              ] },
            { id: "taxaceae", name: "イチイ科", rank: "family", familyId: "taxaceae", children: [

                { id: "ichii", name: "イチイ", rank: "species", plantId: "ichii" },

              ] },
          ],
        },
        {
          id: "gnetales",
          name: "グネツム目",
          rank: "order",
          children: [
            { id: "ephedraceae", name: "マオウ科", rank: "family", familyId: "ephedraceae", children: [

                { id: "maoh", name: "マオウ", rank: "species", plantId: "maoh" },

              ] },
            { id: "gnetaceae", name: "グネツム科", rank: "family", familyId: "gnetaceae", children: [

                { id: "gnetum", name: "グネタム", rank: "species", plantId: "gnetum" },

              ] },
            { id: "welwitschiaceae", name: "ウェルウィッチア科", rank: "family", familyId: "welwitschiaceae", children: [

                { id: "welwitschia", name: "ウェルウィッチア", rank: "species", plantId: "welwitschia" },

              ] },
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────
    // 被子植物
    // ─────────────────────────────────────────────────────
    {
      id: "angiospermae",
      name: "被子植物",
      rank: "class",
      description: "種子が果実（子房）に包まれた植物。花を咲かせる。現存植物の大多数を占める。",
      imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Flower_poster_2.jpg",
      children: [
        // ── ANA基部群 ──
        {
          id: "ana_grade",
          name: "ANA基部群",
          rank: "class",
          description: "被子植物の最初期分岐群。スイレン目・マツブサ目など。",
          children: [
            {
              id: "nymphaeales",
              name: "スイレン目",
              rank: "order",
              children: [
                { id: "cabombaceae", name: "ジュンサイ科", rank: "family", familyId: "cabombaceae", children: [

                    { id: "junsai", name: "ジュンサイ", rank: "species", plantId: "junsai" },

                  ] },
                { id: "nymphaeaceae", name: "スイレン科", rank: "family", familyId: "nymphaeaceae", children: [

                    { id: "hasu", name: "ハス", rank: "species", plantId: "hasu" },

                  ] },
              ],
            },
            {
              id: "austrobaileyales",
              name: "マツブサ目",
              rank: "order",
              children: [
                { id: "schisandraceae", name: "マツブサ科", rank: "family", familyId: "schisandraceae", children: [

                    { id: "sane_kazura", name: "サネカズラ", rank: "species", plantId: "sane_kazura" },

                  ] },
              ],
            },
          ],
        },
        // ── マグノリア類 ──
        {
          id: "magnoliids",
          name: "マグノリア類",
          rank: "class",
          description: "被子植物の初期分岐群のひとつ。モクレン目・クスノキ目など。",
          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Magnolia_liliiflora1.jpg",
          children: [
            {
              id: "chloranthales",
              name: "センリョウ目",
              rank: "order",
              children: [
                { id: "chloranthaceae", name: "センリョウ科", rank: "family", familyId: "chloranthaceae", children: [

                    { id: "senryo", name: "センリョウ", rank: "species", plantId: "senryo" },

                  ] },
              ],
            },
            {
              id: "piperales",
              name: "コショウ目",
              rank: "order",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Houttuynia_cordata02.jpg",
              children: [
                {
                  id: "saururaceae",
                  name: "ドクダミ科",
                  rank: "family",
                  familyId: "saururaceae",
                  children: [
                    { id: "dokudami", name: "ドクダミ", rank: "species", plantId: "dokudami" },
                  ],
                },
                { id: "piperaceae", name: "コショウ科", rank: "family", familyId: "piperaceae", children: [

                    { id: "fuutoukazura", name: "フウトウカズラ", rank: "species", plantId: "fuutoukazura" },

                  ] },
                { id: "aristolochiaceae", name: "ウマノスズクサ科", rank: "family", familyId: "aristolochiaceae", children: [

                    { id: "umanosuzukusa", name: "ウマノスズクサ", rank: "species", plantId: "umanosuzukusa" },

                  ] },
              ],
            },
            {
              id: "magnoliales",
              name: "モクレン目",
              rank: "order",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Magnolia_liliiflora1.jpg",
              children: [
                {
                  id: "magnoliaceae",
                  name: "モクレン科",
                  rank: "family",
                  familyId: "magnoliaceae",
                  children: [
                    { id: "kobushi", name: "コブシ", rank: "species", plantId: "kobushi" },
                  ],
                },
                { id: "annonaceae", name: "バンレイシ科", rank: "family", familyId: "annonaceae", children: [

                    { id: "banreisi", name: "バンレイシ", rank: "species", plantId: "banreisi" },

                  ] },
                { id: "myristicaceae", name: "ニクズク科", rank: "family", familyId: "myristicaceae", children: [

                    { id: "niku_zuku", name: "ニクズク", rank: "species", plantId: "niku_zuku" },

                  ] },
                { id: "degeneriaceae", name: "デゲネリア科", rank: "family", familyId: "degeneriaceae", children: [

                    { id: "degeneria", name: "デゲネリア", rank: "species", plantId: "degeneria" },

                  ] },
              ],
            },
            {
              id: "laurales",
              name: "クスノキ目",
              rank: "order",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Laurus_nobilis_tree.jpg",
              children: [
                {
                  id: "lauraceae",
                  name: "クスノキ科",
                  rank: "family",
                  familyId: "lauraceae",
                  children: [
                    { id: "kusunoki", name: "クスノキ", rank: "species", plantId: "kusunoki" },
                  ],
                },
                { id: "calycanthaceae", name: "ロウバイ科", rank: "family", familyId: "calycanthaceae", children: [

                    { id: "roubai", name: "ロウバイ", rank: "species", plantId: "roubai" },

                  ] },
                { id: "hernandiaceae", name: "ハスノハギリ科", rank: "family", familyId: "hernandiaceae", children: [

                    { id: "hasunohagiri", name: "ハスノハギリ", rank: "species", plantId: "hasunohagiri" },

                  ] },
              ],
            },
          ],
        },
        // ── 単子葉類 ──
        {
          id: "monocots",
          name: "単子葉類",
          rank: "class",
          description: "発芽時の子葉が1枚。葉脈は平行脈が多い。イネ・ユリなど。",
          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Oryza_sativa_-_Tianshui,_Gansu,_China.jpg",
          children: [
            {
              id: "acorales",
              name: "ショウブ目",
              rank: "order",
              children: [
                { id: "acoraceae", name: "ショウブ科", rank: "family", familyId: "acoraceae", children: [

                    { id: "shobu", name: "ショウブ", rank: "species", plantId: "shobu" },

                  ] },
              ],
            },
            {
              id: "alismatales",
              name: "オモダカ目",
              rank: "order",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Alisma_plantago-aquatica_Sturm57.jpg",
              children: [
                {
                  id: "araceae",
                  name: "サトイモ科",
                  rank: "family",
                  familyId: "araceae",
                  children: [
                    { id: "mizubasho", name: "ミズバショウ", rank: "species", plantId: "mizubasho" },
                  ],
                },
                { id: "alismataceae", name: "オモダカ科", rank: "family", familyId: "alismataceae", children: [

                    { id: "omodaka", name: "オモダカ", rank: "species", plantId: "omodaka" },

                  ] },
                { id: "hydrocharitaceae", name: "トチカガミ科", rank: "family", familyId: "hydrocharitaceae", children: [

                    { id: "kanadasoukimo", name: "カナダモ", rank: "species", plantId: "kanadasoukimo" },

                  ] },
                { id: "zosteraceae", name: "アマモ科", rank: "family", familyId: "zosteraceae", children: [

                    { id: "amamo", name: "アマモ", rank: "species", plantId: "amamo" },

                  ] },
                { id: "potamogetonaceae", name: "ヒルムシロ科", rank: "family", familyId: "potamogetonaceae", children: [

                    { id: "hirumushiro", name: "ヒルムシロ", rank: "species", plantId: "hirumushiro" },

                  ] },
                { id: "ruppiaceae", name: "ルッピア科", rank: "family", familyId: "ruppiaceae", children: [

                    { id: "hossummo", name: "ホッスモ", rank: "species", plantId: "hossummo" },

                  ] },
                { id: "cymodoceaceae", name: "シマシモン科", rank: "family", familyId: "cymodoceaceae", children: [

                    { id: "umishiba", name: "ウミシバ", rank: "species", plantId: "umishiba" },

                  ] },
                { id: "scheuchzeriaceae", name: "ミゾハコベ科", rank: "family", familyId: "scheuchzeriaceae", children: [

                    { id: "scheuchzeria", name: "ヒメミクリ", rank: "species", plantId: "scheuchzeria" },

                  ] },
                { id: "aponogetonaceae", name: "アポノゲトン科", rank: "family", familyId: "aponogetonaceae", children: [

                    { id: "mizusugina", name: "ミズスギナ", rank: "species", plantId: "mizusugina" },

                  ] },
                { id: "juncaginaceae", name: "イグサモドキ科", rank: "family", familyId: "juncaginaceae", children: [

                    { id: "igusamo", name: "サンカクイグサモ", rank: "species", plantId: "igusamo" },

                  ] },
              ],
            },
            {
              id: "butomales",
              name: "トチカガミ目",
              rank: "order",
              children: [
                { id: "butomaceae", name: "トチカガミモドキ科", rank: "family", familyId: "butomaceae", children: [

                    { id: "butumusu", name: "ブトムス（花藺）", rank: "species", plantId: "butumusu" },

                  ] },
              ],
            },
            {
              id: "petrosaviales",
              name: "ペトロサヴィア目",
              rank: "order",
              children: [
                { id: "petrosaviaceae", name: "サクライソウ科", rank: "family", familyId: "petrosaviaceae", children: [

                    { id: "petrosavia", name: "ペトロサヴィア", rank: "species", plantId: "petrosavia" },

                  ] },
              ],
            },
            {
              id: "dioscoreales",
              name: "ヤマノイモ目",
              rank: "order",
              children: [
                { id: "burmanniaceae", name: "ヒナノシャクジョウ科", rank: "family", familyId: "burmanniaceae", children: [

                    { id: "ginryousou", name: "ギンリョウソウ", rank: "species", plantId: "ginryousou" },

                  ] },
                { id: "dioscoreaceae", name: "ヤマノイモ科", rank: "family", familyId: "dioscoreaceae", children: [

                    { id: "yama_no_imo", name: "ヤマノイモ", rank: "species", plantId: "yama_no_imo" },

                  ] },
              ],
            },
            {
              id: "pandanales",
              name: "パンダナレス目",
              rank: "order",
              children: [
                { id: "triuridaceae", name: "ホナガソウ科", rank: "family", familyId: "triuridaceae", children: [

                    { id: "hoganran", name: "ホウガンラン", rank: "species", plantId: "hoganran" },

                  ] },
                { id: "stemonaceae", name: "ビャクブ科", rank: "family", familyId: "stemonaceae", children: [

                    { id: "byakubu", name: "ビャクブ", rank: "species", plantId: "byakubu" },

                  ] },
                { id: "pandanaceae", name: "タコノキ科", rank: "family", familyId: "pandanaceae", children: [

                    { id: "takonokinoki", name: "タコノキ", rank: "species", plantId: "takonokinoki" },

                  ] },
                { id: "cyclanthaceae", name: "クワズイモ科", rank: "family", familyId: "cyclanthaceae", children: [

                    { id: "kurukurigo", name: "クルクリゴ", rank: "species", plantId: "kurukurigo" },

                  ] },
              ],
            },
            {
              id: "liliales",
              name: "ユリ目",
              rank: "order",
              children: [
                { id: "liliaceae", name: "ユリ科", rank: "family", familyId: "liliaceae", children: [

                    { id: "katakuri", name: "カタクリ", rank: "species", plantId: "katakuri" },

                  ] },
                { id: "smilacaceae", name: "サルトリイバラ科", rank: "family", familyId: "smilacaceae", children: [

                    { id: "saru_tori_ibara", name: "サルトリイバラ", rank: "species", plantId: "saru_tori_ibara" },

                  ] },
              ],
            },
            {
              id: "asparagales",
              name: "キジカクシ目",
              rank: "order",
              children: [
                { id: "amaryllidaceae", name: "ヒガンバナ科", rank: "family", familyId: "amaryllidaceae", children: [

                    { id: "higanbana", name: "ヒガンバナ", rank: "species", plantId: "higanbana" },

                    { id: "nobiru", name: "ノビル", rank: "species", plantId: "nobiru" },

                  ] },
                { id: "asparagaceae", name: "キジカクシ科", rank: "family", familyId: "asparagaceae", children: [

                    { id: "yabran", name: "ヤブラン", rank: "species", plantId: "yabran" },

                  ] },
                { id: "orchidaceae", name: "ラン科", rank: "family", familyId: "orchidaceae", children: [

                    { id: "ebine", name: "エビネ", rank: "species", plantId: "ebine" },

                  ] },
                { id: "hypoxidaceae", name: "キキョウラン科", rank: "family", familyId: "hypoxidaceae", children: [

                    { id: "kinbai_zasa", name: "キンバイザサ", rank: "species", plantId: "kinbai_zasa" },

                  ] },
                { id: "iridaceae", name: "アヤメ科", rank: "family", familyId: "iridaceae", children: [

                    { id: "hanashobu", name: "ハナショウブ", rank: "species", plantId: "hanashobu" },

                  ] },
                { id: "xanthorrhoeaceae", name: "ツルボラン科", rank: "family", familyId: "xanthorrhoeaceae", children: [

                    { id: "aloe", name: "アロエ", rank: "species", plantId: "aloe" },

                  ] },
                { id: "asphodelaceae", name: "ワスレグサ科", rank: "family", familyId: "asphodelaceae", children: [
                    { id: "yabukanzou", name: "ヤブカンゾウ", rank: "species", plantId: "yabukanzou" },
                    { id: "ezo_kisuge", name: "エゾキスゲ", rank: "species", plantId: "ezo_kisuge" },
                    { id: "ezo_zenteika", name: "エゾゼンテイカ", rank: "species", plantId: "ezo_zenteika" },
                    { id: "nokanzou", name: "ノカンゾウ", rank: "species", plantId: "nokanzou" },
                  ] },
              ],
            },
            {
              id: "arecales",
              name: "ヤシ目",
              rank: "order",
              children: [
                { id: "arecaceae", name: "ヤシ科", rank: "family", familyId: "arecaceae", children: [

                    { id: "wahoo_shuro", name: "シュロ", rank: "species", plantId: "wahoo_shuro" },

                  ] },
              ],
            },
            {
              id: "zingiberales",
              name: "ショウガ目",
              rank: "order",
              children: [
                { id: "strelitziaceae", name: "ゴクラクチョウカ科", rank: "family", familyId: "strelitziaceae", children: [

                    { id: "gokurakuchoka", name: "ゴクラクチョウカ", rank: "species", plantId: "gokurakuchoka" },

                  ] },
                { id: "heliconiaceae", name: "ヘリコニア科", rank: "family", familyId: "heliconiaceae", children: [

                    { id: "herikonia", name: "ヘリコニア", rank: "species", plantId: "herikonia" },

                  ] },
                { id: "musaceae", name: "バショウ科", rank: "family", familyId: "musaceae", children: [

                    { id: "basho", name: "バショウ", rank: "species", plantId: "basho" },

                  ] },
                { id: "cannaceae", name: "カンナ科", rank: "family", familyId: "cannaceae", children: [

                    { id: "kanna", name: "カンナ", rank: "species", plantId: "kanna" },

                  ] },
                { id: "marantaceae", name: "クズウコン科", rank: "family", familyId: "marantaceae" },
                { id: "costaceae", name: "コスタス科", rank: "family", familyId: "costaceae", children: [

                    { id: "kosutasu", name: "コスタス", rank: "species", plantId: "kosutasu" },

                  ] },
                { id: "zingiberaceae", name: "ショウガ科", rank: "family", familyId: "zingiberaceae", children: [

                    { id: "myouga", name: "ミョウガ", rank: "species", plantId: "myouga" },

                  ] },
              ],
            },
            {
              id: "commelinales",
              name: "ツユクサ目",
              rank: "order",
              children: [
                { id: "commelinaceae", name: "ツユクサ科", rank: "family", familyId: "commelinaceae", children: [

                    { id: "tsuyukusa", name: "ツユクサ", rank: "species", plantId: "tsuyukusa" },

                  ] },
                { id: "hanguanaceae", name: "ハングアナ科", rank: "family", familyId: "hanguanaceae", children: [

                    { id: "hanguana", name: "ハングアナ", rank: "species", plantId: "hanguana" },

                  ] },
                { id: "philydraceae", name: "ミズアオイ科", rank: "family", familyId: "philydraceae", children: [

                    { id: "philydrum", name: "フィリドルム", rank: "species", plantId: "philydrum" },

                  ] },
                { id: "pontederiaceae", name: "ミズアオイ科", rank: "family", familyId: "pontederiaceae", children: [

                    { id: "mizu_aoi", name: "ミズアオイ", rank: "species", plantId: "mizu_aoi" },

                  ] },
              ],
            },
            {
              id: "poales",
              name: "イネ目",
              rank: "order",
              imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Wheat_close-up.JPG",
              children: [
                {
                  id: "poaceae",
                  name: "イネ科",
                  rank: "family",
                  familyId: "poaceae",
                  children: [
                    { id: "ine", name: "イネ", rank: "species", plantId: "ine" },
                    { id: "komugi", name: "コムギ", rank: "species", plantId: "komugi" },
                    { id: "omugi", name: "オオムギ", rank: "species", plantId: "omugi" },
                    { id: "toumorokoshi", name: "トウモロコシ", rank: "species", plantId: "toumorokoshi" },
                    { id: "mosochiku", name: "モウソウチク", rank: "species", plantId: "mosochiku" },
                    { id: "chigaya", name: "チガヤ", rank: "species", plantId: "chigaya" },
                    { id: "susuki", name: "ススキ", rank: "species", plantId: "susuki" },
                    { id: "enokoro", name: "エノコログサ", rank: "species", plantId: "enokoro" },
                    { id: "yoshi", name: "ヨシ", rank: "species", plantId: "yoshi" },
                  ],
                },
                {
                  id: "typhaceae",
                  name: "ガマ科",
                  rank: "family",
                  familyId: "typhaceae",
                  children: [
                    { id: "gama", name: "ガマ", rank: "species", plantId: "gama" },
                  ],
                },
                { id: "xyridaceae", name: "イグサモドキ科", rank: "family", familyId: "xyridaceae", children: [

                    { id: "kibana_no_igusa", name: "キバナノイグサ", rank: "species", plantId: "kibana_no_igusa" },

                  ] },
                { id: "eriocaulaceae", name: "ホシクサ科", rank: "family", familyId: "eriocaulaceae", children: [

                    { id: "hoshi_kusa", name: "ホシクサ", rank: "species", plantId: "hoshi_kusa" },

                  ] },
                { id: "juncaceae", name: "イグサ科", rank: "family", familyId: "juncaceae", children: [

                    { id: "igusa", name: "イグサ", rank: "species", plantId: "igusa" },

                  ] },
                { id: "cyperaceae", name: "カヤツリグサ科", rank: "family", familyId: "cyperaceae", children: [

                    { id: "kaya_tsuri_gusa", name: "カヤツリグサ", rank: "species", plantId: "kaya_tsuri_gusa" },

                  ] },
                { id: "centrolepidaceae", name: "ケントロレピス科", rank: "family", familyId: "centrolepidaceae", children: [

                    { id: "hosoba_igusa_fam", name: "ホソバノイグサ", rank: "species", plantId: "hosoba_igusa_fam" },

                  ] },
                { id: "restionaceae", name: "レスティオ科", rank: "family", familyId: "restionaceae", children: [

                    { id: "restio", name: "レスチオ", rank: "species", plantId: "restio" },

                  ] },
                { id: "flagellariaceae", name: "フラゲラリア科", rank: "family", familyId: "flagellariaceae", children: [

                    { id: "hanahigo", name: "トウアズキ", rank: "species", plantId: "hanahigo" },

                  ] },
                { id: "bromeliaceae", name: "パイナップル科", rank: "family", familyId: "bromeliaceae", children: [

                    { id: "ananas", name: "パイナップル", rank: "species", plantId: "ananas" },

                  ] },
              ],
            },
          ],
        },
        // ── 真正双子葉類 ──
        {
          id: "eudicots",
          name: "真正双子葉類",
          rank: "class",
          description: "発芽時の子葉が2枚。花粉に3つの溝をもつ。被子植物の過半数を占める。",
          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aquilegia_vulgaris_drawing.jpg",
          children: [
            // ── 基部真正双子葉類 ──
            {
              id: "basal_eudicots",
              name: "基部真正双子葉類",
              rank: "class",
              children: [
                {
                  id: "ceratophyllales",
                  name: "キンギョモ目",
                  rank: "order",
                  children: [
                    { id: "ceratophyllaceae", name: "キンギョモ科", rank: "family", familyId: "ceratophyllaceae", children: [

                        { id: "kingyomo", name: "キンギョモ", rank: "species", plantId: "kingyomo" },

                      ] },
                  ],
                },
                {
                  id: "ranunculales",
                  name: "キンポウゲ目",
                  rank: "order",
                  children: [
                    { id: "papaveraceae", name: "ケシ科", rank: "family", familyId: "papaveraceae", children: [

                        { id: "kusa_no_ou", name: "クサノオウ", rank: "species", plantId: "kusa_no_ou" },

                      ] },
                    { id: "lardizabalaceae", name: "アケビ科", rank: "family", familyId: "lardizabalaceae", children: [

                        { id: "akebi", name: "アケビ", rank: "species", plantId: "akebi" },

                      ] },
                    { id: "menispermaceae", name: "ツヅラフジ科", rank: "family", familyId: "menispermaceae", children: [

                        { id: "aote_kazura", name: "アオツヅラフジ", rank: "species", plantId: "aote_kazura" },

                      ] },
                    { id: "berberidaceae", name: "メギ科", rank: "family", familyId: "berberidaceae", children: [

                        { id: "nandina", name: "ナンテン", rank: "species", plantId: "nandina" },

                      ] },
                    { id: "ranunculaceae", name: "キンポウゲ科", rank: "family", familyId: "ranunculaceae", children: [

                        { id: "kikuzaki_ichige", name: "キクザキイチゲ", rank: "species", plantId: "kikuzaki_ichige" },

                      ] },
                  ],
                },
                {
                  id: "eupteleales",
                  name: "フサザクラ目",
                  rank: "order",
                  children: [
                    { id: "eupteleaceae", name: "フサザクラ科", rank: "family", familyId: "eupteleaceae", children: [

                        { id: "fusazakura", name: "フサザクラ", rank: "species", plantId: "fusazakura" },

                      ] },
                  ],
                },
                {
                  id: "proteales",
                  name: "ヤマモガシ目",
                  rank: "order",
                  imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Platanus_x_hispanica_-_Barcelona.jpg",
                  children: [
                    {
                      id: "platanaceae",
                      name: "スズカケノキ科",
                      rank: "family",
                      familyId: "platanaceae",
                      children: [
                        { id: "suzukake", name: "プラタナス", rank: "species", plantId: "suzukake" },
                      ],
                    },
                    { id: "sabiaceae", name: "アワブキ科", rank: "family", familyId: "sabiaceae", children: [

                        { id: "awabuki", name: "アワブキ", rank: "species", plantId: "awabuki" },

                      ] },
                    { id: "proteaceae", name: "ヤマモガシ科", rank: "family", familyId: "proteaceae", children: [

                        { id: "yamaboubu", name: "ヤマモガシ", rank: "species", plantId: "yamaboubu" },

                      ] },
                  ],
                },
                {
                  id: "trochodendrales",
                  name: "ヤマグルマ目",
                  rank: "order",
                  children: [
                    { id: "trochodendraceae", name: "ヤマグルマ科", rank: "family", familyId: "trochodendraceae", children: [

                        { id: "yamaguruma", name: "ヤマグルマ", rank: "species", plantId: "yamaguruma" },

                      ] },
                  ],
                },
                {
                  id: "buxales",
                  name: "ツゲ目",
                  rank: "order",
                  children: [
                    { id: "buxaceae", name: "ツゲ科", rank: "family", familyId: "buxaceae", children: [

                        { id: "tsuge", name: "ツゲ", rank: "species", plantId: "tsuge" },

                      ] },
                  ],
                },
                {
                  id: "gunnerales",
                  name: "グンネラ目",
                  rank: "order",
                  children: [
                    { id: "gunneraceae", name: "グンネラ科", rank: "family", familyId: "gunneraceae", children: [

                        { id: "gunnera", name: "グンネラ", rank: "species", plantId: "gunnera" },

                      ] },
                  ],
                },
                {
                  id: "dilleniales",
                  name: "ビワモドキ目",
                  rank: "order",
                  children: [
                    { id: "dilleniaceae", name: "ビワモドキ科", rank: "family", familyId: "dilleniaceae", children: [

                        { id: "tetracera", name: "テトラセラ", rank: "species", plantId: "tetracera" },

                      ] },
                  ],
                },
              ],
            },
            // ── コア真正双子葉類 ──
            {
              id: "core_eudicots",
              name: "コア真正双子葉類",
              rank: "class",
              children: [
                // ユキノシタ目
                {
                  id: "saxifragales",
                  name: "ユキノシタ目",
                  rank: "order",
                  children: [
                    { id: "paeoniaceae", name: "ボタン科", rank: "family", familyId: "paeoniaceae", children: [

                        { id: "botan", name: "ボタン", rank: "species", plantId: "botan" },

                      ] },
                    { id: "hamamelidaceae", name: "マンサク科", rank: "family", familyId: "hamamelidaceae", children: [

                        { id: "mansaku", name: "マンサク", rank: "species", plantId: "mansaku" },

                      ] },
                    { id: "altingiaceae", name: "フウ科", rank: "family", familyId: "altingiaceae", children: [
                        { id: "fuu", name: "フウ", rank: "species", plantId: "fuu" },
                        { id: "momijiba_fuu", name: "モミジバフウ", rank: "species", plantId: "momijiba_fuu" },
                      ] },
                    { id: "cercidiphyllaceae", name: "カツラ科", rank: "family", familyId: "cercidiphyllaceae", children: [

                        { id: "katsura", name: "カツラ", rank: "species", plantId: "katsura" },

                      ] },
                    { id: "daphniphyllaceae", name: "ユズリハ科", rank: "family", familyId: "daphniphyllaceae", children: [

                        { id: "yuzuriha", name: "ユズリハ", rank: "species", plantId: "yuzuriha" },

                      ] },
                    { id: "grossulariaceae", name: "スグリ科", rank: "family", familyId: "grossulariaceae", children: [

                        { id: "suguri", name: "スグリ", rank: "species", plantId: "suguri" },

                      ] },
                    { id: "saxifragaceae", name: "ユキノシタ科", rank: "family", familyId: "saxifragaceae", children: [

                        { id: "yukino_shita", name: "ユキノシタ", rank: "species", plantId: "yukino_shita" },

                      ] },
                    { id: "crassulaceae", name: "ベンケイソウ科", rank: "family", familyId: "crassulaceae", children: [

                        { id: "benkei_sou", name: "マンネングサ", rank: "species", plantId: "benkei_sou" },

                      ] },
                    { id: "haloragaceae", name: "アリノトウグサ科", rank: "family", familyId: "haloragaceae", children: [
                      { id: "fusamo", name: "フサモ", rank: "species", plantId: "fusamo" },
                    ] },
                  ],
                },
                // ビャクダン目
                {
                  id: "santalales",
                  name: "ビャクダン目",
                  rank: "order",
                  children: [
                    { id: "balanophoraceae", name: "ツチトリモチ科", rank: "family", familyId: "balanophoraceae", children: [

                        { id: "tsuchi_torimochi", name: "ツチトリモチ", rank: "species", plantId: "tsuchi_torimochi" },

                      ] },
                    { id: "olacaceae", name: "ツルモドキ科", rank: "family", familyId: "olacaceae", children: [

                        { id: "yamaboubu_ola", name: "ヤマビワ", rank: "species", plantId: "yamaboubu_ola" },

                      ] },
                    { id: "opiliaceae", name: "オピリア科", rank: "family", familyId: "opiliaceae", children: [

                        { id: "opilia", name: "オピリア", rank: "species", plantId: "opilia" },

                      ] },
                    { id: "santalaceae", name: "ビャクダン科", rank: "family", familyId: "santalaceae", children: [

                        { id: "byakudan", name: "ビャクダン", rank: "species", plantId: "byakudan" },

                      ] },
                    { id: "loranthaceae", name: "ヤドリギ科", rank: "family", familyId: "loranthaceae", children: [

                        { id: "yadorigi", name: "ヤドリギ", rank: "species", plantId: "yadorigi" },

                      ] },
                  ],
                },
                // ブドウ目
                {
                  id: "vitales",
                  name: "ブドウ目",
                  rank: "order",
                  children: [
                    { id: "vitaceae", name: "ブドウ科", rank: "family", familyId: "vitaceae", children: [

                        { id: "budo", name: "ブドウ", rank: "species", plantId: "budo" },

                      ] },
                  ],
                },
                // ナデシコ目
                {
                  id: "caryophyllales",
                  name: "ナデシコ目",
                  rank: "order",
                  imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dianthus_caryophyllus_Wild_carnation.jpg",
                  children: [
                    {
                      id: "polygonaceae",
                      name: "タデ科",
                      rank: "family",
                      familyId: "polygonaceae",
                      children: [
                        { id: "soba", name: "ソバ", rank: "species", plantId: "soba" },
                        { id: "mizuhiki", name: "ミズヒキ", rank: "species", plantId: "mizuhiki" },
                        { id: "suiba", name: "スイバ", rank: "species", plantId: "suiba" },
                        { id: "itadori", name: "イタドリ", rank: "species", plantId: "itadori" },
                      ],
                    },
                    {
                      id: "caryophyllaceae",
                      name: "ナデシコ科",
                      rank: "family",
                      familyId: "caryophyllaceae",
                      children: [
                        { id: "hakobe", name: "ハコベ", rank: "species", plantId: "hakobe" },
                      ],
                    },
                    { id: "tamaricaceae", name: "ギョリュウ科", rank: "family", familyId: "tamaricaceae", children: [

                        { id: "gyoryu", name: "ギョリュウ", rank: "species", plantId: "gyoryu" },

                      ] },
                    { id: "plumbaginaceae", name: "イソマツ科", rank: "family", familyId: "plumbaginaceae", children: [

                        { id: "hamahisakaki", name: "ハマヒサカキ", rank: "species", plantId: "hamahisakaki" },

                      ] },
                    { id: "droseraceae", name: "モウセンゴケ科", rank: "family", familyId: "droseraceae", children: [

                        { id: "mousenngoke", name: "モウセンゴケ", rank: "species", plantId: "mousenngoke" },

                      ] },
                    { id: "nepenthaceae", name: "ウツボカズラ科", rank: "family", familyId: "nepenthaceae", children: [

                        { id: "utsubo_kazura", name: "ウツボカズラ", rank: "species", plantId: "utsubo_kazura" },

                      ] },
                    { id: "ancistrocladaceae", name: "アンキストロクラドゥス科", rank: "family", familyId: "ancistrocladaceae", children: [

                        { id: "ancistrocladus", name: "アンシストロクラダス", rank: "species", plantId: "ancistrocladus" },

                      ] },
                    { id: "amaranthaceae", name: "ヒユ科", rank: "family", familyId: "amaranthaceae", children: [

                        { id: "houkei_amaranth", name: "ホウキギ", rank: "species", plantId: "houkei_amaranth" },

                      ] },
                    { id: "aizoaceae", name: "ハマミズナ科", rank: "family", familyId: "aizoaceae", children: [

                        { id: "tsuru_na", name: "ツルナ", rank: "species", plantId: "tsuru_na" },

                      ] },
                    { id: "phytolaccaceae", name: "ヤマゴボウ科", rank: "family", familyId: "phytolaccaceae", children: [

                        { id: "yougobou", name: "ヨウシュヤマゴボウ", rank: "species", plantId: "yougobou" },

                      ] },
                    { id: "nyctaginaceae", name: "オシロイバナ科", rank: "family", familyId: "nyctaginaceae", children: [

                        { id: "oshiroibana", name: "オシロイバナ", rank: "species", plantId: "oshiroibana" },

                      ] },
                    { id: "molluginaceae", name: "ザクロソウ科", rank: "family", familyId: "molluginaceae", children: [

                        { id: "zakuro_sou", name: "ザクロソウ", rank: "species", plantId: "zakuro_sou" },

                      ] },
                    { id: "basellaceae", name: "ツルムラサキ科", rank: "family", familyId: "basellaceae", children: [

                        { id: "tsurumurasa", name: "ツルムラサキ", rank: "species", plantId: "tsurumurasa" },

                      ] },
                    { id: "portulacaceae", name: "スベリヒユ科", rank: "family", familyId: "portulacaceae", children: [

                        { id: "suberihiyu", name: "スベリヒユ", rank: "species", plantId: "suberihiyu" },

                      ] },
                    { id: "cactaceae", name: "サボテン科", rank: "family", familyId: "cactaceae", children: [

                        { id: "saboten", name: "ウチワサボテン", rank: "species", plantId: "saboten" },

                      ] },
                  ],
                },
                // ロシド類
                {
                  id: "rosids",
                  name: "ロシド類",
                  rank: "class",
                  children: [
                    // マメ類
                    {
                      id: "fabids",
                      name: "マメ類",
                      rank: "class",
                      children: [
                        {
                          id: "cucurbitales",
                          name: "ウリ目",
                          rank: "order",
                          children: [
                            { id: "coriariaceae", name: "ドクウツギ科", rank: "family", familyId: "coriariaceae", children: [

                                { id: "dokuutugi", name: "ドクウツギ", rank: "species", plantId: "dokuutugi" },

                              ] },
                            { id: "cucurbitaceae", name: "ウリ科", rank: "family", familyId: "cucurbitaceae", children: [

                                { id: "karasuuri", name: "カラスウリ", rank: "species", plantId: "karasuuri" },

                              ] },
                            { id: "datiscaceae", name: "ダティスカ科", rank: "family", familyId: "datiscaceae", children: [

                                { id: "datisca", name: "ダティスカ", rank: "species", plantId: "datisca" },

                              ] },
                            { id: "begoniaceae", name: "シュウカイドウ科", rank: "family", familyId: "begoniaceae", children: [

                                { id: "shuukaido", name: "シュウカイドウ", rank: "species", plantId: "shuukaido" },

                              ] },
                            { id: "loasaceae", name: "ロアサ科", rank: "family", familyId: "loasaceae", children: [

                                { id: "loasa", name: "ロアサ", rank: "species", plantId: "loasa" },

                              ] },
                          ],
                        },
                        {
                          id: "fagales",
                          name: "ブナ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fagus_sylvatica_forest_in_autumn.jpg",
                          children: [
                            {
                              id: "fagaceae",
                              name: "ブナ科",
                              rank: "family",
                              familyId: "fagaceae",
                              children: [
                                { id: "buna", name: "ブナ", rank: "species", plantId: "buna" },
                                { id: "konara", name: "コナラ", rank: "species", plantId: "konara" },
                                { id: "kunugi", name: "クヌギ", rank: "species", plantId: "kunugi" },
                                { id: "kuri", name: "クリ", rank: "species", plantId: "kuri" },
                              ],
                            },
                            {
                              id: "betulaceae",
                              name: "カバノキ科",
                              rank: "family",
                              familyId: "betulaceae",
                              children: [
                                { id: "shirakaba", name: "シラカバ", rank: "species", plantId: "shirakaba" },
                              ],
                            },
                            { id: "myricaceae", name: "ヤマモモ科", rank: "family", familyId: "myricaceae", children: [

                                { id: "yamamomo", name: "ヤマモモ", rank: "species", plantId: "yamamomo" },

                              ] },
                            { id: "juglandaceae", name: "クルミ科", rank: "family", familyId: "juglandaceae", children: [

                                { id: "oni_gurumi", name: "オニグルミ", rank: "species", plantId: "oni_gurumi" },

                              ] },
                            { id: "casuarinaceae", name: "モクマオウ科", rank: "family", familyId: "casuarinaceae", children: [

                                { id: "mokumao", name: "トクサバモクマオウ", rank: "species", plantId: "mokumao" },

                              ] },
                            { id: "nothofagaceae", name: "ナンキョクブナ科", rank: "family", familyId: "nothofagaceae", children: [

                                { id: "nankkyoku_buna", name: "ナンキョクブナ", rank: "species", plantId: "nankkyoku_buna" },

                              ] },
                          ],
                        },
                        {
                          id: "rosales",
                          name: "バラ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosa_canina_Ozarks.jpg",
                          children: [
                            {
                              id: "rosaceae",
                              name: "バラ科",
                              rank: "family",
                              familyId: "rosaceae",
                              children: [
                                { id: "ringo", name: "リンゴ", rank: "species", plantId: "ringo" },
                                { id: "momo", name: "モモ", rank: "species", plantId: "momo" },
                                { id: "nashi", name: "ナシ", rank: "species", plantId: "nashi" },
                                { id: "ichigo", name: "イチゴ", rank: "species", plantId: "ichigo" },
                                { id: "bara", name: "バラ", rank: "species", plantId: "bara" },
                                { id: "hebi_ichigo", name: "ヘビイチゴ", rank: "species", plantId: "hebi_ichigo" },
                                { id: "sakura", name: "ソメイヨシノ", rank: "species", plantId: "sakura" },
                                { id: "ume", name: "ウメ", rank: "species", plantId: "ume" },
                                { id: "noibara", name: "ノイバラ", rank: "species", plantId: "noibara" },
                                { id: "tsukushi_ibara", name: "ツクシイバラ", rank: "species", plantId: "tsukushi_ibara" },
                              ],
                            },
                            {
                              id: "ulmaceae",
                              name: "ニレ科",
                              rank: "family",
                              familyId: "ulmaceae",
                              children: [
                                { id: "keyaki", name: "ケヤキ", rank: "species", plantId: "keyaki" },
                              ],
                            },
                            { id: "chrysobalanaceae", name: "クリソバラヌス科", rank: "family", familyId: "chrysobalanaceae", children: [

                                { id: "shirota_mamodoki", name: "リュウキュウシロタマモドキ", rank: "species", plantId: "shirota_mamodoki" },

                              ] },
                            { id: "elaeagnaceae", name: "グミ科", rank: "family", familyId: "elaeagnaceae", children: [

                                { id: "natsu_gumi", name: "ナツグミ", rank: "species", plantId: "natsu_gumi" },

                              ] },
                            { id: "rhamnaceae", name: "クロウメモドキ科", rank: "family", familyId: "rhamnaceae", children: [

                                { id: "natsume", name: "ナツメ", rank: "species", plantId: "natsume" },

                              ] },
                            { id: "cannabaceae", name: "アサ科", rank: "family", familyId: "cannabaceae", children: [

                                { id: "kannabis", name: "カラハナソウ", rank: "species", plantId: "kannabis" },

                              ] },
                            { id: "moraceae", name: "クワ科", rank: "family", familyId: "moraceae", children: [

                                { id: "kuwa", name: "マグワ", rank: "species", plantId: "kuwa" },

                              ] },
                            { id: "urticaceae", name: "イラクサ科", rank: "family", familyId: "urticaceae", children: [

                                { id: "mukagoigokusa", name: "ムカゴイラクサ", rank: "species", plantId: "mukagoigokusa" },

                              ] },
                          ],
                        },
                        {
                          id: "fabales",
                          name: "マメ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Trifolium_repens_-_Köhler–s_Medizinal-Pflanzen-274.jpg",
                          children: [
                            {
                              id: "fabaceae",
                              name: "マメ科",
                              rank: "family",
                              familyId: "fabaceae",
                              children: [
                                { id: "daizu", name: "ダイズ", rank: "species", plantId: "daizu" },
                                { id: "azuki", name: "アズキ", rank: "species", plantId: "azuki" },
                                { id: "fuji", name: "フジ", rank: "species", plantId: "fuji" },
                                { id: "shiro_tsumekusa", name: "シロツメクサ", rank: "species", plantId: "shiro_tsumekusa" },
                                { id: "aka_tsumekusa", name: "アカツメクサ", rank: "species", plantId: "aka_tsumekusa" },
                                { id: "karasu_endou", name: "カラスノエンドウ", rank: "species", plantId: "karasu_endou" },
                                { id: "nemu", name: "ネムノキ", rank: "species", plantId: "nemu" },
                              ],
                            },
                            { id: "surianaceae", name: "スリアナ科", rank: "family", familyId: "surianaceae", children: [

                                { id: "suriana", name: "スリアナ", rank: "species", plantId: "suriana" },

                              ] },
                          ],
                        },
                        {
                          id: "oxalidales",
                          name: "カタバミ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Oxalis_acetosella_flowers.jpg",
                          children: [
                            {
                              id: "oxalidaceae",
                              name: "カタバミ科",
                              rank: "family",
                              familyId: "oxalidaceae",
                              children: [
                                { id: "katabami", name: "カタバミ", rank: "species", plantId: "katabami" },
                                { id: "murasaki_katabami", name: "ムラサキカタバミ", rank: "species", plantId: "murasaki_katabami" },
                              ],
                            },
                            { id: "cephalotaceae", name: "フクロユキノシタ科", rank: "family", familyId: "cephalotaceae", children: [

                                { id: "cephalotus", name: "フクロユキノシタ", rank: "species", plantId: "cephalotus" },

                              ] },
                          ],
                        },
                        {
                          id: "malpighiales",
                          name: "キントラノオ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Viola_odorata_fg01.jpg",
                          children: [
                            {
                              id: "violaceae",
                              name: "スミレ科",
                              rank: "family",
                              familyId: "violaceae",
                              children: [
                                { id: "sumire", name: "スミレ", rank: "species", plantId: "sumire" },
                                { id: "tachitsubo", name: "タチツボスミレ", rank: "species", plantId: "tachitsubo" },
                              ],
                            },
                            {
                              id: "salicaceae",
                              name: "ヤナギ科",
                              rank: "family",
                              familyId: "salicaceae",
                              children: [
                                { id: "shidare_yanagi", name: "シダレヤナギ", rank: "species", plantId: "shidare_yanagi" },
                              ],
                            },
                            { id: "erythroxylaceae", name: "コカ科", rank: "family", familyId: "erythroxylaceae", children: [

                                { id: "koka", name: "コカノキ", rank: "species", plantId: "koka" },

                              ] },
                            { id: "rafflesiaceae", name: "ラフレシア科", rank: "family", familyId: "rafflesiaceae", children: [

                                { id: "rafflesia", name: "ラフレシア", rank: "species", plantId: "rafflesia" },

                              ] },
                            { id: "euphorbiaceae", name: "トウダイグサ科", rank: "family", familyId: "euphorbiaceae", children: [

                                { id: "toudaigusa", name: "トウダイグサ", rank: "species", plantId: "toudaigusa" },

                              ] },
                            { id: "elatinaceae", name: "ミゾハコベ科", rank: "family", familyId: "elatinaceae", children: [

                                { id: "mizuhakobe", name: "ミズハコベ", rank: "species", plantId: "mizuhakobe" },

                              ] },
                            { id: "malpighiaceae", name: "キントラノオ科", rank: "family", familyId: "malpighiaceae", children: [

                                { id: "acerola", name: "アセロラ", rank: "species", plantId: "acerola" },

                              ] },
                            { id: "passifloraceae", name: "トケイソウ科", rank: "family", familyId: "passifloraceae", children: [

                                { id: "tokei_sou", name: "トケイソウ", rank: "species", plantId: "tokei_sou" },

                              ] },
                            { id: "linaceae", name: "アマ科", rank: "family", familyId: "linaceae", children: [

                                { id: "nohana_ama", name: "ノハナショウブ", rank: "species", plantId: "nohana_ama" },

                                { id: "ama", name: "アマ", rank: "species", plantId: "ama" },

                              ] },
                            { id: "clusiaceae", name: "オトギリソウ科", rank: "family", familyId: "clusiaceae", children: [

                                { id: "otogirisou", name: "オトギリソウ", rank: "species", plantId: "otogirisou" },

                              ] },
                            { id: "podostemaceae", name: "カワゴケソウ科", rank: "family", familyId: "podostemaceae", children: [

                                { id: "kawagokesou", name: "カワゴケソウ", rank: "species", plantId: "kawagokesou" },

                              ] },
                            { id: "dichapetalaceae", name: "ジカペタルム科", rank: "family", familyId: "dichapetalaceae", children: [

                                { id: "dichapetalum", name: "ジカペタラム（属の代表種）", rank: "species", plantId: "dichapetalum" },

                              ] },
                            { id: "pandaceae", name: "パンダ科", rank: "family", familyId: "pandaceae", children: [

                                { id: "panda_ki", name: "パンダノキ", rank: "species", plantId: "panda_ki" },

                              ] },
                            { id: "zygophyllaceae", name: "ハマビシ科", rank: "family", familyId: "zygophyllaceae", children: [

                                { id: "hamabishi", name: "ハマビシ", rank: "species", plantId: "hamabishi" },

                              ] },
                            { id: "polygalaceae", name: "ヒメハギ科", rank: "family", familyId: "polygalaceae", children: [

                                { id: "hime_hagi", name: "ヒメハギ", rank: "species", plantId: "hime_hagi" },

                              ] },
                            { id: "caryocaraceae", name: "バターナット科", rank: "family", familyId: "caryocaraceae", children: [

                                { id: "caryocar", name: "カリオカル", rank: "species", plantId: "caryocar" },

                              ] },
                          ],
                        },
                        {
                          id: "brassicales",
                          name: "アブラナ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Brassica_napus_Rapsfeld.jpg",
                          children: [
                            {
                              id: "brassicaceae",
                              name: "アブラナ科",
                              rank: "family",
                              familyId: "brassicaceae",
                              children: [
                                { id: "daikon", name: "ダイコン", rank: "species", plantId: "daikon" },
                                { id: "kyabetsu", name: "キャベツ", rank: "species", plantId: "kyabetsu" },
                                { id: "wasabi", name: "ワサビ", rank: "species", plantId: "wasabi" },
                                { id: "nazuna", name: "ナズナ", rank: "species", plantId: "nazuna" },
                                { id: "nanohana", name: "セイヨウアブラナ", rank: "species", plantId: "nanohana" },
                              ],
                            },
                            { id: "tropaeolaceae", name: "ノウゼンハレン科", rank: "family", familyId: "tropaeolaceae", children: [

                                { id: "nasturtium", name: "ノウゼンハレン", rank: "species", plantId: "nasturtium" },

                              ] },
                            { id: "moringaceae", name: "ワサビノキ科", rank: "family", familyId: "moringaceae", children: [

                                { id: "moringa", name: "モリンガ", rank: "species", plantId: "moringa" },

                              ] },
                            { id: "caricaceae", name: "パパイア科", rank: "family", familyId: "caricaceae", children: [

                                { id: "papaia", name: "パパイア", rank: "species", plantId: "papaia" },

                              ] },
                            { id: "resedaceae", name: "モクセイソウ科", rank: "family", familyId: "resedaceae", children: [

                                { id: "mokuseisouh", name: "モクセイソウ", rank: "species", plantId: "mokuseisouh" },

                              ] },
                            { id: "capparaceae", name: "フウチョウソウ科", rank: "family", familyId: "capparaceae", children: [

                                { id: "gyoboushi", name: "ギョボウシ", rank: "species", plantId: "gyoboushi" },

                              ] },
                          ],
                        },
                        {
                          id: "celastrales",
                          name: "ニシキギ目",
                          rank: "order",
                          children: [
                            { id: "celastraceae", name: "ニシキギ科", rank: "family", familyId: "celastraceae", children: [

                                { id: "nishikigi", name: "ニシキギ", rank: "species", plantId: "nishikigi" },

                              ] },
                            { id: "connaraceae", name: "コンナルス科", rank: "family", familyId: "connaraceae", children: [

                                { id: "rourea", name: "ロウレア", rank: "species", plantId: "rourea" },

                              ] },
                            { id: "cunoniaceae", name: "クノニア科", rank: "family", familyId: "cunoniaceae", children: [

                                { id: "cunonia", name: "クノニア", rank: "species", plantId: "cunonia" },

                              ] },
                            { id: "elaeocarpaceae", name: "ホルトノキ科", rank: "family", familyId: "elaeocarpaceae", children: [

                                { id: "horutonoki", name: "ホルトノキ", rank: "species", plantId: "horutonoki" },

                              ] },
                            { id: "rhizophoraceae", name: "ヒルギ科", rank: "family", familyId: "rhizophoraceae", children: [

                                { id: "mehirugi", name: "メヒルギ", rank: "species", plantId: "mehirugi" },

                              ] },
                          ],
                        },
                        {
                          id: "geraniales",
                          name: "フウロソウ目",
                          rank: "order",
                          children: [
                            { id: "geraniaceae", name: "フウロソウ科", rank: "family", familyId: "geraniaceae", children: [

                                { id: "gennosyoko", name: "ゲンノショウコ", rank: "species", plantId: "gennosyoko" },

                              ] },
                          ],
                        },
                      ],
                    },
                    // アオイ類
                    {
                      id: "malvids",
                      name: "アオイ類",
                      rank: "class",
                      children: [
                        {
                          id: "malvales",
                          name: "アオイ目",
                          rank: "order",
                          children: [
                            { id: "malvaceae", name: "アオイ科", rank: "family", familyId: "malvaceae", children: [

                                { id: "fuyu_aoi", name: "フユアオイ", rank: "species", plantId: "fuyu_aoi" },

                              ] },
                            { id: "thymelaeaceae", name: "ジンチョウゲ科", rank: "family", familyId: "thymelaeaceae", children: [

                                { id: "jinchoge", name: "ジンチョウゲ", rank: "species", plantId: "jinchoge" },

                              ] },
                            { id: "bixaceae", name: "ベニノキ科", rank: "family", familyId: "bixaceae", children: [

                                { id: "benino_ki", name: "ベニノキ", rank: "species", plantId: "benino_ki" },

                              ] },
                            { id: "cistaceae", name: "ハンニチバナ科", rank: "family", familyId: "cistaceae", children: [

                                { id: "hannichi_bana", name: "ハンニチバナ", rank: "species", plantId: "hannichi_bana" },

                              ] },
                            { id: "dipterocarpaceae", name: "フタバガキ科", rank: "family", familyId: "dipterocarpaceae", children: [

                                { id: "futabagaki", name: "リュウキュウガキ", rank: "species", plantId: "futabagaki" },

                              ] },
                          ],
                        },
                        {
                          id: "sapindales",
                          name: "ムクロジ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Acer_palmatum_autumn_leaves.jpg",
                          children: [
                            {
                              id: "sapindaceae",
                              name: "ムクロジ科",
                              rank: "family",
                              familyId: "sapindaceae",
                              children: [
                                { id: "iroha_momiji", name: "イロハモミジ", rank: "species", plantId: "iroha_momiji" },
                                { id: "tou_kaede", name: "トウカエデ", rank: "species", plantId: "tou_kaede" },
                              ],
                            },
                            { id: "burseraceae", name: "カンラン科", rank: "family", familyId: "burseraceae", children: [

                                { id: "kanran_tree", name: "カンラン", rank: "species", plantId: "kanran_tree" },

                              ] },
                            { id: "anacardiaceae", name: "ウルシ科", rank: "family", familyId: "anacardiaceae", children: [

                                { id: "urushi", name: "ウルシ", rank: "species", plantId: "urushi" },

                              ] },
                            { id: "rutaceae", name: "ミカン科", rank: "family", familyId: "rutaceae", children: [

                                { id: "yuzu", name: "ユズ", rank: "species", plantId: "yuzu" },

                              ] },
                            { id: "simaroubaceae", name: "ニガキ科", rank: "family", familyId: "simaroubaceae", children: [

                                { id: "nigaki", name: "ニガキ", rank: "species", plantId: "nigaki" },

                              ] },
                            { id: "meliaceae", name: "センダン科", rank: "family", familyId: "meliaceae", children: [

                                { id: "sendan", name: "センダン", rank: "species", plantId: "sendan" },

                              ] },
                          ],
                        },
                        {
                          id: "crossosomatales",
                          name: "クロッソソマ目",
                          rank: "order",
                          children: [
                            { id: "staphyleaceae", name: "ミツバウツギ科", rank: "family", familyId: "staphyleaceae", children: [

                                { id: "mitsubautsugi", name: "ミツバウツギ", rank: "species", plantId: "mitsubautsugi" },

                              ] },
                            { id: "stachyuraceae", name: "キブシ科", rank: "family", familyId: "stachyuraceae", children: [

                                { id: "kibushi", name: "キブシ", rank: "species", plantId: "kibushi" },

                              ] },
                          ],
                        },
                        {
                          id: "myrtales",
                          name: "フトモモ目",
                          rank: "order",
                          children: [
                            { id: "combretaceae", name: "シクンシ科", rank: "family", familyId: "combretaceae", children: [

                                { id: "shikun_shi", name: "シクンシ", rank: "species", plantId: "shikun_shi" },

                              ] },
                            { id: "lythraceae", name: "ミソハギ科", rank: "family", familyId: "lythraceae", children: [

                                { id: "misohagi", name: "ミソハギ", rank: "species", plantId: "misohagi" },

                              ] },
                            { id: "onagraceae", name: "アカバナ科", rank: "family", familyId: "onagraceae", children: [

                                { id: "akabana", name: "アカバナ", rank: "species", plantId: "akabana" },

                              ] },
                            { id: "myrtaceae", name: "フトモモ科", rank: "family", familyId: "myrtaceae", children: [

                                { id: "guava", name: "グアバ", rank: "species", plantId: "guava" },

                              ] },
                            { id: "melastomataceae", name: "ノボタン科", rank: "family", familyId: "melastomataceae", children: [

                                { id: "nobotang", name: "ノボタン", rank: "species", plantId: "nobotang" },

                              ] },
                          ],
                        },
                      ],
                    },
                    // ミズキ目（ロシド類の下）
                    {
                      id: "cornales",
                      name: "ミズキ目",
                      rank: "order",
                      imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cornus_florida_flowers.jpg",
                      children: [
                        {
                          id: "hydrangeaceae",
                          name: "アジサイ科",
                          rank: "family",
                          familyId: "hydrangeaceae",
                          children: [
                            { id: "ajisai", name: "アジサイ", rank: "species", plantId: "ajisai" },
                          ],
                        },
                        {
                          id: "cornaceae",
                          name: "ミズキ科",
                          rank: "family",
                          familyId: "cornaceae",
                          children: [
                            { id: "hana_mizuki", name: "ハナミズキ", rank: "species", plantId: "hana_mizuki" },
                          ],
                        },
                      ],
                    },
                  ],
                },
                // アステリド類
                {
                  id: "asterids",
                  name: "アステリド類",
                  rank: "class",
                  children: [
                    // ラミアナ類
                    {
                      id: "lamiids",
                      name: "ラミアナ類",
                      rank: "class",
                      children: [
                        {
                          id: "garryales",
                          name: "ガリア目",
                          rank: "order",
                          children: [
                            { id: "eucommiaceae", name: "トチュウ科", rank: "family", familyId: "eucommiaceae", children: [

                                { id: "tocyuu", name: "トチュウ", rank: "species", plantId: "tocyuu" },

                              ] },
                            { id: "garryaceae", name: "ガリア科", rank: "family", familyId: "garryaceae", children: [
                                { id: "aoki", name: "アオキ", rank: "species", plantId: "aoki" },
                              ] },
                          ],
                        },
                        {
                          id: "gentianales",
                          name: "リンドウ目",
                          rank: "order",
                          children: [
                            { id: "rubiaceae", name: "アカネ科", rank: "family", familyId: "rubiaceae", children: [

                                { id: "kuchinashi", name: "クチナシ", rank: "species", plantId: "kuchinashi" },

                              ] },
                            { id: "gentianaceae", name: "リンドウ科", rank: "family", familyId: "gentianaceae", children: [

                                { id: "rindo", name: "リンドウ", rank: "species", plantId: "rindo" },

                              ] },
                            { id: "loganiaceae", name: "マチン科", rank: "family", familyId: "loganiaceae", children: [

                                { id: "fuji_utsugi", name: "フジウツギ", rank: "species", plantId: "fuji_utsugi" },

                              ] },
                            { id: "apocynaceae", name: "キョウチクトウ科", rank: "family", familyId: "apocynaceae", children: [

                                { id: "kyouchiku_tou", name: "キョウチクトウ", rank: "species", plantId: "kyouchiku_tou" },

                              ] },
                          ],
                        },
                        {
                          id: "solanales",
                          name: "ナス目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ipomoea_nil_(Morning_glory)_in_Kadavoor.jpg",
                          children: [
                            {
                              id: "convolvulaceae",
                              name: "ヒルガオ科",
                              rank: "family",
                              familyId: "convolvulaceae",
                              children: [
                                { id: "satsumaimo", name: "サツマイモ", rank: "species", plantId: "satsumaimo" },
                                { id: "asagao", name: "アサガオ", rank: "species", plantId: "asagao" },
                              ],
                            },
                            { id: "solanaceae", name: "ナス科", rank: "family", familyId: "solanaceae", children: [

                                { id: "nasu", name: "ナス", rank: "species", plantId: "nasu" },

                              ] },
                          ],
                        },
                        {
                          id: "boraginales",
                          name: "ムラサキ目",
                          rank: "order",
                          children: [
                            { id: "boraginaceae", name: "ムラサキ科", rank: "family", familyId: "boraginaceae", children: [

                                { id: "wasurenagusa", name: "ワスレナグサ", rank: "species", plantId: "wasurenagusa" },

                              ] },
                          ],
                        },
                        {
                          id: "lamiales",
                          name: "シソ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Perilla_frutescens_var_crispa.jpg",
                          children: [
                            {
                              id: "lamiaceae",
                              name: "シソ科",
                              rank: "family",
                              familyId: "lamiaceae",
                              children: [
                                { id: "shiso", name: "シソ", rank: "species", plantId: "shiso" },
                                { id: "hotokenoza", name: "ホトケノザ", rank: "species", plantId: "hotokenoza" },
                                { id: "hime_odoriko", name: "ヒメオドリコソウ", rank: "species", plantId: "hime_odoriko" },
                              ],
                            },
                            {
                              id: "plantaginaceae",
                              name: "オオバコ科",
                              rank: "family",
                              familyId: "plantaginaceae",
                              children: [
                                { id: "ooba_plantain", name: "オオバコ", rank: "species", plantId: "ooba_plantain" },
                                { id: "ooinunofuguri", name: "オオイヌノフグリ", rank: "species", plantId: "ooinunofuguri" },
                              ],
                            },
                            { id: "oleaceae", name: "モクセイ科", rank: "family", familyId: "oleaceae", children: [

                                { id: "kinmokusei", name: "キンモクセイ", rank: "species", plantId: "kinmokusei" },

                              ] },
                            { id: "gesneriaceae", name: "イワタバコ科", rank: "family", familyId: "gesneriaceae", children: [

                                { id: "iwa_tabako", name: "イワタバコ", rank: "species", plantId: "iwa_tabako" },

                              ] },
                            { id: "scrophulariaceae", name: "ゴマノハグサ科", rank: "family", familyId: "scrophulariaceae", children: [

                                { id: "torenia", name: "トレニア", rank: "species", plantId: "torenia" },

                              ] },
                            { id: "pedaliaceae", name: "ゴマ科", rank: "family", familyId: "pedaliaceae", children: [

                                { id: "goma", name: "ゴマ", rank: "species", plantId: "goma" },

                              ] },
                            { id: "phrymaceae", name: "ハエドクソウ科", rank: "family", familyId: "phrymaceae", children: [

                                { id: "haedoku_sou", name: "ハエドクソウ", rank: "species", plantId: "haedoku_sou" },

                              ] },
                            { id: "mazaceae", name: "サギゴケ科", rank: "family", familyId: "mazaceae", children: [
                                { id: "sagigoke", name: "サギゴケ", rank: "species", plantId: "sagigoke" },
                              ] },
                            { id: "orobanchaceae", name: "ハマウツボ科", rank: "family", familyId: "orobanchaceae", children: [

                                { id: "nanban_giseru", name: "ナンバンギセル", rank: "species", plantId: "nanban_giseru" },

                              ] },
                            { id: "lentibulariaceae", name: "タヌキモ科", rank: "family", familyId: "lentibulariaceae", children: [

                                { id: "tanukimo", name: "タヌキモ", rank: "species", plantId: "tanukimo" },

                              ] },
                            { id: "acanthaceae", name: "キツネノマゴ科", rank: "family", familyId: "acanthaceae", children: [

                                { id: "kitsune_no_mago", name: "キツネノマゴ", rank: "species", plantId: "kitsune_no_mago" },

                              ] },
                            { id: "bignoniaceae", name: "ノウゼンカズラ科", rank: "family", familyId: "bignoniaceae", children: [

                                { id: "nouzen_kazura", name: "ノウゼンカズラ", rank: "species", plantId: "nouzen_kazura" },

                              ] },
                            { id: "verbenaceae", name: "クマツヅラ科", rank: "family", familyId: "verbenaceae", children: [

                                { id: "verbena", name: "バーベナ", rank: "species", plantId: "verbena" },

                              ] },
                            { id: "martyniaceae", name: "マルティニア科", rank: "family", familyId: "martyniaceae", children: [

                                { id: "tsuno_goma", name: "ツノゴマ", rank: "species", plantId: "tsuno_goma" },

                              ] },
                          ],
                        },
                        // アスター類（系統的位置再検討中）
                        {
                          id: "icacinales",
                          name: "アスター類（系統的位置再検討中）",
                          rank: "order",
                          children: [
                            { id: "icacinaceae", name: "カマツカ科", rank: "family", familyId: "icacinaceae", children: [

                                { id: "sarcostigma", name: "ヤエヤマカツラギ", rank: "species", plantId: "sarcostigma" },

                              ] },
                          ],
                        },
                      ],
                    },
                    // カンパヌリナ類
                    {
                      id: "campanulids",
                      name: "カンパヌリナ類",
                      rank: "class",
                      children: [
                        {
                          id: "ericales",
                          name: "ツツジ目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhododendron_ferrugineum_flowers.jpg",
                          children: [
                            {
                              id: "theaceae",
                              name: "ツバキ科",
                              rank: "family",
                              familyId: "theaceae",
                              children: [
                                { id: "tsubaki", name: "ツバキ", rank: "species", plantId: "tsubaki" },
                                { id: "sazanka", name: "サザンカ", rank: "species", plantId: "sazanka" },
                              ],
                            },
                            { id: "pentaphylacaceae", name: "サカキ科", rank: "family", familyId: "pentaphylacaceae", children: [
                                { id: "sakaki", name: "サカキ", rank: "species", plantId: "sakaki" },
                                { id: "hisakaki", name: "ヒサカキ", rank: "species", plantId: "hisakaki" },
                              ] },
                            { id: "balsaminaceae", name: "ツリフネソウ科", rank: "family", familyId: "balsaminaceae", children: [

                                { id: "tsurifune_sou", name: "ツリフネソウ", rank: "species", plantId: "tsurifune_sou" },

                              ] },
                            { id: "polemoniaceae", name: "ハナシノブ科", rank: "family", familyId: "polemoniaceae", children: [

                                { id: "hana_shinobu", name: "ハナシノブ", rank: "species", plantId: "hana_shinobu" },

                              ] },
                            { id: "lecythidaceae", name: "サガリバナ科", rank: "family", familyId: "lecythidaceae", children: [

                                { id: "brazil_nut_family", name: "サガリバナ", rank: "species", plantId: "brazil_nut_family" },

                              ] },
                            { id: "sapotaceae", name: "アカテツ科", rank: "family", familyId: "sapotaceae", children: [

                                { id: "akatestu", name: "アカテツ", rank: "species", plantId: "akatestu" },

                              ] },
                            { id: "ebenaceae", name: "カキノキ科", rank: "family", familyId: "ebenaceae", children: [

                                { id: "kaki", name: "カキノキ", rank: "species", plantId: "kaki" },

                              ] },
                            { id: "primulaceae", name: "サクラソウ科", rank: "family", familyId: "primulaceae", children: [

                                { id: "sakurasou", name: "サクラソウ", rank: "species", plantId: "sakurasou" },

                              ] },
                            { id: "symplocaceae", name: "ハイノキ科", rank: "family", familyId: "symplocaceae", children: [

                                { id: "sawafutagi", name: "サワフタギ", rank: "species", plantId: "sawafutagi" },

                              ] },
                            { id: "diapensiaceae", name: "イワウメ科", rank: "family", familyId: "diapensiaceae", children: [

                                { id: "iwa_ume", name: "イワウメ", rank: "species", plantId: "iwa_ume" },

                              ] },
                            { id: "styracaceae", name: "エゴノキ科", rank: "family", familyId: "styracaceae", children: [

                                { id: "egonoki", name: "エゴノキ", rank: "species", plantId: "egonoki" },

                              ] },
                            { id: "sarraceniaceae", name: "サラセニア科", rank: "family", familyId: "sarraceniaceae", children: [

                                { id: "sarracenia_purp", name: "サラセニア", rank: "species", plantId: "sarracenia_purp" },

                              ] },
                            { id: "actinidiaceae", name: "マタタビ科", rank: "family", familyId: "actinidiaceae", children: [

                                { id: "matatatbi", name: "マタタビ", rank: "species", plantId: "matatatbi" },

                              ] },
                            { id: "clethraceae", name: "リョウブ科", rank: "family", familyId: "clethraceae", children: [

                                { id: "ryobu", name: "リョウブ", rank: "species", plantId: "ryobu" },

                              ] },
                            { id: "mitrastemonaceae", name: "ヤッコソウ科", rank: "family", familyId: "mitrastemonaceae", children: [

                                { id: "mitrasutemon", name: "ミトラステモン", rank: "species", plantId: "mitrasutemon" },

                              ] },
                            { id: "ericaceae", name: "ツツジ科", rank: "family", familyId: "ericaceae", children: [

                                { id: "tsutsuji", name: "ヤマツツジ", rank: "species", plantId: "tsutsuji" },

                              ] },
                          ],
                        },
                        {
                          id: "aquifoliales",
                          name: "アキノキリンソウ目",
                          rank: "order",
                          children: [
                            { id: "cardiopteridaceae", name: "ヤマイモモドキ科", rank: "family", familyId: "cardiopteridaceae", children: [

                                { id: "cardiopteris", name: "カルジオプテリス", rank: "species", plantId: "cardiopteris" },

                              ] },
                            { id: "aquifoliaceae", name: "モチノキ科", rank: "family", familyId: "aquifoliaceae", children: [

                                { id: "mochi_no_ki", name: "モチノキ", rank: "species", plantId: "mochi_no_ki" },

                              ] },
                          ],
                        },
                        {
                          id: "dipsacales",
                          name: "マツムシソウ目",
                          rank: "order",
                          children: [
                            { id: "adoxaceae", name: "レンプクソウ科", rank: "family", familyId: "adoxaceae", children: [

                                { id: "niwatoko", name: "ニワトコ", rank: "species", plantId: "niwatoko" },

                              ] },
                            { id: "caprifoliaceae", name: "スイカズラ科", rank: "family", familyId: "caprifoliaceae", children: [

                                { id: "suikazura", name: "スイカズラ", rank: "species", plantId: "suikazura" },

                              ] },
                          ],
                        },
                        {
                          id: "apiales",
                          name: "セリ目",
                          rank: "order",
                          children: [
                            { id: "apiaceae", name: "セリ科", rank: "family", familyId: "apiaceae", children: [

                                { id: "seri", name: "セリ", rank: "species", plantId: "seri" },

                              ] },
                            { id: "pittosporaceae", name: "トベラ科", rank: "family", familyId: "pittosporaceae", children: [

                                { id: "tobera", name: "トベラ", rank: "species", plantId: "tobera" },

                              ] },
                            { id: "araliaceae", name: "ウコギ科", rank: "family", familyId: "araliaceae", children: [

                                { id: "yatsude", name: "ヤツデ", rank: "species", plantId: "yatsude" },

                              ] },
                          ],
                        },
                        {
                          id: "asterales",
                          name: "キク目",
                          rank: "order",
                          imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Helianthus_annuus.jpg",
                          children: [
                            {
                              id: "asteraceae",
                              name: "キク科",
                              rank: "family",
                              familyId: "asteraceae",
                              children: [
                                { id: "gobou", name: "ゴボウ", rank: "species", plantId: "gobou" },
                                { id: "kiku", name: "キク", rank: "species", plantId: "kiku" },
                                { id: "noazami", name: "ノアザミ", rank: "species", plantId: "noazami" },
                                { id: "fuki", name: "フキ", rank: "species", plantId: "fuki" },
                                { id: "kosendan", name: "コセンダングサ", rank: "species", plantId: "kosendan" },
                                { id: "tanpopo", name: "セイヨウタンポポ", rank: "species", plantId: "tanpopo" },
                                { id: "himawari", name: "ヒマワリ", rank: "species", plantId: "himawari" },
                                { id: "himejoon", name: "ヒメジョオン", rank: "species", plantId: "himejoon" },
                                { id: "harujion", name: "ハルジオン", rank: "species", plantId: "harujion" },
                                { id: "yomogi", name: "ヨモギ", rank: "species", plantId: "yomogi" },
                                { id: "seitage", name: "セイタカアワダチソウ", rank: "species", plantId: "seitage" },
                                { id: "cosmos", name: "コスモス", rank: "species", plantId: "cosmos" },
                              ],
                            },
                            { id: "campanulaceae", name: "キキョウ科", rank: "family", familyId: "campanulaceae", children: [

                                { id: "kikyo", name: "キキョウ", rank: "species", plantId: "kikyo" },

                              ] },
                            { id: "menyanthaceae", name: "ミツガシワ科", rank: "family", familyId: "menyanthaceae", children: [

                                { id: "mitsugashiwa", name: "ミツガシワ", rank: "species", plantId: "mitsugashiwa" },

                              ] },
                            { id: "goodeniaceae", name: "グデニア科", rank: "family", familyId: "goodeniaceae", children: [

                                { id: "kusatobera", name: "クサトベラ", rank: "species", plantId: "kusatobera" },

                              ] },
                          ],
                        },
                        {
                          id: "campanulales",
                          name: "キキョウ目",
                          rank: "order",
                          children: [
                            { id: "sphenocleaceae", name: "クサネム科", rank: "family", familyId: "sphenocleaceae", children: [

                                { id: "sphenoclea", name: "スフェノクレア", rank: "species", plantId: "sphenoclea" },

                              ] },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
      ],
    },
  ],
};

/** ツリーを再帰的に探索してIDが一致するノードを返す */
export function findTaxonomyNode(
  id: string,
  node: TaxonomyNode = taxonomyTree,
  ancestors: TaxonomyNode[] = []
): { node: TaxonomyNode; ancestors: TaxonomyNode[] } | null {
  if (node.id === id) return { node, ancestors };
  for (const child of node.children ?? []) {
    const result = findTaxonomyNode(id, child, [...ancestors, node]);
    if (result) return result;
  }
  return null;
}

/** family・species を除く全ノードのIDを列挙 */
export function listTaxonomyPageIds(node: TaxonomyNode = taxonomyTree): string[] {
  const ids: string[] = [];
  if (node.rank !== "family" && node.rank !== "species") {
    ids.push(node.id);
  }
  for (const child of node.children ?? []) {
    ids.push(...listTaxonomyPageIds(child));
  }
  return ids;
}
