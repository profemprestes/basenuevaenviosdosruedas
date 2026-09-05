# Envíos DosRuedas — Mensajería y Logística MDQ

Plataforma web oficial de **Envíos DosRuedas**, la solución líder en logística urbana, mensajería express y entregas de última milla para e-commerce en Mar del Plata y zonas de influencia.

---

## 🚀 Características Principales

- **Cotizador Express e Interactivo:** Simulación de envíos en tiempo real con integración directa a WhatsApp para atención inmediata.
- **Especialización Mercado Envíos Flex:** Flujo optimizado para vendedores de Mercado Libre y e-commerce locales.
- **Ficha Técnica & Modales Interactivos:** Visualización detallada de servicios, zonas de cobertura y capacidades operativas.
- **Sección Bento Grid & Métricas:** Métricas de rendimiento, testimonios reales e indicadores de calidad de servicio.
- **Diseño Responsivo y Moderno:** Interfaz estilizada con animación fluida utilizando Tailwind CSS v4 y Framer Motion (Motion).
- **Integración con IA (Google Gemini API):** Funcionalidades impulsadas por inteligencia artificial para asistencia y cálculo logístico.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React Server Components & Client Components)
- **Biblioteca UI:** [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript 5](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` + `tw-animate-css`
- **Iconos y Animaciones:** [Lucide React](https://lucide.dev/) & [Motion](https://motion.dev/)
- **Integración IA:** `@google/genai` (SDK Oficial de Google Gemini)
- **Formularios & Validación:** `react-hook-form` con `@hookform/resolvers`
- **Calidad de Código:** ESLint 9

---

## 📁 Estructura del Proyecto

```text
├── metadata.json           # Metadatos del applet / proyecto
├── next.config.ts          # Configuración de Next.js
├── package.json            # Dependencias y scripts de NPM
├── postcss.config.mjs      # Configuración de PostCSS
├── tsconfig.json           # Configuración de TypeScript
├── public/                 # Recursos estáticos (imágenes, favicons, logos)
└── src/
    ├── app/                # Next.js App Router (Páginas, Layouts, Estilos Globales)
    │   ├── globals.css     # Configuración de Tailwind CSS y estilos globales
    │   ├── layout.tsx      # Layout principal de la aplicación
    │   └── page.tsx        # Landing Page principal
    ├── components/         # Componentes React (Navbar, Hero, Modales, Secciones)
    ├── hooks/              # Custom Hooks reutilizables
    └── lib/                # Utilidades, asistentes de IA y configuraciones
```

---

## ⚡ Instalación y Configuración

### Requisitos Previos

- **Node.js:** `>= 20.0.0`
- **NPM** o **PNPM / Yarn / Bun**

### Pasos de Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd ai-studio-applet
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Copia el archivo `.env.example` a `.env.local` y asigna tus credenciales:

   ```bash
   cp .env.example .env.local
   ```

   Variables requeridas:

   ```env
   GEMINI_API_KEY="TU_CLAVE_API_DE_GEMINI"
   APP_URL="http://localhost:3000"
   ```

4. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## 📜 Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes comandos:

- `npm run dev`: Inicia el servidor de desarrollo en modo caliente (Hot Reloading).
- `npm run build`: Compila la aplicación optimizada para producción.
- `npm run start`: Inicia el servidor en modo producción a partir de la build generada.
- `npm run lint`: Ejecuta el linter ESLint para validar la calidad del código.
- `npm run clean`: Limpia el cache de Next.js (`.next`).

---

## 🛡️ Licencia y Derechos

© Envíos DosRuedas — Todos los derechos reservados.
