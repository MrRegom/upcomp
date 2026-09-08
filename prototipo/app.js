/* ==========================================================================
   UpComp — sitio corporativo B2B

   REGLA DEL PROYECTO: todo el contenido sale de upcomp.cl. Cada bloque de
   datos lleva anotada su página de origen. Lo único que no está en su sitio
   es "Desarrollo e integración", la capacidad que aporta la alianza.

   Un solo script para las dos páginas: `data-pagina` en el <body> distingue
   la portada del catálogo, y cada render se salta si su contenedor no existe.
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

const NOTA_DISPONIBILIDAD="La disponibilidad de componentes, marcas, modelos específicos, configuración final, sistema operativo, plazo de entrega y precio pueden variar según el stock de los proveedores y la validación técnica y comercial de la solución.";

/* ---------- Fichas completas (upcomp.cl, ficha de producto) ---------- */
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

/* ---------- Partners oficiales (upcomp.cl) ---------- */
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

/* ==========================================================================
   CONTENIDO DE LA PORTADA
   ========================================================================== */

/* Cuatro frentes. Consolidan las áreas de negocio de
   upcomp.cl/servicios-empresas en los cuatro bloques que pidió la auditoría:
   el detalle vive en las páginas internas, no en la portada. */
const SOLUCIONES=[
  {n:"01",t:"Equipamiento TI",d:"Notebooks, workstations, servidores y equipos corporativos.",href:"tienda.html",cta:"Ver equipamiento"},
  {n:"02",t:"Servicios TI",d:"Soporte, mantención, outsourcing y continuidad operacional.",href:"#contacto",cta:"Conocer soluciones"},
  {n:"03",t:"Infraestructura",d:"Networking, Wi-Fi, videoconferencia y proyectos TI.",href:"#contacto",cta:"Conocer soluciones"},
  {n:"04",t:"Desarrollo e integración",d:"Software, automatización e integración de procesos.",href:"#contacto",cta:"Conocer soluciones"}
];

/* Cómo trabajamos (upcomp.cl/servicios-empresas). Los nombres de los pasos
   son los que pidió la auditoría; las descripciones son textuales de ellos.
   El cuarto paso se llama "Acompañamos" en su sitio. */
const CICLO=[
  ["Evaluamos","Revisamos usuarios, equipos, aplicaciones, infraestructura y prioridades."],
  ["Diseñamos","Definimos alcance, alternativas, servicios asociados y próximos pasos."],
  ["Implementamos","Coordinamos provisión, configuración, entrega o ejecución del servicio."],
  ["Soportamos","Apoyamos soporte, mantención, continuidad y evolución tecnológica."]
];

/* Los tres casos que indicó la auditoría. Geocom va tipográfico: su logo
   devuelve "Image Not Found!" en el propio upcomp.cl. */
const CASOS=[
  {n:"Marimaca Copper",logo:"assets/clientes/marimaca.svg",d:"Infraestructura · Networking · Videoconferencia"},
  {n:"Geocom",logo:null,d:"Workstations · Alto desempeño · Equipamiento especializado"},
  {n:"GS3",logo:"assets/clientes/gs3.png",d:"Equipamiento corporativo · Servicios TI"}
];

/* ==========================================================================
   UTILIDADES
   ========================================================================== */

const PAGINA=document.body.dataset.pagina||"home";
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ico=id=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#${id}"/></svg>`;

/* Si el contenedor no existe en esta página, el render simplemente no ocurre. */
const pinta=(sel,html)=>{ const el=$(sel); if(el) el.innerHTML=html; };

let tToast;
function avisar(txt){
  const t=$("#toast"); if(!t) return;
  t.textContent=txt;
  t.classList.add("is-ver");
  clearTimeout(tToast);
  tToast=setTimeout(()=>t.classList.remove("is-ver"),3400);
}

const waLink=txt=>`https://wa.me/${TELEFONO}?text=${encodeURIComponent(txt)}`;

/* ==========================================================================
   ENCABEZADO
   ========================================================================== */

const barra=$("#header"), nav=$("#nav"), burger=$("#burger");

function cerrarMenu(){
  if(!nav||!burger) return;
  nav.classList.remove("is-ver");
  burger.setAttribute("aria-expanded","false");
  burger.innerHTML=ico("i-menu");
  document.body.classList.remove("menu-abierto");
}

