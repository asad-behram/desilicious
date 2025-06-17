import { findUserByEmail } from "@/lib/user/api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    const result = await findUserByEmail(email);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
