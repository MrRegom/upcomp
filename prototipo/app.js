/* ==========================================================================
   UpComp — prototipo
   Todo el contenido proviene de upcomp.cl y del Portafolio Corporativo 2026.
   No hay datos inventados: lo que no está confirmado va marcado como tal.
   ========================================================================== */

const TELEFONO="56982794984", CORREO="contacto@upcomp.cl";

/* ---------- Equipos: catálogo vigente de upcomp.cl ---------- */
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

/* ---------- Soluciones destacadas: texto literal de upcomp.cl ---------- */
const SOLUCIONES=[
  {icono:"i-laptop",t:"Notebooks Corporativos",d:"Equipos para productividad, movilidad, trabajo híbrido y usuarios administrativos, comerciales o ejecutivos.",cta:"Ver categoría"},
  {icono:"i-cpu",t:"Workstations Profesionales",d:"Potencia para ingeniería, diseño, modelamiento 3D, render, IA, geociencias y cargas de trabajo exigentes.",cta:"Ver soluciones"},
  {icono:"i-server",t:"Servidores e Infraestructura",d:"Soluciones para virtualización, almacenamiento, respaldo, operación crítica y crecimiento empresarial.",cta:"Cotizar proyecto"},
  {icono:"i-red",t:"Networking y Videoconferencia",d:"Redes, conectividad, Wi-Fi empresarial, switches, salas de reunión y colaboración para equipos modernos.",cta:"Ver soluciones"}
];

/* ---------- Ciclo y beneficios: del banner "Puesto de Trabajo" ---------- */
const CICLO_OP=[
  {icono:"i-carro",t:"Adquisición",d:"Equipos pensados para tu operación"},
  {icono:"i-engranaje",t:"Implementación",d:"Puesta en marcha rápida y eficiente"},
  {icono:"i-soporte",t:"Soporte",d:"Acompañamiento experto"},
  {icono:"i-panel",t:"Continuidad",d:"Operación estable, productiva y segura"}
];
const BENEFICIOS=[
  {icono:"i-escudo",t:"Seguridad",d:"Protección de datos y dispositivos"},
  {icono:"i-nube",t:"Disponibilidad",d:"Soluciones listas para mantener tu operación"},
  {icono:"i-panel",t:"Gestión centralizada",d:"Monitoreo y control para decisiones ágiles"},
  {icono:"i-ciclo",t:"Escalabilidad",d:"Tecnología que crece con tu negocio"}
];

const PARTNERS=[
  {logo:"assets/marcas/dell.svg",n:"Dell Technologies",d:"Notebooks, workstations, servidores y soluciones corporativas."},
  {logo:"assets/marcas/lenovo.svg",n:"Lenovo",d:"Equipamiento corporativo, estaciones de trabajo y movilidad."},
  {logo:"assets/marcas/hp-partner.webp",n:"HP Partner",d:"Notebooks, desktops, workstations y soluciones empresariales HP."},
  {logo:"assets/marcas/logitech.svg",n:"Logitech",d:"Videocolaboración y soluciones profesionales para salas de reuniones."},
  {logo:"assets/marcas/cisco-partner.svg",n:"Cisco Partner",d:"Networking, switching, Wi-Fi empresarial y soluciones Cisco Meraki."}
];

/* Logos reales tomados de upcomp.cl. Geocom y Ducati quedan sin imagen:
   sus URLs devuelven "Image Not Found!" en el propio sitio de UpComp, así
   que se muestran como marca tipográfica en vez de inventarles un logo. */
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

/* Cifras contables desde el propio portafolio. Pendiente: años y proyectos. */
const CIFRAS=[
  {n:4,t:"pilares en el portafolio corporativo"},
  {n:5,t:"nichos de equipamiento especializado"},
  {n:10,t:"organizaciones en la cartera publicada"},
  {n:5,t:"partners con respaldo oficial"}
];

