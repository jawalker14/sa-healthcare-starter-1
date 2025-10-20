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