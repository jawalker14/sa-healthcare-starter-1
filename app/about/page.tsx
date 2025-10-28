import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Our mission and values in patient-centered care.',
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">About our practice</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">Content coming soon.</p>
    </section>
  );
}
