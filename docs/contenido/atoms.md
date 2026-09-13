# Atoms — Componentes UI Base

**Directorio:** `src/components/atoms/`  
**Export:** `src/components/atoms/index.ts`

Contenido del index:
```ts
export { default as Badge } from './Badge';
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as IconBadge } from './IconBadge';
export { default as InputField } from './InputField';
export { default as SelectField } from './SelectField';
```

---

## Badge

**Archivo:** `src/components/atoms/Badge.tsx` (2KB)

Componente pill/etiqueta. Variantes principales:
- `category-light`, `category-dark` — para encabezados de sección
- `blue-dark` — fondo azul oscuro, texto amarillo
- `yellow` — fondo amarillo, texto azul oscuro
- `signal` — amarillo con borde, para destacar badges principales
- `green`, `amber` — para estados/canales

También existe `src/components/ui/Badge.tsx` (2KB) con más variantes para la UI de componentes avanzados.

---

## Button

**Archivo:** `src/components/atoms/Button.tsx` (4KB)

Variantes:
- `primary` — bg amarillo `#F2E40A`, text azul oscuro
- `secondary` — bg azul oscuro/ghost
- `dark` — bg `#002273`, text blanco
- `ghost` — sin fondo, para acciones sutiles
- `blue-outline` — borde azul
- `whatsapp` — verde
- `yellow-outline` — borde amarillo

Tamaños: `sm`, `md`, `lg`, `xl`

Props:
```ts
interface ButtonProps {
  variant?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
```

---

## Card

**Archivo:** `src/components/atoms/Card.tsx` (2KB)

Variantes:
- `default` — blanco con borde slate, shadow sm
- `bento-blue` — bg `#0C59F2`, para cards de métricas hero
- `bento-white` — blanco con borde slate suave
- `bento-dark` — bg azul muy oscuro `#002273`, text blanco

Padding: `sm`, `md`, `lg`, `xl`  
Prop `hover` agrega `hover:shadow-lg hover:-translate-y-0.5`

También existe `src/components/ui/card.tsx` (3KB) — variante shadcn-style.

---

## IconBadge

**Archivo:** `src/components/atoms/IconBadge.tsx` (2KB)

Contenedor cuadrado para íconos con variantes de color:
- `yellow-blue` — bg amarillo, icon azul oscuro
- `white-blue` — bg blanco, icon azul
- Tamaños: `sm`, `md`, `lg`, `xl`

---

## InputField

**Archivo:** `src/components/atoms/InputField.tsx` (2KB)

Input texto con label, ícono izquierdo y estados de error.

```ts
interface InputFieldProps {
  label: string;
  icon?: React.ReactNode;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}
```

También existe `src/components/ui/InputField.tsx` (3KB) con más features (autocompletado, etc).

---

## SelectField

**Archivo:** `src/components/atoms/SelectField.tsx` (3KB)

Select con label e ícono izquierdo.

```ts
interface SelectFieldProps {
  label: string;
  icon?: React.ReactNode;
  id: string;
  required?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
```

---

## Componentes UI adicionales

**Directorio:** `src/components/ui/`

| Archivo | Tamaño | Descripción |
|---|---|---|
| `AddressAutocomplete.tsx` | 5KB | Autocomplete de dirección |
| `Badge.tsx` | 2KB | Badge UI avanzada |
| `BentoGrid.tsx` | 2KB | Layout bento grid |
| `CTANestedPill.tsx` | 5KB | Pill CTA anidado |
| `DoubleBezelCard.tsx` | 2KB | Card con doble borde/bisel |
| `DynamicRouteMap.tsx` | 1KB | Mapa dinámico de ruta |
| `FloatTiltCard.tsx` | 3KB | Card con efecto tilt flotante |
| `HeroProceduralBackground.tsx` | 7KB | Fondo procedural animado para heroes |
| `InputField.tsx` | 3KB | Input avanzado con autocompletado |
| `LeafletRouteMap.tsx` | 5KB | Mapa Leaflet con ruta |
| `LogosCarousel.tsx` | 4KB | Carrusel de logos |
| `RadioCardGroup.tsx` | 7KB | Grupo de radio cards |
| `StepperHorizontal.tsx` | 4KB | Stepper horizontal |
| `StepperVertical.tsx` | 6KB | Stepper vertical |
| `card.tsx` | 3KB | Card shadcn-style |
| `sparkles.tsx` | 3KB | Efecto sparkles animado |
| `timeline-animation.tsx` | 9KB | Animación de timeline |
| `vertical-cut-reveal.tsx` | 6KB | Reveal vertical con corte |
