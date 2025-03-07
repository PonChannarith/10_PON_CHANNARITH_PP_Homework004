  import { EllipsisVertical } from "lucide-react";
  import React from "react";

  export function CardComponent({ project = {} }) {
    const calculateTimeLeft = (dueDate) => {
      if (!dueDate) return { value: "No", unit: "Deadline" };

      const now = new Date();
      const due = new Date(dueDate);
      if (isNaN(due.getTime())) return { value: "Invalid", unit: "Date" };

      const diff = due - now;
      if (diff <= 0) return { value: "Expired", unit: "" };

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      if (days >= 7) {
        const weeks = Math.floor(days / 7);
        return { value: weeks, unit: weeks === 1 ? "week" : "weeks" };
      } else if (days > 0) {
        return { value: days, unit: days === 1 ? "day" : "days" };
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      if (hours > 0) return { value: hours, unit: hours === 1 ? "hour" : "hours" };

      const minutes = Math.floor(diff / (1000 * 60));
      return { value: minutes, unit: minutes === 1 ? "minute" : "minutes" };
    };

    const getProgressColor = (percentage) => {
      const progress = parseInt(percentage);
      if (progress >= 100) return "bg-[#59D5E0CF]";
      if (progress >= 75) return "bg-[#FAA300CF]";
      if (progress >= 50) return "bg-[#F5DD61]";
      if (progress >= 25) return "bg-[#F4538A]";
      return "bg-gray-300";
    };

    const timeLeft = calculateTimeLeft(project.dueDate);

    return (
      <div className="max-w-sm  w-[100%] p-6 bg-white  rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          <p className="text-custom-sky-blue font-medium">
            {project.dueDate || "No Deadline"}
          </p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {project.projectName}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {project.description || "No description provided."}
        </p>

        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{project.progress || 0}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className={`h-2.5 rounded-full ${getProgressColor(project.progress)}`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>

        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-fit text-center">
            {timeLeft.value} {timeLeft.unit} left
          </p>
        </div>
      </div>
    );
  }
