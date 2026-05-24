# Restaurant Crawl Scorecard 🍒

A cute retro-diner scorecard for ranking restaurants on your rehearsal-dinner crawl. Built with React + Vite. Persists scores in `localStorage`. Prints nicely to PDF.

## Run it locally

You need [Node.js](https://nodejs.org) (v18 or newer).

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The output lands in `dist/` — a static site you can host anywhere.

```bash
npm run preview   # serve the production build locally to sanity-check it
```

## Deploy it

The `dist/` folder is a plain static site. Easy options:

- **Netlify** — drag-and-drop the `dist` folder at [app.netlify.com/drop](https://app.netlify.com/drop). Done.
- **Vercel** — `npx vercel` from this folder. Follow the prompts.
- **GitHub Pages** — push the repo, set Pages to deploy from the `dist` folder (or use the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package).
- **Cloudflare Pages** — connect the repo, set build command `npm run build` and output dir `dist`.

`vite.config.js` already sets `base: './'` so relative paths work on any host (including subpaths like `yoursite.com/scorecard/`).

## Where to edit things

| Want to change…                  | Edit this file                         |
|----------------------------------|----------------------------------------|
| The list of restaurants          | `src/data.js` → `RESTAURANTS`          |
| The grading categories           | `src/data.js` → `CATEGORIES`           |
| Party size (shown in header)     | `src/data.js` → `PARTY_SIZE`           |
| Colors, fonts, layout            | `src/styles.css` (CSS variables at top)|
| Page header / footer copy        | `src/App.jsx`                          |
| A single restaurant card's logic | `src/components/Card.jsx`              |
| The leaderboard sorting / look   | `src/components/Leaderboard.jsx`       |
| Star behavior                    | `src/components/StarRow.jsx`           |
| Persistence (storage key etc.)   | `src/storage.js`                       |

The retro-diner palette lives at the top of `styles.css` as CSS custom properties — change `--cherry`, `--mustard`, `--teal`, `--cream`, `--ink` to re-skin the whole thing.

## Notes

- **Persistence is per-browser, per-device.** Scores saved on your phone won't sync to your laptop. Pick one device for the crawl.
- **Don't use Incognito** — localStorage is wiped when the tab closes.
- The **↺ Reset** button wipes everything (with a confirm). Use it to start fresh.
- The **★ Print Scorecard** button opens your system print dialog. Choose "Save as PDF" as the destination. Make sure **"Background graphics"** is enabled so the diner colors come through.
