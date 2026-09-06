export interface HeroHighlight {
  label: string;
}

export interface HeroContent {
  topBadge: string;
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2: string;
  subtitle: string;
  ctaExpressText: string;
  ctaServicesText: string;
  highlights: HeroHighlight[];
  activeRoutingBadge: string;
  hubLocation: string;
  cadeteStatus: string;
  cardPill1Title: string;
  cardPill1Subtitle: string;
  cardPill2Title: string;
  cardPill2Subtitle: string;
}

export interface MetricFeature {
  title: string;
  description: string;
}

export interface MetricsBentoContent {
  badge: string;
  headline: string;
  description: string;
  features: MetricFeature[];
  heroStat: {
    tag: string;
    value: string;
    label: string;
  };
  cardLostPackages: {
    value: string;
    label: string;
  };
  cardEntrepreneurs: {
    value: string;
    label: string;
  };
}

export interface EcommerceBenefitItem {
  text: string;
}

export interface EcommerceGrowthContent {
  badge: string;
  titlePrefix: string;
  titlePill: string;
  titleSuffix: string;
  description: string;
  mainCard: {
    badge: string;
    title: string;
    description: string;
    benefits: EcommerceBenefitItem[];
    ctaText: string;
  };
  flexCard: {
    badge: string;
    title: string;
    description: string;
    ctaText: string;
  };
  corporateCard: {
    badge: string;
    title: string;
    description: string;
    ctaText: string;
  };
  brandsTickerTitle: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: 'ShoppingBag' | 'Wrench' | 'Shirt' | 'FileText' | 'ClipboardCheck' | 'Package';
  title: string;
  badge1: string;
  badge2: string;
  sla: string;
  description: string;
  features: string[];
}

export interface IndustriesSectionContent {
  badge: string;
  title: string;
  description: string;
  ctaComerciosText: string;
  ctaCuentaCorrienteText: string;
  industries: IndustryItem[];
}

export interface ReviewItem {
  id: number;
  category: string[];
  stars: number;
  badge: string;
  title: string;
  text: string;
  author: string;
  badgeUser?: string;
  time: string;
  avatar: string;
  avatarBg: string;
  cardTheme: 'white' | 'blue-dark' | 'white-border';
}

export interface ReviewStatItem {
  value: string;
  stars?: number;
  label: string;
  iconType: 'star' | 'heart' | 'trending';
  iconBg: string;
  iconColor: string;
}

export interface ReviewCategoryFilter {
  id: string;
  label: string;
  count?: number;
}

export interface TestimonialsSectionContent {
  badge: string;
  title: string;
  description: string;
  stats: ReviewStatItem[];
  categories: ReviewCategoryFilter[];
  reviews: ReviewItem[];
  googleMapsButtonText: string;
  googleMapsUrl: string;
}

export interface HomePageContent {
  hero: HeroContent;
  metrics: MetricsBentoContent;
  ecommerce: EcommerceGrowthContent;
  industries: IndustriesSectionContent;
  testimonials: TestimonialsSectionContent;
}

export const HERO_CONTENT: HeroContent = {
  topBadge: 'TU SOLUCIÓN CONFIABLE EN MAR DEL PLATA',
  headlinePart1: 'MENSAJERÍA Y LOGÍSTICA',
  headlineHighlight: 'E-COMMERCE',
  headlinePart2: 'EN MAR DEL PLATA',
  subtitle:
    'Somos tu partner estratégico en mensajería urbana, envíos en el día y delivery de última milla. Flota propia de motos, cero tercerización y respuesta inmediata.',
  ctaExpressText: 'COTIZÁ EXPRESS',
  ctaServicesText: 'MIRÁ LOS SERVICIOS',
  highlights: [
    { label: '+50K ENVÍOS' },
    { label: 'COBERTURA TOTAL MDQ' },
    { label: 'ENTREGAS EN EL DÍA' },
  ],
  activeRoutingBadge: 'RUTEO ACTIVO · MDQ',
  hubLocation: 'Friuli 1972',
  cadeteStatus: 'Cadete #09 · Güemes → Batán',
  cardPill1Title: 'ENVÍOS SAME-DAY',
  cardPill1Subtitle: 'Entrega en el Día',
  cardPill2Title: 'FLOTA PROPIA',
  cardPill2Subtitle: 'Cero Tercerización',
};

