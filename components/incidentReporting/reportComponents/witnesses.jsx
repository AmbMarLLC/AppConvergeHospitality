const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  // Remove non-digit characters
  const cleaned = ("" + phone).replace(/\D/g, "");
  // Match groups of numbers
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone; // fallback if not 10 digits
};

export default function Witnesses({
  witnessName1,
  witnessName2,
  witnessName3,
  witnessPhone1,
  witnessPhone2,
  witnessPhone3,
}) {
  const Field = ({ label, value }) => (
    <div>
      <p className="font-medium">{label}</p>
      <p className="ml-3">{value || "—"}</p>
    </div>
  );

  const witnesses = [
    { name: witnessName1, phone: witnessPhone1 },
    { name: witnessName2, phone: witnessPhone2 },
    { name: witnessName3, phone: witnessPhone3 },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Witnesses</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary className="cursor-pointer font-medium">
          Click here to expand
        </summary>

        <div className="mt-3 space-y-4">
          {witnesses.map((w, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-6 border-b border-gray-300 pb-2 last:border-none"
            >
              <Field label={`Witness ${i + 1} Name`} value={w.name} />
              <Field
                label={`Witness ${i + 1} Phone`}
                value={formatPhoneNumber(w.phone)}
              />
            </div>
          ))}
        </div>
      </details>
    </>
  );
}
