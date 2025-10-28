# Advanced Website Package – Delivery Plan

Date: 2025-10-28
Repository: sa-healthcare-starter-1
Stack: Next.js (App Router) + TypeScript + Tailwind CSS + MD/MDX parsing

## 0) Infra Audit Summary

Detected:
- Next.js App Router in `app/` with API routes (`/api/contact`, `/health`).
- TypeScript configured; path alias `@/*` -> `src/*` via `tsconfig.json` and Next webpack alias.
- Tailwind configured with Montserrat via `next/font` and custom navy palette.
- Content sourced from `content/pages` and `content/posts` using `gray-matter` + `marked` (no unified/MDX bundler yet).
- SEO components: `SEO.tsx` (Pages Router style) and `Schema.tsx`; Footer has compliance copy. ConsentNotice exists but is not category-based (Necessary/Analytics/Marketing) and isn’t wiring GA4/Pixel to consent. Meta Pixel component present and gated by settings, not by consent categories.
- Existing routes: `/` (basic), dynamic `[slug]` reading `content/pages`, `/resources` (+ `[slug]`), `/privacy`, `/terms`, `/blog` (+ `[slug]` placeholder), `/api/contact`, `/health`.

Gaps vs Package:
- Missing routes: `/services` (+ up to 3 subpages), `/about`, `/team`, `/careers`, `/booking`, custom `/404` page.
- Design system primitives and tokens incomplete (CTA/Hero exist; need Button, Container, Section, Card, Badge, Input, TextArea, Select, plus motion tokens and reduced-motion utilities).
- Homepage lacks required sections and animations.
- Services pages scaffolding/layout missing.
- Team, Careers content & form missing.
- Blog uses ad-hoc MD parsing; needs MDX pipeline with frontmatter typing and components mapping.
- Contact form UI missing; server route exists but no spam guard or consent UI wiring.
- Booking integration not implemented.
- WhatsApp CTA component exists but not globally wired.
- Live chat optional (behind consent) not implemented.
- CMP (cookie/consent banner) not category-based; no Consent Mode bridging (GA4/Pixel) or default-deny policy.
- GA4 not implemented; events not wired.
- Meta Pixel present but not consent-gated.
- Technical SEO baseline needs work: centralized metadata, OG/Twitter, sitemap.xml, canonical strategy, JSON-LD (Org, WebSite/SearchAction, BlogPosting), breadcrumbs (optional).
- Keyword research and on-page SEO pending.
- CWV optimization pass pending (fonts, image priority, code-splitting, lazy-load policy, INP hygiene).
- Legal copy present (privacy/terms via MDX) but needs POPIA disclosures and consent text alignment.

Risks/Notes:
- `SEO.tsx` uses `next/head` and `window` in App Router, which can break SSR. We’ll replace with Next metadata API and server components.
- Current content parsing uses `marked` (no JSX/MDX). Blog and pages should migrate to MDX bundling (e.g., `next-mdx-remote` or MDX with remark/rehype) for components and better control.
- Consent banner currently boolean only; will be replaced with a categories CMP while keeping the UI lean and accessible.

## Delivery Phases & Scope

Each phase maps to a feature branch and PR as specified. Summaries:

1) IA & Routing Skeleton
- Create stubs for: `/`, `/services` (+ up to 3: knee, shoulder, spine), `/about`, `/team`, `/careers`, `/blog` + `/blog/[slug]`, `/contact`, `/privacy`, `/terms`, `/booking`, `/404`.
- Wire Header nav and Footer links; ensure semantic landmarks and skip link.

2) Design System & Tokens
- Tailwind theme tokens for brand colors (navy #27287B, slate #3B556B, white #FFFFFF, light gray #F5F7FA, teal #1AB5A6 sparingly); motion tokens; reduced-motion utilities.
- Components: Button, Container, Section, Card, Badge, Input, TextArea, Select. Update Hero/CTA if needed.

3) Homepage
- Hero with primary CTA to `/booking`, secondary WhatsApp CTA; credibility strip; services overview; process; FAQs; final CTA. CSS-first micro-interactions with reduced-motion fallbacks.

