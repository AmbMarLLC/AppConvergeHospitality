import { useState, useEffect } from "react";
import { useSession } from "@node_modules/next-auth/react";

import IncidentCard from "@components/incidentReporting/incidentCard";
import PropertyDropdown from "@components/PropertyDropdown";
import Menu from "@components/menu";

const CorporateUserDashboard = () => {
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

  const [selectedOption, setSelectedOption] = useState("all");

  const onSelectionChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (!session) {
    return <h1>Not authenticated</h1>;
  }

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
                {session.user.position}
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                Easily access and monitor incident reports across all
                properties. Use the dropdown to filter reports by property.
              </p>

              <PropertyDropdown onSelectionChange={onSelectionChange} />
            </div>

            <hr className="my-4 lg:my-6" />

            <div className="space-y-4">
              {selectedOption === "all"
                ? incidents.map((incident) => (
                    <IncidentCard
                      key={incident.id}
                      description={incident.incidentDescription}
                      id={incident.id}
                      author={incident.author}
                      authorPosition={incident.authorPosition}
                      authorProperty={incident.authorProperty}
                      authorPhone={incident.authorPhone}
                      incidentTime={incident.incidentTime}
                      incidentDate={incident.incidentDate}
                    />
                  ))
                : incidents
                    .filter(
                      (incident) => incident.authorProperty === selectedOption
                    )
                    .map((incident) => (
                      <IncidentCard
                        key={incident.id}
                        description={incident.incidentDescription}
                        id={incident.id}
                        author={incident.author}
                        authorPosition={incident.authorPosition}
                        authorProperty={incident.authorProperty}
                        authorPhone={incident.authorPhone}
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

export { CorporateUserDashboard };