const PILARES=[
  {n:"01",nombre:"Equipamiento especializado",fondo:"assets/banners/tecnologia.webp",
   intro:"Cinco nichos donde la selección técnica y la correcta implementación hacen la diferencia.",
   items:[["Workstations profesionales","Ingeniería, CAD/BIM, render, geociencias, simulación e IA."],
          ["Notebooks corporativos","Movilidad, flotas, trabajo híbrido y usuarios ejecutivos o técnicos."],
          ["Servidores empresariales","Virtualización, almacenamiento, respaldo y operación crítica."],
          ["Salas de reuniones","Videocolaboración, audio, cámaras, control y puesta en marcha."],
          ["Redes empresariales","Switching, Wi-Fi, seguridad, segmentación y administración."]]},
  {n:"02",nombre:"Servicios integrales",fondo:"assets/banners/puesto-trabajo.webp",
   intro:"Reducir carga interna, mantener usuarios operativos y extender el ciclo de vida de la tecnología.",
   items:[["Servicio técnico","Diagnóstico, mantención, reparación, upgrades y soporte remoto o presencial."],
          ["Outsourcing IT","Mesa de ayuda, tickets, administración operativa y reportabilidad."],
          ["Garantías UpComp","Plan estándar y plan premium según continuidad requerida."],
          ["Puesto de trabajo gestionado","Equipo, soporte, garantía y renovación en un solo bundle."]]},
  {n:"03",nombre:"Desarrollo e integración",fondo:"assets/banners/portafolio.webp",nuevo:true,
   intro:"Cuando una plataforma estándar no resuelve el proceso real, diseñamos y construimos la solución.",
   items:[["Aplicaciones y portales","Sistemas web, portales internos, backoffice y soluciones a usuarios o clientes."],
          ["Automatización de procesos","Flujos, tareas repetitivas y validaciones que hoy son manuales."],
          ["Integraciones y APIs","Conexión entre plataformas, servicios externos y fuentes de datos."],
          ["Sistemas internos y analítica","Herramientas operativas, paneles y trazabilidad."]]},
  {n:"04",nombre:"Financiamiento empresas",fondo:"assets/banners/financiamiento.webp",
   intro:"La estructura comercial se define según el tamaño del proyecto y la evaluación correspondiente.",
   items:[["Compra directa","Pago tradicional bajo las condiciones comerciales acordadas."],
          ["Financiamiento directo UpComp","Para proyectos seleccionados, sujeto a evaluación interna."],
          ["Entidad externa","Para proyectos de mayor escala, sujeto a aprobación de la entidad."]]}
];

const DESARROLLO=[
  {icono:"i-codigo",t:"Software a medida",d:"Aplicaciones, portales y backoffice construidos alrededor del proceso real de la empresa, no al revés.",tags:["Levantamiento","Arquitectura","UX","Producción"]},
  {icono:"i-enchufe",t:"APIs e integraciones",d:"Conectamos sistemas que hoy no se hablan: ERP, mayoristas, servicios externos y fuentes de datos internas.",tags:["REST","Middleware","Sincronización","Trazabilidad"]},
  {icono:"i-flujo",t:"Automatización de procesos",d:"Flujos, validaciones y tareas repetitivas que hoy dependen de que alguien se acuerde de hacerlas.",tags:["Flujos","Validaciones","Alertas","Reportes"]},
  {icono:"i-cerebro",t:"IA aplicada y privada",d:"Modelos corriendo en infraestructura propia del cliente. Consultas sobre documentación interna sin enviar datos a terceros.",tags:["IA local","Búsqueda interna","Sin fuga de datos"]},
  {icono:"i-chat",t:"Bots de atención",d:"Atención automatizada sobre WhatsApp Business que responde, califica y deriva a una persona con el contexto ya recogido.",tags:["API oficial","Derivación","CRM"]},
  {icono:"i-nube",t:"Servidor gestionado",d:"Infraestructura en nube o privada administrada por UpComp: aprovisionamiento, monitoreo, respaldo y actualizaciones.",tags:["Nube o privado","Monitoreo","Respaldo","IP fija"]}
];

/* Flujo de trabajo del Portafolio 2026, pág. 4 */
const FLUJO=[
  ["Levantar","Entendemos el proceso real, los usuarios y las restricciones."],
  ["Diseñar","Arquitectura y experiencia de usuario antes de escribir código."],
  ["Construir","Desarrollo iterativo con entregas revisables."],
  ["Integrar","Conexión con sistemas internos, servicios externos y datos."],
  ["Evolucionar","Soporte evolutivo: la solución crece con la operación."]
];

