import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 1️⃣ Resend Module setup
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

//     // 2️⃣ Send email
//     await resend.emails.send({
//       from: "All Nurses Home Health <no-reply@allnurseshomehealth.com>",
//       to: "referrals@allnurseshomehealth.com",
//       replyTo: "referrals@allnurseshomehealth.com",
//       // to: "muhammad.sohaib3837@gmail.com",
//       subject: `New Contact Form Submission - ${serviceType}`,
//       html: `
//         <h2>Contact Information</h2>
//         <p><b>Name:</b> ${firstName} ${lastName}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Preferred Contact:</b> ${
//           body.preferredContact || "Not specified"
//         }</p>

//         <h2>Service Request</h2>
//         <p><b>Service Type:</b> ${serviceType}</p>
//         <p><b>Urgency:</b> ${urgency || "routine"}</p>

//         <h2>Patient Information</h2>
//         <p><b>Patient Name:</b> ${patientName || "Not specified"}</p>
//         <p><b>Relationship:</b> ${relationship || "Not specified"}</p>

//         <h2>Message</h2>
//         <p>${message}</p>

//         <p><i>Submitted: ${new Date().toLocaleString()}</i></p>
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

// 2️⃣ Nodemailer setup using gmail
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
//       to: "muhammad.sohaib3837@gmail.com",
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

// Nodemailer using outlook account
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

    // 1️⃣ Business Email SMTP setup (Office 365/Outlook)
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.BUSINESS_EMAIL_USER, // referrals@allnurseshomehealth.com
        pass: process.env.BUSINESS_EMAIL_PASS, // your business email password
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    // 2️⃣ Send email to your business inbox
    const emailResult = await transporter.sendMail({
      from: `"Contact Form" <${process.env.BUSINESS_EMAIL_USER}>`, // Your business email as sender
      to: "referrals@allnurseshomehealth.com", // Your business email as receiver
      replyTo: email, // User's email for easy reply
      subject: `New Contact Form Submission - ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <!-- Contact Information -->
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Preferred Contact:</strong> ${
              body.preferredContact || "Not specified"
            }</p>
          </div>

          <!-- Service Request -->
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Service Request</h3>
            <p><strong>Service Type:</strong> <span style="background: #dbeafe; padding: 4px 8px; border-radius: 4px;">${serviceType}</span></p>
            <p><strong>Urgency:</strong> <span style="background: ${
              urgency === "urgent" ? "#fecaca" : "#dcfce7"
            }; padding: 4px 8px; border-radius: 4px;">${
        urgency || "routine"
      }</span></p>
          </div>

          <!-- Patient Information -->
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Patient Information</h3>
            <p><strong>Patient Name:</strong> ${
              patientName || "Not specified"
            }</p>
            <p><strong>Relationship:</strong> ${
              relationship || "Not specified"
            }</p>
          </div>

          <!-- Message -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e2e8f0; padding-top: 15px; margin-top: 30px;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              <strong>Submitted:</strong> ${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
            <p style="color: #64748b; font-size: 12px; margin: 5px 0 0 0;">
              This email was sent from your website contact form at allnurseshomehealth.com
            </p>
          </div>
        </div>
      `,
      // Also include plain text version for better compatibility
      text: `
      Contact Information:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Preferred Contact: ${body.preferredContact || "Not specified"}

      Service Request:
      Service Type: ${serviceType}
      Urgency: ${urgency || "routine"}

      Patient Information:
      Patient Name: ${patientName || "Not specified"}
      Relationship: ${relationship || "Not specified"}

      Message:
      ${message}

      Submitted: ${new Date().toLocaleString()}
      `,
    });

    console.log("Email sent successfully:", emailResult.messageId);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: emailResult.messageId,
    });
  } catch (error: any) {
    console.error("Error sending email:", error);

    // Return more detailed error info for debugging
    return NextResponse.json(
      {
        success: false,
        message: "Error sending email",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}
