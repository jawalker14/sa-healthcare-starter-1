# Phase 14 — Technical SEO baseline

## Context
Implement foundational SEO with Next.js App Router: robots, sitemap, enriched metadata, and JSON-LD, all settings-driven.

## Changes
- `app/robots.ts`: Dynamic robots with host + sitemap from `NEXT_PUBLIC_SITE_URL`; disallow `/api/`.
- `app/sitemap.ts`: Sitemap including core static routes and blog posts from `content/posts`.
- `app/layout.tsx`:
  - `metadataBase`, `openGraph`, and `twitter` defaults.
  - Optional JSON-LD (`MedicalClinic`) derived from `content/data/settings.json` when `settings.analytics.schema` is true.
- `src/components/SEO.tsx`: Deprecated placeholder to prevent SSR window usage.

## QA
1) Set `NEXT_PUBLIC_SITE_URL=https://example.com` in `.env.local`.
2) Visit `/robots.txt` → host + sitemap match.
3) Visit `/sitemap.xml` → routes + blog posts listed.
4) View page source → metadata present; JSON-LD injected when `analytics.schema=true`.

Accessibility: No interactive UI added.
Performance: Minimal overhead, server-rendered metadata.
Compliance: No PII; purely structural SEO.

## Branching & PR
```bash
git checkout -b feature/14-technical-seo
git add -A
git commit -m "feat(seo): robots, sitemap, enriched metadata, optional JSON-LD"
git push -u origin feature/14-technical-seo
# Open PR into main using this doc as body
```
