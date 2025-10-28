# Phase 18 — Content additions (educational)

## Context
Add two neutral, informational posts aligned with HPCSA/POPIA guidance: educational, no testimonials or claims, and not a substitute for medical advice.

## Changes
- `content/posts/hip-rehab-basics.mdx`
- `content/posts/shoulder-pain-myths.mdx`

## QA
1) Visit `/blog` → new posts appear.
2) Visit each post page → title, excerpt, and content render; metadata/OG/canonical generated.
3) Ensure language remains neutral and informational.

## Branching & PR
```bash
git checkout -b feature/18-content
git add -A
git commit -m "content(blog): add hip rehab basics and shoulder pain myths posts"
git push -u origin feature/18-content
# Open PR into main using this doc as body
```
