import { useState, useMemo } from 'react';
import { ServiceType, PackageWeight } from '@/types/quote';
import { MDQ_DELIVERY_ZONES } from '@/lib/constants/zones';
import { calculateDeliveryPrice } from '@/lib/domain/pricing';
import { buildQuoteWhatsAppUrl } from '@/lib/domain/whatsapp';

export function useQuoteCalculator(initialService?: string) {
  const [origin, setOrigin] = useState('Centro / Macrocentro');
  const [destination, setDestination] = useState('Güemes / Playa Grande');
  const [service, setService] = useState<ServiceType>(
    (initialService as ServiceType) || 'express'
  );
  const [weight, setWeight] = useState<PackageWeight>('light');
  const [needsCashCollection, setNeedsCashCollection] = useState(false);

  const totalPrice = useMemo(() => {
    return calculateDeliveryPrice({
      originZoneName: origin,
      destinationZoneName: destination,
      service,
      weight,
      needsCashCollection,
    });
  }, [origin, destination, service, weight, needsCashCollection]);

  const sendWhatsApp = () => {
    const url = buildQuoteWhatsAppUrl(
      {
        originZoneName: origin,
        destinationZoneName: destination,
        service,
        weight,
        needsCashCollection,
      },
      totalPrice
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return {
    origin,
    setOrigin,
    destination,
    setDestination,
    service,
    setService,
    weight,
    setWeight,
    needsCashCollection,
    setNeedsCashCollection,
    totalPrice,
    sendWhatsApp,
    zones: MDQ_DELIVERY_ZONES,
  };
}
