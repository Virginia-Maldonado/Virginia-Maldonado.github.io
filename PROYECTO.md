# Proyecto: Virginia Maldonado — Me Declaro Paisaje

## URL de producción
https://virginia-maldonado.github.io/
- Repo: https://github.com/Virginia-Maldonado/Virginia-Maldonado.github.io
- Rama: `main`, carpeta raíz `/`
- GitHub Pages activo (repo público)

## Deploy
```
git -C "P:\.claude\virginia" add .
git -C "P:\.claude\virginia" commit -m "descripción del cambio"
git -C "P:\.claude\virginia" push
```
GitHub Pages publica automáticamente al hacer push a `main`. Puede demorar 1-2 minutos.

---

## Estructura de carpetas

```
P:\.claude\virginia\
├── index.html                  ← único archivo de código, todo inline
├── PROYECTO.md                 ← este archivo
├── flyer muestra.jfif          ← flyer de la muestra (no usado en la web aún)
├── qr-me-declaro-paisaje.png   ← QR (no usado en la web aún)
├── Me declaro paisaje MACA.docx ← texto/documento (no usado)
│
├── audio/
│   ├── Evita Mis obras.mp3                      ← audio intro (Virginia habla, overlay inicial)
│   ├── audio Sala 2.ogg                          ← audio guía Sala 2
│   ├── audio pieza Veintipico de bolsas.ogg      ← audio sobre la obra
│   └── me declaro paisaje cecilia canepa.ogg     ← audio de la curadora (sección Muestra)
│
├── fotos/                      ← 18 imágenes de la muestra + 1 video
│   ├── WhatsApp Image 2026-05-04 at 9.23.09 PM.jpeg   ← hero bg + galería [0]
│   ├── WhatsApp Image 2026-05-04 at 9.23.11 PM.jpeg   ← proceso
│   ├── WhatsApp Image 2026-05-04 at 9.23.12 PM.jpeg   ← proceso
│   ├── WhatsApp Image 2026-05-04 at 9.23.12 PM (1).jpeg ← proceso
│   ├── WhatsApp Image 2026-05-04 at 9.23.13 PM.jpeg   ← galería [1]
│   ├── WhatsApp Image 2026-05-04 at 9.23.13 PM (1).jpeg ← galería [2]
│   ├── WhatsApp Image 2026-05-04 at 9.23.13 PM (2).jpeg ← galería [3]
│   ├── WhatsApp Image 2026-05-04 at 9.23.14 PM.jpeg   ← proceso
│   ├── WhatsApp Image 2026-05-04 at 9.23.14 PM (1).jpeg ← galería [4]
│   ├── WhatsApp Image 2026-05-04 at 9.23.15 PM.jpeg   ← proceso
│   ├── WhatsApp Image 2026-05-04 at 9.23.15 PM (1).jpeg ← galería [5]
│   ├── WhatsApp Image 2026-05-04 at 9.23.15 PM (2).jpeg ← galería [6]
│   ├── WhatsApp Image 2026-05-04 at 9.23.16 PM.jpeg   ← galería [8]
│   ├── WhatsApp Image 2026-05-04 at 9.23.16 PM (1).jpeg ← galería [7]
│   ├── WhatsApp Image 2026-05-04 at 9.23.17 PM.jpeg   ← proceso
│   ├── WhatsApp Image 2026-05-04 at 9.23.17 PM (1).jpeg ← galería [9]
│   ├── WhatsApp Image 2026-05-04 at 9.23.17 PM (2).jpeg ← galería [10]
│   ├── WhatsApp Image 2026-05-04 at 9.23.17 PM (3).jpeg ← galería [11]
│   ├── 4789bd73-7690-42e2-aafb-e08b43af1961.jfif      ← galería [12]
│   └── WhatsApp Video 2026-05-04 at 9.23.11 PM.mp4    ← video (no usado en la web actualmente)
│
├── PROCESO VIR/                ← 8 imágenes del proceso / Sala 2 / Veintipico
│   ├── WhatsApp Image 2026-05-05 at 9.58.05 AM.jpeg     ← sala 2 grid [0]
│   ├── WhatsApp Image 2026-05-05 at 9.58.05 AM (1).jpeg ← veintipico (imagen principal)
│   ├── WhatsApp Image 2026-05-05 at 9.58.06 AM.jpeg     ← sala 2 grid [1]
│   ├── WhatsApp Image 2026-05-05 at 9.58.06 AM (1).jpeg ← sin usar
│   ├── WhatsApp Image 2026-05-05 at 9.59.39 AM.jpeg     ← sala 2 grid [2]
│   ├── WhatsApp Image 2026-05-05 at 9.59.40 AM.jpeg     ← sala 2 grid [3]
│   ├── WhatsApp Image 2026-05-05 at 9.59.40 AM (1).jpeg ← sala 2 grid [4]
│   └── WhatsApp Image 2026-05-05 at 9.59.40 AM (2).jpeg ← sala 2 grid [5]
│
├── LA ARTISTA/
│   └── virginia maldonado.jpeg   ← sin usar (la web usa foto perfil/)
│
└── foto perfil/
    └── 136132502_186986726471771_6324764884388894479_n.jpg ← foto artista (sección Artista)
```

---

## Secciones actuales (en orden)

