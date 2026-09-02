/* ==========================================================================
   UpComp — prototipo

   REGLA: todo el contenido sale de upcomp.cl. Cada bloque lleva anotada su
   página de origen. Lo único que NO está en su sitio es la sección
   "Desarrollo e integración", que es la capacidad nueva que aporta la
   alianza — y va marcada como tal en la propia página.
   ========================================================================== */

const TELEFONO="56982794984", CORREO="contacto@upcomp.cl";

/* ---------- Catálogo real (upcomp.cl, home) ---------- */
const EQUIPOS=[
  {img:"assets/productos/ws-threadripper.jpg",tag:"Máximo rendimiento",t:"Workstation AMD Threadripper 9960X",specs:["RTX 5090 32GB","256GB ECC","2TB Gen5","Wi-Fi 7"]},
  {img:"assets/productos/ws-intel-ultra9.jpg",tag:"Equilibrio profesional",t:"Workstation Intel Core Ultra 9 285K",specs:["RTX 5090 32GB","64GB DDR5","1TB NVMe","Wi-Fi 7"]},
  {img:"assets/productos/ws-ryzen9.jpg",tag:"Potencia versátil",t:"Workstation AMD Ryzen 9 9900X",specs:["RTX 5090 32GB","96GB","4TB Gen5","Wi-Fi 7"]},
  {img:"assets/productos/dell-pro-max-18.jpg",tag:"Movilidad extrema",t:"Dell Pro Max 18 Plus",specs:["Ultra 9 285HX","RTX PRO 4000 16GB","64GB","18\" QHD+"]},
  {img:"assets/productos/hp-zbook-x.jpg",tag:"Estación portátil",t:"HP ZBook X G1i 16",specs:["Ultra 9 285H","RTX Pro 2000 8GB","32GB","1TB SSD"]},
  {img:"assets/productos/thinkpad-p1.jpg",tag:"Workstation portátil",t:"ThinkPad P1 Gen 8",specs:["Ultra 9 vPro","RTX PRO 2000","64GB","1TB"]},
  {img:"assets/productos/thinkpad-p16s.jpg",tag:"Ingeniería móvil",t:"Lenovo ThinkPad P16s Gen 4",specs:["Ultra 7 265H","RTX Pro 500 6GB","96GB","2TB SSD"]},
  {img:"assets/productos/latitude-rugged.jpg",tag:"Uso en terreno",t:"Dell Latitude 5430 Rugged",specs:["i5-1145G7","32GB","4G LTE","GPS"]}
];

/* ---------- Áreas de negocio
     Son los 5 servicios reales de upcomp.cl/servicios-empresas más
     Desarrollo e Integración, que es lo que aporta la alianza.
     Estructuran la portada: UpComp es una empresa de servicios y la
     tienda vive aparte, en /tienda. ---------- */
const AREAS=[
  {icono:"i-caja",fondo:"assets/banners/puesto-trabajo.webp",pos:"center",tag:"Usuarios y equipos",t:"Puesto de Trabajo Gestionado",
   d:"Equipos, configuración y servicios asociados definidos según el cargo, las aplicaciones y la criticidad de cada usuario.",
   specs:["Notebooks y workstations","Configuración por perfil","Renovación planificada"]},
  {icono:"i-soporte",fondo:"assets/banners/tecnologia.webp",pos:"left center",tag:"Operación diaria",t:"Soporte TI para Empresas",
   d:"Un canal técnico para resolver incidentes, asistir usuarios y coordinar acciones sobre equipos que afectan la productividad.",
   specs:["Remoto o presencial","Hardware y software","Puntual o recurrente"]},
  {icono:"i-engranaje",fondo:"assets/banners/tecnologia.webp",pos:"right center",tag:"Rendimiento",t:"Mantención y Optimización",
   d:"Evaluamos el estado de los equipos para prevenir fallas, recuperar rendimiento y decidir qué mantener, mejorar o renovar.",
   specs:["Mantención preventiva","Revisión térmica","Upgrades"]},
  {icono:"i-escudo",fondo:"assets/banners/financiamiento.webp",pos:"center",tag:"Respaldo",t:"Continuidad Operacional",
   d:"Coberturas y alternativas de respaldo para reducir el impacto de una falla sobre usuarios y equipos relevantes para la operación.",
   specs:["Garantía Shield","Seguimiento de casos","Equipo temporal"]},
  {icono:"i-red",fondo:"assets/banners/portafolio.webp",pos:"left center",tag:"Implementación",t:"Proyectos e Infraestructura TI",
   d:"Diseñamos soluciones para oficinas nuevas, ampliaciones y renovación de infraestructura con mirada técnica y comercial integrada.",
   specs:["Networking y Wi-Fi","Servidores","Videoconferencia"]},
  {icono:"i-codigo",fondo:"assets/banners/portafolio.webp",pos:"right center",tag:"Capacidad nueva",t:"Desarrollo e Integración",nuevo:true,
   d:"Cuando una plataforma estándar no resuelve el proceso real, diseñamos y construimos la solución que conecta la operación.",
   specs:["Software a medida","APIs e integraciones","IA privada"]}
];

/* ---------- Ecosistema UpComp (upcomp.cl/servicios-empresas y /quienes-somos-1)
     Es el marco real de ellos, presente en las dos páginas. ---------- */
const ECOSISTEMA=[
  {icono:"i-caja",t:"Equipamiento",d:"Por perfil de usuario"},
  {icono:"i-red",t:"Infraestructura",d:"Redes y plataformas"},
  {icono:"i-soporte",t:"Soporte",d:"Remoto y en sitio"},
  {icono:"i-escudo",t:"Continuidad",d:"Protección y respaldo"}
];

/* ---------- Fichas de producto (upcomp.cl, páginas de cada equipo)
     Texto literal de sus fichas. Los equipos sin ficha completa muestran
     lo que sí tenemos y lo dicen, en vez de rellenar con invento. ---------- */
const SERVICIOS_UPCOMP=[
  "Venta con factura para empresas e instituciones.",
  "Asesoría para dimensionar workstations según aplicaciones, cargas de trabajo y flujos profesionales.",
  "Selección y validación de compatibilidad entre componentes.",
  "Armado profesional, ordenamiento interno y pruebas de estabilidad.",
  "Configuración de memoria, almacenamiento, gráficos y conectividad.",
  "Instalación de Windows 11 Pro, controladores y actualizaciones.",
  "Pruebas de rendimiento, temperatura y funcionamiento general.",
  "Soporte técnico especializado y servicio postventa.",
  "Opciones de mantenimiento preventivo, ampliación y actualización."
];
const NOTA_DISPONIBILIDAD="La disponibilidad de componentes, marcas, modelos específicos, configuración final, sistema operativo, plazo de entrega y precio pueden variar según el stock de los proveedores y la validación técnica y comercial de la solución.";

const FICHAS={
  1:{ /* Intel Core Ultra 9 285K */
    sku:"UPC-WKS-UPC-002",
    desc:"Workstation Intel Core Ultra 9 285K es una plataforma de alto rendimiento diseñada para cargas profesionales que requieren potencia de procesamiento, aceleración gráfica y alta capacidad de respuesta. Su configuración con procesador Intel Core Ultra 9, 64 GB de memoria DDR5 y tarjeta gráfica NVIDIA GeForce RTX 5090 de 32 GB entrega una base sólida para inteligencia artificial, renderizado, ingeniería, modelamiento 3D, creación de contenido y procesamiento intensivo de información.",
    carac:[
      ["Procesador Intel Core Ultra 9 285K","incorpora 24 núcleos, frecuencia de hasta 5,7 GHz y capacidad de procesamiento de IA de 36 TOPS."],
      ["64 GB de memoria DDR5-5600","configuración de 2 × 32 GB para multitarea avanzada, aplicaciones profesionales y proyectos de alta exigencia."],
      ["NVIDIA GeForce RTX 5090 de 32 GB GDDR7","tarjeta gráfica de alto rendimiento para inteligencia artificial, renderizado, visualización 3D y procesos acelerados por GPU."],
      ["SSD NVMe PCIe 4.0 de 1 TB","almacenamiento de alta velocidad para el sistema operativo, aplicaciones, modelos, proyectos y archivos profesionales."],
      ["Placa madre ASUS TUF GAMING B860-PLUS WIFI","plataforma preparada para componentes de alto rendimiento, expansión y conectividad moderna."],
      ["Wi-Fi 7, Bluetooth y Ethernet 2.5 GbE","conectividad de alta velocidad para redes empresariales, periféricos, servidores y almacenamiento compartido."],
      ["Fuente de poder de 1250W","unidad con certificación 80 PLUS Platinum, compatible con ATX 3.0 y PCIe 5.0."],
      ["Refrigeración líquida Asetek Serie 6 de 360 mm","solución térmica preparada para mantener una operación estable durante cargas intensivas."],
      ["Gabinete Cooler Master CM695","formato ATX con conectividad USB-C y espacio para componentes de alto rendimiento."],
      ["Windows 11 Pro","disponible según la configuración final seleccionada para seguridad, administración y productividad profesional."],
      ["Garantía de 1 año","respaldo sujeto a las condiciones comerciales y de cobertura informadas en la cotización."]
    ],
    ideal:["Inteligencia artificial y aprendizaje automático.","Procesamiento local de modelos y datos.","Renderizado y visualización 3D.","Ingeniería, arquitectura y diseño técnico.","Modelamiento, fotogrametría y procesamiento geoespacial.","Edición de video y creación de contenido profesional.","Desarrollo de software y compilación de proyectos.","Simulación y cálculo técnico.","Empresas que requieren una workstation de alto rendimiento."],
    specs:[["Tipo de equipo","Workstation profesional de alto rendimiento"],["Procesador","Intel Core Ultra 9 285K"],["Núcleos","24 núcleos"],["Frecuencia máxima","Hasta 5,7 GHz"],["Rendimiento IA","36 TOPS"],["Memoria RAM","64 GB DDR5-5600"],["Configuración de memoria","2 × 32 GB DDR5"],["Almacenamiento","SSD NVMe PCIe 4.0 de 1 TB"],["Tarjeta gráfica","NVIDIA GeForce RTX 5090"],["Memoria gráfica","32 GB GDDR7"],["Placa madre","ASUS TUF GAMING B860-PLUS WIFI"],["Conectividad inalámbrica","Wi-Fi 7 y Bluetooth"],["Red cableada","Ethernet 2.5 GbE"],["Fuente de poder","1250W 80 PLUS Platinum"],["Refrigeración líquida","Asetek Serie 6 de 360 mm"],["Gabinete","Cooler Master CM695 ATX con USB-C"],["Sistema operativo","Windows 11 Pro, según configuración"],["Garantía","1 año"],["Modalidad","Disponible para cotización"]]
  },
  0:{ /* AMD Threadripper 9960X */
    sku:"UPC-WKS-UPC-001",
    desc:"Workstation AMD Threadripper 9960X es una plataforma de alto cómputo diseñada para cargas profesionales que requieren gran capacidad de procesamiento, memoria ECC y potencia gráfica avanzada. Su configuración con procesador AMD Ryzen Threadripper de 24 núcleos, 256 GB de memoria DDR5 ECC y tarjeta gráfica NVIDIA GeForce RTX 5090 entrega una base de alto rendimiento para inteligencia artificial, ingeniería, simulación, renderizado, creación de contenido y procesamiento intensivo de información.",
    carac:[
      ["AMD Ryzen Threadripper 9960X","procesador de 24 núcleos y 48 hilos, con frecuencia de hasta 5,4 GHz, diseñado para cargas altamente paralelas."],
      ["256 GB de memoria DDR5 ECC","cuatro módulos de 64 GB, orientada a proyectos de gran escala y procesos que requieren estabilidad de memoria."],
      ["NVIDIA GeForce RTX 5090 de 32 GB GDDR7","alto rendimiento para inteligencia artificial, renderizado, visualización 3D y procesamiento acelerado por GPU."],
      ["SSD NVMe PCIe Gen5 de 2 TB","almacenamiento de alta velocidad para sistema operativo, aplicaciones, modelos y archivos de gran tamaño."],
      ["Placa madre Gigabyte TRX50 AERO D","plataforma desarrollada para procesadores AMD Threadripper, expansión avanzada y configuraciones profesionales."],
      ["Red Ethernet de alta velocidad","conectividad 10 GbE y 2,5 GbE para transferencia de archivos, almacenamiento en red y entornos colaborativos."],
      ["Wi-Fi 7 y Bluetooth","conectividad inalámbrica moderna para redes de alta velocidad, accesorios y periféricos."],
      ["Fuente de poder de 1250W","unidad 80 PLUS Platinum, compatible con ATX 3.0 y PCIe 5.0."],
      ["Refrigeración optimizada","tres ventiladores ARCTIC P12 PWM y un ARCTIC P14 Max para apoyar el flujo de aire interno."],
      ["Gabinete Gigabyte AORUS C500 Glass","formato E-ATX con panel de vidrio y espacio para componentes de gran tamaño."],
      ["Windows 11 Pro","disponible según la configuración final seleccionada."],
      ["Garantía de 1 año","respaldo de hardware sujeto a las condiciones comerciales informadas en la cotización."]
    ],
    ideal:["Inteligencia artificial y entrenamiento de modelos.","Simulación y cálculo técnico de gran escala.","Renderizado y visualización 3D.","Ingeniería, CAD/BIM y diseño técnico.","Fotogrametría y procesamiento geoespacial.","Virtualización y cargas altamente paralelas.","Empresas que requieren alto cómputo sostenido."],
    specs:[["Tipo de equipo","Workstation profesional de alto cómputo"],["Procesador","AMD Ryzen Threadripper 9960X"],["Núcleos / Hilos","24 núcleos / 48 hilos"],["Frecuencia máxima","Hasta 5,4 GHz"],["Memoria RAM","256 GB DDR5 ECC"],["Configuración de memoria","4 × 64 GB DDR5 ECC"],["Almacenamiento","SSD NVMe PCIe Gen5 de 2 TB"],["Tarjeta gráfica","NVIDIA GeForce RTX 5090"],["Memoria gráfica","32 GB GDDR7"],["Placa madre","Gigabyte TRX50 AERO D"],["Conectividad inalámbrica","Wi-Fi 7 y Bluetooth"],["Red cableada","Ethernet 10 GbE y 2,5 GbE"],["Fuente de poder","1250W 80 PLUS Platinum"],["Estándar de fuente","ATX 3.0 y PCIe 5.0"],["Ventiladores","3 × ARCTIC P12 PWM + 1 × ARCTIC P14 Max"],["Gabinete","Gigabyte AORUS C500 Glass E-ATX"],["Sistema operativo","Windows 11 Pro, según configuración"],["Garantía","1 año"],["Modalidad","Disponible para cotización"]]
  }
};

