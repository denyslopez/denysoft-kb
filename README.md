# Denysoft KB

Knowledge base portal for Denysoft tutorials. Built with Astro — deploys to Vercel/Netlify with zero config.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # generates /dist ready to deploy
```

---

## How to Add a Tutorial

### Step 1 — Add the HTML file
Drop the tutorial HTML file in:
```
src/pages/tutorials/your-tutorial-id.html
```
The filename = the URL slug. Example: `logo-design-201.html` → `/tutorials/logo-design-201`

### Step 2 — Add metadata
Open `src/data/tutorials.json` and add one entry:

```json
{
  "id": "your-tutorial-id",
  "title": "Your Tutorial Title",
  "category": "Logo Design",
  "level": "201",
  "description": "Short description shown on the card.",
  "tags": ["tag1", "tag2", "tag3"],
  "dateAdded": "2026-04-29",
  "file": "your-tutorial-id.html"
}
```

**Available levels:** `101` · `201` · `301` · `401` · `501`

**Available categories** (add new ones freely — assign a hex color in `index.astro`):
- Logo Design
- Marketing Funnels
- Landing Pages
- APIs & Webhooks
- Google Business
- AI Productivity
- WhatsApp AI Agent
- Art Direction
- MCP
- Claude Skills

### Step 3 — Deploy
```bash
git add .
git commit -m "add your-tutorial-id"
git push
```
Vercel/Netlify auto-deploys on every push.

---

## Project Structure

```
denysoft-kb/
├── src/
│   ├── data/
│   │   └── tutorials.json      ← metadata for all tutorials
│   ├── layouts/
│   │   └── Base.astro          ← HTML shell
│   └── pages/
│       ├── index.astro         ← portal main page
│       └── tutorials/
│           ├── logo-design-101.html
│           └── ...             ← your tutorials here
├── public/
│   └── favicon.svg
├── astro.config.mjs
└── package.json
```

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Framework: **Astro** (auto-detected)
4. Click Deploy

Done. Every `git push` redeploys automatically.

---

## Adding a New Category Color

In `src/pages/index.astro`, find `const CAT_COLOR` and add:

```js
'Your New Category': '#HEX_COLOR',
```
