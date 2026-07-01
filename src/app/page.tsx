import Link from "next/link";
import { site, navLinks, estadisticas, pasos, caracteristicas } from "@/lib/content";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";

function Icono({ tipo }: { tipo: string }) {
  const cls = "h-6 w-6";
  if (tipo === "cpu")
    return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3m8 0h3a2 2 0 002-2v-3M9 9h6v6H9z" /></svg>;
  if (tipo === "sensor")
    return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3 3-3" /></svg>;
  if (tipo === "offline")
    return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>;
  if (tipo === "score")
    return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>;
  if (tipo === "puntos")
    return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>;
  return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>;
}

export default function Home() {
  const secciones = navLinks.filter((l) => l.href !== "/" && l.href !== "/demo-admin");

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand to-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-4 py-28 text-center">
          <FadeIn delay={0}>
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
              Proyecto en desarrollo · TECSUP 2026
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
              <Link href="/avances" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-slate-100">
                Ver avances del proyecto
              </Link>
              <Link href={site.appUrl} className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Descargar app →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Estadísticas ── */}
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
              <span className="inline-block text-4xl font-extrabold text-brand/20 leading-none">{p.paso}</span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">{p.titulo}</h3>
              <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* ── Características técnicas ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Tecnología detrás del scoring</h2>
            <p className="mt-3 text-slate-500">Un stack pensado para funcionar en cualquier condición de red.</p>
          </FadeIn>
          <StaggerList className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caracteristicas.map((c) => (
              <StaggerItem key={c.titulo} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icono tipo={c.icono} />
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{c.titulo}</h3>
                <p className="mt-2 text-sm text-slate-500">{c.desc}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── Secciones del proyecto ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <FadeIn>
          <h2 className="text-2xl font-bold text-slate-900">Explora el proyecto</h2>
          <p className="mt-2 text-slate-500">Avances, pruebas, entrevistas y aliados.</p>
        </FadeIn>
        <StaggerList className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secciones.map((l) => (
            <StaggerItem key={l.href}>
              <Link href={l.href} className="group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand">{l.label}</h3>
                <p className="mt-1 text-sm text-slate-500">Ver sección →</p>
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
            <p className="mt-3 text-white/80">Descarga la app, activa la detección en tu primer viaje y empieza a ganar puntos.</p>
            <Link href={site.appUrl} className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-brand transition hover:bg-slate-100">
              Descargar ChillDrive
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
