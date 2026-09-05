import { QuoteCalculationInput } from '@/types/quote';
import { MDQ_DELIVERY_ZONES } from '@/lib/constants/zones';

export function calculateDeliveryPrice(input: QuoteCalculationInput): number {
  const { originZoneName, destinationZoneName, service, weight, needsCashCollection } = input;

  const originZone = MDQ_DELIVERY_ZONES.find((z) => z.name === originZoneName) || MDQ_DELIVERY_ZONES[0];
  const destZone = MDQ_DELIVERY_ZONES.find((z) => z.name === destinationZoneName) || MDQ_DELIVERY_ZONES[1];

  const zoneDistanceDiff = Math.abs(originZone.tier - destZone.tier);

  let basePrice = 3700;
  if (service === 'lowcost') basePrice = 3000;
  if (service === 'flex') basePrice = 3500;
  if (service === '3pl') basePrice = 4200;

  const distanceCharge = zoneDistanceDiff * 800;
  const weightCharge = weight === 'heavy' ? 1200 : weight === 'medium' ? 600 : 0;
  const cashCharge = needsCashCollection ? 400 : 0;

  return basePrice + distanceCharge + weightCharge + cashCharge;
}
