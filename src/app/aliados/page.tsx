import type { Metadata } from "next";
import Link from "next/link";
import { rubrosAliados, pasosCanje, ventajasAliado } from "@/lib/content";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";
import Encabezado from "@/components/Encabezado";
import Icono from "@/components/Icono";

export const metadata: Metadata = {
  title: "Aliados",
  description:
    "Red de beneficios ChillDrive: los conductores canjean sus puntos en comercios aliados de combustible, gastronomía, supermercados, mantenimiento vehicular y más.",
};

export default function AliadosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Encabezado
        etiqueta="Red de beneficios"
        titulo="Premios donde más los necesitas"
        bajada="Los puntos que ganas manejando bien se canjean en comercios aliados de los rubros que más usa un conductor. Estamos sumando nuevos aliados cada mes."
      />

      {/* Rubros */}
      <StaggerList className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rubrosAliados.map((r) => (
          <StaggerItem
            key={r.rubro}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-md"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Icono nombre={r.icono} className="h-7 w-7" />
            </span>
            <h2 className="mt-4 font-semibold text-slate-900">{r.rubro}</h2>
            <p className="mt-1 flex-1 text-sm text-slate-500">{r.desc}</p>
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-brand/5 px-4 py-3">
              <Icono nombre="regalo" className="h-4 w-4 shrink-0 text-brand" />
              <span className="text-xs font-medium text-brand">{r.beneficio}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>

      {/* Cómo funciona el canje */}
      <section className="mt-20">
        <FadeIn>
          <h2 className="text-2xl font-bold text-slate-900">¿Cómo canjeo mis puntos?</h2>
        </FadeIn>
        <StaggerList className="mt-8 grid gap-6 sm:grid-cols-3">
          {pasosCanje.map((p) => (
            <StaggerItem key={p.paso} className="rounded-2xl bg-slate-50 p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {p.paso}
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{p.titulo}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* Sé nuestro aliado */}
      <FadeIn>
        <section className="mt-20 rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-8 text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">¿Tienes un negocio? Sé nuestro aliado</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Ofrece un beneficio a los conductores de ChillDrive y conviértelos en tus clientes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {ventajasAliado.map((v) => (
              <div key={v.titulo} className="rounded-2xl bg-white/10 p-5">
                <Icono nombre={v.icono} className="h-6 w-6 text-white" />
                <h3 className="mt-3 font-semibold">{v.titulo}</h3>
                <p className="mt-1 text-sm text-white/80">{v.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contacto"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-slate-100"
          >
            Quiero ser aliado
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}
