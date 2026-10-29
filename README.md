# Aishwarya Chandel — Interactive Portfolio

A complete, responsive portfolio for AI applications, Python automation, data workflows and web development. The cream, violet, coral and lime design includes original anime-inspired bot mascots and animated project previews.

## Run locally

No framework dependencies, API keys or backend are required. The deployment build validates the committed static files. With Python 3 installed, run from the repository root:

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

## Deploy to Vercel

Import this repository and select the `main` branch. Keep **Root Directory** at the repository root (blank or `.`), not `dist`. The committed `vercel.json` sets:

| Setting | Value |
| --- | --- |
| Framework Preset | Other (`framework: null`) |
| Install Command | Skipped; no dependencies |
| Build Command | `npm run build` |
| Output Directory | `dist` |

`npm run build` checks the HTML pages, JavaScript syntax, local asset paths and internal anchors. It validates the existing `dist` folder; it does not generate or delete the site. `npm run check` runs the same validation locally. Node.js and npm are the only build prerequisites.

These file-based settings override the equivalent Vercel dashboard build settings. The Root Directory is a dashboard setting: leave it blank or `.` so Vercel can find `vercel.json` and `package.json`. If an existing project was imported with `dist` as its root, correct that setting and redeploy the latest `main` commit.

**Why this matters:** the homepage is `dist/index.html`. Publishing the repository root can produce a successful deployment with a missing homepage and broken root-relative assets. Publishing `dist` makes `/`, `/app.js`, `/style.css` and `/privacy.html` resolve correctly. Unknown URLs use `dist/404.html`; there is no catch-all rewrite that hides missing files.

For another static host, upload the contents of `dist` or set its publish directory to `dist`. When changing domains, update canonical/social URLs in `dist/index.html`, `dist/robots.txt` and `dist/sitemap.xml`. GitHub Pages project URLs use a repository subpath; adjust root-relative links before deploying there.

The separate Sites deployment is https://aishwarya-engineering-studio.finejam2048.chatgpt.site and requires owner access. It is independent of Vercel.

GitHub repository: https://github.com/AishwaryaChandel27/aishwarya-engineering-portfolio

## Feature boundaries

Concept projects use fictional sample data and are labeled accordingly. Project illustrations are not screenshots. The document demo performs lexical passage retrieval, not a live LLM request. Contact forms prepare an email draft; the visitor sends it through their own email app. No secrets, credentials, private source documents or server-side integrations are included. Google Fonts is an external font request.

## Validation

JavaScript syntax, internal anchors, local assets and unique IDs were checked. Gallery motion logic was tested with DOM mocks. Earlier desktop/mobile checks are documented in `docs/AUDIT-AND-QA.md`; the latest animation additions have not received a new visual browser check because browser access was blocked by a usage limit.

Exported from the deployed portfolio source commit `8c7bae41bdb639cd70a28a63666b848c72ee2f94` on 27 October 2026.
