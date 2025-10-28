import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
import { getSettings } from '@/lib/settings';
import { buildWhatsAppUrl } from '@/lib/cta';

export const metadata: Metadata = {
  title: 'Shoulder rehab',
  description: 'Support for shoulder-related concerns with staged, evidence-informed progressions.',
};

export default function ShoulderServicePage() {
  const settings = getSettings();
  const whatsappHref = buildWhatsAppUrl(settings.contacts.whatsapp || settings.contacts.phone, 'Hello, I would like to enquire about shoulder rehab.');
  return (
    <ServiceLayout
      title="Shoulder rehab"
      intro="Improve comfort and function with a clear plan that fits your daily routine."
      problem={[
        'Discomfort with reaching overhead or behind the back',
        'Stiffness after periods of inactivity',
        'Unsure how to progress load safely',
      ]}
      solution={[
        'Assessment centred on your goals and key movements',
        'Education on pacing, load management, and symptom response',
        'Progressive mobility and strength work matched to your needs',
      ]}
      process={[
        'Understand your goals and daily demands',
        'Plan a practical program with clear steps',
        'Review, progress, and adapt based on your response',
      ]}
      benefits={[
        'A plan tailored to your context',
        'Confidence in what to do and when',
        'Support to return to meaningful activities',
      ]}
      faqs={[
        { q: 'Will I need to stop activity?', a: 'Often not; we focus on adjusting load while you recover.' },
        { q: 'How long will it take?', a: 'Timelines vary; we’ll set expectations based on your assessment.' },
      ]}
      bookingHref="/booking"
      whatsappHref={whatsappHref}
    />
  );
}
