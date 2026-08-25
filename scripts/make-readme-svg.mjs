#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MONO = 'ui-monospace,SFMono-Regular,Menlo,monospace';
const ADVANCE = 0.62;

const COLOR = {
  bg: '#0d1117',
  panel: '#161b22',
  edge: '#30363d',
  head: '#e6edf3',
  dim: '#7d8590',
  text: '#c9d1d9',
  good: '#3fb950',
  warn: '#d29922',
  cool: '#58a6ff',
};

function escape(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// SVG collapses runs of spaces, so alignment is held by non-breaking spaces of the same width.
function cells(text) {
  return escape(text).replace(/ /g, '\u00a0');
}

// A quote in a label would close the attribute early and break the whole file.
function attr(text) {
  return escape(text).replace(/"/g, '&quot;').replace(/\n/g, ' ');
}

function fit(text, size, maxPx, what) {
  if (text.length * size * ADVANCE > maxPx) throw new Error(`${what} too wide for ${maxPx}px at font-size ${size}: ${text}`);
  return text;
}

function positive(value, what) {
  if (!Number.isFinite(value) || value <= 0) throw new Error(`${what} came back as ${value}, the drawing would be blank`);
  return value;
}

function open(width, height, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${attr(label)}">
  <rect width="${width}" height="${height}" rx="10" fill="${COLOR.bg}" stroke="${COLOR.edge}"/>
  <g font-family="${MONO}">`;
}

const TIERS = ['easy', 'medium', 'hard', 'expert'];
const NON_PROJECT_DIRS = new Set(['.github', 'scripts', 'docs', 'assets']);
const PRACTICE_DIRS = new Set(['dsa']);
const SOURCE_EXT = /\.(py|java|cpp|hpp|cc|c|h|rs|go|cs|tsx|ts|jsx|js|php|html|css|ipynb|sql|jsp|kt)$/;

function tracked() {
  const out = execFileSync('git', ['ls-files', '-z'], { cwd: ROOT, encoding: 'utf8' });
  const files = out.split('\0').filter(Boolean);
  positive(files.length, 'tracked file count');
  return files;
}

function survey() {
  const all = tracked();
  // Counting the tooling would turn the CI staleness gate red on its own landing commit.
  const files = all.filter((f) => {
    const parts = f.split('/');
    return parts.length > 1 && !NON_PROJECT_DIRS.has(parts[0]);
  });
  positive(files.length, 'project file count');
  const byTop = new Map();
  for (const file of files) {
    const parts = file.split('/');
    if (parts.length < 2 || NON_PROJECT_DIRS.has(parts[0])) continue;
    if (!byTop.has(parts[0])) byTop.set(parts[0], []);
    byTop.get(parts[0]).push(parts);
  }

  const languages = [];
  const topics = [];
  const practice = [];
  for (const [dir, rows] of byTop) {
    const second = new Set(rows.filter((r) => r.length > 2).map((r) => r[1]));
    if (TIERS.some((t) => second.has(t))) {
      const projects = new Set(rows.filter((r) => r.length > 3 && TIERS.includes(r[1])).map((r) => r.slice(0, 3).join('/')));
      languages.push({ dir, count: projects.size });
    } else if (PRACTICE_DIRS.has(dir)) {
      practice.push({ dir, count: second.size, files: rows.filter((r) => r.length > 2 && SOURCE_EXT.test(r[r.length - 1])).length });
    } else if (second.size) {
      topics.push({ dir, count: second.size });
    }
  }

  const order = (a, b) => b.count - a.count || a.dir.localeCompare(b.dir);
  languages.sort(order);
  topics.sort(order);

  const extensions = new Map();
  for (const file of files) {
    const hit = file.match(SOURCE_EXT);
    if (hit) extensions.set(hit[0], (extensions.get(hit[0]) ?? 0) + 1);
  }
  const types = [...extensions].map(([ext, count]) => ({ dir: ext, count })).sort(order).slice(0, 6);

  const source = readFileSync(join(ROOT, 'projects_data.js'), 'utf8');
  const literal = source.match(/const\s+\w+\s*=\s*(\[[\s\S]*\n\]);/);
  if (!literal) throw new Error('projects_data.js: no top-level array literal, the site numbers cannot be derived');
  const entries = new Function(`return ${literal[1]}`)();
  const archive = entries.filter((e) => e.tier !== 'showcase');
  const site = {
    entries: entries.length,
    chips: new Set(archive.map((e) => e.category)).size,
    inRepo: entries.filter((e) => String(e.actionUrl).includes('/engineering-projects')).length,
  };

  const langTotal = languages.reduce((n, l) => n + l.count, 0);
  const topicTotal = topics.reduce((n, t) => n + t.count, 0);

  positive(langTotal, 'projects under language folders');
  positive(topicTotal, 'projects under topic folders');
  positive(languages.length, 'language folder count');
  positive(types.length, 'source file type count');
  positive(site.entries, 'portfolio entry count');
  positive(site.chips, 'portfolio filter chip count');
  positive(site.inRepo, 'portfolio entries pointing into this repo');
  for (const row of [...languages, ...topics, ...types]) positive(row.count, `row count for ${row.dir}`);
  positive(practice.length, `folder count for ${[...PRACTICE_DIRS].join(', ')}`);
  for (const row of practice) {
    positive(row.count, `topic count for ${row.dir}`);
    positive(row.files, `solution count for ${row.dir}`);
  }

  const readmes = files.filter((f) => f.endsWith('README.md')).length;
  positive(readmes, 'README count');

  return { files: files.length, readmes, languages, topics, practice, types, site, langTotal, topicTotal };
}

const group = (n) => n.toLocaleString('en-US');

function glance(data) {
  const tiles = [
    ['PROJECT FOLDERS', group(data.langTotal + data.topicTotal), `${data.langTotal} language, ${data.topicTotal} topic`, COLOR.good],
    ['LANGUAGE FOLDERS', group(data.languages.length), '4 tiers, easy to expert', COLOR.cool],
    ['PROJECT FILES', group(data.files), `${data.readmes} of them READMEs`, COLOR.head],
    ['PORTFOLIO ENTRIES', group(data.site.entries), `${data.site.chips} chips, ${data.site.inRepo} land here`, COLOR.warn],
  ];
  // 195px tile holds 24 glyphs at font-size 12, 14 at font-size 16, 18 at font-size 11 with letter-spacing 1.
  for (const [role, big, small] of tiles) {
    if (role.length > 18) throw new Error(`tile role too long: ${role}`);
    if (big.length > 14 || small.length > 24) throw new Error(`tile text too long: ${big} / ${small}`);
  }
  const width = 880;
  const height = 150;
  const cards = tiles.map(([role, big, small, fill], i) => {
    const x = 20 + i * 215;
    return `<rect x="${x}" y="30" width="195" height="96" rx="8" fill="${COLOR.panel}" stroke="${COLOR.edge}"/>
    <text x="${x + 16}" y="56" fill="${COLOR.dim}" font-size="11" letter-spacing="1">${role}</text>
    <text x="${x + 16}" y="82" fill="${fill}" font-size="16" font-weight="600">${cells(big)}</text>
    <text x="${x + 16}" y="106" fill="${COLOR.dim}" font-size="12">${cells(small)}</text>`;
  }).join('\n    ');
  const label = `Archive at a glance: ${tiles.map(([role, big, small]) => `${role.toLowerCase()} ${big}, ${small}`).join('; ')}`;
  return `${open(width, height, label)}
    ${cards}
  </g>
</svg>
`;
}

const WIDTH = 880;
const LEFT = { x: 20, w: 450, label: 100, bar: 150 };
const RIGHT = { x: 490, w: 370, label: 200 };

function rows(items, x, labelPx, y, step, size, max, bar) {
  const top = Math.max(...items.map((i) => i.count));
  return items.map((item, i) => {
    const rowY = y + i * step;
    fit(item.dir, size, labelPx, `row label ${item.dir}`);
    const value = String(item.count);
    fit(value, size, 44, `row value ${value}`);
    const barW = bar ? Math.max(3, Math.round((item.count / top) * max)) : 0;
    const bars = bar
      ? `<rect x="${x + labelPx + 12}" y="${rowY - 9}" width="${barW}" height="11" rx="3" fill="${item.count === top ? COLOR.good : COLOR.cool}"/>
    <text x="${x + labelPx + 12 + max + 12}" y="${rowY}" fill="${COLOR.text}" font-size="${size}">${cells(value)}</text>`
      : `<text x="${x + labelPx + 12}" y="${rowY}" fill="${COLOR.text}" font-size="${size}">${cells(value)}</text>`;
    return `<text x="${x}" y="${rowY}" fill="${COLOR.text}" font-size="${size}">${cells(item.dir)}</text>
    ${bars}`;
  }).join('\n    ');
}

// A new language or topic folder adds a row, and an unchecked row draws over the next panel.
function fitRows(items, y, step, bottom, what) {
  const last = y + (items.length - 1) * step;
  if (last > bottom) throw new Error(`${what}: ${items.length} rows reach y=${last}, past ${bottom}`);
  return items;
}

function inventory(data) {
  const height = 424;
  const title = fit('what is in the archive, counted from the tracked file list', 14, WIDTH - 40, 'inventory title');
  const practice = data.practice[0];
  const footer = fit(
    `${group(data.files)} project files, ${group(data.readmes)} READMEs, ${practice.files} ${practice.dir} solutions across ${practice.count} topics`,
    12,
    WIDTH - 40,
    'inventory footer',
  );

  const langHead = fit(`PROJECTS BY LANGUAGE FOLDER  (${data.langTotal} total)`, 11, LEFT.w - 28, 'language heading');
  const topicHead = fit(`TOPIC FOLDERS  (${data.topicTotal} projects)`, 11, RIGHT.w - 28, 'topic heading');
  const typeHead = fit('SOURCE FILES BY TYPE', 11, RIGHT.w - 28, 'type heading');

  const langRows = rows(fitRows(data.languages, 100, 25, 374, 'language rows'), LEFT.x + 16, LEFT.label, 100, 25, 12, LEFT.bar, true);
  const topicRows = rows(fitRows(data.topics, 100, 24, 190, 'topic rows'), RIGHT.x + 16, RIGHT.label, 100, 24, 12, 0, false);
  const typeRows = rows(fitRows(data.types, 262, 22, 374, 'type rows'), RIGHT.x + 16, RIGHT.label, 262, 22, 12, 0, false);

  const label = `Inventory of the archive. Projects by language folder: ${data.languages.map((l) => `${l.dir} ${l.count}`).join(', ')}. Topic folders: ${data.topics.map((t) => `${t.dir} ${t.count}`).join(', ')}. Most common source files: ${data.types.map((t) => `${t.dir} ${t.count}`).join(', ')}. ${footer}`;

  return `${open(WIDTH, height, label)}
    <text x="20" y="30" fill="${COLOR.head}" font-size="14" font-weight="600">${cells(title)}</text>
    <rect x="${LEFT.x}" y="46" width="${LEFT.w}" height="332" rx="8" fill="${COLOR.panel}" stroke="${COLOR.edge}"/>
    <text x="${LEFT.x + 16}" y="72" fill="${COLOR.dim}" font-size="11" letter-spacing="1">${cells(langHead)}</text>
    ${langRows}
    <rect x="${RIGHT.x}" y="46" width="${RIGHT.w}" height="150" rx="8" fill="${COLOR.panel}" stroke="${COLOR.edge}"/>
    <text x="${RIGHT.x + 16}" y="72" fill="${COLOR.dim}" font-size="11" letter-spacing="1">${cells(topicHead)}</text>
    ${topicRows}
    <rect x="${RIGHT.x}" y="212" width="${RIGHT.w}" height="166" rx="8" fill="${COLOR.panel}" stroke="${COLOR.edge}"/>
    <text x="${RIGHT.x + 16}" y="240" fill="${COLOR.dim}" font-size="11" letter-spacing="1">${cells(typeHead)}</text>
    ${typeRows}
    <text x="20" y="404" fill="${COLOR.dim}" font-size="12">${cells(footer)}</text>
  </g>
</svg>
`;
}

const data = survey();
mkdirSync(join(ROOT, 'assets'), { recursive: true });
for (const [name, markup] of [['glance.svg', glance(data)], ['inventory.svg', inventory(data)]]) {
  writeFileSync(join(ROOT, 'assets', name), markup);
  process.stdout.write(`wrote assets/${name}\n`);
}
