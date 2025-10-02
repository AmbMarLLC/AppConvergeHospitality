export default function TimeAndDate(props) {
  const { incidentTime, incidentDate } = props;

  const formatTime = (time) => {
    if (!time) return "";
    let [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // convert 0 -> 12
    return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <>
      <h2>Time and Date</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mb-1">Time of the incident:</p>
          <p className="ml-2">{formatTime(incidentTime)}</p>
        </div>
        <div>
          <p className="mb-1">Date of the incident:</p>
          <p className="ml-2">{incidentDate}</p>
        </div>
      </div>
    </>
  );
}
