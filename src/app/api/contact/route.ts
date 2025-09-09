import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

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

    // 1️⃣ Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2️⃣ Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "rebekah.m7388@gmail.com",
      //   to: "muhammad.sohaib3837@gmail.com",
      subject: `New Contact Form Submission - ${serviceType}`,
      text: `
      Contact Information:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
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

    // 3️⃣ Optional: Save to Supabase
    if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
      const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
      );

      await supabase.from("contacts").insert([
        {
          firstName,
          lastName,
          email,
          phone,
          serviceType,
          message,
          urgency,
          patientName,
          relationship,
        },
      ]);
    }

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
