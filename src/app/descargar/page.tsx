import type { Metadata } from "next";
import Image from "next/image";
import { appInfo } from "@/lib/content";
import BotonesDescarga from "./BotonesDescarga";

export const metadata: Metadata = {
  title: "Descargar ChillDrive",
  description:
    "Descarga la app ChillDrive para Android. Detección on-device, scoring de conducción 0–100 y recompensas por manejar bien.",
};

export default function DescargarPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">

      {/* ── Hero ── */}
      <div className="mb-12 text-center">
        {/* Logo */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center">
          <Image
            src="/img/logo.png"
            alt="ChillDrive"
            width={96}
            height={96}
            className="rounded-3xl object-contain drop-shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Descarga ChillDrive</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Disponible para <strong>Android</strong> · Versión {appInfo.version} · {appInfo.tamano}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">

        {/* ── Columna principal ── */}
        <div className="space-y-6 lg:col-span-3">

          {/* Tarjeta de descarga */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-5 flex items-center gap-3">
              {/* Ícono Android */}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5S5 24.33 5 23.5v-5C5 17.67 4.33 17 3.5 17zm17 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5zm-4.97-13.89l1.39-1.39a.5.5 0 00-.71-.71l-1.6 1.6C13.96 2.22 12.99 2 12 2s-1.96.22-2.61.61L7.79.99a.5.5 0 00-.71.71l1.39 1.39C7.32 3.78 6.5 5.3 6.5 7H18c0-1.7-.82-3.22-1.97-4.39z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-slate-900">ChillDrive para Android</p>
                <p className="text-xs text-slate-400">
                  {appInfo.platform} · Versión {appInfo.version} · {appInfo.tamano}
                </p>
              </div>
            </div>

            <BotonesDescarga apkUrl={appInfo.apkUrl} deepLink={appInfo.deepLink} />
          </div>

          {/* Instrucciones de instalación */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Cómo instalar ChillDrive</h2>
            <ol className="mt-4 space-y-4">
              {appInfo.instrucciones.map((paso, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-600">{paso}</p>
                </li>
              ))}
            </ol>

            {/* Nota Xiaomi */}
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-xs text-amber-800">
                <span className="font-semibold">Xiaomi / MIUI:</span> {appInfo.notaMiui}
              </p>
            </div>
          </div>
        </div>

        {/* ── Columna lateral: requisitos ── */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Requisitos del sistema</h2>
            <ul className="mt-4 space-y-3">
              {appInfo.requisitos.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>

            {/* Sección offline */}
            <div className="mt-6 rounded-xl bg-brand/5 p-4">
              <p className="text-xs font-semibold text-brand">Funciona sin internet</p>
              <p className="mt-1 text-xs text-slate-500">
                Los eventos de conducción se guardan localmente y se sincronizan al volver la
                conexión. Tu score siempre está disponible.
              </p>
            </div>

            {/* Plataformas */}
            <div className="mt-5 border-t border-slate-100 pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Plataformas
              </p>
              <div className="flex gap-3">
                <span className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 17c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5S5 24.33 5 23.5v-5C5 17.67 4.33 17 3.5 17zm17 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5zM18.03 4.11l1.39-1.39a.5.5 0 00-.71-.71l-1.6 1.6C16.46 3.22 15.29 3 14 3s-2.46.22-3.11.61L9.29 2.01a.5.5 0 00-.71.71l1.39 1.39C8.82 4.78 8 6.3 8 8h12c0-1.7-.82-3.22-1.97-4.89z" />
                  </svg>
                  Android ✓
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-400">
                  iOS — próximamente
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ¿Problemas? ── */}
      <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 text-center">
        <p className="text-sm text-slate-600">
          ¿Tienes problemas con la instalación?{" "}
          <a href="/contacto" className="font-medium text-brand hover:underline">
            Contáctanos
          </a>{" "}
          y te ayudamos.
        </p>
      </div>
    </div>
  );
}
