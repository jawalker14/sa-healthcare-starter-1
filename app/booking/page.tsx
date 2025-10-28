import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking',
  description: 'Schedule an appointment online.',
};

export default function BookingPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-900">Book an appointment</h1>
      <p className="mt-4 text-navy-800/90 max-w-2xl">Scheduler integration coming in Phase 8.</p>
    </section>
  );
}