if(burger&&nav){
  burger.addEventListener("click",()=>{
    const abierto=nav.classList.toggle("is-ver");
    burger.setAttribute("aria-expanded",String(abierto));
    burger.innerHTML=ico(abierto?"i-cerrar":"i-menu");
    document.body.classList.toggle("menu-abierto",abierto);
  });
  nav.addEventListener("click",e=>{ if(e.target.closest("a")) cerrarMenu(); });
  addEventListener("keydown",e=>{ if(e.key==="Escape") cerrarMenu(); });
}

/* ==========================================================================
   SCROLL: botón de subir y sección activa en el menú
   ========================================================================== */

const fab=$("#fabArriba");
const enlacesNav=nav?$$('a[href^="#"]',nav):[];

if(fab) fab.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

let pendiente=false;
function alScroll(){
  pendiente=false;
  if(fab) fab.hidden=scrollY<600;
  /* El vidrio aparece solo cuando la barra flota sobre contenido; arriba del
     todo, sobre el negro del héroe, no hay nada que separar. */
  if(barra) barra.classList.toggle("is-material",scrollY>8);

  if(!enlacesNav.length) return;
  const limite=scrollY+120;
  let activa="";
  for(const a of enlacesNav){
    const sec=document.getElementById(a.getAttribute("href").slice(1));
    if(sec&&sec.offsetTop<=limite) activa=a.getAttribute("href");
  }
  enlacesNav.forEach(a=>a.classList.toggle("is-act",a.getAttribute("href")===activa));
}
addEventListener("scroll",()=>{ if(!pendiente){ pendiente=true; requestAnimationFrame(alScroll); } },{passive:true});
alScroll();

const anio=$("#anio"); if(anio) anio.textContent=new Date().getFullYear();

/* ==========================================================================
   RENDER DE LA PORTADA
   ========================================================================== */

/* Muro de logos: silueta uniforme por CSS, así conviven logos de distinto
   color y formato — incluidos los blancos, invisibles sobre base clara. */
const tileLogo=c=>c.logo
  ? `<img src="${c.logo}" alt="${esc(c.n)}" loading="lazy">`
  : `<span class="muro__txt">${esc(c.n)}</span>`;

pinta("#muroClientes",CLIENTES.map(c=>`<li title="${esc(c.n)}">${tileLogo(c)}</li>`).join(""));

pinta("#muroPartners",PARTNERS.map(p=>
  `<li title="${esc(p.n)}"><img src="${p.logo}" alt="${esc(p.n)}" loading="lazy"></li>`).join(""));

pinta("#rejillaSoluciones",SOLUCIONES.map(s=>`
  <a class="fila" href="${s.href}" data-rev>
    <span class="fila__n">${s.n}</span>
    <h3>${esc(s.t)}</h3>
    <p>${esc(s.d)}</p>
    <span class="fila__ir">${esc(s.cta)} ${ico("i-flecha")}</span>
  </a>`).join(""));

pinta("#pasosCiclo",CICLO.map(([t,d],i)=>`
  <li data-rev>
    <span class="ciclo__n">0${i+1}</span>
    <h3>${esc(t)}</h3>
    <p>${esc(d)}</p>
  </li>`).join(""));

pinta("#rejillaCasos",CASOS.map(c=>`
  <article class="caso" data-rev>
    <div class="caso__logo">${c.logo
      ? `<img src="${c.logo}" alt="${esc(c.n)}" loading="lazy">`
      : `<span>${esc(c.n)}</span>`}</div>
    <div>
      <h3>${esc(c.n)}</h3>
      <p>${esc(c.d)}</p>
    </div>
  </article>`).join(""));

/* ---------- Formulario de contacto ----------
   Cuatro campos y listo. La solicitud sale por WhatsApp con el texto ya
   redactado; no hay CRM detrás todavía. */
const form=$("#form");
if(form) form.addEventListener("submit",e=>{
  e.preventDefault();
  const d=Object.fromEntries(new FormData(form));
  const err=$("#formErr");
  const falta=["nombre","empresa","contacto","necesita"].some(k=>!String(d[k]||"").trim());

  if(falta){
    if(err){ err.hidden=false; err.textContent="Completa los cuatro campos para enviar la solicitud."; }
    return;
  }
  if(err) err.hidden=true;

  const texto=`Hola UpComp.

Soy ${d.nombre}, de ${d.empresa}.
Necesito: ${d.necesita}

Pueden contactarme en: ${d.contacto}`;

  open(waLink(texto),"_blank","noopener");
  avisar("Abrimos WhatsApp con tu solicitud lista para enviar.");
});

