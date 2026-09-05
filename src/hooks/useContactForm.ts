import { useState, FormEvent } from 'react';
import { buildContactWhatsAppUrl } from '@/lib/domain/whatsapp';

export function useContactForm() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [volume, setVolume] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappUrl = buildContactWhatsAppUrl({ name, business, volume });
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return {
    name,
    setName,
    business,
    setBusiness,
    volume,
    setVolume,
    submitted,
    handleSubmit,
  };
}