export const METRICS_CONTENT: MetricsBentoContent = {
  badge: 'PARTNER LOGÍSTICO ESPECIALIZADO',
  headline: 'CONECTAMOS MAR DEL PLATA DE PUNTA A PUNTA',
  description:
    'Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo récord con flota propia y tarifas transparentes.',
  features: [
    {
      title: 'ENTREGAS A TIEMPO',
      description:
        'Puntualidad garantizada en cada envío. Optimizamos cada ruta mediante geolocalización avanzada en Mar del Plata.',
    },
    {
      title: 'ENVÍOS SEGUROS',
      description:
        'Protección total de tus paquetes. Despachos con custodia digital y confirmación de entrega en el acto.',
    },
  ],
  heroStat: {
    tag: 'MAR DEL PLATA 2026',
    value: '+50K',
    label: 'ENVÍOS Y ENTREGAS REALIZADAS CON ÉXITO EN TODA LA REGIÓN',
  },
  cardLostPackages: {
    value: '0',
    label: 'PAQUETES EXTRAVIADOS',
  },
  cardEntrepreneurs: {
    value: '+50',
    label: 'EMPRENDEDORES CONFÍAN',
  },
};

export const ECOMMERCE_GROWTH_CONTENT: EcommerceGrowthContent = {
  badge: 'SOCIO ESTRATÉGICO LOCAL',
  titlePrefix: 'POTENCIAMOS TU',
  titlePill: 'MDQ',
  titleSuffix: 'MARCA EN MAR DEL PLATA',
  description:
    'Si vendés online, necesitás un socio logístico que responda al toque. Creamos planes a tu medida con tarifas dinámicas transparentes y recolección programada a domicilio en Mar del Plata.',
  mainCard: {
    badge: 'EMPRENDEDORES',
    title: 'LOGÍSTICA E-COMMERCE',
    description:
      'Gestión de última milla pensada para PyMEs y marcas locales. Optimizamos tus costos de envío con retiros programados a domicilio y soporte post-venta.',
    benefits: [
      { text: 'Soporte comercial dedicado vía WhatsApp' },
      { text: 'Entregas contrareembolso integradas sin cargo extra' },
      { text: 'Rastreo digital transparente para tus clientes' },
    ],
    ctaText: 'CONOCER MÁS',
  },
  flexCard: {
    badge: 'MERCADOLIBRE',
    title: 'ENVÍOS FLEX MELI',
    description:
      'Socio logístico homologado para tus envíos rápidos en el día. Recolección gratis en tu local y entrega garantizada dentro del SLA establecido.',
    ctaText: 'CONFIGURAR FLEX',
  },
  corporateCard: {
    badge: 'CORPORATIVO',
    title: 'SOLUCIONES CORPORATIVAS',
    description:
      'Soporte a gran escala con facturación mensual, ruteos especiales para grandes volúmenes y entregas express coordinadas en Mar del Plata.',
    ctaText: 'ABRIR CUENTA CORRIENTE',
  },
  brandsTickerTitle: 'MARCAS LOCALES QUE CONFÍAN EN NOSOTROS',
};

