export interface ServiceOption {
  id: 'express' | 'flex' | 'lowcost';
  label: string;
}

export interface WeightOption {
  id: 'light' | 'medium' | 'heavy';
  label: string;
}

export interface ExpressQuoteModalContent {
  headerBadge: string;
  headerTitle: string;
  serviceLegend: string;
  serviceOptions: ServiceOption[];
  originLabel: string;
  destinationLabel: string;
  weightLegend: string;
  weightOptions: WeightOption[];
  cashCollectionText: string;
  tariffBadge: string;
  currencySuffix: string;
  fleetCheckText: string;
  baseLocationText: string;
  backButtonText: string;
  ctaButtonText: string;
}

export interface ContactFormSectionContent {
  badge: string;
  headline: string;
  description: string;
  supportTimeBadge: string;
  nameLabel: string;
  namePlaceholder: string;
  businessLabel: string;
  businessPlaceholder: string;
  volumeLabel: string;
  volumePlaceholder: string;
  volumeOptions: string[];
  submitButtonText: string;
  successMessage: string;
}

export interface FichaTecnicaSpec {
  title: string;
  value: string;
  description: string;
}

export interface FichaTecnicaContent {
  badge: string;
  title: string;
  overviewTitle: string;
  overviewDescription: string;
  specs: FichaTecnicaSpec[];
  commitmentsTitle: string;
  commitments: string[];
  closeButtonText: string;
  ctaButtonText: string;
}

export const EXPRESS_QUOTE_MODAL_CONTENT: ExpressQuoteModalContent = {
  headerBadge: 'COTIZADOR ONLINE EN TIEMPO REAL',
  headerTitle: 'COTIZÁ TU ENVÍO EN MAR DEL PLATA',
  serviceLegend: 'TIPO DE SERVICIO',
  serviceOptions: [
    { id: 'express', label: 'EXPRESS < 2H' },
    { id: 'flex', label: 'FLEX MELI' },
    { id: 'lowcost', label: 'LOWCOST BATCH' },
  ],
  originLabel: 'ZONA DE RETIRO (ORIGEN)',
  destinationLabel: 'ZONA DE ENTREGA (DESTINO)',
  weightLegend: 'TAMAÑO / PESO APROXIMADO',
  weightOptions: [
    { id: 'light', label: 'Hasta 2 kg (Sobre/Caja chica)' },
    { id: 'medium', label: '2 a 5 kg (Caja mediana)' },
    { id: 'heavy', label: '5 a 10 kg (Bulto grande)' },
  ],
  cashCollectionText:
    'Requiere cobranza en efectivo / contraentrega al comprador (rendición en el día)',
  tariffBadge: 'TARIFA ESTIMADA TRANSPARENTE',
  currencySuffix: 'ARS',
  fleetCheckText: '✓ Flota propia',
  baseLocationText: 'Friuli 1972 · MDQ',
  backButtonText: 'VOLVER',
  ctaButtonText: 'PEDIR MOTO POR WHATSAPP',
};

export const CONTACT_FORM_CONTENT: ContactFormSectionContent = {
  badge: 'COTIZACIÓN INMEDIATA',
  headline: '¿LISTO PARA ESCALAR LA LOGÍSTICA DE TU E-COMMERCE?',
  description:
    'Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.',
  supportTimeBadge: 'ATENCIÓN COMERCIAL < 2 MIN',
  nameLabel: 'TU NOMBRE',
  namePlaceholder: 'Ingresá tu nombre',
  businessLabel: 'EMPRESA / NEGOCIO',
  businessPlaceholder: 'Nombre de tu emprendimiento',
  volumeLabel: 'VOLUMEN ESTIMADO MENSUAL',
  volumePlaceholder: 'Seleccioná una opción',
  volumeOptions: [
    '1 a 30 envíos/mes (Emprendedor inicial)',
    '30 a 100 envíos/mes (Comercio en crecimiento)',
    '100 a 300 envíos/mes (MercadoLibre Flex activo)',
    '+300 envíos/mes (Corporativo / Gran volumen)',
  ],
  submitButtonText: 'HABLAR POR WHATSAPP',
  successMessage:
    '¡Listo! Abriendo WhatsApp con tus datos para atenderte en menos de 2 minutos.',
};

