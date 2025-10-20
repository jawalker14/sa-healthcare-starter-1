import { getAllPosts, getPostBySlug } from '@/lib/mdx';

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
