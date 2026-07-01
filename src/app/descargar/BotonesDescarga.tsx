"use client";

import { useState } from "react";

interface Props {
  apkUrl: string;
  deepLink: string;
}

export default function BotonesDescarga({ apkUrl, deepLink }: Props) {
  const [deepLinkMsg, setDeepLinkMsg] = useState<string | null>(null);
  const apkDisponible = apkUrl !== "#";

  function abrirDeepLink() {
    // Intenta abrir la app; si no está instalada el navegador no hace nada visible.
    window.location.href = deepLink;
    // Tras 1.5 s asumimos que la app no estaba instalada y mostramos mensaje.
    const t = setTimeout(() => {
      setDeepLinkMsg("La app no parece estar instalada. Descárgala primero.");
    }, 1500);
    // Si el usuario vuelve a la pestaña antes del timeout lo cancelamos.
    const cancelar = () => {
      clearTimeout(t);
      window.removeEventListener("blur", cancelar);
    };
    window.addEventListener("blur", cancelar);
  }

  return (
    <div className="space-y-3">
      {/* Descargar APK */}
      {apkDisponible ? (
        <a
          href={apkUrl}
          download
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Descargar APK
        </a>
      ) : (
        <div className="flex w-full flex-col items-center gap-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-3.5 text-center">
          <span className="text-sm font-semibold text-slate-500">APK próximamente disponible</span>
          <span className="text-xs text-slate-400">El enlace de descarga se publicará aquí pronto.</span>
        </div>
      )}

      {/* Abrir app (deep link) */}
      <button
        onClick={abrirDeepLink}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
        </svg>
        Abrir ChillDrive (si ya está instalada)
      </button>

      {deepLinkMsg && (
        <p className="text-center text-xs text-slate-500">{deepLinkMsg}</p>
      )}
    </div>
  );
}
