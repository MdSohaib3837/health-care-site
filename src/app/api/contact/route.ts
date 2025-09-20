import { BANNED_DOMAINS } from "@/data/contants";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const emailDomain = email.split("@")[1]?.toLowerCase();

    if (emailDomain && BANNED_DOMAINS.includes(emailDomain)) {
      console.log(`🚫 Blocked disposable email: ${email}`);
      return NextResponse.json({
        success: true, // pretend success
        message: "Email skipped (disposable domain)",
        messageId: null,
      });
    }

    // 1️⃣ Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2️⃣ Send email FROM gmail TO business email
    const emailResult = await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Use the same email as auth
      to: "referrals@allnurseshomehealth.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${serviceType}`,

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

    console.log("✅ Email sent successfully:", emailResult.messageId);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: emailResult.messageId,
    });
  } catch (error: any) {
    console.error("❌ Error sending email:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error sending email",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
