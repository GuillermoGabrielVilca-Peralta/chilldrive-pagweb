// Fuente única del contenido/configuración del sitio. Editar aquí, no en los componentes.

export const site = {
  nombre: "ChillDrive",
  tagline: "Conducción inteligente, recompensada.",
  descripcion:
    "Sistema de detección vehicular y scoring de conductores: la IA puntúa tu manejo " +
    "0–100, ganas puntos ChillDrive y los canjeas por premios de aliados.",
  // /descargar = página interna de descarga; actualizar apkUrl ahí cuando el APK esté hospedado.
  appUrl: "/descargar",
};

export const appInfo = {
  version: "1.0",
  platform: "Android",
  minAndroid: "Android 6.0 (Marshmallow)",
  tamano: "~80 MB",
  // URL real del APK cuando esté disponible; "#" mientras no hay host.
  apkUrl: "#" as string,
  deepLink: "chilldrive://",
  instrucciones: [
    "Pulsa «Descargar APK» y espera a que termine la descarga.",
    "Abre el archivo descargado desde la barra de notificaciones o el explorador de archivos.",
    "Si Android muestra «Fuentes desconocidas»: ve a Ajustes → Seguridad y activa «Instalar apps de fuentes desconocidas» para tu navegador.",
    "Toca «Instalar» y espera unos segundos hasta que termine.",
    "Abre ChillDrive, crea tu cuenta y registra tu primer vehículo.",
  ],
  notaMiui:
    "En teléfonos Xiaomi / MIUI: ve a Ajustes → Contraseña y seguridad → Instalar via USB, actívalo, y acepta el diálogo de instalación que aparece en pantalla.",
  requisitos: [
    "Android 6.0 (Marshmallow) o superior",
    "Cámara trasera (detección visual YOLO on-device)",
    "GPS habilitado (recorrido de ruta y telemática)",
    "Acelerómetro (detección de maniobras por sensores)",
    "Conexión a internet para sincronizar (funciona offline en viaje)",
    "~80 MB de espacio libre",
  ],
};

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/avances", label: "Avances" },
  { href: "/pruebas", label: "Pruebas" },
  { href: "/entrevistas", label: "Entrevistas" },
  { href: "/aliados", label: "Aliados" },
  { href: "/demo-admin", label: "Demo Admin" },
];

// ---------- INICIO ----------

export const estadisticas: { valor: string; etiqueta: string }[] = [
  { valor: "0–100", etiqueta: "Score de conducción por viaje" },
  { valor: "5", etiqueta: "Categorías evaluadas" },
  { valor: "< 1 s", etiqueta: "Detección on-device sin internet" },
  { valor: "100%", etiqueta: "Offline-first con sync automático" },
];

export const pasos: { paso: string; titulo: string; desc: string }[] = [
  {
    paso: "01",
    titulo: "Registra tu vehículo",
    desc: "Crea tu cuenta, añade tu placa y vincula la cámara. En segundos estás listo para el primer viaje.",
  },
  {
    paso: "02",
    titulo: "Activa la detección",
    desc: "La IA detecta frenadas bruscas, aceleraciones, giros y uso del celular en tiempo real — sin necesidad de internet.",
  },
  {
    paso: "03",
    titulo: "Recibe tu calificación",
    desc: "Al terminar el viaje obtienes un score 0–100 con desglose por categoría: Velocidad, Frenado, Aceleración, Giros y Celular.",
  },
  {
    paso: "04",
    titulo: "Canjea tus puntos",
    desc: "Cada viaje seguro acumula ChillPoints. Canjéalos por descuentos y beneficios en nuestros aliados con un QR único.",
  },
];

export const caracteristicas: { titulo: string; desc: string; icono: string }[] = [
  {
    icono: "cpu",
    titulo: "Detección on-device",
    desc: "YOLO TFLite corre directamente en el teléfono. Sin latencia de red, sin costos de API de visión por computadora.",
  },
  {
    icono: "sensor",
    titulo: "Telemática por sensores",
    desc: "El acelerómetro y el GPS del celular detectan maniobras bruscas con umbrales calibrados en conducción real.",
  },
  {
    icono: "offline",
    titulo: "Offline-first",
    desc: "Los eventos se guardan localmente en SQLite y se sincronizan al volver la conexión, con idempotencia garantizada.",
  },
  {
    icono: "score",
    titulo: "Scoring por categorías",
    desc: "Cada evento descuenta puntos de su categoría. El score refleja dónde mejorar: frenado, velocidad, giros, celular.",
  },
  {
    icono: "puntos",
    titulo: "Puntos y recompensas",
    desc: "Sistema de niveles Bronce→Diamante con ledger inmutable de movimientos. Los canjes generan un QR con pgcrypto.",
  },
  {
    icono: "mapa",
    titulo: "Historial de rutas",
    desc: "Cada viaje guarda el recorrido GPS. El mapa de ruta se visualiza en la app junto a la calificación del viaje.",
  },
];

