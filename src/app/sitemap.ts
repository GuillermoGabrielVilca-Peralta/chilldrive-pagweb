import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const rutas: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/",           priority: 1.0, freq: "weekly"  },
    { path: "/servicios",  priority: 0.9, freq: "monthly" },
    { path: "/descargar",  priority: 0.9, freq: "monthly" },
    { path: "/planes",     priority: 0.8, freq: "monthly" },
    { path: "/aliados",    priority: 0.8, freq: "monthly" },
    { path: "/nosotros",   priority: 0.7, freq: "monthly" },
    { path: "/contacto",   priority: 0.7, freq: "monthly" },
  ];

  return rutas.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
