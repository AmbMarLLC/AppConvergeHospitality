import React from "react";
import { Select } from "antd";
import propertiesData from "/data/properties.json";

const PropertyDropdown = ({ onSelectionChange }) => {
  return (
    <div>
      <Select
        className="w-full"
        showSearch
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        defaultValue={{
          value: "all",
          label: "All Properties",
        }}
        options={[
          { value: "all", label: "All Properties" },
          ...propertiesData.Properties.map((property) => ({
            value: property.slug,
            label: property.location,
          })),
        ]}
        onChange={onSelectionChange}
      />
    </div>
  );
};

export default PropertyDropdown;
