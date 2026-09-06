# Design System: Envíos DosRuedas (Logística Urbana MDQ)

> **Version:** 2.0.0  
> **Status:** Production-Ready & Modular  
> **Framework:** Next.js 15 (App Router), React 19, Tailwind CSS v4, TypeScript Strict Mode  
> **Accessibility Target:** WCAG 2.1 Level AA Compliance  

---

## 1. Vision & Core Philosophy

**Envíos DosRuedas** presents an energetic, high-velocity urban logistics visual language calibrated for Mar del Plata's fast-moving commercial, retail, and e-commerce ecosystem. The aesthetic balances high-contrast industrial precision with trustworthy corporate clarity and operational real-time feedback.

```
Industrial Clarity  ───►  High-Velocity Speed  ───►  Empathetic Local Trust
(Structured Bento)        (Signal Yellow / Blue)      (Human Touch & Real SLAs)
```

### Core Design Metrics
- **Density:** `6/10` (Daily App Balanced) — Spacious layouts with generous touch targets, well-padded cards, and uncluttered micro-data zones.
- **Variance:** `7/10` (Offset Asymmetric Bento) — Dynamic asymmetric splits (7/5 Hero, 6/6 Bento, 4-column carousel) that eliminate monotony.
- **Motion:** `6/10` (Tactile Responsive Transitions) — Fast spring-like micro-interactions (`200ms–300ms`), pulsating status beacons, and active luminescence on conversion triggers.
- **Mood:** Confident, electric, and rigorously dependable. Deep Navy and Brand Blue establish corporate solidity, while Signal Yellow and Live Dispatch Emerald drive immediate user action and reassurance.

---

## 2. Design Tokens (W3C Specification)

Design tokens represent the single source of truth for the visual parameters across the application.

### 2.1 Color Tokens

#### Primitive Colors
```json
{
  "color": {
    "primitive": {
      "blue": {
        "50": "#eff6ff",
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#0C59F2",
        "700": "#0736ad",
        "800": "#032a87",
        "900": "#002273",
        "950": "#09132E"
      },
      "yellow": {
        "400": "#faee28",
        "500": "#F2E40A",
        "600": "#d8cb05"
      },
      "emerald": {
        "400": "#34d399",
        "500": "#10b981",
        "600": "#25D366"
      },
      "amber": {
        "400": "#fbbf24",
        "500": "#f59e0b",
        "600": "#d97706"
      },
      "slate": {
        "50": "#f8fafc",
        "100": "#f1f5f9",
        "200": "#e2e8f0",
        "300": "#cbd5e1",
        "400": "#94a3b8",
        "500": "#64748b",
        "600": "#475569",
        "700": "#334155",
        "800": "#1e293b",
        "900": "#0f172a",
        "950": "#191b24"
      },
      "white": "#FFFFFF"
    }
  }
}
```

#### Semantic Color Mappings & Contrast Ratios
| Token | CSS Variable / Tailwind | Hex Value | Role & Usage | WCAG AA Contrast |
|---|---|---|---|---|
| `brand.primary` | `--color-brand-blue` | `#0C59F2` | Hero background, primary headlines, active states | 4.8:1 on White |
| `brand.secondary` | `--color-brand-yellow` | `#F2E40A` | Conversion CTAs, pill badges, active tabs | 11.2:1 with `#002273` |
| `brand.darkAnchor` | `--color-dark-blue` | `#002273` | Button text on yellow, dark containers, headers | 12.8:1 on White |
| `brand.midnight` | `--color-midnight-abyss` | `#09132E` | Master footer, deep bento panels, backdrop | 16.5:1 on White |
| `feedback.dispatch` | `--color-dispatch-green` | `#25D366` | Live WhatsApp triggers, confirmed delivery | 3.2:1 (Graphics/Pills) |
| `feedback.priority` | `--color-priority-amber` | `#F59E0B` | Cut-off time warnings, critical rush tags | 3.5:1 (Pill backgrounds) |
| `surface.canvas` | `--color-brand-white` | `#FFFFFF` | Primary viewport background, card interiors | Canvas Base |
| `surface.subtle` | `bg-slate-50` | `#F8FAFC` | Input backgrounds, light bento feature cards | Subtle Base |
| `text.primary` | `text-slate-900` | `#191B24` | Primary body and headline text on light canvas | 15.1:1 on White |
| `text.secondary` | `text-slate-600` | `#475569` | Descriptions, metadata, secondary helper copy | 5.3:1 on White |
| `text.inverse` | `text-white` | `#FFFFFF` | Text on `#0C59F2` and `#002273` backgrounds | 4.8:1 on `#0C59F2` |

---

### 2.2 Typography Tokens

