# `/servicios/lowcost` — Servicio Low Cost

**Archivo:** `src/app/servicios/lowcost/page.tsx` | `'use client'`  
**Función:** `LowcostPage()`

## Handler

```ts
const handleOpenQuoteModal = () => {
  const el = document.getElementById('lowcost-pricing') || document.getElementById('pricing');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
```

## Árbol de componentes

```
<main id="main-content">
  <Navbar onOpenQuoteModal />
  <LowCostHero />
  <LowCostFeatures />
  <LowCostBenefits />
  <LowCostHowItWorks />
  <LowCostPricing />
  <CarruselRedes />
  <PreFooterAndFooter onOpenQuoteModal />
</main>
```

> Nota: El `<main>` usa `bg-brand-white` en lugar de `bg-[#FFFFFF]` (token de Tailwind).

---

## LowCostHero

**Archivo:** `src/components/servicios/lowcost/LowCostHero.tsx`  
Tamaño: 16KB — Hero con animaciones y visual del servicio economico.

---

## LowCostFeatures

**Archivo:** `src/components/servicios/lowcost/LowCostFeatures.tsx`  
Tamaño: 5KB — Características del servicio de bajo costo.

---

## LowCostBenefits

**Archivo:** `src/components/servicios/lowcost/LowCostBenefits.tsx`  
Tamaño: 4KB — Beneficios del servicio Low Cost.

---

## LowCostHowItWorks

**Archivo:** `src/components/servicios/lowcost/LowCostHowItWorks.tsx`  
Tamaño: 5KB — Flujo step-by-step de cómo funciona el servicio.

---

## LowCostPricing

**Archivo:** `src/components/servicios/lowcost/LowCostPricing.tsx`  
Tamaño: 11KB | `id="lowcost-pricing"` — Tabla de precios Low Cost.

---

## Componentes compartidos

- `Navbar` — ver [home.md](./home.md#navbar)
- `CarruselRedes` — `src/components/CarruselRedes.tsx`
- `PreFooterAndFooter` — ver [home.md](./home.md#prefooterandfooter-compartido)
