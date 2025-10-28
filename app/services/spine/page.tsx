import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spine care',
  description: 'Assessment and rehabilitation plans for spine conditions.',
};

export default function SpineServicePage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">Spine care</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">Overview and steps coming soon.</p>
    </section>
  );
}