| Sección | ID | Fondo | Audio | Notas |
|---|---|---|---|---|
| Overlay intro | `#intro` | `--ink` (oscuro) | `Evita Mis obras.mp3` | Se cierra con clic o skip |
| Hero | `#hero` | Foto 9.23.09 PM | — | Imagen estática con zoom CSS. **Pendiente: slider Swiper.js** |
| Muestra | `#muestra` | `--cream` | `me declaro paisaje cecilia canepa.ogg` | Curadora: Cecilia Canepa. Galería 3 col con lightbox (13 fotos) |
| Sala 2 | `#sala2` | `--cream2` | `audio Sala 2.ogg` | Grid 6 fotos de PROCESO VIR/ |
| Veintipico | `#veintipico` | `--cream` | `audio pieza Veintipico de bolsas.ogg` | Imagen + texto + player |
| Proceso | `#proceso` | `--ink` (oscuro) | — | Grid 6 fotos proceso |
| Artista | `#artista` | `--cream` | — | Dos columnas: foto izq / texto der |
| Contacto | `#contacto` | `--cream2` | — | 3 íconos centrados: IG, email, WhatsApp |
| Footer | `footer` | `--ink` | — | Minimalista |

---

## Diseño

### Fuentes (Google Fonts)
- **Playfair Display** — títulos `h2` de cada sección (italic, 400/700)
- **Cormorant Garamond** — hero title, nav brand, overlay intro, footer brand (italic, 300)
- **Jost** — cuerpo de texto, nav links, labels (300/400)

### Paleta de colores (variables CSS)
```css
--cream:  #F6F1E7   /* fondo principal */
--cream2: #EDE6D5   /* fondo alternado (sala 2, contacto) */
--ink:    #19110A   /* fondo oscuro (proceso, footer, overlay) */
--brown:  #6B5540   /* texto secundario, nav links */
--ochre:  #C9A050   /* acento dorado (audio players, bordes decorativos) */
--sage:   #7A9C78   /* verde oliva (tags, no muy usado actualmente) */
--terra:  #B5644A   /* acento terracota (labels, roles, curadora) */
--muted:  #9A8878   /* texto body/bio */
--pad:    80px      /* padding vertical de secciones (60px en mobile) */
--gap:    4px       /* gap entre celdas de grillas de fotos */
```

### Nav
- Fondo: `rgba(245,240,235,.93)` + `backdrop-filter: blur(14px)`
- Siempre visible (no cambia al hacer scroll)
- Mobile: menú hamburguesa (slide desde la derecha, 240px)
- Links: Muestra · Sala 2 · Veintipico · Proceso · Artista · Contacto

### Separadores
- `<div class="sep">` — línea de 1px `rgba(107,85,64,.12)` entre secciones

### Animaciones
- `.fade` / `.fade.in` — fade-in con translateY al hacer scroll (IntersectionObserver)
- Hero: zoom-out CSS en la imagen de fondo (14s ease-out)
- Audio waves: animación `wave` en barras verticales

---

## Sistema de audio

- **Un solo audio a la vez**: `AudioManager` centralizado. Cuando arranca uno, pausa todos los demás.
- **IntersectionObserver en secciones** `[data-audio-section]`: al hacer scroll hacia una sección con audio, pausa lo que esté sonando en otra.
- **Sin autoplay**: el usuario siempre inicia manualmente.
- **Floating player**: aparece solo cuando se activa el audio del overlay (Virginia habla). Tiene play/pause, ondas animadas y botón de cerrar.
- **Audio cards inline**: componente `.audio-card` con botón, barra de progreso clickeable y ondas.

Secciones con `data-audio-section`: `#hero`, `#muestra`, `#sala2`, `#veintipico`

---

## Contacto (datos reales)
- Instagram: https://www.instagram.com/mariavirginiamaldonado/
- Email: mardevir@gmail.com
- WhatsApp: https://wa.me/5492284638134 (botón verde flotante fijo + ícono en #contacto)

---

## Qué falta / pendiente

1. **Hero slider con Swiper.js** — el hero actual tiene una sola imagen estática. El brief pedía un slider con múltiples fotos. Hay 18 fotos en `fotos/` disponibles. Pendiente definir cuáles van y agregar Swiper via CDN.
2. **Cambio de subdominio** — cambiar de `relaxed-nougat-036d70.netlify.app` a `virginiamaldonado.netlify.app` desde el dashboard de Netlify (manual, no se hace por CLI).
3. **Video** — existe `fotos/WhatsApp Video 2026-05-04 at 9.23.11 PM.mp4` pero la sección de video fue eliminada. Si se quiere recuperar, agregar sección entre Veintipico y Proceso.
4. **Imagen hero de LA ARTISTA/** — `virginia maldonado.jpeg` está sin usar. La foto de perfil actual viene de `foto perfil/`.
5. **Flyer y QR** — `flyer muestra.jfif` y `qr-me-declaro-paisaje.png` existen pero no están integrados en la web.
6. **`PROCESO VIR/WhatsApp Image 2026-05-05 at 9.58.06 AM (1).jpeg`** — sin usar actualmente.

---

## Decisiones de diseño tomadas
- Una sola página `index.html`, sin frameworks, sin Bootstrap, CSS inline en `<style>`
- Swiper.js mencionado en el brief pero **no implementado** (ver pendiente #1)
- Se eliminaron las secciones: video separado, talleres, horarios/visita
- Cecilia Canepa figura como **Curadora** (no visitante)
- El audio del overlay (`Evita Mis obras.mp3`) es de Virginia hablando sobre su obra
- El audio de la sección Muestra (`me declaro paisaje cecilia canepa.ogg`) es de la curadora
- Títulos en Playfair Display italic (cambio del brief original que usaba Cormorant Garamond para todo)
- Mobile-first, breakpoints en 900px y 580px
