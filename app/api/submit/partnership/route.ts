import { google } from "googleapis";

type PartnershipRequestBody = {
  companyName: string;
  name: string;
  email: string;
  partnershipType: string;
  partnershipIdea: string;
  linkedinProfile: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as PartnershipRequestBody;
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Partnership!A:G", // make sure this tab exists
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            body.companyName,
            body.name,
            body.email,
            body.partnershipType,
            body.partnershipIdea,
            new Date().toISOString(),
            body.linkedinProfile,
          ],
        ],
      },
    });
    return new Response(JSON.stringify({ message: "Partnership request submitted successfully" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Error submitting partnership request" }), { status: 500 });
  }
}
