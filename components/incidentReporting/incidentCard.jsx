import React from "react";
import Link from "next/link";

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

const formatTime = (time) => {
  if (!time) return "";
  let [hours, minutes] = time.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0 -> 12
  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};

const IncidentCard = (props) => {
  const {
    description,
    id,
    author,
    authorPosition,
    authorProperty,
    incidentTime,
    incidentDate,
    authorPhone,
  } = props;

  return (
    <Link href={`/incidentReporting/incidentReport/${id}`}>
      <div className="bg-slate-200 p-4 sm:p-5 rounded-xl w-full mx-auto cursor-pointer hover:shadow-lg hover:bg-slate-300 transition-all duration-200 ease-in-out mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b space-y-2 sm:space-y-0">
          <div className="flex flex-col">
            <p className="text-sm sm:text-base">
              <strong>Incident ID:</strong> {id}
            </p>
            <p className="text-gray-700 text-xs sm:text-sm">
              <strong>Property: {authorProperty}</strong>
            </p>
          </div>
          <div className="flex flex-col sm:ml-6 sm:text-right text-xs sm:text-sm text-gray-600">
            <p>
              <strong>Incident Date:</strong> {incidentDate}
            </p>
            <p>
              <strong>Time:</strong> {formatTime(incidentTime)}
            </p>
          </div>
        </div>

        <div className="mt-3 text-xs sm:text-sm text-gray-700 space-y-1">
          <p className="font-semibold">Created by: {author}</p>
          <p>
            {authorPosition} at {authorProperty}
          </p>
          {authorPhone && <p>Phone number: {formatPhoneNumber(authorPhone)}</p>}
        </div>

        <div className="mt-4">
          <p className="text-gray-800 font-semibold text-sm sm:text-base">
            Incident Description:
          </p>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mt-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default IncidentCard;
