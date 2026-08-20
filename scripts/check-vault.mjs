import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const dataSrc = readFileSync(join(root, 'projects_data.js'), 'utf8');

const fail = [];

const match = dataSrc.match(/const\s+\w+\s*=\s*(\[[\s\S]*\n\]);/);
if (!match) {
  fail.push('projects_data.js: no top-level array literal found');
} else {
  const projects = new Function(`return ${match[1]}`)();
  projects.forEach((p, i) => {
    if (!p.category) fail.push(`projects_data.js: entry ${i} (${p.name ?? '?'}) has no category, would render an UNDEFINED chip`);
    if (!p.name) fail.push(`projects_data.js: entry ${i} has no name`);
  });
  const archive = projects.filter((p) => p.tier !== 'showcase');
  const categories = new Set(archive.map((p) => p.category));
  console.log(`${projects.length} entries, ${archive.length} archive, ${categories.size} categories`);
}

for (const id of ['hero-count', 'hero-stacks', 'hero-badge']) {
  if (!html.includes(`id="${id}"`)) fail.push(`index.html: missing #${id}, hero counts would be blank`);
}
if (/ARCHIVE_\d/.test(html)) fail.push('index.html: hardcoded ARCHIVE_<n> badge is back, it drifts from the data');
if (/\d+ projects decoded/.test(html)) fail.push('index.html: hardcoded project count is back, it drifts from the data');
if (/data-filter="(?!all)/.test(html)) fail.push('index.html: hardcoded filter chip is back, new categories become unreachable');

if (fail.length) {
  fail.forEach((f) => console.error(f));
  process.exit(1);
}
console.log('vault page consistent with the data');
