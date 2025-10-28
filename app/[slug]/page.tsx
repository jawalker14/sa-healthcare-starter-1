import { getMdxContent } from '@/lib/mdx';
import type { Metadata } from 'next';
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
  const data = await getMdxContent(params.slug);
  const title = data?.title || params.slug;
  const firstPara = (data?.body as string | undefined)?.split('\n').find((l) => l.trim().length > 0 && !l.startsWith('<h1'));
  const description = firstPara ? firstPara.replace(/<[^>]+>/g, '').slice(0, 160) : undefined;
  const canonical = `${base}/${params.slug}`;
  return { title, description, alternates: { canonical }, openGraph: { url: canonical, title, description }, twitter: { title, description } };
}