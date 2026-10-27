# Portfolio audit, design and QA
26 October 2026

## Evidence and positioning
The latest supplied `Profile (1).pdf` was read in full. It provides the contact email, LinkedIn URL, April 2026–present Bitwise role, January 2026–present AdventX internship, January–May 2025 Capital Rush internship, MCA completion and 15+ page contribution. Role dates are user-supplied profile evidence, not independent employment verification. Overlapping roles are not summed into years. Contractual Bitwise title/status should be confirmed before broad promotion. Snowflake remains coursework.

Public repository resources inspected:
- https://github.com/AishwaryaChandel27/portfolio — package manifest, App.tsx, Hero.tsx and Contact.tsx.
- https://github.com/AishwaryaChandel27/AURA — README, application factory, controller, service structure and OpenAI service.
- https://github.com/AishwaryaChandel27/Vihaara--AI-powered-mental-wellness-and-healthcare-app — README, dependency manifest and server routes.
- https://github.com/AishwaryaChandel27/Driver-Drowsiness-Detection-System — README and detection script.
- https://github.com/AishwaryaChandel27/CloudBurst — README and Streamlit inference script.
- GitHub profile README confirms the LinkedIn URL.

The existing Vercel page returned HTTP 200 and its HTML/assets were inspected. Its source uses React/Vite, multiple icon and animation dependencies, a full-height introductory hero, generic project positioning and inconsistent old email addresses. The site uses a Vite default favicon and sparse sharing metadata. A standalone buildless replacement was selected for browser-local interactions; the original Vercel deployment and GitHub repo are unchanged.

Aishwarya-Ad-ai could not be resolved through the connected GitHub search. LeadScorer AI, Teacher Job Finder, TasteTravel and the standalone RAG assistant were not substantiated sufficiently to feature. No implementation was invented for them. CloudBurst has a Streamlit inference interface but the claimed >70% metric was not substantiated; it was not selected as lead proof. Employer dashboards remain private and no employer source was copied.

## Design
Three composition concepts are in `hero-concepts.html`: interactive dark engineering studio, light editorial project-first, and problem-led studio. The selected dark studio combines immediate identity and business value with source inspection. Their comparison is structured judgment, not conversion research. Palette: charcoal, warm white and restrained pale green. Manrope/DM Sans with system fallbacks and Georgia accents. CSS-only purposeful motion, reduced-motion override, no 3D or video.

## Functional verification
| Check | Result / evidence |
|---|---|
| JavaScript syntax | `node --check dist/app.js` passed |
| Project filter | Browser: Data engineering shows only From raw to reliable; All restores gallery |
| Case study | Browser: opens native dialog, details visible, close works |
| Validation demo | Browser + Node fixture: 5 inputs, 2 accepted, 3 rejected, accepted sum 270 |
| Validation edge | Node: non-finite amount rejected |
| Retrieval | Browser: source passages and paragraph references render |
| Unknown question | Browser + Node: no match; no fabricated answer |
| Pricing synonym | Initial browser test found a mismatch; fixed; rerun retrieved paragraph 3 |
| Empty source | Node: returns no matches |
| Service selection | Browser: AI choice updates deliverables and title |
| Contact | Browser with synthetic QA data: produces encoded mailto and visible copyable draft; no message sent |
| Hero controls | Browser: Privacy activated with Enter and source text updated |
| Mobile menu | Browser in 390px iframe: opens, follows Work and closes |
| Local links | Parser check: anchors resolve, local linked assets exist, unique IDs |
| Sitemap | XML parse passed |
| Desktop | 1363px viewport screenshot inspected; no horizontal overflow; CTA bottom 565px within 936px viewport |
| Mobile | 390px iframe, 375px content area: no horizontal overflow; CTA bottom 439px within 844px frame |
| Tablet | 768px iframe, 753px content area: no horizontal overflow; screenshot inspected |
| Reduced motion | CSS rule verified to disable animations/transitions and smooth scroll; OS preference emulation not performed |
| Accessibility | Semantic headings/landmarks, labels, focus indicators, skip link, native modal dialog and text status messages reviewed |
| Console | Observed errors were browser extension metadata errors; no application-source error observed in captured log |

