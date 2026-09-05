export interface DeliveryZone {
  id: string;
  name: string;
  tier: number;
}

export type ServiceType = 'express' | 'flex' | 'lowcost' | '3pl';
export type PackageWeight = 'light' | 'medium' | 'heavy';

export interface QuoteCalculationInput {
  originZoneName: string;
  destinationZoneName: string;
  service: ServiceType;
  weight: PackageWeight;
  needsCashCollection: boolean;
}

export interface ContactFormInput {
  name: string;
  business: string;
  volume: string;
}
