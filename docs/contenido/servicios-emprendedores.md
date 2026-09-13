# `/servicios/emprendedores` — Plan Emprendedores

**Archivo:** `src/app/servicios/emprendedores/page.tsx` | `'use client'`  
**Función:** `EmprendedoresPage()`

## Handler

```ts
const handleOpenQuoteModal = () => {
  const el = document.getElementById('emprendedores-pricing') || document.getElementById('pricing');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
```

## Árbol de componentes

```
<main id="main-content">
  <Navbar onOpenQuoteModal />
  <EmprendedoresHero />
  <EmprendedoresFeatures />
  <EmprendedoresBenefits />
  <EmprendedoresPricing />
  <CarruselRedes />
  <PreFooterAndFooter onOpenQuoteModal />
</main>
```

---

## EmprendedoresHero

**Archivo:** `src/components/servicios/emprendedores/EmprendedoresHero.tsx`  
Tamaño: 16KB — Hero orientado a emprendedores y pequeños comercios.

---

## EmprendedoresFeatures

**Archivo:** `src/components/servicios/emprendedores/EmprendedoresFeatures.tsx`  
Tamaño: 7KB — Features del plan emprendedor.

---

## EmprendedoresBenefits

**Archivo:** `src/components/servicios/emprendedores/EmprendedoresBenefits.tsx`  
Tamaño: 5KB — Beneficios exclusivos del plan para emprendedores.

---

## EmprendedoresPricing

**Archivo:** `src/components/servicios/emprendedores/EmprendedoresPricing.tsx`  
Tamaño: 12KB | `id="emprendedores-pricing"` — Tabla de precios por volumen mensual.

---

## Componentes compartidos

- `Navbar` — ver [home.md](./home.md#navbar)
- `CarruselRedes` — `src/components/CarruselRedes.tsx`
- `PreFooterAndFooter` — ver [home.md](./home.md#prefooterandfooter-compartido)
