# Engineering Projects

<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Syne&weight=800&size=34&duration=3000&pause=1000&color=2D3436&center=true&vCenter=true&width=1000&height=90&lines=ENGINEERING+PROJECTS;100+builds+across+11+languages" alt="Engineering Projects" />

  <br>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)
  [![Projects](https://img.shields.io/badge/Projects-100-success?style=flat-square)](#whats-in-here)
  [![Languages](https://img.shields.io/badge/Languages-11-3b82f6?style=flat-square)](#projects-by-language)

  ### [Open the portfolio site](https://sudhanshu1402.github.io)

</div>

---

A personal archive of coding projects, sorted by language and difficulty. Most are small-to-medium learning builds — some are larger, more involved pieces. The repo also carries a single-page portfolio site (`index.html`) that gets deployed to GitHub Pages.

## What's in here

Two things live side by side:

1. **The project folders** — around 100 standalone projects grouped by language, each split into `easy` / `medium` / `hard` / `expert` tiers. Plus a few topic folders (DSA, DBMS, machine learning, Android).
2. **The portfolio site** — `index.html` + `projects_data.js`, a neumorphic single-page site that showcases a hand-picked set of larger builds and links out to their write-ups.

## Projects by language

Each language folder holds four difficulty tiers (`easy`, `medium`, `hard`, `expert`).

| Folder | Projects |
| :--- | :--- |
| [python](./python) | 16 |
| [cpp](./cpp) | 10 |
| [c](./c) | 9 |
| [csharp](./csharp) | 9 |
| [go](./go) | 8 |
| [java](./java) | 8 |
| [javascript](./javascript) | 8 |
| [nodejs](./nodejs) | 8 |
| [php](./php) | 8 |
| [rust](./rust) | 8 |
| [typescript](./typescript) | 8 |

## Other folders

| Folder | Contents |
| :--- | :--- |
| [dsa](./dsa) | Data-structure & algorithm practice, grouped by topic (array, strings, linked-list, stack, sorting, searching, fundamentals) |
| [dbms](./dbms) | Two database projects: hospital-management-system, online-movie-booking-system |
| [machine-learning](./machine-learning) | Larger ML work (subconscious-robotics) |
| [machine-learning-basics](./machine-learning-basics) | Four intro ML notebooks/scripts: cartoonify-image, fake-news-detection, housing-prices-prediction, price-elasticity-of-demand-analysis |
| [android](./android) | photo-manager, scientific-calculator |
| [learning-practice](./learning-practice) | Scratch space (README only for now) |

## A few of the bigger builds

| Project | Language | What it is |
| :--- | :--- | :--- |
| [load-balancer](./go/hard/load-balancer) | Go | Round-robin L7 load balancer with health-check polling |
| [async-executor](./rust/expert/async-executor) | Rust | Custom future executor with Waker-based scheduling |
| [kanban-board](./javascript/expert/kanban-board) | JavaScript | Drag-and-drop board with local persistence |
| [photo-manager](./java/hard/photo-manager) | Java | Android photo app on SQLite |
| [subconscious-robotics](./machine-learning/subconscious-robotics) | Python | Self-training framework with Hydra configs |

Each language folder has its own README with the full per-tier list.

## The portfolio site

`index.html` is a self-contained single-page site (neumorphic "soft UI" styling, custom cursor on mouse pointers). It reads its content from `projects_data.js`: 8 hand-picked showcase entries that link out to system-design write-ups, plus 84 archive entries. That is 92 of the 100 project folders in the repo, so it does not auto-list everything here.

To view it locally, open `index.html` in a browser, or serve the directory:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

The live version is at [sudhanshu1402.github.io](https://sudhanshu1402.github.io).

## Automation

`.github/workflows/` holds two GitHub Actions:

- **pages.yml** — deploys the static site to GitHub Pages.
- **ci.yml** — builds the Go `load-balancer` and syntax-checks every tracked `.js` under `javascript/` and `nodejs/` with `node --check` on push.

`index.html` and `projects_data.js` also exist in the `sudhanshu1402.github.io` repo. Nothing syncs them, so a change to either one has to be copied across by hand.

The `scripts/` folder has Node/shell helpers used to regenerate per-folder READMEs and rebuild `projects_data.js`.

## Running individual projects

There's no single build for the whole repo — each project runs on its own. Check the language folder's README, then run with the usual toolchain:

```bash
# Go
cd go/hard/load-balancer && go run .

# Rust
cd rust/expert/async-executor && cargo run

# Python
cd python/medium/2048 && python3 main.py

# Node
cd nodejs && npm install && npm start
```

## Scope, honestly

This is a personal practice archive, not a product. Difficulty tiers reflect how involved each build is, from one-file exercises up to multi-module projects. The `easy` tiers are deliberately simple. The site and CI wiring exist to make browsing and deploying the collection less manual.

## License

[MIT](./LICENSE) — Sudhanshu Singh
