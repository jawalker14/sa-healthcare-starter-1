import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { getBlogList } from '@/lib/blog';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Updates and educational articles from our practice.',
};

export default function BlogIndexPage() {
	const posts = getBlogList();
	return (
		<Section>
			<Container>
				<h1 className="text-3xl md:text-4xl font-bold text-navy-900">Blog</h1>
				<ul className="mt-6 space-y-6">
					{posts.map((p) => (
						<li key={p.slug} className="border-b border-navy-100 pb-4">
							<h2 className="text-xl font-semibold text-navy-900">
								<Link href={`/blog/${p.slug}`} className="hover:underline underline-offset-4">{p.title}</Link>
							</h2>
							{p.date && <p className="text-xs text-navy-700/80 mt-1">{p.date}</p>}
							{p.excerpt && <p className="text-navy-800/90 mt-2 max-w-2xl">{p.excerpt}</p>}
						</li>
					))}
				</ul>
			</Container>
		</Section>
	);
}