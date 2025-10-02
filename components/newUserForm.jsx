"use client";

import React, { useState } from "react";
import PropertyDropdown from "./PropertyDropdown";
import propertiesData from "/data/properties.json";

const NewUserForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    position: "",
    property: "",
    propertyAddress: "",
    propertyCodeode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value || "" }));
  };

  const handlePropertyChange = (slug) => {
    const property = propertiesData?.Properties?.find((p) => p.slug === slug);

    if (property) {
      setFormValues((prev) => ({
        ...prev,
        property: slug || "",
        propertyAddress: property.address || "",
        propertyCode: property.code || "",
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        property: "",
        propertyAddress: "",
        propertyCode: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/newUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert("User created successfully!");
        setFormValues({
          name: "",
          email: "",
          phone: "",
          username: "",
          password: "",
          position: "",
          property: "",
          propertyAddress: "",
          propertyCode: "",
        });
      } else {
        alert("Failed to create user.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Create New User
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formValues.name || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formValues.phone || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formValues.username || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formValues.password || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Position
          </label>
          <input
            type="text"
            name="position"
            value={formValues.position || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Property Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Property
          </label>
          <PropertyDropdown onSelectionChange={handlePropertyChange} />
        </div>

        {/* Property Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Property Address
          </label>
          <input
            type="text"
            name="propertyAddress"
            value={formValues.propertyAddress || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Property Code */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Property Code
          </label>
          <input
            type="text"
            name="propertyCode"
            value={formValues.propertyCode || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#686868] text-white font-semibold py-2 rounded-lg hover:bg-[#5c9c45] transition-colors"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default NewUserForm;
