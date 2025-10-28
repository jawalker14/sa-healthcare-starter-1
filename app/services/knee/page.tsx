import type { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';
import { getSettings } from '@/lib/settings';
import { buildWhatsAppUrl } from '@/lib/cta';

export const metadata: Metadata = {
  title: 'Knee therapy',
  description: 'Assessment and rehabilitation plans for knee-related concerns, tailored to your goals.',
};

export default function KneeServicePage() {
  const settings = getSettings();
  const whatsappHref = buildWhatsAppUrl(settings.contacts.whatsapp || settings.contacts.phone, 'Hello, I would like to enquire about knee therapy.');
  return (
  <ServiceLayout
      title="Knee therapy"
      intro="Individualised assessment and progressive loading to support recovery and function."
      problem={[
        'Discomfort during daily tasks such as stairs or squatting',
        'Stiffness after periods of sitting or activity',
        'Uncertainty about safe activity levels during recovery',
      ]}
      solution={[
        'Assessment focused on your goals and movement patterns',
        'Education on pacing and activity modification where helpful',
        'Progressive strength and control work aligned to your context',
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
  path="/services/knee"
      bookingHref="/booking"
      whatsappHref={whatsappHref}
    />
  );
}
