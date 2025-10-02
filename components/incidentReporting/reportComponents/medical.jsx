export default function Medical({
  physicianName,
  physicianAddress,
  DOB,
  shoes,
  training,
  daysOff,
  returnDate,
}) {
  const Field = ({ label, value }) => (
    <div className="mb-2">
      <p className="font-medium">{label}</p>
      <p className="ml-3">{value || "—"}</p>
    </div>
  );

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Medical</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary className="cursor-pointer font-medium">
          Click here to expand
        </summary>

        <div className="mt-3 space-y-3">
          <p>
            If seen by a physician, please provide the physician’s name and
            address:
          </p>
          <Field label="Physician Name" value={physicianName} />
          <Field label="Physician Address" value={physicianAddress} />

          <Field label="Date of Birth" value={DOB} />

          <Field
            label="If a slip or fall happened, what shoes were worn?"
            value={shoes}
          />

          <p>If associated/related, please fill out the fields below:</p>
          <Field label="Was training done on this topic?" value={training} />
          <Field label="How many days off are required?" value={daysOff} />
          <Field label="Return Date" value={returnDate} />
        </div>
      </details>
    </>
  );
}