export const FICHA_TECNICA_CONTENT: FichaTecnicaContent = {
  badge: 'ESPECIFICACIONES OPERATIVAS MDQ',
  title: 'FICHA TÉCNICA · MERCADO ENVÍOS FLEX',
  overviewTitle: 'SOCIO LOGÍSTICO HOMOLOGADO EN MAR DEL PLATA',
  overviewDescription:
    'Servicio diseñado específicamente para sellers de MercadoLibre que requieren mantener su reputación en verde mediante entregas el mismo día cumpliendo el 100% del SLA.',
  specs: [
    {
      title: 'HORARIO DE CORTE (CUT-OFF)',
      value: '14:00 HS',
      description:
        'Ventas concretadas hasta las 14:00 hs se entregan el mismo día antes de las 21:00 hs.',
    },
    {
      title: 'RECOLECCIÓN EN LOCAL',
      value: 'GRATIS',
      description:
        'Retiro diario programado en tu comercio o depósito sin costo adicional por colecta.',
    },
    {
      title: 'COBERTURA GEOGRÁFICA',
      value: 'ZONA 1 Y 2',
      description:
        'Todo el radio urbano de Mar del Plata, Punta Mogotes, Puerto, Batán y Constitución.',
    },
    {
      title: 'LÍMITES DE PAQUETE',
      value: 'HASTA 10 KG',
      description:
        'Dimensiones máximas aptas para mochilón térmico de moto (45 x 45 x 45 cm).',
    },
  ],
  commitmentsTitle: 'COMPROMISOS DE CALIDAD & CUSTODIA',
  commitments: [
    'Escaneo en el punto de retiro y confirmación digital en el acto de entrega.',
    'Reintento de entrega al día siguiente sin cargo en caso de destinatario ausente.',
    'Canal directo de soporte con el operador logístico en base central Friuli 1972.',
  ],
  closeButtonText: 'CERRAR',
  ctaButtonText: 'CONFIGURAR MI CUENTA FLEX',
};

export interface ContactHeroChannel {
  icon: string;
  title: string;
  description: string;
  href: string;
  ctaText: string;
  variant: 'whatsapp' | 'phone' | 'email';
}

export interface ContactHeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  channels: ContactHeroChannel[];
}

export const CONTACT_HERO_CONTENT: ContactHeroContent = {
  badge: 'CONEXIÓN DIRECTA MAR DEL PLATA',
  headline: '¿HABLAMOS AHORA?',
  subheadline: 'Sin formularios complejos ni esperas. Elegí el canal que mejor se adapte al ritmo de tu e-commerce.',
  channels: [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp Comercial',
      description: 'Respuestas y cotizaciones de envíos en tiempo real.',
      href: 'https://wa.me/542236602699?text=Hola!%20Quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20mis%20env%C3%ADos.',
      ctaText: 'ABRIR WHATSAPP',
      variant: 'whatsapp',
    },
    {
      icon: 'Phone',
      title: 'Llamada de Coordinación',
      description: 'Para hablar directamente con un coordinador logístico.',
      href: 'tel:+542236602699',
      ctaText: 'LLAMAR AHORA',
      variant: 'phone',
    },
    {
      icon: 'Mail',
      title: 'Solicitar Cotización B2B',
      description: 'Envianos tu base de envíos para un plan personalizado.',
      href: 'mailto:matiascejas@enviosdosruedas.com',
      ctaText: 'ENVIAR MAIL',
      variant: 'email',
    },
  ],
};

export interface ContactB2BFormContent {
  badge: string;
  headline: string;
  subheadline: string;
  features: string[];
  form: {
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    volumeLabel: string;
    volumeOptions: { value: string; label: string }[];
    modalityLabel: string;
    modalityOptions: { value: string; label: string }[];
    submitText: string;
    successMessage: string;
  };
  cta: {
    headline: string;
    subheadline: string;
    badge: string;
    whatsappNumber: string;
  };
}

export const CONTACT_B2B_FORM_CONTENT: ContactB2BFormContent = {
  badge: 'PROPUESTA B2B · GENERAL PUEYRREDÓN',
  headline: 'PEDÍ UN PLAN A MEDIDA',
  subheadline:
    'Si tu negocio despacha a diario en Mar del Plata o necesitás integración de envíos para tu tienda online, armamos un esquema con tarifas fijas, retiros programados y cuenta corriente mensual.',
  features: [
    'Tarifas por volumen',
    'Retiros en tu local',
    'Todo MDQ y Batán',
  ],
  form: {
    nameLabel: 'NOMBRE O COMERCIO',
    namePlaceholder: 'Tu nombre o razón social',
    phoneLabel: 'WHATSAPP / TELÉFONO',
    phonePlaceholder: 'Tu número de contacto',
    volumeLabel: 'VOLUMEN MENSUAL',
    volumeOptions: [
      { value: '20-50', label: '20 a 50 envíos' },
      { value: '50-200', label: '50 a 200 envíos' },
      { value: '200-500', label: '200 a 500 envíos' },
      { value: '500+', label: '+500 envíos (Gran cuenta)' },
    ],
    modalityLabel: 'MODALIDAD',
    modalityOptions: [
      { value: 'express', label: 'Express (2 horas)' },
      { value: 'lowcost', label: 'LowCost (Mismo día)' },
      { value: 'flex', label: 'MercadoLibre Flex' },
      { value: '3pl', label: 'Fulfillment 3PL' },
    ],
    submitText: 'SOLICITAR PLAN Y TARIFAS',
    successMessage: '¡Perfecto! Te contactamos por WhatsApp en menos de 2 minutos con tu plan personalizado.',
  },
  cta: {
    headline: '¿LISTO PARA ESCALAR LA LOGÍSTICA DE TU E-COMMERCE?',
    subheadline: 'Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.',
    badge: 'COTIZACIÓN INMEDIATA',
    whatsappNumber: '542236602699',
  },
};

