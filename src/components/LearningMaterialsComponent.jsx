import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials as initialMaterials } from "../data/learningMaterials";
export default function LearningMaterialsComponent() {
  const [sortedMaterials, setSortedMaterials] = useState([]);

  useEffect(() => {
    setSortedMaterials(initialMaterials);
  }, []);

  // Handle single click to toggle favoritew
  const toggleFavorite = (id) => {
    setSortedMaterials((prevMaterials) =>
      prevMaterials.map((material) =>
        material.id === id
          ? { ...material, isFavorite: !material.isFavorite }
          : material
      )
    );
  };

  // Handle double click to reset favorite
  const resetFavorite = (id) => {
    setSortedMaterials((prevMaterials) =>
      prevMaterials.map((material) =>
        material.id === id ? { ...material, isFavorite: false } : material
      )
    );
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] no-scrollbar">
      <FilterComponent setSortedMatrals={setSortedMaterials} />
      {/* Title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* Materials List */}
      <div className="space-y-3">
        {sortedMaterials.map((material) => (
          <div
            key={material.id}
            className="bg-light-gray px-4 py-2 flex gap-5 items-center "
          >
            <img
              src={material.image}
              alt={material.title}
              width={50}
              height={50}
              className="rounded-xl"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <p className="text-base font-medium">{material.title}</p>
                <Star
                  size={20}
                  className="cursor-pointer" 
                  fill={material.isFavorite ? "#FAA300" : "none"}
                  onClick={() => toggleFavorite(material.id)} 
                  onDoubleClick={() => resetFavorite(material.id)} 
                />
              </div>
              <p className="text-gray-400 text-sm">{material.postedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
