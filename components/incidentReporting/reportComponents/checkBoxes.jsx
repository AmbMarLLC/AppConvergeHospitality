"use client";

import { useState, useEffect } from "react";

export default function CheckboxForm(props) {
  const {
    theft,
    propertyDamage,
    injury,
    declined,
    firstAid,
    medicalTreatment,
    emergencyTreatment,
  } = props;

  return (
    <>
      <h3>Type of incident:</h3>
      <label className="pr-4">
        <input type="checkbox" checked={theft} disabled /> Theft
      </label>
      <label className="pr-4">
        <input type="checkbox" checked={propertyDamage} disabled /> Property
        Damage
      </label>
      <label className="pr-4">
        <input type="checkbox" checked={injury} disabled /> Injury
      </label>
      <h3>Was medical treatment provided?</h3>
      <label className="pr-4">
        <input type="checkbox" checked={declined} disabled /> Declined
      </label>
      <label className="pr-4">
        <input type="checkbox" checked={firstAid} disabled /> First Aid
      </label>
      <label className="pr-4">
        <input type="checkbox" checked={medicalTreatment} disabled /> Medical
        Treatment
      </label>
      <label className="pr-4">
        <input type="checkbox" checked={emergencyTreatment} disabled />{" "}
        Emergency Treatment
      </label>
    </>
  );
}
