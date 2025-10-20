# SA Healthcare Starter

This is a Next.js starter template for South African healthcare practices, designed to be HPCSA and POPIA compliant. It utilizes MDX for content management and Tailwind CSS for styling.

## Performance budget (targets)
- LCP: <= 2.5s on 4G (mobile), <= 1.8s on desktop
- CLS: <= 0.1
- TBT: <= 200ms (as a proxy for INP stability)

Tips to stay within budget:
- Use Next.js Image for all hero/above-the-fold images, set width/height, and preload hero if needed.
- Limit third-party scripts; keep Meta Pixel optional and only enabled via settings.
- Ship only what you render: tree-shake components and avoid heavy client JS on static pages.

## Image optimization
- Prefer AVIF/WEBP assets. For raster uploads, compress to <= 200KB for above-the-fold, <= 100KB elsewhere.
- Use sizes and priority on the Image component for heroes, and provide a dominant color placeholder.
- Avoid layout shifts: always specify width/height or aspect-ratio.

## QA checklist (Core Web Vitals + events)
- [ ] LCP below target on home and a service page (mobile + desktop)
- [ ] CLS near 0 (no layout jumps when fonts/images load)
- [ ] TBT within target on key pages
- [ ] All interactive controls reachable via keyboard; focus visible
- [ ] Consent banner does not block primary tasks
- [ ] Meta Pixel disabled by default; when enabled, PageView fires on route change
- [ ] “Book now” click fires Lead event (button, header link, and booking URL)
- [ ] Resources index lists at least two posts; individual post pages render
- [ ] Privacy and Terms pages render

## Features

- Latest stable Next.js with App Router
- TypeScript support
- Tailwind CSS for styling
- MDX support for content pages and blog posts
- Compliance with HPCSA and POPIA regulations
- Serverless contact form with consent checkbox
- Basic Lighthouse performance budget and accessibility focus

## UI Style Guide

Tokens
- Font: Montserrat (loaded via next/font). CSS var: `--font-montserrat`. Tailwind `font-sans` maps to it.
- Colors: premium navy/slate/white palette
   - Navy scale: `navy-50` … `navy-900`; Brand aliases: `brand` (DEFAULT, light, dark)
   - Text: default `text-navy-900`; Muted `text-navy-800/90` or `text-white/80` on dark
- Radii: use `rounded-2xl` for primary surfaces, `rounded-3xl` sparingly for hero/CTA
- Shadows: `shadow-soft` and `shadow-soft-lg` for gentle elevation
- Spacing: balanced rhythm via `py-16 md:py-20` sections; use `gap-6`/`gap-8`

Accessibility
- Focus rings are visible and consistent: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400`
- Skip link: a visually hidden link becomes visible on focus; component `SkipToContent` targets `#main-content`
- Contrast: colors chosen to meet WCAG AA. If in doubt, prefer `navy-800` on white and `white` on `navy-800+`

Motion
- Hover and entrance effects are subtle and reduced-motion aware. Global transitions prefer `duration-250 ease-gentle`
- Respect prefers-reduced-motion: heavy animations are disabled in CSS

Reusable components
- Hero: `src/components/ui/Hero.tsx`
   - Props: `eyebrow?, title, subtitle?, ctaPrimary?, ctaSecondary?, align? ('left'|'center')`
- Section: `src/components/ui/Section.tsx`
   - Props: `as?, contained? (default true), padded? (default true)`
- Card: `src/components/ui/Card.tsx`
   - Props: `title?, as?, onClick?` with soft elevation + hover lift
- CTA: `src/components/ui/CTA.tsx`
   - Props: `href?, variant ('primary'|'secondary'|'ghost'), size ('sm'|'md'|'lg')`

Examples
```tsx
import Hero from '@/components/ui/Hero';
import CTA from '@/components/ui/CTA';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function Page() {
   return (
      <>
         <Hero
            eyebrow="Trusted, patient-first care"
            title="Movement restored, life improved"
            subtitle="Evidence-based therapy tailored to your goals."
            ctaPrimary={<CTA href="#contact">Book an assessment</CTA>}
            ctaSecondary={<CTA href="/resources" variant="secondary">View resources</CTA>}
         />
         <Section>
            <div className="grid md:grid-cols-3 gap-6">
               <Card title="Knee therapy">Recover stability and reduce pain with targeted protocols.</Card>
               <Card title="Shoulder rehab">Improve mobility with progressive loading strategies.</Card>
               <Card title="Spine care">Function-first plans for long-term resilience.</Card>
            </div>
         </Section>
      </>
   );
}
```

## Project Structure

```
sa-healthcare-starter
├── app
│   ├── api
│   │   └── contact
│   │       └── route.ts
│   ├── health
│   │   └── route.ts
│   ├── blog
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── [slug]
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── content
│   ├── data
│   │   └── settings.json
│   ├── pages
│   │   ├── index.mdx
│   │   └── about.mdx
│   ├── posts
│   │   └── welcome.mdx
│   └── partials
│       └── compliance.mdx
├── public
│   └── robots.txt
├── src
│   ├── components
│   │   ├── ConsentNotice.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── MapLink.tsx
│   │   ├── SEO.tsx
│   │   ├── Schema.tsx
│   │   ├── SkipToContent.tsx
│   │   └── WhatsAppCTA.tsx
│   └── lib
│       ├── mdx.ts
│       ├── schema.ts
│       └── settings.ts
├── lighthouse-budget.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/sa-healthcare-starter.git
   cd sa-healthcare-starter
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Building for Production

To build the project for production, run:
```
npm run build
```

### Editing Content

Content is managed using MDX files located in the `content/pages` and `content/posts` directories. You can create new pages or blog posts by adding new `.mdx` files in the respective directories.

### Health Check Endpoint

The application includes a health check endpoint at `/health` that returns a JSON response:
```
{ "ok": true }
```

### Compliance Information

The footer component includes compliance information related to HPCSA and POPIA, which can be found in the `content/partials/compliance.mdx` file.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.