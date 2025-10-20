import { getMdxContent } from '@/lib/mdx';

export default async function TermsPage() {
  const content = await getMdxContent('terms');
  return (
    <article className="prose lg:prose-xl container mx-auto px-4 py-8">
      <h1>{content?.title || 'Terms of Use'}</h1>
      {content?.body && <div dangerouslySetInnerHTML={{ __html: content.body }} />}
    </article>
  );
}
