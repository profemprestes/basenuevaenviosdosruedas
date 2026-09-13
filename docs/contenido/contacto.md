# `/contacto` — Página de Contacto

**Archivo:** `src/app/contacto/page.tsx` | `'use client'`  
**Función:** `ContactPage()`

## Handler

```ts
const handleOpenQuoteModal = () => {
  const el = document.getElementById('contacto-b2b');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
```

> El handler no abre un modal — hace scroll a la sección B2B del formulario.

## Árbol de componentes

```
<main id="main-content">
  1. <Navbar onOpenQuoteModal />
  2. <ContactHeroSection />
  3. <ContactB2BSection />
  4. <SocialChannelsSection />
  5. <CarruselRedes />
  6. <OfficeInfoSection />
  7. <ContactPageCTA />
  8. <PreFooterAndFooter onOpenQuoteModal />
</main>
```

---

## ContactHeroSection

**Archivo:** `src/components/ContactHeroSection.tsx`  
Props: ninguna | Sección: `id="contacto-hero"` | bg: `bg-[#FFFFFF]`  
Datos: `CONTACT_HERO_CONTENT` de `@/content/quote`  
Deps: `motion/react`, `next/image`, `@/components/atoms`

Grid 12 col:
- **Left col-7:** Badge → H1 (`¿HABLAMOS AHORA?`) → subtítulo → 3 highlight pills (respuesta <2min, cotizaciones real-time, cobertura MDQ)
- **Right col-5:** `motion.div` con `animate={{ y: [-5,5,-5] }}` flotando → `<Image src="/caja_envios.png">` → 2 floating badges ("Flota en calle · Friuli 1972" y "SLA Flex 100%")

Grid inferior 3 col: `content.channels.map()` → `<ChannelCard>` por canal

Sub-componente `ChannelCard({ channel })`:
```ts
interface channel {
  icon: 'MessageCircle' | 'Phone' | 'Mail';
  href: string;
  variant: 'whatsapp' | 'phone' | 'email';
  title: string;
  description: string;
  ctaText: string;
}
```
Estilos por variante:
- `whatsapp` → verde (`dispatch-green`)
- `phone` → azul (`electric-blue`)
- `email` → ámbar (`priority-amber`)

El card es un `<a href={channel.href}>` con hover-translate-y.

---

## ContactB2BSection

**Archivo:** `src/components/ContactB2BSection.tsx`  
Props: ninguna | Sección: `id="contacto-b2b"` | bg: `bg-electric-blue bg-tech-grid`  
Datos: `CONTACT_B2B_FORM_CONTENT` de `@/content/quote`  
Átomos: `Badge`, `Button`, `Card`, `IconBadge`, `InputField`, `SelectField`

Estado:
```ts
const [formData, setFormData] = useState({ name, phone, volume, modality });
const [submitted, setSubmitted] = useState(false);
```

`handleSubmit`: previene default → `setSubmitted(true)` → construye mensaje WhatsApp → `window.open(wa.me/...)`

Grid 12 col:
- **Left col-6:** Badge → H2 → párrafo → 3 feature cards (Store/Truck/Package) → pill info "Atención comercial directa MDQ"
- **Right col-6:** `<Card>` blanca con `<form>`:
  - `<InputField label=nombre icon=Store>`
  - `<InputField label=telefono icon=Phone type=tel>`
  - `<SelectField label=volumen icon=Package options={content.form.volumeOptions}>`
  - `<SelectField label=modalidad icon=Truck options={content.form.modalityOptions}>`
  - `<Button type=submit variant=primary size=xl>`
  - Mensaje éxito: `{submitted && <div aria-live=polite>}`

Secc CTA inferior (inside same section): tarjeta blanca con grid 12 col → badge → H3 → párrafo → botón WhatsApp (`window.open(wa.me/...)`).

---

## SocialChannelsSection

**Archivo:** `src/components/SocialChannelsSection.tsx`  
Tamaño: 6KB — Grid de canales sociales (Instagram, Facebook, WhatsApp, TikTok) con links.

---

## CarruselRedes

**Archivo:** `src/components/CarruselRedes.tsx`  
Tamaño: 11KB — Carrusel/grid de publicaciones de redes. Compartido en múltiples páginas.

---

## OfficeInfoSection

**Archivo:** `src/components/OfficeInfoSection.tsx`  
Tamaño: 9KB — Sección con mapa, dirección, horarios y datos de la base operativa MDQ.

---

## ContactPageCTA

**Archivo:** `src/components/ContactPageCTA.tsx`  
Tamaño: 3KB — CTA final de la página: botón para cotizar o contactar.

---

## Componentes compartidos

- `Navbar` — ver [home.md](./home.md#navbar)
- `PreFooterAndFooter` — ver [home.md](./home.md#prefooterandfooter-compartido)
