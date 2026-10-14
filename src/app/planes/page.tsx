import type { Metadata } from "next";
import Link from "next/link";
import { planes, metodosPago } from "@/lib/content";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";
import Encabezado from "@/components/Encabezado";
import Icono from "@/components/Icono";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Planes ChillDrive: Gratuito para conductores particulares, Profesional para taxistas, delivery y mototaxis, y planes a medida para empresas con flotas.",
};

export default function PlanesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Encabezado
        etiqueta="Planes"
        titulo="Elige el plan que se adapta a ti"
        bajada="Empieza gratis. Si manejas de forma profesional o gestionas una flota, tenemos un plan pensado para ti."
      />

      <StaggerList className="mt-12 grid gap-6 lg:grid-cols-3">
        {planes.map((p) => (
          <StaggerItem
            key={p.nombre}
            className={`relative flex flex-col rounded-3xl border p-8 ${
              p.destacado
                ? "border-brand bg-brand text-white shadow-xl lg:-mt-4 lg:mb-4"
                : "border-slate-200 bg-white"
            }`}
          >
            {p.destacado && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900">
                Recomendado
              </span>
            )}
            <div className="flex items-center justify-between">
              <h2 className={`text-lg font-bold ${p.destacado ? "text-white" : "text-slate-900"}`}>{p.nombre}</h2>
              {p.estado === "Próximamente" && (
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                  Próximamente
                </span>
              )}
            </div>
            <p className={`mt-1 text-sm ${p.destacado ? "text-white/80" : "text-slate-500"}`}>{p.para}</p>

            <p className="mt-6">
              <span className={`text-4xl font-extrabold ${p.destacado ? "text-white" : "text-slate-900"}`}>{p.precio}</span>
              <span className={`ml-2 text-sm ${p.destacado ? "text-white/80" : "text-slate-500"}`}>{p.periodo}</span>
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {p.incluye.map((i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${p.destacado ? "text-white" : "text-slate-600"}`}>
                  <Icono nombre="check" className={`mt-0.5 h-4 w-4 shrink-0 ${p.destacado ? "text-white" : "text-brand"}`} />
                  {i}
                </li>
              ))}
            </ul>

            <Link
              href={p.cta.href}
              className={`mt-8 block rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${
                p.destacado
                  ? "bg-white text-brand hover:bg-slate-100"
                  : "bg-brand text-white hover:bg-brand-dark"
              }`}
            >
              {p.cta.texto}
            </Link>
          </StaggerItem>
        ))}
      </StaggerList>

      <FadeIn>
        <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 text-center">
          <p className="text-sm font-semibold text-slate-700">Medios de pago</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {metodosPago.map((m) => (
              <span key={m} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                {m}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
