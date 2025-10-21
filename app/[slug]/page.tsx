import { getMdxContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export default async function ContentPage({ params }: Props) {
  const content = await getMdxContent(params.slug);
  if (!content) {
    notFound();
  }
  return (
    <article className="prose lg:prose-xl container mx-auto px-4 py-8">
      <h1>{content.title}</h1>
      {content.body && <div dangerouslySetInnerHTML={{ __html: content.body }} />}
    </article>
  );
}

export async function generateStaticParams() {
  const slugs: string[] = await getMdxContent();
  return slugs.map((slug) => ({ slug }));
}