export interface SocialChannel {
  id: 'facebook' | 'instagram' | 'whatsapp';
  label: string;
  title: string;
  description: string;
  href: string;
  ctaText: string;
}

export interface SocialChannelsContent {
  badge: string;
  headline: string;
  subheadline: string;
  channels: SocialChannel[];
}

export const SOCIAL_CHANNELS_CONTENT: SocialChannelsContent = {
  badge: 'NUESTRA COMUNIDAD DIGITAL',
  headline: 'SEGUÍ NUESTRO MOVIMIENTO',
  subheadline: 'Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.',
  channels: [
    {
      id: 'facebook',
      label: 'FACEBOOK OFICIAL',
      title: 'Envíos DosRuedas',
      description: 'Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.',
      href: 'https://www.facebook.com/share/1RnSzyweir/',
      ctaText: 'SEGUIR COMUNIDAD',
    },
    {
      id: 'instagram',
      label: 'INSTAGRAM MDQ',
      title: '@enviosdosruedas',
      description: 'Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.',
      href: 'https://www.instagram.com/enviosdosruedas/',
      ctaText: 'VER CONTENIDO',
    },
    {
      id: 'whatsapp',
      label: 'WHATSAPP DIRECTO',
      title: '+54 223 660-2699',
      description: 'Escribinos directamente para consultas, contrataciones o soporte express al toque.',
      href: 'https://wa.me/542236602699',
      ctaText: 'INICIAR CHAT',
    },
  ],
};

export interface OfficeInfoContent {
  badge: string;
  headline: string;
  subheadline: string;
  address: {
    label: string;
    value: string;
  };
  phone: {
    label: string;
    value: string;
    href: string;
  };
  email: {
    label: string;
    value: string;
    href: string;
  };
  schedules: Array<{
    label: string;
    hours: string;
    status: string;
  }>;
  additionalInfo: string;
}

export const OFFICE_INFO_CONTENT: OfficeInfoContent = {
  badge: 'CENTRO DE DISTRIBUCIÓN & BASE CENTRAL',
  headline: 'BASE DE OPERACIONES MDQ',
  subheadline: 'Partido de General Pueyrredón',
  address: {
    label: 'Centro de Distribución',
    value: 'Friuli 1972, Mar del Plata',
  },
  phone: {
    label: 'Línea Directa y WhatsApp',
    value: '+54 223 660-2699',
    href: 'tel:+542236602699',
  },
  email: {
    label: 'Atención Comercial',
    value: 'matiascejas@enviosdosruedas.com',
    href: 'mailto:matiascejas@enviosdosruedas.com',
  },
  schedules: [
    { label: 'Lunes a Viernes:', hours: '09:00 - 18:00 hs', status: 'Activo' },
    { label: 'Sábados:', hours: '10:00 - 15:00 hs', status: 'Activo' },
  ],
  additionalInfo: 'Atención presencial y retiro de cargas Friuli 1972',
};

export interface ContactPageCTAContent {
  badge: string;
  headline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

export const CONTACT_PAGE_CTA_CONTENT: ContactPageCTAContent = {
  badge: 'OPERACIONES ACTIVAS MAR DEL PLATA 2026',
  headline: '¿TENÉS ENVÍOS PARA HOY? LOS ENTREGAMOS A TIEMPO.',
  primaryCTA: {
    text: 'COTIZÁ TU ENVÍO',
    href: '/cotizar/express',
  },
  secondaryCTA: {
    text: 'CHATEÁ CON NOSOTROS',
    href: 'https://wa.me/542236602699?text=Hola!%20Quiero%20coordinar%20mis%20env%C3%ADos%20de%20hoy.',
  },
};
