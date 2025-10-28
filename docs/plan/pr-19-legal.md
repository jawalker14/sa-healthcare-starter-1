# Phase 19 — Legal & Compliance pages

## Context
Expose compliance information clearly and maintain centralised content under `content/partials`.

## Changes
- `app/compliance/page.tsx` renders `content/partials/compliance.mdx` if present.
- Footer link to `/compliance`.
- Added to sitemap.

## QA
1) Visit `/compliance` → content renders; canonical present.
2) Footer contains link to Compliance.

## Branching & PR
```bash
git checkout -b feature/19-legal
git add -A
git commit -m "feat(legal): add compliance page + footer link + sitemap"
git push -u origin feature/19-legal
# Open PR into main using this doc as body
```
