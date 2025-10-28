import React from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import CTA from '@/components/ui/CTA';

type FAQ = { q: string; a: string };

type Props = {
  title: string;
  intro: string;
  problem: string[];
  solution: string[];
  process: string[];
  benefits: string[];
  faqs?: FAQ[];
  bookingHref?: string;
  whatsappHref?: string;
};

const ServiceLayout: React.FC<Props> = ({ title, intro, problem, solution, process, benefits, faqs = [], bookingHref = '/booking', whatsappHref = '#' }) => {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">{title}</h1>
          <p className="mt-4 max-w-2xl text-navy-800/90">{intro}</p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <CTA href={bookingHref} data-book-now="true">Book an assessment</CTA>
            <CTA href={whatsappHref} variant="secondary" as="link" aria-label="Chat with us on WhatsApp">WhatsApp us</CTA>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900">Common concerns</h2>
          <ul className="mt-3 list-disc pl-6 text-navy-800/90 space-y-1">
            {problem.map((p, i) => (<li key={i}>{p}</li>))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-navy-900">Our approach</h2>
          <ul className="mt-3 list-disc pl-6 text-navy-800/90 space-y-1">
            {solution.map((s, i) => (<li key={i}>{s}</li>))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900">Process</h2>
          <ol className="mt-3 list-decimal pl-6 text-navy-800/90 space-y-1">
            {process.map((s, i) => (<li key={i}>{s}</li>))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900">Benefits</h2>
          <ul className="mt-3 list-disc pl-6 text-navy-800/90 space-y-1">
            {benefits.map((b, i) => (<li key={i}>{b}</li>))}
          </ul>
        </Container>
      </Section>

      {faqs.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold text-navy-900">FAQs</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-2xl bg-white ring-1 ring-navy-100 p-4">
                  <summary className="cursor-pointer text-navy-900 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400">
                    {f.q}
                  </summary>
                  <div className="mt-2 text-navy-800/90">{f.a}</div>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-10 shadow-soft">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to book?</h2>
            <p className="mt-2 text-white/90">Choose a time that suits you or reach out with a quick question.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <CTA href={bookingHref} data-book-now="true">Book now</CTA>
              <CTA href={whatsappHref} variant="secondary" as="link" aria-label="Chat with us on WhatsApp">WhatsApp us</CTA>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServiceLayout;