export const INDUSTRIES_CONTENT: IndustriesSectionContent = {
  badge: 'LOGÍSTICA A MEDIDA DE TU RUBRO · MDQ 2026',
  title: 'SOLUCIONES ESPECIALES PARA INDUSTRIAS',
  description:
    'Adaptamos nuestra flota propia de motos a la dinámica de tu negocio. Elegí tu sector y descubrí cómo optimizamos tus entregas urbanas.',
  ctaComerciosText: 'CONOCER PLAN COMERCIOS',
  ctaCuentaCorrienteText: 'CONSULTAR CUENTA CORRIENTE COMERCIAL',
  industries: [
    {
      id: 'ecommerce',
      name: 'E-COMMERCE',
      iconName: 'ShoppingBag',
      title: 'E-COMMERCE & TIENDAS ONLINE',
      badge1: 'TIEMPO RÉCORD',
      badge2: 'ENVÍOS SAME-DAY INTEGRADOS',
      sla: 'SLA: ENTREGAS MISMO DÍA',
      description:
        'Distribución de última milla para tiendas Shopify, Tiendanube, WooCommerce y MercadoLibre. Notificación inmediata a tus compradores.',
      features: [
        'Integración con plataformas e-commerce',
        'Retiros programados sin costo base',
        'Seguimiento por WhatsApp en tiempo real',
      ],
    },
    {
      id: 'repuestos',
      name: 'REPUESTOS',
      iconName: 'Wrench',
      title: 'REPUESTOS & TALLERES MECÁNICOS',
      badge1: 'URGENCIA MECÁNICA',
      badge2: 'DESPACHO INMEDIATO < 45 MIN',
      sla: 'SLA: PRIORIDAD CRÍTICA',
      description:
        'Envío urgente de autopartes, repuestos para motos, baterías y herramental entre distribuidores, casas de repuestos y talleres de MDQ.',
      features: [
        'Cadetes capacitados para piezas frágiles',
        'Cobertura en zona Av. Champagnat y Juan B. Justo',
        'Cobro en destino contra entrega',
      ],
    },
    {
      id: 'moda',
      name: 'MODA, CALZADO',
      iconName: 'Shirt',
      title: 'MODA, INDUMENTARIA & CALZADO',
      badge1: 'CUIDADO TEXTIL',
      badge2: 'CAMBIOS Y DEVOLUCIONES A DOMICILIO',
      sla: 'SLA: FRANJA HORARIA FLEXIBLE',
      description:
        'Traslado cuidadoso de prendas, calzado y accesorios de marcas locales. Gestión integral de cambios a domicilio sin fricción para el cliente.',
      features: [
        'Mochilas impermeables y protegidas',
        'Logística inversa y re-envíos rápidos',
        'Entregas en zonas comerciales y residenciales',
      ],
    },
    {
      id: 'tramites',
      name: 'TRÁMITES',
      iconName: 'FileText',
      title: 'GESTIONES CORPORATIVAS & TRÁMITES',
      badge1: 'CONFIDENCIALIDAD',
      badge2: 'DOCUMENTACIÓN LEGAL & BANCARIA',
      sla: 'SLA: CUSTODIA FIRMADA',
      description:
        'Mensajería institucional para estudios jurídicos, contables, escribanías y empresas. Pago de impuestos, cheques y firmas certificadas.',
      features: [
        'Custodia digital con confirmación de firma',
        'Rendición de comprobantes en el día',
        'Facturación corporativa unificada',
      ],
    },
    {
      id: 'insumos-medicos',
      name: 'INSUMOS MÉDICOS',
      iconName: 'ClipboardCheck',
      title: 'INSUMOS MÉDICOS & GASTRONÓMICOS',
      badge1: 'PUNTUALIDAD RIGUROSA',
      badge2: 'ENVÍOS PROGRAMADOS PARA COMERCIOS',
      sla: 'SLA: HORARIOS PROGRAMADOS',
      description:
        'Abastecimiento de insumos descartables, ópticas, laboratorios, cafeterías y locales gastronómicos que requieren cumplimiento horario riguroso.',
      features: [
        'Franjas pactadas de entrega',
        'Depósito central Friuli 1972',
        'Atención personalizada',
      ],
    },
    {
      id: 'encomiendas',
      name: 'ENCOMIENDAS',
      iconName: 'Package',
      title: 'ENCOMIENDAS & LOGÍSTICA URBANA',
      badge1: 'VOLUMEN PROGRAMADO',
      badge2: 'RETIRO EN TERMINAL & DESPACHO',
      sla: 'SLA: CONEXIÓN INTERURBANA',
      description:
        'Retiro y despacho de encomiendas desde terminal de micros, empresas de transporte y depósitos de cargas hacia cualquier punto de Mar del Plata.',
      features: [
        'Gestión de guías y remitos oficiales',
        'Almacenamiento temporal en base central',
        'Capacidad combinada moto / utilitario',
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT: TestimonialsSectionContent = {
  badge: '5.0 / 5.0 EN GOOGLE MAPS · CALIFICACIÓN PERFECTA',
  title: 'RESEÑAS REALES DE MAR DEL PLATA',
  description:
    'Deslizá el carrusel para conocer la experiencia de vecinos, tiendas online y emprendedores que confían a diario en nuestra flota propia.',
  googleMapsButtonText: 'VER FICHA Y OPINIONES EN GOOGLE MAPS',
  googleMapsUrl: 'https://maps.google.com/?q=Friuli+1972+Mar+del+Plata',
  stats: [
    {
      iconType: 'star',
      iconBg: 'bg-[#F2E40A]',
      iconColor: 'text-[#002273]',
      value: '5.0',
      stars: 5,
      label: '15 OPINIONES EN GOOGLE MAPS',
    },
    {
      iconType: 'heart',
      iconBg: 'bg-[#0C59F2]',
      iconColor: 'text-white',
      value: '100%',
      label: 'FLOTA PROPIA SIN TERCERIZAR',
    },
    {
      iconType: 'trending',
      iconBg: 'bg-blue-50 border border-blue-200',
      iconColor: 'text-[#0C59F2]',
      value: '+7',
      label: 'AÑOS DE TRAYECTORIA EN MDQ',
    },
  ],
  categories: [
    { id: 'TODAS', label: 'TODAS', count: 12 },
    { id: 'DESTACADAS', label: 'DESTACADAS' },
    { id: 'EXPRESS & FLEX', label: 'EXPRESS & FLEX' },
    { id: 'COMERCIOS & PYMES', label: 'COMERCIOS & PYMES' },
    { id: 'CARA HUMANA', label: 'CARA HUMANA' },
  ],
  reviews: [
    {
      id: 1,
      category: ['TODAS', 'DESTACADAS', 'CARA HUMANA'],
      stars: 5,
      badge: 'Encargo Especial',
      title: '“MI HÉROE LOGÍSTICO POR SEGUNDO AÑO CONSECUTIVO”',
      text: 'Matías de Envíos DosRuedas se convirtió en mi héroe logístico 🍻. Tenía un encargo especial: comprar alfajores Havanna de temporada en MDQ, embalarlos con mimo y enviármelos para que viajen conmigo hasta Europa. Rapidez, comunicación clara y calidez humana.',
      author: 'Sol R',
      badgeUser: 'LOCAL GUIDE',
      time: 'Hace 26 semanas',
      avatar: 'S',
      avatarBg: 'bg-[#002273] text-white',
      cardTheme: 'white-border',
    },
    {
      id: 2,
      category: ['TODAS', 'DESTACADAS', 'EXPRESS & FLEX'],
      stars: 5,
      badge: 'Resolución Inmediata',
      title: '“RESOLVIERON MI PROBLEMA CON LA MEJOR PREDISPOSICIÓN”',
      text: 'Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.',
      author: 'Karen Herrera',
      badgeUser: '',
      time: 'Hace 13 semanas',
      avatar: 'K',
      avatarBg: 'bg-[#F2E40A] text-[#002273]',
      cardTheme: 'blue-dark',
    },
    {
      id: 3,
      category: ['TODAS', 'COMERCIOS & PYMES', 'EXPRESS & FLEX'],
      stars: 5,
      badge: 'Comercio Local',
      title: '“IMPECABLE PARA LLEVAR PEDIDOS A MIS CLIENTES”',
      text: 'Lo usé varias veces para llevar pedidos de mi tienda en Mar del Plata. Impecable el servicio. Además hacen cobro contra entrega sin problemas. ¡Unos genios!',
      author: 'Agustin Torres',
      badgeUser: 'CLIENTE FRECUENTE',
      time: 'Hace 48 semanas',
      avatar: 'A',
      avatarBg: 'bg-[#0C59F2] text-white',
      cardTheme: 'white',
    },
    {
      id: 4,
      category: ['TODAS', 'DESTACADAS', 'COMERCIOS & PYMES'],
      stars: 5,
      badge: 'MercadoLibre Flex',
      title: '“ENTREGAS FLEX EN EL DÍA SIN DEMORAS”',
      text: 'Tengo local en el centro y vendemos por MercadoLibre. Desde que trabajamos con Envíos DosRuedas nuestras calificaciones de envíos están 100% en verde. Jamás un paquete demorado.',
      author: 'Luciana Berardi',
      badgeUser: 'VENDEDOR LÍDER',
      time: 'Hace 8 semanas',
      avatar: 'L',
      avatarBg: 'bg-emerald-600 text-white',
      cardTheme: 'white',
    },
    {
      id: 5,
      category: ['TODAS', 'EXPRESS & FLEX'],
      stars: 5,
      badge: 'Urgencia Repuestos',
      title: '“ME SALVARON UN DESPACHO EN MENOS DE 30 MINUTOS”',
      text: 'Se nos rompió una pieza clave en el taller y el cadete de DosRuedas retiró en Champagnat y me lo trajo volando. Super recomendados en toda la ciudad.',
      author: 'Marcos Díaz',
      badgeUser: 'TALLER MDQ',
      time: 'Hace 15 semanas',
      avatar: 'M',
      avatarBg: 'bg-[#F2E40A] text-[#002273]',
      cardTheme: 'blue-dark',
    },
    {
      id: 6,
      category: ['TODAS', 'CARA HUMANA'],
      stars: 5,
      badge: 'Trámite Bancario',
      title: '“MÁXIMA CONFIANZA Y PUNTUALIDAD”',
      text: 'Manejamos firmas notariales y trámites confidenciales. Siempre puntuales con el remito firmado de vuelta. Un equipo con verdadera vocación de servicio.',
      author: 'Dra. Florencia Gómez',
      badgeUser: 'ESTUDIO JURÍDICO',
      time: 'Hace 20 semanas',
      avatar: 'F',
      avatarBg: 'bg-[#002273] text-white',
      cardTheme: 'white-border',
    },
  ],
};

export const HOME_PAGE_CONTENT: HomePageContent = {
  hero: HERO_CONTENT,
  metrics: METRICS_CONTENT,
  ecommerce: ECOMMERCE_GROWTH_CONTENT,
  industries: INDUSTRIES_CONTENT,
  testimonials: TESTIMONIALS_CONTENT,
};
