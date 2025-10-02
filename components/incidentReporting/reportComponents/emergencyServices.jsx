"use client";

export default function EmergencyServices({
  emergencyServicesCYes,
  emergencyServicesCNo,
  emergencyServices,
}) {
  const Field = ({ label, value }) => (
    <div className="mb-2">
      <p className="font-medium">{label}</p>
      <p className="ml-3">{value || "—"}</p>
    </div>
  );

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Emergency Services</h2>

      <div className="mt-3 space-y-3">
        <div className="mb-2">
          <p className="font-medium">Was Emergency Services called?</p>
          <div className="ml-3 flex gap-4">
            <label className="flex items-center gap-1">
              <input type="checkbox" checked={emergencyServicesCYes} disabled />{" "}
              Yes
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" checked={emergencyServicesCNo} disabled />{" "}
              No
            </label>
          </div>
        </div>

        {emergencyServicesCYes && (
          <Field
            label="What type of Emergency Service was called?"
            value={emergencyServices}
          />
        )}
      </div>
    </>
  );
}
