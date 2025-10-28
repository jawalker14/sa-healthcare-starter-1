# Phase 13 — Meta Pixel conversions (consent-gated)

## Context
- Implement Meta Pixel conversions for key actions, gated by Marketing consent.
- Events: Lead (book now, WhatsApp nav), Contact (WhatsApp/footer, contact form success), Schedule (Calendly scheduled).

## Changes
- `src/lib/pixel.ts` — tiny helper around `fbq('track', ...)` with consent checks.
- `src/components/MetaPixel.tsx` — already loads/init under marketing consent and tracks PageView.
- Wired conversions:
  - Header: WhatsApp (Lead), Book now (Lead)
  - Footer: WhatsApp (Contact)
  - Floating WhatsApp: Contact
  - Booking embed: Schedule on calendly.event_scheduled
  - Contact form: Contact on success
  - Application form: Lead on success

## Testing & QA
1) Ensure `settings.json` has `metaPixel.enabled=true` and a valid `pixelId`.
2) Decline Marketing in consent banner → no Pixel calls should fire.
3) Enable Marketing consent → PageView fires on navigation.
4) Click WhatsApp links (nav/footer/floating) → respective conversion events appear in Pixel Helper.
5) Click Book now CTA → Lead event fired.
6) Submit Contact form (success) → Contact event fired; Careers application → Lead event fired.
7) Schedule via Calendly → Schedule event fired.

Compliance: Gated by consent; no PII; purpose-limited conversion events.
Performance: Pixel loads only with consent; async script.

## Branching & PR
```bash
git checkout -b feature/13-meta-pixel
git add -A
git commit -m "feat(marketing): consent-gated Meta Pixel conversions (Lead, Contact, Schedule)"
git push -u origin feature/13-meta-pixel
# Open PR into main using this doc as body
```
