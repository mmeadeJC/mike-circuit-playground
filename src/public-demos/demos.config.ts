/**
 * Demo manifest — the single source of truth.
 *
 * Add your demo here and it will:
 *   1. Show up in the local dev server (pnpm dev:demos)
 *   2. Get built and uploaded to R2 on merge to master
 *   3. Be available for customer-facing subdomain assignment
 *
 * Fields:
 *   id        — URL-safe slug, becomes the path and R2 prefix
 *   name      — Human-readable label
 *   component — Path to the Vue component (relative to src/)
 */
export const demos = [
  {
    id: 'agent0-alternative1',
    name: 'Agent Zero — Composable',
    component: '@/stories/projects/burak-agent0/pages/Agent0Alt02Page.vue',
  },
  {
    id: 'agent0-alternative2',
    name: 'Agent Zero — Alternative 02',
    component: '@/stories/projects/burak-agent0/pages/Agent0ComposablePage.vue',
  },
];
