#!/usr/bin/env node
/**
 * Export the full Storybook UI (sidebar + preview) as PNG.
 *
 * Usage:
 *   npm run storybook   # in another terminal
 *   node scripts/export-storybook-browser-png.mjs
 *   node scripts/export-storybook-browser-png.mjs --url "http://localhost:6006/?path=/story/..." --out ./exports/page.png
 */

import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

function parseArgs(argv) {
  const args = {
    url: 'http://localhost:6006/?path=/story/projects-mike-s-playground-user-scoped-policies-pages-policy-management--default',
    out: 'exports/policy-management.png',
    width: 1999,
    height: 1113,
    waitMs: 2000,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === '--url' && next) {
      args.url = next;
      i += 1;
    } else if (arg === '--out' && next) {
      args.out = next;
      i += 1;
    } else if (arg === '--width' && next) {
      args.width = Number(next);
      i += 1;
    } else if (arg === '--height' && next) {
      args.height = Number(next);
      i += 1;
    } else if (arg === '--wait-ms' && next) {
      args.waitMs = Number(next);
      i += 1;
    }
  }

  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const outPath = resolve(projectRoot, args.out);
  await mkdir(dirname(outPath), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: args.width, height: args.height },
  });

  try {
    await page.goto(args.url, { waitUntil: 'networkidle', timeout: 120_000 });

    const iframe = page.frameLocator(
      '#storybook-preview-iframe, iframe[title="storybook-preview-iframe"]',
    );
    await iframe.locator('#storybook-root').waitFor({ timeout: 60_000 });

    if (args.waitMs > 0) {
      await page.waitForTimeout(args.waitMs);
    }

    await page.screenshot({ path: outPath, type: 'png' });
    console.log(`Saved ${outPath}`);
    console.log(`Source: ${args.url}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
