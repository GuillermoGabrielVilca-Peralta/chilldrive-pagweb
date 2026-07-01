import { NextResponse } from "next/server";
import { getRanking } from "@/lib/api";

// BFF: el navegador llama a /api/ranking (este handler), y el SERVIDOR consulta la
// API de ChillDrive. Así la URL/credenciales del backend nunca llegan al cliente.
export async function GET() {
  try {
    const ranking = await getRanking();
    return NextResponse.json(ranking);
  } catch {
    return NextResponse.json(
      { error: "No se pudo obtener el ranking de ChillDrive." },
      { status: 502 },
    );
  }
}
