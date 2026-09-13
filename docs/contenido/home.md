# `/` — Home

**Archivo:** `src/app/page.tsx` | `'use client'`

## Estado

```ts
const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
const [isFichaTecnicaOpen, setIsFichaTecnicaOpen] = useState(false);
```

## Handlers

| Handler | Acción |
|---|---|
| `handleOpenQuoteModal(serviceId?)` | Setea servicio preseleccionado, abre `ExpressQuoteModal` |
| `handleScrollToServices()` | `scrollIntoView({ behavior:'smooth' })` a `#servicios-carousel` |

## Árbol de componentes

```
<main id="main-content">
  1. <Navbar onOpenQuoteModal />
  2. <HeroSection onOpenQuoteModal onScrollToServices />
  3. <MetricsBentoSection />
  4. <EcommerceGrowthSection onOpenQuoteModal onOpenFichaTecnica />
  5. <ServicesCarouselSection onOpenQuoteModal onOpenFichaTecnica />
  6. <IndustriesShowcaseSection onOpenQuoteModal />
  7. <TestimonialsSection />
  8. <CarruselRedes />
  9. <ContactQuoteSection />
  10. <PreFooterAndFooter onOpenQuoteModal />
  [Modales]
  <ExpressQuoteModal isOpen onClose preselectedService />
  <FichaTecnicaModal isOpen onClose onOpenQuoteModal />
</main>
```

---

## Navbar

**Archivo:** `src/components/Navbar.tsx` | Props: `{ onOpenQuoteModal: () => void }`

Estado: `mobileMenuOpen`, `servicesDropdown`  
Datos: `SITE_CONFIG.navigation`

Elementos:
- Logo → scroll `#inicio`
- Desktop: Inicio / Servicios (dropdown con `servicesDropdown.map`) / Nosotros / Contacto
- Dropdown renderiza `navigation.servicesDropdown[]` → `scrollToSection(item.targetId)`
- Right: `tel:` link + botón amarillo CTA
- Mobile: botón CTA compacto + hamburguesa → `<nav>` drawer con mismos items

```tsx
// Props interface
interface NavbarProps {
  onOpenQuoteModal: () => void;
}
```

---

## HeroSection

**Archivo:** `src/components/HeroSection.tsx`  
Props: `{ onOpenQuoteModal: () => void; onScrollToServices: () => void }`  
Datos: `HERO_CONTENT` de `@/content/home`  
Sección: `id="inicio"` | bg: `bg-[#0C59F2] bg-tech-grid`

Grid 12 col:
- **Left col-7:** Pill badge animado → H1 (headline + highlight bordered + part2) → subtítulo → 2 CTAs → 3 highlight pills con íconos `[Package, MapPin, FastForward]`
- **Right col-5:** Tarjeta `bg-[#00277e]` con SVG isométrico 3D (polígonos de edificios, ruta animada amarilla) + badge activo pulsante + 2 mini status cards (Zap amarillo, ShieldCheck azul)

```tsx
interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onScrollToServices: () => void;
}
const HIGHLIGHT_ICONS = [Package, MapPin, FastForward];
```

---

## MetricsBentoSection

**Archivo:** `src/components/MetricsBentoSection.tsx`  
Props: ninguna | Sección: `id="nosotros"` | bg: `bg-[#FFFFFF]`  
Datos: `METRICS_CONTENT` de `@/content/home`  
Átomos: `Badge`, `Card`, `IconBadge`

Grid 12 col:
- **Left col-6:** Badge → H2 azul → párrafo → 2 `<Card>` con íconos Clock/Shield y feature title+desc
- **Right col-6:** `<Card variant="bento-blue">` con `<Truck>` icon + stat héroe (valor enorme) + subtítulo → 2 `<Card variant="bento-white">` (CheckCircle2 + "0 extraviados" | Users + "+50 emprendedores")

---

## EcommerceGrowthSection

**Archivo:** `src/components/EcommerceGrowthSection.tsx`  
Props: `{ onOpenQuoteModal; onOpenFichaTecnica }`  
Sección: `id="ecommerce"` | bg: `bg-[#0C59F2] bg-tech-grid`  
Datos: `ECOMMERCE_GROWTH_CONTENT`, `LOCAL_PARTNER_BRANDS`

