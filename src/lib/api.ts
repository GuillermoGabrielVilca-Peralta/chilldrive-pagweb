// Cliente de la API de ChillDrive (backend ASP.NET Core ya existente).
// Se usa SOLO desde el servidor (route handlers / Server Components) para no exponer
// la URL/credenciales al navegador. La URL se configura por entorno.

const API_BASE = process.env.CHILLDRIVE_API_URL ?? "http://localhost:5126";

async function apiGet<T>(path: string, revalidateSegundos = 60): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    next: { revalidate: revalidateSegundos },
  });
  if (!res.ok) throw new Error(`API ChillDrive respondió ${res.status} en ${path}`);
  return res.json() as Promise<T>;
}

export type RankingItem = {
  usuarioId: number;
  conductor: string;
  tipoConductor: string;
  puntosActuales: number;
  puntosHistoricos: number;
  nivel: string;
  puntajePromedio: number;
  totalViajes: number;
};

// Endpoint público de la API: leaderboard de conductores (AllowAnonymous).
export function getRanking(): Promise<RankingItem[]> {
  return apiGet<RankingItem[]>("/api/ranking");
}
