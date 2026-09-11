import { createApp, defineAsyncComponent, type App } from 'vue';
import { createRouter, createWebHashHistory, type RouteLocationRaw } from 'vue-router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import circuitConfig from '@jumpcloud/circuit/primevue';
import '@/assets/main.css';
import {
  registerCircuitModalRoot,
  removeCircuitModalRoots,
} from '@/public-demos/circuitModalRoot';

import PolicyManagementCircuitMigrationApp from './PolicyManagementCircuitMigrationApp.vue';
import {
  POLICY_MIGRATION_NAV_KEY,
  writePolicyMigrationView,
  writeStoredPolicyMigrationContext,
  type NewPolicyNavContext,
} from './policyMigrationNav';
import { policyMigrationRoutes } from './policyMigrationRoutes';
import { devicePolicyCatalog } from './devicePolicyCatalog';
import { setPolicyMigrationRouter } from './policyMigrationRouter';

const DEFAULT_NEW_POLICY_CONTEXT: NewPolicyNavContext = {
  policyType: 'device',
  osTab: 'windows',
};

let demoApp: App | null = null;
let remounting = false;

function isPolicyDetailPath(path: string): boolean {
  return path !== '/' && path !== '/policy-management';
}

function toHash(to: RouteLocationRaw): string {
  if (typeof to === 'string') return to.startsWith('#') ? to : `#${to}`;

  const path = to.path ?? '/policy-management';
  const query = to.query ?? {};
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value == null || value === '') continue;
    if (Array.isArray(value)) {
      value.forEach((entry) => params.append(key, String(entry)));
    } else {
      params.set(key, String(value));
    }
  }
  const qs = params.toString();
  return qs ? `#${path}?${qs}` : `#${path}`;
}

function clearOverlayDom(): void {
  document
    .querySelectorAll(
      'body > .p-tieredmenu, body > .p-menu, body > .p-tooltip, body > .p-toast, body > .p-datepicker, body > .p-overlay-mask, body > [data-pc-section="mask"]',
    )
    .forEach((node) => node.remove());

  removeCircuitModalRoots();
}

/**
 * Storybook story modules used as route pages leave Vue in a bad state on unmount
 * (parentNode / emitsOptions / type null). Skip app.unmount() and replace #app
 * instead, then remount a fresh demo instance at the hub route.
 */
function remountDemoAt(to: RouteLocationRaw): void {
  if (remounting) return;
  remounting = true;

  const targetHash = toHash(to);

  // Defer so we leave the current Vue update/click stack before tearing down DOM.
  window.setTimeout(() => {
    try {
      // Drop window refs first so the old hash-history listener is not relied on.
      demoApp = null;
      if (typeof window !== 'undefined') {
        delete window.__policyMigrationRouter;
        delete window.__policyMigrationGoToList;
        delete window.__policyMigrationGoToNewPolicy;
        delete window.__policyMigrationNavigateTo;
      }

      const el = document.querySelector('#app');
      if (el?.parentNode) {
        const fresh = document.createElement('div');
        fresh.id = 'app';
        el.parentNode.replaceChild(fresh, el);
      }

      clearOverlayDom();

      // replaceState avoids firing hashchange on the orphaned previous router.
      const nextUrl = `${window.location.pathname}${window.location.search}${targetHash}`;
      window.history.replaceState(null, '', nextUrl);

      mountPolicyMigrationDemo();
    } finally {
      remounting = false;
    }
  }, 0);
}

const STORY_HUB_PATHS = new Set(['/patch-management', '/policy-groups']);

function resolveNavigationPath(to: RouteLocationRaw): string {
  if (typeof to === 'string') return to;
  return to.path ?? '/policy-management';
}

function shouldRemountNavigation(fromPath: string, to: RouteLocationRaw): boolean {
  if (isPolicyDetailPath(fromPath)) return true;
  return STORY_HUB_PATHS.has(resolveNavigationPath(to));
}

