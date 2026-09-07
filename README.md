# UpComp — sitio corporativo B2B

Propuesta de sitio para UpComp: **empresa de servicios TI**, con el catálogo
de equipamiento como destino secundario. Sin comercio electrónico.

Todo el contenido proviene de [upcomp.cl](https://upcomp.cl). No hay datos
inventados: lo que todavía no está confirmado va marcado como tal.

## Estructura

```
upcomp/
├── prototipo/              ← ESTO ES LO QUE SE DESPLIEGA
│   ├── index.html            portada: 7 bloques
│   ├── tienda.html           catálogo de equipamiento  → /tienda
│   ├── estilos.css           diseño (compartido)
│   ├── app.js                contenido + lógica (compartido)
│   └── assets/               logos y fotos reales de upcomp.cl
├── web/                    versión anterior en Next.js (referencia)
├── documentacion/
│   ├── UpComp_Portafolio_2026.pdf
│   ├── decisiones-upcomp.txt versión presentada el 6 de septiembre
│   └── prototipo-v0.html     primer prototipo, guardado
└── vercel.json             config de despliegue
```

**Para editar textos, equipos o casos: `prototipo/app.js`.** Todo el contenido
está en constantes al inicio del archivo, con su fuente anotada.

## La portada, en siete bloques

La auditoría de UpComp (6 de septiembre de 2026) pidió una portada que se
entienda en unos 15 segundos y que se lea como integrador B2B, no como tienda.
El orden es una ruta de decisión:

| | Bloque | Función |
| --- | --- | --- |
| 01 | Hero | Propuesta de valor y dos llamadas a la acción |
| 02 | Clientes | Prueba social inmediata, antes de cualquier explicación |
| 03 | Soluciones | Cuatro áreas, sin catálogo |
| 04 | Diferenciador | Evaluamos → Diseñamos → Implementamos → Soportamos |
| 05 | Partners | Respaldo de fabricante |
| 06 | Experiencia | Tres proyectos con contexto |
| 07 | Contacto | Formulario de cuatro campos y canales directos |

Lo que se retiró de la portada: pantalla de bienvenida, ecosistema, "nuestra
mirada", "cuatro datos", "qué información incluir", FAQ, la sección de
desarrollo extendida y el mazo de tarjetas arrastrable. Varias comunicaban la
misma promesa con títulos distintos; el detalle corresponde a páginas internas.

## Dos páginas, dos funciones

| | |
| --- | --- |
| **`/`** | La empresa de servicios. Sin catálogo y sin carrito. |
| **`/tienda`** | Equipamiento: catálogo, fichas y lista de cotización. |

El mismo `app.js` sirve a las dos: `<body data-pagina="home">` o `"tienda"`, y
cada render se salta si su contenedor no existe en esa página.

**El carrito solo existe en el catálogo.** UpComp es 100% B2B y no vende en
línea: en la portada un icono de carrito comunicaba exactamente la percepción
de tienda que había que eliminar. Y no es un carrito de compra sino una
**lista de cotización**: sin precios ni pago, se envía por WhatsApp o correo
con el mensaje ya redactado, y se guarda en el navegador.

## Diseño

Vitrina oscura. El sistema está tomado de la página de producto de Apple
(escenas negras a pantalla completa, bandas claras alternadas, tipografía
enorme con tracking negativo, radios restringidos y cero sombras) y adaptado
a UpComp.

| | |
| --- | --- |
| Escena / héroe / pie | `#000000` |
| Un paso sobre el negro | `#111111` |
| Tarjetas sobre escena | `#1d1d1f` |
| Campos y paneles | `#333336` |
| Texto sobre oscuro | `#f5f5f7` · secundario `#86868b` |
| Bandas claras | `#f5f5f7` y `#ffffff`, cuerpo en `#57575c` (7,2:1) |
| **Acción** | Verde UpComp `#36B85C` con texto `#04120A` (7,4:1) |
| Enlaces sobre oscuro | `#5BD97F` |
| Tipografía | Albert Sans, la que ya usa upcomp.cl |

**La única diferencia deliberada con la referencia:** donde Apple pone su azul
`#0071e3` como el único botón lleno de la página, aquí va el verde de UpComp.
Un solo color de acción en todo el sitio; el resto es negro, blanco y gris.

Radios restringidos a propósito: 10 px enlaces y campos, 28 px tarjetas,
36 px botones, 980 px la barra pastilla y los contadores. Sin sombras — la
profundidad sale del contraste entre superficies. El único degradado del
sistema es el negro a carbón del héroe.

Ritmo de página: negro → claro → negro → carbón → blanco → blanco → negro.

## De dónde sale cada contenido

| Sección | Origen |
| --- | --- |
| Hero, clientes, catálogo, fichas | upcomp.cl (home y fichas de producto) |
| Soluciones, diferenciador | upcomp.cl/servicios-empresas |
| Canales y dirección | upcomp.cl/contacto |
| Logos de partners y clientes, fotos de producto | descargados de upcomp.cl |
| Copy del hero y de los bloques | auditoría de UpComp del 6 de septiembre |
| **Desarrollo e integración** | **Único bloque que no está en su sitio.** Es la capacidad que aporta la alianza. |

## Ver en local

```bash
python -m http.server 4000 --directory prototipo
```

O abrir `prototipo/index.html` con doble clic.

## Desplegar

`vercel.json` ya publica la carpeta `prototipo/` como sitio estático:
**Import → Deploy**, sin cambiar nada. Cada push a `main` se publica solo.

## Lo que todavía no es real

- **El formulario no persiste.** Abre WhatsApp con los datos ya escritos.
  Conectarlo a un CRM es trabajo posterior.
- **Casos de éxito sin detalle.** Hay clientes y logos, no casos con desafío,
  solución y resultado: publicarlos requiere autorización de cada cliente.
- **No hay contadores.** Faltan años de operación y número de proyectos
  confirmados por UpComp.
- **Seis de ocho equipos sin ficha completa.** Solo dos tienen SKU,
  características y especificaciones tomadas de upcomp.cl.

## Nota sobre dos logos

`Geocom` y `Ducati Chile` se muestran como marca tipográfica: sus URLs de logo
en upcomp.cl devuelven `Image Not Found!`. Conviene avisarlo para corregirlo
allá también.