```json
{
  "typography": {
    "fontFamily": {
      "display": "var(--font-anton), 'Anton', Impact, sans-serif",
      "action": "var(--font-bebas), 'Bebas Neue', sans-serif",
      "body": "var(--font-outfit), 'Outfit', sans-serif",
      "mono": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    },
    "scale": {
      "display-hero": { "size": "4.75rem", "px": "76px", "lineHeight": "0.95", "tracking": "-0.02em" },
      "display-h1": { "size": "3.75rem", "px": "60px", "lineHeight": "1.0", "tracking": "-0.02em" },
      "display-h2": { "size": "3rem", "px": "48px", "lineHeight": "1.0", "tracking": "-0.02em" },
      "display-h3": { "size": "2rem", "px": "32px", "lineHeight": "1.1", "tracking": "-0.01em" },
      "action-xl": { "size": "1.5rem", "px": "24px", "lineHeight": "1.2", "tracking": "0.05em" },
      "action-lg": { "size": "1.25rem", "px": "20px", "lineHeight": "1.2", "tracking": "0.05em" },
      "action-md": { "size": "1.125rem", "px": "18px", "lineHeight": "1.2", "tracking": "0.05em" },
      "action-sm": { "size": "0.875rem", "px": "14px", "lineHeight": "1.2", "tracking": "0.05em" },
      "body-lg": { "size": "1.125rem", "px": "18px", "lineHeight": "1.65", "tracking": "0" },
      "body-base": { "size": "1rem", "px": "16px", "lineHeight": "1.6", "tracking": "0" },
      "body-sm": { "size": "0.875rem", "px": "14px", "lineHeight": "1.5", "tracking": "0" },
      "body-xs": { "size": "0.75rem", "px": "12px", "lineHeight": "1.4", "tracking": "0" }
    }
  }
}
```

---

### 2.3 Spacing & Layout Tokens (8pt Grid with 4pt Micro-steps)

```json
{
  "spacing": {
    "0.5": "0.125rem",  // 2px
    "1": "0.25rem",     // 4px
    "1.5": "0.375rem",  // 6px
    "2": "0.5rem",      // 8px
    "3": "0.75rem",     // 12px
    "4": "1rem",        // 16px
    "5": "1.25rem",     // 20px
    "6": "1.5rem",      // 24px
    "8": "2rem",        // 32px
    "10": "2.5rem",     // 40px
    "12": "3rem",       // 48px
    "16": "4rem",       // 64px
    "20": "5rem",       // 80px
    "24": "6rem"        // 96px
  }
}
```

---

### 2.4 Radii & Shadow Tokens

```json
{
  "borderRadius": {
    "sm": "0.5rem",     // 8px
    "md": "0.75rem",    // 12px
    "lg": "1rem",       // 16px
    "xl": "1.25rem",    // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "2rem",      // 32px
    "full": "9999px"    // Pill buttons & badges
  },
  "shadows": {
    "card-sm": "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
    "card-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.08)",
    "card-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.08)",
    "glow-yellow": "0 0 24px -2px rgba(242, 228, 10, 0.65)",
    "glow-yellow-hover": "0 0 32px 2px rgba(242, 228, 10, 0.85)",
    "glow-blue": "0 16px 36px -8px rgba(12, 89, 242, 0.35)",
    "glow-green": "0 0 20px -2px rgba(37, 211, 102, 0.45)"
  }
}
```

---

## 3. Atomic Component Architecture

The project is structured according to Atomic Design methodology, enabling maximum reusability, strict TypeScript contracts, and separation of UI from domain content.

```
Atoms (Buttons, Badges, Icons, Inputs)
  └── Molecules (FormField, StatCard, ServicePill, NavDropdown)
        └── Organisms (Navbar, HeroSection, ServicesCarousel, MetricsBento, Footer)
              └── Templates & Pages (Landing Page Layout, Interactive Modals)
```

### 3.1 Atoms (Primitives)

#### `Button`
- **Primary Action (Yellow Pill):** `bg-[#F2E40A] text-[#002273] font-bebas text-xl sm:text-2xl uppercase rounded-full px-8 py-3.5 glow-yellow hover:scale-[1.03] active:scale-[0.98]`
- **WhatsApp Action (Green Pill):** `bg-[#25D366] text-white font-bebas text-xl uppercase rounded-full px-7 py-3.5 glow-green hover:scale-[1.03]`
- **Secondary Outlined:** `bg-[#032a87]/60 hover:bg-[#032a87] text-white border border-blue-300/30 font-bebas text-xl uppercase rounded-full px-7 py-3.5`
- **Ghost / Back Action:** `text-slate-600 hover:bg-slate-200 font-bebas text-base uppercase rounded-full px-5 py-2.5`

#### `Badge` / `Pill`
- **Signal Pulse Badge:** `inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2E40A] text-[#002273] font-bebas text-sm font-bold shadow-sm`
- **Category Badge Dark:** `px-3.5 py-1 rounded-full bg-blue-950 border border-blue-400/30 text-blue-200 font-bebas text-xs tracking-wider uppercase`
- **Category Badge Light:** `px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0C59F2] font-bebas text-xs tracking-wider uppercase`

#### `InputField` & `SelectField`
- **Geometry:** `w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/70 border border-slate-200 text-slate-900 font-outfit text-base`
- **Focus State:** `focus:outline-none focus:ring-2 focus:ring-[#0C59F2] focus:border-transparent`

---

