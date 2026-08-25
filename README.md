# Engineering Projects

<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Syne&weight=800&size=34&duration=3000&pause=1000&color=2D3436&center=true&vCenter=true&width=1000&height=90&lines=ENGINEERING+PROJECTS;100+builds+across+11+languages" alt="Engineering Projects" />

  [![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)
  [![Projects](https://img.shields.io/badge/Projects-109-success?style=flat-square)](#jump-to-a-folder)
  [![Languages](https://img.shields.io/badge/Languages-11-3b82f6?style=flat-square)](#jump-to-a-folder)

  ### [Open the portfolio site](https://sudhanshu1402.github.io)

</div>

![Archive at a glance, four tiles: 109 project folders, 100 in language folders and 9 in topic folders; 11 language folders, 4 tiers each, easy to expert; 1,011 project files, 142 of them READMEs; 92 portfolio entries, 13 chips, 84 pointing back into this repo](https://raw.githubusercontent.com/sudhanshu1402/engineering-projects/main/assets/glance.svg)

A personal archive of coding projects, sorted by language and difficulty tier. Also carries a
single-page portfolio site (`index.html`) deployed to GitHub Pages.

## What is in here

![Inventory: 100 projects in 11 language folders, python 16, cpp 10, c and csharp 9, the rest 8 each; topic folders machine-learning-basics 4, android 2, dbms 2, machine-learning 1; commonest files .cpp 77, .py 47, .java 37](https://raw.githubusercontent.com/sudhanshu1402/engineering-projects/main/assets/inventory.svg)

Each language folder splits into `easy`, `medium`, `hard`, `expert`, with its own per-tier README.

## Jump to a folder

| Folder | Projects | Folder | Holds |
| :--- | ---: | :--- | :--- |
| [python](./python) | 16 | [dsa](./dsa) | 67 data structures and algorithms solutions, 7 topics |
| [cpp](./cpp) | 10 | [machine-learning-basics](./machine-learning-basics) | 4 intro machine learning builds |
| [c](./c) | 9 | [android](./android) | photo-manager, scientific-calculator |
| [csharp](./csharp) | 9 | [dbms](./dbms) | hospital-management-system, online-movie-booking-system |
| [go](./go) | 8 | [machine-learning](./machine-learning) | subconscious-robotics |
| [java](./java) | 8 | [learning-practice](./learning-practice) | scratch space |
| [javascript](./javascript) | 8 | | |
| [nodejs](./nodejs) | 8 | | |
| [php](./php) | 8 | | |
| [rust](./rust) | 8 | | |
| [typescript](./typescript) | 8 | | |

## A few of the bigger builds

| Project | Language | What it is |
| :--- | :--- | :--- |
| [load-balancer](./go/hard/load-balancer) | Go | Round-robin L7 load balancer, health-check polling |
| [async-executor](./rust/expert/async-executor) | Rust | Future executor, Waker-based scheduling |
| [kanban-board](./javascript/expert/kanban-board) | JavaScript | Drag-and-drop board, local persistence |
| [photo-manager](./java/hard/photo-manager) | Java | Android photo app on SQLite |
| [subconscious-robotics](./machine-learning/subconscious-robotics) | Python | Self-training framework, Hydra configs |

## Runnable checks

```bash
node scripts/make-readme-svg.mjs   # redraw both images above
node scripts/check-vault.mjs       # portfolio page still matches projects_data.js
```

The images are counted from `git ls-files` and `projects_data.js`. The generator throws rather
than draw a blank frame, and CI fails on drift.

Site, per-project run commands and the full layout: [docs/ARCHIVE.md](./docs/ARCHIVE.md).

## License

[MIT](./LICENSE) - Sudhanshu Singh
