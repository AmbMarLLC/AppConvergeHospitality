import { useState, useEffect } from "react";

export default function Theft({ theftData, updateTheft }) {
  const [localData, setLocalData] = useState({
    stolenItem: "",
    stolenItemValue: "",
    compensation: "",
    compensationYes: false,
    compensationNo: false,
  });

  useEffect(() => {
    setLocalData({ ...theftData });
  }, [theftData]);

  // useEffect(() => {
  //   updateTheft(localData);
  // }, [localData, updateTheft]);

  const handleCompensationChange = (event) => {
    const { id } = event.target;
    setLocalData((prev) => ({
      ...prev,
      compensationYes: id === "compensationYes",
      compensationNo: id === "compensationNo",
    }));
  };

  return (
    <>
      <h2>Theft (only fill out if needed)</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary>Click here to expand</summary>
        <label className="block text-gray-700 font-medium mt-3 mb-1">
          What was stolen?
        </label>
        <input
          type="text"
          id="stolenItem"
          name="stolenItem"
          value={localData.stolenItem}
          placeholder="e.g. Laptop, Phone, etc."
          onChange={(e) => {
            const newData = { ...localData, stolenItem: e.target.value };
            setLocalData(newData);
            updateTheft(newData);
          }}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
        />
        <label className="block text-gray-700 font-medium mt-3 mb-1">
          Approximate value of items in $
        </label>
        <input
          type="text"
          id="stolenItemValue"
          name="stolenItemValue"
          value={localData.stolenItemValue}
          placeholder="e.g. $500, $1000, etc."
          onChange={(e) => {
            const newData = { ...localData, stolenItemValue: e.target.value };
            setLocalData(newData);
            updateTheft(newData);
          }}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
        />
        <h4 className="mt-3 mb-1">Was compensation provided?</h4>
        <label className="pr-4">
          <input
            type="checkbox"
            id="compensationYes"
            onChange={handleCompensationChange}
            checked={localData.compensationYes}
          />
          Yes
        </label>
        <label className="pr-4">
          <input
            type="checkbox"
            id="compensationNo"
            onChange={handleCompensationChange}
            checked={localData.compensationNo}
          />
          No
        </label>

        {localData.compensationYes && (
          <div>
            <label className="block text-gray-700 font-medium mt-3 mb-1">
              What kind of compensation was given?
            </label>
            <input
              type="text"
              id="compensation"
              name="compensation"
              value={localData.compensation}
              onChange={(e) =>
                setLocalData((prev) => ({
                  ...prev,
                  compensation: e.target.value,
                }))
              }
              placeholder="e.g. Money, Replacement, Points, etc."
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
            />
          </div>
        )}
      </details>
    </>
  );
}
