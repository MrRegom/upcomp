/**
 * Contenido del sitio UpComp.
 *
 * Todo el texto vive acá para que se pueda editar sin tocar componentes.
 * Fuentes: upcomp.cl y Portafolio Corporativo 2026 (documentacion/).
 *
 * REGLA: no inventar cifras. Lo que no esté confirmado va marcado con
 * `porConfirmar: true` y se renderiza con la etiqueta correspondiente.
 */

export const empresa = {
  nombre: "UpComp",
  // Frase del Portafolio Corporativo 2026, pág. 1 — el eje de todo el sitio.
  tesis:
    "Un solo partner para diseñar, implementar, mantener y evolucionar la operación tecnológica.",
  email: "contacto@upcomp.cl",
  telefono: "+56 9 8279 4984",
  telefonoRaw: "+56982794984",
  direccion: "Nueva Providencia 2250, Oficina 804, Providencia",
  ciudad: "Santiago, Chile",
} as const;

/* ------------------------------------------------------------------ */
/*  Hero — las cuatro etapas de la operación                           */
/* ------------------------------------------------------------------ */

export type Etapa = {
  id: string;
  n: string;
  nombre: string;
  titular: string;
  descripcion: string;
  puntos: string[];
};

export const etapas: Etapa[] = [
  {
    id: "equipamiento",
    n: "01",
    nombre: "Equipamiento",
    titular: "El equipo correcto, no el más caro",
    descripcion:
      "Evaluamos software, carga de trabajo, memoria, GPU, almacenamiento y garantía antes de preparar una propuesta.",
    puntos: [
      "Workstations, notebooks y servidores",
      "Validación técnica previa a la cotización",
      "Respaldo oficial de fabricante",
    ],
  },
  {
    id: "infraestructura",
    n: "02",
    nombre: "Infraestructura",
    titular: "Donde la operación efectivamente corre",
    descripcion:
      "Redes, virtualización, respaldo y servidores en nube o privados, dimensionados para lo que el negocio necesita hoy y en dos años más.",
    puntos: [
      "Networking, Wi-Fi y segmentación",
      "Servidores en nube o privados",
      "Respaldo y continuidad",
    ],
  },
  {
    id: "software",
    n: "03",
    nombre: "Software",
    titular: "Cuando el estándar no resuelve el proceso real",
    descripcion:
      "Diseñamos y construimos la solución: aplicaciones, automatización, integraciones con terceros y analítica sobre el proceso real.",
    puntos: [
      "Aplicaciones y portales empresariales",
      "Integraciones y APIs con mayoristas y sistemas internos",
      "Automatización e inteligencia artificial privada",
    ],
  },
  {
    id: "soporte",
    n: "04",
    nombre: "Soporte",
    titular: "La parte que sostiene todo lo anterior",
    descripcion:
      "Mesa de ayuda, mantención preventiva, garantías gestionadas y renovación planificada para que el cliente no coordine proveedores.",
    puntos: [
      "Mesa de ayuda y gestión de tickets",
      "Mantención preventiva y correctiva",
      "Renovación planificada del parque",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Los cuatro pilares del Portafolio 2026                             */
/* ------------------------------------------------------------------ */

export type Pilar = {
  id: string;
  n: string;
  nombre: string;
  titular: string;
  intro: string;
  items: { titulo: string; texto: string }[];
  nuevo?: boolean;
};

export const pilares: Pilar[] = [
  {
    id: "equipamiento",
    n: "01",
    nombre: "Equipamiento especializado",
    titular: "Cinco nichos donde la selección técnica hace la diferencia",
    intro:
      "El portafolio se concentra donde elegir mal sale caro: rendimiento sostenido, compatibilidad con software profesional y disponibilidad real.",
    items: [
      {
        titulo: "Workstations profesionales",
        texto: "Ingeniería, CAD/BIM, render, geociencias, simulación e IA.",
      },
      {
        titulo: "Notebooks corporativos",
        texto: "Movilidad, flotas, trabajo híbrido y usuarios ejecutivos o técnicos.",
      },
      {
        titulo: "Servidores empresariales",
        texto: "Virtualización, almacenamiento, respaldo y operación crítica.",
      },
      {
        titulo: "Salas de reuniones",
        texto: "Videocolaboración, audio, cámaras, control y puesta en marcha.",
      },
      {
        titulo: "Redes empresariales",
        texto: "Switching, Wi-Fi, seguridad, segmentación y administración.",
      },
    ],
  },
  {
    id: "servicios",
    n: "02",
    nombre: "Servicios integrales",
    titular: "Operación, soporte y continuidad",
    intro:
      "Servicios orientados a reducir carga interna, mantener usuarios operativos y extender el ciclo de vida de la tecnología.",
    items: [
      {
        titulo: "Servicio técnico",
        texto:
          "Diagnóstico, mantención preventiva, reparación, upgrades y soporte remoto o presencial.",
      },
      {
        titulo: "Outsourcing IT",
        texto:
          "Mesa de ayuda, tickets, soporte a usuarios, administración operativa y reportabilidad.",
      },
      {
        titulo: "Garantías UpComp",
        texto:
          "Plan estándar para gestión ordenada de incidentes; plan premium para mayor prioridad y continuidad.",
      },
      {
        titulo: "Puesto de trabajo gestionado",
        texto:
          "Hardware y servicios en un solo bundle: preparación, soporte, garantía y renovación planificada.",
      },
    ],
  },
  {
    id: "software",
    n: "03",
    nombre: "Software a medida",
    titular: "Cuando una plataforma estándar no resuelve el proceso real",
    intro:
      "Desarrollo end-to-end, desde el levantamiento hasta la puesta en producción: arquitectura, experiencia de usuario, integraciones y soporte evolutivo.",
    nuevo: true,
    items: [
      {
        titulo: "Aplicaciones y portales",
        texto:
          "Sistemas web, portales internos, backoffice y soluciones orientadas a usuarios o clientes.",
      },
      {
        titulo: "Automatización de procesos",
        texto:
          "Flujos, tareas repetitivas, validaciones y procesos que hoy dependen de operación manual.",
      },
      {
        titulo: "Integraciones y APIs",
        texto:
          "Conexión entre plataformas, servicios externos, sistemas internos y fuentes de datos.",
      },
      {
        titulo: "Sistemas internos y analítica",
        texto:
          "Herramientas operativas, paneles, trazabilidad y soluciones construidas alrededor del proceso real.",
      },
    ],
  },
  {
    id: "financiamiento",
    n: "04",
    nombre: "Financiamiento empresas",
    titular: "La estructura comercial se adapta al proyecto",
    intro:
      "El modelo se define según el tamaño del proyecto, el equipamiento, los servicios asociados y la evaluación correspondiente.",
    items: [
      {
        titulo: "Compra directa",
        texto:
          "Pago tradicional de equipamiento y servicios bajo las condiciones comerciales acordadas.",
      },
      {
        titulo: "Financiamiento directo UpComp",
        texto:
          "Disponible para proyectos seleccionados y sujeto a evaluación comercial interna.",
      },
      {
        titulo: "Financiamiento con entidad externa",
        texto:
          "Alternativa para proyectos de mayor escala, sujeta a evaluación y aprobación de la entidad financiera.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Capacidades nuevas — lo que suma la alianza                        */
/* ------------------------------------------------------------------ */

export type Capacidad = {
  id: string;
  nombre: string;
  claim: string;
  texto: string;
  detalle: string[];
  modelo: string;
};

export const capacidades: Capacidad[] = [
  {
    id: "servidor",
    nombre: "Servidor gestionado",
    claim: "En la nube o dentro de la empresa",
    texto:
      "Infraestructura administrada por UpComp: aprovisionamiento, monitoreo, respaldo y actualizaciones. El cliente usa el servicio, no administra el servidor.",
    detalle: [
      "Nube pública o servidor privado en dependencias del cliente",
      "Monitoreo, respaldo y parches incluidos",
      "IP fija, certificados y control de accesos",
    ],
    modelo: "Suscripción mensual",
  },
  {
    id: "bot",
    nombre: "Bot de WhatsApp",
    claim: "Atención que responde a cualquier hora",
    texto:
      "Atención automatizada sobre WhatsApp Business: responde consultas frecuentes, califica al interesado y deriva a una persona con el contexto ya recogido.",
    detalle: [
      "API oficial de WhatsApp Business",
      "Derivación a ejecutivo con historial",
      "Integración con el sistema de tickets o CRM",
    ],
    modelo: "Implementación + mensual",
  },
  {
    id: "ia",
    nombre: "IA local y privada",
    claim: "Los datos no salen de la empresa",
    texto:
      "Modelos ejecutándose en infraestructura propia del cliente. Consultas sobre documentación interna, contratos y procedimientos sin enviar información a servicios externos.",
    detalle: [
      "Corre sobre workstation o servidor propio",
      "Búsqueda sobre documentación interna",
      "Sin envío de datos a terceros",
    ],
    modelo: "Equipo + implementación + soporte",
  },
  {
    id: "integracion",
    nombre: "Integración con mayoristas",
    claim: "Catálogo, stock y precio sincronizados",
    texto:
      "Conexión con las APIs del mayorista para mantener catálogo, inventario y lista de precios actualizados de forma automática, y emitir órdenes de compra desde el propio sistema.",
    detalle: [
      "Sincronización periódica de catálogo y precios",
      "Consulta de stock y emisión de órdenes",
      "Middleware propio con base de datos y trazabilidad",
    ],
    modelo: "Proyecto + mantención",
  },
];

/* ------------------------------------------------------------------ */
/*  Configurador de workstation                                        */
/*  Contenido de las plataformas: guía de selección de upcomp.cl       */
/* ------------------------------------------------------------------ */

export type Plataforma = {
  id: "threadripper" | "intel" | "ryzen";
  etiqueta: string;
  nombre: string;
  resumen: string;
  paraQuien: string[];
  equipoRef: string;
};

export const plataformas: Plataforma[] = [
  {
    id: "threadripper",
    etiqueta: "Máximo rendimiento",
    nombre: "AMD Threadripper / Threadripper PRO",
    resumen:
      "Para cargas intensivas donde importan muchos núcleos, gran capacidad de memoria, estabilidad y rendimiento sostenido.",
    paraQuien: [
      "Renderizado, simulación y cálculo avanzado",
      "Ingeniería, CAD/BIM, fotogrametría y geociencias",
      "IA local, datasets pesados y flujos profesionales",
    ],
    equipoRef:
      "Workstation AMD Threadripper 9960X · RTX 5090 32GB · 256GB ECC · 2TB Gen5 · Wi-Fi 7",
  },
  {
    id: "intel",
    etiqueta: "Equilibrio profesional",
    nombre: "Intel Core / Core Ultra",
    resumen:
      "Alternativa equilibrada para quienes necesitan buen rendimiento por núcleo, fluidez general y compatibilidad con software profesional.",
    paraQuien: [
      "Diseño, arquitectura, CAD y productividad avanzada",
      "Software con alto rendimiento single-thread",
      "Workstations compactas, eficientes y versátiles",
    ],
    equipoRef:
      "Workstation Intel Core Ultra 9 285K · RTX 5090 32GB · 64GB DDR5 · 1TB NVMe · Wi-Fi 7",
  },
  {
    id: "ryzen",
    etiqueta: "Potencia versátil",
    nombre: "AMD Ryzen Profesional",
    resumen:
      "Estaciones potentes y competitivas para creación, edición, desarrollo y trabajo profesional exigente.",
    paraQuien: [
      "Diseño, edición de video y creación de contenido",
      "Desarrollo, multitarea y productividad pesada",
      "Alta potencia con inversión controlada",
    ],
    equipoRef:
      "Workstation AMD Ryzen 9 9900X · RTX 5090 32GB · 96GB · 4TB Gen5 · Wi-Fi 7",
  },
];

/** Pesos por respuesta. El configurador suma y ordena. */
export type Opcion = {
  id: string;
  label: string;
  nota?: string;
  peso: Record<Plataforma["id"], number>;
};

export type Pregunta = {
  id: string;
  titulo: string;
  ayuda: string;
  opciones: Opcion[];
};

export const preguntasConfigurador: Pregunta[] = [
  {
    id: "software",
    titulo: "¿Qué software es el que manda?",
    ayuda: "El que define la compra, no el que más se abre.",
    opciones: [
      {
        id: "cad",
        label: "CAD / BIM",
        nota: "AutoCAD, Revit, SolidWorks",
        peso: { threadripper: 2, intel: 3, ryzen: 1 },
      },
      {
        id: "render",
        label: "Render y simulación",
        nota: "V-Ray, Blender, análisis estructural",
        peso: { threadripper: 3, intel: 1, ryzen: 2 },
      },
      {
        id: "geo",
        label: "Geociencias y fotogrametría",
        nota: "Datasets grandes, nubes de puntos",
        peso: { threadripper: 3, intel: 1, ryzen: 1 },
      },
      {
        id: "video",
        label: "Edición de video y contenido",
        nota: "Premiere, DaVinci, After Effects",
        peso: { threadripper: 1, intel: 2, ryzen: 3 },
      },
      {
        id: "ia",
        label: "IA local y entrenamiento",
        nota: "Modelos propios, datos que no salen",
        peso: { threadripper: 3, intel: 1, ryzen: 2 },
      },
      {
        id: "dev",
        label: "Desarrollo y virtualización",
        nota: "Contenedores, máquinas virtuales",
        peso: { threadripper: 2, intel: 2, ryzen: 3 },
      },
    ],
  },
  {
    id: "carga",
    titulo: "¿Cómo es la carga en el día a día?",
    ayuda: "Determina si conviene priorizar núcleos o velocidad por núcleo.",
    opciones: [
      {
        id: "sostenida",
        label: "Procesos largos y sostenidos",
        nota: "Horas de cálculo o render sin parar",
        peso: { threadripper: 3, intel: 1, ryzen: 2 },
      },
      {
        id: "interactiva",
        label: "Trabajo interactivo",
        nota: "Modelar, editar, responder rápido",
        peso: { threadripper: 1, intel: 3, ryzen: 2 },
      },
      {
        id: "mixta",
        label: "Mixta",
        nota: "Un poco de cada cosa",
        peso: { threadripper: 2, intel: 2, ryzen: 3 },
      },
    ],
  },
  {
    id: "prioridad",
    titulo: "¿Qué pesa más en la decisión?",
    ayuda: "No hay respuesta correcta; cambia la recomendación.",
    opciones: [
      {
        id: "potencia",
        label: "Potencia sin techo",
        nota: "El equipo no puede ser el cuello de botella",
        peso: { threadripper: 3, intel: 1, ryzen: 1 },
      },
      {
        id: "equilibrio",
        label: "Equilibrio y compatibilidad",
        nota: "Que funcione bien con todo",
        peso: { threadripper: 1, intel: 3, ryzen: 2 },
      },
      {
        id: "inversion",
        label: "Rendimiento por peso invertido",
        nota: "La mejor relación posible",
        peso: { threadripper: 1, intel: 1, ryzen: 3 },
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Calculadora de Puesto de Trabajo Gestionado                        */
/* ------------------------------------------------------------------ */

export type PlanPTG = {
  id: "estandar" | "premium";
  nombre: string;
  descripcion: string;
  incluye: string[];
  /** Valor de ejemplo para la demo. NO es una tarifa vigente. */
  refPorUsuario: number;
};

export const planesPTG: PlanPTG[] = [
  {
    id: "estandar",
    nombre: "Estándar",
    descripcion: "Respaldo y gestión ordenada de incidentes.",
    incluye: [
      "Preparación y despliegue del equipo",
      "Mesa de ayuda en horario hábil",
      "Mantención preventiva programada",
      "Gestión de garantía de fabricante",
    ],
    refPorUsuario: 34000,
  },
  {
    id: "premium",
    nombre: "Premium",
    descripcion: "Mayor prioridad, continuidad y niveles de atención.",
    incluye: [
      "Todo lo del plan Estándar",
      "Prioridad de atención y tiempos acotados",
      "Equipo de reemplazo ante falla",
      "Reportabilidad y revisión periódica",
    ],
    refPorUsuario: 52000,
  },
];

/* ------------------------------------------------------------------ */
/*  Clientes — descriptores tal como los publica upcomp.cl             */
/* ------------------------------------------------------------------ */

export type Cliente = {
  nombre: string;
  descriptor: string;
  vertical: string;
};

export const clientes: Cliente[] = [
  { nombre: "Armada de Chile", descriptor: "Equipamiento tecnológico", vertical: "Defensa" },
  { nombre: "Marimaca Copper", descriptor: "Equipamiento y networking", vertical: "Minería" },
  { nombre: "Fresenius Kabi", descriptor: "Equipamiento tecnológico", vertical: "Salud" },
  { nombre: "Biogram", descriptor: "Equipamiento y upgrade tecnológico", vertical: "Salud" },
  { nombre: "Geocom", descriptor: "Soluciones tecnológicas", vertical: "Ingeniería" },
  { nombre: "GS3", descriptor: "Soporte y soluciones TI", vertical: "Servicios" },
  { nombre: "Inmobiliaria PAZ", descriptor: "Soporte técnico TI", vertical: "Inmobiliaria" },
  { nombre: "Ducati Chile", descriptor: "Equipamiento y soporte", vertical: "Retail" },
  { nombre: "Envases Flexipack", descriptor: "Renovación tecnológica", vertical: "Industria" },
  { nombre: "Jardín Infantil Chamín", descriptor: "Soluciones a medida", vertical: "Educación" },
];

export const verticales = [
  "Todas",
  "Defensa",
  "Minería",
  "Salud",
  "Ingeniería",
  "Industria",
  "Retail",
  "Inmobiliaria",
  "Servicios",
  "Educación",
] as const;

export const partners = [
  "Dell Technologies",
  "Lenovo",
  "HP",
  "Cisco",
  "Logitech",
  "Fortinet",
  "Ubiquiti",
  "NVIDIA",
  "Intel",
  "AMD",
] as const;

/* ------------------------------------------------------------------ */
/*  Formulario calificador                                             */
/* ------------------------------------------------------------------ */

export const cargos = [
  "Gerencia general",
  "Gerencia TI",
  "Jefatura TI",
  "Compras / Abastecimiento",
  "Operaciones",
  "Otro",
] as const;

export const necesidades = [
  { id: "equipamiento", label: "Equipamiento" },
  { id: "servicios", label: "Soporte y servicios TI" },
  { id: "software", label: "Software a medida" },
  { id: "infraestructura", label: "Servidores e infraestructura" },
  { id: "ia", label: "Bots o IA privada" },
  { id: "mixto", label: "Todavía no lo tengo claro" },
] as const;

export const plazos = [
  "Este mes",
  "Dentro del trimestre",
  "Este año",
  "Estoy explorando",
] as const;

export const tramosUsuarios = [
  "1 a 10",
  "11 a 50",
  "51 a 200",
  "Más de 200",
] as const;
