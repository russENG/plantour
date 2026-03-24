import type { KeyNode } from "./types";

// 初心者向け検索表（ステップ式）
export const keyNodes: Record<string, KeyNode> = {
  start: {
    id: "start",
    question: "植物の形を大きく分けると？",
    hint: "茎が木質化（木化）しているかどうかで判断します",
    options: [
      { id: "start_herb", label: "草（茎が柔らかい）", nextNodeId: "herb_mono_di" },
      { id: "start_tree", label: "木（茎が木質化している）", nextNodeId: "tree_leaf" },
    ],
  },
  herb_mono_di: {
    id: "herb_mono_di",
    question: "葉脈の走り方は？",
    hint: "葉の表面の筋（葉脈）の形を見ます。単子葉植物か双子葉植物かの手がかりになります",
    options: [
      {
        id: "herb_parallel",
        label: "平行脈（葉脈が並行に走る）",
        nextNodeId: "herb_mono",
      },
      {
        id: "herb_net",
        label: "網状脈（葉脈が網の目状）",
        nextNodeId: "herb_di_flower",
      },
    ],
  },
  herb_mono: {
    id: "herb_mono",
    question: "茎は中空で節があるか？",
    hint: "イネ科の草は茎（稈）が中空で節があります",
    options: [
      {
        id: "herb_mono_grass",
        label: "中空で節がある",
        resultFamilyIds: ["poaceae"],
        resultPlantIds: ["susuki"],
      },
      {
        id: "herb_mono_other",
        label: "そうでない（中実、または節が目立たない）",
        nextNodeId: "herb_mono_other_node",
      },
    ],
  },
  herb_mono_other_node: {
    id: "herb_mono_other_node",
    question: "葉はユリのように大きくて広いか、細いか？",
    hint: "単子葉植物の中でも、ユリ科・アヤメ科などは葉が幅広いことが多いです",
    options: [
      {
        id: "herb_mono_broad",
        label: "比較的幅広の葉",
        resultFamilyIds: [],
        resultPlantIds: [],
      },
      {
        id: "herb_mono_narrow",
        label: "細長い葉",
        resultFamilyIds: ["poaceae"],
        resultPlantIds: ["susuki"],
      },
    ],
  },
  herb_di_flower: {
    id: "herb_di_flower",
    question: "花弁の数は？（1枚の花びらの数）",
    hint: "花弁が合着（くっついて）いる場合は分かれた状態で数えます",
    options: [
      {
        id: "herb_di_4",
        label: "4枚",
        nextNodeId: "herb_di_4_node",
      },
      {
        id: "herb_di_5",
        label: "5枚",
        nextNodeId: "herb_di_5_node",
      },
      {
        id: "herb_di_many",
        label: "多数、または区別しにくい（頭状花序）",
        resultFamilyIds: ["asteraceae"],
        resultPlantIds: ["tanpopo", "himawari"],
      },
    ],
  },
  herb_di_4_node: {
    id: "herb_di_4_node",
    question: "花が穂状に多数集まってついているか？",
    hint: "オオバコのように、細い穂に多数の小さな花が密につく場合があります",
    options: [
      {
        id: "herb_di_4_spike",
        label: "穂状に多数の花がつく",
        resultFamilyIds: ["plantaginaceae"],
        resultPlantIds: ["ooba_plantain"],
      },
      {
        id: "herb_di_4_other",
        label: "単独またはまとまった花序",
        resultFamilyIds: [],
        resultPlantIds: [],
      },
    ],
  },
  herb_di_5_node: {
    id: "herb_di_5_node",
    question: "葉の形は？",
    hint: "葉の形が同定の大きなヒントになります",
    options: [
      {
        id: "herb_di_5_heart",
        label: "ハート形3枚の複葉",
        resultFamilyIds: ["oxalidaceae"],
        resultPlantIds: ["katabami"],
      },
      {
        id: "herb_di_5_other",
        label: "その他",
        nextNodeId: "herb_di_5_smell",
      },
    ],
  },
  herb_di_5_smell: {
    id: "herb_di_5_smell",
    question: "葉や茎に独特の強いにおいがあるか？",
    hint: "ドクダミは独特の香りがあり、日陰の湿った場所に生えます",
    options: [
      {
        id: "herb_di_5_smell_yes",
        label: "強いにおいがある",
        resultFamilyIds: ["saururaceae"],
        resultPlantIds: ["dokudami"],
      },
      {
        id: "herb_di_5_smell_no",
        label: "においはあまりない",
        resultFamilyIds: [],
        resultPlantIds: [],
      },
    ],
  },
  tree_leaf: {
    id: "tree_leaf",
    question: "葉の形は？",
    hint: "木の葉の全体的な形を見ます",
    options: [
      {
        id: "tree_fan",
        label: "扇形（二又に分かれる葉脈）",
        resultFamilyIds: ["ginkgoaceae"],
        resultPlantIds: ["ginkgo"],
      },
      {
        id: "tree_needle",
        label: "針状・鱗片状（針葉樹）",
        nextNodeId: "tree_needle_node",
      },
      {
        id: "tree_broad",
        label: "幅広の葉（広葉樹）",
        nextNodeId: "tree_broad_node",
      },
    ],
  },
  tree_needle_node: {
    id: "tree_needle_node",
    question: "樹皮の特徴は？",
    hint: "針葉樹の中でもスギは赤褐色の繊維状の樹皮が特徴的です",
    options: [
      {
        id: "tree_needle_cedar",
        label: "赤褐色で縦に裂ける繊維状",
        resultFamilyIds: ["cupressaceae"],
        resultPlantIds: ["sugi"],
      },
      {
        id: "tree_needle_other",
        label: "その他",
        resultFamilyIds: ["cupressaceae"],
        resultPlantIds: [],
      },
    ],
  },
  tree_broad_node: {
    id: "tree_broad_node",
    question: "樹皮はどのようなはがれ方をするか？",
    hint: "プラタナスは樹皮が板状にはがれて迷彩状の模様になります",
    options: [
      {
        id: "tree_broad_plane",
        label: "板状にはがれて迷彩状（白・緑・茶の模様）",
        resultFamilyIds: ["platanaceae"],
        resultPlantIds: ["suzukake"],
      },
      {
        id: "tree_broad_cherry",
        label: "横方向に皮目が目立つ（水平の縞模様）",
        resultFamilyIds: ["rosaceae"],
        resultPlantIds: ["sakura"],
      },
      {
        id: "tree_broad_other",
        label: "その他",
        resultFamilyIds: [],
        resultPlantIds: [],
      },
    ],
  },
};

export const keyStartNodeId = "start";
