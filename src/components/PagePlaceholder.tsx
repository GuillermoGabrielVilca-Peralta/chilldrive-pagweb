// Plantilla reutilizable para las secciones que aún no tienen contenido (Fase 0).
// Cada página la usa con su título; el contenido real llega en fases posteriores.

export default function PagePlaceholder({
  titulo,
  descripcion,
  fase,
}: {
  titulo: string;
  descripcion: string;
  fase: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
        {fase}
      </span>
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
        {titulo}
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">{descripcion}</p>

      <div className="mt-10 grid place-items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-20 text-center">
        <p className="text-slate-500">Contenido próximamente.</p>
        <p className="mt-1 text-sm text-slate-400">
          Esta sección se construye en una fase posterior del plan.
        </p>
      </div>
    </section>
  );
}
