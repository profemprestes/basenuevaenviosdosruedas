export interface SiteMetadataContent {
  title: string;
  description: string;
  url: string;
  ogImage: string;
}

export interface NavItem {
  id: string;
  label: string;
  targetId: string;
}

export interface NavServiceDropdownItem {
  title: string;
  description: string;
  targetId: string;
}

export interface NavigationContent {
  homeLabel: string;
  servicesLabel: string;
  aboutLabel: string;
  contactLabel: string;
  ctaButtonText: string;
  ctaMobileText: string;
  phoneDisplay: string;
  phoneTel: string;
  servicesDropdown: NavServiceDropdownItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface FooterSchedule {
  label: string;
  hours: string;
}

export interface FooterContent {
  preFooter: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    quoteButtonText: string;
    chatButtonText: string;
  };
  brandDescription: string;
  officialChannelsLabel: string;
  verifiedBadgeText: string;
  servicesColumnTitle: string;
  servicesLinks: Array<{ label: string; action: string }>;
  operationsColumnTitle: string;
  locationLabel: string;
  locationAddress: string;
  directLineLabel: string;
  commercialEmailLabel: string;
  commercialEmail: string;
  scheduleLabel: string;
  schedules: FooterSchedule[];
  copyright: string;
  legalLinks: Array<{ label: string; href?: string }>;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  phoneNumber: string;
  email: string;
  address: string;
  metadata: SiteMetadataContent;
  navigation: NavigationContent;
  footer: FooterContent;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Envíos DosRuedas',
  tagline: 'TU SOLUCIÓN CONFIABLE · MAR DEL PLATA',
  whatsappNumber: '5492236602699',
  defaultWhatsAppMessage: 'Hola Envíos DosRuedas! Quiero coordinar un envío en Mar del Plata.',
  phoneNumber: '223 660-2699',
  email: 'matiascejas@enviosdosruedas.com',
  address: 'Friuli 1972, Mar del Plata',
  metadata: {
    title: 'Envíos DosRuedas - Mensajería y Logística MDQ',
    description:
      'Soluciones de mensajería urbana, envíos en el día y delivery de última milla para e-commerce en Mar del Plata. Flota propia y seguimiento en tiempo real.',
    url: 'https://enviosdosruedas.com',
    ogImage: '/logo.webp',
  },
  navigation: {
    homeLabel: 'INICIO',
    servicesLabel: 'SERVICIOS',
    aboutLabel: 'NOSOTROS',
    contactLabel: 'CONTACTO',
    ctaButtonText: 'COTIZÁ TU ENVÍO',
    ctaMobileText: 'COTIZAR',
    phoneDisplay: '223 660-2699',
    phoneTel: 'tel:2236602699',
    servicesDropdown: [
      {
        title: 'Envíos Flex MercadoLibre',
        description: 'Entregas en el día homologadas en MDQ',
        targetId: 'servicios-carousel',
      },
      {
        title: 'Envíos Express (< 2h)',
        description: 'Mensajería prioritaria punto a punto',
        targetId: 'servicios-carousel',
      },
      {
        title: 'Logística para Industrias',
        description: 'Insumos médicos, repuestos, moda y más',
        targetId: 'industrias',
      },
      {
        title: 'E-commerce & Corporativo',
        description: 'Cuentas corrientes y logística 3PL',
        targetId: 'ecommerce',
      },
    ],
  },
  footer: {
    preFooter: {
      badge: 'OPERACIONES ACTIVAS MAR DEL PLATA 2026',
      titleLine1: '¿TENÉS ENVÍOS PARA HOY?',
      titleHighlight: 'LOS ENTREGAMOS A TIEMPO.',
      subtitle:
        'Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.',
      quoteButtonText: 'COTIZÁ TU ENVÍO',
      chatButtonText: 'CHATEÁ CON NOSOTROS',
    },
    brandDescription:
      'Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.',
    officialChannelsLabel: 'CANALES OFICIALES',
    verifiedBadgeText: 'Partner 3PL Verificado',
    servicesColumnTitle: 'SERVICIOS Y COTIZADORES',
    servicesLinks: [
      { label: 'Cotizador Express < 2H', action: 'express' },
      { label: 'Cotizador LowCost Batch', action: 'lowcost' },
      { label: 'Mercado Envíos Flex', action: 'flex' },
      { label: 'E-Commerce & 3PL', action: '3pl' },
    ],
    operationsColumnTitle: 'BASE DE OPERACIONES MDQ',
    locationLabel: 'CENTRO DE DISTRIBUCIÓN',
    locationAddress: 'Friuli 1972, Mar del Plata',
    directLineLabel: 'LÍNEA DIRECTA Y WHATSAPP',
    commercialEmailLabel: 'ATENCIÓN COMERCIAL',
    commercialEmail: 'matiascejas@enviosdosruedas.com',
    scheduleLabel: 'HORARIOS DE DESPACHO (BASE CENTRAL)',
    schedules: [
      { label: 'Lunes a Viernes:', hours: '09:00 - 18:00 hs' },
      { label: 'Sábados:', hours: '10:00 - 15:00 hs' },
    ],
    copyright: '© 2026 Envíos DosRuedas · Mar del Plata, Argentina.',
    legalLinks: [
      { label: 'Términos y Condiciones' },
      { label: 'Política de Privacidad' },
    ],
  },
};
