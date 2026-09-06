import { ContactFormInput, QuoteCalculationInput } from '@/types/quote';
import { SITE_CONFIG } from '@/content/site';

export function buildQuoteWhatsAppUrl(
  input: QuoteCalculationInput,
  totalPrice: number
): string {
  const weightDescription =
    input.weight === 'light'
      ? 'Hasta 2kg'
      : input.weight === 'medium'
      ? '2 a 5kg'
      : '5 a 10kg';

  const text = `Hola Envíos DosRuedas! 🛵 Quiero solicitar una cotización/despacho en Mar del Plata:
• Origen: ${input.originZoneName}
• Destino: ${input.destinationZoneName}
• Servicio: ${input.service.toUpperCase()}
• Peso: ${weightDescription}
• Cobro contrareembolso: ${input.needsCashCollection ? 'Sí' : 'No'}
• Tarifa estimada: $${totalPrice.toLocaleString('es-AR')}
¿Tienen disponibilidad para coordinar retiro?`;

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildContactWhatsAppUrl(input: ContactFormInput): string {
  const { name, business, volume } = input;
  const message = `Hola Envíos DosRuedas! 👋 Mi nombre es ${name || 'un comerciante de MDQ'}${
    business ? ` de "${business}"` : ''
  }. Estoy interesado en coordinar envíos de e-commerce en Mar del Plata. Mi volumen estimado es: ${
    volume || 'A consultar'
  }. ¿Podemos coordinar?`;

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
