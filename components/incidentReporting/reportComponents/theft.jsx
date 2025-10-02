"use client";

export default function Theft({
  stolenItem,
  stolenItemValue,
  compensation,
  compensationYes,
  compensationNo,
}) {
  const Field = ({ label, value }) => (
    <div className="mb-2">
      <p className="font-medium">{label}</p>
      <p className="ml-3">{value || "—"}</p>
    </div>
  );

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Theft</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary className="cursor-pointer font-medium">
          Click here to expand
        </summary>

        <div className="mt-3 space-y-3">
          <Field label="Stolen items" value={stolenItem} />
          <Field label="Value of stolen items" value={stolenItemValue} />

          <div className="mb-2">
            <p className="font-medium">Was compensation given?</p>
            <div className="ml-3 flex gap-4">
              <label className="flex items-center gap-1">
                <input type="checkbox" checked={compensationYes} disabled /> Yes
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" checked={compensationNo} disabled /> No
              </label>
            </div>
          </div>

          {compensationYes && (
            <Field label="Type of compensation given" value={compensation} />
          )}
        </div>
      </details>
    </>
  );
}