// ---------- AVANCES ----------

export type FaseEstado = "Completada" | "En progreso" | "Pendiente";

export interface Fase {
  id: string;
  nombre: string;
  estado: FaseEstado;
  fecha: string;
  items: string[];
}

export const fases: Fase[] = [
  {
    id: "A",
    nombre: "Core del sistema",
    estado: "Completada",
    fecha: "Marzo 2026",
    items: [
      "Registro y autenticación JWT de usuarios",
      "Gestión de vehículos y cámaras",
      "Flujo completo de viajes: iniciar → eventos → finalizar",
      "Score 0–100 por viaje basado en eventos de conducción",
      "API REST documentada en Swagger (ASP.NET Core + PostgreSQL)",
    ],
  },
  {
    id: "B",
    nombre: "Puntos y aliados",
    estado: "Completada",
    fecha: "Abril 2026",
    items: [
      "Sistema de ChillPoints con ledger inmutable (movimientos_puntos)",
      "Niveles de conductor: Bronce → Plata → Oro → Platino → Diamante",
      "Módulo de aliados y recompensas configurables",
      "Canjes con código QR criptográfico (pgcrypto)",
      "Ranking público de conductores",
    ],
  },
  {
    id: "C",
    nombre: "Eventos offline e idempotencia",
    estado: "Completada",
    fecha: "Mayo 2026",
    items: [
      "Outbox SQLite en la app: los eventos se guardan antes de enviar",
      "Sincronización automática al recuperar conexión (backoff 5→60 s)",
      "Idempotencia via idLocal: el mismo evento no se duplica si se reintenta",
      "Guard de pertenencia: un evento solo aplica al viaje del conductor activo",
      "Anti-flood: eventos del mismo tipo en ±3 s de detección se rechazan",
    ],
  },
  {
    id: "C.2",
    nombre: "Telemática por sensores",
    estado: "Completada",
    fecha: "Junio 2026",
    items: [
      "Detección de frenado brusco: pico de acelerómetro ≥ 150 ms + delta GPS",
      "Detección de aceleración brusca con el mismo criterio longitudinal",
      "Detección de giro brusco por delta de heading GPS (sin requerir pico longitudinal)",
      "Detección de uso de celular durante la conducción",
      "Tiempo de detección del cliente como fuente de verdad (correcto orden offline)",
    ],
  },
  {
    id: "D",
    nombre: "Calificación por viaje",
    estado: "Completada",
    fecha: "Junio 2026",
    items: [
      "Tab 'Calificación' en el detalle de cada viaje en la app",
      "Score global + desglose en 5 categorías con impacto por evento",
      "Anillo de progreso visual + barras por categoría con etiqueta (Excelente/Bueno/Mejorar)",
      "Funciona completamente offline: calculado en la app desde los eventos locales",
    ],
  },
  {
    id: "Web",
    nombre: "Web informativa y panel demo",
    estado: "En progreso",
    fecha: "Julio 2026",
    items: [
      "Landing informativa con Next.js 16 + React 19 + Tailwind 4 + Docker",
      "Secciones: Avances, Pruebas, Entrevistas, Aliados con contenido real",
      "Panel demo de administrador con ranking en vivo (BFF → API ChillDrive)",
      "Página 404 personalizada y estructura completa App Router",
    ],
  },
];

// ---------- PRUEBAS ----------

export interface Prueba {
  tipo: string;
  cantidad: string;
  descripcion: string;
  resultados: string[];
}

