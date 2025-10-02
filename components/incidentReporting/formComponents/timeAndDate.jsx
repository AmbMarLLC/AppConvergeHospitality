import { useState, useEffect } from "react";

export default function TimeAndDate({ incidentTimeData, updateTimeAndDate }) {
  // Removed local state and the useEffect hook
  // The component is now fully controlled by its parent

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    updateTimeAndDate({
      ...incidentTimeData,
      incidentTime: newTime,
    });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    updateTimeAndDate({
      ...incidentTimeData,
      incidentDate: newDate,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Time of Incident<sup>*</sup>
        </label>
        <input
          required
          type="time"
          id="incidentTime"
          name="incidentTime"
          // Value is now tied directly to the prop
          value={incidentTimeData.incidentTime || ""}
          onChange={handleTimeChange}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Date of Incident<sup>*</sup>
        </label>
        <input
          required
          type="date"
          id="incidentDate"
          name="incidentDate"
          // Value is now tied directly to the prop
          value={incidentTimeData.incidentDate || ""}
          onChange={handleDateChange}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
        />
      </div>
    </div>
  );
}
