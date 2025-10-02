import React from "react";
import IncidentReport from "@components/incidentReporting/incidentReport";

export default async function Page({ params }) {
  const { id } = await params;

  return (
    <>
      <IncidentReport id={id} />
    </>
  );
}
