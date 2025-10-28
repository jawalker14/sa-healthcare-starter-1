import { getAllPosts, getPostBySlug, getPostMetaBySlug } from '@/lib/mdx';
import type { Metadata } from 'next';

type Props = { params: { slug: string } };

export default async function ResourcePostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div className="container mx-auto px-4 py-8">Post not found.</div>;
  return (
    <article className="prose lg:prose-xl container mx-auto px-4 py-8">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
  const meta = await getPostMetaBySlug(params.slug);
  const title = meta?.title || params.slug;
  const description = meta?.description || 'Resource article';
  const canonical = `${base}/resources/${params.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { url: canonical, title, description },
    twitter: { title, description },
  };
}