/* ==========================================================================
   MOVIMIENTO
   El estado oculto lo pone JavaScript, nunca el CSS: si el script falla o el
   sistema pide menos movimiento, la página queda visible desde el principio.
   Se usa un chequeo por scroll y no IntersectionObserver porque el observer
   no dispara en algunos contenedores embebidos, y ahí el contenido quedaría
   invisible para siempre.
   ========================================================================== */

/* ?movimiento=1 fuerza el movimiento aunque el sistema pida menos. Existe para
   demostrar el sitio desde un equipo con las animaciones apagadas; por defecto
   se respeta la preferencia. */
const forzarMovimiento = new URLSearchParams(location.search).has("movimiento");
const quietud = !forzarMovimiento && matchMedia("(prefers-reduced-motion: reduce)").matches;
const revelables = quietud ? [] : $$("[data-rev]");

revelables.forEach(el=>{
  el.classList.add("rev");
  const hermanos = [...el.parentElement.children].filter(x=>x.hasAttribute("data-rev"));
  const i = hermanos.indexOf(el);
  if(i > 0) el.style.transitionDelay = (i * 70) + "ms";
});

function revelar(){
  for(const el of revelables){
    if(el.classList.contains("is-ver")) continue;
    const r = el.getBoundingClientRect();
    if(r.top < innerHeight * .88 && r.bottom > 0) el.classList.add("is-ver");
  }
}

/* ---------- Escena de apertura ----------
   Con movimiento permitido y pantalla ancha, el héroe mide casi dos pantallas
   y su interior queda fijado: el producto se asienta mientras el texto cambia
   por tiempos, como en una página de producto de Apple. Sin movimiento, o en
   pantallas angostas, el héroe es una pantalla normal con un leve paralaje. */
const hero = $(".hero"), heroObj = $("#heroObj"), beats = $$(".beat");
const secuencia = !!hero && !quietud && beats.length > 3 && matchMedia("(min-width:981px)").matches;
if(secuencia) hero.classList.add("hero--secuencia");

const rampa = (p,a,b)=>Math.max(0,Math.min(1,(p-a)/(b-a)));
const suave = t=>t*t*(3-2*t);
/* Para cada tiempo: [entra desde, entra hasta, sale desde, sale hasta], como
   fracción del recorrido. El último no sale: se queda hasta soltar el héroe. */
const VENTANAS = [[.20,.30,.42,.50],[.48,.58,.70,.78],[.76,.86,1.2,1.3]];

function escenaHeroe(){
  if(!heroObj || quietud) return;
  if(!secuencia){
    const y = Math.min(scrollY, innerHeight);
    heroObj.style.transform = `translate3d(0,${y * .10}px,0) scale(${1 - y / innerHeight * .06})`;
    return;
  }
  const p = Math.max(0, Math.min(1, scrollY / Math.max(1, hero.offsetHeight - innerHeight)));
  heroObj.style.transform = `translate3d(0,${-p * 24}px,0) scale(${1 - p * .08})`;

  const s0 = suave(rampa(p,.04,.24));           /* el primer tiempo se retira */
  beats[0].style.opacity = String(1 - s0);
  beats[0].style.transform = `translate3d(0,${-s0 * 32}px,0)`;
  beats[0].style.pointerEvents = s0 > .5 ? "none" : "";

  VENTANAS.forEach(([a,b,c,d],i)=>{
    const el = beats[i+1]; if(!el) return;
    const entra = suave(rampa(p,a,b)), sale = suave(rampa(p,c,d));
    el.style.opacity = String(entra * (1 - sale));
    /* entra subiendo y sale subiendo: la trayectoria anticipa el destino */
    el.style.transform = `translate3d(0,${(1 - entra) * 28 - sale * 28}px,0)`;
  });
}

let pendienteMov = false;
function alScrollMov(){
  pendienteMov = false;
  revelar();
  escenaHeroe();
}
addEventListener("scroll",()=>{ if(!pendienteMov){ pendienteMov = true; requestAnimationFrame(alScrollMov); } },{passive:true});
addEventListener("resize",alScrollMov,{passive:true});
alScrollMov();

