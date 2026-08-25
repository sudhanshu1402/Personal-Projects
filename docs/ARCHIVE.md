# Archive notes

Longer detail that used to sit in the top-level README. The numbers below match what
`node scripts/make-readme-svg.mjs` derives from the tracked file list, but they are written by
hand here. Rerun the generator after adding projects and correct anything that has moved.

## Shape of the repo

Two things live side by side.

1. **The project folders.** 100 projects under the 11 language folders, each split into
   `easy` / `medium` / `hard` / `expert`, plus 9 more under the topic folders (`android`,
   `dbms`, `machine-learning`, `machine-learning-basics`). `dsa` is separate: 67 practice
   solutions across 7 topics, not projects. `learning-practice` is scratch space, README only.
2. **The portfolio site.** `index.html` plus `projects_data.js`, a neumorphic single-page site
   with a custom cursor, deployed to GitHub Pages at
   [sudhanshu1402.github.io](https://sudhanshu1402.github.io).

Difficulty tiers reflect how involved each build is, from one-file exercises up to multi-module
projects. The `easy` tiers are deliberately simple. This is a practice archive, not a product.

## The portfolio site

`projects_data.js` holds 92 entries: 6 hand-picked showcase builds and 86 archive entries,
grouped into 13 filter chips. 84 of the 92 link to a folder in this repo; the other 8 link out
to the standalone showcase repos and their system-design write-ups.

The hero counts and the filter chips are derived from `projects_data.js` at load time.
`scripts/check-vault.mjs` fails CI if a hardcoded count or chip comes back.

`index.html` and `projects_data.js` also exist in the `sudhanshu1402.github.io` repo. Nothing
syncs them, so a change to either one has to be copied across by hand.

To view it locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Automation

`.github/workflows/` holds two GitHub Actions.

- **pages.yml** deploys the static site to GitHub Pages.
- **ci.yml** builds the Go `load-balancer`, syntax-checks every tracked `.js` under `javascript/`
  and `nodejs/` with `node --check`, runs `scripts/check-vault.mjs`, and regenerates the README
  images so their assertions fire on every push.

`scripts/` also holds the README generators (`generate-pages-readmes.js`,
`generate-replit-readmes.js`), `make-production-ready.js`, and `deploy-frontends.sh`.

`projects_data.js` drives the site's project grid and is hand-curated: it carries `tier`,
`isHero` and per-project copy that no folder scan can produce. The old
`scripts/build-directory-data.js` generator was deleted for that reason, it scanned for
`Python-Projects`-style folders that no longer exist and would have emptied the file.

## Running individual projects

There is no single build for the whole repo. Each project runs on its own toolchain, and the
language folder's README has the per-tier list.

```bash
cd go/hard/load-balancer && go run .
cd rust/expert/async-executor && cargo run
cd python/medium/2048 && python3 main.py
cd nodejs/medium/url-shortener && npm install express body-parser && node index.js
```
