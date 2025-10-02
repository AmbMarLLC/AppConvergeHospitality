// export async function GET(request, { params }) {
//   const { idFromUrl } = await params;

//   const incident = await prisma.incidentReport.findUnique({
//     where: {
//       id: idFromUrl,
//     },
//     include: { fileData: true },
//   });

//   console.log("Fetched Incident:", incident);
//   const files = incident.fileData || [];
//   return new Response(JSON.stringify(incident), { status: 200 });
// }

import { prisma } from "@/lib/prisma"; // adjust import if needed

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const incident = await prisma.incidentReport.findUnique({
      where: { id },
      include: { fileData: true },
    });

    if (!incident) {
      return new Response(JSON.stringify({ error: "Incident not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(incident), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API error /incidents/[id]:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
