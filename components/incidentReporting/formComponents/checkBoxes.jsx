"use client";

export default function CheckboxForm({ checkboxState, updateCheckboxes }) {
  const handleChange = (event) => {
    const { id, checked } = event.target;
    updateCheckboxes((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <>
      <div>
        <h3>Type of incident (Select all that apply):</h3>
        <label className="pr-4">
          <input
            type="checkbox"
            id="theft"
            checked={checkboxState.theft}
            onChange={handleChange}
          />{" "}
          Theft
        </label>
        <label className="pr-4">
          <input
            type="checkbox"
            id="propertyDamage"
            checked={checkboxState.propertyDamage}
            onChange={handleChange}
          />{" "}
          Property Damage
        </label>
        <label>
          <input
            type="checkbox"
            id="injury"
            checked={checkboxState.injury}
            onChange={handleChange}
          />{" "}
          Injury
        </label>
      </div>
      <div>
        <h3>Medical treatment provided:</h3>
        <label className="pr-4">
          <input
            type="checkbox"
            id="declined"
            checked={checkboxState.declined}
            onChange={handleChange}
          />{" "}
          Declined
        </label>
        <label className="pr-4">
          <input
            type="checkbox"
            id="firstaid"
            checked={checkboxState.firstaid}
            onChange={handleChange}
          />{" "}
          First Aid
        </label>
        <label className="pr-4">
          <input
            type="checkbox"
            id="medicalTreatment"
            checked={checkboxState.medicalTreatment}
            onChange={handleChange}
          />{" "}
          Medical Treatment
        </label>
        <label className="pr-4">
          <input
            type="checkbox"
            id="emergencyTreatment"
            checked={checkboxState.emergencyTreatment}
            onChange={handleChange}
          />{" "}
          Emergency Treatment
        </label>
      </div>
    </>
  );
}
