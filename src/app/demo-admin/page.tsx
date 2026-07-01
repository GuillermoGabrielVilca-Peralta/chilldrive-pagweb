import type { Metadata } from "next";
import { getRanking, type RankingItem } from "@/lib/api";
import {
  kpisAdmin,
  vehiculosActivos,
  actividadReciente,
  rankingMock,
} from "@/lib/content";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";
import RefreshButton from "./RefreshButton";

export const metadata: Metadata = {
  title: "Demo Admin",
  description:
    "Vista demostrativa del panel de administrador ChillDrive: ranking de conductores en vivo, métricas de flota y actividad reciente. Sin acceso real de administrador.",
};

// Colores de nivel
const nivelColor: Record<string, string> = {
  Diamante: "bg-violet-100 text-violet-700",
  Platino: "bg-blue-100 text-blue-700",
  Oro: "bg-amber-100 text-amber-700",
  Plata: "bg-slate-100 text-slate-600",
  Bronce: "bg-orange-100 text-orange-700",
};
function badgeNivel(nivel: string) {
  return nivelColor[nivel] ?? "bg-slate-100 text-slate-600";
}

function scoreColor(s: number) {
  if (s >= 85) return "text-emerald-600";
  if (s >= 70) return "text-amber-600";
  return "text-rose-600";
}

// ── Barra de progreso mini para score ──────────────────────────────────────
function ScoreBar({ valor }: { valor: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${valor >= 85 ? "bg-emerald-500" : valor >= 70 ? "bg-amber-400" : "bg-rose-500"}`}
          style={{ width: `${valor}%` }}
        />
      </div>
      <span className={`text-xs font-semibold ${scoreColor(valor)}`}>{valor}</span>
    </div>
  );
}

export default async function DemoAdminPage() {
  // Intenta datos reales; si el backend no está corriendo, usa el mock.
  let ranking: RankingItem[];
  let esDatoReal: boolean;
  try {
    ranking = await getRanking();
    esDatoReal = ranking.length > 0;
  } catch {
    ranking = rankingMock;
    esDatoReal = false;
  }
  if (ranking.length === 0) {
    ranking = rankingMock;
    esDatoReal = false;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">

      {/* ── Banner de demo ── */}
      <FadeIn className="mb-8">
      <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
        <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <p className="text-sm font-semibold text-amber-800">Vista demostrativa — sin acceso real de administrador</p>
          <p className="mt-0.5 text-xs text-amber-700">
            Esta página ilustra cómo un administrador supervisaría la flota ChillDrive.
            Los KPIs y la flota activa son datos de ejemplo. El ranking
            {" "}
            {esDatoReal
              ? <span className="font-semibold">proviene en vivo de la API ChillDrive ✓</span>
              : <span className="font-semibold">usa datos de ejemplo (backend no disponible)</span>
            }.
          </p>
        </div>
      </div>
      </FadeIn>

      {/* ── Encabezado ── */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Panel de administrador</h1>
          <p className="mt-1 text-sm text-slate-500">
            Vista general de la flota · {new Date().toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <RefreshButton />
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${esDatoReal ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${esDatoReal ? "bg-emerald-500" : "bg-slate-400"}`} />
            {esDatoReal ? "Ranking en vivo" : "Datos de ejemplo"}
          </span>
        </div>
      </div>

      {/* ── KPIs ── */}
      <StaggerList className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpisAdmin.map((k) => (
          <StaggerItem key={k.etiqueta} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs text-slate-500">{k.etiqueta}</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">{k.valor}</p>
            <p className="mt-0.5 text-xs text-brand">{k.delta}</p>
          </StaggerItem>
        ))}
      </StaggerList>

      {/* ── Fila principal: ranking + flota ── */}
      <div className="mb-8 grid gap-6 lg:grid-cols-5">

        {/* Ranking — 3/5 */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h2 className="font-semibold text-slate-900">Ranking de conductores</h2>
              {esDatoReal && (
                <span className="text-xs text-slate-400">Fuente: API ChillDrive</span>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-left text-xs text-slate-400">
                    <th className="py-3 pl-6 font-medium">#</th>
                    <th className="py-3 pl-2 font-medium">Conductor</th>
                    <th className="py-3 pl-2 font-medium">Nivel</th>
                    <th className="py-3 pl-2 font-medium">Puntos</th>
                    <th className="py-3 pl-2 pr-6 font-medium">Score prom.</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.slice(0, 10).map((r, i) => (
                    <tr
                      key={r.usuarioId}
                      className="border-b border-slate-50 transition hover:bg-slate-50"
                    >
                      <td className="py-3 pl-6 text-slate-400 font-medium">
                        {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                      </td>
                      <td className="py-3 pl-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                            {r.conductor.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900 leading-tight">{r.conductor}</p>
                            <p className="text-xs text-slate-400">{r.totalViajes} viajes</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 pl-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeNivel(r.nivel)}`}>
                          {r.nivel}
                        </span>
                      </td>
                      <td className="py-3 pl-2 font-semibold text-slate-900">
                        {r.puntosActuales.toLocaleString("es-PE")}
                      </td>
                      <td className="py-3 pl-2 pr-6">
                        <ScoreBar valor={Math.round(r.puntajePromedio)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Flota activa — 2/5 */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-6 py-4">
              <h2 className="font-semibold text-slate-900">Flota activa ahora</h2>
              <p className="mt-0.5 text-xs text-slate-400">Datos de ejemplo</p>
            </div>
            <div className="divide-y divide-slate-100">
              {vehiculosActivos.map((v) => (
                <div key={v.placa} className="px-6 py-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{v.conductor}</p>
                      <p className="text-xs text-slate-400">{v.placa} · {v.inicio}</p>
                    </div>
                    <span className={`text-lg font-bold ${scoreColor(v.scoreActual)}`}>
                      {v.scoreActual}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">{v.ruta}</p>
                  {v.ultimoEvento && (
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-600">
                      <span className="h-1 w-1 rounded-full bg-rose-500" />
                      {v.ultimoEvento}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Actividad reciente ── */}
      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-6 py-4">
          <h2 className="font-semibold text-slate-900">Actividad reciente</h2>
          <p className="mt-0.5 text-xs text-slate-400">Datos de ejemplo</p>
        </div>
        <ul className="divide-y divide-slate-100">
          {actividadReciente.map((e, i) => (
            <li key={i} className="flex items-center gap-4 px-6 py-4">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs ${
                  e.negativo ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-600"
                }`}
              >
                {e.negativo ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-slate-900">
                  <span className="font-medium">{e.conductor}</span>
                  {" · "}
                  {e.tipo}
                </p>
                <p className="text-xs text-slate-400">{e.viaje}</p>
              </div>
              <span className="shrink-0 text-xs text-slate-400">{e.hora}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
