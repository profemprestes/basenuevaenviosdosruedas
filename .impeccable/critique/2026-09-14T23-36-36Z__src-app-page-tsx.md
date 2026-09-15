---
target: src/app/page.tsx y sus componentes
total_score: 34
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 1
target_identity: "file:D:\\00proyectos\\basenuevaenviosdosruedas\\src\\app\\page.tsx"
target_fingerprint: "sha256:4e64539fc44ea65e0d39044e1cb77efddacc4e1c7721a46d5af7ff7eea09a4c6"
target_path: "D:\\00proyectos\\basenuevaenviosdosruedas\\src\\app\\page.tsx"
timestamp: 2026-09-14T23-36-36Z
slug: src-app-page-tsx
---
# Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Real-time quote calculation with `aria-live="polite"`, dispatch beacons, and active tab states. |
| 2 | Match System / Real World | 4 | Speaks the authentic language of Mar del Plata merchants (Mercado Envíos Flex, contraentrega, remito, 11 MDQ zones). |
| 3 | User Control and Freedom | 3 | Services Carousel auto-rotates by default (`autoRotate: true`), taking away control during reading. |
| 4 | Consistency and Standards | 3 | Clean atomic tokens, but `CarruselRedes` introduces foreign third-party social gradients that break the 3-color palette. |
| 5 | Error Prevention | 3 | Dropdowns have smart defaults, but selecting identical origin and destination lacks clear intra-zone tariff explanations. |
| 6 | Recognition Rather Than Recall | 4 | All quoting parameters and dynamic pricing remain visible in a single compact dialog view. |
| 7 | Flexibility and Efficiency | 3 | Direct telephone links and quick navbar actions accommodate both rushed couriers and analytical sellers. |
| 8 | Aesthetic and Minimalist Design | 3 | High visual appeal, but stacked blue sections and dual CTA buttons per card in Services Carousel create visual noise. |
| 9 | Error Recovery | 3 | Form inputs declare `role="alert"`, `aria-describedby`, red borders, and contextual error messages. |
| 10 | Help and Documentation | 3 | Ficha Técnica modal provides explicit SLA constraints, parcel limits (45×45×45cm), and operating schedules. |
| **Total** | | **34/40** | **Good (85%)** |

---

# Design Specificity Verdict

**LLM Assessment:** The visual identity is strongly rooted in the operational reality of Mar del Plata rather than interchangeable SaaS logistics templates. The core brand palette—Brand Electric Blue (`#0C59F2`), Dark Anchor Navy (`#002273`), and Signal Yellow (`#F2E40A`)—immediately signals high-voltage speed and industrial grit. Content explicitly features real geographic coordinates and local references: *"Friuli 1972"*, *"Cadete #09 · Güemes → Batán"*, 11 explicit General Pueyrredón delivery zones, local merchant brands (*Havanna MDQ*, *El Cóndor*, *Starcel*, *Surf Shop Güemes*), and verified 5.0 Google Maps reviews. The Hero column features an abstract isometric polygon city grid which, while dynamic, represents generic tech geometry rather than recognizable Mar del Plata urban landmarks.

**Deterministic Scan:** Automated detection found 0 issues in `src/app/page.tsx` and its direct section components. Across peripheral sub-components in `src/components/` it flagged 13 warnings:
- `side-tab` (10 instances): Partial false positive. The detector flags `border-l-4`, which was applied to section `<h2>` headings and hero blockquotes rather than cards.
- `ai-color-palette` (2 instances in `SocialChannelsSection.tsx`): False positive. Legitimate Instagram brand gradient replication.
- `bounce-easing` (1 instance in `NewsletterSubscribe.tsx`): True positive. Tailwind `animate-bounce` on success icon creates dated visual jitter.

---

# Overall Impression
An energetic, high-velocity logistics platform with exceptional local credibility and an un-gated, instant quote calculator. The experience is fast and direct, but suffers from rhythmic background color fatigue (double blue stacked into double white), an aggressive 4.5s carousel auto-rotation, and a severe accessibility contrast failure on required field asterisks.

---

# What's Working
1. **Unapologetic Local Authenticity:** The platform avoids generic courier tropes by anchoring every claim to Mar del Plata reality: physical hub at Friuli 1972, genuine local merchant references (Havanna, El Cóndor), and real neighborhood routing.
2. **Frictionless, Un-Gated Quoting Architecture:** The real-time tariff calculator does not require creating an account or surrendering an email address. It generates instant zone-to-zone ARS pricing with one-click pre-filled WhatsApp dispatch.
3. **Cohesive, High-Velocity Typographic System:** The tripartite combination of Anton, Bebas Neue, and Outfit creates an industrial, athletic aesthetic that mirrors high-speed urban dispatch while maintaining WCAG-compliant legibility.

---

# Priority Issues

