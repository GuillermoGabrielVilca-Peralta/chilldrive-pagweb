import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-brand">{site.nombre}</p>
          <p className="text-sm text-slate-500">{site.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-brand">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {site.nombre}. Startup peruana de movilidad segura.
      </div>
    </footer>
  );
}
