# UpComp — prototipo de sitio

Prototipo de propuesta para el sitio de UpComp, con el módulo nuevo de
**Desarrollo e Integración** incorporado al portafolio existente.

Todo el contenido proviene de [upcomp.cl](https://upcomp.cl) y del
*Portafolio Corporativo 2026*. No hay datos inventados: lo que todavía no está
confirmado va marcado como tal dentro del propio sitio.

## Estructura

```
upcomp/
├── prototipo/              ← ESTO ES LO QUE SE DESPLIEGA
│   ├── index.html            estructura
│   ├── estilos.css           diseño
│   ├── app.js                contenido + interacciones
│   └── assets/               logos y fotos reales de upcomp.cl
├── web/                    versión anterior en Next.js (referencia)
├── documentacion/
│   ├── UpComp_Portafolio_2026.pdf
│   └── prototipo-v0.html     primer prototipo, guardado
└── vercel.json             config de despliegue
```

**Para editar textos, equipos, clientes o el guion del bot: `prototipo/app.js`.**
Todo el contenido está en constantes al inicio del archivo. No hace falta tocar
la estructura ni los estilos.

## Ver en local

Cualquiera de las dos:

```bash
python -m http.server 4000 --directory prototipo
```

O simplemente abrir `prototipo/index.html` con doble clic.

## Desplegar en Vercel

El `vercel.json` de la raíz ya deja configurado que se publique la carpeta
`prototipo/` como sitio estático. Al importar el repositorio en Vercel no hace
falta cambiar nada: **Import → Deploy**.

Si por alguna razón Vercel no toma esa configuración, la alternativa es fijar en
la pantalla de importación:

- **Root Directory:** `prototipo`
- **Framework Preset:** Other

## De dónde sale cada contenido

Regla del proyecto: **todo sale de upcomp.cl.** En `app.js` cada bloque de datos
lleva anotada su página de origen.

| Sección | Origen |
| --- | --- |
| Hero, Soluciones destacadas, Guía de selección, Validación técnica, Catálogo | upcomp.cl (home) |
| Ecosistema UpComp, los 5 Servicios, Puntos de partida A/B/C, Enfoque, Cómo trabajamos | upcomp.cl/servicios-empresas |
| Nuestra mirada, Compromiso | upcomp.cl/quienes-somos-1 |
| Cuatro datos, Canales, Qué información incluir, Preguntas frecuentes | upcomp.cl/contacto |
| Logos de partners y clientes, fotos de producto | descargados de upcomp.cl |
| **Desarrollo e integración** | **Único bloque que NO está en su sitio.** Es la capacidad que aporta la alianza, y va marcada como propuesta dentro de la propia página. |

## Qué está implementado

| Sección | Interacción |
| --- | --- |
| Hero | Marca que se traza sola + mazo de tarjetas arrastrable con física (mouse, dedo y teclado) |
| Ecosistema | Equipamiento → Infraestructura → Soporte → Continuidad, con rieles que se animan al entrar |
| Partners | Marquesina en movimiento con los 5 logos oficiales |
| Servicios | Los 5 servicios reales, con Continuidad Operacional destacada (Garantía Shield) |
| Desarrollo | 6 capacidades + flujo Levantar → Diseñar → Construir → Integrar → Evolucionar |
| Equipos | Catálogo real con lista de cotización y modal de consulta |
| Configurador | 3 preguntas con scoring en vivo entre plataformas |
| Calculadora | Puesto de Trabajo Gestionado según usuarios y plan |
| Clientes | Logos reales con filtro por industria |
| Contacto | Cuatro datos, canales, qué incluir, formulario de 3 pasos → WhatsApp o correo |
| FAQ | Las 4 preguntas frecuentes reales, con sus respuestas |
| Asistente | Bot con guion que sugiere equipos y los agrega a la cotización |

## Lo que todavía no es real

Está marcado dentro del sitio para no presentar como cerrado algo que no lo está:

- **Tarifas de la calculadora.** Los valores por usuario y los tramos por
  volumen son de ejemplo. Falta la política comercial real de UpComp.
- **Casos de éxito.** Hay nombres y logos de clientes (los que ya publica
  upcomp.cl) pero no casos con desafío, solución y resultado: publicarlos
  requiere autorización de cada cliente.
- **El formulario no persiste.** Abre WhatsApp o el correo con los datos ya
  escritos. Conectarlo a un CRM es trabajo posterior.
- **El bot sigue un guion fijo.** No hay modelo detrás todavía.
- **No hay contadores.** Se quitaron: las cifras que había salían del PDF, no
  del sitio. Si UpComp confirma años de operación y número de proyectos, se
  reponen con datos reales.

## Nota sobre dos logos

`Geocom` y `Ducati Chile` se muestran como marca tipográfica y no como imagen.
Sus URLs de logo en upcomp.cl devuelven `Image Not Found!` — están rotas en el
sitio actual. Conviene avisarlo para corregirlo allá también.
