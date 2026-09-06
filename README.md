# 🚴 Envíos DosRuedas — Mensajería y Logística en Mar del Plata (MDQ)

Plataforma web oficial y portal interactivo de **Envíos DosRuedas**, la empresa líder en soluciones de mensajería urbana, entregas express en el día (Same-Day Delivery) y logística de última milla optimizada para e-commerce y comercios locales en **Mar del Plata y zonas aledañas**.

---

## 📋 Descripción del Servicio

**Envíos DosRuedas** conecta e-commerce, locales gastronómicos, comercios tradicionales y usuarios particulares con un servicio de cadetería y logística eficiente, transparente y confiable.

### Principales Soluciones:
- ⚡ **Envíos Express e Inmediatos:** Mensajería urbana puerta a puerta en tiempo récord.
- 📦 **Mercado Envíos Flex (ML Flex):** Solución homologada para vendedores de Mercado Libre con recolección diaria y entregas garantizadas en el día.
- 🛍️ **Logística de Última Milla para E-Commerce:** Tarifas corporativas, entregas programadas y logística inversa.
- 🧮 **Cotizador Interactivo en Tiempo Real:** Cálculo instantáneo de envíos con canal directo a WhatsApp para coordinación inmediata.
- 🤖 **Asistente Inteligente Integrado:** Integración con Google Gemini AI para asesoramiento logístico adaptado.

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
|---|---|
| **Framework Web** | [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components) |
| **Librería UI** | [React 19](https://react.dev/) |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Motor de Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` |
| **Animaciones & UI** | [Motion](https://motion.dev/) & [Lucide React](https://lucide.dev/) |
| **Formularios & Validación** | `react-hook-form` + `@hookform/resolvers` |
| **Inteligencia Artificial** | `@google/genai` (SDK Oficial de Google Gemini) |
| **Calidad de Código** | ESLint 9 |

---

## 📁 Estructura del Proyecto

```text
├── public/                 # Recursos estáticos (imágenes, logos, favicons)
├── src/
│   ├── app/                # Rutas y páginas de Next.js (App Router)
│   │   ├── globals.css     # Estilos globales y configuración de Tailwind CSS v4
│   │   ├── layout.tsx      # Layout principal con metadatos de SEO
│   │   └── page.tsx        # Página de inicio (Landing Page)
│   ├── components/         # Componentes React reutilizables
│   │   ├── ContactQuoteSection.tsx     # Cotizador interactivo y formulario
│   │   ├── EcommerceGrowthSection.tsx  # Beneficios para e-commerce
│   │   ├── HeroSection.tsx             # Sección principal con llamadas a la acción
│   │   ├── MetricsBentoSection.tsx     # Bento grid con métricas clave
│   │   └── ...
│   ├── hooks/              # Custom React Hooks
│   ├── lib/                # Configuración, constantes, utilidades y servicios de IA
│   │   ├── constants/      # Zonas de cobertura, servicios y tarifas
│   │   ├── domain/         # Generador de enlaces y formato de mensajes para WhatsApp
│   │   └── utils.ts        # Helper para concatenación de clases Tailwind (`cn`)
│   └── types/              # Definiciones e interfaces TypeScript
├── metadata.json           # Configuración del applet / proyecto
├── next.config.ts          # Configuración de Next.js
├── package.json            # Scripts e historia de dependencias NPM
├── postcss.config.mjs      # Configuración PostCSS 8
└── tsconfig.json           # Configuración de TypeScript (`@/*` alias)
```

---

## 🚀 Guía de Instalación y Ejecución

### Requisitos Previos

- **Node.js:** `>= 20.0.0`
- **Gestor de paquetes:** `pnpm` (`npm install -g pnpm` o vía `corepack enable`).

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/envios-dosruedas.git
cd envios-dosruedas
```

### 2. Instalar Dependencias

```bash
pnpm install
```

### 3. Configurar Variables de Entorno

Copia el archivo `.env.example` para crear tu entorno local `.env.local`:

```bash
cp .env.example .env.local
```

Asegúrate de definir las variables correspondientes en `.env.local`:

```env
GEMINI_API_KEY="tu_clave_api_gemini_aqui"
APP_URL="http://localhost:3000"
```

### 4. Ejecutar en Entorno de Desarrollo

```bash
pnpm dev
```

Navega a [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en ejecución.

---

## 📦 Compilación y Despliegue

### Construcción para Producción

Para compilar y validar la aplicación lista para producción:

```bash
pnpm build
```

### Probar Servidor de Producción Localmente

```bash
pnpm start
```

### Despliegue (Deployment)

La plataforma está optimizada para desplegarse sin contratiempos en plataformas como **Vercel**, **Netlify**, **Cloud Run** o **Render**:

1. Vincula el repositorio a tu proveedor de hosting.
2. Agrega las variables de entorno (`GEMINI_API_KEY`, `APP_URL`, etc.) en el panel de administración de tu plataforma de hosting.
3. El comando de build estándar es `pnpm build` y el directorio de salida por defecto es `.next`.

---

## 📜 Scripts PNPM Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo en modo Hot-Reloading.
- `pnpm build`: Ejecuta la verificación de tipos y compila la app para producción.
- `pnpm start`: Inicia la aplicación previamente compilada.
- `pnpm lint`: Analiza el código buscando posibles errores con ESLint.
- `pnpm clean`: Limpia los artefactos generados en la carpeta `.next`.

---

## 📄 Licencia y Contacto

© **Envíos DosRuedas MDQ** — Todos los derechos reservados.
- 📍 **Ubicación:** Mar del Plata, Provincia de Buenos Aires, Argentina.
- 📧 **Email:** matiascejas@enviosdosruedas.com
- 💬 **WhatsApp Directo:** [+54 9 223 660-2699](https://wa.me/5492236602699)
