"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aliados, categoriasAliados } from "@/lib/content";

const coloresCat: Record<string, string> = {
  Combustible:  "bg-orange-100 text-orange-700",
  Supermercado: "bg-blue-100 text-blue-700",
  Restaurante:  "bg-rose-100 text-rose-700",
  Mantenimiento:"bg-violet-100 text-violet-700",
};
function badgeClase(cat: string) {
  return coloresCat[cat] ?? "bg-slate-100 text-slate-600";
}

export default function AliadosFiltro() {
  const [catActiva, setCatActiva] = useState<string | null>(null);
  const filtrados = catActiva ? aliados.filter((a) => a.categoria === catActiva) : aliados;

  return (
    <>
      {/* Filtros */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCatActiva(null)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            !catActiva
              ? "bg-brand text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Todos
        </button>
        {categoriasAliados.map((cat) => (
          <button
            key={cat}
            onClick={() => setCatActiva(cat === catActiva ? null : cat)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              catActiva === cat
                ? "ring-2 ring-brand ring-offset-1 " + badgeClase(cat)
                : badgeClase(cat) + " opacity-80 hover:opacity-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid animado */}
      <motion.div
        layout
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtrados.map((a) => (
            <motion.div
              key={a.nombre}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-lg font-bold text-brand">
                  {a.nombre[0]}
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900">{a.nombre}</h2>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeClase(a.categoria)}`}>
                    {a.categoria}
                  </span>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm text-slate-500">{a.descripcion}</p>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-brand/5 px-4 py-3">
                <svg className="h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <span className="text-xs font-medium text-brand">{a.beneficio}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-10 text-sm text-slate-400">
        ¿Eres una marca o comercio interesado en unirte como aliado? Contacta al equipo de ChillDrive.
      </p>
    </>
  );
}
