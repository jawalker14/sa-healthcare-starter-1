## chore: infra audit + delivery plan

### Context
Initial audit of the repository stack and structure to align with the Advanced Website Package scope. Establish a phased delivery plan covering IA, design system, UX/UI, CMP/analytics, SEO, performance, content, legal, QA, and release.

### Reasoning
Keep PRs small and focused per phase to reduce risk and ease review. Use Next.js App Router features (metadata API, route groups) and Tailwind tokens to ensure consistency and performance. Build a consent-first foundation to comply with POPIA and gate marketing scripts.

### Changes
Added `/docs/plan/phase-plan.md` with phases 0–22, scope, acceptance criteria, timeline, and guardrails.

### Files changed
docs/plan/phase-plan.md (new)

### Testing & QA
Open the repo; verify the docs render in VS Code. Confirm the plan covers all requested phases and compliance items.

Accessibility & Compliance
The plan mandates semantic landmarks, visible focus, reduced-motion support, POPIA data minimization, and HPCSA content limits.

### Performance notes
Plan sets CWV targets and recommends font preloading, image optimization, lazy-loading policy, and minimal client JS.

### Compliance notes
POPIA: consent categories, explicit opt-in for analytics/marketing, data minimization and retention disclosures. HPCSA: no testimonials, inducements, superiority claims, or before/after imagery.

### Checklist
- [x] Repo audited (stack, routes, components)
- [x] Gaps identified vs. package scope
- [x] Delivery plan drafted with phases and acceptance criteria
