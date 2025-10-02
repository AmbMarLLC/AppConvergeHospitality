import { prisma } from "@lib/prisma";
import { put } from "@vercel/blob";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    const parsedData = JSON.parse(formData.get("data"));
    const {
      incidentDescription,
      emergencyServicesData,
      incidentTimeData,
      checkboxState,
      medicalData,
      peopleInvolvedData,
      personalInfoData,
      propertyDamageData,
      theftData,
      witnessesData,
      authorInformation,
      id,
    } = parsedData;

    let incidentReport;
    if (!id) {
      // create new report
      incidentReport = await prisma.incidentReport.create({
        data: {
          ...authorInformation,
          incidentDescription,
          ...emergencyServicesData,
          ...incidentTimeData,
          ...checkboxState,
          ...medicalData,
          ...peopleInvolvedData,
          ...personalInfoData,
          ...propertyDamageData,
          ...theftData,
          ...witnessesData,
        },
      });
    } else {
      // update existing report
      incidentReport = await prisma.incidentReport.update({
        where: { id },
        data: {
          ...authorInformation,
          incidentDescription,
          ...emergencyServicesData,
          ...incidentTimeData,
          ...checkboxState,
          ...medicalData,
          ...peopleInvolvedData,
          ...personalInfoData,
          ...propertyDamageData,
          ...theftData,
          ...witnessesData,
        },
      });
    }

    // Upload files to Vercel Blob
    const files = formData.getAll("uploadedFiles[]");
    for (const file of files) {
      const blob = await put(file.name, file, {
        access: "public",
        addRandomSuffix: true,
      });

      // blob contains both url (internal) and downloadUrl (public)
      console.log("Blob upload response:", blob);

      await prisma.fileData.create({
        data: {
          fileName: file.name,
          blobUrl: blob.url, // internal identifier for deletion
          fileUrl: blob.downloadUrl, // public URL for display/download
          incidentReportId: incidentReport.id,
        },
      });
    }

    return new Response(JSON.stringify(incidentReport), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating incident:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create incident" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// Retrieve all incidents
export async function GET() {
  const allIncidents = await prisma.incidentReport.findMany();
  return new Response(JSON.stringify(allIncidents), { status: 200 });
}
