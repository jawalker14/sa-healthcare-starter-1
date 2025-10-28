import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import ApplicationForm from '@/components/ApplicationForm';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Open roles and application process.',
};

const ROLES = ['Physiotherapist', 'Administrator'];

export default function CareersPage() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Careers</h1>
          <p className="mt-4 max-w-2xl text-navy-800/90">We welcome expressions of interest from clinicians and support staff.</p>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-navy-900">Open roles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {ROLES.map((role) => (
              <Card key={role} title={role}>
                <p className="text-navy-800/90">Submit a brief application and we will contact you if there is a fit.</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-navy-900">Apply</h2>
          <div className="mt-4">
            <ApplicationForm roles={ROLES} />
          </div>
        </Container>
      </Section>
    </>
  );
}
