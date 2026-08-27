import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

const outDir = resolve(process.cwd(), 'storybook-static');

const cacheMeta = [
  '<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />',
  '<meta http-equiv="Pragma" content="no-cache" />',
  '<meta http-equiv="Expires" content="0" />',
].join('\n    ');

function injectCacheMeta(filePath) {
  if (!existsSync(filePath)) return;

  let html = readFileSync(filePath, 'utf8');
  if (html.includes('http-equiv="Cache-Control"')) return;

  html = html.replace(/<head>/i, `<head>\n    ${cacheMeta}`);
  writeFileSync(filePath, html);
}

for (const file of ['index.html', 'iframe.html']) {
  injectCacheMeta(join(outDir, file));
}

const nojekyllSource = resolve(process.cwd(), 'public/.nojekyll');
const nojekyllTarget = join(outDir, '.nojekyll');
if (existsSync(nojekyllSource)) {
  copyFileSync(nojekyllSource, nojekyllTarget);
} else if (!existsSync(nojekyllTarget)) {
  writeFileSync(nojekyllTarget, '');
}

console.log('postbuild-storybook: cache meta + .nojekyll applied');
