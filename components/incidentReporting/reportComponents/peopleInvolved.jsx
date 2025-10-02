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

export default function PeopleInvolved({
  otherName1,
  otherName2,
  otherName3,
  otherPhone1,
  otherPhone2,
  otherPhone3,
}) {
  const Field = ({ label, value }) => (
    <div>
      <p className="font-medium">{label}</p>
      <p className="ml-3">{value || "—"}</p>
    </div>
  );

  const people = [
    { name: otherName1, phone: otherPhone1 },
    { name: otherName2, phone: otherPhone2 },
    { name: otherName3, phone: otherPhone3 },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">
        Other People Involved in the Incident
      </h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary className="cursor-pointer font-medium">
          Click here to expand
        </summary>

        <div className="mt-3 space-y-4">
          {people.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-6 border-b border-gray-300 pb-2 last:border-none"
            >
              <Field label={`Person ${i + 1} Name`} value={p.name} />
              <Field
                label={`Person ${i + 1} Phone`}
                value={formatPhoneNumber(p.phone)}
              />
            </div>
          ))}
        </div>
      </details>
    </>
  );
}
