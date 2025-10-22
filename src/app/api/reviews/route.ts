// app/api/reviews/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_KEY!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars");
}

// server-side client (service role)
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// optional: disposable domain filter (your BANNED_DOMAINS)
const BANNED_DOMAINS = [
  "yopmail.com",
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "trashmail.com",
  "temp-mail.org",
  "dispostable.com",
  "getnada.com",
];

export async function GET() {
  // return latest approved reviews

  const { data, error } = await supabase
    .from("reviews")
    .select("id, firstname, lastname, rating, message, location, created_at")
    // .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("GET /api/reviews error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
  return NextResponse.json({ success: true, reviews: data });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      rating = 5,
      message,
      service_type, // We still receive this from frontend
      urgency,
      patientName,
      relationship,
    } = body;

    // simple validation
    if (!firstName || !email || !message || !service_type) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // disposable domain check
    // const domain = email.split("@")[1]?.toLowerCase();
    // if (domain && BANNED_DOMAINS.includes(domain)) {
    //   console.log("Blocked disposable email:", email);
    //   return NextResponse.json({
    //     success: true,
    //     skipped: true,
    //     message: "Disposable email - skipped",
    //   });
    // }

    const { data, error } = await supabase.from("reviews").insert([
      {
        firstname: firstName,
        lastname: lastName,
        email,
        rating,
        message,
        location: service_type, // 👈 Changed to 'location' to match renamed column
        patient_name: patientName || null,
        relationship: relationship || null,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    return NextResponse.json({ success: true, review: data?.[0] ?? null });
  } catch (err: any) {
    console.error("POST /api/reviews error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
