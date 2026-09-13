# `/servicios/flex` — Servicio Flex (Mercado Envíos Flex)

**Archivo:** `src/app/servicios/flex/page.tsx` | `'use client'`  
**Función:** `FlexPage()`

## Handler

```ts
const handleOpenQuoteModal = () => {
  const el = document.getElementById('flex-pricing') || document.getElementById('pricing');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
```

## Árbol de componentes

```
<main id="main-content">
  <Navbar onOpenQuoteModal />
  <FlexHero />
  <FlexFeatures />
  <FlexBenefits />
  <FlexHowItWorks />
  <FlexRequirements />
  <FlexPricing />
  <CarruselRedes />
  <PreFooterAndFooter onOpenQuoteModal />
</main>
```

> Flex es el servicio más completo: 6 secciones de contenido vs 4 en Express.

---

## FlexHero

**Archivo:** `src/components/servicios/flex/FlexHero.tsx`  
Tamaño: 16KB — Hero del servicio Flex con branding Mercado Envíos.

---

## FlexFeatures

**Archivo:** `src/components/servicios/flex/FlexFeatures.tsx`  
Tamaño: 5KB — Características y ventajas del Flex.

---

## FlexBenefits

**Archivo:** `src/components/servicios/flex/FlexBenefits.tsx`  
Tamaño: 5KB — Beneficios del plan Flex para vendedores.

---

## FlexHowItWorks

**Archivo:** `src/components/servicios/flex/FlexHowItWorks.tsx`  
Tamaño: 5KB — Paso a paso del proceso de despacho Flex.

---

## FlexRequirements

**Archivo:** `src/components/servicios/flex/FlexRequirements.tsx`  
Tamaño: 4KB — Requisitos para operar con Flex (SLA, cuenta ML, etc).

---

## FlexPricing

**Archivo:** `src/components/servicios/flex/FlexPricing.tsx`  
Tamaño: 11KB | `id="flex-pricing"` — Precios y planes Flex.

---

## Componentes compartidos

- `Navbar` — ver [home.md](./home.md#navbar)
- `CarruselRedes` — `src/components/CarruselRedes.tsx`
- `PreFooterAndFooter` — ver [home.md](./home.md#prefooterandfooter-compartido)
