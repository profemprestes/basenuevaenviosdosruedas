# `/servicios/express` — Servicio Express

**Archivo:** `src/app/servicios/express/page.tsx` | `'use client'`  
**Función:** `ExpressPage()`

## Estado y handlers

```ts
const handleOpenQuoteModal = () => {
  const el = document.getElementById('express-pricing') || document.getElementById('pricing');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
```

> No hay estado `useState`. El handler solo hace scroll al pricing.

## Árbol de componentes

```
<main id="main-content">
  <Navbar onOpenQuoteModal />
  <ExpressHero />
  <ExpressFeatures />
  <ExpressUseCases />
  <ExpressPricing />
  <CarruselRedes />
  <PreFooterAndFooter onOpenQuoteModal />
</main>
```

---

## ExpressHero

**Archivo:** `src/components/servicios/express/ExpressHero.tsx`  
Tamaño: 14KB — Héroe de la página del servicio Express.

---

## ExpressFeatures

**Archivo:** `src/components/servicios/express/ExpressFeatures.tsx`  
Tamaño: 5KB — Características y diferenciadores del servicio Express.

---

## ExpressUseCases

**Archivo:** `src/components/servicios/express/ExpressUseCases.tsx`  
Tamaño: 9KB — Casos de uso del servicio Express por tipo de negocio.

---

## ExpressPricing

**Archivo:** `src/components/servicios/express/ExpressPricing.tsx`  
Tamaño: 11KB | `id="express-pricing"` — Tabla de precios del servicio Express.

---

## Componentes compartidos

- `Navbar` — ver [home.md](./home.md#navbar)
- `CarruselRedes` — `src/components/CarruselRedes.tsx`
- `PreFooterAndFooter` — ver [home.md](./home.md#prefooterandfooter-compartido)
