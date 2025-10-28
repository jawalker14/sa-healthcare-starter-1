import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the clinicians and support staff.',
};

type Member = {
  name: string;
  role: string;
  registration?: string; // e.g. HPCSA number
};

const TEAM: Member[] = [
  { name: 'Clinician One', role: 'Physiotherapist', registration: 'HPCSA No. 1234567' },
  { name: 'Clinician Two', role: 'Physiotherapist', registration: 'HPCSA No. 7654321' },
  { name: 'Practice Support', role: 'Administrator' },
];

export default function TeamPage() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Our team</h1>
          <p className="mt-4 max-w-2xl text-navy-800/90">We work together to provide clear, patient-centred care.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <Card key={m.name} title={m.name}>
                <p className="text-sm text-navy-800/90">{m.role}</p>
                {m.registration && <p className="text-xs text-navy-700/80 mt-1">{m.registration}</p>}
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
