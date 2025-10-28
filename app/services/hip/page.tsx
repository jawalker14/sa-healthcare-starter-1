import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
import { getSettings } from '@/lib/settings';
import { buildWhatsAppUrl } from '@/lib/cta';

export const metadata: Metadata = {
  title: 'Hip therapy',
  description: 'Assessment and rehabilitation plans for hip-related concerns, tailored to your goals.',
};

export default function HipServicePage() {
  const settings = getSettings();
  const whatsappHref = buildWhatsAppUrl(
    settings.contacts.whatsapp || settings.contacts.phone,
    'Hello, I would like to enquire about hip therapy.'
  );
  return (
    <ServiceLayout
      title="Hip therapy"
      intro="Individualised assessment and progressive loading to support comfort, mobility, and function."
      problem={[
        'Discomfort with walking, stairs, or sitting for long periods',
        'Stiffness after rest or activity',
        'Uncertainty about safe activity levels during recovery',
      ]}
      solution={[
        'Assessment centred on your goals and daily demands',
        'Education on pacing, load management, and symptom response',
        'Progressive mobility and strength work matched to your context',
      ]}
      steps={[
        'Understand your story, goals, and key movements',
        'Plan a clear, realistic program and home strategies',
        'Review progress and adapt based on outcomes that matter to you',
      ]}
      benefits={[
        'Clarity on next steps',
        'Confidence to progress activity at the right pace',
        'Tools to support long-term function',
      ]}
      faqs={[
        { q: 'Do I need imaging first?', a: 'Not always. We can advise if imaging may help after an assessment.' },
        { q: 'Can I continue gym or sport?', a: 'Often yes, with adjustments. We will guide safe progression.' },
      ]}
      path="/services/hip"
      bookingHref="/booking"
      whatsappHref={whatsappHref}
    />
  );
}
