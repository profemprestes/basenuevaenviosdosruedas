'use client';

import React, { useEffect } from 'react';
import { X, MapPin, Calculator, Package, MessageCircle } from 'lucide-react';
import { useQuoteCalculator } from '@/hooks/useQuoteCalculator';
import { useModal } from '@/hooks/useModal';
import { ServiceType, PackageWeight } from '@/types/quote';
import { EXPRESS_QUOTE_MODAL_CONTENT } from '@/content/quote';
import { Badge, Button, SelectField } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface ExpressQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

interface ServiceOptionButtonProps {
  option: typeof EXPRESS_QUOTE_MODAL_CONTENT.serviceOptions[0];
  isActive: boolean;
  onClick: () => void;
}

function ServiceOptionButton({ option, isActive, onClick }: ServiceOptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'p-3 rounded-2xl border text-center transition font-bebas text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#0C59F2] cursor-pointer',
        isActive
          ? option.id === 'flex'
            ? 'bg-[#F2E40A] text-[#002273] border-[#F2E40A] shadow font-bold'
            : 'bg-[#00277e] text-[#F2E40A] border-[#00277e] shadow'
          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
      )}
    >
      <span>{option.label}</span>
    </button>
  );
}

interface WeightOptionButtonProps {
  option: typeof EXPRESS_QUOTE_MODAL_CONTENT.weightOptions[0];
  isActive: boolean;
  onClick: () => void;
}

function WeightOptionButton({ option, isActive, onClick }: WeightOptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'p-2.5 rounded-xl border text-center font-outfit text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0C59F2] cursor-pointer',
        isActive
          ? 'bg-blue-50 border-[#0C59F2] text-[#0C59F2]'
          : 'bg-white border-slate-200 text-slate-600'
      )}
    >
      {option.label}
    </button>
  );
}

export default function ExpressQuoteModal({
  isOpen,
  onClose,
  preselectedService,
}: ExpressQuoteModalProps) {
  const {
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
    zones,
  } = useQuoteCalculator(preselectedService);

  const { handleKeyDown, handleBackdropClick } = useModal({
    isOpen,
    onClose,
    trapFocus: true,
  });

  const content = EXPRESS_QUOTE_MODAL_CONTENT;

  // Synchronize preselectedService when modal opens or prop changes
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService as ServiceType);
    }
  }, [preselectedService, setService]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="express-modal-title"
        aria-describedby="express-modal-description"
        className="w-full max-w-xl bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="bg-[#0C59F2] p-6 text-white flex items-center justify-between relative bg-tech-grid">
          <div className="flex items-center gap-3">
            <Badge variant="yellow" className="w-10 h-10 p-0 flex items-center justify-center">
              <Calculator className="w-5 h-5" aria-hidden="true" />
            </Badge>
            <div>
              <span className="font-bebas text-xs tracking-widest uppercase text-[#F2E40A] block">
                {content.headerBadge}
              </span>
              <h2
                id="express-modal-title"
                className="font-anton uppercase text-2xl tracking-tight text-white"
              >
                {content.headerTitle}
              </h2>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="w-9 h-9 p-0 bg-blue-900/60 hover:bg-blue-800 text-white"
            aria-label="Cerrar modal de cotización"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </header>

        {/* Modal Body */}
        <div id="express-modal-description" className="p-6 overflow-y-auto space-y-5">
          {/* Service Selector */}
          <fieldset>
            <legend className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-2">
              {content.serviceLegend}
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {content.serviceOptions.map((opt) => (
                <ServiceOptionButton
                  key={opt.id}
                  option={opt}
                  isActive={service === opt.id}
                  onClick={() => setService(opt.id)}
                />
              ))}
            </div>
          </fieldset>

          {/* Origin & Destination Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField
              label={content.originLabel}
              icon={<MapPin className="w-3.5 h-3.5 text-[#0C59F2]" />}
              id="origin-zone-select"
              options={zones.map((z) => ({ value: z.name, label: z.name }))}
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />

            <SelectField
              label={content.destinationLabel}
              icon={<MapPin className="w-3.5 h-3.5 text-[#F2E40A]" />}
              id="destination-zone-select"
              options={zones.map((z) => ({ value: z.name, label: z.name }))}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>

          {/* Weight Selection */}
          <fieldset>
            <legend className="block font-bebas text-[#002273] text-sm tracking-wider uppercase mb-1.5 flex items-center gap-1">
              <Package className="w-3.5 h-3.5 text-[#0C59F2]" aria-hidden="true" />
              <span>{content.weightLegend}</span>
            </legend>
            <div className="grid grid-cols-3 gap-2">
              {content.weightOptions.map((wOpt) => (
                <WeightOptionButton
                  key={wOpt.id}
                  option={wOpt}
                  isActive={weight === wOpt.id}
                  onClick={() => setWeight(wOpt.id as PackageWeight)}
                />
              ))}
            </div>
          </fieldset>

          {/* Extra: Cash collection */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <input
              type="checkbox"
              id="cash"
              checked={needsCashCollection}
              onChange={(e) => setNeedsCashCollection(e.target.checked)}
              className="w-4 h-4 text-[#0C59F2] rounded focus:ring-[#0C59F2] cursor-pointer"
            />
            <label htmlFor="cash" className="font-outfit text-xs sm:text-sm text-slate-700 cursor-pointer">
              {content.cashCollectionText}
            </label>
          </div>

          {/* Pricing Result Card */}
          <div
            aria-live="polite"
            className="p-4 rounded-2xl bg-[#00277e] text-white flex items-center justify-between border border-blue-400/30 shadow-lg"
          >
            <div>
              <Badge variant="blue-dark" className="text-xs mb-1 block">
                {content.tariffBadge}
              </Badge>
              <div className="font-anton text-3xl sm:text-4xl text-[#F2E40A] leading-none mt-0.5">
                ${totalPrice.toLocaleString('es-AR')}
                <span className="text-xs text-blue-200 font-outfit font-normal ml-1.5">
                  {content.currencySuffix}
                </span>
              </div>
            </div>

            <div className="text-right text-xs font-outfit text-blue-200">
              <span className="block font-semibold text-emerald-400">{content.fleetCheckText}</span>
              <span>{content.baseLocationText}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <footer className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <Button variant="ghost" size="md" onClick={onClose}>
            {content.backButtonText}
          </Button>

          <Button
            variant="primary"
            size="lg"
            fullWidth
            leftIcon={<MessageCircle className="w-5 h-5 fill-[#002273]" />}
            onClick={sendWhatsApp}
          >
            {content.ctaButtonText}
          </Button>
        </footer>
      </div>
    </div>
  );
}