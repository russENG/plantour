"use client";
import { useState } from "react";
import Link from "next/link";
import { keyNodes, keyStartNodeId } from "@/data/key";
import { plants } from "@/data/plants";
import { families } from "@/data/families";
import type { KeyOption } from "@/data/types";

interface HistoryEntry {
  nodeId: string;
  optionId: string;
  optionLabel: string;
}

export default function PlantKey() {
  const [currentNodeId, setCurrentNodeId] = useState(keyStartNodeId);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [result, setResult] = useState<{ familyIds: string[]; plantIds: string[] } | null>(null);

  const currentNode = keyNodes[currentNodeId];

  const handleOption = (option: KeyOption) => {
    const entry: HistoryEntry = {
      nodeId: currentNodeId,
      optionId: option.id,
      optionLabel: option.label,
    };

    if (option.nextNodeId) {
      setHistory([...history, entry]);
      setCurrentNodeId(option.nextNodeId);
      setResult(null);
    } else {
      setHistory([...history, entry]);
      setResult({
        familyIds: option.resultFamilyIds ?? [],
        plantIds: option.resultPlantIds ?? [],
      });
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setCurrentNodeId(prev.nodeId);
    setHistory(history.slice(0, -1));
    setResult(null);
  };

  const handleReset = () => {
    setCurrentNodeId(keyStartNodeId);
    setHistory([]);
    setResult(null);
  };

  const progress = history.length;
  const totalSteps = 5; // 概算

  return (
    <div className="max-w-2xl mx-auto">
      {/* 進捗バー */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
          <span>ステップ {progress + 1}</span>
          <button onClick={handleReset} className="hover:text-gray-600 transition-colors">
            最初からやり直す
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${Math.min((progress / totalSteps) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* 選択履歴 */}
      {history.length > 0 && (
        <div className="mb-6 space-y-1">
          {history.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs flex-shrink-0">
                {i + 1}
              </span>
              <span className="line-through">{keyNodes[h.nodeId]?.question}</span>
              <span className="text-green-600 not-italic">→ {h.optionLabel}</span>
            </div>
          ))}
        </div>
      )}

      {/* 現在の設問 or 結果 */}
      {!result ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🔍</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{currentNode?.question}</h2>
            {currentNode?.hint && (
              <p className="text-sm text-gray-500 bg-blue-50 rounded-lg px-4 py-2">
                💡 {currentNode.hint}
              </p>
            )}
          </div>

          <div className="space-y-3">
            {currentNode?.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOption(option)}
                className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all text-sm font-medium text-gray-700"
              >
                {option.label}
              </button>
            ))}
          </div>

          {history.length > 0 && (
            <button
              onClick={handleBack}
              className="mt-4 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← 前の設問に戻る
            </button>
          )}
        </div>
      ) : (
        /* 結果表示 */
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🌿</div>
            <h2 className="text-xl font-bold text-gray-900">候補が絞り込まれました</h2>
          </div>

          {result.plantIds.length > 0 || result.familyIds.length > 0 ? (
            <>
              {result.plantIds.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">該当する植物</h3>
                  <div className="space-y-2">
                    {result.plantIds.map((id) => {
                      const plant = plants.find((p) => p.id === id);
                      if (!plant) return null;
                      return (
                        <Link
                          key={id}
                          href={`/plants/${id}`}
                          className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-green-50 hover:border-green-300 transition-colors"
                        >
                          <span className="text-2xl">🌿</span>
                          <div>
                            <div className="font-bold text-gray-900 text-sm">{plant.jaName}</div>
                            <div className="text-xs text-gray-500 italic">{plant.scientificName}</div>
                          </div>
                          <span className="ml-auto text-green-600 text-xs">詳細を見る →</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {result.familyIds.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">該当する科</h3>
                  <div className="space-y-2">
                    {result.familyIds.map((id) => {
                      const family = families.find((f) => f.id === id);
                      if (!family) return null;
                      return (
                        <Link
                          key={id}
                          href={`/families/${id}`}
                          className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-teal-50 hover:border-teal-300 transition-colors"
                        >
                          <span className="text-2xl">🌳</span>
                          <div>
                            <div className="font-bold text-gray-900 text-sm">{family.jaName}</div>
                            <div className="text-xs text-gray-500 italic">{family.scientificName}</div>
                          </div>
                          <span className="ml-auto text-teal-600 text-xs">科ページへ →</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-400 py-4">
              現在のデータではこの条件に一致する植物が登録されていません。
            </p>
          )}

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleBack}
              className="flex-1 text-sm border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              前に戻る
            </button>
            <button
              onClick={handleReset}
              className="flex-1 text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              最初からやり直す
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
