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

## Qué está implementado

| Sección | Interacción |
| --- | --- |
| Hero | Mazo de tarjetas arrastrable con física (mouse, dedo y teclado) |
| Ciclo de operación | Adquisición → Implementación → Soporte → Continuidad |
| Soluciones destacadas | Las 4 categorías reales de upcomp.cl |
| Partners | Marquesina en movimiento con los 5 logos oficiales |
| Portafolio | Los 4 pilares en paneles que se expanden |
| Desarrollo | 6 capacidades + flujo Levantar → Diseñar → Construir → Integrar → Evolucionar |
| Qué resolvemos | 6 problemas concretos con su solución |
| Equipos | Catálogo real con lista de cotización y modal de consulta |
| Guía de selección | Las 3 plataformas con el texto literal del sitio |
| Configurador | 3 preguntas con scoring en vivo entre plataformas |
| Calculadora | Puesto de trabajo gestionado según usuarios y plan |
| Clientes | Logos reales con filtro por industria |
| Contacto | Formulario calificador de 3 pasos → WhatsApp o correo |
| Asistente | Bot con guion que sugiere equipos y los agrega a la cotización |

## Lo que todavía no es real

Está marcado dentro del sitio para no presentar como cerrado algo que no lo está:

- **Tarifas de la calculadora.** Los valores por usuario y los tramos por
  volumen son de ejemplo. Falta la política comercial real de UpComp.
- **Contadores.** Solo se muestran cifras que se pueden contar del portafolio
  (pilares, nichos, clientes publicados, partners). Faltan años de operación y
  número de proyectos.
- **Casos de éxito.** Hay nombres y logos de clientes (los que ya publica
  upcomp.cl) pero no casos con desafío, solución y resultado: publicarlos
  requiere autorización de cada cliente.
- **El formulario no persiste.** Abre WhatsApp o el correo con los datos ya
  escritos. Conectarlo a un CRM es trabajo posterior.
- **El bot sigue un guion fijo.** No hay modelo detrás todavía.

## Nota sobre dos logos

`Geocom` y `Ducati Chile` se muestran como marca tipográfica y no como imagen.
Sus URLs de logo en upcomp.cl devuelven `Image Not Found!` — están rotas en el
sitio actual. Conviene avisarlo para corregirlo allá también.
