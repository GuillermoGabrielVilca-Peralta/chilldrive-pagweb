import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: `${site.nombre} — ${site.tagline}`,
    template: `%s · ${site.nombre}`,
  },
  description: site.descripcion,
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: site.nombre,
    title: `${site.nombre} — ${site.tagline}`,
    description: site.descripcion,
  },
  twitter: {
    card: "summary",
    title: `${site.nombre} — ${site.tagline}`,
    description: site.descripcion,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        {/* Enlace de accesibilidad: visible solo al navegar con teclado */}
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido-principal" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
