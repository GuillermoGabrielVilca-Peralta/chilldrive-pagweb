import type { Metadata } from "next";
import Link from "next/link";
import { contacto } from "@/lib/content";
import { StaggerList, StaggerItem } from "@/components/Animate";
import Encabezado from "@/components/Encabezado";
import Icono from "@/components/Icono";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a ChillDrive: soporte para conductores, planes para empresas con flotas e información para comercios que quieran ser aliados.",
};

const motivos = [
  {
    icono: "conductor",
    titulo: "Soy conductor",
    desc: "¿Dudas con la app, tu puntaje o un canje? Te ayudamos.",
  },
  {
    icono: "empresa",
    titulo: "Tengo una flota",
    desc: "Conoce cómo ChillDrive puede ayudar a tu empresa a mejorar la conducción de su equipo.",
  },
  {
    icono: "comercio",
    titulo: "Quiero ser aliado",
    desc: "Ofrece beneficios a nuestros conductores y atrae nuevos clientes a tu negocio.",
  },
];

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Encabezado
        etiqueta="Contacto"
        titulo="Hablemos"
        bajada="Seas conductor, empresa o comercio, escríbenos y te responderemos lo antes posible."
      />

      <StaggerList className="mt-12 grid gap-6 md:grid-cols-3">
        {motivos.map((m) => (
          <StaggerItem key={m.titulo} className="rounded-2xl border border-slate-200 bg-white p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Icono nombre={m.icono} />
            </span>
            <h2 className="mt-4 font-semibold text-slate-900">{m.titulo}</h2>
            <p className="mt-1 text-sm text-slate-500">{m.desc}</p>
          </StaggerItem>
        ))}
      </StaggerList>

      <StaggerList className="mt-10 grid gap-4 rounded-3xl bg-slate-50 p-8 sm:grid-cols-3">
        <StaggerItem className="flex items-start gap-3">
          <Icono nombre="correo" className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Correo</p>
            <a href={`mailto:${contacto.correo}`} className="mt-1 block break-all font-medium text-slate-800 hover:text-brand">
              {contacto.correo}
            </a>
          </div>
        </StaggerItem>
        <StaggerItem className="flex items-start gap-3">
          <Icono nombre="chat" className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">WhatsApp</p>
            <a
              href={contacto.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block font-medium text-slate-800 hover:text-brand"
            >
              {contacto.whatsapp}
            </a>
          </div>
        </StaggerItem>
        <StaggerItem className="flex items-start gap-3">
          <Icono nombre="ubicacion" className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Ubicación</p>
            <p className="mt-1 font-medium text-slate-800">{contacto.ciudad}</p>
          </div>
        </StaggerItem>
      </StaggerList>

      <div className="mt-10 text-center">
        <p className="text-sm text-slate-500">¿Prefieres probar la app primero?</p>
        <Link
          href="/descargar"
          className="mt-3 inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Descargar ChillDrive
        </Link>
      </div>
    </div>
  );
}
