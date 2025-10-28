# Phase 17 — Core Web Vitals (initial pass)

## Context
Reduce connection setup costs for essential third-parties used in primary flows (WhatsApp, booking) via dns-prefetch and preconnect.

## Changes
- `app/head.tsx`: Adds `<link rel="dns-prefetch">` and `<link rel="preconnect">` for:
  - WhatsApp (`https://wa.me`)
  - Booking host derived from `content/data/settings.json` (if present)

## QA
1) Run Lighthouse and WebPageTest; verify reduced connection setup time on WhatsApp/booking navigations.
2) Confirm no marketing trackers are preconnected (gated by consent elsewhere).
3) Check head HTML includes the new link tags.

Performance: Minor head-only additions; no script execution.
Compliance: Only operational endpoints; no tracking added.

## Branching & PR
```bash
git checkout -b feature/17-cwv
git add -A
git commit -m "perf(cwv): add preconnect/dns-prefetch for whatsapp & booking hosts"
git push -u origin feature/17-cwv
# Open PR into main using this doc as body
```
