"use client";

export default function PropertyDamage({
  weather,
  guestImpact,
  restorationCompany,
  photosYes,
  photosNo,
}) {
  const Field = ({ label, value }) => (
    <div className="mb-2">
      <p className="font-medium">{label}</p>
      <p className="ml-3">{value || "—"}</p>
    </div>
  );

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Property Damage</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary className="cursor-pointer font-medium">
          Click here to expand
        </summary>

        <div className="mt-3 space-y-3">
          <Field
            label="What was the weather condition during the incident?"
            value={weather}
          />
          <Field label="What was the guest impact?" value={guestImpact} />
          <Field
            label="What restoration company was contacted?"
            value={restorationCompany}
          />

          <div className="mb-2">
            <p className="font-medium">Were photos taken of the damage?</p>
            <div className="ml-3 flex gap-4">
              <label className="flex items-center gap-1">
                <input type="checkbox" checked={photosYes} disabled /> Yes
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" checked={photosNo} disabled /> No
              </label>
            </div>
          </div>
        </div>
      </details>
    </>
  );
}
