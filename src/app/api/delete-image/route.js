import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { public_id } = await req.json();

    const timestamp = Math.floor(Date.now() / 1000);

    const signature = crypto
      .createHash("sha1")
      .update(`public_id=${public_id}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`)
      .digest("hex");

    const formData = new FormData();
    formData.append("public_id", public_id);
    formData.append("api_key", process.env.CLOUDINARY_API_KEY);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/destroy`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}