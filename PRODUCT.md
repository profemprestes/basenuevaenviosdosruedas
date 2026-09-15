# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Comercios y Emprendedores E-Commerce locales:** Vendedores de MercadoLibre (Mercado Envíos Flex), tiendas online y PyMEs de Mar del Plata que necesitan despachar pedidos en el día o coordinar lotes económicos agrupados (lowcost) con rendición y trazabilidad.
- **Particulares y Negocios Urbanos:** Personas, profesionales y comercios que precisan mensajería express punto a punto, trámites, entrega de llaves, documentación, repuestos o insumos urgentes en moto (< 60 min).
- **Marcas y Cuentas Corporativas:** Empresas con volumen constante que requieren logística integral 3PL (almacenamiento, pick & pack) y cuenta corriente en base central.

## Product Purpose
Servir como la plataforma digital central de Envíos DosRuedas para cotizar envíos al instante, comunicar servicios y centralizar la coordinación operativa y comercial en Mar del Plata. El éxito significa que el usuario comprende la tarifa exacta por zona en segundos y conecta inmediatamente con la central operativa vía WhatsApp sin fricciones ni ambigüedad de precios.

## Positioning
Operador logístico local con infraestructura real: centro de distribución propio en Friuli 1972, flota 100% propia de motos (cero tercerización a repartidores ocasionales de apps), tasa histórica de 0% paquetes extraviados (+50.000 envíos), atención humana directa y homologación oficial para Mercado Envíos Flex en el Partido de General Pueyrredón.

## Operating Context
- **Geografía:** Mar del Plata y Partido de General Pueyrredón (dividido en 4 zonas tarifarias: Centro/Macrocentro/Güemes/Troncos, Constitución/Puerto/Champagnat, Bosque/Batán/Camet, y Sierra de los Padres).
- **Canal de despacho:** Coordinación y confirmación en tiempo real a través de WhatsApp (`5492236602699`).
- **Horarios de base:** Lunes a Viernes de 09:00 a 18:00 hs, Sábados de 10:00 a 15:00 hs.
- **Entorno del cliente:** Comerciantes operando desde depósitos o mostradores en horarios comerciales pico; particulares gestionando envíos urgentes desde teléfonos móviles.

## Capabilities and Constraints
- **Cotizador Express en tiempo real:** Cálculo automatizado según zona de origen/destino, peso y nivel de urgencia, con preformato de mensaje para WhatsApp.
- **Servicios Principales:**
  - *Envíos Express:* Punto a punto prioritario en 30-60 min (tarifa base $3.700, hasta 5kg).
  - *Envíos LowCost / Batch:* Retiro y entrega agrupada same-day / next-day (tarifa base $3.000, hasta 10kg).
  - *Mercado Envíos Flex:* Envíos en el día homologados con corte a las 14:00 hs.
  - *E-Commerce & 3PL:* Depósito, preparación de pedidos y distribución sin límite de escala.
- **Restricciones técnicas y de negocio:**
  - No tercerización: todo servicio se opera con choferes y cadetes propios.
  - No inventar testimonios, empresas cliente ni zonas por fuera del Partido de General Pueyrredón.
  - Mantener sincronía de datos y textos exclusivamente desde `@/content/` (`home.ts`, `services.ts`, `site.ts`, `quote.ts`).

## Brand Commitments
- **Nombre:** Envíos DosRuedas — Mensajería y Logística MDQ.
- **Identidad visual central:** Azul Marca (`#0C59F2`), Azul Marino Profundo (`#002273`) y Amarillo Señal (`#F2E40A`).
- **Tono de voz:** Profesional, confiable, directo, humano y arraigado a la identidad marplatense. Sin emojis decorativos en interfaz ni jerga corporativa vacía.
- **Sede física comprobable:** Friuli 1972, Mar del Plata.

## Evidence on Hand
- **Métricas históricas comprobadas:** +50.000 entregas realizadas, 0 paquetes extraviados, +50 comercios y emprendedores locales activos.
- **Marcas locales asociadas (referencias en contenido):** OPIX 3D, El Cóndor, Starcel, UrbanCow, Wanca, Catalina Indumentaria, Envases 3G, Havanna MDQ, Surf Shop Güemes.
- **Identidad y canales:** Teléfono oficial `223 660-2699`, email `matiascejas@enviosdosruedas.com`, logo oficial en `/logo.webp`.

## Product Principles
1. **Transparencia Inmediata:** Tarifas claras y cotización instantánea antes de cualquier contacto comercial.
2. **Cero Tercerización, Máxima Responsabilidad:** La flota propia y la base física son la garantía de seguridad de cada paquete.
3. **Velocidad sin Fricción:** El camino desde la necesidad de envío hasta la confirmación operativa debe tomar menos de 60 segundos.
4. **Human-in-the-loop Logístico:** La tecnología agiliza el cálculo y la interfaz; el equipo humano por WhatsApp asegura el cumplimiento y la confianza.

## Accessibility & Inclusion
- Cumplimiento estricto de WCAG 2.1 Nivel AA en toda la interfaz web.
- Contraste mínimo de 4.5:1 en textos estándar y 3.0:1 en titulares y controles interactivos.
- Textos sobre Amarillo Señal (`#F2E40A`) siempre en Azul Marino (`#002273`) o Slate oscuro (nunca blanco).
- Targets táctiles mínimos de 44×44px en móviles y soporte completo para navegación con teclado y lectores de pantalla (`aria-live`, `role="dialog"`).
