import { DeliveryZone } from '@/types/quote';
import { SITE_CONFIG } from './site';

export interface ServicePill {
  label: string;
  value: string;
}

export interface LogisticsServiceItem {
  id: 'express' | 'lowcost' | 'flex' | '3pl';
  title: string;
  badge: string;
  location: string;
  description: string;
  isHighlight: boolean;
  pills: ServicePill[];
  actionLabel?: string;
}

export interface ServicesSectionContent {
  badge: string;
  title: string;
  titleHighlight: string;
  autoRotateButtonLabel: string;
  services: LogisticsServiceItem[];
}

export const WHATSAPP_PHONE_NUMBER = SITE_CONFIG.whatsappNumber;

export const LOCAL_PARTNER_BRANDS: readonly string[] = [
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

export const MDQ_DELIVERY_ZONES: DeliveryZone[] = [
  { id: 'centro', name: 'Centro / Macrocentro', tier: 1 },
  { id: 'guemes', name: 'Güemes / Playa Grande / Varese', tier: 1 },
  { id: 'la-perla', name: 'La Perla / Pompeya', tier: 1 },
  { id: 'constitucion', name: 'Constitución / Los Pinares', tier: 2 },
  { id: 'puerto', name: 'Puerto / Punta Mogotes', tier: 2 },
  { id: 'champagnat', name: 'Av. Champagnat / Libertad', tier: 2 },
  { id: 'troncos', name: 'Los Troncos / San Carlos', tier: 1 },
  { id: 'bosque', name: 'Bosque Peralta Ramos / Alfar', tier: 3 },
  { id: 'batan', name: 'Batán / Parque Industrial', tier: 3 },
  { id: 'camet', name: 'Camet / Parque Camet', tier: 3 },
  { id: 'sierra', name: 'Sierra de los Padres', tier: 4 },
];

export const LOGISTICS_SERVICES: readonly LogisticsServiceItem[] = [
  {
    id: 'express',
    title: 'ENVÍOS EXPRESS',
    badge: 'DIRECTO MDQ',
    location: 'PUNTO A PUNTO URBANO',
    description:
      'Mensajería en moto con entregas inmediatas de alta prioridad en toda la ciudad de Mar del Plata.',
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
    description:
      'Envíos económicos planificados con retiro y entrega agrupada para reducir costos de distribución.',
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
    description:
      'Entregas en el día integradas para tus ventas de MercadoLibre con homologación oficial.',
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
    description:
      'Logística integral para marcas: almacenamiento, preparación de pedidos (pick & pack) y distribución.',
    isHighlight: false,
    pills: [
      { label: 'ENTREGA', value: 'STOCK / PICK' },
      { label: 'TARIFA', value: 'PLANES A MEDIDA' },
      { label: 'PESO', value: 'SIN LÍMITE' },
    ],
  },
] as const;

export const SERVICES_SECTION_CONTENT: ServicesSectionContent = {
  badge: 'NUESTROS SERVICIOS',
  title: 'SOLUCIONES LOGÍSTICAS',
  titleHighlight: 'A TU MEDIDA',
  autoRotateButtonLabel: 'ROTACIÓN AUTOMÁTICA',
  services: [...LOGISTICS_SERVICES],
};
