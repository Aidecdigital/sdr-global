import { google } from "googleapis";

type HireRequestBody = {
  companyName: string;
  name: string;
  email: string;
  companySize: string;
  message: string;
  role: string;
  linkedinProfile: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as HireRequestBody;

    // Basic validation
    if (!body.companyName || !body.name || !body.email) {
      return new Response(JSON.stringify({ message: "Company name, name, and email are required" }), {
        status: 400,
      });
    }

    // make sure required env vars are present
    const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;
    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Missing Google Sheets environment variables");
      return new Response(JSON.stringify({ message: "Server configuration error" }), { status: 500 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Company!A:H",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            body.companyName,
            body.name,
            body.email,
            body.companySize,
            body.message,
            body.role,
            new Date().toISOString(),
            body.linkedinProfile,
          ],
        ],
      },
    });
    return new Response(JSON.stringify({ message: "Form submitted successfully" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Error submitting form" }), { status: 500 });
  }
}
