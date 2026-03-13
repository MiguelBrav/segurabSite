# SEGURAB - Desarrollo de Software

Este es el repositorio oficial del sitio web de **SEGURAB**, una empresa especializada en soluciones de desarrollo web personalizadas, diseño de APIs robustas y mentoría técnica.

El sitio ha sido migrado de Astro a una implementación moderna utilizando **Vite**, **Vanilla JavaScript** y **Tailwind CSS v4**.

## Características

- **Arquitectura Multi-página (MPA):** Rutas limpias para Inicio, Blog, Precios, Contacto y FAQ.
- **Diseño Premium:** Estética moderna con gradientes, micro-animaciones y glassmorphism.
- **Formulario de Contacto:** Integración con API externa para captura de leads.
- **Blog Dinámico:** Gestión de contenido a través de archivos de datos JS.
- **Optimización:** Carga ultrarrápida gracias al bundling eficiente de Vite.
- **Diseño Responsivo:** Adaptado para una experiencia perfecta en móviles y escritorio.

## Tecnologías

- **Core:** [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Lógica:** Vanilla JavaScript
- **Iconos:** SVGs personalizados y optimizados

## Inicio Rápido

### Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/segurabSite.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Producción

Para generar el bundle optimizado para producción:
```bash
npm run build
```

## Estructura del Proyecto

- `/public`: Activos estáticos (imágenes, logo, favicon).
- `/src`: Código fuente.
  - `/pages`: Componentes de cada página.
  - `blog-data.js`: Fuente de datos para el blog.
  - `components.js`: Componentes compartidos (Navbar, Footer).
  - `utils.js`: Funciones de utilidad (animaciones, formularios).
  - `style.css`: Estilos globales y tokens de diseño.

## Licencia

Copyright © 2026 - **Segurab**. Todos los derechos reservados.
