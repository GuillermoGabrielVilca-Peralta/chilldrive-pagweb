# Imagen Docker de la web (Next.js, salida 'standalone').
# Multi-stage: instala deps, compila, y corre solo lo necesario → imagen pequeña.

FROM node:22-alpine AS base

# --- deps: instala dependencias con el lockfile ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# --- builder: compila la app (standalone activado solo aquí) ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV BUILD_TARGET=docker
RUN npm run build

# --- runner: imagen final mínima ---
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000 HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