const PROBLEMAS=[
  {q:"“Cotizamos a mano y cuando el cliente responde, el precio ya cambió”",
   d:"El catálogo, el stock y la lista de precios viven en el sistema del mayorista, pero se copian a mano a una planilla. Entre que se arma la cotización y el cliente acepta, la disponibilidad y el valor ya se movieron.",
   sol:"Integración con la API del mayorista y sincronización automática de catálogo, stock y precios"},
  {q:"“Llega un equipo nuevo y nadie sabe qué configuración pedir”",
   d:"Cada área pide lo que cree necesitar. Se compran máquinas sobradas para lo que hacen, o quedan cortas a los seis meses. No hay un criterio técnico común.",
   sol:"Estándares de puesto por perfil y un configurador que traduce carga de trabajo a especificación"},
  {q:"“Los tickets se pierden entre correos y grupos de WhatsApp”",
   d:"Nadie sabe cuántas solicitudes hay abiertas, cuánto demoran ni cuáles se repiten todos los meses. Cuando llega la renovación de contrato no hay con qué justificar nada.",
   sol:"Mesa de ayuda con trazabilidad, SLA medible y reportería mensual"},
  {q:"“Nos escriben por WhatsApp fuera de horario y se pierden ventas”",
   d:"Las consultas llegan a cualquier hora y a un número personal. Si la persona no está, la consulta se enfría. No queda registro de cuántas se perdieron.",
   sol:"Bot sobre WhatsApp Business que responde, califica y deriva con el contexto recogido"},
  {q:"“Tenemos información sensible y no la podemos subir a la nube”",
   d:"Contratos, informes técnicos y documentación interna que por política o regulación no puede salir de la empresa. Pero buscar dentro de esos documentos toma horas.",
   sol:"IA local corriendo sobre servidor o workstation propia, sin envío de datos a terceros"},
  {q:"“Cada área lleva su propio Excel y ninguno cuadra”",
   d:"La misma información existe en tres versiones distintas. Consolidar para una reunión toma dos días y siempre aparece una diferencia que nadie sabe explicar.",
   sol:"Sistema interno con datos únicos, paneles de control y trazabilidad de cambios"}
];

/* Guía de selección: texto literal de upcomp.cl */
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

const QUE_INCLUIR=[
  "Tipo de equipo, servicio o solución requerida.",
  "Cantidad aproximada de equipos o usuarios.",
  "Software, aplicaciones o carga de trabajo.",
  "Plazo esperado de compra o implementación.",
  "Marca, modelo o presupuesto referencial, si corresponde."
];

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

/* Tarifas y tramos DE EJEMPLO — reemplazar por la política comercial real */
const PLANES=[
  {id:"estandar",nombre:"Estándar",d:"Respaldo y gestión ordenada de incidentes.",ref:34000,
   incluye:["Preparación y despliegue del equipo","Mesa de ayuda en horario hábil","Mantención preventiva programada","Gestión de garantía de fabricante"]},
  {id:"premium",nombre:"Premium",d:"Mayor prioridad, continuidad y niveles de atención.",ref:52000,
   incluye:["Todo lo del plan Estándar","Prioridad de atención y tiempos acotados","Equipo de reemplazo ante falla","Reportabilidad y revisión periódica"]}
];
const TRAMOS=[{desde:1,desc:0},{desde:11,desc:.05},{desde:51,desc:.10},{desde:201,desc:.15}];
const SERVICIOS_EXTRA=["Instalación y puesta en marcha","Garantía premium","Puesto de trabajo gestionado","Migración de datos"];
const PLAZOS_COT=["Este mes","Dentro del trimestre","Este año","Estoy explorando"];

