import { google } from "googleapis";
import cloudinary from "@/lib/cloudinary";
import { createId } from "@paralleldrive/cuid2";
import { Readable } from "stream"; // used for piping buffer

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // pull values, coercing to string and validating
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const linkedin = String(formData.get("linkedin") ?? "").trim();
    const experience = String(formData.get("experience") ?? "").trim();
    const resumeEntry = formData.get("resume");
    const resume = resumeEntry instanceof File ? resumeEntry : null;

    if (!firstName || !lastName || !email) {
      return new Response(
        JSON.stringify({ message: "First name, last name and email are required" }),
        { status: 400 }
      );
    }

    if (!resume) {
      return new Response(JSON.stringify({ message: "Resume is required" }), { status: 400 });
    }

    // ✅ Upload file to Cloudinary
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const publicId = `${firstName}_${lastName}_${createId()}`;
    // Cloudinary upload returns result or error via callback; wrap into a promise
    const resumeUpload = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw",
          folder: "applicants",
          public_id: publicId,
          overwrite: true,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve(result);
          } else {
            reject(new Error("No result returned from cloudinary"));
          }
        }
      );
      Readable.from(buffer).pipe(stream);
    });

    const resumeUrl = resumeUpload?.secure_url;
    if (!resumeUrl) {
      throw new Error("Cloudinary did not return a resume URL");
    }

    // make sure required env vars are present
    const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;
    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error("Missing Google Sheets environment variables");
      return new Response(JSON.stringify({ message: "Server configuration error" }), { status: 500 });
    }

    // 🔐 Google Sheets Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 📊 Save applicant data + resume URL in Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Applicants!A:H",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            email,
            phone,
            linkedin,
            experience,
            resumeUrl,
            new Date().toISOString(),
          ],
        ],
      },
    });

    return new Response(
      JSON.stringify({ message: "Application submitted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error submitting application" }), { status: 500 });
  }
}