Sub-componente `EcommerceCard({ variant: 'dark'|'yellow'|'white', icon, badge, title, description, benefits?, ctaText, onCtaClick, ctaVariant? })`

Bento 12 col:
- `col-span-6` `variant="dark"`: e-commerce principal con lista `BenefitItem[]` → `onOpenQuoteModal`
- `col-span-6` (apiladas):
  - `variant="yellow"`: Flex → `onOpenFichaTecnica`  
  - `variant="white"`: Corporativo → `onOpenQuoteModal`

Ticker inferior: `LOCAL_PARTNER_BRANDS.map()` marcas locales

---

## ServicesCarouselSection

**Archivo:** `src/components/ServicesCarouselSection.tsx`  
Props: `{ onOpenQuoteModal: (preselectedService?: string) => void; onOpenFichaTecnica: () => void }`  
Sección: `id="servicios-carousel"` | bg: `bg-[#0C59F2]`

Hook: `useCarousel({ items: LOGISTICS_SERVICES, initialIndex: 2, autoRotate: true, autoRotateInterval: 4500 })`  
Datos: `LOGISTICS_SERVICES`, `SERVICES_SECTION_CONTENT` de `@/content/services`

Mapa íconos: `{ express: Zap, lowcost: Clock, flex: Truck, '3pl': DollarSign }`

`ServiceCard` props: `{ svc, isSelected, isHighlight, onSelect, onOpenFichaTecnica, onOpenQuoteModal }`  
- `isHighlight=true` → styles amarillos (Flex es highlight)
- Renderiza: icon badge, badge, location, H3, descripción, 3 pills, botón "Ficha técnica" (ghost), botón "Cotizar" (variant según highlight)

Layout: grid 1/2/4 col + dots + controles (autoRotate toggle, Prev, Next)

---

## IndustriesShowcaseSection

**Archivo:** `src/components/IndustriesShowcaseSection.tsx`  
Props: `{ onOpenQuoteModal: (industryName?: string) => void }`  
Sección: `id="industrias"` | bg: `bg-[#FFFFFF]`

Hook: `useCarousel({ items: industries, initialIndex: 4, autoRotate: false })`  
Datos: `INDUSTRIES_CONTENT` de `@/content/home`

`IndustryTab({ industry, isActive, onSelect })` — pill tab button con ícono

`IndustryCard({ industry, onOpenQuoteModal })` — grid 12 col:
- col-4: ícono grande `w-24/w-28` + SLA badge
- col-8: badges → H3 → descripción → 3 feature checkmarks → 2 CTAs ("Cotizá" + "Cuenta Corriente")

Mapa íconos: `{ ShoppingBag, Wrench, Shirt, FileText, ClipboardCheck, Package }`

---

## ExpressQuoteModal

**Archivo:** `src/components/ExpressQuoteModal.tsx`  
Props: `{ isOpen: boolean; onClose: () => void; preselectedService?: string }`

Modal de cotización multi-servicio. `preselectedService` selecciona pestaña inicial.

---

## FichaTecnicaModal

**Archivo:** `src/components/FichaTecnicaModal.tsx`  
Props: `{ isOpen: boolean; onClose: () => void; onOpenQuoteModal: () => void }`

Ficha técnica del servicio Flex. Al hacer clic en "Cotizar": cierra este modal → abre `ExpressQuoteModal` con `'flex'`.

---

## PreFooterAndFooter (compartido)

**Archivo:** `src/components/PreFooterAndFooter.tsx`  
Props: `{ onOpenQuoteModal: (serviceId?: string) => void }`  
Datos: `SITE_CONFIG`

1. Pre-footer card oscura: CTA cotización + botón WhatsApp
2. Footer grid 12 col:
   - col-5: Logo + tagline + descripción + sociales (Instagram SVG, Facebook SVG, WhatsApp Button)
   - col-3: Links servicios → llaman `onOpenQuoteModal(item.action)` donde action = serviceId
   - col-4: InfoCards (MapPin/dirección, Phone/tel, Mail/email, Clock/horarios)
3. Bottom bar: copyright + links legales + botón scroll-top amarillo
