# Osmo - Dev Toolkit Site (Copia)

Esta es una copia fiel del sitio web de Osmo (www.osmo.supply) - un toolkit para desarrolladores creativos con recursos de Webflow, HTML y GSAP.

## Estructura del Proyecto

```
osmo-site/
├── index.html          # Página principal
├── assets/             # Todos los recursos (CSS, JS, imágenes)
│   ├── *.css          # 5 archivos CSS
│   ├── *.js           # 20 archivos JavaScript
│   └── *.{avif,jpg,svg} # 72 archivos de imágenes
└── README.md          # Este archivo
```

## Tecnologías y Librerías

### Frameworks Core
- **Webflow** - CMS y builder del sitio original
- **Barba.js** - Transiciones fluidas entre páginas (SPA)
- **Lenis** - Smooth scrolling premium

### Animaciones (GSAP)
El sitio usa **GSAP (GreenSock Animation Platform)** con múltiples plugins:

- **gsap.min.js** (72KB) - Librería principal de animación
- **ScrollTrigger.min.js** (44KB) - Animaciones basadas en scroll
- **SplitText.min.js** (7.2KB) - División de texto para animaciones
- **Draggable.min.js** (35KB) - Elementos arrastrables
- **CustomEase.min.js** (7.0KB) - Curvas de animación personalizadas
- **InertiaPlugin.min.js** (7.3KB) - Física de inercia
- **Observer.min.js** (10KB) - Observador de eventos

### Otras Dependencias
- **jQuery 3.5.1** (89KB)
- **Outseta** - Sistema de membresía y autenticación
- **Plausible Analytics** - Analytics privacy-focused

## Características Principales

### Animaciones y Efectos
- ✨ **Text Splitting** - Animaciones de texto línea por línea con máscaras
- 📜 **Scroll Triggers** - Elementos animados al hacer scroll
- 🎯 **Custom Cursor** - Cursor personalizado con indicadores de arrastre
- 🎨 **Draggable Elements** - Elementos interactivos arrastrables
- 🔄 **Page Transitions** - Transiciones suaves con Barba.js
- 🎭 **Hover Effects** - Efectos 3D en botones y elementos
- 📱 **Responsive** - Sistema de escalado fluido

### Secciones del Sitio
1. **Hero** - Título animado con background dinámico
2. **Product Slider** - Carousel de productos con GSAP
3. **Pricing** - Cards de precios con efectos
4. **Showcase/Gallery** - Galería de trabajos
5. **About** - Sección sobre los fundadores
6. **Testimonials** - Testimonios de usuarios

### Sistema de Temas
- Soporte para temas **light/dark**
- Transiciones dinámicas de tema
- Atributos `data-theme-section`, `data-nav-theme`, `data-marketing-theme`

## Optimizaciones

- **Imágenes AVIF** - Formato moderno con alta compresión (59 archivos)
- **Código Minificado** - Todos los JS/CSS están minificados
- **Lazy Loading** - Carga diferida de imágenes
- **Prefetch** - Pre-carga de páginas con Barba.js
- **SEO Optimizado** - Structured data con Schema.org

## Breakpoints Responsive

- **Desktop**: min-width: 992px
- **Tablet**: max-width: 991px
- **Mobile Landscape**: max-width: 767px
- **Mobile Portrait**: max-width: 479px

## Variables CSS Principales

```css
--size-unit: 16px
--size-container-ideal: 1440px
--size-container-max: 1920px
--cubic-default: cubic-bezier(0.625, 0.05, 0, 1)
--duration-default: 0.6s
```

## Cómo Usar

1. Abre `index.html` en un navegador moderno
2. Para desarrollo, usa un servidor local (ej: Live Server, http-server)
3. Los efectos GSAP funcionarán automáticamente

**Nota**: Algunas funcionalidades requieren servidor web para funcionar correctamente (no solo abrir el archivo HTML):
- Barba.js page transitions
- Prefetch de páginas
- Algunas APIs de Outseta

## Comandos de Servidor Local

```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js (http-server)
npx http-server -p 8000

# Con PHP
php -S localhost:8000
```

Luego visita: `http://localhost:8000`

## Créditos

**Sitio Original**: [Osmo](https://www.osmo.supply/)
**Fundadores**: Dennis Snellenberg e Ilja van Eck
**Tecnologías**: Webflow, GSAP, Barba.js, Lenis

---

*Esta es una copia educativa del sitio original para estudio de animaciones y efectos web.*
