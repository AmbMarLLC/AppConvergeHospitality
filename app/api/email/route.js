import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const {
    propertyEmail,
    author,
    authorEmail,
    authorPhone,
    authorPosition,
    authorProperty,
    incidentTime,
    incidentDate,
    incidentDescription,
  } = body;

  console.log(propertyEmail);

  let subject = "";
  let html = "";

  subject = "New Incident Report by " + author;
  html = `
    <p>A new incident report has been submitted by ${author}, ${authorPosition} of the ${authorProperty}.</p>
    <hr>
    <p>Contact information:</p>
    <p><strong>Email:</strong> ${authorEmail}</p>
    <p><strong>Phone:</strong> ${authorPhone}</p>
    <hr>
    <p>The inciden happend on the ${incidentDate} at ${incidentTime}.</p>
    <hr>
    <p>Incident Description:</p>
    <p>${incidentDescription}</p>
    `;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [propertyEmail],
      subject,
      html,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
