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
│       └── productos-negro/    las mismas fotos, sin el fondo blanco
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
| 01 | Héroe | Producto flotando sobre negro, propuesta de valor y dos acciones |
| 02 | Clientes | Prueba social inmediata, antes de cualquier explicación |
| 03 | Soluciones | Cuatro frentes en filas con filete — no en tarjetas |
| 04 | Equipamiento | Escena de producto: imagen a un lado, texto al otro |
| 05 | Diferenciador | Evaluamos → Diseñamos → Implementamos → Soportamos, sobre un riel |
| 06 | Partners | Respaldo de fabricante |
| 07 | Experiencia | Tres proyectos con contexto |
| 08 | Contacto | Formulario de cuatro campos y canales directos |

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

Vitrina clara, como una página de producto de Apple: blanco y gris claro, el
producto en fotografía sobre blanco con su propia sombra, tipografía enorme
con tracking negativo y una sola escena negra para el contraste. Geometría
de Windows moderno: 4 px en controles, 8 px en superficies, barra plana con
acrílico al hacer scroll. Un solo color de acción: el verde de UpComp.

| | |
| --- | --- |
| Superficies | `#ffffff` y `#f5f5f7` |
| Tinta | `#1d1d1f` · cuerpo `#57575c` (7,2:1) · rótulos `#6e6e73` (4,6:1) |
| Escena negra | `#000000`, texto `#f5f5f7`, secundario `#86868b` |
| **Botón de acción** | Verde profundo `#15703B` con texto blanco (6,1:1) |
| Verde vivo `#36B85C` | Solo puntos, contador y el botón de WhatsApp |
| Tipografía | Albert Sans en titulares (la marca); fuente del sistema en la interfaz |

El verde vivo con texto negro como botón principal se leía como juguete; el
profundo con blanco es el mismo verde de UpComp, en su registro serio.

**Producto en foto.** Las fotos de upcomp.cl se recortaron sin fondo (WebP con
transparencia en `assets/productos-negro/`) y sirven sobre cualquier
superficie; llevan una sombra suave de `drop-shadow`, que es la sombra de la
fotografía, no elevación de interfaz. El héroe muestra un portátil de trabajo
profesional y no una torre con luces: la torre leía como equipo gamer.

**Sin grillas de tarjetas.** Soluciones en filas con filete, ciclo sobre un
riel, casos en columnas con filete. Las únicas superficies son las que
contienen algo: el formulario, las piezas del carril y el catálogo.

**Movimiento.** Cuatro momentos, todos ligados al scroll o a la carga:

- *Coreografía de carga.* Las piezas del héroe entran por turno y el
  producto se asienta.
- *Secuencia de apertura.* El héroe mide casi dos pantallas y su interior
  queda fijado: el titular se retira y aparecen, una por una, *Empresas. ·
  Proyectos TI. · Cobertura nacional.* (las palabras del pie del héroe).
- *Carril de equipamiento.* La fila de los ocho equipos se desplaza en
  horizontal mientras se baja; en pantallas angostas es una tira con
  desplazamiento nativo.
- *Texto que se ilumina.* En la escena negra, cada palabra pasa de 18% a
  100% en orden y al final aparecen los cuatro pasos del ciclo.

El estado oculto lo pone JavaScript: si falla el script, todo queda visible.
Con menos movimiento (`prefers-reduced-motion`) quedan solo los fundidos y
las secciones no se fijan. Para demostrar el sitio desde un equipo con las
animaciones apagadas, `upcomp.vercel.app/?movimiento=1` fuerza el
movimiento en esa visita (`body.forzado` deja de lado esas preferencias).

**Hojas con resorte.** Los paneles del catálogo siguen *Designing Fluid
Interfaces* de Apple: un resorte con amortiguación y respuesta integrado
cuadro a cuadro, sin librerías. La animación parte del valor en pantalla, se
puede agarrar a mitad de camino desde la cabecera, sigue al dedo 1:1, resiste
con goma más allá de abierto, hereda la velocidad al soltar y proyecta la
inercia para decidir si cierra o vuelve. En pantallas angostas es una hoja
inferior con asa. Los botones responden al presionar y no al soltar, y los
tamaños de texto van en `rem`.

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
