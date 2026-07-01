import { NextResponse } from "next/server";

// Usado por el healthcheck de Docker y por cualquier monitor de uptime.
export async function GET() {
  return NextResponse.json({ status: "ok", ts: new Date().toISOString() });
}
