# Sultan Muhammad Iqbal Portofolio - Prototype v0.1

Personal portfolio built as a **new standalone static website** using the editorial design language of Ruang Reka, but with independent source and data. The original Ruang Reka repo is unchanged.

## Pages

- `/` : homepage, featured projects, four practice areas, career overview
- `/projects.html` : all work with category tabs and search
- `/projects.html?category=workflow|automation|agentic|saas` : distinct portfolio submenus
- `/project.html?id=ruang-reka` : individual, contextual case study; works for every project ID
- `/experience.html` : work history from the uploaded CV
- `/about.html` : introduction, skills, education and certificate excerpt

## Run locally

Requires Node 20+ and Python 3. No npm dependencies or API keys.

```bash
npm run dev
```

Open `http://localhost:4173`. For deployment-ready static output:

```bash
npm test
npm run build
```

Static output is `dist/`. **The personal portfolio is hosted on Cloudflare Pages (not Vercel).** SaaS and digital-product demos may still link to their independent Vercel deployments.

## Cloudflare Pages deployment

**One-time account setup required:** in [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages > Create application > Pages > Connect to Git**, authorize your GitHub account, and select `sultanmuhammadiqbal/sultan-muhammad-iqbal-portfolio`.

| Setting | Value |
| --- | --- |
| Project name | `sultan-muhammad-iqbal-portfolio` (if available) |
| Framework preset | None / no framework |
| Production branch | `main` |
| Root directory | Repository root (`/`) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22.23.4` (pinned via `.node-version`) |
| Environment secrets | None required |

Click **Save and Deploy** (or equivalent). Cloudflare will provide the actual `*.pages.dev` URL after a successful first deployment. Once connected, subsequent pushes to `main` automatically redeploy via Cloudflare's Git integration; other branches may receive preview deployments. No Vercel deployment is needed for this portfolio. See [Cloudflare's Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/).

**Publication warning:** the website currently has `noindex,nofollow` and `robots.txt` disallowing crawlers. That does **not** make the Cloudflare URL private: anyone with the link can still open it. Review claims, employer material, images, and contacts before promoting the URL publicly. To restrict access to reviewers only, configure Cloudflare Access separately.


## Project data

Edit `data/projects.js`. Each project includes title, category, status, problem, method, result/limitation, tags and supporting evidence. The GitHub version currently uses clearly labeled SVG placeholders in `assets/` because the connector cannot transfer the original binary WebP screenshots. The full-resolution CV screenshots are retained in the original local ZIP from ChatGPT; replace placeholders with the approved WebP assets before publishing.

## Privacy and publication gates

1. Site is **noindex, nofollow**, and `robots.txt` blocks crawling. Keep this until review.
2. Original CV/PDF is intentionally **not** shipped. It contains sensitive details including address, birthday, religion, personal phone and email.
3. Current contact CTA points only to the public GitHub profile. Enable other contact channels only after approval.
4. Work results are **self-reported in the uploaded CV** and require verification / permission before public release. Do not assume brands have approved promotional reuse.
5. 'Ruang Reka' and 'Bengkel Rapi' are fictional business demos, not client work.
6. Links copied from the CV to separately hosted project demos (including Vercel) are included for discovery, but their availability was **not** independently confirmed.
7. Public repo `NOVA-AI-Production-PM` was empty at intake; current project shows as planned rather than delivered.
8. Repo `brief-to-proposal-website-jasa` is private; there is no public code link. Another private repository was excluded due to insufficient public-safe description.
9. The GitHub source currently includes SVG placeholders, not the original CV screenshot/portrait binaries. Confirm copyright/publication rights before uploading any actual CV imagery.
10. Optional fonts are loaded from Google Fonts; system-font fallback works without network access.

## GitHub status (15 November 2026)

This repository now contains the portfolio v0.1 source, five HTML pages, catalog data, scripts, styles and labeled SVG fallbacks. Binary screenshots from the CV are **not** yet mirrored in GitHub. The original ZIP produced in ChatGPT contains the full WebP screenshots and can be used to replace these placeholders manually.

The public repo is intentionally not indexed. Cloudflare Pages account linking and the first live deployment require a one-time action from the Cloudflare account owner; GitHub commits alone do not publish the site to Cloudflare.

## Next iteration

- Replace conceptual illustrations with permission-cleared real screenshots.
- Verify Vercel URLs and use a screenshot + fallback for iframe-blocked apps.
- Add an optional public, privacy-safe CV PDF after owner review.
- Review achievement metrics and wording, then enable contact, metadata, canonical URLs, and indexing.