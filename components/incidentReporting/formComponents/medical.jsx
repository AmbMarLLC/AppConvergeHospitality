import { useState, useEffect } from "react";

export default function Medical({ medicalData, updateMedical }) {
  const [localData, setLocalData] = useState({
    physicianName: "",
    physicianAddress: "",
    DOB: "",
    shoes: "",
    training: "",
    daysOff: "",
    returnDate: "",
  });

  useEffect(() => {
    setLocalData({ ...medicalData });
  }, [medicalData]);

  // useEffect(() => {
  //   updateMedical(localData);
  // }, [localData, updateMedical]);

  return (
    <>
      <h2>Medical (only fill out if needed)</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary>Click here to expand</summary>
        <label className="block text-gray-700 font-medium mt-3 mb-2">
          If seen by a physician. Please provide the Physicians name and
          address.
        </label>
        <input
          type="text"
          id="physicianName"
          name="physicianName"
          value={localData.physicianName}
          placeholder="Physician name"
          onChange={(e) => {
            const newData = { ...localData, physicianName: e.target.value };
            setLocalData(newData);
            updateMedical(newData);
          }}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-2"
        />
        <input
          type="text"
          id="physicianAddress"
          name="physicianAddress"
          value={localData.physicianAddress}
          placeholder="Physician address"
          onChange={(e) => {
            const newData = { ...localData, physicianAddress: e.target.value };
            setLocalData(newData);
            updateMedical(newData);
          }}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
        />
        <label className="block text-gray-700 font-medium mt-3 mb-2">
          Date of birth
        </label>
        <input
          id="DOB"
          name="DOB"
          type="date"
          value={localData.DOB}
          placeholder="MM/DD/YYYY"
          onChange={(e) =>
            setLocalData((prev) => ({ ...prev, DOB: e.target.value }))
          }
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-2"
        />
        <label className="block text-gray-700 font-medium mt-3 mb-2">
          If a slip or fall happend, what shoes were worn?
        </label>
        <input
          id="shoes"
          type="text"
          name="shoes"
          value={localData.shoes}
          placeholder="e.g. Boots, Sneakers, etc."
          onChange={(e) =>
            setLocalData((prev) => ({ ...prev, shoes: e.target.value }))
          }
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-2"
        />
        <h3>If associated related please fill out the fields below.</h3>
        <label className="block text-gray-700 font-medium mt-3 mb-2">
          Was training done on this topic?
        </label>
        <input
          type="text"
          id="training"
          name="training"
          value={localData.training}
          placeholder="e.g. Yes, No, etc."
          onChange={(e) =>
            setLocalData((prev) => ({ ...prev, training: e.target.value }))
          }
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-2"
        />
        <input
          id="daysOff"
          type="number"
          name="daysOff"
          value={localData.daysOff}
          placeholder="Days off needed"
          onChange={(e) =>
            setLocalData((prev) => ({ ...prev, daysOff: e.target.value }))
          }
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-2"
        />
        <input
          type="date"
          id="returnDate"
          name="returnDate"
          value={localData.returnDate}
          placeholder="Return to work date"
          onChange={(e) =>
            setLocalData((prev) => ({ ...prev, returnDate: e.target.value }))
          }
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-2"
        />
        <p>
          Please download and fill out the pain diagram from the link below and
          attach it to the incident report when filled out.
        </p>
        <a href="documents/PainDiagram.pdf" target="_blank" className="link">
          Download Pain Diagram
        </a>
      </details>
    </>
  );
}
