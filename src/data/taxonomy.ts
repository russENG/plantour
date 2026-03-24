import type { TaxonomyNode } from "./types";

export const taxonomyTree: TaxonomyNode = {
  id: "plantae",
  name: "植物界（広義）",
  rank: "kingdom",
  description: "光合成を行う生物の総称（コケ・シダ・種子植物など）",
  children: [
    {
      id: "bryophyta",
      name: "コケ植物",
      rank: "phylum",
      description: "維管束をもたない陸上植物。蘚類・苔類・ツノゴケ類からなる。",
      children: [
        { id: "musci", name: "蘚類（スギゴケなど）", rank: "class" },
        { id: "hepaticae", name: "苔類（ゼニゴケなど）", rank: "class" },
        { id: "anthocerotae", name: "ツノゴケ類", rank: "class" },
      ],
    },
    {
      id: "pteridophyta",
      name: "シダ植物",
      rank: "phylum",
      description: "維管束をもつが種子をもたない植物。胞子で繁殖する。",
      children: [
        {
          id: "equisetopsida",
          name: "トクサ類",
          rank: "class",
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
        {
          id: "polypodiopsida",
          name: "シダ類",
          rank: "class",
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
          ],
        },
      ],
    },
    {
      id: "gymnospermae",
      name: "裸子植物",
      rank: "phylum",
      description: "種子をもつが、種子が果実に包まれない植物。針葉樹など。",
      children: [
        {
          id: "ginkgoales",
          name: "イチョウ目",
          rank: "order",
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
          name: "マツ目（針葉樹）",
          rank: "order",
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
          ],
        },
      ],
    },
    {
      id: "angiospermae",
      name: "被子植物",
      rank: "phylum",
      description: "種子が果実（子房）に包まれた植物。花を咲かせる。現存植物の大多数を占める。",
      children: [
        {
          id: "basal_angiosperm",
          name: "基部被子植物",
          rank: "class",
          description: "被子植物の初期分岐群。モクレン類・コショウ目など。",
          children: [
            {
              id: "magnoliales",
              name: "モクレン目",
              rank: "order",
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
                {
                  id: "lauraceae",
                  name: "クスノキ科",
                  rank: "family",
                  familyId: "lauraceae",
                  children: [
                    { id: "kusunoki", name: "クスノキ", rank: "species", plantId: "kusunoki" },
                  ],
                },
              ],
            },
            {
              id: "piperales",
              name: "コショウ目",
              rank: "order",
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
              ],
            },
          ],
        },
        {
          id: "monocots",
          name: "単子葉類",
          rank: "class",
          description: "発芽時の子葉が1枚。葉脈は平行脈が多い。イネ・ユリなど。",
          children: [
            {
              id: "alismatales",
              name: "オモダカ目",
              rank: "order",
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
              ],
            },
            {
              id: "poales",
              name: "イネ目",
              rank: "order",
              children: [
                {
                  id: "poaceae",
                  name: "イネ科",
                  rank: "family",
                  familyId: "poaceae",
                  children: [
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
              ],
            },
          ],
        },
        {
          id: "eudicots",
          name: "真正双子葉類",
          rank: "class",
          description: "発芽時の子葉が2枚。花粉に3つの溝をもつ。被子植物の過半数を占める。",
          children: [
            {
              id: "proteales",
              name: "ヤマモガシ目",
              rank: "order",
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
              ],
            },
            {
              id: "fagales",
              name: "ブナ目",
              rank: "order",
              children: [
                {
                  id: "fagaceae",
                  name: "ブナ科",
                  rank: "family",
                  familyId: "fagaceae",
                  children: [
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
              ],
            },
            {
              id: "caryophyllales",
              name: "ナデシコ目",
              rank: "order",
              children: [
                {
                  id: "caryophyllaceae",
                  name: "ナデシコ科",
                  rank: "family",
                  familyId: "caryophyllaceae",
                  children: [
                    { id: "hakobe", name: "ハコベ", rank: "species", plantId: "hakobe" },
                  ],
                },
                {
                  id: "polygonaceae",
                  name: "タデ科",
                  rank: "family",
                  familyId: "polygonaceae",
                  children: [
                    { id: "suiba", name: "スイバ", rank: "species", plantId: "suiba" },
                    { id: "itadori", name: "イタドリ", rank: "species", plantId: "itadori" },
                  ],
                },
              ],
            },
            {
              id: "rosales",
              name: "バラ目",
              rank: "order",
              children: [
                {
                  id: "rosaceae",
                  name: "バラ科",
                  rank: "family",
                  familyId: "rosaceae",
                  children: [
                    { id: "sakura", name: "ソメイヨシノ", rank: "species", plantId: "sakura" },
                    { id: "ume", name: "ウメ", rank: "species", plantId: "ume" },
                    { id: "noibara", name: "ノイバラ", rank: "species", plantId: "noibara" },
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
                {
                  id: "fabaceae",
                  name: "マメ科",
                  rank: "family",
                  familyId: "fabaceae",
                  children: [
                    { id: "shiro_tsumekusa", name: "シロツメクサ", rank: "species", plantId: "shiro_tsumekusa" },
                    { id: "aka_tsumekusa", name: "アカツメクサ", rank: "species", plantId: "aka_tsumekusa" },
                    { id: "karasu_endou", name: "カラスノエンドウ", rank: "species", plantId: "karasu_endou" },
                    { id: "nemu", name: "ネムノキ", rank: "species", plantId: "nemu" },
                  ],
                },
              ],
            },
            {
              id: "oxalidales",
              name: "カタバミ目",
              rank: "order",
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
              ],
            },
            {
              id: "malpighiales",
              name: "キントラノオ目",
              rank: "order",
              children: [
                {
                  id: "violaceae",
                  name: "スミレ科",
                  rank: "family",
                  familyId: "violaceae",
                  children: [
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
              ],
            },
            {
              id: "brassicales",
              name: "アブラナ目",
              rank: "order",
              children: [
                {
                  id: "brassicaceae",
                  name: "アブラナ科",
                  rank: "family",
                  familyId: "brassicaceae",
                  children: [
                    { id: "nazuna", name: "ナズナ", rank: "species", plantId: "nazuna" },
                    { id: "nanohana", name: "セイヨウアブラナ", rank: "species", plantId: "nanohana" },
                  ],
                },
              ],
            },
            {
              id: "ericales",
              name: "ツツジ目",
              rank: "order",
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
              ],
            },
            {
              id: "cornales",
              name: "ミズキ目",
              rank: "order",
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
            {
              id: "solanales",
              name: "ナス目",
              rank: "order",
              children: [
                {
                  id: "convolvulaceae",
                  name: "ヒルガオ科",
                  rank: "family",
                  familyId: "convolvulaceae",
                  children: [
                    { id: "asagao", name: "アサガオ", rank: "species", plantId: "asagao" },
                  ],
                },
              ],
            },
            {
              id: "lamiales",
              name: "シソ目",
              rank: "order",
              children: [
                {
                  id: "lamiaceae",
                  name: "シソ科",
                  rank: "family",
                  familyId: "lamiaceae",
                  children: [
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
              ],
            },
            {
              id: "sapindales",
              name: "ムクロジ目",
              rank: "order",
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
              ],
            },
            {
              id: "asterales",
              name: "キク目",
              rank: "order",
              children: [
                {
                  id: "asteraceae",
                  name: "キク科",
                  rank: "family",
                  familyId: "asteraceae",
                  children: [
                    { id: "tanpopo", name: "セイヨウタンポポ", rank: "species", plantId: "tanpopo" },
                    { id: "himawari", name: "ヒマワリ", rank: "species", plantId: "himawari" },
                    { id: "himejoon", name: "ヒメジョオン", rank: "species", plantId: "himejoon" },
                    { id: "harujion", name: "ハルジオン", rank: "species", plantId: "harujion" },
                    { id: "yomogi", name: "ヨモギ", rank: "species", plantId: "yomogi" },
                    { id: "seitage", name: "セイタカアワダチソウ", rank: "species", plantId: "seitage" },
                    { id: "cosmos", name: "コスモス", rank: "species", plantId: "cosmos" },
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
