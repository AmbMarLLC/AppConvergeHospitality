import { useState, useEffect } from "react";

export default function PropertyDamage({
  propertyDamageData,
  updatePropertyDamage,
}) {
  const [localData, setLocalData] = useState({
    weather: "",
    guestImpact: "",
    restorationCompany: "",
    photosYes: false,
    photosNo: false,
  });

  useEffect(() => {
    setLocalData({ ...propertyDamageData });
  }, [propertyDamageData]);

  // useEffect(() => {
  //   updatePropertyDamage(localData);
  // }, [localData, updatePropertyDamage]);

  const handleChange = (event) => {
    const { id } = event.target;
    setLocalData((prev) => ({
      ...prev,
      photosYes: id === "photosYes",
      photosNo: id === "photosNo",
    }));
  };

  return (
    <>
      <h2>Property damage (only fill out if needed)</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary>Click here to expand</summary>
        <label className="block text-gray-700 font-medium mt-3 mb-1">
          Weather conditions
        </label>
        <input
          type="text"
          id="weather"
          name="weather"
          value={localData.weather}
          placeholder="e.g. Rain, Snow, Sun, etc."
          onChange={(e) => {
            const newData = { ...localData, weather: e.target.value };
            setLocalData(newData);
            updatePropertyDamage(newData);
          }}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
        />
        <label className="block text-gray-700 font-medium mt-3 mb-1">
          Guest impact, if any?
        </label>
        <input
          type="text"
          id="guestImpact"
          name="guestImpact"
          value={localData.guestImpact}
          onChange={(e) => {
            const newData = { ...localData, guestImpact: e.target.value };
            setLocalData(newData);
            updatePropertyDamage(newData);
          }}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
        />
        <label className="block text-gray-700 font-medium mt-3 mb-1">
          Has a restoration company been called? If so, who?
        </label>
        <input
          type="text"
          id="restorationCompany"
          name="restorationCompany"
          value={localData.restorationCompany}
          placeholder="List restoration company name"
          onChange={(e) => {
            const newData = {
              ...localData,
              restorationCompany: e.target.value,
            };
            setLocalData(newData);
            updatePropertyDamage(newData);
          }}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
        />
        <label className="block text-gray-700 font-medium mt-3 mb-1">
          Were photos taken and uploaded?
        </label>
        <label className="pr-4">
          <input
            id="photosYes"
            type="checkbox"
            onChange={handleChange}
            checked={localData.photosYes}
          />{" "}
          Yes
        </label>
        <label className="pr-4">
          <input
            id="photosNo"
            type="checkbox"
            onChange={handleChange}
            checked={localData.photosNo}
          />{" "}
          No
        </label>
      </details>
    </>
  );
}
