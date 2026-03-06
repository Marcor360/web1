# Payrolling Tech - Plataforma Corporativa

Sitio web corporativo de **Payrolling Tech** construido con tecnologías modernas para ofrecer soluciones integrales de capital humano en México. El proyecto está optimizado para SEO y rendimiento, utilizando una arquitectura basada en componentes reactivos y estilos utilitarios avanzados.

## 🚀 Tecnologías Principales

- **React 19**: Biblioteca principal para la interfaz de usuario.
- **Vite 7**: Herramienta de construcción ultra rápida para desarrollo y producción.
- **TypeScript**: Tipado estático para un desarrollo más robusto y mantenible.
- **Tailwind CSS v4**: Motor de estilos de última generación para un diseño responsivo y moderno.
- **React Router v7**: Gestión de rutas y navegación dinámica.
- **GSAP**: Animaciones fluidas y efectos de scroll (vía `ServicesSlider`).

## 📁 Estructura del Proyecto

```text
├── public/                # Recursos estáticos (imágenes, videos, _redirects)
├── src/
│   ├── assets/            # Estilos base y recursos procesados
│   ├── components/        # Componentes reutilizables (Header, Footer, Seo, etc.)
│   ├── pages/             # Vistas principales y subpáginas de servicios
│   │   ├── subpages/      # Páginas detalladas por servicio y Blog
│   │   └── walmart/       # Versiones personalizadas (ej. /wmc)
│   ├── seo.ts             # Configuración centralizada de metadatos y SEO
│   ├── App.tsx            # Definición de rutas y estructura principal
│   └── main.tsx           # Punto de entrada de la aplicación
├── vite.config.ts         # Configuración de Vite, plugins y proxies de API
└── tsconfig.json          # Configuración de TypeScript
```

## 🛠️ Servicios y Soluciones Documentadas

La plataforma cubre las principales líneas de negocio, cada una con su propia sección optimizada:

- **Nóminas**: Maquila y administración integral de nómina.
- **Reclutamiento**: Atracción y selección de talento especializado.
- **Vales**: Soluciones deducibles (Despensa, Gasolina, Gastos, Incentivos).
- **Beneficios**: Programas de retención y bienestar laboral.
- **NOM-035**: Consultoría y cumplimiento de bienestar organizacional.

## 🔍 Sistema de SEO y Metadatos

El proyecto utiliza un sistema centralizado de SEO definido en [`src/seo.ts`](src/seo.ts). Este archivo contiene:
- Títulos descriptivos y palabras clave por página.
- Descripciones optimizadas para motores de búsqueda.
- Integración automática en cada página mediante el componente `<Seo />`.

## 💻 Desarrollo Local

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Construir para producción:
   ```bash
   npm run build
   ```

## 🌐 Configuración de Proxy

Para el desarrollo local, Vite está configurado para redirigir las peticiones de API (ej. `/api/checkid`) evitando problemas de CORS. Consulta [`vite.config.ts`](vite.config.ts) para más detalles.

---


https://payrollindemo.netlify.app/
