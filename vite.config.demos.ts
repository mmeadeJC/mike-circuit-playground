import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { demos } from './src/public-demos/demos.config';

const ROOT = __dirname;
const GEN_DIR = path.resolve(ROOT, 'src/public-demos/.generated');

/**
 * Generate a real entry file per demo so each subdomain gets its own
 * module graph — no virtual module caching issues.
 */
function generateDemoEntries() {
  fs.mkdirSync(GEN_DIR, { recursive: true });

  for (const demo of demos) {
    const entry = `import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import circuitConfig from '@jumpcloud/circuit/primevue';
import '@/assets/main.css';
import Component from '${demo.component}';

document.documentElement.setAttribute('data-theme', 'circuit-light');
document.body.classList.add('bg-neutral-base');

const app = createApp(Component);
app.use(PrimeVue, { ...circuitConfig, theme: 'none' });
app.use(ToastService);
app.directive('tooltip', Tooltip);
app.config.globalProperties.$testId = (suffix) => suffix;
app.mount('#app');
`;

    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${demo.name}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/public-demos/.generated/${demo.id}.ts"></script>
  </body>
</html>`;

    fs.writeFileSync(path.join(GEN_DIR, `${demo.id}.ts`), entry);
    fs.writeFileSync(path.join(GEN_DIR, `${demo.id}.html`), html);
  }
}

generateDemoEntries();

/**
 * Dev: subdomain routes to the right HTML entry.
 * No subdomain → index listing page.
 */
function demoDevRouter(): Plugin {
  return {
    name: 'demo-dev-router',
    configureServer(s) {
      s.middlewares.use((req, res, next) => {
        const url = new URL(req.url ?? '/', 'http://localhost');
        if (url.pathname !== '/' && url.pathname !== '/index.html') return next();

        const host = req.headers.host?.split(':')[0] ?? '';
        const subdomain = host.split('.')[0];
        const found = demos.find((d) => d.id === subdomain);

        if (found) {
          req.url = `/src/public-demos/.generated/${found.id}.html${url.search}`;
          return next();
        }

        // Index listing
        const links = demos
          .map((d) => {
            const href = `http://${d.id}.127.0.0.1.nip.io:5174/`;
            return `<li><a href="${href}">${d.name}</a><span class="id">${d.id}</span></li>`;
          })
          .join('\n          ');

        res.setHeader('content-type', 'text/html');
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demos</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Inter, system-ui, sans-serif; background: #fafafa; padding: 3rem 1.5rem; }
    h1 { font-size: 1.5rem; font-weight: 600; color: #111; margin-bottom: 0.5rem; }
    p { color: #666; margin-bottom: 2rem; font-size: 0.9375rem; }
    ul { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; max-width: 480px; }
    li { background: #fff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between; }
    li:hover { border-color: #ccc; }
    a { color: #111; text-decoration: none; font-weight: 500; }
    a:hover { text-decoration: underline; }
    .id { font-size: 0.8125rem; color: #999; font-family: monospace; }
  </style>
</head>
<body>
  <h1>Public Demos</h1>
  <p>Click a demo to open it via its subdomain.</p>
  <ul>
          ${links}
  </ul>
</body>
</html>`);
      });
    },
  };
}

/**
 * Build: DEMO_ID env var picks the demo. Uses the virtual module approach
 * since build has no caching issue (runs once per demo).
 */
function virtualDemoComponentBuild(): Plugin {
  const demoId = process.env.DEMO_ID;
  const demo = demoId ? demos.find((d) => d.id === demoId) : undefined;

  return {
    name: 'virtual-demo-component-build',
    resolveId(id) {
      if (id === 'virtual:demo-component') return '\0virtual:demo-component';
    },
    load(id) {
      if (id === '\0virtual:demo-component' && demo) {
        const resolved = demo.component.replace('@/', `${ROOT}/src/`);
        return `export { default } from '${resolved}';`;
      }
    },
  };
}

const demoId = process.env.DEMO_ID;

export default defineConfig({
  plugins: [vue(), tailwindcss(), demoDevRouter(), virtualDemoComponentBuild()],
  resolve: {
    alias: { '@': path.resolve(ROOT, 'src') },
  },
  base: './',
  server: {
    port: 5174,
    strictPort: true,
    host: true,
    allowedHosts: ['.nip.io'],
    open: `http://${demos[0].id}.127.0.0.1.nip.io:5174/`,
  },
  build: {
    outDir: demoId ? `dist-demos/${demoId}` : 'dist-demos',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(ROOT, 'demos.html'),
    },
  },
});
