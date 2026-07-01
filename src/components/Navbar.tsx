"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site } from "@/lib/content";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function linkClase(activo: boolean) {
    return `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      activo
        ? "bg-brand/10 text-brand"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-brand">
          <Image
            src="/img/logo.png"
            alt="ChillDrive"
            width={36}
            height={36}
            className="rounded-lg object-contain"
          />
          <span className="text-lg">{site.nombre}</span>
        </Link>

        {/* Navegación desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const activo = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={activo ? "page" : undefined}
                  className={linkClase(activo)}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* CTA desktop */}
          <Link
            href={site.appUrl}
            className="hidden rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark md:block"
          >
            Descargar app
          </Link>

          {/* Botón hamburguesa — solo móvil */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.svg
                  key="x"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15, ease }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15, ease }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((l) => {
                const activo = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={activo ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`block ${linkClase(activo)}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 border-t border-slate-100 pt-2">
                <Link
                  href={site.appUrl}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark"
                >
                  Descargar app
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