const GUION={
  inicio:{r:["Hola. Soy el asistente de UpComp.","¿Qué necesitas resolver hoy?"],
    o:[{l:"Equipamiento para mi empresa",ir:"equipamiento"},{l:"Soporte y continuidad TI",ir:"soporte"},{l:"Un sistema a medida",ir:"software"},{l:"Servidor o IA privada",ir:"infra"}]},
  equipamiento:{r:["Trabajamos cinco frentes: workstations, notebooks corporativos, servidores, salas de reunión y redes.","Te dejo dos de los más pedidos del catálogo:"],fichas:[0,3],
    o:[{l:"Necesito una workstation potente",ir:"workstation"},{l:"Renovar equipos de oficina",ir:"puesto"},{l:"Hablar con un ejecutivo",ir:"derivar"}]},
  workstation:{r:["Para eso tenemos un configurador en esta misma página: tres preguntas y te sugiere la plataforma según la carga real."],
    o:[{l:"Ir al configurador",ir:"#herramientas"},{l:"Ver mi lista de cotización",ir:"@carro"},{l:"Prefiero que me contacten",ir:"derivar"}]},
  puesto:{r:["El Puesto de Trabajo Gestionado junta equipo, preparación, soporte, garantía y renovación en un solo servicio mensual.","Hay una calculadora acá para estimar según cantidad de usuarios."],
    o:[{l:"Ver la calculadora",ir:"#calculadora"},{l:"Quiero una propuesta",ir:"derivar"}]},
  soporte:{r:["Ofrecemos mesa de ayuda, mantención preventiva y correctiva, gestión de garantías y continuidad operacional.","Puede ser por incidente o como servicio permanente."],
    o:[{l:"Servicio permanente",ir:"derivar"},{l:"Tengo un problema puntual",ir:"derivar"}]},
  software:{r:["Desarrollamos cuando la plataforma estándar no resuelve el proceso real: aplicaciones y portales, automatización, integraciones con APIs y analítica interna.","¿De qué se trata lo tuyo?"],
    o:[{l:"Automatizar un proceso manual",ir:"derivar"},{l:"Integrar dos sistemas",ir:"derivar"},{l:"Un portal o backoffice",ir:"derivar"}]},
  infra:{r:["Tres opciones: servidor gestionado en nube o privado, bots de WhatsApp para atención, e inteligencia artificial local donde los datos no salen de la empresa.","La IA privada corre sobre las mismas workstations que seleccionamos y respaldamos."],
    o:[{l:"IA privada me interesa",ir:"derivar"},{l:"Quiero un bot como este",ir:"bot"},{l:"Servidor gestionado",ir:"derivar"}]},
  bot:{r:["Este asistente es justamente una demo del producto: atención automatizada que responde, califica y deriva a una persona con el contexto ya recogido.","En producción va sobre la API oficial de WhatsApp Business."],
    o:[{l:"Quiero uno para mi empresa",ir:"derivar"}]},
  derivar:{r:["Perfecto. Te dejo con el equipo comercial y les paso lo que conversamos."],o:[],cierre:true}
};

/* ==========================================================================
   Utilidades
   ========================================================================== */
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const wa=t=>`https://wa.me/${TELEFONO}?text=${encodeURIComponent(t)}`;
const clp=new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",maximumFractionDigits:0});
const suave=matchMedia("(prefers-reduced-motion: reduce)").matches;
const ico=id=>`<svg aria-hidden="true"><use href="#${id}"/></svg>`;

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
   FONDO DE SEÑAL

   Sustituye a la cuadrícula. El motivo son trazos que ascienden de izquierda
   a derecha, como una curva de rendimiento: viene del propio logo de UpComp
   (una flecha subiendo sobre un gráfico) y de su discurso de continuidad
   operacional. Se dibuja en canvas, se detiene fuera de pantalla y respeta
   la preferencia de movimiento reducido.
   ========================================================================== */
function fondoSenal(canvas){
  const ctx=canvas.getContext("2d",{alpha:true});
  if(!ctx) return;
  let w=0,h=0,t=0,raf=null,visible=true;

  const TRAZOS=Array.from({length:7},(_,i)=>({
    base:.30+i*.085,      /* altura de partida, en fracción del alto */
    subida:.20+i*.02,     /* cuánto sube de izquierda a derecha */
    amp:10+i*6,           /* amplitud de la onda */
    vel:.00016+i*.00005,  /* velocidad propia */
    fase:i*1.9,
    grosor:i%3===0?1.6:1,
    alfa:.055+i*.011
  }));

  function medir(){
    const dpr=Math.min(devicePixelRatio||1,2);
    w=canvas.clientWidth; h=canvas.clientHeight;
    if(!w||!h) return false;
    canvas.width=Math.round(w*dpr);
    canvas.height=Math.round(h*dpr);
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
      ctx.strokeStyle=g;
      ctx.lineWidth=s.grosor;
      ctx.stroke();
    }
  }

  function cuadro(){
    t+=16;
    dibujar();
    raf=requestAnimationFrame(cuadro);
  }

  function arrancar(){
    if(!medir()) return;
    dibujar();
    if(suave) return;              /* movimiento reducido: dibujo estático */
    if(raf) cancelAnimationFrame(raf);
    raf=requestAnimationFrame(cuadro);
  }
  function detener(){ if(raf){cancelAnimationFrame(raf);raf=null;} }

  arrancar();
  addEventListener("resize",()=>{ medir(); dibujar(); },{passive:true});

  /* No gastar cuadros cuando la sección no se ve */
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
   Header, menú y progreso de lectura
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

