# Proyecto: Virginia Maldonado — Me Declaro Paisaje

## URL de producción
**https://virginia-maldonado.github.io/**

- Repo: https://github.com/Virginia-Maldonado/Virginia-Maldonado.github.io
- Rama: `main`, carpeta raíz `/`
- GitHub Pages activo (repo público)

## Deploy
```
git -C "P:\.claude\virginia" add .
git -C "P:\.claude\virginia" commit -m "descripción"
git -C "P:\.claude\virginia" push
```
GitHub Pages publica automáticamente al hacer push a `main`. Demora ~1 minuto.

---

## Estructura de carpetas

```
P:\.claude\virginia\
├── index.html                        ← único archivo de código, todo inline
├── PROYECTO.md                       ← este archivo
├── memory.txt
├── flyer muestra.jfif
├── qr-me-declaro-paisaje.png
├── Me declaro paisaje MACA.docx
│
├── audio/
│   ├── cecilia-canepa.mp3            ← audio curadora (intro + #muestra) — 1120 KB
│   ├── sala-2.mp3                    ← audio guía Sala 2 — 623 KB
│   ├── veintipico.mp3                ← audio sobre la obra — 1308 KB
│   ├── audio pieza Veintipico de bolsas.ogg  ← original, sin usar en HTML
│   ├── audio Sala 2.ogg              ← original, sin usar en HTML
│   └── me declaro paisaje cecilia canepa.ogg ← original, sin usar en HTML
│
├── fotos/
│   ├── 1A.jpg                        ← fondo pantalla de entrada (intro)
│   ├── foto-01.jfif ... foto-18.jpeg ← 18 fotos renombradas (< 300 KB c/u)
│   │                                    usadas en hero slider y galerías
│   ├── 20240922_183312.jpg           ← 34 fotos adicionales SIN USAR en el sitio
│   ├── ... (32 más)
│   ├── 20240922_193345.jpg
│   ├── VIDEO MUESTRA.mp4             ← 3 MB — sin usar
│   └── 20240922_183530.mp4           ← 24 MB — sin usar
│
├── PROCESO VIR/                      ← 8 imágenes usadas en #sala2 y #veintipico
│   ├── WhatsApp Image 2026-05-05 at 9.58.05 AM.jpeg      ← sala 2 [0]
│   ├── WhatsApp Image 2026-05-05 at 9.58.05 AM (1).jpeg  ← veintipico [0]
│   ├── WhatsApp Image 2026-05-05 at 9.58.06 AM.jpeg      ← sala 2 [1]
│   ├── WhatsApp Image 2026-05-05 at 9.58.06 AM (1).jpeg  ← veintipico [1]
│   ├── WhatsApp Image 2026-05-05 at 9.59.39 AM.jpeg      ← sala 2 [2]
│   ├── WhatsApp Image 2026-05-05 at 9.59.40 AM.jpeg      ← sala 2 [3]
│   ├── WhatsApp Image 2026-05-05 at 9.59.40 AM (1).jpeg  ← sala 2 [4]
│   └── WhatsApp Image 2026-05-05 at 9.59.40 AM (2).jpeg  ← sala 2 [5]
│
├── foto perfil/
│   └── 136132502_...jpg              ← foto artista (sección #artista)
│
└── LA ARTISTA/
    └── virginia maldonado.jpeg       ← sin usar
```

---

## Secciones del index.html (en orden)

| Sección | ID | Fondo | Audio | Notas |
|---|---|---|---|---|
| Pantalla de entrada | `#intro` | `fotos/1A.jpg` + overlay rgba(0,0,0,.4) | `cecilia-canepa.mp3` | Auto-dismiss 15s → scroll a #muestra. Botón "Cecilia Canepa – Curadora" / "Explorar sin audio" |
| Hero slider | `#hero` | 5 slides con imágenes | — | Swiper fade, autoplay 4s, flechas circulares, loop. Click en slide → scroll a sección |
| Muestra | `#muestra` | `--cream` | `cecilia-canepa.mp3` | Audio card + "Cecilia Canepa – Curadora" en itálica. Slider 12 fotos |
| Sala 2 | `#sala2` | `--cream2` | `sala-2.mp3` | Slider 6 fotos de PROCESO VIR/ |
| Veintipico | `#veintipico` | `--cream` | `veintipico.mp3` | Layout 2 col: slider 2 fotos izq / texto+audio der |
| Proceso | `#proceso` | `--ink` (oscuro) | — | Slider 6 fotos |
| Artista | `#artista` | `--cream` | — | Foto perfil + bio dos columnas |
| Contacto | `#contacto` | `--cream2` | — | 3 íconos: IG, email, WhatsApp |
| Footer | `footer` | `--ink` | — | Minimalista |