/* ---------- Soluciones destacadas (upcomp.cl, home) ---------- */
const SOLUCIONES=[
  {icono:"i-laptop",t:"Notebooks Corporativos",d:"Equipos para productividad, movilidad, trabajo híbrido y usuarios administrativos, comerciales o ejecutivos.",cta:"Ver categoría"},
  {icono:"i-cpu",t:"Workstations Profesionales",d:"Potencia para ingeniería, diseño, modelamiento 3D, render, IA, geociencias y cargas de trabajo exigentes.",cta:"Ver soluciones"},
  {icono:"i-server",t:"Servidores e Infraestructura",d:"Soluciones para virtualización, almacenamiento, respaldo, operación crítica y crecimiento empresarial.",cta:"Cotizar proyecto"},
  {icono:"i-red",t:"Networking y Videoconferencia",d:"Redes, conectividad, Wi-Fi empresarial, switches, salas de reunión y colaboración para equipos modernos.",cta:"Ver soluciones"}
];

/* ---------- Nuestra mirada (upcomp.cl/quienes-somos-1) ---------- */
const MIRADA={
  titulo:"No vendemos solo equipos. Ayudamos a tomar mejores decisiones tecnológicas.",
  bajada:"Combinamos criterio técnico, claridad comercial y acompañamiento para reducir errores de compra y construir soluciones útiles, escalables y sostenibles.",
  puntos:[
    ["01","Criterio técnico","Recomendamos según software, carga de trabajo, compatibilidad, usuarios y crecimiento esperado."],
    ["02","Claridad comercial","Presentamos alternativas comprensibles, condiciones informadas y opciones según disponibilidad real."],
    ["03","Relación de largo plazo","Acompañamos renovación, soporte, garantías, proyectos y continuidad tecnológica."]
  ]
};

/* ---------- Los 5 servicios reales (upcomp.cl/servicios-empresas) ---------- */
const SERVICIOS=[
  {n:"01",eyebrow:"Usuarios y equipos",t:"Puesto de Trabajo Gestionado",icono:"i-caja",
   d:"Equipos corporativos, configuración y servicios asociados definidos según el cargo, las aplicaciones y la criticidad de cada usuario.",
   items:["Notebooks, Mini PC y workstations","Configuración por perfil de uso","Soporte y renovación planificada"],
   cta:"Conocer la solución"},
  {n:"02",eyebrow:"Operación diaria",t:"Soporte TI para Empresas",icono:"i-soporte",
   d:"Un canal técnico para resolver incidentes, asistir usuarios y coordinar acciones sobre equipos que afectan la productividad.",
   items:["Atención remota o presencial","Diagnóstico de hardware y software","Servicio puntual o recurrente"],
   cta:"Revisar modalidades"},
  {n:"03",eyebrow:"Rendimiento",t:"Mantención y Optimización",icono:"i-engranaje",
   d:"Evaluamos el estado de los equipos para prevenir fallas, recuperar rendimiento y decidir con criterio qué mantener, mejorar o renovar.",
   items:["Mantención preventiva y diagnóstico","Revisión térmica y limpieza interna","Upgrades de memoria y almacenamiento"],
   cta:"Evaluar equipos"},
  {n:"04",eyebrow:"Respaldo",t:"Continuidad Operacional",icono:"i-escudo",destacado:true,
   d:"Coberturas y alternativas de respaldo para reducir el impacto de una falla sobre usuarios y equipos relevantes para la operación.",
   items:["Garantía Shield según plan contratado","Gestión y seguimiento de casos","Equipo temporal sujeto a disponibilidad"],
   cta:"Conocer Garantía Shield"},
  {n:"05",eyebrow:"Implementación",t:"Proyectos e Infraestructura TI",icono:"i-red",
   d:"Diseñamos soluciones para oficinas nuevas, ampliaciones y renovación de infraestructura con una mirada técnica y comercial integrada.",
   items:["Networking y Wi-Fi empresarial","Servidores y alto rendimiento","Videoconferencia y salas de reunión"],
   cta:"Explorar proyectos"}
];

/* ---------- Puntos de partida A/B/C (upcomp.cl/servicios-empresas) ---------- */
const PARTIDA=[
  {k:"A",t:"Necesito equipar usuarios",d:"Definimos equipos y configuraciones según cada perfil de trabajo."},
  {k:"B",t:"Necesito estabilizar la operación",d:"Revisamos soporte, mantención, garantías y continuidad."},
  {k:"C",t:"Necesito implementar un proyecto",d:"Levantamos infraestructura, alcance, equipamiento y puesta en marcha."}
];

/* ---------- Enfoque UpComp (upcomp.cl/servicios-empresas) ---------- */
const ENFOQUE=[
  ["Un punto de contacto","Equipamiento, infraestructura y servicios coordinados en una sola propuesta."],
  ["Alcance definido","Entregables, condiciones y responsabilidades presentados antes de implementar."],
  ["Tecnología empresarial","Soluciones construidas con marcas y plataformas reconocidas del mercado."],
  ["Visión de ciclo de vida","Consideramos operación, mantención, soporte y renovación futura."]
];

/* ---------- Cómo trabajamos (upcomp.cl/servicios-empresas) ---------- */
const PROCESO=[
  ["01","Evaluamos","Revisamos usuarios, equipos, aplicaciones, infraestructura y prioridades."],
  ["02","Diseñamos","Definimos alcance, alternativas, servicios asociados y próximos pasos."],
  ["03","Implementamos","Coordinamos provisión, configuración, entrega o ejecución del servicio."],
  ["04","Acompañamos","Apoyamos soporte, mantención, continuidad y evolución tecnológica."]
];

/* ---------- Contacto (upcomp.cl/contacto) ---------- */
const CUATRO_DATOS=[
  ["01","Necesidad","Equipo, servicio o proyecto requerido."],
  ["02","Cantidad","Usuarios, equipos o ubicaciones."],
  ["03","Uso esperado","Software y carga de trabajo."],
  ["04","Plazo","Fecha estimada de compra o implementación."]
];
const CANALES=[
  {k:"WhatsApp comercial",d:"Consultas rápidas, coordinación inicial y solicitudes de cotización.",v:"+56 9 8279 4984",icono:"i-wa"},
  {k:"Correo electrónico",d:"Antecedentes técnicos, cantidades, documentos y requerimientos formales.",v:"contacto@upcomp.cl",icono:"i-mail"},
  {k:"Oficina comercial",d:"Nueva Providencia 2250, Oficina 804, Providencia, Santiago.",v:"Atención coordinada",icono:"i-pin"}
];
const QUE_INCLUIR=[
  "Cantidad aproximada de equipos, usuarios o puestos de trabajo.",
  "Software, aplicaciones o carga de trabajo principal.",
  "Tipo de solución, marca o configuración de referencia.",
  "Plazo esperado para compra, entrega o implementación.",
  "Necesidad de instalación, configuración, soporte o mantención.",
  "Presupuesto referencial, cuando exista una estimación."
];
const FAQ=[
  ["¿Puedo consultar aunque aún no tenga una configuración definida?","Sí. Puedes indicarnos el uso, software, cantidad de usuarios y presupuesto referencial para evaluar alternativas."],
  ["¿Atienden solicitudes fuera de Santiago?","Sí. Atendemos requerimientos de empresas y proyectos en distintas regiones de Chile, según alcance y coordinación."],
  ["¿Puedo enviar una lista técnica o documento?","Sí. El correo electrónico es el canal recomendado para adjuntar especificaciones, cantidades y antecedentes formales."],
  ["¿Trabajan proyectos además de la venta de equipos?","Sí. Podemos integrar equipamiento, redes, Wi-Fi, servidores, videoconferencia, soporte y continuidad operacional."]
];

const PARTNERS=[
  {logo:"assets/marcas/dell.svg",n:"Dell Technologies",d:"Notebooks, workstations, servidores y soluciones corporativas."},
  {logo:"assets/marcas/lenovo.svg",n:"Lenovo",d:"Equipamiento corporativo, estaciones de trabajo y movilidad."},
  {logo:"assets/marcas/hp-partner.webp",n:"HP Partner",d:"Notebooks, desktops, workstations y soluciones empresariales HP."},
  {logo:"assets/marcas/logitech.svg",n:"Logitech",d:"Videocolaboración y soluciones profesionales para salas de reuniones."},
  {logo:"assets/marcas/cisco-partner.svg",n:"Cisco Partner",d:"Networking, switching, Wi-Fi empresarial y soluciones Cisco Meraki."}
];

/* Logos reales de upcomp.cl. Geocom y Ducati quedan sin imagen: sus URLs
   devuelven "Image Not Found!" en el propio sitio de UpComp. */
const CLIENTES=[
  {n:"Armada de Chile",d:"Equipamiento tecnológico",v:"Defensa",logo:"assets/clientes/armada.png",oscuro:true},
  {n:"Marimaca Copper Corp",d:"Equipamiento y networking",v:"Minería",logo:"assets/clientes/marimaca.svg",oscuro:true},
  {n:"Fresenius Kabi",d:"Equipamiento tecnológico",v:"Salud",logo:"assets/clientes/fresenius.svg"},
  {n:"Biogram",d:"Equipamiento y upgrade tecnológico",v:"Salud",logo:"assets/clientes/biogram.svg"},
  {n:"Geocom",d:"Soluciones tecnológicas",v:"Ingeniería",logo:null},
  {n:"GS3",d:"Soporte y soluciones TI",v:"Servicios",logo:"assets/clientes/gs3.png"},
  {n:"Inmobiliaria PAZ",d:"Soporte técnico TI",v:"Inmobiliaria",logo:"assets/clientes/paz.png"},
  {n:"Ducati Chile",d:"Equipamiento y soporte",v:"Retail",logo:null},
  {n:"Envases Flexipack",d:"Renovación tecnológica",v:"Industria",logo:"assets/clientes/flexipack.png"},
  {n:"Jardín Infantil Chamín",d:"Soluciones a medida",v:"Educación",logo:"assets/clientes/chamin.png"}
];

