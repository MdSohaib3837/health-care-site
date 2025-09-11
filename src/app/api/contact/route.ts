import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      message,
      urgency,
      patientName,
      relationship,
    } = body;

    // 2️⃣ Send email
    await resend.emails.send({
      from: "All Nurses Home Health <rebekah.m7388@gmail.com>",
      to: "referrals@allnurseshomehealth.com",
      // to: "muhammad.sohaib3837@gmail.com",
      subject: `New Contact Form Submission - ${serviceType}`,
      html: `
        <h2>Contact Information</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Preferred Contact:</b> ${
          body.preferredContact || "Not specified"
        }</p>

        <h2>Service Request</h2>
        <p><b>Service Type:</b> ${serviceType}</p>
        <p><b>Urgency:</b> ${urgency || "routine"}</p>

        <h2>Patient Information</h2>
        <p><b>Patient Name:</b> ${patientName || "Not specified"}</p>
        <p><b>Relationship:</b> ${relationship || "Not specified"}</p>

        <h2>Message</h2>
        <p>${message}</p>

        <p><i>Submitted: ${new Date().toLocaleString()}</i></p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       serviceType,
//       message,
//       urgency,
//       patientName,
//       relationship,
//     } = body;

//     // 1️⃣ Nodemailer setup
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // 2️⃣ Send email
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: "referrals@allnurseshomehealth.com",
//       // to: "muhammad.sohaib3837@gmail.com",
//       subject: `New Contact Form Submission - ${serviceType}`,
//       text: `
//       Contact Information:
//       Name: ${firstName} ${lastName}
//       Email: ${email}
//       Phone: ${phone}
//       Preferred Contact: ${body.preferredContact || "Not specified"}

//       Service Request:
//       Service Type: ${serviceType}
//       Urgency: ${urgency || "routine"}

//       Patient Information:
//       Patient Name: ${patientName || "Not specified"}
//       Relationship: ${relationship || "Not specified"}

//       Message:
//       ${message}

//       Submitted: ${new Date().toLocaleString()}
//       `,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Email sent successfully",
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { success: false, message: "Error sending email" },
//       { status: 500 }
//     );
//   }
// }
