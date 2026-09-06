# Design System: Envíos DosRuedas (Logística Urbana MDQ)

## 1. Visual Theme & Atmosphere
Envíos DosRuedas presents an energetic, high-velocity urban logistics atmosphere calibrated for Mar del Plata's fast-moving commercial and e-commerce ecosystem. The aesthetic balances high-contrast industrial precision with trustworthy corporate clarity and operational real-time feedback.

- **Density:** 6/10 (Daily App Balanced) — Content is spacious with generous internal padding, structured cards, and uncluttered micro-data zones.
- **Variance:** 7/10 (Offset Asymmetric Bento) — Dynamic asymmetric splits, multi-span Bento grids, and high-impact visual anchors avoid monotonous uniformity.
- **Motion:** 6/10 (Fluid High-Voltage Transitions) — Tactile spring-like button states, pulsating signal badges, smooth carousel track sliding, and subtle glow highlights.
- **Mood Philosophy:** Confident, electric, and impeccably reliable. Bold primary blues symbolize institutional solidity, while signal yellows, operational emeralds, and technical slates project instant speed, live responsiveness, and urban logistics dynamism.

---

## 2. Color Palette & Roles

The color architecture is built around a comprehensive, functional hierarchy that goes far beyond a flat 3-color scheme. It includes brand anchors, rich neutral gradations, and dedicated operational semantic states for logistics workflows.

### A. Core Brand Identity
- **Brand Electric Blue** (`#0C59F2` / `var(--color-brand-blue)`) — Primary hero canvases, main brand headings, prominent action anchors, active navigation states, and primary brand borders.
- **Deep Navy Anchor** (`#002273` / `var(--color-dark-blue)`) — Structural contrast, primary button typography on yellow backgrounds, dark container fills, and scrollbar tracks.
- **Midnight Abyss** (`#09132E`) — Deep nocturnal blue-slate base for footers, high-contrast bento panels, and deep elevation containers.
- **Signal High-Voltage Yellow** (`#F2E40A` / `var(--color-brand-yellow)`) — Primary high-energy accent. Used for primary conversion CTAs, notification badges, active pill indicators, highlight borders, and warning/emphasis states.

### B. Operational Semantic Palette (Logistics & Status Indicators)
- **Live Dispatch Emerald / WhatsApp Green** (`#25D366` / `#10B981`) — Instant WhatsApp quote triggers, verified flex dispatch status, successful operational badge, online fleet indicator dot, and real-time delivery confirmations.
- **Priority Amber / Express Dispatch** (`#F59E0B` / `#D97706`) — Same-day urgent cutoff warnings, real-time alert badges, expedited service tags, and high-priority transit notifications.
- **Sky Frost / Soft Blue Surface** (`#EBF2FE` / `#DBEAFE`) — Subdued card fills, active tab pills, badge backgrounds on light surfaces, and subtle interactive hover states.
- **Technical Route Cyan** (`#00C4DF` / `rgba(0, 196, 223, 0.4)`) — Micro pinpoint beacons on tracking pins, route polyline accents, and tech-grid intersections.

### C. Neutral Surfaces & Hierarchical Slates
- **Pure Canvas White** (`#FFFFFF` / `var(--color-brand-bg)`) — Primary body background, card interior fill, and clean content canvases.
- **Light Ice Slate** (`#F8FAFC` / Slate-50) — Secondary container backgrounds, input field backgrounds, and testimonial quote cards.
- **Structure Slate Base** (`#F1F5F9` / Slate-100) — Subdued borders, table headers, and disabled control fills.
- **Deep Charcoal Ink** (`#0F172A` / `#191B24`) — Primary body text and deep contrast headlines against white backgrounds (Zinc-950 depth).
- **Muted Steel Slate** (`#475569` / Slate-600 & `#64748B` / Slate-500) — Subtitles, secondary descriptions, metadata labels, and helper copy.
- **Whisper Border Light** (`rgba(12, 89, 242, 0.12)` & `rgba(226, 232, 240, 0.8)`) — Subtle structural dividers, card contours, and input outlines.
- **Whisper Border Dark** (`rgba(255, 255, 255, 0.15)` & `rgba(12, 89, 242, 0.25)`) — Card borders on blue technical backgrounds.

### Color Rules & Banned Patterns
- **Disciplined Accents:** Signal Yellow (`#F2E40A`) is the primary conversion highlight; Emerald (`#25D366`) and Amber (`#F59E0B`) are strictly semantic.
- **No AI Purple / Cyberpunk Gradients:** Strictly avoid generic AI purple-blue glows or holographic overlays.
- **No Pure Black:** `#000000` is never used for typography. `#191B24`, `#0F172A`, or `#002273` provides richer optical depth.

---

## 3. Typography Rules

