import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import mdxComponents from '@/components/mdx/MDXComponents';
import { getBlogSlugs, getBlogSourceBySlug } from '@/lib/blog';
import { marked } from 'marked';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
	return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const data = getBlogSourceBySlug(params.slug);
	const title = (data?.frontmatter?.title as string | undefined) || params.slug;
	const description = (data?.frontmatter?.excerpt as string | undefined) || 'Blog post';
	return { title, description };
}

export default function BlogPostPage({ params }: Props) {
	const data = getBlogSourceBySlug(params.slug);
	if (!data) return <Section><Container><p>Post not found.</p></Container></Section>;

	const isMD = true; // We only parse basic MD here; MDX components are prepared for future upgrade
	const html = isMD ? (marked.parse(data.source) as string) : '';

	return (
		<Section>
			<Container>
				<article className="prose lg:prose-xl max-w-none">
					{/* Title if not rendered in content */}
					{!/^#\s+/.test(data.source) && (
						<h1>{(data.frontmatter.title as string | undefined) || params.slug}</h1>
					)}
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</article>
			</Container>
		</Section>
	);
}