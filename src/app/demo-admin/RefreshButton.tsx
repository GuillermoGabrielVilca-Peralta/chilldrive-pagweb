"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RefreshButton() {
  const router = useRouter();
  const [cargando, setCargando] = useState(false);

  function actualizar() {
    setCargando(true);
    router.refresh();
    setTimeout(() => setCargando(false), 1200);
  }

  return (
    <button
      onClick={actualizar}
      disabled={cargando}
      className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-brand hover:text-brand disabled:opacity-60"
    >
      <svg
        className={`h-3.5 w-3.5 ${cargando ? "animate-spin" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      {cargando ? "Actualizando…" : "Actualizar ranking"}
    </button>
  );
}
