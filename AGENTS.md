# AGENTS.md — AI Agent & Developer Guidelines for Envíos DosRuedas

This document outlines the architecture, coding conventions, technical standards, and operational workflows for AI agents and human developers working on the **Envíos DosRuedas** codebase.

---

## 📌 Project Overview

**Project Name:** Envíos DosRuedas — Mensajería Urbana y Logística MDQ
**Type:** Modern Web Application / E-Commerce Logistics Platform
**Target Market:** Mar del Plata (MDQ) and surrounding regions (same-day delivery, urban logistics, Mercado Envíos Flex integration, last-mile delivery).

---

## 🛠️ Explicit Technology Stack

| Layer / Tool | Technology / Version |
|---|---|
| **Framework** | Next.js 15 (App Router architecture) |
| **UI Library** | React 19 (Server Components default, Client Components with `'use client'`) |
| **Language** | TypeScript 5 (Strict Mode enabled) |
| **Styling & CSS** | Tailwind CSS v4 (`@tailwindcss/postcss`), PostCSS 8, `clsx`, `tailwind-merge` |
| **Animations & Icons** | Motion (`motion/react` / `framer-motion`), Lucide React (`lucide-react`) |
| **Forms & Validation** | `react-hook-form` + `@hookform/resolvers` |
| **AI Integration** | `@google/genai` (Google Gemini API Official SDK) |
| **Linting & Quality** | ESLint 9 (`eslint-config-next`) |

---

## 📐 Architecture & Directory Structure

```text
ai-studio-applet/
├── public/                 # Static assets (logos, images, icons, favicons)
├── src/
│   ├── app/                # Next.js App Router (Layouts, Pages, Global Styles)
│   │   ├── globals.css     # Tailwind v4 import and global CSS variables
│   │   ├── layout.tsx      # Root layout & Metadata configuration
│   │   └── page.tsx        # Main Landing Page component
│   ├── components/         # Modular React components (Hero, Features, Calculator, Bento, Modals)
│   ├── hooks/              # Reusable custom React hooks
│   ├── lib/                # Domain logic, helpers, constants, and AI agent services
│   │   ├── constants/      # Static configuration data (rates, coverage zones, contact details)
│   │   ├── domain/         # Domain business logic (e.g., WhatsApp message generator)
│   │   └── utils.ts        # Helper functions (e.g., `cn` for Tailwind class merging)
│   └── types/              # TypeScript definitions and interfaces
├── metadata.json           # Applet capabilities and metadata configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Package dependencies and script definitions
├── postcss.config.mjs      # PostCSS configuration for Tailwind v4
└── tsconfig.json           # TypeScript configuration with `@/*` path alias
```

---

## 📐 Coding Conventions & Guidelines

### 1. React & Component Patterns
- **Server Components First:** Default to React Server Components (RSC) unless interactivity or state requires Client Components.
- **Client Directives:** Always place `'use client';` at the top of files that use React hooks (`useState`, `useEffect`, `useCallback`) or browser events.
- **Component Design:** Modular, self-contained, and typed with explicit TypeScript interfaces for `props`.
- **Path Aliases:** Always use `@/*` for imports mapping to `./src/*` (e.g., `import { cn } from '@/lib/utils'`).

### 2. Styling Rules (Tailwind CSS v4)
- Use Tailwind CSS v4 utility classes.
- Use the `cn(...)` utility helper (`clsx` + `tailwind-merge`) for conditional or dynamic class merging.
- Ensure full responsiveness (`sm:`, `md:`, `lg:`, `xl:`) across mobile, tablet, and desktop viewports.
- Maintain brand color consistency: Brand Blue (`#0C59F2`), Brand Yellow (`#F2E40A`), Dark Blue (`#002273`), and pure white backgrounds (`#FFFFFF`).

### 3. State Management & Side Effects
- Keep local state close to the components that require it.
- Store static constants and reusable logic in `src/lib/constants/` or `src/lib/domain/`.

### 4. AI & External Service Integrations
- All Gemini API calls (`@google/genai`) must handle environment keys safely (`process.env.GEMINI_API_KEY`).
- Never hardcode secrets, passwords, or API keys directly in source code.

---

## 🧪 Verification & QA Workflow

Before committing or submitting any change, run the following verification pipeline with **pnpm**:

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```
2. **Lint Check:**
   ```bash
   pnpm lint
   ```
3. **Type Check & Production Build:**
   ```bash
   pnpm build
   ```

All builds and lint checks must complete with zero errors.

---

## 🔒 Security & Environment Rules

1. Secrets must always be referenced via `process.env`.
2. Do not edit build artifacts or auto-generated folders (`.next/`, `node_modules/`, `dist/`).
3. Always verify changes using read-only tools or test execution before marking steps complete.