/* ==========================================================================
   CATÁLOGO — solo en tienda.html
   ========================================================================== */

/* La lista de cotización se guarda en el navegador: sobrevive al cambio de
   página y al cierre del navegador. No hay precios: UpComp cotiza cada
   configuración según requerimiento, stock y validación técnica. */
let cotizacion=[];
try{ cotizacion=JSON.parse(localStorage.getItem("upcomp_cot")||"[]"); }catch{}
const guardar=()=>{ try{ localStorage.setItem("upcomp_cot",JSON.stringify(cotizacion)); }catch{} };
const totalItems=()=>cotizacion.reduce((a,x)=>a+x.cant,0);

function pintarCatalogo(){
  pinta("#catalogo",EQUIPOS.map((e,i)=>`
    <article class="eq">
      <div class="eq__foto"><img src="${e.img}" alt="${esc(e.t)}" loading="lazy"></div>
      <div class="eq__cuerpo">
        <span class="eq__cat">${esc(e.tag)}</span>
        <h3>${esc(e.t)}</h3>
        <p>${esc(e.specs.join(" · "))}</p>
        <div class="eq__pie">
          <button class="btn btn--accion" data-agregar="${i}">Cotizar</button>
          <button class="eq__mas" data-ficha="${i}" aria-label="Ver ficha de ${esc(e.t)}">${ico("i-flecha")}</button>
        </div>
      </div>
    </article>`).join(""));
}

function pintarCarro(){
  const badge=$("#badge");
  if(badge){ badge.textContent=totalItems(); badge.hidden=!cotizacion.length; }

  pinta("#carroCuerpo",cotizacion.length?cotizacion.map(x=>{
    const e=EQUIPOS[x.i];
    return `<div class="item">
      <img src="${e.img}" alt="" loading="lazy">
      <h3>${esc(e.t)}</h3>
      <div class="item__cant">
        <button data-menos="${x.i}" aria-label="Quitar una unidad">−</button>
        <span>${x.cant}</span>
        <button data-mas="${x.i}" aria-label="Agregar una unidad">+</button>
      </div>
    </div>`;
  }).join(""):`<p class="vacio">Tu lista de cotización está vacía.</p>`);

  const pie=$("#carroPie");
  if(pie) pie.hidden=!cotizacion.length;
}

function agregar(i,cant=1){
  const hay=cotizacion.find(x=>x.i===i);
  if(hay) hay.cant+=cant; else cotizacion.push({i,cant});
  guardar(); pintarCarro();
  avisar(`${EQUIPOS[i].t} agregado a tu cotización.`);
}
function cambiar(i,delta){
  const hay=cotizacion.find(x=>x.i===i); if(!hay) return;
  hay.cant+=delta;
  if(hay.cant<1) cotizacion=cotizacion.filter(x=>x.i!==i);
  guardar(); pintarCarro();
}

/* ==========================================================================
   HOJAS — paneles con resorte, arrastrables e interrumpibles

   Modelo de Apple (Designing Fluid Interfaces): la animación parte siempre
   del valor que está en pantalla, hereda la velocidad del dedo al soltar,
   proyecta la inercia para decidir dónde termina y se puede agarrar a mitad
   de camino sin esperar a que acabe. Sin librerías: un integrador de resorte
   con los dos parámetros de Apple, amortiguación y respuesta.

   El valor del resorte es la fracción del panel fuera de pantalla:
   0 = abierto, 1 = cerrado. La velocidad se mide en fracciones por segundo.
   ========================================================================== */

const velo=$("#velo");

/* amort 1 = sin rebote (críticamente amortiguado); resp = segundos hasta la
   meta, aproximados — un resorte no tiene duración fija. */
