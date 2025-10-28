import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the clinicians and support staff.',
};

export default function TeamPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">Our team</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">Profiles coming soon.</p>
    </section>
  );
}