### [P1] Invisible Required Asterisk in Form Inputs
- **Why it matters:** Severe WCAG 2.1 AA violation. In `InputField.tsx` and `SelectField.tsx`, the required field asterisk is rendered as `<span className="text-[#F2E40A] ml-1">*</span>`. Signal Yellow on white has a ~1.07:1 contrast ratio, making mandatory indicators invisible.
- **Fix:** Replace `text-[#F2E40A]` with an accessible high-contrast token such as `text-[#0C59F2]` (4.8:1) or `text-amber-700` / `text-red-600` (>5:1), or render an explicit text badge `"(requerido)"`.
- **Suggested command:** `$impeccable colorize`

### [P2] Services Carousel Auto-Rotation Disrupts Reading & Agency
- **Why it matters:** In `ServicesCarouselSection.tsx`, `useCarousel` initializes with `autoRotate: true` on a 4500ms cycle. Automatically moving cards out from under the user while they are evaluating SLAs, pricing bases, and weight limits causes cognitive frustration and mis-clicks (WCAG 2.2.2).
- **Fix:** Default `autoRotate` to `false` so the user navigates deliberately via arrows and dots, or pause rotation on hover and focus.
- **Suggested command:** `$impeccable quieter`

### [P2] Monochromatic Visual Fatigue & Broken Section Rhythm
- **Why it matters:** Stacking two full-bleed `#0C59F2` sections (`EcommerceGrowthSection` into `ServicesCarouselSection`), followed immediately by two consecutive white sections (`IndustriesShowcaseSection` into `TestimonialsSection`), creates an uninterrupted wall of saturated blue and blurs the boundary between B2B value propositions and the service catalog.
- **Fix:** Alternate section backgrounds: render `ServicesCarouselSection` on a crisp white surface with navy/blue cards, or set `EcommerceGrowthSection` on Dark Navy (`#002273`).
- **Suggested command:** `$impeccable layout`

### [P3] Dual-Button Cognitive Choice Overload on Service Cards
- **Why it matters:** In `ServicesCarouselSection.tsx`, every card displays two vertically stacked buttons: *"MIRÁ LA FICHA TÉCNICA"* and *"COTIZAR ESTE PLAN"*. Across 4 visible cards, there are 8 competing CTA triggers, violating the "one choice at a time" UX heuristic.
- **Fix:** Consolidate into a single primary action button (*"COTIZAR PLAN"*) and relocate the Ficha Técnica trigger to a discreet info icon or integrate it directly into the quote dialog.
- **Suggested command:** `$impeccable distill`

---

# Persona Red Flags
- **Alex (Impatient Power User):** Clicks "COTIZÁ EXPRESS", selects zones, and hits "PEDIR MOTO POR WHATSAPP". On a desktop workstation without WhatsApp Web configured, it opens a generic WhatsApp web prompt without an immediate click-to-copy phone number or numeric reference in the modal to coordinate by phone instantly.
- **Jordan (Confused First-Timer):** While reading the difference between Express and LowCost cards, the carousel auto-shifts every 4.5 seconds. In the quote modal, checking "Requiere cobranza en efectivo" displays no explicit breakdown of whether there is an extra percentage or fee for handling cash.
- **Casey (Distracted Mobile User):** The complex isometric SVG in the Hero consumes substantial vertical real estate on small screens (375px), pushing social proof and core value metrics below the fold.
- **Local Merchant / Retailer in MDQ:** Clicks "CONFIGURAR FLEX" on the E-commerce section, which opens Ficha Técnica. When they click the CTA inside the modal ("CONFIGURAR MI CUENTA FLEX"), it unexpectedly redirects them into the point-to-point `ExpressQuoteModal` preselected to Flex, rather than a dedicated recurring merchant onboarding form.

---

# Minor Observations
- `CarruselRedes.tsx`: Uses `motion/react` framer animations while the rest of the application relies on native CSS transitions and Tailwind utility classes.
- `PreFooterAndFooter.tsx`: In the bottom bar, "Sobre Nosotros · Preguntas Frecuentes · Nuestras Redes" are static unlinked text spans rather than active anchor links.
- Social links in Footer point to root domains (`instagram.com`, `facebook.com`), whereas `CarruselRedes` contains the exact local profile handles.

---

# Questions to Consider
1. **Abstract Tech vs Real Asphalt:** Should the Hero replace synthetic 3D isometric polygon vectors with authentic imagery of real riders, bikes, and recognizable MDQ landmarks?
2. **Point-to-Point vs Recurring B2B Logistics:** Would separating point-to-point urban errands from recurring B2B merchant onboarding double conversion?
3. **Speed vs Agency:** Does a 4.5-second auto-rotating service carousel convey operational velocity, or does it take agency away from the merchant attempting to evaluate SLAs and pricing?