### Hero slider — 5 slides en orden
| Slide | Foto | Título | Destino al hacer clic |
|---|---|---|---|
| 1 | `fotos/foto-01.jfif` | La Muestra | `#muestra` |
| 2 | `fotos/foto-02.jpeg` | Sala 2 | `#sala2` |
| 3 | `fotos/foto-03.jpeg` | Veintipico de bolsas | `#veintipico` |
| 4 | `fotos/foto-04.jpeg` | El Proceso | `#proceso` |
| 5 | `fotos/foto-05.jpeg` | La Artista | `#artista` |

---

## Diseño

### Fuentes (Google Fonts)
- **Playfair Display** — títulos `h2` de cada sección (italic, 400/700)
- **Cormorant Garamond** — hero, nav brand, overlay intro, footer (italic, 300)
- **Jost** — cuerpo de texto, nav, labels (300/400)

### Paleta de colores
```css
--cream:  #F6F1E7
--cream2: #EDE6D5
--ink:    #19110A
--brown:  #6B5540
--ochre:  #C9A050   ← acento dorado (bullets activos, bordes)
--sage:   #7A9C78
--terra:  #B5644A   ← labels, curadora
--muted:  #9A8878   ← body text
--pad:    80px
--gap:    4px
```

### Nav
- Fijo, blur backdrop, hamburguesa en mobile (240px desde derecha)
- Links: Muestra · Sala 2 · Veintipico · Proceso · Artista · Contacto

---

## Sistema de audio
- **AudioManager** centralizado: un solo audio a la vez
- **IntersectionObserver** en `[data-audio-section]`: al entrar en sección pausa el resto
- **Sin autoplay** — el usuario inicia manualmente
- **Floating player**: aparece al activar audio del intro (Virginia/Cecilia habla)
- **Audio cards inline**: `.audio-card` con play/pause, barra de progreso, ondas animadas

Secciones con `data-audio-section`: `#hero`, `#muestra`, `#sala2`, `#veintipico`

---

## Sliders (Swiper.js v11 via CDN)

### Hero slider (`#heroSwiper`)
```js
{ effect:'fade', fadeEffect:{crossFade:true}, loop:true, initialSlide:0,
  speed:900, autoplay:{delay:4000}, navigation:{...} }
```

### Sliders de sección (#muestra, #sala2, #proceso)
```js
{ loop:true, slidesPerView:1.2, centeredSlides:true, spaceBetween:16,
  pagination:{el:'.swiper-pagination', clickable:true},
  lazy:{loadPrevNext:true} }
```
- Sin flechas de navegación
- `border-radius: 8px` + sombra suave en cada slide
- Fotos adyacentes visibles a ambos lados (peek effect)
- Lazy loading con fade al cargar

### Slider veintipico (`#swiperVein`)
```js
{ loop:true, slidesPerView:1, spaceBetween:16, pagination:{...} }
```

---

## Contacto (datos reales)
- Instagram: https://www.instagram.com/mariavirginiamaldonado/
- Email: mardevir@gmail.com
- WhatsApp: https://wa.me/5492284638134

---

## Pendiente / sin integrar

| Item | Estado |
|---|---|
| 34 fotos `20240922_*.jpg` en `/fotos/` | Sin usar en el sitio |
| `VIDEO MUESTRA.mp4` (3 MB) | Sin usar |
| `20240922_183530.mp4` (24 MB) | Sin usar |
| `LA ARTISTA/virginia maldonado.jpeg` | Sin usar |
| `flyer muestra.jfif` y `qr-me-declaro-paisaje.png` | Sin integrar |
| CSS `.sec-hero` agregado | Clase CSS definida, no usada en HTML aún |
| Cambio de subdominio a dominio propio | Pendiente (requiere DNS) |
