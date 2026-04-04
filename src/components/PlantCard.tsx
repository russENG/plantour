import Link from "next/link";
import type { Plant } from "@/data/types";
import PlantImage from "@/components/PlantImage";
import { getPlantEmoji } from "@/lib/emoji";
import type { Locale } from "@/dictionaries";

interface Props {
  plant: Plant;
  lang?: Locale;
}

export default function PlantCard({ plant, lang = "ja" }: Props) {
  const name = lang === "en" && plant.enName ? plant.enName : plant.jaName;
  const desc = lang === "en" && plant.enDescription ? plant.enDescription : plant.description;
  const tags = lang === "en" && plant.enTags?.length ? plant.enTags : plant.tags;
  const familyName = lang === "en" && plant.familyEnName ? plant.familyEnName : plant.familyJaName;

  return (
    <Link href={`/${lang}/plants/${plant.id}`} className="block group">
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
        <div className="h-28 sm:h-36 overflow-hidden">
          <PlantImage
            src={plant.imageUrl}
            alt={name}
            className="h-28 sm:h-36"
            fallbackClassName="h-28 sm:h-36"
            width={400}
          />
        </div>
        <div className="p-4">
          <p className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors">
            {name}{getPlantEmoji(plant.id, plant.familyId) && <span className="ml-1">{getPlantEmoji(plant.id, plant.familyId)}</span>}
          </p>
          <p className="text-xs text-gray-500 italic mt-0.5">{plant.scientificName}</p>
          <p className="text-xs text-green-700 mt-1 font-medium">{familyName}</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{desc}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {tags.slice(0, 3).map((tag) => (
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
