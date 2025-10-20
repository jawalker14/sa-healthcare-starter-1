import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default async function ResourcesPage() {
  const posts = await getAllPosts();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/resources/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
            {post.excerpt && <p className="text-gray-600">{post.excerpt}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
