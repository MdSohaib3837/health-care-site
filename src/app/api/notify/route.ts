import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { email } = await req.json();

//     if (!email) {
//       return NextResponse.json(
//         { success: false, message: "Email is required" },
//         { status: 400 }
//       );
//     }

//     await resend.emails.send({
//       from: "All Nurses Home Health <no-reply@allnurseshomehealth.com>",
//       to: "referrals@allnurseshomehealth.com",
//       replyTo: "referrals@allnurseshomehealth.com",
//       subject: "New Contact Form Submission",
//       html: `A user subscribed with email: ${email}`,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Subscription successful",
//     });
//   } catch (error) {
//     console.error("Notify API error:", error);
//     return NextResponse.json(
//       { success: false, message: "Error subscribing" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

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
