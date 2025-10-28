import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with our practice.',
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">Contact us</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">Contact form coming in Phase 7.</p>
    </section>
  );
}
