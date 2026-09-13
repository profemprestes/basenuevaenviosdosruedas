# 📦 Docs — Índice de Páginas `src/app`

> Documentación compacta por ruta Next.js App Router. Cada archivo cubre una página y sus componentes.

## Rutas documentadas

| Ruta URL | Archivo docs | Componentes clave |
|---|---|---|
| `/` | [home.md](./home.md) | Navbar, HeroSection, MetricsBentoSection, EcommerceGrowthSection, ServicesCarouselSection, IndustriesShowcaseSection, TestimonialsSection, CarruselRedes, ContactQuoteSection, PreFooterAndFooter + 2 modales |
| `/contacto` | [contacto.md](./contacto.md) | Navbar, ContactHeroSection, ContactB2BSection, SocialChannelsSection, CarruselRedes, OfficeInfoSection, ContactPageCTA, PreFooterAndFooter |
| `/servicios/express` | [servicios-express.md](./servicios-express.md) | Navbar, ExpressHero, ExpressFeatures, ExpressUseCases, ExpressPricing, CarruselRedes, PreFooterAndFooter |
| `/servicios/lowcost` | [servicios-lowcost.md](./servicios-lowcost.md) | Navbar, LowCostHero, LowCostFeatures, LowCostBenefits, LowCostHowItWorks, LowCostPricing, CarruselRedes, PreFooterAndFooter |
| `/servicios/flex` | [servicios-flex.md](./servicios-flex.md) | Navbar, FlexHero, FlexFeatures, FlexBenefits, FlexHowItWorks, FlexRequirements, FlexPricing, CarruselRedes, PreFooterAndFooter |
| `/servicios/emprendedores` | [servicios-emprendedores.md](./servicios-emprendedores.md) | Navbar, EmprendedoresHero, EmprendedoresFeatures, EmprendedoresBenefits, EmprendedoresPricing, CarruselRedes, PreFooterAndFooter |

## Componentes compartidos globales

| Componente | Archivo | Descripción |
|---|---|---|
| `Navbar` | `src/components/Navbar.tsx` | Header sticky, dropdown servicios, CTA, menú móvil |
| `PreFooterAndFooter` | `src/components/PreFooterAndFooter.tsx` | Banner pre-footer + footer maestro |
| `CarruselRedes` | `src/components/CarruselRedes.tsx` | Carrusel/grid redes sociales |
| Atoms | `src/components/atoms/` | Badge, Button, Card, IconBadge, InputField, SelectField |

## Estructura `src/app`

```
src/app/
├── layout.tsx              ← Root layout (fuentes, metadata, skip link)
├── globals.css
├── page.tsx                ← / Home
├── contacto/
│   └── page.tsx            ← /contacto
└── servicios/
    ├── express/page.tsx    ← /servicios/express
    ├── lowcost/page.tsx    ← /servicios/lowcost
    ├── flex/page.tsx       ← /servicios/flex
    └── emprendedores/page.tsx
```

## Convenciones compartidas

- Todas las `page.tsx` son `'use client'` (usan `useState`/`scrollIntoView`)
- Navegación interna: `scrollIntoView` (SPA behavior)
- Datos separados en `src/content/` (no hardcodeados en componentes)
- Tipado explícito con interfaces TypeScript en cada componente