/* Revelado, cifras y rieles animados en un solo pase por scroll.
   Se usa scroll y no IntersectionObserver a propósito: si el observer no
   entrega, el contenido quedaría invisible y las cifras congeladas. */
const nodosReveal=$$("[data-reveal]");
nodosReveal.forEach((el,i)=>el.style.transitionDelay=(i%4)*70+"ms");
const enVista=(el,m=.93)=>{const r=el.getBoundingClientRect();return r.top<innerHeight*m&&r.bottom>0;};
let pendiente=false;
function revisarVisibles(){
  pendiente=false;
  nodosReveal.forEach(el=>{if(enVista(el))el.classList.add("is-shown");});
  $$(".cifra__n").forEach(el=>{if(enVista(el,.85))animarCifra(el);});
  $$(".flujo__paso,.ciclo-op__p").forEach((el,i)=>{if(enVista(el,.88))setTimeout(()=>el.classList.add("is-on"),(i%5)*110);});
  header.classList.toggle("is-scrolled",scrollY>12);
  const alto=document.documentElement.scrollHeight-innerHeight;
  $("#progresoScroll").style.width=(alto>0?(scrollY/alto)*100:0)+"%";
  marcarNav();
}
const alScroll=()=>{if(!pendiente){pendiente=true;requestAnimationFrame(revisarVisibles);}};
addEventListener("scroll",alScroll,{passive:true});
addEventListener("resize",alScroll);

