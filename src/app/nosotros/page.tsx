import type { Metadata } from "next";
import { nosotros, equipo } from "@/lib/content";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";
import Encabezado from "@/components/Encabezado";
import Icono from "@/components/Icono";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a ChillDrive: una startup peruana que mide y premia la conducción segura. Nuestra historia, misión, visión, valores y equipo.",
};

function iniciales(nombre: string) {
  return nombre
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Encabezado etiqueta="Nosotros" titulo="Manejar bien tiene que valer la pena" bajada={nosotros.intro} />

      {/* Historia */}
      <FadeIn>
        <section className="mt-14 grid gap-8 rounded-3xl bg-slate-50 p-8 md:grid-cols-[0.6fr_1.4fr] sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">Nuestra historia</h2>
          <div className="space-y-4 text-slate-600">
            {nosotros.historia.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Misión y visión */}
      <StaggerList className="mt-10 grid gap-6 md:grid-cols-2">
        <StaggerItem className="rounded-3xl border border-slate-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">Misión</p>
          <p className="mt-3 text-lg text-slate-700">{nosotros.mision}</p>
        </StaggerItem>
        <StaggerItem className="rounded-3xl border border-slate-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">Visión</p>
          <p className="mt-3 text-lg text-slate-700">{nosotros.vision}</p>
        </StaggerItem>
      </StaggerList>

      {/* Valores */}
      <section className="mt-20">
        <FadeIn>
          <h2 className="text-2xl font-bold text-slate-900">Nuestros valores</h2>
        </FadeIn>
        <StaggerList className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nosotros.valores.map((v) => (
            <StaggerItem key={v.titulo} className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icono nombre={v.icono} />
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{v.titulo}</h3>
              <p className="mt-1 text-sm text-slate-500">{v.desc}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* Equipo */}
      <section className="mt-20">
        <FadeIn>
          <h2 className="text-2xl font-bold text-slate-900">Nuestro equipo</h2>
          <p className="mt-2 text-slate-500">Las personas detrás de ChillDrive.</p>
        </FadeIn>
        <StaggerList className="mt-8 grid gap-6 sm:grid-cols-3">
          {equipo.map((m) => (
            <StaggerItem key={m.nombre} className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-2xl font-bold text-white">
                {iniciales(m.nombre)}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{m.nombre}</h3>
              <p className="text-sm font-semibold text-brand">{m.cargo}</p>
              <p className="mt-3 text-sm text-slate-500">{m.rol}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>
    </div>
  );
}