4) Services Pages
- Reusable services layout; sections: problem/solution/process/benefits/FAQs; CTAs; internal links.

5) About, Team, Careers
- About: mission/values; Team: profiles component; Careers: roles listing + simple application form (email only, POPIA consent).

6) Blog System (MDX)
- MDX pipeline with remark/rehype; `/blog` index; `/blog/[slug]` template; two starter posts (stubs) with frontmatter.

7) Contact Form (POPIA)
- Client-side form with name/email/phone/message + required POPIA consent; submit to server route; success/error states; basic spam guard (honeypot + time window); server-side validation/data minimization.

8) Booking Integration
- Embed scheduler (placeholder: Calendly or local iframe via settings); responsive container; track scheduled-event clicks.

9) WhatsApp CTA
- Global component in header/footer and inline; prefilled message + UTM; ARIA labels.

10) Live Chat (Optional)
- Provider toggle via settings/env; load only after Marketing consent.

11) CMP + Consent Mode
- Categories: Necessary/Analytics/Marketing; default deny except Necessary; store consent; wire GA4 + Meta Pixel.

12) GA4 Setup + Events
- GA4 base; consent-aware load; events: form_submit, booking_click, whatsapp_click, file_download; DebugView guidance.

13) Meta Pixel + Conversions
- Base pixel; events: Lead, Contact, Schedule; gated by Marketing consent.

14) Technical SEO Baseline
- Global metadata (Next metadata API), OG/Twitter, robots.txt, sitemap.xml, canonicals, JSON-LD (Organization, WebSite/SearchAction, BlogPosting), breadcrumbs if used.

15) Competitor Research → Keyword Map
- 3–5 competitors; keyword map; briefs in `/docs/seo-keyword-map.md`.

16) On-Page SEO Implementation
- Titles/meta, H1–H3, alts, internal links, BlogPosting JSON-LD on the two posts.

17) Core Web Vitals Optimization
- Fonts preloading, image priority, code-splitting, defer 3P scripts, lazy-load policy, animation hygiene; verify Lighthouse.

18) Core Page Copy (POPIA/HPCSA)
- Neutral, informational copy for all core pages; consent text near forms.

19) Two Blog Posts
- Two 800–1000 word posts with frontmatter and internal links; meta.

20) Legal Pages & Disclosures
- Privacy and Terms with POPIA disclosures; ensure consent text wiring matches CMP and contact form.

21) QA + Revisions (3 rounds)
- `/docs/qa-checklist.md` and `/docs/changelog.md`; R1 internal; R2 client feedback; R3 polish + handover.

22) Release Readiness
- `/docs/release-readiness.md` with green/amber/red for Routes, Booking, WhatsApp, Analytics, SEO, CWV, Legal, A11y.

## Timeline (indicative)
- Week 1: Phases 0–4
- Week 2: Phases 5–10
- Week 3: Phases 11–16
- Week 4: Phases 17–22

## Compliance & Accessibility Principles
- POPIA: collect minimum data; explicit consent; purpose limitation; retention notice; rights & contact; secure handling.
- HPCSA Booklet 2: no testimonials, inducements, superiority claims, or before/after images; factual, patient-centered language.
- A11y: semantic landmarks, headings, keyboard support, visible focus, sufficient contrast, reduced-motion support.

## Performance & SEO Guardrails
- Core Web Vitals targets per README; preload Montserrat subsets; use Next Image for hero; lazy-load below-the-fold.
- Avoid layout shift—set width/height/aspect for media; minimize client JS; hydrate only interactive islands.
- Metadata via Next metadata API; OG/Twitter consistent; canonical per route; JSON-LD on home, blog posts.

## Acceptance Criteria per Phase
- Each PR must include: Context, Reasoning, Changes, Testing & QA, Performance notes, Compliance notes, Screenshots (if UI), Checklist.
- Keep PRs < 400 added lines where possible; split otherwise.
