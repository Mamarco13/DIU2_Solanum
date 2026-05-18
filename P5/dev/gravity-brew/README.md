# Gravity Brew — Pantallas y especificaciones

Este documento describe las pantallas principales de la aplicación y sus especificaciones de diseño/estructura.

## Pantallas

- **Splash** (`screen--splash`)
  - Propósito: pantalla inicial con el logo; al hacer click inicia la animación hacia `home`.
  - Estructura: `<section className="screen screen--splash">` que contiene `.screen__content` y `.brand`.
  - Especificaciones:
    - Ocupa el viewport inicial.
    - Transiciones controladas por la clase `app--splash-animate`.

- **Home** (`screen--home`)
  - Propósito: pantalla principal con contenido breve y botón de navegación a explorar.
  - Estructura: `<section className="screen screen--home">` con `.home` y `.home__content`.
  - Elementos clave:
    - `.home__logo-large` imagen de marca.
    - `h2`, `p` y botón `Explorar →` (botón con clase `btn btn--primary`).
  - Comportamiento:
    - Centrada y sin scroll (la app está fijada al viewport).

- **Explore** (`screen--explore`) — *Nueva pantalla añadida*
  - Propósito: pantalla de exploración detallada que simula una vista móvil dentro de un mockup.
  - Estructura: `<section className="screen screen--explore">` que contiene `.explore` → `.explore__mockup` → `.phone` → `.phone__inner`.
  - Elementos dentro de `.phone__inner`:
    - `.explore__header` con logo.
    - `.explore__hero` con título y subtítulo.
    - `.explore__quick`: grid de acciones rápidas (Reservar, Eventos, Menú, Perfil).
    - `.explore__recommended`: lista de tarjetas recomendadas (`.rec-card`).
  - Estilos principales: fondo unificado con gradientes en `app`, el mockup tiene borde redondeado y `phone__inner` usa un fondo oscuro y esquinas redondeadas.

## Archivos modificados

- `src/App.jsx`: Añadida la lógica para mostrar la pantalla `explore` y controlador del botón de `Explorar`.
- `src/App.css`: Estilos añadidos para `.screen--explore`, `.explore`, `.phone` y sus subcomponentes.

## Cómo probar

1. Instala dependencias (si no están instaladas):

```bash
npm install
```

2. Ejecuta en modo desarrollo:

```bash
npm run dev
```

3. Abre la app, haz click en la splash para ir al `home`, y pulsa `Explorar →` para ver la nueva pantalla `Explore`.

- **Reserva** (`screen--reserve`) — *Nueva pantalla añadida*
  - Propósito: pantalla de reserva de mesa y selección de platos.
  - Estructura: `<section className="screen screen--reserve">` con `.reserve` y subcomponentes.
  - Elementos principales:
    - `.reserve__header` con logo y icono de notificaciones.
    - `.reserve__title` con título "Reserva" y descripción.
    - `.reserve__inputs` con campos de fecha, hora y número de personas.
    - `.reserve__plates` lista de platos seleccionables con controles `⊖ ⊕`.
    - `.reserve__summary` con contador de platos y total.
    - `.reserve__actions` con botones Cancelar y Confirmar reserva.
    - `.reserve__nav` barra de navegación inferior.
  - Acceso: desde el botón "Reservar" en la pantalla `Explore`.

- **Confirmación** (`screen--confirmation`) — *Nueva pantalla añadida*
  - Propósito: pantalla de confirmación que muestra el resumen de la reserva y platos seleccionados.
  - Estructura: `<section className="screen screen--confirmation">` con `.confirmation` y subcomponentes.
  - Elementos principales:
    - `.confirmation__header` con logo y título "Reserva Confirmada".
    - `.confirmation__details` con secciones de detalles de reserva (fecha, hora, personas) y platos seleccionados.
    - `.detail-section` que agrupa la información en cards.
    - `.summary-plate` lista de platos con cantidades y precios.
    - `.confirmation__total` con el total de la reserva.
    - `.confirmation__actions` con botones Volver y Finalizar.
  - Acceso: desde el botón "Confirmar reserva" en la pantalla `Reserva`.

- **Menú** (`screen--menu`) — *Nueva pantalla añadida*
  - Propósito: pantalla para explorar los productos de la cafetería y visualizar bebidas/platos destacados.
  - Estructura: `<section className="screen screen--menu">` con `.menu` y subcomponentes.
  - Elementos principales:
    - `.menu__header` con logo.
    - `.menu__title` y buscador (`.menu__search`).
    - Filtro de alérgenos funcional (`.menu__filters` con botones interactivos).
    - Lista de productos agrupada por categorías (`.menu__list` y `.menu__category`).
    - Las tarjetas de producto (`.menu-item`) muestran imagen, nombre, precio, descripción y tags descriptivos.
    - Barra de navegación inferior (`.menu__nav`).
  - Datos: utiliza el nuevo archivo de datos `src/data/menu.js` para los platos de ejemplo.
  - Acceso: desde el botón "Menú" en la pantalla `Explore` o en la barra de navegación inferior.

---

Si quieres que la pantalla `Reserva` reproduzca exactamente la maqueta de Figma (con imágenes reales, animaciones y datos), puedo añadir componentes reutilizables y conectar con `src/data/products.js` para poblar los platos.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
