import { useState, useEffect } from "react";

export default function Witnesses({ witnessData, updateWitnesses }) {
  const [localData, setLocalData] = useState({
    witnessName1: "",
    witnessName2: "",
    witnessName3: "",
    witnessPhone1: "",
    witnessPhone2: "",
    witnessPhone3: "",
  });

  useEffect(() => {
    setLocalData({ ...witnessData });
  }, [witnessData]);

  return (
    <>
      <h2>Witnesses</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary>Click here to expand</summary>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="witnessName1"
              name="witnessName1"
              value={localData.witnessName1}
              placeholder="Witness 1"
              onChange={(e) => {
                const newData = { ...localData, witnessName1: e.target.value };
                setLocalData(newData);
                updateWitnesses(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="witnessName2"
              name="witnessName2"
              value={localData.witnessName2}
              placeholder="Witness 2"
              onChange={(e) => {
                const newData = { ...localData, witnessName2: e.target.value };
                setLocalData(newData);
                updateWitnesses(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="witnessName3"
              name="witnessName3"
              value={localData.witnessName3}
              placeholder="Witness 3"
              onChange={(e) => {
                const newData = { ...localData, witnessName3: e.target.value };
                setLocalData(newData);
                updateWitnesses(newData);
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
              id="witnessPhone1"
              name="witnessPhone1"
              value={localData.witnessPhone1}
              placeholder="Witness 1's phone number"
              onChange={(e) => {
                const newData = { ...localData, witnessPhone1: e.target.value };
                setLocalData(newData);
                updateWitnesses(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="witnessPhone2"
              name="witnessPhone2"
              value={localData.witnessPhone2}
              placeholder="Witness 2's phone number"
              onChange={(e) => {
                const newData = { ...localData, witnessPhone2: e.target.value };
                setLocalData(newData);
                updateWitnesses(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="witnessPhone3"
              name="witnessPhone3"
              value={localData.witnessPhone3}
              placeholder="Witness 3's phone number"
              onChange={(e) => {
                const newData = { ...localData, witnessPhone3: e.target.value };
                setLocalData(newData);
                updateWitnesses(newData);
              }}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
            />
          </div>
        </div>
      </details>
    </>
  );
}
