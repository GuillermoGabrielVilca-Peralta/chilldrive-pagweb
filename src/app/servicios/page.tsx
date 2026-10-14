import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicios, capturasApp } from "@/lib/content";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";
import Encabezado from "@/components/Encabezado";
import Icono from "@/components/Icono";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios ChillDrive para conductores, empresas con flotas y comercios: puntaje de manejo, mapa de infracciones, premios y monitoreo de conducción.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Encabezado
        etiqueta="Servicios"
        titulo="Soluciones para una conducción más segura"
        bajada="ChillDrive conecta a conductores, empresas y comercios en una misma plataforma: quien maneja bien gana, y todos se benefician."
      />

      <div className="mt-14 space-y-10">
        {servicios.map((s) => (
          <FadeIn key={s.id}>
            <section
              id={s.id}
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 transition hover:shadow-md"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icono nombre={s.icono} className="h-7 w-7" />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        s.estado === "Disponible"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {s.estado}
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand">{s.publico}</p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-900">{s.titulo}</h2>
                  <p className="mt-3 text-slate-600">{s.desc}</p>
                  <Link
                    href={s.cta.href}
                    className="mt-6 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                  >
                    {s.cta.texto}
                  </Link>
                </div>

                <ul className="space-y-3">
                  {s.puntos.map((p) => (
                    <li key={p} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      <Icono nombre="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capturas reales de la app: solo en el servicio para conductores */}
              {s.id === "conductores" && (
                <StaggerList className="mt-10 grid grid-cols-1 gap-6 border-t border-slate-100 pt-10 sm:grid-cols-3">
                  {capturasApp.map((c) => (
                    <StaggerItem key={c.src} className="text-center">
                      <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[1.75rem] border-[6px] border-slate-900 bg-slate-900 shadow-lg">
                        <Image src={c.src} alt={c.alt} width={720} height={1600} className="h-auto w-full" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-slate-700">{c.titulo}</p>
                    </StaggerItem>
                  ))}
                </StaggerList>
              )}
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
