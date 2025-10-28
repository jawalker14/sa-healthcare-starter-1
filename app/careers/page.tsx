import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Open roles and application process.',
};

export default function CareersPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">Careers</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">Open roles coming soon.</p>
    </section>
  );
}
