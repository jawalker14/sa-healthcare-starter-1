# Phase 12 — GA4 base + consent-aware events

## Context
- Implement GA4 with strict consent gating using the CMP (Analytics category).
- Load gtag.js only when consent is granted; react to runtime changes.
- Track key events: whatsapp_click, booking_click, form_submit, file_download.
- Privacy: anonymize IP, use beacon transport, no PII.

## Changes
- Added `src/components/GoogleAnalytics.tsx` — loads GA4 on Analytics consent; updates consent state.
- Added `src/lib/analytics.ts` — safe helpers around `gtag`:
  - `trackWhatsAppClick(context)`
  - `trackBookingClick(stage)`
  - `trackFormSubmit(form, status)`
  - `trackFileDownload(fileName)`
- Wired events:
  - `WhatsAppCTA` — click logs `whatsapp_click`.
  - `BookingEmbed` — Calendly scheduled → `booking_click` stage=scheduled.
  - `ContactForm` — submit success/error → `form_submit`.
  - `ApplicationForm` — submit success/error → `form_submit`.
- Mounted `<GoogleAnalytics />` in `app/layout.tsx` beneath `ConsentNotice`.

## Testing & QA
1) Set env var for GA4:
   - In `.env.local` add: `NEXT_PUBLIC_GA4_ID=G-XXXXXXX`.
2) Start dev and open site. Decline Analytics in the consent banner → ensure no network to `gtag/js` and no events fire.
3) Open banner and enable Analytics → `gtag/js` loads; confirm DebugView shows page_view.
4) Click floating WhatsApp button → DebugView shows `whatsapp_click {context: 'floating'}`.
5) On Booking page, schedule a test event (or simulate postMessage) → `booking_click {stage: 'scheduled'}` appears.
6) Submit Contact and Careers forms with valid data → success events logged; trigger an error path to see `status: 'error'`.

Accessibility: No UI changes except click handler; no new focus traps.
Performance: GA loads only with consent; async; beacon transport.
Compliance: Analytics gated; anonymize IP; no PII in events.

## Rollback
Revert the 4 files and remove the GA component and helper.

## Branching & PR
```bash
git checkout -b feature/12-ga4
git add -A
git commit -m "feat(analytics): add GA4 gated by consent + event helpers and wiring"
git push -u origin feature/12-ga4
# Open PR into main using this doc as body
```
