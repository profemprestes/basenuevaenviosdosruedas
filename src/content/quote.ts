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
