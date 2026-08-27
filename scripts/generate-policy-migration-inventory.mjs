#!/usr/bin/env node
/**
 * Generate COMPONENT_INVENTORY.md for Policy Management — Circuit Migration stories.
 * Storybook reads the markdown via ComponentInventory.stories.ts.
 *
 * Usage:
 *   npm run inventory:policy-migration              # generate once
 *   npm run inventory:policy-migration:watch        # regenerate on story changes
 *
 * `npm run storybook` generates the inventory on start and keeps it updated while Storybook runs.
 */

import { readdirSync, readFileSync, writeFileSync, watch } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const storiesDir = join(
  projectRoot,
  'src/stories/projects/mikes-playground/policy-management-circuit-migration',
);
const outFile = join(storiesDir, 'COMPONENT_INVENTORY.md');

const BASELINE_CIRCUIT = [
  'AppNavigation',
  'CollapsiblePanel',
  'FormField',
  'LinkText',
  'PageHeader',
  'PageSaveBar',
];
const BASELINE_PRIMEVUE = ['Divider', 'InputText', 'Tag', 'Textarea'];
const BASELINE_LOCAL = ['TopBar'];

const NOT_USED = [
  'DataTable',
  'KeyValue',
  'ToggleSwitch',
  'SeverityDialog',
  'Stepper',
  'SelectWithSlots',
  'ActionsToolbar',
  'FilterModal',
];

function extract(content) {
  const circuit = [];
  const circuitMatch = content.match(
    /import\s*\{([^}]+)\}\s*from\s*['"]@jumpcloud\/circuit\/components['"]/s,
  );
  if (circuitMatch) {
    circuitMatch[1].split(',').forEach((item) => {
      const cleaned = item.replace(/^type\s+/, '').trim();
      const name = cleaned.split(/\s+as\s+/)[0].trim();
      if (name) circuit.push(name);
    });
  }

  const primevue = [
    ...content.matchAll(/import\s+(\w+)\s+from\s+['"]primevue\/[^'"]+['"]/g),
  ].map((m) => m[1]);
  const local = [
    ...content.matchAll(/import\s+(\w+)\s+from\s+['"]@\/components\/[^'"]+['"]/g),
  ].map((m) => m[1]);
  const titleMatch = content.match(
    /title:\s*"Projects\/Mike's Playground\/Policy Management - Circuit Migration\/([^"]+)"/,
  );
  const layout = content.includes('ConfigPageLayout')
    ? 'ConfigPageLayout'
    : 'DetailPageLayout';

  return {
    circuit: [...new Set(circuit)].sort(),
    primevue: [...new Set(primevue)].sort(),
    local: [...new Set(local)].sort(),
    title: titleMatch?.[1] ?? '?',
    layout,
    hasTooltip: content.includes('v-tooltip'),
  };
}

function extras(all, baseline) {
  return all.filter((c) => !baseline.includes(c));
}

function collectResults() {
  const files = readdirSync(storiesDir)
    .filter((f) => f.endsWith('.stories.ts') && f !== 'ComponentInventory.stories.ts')
    .sort();

  return files.map((file) => {
    const content = readFileSync(join(storiesDir, file), 'utf8');
    return { file, ...extract(content) };
  });
}

