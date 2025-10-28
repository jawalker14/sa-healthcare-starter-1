import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { getPartialBySlug } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Compliance',
  description: 'Our approach to regulatory and ethical compliance, including HPCSA and POPIA.',
  alternates: { canonical: `${(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')}/compliance` },
};

export default async function CompliancePage() {
  const partial = await getPartialBySlug('compliance');
  return (
    <Section>
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900">Compliance</h1>
        {partial ? (
          <article className="prose lg:prose-xl max-w-none mt-6" dangerouslySetInnerHTML={{ __html: partial.html }} />
        ) : (
          <p className="mt-6 text-navy-800/90">Compliance information will be published soon.</p>
        )}
      </Container>
    </Section>
  );
}
