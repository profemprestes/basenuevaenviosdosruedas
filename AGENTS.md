# AGENTS.md — AI Agent Guidelines & Repository Architecture

This document provides instructions, technical conventions, and architectural context for AI agents working on this repository.

---

## 📌 Project Overview

**Project Name:** Envíos DosRuedas — Mensajería y Logística MDQ
**Type:** Web Application / E-Commerce Logistics Platform
**Target Market:** Mar del Plata (MDQ) & surrounding region (urban logistics, same-day delivery, Mercado Envíos Flex).

---

## 🛠️ Technical Stack & Framework Standards

- **Framework:** Next.js 15 (`app/` directory App Router).
- **React Version:** React 19 (Server Components by default, Client Components marked with `'use client'`).
- **Language:** TypeScript 5.x with strict type checking enabled.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`). Use utility classes and `clsx` / `tailwind-merge` (`cn` helper) for dynamic class combination.
- **Animations:** Motion (`motion/react` or `framer-motion` APIs) & Lucide icons (`lucide-react`).
- **AI Integration:** `@google/genai` (Google Gemini API SDK). Server-side or controlled client-side interactions.

---

## 📐 Architecture & Coding Conventions

### 1. Component Design & Patterns
- Place reusable UI components in `src/components/`.
- Use functional React components with explicit TypeScript interfaces/types for `props`.
- Always mark interactive or state-driven components with `'use client';` at the top of the file.
- Keep components modular, accessible, and self-contained.

### 2. Styling Rules
- Use Tailwind CSS v4 utility classes.
- Maintain responsive design (`sm:`, `md:`, `lg:`, `xl:`) across all components.
- Do not add inline custom CSS styles unless required for dynamic runtime values.

### 3. State Management & Hooks
- Place custom hooks in `src/hooks/`.
- Use React state hooks (`useState`, `useReducer`, `useCallback`, `useMemo`) for local state.

### 4. Code Quality & Formatting
- Follow ESLint 9 rules configured in `eslint.config.mjs` and `.eslintrc.json`.
- Ensure clean code imports without unused variables or unresolved paths.
- Prefer explicit return types on utility functions in `src/lib/`.

---

## 🧪 Verification & Command Instructions

Whenever code changes are made, run the following verification steps:

1. **Linting Check:**
   ```bash
   npm run lint
   ```
2. **Type Checking & Production Build:**
   ```bash
   npm run build
   ```

---

## 🔒 Safety & Best Practices for AI Agents

1. **Never commit hardcoded secrets or API keys.** Secrets must be loaded via `process.env`.
2. **Never modify generated build directories** such as `.next/`, `dist/`, or `out/`. Modify source code in `src/`.
3. **Always verify modified files** using read-only tools to confirm accurate edits before marking tasks complete.
4. **Maintain UI/UX consistency** with existing brand colors (purple `#7C3AED` / primary themes) and layout structures.
