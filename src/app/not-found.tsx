import Link from "next/link";

// Página de error 404: se muestra cuando alguien entra a una ruta que no existe.
// Next.js la renderiza automáticamente para cualquier URL no encontrada.
export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[60vh] max-w-2xl place-items-center px-4 py-20 text-center">
      <div>
        <p className="text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Página no encontrada
        </h1>
        <p className="mt-3 text-slate-600">
          La dirección que ingresaste no existe o fue movida. Revisa el enlace o
          vuelve al inicio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