function navigateToHub(to: RouteLocationRaw): void {
  const router = typeof window !== 'undefined' ? window.__policyMigrationRouter : null;
  const fromPath = router?.currentRoute.value.path ?? '/';
  const needsRemount = router ? shouldRemountNavigation(fromPath, to) : true;

  if (needsRemount) {
    remountDemoAt(to);
    return;
  }

  if (router) {
    void router.push(to);
    return;
  }

  remountDemoAt(to);
}

export function mountPolicyMigrationDemo() {
  document.documentElement.setAttribute('data-theme', 'circuit-light');
  document.body.classList.add('bg-neutral-base');

  // Fresh async wrappers per mount — a failed/stuck loader from a prior remount
  // must not be reused.
  const PolicyManagementPage = defineAsyncComponent(() =>
    import('@/stories/projects/user-scoped-policies/pages/UserScopedPolicies.stories').then(
      (module) => module.UserScopedPoliciesPage,
    ),
  );

  const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', redirect: '/policy-management' },
      {
        path: '/policy-management',
        component: PolicyManagementPage,
      },
      ...policyMigrationRoutes.map((route) => ({
        path: route.path,
        component: defineAsyncComponent(() => route.load().then((page) => page)),
        meta: { label: route.label },
      })),
    ],
  });

  setPolicyMigrationRouter(router);

  let newPolicyContext: NewPolicyNavContext = { ...DEFAULT_NEW_POLICY_CONTEXT };

  function resolveNewPolicyContext(context?: NewPolicyNavContext): NewPolicyNavContext {
    if (context) return context;

    const currentPath = router.currentRoute.value.path;
    const catalogEntry = devicePolicyCatalog.find((policy) => policy.path === currentPath);

    return {
      policyType: newPolicyContext.policyType,
      osTab: newPolicyContext.osTab || catalogEntry?.os[0] || DEFAULT_NEW_POLICY_CONTEXT.osTab,
    };
  }

  if (typeof window !== 'undefined') {
    window.__policyMigrationNavigateTo = navigateToHub;
    window.__policyMigrationGoToList = () => {
      writePolicyMigrationView('list');
      navigateToHub({ path: '/policy-management', query: {} });
    };
    window.__policyMigrationGoToNewPolicy = (context: NewPolicyNavContext) => {
      newPolicyContext = context;
      writeStoredPolicyMigrationContext(context);
      writePolicyMigrationView('new-policy');
      navigateToHub({
        path: '/policy-management',
        query: {
          view: 'new-policy',
          type: context.policyType,
          os: context.osTab,
        },
      });
    };
  }

  const app = createApp(PolicyManagementCircuitMigrationApp);
  demoApp = app;

  app.provide(POLICY_MIGRATION_NAV_KEY, {
    goToList: () => {
      writePolicyMigrationView('list');
      navigateToHub({ path: '/policy-management', query: {} });
    },
    goToPolicy: (path: string, context?: NewPolicyNavContext) => {
      if (context) {
        newPolicyContext = context;
        writeStoredPolicyMigrationContext(context);
      }
      void router.push(path);
    },
    goToNewPolicy: (context?: NewPolicyNavContext) => {
      const resolvedContext = resolveNewPolicyContext(context);
      newPolicyContext = resolvedContext;
      writeStoredPolicyMigrationContext(resolvedContext);
      writePolicyMigrationView('new-policy');
      navigateToHub({
        path: '/policy-management',
        query: {
          view: 'new-policy',
          type: resolvedContext.policyType,
          os: resolvedContext.osTab,
        },
      });
    },
    getNewPolicyContext: () => newPolicyContext,
  });

  app.use(router);
  app.use(PrimeVue, { ...circuitConfig, theme: 'none' });
  app.use(ToastService);
  app.directive('tooltip', Tooltip);
  app.config.globalProperties.$testId = (suffix: string) => suffix;

  registerCircuitModalRoot(app);

  app.mount('#app');
}
