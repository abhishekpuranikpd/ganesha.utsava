import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, mobile, address } = body;

    if (!fullName || !mobile || !address) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // TODO: Add proper mobile number validation if needed
    const isMobileValid = /^[6-9]\d{9}$/.test(mobile);
    if (!isMobileValid) {
      return NextResponse.json(
        { error: "Invalid mobile number." },
        { status: 400 }
      );
    }

    // Dummy video URL generation logic – replace with actual logic
    const videoUrl = `https://example.com/videos/${encodeURIComponent(
      fullName
    )}-ganesh2025.mp4`;

    const registration = await db.dhoopaDeeparatiRegistration.create({
      data: {
        fullName,
        mobile,
        address,
     
      },
    });

    return NextResponse.json({ success: true, videoUrl }, { status: 200 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
