import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import IncidentCard from "@components/incidentReporting/incidentCard";
import Menu from "@components/menu";

const NormalUserDashboard = () => {
  const { data: session, status } = useSession();
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const performFetch = async () => {
      const response = await fetch("/api/incidents");
      const data = await response.json();
      setIncidents(data);
    };

    performFetch();
  }, []);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (!session) {
    return <h1>Not authenticated</h1>;
  }

  const incident = incidents.filter(
    (incident) => incident.authorProperty === session.user.property
  );

  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:gap-6">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="lg:sticky lg:top-20">
            <Menu />
          </div>
        </div>
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div key={session.user.id}>
            <div className="pb-4 space-y-4">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Welcome {session.user.name}
              </h1>
              <h2 className="text-base sm:text-lg text-gray-700">
                {session.user.position} at {session.user.property}
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Here you can see all the incident reports created for your
                property.
              </p>
              <hr className="my-4 lg:my-6" />
            </div>
            <div className="space-y-4">
              {incident.map((incident) => (
                <IncidentCard
                  key={incident.id}
                  description={incident.incidentDescription}
                  id={incident.id}
                  author={incident.author}
                  authorPosition={incident.authorPosition}
                  authorProperty={incident.authorProperty}
                  incidentTime={incident.incidentTime}
                  incidentDate={incident.incidentDate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NormalUserDashboard };
