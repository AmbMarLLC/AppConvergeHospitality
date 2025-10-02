"use client";

import { useState, useEffect } from "react";

export default function PersonalInfo({ personalInfoData, updatePersonalInfo }) {
  const [affectedName, setAffectedName] = useState("");
  const [affectedAddress, setAffectedAddress] = useState("");
  const [affectedPhone, setAffectedPhone] = useState("");
  const [affectedEmail, setAffectedEmail] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [checkboxState, setCheckboxState] = useState({
    guest: false,
    employee: false,
    vendor: false,
  });

  useEffect(() => {
    setAffectedName(personalInfoData.affectedName || "");
    setAffectedAddress(personalInfoData.affectedAddress || "");
    setAffectedPhone(personalInfoData.affectedPhone || "");
    setAffectedEmail(personalInfoData.affectedEmail || "");
    setAffiliation(personalInfoData.affiliation || "");
    setCheckboxState({
      guest: !!personalInfoData.guest,
      employee: !!personalInfoData.employee,
      vendor: !!personalInfoData.vendor,
    });
  }, [personalInfoData]);

  const getPlaceholder = () => {
    const selectedAffiliation = Object.keys(checkboxState).find(
      (key) => checkboxState[key]
    );
    switch (selectedAffiliation) {
      case "guest":
        return "Guest room number";
      case "employee":
        return "Employee ID";
      case "vendor":
        return "Vendor company name";
      default:
        return "";
    }
  };

  const handleChange = (event) => {
    const { id } = event.target;
    const newState = {
      guest: id === "guest",
      employee: id === "employee",
      vendor: id === "vendor",
    };
    setCheckboxState(newState);
    updatePersonalInfo({
      ...personalInfoData,
      ...newState,
    });
  };

  return (
    <div>
      <h2 className="mb-4">Personal information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Full name<sup>*</sup>
          </label>
          <input
            required
            type="text"
            id="affectedName"
            name="affectedName"
            value={affectedName}
            onChange={(e) => {
              setAffectedName(e.target.value);
              updatePersonalInfo({
                ...personalInfoData,
                affectedName: e.target.value,
              });
            }}
            className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
          />
          <label className="block text-gray-700 font-medium mb-2">
            Address<sup>*</sup>
          </label>
          <input
            required
            type="text"
            id="affectedAddress"
            name="affectedAddress"
            value={affectedAddress}
            onChange={(e) => {
              setAffectedAddress(e.target.value);
              updatePersonalInfo({
                ...personalInfoData,
                affectedAddress: e.target.value,
              });
            }}
            className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
          />
          <label className="block text-gray-700 font-medium mb-1">
            Affiliation (Affected Individual)<sup>*</sup>
          </label>
          <label className="pr-4">
            <input
              id="guest"
              type="checkbox"
              onChange={handleChange}
              checked={checkboxState.guest}
            />{" "}
            Guest
          </label>
          <label className="pr-4">
            <input
              id="employee"
              type="checkbox"
              onChange={handleChange}
              checked={checkboxState.employee}
            />{" "}
            Employee
          </label>
          <label className="pr-4">
            <input
              id="vendor"
              type="checkbox"
              onChange={handleChange}
              checked={checkboxState.vendor}
            />{" "}
            Vendor
          </label>
          <input
            required
            type="text"
            id="affiliation"
            name="affiliation"
            value={affiliation}
            placeholder={getPlaceholder()}
            onChange={(e) => {
              setAffiliation(e.target.value);
              updatePersonalInfo({
                ...personalInfoData,
                affiliation: e.target.value,
              });
            }}
            className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mt-1"
          />
        </div>
        {/* Phone & Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Phone<sup>*</sup>
          </label>
          <input
            required
            type="tel"
            id="affectedPhone"
            name="affectedPhone"
            value={affectedPhone}
            onChange={(e) => {
              setAffectedPhone(e.target.value);
              updatePersonalInfo({
                ...personalInfoData,
                affectedPhone: e.target.value,
              });
            }}
            className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
          />
          <label className="block text-gray-700 font-medium mb-2">
            Email<sup>*</sup>
          </label>
          <input
            required
            type="email"
            id="affectedEmail"
            name="affectedEmail"
            value={affectedEmail}
            onChange={(e) => {
              setAffectedEmail(e.target.value);
              updatePersonalInfo({
                ...personalInfoData,
                affectedEmail: e.target.value,
              });
            }}
            className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