function crearResorte(valor){
  return {valor,vel:0,meta:valor,k:0,c:0,raf:null,alTick:null,alFin:null};
}
function moverResorte(r,meta,{amort=1,resp=.35,vel}={}){
  const w0=2*Math.PI/resp;
  r.k=w0*w0; r.c=2*amort*w0; r.meta=meta;
  if(vel!==undefined) r.vel=vel;
  if(r.raf) return;                       /* ya integrando: solo cambió la meta */
  let t0=performance.now();
  const paso=t=>{
    const dt=Math.min((t-t0)/1000,.064); t0=t;
    const n=Math.ceil(dt/.008), h=dt/n;   /* sub-pasos: estable aunque caiga a 30 fps */
    for(let i=0;i<n;i++){
      r.vel+=(-r.k*(r.valor-r.meta)-r.c*r.vel)*h;
      r.valor+=r.vel*h;
    }
    const listo=Math.abs(r.valor-r.meta)<.002&&Math.abs(r.vel)<.01;
    if(listo){ r.valor=r.meta; r.vel=0; }
    if(r.alTick) r.alTick(r.valor);
    if(listo){ r.raf=null; if(r.alFin) r.alFin(); return; }
    r.raf=requestAnimationFrame(paso);
  };
  r.raf=requestAnimationFrame(paso);
}
function pararResorte(r){ if(r.raf){ cancelAnimationFrame(r.raf); r.raf=null; } }

/* Proyección de inercia (la función exacta de Apple): dónde se detendría el
   gesto si nada lo frenara. Entra px/s, sale px. */
const proyectar=(v,d=.998)=>(v/1000)*d/(1-d);
/* Goma en el borde: cuanto más se pasa, menos sigue al dedo. */
const goma=(exceso,dim,c=.55)=>(exceso*dim*c)/(dim+c*Math.abs(exceso));

const hojas=new Map();

function hoja(panel){
  if(hojas.has(panel)) return hojas.get(panel);

  /* En pantallas angostas la hoja sube desde abajo; en escritorio entra por la derecha. */
  const ejeY=()=>matchMedia("(max-width:860px)").matches;
  /* Nunca 0: con el panel sin trazar todavía, dividir por el tamaño daría NaN. */
  const tam=()=>Math.max(1,ejeY()?panel.offsetHeight:panel.offsetWidth);
  const r=crearResorte(1);

  const pintar=v=>{
    const px=v*tam();
    panel.style.transform=ejeY()?`translate3d(0,${px}px,0)`:`translate3d(${px}px,0,0)`;
    if(velo) velo.style.opacity=String(Math.max(0,Math.min(1,1-v)));
  };
  r.alTick=pintar;

  const h={
    panel,r,abierta:false,
    abrir(){
      h.abierta=true;
      panel.classList.add("is-abierta");
      if(velo) velo.classList.add("is-ver");
      document.body.classList.add("menu-abierto");
      r.alFin=null;
      if(quietud){ r.valor=0; pintar(0); return; }
      /* Se abre por un botón, sin inercia previa: sin rebote. */
      moverResorte(r,0,{amort:1,resp:.38});
    },
    cerrar(vel){
      h.abierta=false;
      if(velo) velo.classList.remove("is-ver");
      document.body.classList.remove("menu-abierto");
      const fin=()=>panel.classList.remove("is-abierta");
      if(quietud){ r.valor=1; pintar(1); fin(); return; }
      r.alFin=fin;
      /* Si viene de un gesto trae velocidad, y ahí sí cabe un poco de rebote. */
      moverResorte(r,1,{amort:vel!==undefined?.8:1,resp:.32,vel});
    }
  };

  /* ---- Arrastre desde la cabecera ---- */
  const asa=panel.querySelector(".panel__cab");
  let ptr=null, base=0, hist=[];
  const pos=e=>ejeY()?e.clientY:e.clientX;

  asa.addEventListener("pointerdown",e=>{
    if(e.target.closest("button")) return;
    ptr=e.pointerId;
    pararResorte(r);                      /* se agarra donde está, no donde iba */
    base=r.valor*tam()-pos(e);            /* respeta el punto exacto del agarre */
    hist=[[performance.now(),pos(e)]];
    /* La captura sigue el arrastre aunque el puntero salga de la cabecera.
       Puede fallar si el puntero ya se soltó; el agarre igual queda armado. */
    try{ asa.setPointerCapture(ptr); }catch{}
  });
  asa.addEventListener("pointermove",e=>{
    if(e.pointerId!==ptr) return;
    const p=pos(e), d=tam();
    hist.push([performance.now(),p]); if(hist.length>6) hist.shift();
    let px=base+p;
    if(px<0) px=goma(px,d);               /* más allá de abierto: resistencia, no tope */
    r.valor=px/d; pintar(r.valor);
  });
  const soltar=e=>{
    if(e.pointerId!==ptr) return; ptr=null;
    let vPx=0;
    if(hist.length>1){
      const [t1,p1]=hist[0], [t2,p2]=hist[hist.length-1];
      const dt=(t2-t1)/1000; if(dt>0) vPx=(p2-p1)/dt;
    }
    const d=tam(), vFrac=vPx/d;
    /* Con velocidad clara decide el signo del gesto; si no, la posición proyectada. */
    const cierra=Math.abs(vPx)>350 ? vPx>0 : (r.valor+proyectar(vPx)/d)>.5;
    if(cierra) h.cerrar(vFrac);
    else { r.alFin=null; moverResorte(r,0,{amort:.8,resp:.32,vel:vFrac}); }
  };
  asa.addEventListener("pointerup",soltar);
  asa.addEventListener("pointercancel",soltar);
  addEventListener("resize",()=>{ if(h.abierta||r.raf) pintar(r.valor); });

  hojas.set(panel,h);
  return h;
}

