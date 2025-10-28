import { MetadataRoute } from 'next';
import { getBlogSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
  const now = new Date().toISOString();

  const staticRoutes = ['/', '/about', '/services', '/services/knee', '/services/shoulder', '/services/spine', '/services/hip', '/team', '/careers', '/contact', '/booking', '/privacy', '/terms', '/blog'];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: 'weekly', priority: p === '/' ? 1 : 0.6 }));

  const posts = getBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = posts.map((slug) => ({ url: `${base}/blog/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 }));

  return [...staticEntries, ...blogEntries];
}