A disciplined four-tier typographic hierarchy provides immediate brand recognition, speed perception, and effortless legibility.

### 1. Display & Headline Font: `Anton`
- **Variable:** `var(--font-anton)`
- **Role:** High-impact hero headlines, section master titles, and primary numerical metric callouts.
- **Styling:** `uppercase`, tight tracking (`tracking-tight` / `-0.02em`), tight line-height (`leading-[0.95]` to `leading-[1.05]`).
- **Application:** Always rendered in full uppercase with sharp letterforms. Communicates authority and power.

### 2. Subhead, Badges & CTA Font: `Bebas Neue`
- **Variable:** `var(--font-bebas)`
- **Role:** Pill badges, button text, service category headers, technical metric labels, and card sub-headers.
- **Styling:** `uppercase`, expanded tracking (`tracking-wider` / `0.05em`), condensed vertical stance.
- **Application:** Provides punchy, industrial, and athletic rhythm for interactive controls and rapid scanning.

### 3. Body & UI Font: `Outfit`
- **Variable:** `var(--font-outfit)`
- **Role:** Paragraphs, bullet descriptions, input text, dropdown items, tooltips, and modal dialogue.
- **Styling:** Geometric sans-serif, relaxed line-height (`leading-relaxed`), max-width 65 characters (`max-w-2xl` / `65ch`).
- **Application:** Clean, friendly, and exceptionally readable across mobile screens and desktop viewports.

### 4. Monospace Data Font: `System Monospace`
- **Stack:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Role:** Phone numbers, tracking codes, operational time-stamps, coordinates, and real-time delivery estimates.

### Typographic Anti-Patterns
- **Banned Fonts:** `Inter`, `Roboto` (generic AI default), `Arial`, `Times New Roman`, `Georgia`, `Garamond`.
- **No All-Caps Paragraphs:** Long body text must always be sentence case in `Outfit`.
- **No Excessive Gradient Text:** Avoid multi-color gradient headlines. Use solid white on blue, solid `#0C59F2` on white, or solid `#F2E40A` highlighted badges.

---

## 4. Component Stylings

### Buttons & Interactive Triggers
- **Primary CTA (Express / Conversion):**
  - **Fill:** Signal Yellow (`#F2E40A`), text Deep Navy (`#002273`), font `Bebas Neue` uppercase (`text-xl` to `text-2xl`).
  - **Geometry:** Pill shaped (`rounded-full`), generous padding (`px-8 py-3.5`).
  - **Shadow & Glow:** `.glow-yellow` (`0 0 24px -2px rgba(242, 228, 10, 0.65)`).
  - **Interaction:** `hover:scale-[1.03]`, `active:scale-[0.98]`, `hover:bg-[#faee28]`.
- **WhatsApp Live Action CTA:**
  - **Fill:** Emerald Green (`#25D366`), text White, font `Bebas Neue` uppercase (`text-xl`).
  - **Geometry:** Pill shaped (`rounded-full`), subtle green glow shadow (`0 0 20px -2px rgba(37, 211, 102, 0.4)`).
  - **Interaction:** `hover:scale-[1.03]`, `hover:bg-[#20bd5a]`.
- **Secondary CTA (Navigation / Info):**
  - **Fill:** Semi-transparent dark navy (`#032a87]/60`) or Sky Frost fill with `#0C59F2` text.
  - **Border:** 1px border (`border-blue-300/30` or `border-[#0C59F2]/30`).
  - **Interaction:** `hover:bg-[#032a87]`, `hover:scale-[1.02]`.
- **Ghost / Subtle Links:**
  - Outlined with subtle underline hover, icon slide animation on hover (`group-hover:translate-x-1`).

### Cards & Bento Boxes
- **Surface Elevation:** 
  - Standard cards: `bg-white`, border `border-slate-200/80` or `border-blue-100/60`, shadow `shadow-sm hover:shadow-md`.
  - Light Feature cards: `bg-[#F8FAFC]` or `bg-[#EBF2FE]/40`, border `border-blue-200/60`, subtle soft blue tint.
  - Dark Bento cards: `bg-[#0C59F2]`, `bg-[#002273]`, or `bg-[#09132E]` with `.bg-tech-grid`, glowing yellow accents, and rounded borders.
- **Corner Radii:** Generously curved (`rounded-2xl` to `rounded-3xl` / 16px–24px).
- **Internal Spacing:** Generous padding (`p-6` to `p-8` on desktop, `p-5` on mobile).

### Badges & Pill Tags
- **Signal Pulse Badges:** Pill-shaped (`rounded-full`), `bg-[#F2E40A]` o `bg-[#F2E40A]/20`, text `#002273`, `font-bebas uppercase tracking-wider`, paired with Lucide micro-icons (`Sparkles`, `Zap`, `ShieldCheck`).
- **Operational Status Badges:**
  - Verified Flex / Online: `bg-emerald-500/15 text-emerald-700 border border-emerald-500/30`.
  - Urgent Express: `bg-amber-500/15 text-amber-800 border border-amber-500/30`.