### 3.2 Molecules

- **`FormField`:** Icon prefix + Label in `font-bebas text-sm uppercase text-[#0C59F2]` + Input/Select + Accessibility helper text / validation state.
- **`ServicePill`:** 3-slot specification matrix (`p-2 rounded-xl bg-[#002273]/10 flex flex-col items-center justify-center`).
- **`ReviewCard`:** Header (5-star rating + Badge) + Title in `Anton` + Body quote in `Outfit` + Author footer (Avatar with initials + verified Local Guide badge).
- **`MetricStatCard`:** Icon badge + Numeric callout in `Anton` (`text-6xl`) + Descriptive uppercase label in `Bebas Neue`.

---

### 3.3 Organisms

| Organism | Primary Container | Role | Key Interactions |
|---|---|---|---|
| **`Navbar`** | Sticky `h-20 bg-[#0C59F2] border-b border-blue-400/20` | Brand navigation, instant call anchor, quote trigger | Dropdown on hover/focus, mobile drawer |
| **`HeroSection`** | `bg-[#0C59F2] bg-tech-grid py-16 lg:py-20` | Core value proposition, 3-metric highlights, live isometric routing card | Cotizá Express CTA, scroll anchor |
| **`MetricsBentoSection`** | `bg-[#FFFFFF] py-20 lg:py-28` | Local trust metrics (+50K deliveries, 0 lost packages, +50 merchants) | Bento scale hover |
| **`EcommerceGrowthSection`** | `bg-[#0C59F2] bg-tech-grid py-20 lg:py-28` | E-commerce plans, MercadoLibre Flex highlight, corporate solutions | Ficha técnica trigger, local brands ticker |
| **`ServicesCarouselSection`**| `bg-[#0C59F2] bg-tech-grid py-20 lg:py-28` | 4 core services showcase (Express, LowCost, Flex, 3PL) | Auto-rotation toggle, prev/next, dot jump |
| **`IndustriesShowcaseSection`** | `bg-[#FFFFFF] py-20 lg:py-28` | 6 industrial sectors (E-commerce, Parts, Fashion, Legal, Medical, Freight) | Tab filter bar, counter step navigation |
| **`TestimonialsSection`** | `bg-[#FFFFFF] py-20 lg:py-28` | 15 verified Google Maps reviews, 5-star rating breakdown | Category filter tabs, carousel pagination |
| **`ContactQuoteSection`** | `bg-[#0C59F2] bg-tech-grid py-20 lg:py-28` | Lead generation form with direct WhatsApp dispatch routing | Real-time validation, WhatsApp message generator |
| **`PreFooterAndFooter`** | `bg-[#002273] bg-tech-grid pt-12 pb-8` | Active dispatch callout, operational schedules, verified 3PL partner badge | Scroll to top, direct phone and WhatsApp links |
| **`ExpressQuoteModal`** | `fixed backdrop-blur-sm bg-slate-950/80` | Real-time distance and weight algorithm pricing calculator | ESC key dismiss, backdrop click dismiss, live price preview |
| **`FichaTecnicaModal`** | `fixed backdrop-blur-sm bg-slate-950/80` | Detailed MercadoLibre Flex SLAs (cut-off 14:00 hs, free local pickup) | ESC key dismiss, configure account CTA |

---

## 4. Accessibility (WCAG 2.1 Level AA)

1. **Contrast Compliance:** All text elements exceed the 4.5:1 ratio for normal text and 3:1 for large display titles.
2. **Keyboard Navigation:**
   - Interactive elements have explicit `:focus-visible` styling (`outline: 2px solid #F2E40A; outline-offset: 2px`).
   - Modals trap ESC key events and provide explicit close triggers.
3. **Screen Reader Optimization:**
   - Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
   - Appropriate ARIA roles: `aria-modal="true"`, `aria-expanded`, `aria-label`, `aria-live="polite"`.
4. **Touch Target Dimensions:**
   - Every clickable button, navigation tab, and select dropdown meets or exceeds the minimum `44px x 44px` physical tap area.

---

## 5. Anti-Patterns & Quality Guardrails

- ❌ **No Emojis:** Use authentic Lucide SVG vector icons exclusively (`Package`, `Zap`, `ShieldCheck`, `Clock`, `Truck`, `ArrowRight`, `MapPin`, `Phone`, `Mail`).
- ❌ **No Pure Black:** `#000000` is banned. `#191B24`, `#0F172A`, or `#002273` provide superior optical depth.
- ❌ **No AI Neon Purple / Cyberpunk Gradients:** Strictly maintain the Brand Blue (`#0C59F2`) and Signal Yellow (`#F2E40A`) industrial identity.
- ❌ **No Hardcoded Texts in Components:** All copywriting and metadata must be consumed from `src/content/` (`site.ts`, `services.ts`, `home.ts`, `quote.ts`).
- ❌ **No Fabricated / Sci-Fi SLA Claims:** Maintain authentic Mar del Plata geographical coverage, accurate physical addresses (*"Friuli 1972, Mar del Plata"*), and genuine local customer reviews.
