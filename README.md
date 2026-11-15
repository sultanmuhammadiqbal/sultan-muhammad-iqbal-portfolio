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

Static output is `dist/`. On Vercel set build command `npm run build` and output directory `dist`; no framework is required.

## Project data

Edit `data/projects.js`. Each project includes title, category, status, problem, method, result/limitation, tags and supporting evidence. Existing CV screenshot images live under `assets/`. Other cards use clearly labeled conceptual artwork, not fabricated product screenshots.

## Privacy and publication gates

1. Site is **noindex, nofollow**, and `robots.txt` blocks crawling. Keep this until review.
2. Original CV/PDF is intentionally **not** shipped. It contains sensitive details including address, birthday, religion, personal phone and email.
3. Current contact CTA points only to the public GitHub profile. Enable other contact channels only after approval.
4. Work results are **self-reported in the uploaded CV** and require verification / permission before public release. Do not assume brands have approved promotional reuse.
5. 'Ruang Reka' and 'Bengkel Rapi' are fictional business demos, not client work.
6. Links copied from the CV are included for discovery but Vercel availability was **not** independently confirmed.
7. Public repo `NOVA-AI-Production-PM` was empty at intake; current project shows as planned rather than delivered.
8. Repo `brief-to-proposal-website-jasa` is private; there is no public code link. Another private repository was excluded due to insufficient public-safe description.
9. `assets/` includes screenshots/diagrams and portrait extracted from user-provided CV. Confirm copyright/publication rights before the public site goes live.
10. Optional fonts are loaded from Google Fonts; system-font fallback works without network access.

## To push to a *new* GitHub repository

Create an **empty** repo named `sultan-muhammad-iqbal-portfolio` in the account, then from this directory:

```bash
git init
git checkout -b main
git add .gitignore README.md package.json scripts tests assets data *.html *.css *.js robots.txt
git commit -m "feat: initial personal portfolio prototype"
git remote add origin https://github.com/sultanmuhammadiqbal/sultan-muhammad-iqbal-portfolio.git
git push -u origin main
```

No action is required against `template-website-jasa`. The connected GitHub integration could read and edit existing repositories but did not expose a create-new-repository action in this session, so this deliverable is packaged locally, not pushed.

## Next iteration

- Replace conceptual illustrations with permission-cleared real screenshots.
- Verify Vercel URLs and use a screenshot + fallback for iframe-blocked apps.
- Add an optional public, privacy-safe CV PDF after owner review.
- Review achievement metrics and wording, then enable contact, metadata, canonical URLs, and indexing.