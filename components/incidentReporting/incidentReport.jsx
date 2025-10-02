"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Theft from "./reportComponents/theft";
import Medical from "./reportComponents/medical";
import Witnesses from "./reportComponents/witnesses";
import CheckboxForm from "./reportComponents/checkBoxes";
import TimeAndDate from "./reportComponents/timeAndDate";
import PropertyDamage from "./reportComponents/propertyDamage";
import PeopleInvolved from "./reportComponents/peopleInvolved";
import PersonalInfo from "./reportComponents/personalInfo";
import EmergencyServices from "./reportComponents/emergencyServices";
import Files from "./reportComponents/files";

const IncidentReport = (props) => {
  const { id } = props;

  const [incidentData, setIncidentData] = useState(null);

  useEffect(() => {
    const performFetch = async () => {
      const response = await fetch(`/api/incidents/${id}`);
      const data = await response.json();
      setIncidentData(data);
    };

    performFetch();
  }, []);

  if (incidentData == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4">
      <div
        className="w-full max-w-4xl p-1 rounded-2xl"
        style={{ background: "linear-gradient(to bottom, #686868, #5c9c45)" }}
      >
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h1>Incident Report</h1>
            <Link
              href={`/incidentReporting/incidentForm?id=${incidentData.id}`}
              className="inline-block bg-[#686868] text-white px-4 py-2 rounded-lg hover:bg-[#5c9c45]"
            >
              Edit report
            </Link>
          </div>
          <p>
            <strong>Report created by:</strong> {incidentData.author}
          </p>
          <p>
            <strong>Property:</strong> {incidentData.authorProperty}
          </p>
          <p>
            <strong>Incident ID:</strong> {incidentData.id}
          </p>
          <hr />

          <CheckboxForm
            theft={incidentData.theft}
            propertyDamage={incidentData.propertyDamage}
            injury={incidentData.injury}
            declined={incidentData.declined}
            firstAid={incidentData.firstAid}
            medicalTreatment={incidentData.medicalTreatment}
            emergencyTreatment={incidentData.emergencyTreatment}
          />
          <br />
          <hr />

          <PersonalInfo
            affectedName={incidentData.affectedName}
            affectedAddress={incidentData.affectedAddress}
            affectedPhone={incidentData.affectedPhone}
            affectedEmail={incidentData.affectedEmail}
            affiliation={incidentData.affiliation}
            guest={incidentData.guest}
            employee={incidentData.employee}
            vendor={incidentData.vendor}
          />
          <br />
          <hr />

          <TimeAndDate
            incidentTime={incidentData.incidentTime}
            incidentDate={incidentData.incidentDate}
          />
          <br />
          <hr />

          <EmergencyServices
            emergencyServicesCYes={incidentData.emergencyServicesCYes}
            emergencyServicesCNo={incidentData.emergencyServicesCNo}
            emergencyServices={incidentData.emergencyServices}
          />
          <br />
          <hr />

          <h2>Incident Description</h2>
          <p className="ml-2">{incidentData.incidentDescription}</p>
          <br />
          <hr />

          <PeopleInvolved
            otherName1={incidentData.otherName1}
            otherName2={incidentData.otherName2}
            otherName3={incidentData.otherName3}
            otherPhone1={incidentData.otherPhone1}
            otherPhone2={incidentData.otherPhone2}
            otherPhone3={incidentData.otherPhone3}
          />

          <Witnesses
            witnessName1={incidentData.witnessName1}
            witnessName2={incidentData.witnessName2}
            witnessName3={incidentData.witnessName3}
            witnessPhone1={incidentData.witnessPhone1}
            witnessPhone2={incidentData.witnessPhone2}
            witnessPhone3={incidentData.witnessPhone3}
          />

          <Theft
            stolenItem={incidentData.stolenItem}
            stolenItemValue={incidentData.stolenItemValue}
            compensation={incidentData.compensation}
            compensationYes={incidentData.compensationYes}
            compensationNo={incidentData.compensationNo}
          />

          <PropertyDamage
            weather={incidentData.weather}
            guestImpact={incidentData.guestImpact}
            restorationCompany={incidentData.restorationCompany}
            photosYes={incidentData.photosYes}
            photosNo={incidentData.photosNo}
          />

          <Medical
            physicianName={incidentData.physicianName}
            physicianAddress={incidentData.physicianAddress}
            DOB={incidentData.DOB}
            shoes={incidentData.shoes}
            training={incidentData.training}
            daysOff={incidentData.daysOff}
            returnDate={incidentData.return}
          />

          <Files fileData={incidentData.fileData} />
        </div>
      </div>
    </div>
  );
};

export default IncidentReport;
