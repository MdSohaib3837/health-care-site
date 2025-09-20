import { BANNED_DOMAINS } from "@/data/contants";
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

    const emailDomain = email.split("@")[1]?.toLowerCase();

    if (emailDomain && BANNED_DOMAINS.includes(emailDomain)) {
      console.log(`🚫 Blocked disposable email: ${email}`);
      return NextResponse.json({
        success: true, // pretend success
        message: "Email skipped (disposable domain)",
        messageId: null,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.office365.com",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.BUSINESS_EMAIL_USER, // referrals@allnurseshomehealth.com
    //     pass: process.env.BUSINESS_EMAIL_PASS, // your business email password
    //   },
    //   tls: {
    //     ciphers: "SSLv3",
    //     rejectUnauthorized: false,
    //   },
    // });

    // Send email to admin
    await transporter.sendMail({
      from: `"Subscription" <${process.env.BUSINESS_EMAIL_USER}>`,
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
