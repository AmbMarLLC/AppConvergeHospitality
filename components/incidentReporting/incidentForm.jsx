"use client";

import { Select } from "antd";
import { useState, useEffect } from "react";
import { useSession } from "@node_modules/next-auth/react";
import { useRouter } from "next/navigation";

import propertiesData from "/data/properties.json";
import { useSearchParams } from "next/navigation";

import Theft from "./formComponents/theft";
import Medical from "./formComponents/medical";
import Witnesses from "./formComponents/witnesses";
import FileUpload from "./formComponents/fileupload";
import CheckboxForm from "./formComponents/checkBoxes";
import TimeAndDate from "./formComponents/timeAndDate";
import PersonalInfo from "./formComponents/personalInfo";
import PropertyDamage from "./formComponents/propertyDamage";
import PeopleInvolved from "./formComponents/peopleInvolved";
import EmergencyServices from "./formComponents/emergencyServices";
import EditFileDownloads from "./formComponents/editFileUpload";

const IncidentForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [incidentData, setIncidentData] = useState(null);

  // Fetch incident data if an ID is provided
  useEffect(() => {
    const performFetch = async () => {
      const response = await fetch(`/api/incidents/${id}`);
      const data = await response.json();
      setIncidentData(data);
      setCheckboxState({
        theft: data.theft,
        propertyDamage: data.propertyDamage,
        injury: data.injury,
        declined: data.declined,
        firstaid: data.firstaid,
        medicalTreatment: data.medicalTreatment,
        emergencyTreatment: data.emergencyTreatment,
      });
      setPersonalInfoData({
        affectedName: data.affectedName,
        affectedAddress: data.affectedAddress,
        affectedPhone: data.affectedPhone,
        affectedEmail: data.affectedEmail,
        affiliation: data.affiliation,
        guest: data.guest,
        employee: data.employee,
        vendor: data.vendor,
      });
      setTimeAndDateData({
        incidentTime: data.incidentTime,
        incidentDate: data.incidentDate,
      });
      setEmergencyServicesData({
        emergencyServicesCYes: data.emergencyServicesCYes,
        emergencyServicesCNo: data.emergencyServicesCNo,
        emergencyServices: data.emergencyServices,
      });
      setPeopleInvolvedData({
        otherName1: data.otherName1,
        otherName2: data.otherName2,
        otherName3: data.otherName3,
        otherPhone1: data.otherPhone1,
        otherPhone2: data.otherPhone2,
        otherPhone3: data.otherPhone3,
      });
      setWitnessesData({
        witnessName1: data.witnessName1,
        witnessName2: data.witnessName2,
        witnessName3: data.witnessName3,
        witnessPhone1: data.witnessPhone1,
        witnessPhone2: data.witnessPhone2,
        witnessPhone3: data.witnessPhone3,
      });
      setTheftData({
        stolenItem: data.stolenItem,
        stolenItemValue: data.stolenItemValue,
        compensation: data.compensation,
        compensationYes: data.compensationYes,
        compensationNo: data.compensationNo,
      });
      setPropertyDamageData({
        weather: data.weather,
        guestImpact: data.guestImpact,
        restorationCompany: data.restorationCompany,
        photosYes: data.photosYes,
        photosNo: data.photosNo,
      });
      setMedicalData({
        physicianName: data.physicianName,
        physicianAddress: data.physicianAddress,
        DOB: data.DOB,
        shoes: data.shoes,
        training: data.training,
        daysOff: data.daysOff,
        returnDate: data.returnDate,
      });
      setAuthorInformation({
        author: data.author,
        authorEmail: data.authorEmail,
        authorPhone: data.authorPhone,
        authorPosition: data.authorPosition,
        authorProperty: data.authorProperty,
      });
      setIncidentDescription(data.incidentDescription || "");
    };

    if (id) {
      performFetch();
    }
  }, [id]);

  const { data: session } = useSession();
  const router = useRouter();

  const [authorInformation, setAuthorInformation] = useState({
    author: "",
    authorEmail: "",
    authorPhone: "",
    authorPosition: "",
    authorProperty: "",
  });

  const [checkboxState, setCheckboxState] = useState({
    theft: false,
    propertyDamage: false,
    injury: false,
    declined: false,
    firstaid: false,
    medicalTreatment: false,
    emergencyTreatment: false,
  });

  const [personalInfoData, setPersonalInfoData] = useState({
    affectedName: "",
    affectedAddress: "",
    affectedPhone: "",
    affectedEmail: "",
    affiliation: "",
    guest: false,
    employee: false,
    vendor: false,
  });

  const [incidentTimeData, setTimeAndDateData] = useState({
    incidentTime: "",
    incidentDate: "",
  });

  const [peopleInvolvedData, setPeopleInvolvedData] = useState({
    otherName1: "",
    otherName2: "",
    otherName3: "",
    otherPhone1: "",
    otherPhone2: "",
    otherPhone3: "",
  });

  const [witnessesData, setWitnessesData] = useState({
    witnessName1: "",
    witnessName2: "",
    witnessName3: "",
    witnessPhone1: "",
    witnessPhone2: "",
    witnessPhone3: "",
  });

  const [emergencyServicesData, setEmergencyServicesData] = useState({
    emergencyServicesCYes: false,
    emergencyServicesCNo: false,
    emergencyServices: "",
  });

  const [incidentDescription, setIncidentDescription] = useState("");

  const [theftData, setTheftData] = useState({
    stolenItem: "",
    stolenItemValue: "",
    compensation: "",
    compensationYes: false,
    compensationNo: false,
  });

  const [propertyDamageData, setPropertyDamageData] = useState({
    weather: "",
    guestImpact: "",
    restorationCompany: "",
    photosYes: false,
    photosNo: false,
  });

  const [medicalData, setMedicalData] = useState({
    physicianName: "",
    physicianAddress: "",
    DOB: "",
    shoes: "",
    training: "",
    daysOff: "",
    returnDate: "",
  });

  useEffect(() => {
    if (session && !id) {
      setAuthorInformation({
        author: session?.user?.name,
        authorEmail: session?.user?.email,
        authorPhone: session?.user?.phone,
        authorPosition: session?.user?.position,
        authorProperty: session?.user?.property,
      });
    }
  }, [session, id]);

  useEffect(() => {
    const performFetch = async () => {
      const response = await fetch("/api/incidents");
      const data = await response.json();
      const dataString = JSON.stringify(data);
    };

    performFetch();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const allIncidentData = {
      checkboxState,
      personalInfoData,
      incidentTimeData,
      peopleInvolvedData,
      witnessesData,
      emergencyServicesData,
      incidentDescription,
      theftData,
      propertyDamageData,
      medicalData,
      authorInformation,
      id,
    };

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("data", JSON.stringify(allIncidentData));
      for (const [key, value] of formData.entries()) {
        console.log(`Form Data Entry - ${key}: ${value}`);
      }
      // get email from the property data file for the selected property
      const propertyEmail = propertiesData.Properties.find(
        (property) => property.slug === authorInformation.authorProperty
      )?.email;

      // Only send email if the property has an email address
      if (propertyEmail) {
        // Send email via the API route
        const res = await fetch("/api/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            propertyEmail: propertyEmail,
            author: authorInformation.author,
            authorEmail: authorInformation.authorEmail,
            authorPhone: authorInformation.authorPhone,
            authorPosition: authorInformation.authorPosition,
            authorProperty: authorInformation.authorProperty,
            incidentTime: incidentTimeData.incidentTime,
            incidentDate: incidentTimeData.incidentDate,
            incidentDescription,
          }),
        });

        const result = await res.json();
        if (!result.success) {
          alert(
            "Something went wrong with email notification. Please try again later."
          );
          return;
        }

        alert("Your incident has been submitted and email notification sent!");
      } else {
        // No email address for this property, just confirm submission
        alert("Your incident has been submitted successfully!");
      }

      const response = await fetch("/api/incidents", {
        method: "POST",
        body: formData,
      });

      await response.json();

      // Redirect to dashboard after successful submission
      router.push("/incidentReporting/dashboard");
    } catch (error) {
      console.error("Submit error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  if (session === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4">
      <div
        className="w-full max-w-4xl p-1 rounded-2xl"
        style={{
          background: "linear-gradient(to bottom, #686868, #5c9c45)",
        }}
      >
        <form
          className="bg-white shadow-lg rounded-xl p-8"
          onSubmit={handleSubmit}
        >
          {id && (
            <p className="text-center text-gray-700">
              You are now editing incident report ID:
              <br />
              {id}
            </p>
          )}
          <h1>Incident Report Form</h1>
          <hr />
          {session?.user?.property === "Corporate Office" && (
            <>
              <div className="my-4">
                <h3>
                  Choose the property where the incident happened from the
                  dropdown.
                </h3>
                <Select
                  className="w-full"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  // Set value to authorInformation.authorProperty (from DB if editing)
                  value={authorInformation.authorProperty || "corporate"}
                  options={[
                    ...propertiesData.Properties.map((property) => ({
                      value: property.slug,
                      label: property.location,
                    })),
                  ]}
                  onChange={(value) =>
                    setAuthorInformation((prev) => ({
                      ...prev,
                      authorProperty: value,
                    }))
                  }
                />
              </div>
              <hr />
            </>
          )}
          <div className="my-4">
            <CheckboxForm
              checkboxState={checkboxState}
              updateCheckboxes={setCheckboxState}
            />
          </div>
          <hr />
          <div className="my-4">
            <PersonalInfo
              personalInfoData={personalInfoData}
              updatePersonalInfo={setPersonalInfoData}
              updateCheckboxState={setCheckboxState}
            />
          </div>
          <hr />
          <div className="my-4">
            <TimeAndDate
              incidentTimeData={incidentTimeData}
              updateTimeAndDate={setTimeAndDateData}
            />
          </div>
          <hr />
          <div className="my-4">
            <EmergencyServices
              emergencyServicesData={emergencyServicesData}
              updateEmergencyServices={setEmergencyServicesData}
            />
          </div>
          <hr />
          <h2>
            Incident Description<sup>*</sup>
          </h2>
          <div className="mb-4">
            <textarea
              required
              id="incidentDescription"
              name="incidentDescription"
              value={incidentDescription}
              placeholder="Please describe the incident in detail."
              onChange={(e) => setIncidentDescription(e.target.value)}
              className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none resize-none h-80"
            />
          </div>
          <div className="my-4">
            <PeopleInvolved
              peopleInvolvedData={peopleInvolvedData}
              updatePeopleInvolved={setPeopleInvolvedData}
            />
          </div>
          <div className="my-4">
            <Witnesses
              witnessData={witnessesData}
              updateWitnesses={setWitnessesData}
            />
          </div>
          <div className="my-4">
            <Theft theftData={theftData} updateTheft={setTheftData} />
          </div>
          <div className="my-4">
            <PropertyDamage
              propertyDamageData={propertyDamageData}
              updatePropertyDamage={setPropertyDamageData}
            />
          </div>
          <div className="my-4">
            <Medical medicalData={medicalData} updateMedical={setMedicalData} />
          </div>
          {!id && (
            <div className="my-4">
              <FileUpload />
            </div>
          )}
          {incidentData?.fileData && (
            <>
              <div className="mt-4">
                <FileUpload />
              </div>
              <EditFileDownloads fileData={incidentData.fileData} />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-[#686868] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#5c9c45]"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncidentForm;
