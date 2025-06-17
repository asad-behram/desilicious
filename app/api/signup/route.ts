import { signup } from "@/lib/user/api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName } = body;
    const result = await signup({ email, password, firstName, lastName });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
