import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Evidence-based care tailored to your needs. Explore our core services.',
};

export default function ServicesIndexPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">Our Services</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">
        We provide patient-centered care guided by current best evidence. Select a service to learn more.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li><a className="text-navy-800 underline hover:text-navy-900" href="/services/knee">Knee therapy</a></li>
        <li><a className="text-navy-800 underline hover:text-navy-900" href="/services/shoulder">Shoulder rehab</a></li>
        <li><a className="text-navy-800 underline hover:text-navy-900" href="/services/spine">Spine care</a></li>
      </ul>
    </section>
  );
}
