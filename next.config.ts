import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 'standalone' solo se activa para Docker (imagen mínima).
  // Para Vercel no se necesita — Vercel gestiona el build por su cuenta.
  ...(process.env.BUILD_TARGET === "docker" ? { output: "standalone" } : {}),
};

export default nextConfig;
