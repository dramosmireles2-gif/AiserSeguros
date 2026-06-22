# Reporte de Producción – AISER Seguros
Generado: 2026-06-22

---

## Resumen

| Concepto | Cantidad |
|---|---|
| Archivos incluidos | 28 |
| Archivos excluidos | 15+ |
| Tamaño total de la carpeta | ~2.7 MB |
| Páginas HTML | 6 |
| Archivos CSS | 4 |
| Archivos JS | 4 |
| Imágenes | 14 |

---

## Archivos INCLUIDOS

### Páginas HTML
| Archivo | Descripción |
|---|---|
| `index.html` | Página principal (inicio) |
| `acerca-de/index.html` | Página Acerca de / Quiénes somos |
| `servicios/index.html` | Catálogo de servicios |
| `contacto/index.html` | Página de contacto con mapa |
| `cotizar/index.html` | Formulario cotización vehículos |
| `cotizar-gmm-vida/index.html` | Formulario cotización GMM y Vida |

### Estilos CSS
| Archivo | Descripción |
|---|---|
| `css/style.css` | Estilos principales (navbar, hero, cards, footer) |
| `css/inner-page.css` | Estilos para páginas internas (tabs, forms, sidebar) |
| `css/acerca-de.css` | Estilos específicos de la página Acerca de |
| `css/mobile.css` | Estilos responsive (320px–900px) |

### Scripts JavaScript
| Archivo | Descripción |
|---|---|
| `js/main.js` | Core: transiciones, navbar, hamburger, scroll reveal |
| `js/carousel.js` | Carrusel de servicios en homepage |
| `js/animations.js` | Barra de progreso, ticker de logos, contadores |
| `js/acerca-de.js` | Gráficas de anillos y animaciones de la página Acerca de |

### Imágenes
| Archivo | Usado en | Descripción |
|---|---|---|
| `Logo AISER sin fondo.png` | Todas las páginas | Logo principal en navbar |
| `Logo blanco cuadrado.png` | Todas las páginas | Favicon del sitio |
| `Logo blanco.png` | Todas las páginas | Logo en footer |
| `Heroacercade.webp` | acerca-de | Foto del equipo (formato optimizado) |
| `Heroacercade.png` | acerca-de | Foto del equipo (fallback) |
| `Turista.jpeg` | index (carrusel) | Foto del seguro para turistas |
| `transfer.jpeg` | servicios | Foto del servicio de transfer |
| `Transportes de mercancia.png` | servicios | Ícono del servicio de transportes |
| `seguro-001.png` | index, servicios | Logo Banorte |
| `seguro-002.png` | index, servicios | Logo AXA |
| `seguro-003.png` | index, servicios | Logo Quálitas |
| `seguro-004.png` | index, servicios | Logo Chubb |
| `seguro-005.png` | index, servicios | Logo Atlas |
| `seguro-006.png` | index, servicios | Logo New Horizon |

---

## Archivos EXCLUIDOS

### Archivos de desarrollo y configuración
| Archivo | Motivo de exclusión |
|---|---|
| `.git/` | Repositorio Git (control de versiones, no necesario en servidor) |
| `.claude/` | Configuración de Claude Code (herramienta de desarrollo IA) |
| `node_modules/` | No existe en el proyecto (librería Motion se carga desde CDN) |
| `package.json` | Configuración NPM (sólo para desarrollo) |
| `package-lock.json` | Lock file NPM (sólo para desarrollo) |
| `.gitignore` | Reglas de Git (no aplica en producción) |
| `.nojekyll` | Configuración para GitHub Pages (no necesaria en hosting tradicional) |
| `README.md` | Documentación interna del proyecto |

### Imágenes no utilizadas
| Archivo | Motivo de exclusión |
|---|---|
| `heroacercade.webp` | Duplicado en minúsculas. El HTML referencia `Heroacercade.webp` (con H mayúscula) |
| `LOGO negro.png` | No referenciado en ningún archivo HTML |
| `Logo AISER fondo.png` | No referenciado en ningún archivo HTML |
| `Logo AISER sin fondo.webp` | No referenciado en ningún archivo HTML |
| `Logo aiser.png` | No referenciado en ningún archivo HTML |
| `Logo transparente fondo.png` | No referenciado en ningún archivo HTML |

---

## Dependencias Críticas Externas

El sitio depende de los siguientes servicios externos. Requieren conexión a internet para funcionar.

| Servicio | Uso | CDN / URL |
|---|---|---|
| **Google Fonts** | Tipografía Inter | `fonts.googleapis.com` |
| **Motion JS v11** | Animaciones (scroll, ticker, contadores) | `cdn.jsdelivr.net/npm/motion@11/+esm` |
| **EmailJS v4** | Envío de formularios de cotización | `cdn.jsdelivr.net/npm/@emailjs/browser@4` |
| **Google Maps Embed** | Mapa en página de contacto | `google.com/maps/embed` |
| **Pexels CDN** | Fotos de servicios en el carrusel del homepage | `images.pexels.com` |
| **flagcdn.com** | Banderas en tarjeta de seguro para Turistas | `flagcdn.com` |
| **WhatsApp API** | Botones de contacto y CTA | `wa.me/` |

> **Nota:** Si el sitio se va a servir en un entorno sin acceso a internet (intranet), estas dependencias deberán descargarse localmente.

---

## Notas Importantes para el Hosting

### Compatibilidad con `public_html`
- El sitio es 100% estático (HTML + CSS + JS). No requiere PHP, base de datos ni procesamiento en servidor.
- Subir el contenido de la carpeta `production/` directamente a `public_html/` es suficiente.
- Todas las rutas internas son relativas (`../css/`, `../js/`), excepto una: ver punto siguiente.

### Ruta absoluta detectada
En `servicios/index.html` (línea 107), la imagen de transportes usa una ruta absoluta:
```html
<img src="/Transportes de mercancia.png" ...>
```
Esto funciona correctamente si el sitio está en la raíz del dominio (`public_html/`). Si se sube a un subdirectorio, esta imagen no cargará y deberá corregir la ruta en el HTML.

### EmailJS (formularios de cotización)
Los formularios de cotización en `/cotizar/` y `/cotizar-gmm-vida/` usan EmailJS con credenciales ya configuradas en el código:
- Service ID: `service_01xmx0h`
- Templates: `template_l0yw94s` y `template_wy7aumi`
- Public Key: `BpDWZbmjKnOr3KvJa`

Estas credenciales son públicas por diseño (EmailJS funciona en frontend). Verificar en el panel de EmailJS que el dominio del hosting esté en la lista de dominios permitidos.

---

## Verificación de Integridad

- Todas las rutas de CSS y JS verificadas en los 6 archivos HTML.
- Todas las imágenes referenciadas confirmadas como presentes en la carpeta.
- La librería Motion se carga desde CDN (no requiere `node_modules`).
- No se modificó el diseño, comportamiento ni contenido del sitio.
