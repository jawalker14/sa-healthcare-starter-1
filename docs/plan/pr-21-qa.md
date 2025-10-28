# Phase 21 — QA checklist

## Scope
Validate accessibility, SEO, performance, consent/analytics, and critical flows before go-live.

## Checklist
- Accessibility
  - Keyboard navigation (skip link, focus rings, tab order)
  - Forms: labels, errors, required; reduced motion honored
  - Color contrast passes WCAG AA
- SEO
  - `/robots.txt` and `/sitemap.xml` valid
  - Canonicals on core pages; OG/Twitter populated
  - JSON-LD on home (org) and services (Breadcrumb/FAQ)
- Performance (CWV)
  - Lighthouse ≥ 90 on Performance (mobile), ≥ 95 on Accessibility/Best Practices/SEO
  - Preconnect present for WhatsApp/booking; no third-party bloat
  - Images lazy-load; fonts swap; minimal CLS
- Compliance
  - POPIA consent banner with categories (Necessary/Analytics/Marketing)
  - Marketing scripts only after consent
  - Legal pages: Privacy, Terms, Compliance
- Analytics/Marketing
  - GA4 only after Analytics consent: events fire (whatsapp_click, booking_click, form_submit, file_download)
  - Meta Pixel only after Marketing consent: Lead/Contact/Schedule
- Forms & booking
  - Contact and Careers forms submit (honeypot, dwell-time) and show success/error states
  - Booking embed loads; scheduled event tracked

## Issues & Notes
Document any deviations and create follow-up tickets before release.

## Branching & PR
```bash
git checkout -b feature/21-qa
git add -A
git commit -m "docs(qa): add comprehensive QA checklist"
git push -u origin feature/21-qa
# Open PR into main using this doc as body
```
