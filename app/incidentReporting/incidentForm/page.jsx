"use client";

import React, { Suspense } from "react";
import IncidentForm from "@components/incidentReporting/incidentForm";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IncidentForm />
    </Suspense>
  );
};

export default page;
