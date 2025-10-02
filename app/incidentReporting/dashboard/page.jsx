"use client";

import React from "react";

import { NormalUserDashboard } from "./NormalUserDashboard";
import { CorporateUserDashboard } from "./CorporateUserDashboard";
import { useSession } from "@node_modules/next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (session === undefined) {
    return <h1>Loading...</h1>;
  }

  if (session === null) {
    return <h1>Access Denied</h1>;
  }

  return (
    <>
      {session.user.property === "Corporate Office" ? (
        <CorporateUserDashboard />
      ) : (
        <NormalUserDashboard />
      )}
    </>
  );
};

export default Dashboard;
