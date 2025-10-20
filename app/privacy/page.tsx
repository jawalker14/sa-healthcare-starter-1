import { getMdxContent } from '@/lib/mdx';

export default async function PrivacyPage() {
  const content = await getMdxContent('privacy');
  return (
    <article className="prose lg:prose-xl container mx-auto px-4 py-8">
      <h1>{content?.title || 'Privacy Policy'}</h1>
      {content?.body && <div dangerouslySetInnerHTML={{ __html: content.body }} />}
    </article>
  );
}
