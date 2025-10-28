import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/ContactForm';
import { getSettings } from '@/lib/settings';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with our practice.',
};

export default function ContactPage() {
  const s = getSettings();
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Contact us</h1>
          <p className="mt-4 max-w-2xl text-navy-800/90">We aim to respond within one business day.</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-3 text-navy-800/90">
              <h2 className="text-xl font-semibold text-navy-900">Practice details</h2>
              <p>
                <span className="block">Email: <a href={`mailto:${s.contacts.email}`} className="underline">{s.contacts.email}</a></span>
                <span className="block">Phone: <a href={`tel:${s.contacts.phone}`} className="underline">{s.contacts.phone}</a></span>
              </p>
              <p className="text-sm text-navy-700/80">{s.address.street}, {s.address.city}, {s.address.province}, {s.address.postalCode}</p>
              <div>
                <h3 className="text-sm font-semibold text-navy-900">Hours</h3>
                <ul className="text-sm list-disc pl-6">
                  {Object.entries(s.hours).map(([day, val]) => (
                    <li key={day} className="capitalize">{day}: {val}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-navy-700/80">We process enquiries in line with POPIA and retain messages only as long as necessary to handle your request.</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
