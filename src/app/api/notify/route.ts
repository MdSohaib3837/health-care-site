import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "referrals@allnurseshomehealth.com",
      subject: "New Subscription Request",
      text: `A user subscribed with email: ${email}`,
    });

    return NextResponse.json({
      success: true,
      message: "Subscription successful",
    });
  } catch (error) {
    console.error("Notify API error:", error);
    return NextResponse.json(
      { success: false, message: "Error subscribing" },
      { status: 500 }
    );
  }
}
