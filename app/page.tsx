import type { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import CTA from '@/components/ui/CTA';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { getSettings } from '@/lib/settings';

export const metadata: Metadata = {
  title: 'Patient‑centred care for better movement',
  description: 'Evidence-based assessment and rehabilitation focused on your goals. Book an appointment or chat on WhatsApp.',
};

function buildWhatsAppUrl(rawNumber: string | undefined, message: string) {
  if (!rawNumber) return '#';
  const digits = rawNumber.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(message);
  const utm = 'utm_source=website&utm_medium=whatsapp&utm_campaign=cta';
  return `https://wa.me/${digits}?text=${text}&${utm}`;
}

export default function HomePage() {
  const settings = getSettings();
  const whatsappHref = buildWhatsAppUrl(
    settings.contacts.whatsapp || settings.contacts.phone,
    'Hello, I would like to enquire about an appointment.'
  );

  return (
    <>
      {/* Hero */}
      <Hero
        eyebrow="Evidence-based, patient-first care"
        title="Movement restored, life improved"
        subtitle={
          <>
            Individualised assessment and rehabilitation plans guided by current best evidence.
          </>
        }
        ctaPrimary={<CTA href="/booking" data-book-now="true">Book an appointment</CTA>}
        ctaSecondary={<CTA href={whatsappHref} variant="secondary" as="link" aria-label="Chat with us on WhatsApp">WhatsApp us</CTA>}
        align="left"
      />

      {/* Credibility strip */}
      <Section className="bg-gray-50">
        <Container padded>
          <div className="flex flex-col items-start gap-2 text-sm text-navy-700/90">
            <p className="font-semibold">Trusted, professional care</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>Registered with HPCSA</li>
              <li>Ethical practice — no testimonials or incentives</li>
              <li>POPIA-compliant data handling</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Services overview */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-navy-900">How we can help</h2>
          <p className="mt-3 max-w-2xl text-navy-800/90">
            Explore common areas we treat. Your plan will be tailored to your context and goals.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Knee therapy">
              <p>Assessment and progressive loading strategies for knee pain and function.</p>
              <div className="mt-4">
                <CTA href="/services/knee" variant="ghost">Learn more</CTA>
              </div>
            </Card>
            <Card title="Shoulder rehab">
              <p>Improve mobility and strength with a staged, evidence-based approach.</p>
              <div className="mt-4">
                <CTA href="/services/shoulder" variant="ghost">Learn more</CTA>
              </div>
            </Card>
            <Card title="Spine care">
              <p>Function-first plans to help you move with confidence and reduce recurrence.</p>
              <div className="mt-4">
                <CTA href="/services/spine" variant="ghost">Learn more</CTA>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-navy-900">What to expect</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card title="1) Understand">
              <p>We listen to your story and goals, and assess movement and function.</p>
            </Card>
            <Card title="2) Plan">
              <p>We agree a clear plan, timeframes, and at-home strategies that fit your routine.</p>
            </Card>
            <Card title="3) Progress">
              <p>We review and adjust as you progress, focusing on outcomes that matter to you.</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-navy-900">FAQs</h2>
          <div className="mt-6 space-y-3" role="list">
            <details className="group rounded-2xl bg-white ring-1 ring-navy-100 p-4">
              <summary className="cursor-pointer text-navy-900 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400">
                Do I need a referral?
              </summary>
              <div className="mt-2 text-navy-800/90">
                No referral is required. If needed, we will collaborate with your broader care team.
              </div>
            </details>
            <details className="group rounded-2xl bg-white ring-1 ring-navy-100 p-4">
              <summary className="cursor-pointer text-navy-900 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400">
                What should I bring?
              </summary>
              <div className="mt-2 text-navy-800/90">
                Comfortable clothing, relevant reports, and a list of your goals or questions.
              </div>
            </details>
            <details className="group rounded-2xl bg-white ring-1 ring-navy-100 p-4">
              <summary className="cursor-pointer text-navy-900 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400">
                Do you offer WhatsApp support?
              </summary>
              <div className="mt-2 text-navy-800/90">
                You can reach us on WhatsApp for basic logistics (no medical advice via chat).
              </div>
            </details>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-10 shadow-soft">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to get started?</h2>
            <p className="mt-2 text-white/90">Book an appointment or reach out on WhatsApp if you have a quick question.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <CTA href="/booking" data-book-now="true">Book now</CTA>
              <CTA href={whatsappHref} variant="secondary" as="link" aria-label="Chat with us on WhatsApp">WhatsApp us</CTA>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}