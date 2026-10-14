import { FadeIn } from "@/components/Animate";

// Encabezado común de las páginas internas: etiqueta + título + bajada.
export default function Encabezado({
  etiqueta,
  titulo,
  bajada,
}: {
  etiqueta: string;
  titulo: string;
  bajada: string;
}) {
  return (
    <FadeIn>
      <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
        {etiqueta}
      </span>
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{titulo}</h1>
      <p className="mt-3 max-w-2xl text-slate-600">{bajada}</p>
    </FadeIn>
  );
}
