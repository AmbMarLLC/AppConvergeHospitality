"use client";

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

export default function PersonalInfo({
  affectedName = "N/A",
  affectedAddress = "N/A",
  affectedPhone = "N/A",
  affectedEmail = "N/A",
  affiliation = "",
  guest = false,
  employee = false,
  vendor = false,
}) {
  return (
    <>
      <h2 className="mb-4">Personal information about person injured:</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mb-1">Full name:</p>
          <p className="mb-1 ml-2">{affectedName}</p>
          <p className="mb-1">Address:</p>
          <p className="mb-1 ml-2">{affectedAddress}</p>
          <p className="mb-1">Affiliation:</p>
          <label className="pr-4">
            <input type="checkbox" checked={guest} disabled /> Guest
          </label>
          <label className="pr-4">
            <input type="checkbox" checked={employee} disabled /> Employee
          </label>
          <label className="pr-4">
            <input type="checkbox" checked={vendor} disabled /> Vendor
          </label>

          {guest && <p className="mt-1 ml-2">Room number: {affiliation}</p>}
          {employee && <p className="mt-1 ml-2">Employee ID: {affiliation}</p>}
          {vendor && <p className="mt-1 ml-2">Vendor company: {affiliation}</p>}
        </div>
        <div>
          <p className="mb-1">Phone number:</p>
          <p className="mb-1 ml-2">{formatPhoneNumber(affectedPhone)}</p>
          <p className="mb-1">Email:</p>
          <p className="ml-2">{affectedEmail}</p>
        </div>
      </div>
    </>
  );
}
