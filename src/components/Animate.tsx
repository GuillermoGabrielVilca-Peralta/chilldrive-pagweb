"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

// Aparece con slide-up cuando entra al viewport (o al montar si ya está visible)
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Contenedor que dispara animaciones de hijos en cascada al entrar al viewport
export function StaggerList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hijo de StaggerList — aplica className para que el grid/flex no se rompa
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Wrapper que muestra/oculta con fade — útil para mensajes condicionales
export { AnimatePresence };
