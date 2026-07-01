import type { Metadata } from "next";
import { FadeIn } from "@/components/Animate";
import AliadosFiltro from "./AliadosFiltro";

export const metadata: Metadata = {
  title: "Aliados",
  description:
    "Red de aliados ChillDrive: marcas y comercios donde los conductores canjean sus ChillPoints por descuentos en combustible, supermercados, restaurantes y mantenimiento.",
};

export default function AliadosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Encabezado */}
      <FadeIn>
        <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          Red de aliados
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Aliados ChillDrive</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Las marcas y comercios donde los conductores canjean sus ChillPoints por descuentos y
          beneficios. Cada canje genera un QR de un solo uso verificado por la app del aliado.
        </p>
      </FadeIn>

      {/* Filtro interactivo + grid animado (Client Component) */}
      <AliadosFiltro />
    </div>
  );
}
