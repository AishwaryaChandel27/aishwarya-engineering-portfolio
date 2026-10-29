import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

// dist is committed source, not generated output. Validate it without deleting it.
const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(await readFile(path.join(root, 'vercel.json'), 'utf8'));
if (config.framework !== null || config.outputDirectory !== 'dist') {
  throw new Error('This static portfolio must use framework: null and outputDirectory: dist.');
}
const output = path.join(root, config.outputDirectory);
const errors = [];
const htmlFiles = (await readdir(output)).filter(name => name.endsWith('.html'));
if (!htmlFiles.includes('index.html')) errors.push('Missing dist/index.html');
if (!htmlFiles.includes('404.html')) errors.push('Missing custom 404 page');
const pages = new Map();
for (const name of htmlFiles) {
  const text = await readFile(path.join(output, name), 'utf8');
  const ids = [...text.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map(m => m[1]);
  if (new Set(ids).size !== ids.length) errors.push(`${name}: duplicate HTML IDs`);
  pages.set(name, { text, ids: new Set(ids) });
}
let references = 0;
for (const [name, page] of pages) {
  for (const match of page.text.matchAll(/\b(?:src|href)\s*=\s*["']([^"']*)["']/g)) {
    const value = match[1];
    if (!value || /^(?:[a-z][\w+.-]*:|\/\/)/i.test(value)) continue;
    const url = new URL(value, `https://portfolio.invalid/${name}`);
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    const file = path.resolve(output, relative);
    if (!file.startsWith(output + path.sep)) {
      errors.push(`${name}: asset escapes publish directory: ${value}`);
      continue;
    }
    try {
      if (!(await stat(file)).isFile()) throw new Error('Not a file');
      references++;
    } catch {
      errors.push(`${name}: missing local file ${value}`);
      continue;
    }
    const targetPage = pages.get(relative);
    if (url.hash && targetPage && !targetPage.ids.has(decodeURIComponent(url.hash.slice(1)))) {
      errors.push(`${name}: missing anchor ${value}`);
    }
  }
}
const scripts = (await readdir(output)).filter(name => name.endsWith('.js'));
for (const name of scripts) {
  try { execFileSync(process.execPath, ['--check', path.join(output, name)], { stdio: 'pipe' }); }
  catch (error) { errors.push(`${name}: ${error.stderr?.toString() || error.message}`); }
}
if (errors.length) throw new Error(errors.join('\n'));
console.log(`Static build verified: ${htmlFiles.length} pages, ${scripts.length} scripts, ${references} local references.`);
console.log('Publish directory: dist (homepage: dist/index.html)');
