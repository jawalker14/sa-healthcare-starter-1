import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About',
  description: 'Our mission and values in patient-centred care.',
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">About our practice</h1>
          <p className="mt-4 max-w-2xl text-navy-800/90">
            We provide patient-centred assessment and rehabilitation guided by current best evidence. Our aim is to help
            you progress towards outcomes that matter to you.
          </p>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900">Our values</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Integrity">
              <p>We follow HPCSA guidance, communicate clearly, and avoid exaggerated claims.</p>
            </Card>
            <Card title="Respect">
              <p>We listen first and collaborate on plans that suit your goals and context.</p>
            </Card>
            <Card title="Clarity">
              <p>We provide practical, evidence-informed steps you can use day to day.</p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