File upload error handling is implemented for file size, extension, empty/binary text and read failure, but native file-chooser upload was not browser-tested. Clipboard copy has a manual-selection fallback; OS email-client delivery was not tested. Screen reader, cross-browser and independent human usability studies were not performed. Automated Lighthouse and field Core Web Vitals were not run; no score is claimed. Assets are small and no animation or application frameworks are shipped; Google Fonts remains an external request.

## First-three-seconds acceptance self-review
- Role: identity line and supporting copy identify AI/data/web development immediately.
- Value: automation and useful data/web tools are described above the CTA.
- Action: Discuss a project is visible without waiting for an animation.
- Curiosity: inspectable document-to-source-result visual leads to a working lab.
- Credibility: no invented clients, results, percentages or production deployment claims.
- Motion: headline and CTA are static and immediately rendered.
- Mobile: stacked composition exposes role, value and CTA before the technical panel.

These are structured self-review outcomes, not proof of measured conversion improvement.

## Delivery and remaining limits
The deployment is a new owner-private Sites portfolio. It is suitable for review, not a public client link yet. Vercel migration instructions are in README.md. No paid services, DNS changes or public profile edits were made. The contact path intentionally prepares email rather than claiming server delivery. A full hosted LLM backend is not configured. Public project apps were source-reviewed, not run; their runtime issues are disclosed in case studies.

Supporting profile, proposal and service-package drafts are in BRANDING-KIT.md. All are unposted drafts. Confirm current role status and preferred business email before a public launch. Keep professional evidence updated after launch.


## Playful redesign — 26 October 2026
User-requested revision: cream/violet/coral/lime visual system, interactive three-mode hero, colorful three-column gallery and nine project entries. Added source-reviewed CloudBurst plus four explicit fictional concept demos: invoice extraction, weighted lead scoring, local travel templates and focus timer. No fictional clients, testimonials or commercial results were introduced.
Browser QA: nine cards render; Concept filter shows four; data hero runs all three steps; invoice extracts valid fields and rejects missing fields/negative amounts; lead score changes from 82 to 37 when service-fit becomes zero; Jaipur plan renders; 10-second timer completes and reset returns to 00:10; mobile 390px iframe has 375px content width with no overflow and CTA bottom at 482px. Reduced-motion rules are inherited from the base stylesheet. JavaScript syntax check passed. Existing contact and retrieval implementations retained.

## Anime-inspired bots — 27 October 2026
Added original violet, coral and lime SVG mascots, animated mission cards mapped to existing AI/automation/web filters, a collapsible navigation guide, animation pause controls, reduced-motion handling, and clearer client-oriented hero copy. No external animation dependency or tracking was added.

Validation: Node syntax checks passed for app.js and bots.js; diff whitespace check passed; HTML parser verified unique IDs, local asset paths, internal anchors, six bot containers and valid mission/filter mappings. Existing browser QA above predates this revision. New visual/responsive and interactive browser checks could not be completed: automatic approval review denied opening the local preview because the account usage limit was reached. No updated screenshot or browser-tested claim is made for this revision.

## Project animation revision — 27 October 2026
Added nine project-specific preview animations, bounded pointer tilt, hover/focus sheen and staggered entrances. IntersectionObserver pauses offscreen preview animations; project filter replacements are observed. Existing motion-pause and OS reduced-motion choices apply.
Validation: JS syntax and diff checks passed; CSS brace balance and asset references checked. A Node VM test with DOM mocks passed reveal initialization, bounded pointer tilt, reset, manual pause, reduced-motion guard, filter replacement and offscreen class behavior. This is logic validation, not browser rendering validation. Browser visual QA remains unavailable following the account-usage approval-review block; no new visual test result is claimed.