- **Status Indicator:** Glowing micro-dots (`w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse` o `#F2E40A`).

### Form Controls & Modals
- **Inputs:** Clean white/slate-50 background, label positioned above input in `font-bebas` or `font-outfit font-medium`, crisp border (`border-slate-200`), explicit focus ring (`focus:ring-2 focus:ring-[#0C59F2] focus:border-transparent`).
- **Modals:** Centered dialog, backdrop blur overlay (`backdrop-blur-md bg-black/60`), spring-scale entrance animation, explicit close button (`X`), sticky submit action.

---

## 5. Layout Principles

### Grid Architecture & Spacing
- **Container Constraint:** Centered layout container capped at `max-w-7xl` (`1280px`) with fluid lateral padding (`px-4 sm:px-6 lg:px-8`).
- **Hero Section Structure:** Asymmetric 12-column grid (`lg:grid-cols-12`). 7 columns for headline narrative and conversion CTAs, 5 columns for live interactive preview cards and floating trust elements.
- **Bento Grids:** Modular 2-to-4 column asymmetric arrangements with varying col-span and row-span to establish hierarchy.
- **Technical Grid Backgrounds:**
  - Dark Blue Hero Grid: `.bg-tech-grid` (32px x 32px grid con `rgba(255, 255, 255, 0.08)` líneas).
  - Light Surface Grid: `.bg-light-grid` (28px x 28px grid con `rgba(12, 89, 242, 0.05)` líneas).
- **Vertical Rhythm:** Controlled section gaps (`py-16 lg:py-24`), avoiding claustrophobic stacking while maintaining dense information delivery.

### Responsive Rules
- **Mobile (< 768px):** Strict single-column collapse (`grid-cols-1`). Horizontal scrollbars are forbidden. Hero headline scales down gracefully (`text-5xl sm:text-6xl`).
- **Tablet (768px – 1024px):** 2-column balanced layouts.
- **Desktop (≥ 1024px):** Full 12-column bento grids and split asymmetric viewports.
- **Touch Targets:** Minimum `44px x 44px` on all interactive links, modal buttons, and drawer controls.

---

## 6. Motion & Interaction

- **Spring-Feel Micro-Interactions:** Transition timings calibrated to `200ms–300ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **High-Voltage Glows:**
  - `.glow-yellow`: Ambient yellow luminescence on active primary triggers.
  - `.glow-yellow-hover`: Intensified glow on hover state.
  - `.glow-blue`: Diffused soft elevation under primary interactive widgets.
- **Perpetual Subtle Animation:** Discrete pulse badges (`animate-pulse`), floating badge badges with `translateY` floating oscillations.
- **Hardware Acceleration:** Animations restricted exclusively to `transform` and `opacity` properties to guarantee 60fps on mobile Safari and Chrome.

---

## 7. Anti-Patterns (Banned AI Clichés)

To preserve authenticity, brand character, and professional trustworthiness, the following patterns are strictly forbidden:

1. ❌ **No Emojis:** Use authentic Lucide SVG vector icons exclusively (`Package`, `Zap`, `ShieldCheck`, `Clock`, `Truck`, `ArrowRight`).
2. ❌ **No Generic Font Stacks:** Never substitute `Inter`, `Roboto`, `Open Sans`, or system serif fonts for defined headings.
3. ❌ **No Pure Black:** Never use `#000000` text or surfaces.
4. ❌ **No AI Neon Purple / Cyberpunk Gradients:** No purple button glows, cyan text highlights, or holographic glassmorphism.
5. ❌ **No Fabricated / Hallucinated Metric Claims:** Never fabricate fictitious SLA percentages (e.g., "99.999% SLA", "12ms LATENCY"). Use actual domain copy, real client quotes, and legitimate local coverage metrics.
6. ❌ **No Lazy "LABEL // 2025" Formatting:** Avoid sci-fi pseudo-labels and tech cliches.
7. ❌ **No Generic AI Copywriting:** Avoid words like *"Elevate"*, *"Unleash"*, *"Seamless next-gen synergy"*, *"Paradigm shift"*. Use direct, action-oriented Argentine urban logistics terminology (*"Entregas en el día"*, *"Mensajería Flex"*, *"Flota en Mar del Plata"*, *"Cotizá al instante"*).
8. ❌ **No Centered Monotonous 3-Equal Cards:** Avoid 3 identical centered card rows. Always use asymmetric Bento sizing, distinct color anchors, or horizontal slider carousels.
9. ❌ **No Element Overlapping Clutter:** Text must never illegibly collide with background photos or floating watermarks. All layers maintain clear spatial hierarchy.
