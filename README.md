# Aishwarya Chandel — Interactive Portfolio

A complete, responsive portfolio for AI applications, Python automation, data workflows and web development. The cream, violet, coral and lime design includes original anime-inspired bot mascots and animated project previews.

## Run locally

No build step, framework dependencies, API keys or backend are required. With Python 3 installed, run from the repository root:

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000. Serve `dist` as the web root; opening the HTML directly or serving the repository root will not resolve root-relative assets correctly.

## Included

- Nine filterable project cards with detailed case studies.
- Four labeled fictional concept demos: invoice parsing, weighted lead scoring, itinerary templates and a focus timer.
- Research document passage retrieval and sample data validation.
- Original SVG bot mascots, animated mission cards and a collapsible project guide.
- Project-specific motion, desktop pointer tilt, scroll entrances and hover effects.
- Manual motion pause, device reduced-motion support and keyboard focus states.
- Contact enquiry drafts addressed to **aishwaryachandel27@gmail.com**.
- Privacy and 404 pages, favicon, social image, sitemap and robots file.

## Files

| Path | Purpose |
| --- | --- |
| `dist/index.html` | Main page and contact form |
| `dist/app.js` | Project data, filters, dialogs and interactive demonstrations |
| `dist/style.css`, `dist/playful.css` | Responsive layout and visual theme |
| `dist/bots.js`, `dist/bots.css` | Mascots, navigation guide and motion controls |
| `dist/project-motion.js`, `dist/project-motion.css` | Gallery animation and visibility handling |
| `docs/` | Design concepts, branding drafts and QA notes |

## Deploy

Upload the contents of `dist` to a static host, or configure its publish/output directory as `dist` with no build command. The source files themselves are the deployable files. When moving to a new domain, update canonical/social URLs in `index.html`, `robots.txt` and `sitemap.xml`. GitHub Pages project URLs use a repository subpath; adjust root-relative asset links before deploying there.

The existing Sites deployment is https://aishwarya-engineering-studio.finejam2048.chatgpt.site and currently requires owner access. This repository contains the complete portable site source on `main`. It does not change the Sites audience.

GitHub repository: https://github.com/AishwaryaChandel27/aishwarya-engineering-portfolio

## Feature boundaries

Concept projects use fictional sample data and are labeled accordingly. Project illustrations are not screenshots. The document demo performs lexical passage retrieval, not a live LLM request. Contact forms prepare an email draft; the visitor sends it through their own email app. No secrets, credentials, private source documents or server-side integrations are included. Google Fonts is an external font request.

## Validation

JavaScript syntax, internal anchors, local assets and unique IDs were checked. Gallery motion logic was tested with DOM mocks. Earlier desktop/mobile checks are documented in `docs/AUDIT-AND-QA.md`; the latest animation additions have not received a new visual browser check because browser access was blocked by a usage limit.

Exported from the deployed portfolio source commit `8c7bae41bdb639cd70a28a63666b848c72ee2f94` on 27 October 2026.