export const pruebas: Prueba[] = [
  {
    tipo: "Tests unitarios",
    cantidad: "20+ tests",
    descripcion: "xUnit + Moq + FakeUnitOfWork — corren sin base de datos real, en CI.",
    resultados: [
      "ViajeServiceTests: iniciar, finalizar, cancelar, retomar viaje del día, cerrar viaje huérfano",
      "EventoServiceTests: idempotencia (idLocal), pertenencia, anti-flood, fecha de detección",
      "CanjeServiceTests: generación de QR, validación de puntos suficientes",
      "100% de los tests en verde en el build actual",
    ],
  },
  {
    tipo: "Prueba de campo",
    cantidad: "Dispositivo real",
    descripcion: "Manejo real en zona urbana de Lima con Xiaomi Redmi Note, detección activada.",
    resultados: [
      "Frenado brusco detectado correctamente en paradas de semáforo",
      "Aceleración brusca detectada al salir de cruce",
      "Giro brusco detectado en curva cerrada",
      "Uso de celular detectado al levantar el teléfono en movimiento",
    ],
  },
  {
    tipo: "Prueba offline",
    cantidad: "Modo avión",
    descripcion: "Viaje completo en modo avión: eventos en outbox local, sync al reconectar.",
    resultados: [
      "12 eventos almacenados en SQLite sin pérdida ni error",
      "Sincronización exitosa al reconectar: todos enviados sin duplicados",
      "Idempotencia confirmada: retransmisión de los 12 devuelve 200 sin duplicar puntos",
      "Score calculado correctamente en app sin conexión",
    ],
  },
  {
    tipo: "Prueba de scoring",
    cantidad: "Viaje completo",
    descripcion: "Viaje de 8 km / 15 min con múltiples eventos inducidos.",
    resultados: [
      "Score inicial 100 → descuentos por eventos → score final 71",
      "Desglose: Velocidad 100, Frenado 75, Aceleración 80, Giros 85, Celular 70",
      "Puntos acreditados al ledger inmutable post-viaje",
      "Historial de ruta GPS visualizado en mapa OpenStreetMap en la app",
    ],
  },
];

// ---------- ENTREVISTAS ----------

export interface Entrevista {
  perfil: string;
  codigo: string;
  ciudad: string;
  extracto: string;
  insights: string[];
}

export const entrevistas: Entrevista[] = [
  {
    perfil: "Conductor de rideshare",
    codigo: "E-01",
    ciudad: "Lima",
    extracto:
      "«Me interesa saber si soy un buen conductor — la app de la empresa solo me da la calificación del pasajero, no la de mi manejo real.»",
    insights: [
      "Quiere feedback objetivo del manejo, independiente de la opinión del pasajero",
      "Le preocupa el consumo de combustible (manejo brusco = más gasto)",
      "Valora recompensas en gasolineras y supermercados",
    ],
  },
  {
    perfil: "Conductor particular",
    codigo: "E-02",
    ciudad: "Lima",
    extracto:
      "«Si me dan puntos por manejar bien, los canjearía en el super. Es como los puntos del banco pero por conducir.»",
    insights: [
      "Analogía espontánea con programas de fidelización conocidos",
      "Acepta que el teléfono esté activo si entiende el beneficio que obtiene",
      "Prefiere que la detección corra en segundo plano sin ocupar la pantalla",
    ],
  },
  {
    perfil: "Responsable de flota logística",
    codigo: "E-03",
    ciudad: "Lima",
    extracto:
      "«Tenemos 15 camionetas. No sabemos cómo maneja cada uno. Si hay un sistema que nos muestre eso en un panel, lo usaríamos.»",
    insights: [
      "Necesidad clara de visibilidad de la flota desde un panel web",
      "Interés en alertas automáticas por mal comportamiento al volante",
      "Potencial cliente del módulo de administración / empresa (Fase 2 web)",
    ],
  },
  {
    perfil: "Aliado potencial (retail)",
    codigo: "E-04",
    ciudad: "Lima",
    extracto:
      "«Si el sistema trae conductores a nuestro local con descuentos, nos interesa. El QR de canje es una buena idea para evitar fraudes.»",
    insights: [
      "El QR criptográfico de un solo uso reduce el riesgo de fraude",
      "Prefiere descuentos en porcentaje a montos fijos (más flexible)",
      "Abierto a la integración si hay volumen de conductores activos",
    ],
  },
];

// ---------- ALIADOS ----------

export interface Aliado {
  nombre: string;
  categoria: string;
  descripcion: string;
  beneficio: string;
}

export const aliados: Aliado[] = [
  {
    nombre: "Primax",
    categoria: "Combustible",
    descripcion: "Red de grifos a nivel nacional con presencia en Lima y provincias.",
    beneficio: "Hasta 5% de descuento en carga de combustible",
  },
  {
    nombre: "Tottus",
    categoria: "Supermercado",
    descripcion: "Cadena de supermercados de alcance nacional con variedad de productos.",
    beneficio: "Descuento en compras mayores a S/ 50",
  },
  {
    nombre: "Bembos",
    categoria: "Restaurante",
    descripcion: "Cadena peruana de hamburguesas con presencia en Lima y principales ciudades.",
    beneficio: "Producto gratis o combo con descuento al canjear",
  },
  {
    nombre: "AutoZone",
    categoria: "Mantenimiento",
    descripcion: "Tienda especializada en accesorios y repuestos para vehículos.",
    beneficio: "10% de descuento en compras de mantenimiento",
  },
  {
    nombre: "Pizza Hut",
    categoria: "Restaurante",
    descripcion: "Cadena internacional con locales en Lima y provincias del Perú.",
    beneficio: "Descuento en delivery y consumo en local",
  },
  {
    nombre: "Plaza Vea",
    categoria: "Supermercado",
    descripcion: "Supermercado presente en Lima, Arequipa, Trujillo y otras ciudades.",
    beneficio: "Descuentos en productos seleccionados de la semana",
  },
];