function generateMarkdown(results) {
  const allCircuit = new Set();
  const allPrime = new Set();
  const allLocal = new Set();

  results.forEach((r) => {
    r.circuit.forEach((c) => allCircuit.add(c));
    r.primevue.forEach((p) => allPrime.add(p));
    r.local.forEach((l) => allLocal.add(l));
  });

  const lines = [];
  lines.push('# Policy Management — Circuit Migration Component Inventory');
  lines.push('');
  lines.push(
    "Circuit DS components used in each Storybook page under **Projects → Mike's Playground → Policy Management - Circuit Migration**.",
  );
  lines.push('');
  lines.push(
    'Source: imports in `*.stories.ts` files in this directory. PrimeVue primitives listed separately — they are Circuit DS PT-styled components imported from `primevue/*`.',
  );
  lines.push('');
  lines.push(
    'Regenerate: `npm run inventory:policy-migration` (or automatically while Storybook is running via `npm run storybook`). Also published in Storybook as **Component Inventory** via `ComponentInventory.stories.ts`.',
  );
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Shared baseline (all 21 pages)');
  lines.push('');
  lines.push(
    'Every migration page includes these components. They are omitted from the per-page "extras" columns below.',
  );
  lines.push('');
  lines.push('### Page shell');
  lines.push('');
  lines.push('| Region | Component | Import |');
  lines.push('|---|---|---|');
  lines.push('| Left navigation | `AppNavigation` | `@jumpcloud/circuit/components` |');
  lines.push('| Top bar | `AdminTopBar` (imported as `TopBar`) | `@/components/AdminTopBar.vue` |');
  lines.push('| Page header | `PageHeader` | `@jumpcloud/circuit/components` |');
  lines.push('| Unsaved changes | `PageSaveBar` | `@jumpcloud/circuit/components` |');
  lines.push('');
  lines.push('### Content structure');
  lines.push('');
  lines.push('| Region | Component | Import |');
  lines.push('|---|---|---|');
  lines.push('| Device Policy panel | `CollapsiblePanel` | `@jumpcloud/circuit/components` |');
  lines.push('| Settings panel | `CollapsiblePanel` | `@jumpcloud/circuit/components` |');
  lines.push('| Field labels / validation | `FormField` | `@jumpcloud/circuit/components` |');
  lines.push('| Helper / KB links | `LinkText` | `@jumpcloud/circuit/components` |');
  lines.push('| Policy type tag + subtitle divider | `Tag`, `Divider` | `primevue/tag`, `primevue/divider` |');
  lines.push('| Policy name + notes | `InputText`, `Textarea` | `primevue/inputtext`, `primevue/textarea` |');
  lines.push('');
  lines.push('### Layout');
  lines.push('');
  lines.push('- **19 pages** use `DetailPageLayout` (main column + sidebar).');
  lines.push(
    '- **2 pages** use `ConfigPageLayout` (single column, no sidebar): **Policy Details Tab**, **Advanced: Custom Registry Keys**.',
  );
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Summary — page-specific components');
  lines.push('');
  lines.push('Components beyond the shared baseline on each page.');
  lines.push('');
  lines.push('| Page | Layout | Extra Circuit | Extra PrimeVue | Local / other |');
  lines.push('|---|---|---|---|---|');

  for (const r of results) {
    const extraCircuit = extras(r.circuit, [
      ...BASELINE_CIRCUIT,
      'ConfigPageLayout',
      'DetailPageLayout',
    ]);
    const extraPrime = extras(r.primevue, BASELINE_PRIMEVUE);
    const extraLocal = extras(r.local, BASELINE_LOCAL);
    const other = [];
    if (r.hasTooltip) other.push('`v-tooltip` directive');
    const ec = extraCircuit.length ? extraCircuit.map((c) => `\`${c}\``).join(', ') : '—';
    const ep = extraPrime.length ? extraPrime.map((c) => `\`${c}\``).join(', ') : '—';
    const el =
      [...extraLocal, ...other].length
        ? [...extraLocal.map((c) => `\`${c}\``), ...other].join(', ')
        : '—';
    lines.push(`| ${r.title} | \`${r.layout}\` | ${ec} | ${ep} | ${el} |`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Per-page detail');
  lines.push('');

  for (const r of results) {
    lines.push(`### ${r.title}`);
    lines.push('');
    lines.push(`- **Story file:** \`${r.file}\``);
    lines.push(
      `- **Storybook path:** \`Projects/Mike's Playground/Policy Management - Circuit Migration/${r.title}\``,
    );
    lines.push(`- **Layout:** \`${r.layout}\``);
    lines.push('');
    lines.push('**Circuit custom** (`@jumpcloud/circuit/components`):');
    lines.push('');
    r.circuit.forEach((c) => lines.push(`- \`${c}\``));
    lines.push('');
    lines.push('**PrimeVue primitives** (`primevue/*`):');
    lines.push('');
    if (r.primevue.length) r.primevue.forEach((c) => lines.push(`- \`${c}\``));
    else lines.push('- —');
    lines.push('');
    if (r.local.length) {
      lines.push('**Playground local:**');
      lines.push('');
      r.local.forEach((c) => lines.push(`- \`${c}\` (\`@/components/\`)`));
      lines.push('');
    }
    if (r.hasTooltip) {
      lines.push('**Directives:**');
      lines.push('');
      lines.push('- `v-tooltip` — used on checkbox/info icons');
      lines.push('');
    }
    lines.push('---');
    lines.push('');
  }

  lines.push('## Master component list');
  lines.push('');
  lines.push('All components used anywhere in this folder.');
  lines.push('');
  lines.push(`### Circuit custom (${allCircuit.size})`);
  lines.push('');
  [...allCircuit].sort().forEach((c) => lines.push(`- \`${c}\``));
  lines.push('');
  lines.push(`### PrimeVue primitives (${allPrime.size})`);
  lines.push('');
  [...allPrime].sort().forEach((c) => lines.push(`- \`${c}\``));
  lines.push('');
  lines.push(`### Playground local (${allLocal.size})`);
  lines.push('');
  [...allLocal].sort().forEach((c) => lines.push(`- \`${c}\``));
  lines.push('');
  lines.push('### Directives');
  lines.push('');
  lines.push('- `v-tooltip` — 9 pages (checkbox/info icon tooltips)');
  lines.push('');
  lines.push('### Not used in this folder');
  lines.push('');
  NOT_USED.forEach((c) => lines.push(`- \`${c}\``));
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Maintenance');
  lines.push('');
  lines.push('```bash');
  lines.push('# Generate once');
  lines.push('npm run inventory:policy-migration');
  lines.push('');
  lines.push('# Watch for story changes (also runs automatically with npm run storybook)');
  lines.push('npm run inventory:policy-migration:watch');
  lines.push('```');

  return lines.join('\n');
}

function generate({ quiet = false } = {}) {
  const results = collectResults();
  const markdown = generateMarkdown(results);
  writeFileSync(outFile, markdown);

  if (!quiet) {
    console.log(`Updated ${outFile} (${results.length} stories)`);
  }

  return results.length;
}

function watchStories() {
  let debounceTimer;
  let running = false;

  const schedule = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (running) return;
      running = true;
      try {
        generate({ quiet: true });
        console.log('[inventory] Updated COMPONENT_INVENTORY.md');
      } catch (error) {
        console.error('[inventory] Failed to update COMPONENT_INVENTORY.md:', error);
      } finally {
        running = false;
      }
    }, 200);
  };

  console.log(`[inventory] Watching ${storiesDir} for changes…`);
  watch(storiesDir, { recursive: false }, (event, filename) => {
    if (!filename || !filename.endsWith('.stories.ts')) return;
    schedule();
  });
}

const args = process.argv.slice(2);

if (args.includes('--watch')) {
  generate();
  watchStories();
} else {
  generate();
}
