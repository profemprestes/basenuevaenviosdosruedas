'use server';

import { calculateDistancePrice, type PriceRangeProp } from '@/lib/pricing';

export interface QuoteState {
  success: boolean;
  price: number | 'consultar' | null;
  error: string | null;
}

export async function calculateQuoteAction(
  prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  try {
    const distanceKmStr = formData.get('distanceKm');
    const serviceType = (formData.get('serviceType') as string) || 'EXPRESS';
    const priceRangesStr = formData.get('priceRanges') as string;

    if (!distanceKmStr) {
      return {
        success: false,
        price: null,
        error: 'Distancia inválida para calcular la cotización.',
      };
    }

    const distanceKm = parseFloat(distanceKmStr.toString());
    let priceRanges: PriceRangeProp[] | undefined;

    if (priceRangesStr) {
      try {
        priceRanges = JSON.parse(priceRangesStr);
      } catch {
        priceRanges = undefined;
      }
    }

    const calculatedPrice = calculateDistancePrice(distanceKm, serviceType, priceRanges);

    return {
      success: true,
      price: calculatedPrice,
      error: null,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error al procesar la cotización';
    return {
      success: false,
      price: null,
      error: message,
    };
  }
}
