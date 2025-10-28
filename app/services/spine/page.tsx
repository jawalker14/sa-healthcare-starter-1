import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
import { getSettings } from '@/lib/settings';
import { buildWhatsAppUrl } from '@/lib/cta';

export const metadata: Metadata = {
  title: 'Spine care',
  description: 'Function-first support for back-related concerns with clear, practical steps.',
};

export default function SpineServicePage() {
  const settings = getSettings();
  const whatsappHref = buildWhatsAppUrl(settings.contacts.whatsapp || settings.contacts.phone, 'Hello, I would like to enquire about spine care.');
  return (
  <ServiceLayout
      title="Spine care"
      intro="A practical, progressive plan to help you move with confidence and get back to what matters."
      problem={[
        'Discomfort with bending, sitting, or lifting',
        'Fluctuating symptoms that affect daily tasks',
        'Worry about doing too much or too little',
      ]}
      solution={[
        'Assessment centred on your goals and daily demands',
        'Education on symptom response and pacing strategies',
        'Gradual exposure and strength work matched to your needs',
      ]}
  steps={[
        'Understand your context and key movements',
        'Plan a stepwise program that fits your routine',
        'Review progress and adapt as you build capacity',
      ]}
      benefits={[
        'Clarity and direction',
        'Confidence with day-to-day movement',
        'Support to maintain gains over time',
      ]}
  faqs={[
        { q: 'Do I need a scan?', a: 'Not necessarily. We can advise if imaging is appropriate after an assessment.' },
        { q: 'Can I work while recovering?', a: 'Often yes. We’ll discuss adjustments to help you stay active.' },
      ]}
  path="/services/spine"
      bookingHref="/booking"
      whatsappHref={whatsappHref}
    />
  );
}
