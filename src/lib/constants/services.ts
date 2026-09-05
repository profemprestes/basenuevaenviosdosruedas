export const WHATSAPP_PHONE_NUMBER = '5492236602699';

export const LOCAL_PARTNER_BRANDS = [
  'OPIX 3D',
  'EL CÓNDOR',
  'STARCEL',
  'URBANCOW',
  'WANCA',
  'CATALINA INDUMENTARIA',
  'ENVASES 3G',
  'HAVANNA MDQ',
  'SURF SHOP GUEMES',
] as const;

export const LOGISTICS_SERVICES = [
  {
    id: 'express',
    title: 'ENVÍOS EXPRESS',
    badge: 'DIRECTO MDQ',
    location: 'PUNTO A PUNTO URBANO',
    description: 'Mensajería en moto con entregas inmediatas de alta prioridad en toda la ciudad de Mar del Plata.',
    isHighlight: false,
    pills: [
      { label: 'ENTREGA', value: '30-60 MIN' },
      { label: 'TARIFA', value: '$3.700 BASE' },
      { label: 'PESO', value: 'HASTA 5KG' },
    ],
  },
  {
    id: 'lowcost',
    title: 'ENVÍOS LOWCOST',
    badge: 'ECONÓMICO',
    location: 'TODO GRAL. PUEYRREDÓN',
    description: 'Envíos económicos planificados con retiro y entrega agrupada para reducir costos de distribución.',
    isHighlight: false,
    pills: [
      { label: 'ENTREGA', value: 'SAME / NEXT DAY' },
      { label: 'TARIFA', value: '$3.000 BASE' },
      { label: 'PESO', value: 'HASTA 10KG' },
    ],
  },
  {
    id: 'flex',
    title: 'ENVÍOS FLEX',
    badge: 'MERCADOLIBRE FLEX',
    location: 'MAR DEL PLATA Y BATÁN',
    description: 'Entregas en el día integradas para tus ventas de MercadoLibre con homologación oficial.',
    isHighlight: true,
    pills: [
      { label: 'ENTREGA', value: 'EN EL DÍA' },
      { label: 'TARIFA', value: 'ZONIFICADO LOCAL' },
      { label: 'PESO', value: 'APTO MOTO / AUTO' },
    ],
  },
  {
    id: '3pl',
    title: 'ECOMMERCE & 3PL',
    badge: 'LOGÍSTICA INTEGRAL',
    location: 'DEPÓSITO FRIULI 1972',
    description: 'Logística integral para marcas: almacenamiento, preparación de pedidos (pick & pack) y distribución.',
    isHighlight: false,
    pills: [
      { label: 'ENTREGA', value: 'STOCK / PICK' },
      { label: 'TARIFA', value: 'PLANES A MEDIDA' },
      { label: 'PESO', value: 'SIN LÍMITE' },
    ],
  },
] as const;
