import { pruebas } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";

export const metadata: Metadata = {
  title: "Pruebas",
  description:
    "Evidencias de las pruebas de ChillDrive: más de 20 tests unitarios, prueba de campo en Lima, modo offline con outbox SQLite y scoring completo por viaje.",
};

const iconos: Record<string, React.ReactNode> = {
  "Tests unitarios": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  ),
  "Prueba de campo": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  "Prueba offline": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  ),
  "Prueba de scoring": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
};

const galeriaApp = [
  { src: "/img/pruebas/app-gps-1.jpg", caption: "GPS en vivo · User-662 · 35.8 km/h · Arequipa" },
  { src: "/img/pruebas/app-gps-2.jpg", caption: "Mapa de ruta · User-630 · 54.3 km/h · Lima–Arequipa" },
  { src: "/img/pruebas/app-gps-3.jpg", caption: "Recorrido en tiempo real con marcador de inicio" },
  { src: "/img/pruebas/app-gps-4.jpg", caption: "Tracking GPS con radio de precisión activo" },
];

export default function PruebasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Encabezado */}
      <FadeIn>
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          Evidencia
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Pruebas realizadas</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Evidencias de las pruebas en campo, en modo offline y del suite de tests automatizados
          que validan el comportamiento del sistema.
        </p>
      </FadeIn>

      {/* Tarjetas de prueba */}
      <StaggerList className="mt-12 grid gap-6 sm:grid-cols-2">
        {pruebas.map((p) => (
          <StaggerItem
            key={p.tipo}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                {iconos[p.tipo]}
              </span>
              <div>
                <h2 className="font-semibold text-slate-900">{p.tipo}</h2>
                <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                  {p.cantidad}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600">{p.descripcion}</p>

            <ul className="mt-4 space-y-2">
              {p.resultados.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerList>

      {/* ── Galería: app en campo ── */}
      <div className="mt-20">
        <FadeIn>
          <h2 className="text-2xl font-bold text-slate-900">App en campo real</h2>
          <p className="mt-2 text-slate-600">
            Capturas de la prueba de campo en Arequipa — mayo 2026. Dos conductores simultáneos,
            GPS en vivo, puntos acumulándose en tiempo real.
          </p>
        </FadeIn>

        <StaggerList className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galeriaApp.map((g) => (
            <StaggerItem key={g.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-100">
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="px-3 py-2.5 text-xs text-slate-500 leading-relaxed">{g.caption}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </div>
  );
}
