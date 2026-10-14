import { fases, type FaseEstado } from "@/lib/content";
import type { Metadata } from "next";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";

export const metadata: Metadata = {
  title: "Avances",
  description:
    "Fases completadas del proyecto ChillDrive: desde el core del sistema hasta telemática por sensores, scoring por categorías y el despliegue en la nube.",
};

function BadgeEstado({ estado }: { estado: FaseEstado }) {
  const estilos: Record<FaseEstado, string> = {
    Completada: "bg-emerald-100 text-emerald-700",
    "En progreso": "bg-amber-100 text-amber-700",
    Pendiente: "bg-slate-100 text-slate-500",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${estilos[estado]}`}>
      {estado}
    </span>
  );
}

export default function AvancesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {/* Encabezado */}
      <FadeIn>
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          Estado del proyecto
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Avances de ChillDrive
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Lo que hemos construido fase a fase: desde el core del sistema hasta la telemática
          por sensores, la calificación por viaje y el despliegue en la nube.
        </p>
      </FadeIn>

      {/* Timeline */}
      <StaggerList className="mt-12 space-y-6">
        {fases.map((fase, idx) => (
          <StaggerItem key={fase.id} className="relative flex gap-6">
            {/* Línea vertical */}
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
                  fase.estado === "Completada"
                    ? "bg-brand text-white"
                    : fase.estado === "En progreso"
                    ? "border-2 border-amber-400 bg-white text-amber-600"
                    : "border-2 border-slate-200 bg-white text-slate-400"
                }`}
              >
                {fase.id.length <= 2 ? fase.id : idx + 1}
              </div>
              {idx < fases.length - 1 && (
                <div className="mt-1 h-full w-px bg-slate-200" />
              )}
            </div>

            {/* Tarjeta */}
            <div className="mb-6 flex-1 rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Fase {fase.id} — {fase.nombre}
                  </h2>
                  <p className="mt-0.5 text-sm text-slate-500">{fase.fecha}</p>
                </div>
                <BadgeEstado estado={fase.estado} />
              </div>

              <ul className="mt-4 space-y-2">
                {fase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span
                      className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                        fase.estado === "Completada" ? "bg-brand" : "bg-slate-300"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