function animarCifra(el){
  if(el.dataset.listo) return;
  el.dataset.listo="1";
  if(suave) return;
  const hasta=+el.dataset.hasta,t0=performance.now(),dur=900;
  const paso=t=>{const k=Math.min(1,(t-t0)/dur);el.textContent=Math.round(hasta*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(paso);};
  requestAnimationFrame(paso);
}

/* ==========================================================================
   MAZO DE TARJETAS ARRASTRABLE
   Pointer Events (mouse + dedo + lápiz) con medición de velocidad: la carta
   sigue al puntero y al soltar sale volando o vuelve con rebote.
   ========================================================================== */
const mazo=$("#mazo"), PROF=3;
let orden=EQUIPOS.map((_,i)=>i);

function pintarMazo(){
  mazo.innerHTML=orden.map((idx,pos)=>{
    const e=EQUIPOS[idx];
    return `<article class="carta" data-pos="${pos}" ${pos===0?'tabindex="0"':'aria-hidden="true"'}>
      <div class="carta__img"><img src="${e.img}" alt="${esc(e.t)}" loading="${pos<2?"eager":"lazy"}" draggable="false"></div>
      <div class="carta__cuerpo">
        <p class="carta__tag">${esc(e.tag)}</p>
        <h3 class="carta__t">${esc(e.t)}</h3>
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
  $("#mazoPuntos").innerHTML=EQUIPOS.map((_,i)=>`<span class="mazo__punto ${orden[0]===i?"is-on":""}"></span>`).join("");
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
    arrastrando=true;
    try{carta.setPointerCapture(e.pointerId);}catch{}
    carta.classList.add("is-drag");
    carta.style.transition="none";
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
    arrastrando=false;
    carta.classList.remove("is-drag");
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
$("#mazoSig").onclick=()=>expulsar(1);
$("#mazoAnt").onclick=()=>rotar(false);
pintarMazo();

/* ==========================================================================
   Ciclo de operación, beneficios, soluciones, marquesinas y cifras
   ========================================================================== */
$("#cicloOp").innerHTML=CICLO_OP.map(c=>
  `<div class="ciclo-op__p">${ico(c.icono)}<b>${esc(c.t)}</b><span>${esc(c.d)}</span></div>`).join("");
$("#beneficios").innerHTML=BENEFICIOS.map(b=>
  `<div class="ciclo-op__b">${ico(b.icono)}<div><b>${esc(b.t)}</b><span>${esc(b.d)}</span></div></div>`).join("");

$("#soluciones-grid").innerHTML=SOLUCIONES.map(s=>`
  <article class="solu__c">
    <span class="solu__i">${ico(s.icono)}</span>
    <h3>${esc(s.t)}</h3><p>${esc(s.d)}</p>
    <a class="solu__link" href="#equipos">${esc(s.cta)} ${ico("i-flecha")}</a>
  </article>`).join("");

$("#marquee").innerHTML=[...CLIENTES,...CLIENTES]
  .map((c,i)=>`<li${i>=CLIENTES.length?' aria-hidden="true"':''}>${esc(c.n)}</li>`).join("");

const tarjetaPartner=p=>`<li class="partner">
  <div class="partner__logo"><img src="${p.logo}" alt="${esc(p.n)}" loading="lazy"></div>
  <span class="partner__badge">Partner tecnológico</span>
  <p class="partner__d">${esc(p.d)}</p></li>`;
/* Se repite la lista para que la marquesina cierre sin salto */
$("#listaPartners").innerHTML=[...PARTNERS,...PARTNERS,...PARTNERS,...PARTNERS].map(tarjetaPartner).join("");

/* El número final se escribe de entrada: si la animación no corre, se ve la
   cifra correcta y nunca un 0. */
$("#cifras").innerHTML=CIFRAS.map(c=>
  `<div class="cifra"><p class="cifra__n tabular" data-hasta="${c.n}">${c.n}</p><p class="cifra__t">${esc(c.t)}</p></div>`).join("");

/* ==========================================================================
   Pilares expandibles
   ========================================================================== */
let pilarAbierto=-1;
$("#pilares").innerHTML=PILARES.map((p,i)=>`
  <button class="pilar" data-pilar="${i}" aria-expanded="false">
    <span class="pilar__fondo" style="background-image:url('${p.fondo}')"></span>
    <span class="pilar__mas" aria-hidden="true">+</span>
    <span class="pilar__cont">
      <span class="pilar__n">${p.n}${p.nuevo?'<span class="pilar__nuevo">Nuevo</span>':''}</span>
      <span class="pilar__t">${esc(p.nombre)}</span>
      <span class="pilar__cuerpo"><span style="display:block">
        <span class="pilar__intro" style="display:block">${esc(p.intro)}</span>
        <ul class="pilar__items">${p.items.map(([t,d])=>
          `<li>${ico("i-check")}<span><b>${esc(t)}</b> — ${esc(d)}</span></li>`).join("")}</ul>
      </span></span>
    </span></button>`).join("");
function abrirPilar(i){
  pilarAbierto=(pilarAbierto===i)?-1:i;
  $$(".pilar").forEach((el,j)=>{
    const on=j===pilarAbierto;
    el.classList.toggle("is-open",on);
    el.setAttribute("aria-expanded",String(on));
  });
}
$$(".pilar").forEach(el=>el.onclick=()=>abrirPilar(+el.dataset.pilar));
abrirPilar(2);   /* arranca en Desarrollo e integración, que es lo nuevo */

/* ==========================================================================
   Desarrollo, flujo y problemas
   ========================================================================== */
$("#devGrid").innerHTML=DESARROLLO.map(d=>`
  <article class="dev-card">
    <span class="dev-card__icono">${ico(d.icono)}</span>
    <h3>${esc(d.t)}</h3><p>${esc(d.d)}</p>
    <ul>${d.tags.map(t=>`<li>${esc(t)}</li>`).join("")}</ul></article>`).join("");

$("#flujoPasos").innerHTML=FLUJO.map(([t,d],i)=>`
  <div class="flujo__paso"><p class="flujo__n">0${i+1}</p><p class="flujo__t">${esc(t)}</p><p class="flujo__d">${esc(d)}</p></div>`).join("");

$("#problemas").innerHTML=PROBLEMAS.map((p,i)=>`
  <div class="problema" data-problema>
    <button class="problema__btn" aria-expanded="false">
      <span class="problema__n">0${i+1}</span>
      <span class="problema__q">${esc(p.q)}</span>
      <span class="problema__mas" aria-hidden="true">+</span>
    </button>
    <div class="problema__cuerpo"><div class="problema__inner">
      <p>${esc(p.d)}</p>
      <span class="problema__sol">${ico("i-check")}${esc(p.sol)}</span>
    </div></div></div>`).join("");
$$("[data-problema]").forEach(item=>{
  const btn=$(".problema__btn",item), cuerpo=$(".problema__cuerpo",item);
  btn.onclick=()=>{
    const abierto=item.classList.contains("is-open");
    $$("[data-problema]").forEach(o=>{
      if(o===item)return;
      o.classList.remove("is-open");
      $(".problema__cuerpo",o).style.height="0px";
      $(".problema__btn",o).setAttribute("aria-expanded","false");
    });
    item.classList.toggle("is-open",!abierto);
    btn.setAttribute("aria-expanded",String(!abierto));
    cuerpo.style.height=abierto?"0px":$(".problema__inner",item).offsetHeight+"px";
  };
});

/* ==========================================================================
   Guía de selección y validación técnica
   ========================================================================== */
$("#plataformas").innerHTML=PLATAFORMAS.map(p=>`
  <article class="plat ${p.destacada?"plat--destacada":""}">
    <div class="plat__cab"><span class="plat__i">${ico(p.icono)}</span><span class="plat__badge">${esc(p.etiqueta)}</span></div>
    <h3>${esc(p.nombre)}</h3>
    <p>${esc(p.resumen)}</p>
    <ul>${p.para.map(x=>`<li>${ico("i-check")}<span>${esc(x)}</span></li>`).join("")}</ul>
    <button class="btn btn--tinta btn--chico" data-plat="${p.iEquipo}">Cotizar plataforma ${ico("i-flecha")}</button>
  </article>`).join("");
$("#validaItems").innerHTML=VALIDACION.map(v=>`<li>${ico("i-check")}<span>${esc(v)}</span></li>`).join("");

/* ==========================================================================
   CATÁLOGO + LISTA DE COTIZACIÓN
   No hay precios: UpComp cotiza cada configuración según requerimiento y
   stock. Por eso el "carrito" es una lista de cotización, que es como
   funciona su venta real.
   ========================================================================== */
let cotizacion=[];
try{ const g=localStorage.getItem("upcomp_cot"); if(g) cotizacion=JSON.parse(g)||[]; }catch{}
const guardar=()=>{ try{ localStorage.setItem("upcomp_cot",JSON.stringify(cotizacion)); }catch{} };

$("#catalogo").innerHTML=EQUIPOS.map((e,i)=>`
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

const nTotal=()=>cotizacion.reduce((a,x)=>a+x.cant,0);

function mensajeCotizacion(){
  const l=["Hola UpComp, quiero cotizar los siguientes equipos:",""];
  cotizacion.forEach(x=>{
    const e=EQUIPOS[x.i];
    l.push(`• ${x.cant} × ${e.t}`);
    l.push(`  ${e.specs.join(" · ")}`);
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
   Capa modal: velo, panel lateral y modal de cotización
   ========================================================================== */
const velo=$("#velo"), panelCarro=$("#panelCarro"), modalCot=$("#modalCot");
function cerrarTodo(){
  velo.classList.remove("is-on");
  panelCarro.classList.remove("is-open"); panelCarro.setAttribute("aria-hidden","true");
  modalCot.classList.remove("is-open"); modalCot.setAttribute("aria-hidden","true");
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
$$("[data-cotizar]").forEach(b=>b.onclick=()=>abrirModal(+b.dataset.cotizar));
pintarCarro();

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

  $("#progreso").innerHTML=PREGUNTAS.map((p,i)=>{
    const hecha=!!respuestas[p.id], ahora=i===paso&&!listo;
    return `<div class="progreso__item ${hecha?"is-done":""} ${ahora?"is-now":""}">
      <span class="progreso__n">0${i+1}</span><span class="progreso__barra"></span></div>`;
  }).join("");

  if(!listo){
    const p=PREGUNTAS[paso];
    $("#preg").innerHTML=`
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
    $("#preg").innerHTML=`
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

  $("#barras").innerHTML=PLATAFORMAS.map(p=>{
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
pintarConfigurador();

/* ==========================================================================
   Calculadora
   ========================================================================== */
let planActivo="estandar";
const inputUsuarios=$("#usuarios");
$("#atajos").innerHTML=[10,25,50,100,200].map(n=>`<button class="atajo" data-n="${n}">${n}</button>`).join("");
$("#planes").innerHTML=PLANES.map(p=>`
  <button class="plan" data-plan="${p.id}">
    <b>${esc(p.nombre)}<svg aria-hidden="true" style="display:none"><use href="#i-check"/></svg></b>
    <span>${esc(p.d)}</span></button>`).join("");
function pintarCalculadora(){
  const n=+inputUsuarios.value;
  const plan=PLANES.find(p=>p.id===planActivo);
  const tramo=[...TRAMOS].reverse().find(t=>n>=t.desde);
  const unitario=Math.round(plan.ref*(1-tramo.desc));
  const mensual=unitario*n;
  $("#salidaUsuarios").textContent=n;
  $("#calcTotal").textContent=clp.format(mensual);
  $("#calcSub").textContent=`mensual · ${n} ${n===1?"usuario":"usuarios"} · plan ${plan.nombre}`;
  $("#calcDetalle").innerHTML=`
    <div><dt>Por usuario</dt><dd class="tabular">${clp.format(unitario)}</dd></div>
    <div><dt>Ajuste por volumen</dt><dd class="tabular">${tramo.desc===0?"—":"−"+Math.round(tramo.desc*100)+"%"}</dd></div>
    <div><dt>Proyección anual</dt><dd class="tabular">${clp.format(mensual*12)}</dd></div>`;
  $("#incluye").innerHTML=plan.incluye.map(i=>`<li>${ico("i-check")}${esc(i)}</li>`).join("");
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
pintarCalculadora();

/* ==========================================================================
   Clientes con logo real
   ========================================================================== */
let filtro="Todas";
const VERTICALES=["Todas",...new Set(CLIENTES.map(c=>c.v))];
function pintarClientes(){
  $("#chips").innerHTML=VERTICALES.map(v=>`<button class="chip ${v===filtro?"is-sel":""}" data-v="${esc(v)}">${esc(v)}</button>`).join("");
  const vis=filtro==="Todas"?CLIENTES:CLIENTES.filter(c=>c.v===filtro);
  $("#listaClientes").innerHTML=vis.map(c=>`
    <article class="cliente">
      <div class="cliente__tile ${c.oscuro?"cliente__tile--oscuro":""}">
        ${c.logo?`<img src="${c.logo}" alt="${esc(c.n)}" loading="lazy">`:`<b>${esc(c.n.split(" ")[0])}</b>`}
      </div>
      <h3>${esc(c.n)}</h3>
      <span>${esc(c.d)}</span>
    </article>`).join("");
  $$("#chips .chip").forEach(b=>b.onclick=()=>{filtro=b.dataset.v;pintarClientes();});
}
pintarClientes();

/* ==========================================================================
   Formulario calificador
   ========================================================================== */
$("#queIncluir").innerHTML=QUE_INCLUIR.map(x=>`<li>${esc(x)}</li>`).join("");

const NECESIDADES=[
  {id:"equipamiento",l:"Equipamiento"},{id:"servicios",l:"Soporte y servicios TI"},
  {id:"software",l:"Software a medida"},{id:"integracion",l:"Integraciones y APIs"},
  {id:"ia",l:"Bots o IA privada"},{id:"mixto",l:"Todavía no lo tengo claro"}
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
  $("#formPasos").innerHTML=NOMBRES_PASOS.map((p,i)=>{
    const hecho=i<fPaso||enviado, ahora=i===fPaso&&!enviado;
    return `<div class="form__paso ${ahora?"is-now":""} ${hecho?"is-done":""}">
      <i>${hecho?ico("i-check"):i+1}</i><span>${p}</span></div>`;
  }).join("");

  if(enviado){
    $("#formCuerpo").innerHTML=`
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
  $("#formCuerpo").innerHTML=html;

  $$("#formCuerpo [data-nec]").forEach(b=>b.onclick=()=>{F.necesidad=b.dataset.nec;pintarFormulario();});
  $$("#formCuerpo [data-campo]").forEach(b=>b.onclick=()=>{F[b.dataset.campo]=b.dataset.val;pintarFormulario();});
  const liga=(id,campo)=>{const el=$(id);if(el)el.oninput=e=>{F[campo]=e.target.value;$("#fSiguiente").disabled=!puedeAvanzar();};};
  liga("#fNombre","nombre");liga("#fEmpresa","empresa");liga("#fEmail","email");liga("#fTel","telefono");liga("#fMsg","mensaje");
  $("#fVolver").onclick=()=>{fPaso=Math.max(0,fPaso-1);pintarFormulario();};
  $("#fSiguiente").onclick=()=>{if(fPaso===2){enviado=true;}else{fPaso++;}pintarFormulario();};
}
pintarFormulario();

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
