'use client';

import React from 'react';
import { User, Store, Package, MessageCircle, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import { CONTACT_FORM_CONTENT } from '@/content/quote';
import { InputField, SelectField } from '@/components/atoms';
import { Button, Badge } from '@/components/atoms';
import { cn } from '@/lib/utils';

export default function ContactQuoteSection() {
  const { name, setName, business, setBusiness, volume, setVolume, submitted, handleSubmit } =
    useContactForm();

  const content = CONTACT_FORM_CONTENT;

  const volumeOptions = content.volumeOptions.map((opt, idx) => ({
    value: opt,
    label: opt,
  }));

  return (
    <section
      id="contacto"
      aria-label="Contacto y cotización inmediata"
      className="w-full py-20 lg:py-28 bg-[#0C59F2] bg-tech-grid relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-2xl border-4 border-blue-400/20 bg-light-grid relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Information */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <Badge variant="signal" className="mb-6">
                <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" aria-hidden="true" />
                {content.badge}
              </Badge>

              <h2 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[58px] leading-[0.98] tracking-tight mb-6">
                {content.headline}
              </h2>

              <p className="font-outfit text-slate-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                {content.description}
              </p>

              <Badge variant="category-light" className="px-4 py-2 rounded-xl">
                <Clock className="w-4 h-4 text-[#0C59F2]" aria-hidden="true" />
                {content.supportTimeBadge}
              </Badge>
            </div>

            {/* Right Column: Form Container */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-[32px] p-6 sm:p-9 border border-slate-200 shadow-xl relative">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <InputField
                    label={content.nameLabel}
                    icon={<User className="w-5 h-5" />}
                    id="contact-name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={content.namePlaceholder}
                  />

                  <InputField
                    label={content.businessLabel}
                    icon={<Store className="w-5 h-5" />}
                    id="contact-business-input"
                    type="text"
                    required
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder={content.businessPlaceholder}
                  />

                  <SelectField
                    label={content.volumeLabel}
                    icon={<Package className="w-5 h-5" />}
                    id="contact-volume-select"
                    required
                    options={volumeOptions}
                    placeholder={content.volumePlaceholder}
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                  />

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="xl"
                      fullWidth
                      leftIcon={<MessageCircle className="w-5 h-5 stroke-[2.5]" />}
                    >
                      {content.submitButtonText}
                    </Button>
                  </div>

                  {submitted && (
                    <div
                      aria-live="polite"
                      className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800 text-xs font-outfit"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <span>{content.successMessage}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}