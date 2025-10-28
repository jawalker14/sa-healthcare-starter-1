import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogListItem = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
};

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export function getBlogSlugs(): string[] {
  try {
    return fs
      .readdirSync(POSTS_DIR)
      .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
      .map((f) => f.replace(/\.(mdx|md)$/i, ''));
  } catch {
    return [];
  }
}

export function getBlogList(): BlogListItem[] {
  const slugs = getBlogSlugs();
  const items: BlogListItem[] = slugs.map((slug) => {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const mdPath = path.join(POSTS_DIR, `${slug}.md`);
    const target = fs.existsSync(filePath) ? filePath : mdPath;
    const raw = fs.readFileSync(target, 'utf8');
    const { data, content } = matter(raw);
    const title = (data.title as string | undefined) || content.match(/^#\s+(.+)$/m)?.[1] || slug;
    const firstPara = content.split('\n').find((l) => l.trim().length > 0 && !l.startsWith('#'))?.trim();
    const excerpt = (data.excerpt as string | undefined) || firstPara;
    return { slug, title, excerpt, date: data.date as string | undefined };
  });
  return items.sort((a, b) => (a.date && b.date ? (a.date > b.date ? -1 : 1) : a.slug.localeCompare(b.slug)));
}

export function getBlogSourceBySlug(slug: string): { source: string; frontmatter: Record<string, any> } | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  const target = fs.existsSync(filePath) ? filePath : mdPath;
  if (!fs.existsSync(target)) return null;
  const raw = fs.readFileSync(target, 'utf8');
  const { data, content } = matter(raw);
  return { source: content, frontmatter: data };
}
