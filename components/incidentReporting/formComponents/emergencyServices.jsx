import { useState, useEffect } from "react";

export default function EmergencyServices({
  emergencyServicesData,
  updateEmergencyServices,
}) {
  const [emergencyServices, setEmergencyServices] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // Sync local state from emergencyServicesData when editing
  useEffect(() => {
    setEmergencyServices(emergencyServicesData.emergencyServices || "");
    if (emergencyServicesData.emergencyServicesCYes) {
      setSelectedOption("yes");
    } else if (emergencyServicesData.emergencyServicesCNo) {
      setSelectedOption("no");
    } else {
      setSelectedOption("");
    }
  }, [emergencyServicesData]);

  // Update parent when local state changes
  useEffect(() => {
    updateEmergencyServices({
      emergencyServicesCYes: selectedOption === "yes",
      emergencyServicesCNo: selectedOption === "no",
      emergencyServices,
    });
  }, [selectedOption, emergencyServices, updateEmergencyServices]);

  const handleChange = (event) => {
    setSelectedOption(
      event.target.id === "emergencyServicesCYes" ? "yes" : "no"
    );
  };

  return (
    <div>
      <h2>Emergency Services</h2>
      <label className="block text-gray-700 font-medium mb-2">
        Was Emergency Services called
      </label>
      <label className="pr-4">
        <input
          type="checkbox"
          onChange={handleChange}
          id="emergencyServicesCYes"
          checked={selectedOption === "yes"}
        />
        Yes
      </label>
      <label className="pr-4">
        <input
          type="checkbox"
          onChange={handleChange}
          id="emergencyServicesCNo"
          checked={selectedOption === "no"}
        />
        No
      </label>
      <label className="block text-gray-700 font-medium mb-2">
        If yes, which services were called
      </label>
      <input
        type="text"
        id="emergencyServices"
        name="emergencyServices"
        value={emergencyServices}
        placeholder="e.g. Police, Fire, Ambulance, etc."
        onChange={(e) => setEmergencyServices(e.target.value)}
        className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
      />
    </div>
  );
}
