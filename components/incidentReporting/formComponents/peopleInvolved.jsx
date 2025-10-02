import { useState, useEffect } from "react";

export default function PeopleInvolved({
  peopleInvolvedData,
  updatePeopleInvolved,
}) {
  const [localData, setLocalData] = useState({
    otherName1: "",
    otherName2: "",
    otherName3: "",
    otherPhone1: "",
    otherPhone2: "",
    otherPhone3: "",
  });

  useEffect(() => {
    setLocalData({ ...peopleInvolvedData });
  }, [peopleInvolvedData]);

  return (
    <>
      <h2>Other people involved in the incident</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary>Click here to expand</summary>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="otherName1"
              name="otherName1"
              value={localData.otherName1}
              placeholder="Person 1"
              onChange={(e) => {
                const newData = { ...localData, otherName1: e.target.value };
                setLocalData(newData);
                updatePeopleInvolved(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="otherName2"
              name="otherName2"
              value={localData.otherName2}
              placeholder="Person 2"
              onChange={(e) => {
                const newData = { ...localData, otherName2: e.target.value };
                setLocalData(newData);
                updatePeopleInvolved(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="otherName3"
              name="otherName3"
              value={localData.otherName3}
              placeholder="Person 3"
              onChange={(e) => {
                const newData = { ...localData, otherName3: e.target.value };
                setLocalData(newData);
                updatePeopleInvolved(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="otherPhone1"
              name="otherPhone1"
              value={localData.otherPhone1}
              placeholder="Person 1's phone number"
              onChange={(e) => {
                const newData = { ...localData, otherPhone1: e.target.value };
                setLocalData(newData);
                updatePeopleInvolved(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="otherPhone2"
              name="otherPhone2"
              value={localData.otherPhone2}
              placeholder="Person 2's phone number"
              onChange={(e) => {
                const newData = { ...localData, otherPhone2: e.target.value };
                setLocalData(newData);
                updatePeopleInvolved(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="otherPhone3"
              name="otherPhone3"
              value={localData.otherPhone3}
              placeholder="Person 3's phone number"
              onChange={(e) => {
                const newData = { ...localData, otherPhone3: e.target.value };
                setLocalData(newData);
                updatePeopleInvolved(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
          </div>
        </div>
      </details>
    </>
  );
}