function abrirPanel(sel){ const p=$(sel); if(p) hoja(p).abrir(); }
function cerrarPaneles(){ hojas.forEach(h=>{ if(h.abierta) h.cerrar(); }); }
if(velo) velo.addEventListener("click",cerrarPaneles);
addEventListener("keydown",e=>{ if(e.key==="Escape") cerrarPaneles(); });

/* ---------- Ficha de producto ---------- */
function pintarFicha(i){
  const e=EQUIPOS[i], f=FICHAS[i];
  const filas=f?f.specs:e.specs.map(s=>["Característica",s]);

  pinta("#fichaCuerpo",`
    <div class="ficha">
      <div class="ficha__foto"><img src="${e.img}" alt="${esc(e.t)}"></div>
      <div>
        ${f?`<p class="ficha__sku">SKU ${esc(f.sku)}</p>`:""}
        <h2>${esc(e.t)}</h2>
        <p class="ficha__desc">${esc(f?f.desc:e.specs.join(" · "))}</p>
        ${f?`<ul class="ficha__lista">${f.ideal.slice(0,6).map(x=>
          `<li>${ico("i-check")}<span>${esc(x)}</span></li>`).join("")}</ul>`:""}
        <button class="btn btn--accion btn--full" data-agregar="${i}" style="margin-top:32px">Agregar a la cotización</button>
      </div>
    </div>
    <dl class="ficha__specs">
      ${filas.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
    </dl>
    ${f?"":`<p class="nota-cat">Ficha técnica completa disponible al cotizar.</p>`}
    <p class="nota-cat">${esc(NOTA_DISPONIBILIDAD)}</p>`);

  abrirPanel("#ficha");
}

/* ---------- Envío de la cotización ---------- */
function mensajeCotizacion(){
  return `Hola UpComp. Me interesa cotizar:

${cotizacion.map(x=>`· ${EQUIPOS[x.i].t} — ${x.cant} unidad(es)`).join("\n")}

Quedo atento a su respuesta.`;
}

/* ---------- Cableado del catálogo ---------- */
if(PAGINA==="tienda"){
  pintarCatalogo();
  pintarCarro();

  document.addEventListener("click",e=>{
    const b=e.target.closest("[data-agregar],[data-ficha],[data-mas],[data-menos]");
    if(!b) return;
    if(b.dataset.agregar!==undefined) agregar(+b.dataset.agregar);
    else if(b.dataset.ficha!==undefined) pintarFicha(+b.dataset.ficha);
    else if(b.dataset.mas!==undefined) cambiar(+b.dataset.mas,1);
    else if(b.dataset.menos!==undefined) cambiar(+b.dataset.menos,-1);
  });

  $("#abrirCarro")?.addEventListener("click",()=>abrirPanel("#carro"));
  $$("[data-cerrar]").forEach(b=>b.addEventListener("click",cerrarPaneles));

  $("#enviarWa")?.addEventListener("click",()=>open(waLink(mensajeCotizacion()),"_blank","noopener"));
  $("#enviarMail")?.addEventListener("click",()=>{
    location.href=`mailto:${CORREO}?subject=${encodeURIComponent("Solicitud de cotización")}&body=${encodeURIComponent(mensajeCotizacion())}`;
  });
}