/* ---------- DESARROLLO E INTEGRACIÓN
     ÚNICO bloque que no está en upcomp.cl: es la capacidad que aporta la
     alianza. Va marcado como propuesta nueva dentro de la página. ---------- */
const DESARROLLO=[
  {icono:"i-codigo",t:"Software a medida",d:"Aplicaciones, portales y backoffice construidos alrededor del proceso real de la empresa.",tags:["Levantamiento","Arquitectura","UX","Producción"]},
  {icono:"i-enchufe",t:"APIs e integraciones",d:"Conectamos sistemas que hoy no se hablan: ERP, mayoristas, servicios externos y fuentes de datos internas.",tags:["REST","Middleware","Sincronización"]},
  {icono:"i-flujo",t:"Automatización de procesos",d:"Flujos, validaciones y tareas repetitivas que hoy dependen de que alguien se acuerde de hacerlas.",tags:["Flujos","Validaciones","Reportes"]},
  {icono:"i-cerebro",t:"IA aplicada y privada",d:"Modelos corriendo en infraestructura propia del cliente, sin enviar documentación interna a terceros.",tags:["IA local","Búsqueda interna"]},
  {icono:"i-chat",t:"Bots de atención",d:"Atención automatizada sobre WhatsApp Business que responde, califica y deriva con el contexto ya recogido.",tags:["API oficial","Derivación","CRM"]},
  {icono:"i-nube",t:"Servidor gestionado",d:"Infraestructura en nube o privada administrada por UpComp: aprovisionamiento, monitoreo y respaldo.",tags:["Nube o privado","Monitoreo","IP fija"]}
];
const FLUJO_DEV=[
  ["Levantar","Entendemos el proceso real, los usuarios y las restricciones."],
  ["Diseñar","Arquitectura y experiencia de usuario antes de escribir código."],
  ["Construir","Desarrollo iterativo con entregas revisables."],
  ["Integrar","Conexión con sistemas internos, servicios externos y datos."],
  ["Evolucionar","Soporte evolutivo: la solución crece con la operación."]
];

/* ---------- Guía de selección (upcomp.cl, home) ---------- */
const PLATAFORMAS=[
  {id:"threadripper",icono:"i-cpu",etiqueta:"Máximo rendimiento",nombre:"AMD Threadripper / Threadripper PRO",
   resumen:"Recomendada para cargas intensivas donde importan muchos núcleos, gran capacidad de memoria, estabilidad y rendimiento sostenido.",
   para:["Renderizado, simulación y cálculo avanzado.","Ingeniería, CAD/BIM, fotogrametría y geociencias.","IA local, datasets pesados y flujos profesionales.","Escenarios donde se requiere potencia extrema."],
   equipo:"Workstation AMD Threadripper 9960X · RTX 5090 32GB · 256GB ECC · 2TB Gen5",img:"assets/productos/ws-threadripper.jpg",iEquipo:0},
  {id:"intel",icono:"i-server",etiqueta:"Equilibrio profesional",nombre:"Intel Core / Core Ultra",destacada:true,
   resumen:"Alternativa equilibrada para usuarios que necesitan buen rendimiento por núcleo, fluidez general y compatibilidad con software profesional.",
   para:["Diseño, arquitectura, CAD y productividad avanzada.","Software profesional con alto rendimiento single-thread.","Workstations compactas, eficientes y versátiles.","Usuarios técnicos, ejecutivos o creativos."],
   equipo:"Workstation Intel Core Ultra 9 285K · RTX 5090 32GB · 64GB DDR5 · 1TB NVMe",img:"assets/productos/ws-intel-ultra9.jpg",iEquipo:1},
  {id:"ryzen",icono:"i-flujo",etiqueta:"Potencia versátil",nombre:"AMD Ryzen Profesional",
   resumen:"Excelente opción para estaciones de trabajo potentes, versátiles y competitivas para creación, edición, desarrollo y trabajo profesional exigente.",
   para:["Diseño, edición de video y creación de contenido.","Desarrollo, multitarea y productividad pesada.","Buen rendimiento multi-núcleo.","Alta potencia con inversión controlada."],
   equipo:"Workstation AMD Ryzen 9 9900X · RTX 5090 32GB · 96GB · 4TB Gen5",img:"assets/productos/ws-ryzen9.jpg",iEquipo:2}
];
const VALIDACION=["Software y carga de trabajo","CPU, GPU, RAM y almacenamiento","Disponibilidad y plazo de entrega","Garantía de fabricante y soporte"];

const PREGUNTAS=[
  {id:"software",titulo:"¿Qué software es el que manda?",ayuda:"El que define la compra, no el que más se abre.",
   opciones:[{id:"cad",l:"CAD / BIM",n:"AutoCAD, Revit, SolidWorks",p:{threadripper:2,intel:3,ryzen:1}},
             {id:"render",l:"Render y simulación",n:"V-Ray, Blender, análisis",p:{threadripper:3,intel:1,ryzen:2}},
             {id:"geo",l:"Geociencias y fotogrametría",n:"Datasets grandes, nubes de puntos",p:{threadripper:3,intel:1,ryzen:1}},
             {id:"video",l:"Edición de video y contenido",n:"Premiere, DaVinci, After Effects",p:{threadripper:1,intel:2,ryzen:3}},
             {id:"ia",l:"IA local y entrenamiento",n:"Modelos propios, datos internos",p:{threadripper:3,intel:1,ryzen:2}},
             {id:"dev",l:"Desarrollo y virtualización",n:"Contenedores, máquinas virtuales",p:{threadripper:2,intel:2,ryzen:3}}]},
  {id:"carga",titulo:"¿Cómo es la carga en el día a día?",ayuda:"Determina si conviene priorizar núcleos o velocidad por núcleo.",
   opciones:[{id:"sostenida",l:"Procesos largos y sostenidos",n:"Horas de cálculo o render",p:{threadripper:3,intel:1,ryzen:2}},
             {id:"interactiva",l:"Trabajo interactivo",n:"Modelar, editar, responder",p:{threadripper:1,intel:3,ryzen:2}},
             {id:"mixta",l:"Mixta",n:"Un poco de cada cosa",p:{threadripper:2,intel:2,ryzen:3}}]},
  {id:"prioridad",titulo:"¿Qué pesa más en la decisión?",ayuda:"No hay respuesta correcta; cambia la recomendación.",
   opciones:[{id:"potencia",l:"Potencia sin techo",n:"El equipo no puede ser el cuello de botella",p:{threadripper:3,intel:1,ryzen:1}},
             {id:"equilibrio",l:"Equilibrio y compatibilidad",n:"Que funcione bien con todo",p:{threadripper:1,intel:3,ryzen:2}},
             {id:"inversion",l:"Rendimiento por peso invertido",n:"La mejor relación posible",p:{threadripper:1,intel:1,ryzen:3}}]}
];

const SERVICIOS_EXTRA=["Instalación y puesta en marcha","Garantía Shield","Puesto de trabajo gestionado","Migración de datos"];
const PLAZOS_COT=["Este mes","Dentro del trimestre","Este año","Estoy explorando"];

const GUION={
  inicio:{r:["Hola. Soy el asistente de UpComp.","¿Qué necesitas resolver hoy?"],
    o:[{l:"Necesito equipar usuarios",ir:"equipar"},{l:"Necesito estabilizar la operación",ir:"estabilizar"},{l:"Necesito implementar un proyecto",ir:"proyecto"},{l:"Un sistema a medida",ir:"software"}]},
  equipar:{r:["Definimos equipos y configuraciones según cada perfil de trabajo.","Te dejo dos de los más pedidos del catálogo:"],fichas:[0,3],
    o:[{l:"Necesito una workstation potente",ir:"workstation"},{l:"Renovar equipos de oficina",ir:"puesto"},{l:"Hablar con un ejecutivo",ir:"derivar"}]},
  workstation:{r:["Para eso hay un configurador en esta misma página: tres preguntas y te sugiere la plataforma según la carga real."],
    o:[{l:"Ir al configurador",ir:"#herramientas"},{l:"Ver mi lista de cotización",ir:"@carro"},{l:"Prefiero que me contacten",ir:"derivar"}]},
  puesto:{r:["El Puesto de Trabajo Gestionado define equipos, configuración y servicios asociados según el cargo, las aplicaciones y la criticidad de cada usuario."],
    o:[{l:"Ver la calculadora",ir:"#calculadora"},{l:"Quiero una propuesta",ir:"derivar"}]},
  estabilizar:{r:["Ahí entran Soporte TI, Mantención y Optimización, y Continuidad Operacional con Garantía Shield.","¿Cuál te suena más a lo tuyo?"],
    o:[{l:"Resolver incidentes del día a día",ir:"derivar"},{l:"Prevenir fallas y recuperar rendimiento",ir:"derivar"},{l:"Respaldo ante una falla",ir:"shield"}]},
  shield:{r:["Continuidad Operacional incluye Garantía Shield según el plan contratado, gestión y seguimiento de casos, y equipo temporal sujeto a disponibilidad."],
    o:[{l:"Quiero conocer los planes",ir:"derivar"}]},
  proyecto:{r:["Diseñamos soluciones para oficinas nuevas, ampliaciones y renovación de infraestructura: networking y Wi-Fi empresarial, servidores, videoconferencia y salas de reunión."],
    o:[{l:"Oficina nueva",ir:"derivar"},{l:"Ampliación o renovación",ir:"derivar"}]},
  software:{r:["Esa es la capacidad nueva de la alianza: aplicaciones y portales, automatización, integraciones con APIs, IA privada y bots de atención.","¿De qué se trata lo tuyo?"],
    o:[{l:"Automatizar un proceso manual",ir:"derivar"},{l:"Integrar dos sistemas",ir:"derivar"},{l:"Quiero un bot como este",ir:"bot"}]},
  bot:{r:["Este asistente es una demo del producto: atención automatizada que responde, califica y deriva a una persona con el contexto ya recogido.","En producción va sobre la API oficial de WhatsApp Business."],
    o:[{l:"Quiero uno para mi empresa",ir:"derivar"}]},
  derivar:{r:["Perfecto. Te dejo con el equipo comercial y les paso lo que conversamos."],o:[],cierre:true}
};

/* ==========================================================================
   Utilidades
   ========================================================================== */
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];

/* El mismo script sirve a las dos páginas: el sitio de servicios y la
   tienda. Cada bloque de render se salta si su contenedor no existe. */
const PAGINA=document.body.dataset.pagina||"home";
/* Contenedor tolerante: si el elemento no existe en esta página, las
   escrituras se descartan en silencio en vez de reventar el script. */
const NULO={set innerHTML(v){},get innerHTML(){return""},style:{},textContent:"",
  classList:{add(){},remove(){},toggle(){},contains(){return false}},
  setAttribute(){},addEventListener(){},querySelector(){return null},
  querySelectorAll(){return[]},getBoundingClientRect(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}},click(){},focus(){}};
const D=sel=>$(sel)||NULO;
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const wa=t=>`https://wa.me/${TELEFONO}?text=${encodeURIComponent(t)}`;
const clp=new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0});
const suave=matchMedia("(prefers-reduced-motion: reduce)").matches;
const ico=id=>`<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#${id}"/></svg>`;

$("#anio").textContent=new Date().getFullYear();
$$("[data-wa]").forEach(el=>el.href=wa(el.dataset.wa));

let toastT;
function avisar(txt){
  $("#toastTxt").textContent=txt;
  $("#toast").classList.add("is-on");
  clearTimeout(toastT);
  toastT=setTimeout(()=>$("#toast").classList.remove("is-on"),2600);
}

