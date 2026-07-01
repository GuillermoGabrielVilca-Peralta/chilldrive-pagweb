import { entrevistas } from "@/lib/content";
import type { Metadata } from "next";
import { FadeIn, StaggerList, StaggerItem } from "@/components/Animate";

export const metadata: Metadata = {
  title: "Entrevistas",
  description:
    "Investigación de usuario de ChillDrive: entrevistas con conductores, responsables de flota y aliados potenciales que validaron la propuesta de valor.",
};

export default function EntrevistasPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Encabezado */}
      <FadeIn>
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          Investigación de usuario
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Entrevistas</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Conversaciones con conductores, empresas y aliados potenciales que nos ayudaron a
          validar la propuesta de valor de ChillDrive. Perfiles anonimizados.
        </p>
      </FadeIn>

      {/* Tarjetas de entrevista */}
      <StaggerList className="mt-12 space-y-8">
        {entrevistas.map((e) => (
          <StaggerItem
            key={e.codigo}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md sm:p-8"
          >
            {/* Cabecera */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                {e.codigo}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{e.perfil}</p>
                <p className="text-xs text-slate-400">{e.ciudad}</p>
              </div>
            </div>

            {/* Cita */}
            <blockquote className="mt-5 border-l-4 border-brand pl-4 text-slate-700 italic">
              {e.extracto}
            </blockquote>

            {/* Insights */}
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Hallazgos clave
              </p>
              <ul className="mt-2 space-y-1.5">
                {e.insights.map((insight) => (
                  <li key={insight} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>

      {/* Nota metodológica */}
      <FadeIn>
        <p className="mt-10 text-sm text-slate-400">
          Las entrevistas se realizaron en Lima (Perú) entre marzo y junio de 2026.
          Los nombres y datos personales fueron omitidos; se usan códigos internos de investigación.
        </p>
      </FadeIn>
    </div>
  );
}
