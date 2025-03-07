import React, { useState } from "react";
import { Plus } from "lucide-react";
import { CardComponent } from "./CardComponent";

export default function AddNewProjectComponent({searchQuery}) {
  const [projects, setProjects] = useState([]); // Stores projects
  const [formData, setFormData] = useState({
    projectName: "",
    dueDate: "",
    progress: "",
    description: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({}); // Stores validation errors

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setErrors({}); // Reset errors when reopening modal
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    const { projectName, progress, dueDate, description } = formData;

    if (!projectName.trim()) {
      newErrors.projectName = "Project name is required.";
    }

    // Validate due date (must be today or a future date)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(dueDate);

    if (!dueDate) {
      newErrors.dueDate = "Due date is required.";
    } else if (selectedDate < today) {
      newErrors.dueDate = "Please choose the deadline of your project.";
    }

    // Validate progress (must be between 0-100)
    if (!progress) {
      newErrors.progress = "Progress is required.";
    } else if (isNaN(progress) || progress < 0 || progress > 100) {
      newErrors.progress = "Please choose the deadling of your project.";
    }

    // if (!description.trim()) {
    //   newErrors.description = "Project description is required.";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    setProjects([...projects, formData]); // Add new project to state
    setFormData({
      projectName: "",
      dueDate: "",
      progress: "",
      description: "",
    }); // Reset form
    setIsModalOpen(false); // Close modal
  };

  const filterData = projects.filter(project => project.projectName.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Assignments</h2>
        {/* Button to Open Modal */}
        <button
          onClick={toggleModal}
          className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 flex items-center gap-2"
        >
          <Plus size={22} /> <span className="text-base">New Project</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
          <div className="relative p-4 w-full max-w-md bg-white rounded-2xl shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Create New Project
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-400 hover:text-gray-900"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Type Project Name"
                  />
                  {errors.projectName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.projectName}
                    </p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  />
                  {errors.dueDate && (
                    <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Progress
                  </label>
                  <select
                    name="progress"
                    value={formData.progress}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  >
                    <option value="">Select Progress</option>
                    <option value="100">100%</option>
                    <option value="75">75%</option>
                    <option value="50">50%</option>
                    <option value="25">25%</option>
                  </select>
                  {errors.progress && (
                    <p className="text-red-500 text-xs mt-1">{errors.progress}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Write project description here"
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Displaying Projects as Cards */}
      <div className="mt-5 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterData.map((project, index) => (
          <CardComponent key={index} project={project} />
        ))}
      </div>  
    </div>
  );
}
