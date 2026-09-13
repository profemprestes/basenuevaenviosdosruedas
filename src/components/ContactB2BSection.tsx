'use client';

import React, { useState, FormEvent } from 'react';
import { Store, Truck, Package, Building2, Check, ArrowRight, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_B2B_FORM_CONTENT } from '@/content/quote';
import { Badge, Button, Card, IconBadge, InputField, SelectField } from '@/components/atoms';
import { cn } from '@/lib/utils';

interface VolumeOption {
  value: string;
  label: string;
}

interface ModalityOption {
  value: string;
  label: string;
}

export default function ContactB2BSection() {
  const content = CONTACT_B2B_FORM_CONTENT;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    volume: '',
    modality: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hola Envíos DosRuedas! 🛵 Quiero solicitar un plan comercial B2B:
• Nombre/Comercio: ${formData.name}
• Teléfono/WhatsApp: ${formData.phone}
• Volumen mensual: ${formData.volume}
• Modalidad: ${formData.modality}

¿Podemos coordinar una llamada para definir el plan y las tarifas?`;

    const url = `https://wa.me/${content.cta.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const volumeOptions: VolumeOption[] = content.form.volumeOptions;
  const modalityOptions: ModalityOption[] = content.form.modalityOptions;

  return (
    <section id="contacto-b2b" aria-label="Plan comercial B2B" className="w-full py-20 lg:py-28 bg-electric-blue bg-tech-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Info & Features */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Badge variant="signal" className="mb-6">
              <Sparkles className="w-3.5 h-3.5 fill-dark-blue text-dark-blue" aria-hidden="true" />
              {content.badge}
            </Badge>

            <h2 className="font-anton uppercase text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight mb-6">
              {content.headline}
            </h2>

            <p className="font-outfit text-blue-100/90 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              {content.subheadline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {content.features.map((feature, idx) => (
                <Card variant="bento-dark" padding="md" hover key={idx} className="text-center">
                  {idx === 0 && <IconBadge variant="yellow-blue" size="lg" className="mx-auto mb-3"><Store className="w-6 h-6" /></IconBadge>}
                  {idx === 1 && <IconBadge variant="yellow-blue" size="lg" className="mx-auto mb-3"><Truck className="w-6 h-6" /></IconBadge>}
                  {idx === 2 && <IconBadge variant="yellow-blue" size="lg" className="mx-auto mb-3"><Package className="w-6 h-6" /></IconBadge>}
                  <p className="font-bebas text-[#F2E40A] text-sm tracking-wider uppercase">{feature}</p>
                </Card>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#0C59F2]">
              <Sparkles className="w-4 h-4 text-[#0C59F2]" aria-hidden="true" />
              <span className="font-bebas text-sm tracking-wider uppercase">Atención comercial directa en Mar del Plata · Sin costos de apertura de cuenta</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <Card variant="bento-white" padding="xl" className="rounded-[32px] border-4 border-blue-400/20 bg-light-grid">
              <form onSubmit={handleSubmit} className="space-y-5">
                <InputField
                  label={content.form.nameLabel}
                  icon={<Store className="w-5 h-5" />}
                  id="b2b-name-input"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder={content.form.namePlaceholder}
                />

                <InputField
                  label={content.form.phoneLabel}
                  icon={<Phone className="w-5 h-5" />}
                  id="b2b-phone-input"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder={content.form.phonePlaceholder}
                />

                <SelectField
                  label={content.form.volumeLabel}
                  icon={<Package className="w-5 h-5" />}
                  id="b2b-volume-select"
                  required
                  options={volumeOptions}
                  placeholder="Seleccioná tu volumen mensual"
                  value={formData.volume}
                  onChange={(e) => handleChange('volume', e.target.value)}
                />

                <SelectField
                  label={content.form.modalityLabel}
                  icon={<Truck className="w-5 h-5" />}
                  id="b2b-modality-select"
                  required
                  options={modalityOptions}
                  placeholder="Seleccioná una opción"
                  value={formData.modality}
                  onChange={(e) => handleChange('modality', e.target.value)}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    fullWidth
                    leftIcon={<ArrowRight className="w-5 h-5 stroke-[2.5]" />}
                  >
                    {content.form.submitText}
                  </Button>
                </div>

                {submitted && (
                  <div aria-live="polite" className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800 text-xs font-outfit">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>{content.form.successMessage}</span>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-10 border-t border-blue-400/20">
          <div className="bg-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-2xl border-4 border-blue-400/20 bg-light-grid relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 flex flex-col items-start">
                <Badge variant="signal" className="mb-6">
                  <Sparkles className="w-3.5 h-3.5 fill-[#002273] text-[#002273]" aria-hidden="true" />
                  {content.cta.badge}
                </Badge>

                <h3 className="font-anton uppercase text-[#0C59F2] text-4xl sm:text-5xl lg:text-[58px] leading-[0.98] tracking-tight mb-6">
                  {content.cta.headline}
                </h3>

                <p className="font-outfit text-slate-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                  {content.cta.subheadline}
                </p>

                <Button
                  variant="primary"
                  size="xl"
                  leftIcon={<MessageCircle className="w-5 h-5 stroke-[2.5]" />}
                  onClick={() => window.open(`https://wa.me/${content.cta.whatsappNumber}`, '_blank', 'noopener,noreferrer')}
                >
                  HABLAR POR WHATSAPP
                </Button>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0C59F2_1px,transparent_1px),linear-gradient(to_bottom,#0C59F2_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none" aria-hidden="true">
                    <Building2 className="w-full h-full text-[#0C59F2]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}