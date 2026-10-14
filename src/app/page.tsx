import Link from "next/link";
import { site, estadisticas, pasos, beneficios, servicios } from "@/lib/content";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";
import Icono from "@/components/Icono";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand to-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-28 text-center">
          <FadeIn delay={0}>
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
              Startup peruana de movilidad segura
            </span>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{site.descripcion}</p>
          </FadeIn>
          <FadeIn delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={site.appUrl} className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-slate-100">
                Descargar app
              </Link>
              <Link href="/servicios" className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Conoce nuestros servicios →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Datos clave ── */}
      <section className="border-b border-slate-100 bg-slate-50">
        <StaggerList className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-10 sm:grid-cols-4">
          {estadisticas.map((e) => (
            <StaggerItem key={e.etiqueta} className="flex flex-col items-center px-4 py-6 text-center">
              <span className="text-3xl font-bold text-brand sm:text-4xl">{e.valor}</span>
              <span className="mt-1 text-xs text-slate-500 sm:text-sm">{e.etiqueta}</span>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* ── Cómo funciona ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">¿Cómo funciona ChillDrive?</h2>
          <p className="mt-3 text-slate-500">Cuatro pasos para convertir tu manejo en recompensas.</p>
        </FadeIn>
        <StaggerList className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <StaggerItem key={p.paso} className="relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
              <span className="inline-block text-4xl font-extrabold leading-none text-brand/20">{p.paso}</span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">{p.titulo}</h3>
              <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* ── Beneficios ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">¿Por qué ChillDrive?</h2>
            <p className="mt-3 text-slate-500">Todo lo que necesitas para manejar mejor, en tu celular.</p>
          </FadeIn>
          <StaggerList className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <StaggerItem key={b.titulo} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icono nombre={b.icono} />
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{b.titulo}</h3>
                <p className="mt-2 text-sm text-slate-500">{b.desc}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── Servicios (resumen) ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Una plataforma, tres soluciones</h2>
          <p className="mt-3 text-slate-500">Para quienes manejan, para quienes gestionan flotas y para los comercios.</p>
        </FadeIn>
        <StaggerList className="mt-12 grid gap-6 md:grid-cols-3">
          {servicios.map((s) => (
            <StaggerItem key={s.id}>
              <Link
                href={`/servicios#${s.id}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icono nombre={s.icono} />
                  </span>
                  {s.estado === "Próximamente" && (
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                      Próximamente
                    </span>
                  )}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">{s.publico}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{s.titulo}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-500">{s.desc}</p>
                <span className="mt-4 text-sm font-semibold text-brand group-hover:underline">Ver más →</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* ── CTA final ── */}
      <FadeIn>
        <section className="bg-brand py-16 text-white">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-3xl font-bold">¿Listo para manejar mejor?</h2>
            <p className="mt-3 text-white/80">Descarga la app gratis, inicia tu primer viaje y empieza a ganar puntos.</p>
            <Link href={site.appUrl} className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-brand transition hover:bg-slate-100">
              Descargar ChillDrive
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