/* ==========================================================================
   Pantalla de carga
   Dura menos de dos segundos y se puede saltar con un clic. Con movimiento
   reducido no se muestra: se entra directo.
   ========================================================================== */
(function pantallaCarga(){
  const cap=$("#cargando");
  if(!cap) return;
  if(suave){ cap.remove(); return; }
  document.body.classList.add("sin-scroll");
  let fuera=false;
  const salir=()=>{
    if(fuera) return;
    fuera=true;
    cap.classList.add("is-fuera");
    document.body.classList.remove("sin-scroll");
    setTimeout(()=>cap.remove(),650);
  };
  const t=setTimeout(salir,1950);
  cap.addEventListener("click",()=>{clearTimeout(t);salir();});
  /* Si algo falla y la página tarda, no dejar la portada pegada */
  setTimeout(salir,5000);
})();

/* ==========================================================================
   FONDO DE SEÑAL
   Trazos que ascienden de izquierda a derecha, como una curva de rendimiento.
   Viene del propio logo de UpComp (flecha subiendo sobre un gráfico).
   ========================================================================== */
function fondoSenal(canvas){
  const ctx=canvas.getContext("2d",{alpha:true});
  if(!ctx) return;
  let w=0,h=0,t=0,raf=null,visible=true;
  const TRAZOS=Array.from({length:7},(_,i)=>({
    base:.30+i*.085, subida:.20+i*.02, amp:10+i*6,
    vel:.00016+i*.00005, fase:i*1.9,
    grosor:i%3===0?1.6:1, alfa:.055+i*.011
  }));
  function medir(){
    const dpr=Math.min(devicePixelRatio||1,2);
    w=canvas.clientWidth; h=canvas.clientHeight;
    if(!w||!h) return false;
    canvas.width=Math.round(w*dpr); canvas.height=Math.round(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    return true;
  }
  function dibujar(){
    ctx.clearRect(0,0,w,h);
    for(const s of TRAZOS){
      ctx.beginPath();
      for(let x=0;x<=w;x+=10){
        const p=x/w;
        const y=h*(s.base-s.subida*p)
              + Math.sin(p*5.4+t*s.vel+s.fase)*s.amp
              + Math.sin(p*12.5+t*s.vel*.62+s.fase)*s.amp*.32;
        x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      const g=ctx.createLinearGradient(0,0,w,0);
      g.addColorStop(0,"rgba(54,184,92,0)");
      g.addColorStop(.42,`rgba(54,184,92,${s.alfa})`);
      g.addColorStop(.78,`rgba(54,184,92,${s.alfa*.7})`);
      g.addColorStop(1,"rgba(54,184,92,0)");
      ctx.strokeStyle=g; ctx.lineWidth=s.grosor; ctx.stroke();
    }
  }
  function cuadro(){ t+=16; dibujar(); raf=requestAnimationFrame(cuadro); }
  function arrancar(){
    if(!medir()) return;
    dibujar();
    if(suave) return;
    if(raf) cancelAnimationFrame(raf);
    raf=requestAnimationFrame(cuadro);
  }
  function detener(){ if(raf){cancelAnimationFrame(raf);raf=null;} }
  arrancar();
  addEventListener("resize",()=>{medir();dibujar();},{passive:true});
  addEventListener("scroll",()=>{
    const r=canvas.getBoundingClientRect();
    const ahora=r.bottom>0&&r.top<innerHeight;
    if(ahora===visible) return;
    visible=ahora;
    if(visible&&!suave) arrancar(); else detener();
  },{passive:true});
}
$$(".senal").forEach(fondoSenal);

/* ==========================================================================
   Header, menú y progreso
   ========================================================================== */
const header=$("#header"), drawer=$("#drawer");
const abrirDrawer=v=>{drawer.classList.toggle("is-open",v);$("#burger").setAttribute("aria-expanded",String(v));document.body.classList.toggle("sin-scroll",v);};
$("#burger").onclick=()=>abrirDrawer(true);
$("#cerrarDrawer").onclick=()=>abrirDrawer(false);
$$("#drawer a").forEach(a=>a.onclick=()=>abrirDrawer(false));

const enlacesNav=$$(".nav a");
const secciones=enlacesNav.map(a=>$(a.getAttribute("href"))).filter(Boolean);
function marcarNav(){
  let visible=null;
  secciones.forEach(s=>{const r=s.getBoundingClientRect();if(r.top<=innerHeight*.45&&r.bottom>innerHeight*.3)visible=s.id;});
  enlacesNav.forEach(a=>a.classList.toggle("is-active",a.getAttribute("href")==="#"+visible));
}

const nodosReveal=$$("[data-reveal]");
nodosReveal.forEach((el,i)=>el.style.transitionDelay=(i%4)*70+"ms");
const enVista=(el,m=.93)=>{const r=el.getBoundingClientRect();return r.top<innerHeight*m&&r.bottom>0;};
let pendiente=false;
function revisarVisibles(){
  pendiente=false;
  nodosReveal.forEach(el=>{if(enVista(el))el.classList.add("is-shown");});
  $$(".flujo__paso,.eco__p,.proceso__p").forEach((el,i)=>{if(enVista(el,.88))setTimeout(()=>el.classList.add("is-on"),(i%5)*110);});
  header.classList.toggle("is-scrolled",scrollY>12);
  const alto=document.documentElement.scrollHeight-innerHeight;
  $("#progresoScroll").style.width=(alto>0?(scrollY/alto)*100:0)+"%";
  /* Se consulta en cada pase en vez de guardar la referencia arriba: el
     listener de scroll se registra antes de que exista el botón. */
  const arriba=$("#fabArriba");
  if(arriba) arriba.classList.toggle("is-on",scrollY>600);
  marcarNav();
}
const alScroll=()=>{if(!pendiente){pendiente=true;requestAnimationFrame(revisarVisibles);}};
addEventListener("scroll",alScroll,{passive:true});
addEventListener("resize",alScroll);

/* ==========================================================================
   MAZO DE TARJETAS ARRASTRABLE
   ========================================================================== */
const mazo=$("#mazo"), PROF=3;
/* En la portada el mazo muestra las áreas de negocio; en la tienda, los
   equipos. Es el mismo componente con distinto contenido. */
const MAZO=PAGINA==="tienda"?EQUIPOS:AREAS;
let orden=MAZO.map((_,i)=>i);
function pintarMazo(){
  if(!mazo) return;
  mazo.innerHTML=orden.map((idx,pos)=>{
    const e=MAZO[idx];
    const cara=e.img
      ? `<div class="carta__img"><img src="${e.img}" alt="${esc(e.t)}" loading="${pos<2?"eager":"lazy"}" draggable="false"></div>`
      : `<div class="carta__icono"${e.fondo?` style="background-image:url('${e.fondo}');background-position:${e.pos||"center"}"`:""}>
           <span class="carta__velo"></span>${ico(e.icono)}${e.nuevo?'<span class="carta__nuevo">Nuevo</span>':''}</div>`;
    return `<article class="carta ${e.img?"":"carta--area"}" data-pos="${pos}" ${pos===0?'tabindex="0"':'aria-hidden="true"'}>
      ${cara}
      <div class="carta__cuerpo">
        <p class="carta__tag">${esc(e.tag)}</p>
        <h3 class="carta__t">${esc(e.t)}</h3>
        ${e.d?`<p class="carta__d">${esc(e.d)}</p>`:""}
        <ul class="carta__specs">${e.specs.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>
      </div></article>`;
  }).join("");
  colocar(); engancharArrastre(); pintarPuntos();
}
function colocar(){
  $$(".carta",mazo).forEach((c,pos)=>{
    c.style.transition="transform .45s var(--spring), opacity .35s var(--ease)";
    c.style.zIndex=String(100-pos);
    c.style.opacity=pos<=PROF?"1":"0";
    c.style.pointerEvents=pos===0?"auto":"none";
    const giro=[0,-3.5,3,-2][pos]??0;
    c.style.transform=`translate3d(0, ${pos*-10}px, 0) scale(${1-pos*.045}) rotate(${giro}deg)`;
  });
}
function pintarPuntos(){
  if(!D("#mazoPuntos")) return;
  D("#mazoPuntos").innerHTML=MAZO.map((_,i)=>`<span class="mazo__punto ${orden[0]===i?"is-on":""}"></span>`).join("");
}
function rotar(adelante=true){
  if(adelante) orden.push(orden.shift()); else orden.unshift(orden.pop());
  pintarMazo();
}
function expulsar(dir){
  const c=$(".carta",mazo); if(!c) return;
  c.style.transition="transform .42s var(--ease), opacity .42s var(--ease)";
  c.style.transform=`translate3d(${dir*innerWidth*.8}px, -40px, 0) rotate(${dir*22}deg)`;
  c.style.opacity="0";
  setTimeout(()=>rotar(dir>0), suave?0:340);
}
function engancharArrastre(){
  const carta=$(".carta",mazo); if(!carta) return;
  let arrastrando=false,x0=0,y0=0,dx=0,dy=0,vx=0,ultimaX=0,ultimoT=0;
  carta.addEventListener("pointerdown",e=>{
    if(e.button!==undefined&&e.button!==0) return;
    detenerAutoMazo();            /* al tomar el control, deja de avanzar solo */
    arrastrando=true;
    try{carta.setPointerCapture(e.pointerId);}catch{}
    carta.classList.add("is-drag"); carta.style.transition="none";
    x0=e.clientX;y0=e.clientY;ultimaX=e.clientX;ultimoT=performance.now();vx=0;
  });
  carta.addEventListener("pointermove",e=>{
    if(!arrastrando) return;
    dx=e.clientX-x0; dy=e.clientY-y0;
    const ahora=performance.now(), dt=ahora-ultimoT;
    if(dt>0){vx=(e.clientX-ultimaX)/dt;ultimaX=e.clientX;ultimoT=ahora;}
    const giro=Math.max(-18,Math.min(18,dx*.07));
    carta.style.transform=`translate3d(${dx}px, ${dy*.35}px, 0) rotate(${giro}deg)`;
    const p=Math.min(1,Math.abs(dx)/160);
    $$(".carta",mazo).forEach((c,pos)=>{
      if(pos===0||pos>PROF) return;
      const gb=[0,-3.5,3,-2][pos]??0;
      c.style.transition="none";
      c.style.transform=`translate3d(0, ${(pos-p*.55)*-10}px, 0) scale(${1-(pos-p*.55)*.045}) rotate(${gb*(1-p*.4)}deg)`;
    });
  });
  const soltar=e=>{
    if(!arrastrando) return;
    arrastrando=false; carta.classList.remove("is-drag");
    try{carta.releasePointerCapture(e.pointerId);}catch{}
    if(Math.abs(vx)>.55||Math.abs(dx)>110){ expulsar(dx>0?1:-1); }
    else{ carta.style.transition="transform .45s var(--spring)"; carta.style.transform="translate3d(0,0,0) rotate(0deg)"; colocar(); }
    dx=dy=0;
  };
  carta.addEventListener("pointerup",soltar);
  carta.addEventListener("pointercancel",soltar);
  carta.addEventListener("keydown",e=>{
    if(e.key==="ArrowLeft"){e.preventDefault();expulsar(-1);}
    if(e.key==="ArrowRight"||e.key===" "||e.key==="Enter"){e.preventDefault();expulsar(1);}
  });
}
/* El mazo avanza solo hasta que alguien lo toca: así tiene movimiento
   propio sin quitarle el control a quien quiera arrastrarlo. */
let autoMazo=null, mazoIntervenido=false;
function arrancarAutoMazo(){
  if(suave||mazoIntervenido) return;
  clearInterval(autoMazo);
  autoMazo=setInterval(()=>{
    if(document.hidden) return;
    const r=mazo.getBoundingClientRect();
    if(r.bottom<80||r.top>innerHeight-80) return;   /* fuera de vista: no gastar */
    expulsar(1);
  },4200);
}
function detenerAutoMazo(){ mazoIntervenido=true; clearInterval(autoMazo); }

/* Rueda del mouse y gesto horizontal del trackpad sobre el mazo.
   Solo se captura el desplazamiento horizontal (o con Shift), para no
   robarle el scroll vertical a la página. */
let ruedaBloqueada=false;
mazo.addEventListener("wheel",e=>{
  const horizontal=Math.abs(e.deltaX)>Math.abs(e.deltaY);
  if(!horizontal&&!e.shiftKey) return;
  e.preventDefault();
  if(ruedaBloqueada) return;
  const d=horizontal?e.deltaX:e.deltaY;
  if(Math.abs(d)<12) return;
  detenerAutoMazo();
  ruedaBloqueada=true;
  d>0?expulsar(1):rotar(false);
  setTimeout(()=>{ruedaBloqueada=false;},420);
},{passive:false});

$("#mazoSig").onclick=()=>{detenerAutoMazo();expulsar(1);};
$("#mazoAnt").onclick=()=>{detenerAutoMazo();rotar(false);};
pintarMazo();
arrancarAutoMazo();

/* ==========================================================================
   Botón volver arriba
   ========================================================================== */
const fabArriba=$("#fabArriba");
fabArriba.onclick=()=>scrollTo({top:0,behavior:suave?"auto":"smooth"});

/* ==========================================================================
   Render de secciones con contenido real
   ========================================================================== */
/* Áreas de negocio: la grilla que estructura la portada */
D("#areasGrid").innerHTML=AREAS.map((a,i)=>`
  <article class="area ${a.nuevo?"area--nueva":""}">
    <span class="area__n">0${i+1}</span>
    <span class="area__i">${ico(a.icono)}</span>
    <h3>${esc(a.t)}${a.nuevo?'<span class="area__badge">Nuevo</span>':''}</h3>
    <p>${esc(a.d)}</p>
    <ul>${a.specs.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>
  </article>`).join("");

D("#ecosistema").innerHTML=ECOSISTEMA.map((e,i)=>
  `<div class="eco__p"><span class="eco__n">0${i+1}</span>${ico(e.icono)}<b>${esc(e.t)}</b><span>${esc(e.d)}</span></div>`).join("");

D("#marquee").innerHTML=[...CLIENTES,...CLIENTES]
  .map((c,i)=>`<li${i>=CLIENTES.length?' aria-hidden="true"':''}>${esc(c.n)}</li>`).join("");

D("#soluciones-grid").innerHTML=SOLUCIONES.map(s=>`
  <article class="solu__c">
    <span class="solu__i">${ico(s.icono)}</span>
    <h3>${esc(s.t)}</h3><p>${esc(s.d)}</p>
    <a class="solu__link" href="#equipos">${esc(s.cta)} ${ico("i-flecha")}</a>
  </article>`).join("");

const tarjetaPartner=p=>`<li class="partner">
  <div class="partner__logo"><img src="${p.logo}" alt="${esc(p.n)}" loading="lazy"></div>
  <span class="partner__badge">Partner tecnológico</span>
  <p class="partner__d">${esc(p.d)}</p></li>`;
D("#listaPartners").innerHTML=[...PARTNERS,...PARTNERS,...PARTNERS,...PARTNERS].map(tarjetaPartner).join("");

D("#miradaTitulo").textContent=MIRADA.titulo;
D("#miradaBajada").textContent=MIRADA.bajada;
D("#miradaPuntos").innerHTML=MIRADA.puntos.map(([n,t,d])=>
  `<div class="mirada__p"><span class="mirada__n">${n}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("");

D("#servicios-lista").innerHTML=SERVICIOS.map(s=>`
  <article class="serv2 ${s.destacado?"serv2--destacado":""}">
    <div class="serv2__cab">
      <span class="serv2__i">${ico(s.icono)}</span>
      <div><span class="serv2__n">${s.n} · ${esc(s.eyebrow)}</span><h3>${esc(s.t)}</h3></div>
    </div>
    <p>${esc(s.d)}</p>
    <ul>${s.items.map(i=>`<li>${ico("i-check")}<span>${esc(i)}</span></li>`).join("")}</ul>
    <a class="solu__link" href="#contacto">${esc(s.cta)} ${ico("i-flecha")}</a>
  </article>`).join("");

D("#partida").innerHTML=PARTIDA.map(p=>`
  <button class="partida__c" data-partida="${esc(p.t)}">
    <span class="partida__k">${p.k}</span>
    <h3>${esc(p.t)}</h3><p>${esc(p.d)}</p>
    <span class="solu__link">Conversar con UpComp ${ico("i-flecha")}</span>
  </button>`).join("");

D("#enfoque").innerHTML=ENFOQUE.map(([t,d])=>
  `<div class="enfoque__p"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("");

D("#proceso").innerHTML=PROCESO.map(([n,t,d])=>
  `<div class="proceso__p"><span class="proceso__n">${n}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("");

D("#devGrid").innerHTML=DESARROLLO.map(d=>`
  <article class="dev-card">
    <span class="dev-card__icono">${ico(d.icono)}</span>
    <h3>${esc(d.t)}</h3><p>${esc(d.d)}</p>
    <ul>${d.tags.map(t=>`<li>${esc(t)}</li>`).join("")}</ul></article>`).join("");
D("#flujoPasos").innerHTML=FLUJO_DEV.map(([t,d],i)=>`
  <div class="flujo__paso"><p class="flujo__n">0${i+1}</p><p class="flujo__t">${esc(t)}</p><p class="flujo__d">${esc(d)}</p></div>`).join("");

D("#plataformas").innerHTML=PLATAFORMAS.map(p=>`
  <article class="plat ${p.destacada?"plat--destacada":""}">
    <div class="plat__cab"><span class="plat__i">${ico(p.icono)}</span><span class="plat__badge">${esc(p.etiqueta)}</span></div>
    <h3>${esc(p.nombre)}</h3><p>${esc(p.resumen)}</p>
    <ul>${p.para.map(x=>`<li>${ico("i-check")}<span>${esc(x)}</span></li>`).join("")}</ul>
    <button class="btn btn--tinta btn--chico" data-plat="${p.iEquipo}">Cotizar plataforma ${ico("i-flecha")}</button>
  </article>`).join("");
D("#validaItems").innerHTML=VALIDACION.map(v=>`<li>${ico("i-check")}<span>${esc(v)}</span></li>`).join("");

D("#cuatroDatos").innerHTML=CUATRO_DATOS.map(([n,t,d])=>
  `<div class="dato"><span class="dato__n">${n}</span><b>${esc(t)}</b><span class="dato__d">${esc(d)}</span></div>`).join("");
D("#canales").innerHTML=CANALES.map(c=>`
  <article class="canal">
    <span class="canal__i">${ico(c.icono)}</span>
    <h3>${esc(c.k)}</h3><p>${esc(c.d)}</p>
    <b>${esc(c.v)}</b>
  </article>`).join("");
D("#queIncluir").innerHTML=QUE_INCLUIR.map(x=>`<li>${ico("i-check")}<span>${esc(x)}</span></li>`).join("");
D("#faq").innerHTML=FAQ.map(([q,a],i)=>`
  <div class="faq__i" data-faq>
    <button class="faq__btn" aria-expanded="false">
      <span class="faq__n">0${i+1}</span><span class="faq__q">${esc(q)}</span>
      <span class="faq__mas" aria-hidden="true">+</span>
    </button>
    <div class="faq__cuerpo"><p>${esc(a)}</p></div>
  </div>`).join("");
$$("[data-faq]").forEach(item=>{
  const btn=$(".faq__btn",item), cuerpo=$(".faq__cuerpo",item);
  btn.onclick=()=>{
    const abierto=item.classList.contains("is-open");
    $$("[data-faq]").forEach(o=>{
      if(o===item)return;
      o.classList.remove("is-open");
      $(".faq__cuerpo",o).style.height="0px";
      $(".faq__btn",o).setAttribute("aria-expanded","false");
    });
    item.classList.toggle("is-open",!abierto);
    btn.setAttribute("aria-expanded",String(!abierto));
    cuerpo.style.height=abierto?"0px":$("p",cuerpo).offsetHeight+32+"px";
  };
});

/* ==========================================================================
   CATÁLOGO + LISTA DE COTIZACIÓN
   ========================================================================== */
let cotizacion=[];
try{ const g=localStorage.getItem("upcomp_cot"); if(g) cotizacion=JSON.parse(g)||[]; }catch{}
const guardar=()=>{ try{ localStorage.setItem("upcomp_cot",JSON.stringify(cotizacion)); }catch{} };

D("#catalogo").innerHTML=EQUIPOS.map((e,i)=>`
  <article class="equipo">
    <div class="equipo__img"><img src="${e.img}" alt="${esc(e.t)}" loading="lazy"></div>
    <div class="equipo__cuerpo">
      <p class="carta__tag">${esc(e.tag)}</p>
      <h3 class="equipo__t">${esc(e.t)}</h3>
      <ul class="equipo__specs">${e.specs.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>
      <div class="equipo__acciones">
        <button class="btn btn--tinta btn--chico" data-cotizar="${i}">Cotizar</button>
        <button class="equipo__add" data-add="${i}" aria-label="Agregar ${esc(e.t)} a la lista">${ico("i-mas")}</button>
      </div>
    </div></article>`).join("");

function agregar(i,cant=1,plazo="",extras=[]){
  const ya=cotizacion.find(x=>x.i===i);
  if(ya){ ya.cant+=cant; if(plazo)ya.plazo=plazo; if(extras.length)ya.extras=extras; }
  else cotizacion.push({i,cant,plazo,extras});
  guardar(); pintarCarro();
  avisar(`${EQUIPOS[i].t} agregado a la cotización`);
}
$$("[data-add]").forEach(b=>b.onclick=()=>{
  agregar(+b.dataset.add);
  b.classList.add("is-add");
  setTimeout(()=>b.classList.remove("is-add"),700);
});
$$("[data-plat]").forEach(b=>b.onclick=()=>abrirModal(+b.dataset.plat));
$$("[data-partida]").forEach(b=>b.onclick=()=>{
  $("#contacto").scrollIntoView({behavior:"smooth"});
  avisar("Cuéntanos en el formulario: "+b.dataset.partida);
});

const nTotal=()=>cotizacion.reduce((a,x)=>a+x.cant,0);
function mensajeCotizacion(){
  const l=["Hola UpComp, quiero cotizar los siguientes equipos:",""];
  cotizacion.forEach(x=>{
    const e=EQUIPOS[x.i];
    l.push(`• ${x.cant} × ${e.t}`); l.push(`  ${e.specs.join(" · ")}`);
    if(x.plazo) l.push(`  Plazo: ${x.plazo}`);
    if(x.extras&&x.extras.length) l.push(`  Servicios: ${x.extras.join(", ")}`);
  });
  l.push("","Quedo atento a precio, disponibilidad y plazo de entrega.");
  return l.join("\n");
}
function pintarCarro(){
  const n=nTotal(), badge=$("#badgeCarro");
  badge.textContent=n; badge.classList.toggle("is-on",n>0);
  if(!cotizacion.length){
    $("#carroCuerpo").innerHTML=`<div class="vacio">${ico("i-carro")}
      <p>Tu lista de cotización está vacía.<br>Agrega equipos desde el catálogo.</p></div>`;
    $("#carroPie").innerHTML=`<a href="#equipos" class="btn btn--linea" id="irCatalogo">Ver equipos</a>`;
    $("#irCatalogo").onclick=cerrarTodo;
    return;
  }
  $("#carroCuerpo").innerHTML=cotizacion.map((x,k)=>{
    const e=EQUIPOS[x.i];
    return `<div class="linea-cot">
      <img src="${e.img}" alt="">
      <div>
        <p class="linea-cot__tag">${esc(e.tag)}</p>
        <p class="linea-cot__t">${esc(e.t)}</p>
        ${x.plazo?`<p style="font-size:.76rem;color:var(--gris);margin-top:.3rem">Plazo: ${esc(x.plazo)}</p>`:""}
        ${x.extras&&x.extras.length?`<p style="font-size:.76rem;color:var(--verde-oscuro);margin-top:.2rem">+ ${x.extras.map(esc).join(" · ")}</p>`:""}
        <div class="linea-cot__fila">
          <div class="stepper">
            <button data-menos="${k}" aria-label="Quitar uno">−</button>
            <span class="tabular">${x.cant}</span>
            <button data-mas="${k}" aria-label="Agregar uno">+</button>
          </div>
          <button class="quitar" data-quitar="${k}">Quitar</button>
        </div>
      </div></div>`;
  }).join("");
  $("#carroPie").innerHTML=`
    <p style="font-size:.82rem;color:var(--gris)">${n} ${n===1?"equipo":"equipos"} en la lista. UpComp responde con precio, disponibilidad y plazo.</p>
    <a class="btn btn--wa" href="${wa(mensajeCotizacion())}" target="_blank" rel="noopener">${ico("i-wa")} Solicitar cotización</a>
    <a class="btn btn--linea" href="mailto:${CORREO}?subject=${encodeURIComponent("Solicitud de cotización — sitio UpComp")}&body=${encodeURIComponent(mensajeCotizacion())}">Enviar por correo</a>
    <button class="quitar" id="vaciarCarro" style="justify-self:center">Vaciar lista</button>`;
  $$("[data-menos]").forEach(b=>b.onclick=()=>{const k=+b.dataset.menos;cotizacion[k].cant--;if(cotizacion[k].cant<1)cotizacion.splice(k,1);guardar();pintarCarro();});
  $$("[data-mas]").forEach(b=>b.onclick=()=>{cotizacion[+b.dataset.mas].cant++;guardar();pintarCarro();});
  $$("[data-quitar]").forEach(b=>b.onclick=()=>{cotizacion.splice(+b.dataset.quitar,1);guardar();pintarCarro();});
  $("#vaciarCarro").onclick=()=>{cotizacion=[];guardar();pintarCarro();avisar("Lista vaciada");};
}

/* ==========================================================================
   Capa modal
   ========================================================================== */
const velo=$("#velo"), panelCarro=$("#panelCarro"), modalCot=$("#modalCot");
function cerrarTodo(){
  velo.classList.remove("is-on");
  panelCarro.classList.remove("is-open"); panelCarro.setAttribute("aria-hidden","true");
  modalCot.classList.remove("is-open"); modalCot.setAttribute("aria-hidden","true");
  const pf=$("#panelFicha");
  if(pf){ pf.classList.remove("is-open"); pf.setAttribute("aria-hidden","true"); }
  document.body.classList.remove("sin-scroll");
}
function abrirCarro(){
  pintarCarro();
  velo.classList.add("is-on");
  panelCarro.classList.add("is-open"); panelCarro.setAttribute("aria-hidden","false");
  document.body.classList.add("sin-scroll");
}
$("#abrirCarro").onclick=abrirCarro;
$("#cerrarCarro").onclick=cerrarTodo;
velo.onclick=cerrarTodo;
addEventListener("keydown",e=>{ if(e.key==="Escape"){cerrarTodo();abrirDrawer(false);} });

let modalEstado={i:0,cant:1,plazo:"",extras:[]};
function abrirModal(i){
  modalEstado={i,cant:1,plazo:"",extras:[]};
  pintarModal();
  velo.classList.add("is-on");
  modalCot.classList.add("is-open"); modalCot.setAttribute("aria-hidden","false");
  document.body.classList.add("sin-scroll");
}
function pintarModal(){
  const e=EQUIPOS[modalEstado.i];
  $("#modalHead").innerHTML=`
    <img src="${e.img}" alt="">
    <div style="flex:1;min-width:0"><p class="carta__tag">${esc(e.tag)}</p><h2>${esc(e.t)}</h2></div>
    <button class="panel-lat__cerrar" id="cerrarModal" aria-label="Cerrar">${ico("i-x")}</button>`;
  $("#modalCuerpo").innerHTML=`
    <div class="campo-modal">
      <p class="campo-modal__k">¿Cuántas unidades?</p>
      <div class="linea-cot__fila" style="margin-top:.75rem">
        <div class="stepper">
          <button id="mMenos" aria-label="Menos">−</button>
          <span class="tabular" id="mCant">${modalEstado.cant}</span>
          <button id="mMas" aria-label="Más">+</button>
        </div>
        <span style="font-size:.82rem;color:var(--gris)">${esc(e.specs.join(" · "))}</span>
      </div>
    </div>
    <div class="campo-modal">
      <p class="campo-modal__k">¿Para cuándo lo necesitas?</p>
      <div class="grupo__chips">${PLAZOS_COT.map(p=>
        `<button class="chip ${modalEstado.plazo===p?"is-sel":""}" data-plazo="${esc(p)}">${esc(p)}</button>`).join("")}</div>
    </div>
    <div class="campo-modal">
      <p class="campo-modal__k">¿Necesitas servicios asociados?</p>
      <div class="check-fila">${SERVICIOS_EXTRA.map(s=>`
        <button class="check-op ${modalEstado.extras.includes(s)?"is-sel":""}" data-extra="${esc(s)}">
          <i>${ico("i-check")}</i>${esc(s)}</button>`).join("")}</div>
    </div>
    <p style="margin-top:1.5rem;font-size:.8rem;color:var(--gris);line-height:1.55">
      No publicamos precios porque cada configuración se cotiza según requerimiento técnico,
      stock de proveedor y plazo. Te respondemos con propuesta formal.</p>`;
  $("#modalPie").innerHTML=`
    <button class="btn btn--tinta" id="mAgregar">Agregar a la lista ${ico("i-mas")}</button>
    <a class="btn btn--wa" id="mEnviar" href="#" target="_blank" rel="noopener">${ico("i-wa")} Enviar ahora</a>`;
  $("#cerrarModal").onclick=cerrarTodo;
  $("#mMenos").onclick=()=>{modalEstado.cant=Math.max(1,modalEstado.cant-1);pintarModal();};
  $("#mMas").onclick=()=>{modalEstado.cant++;pintarModal();};
  $$("[data-plazo]",modalCot).forEach(b=>b.onclick=()=>{modalEstado.plazo=b.dataset.plazo;pintarModal();});
  $$("[data-extra]",modalCot).forEach(b=>b.onclick=()=>{
    const s=b.dataset.extra,k=modalEstado.extras.indexOf(s);
    if(k>=0)modalEstado.extras.splice(k,1); else modalEstado.extras.push(s);
    pintarModal();
  });
  $("#mAgregar").onclick=()=>{agregar(modalEstado.i,modalEstado.cant,modalEstado.plazo,modalEstado.extras.slice());cerrarTodo();};
  const l=["Hola UpComp, quiero cotizar:","",`${modalEstado.cant} × ${e.t}`,e.specs.join(" · ")];
  if(modalEstado.plazo) l.push("",`Plazo: ${modalEstado.plazo}`);
  if(modalEstado.extras.length) l.push(`Servicios: ${modalEstado.extras.join(", ")}`);
  $("#mEnviar").href=wa(l.join("\n"));
}
$$("[data-cotizar]").forEach(b=>b.onclick=e=>{e.stopPropagation();abrirModal(+b.dataset.cotizar);});
pintarCarro();

/* ==========================================================================
   FICHA DE PRODUCTO
   Estructura tomada de las fichas reales de upcomp.cl: SKU, descripción,
   características destacadas, ideal para, especificaciones y servicios.
   Los equipos sin ficha completa lo dicen en vez de rellenar con invento.
   ========================================================================== */
const panelFicha=$("#panelFicha");
let fichaActual=0, pestanaActual="descripcion";

const REDES=[
  {ico:"i-wa", nombre:"WhatsApp", url:t=>`https://wa.me/?text=${encodeURIComponent(t.titulo+" — "+t.url)}`},
  {ico:"i-fb", nombre:"Facebook", url:t=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t.url)}`},
  {ico:"i-x",  nombre:"X",        url:t=>`https://twitter.com/intent/tweet?text=${encodeURIComponent(t.titulo)}&url=${encodeURIComponent(t.url)}`},
  {ico:"i-in", nombre:"LinkedIn", url:t=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(t.url)}`}
];

function abrirFicha(i){
  fichaActual=i; pestanaActual="descripcion";
  pintarFicha();
  velo.classList.add("is-on");
  panelFicha.classList.add("is-open");
  panelFicha.setAttribute("aria-hidden","false");
  document.body.classList.add("sin-scroll");
  panelFicha.scrollTop=0;
}

function pintarFicha(){
  const e=EQUIPOS[fichaActual], f=FICHAS[fichaActual];
  const compartir={titulo:e.t, url:location.origin+location.pathname+"#equipos"};

  const pest=[["descripcion","Descripción"],["detalles","Detalles"],["archivos","Archivos"]];

  let cuerpo="";
  if(pestanaActual==="descripcion"){
    cuerpo = f ? `
      <p class="ficha__desc">${esc(f.desc)}</p>
      <h3 class="ficha__h">Características destacadas</h3>
      <ul class="ficha__carac">${f.carac.map(([t,d])=>`<li>${ico("i-check")}<span><b>${esc(t)}:</b> ${esc(d)}</span></li>`).join("")}</ul>
      <h3 class="ficha__h">Ideal para</h3>
      <ul class="ficha__ideal">${f.ideal.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`
    : `<p class="ficha__desc">${esc(e.t)} — equipo del catálogo vigente de UpComp, configurado según los requerimientos de cada proyecto.</p>
       <h3 class="ficha__h">Configuración</h3>
       <ul class="ficha__ideal">${e.specs.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>
       <p class="alcance" style="margin-top:1.5rem"><b>Ficha técnica completa:</b> el detalle extendido de este equipo se entrega junto con la cotización.</p>`;
  }else if(pestanaActual==="detalles"){
    cuerpo = (f?`
      <h3 class="ficha__h" style="margin-top:0">Especificaciones técnicas</h3>
      <div class="ficha__tabla"><table><tbody>
        ${f.specs.map(([k,v])=>`<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}
      </tbody></table></div>`:`
      <h3 class="ficha__h" style="margin-top:0">Configuración</h3>
      <div class="ficha__tabla"><table><tbody>
        ${e.specs.map(s=>`<tr><td colspan="2">${esc(s)}</td></tr>`).join("")}
      </tbody></table></div>`)
    + `<h3 class="ficha__h">Servicios UpComp</h3>
       <ul class="ficha__ideal">${SERVICIOS_UPCOMP.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>
       <p class="alcance" style="margin-top:1.5rem">${esc(NOTA_DISPONIBILIDAD)}</p>`;
  }else{
    cuerpo = `<div class="ficha__archivos">
      ${ico("i-caja")}
      <h3>Documentación del equipo</h3>
      <p>La ficha técnica en PDF, el detalle de componentes y la garantía aplicable se adjuntan junto con la cotización formal.</p>
      <button class="btn btn--tinta btn--chico" id="fichaPedirDoc">Pedir documentación ${ico("i-flecha")}</button>
    </div>`;
  }

  panelFicha.innerHTML=`
    <div class="ficha__barra">
      <div class="ficha__barra-in">
        <button class="ficha__volver" id="cerrarFicha">${ico("i-izq")} <span>Volver al catálogo</span></button>
        <span class="logo" style="color:#E9EFEB"><img src="assets/marcas/upcomp-logo.webp" alt="" width="28" height="28">UPCOMP</span>
        <button class="icono-btn" id="fichaCarro" aria-label="Abrir lista de cotización">
          ${ico("i-carro")}<span class="badge ${nTotal()>0?"is-on":""}">${nTotal()}</span>
        </button>
      </div>
    </div>
    <div class="ficha">
      <div class="ficha__top">
        <div class="ficha__galeria">
          <div class="ficha__img" id="fichaZoom" title="Pasa el cursor para acercar">
            <img src="${e.img}" alt="${esc(e.t)}">
            <span class="ficha__lupa">${ico("i-lupa")} Acercar</span>
          </div>
          <button class="ficha__ampliar" id="fichaAmpliar">${ico("i-lupa")} Ver en grande</button>
        </div>
        <div class="ficha__info">
          ${f?`<p class="ficha__sku">SKU: ${esc(f.sku)}</p>`:`<p class="ficha__sku">Catálogo UpComp</p>`}
          <p class="carta__tag">${esc(e.tag)}</p>
          <h2>${esc(e.t)}</h2>
          <ul class="ficha__chips">${e.specs.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>
          <div class="ficha__acciones">
            <button class="btn btn--tinta" id="fichaCotizar">Cotizar ${ico("i-flecha")}</button>
            <button class="btn btn--linea" id="fichaAgregar">Agregar a la lista ${ico("i-mas")}</button>
          </div>
          <div class="ficha__compartir">
            <p>Compartir este producto</p>
            <div class="ficha__redes">
              ${REDES.map(r=>`<a href="${r.url(compartir)}" target="_blank" rel="noopener" aria-label="Compartir en ${r.nombre}" title="${r.nombre}">${ico(r.ico)}</a>`).join("")}
              <button id="fichaCopiar" aria-label="Copiar enlace" title="Copiar enlace">${ico("i-enlace")}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="ficha__pest" role="tablist">
        ${pest.map(([id,l])=>`<button role="tab" aria-selected="${pestanaActual===id}" data-pest="${id}">${l}</button>`).join("")}
      </div>
      <div class="ficha__cuerpo">${cuerpo}</div>
      <div class="ficha__relacionados">
        <h3 class="ficha__h" style="margin-top:0">También podría interesarte</h3>
        <div class="ficha__rel">
          ${EQUIPOS.map((o,k)=>k===fichaActual?"":`
            <button class="rel" data-ficha="${k}">
              <img src="${o.img}" alt="" loading="lazy">
              <span>${esc(o.t)}</span>
            </button>`).join("")}
        </div>
      </div>
    </div>`;

  $("#cerrarFicha").onclick=cerrarTodo;
  $("#fichaCarro").onclick=()=>{cerrarTodo();setTimeout(abrirCarro,260);};
  $("#fichaCotizar").onclick=()=>{cerrarTodo();setTimeout(()=>abrirModal(fichaActual),260);};
  $("#fichaAgregar").onclick=()=>agregar(fichaActual);

  /* Lupa: la imagen se acerca siguiendo el cursor, como en las fichas
     de catálogo industrial. Con el dedo no aplica, ahí va "Ver en grande". */
  const zona=$("#fichaZoom"), img=$("img",zona);
  if(matchMedia("(hover:hover)").matches){
    zona.addEventListener("mousemove",ev=>{
      const r=zona.getBoundingClientRect();
      const x=((ev.clientX-r.left)/r.width)*100, y=((ev.clientY-r.top)/r.height)*100;
      img.style.transformOrigin=`${x}% ${y}%`;
      img.style.transform="scale(2.2)";
      zona.classList.add("is-zoom");
    });
    zona.addEventListener("mouseleave",()=>{
      img.style.transform=""; zona.classList.remove("is-zoom");
    });
  }
  $("#fichaAmpliar").onclick=()=>{
    const v=document.createElement("div");
    v.className="visor";
    v.innerHTML=`<img src="${e.img}" alt="${esc(e.t)}"><button aria-label="Cerrar">${ico("i-x")}</button>`;
    document.body.appendChild(v);
    requestAnimationFrame(()=>v.classList.add("is-on"));
    const fuera=()=>{v.classList.remove("is-on");setTimeout(()=>v.remove(),300);};
    v.onclick=fuera;
  };
  $("#fichaCopiar").onclick=async()=>{
    try{ await navigator.clipboard.writeText(compartir.url); avisar("Enlace copiado"); }
    catch{ avisar("No se pudo copiar el enlace"); }
  };
  const doc=$("#fichaPedirDoc");
  if(doc) doc.onclick=()=>{cerrarTodo();setTimeout(()=>$("#contacto").scrollIntoView({behavior:"smooth"}),260);};
  $$("[data-pest]",panelFicha).forEach(b=>b.onclick=()=>{pestanaActual=b.dataset.pest;pintarFicha();});
  $$("[data-ficha]",panelFicha).forEach(b=>b.onclick=()=>{abrirFicha(+b.dataset.ficha);});
}

/* La tarjeta completa abre la ficha; los botones internos no la disparan. */
$$("#catalogo .equipo").forEach((el,i)=>{
  el.style.cursor="pointer";
  el.setAttribute("tabindex","0");
  el.setAttribute("role","button");
  el.setAttribute("aria-label","Ver ficha de "+EQUIPOS[i].t);
  el.addEventListener("click",ev=>{ if(ev.target.closest("button")) return; abrirFicha(i); });
  el.addEventListener("keydown",ev=>{ if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();abrirFicha(i);} });
});

/* ==========================================================================
   Configurador
   ========================================================================== */
let paso=0, respuestas={};
const puntajes=()=>{
  const a={threadripper:0,intel:0,ryzen:0};
  PREGUNTAS.forEach(pr=>{const op=pr.opciones.find(o=>o.id===respuestas[pr.id]);if(op)for(const k in a)a[k]+=op.p[k];});
  return a;
};
function pintarConfigurador(){
  const pts=puntajes(), respondidas=Object.keys(respuestas).length;
  const max=Math.max(1,...Object.values(pts));
  const ganadora=[...PLATAFORMAS].sort((a,b)=>pts[b.id]-pts[a.id])[0];
  const listo=paso>=PREGUNTAS.length;
  D("#progreso").innerHTML=PREGUNTAS.map((p,i)=>{
    const hecha=!!respuestas[p.id], ahora=i===paso&&!listo;
    return `<div class="progreso__item ${hecha?"is-done":""} ${ahora?"is-now":""}">
      <span class="progreso__n">0${i+1}</span><span class="progreso__barra"></span></div>`;
  }).join("");
  if(!listo){
    const p=PREGUNTAS[paso];
    D("#preg").innerHTML=`
      <h3>${esc(p.titulo)}</h3><p class="preg__ayuda">${esc(p.ayuda)}</p>
      <div class="opciones">${p.opciones.map(o=>`
        <button class="opcion ${respuestas[p.id]===o.id?"is-sel":""}" data-op="${o.id}">
          <b>${esc(o.l)}</b><span>${esc(o.n)}</span></button>`).join("")}</div>
      ${paso>0?'<button class="volver" id="volver">← Volver</button>':""}`;
    $$("#preg .opcion").forEach(b=>b.onclick=()=>{
      respuestas[p.id]=b.dataset.op; pintarConfigurador();
      setTimeout(()=>{paso++;pintarConfigurador();},240);
    });
    const v=$("#volver"); if(v)v.onclick=()=>{paso=Math.max(0,paso-1);pintarConfigurador();};
  }else{
    D("#preg").innerHTML=`
      <p class="eyebrow eyebrow--claro">Plataforma sugerida</p>
      <h3 style="margin-top:.75rem;font-size:clamp(1.35rem,3.2vw,1.8rem)">${esc(ganadora.nombre)}</h3>
      <p style="margin-top:.35rem;font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--verde)">${esc(ganadora.etiqueta)}</p>
      <p style="margin-top:1rem;max-width:48ch;font-size:.94rem;color:#93A79D">${esc(ganadora.resumen)}</p>
      <ul class="check-lista">${ganadora.para.map(x=>`<li>${ico("i-check")}<span>${esc(x)}</span></li>`).join("")}</ul>
      <div class="resultado__equipo">
        <img src="${ganadora.img}" alt="" loading="lazy">
        <div><p class="k">Equipo de referencia en catálogo</p><p class="v">${esc(ganadora.equipo)}</p></div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.5rem">
        <button class="btn btn--primario" id="cfgAgregar">Agregar a mi cotización ${ico("i-mas")}</button>
        <button class="btn btn--linea-clara" id="reiniciarCfg">Empezar de nuevo</button>
      </div>`;
    $("#reiniciarCfg").onclick=()=>{paso=0;respuestas={};pintarConfigurador();};
    $("#cfgAgregar").onclick=()=>{agregar(ganadora.iEquipo);abrirCarro();};
  }
  D("#barras").innerHTML=PLATAFORMAS.map(p=>{
    const lider=listo&&p.id===ganadora.id;
    const pct=respondidas===0?0:(pts[p.id]/max)*100;
    return `<div>
      <div class="barra__fila">
        <span class="barra__nombre ${lider?"is-lider":""}">${esc(p.nombre)}</span>
        <span class="barra__valor tabular">${pts[p.id]}</span>
      </div>
      <div class="barra__pista"><div class="barra__relleno ${lider?"is-lider":""}" style="width:${pct}%"></div></div>
    </div>`;
  }).join("");
}
if($("#preg")) pintarConfigurador();

/* ==========================================================================
   Calculadora — valores DE EJEMPLO, pendientes de definición comercial
   ========================================================================== */
const PLANES=[
  {id:"estandar",nombre:"Estándar",d:"Respaldo y gestión ordenada de incidentes.",ref:34000,
   incluye:["Preparación y despliegue del equipo","Mesa de ayuda en horario hábil","Mantención preventiva programada","Gestión de garantía de fabricante"]},
  {id:"premium",nombre:"Premium",d:"Mayor continuidad, prioridad y niveles de atención.",ref:52000,
   incluye:["Todo lo del plan Estándar","Prioridad de atención y tiempos acotados","Equipo temporal sujeto a disponibilidad","Reportabilidad y revisión periódica"]}
];
const TRAMOS=[{desde:1,desc:0},{desde:11,desc:.05},{desde:51,desc:.10},{desde:201,desc:.15}];
let planActivo="estandar";
const inputUsuarios=D("#usuarios");
D("#atajos").innerHTML=[10,25,50,100,200].map(n=>`<button class="atajo" data-n="${n}">${n}</button>`).join("");
D("#planes").innerHTML=PLANES.map(p=>`
  <button class="plan" data-plan="${p.id}">
    <b>${esc(p.nombre)}<svg viewBox="0 0 24 24" aria-hidden="true" style="display:none"><use href="#i-check"/></svg></b>
    <span>${esc(p.d)}</span></button>`).join("");
function pintarCalculadora(){
  const n=+inputUsuarios.value;
  const plan=PLANES.find(p=>p.id===planActivo);
  const tramo=[...TRAMOS].reverse().find(t=>n>=t.desde);
  const unitario=Math.round(plan.ref*(1-tramo.desc));
  const mensual=unitario*n;
  D("#salidaUsuarios").textContent=n;
  /* La cuenta se muestra escrita, no solo el total: quien la mira tiene que
     entender de dónde sale la cifra sin preguntar. */
  D("#calcFormula").innerHTML=`
    <div class="formula__fila">
      <span class="formula__op"></span>
      <span class="formula__val tabular">${n}</span>
      <span class="formula__et">${n===1?"usuario cubierto":"usuarios cubiertos"}</span>
    </div>
    <div class="formula__fila">
      <span class="formula__op">×</span>
      <span class="formula__val tabular">${clp.format(unitario)}</span>
      <span class="formula__et">por usuario, cada mes${tramo.desc>0?` <b>(lista ${clp.format(plan.ref)} − ${Math.round(tramo.desc*100)}% por volumen)</b>`:""}</span>
    </div>
    <div class="formula__fila formula__fila--total">
      <span class="formula__op">=</span>
      <span class="formula__val tabular">${clp.format(mensual)}</span>
      <span class="formula__et">al mes, plan ${esc(plan.nombre)}</span>
    </div>
    <p class="formula__anual">Equivale a <b class="tabular">${clp.format(mensual*12)}</b> al año.
      Reemplaza la compra de ${n} ${n===1?"equipo":"equipos"} más su soporte, garantía y renovación.</p>`;
  D("#incluye").innerHTML=plan.incluye.map(i=>`<li>${ico("i-check")}${esc(i)}</li>`).join("");
  $$("#atajos .atajo").forEach(b=>b.classList.toggle("is-sel",+b.dataset.n===n));
  $$("#planes .plan").forEach(b=>{
    const on=b.dataset.plan===planActivo;
    b.classList.toggle("is-sel",on);
    $("svg",b).style.display=on?"block":"none";
  });
}
inputUsuarios.oninput=pintarCalculadora;
$$("#atajos .atajo").forEach(b=>b.onclick=()=>{inputUsuarios.value=b.dataset.n;pintarCalculadora();});
$$("#planes .plan").forEach(b=>b.onclick=()=>{planActivo=b.dataset.plan;pintarCalculadora();});
if($("#usuarios")) pintarCalculadora();

/* ==========================================================================
   Clientes
   ========================================================================== */
let filtro="Todas";
const VERTICALES=["Todas",...new Set(CLIENTES.map(c=>c.v))];
function pintarClientes(){
  D("#chips").innerHTML=VERTICALES.map(v=>`<button class="chip ${v===filtro?"is-sel":""}" data-v="${esc(v)}">${esc(v)}</button>`).join("");
  const vis=filtro==="Todas"?CLIENTES:CLIENTES.filter(c=>c.v===filtro);
  D("#listaClientes").innerHTML=vis.map(c=>`
    <article class="cliente">
      <div class="cliente__tile ${c.oscuro?"cliente__tile--oscuro":""}">
        ${c.logo?`<img src="${c.logo}" alt="${esc(c.n)}" loading="lazy">`:`<b>${esc(c.n.split(" ")[0])}</b>`}
      </div>
      <h3>${esc(c.n)}</h3><span>${esc(c.d)}</span>
    </article>`).join("");
  $$("#chips .chip").forEach(b=>b.onclick=()=>{filtro=b.dataset.v;pintarClientes();});
}
if($("#listaClientes")) pintarClientes();

/* ==========================================================================
   Formulario calificador
   ========================================================================== */
const NECESIDADES=[
  {id:"equipamiento",l:"Equipamiento"},{id:"puestos",l:"Puestos de trabajo"},
  {id:"soporte",l:"Soporte TI"},{id:"infraestructura",l:"Infraestructura"},
  {id:"continuidad",l:"Continuidad"},{id:"software",l:"Software a medida"}
];
const CARGOS=["Gerencia general","Gerencia TI","Jefatura TI","Compras","Operaciones","Otro"];
const TRAMOS_U=["1 a 10","11 a 50","51 a 200","Más de 200"];
const PLAZOS=["Este mes","Dentro del trimestre","Este año","Estoy explorando"];
const NOMBRES_PASOS=["Necesidad","Contexto","Datos"];
let fPaso=0, enviado=false;
const F={necesidad:"",cargo:"",usuarios:"",plazo:"",nombre:"",empresa:"",email:"",telefono:"",mensaje:""};
const puedeAvanzar=()=>fPaso===0?!!F.necesidad:fPaso===1?!!(F.cargo&&F.usuarios&&F.plazo):!!(F.nombre.trim()&&F.empresa.trim()&&F.email.trim());
const resumen=()=>{
  const et=(NECESIDADES.find(n=>n.id===F.necesidad)||{}).l||F.necesidad;
  const l=["Solicitud desde el sitio de UpComp","",`Necesidad: ${et}`,`Cargo: ${F.cargo}`,
    `Usuarios: ${F.usuarios}`,`Plazo: ${F.plazo}`,"",`Nombre: ${F.nombre}`,`Empresa: ${F.empresa}`,`Email: ${F.email}`];
  if(F.telefono) l.push(`Teléfono: ${F.telefono}`);
  if(F.mensaje) l.push("",`Detalle: ${F.mensaje}`);
  if(cotizacion.length){ l.push("","Equipos en la lista de cotización:"); cotizacion.forEach(x=>l.push(`• ${x.cant} × ${EQUIPOS[x.i].t}`)); }
  return l.join("\n");
};
const chipsDe=(arr,campo)=>`<div class="grupo__chips">${arr.map(o=>
  `<button class="chip ${F[campo]===o?"is-sel":""}" data-campo="${campo}" data-val="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
function pintarFormulario(){
  D("#formPasos").innerHTML=NOMBRES_PASOS.map((p,i)=>{
    const hecho=i<fPaso||enviado, ahora=i===fPaso&&!enviado;
    return `<div class="form__paso ${ahora?"is-now":""} ${hecho?"is-done":""}">
      <i>${hecho?ico("i-check"):i+1}</i><span>${p}</span></div>`;
  }).join("");
  if(enviado){
    D("#formCuerpo").innerHTML=`
      <h3>Solicitud lista</h3>
      <p style="margin-top:.5rem;font-size:.92rem;color:var(--tinta-2)">Revisa el resumen y elige por dónde enviarla.</p>
      <pre class="resumen">${esc(resumen())}</pre>
      <div class="envios">
        <a class="btn btn--wa" href="${wa(resumen())}" target="_blank" rel="noopener">${ico("i-wa")} Enviar por WhatsApp</a>
        <a class="btn btn--linea" href="mailto:${CORREO}?subject=${encodeURIComponent("Solicitud web — "+(F.empresa||"empresa"))}&body=${encodeURIComponent(resumen())}">${ico("i-mail")} Enviar por correo</a>
      </div>
      <div class="form__nav">
        <p style="font-size:.78rem;color:var(--gris);max-width:40ch">En el prototipo el formulario aún no guarda en un CRM: abre WhatsApp o el correo con los datos ya escritos.</p>
        <button class="volver" id="fReiniciar" style="color:var(--gris)">Empezar de nuevo</button>
      </div>`;
    $("#fReiniciar").onclick=()=>{Object.keys(F).forEach(k=>F[k]="");fPaso=0;enviado=false;pintarFormulario();};
    return;
  }
  let html="";
  if(fPaso===0){
    html=`<h3>¿Qué necesitas resolver?</h3><div class="opciones-simples">${NECESIDADES.map(n=>
      `<button class="op-simple ${F.necesidad===n.id?"is-sel":""}" data-nec="${n.id}">${esc(n.l)}</button>`).join("")}</div>`;
  }else if(fPaso===1){
    html=`<div class="grupo"><p class="form__label">Tu rol en la empresa</p>${chipsDe(CARGOS,"cargo")}</div>
      <div class="grupo"><p class="form__label">Usuarios o equipos involucrados</p>${chipsDe(TRAMOS_U,"usuarios")}</div>
      <div class="grupo"><p class="form__label">Plazo estimado</p>${chipsDe(PLAZOS,"plazo")}</div>`;
  }else{
    html=`<div class="form__campos">
      <div><label class="form__label" for="fNombre">Nombre *</label><input type="text" id="fNombre" autocomplete="name" value="${esc(F.nombre)}"></div>
      <div><label class="form__label" for="fEmpresa">Empresa *</label><input type="text" id="fEmpresa" autocomplete="organization" value="${esc(F.empresa)}"></div>
      <div><label class="form__label" for="fEmail">Correo corporativo *</label><input type="email" id="fEmail" autocomplete="email" value="${esc(F.email)}"></div>
      <div><label class="form__label" for="fTel">Teléfono</label><input type="tel" id="fTel" autocomplete="tel" value="${esc(F.telefono)}"></div>
      <div class="form__campo--ancho"><label class="form__label" for="fMsg">Detalle (opcional)</label>
        <textarea id="fMsg" placeholder="Software que usan, equipos a renovar, procesos a automatizar…">${esc(F.mensaje)}</textarea></div>
    </div>${cotizacion.length?`<p style="margin-top:1rem;font-size:.82rem;color:var(--verde-oscuro)">Se adjuntarán los ${nTotal()} equipos de tu lista de cotización.</p>`:""}`;
  }
  html+=`<div class="form__nav">
      <button class="volver" id="fVolver" style="color:var(--gris);${fPaso===0?"visibility:hidden":""}">← Volver</button>
      <button class="btn btn--tinta" id="fSiguiente" ${puedeAvanzar()?"":"disabled"}>
        ${fPaso===2?"Revisar solicitud":"Continuar"} ${ico("i-flecha")}</button></div>`;
  D("#formCuerpo").innerHTML=html;
  $$("#formCuerpo [data-nec]").forEach(b=>b.onclick=()=>{F.necesidad=b.dataset.nec;pintarFormulario();});
  $$("#formCuerpo [data-campo]").forEach(b=>b.onclick=()=>{F[b.dataset.campo]=b.dataset.val;pintarFormulario();});
  const liga=(id,campo)=>{const el=$(id);if(el)el.oninput=e=>{F[campo]=e.target.value;$("#fSiguiente").disabled=!puedeAvanzar();};};
  liga("#fNombre","nombre");liga("#fEmpresa","empresa");liga("#fEmail","email");liga("#fTel","telefono");liga("#fMsg","mensaje");
  $("#fVolver").onclick=()=>{fPaso=Math.max(0,fPaso-1);pintarFormulario();};
  $("#fSiguiente").onclick=()=>{if(fPaso===2){enviado=true;}else{fPaso++;}pintarFormulario();};
}
if($("#formCuerpo")) pintarFormulario();

/* ==========================================================================
   Asistente
   ========================================================================== */
const bot=$("#bot"), botChat=$("#botChat"), botOps=$("#botOps");
let nodo="inicio", iniciado=false, ocupado=false;
const burbuja=(texto,de)=>{
  const p=document.createElement("p");
  p.className="burbuja burbuja--"+de; p.textContent=texto;
  botChat.appendChild(p); botChat.scrollTop=botChat.scrollHeight;
};
function fichaEquipo(i){
  const e=EQUIPOS[i];
  const d=document.createElement("div");
  d.className="bot-ficha";
  d.innerHTML=`<img src="${e.img}" alt=""><div><b>${esc(e.t)}</b><button>Agregar a cotización</button></div>`;
  botChat.appendChild(d);
  $("button",d).onclick=()=>agregar(i);
  botChat.scrollTop=botChat.scrollHeight;
}
const tecleando=mostrar=>{
  const previo=$(".tecleando",botChat); if(previo)previo.remove();
  if(!mostrar)return;
  const d=document.createElement("div");
  d.className="tecleando"; d.innerHTML="<i></i><i></i><i></i>";
  botChat.appendChild(d); botChat.scrollTop=botChat.scrollHeight;
};
function pintarOpciones(){
  const n=GUION[nodo];
  if(n.cierre){
    botOps.className="bot__ops bot__ops--cierre";
    botOps.innerHTML=`
      <a class="btn btn--wa" href="${wa("Hola, vengo del sitio de UpComp. Estuve conversando con el asistente y quiero hablar con un ejecutivo.")}" target="_blank" rel="noopener">${ico("i-wa")} Continuar por WhatsApp</a>
      <button class="btn btn--linea" id="botForm">Prefiero dejar mis datos</button>`;
    $("#botForm").onclick=()=>{abrirBot(false);$("#contacto").scrollIntoView({behavior:"smooth"});};
    return;
  }
  botOps.className="bot__ops";
  botOps.innerHTML=n.o.map(o=>`<button class="bot__op" data-ir="${esc(o.ir)}" data-l="${esc(o.l)}">${esc(o.l)}</button>`).join("");
  $$(".bot__op",botOps).forEach(b=>b.onclick=()=>responder(b.dataset.l,b.dataset.ir));
}
function responder(label,ir){
  if(ocupado)return;
  burbuja(label,"yo");
  if(ir==="@carro"){ abrirBot(false); abrirCarro(); return; }
  if(ir.startsWith("#")){ abrirBot(false); setTimeout(()=>$(ir).scrollIntoView({behavior:"smooth"}),200); return; }
  ocupado=true; botOps.innerHTML=""; tecleando(true);
  setTimeout(()=>{
    tecleando(false); nodo=ir;
    GUION[ir].r.forEach(t=>burbuja(t,"bot"));
    if(GUION[ir].fichas) GUION[ir].fichas.forEach(fichaEquipo);
    pintarOpciones(); ocupado=false;
  },700);
}
function abrirBot(v){
  bot.classList.toggle("is-open",v);
  $("#fabBot").setAttribute("aria-expanded",String(v));
  if(v&&!iniciado){
    iniciado=true; tecleando(true);
    setTimeout(()=>{tecleando(false);GUION.inicio.r.forEach(t=>burbuja(t,"bot"));pintarOpciones();},600);
  }
}
$("#fabBot").onclick=()=>abrirBot(!bot.classList.contains("is-open"));
$("#botReset").onclick=()=>{
  nodo="inicio"; ocupado=false; botChat.innerHTML="";
  GUION.inicio.r.forEach(t=>burbuja(t,"bot")); pintarOpciones();
};

revisarVisibles();
