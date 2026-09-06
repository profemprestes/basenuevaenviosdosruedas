export interface PriceRangeProp {
  minKm: number;
  maxKm: number;
  price: number;
}

export const DEFAULT_EXPRESS_PRICE_RANGES: PriceRangeProp[] = [
  { minKm: 0, maxKm: 3, price: 3700 },
  { minKm: 3, maxKm: 6, price: 4600 },
  { minKm: 6, maxKm: 9, price: 6100 },
  { minKm: 9, maxKm: 13, price: 8200 },
  { minKm: 13, maxKm: 16, price: 10500 },
];

export const DEFAULT_LOWCOST_PRICE_RANGES: PriceRangeProp[] = [
  { minKm: 0, maxKm: 3, price: 3000 },
  { minKm: 3, maxKm: 6, price: 4000 },
  { minKm: 6, maxKm: 9, price: 5300 },
  { minKm: 9, maxKm: 13, price: 7000 },
  { minKm: 13, maxKm: 16, price: 9000 },
];

export function calculateDistancePrice(
  distanceKm: number,
  serviceType: 'EXPRESS' | 'LOW_COST' | string = 'EXPRESS',
  customRanges?: PriceRangeProp[]
): number | 'consultar' {
  if (distanceKm > 16) {
    return 'consultar';
  }

  const ranges =
    customRanges && customRanges.length > 0
      ? customRanges
      : serviceType === 'LOW_COST'
      ? DEFAULT_LOWCOST_PRICE_RANGES
      : DEFAULT_EXPRESS_PRICE_RANGES;

  const matchedRange = ranges.find(
    (r) => distanceKm >= r.minKm && distanceKm <= r.maxKm
  );

  if (matchedRange) {
    return matchedRange.price;
  }

  // Base fallback calculation
  const baseRate = serviceType === 'LOW_COST' ? 3000 : 3700;
  const kmRate = serviceType === 'LOW_COST' ? 450 : 550;
  return Math.round(baseRate + distanceKm * kmRate);
}
