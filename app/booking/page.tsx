import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import CTA from '@/components/ui/CTA';
import BookingEmbed from '@/components/BookingEmbed';
import { getSettings } from '@/lib/settings';
import { buildWhatsAppUrl } from '@/lib/cta';

const base = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
export const metadata: Metadata = {
  title: 'Booking',
  description: 'Schedule an appointment online.',
  alternates: { canonical: `${base}/booking` },
};

export default function BookingPage() {
  const s = getSettings();
  const url = s.booking?.url || '';
  const whatsappHref = buildWhatsAppUrl(s.contacts.whatsapp || s.contacts.phone, 'Hello, I would like to book an appointment.');

  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Book an appointment</h1>
          <p className="mt-4 max-w-2xl text-navy-800/90">Choose a time that suits you. If you can’t find a suitable slot, contact us.</p>
          <div className="mt-8">
            {url ? (
              <BookingEmbed src={url} />
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-navy-800/90">Online booking is not available right now. Please contact us to schedule.</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <CTA href={`mailto:${s.contacts.email}`} variant="secondary" as="link">Email us</CTA>
                  <CTA href={`tel:${s.contacts.phone}`} as="link">Call us</CTA>
                  <CTA href={whatsappHref} as="link">WhatsApp us</CTA>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
