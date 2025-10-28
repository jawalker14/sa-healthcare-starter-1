import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Knee therapy',
  description: 'Assessment and rehabilitation plans for knee conditions.',
};

export default function KneeServicePage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">Knee therapy</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">Overview and steps coming soon.</p>
    </section>
  );
}
