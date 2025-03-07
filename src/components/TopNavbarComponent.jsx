import { Bell, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function TopNavbarComponent({ handleSearchQuery }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleSearchQuery(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-between items-center">
      <form className="relative w-9/12" onSubmit={handleSubmit}>
        <button className="cursor-pointer">
          <Search className="w-6 h-6 text-primary-text absolute top-3 left-4" />
        </button>

        <input
          type="text"
          placeholder="Search assignment here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:ring-0 focus:outline-custom-sky-blue"
        />
      </form>

      <div className="relative w-12 h-12 bg-white p-2.5 rounded-full">
        <Bell className="w-7 h-7 text-primary-text" />
        <div className="bg-red-600 w-2.5 h-2.5 rounded-full absolute top-2 right-3"></div>
      </div>

      <div className="h-16 rounded-xl w-2.5/12 bg-white py-2 px-3 my-3 flex gap-2 items-start">
        <img
          src="https://i.pinimg.com/736x/39/2a/50/392a5042102c7d7e4ed87527a2d7e74a.jpg"
          alt="profile image"
          width={45}
          height={45}
          className="rounded-full"
        />
        <div>
          <p className="capitalize text-base">pon channarith</p>
          <p className="text-gray-400 text-sm">ponchannarith@gmail.com</p>
        </div>
      </div>

      {/* Optional: Display filtered projects if needed */}
      {/* <div className="filtered-projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-item">
              <p>{project.projectName}</p>
            </div>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </div> */}
    </div>
  );
}
