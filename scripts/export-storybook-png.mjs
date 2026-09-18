#!/usr/bin/env node
/**
 * Export a Storybook story as a PNG using Puppeteer.
 *
 * Usage:
 *   npm run storybook   # in another terminal
 *   npm run export-storybook-png -- --story projects-mike-s-playground-user-scoped-policies-pages-policy-management--default
 *   npm run export-storybook-png -- --story <story-id> --out ./exports/policy-management.png
 *   npm run export-storybook-png -- --url "http://localhost:6006/iframe.html?id=..." --out ./exports/page.png
 *
 * Story id is the `id=` param from Storybook (see the URL when viewing a story).
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

function parseArgs(argv) {
  const args = {
    baseUrl: 'http://localhost:6006',
    story: '',
    url: '',
    out: '',
    width: 1440,
    height: 900,
    fullPage: true,
    waitMs: 1500,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === '--base-url' && next) {
      args.baseUrl = next;
      i += 1;
    } else if (arg === '--story' && next) {
      args.story = next;
      i += 1;
    } else if (arg === '--url' && next) {
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
    } else if (arg === '--no-full-page') {
      args.fullPage = false;
    } else if (arg === '--help' || arg === '-h') {
      args.help = true;
    }
  }

  return args;
}

function printHelp() {
  console.log(`
Export a Storybook story to PNG (requires Storybook running and puppeteer installed).

Options:
  --story <id>       Story id from Storybook URL (iframe id= param)
  --url <url>        Full iframe URL (overrides --story)
  --out <path>       Output PNG path (default: ./exports/<story-id>.png)
  --base-url <url>   Storybook origin (default: http://localhost:6006)
  --width <px>       Viewport width (default: 1440)
  --height <px>      Viewport height (default: 900)
  --wait-ms <ms>     Extra wait after load for fonts/layout (default: 1500)
  --no-full-page     Capture viewport only, not full scrollable page
  -h, --help         Show this help

Examples:
  npm run export-storybook-png -- --story projects-mike-s-playground-user-scoped-policies-pages-policy-management--default
  npm run export-storybook-png -- --story my-story-id --out ./exports/my-story.png --width 1280
`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  if (!args.url && !args.story) {
    console.error('Error: provide --story <id> or --url <iframe-url>');
    printHelp();
    process.exit(1);
  }

  const storyUrl =
    args.url ||
    `${args.baseUrl.replace(/\/$/, '')}/iframe.html?id=${encodeURIComponent(args.story)}&viewMode=story`;

  const storySlug = args.story || 'storybook-export';
  const outPath = resolve(
    projectRoot,
    args.out || `exports/${storySlug}.png`,
  );

  await mkdir(dirname(outPath), { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: args.width,
      height: args.height,
    },
  });

  try {
    const page = await browser.newPage();
    await page.goto(storyUrl, { waitUntil: 'networkidle0', timeout: 120_000 });
    await page.waitForSelector('#storybook-root', { timeout: 30_000 });
    if (args.waitMs > 0) {
      await new Promise((r) => setTimeout(r, args.waitMs));
    }

    const root = await page.$('#storybook-root');
    if (root && !args.fullPage) {
      await root.screenshot({ path: outPath, type: 'png' });
    } else if (root && args.fullPage) {
      await root.screenshot({ path: outPath, type: 'png' });
    } else {
      await page.screenshot({ path: outPath, type: 'png', fullPage: args.fullPage });
    }

    console.log(`Saved ${outPath}`);
    console.log(`Source: ${storyUrl}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
