import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type PostListItem = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
};

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export async function getAllPosts(): Promise<PostListItem[]> {
  try {
    const files = fs
      .readdirSync(POSTS_DIR)
      .filter((f: string) => f.endsWith('.mdx') || f.endsWith('.md'));

    const items = files.map((file: string) => {
      const slug = file.replace(/\.(mdx|md)$/i, '');
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      const { data, content } = matter(raw);

      let title = data.title as string | undefined;
      if (!title) {
        const h1 = content.match(/^#\s+(.+)$/m);
        title = h1?.[1] || slug.replace(/[-_]/g, ' ');
      }
      const excerpt =
        (data.excerpt as string | undefined) ||
        content.split('\n').find((l: string) => l.trim().length > 0 && !l.startsWith('#'))?.trim();

      return { slug, title, excerpt, date: data.date as string | undefined };
    });

    // sort by date desc if available, else by name
    return items.sort((a: PostListItem, b: PostListItem) =>
      a.date && b.date ? (a.date > b.date ? -1 : 1) : a.slug.localeCompare(b.slug)
    );
  } catch (e) {
    console.error('getAllPosts failed', e);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<{ title: string; html: string; date?: string } | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const mdPath = path.join(POSTS_DIR, `${slug}.md`);
    const target = fs.existsSync(filePath) ? filePath : mdPath;
    if (!fs.existsSync(target)) return null;
    const raw = fs.readFileSync(target, 'utf8');
    const { data, content } = matter(raw);
    let title = (data.title as string | undefined) || content.match(/^#\s+(.+)$/m)?.[1] || slug;
    const html = marked.parse(content) as string;
    return { title, html, date: data.date as string | undefined };
  } catch (e) {
    console.error('getPostBySlug failed', e);
    return null;
  }
}

// Legacy helper used by some pages in this starter
export async function getMdxContent(key?: string): Promise<any> {
  const PAGES_DIR = path.join(process.cwd(), 'content', 'pages');
  if (!key) {
    // return available page slugs (without extension)
    try {
      return fs
        .readdirSync(PAGES_DIR)
        .filter((f: string) => f.endsWith('.mdx') || f.endsWith('.md'))
        .map((f: string) => f.replace(/\.(mdx|md)$/i, ''));
    } catch {
      return [];
    }
  }
  if (key === 'posts') {
    return getAllPosts();
  }
  if (key.startsWith('posts/')) {
    const slug = key.split('/')[1];
    return getPostBySlug(slug);
  }
  // page by slug
  const pagePath = path.join(PAGES_DIR, `${key}.mdx`);
  const mdPath = path.join(PAGES_DIR, `${key}.md`);
  const target = fs.existsSync(pagePath) ? pagePath : mdPath;
  if (!fs.existsSync(target)) return null;
  const raw = fs.readFileSync(target, 'utf8');
  const { data, content } = matter(raw);
  const title = (data.title as string | undefined) || content.match(/^#\s+(.+)$/m)?.[1] || key;
  const body = marked.parse(content) as string;
  return { title, body };
}
