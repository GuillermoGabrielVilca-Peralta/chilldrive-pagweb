// Fuente única del contenido/configuración del sitio. Editar aquí, no en los componentes.

export const site = {
  nombre: "ChillDrive",
  tagline: "Conducción inteligente, recompensada.",
  descripcion:
    "ChillDrive evalúa tu forma de manejar desde tu celular, te muestra en qué mejorar y " +
    "premia la conducción segura con beneficios en comercios aliados.",
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
    "GPS activado, para registrar tu recorrido",
    "Acelerómetro, para detectar maniobras bruscas",
    "Cámara trasera, para la detección de señales y peatones",
    "Internet para sincronizar (durante el viaje funciona sin señal)",
    "~80 MB de espacio libre",
  ],
};

export const contacto = {
  correo: "ChillDrivePeru@gmail.com",
  whatsapp: "+51 937 395 614",
  // Enlace directo al chat (formato internacional, sin espacios ni "+").
  whatsappUrl: "https://wa.me/51937395614",
  ciudad: "Perú",
};

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/planes", label: "Planes" },
  { href: "/aliados", label: "Aliados" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

// ---------- INICIO ----------

export const estadisticas: { valor: string; etiqueta: string }[] = [
  { valor: "0–100", etiqueta: "Puntaje de manejo en cada viaje" },
  { valor: "5", etiqueta: "Aspectos de tu conducción evaluados" },
  { valor: "Sin señal", etiqueta: "Registra tu viaje aunque no tengas internet" },
  { valor: "QR único", etiqueta: "Canjes seguros en comercios aliados" },
];

export const pasos: { paso: string; titulo: string; desc: string }[] = [
  {
    paso: "01",
    titulo: "Crea tu cuenta",
    desc: "Descarga la app, regístrate y añade tu vehículo con su placa. En segundos estás listo para tu primer viaje.",
  },
  {
    paso: "02",
    titulo: "Maneja como siempre",
    desc: "Inicia el viaje y la app detecta frenadas bruscas, aceleraciones, giros y uso del celular mientras conduces.",
  },
  {
    paso: "03",
    titulo: "Recibe tu calificación",
    desc: "Al terminar obtienes un puntaje de 0 a 100 y ves en el mapa dónde ocurrió cada infracción.",
  },
  {
    paso: "04",
    titulo: "Canjea tus premios",
    desc: "Cada viaje seguro suma puntos. Canjéalos por beneficios en comercios aliados con un código QR único.",
  },
];

export const beneficios: { icono: string; titulo: string; desc: string }[] = [
  {
    icono: "puntaje",
    titulo: "Conoce tu forma de manejar",
    desc: "Un puntaje de 0 a 100 en cada viaje, separado en velocidad, frenado, aceleración, giros y uso del celular.",
  },
  {
    icono: "mapa",
    titulo: "Mira dónde ocurrió cada infracción",
    desc: "El mapa de tu recorrido marca el lugar exacto de cada maniobra brusca para que sepas dónde tener más cuidado.",
  },
  {
    icono: "regalo",
    titulo: "Gana premios por manejar bien",
    desc: "Acumula puntos, sube de nivel de Bronce a Diamante y canjéalos en nuestra red de comercios aliados.",
  },
  {
    icono: "trofeo",
    titulo: "Retos y ranking",
    desc: "Completa retos semanales, mantén tu racha de buen manejo y compite en el ranking de conductores.",
  },
  {
    icono: "celular",
    titulo: "Solo necesitas tu celular",
    desc: "Sin instalar equipos en tu vehículo: la app usa el GPS y los sensores de tu teléfono.",
  },
  {
    icono: "sinSenal",
    titulo: "Funciona aunque pierdas señal",
    desc: "La app registra tu viaje sin internet y sincroniza todo cuando vuelves a tener conexión.",
  },
];

// ---------- SERVICIOS ----------

export type EstadoServicio = "Disponible" | "Próximamente";

export interface Servicio {
  id: string;
  icono: string;
  publico: string;
  titulo: string;
  desc: string;
  estado: EstadoServicio;
  puntos: string[];
  cta: { texto: string; href: string };
}

export const servicios: Servicio[] = [
  {
    id: "conductores",
    icono: "conductor",
    publico: "Para conductores",
    titulo: "Maneja mejor y gana premios",
    desc: "Para conductores particulares y profesionales que quieren saber cómo manejan y ser recompensados por hacerlo bien.",
    estado: "Disponible",
    puntos: [
      "Puntaje de 0 a 100 en cada viaje, con desglose por categoría",
      "Mapa del recorrido con el lugar exacto de cada infracción",
      "Alertas por voz cuando ocurre una maniobra brusca",
      "Puntos, niveles, retos semanales y ranking de conductores",
      "Canje de beneficios en comercios aliados con código QR",
    ],
    cta: { texto: "Descargar la app", href: "/descargar" },
  },
  {
    id: "empresas",
    icono: "empresa",
    publico: "Para empresas con flotas",
    titulo: "Conoce cómo manejan tus choferes",
    desc: "Para empresas de transporte, delivery y logística que necesitan visibilidad sobre la conducción de su equipo.",
    estado: "Próximamente",
    puntos: [
      "Panel web con el puntaje de cada conductor de tu flota",
      "Ranking interno para reconocer a los mejores choferes",
      "Alertas de conducción riesgosa",
      "Historial de viajes e infracciones por conductor",
    ],
    cta: { texto: "Solicitar información", href: "/contacto" },
  },
  {
    id: "comercios",
    icono: "comercio",
    publico: "Para comercios",
    titulo: "Atrae nuevos clientes a tu negocio",
    desc: "Para grifos, restaurantes, supermercados y talleres que quieren llegar a conductores con un beneficio atractivo.",
    estado: "Disponible",
    puntos: [
      "Publica tus beneficios dentro de la app ChillDrive",
      "Los conductores los canjean con los puntos que ganan manejando",
      "Cada canje genera un código QR único que evita fraudes",
      "Solo pagas una comisión por cada canje realizado",
    ],
    cta: { texto: "Quiero ser aliado", href: "/contacto" },
  },
];

export const capturasApp: { src: string; alt: string; titulo: string }[] = [
  { src: "/img/app/app-inicio.jpg", alt: "Pantalla de inicio de ChillDrive con ranking, racha, nivel y retos", titulo: "Tu estatus del día" },
  { src: "/img/app/app-calificacion.jpg", alt: "Calificación de un viaje: 83 de 100 con desglose por categoría", titulo: "Calificación de cada viaje" },
  { src: "/img/app/app-mapa.jpg", alt: "Mapa del viaje con íconos en el lugar de cada infracción", titulo: "Mapa de infracciones" },
];

// ---------- PLANES ----------

export interface Plan {
  nombre: string;
  precio: string;
  periodo: string;
  para: string;
  destacado: boolean;
  estado?: EstadoServicio;
  incluye: string[];
  cta: { texto: string; href: string };
}

export const planes: Plan[] = [
  {
    nombre: "Gratuito",
    precio: "S/ 0",
    periodo: "para siempre",
    para: "Conductores particulares",
    destacado: false,
    incluye: [
      "Puntaje de 0 a 100 en cada viaje",
      "Desglose por categoría de manejo",
      "Mapa del recorrido con infracciones",
      "Puntos, niveles, retos y ranking",
      "Canje de beneficios con aliados",
    ],
    cta: { texto: "Descargar gratis", href: "/descargar" },
  },
  {
    nombre: "Profesional",
    precio: "S/ 15",
    periodo: "al mes",
    para: "Taxistas, delivery y mototaxis",
    destacado: true,
    incluye: [
      "Todo lo del plan Gratuito",
      "Perfil de conductor profesional por rubro",
      "Ranking con conductores de tu mismo rubro",
      "Historial completo de viajes y calificaciones",
      "Reporte de desempeño para mostrar a clientes o empresas",
    ],
    cta: { texto: "Empezar ahora", href: "/descargar" },
  },
  {
    nombre: "Empresas",
    precio: "A medida",
    periodo: "según tu flota",
    para: "Flotas de transporte y logística",
    destacado: false,
    estado: "Próximamente",
    incluye: [
      "Plan Profesional para todos tus conductores",
      "Panel web de monitoreo de la flota",
      "Alertas de conducción riesgosa",
      "Atención dedicada",
    ],
    cta: { texto: "Solicitar información", href: "/contacto" },
  },
];

export const metodosPago = ["Yape", "Plin", "Tarjeta", "Efectivo"];

// ---------- ALIADOS (por rubro, sin marcas) ----------

export const rubrosAliados: { icono: string; rubro: string; desc: string; beneficio: string }[] = [
  {
    icono: "combustible",
    rubro: "Combustible",
    desc: "Grifos y estaciones de servicio.",
    beneficio: "Descuentos en la carga de combustible",
  },
  {
    icono: "comida",
    rubro: "Gastronomía",
    desc: "Restaurantes, cafeterías y comida rápida.",
    beneficio: "Productos gratis o combos con descuento",
  },
  {
    icono: "carrito",
    rubro: "Supermercados y tiendas",
    desc: "Supermercados, minimarkets y retail.",
    beneficio: "Descuentos en tus compras",
  },
  {
    icono: "herramienta",
    rubro: "Mantenimiento vehicular",
    desc: "Talleres, lubricentros y lavado de autos.",
    beneficio: "Descuentos en cambio de aceite, lavado y repuestos",
  },
  {
    icono: "salud",
    rubro: "Salud",
    desc: "Farmacias y centros de salud.",
    beneficio: "Descuentos en productos y servicios de salud",
  },
  {
    icono: "entretenimiento",
    rubro: "Entretenimiento",
    desc: "Cines y actividades de ocio.",
    beneficio: "Entradas y experiencias con descuento",
  },
];

export const pasosCanje: { paso: string; titulo: string; desc: string }[] = [
  { paso: "1", titulo: "Acumula puntos", desc: "Cada viaje con buen manejo suma puntos a tu cuenta." },
  { paso: "2", titulo: "Elige un beneficio", desc: "Revisa en la app los beneficios disponibles de nuestros aliados." },
  { paso: "3", titulo: "Muestra tu QR", desc: "Presenta el código único en el comercio y disfruta tu beneficio." },
];

export const ventajasAliado: { icono: string; titulo: string; desc: string }[] = [
  { icono: "usuarios", titulo: "Nuevos clientes", desc: "Llega a conductores que buscan dónde usar sus puntos." },
  { icono: "qr", titulo: "Canjes seguros", desc: "Cada QR es único y de un solo uso: sin fraudes ni duplicados." },
  { icono: "grafico", titulo: "Pagas por resultados", desc: "Solo pagas una comisión por cada canje realizado." },
];

// ---------- NOSOTROS ----------

export const nosotros = {
  intro:
    "ChillDrive es una startup peruana que busca reducir la conducción riesgosa con una idea simple: " +
    "medir cómo manejamos y premiar a quienes lo hacen bien.",
  historia: [
    "ChillDrive nació en 2025 como un proyecto de emprendimiento en Tecsup. Antes de construir la " +
      "plataforma conversamos con conductores, responsables de flotas y comercios para entender sus necesidades.",
    "Los conductores nos dijeron que querían saber de forma objetiva cómo manejan, más allá de la " +
      "calificación de un pasajero. Las empresas con flotas no tenían forma de ver cómo conducen sus " +
      "choferes. Y los comercios buscaban nuevas formas de atraer clientes.",
    "ChillDrive une esas tres necesidades: el conductor mejora y gana premios, las empresas ganan " +
      "visibilidad y los comercios ganan clientes.",
    "En 2026 el proyecto tomó impulso: ganó competiciones y empezó a darse a conocer, consolidándose " +
      "como una propuesta de movilidad segura hecha en el Perú.",
  ],
  mision:
    "Promover una conducción más segura en el Perú, dando a cada conductor información clara sobre su " +
    "manejo y recompensas por mejorar.",
  vision:
    "Ser la plataforma de referencia en Latinoamérica para medir y premiar la conducción segura.",
  valores: [
    { icono: "escudo", titulo: "Seguridad", desc: "Cada función busca que menos personas se expongan a riesgos en la vía." },
    { icono: "puntaje", titulo: "Transparencia", desc: "El puntaje se calcula igual para todos y no se puede alterar desde la app." },
    { icono: "celular", titulo: "Simplicidad", desc: "Basta con un celular: sin equipos ni instalaciones en el vehículo." },
    { icono: "regalo", titulo: "Recompensa", desc: "Manejar bien siempre tiene que valer la pena." },
  ],
};

export const equipo: { nombre: string; cargo: string; rol: string }[] = [
  {
    nombre: "Guillermo Vilca",
    cargo: "CEO",
    rol: "Lidera la estrategia y el crecimiento de ChillDrive.",
  },
  {
    nombre: "Jorge Pino",
    cargo: "CTO",
    rol: "Dirige el desarrollo de la plataforma y la tecnología de detección.",
  },
  {
    nombre: "Wilder Salas",
    cargo: "COO",
    rol: "Gestiona las operaciones y la relación con aliados y empresas.",
  },
];
