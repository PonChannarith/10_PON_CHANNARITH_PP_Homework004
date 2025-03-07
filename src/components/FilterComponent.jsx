import React from "react";
export default function FilterComponent({ setSortedMatrals }) {
  // console.log(setSortedMatrals)
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
      // console.log(setSortedMatrals);
    setSortedMatrals((prevMaterial) => {
      const sorted = [...prevMaterial].sort((a, b) => {
        console.log("Sorted Material")
        return sortBy === "A-Z"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      });
      return sorted;
    });
  };
  return (
    <form className="mt-4 mx-4 flex justify-between">
      <div className="relative w-full">
        <select
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          onChange={handleSortChange}
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
        >
          <option hidden value="">Sort By</option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