// Categorías únicas para filtros / badges de aliados
export const categoriasAliados = [...new Set(aliados.map((a) => a.categoria))];

// ---------- DEMO ADMIN — datos mock ----------

export const kpisAdmin = [
  { etiqueta: "Conductores registrados", valor: "48", delta: "+3 esta semana" },
  { etiqueta: "Viajes activos ahora", valor: "3", delta: "en tiempo real" },
  { etiqueta: "Score promedio hoy", valor: "78", delta: "de 0–100" },
  { etiqueta: "Canjes esta semana", valor: "12", delta: "+4 vs. semana ant." },
];

export interface VehiculoActivo {
  conductor: string;
  placa: string;
  ruta: string;
  scoreActual: number;
  ultimoEvento: string | null;
  inicio: string;
}

export const vehiculosActivos: VehiculoActivo[] = [
  {
    conductor: "Carlos M.",
    placa: "ABC-123",
    ruta: "San Isidro → Miraflores",
    scoreActual: 85,
    ultimoEvento: null,
    inicio: "hace 12 min",
  },
  {
    conductor: "Ana R.",
    placa: "XYZ-456",
    ruta: "La Molina → Surco",
    scoreActual: 92,
    ultimoEvento: null,
    inicio: "hace 5 min",
  },
  {
    conductor: "Luis T.",
    placa: "DEF-789",
    ruta: "Lince → San Borja",
    scoreActual: 71,
    ultimoEvento: "Frenado brusco",
    inicio: "hace 28 min",
  },
];

export interface EventoReciente {
  conductor: string;
  tipo: string;
  viaje: string;
  hora: string;
  negativo: boolean;
}

export const actividadReciente: EventoReciente[] = [
  { conductor: "Luis T.", tipo: "Frenado brusco", viaje: "Lince → San Borja", hora: "hace 2 min", negativo: true },
  { conductor: "Ana R.", tipo: "Viaje iniciado", viaje: "La Molina → Surco", hora: "hace 5 min", negativo: false },
  { conductor: "Carlos M.", tipo: "Uso de celular", viaje: "San Isidro → Miraflores", hora: "hace 9 min", negativo: true },
  { conductor: "María P.", tipo: "Viaje finalizado", viaje: "Barranco → Chorrillos", hora: "hace 15 min", negativo: false },
  { conductor: "José R.", tipo: "Canje realizado", viaje: "Tottus — S/ 15 off", hora: "hace 22 min", negativo: false },
];

// Ranking mock para cuando el backend no está accesible (fallback)
import type { RankingItem } from "./api";

export const rankingMock: RankingItem[] = [
  { usuarioId: 1, conductor: "María Pérez López", tipoConductor: "Particular", puntosActuales: 2150, puntosHistoricos: 4100, nivel: "Diamante", puntajePromedio: 93.2, totalViajes: 62 },
  { usuarioId: 2, conductor: "Jorge Ramírez S.", tipoConductor: "Particular", puntosActuales: 1870, puntosHistoricos: 3500, nivel: "Platino", puntajePromedio: 88.7, totalViajes: 48 },
  { usuarioId: 3, conductor: "Ana Torres V.", tipoConductor: "Particular", puntosActuales: 1540, puntosHistoricos: 2900, nivel: "Oro", puntajePromedio: 84.1, totalViajes: 41 },
  { usuarioId: 4, conductor: "Carlos Mendoza R.", tipoConductor: "Particular", puntosActuales: 1230, puntosHistoricos: 2200, nivel: "Oro", puntajePromedio: 80.5, totalViajes: 35 },
  { usuarioId: 5, conductor: "Luis Huamán C.", tipoConductor: "Particular", puntosActuales: 980, puntosHistoricos: 1700, nivel: "Plata", puntajePromedio: 76.3, totalViajes: 29 },
  { usuarioId: 6, conductor: "Rosa Chávez M.", tipoConductor: "Particular", puntosActuales: 750, puntosHistoricos: 1200, nivel: "Plata", puntajePromedio: 72.8, totalViajes: 22 },
  { usuarioId: 7, conductor: "Pedro Quispe A.", tipoConductor: "Particular", puntosActuales: 520, puntosHistoricos: 850, nivel: "Bronce", puntajePromedio: 68.4, totalViajes: 17 },
  { usuarioId: 8, conductor: "Sofía Vargas R.", tipoConductor: "Particular", puntosActuales: 310, puntosHistoricos: 500, nivel: "Bronce", puntajePromedio: 62.0, totalViajes: 11 },
];
