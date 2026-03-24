import Link from "next/link";
import type { Plant } from "@/data/types";
import ReviewBadge from "@/components/ReviewBadge";

interface Props {
  plant: Plant;
}

export default function PlantCard({ plant }: Props) {
  return (
    <Link href={`/plants/${plant.id}`} className="block group">
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
        <div className="h-36 bg-green-50 flex items-center justify-center text-5xl">
          🌿
        </div>
        <div className="p-4">
          <p className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">
            {plant.jaName}
          </p>
          <p className="text-xs text-gray-500 italic mt-0.5">{plant.scientificName}</p>
          <p className="text-xs text-green-700 mt-1 font-medium">{plant.familyJaName}</p>
          {plant.review && (plant.review.status === "ai_generated" || plant.review.status === "needs_review") && (
            <div className="mt-1.5">
              <ReviewBadge review={plant.review} size="sm" />
            </div>
          )}
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{plant.description}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {plant.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
