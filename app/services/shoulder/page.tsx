import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shoulder rehab',
  description: 'Assessment and rehabilitation plans for shoulder conditions.',
};

export default function ShoulderServicePage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">Shoulder rehab</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">Overview and steps coming soon.</p>
    </section>
  );
}
