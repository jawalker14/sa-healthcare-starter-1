# Phase 22 — Release readiness

## Environments & Config
- `.env` has:
  - `NEXT_PUBLIC_SITE_URL=https://YOUR_DOMAIN`
  - `NEXT_PUBLIC_GA4_ID=G-XXXXXXX` (optional)
- `content/data/settings.json` configured (contacts, booking URL, metaPixel/liveChat as needed)

## Consent & Compliance
- Consent banner shows; category toggles work; preferences persist
- Marketing and analytics only load after corresponding consent
- Legal pages present and linked: Privacy, Terms, Compliance, Accessibility

## Monitoring & Rollback
- Consider enabling GA4 DebugView for initial days
- Optional: set up uptime monitoring and error reporting
- Rollback plan: revert last deployment; PRs are atomic per phase

## Final Checks
- QA checklist passed or acceptable exceptions documented
- Sitemap/robots validated in Search Console (post-deploy)

## Branching & PR
```bash
git checkout -b feature/22-release
git add -A
git commit -m "docs(release): add release readiness checklist"
git push -u origin feature/22-release
# Open PR into main using this doc as body
```
