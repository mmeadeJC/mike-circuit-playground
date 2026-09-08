import type { Router, RouteLocationRaw } from 'vue-router';
import type { NewPolicyNavContext } from './policyMigrationNav';
import {
  writePolicyMigrationView,
  writeStoredPolicyMigrationContext,
} from './policyMigrationNav';
import { devicePolicyCatalog } from './devicePolicyCatalog';

declare global {
  interface Window {
    __policyMigrationRouter?: Router;
    __policyMigrationGoToNewPolicy?: (context: NewPolicyNavContext) => void;
    __policyMigrationGoToList?: () => void;
  }
}

let routerInstance: Router | null = null;

function newPolicyLocation(context: NewPolicyNavContext): RouteLocationRaw {
  return {
    path: '/policy-management',
    query: {
      view: 'new-policy',
      type: context.policyType,
      os: context.osTab,
    },
  };
}

function listLocation(): RouteLocationRaw {
  return { path: '/policy-management', query: {} };
}

export function setPolicyMigrationRouter(router: Router): void {
  routerInstance = router;
  if (typeof window !== 'undefined') {
    window.__policyMigrationRouter = router;
    window.__policyMigrationGoToList = () => {
      writePolicyMigrationView('list');
      void router.replace(listLocation());
    };
    window.__policyMigrationGoToNewPolicy = (context: NewPolicyNavContext) => {
      writeStoredPolicyMigrationContext(context);
      writePolicyMigrationView('new-policy');
      void router.push(newPolicyLocation(context));
    };
  }
}

/** Prefer window singleton — Vite may duplicate this module across async chunks. */
export function getPolicyMigrationRouter(): Router | null {
  if (typeof window !== 'undefined' && window.__policyMigrationRouter) {
    return window.__policyMigrationRouter;
  }
  return routerInstance;
}

export function navigatePolicyMigration(to: RouteLocationRaw): void {
  const router = getPolicyMigrationRouter();
  if (router) {
    void router.push(to);
    return;
  }

  if (typeof window === 'undefined') return;

  const resolved = typeof to === 'string' ? { path: to } : to;
  const path = resolved.path ?? '/';
  const query = resolved.query ?? {};
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value == null) continue;
    if (Array.isArray(value)) {
      value.forEach((entry) => params.append(key, String(entry)));
    } else {
      params.set(key, String(value));
    }
  }

  const queryString = params.toString();
  window.location.hash = queryString ? `#${path}?${queryString}` : `#${path}`;
}

export function navigateToPolicyManagementList(): void {
  writePolicyMigrationView('list');
  if (typeof window !== 'undefined' && window.__policyMigrationGoToList) {
    window.__policyMigrationGoToList();
    return;
  }
  navigatePolicyMigration(listLocation());
}

export function navigateToPolicyGroups(): void {
  navigatePolicyMigration('/policy-groups');
}

export function navigateToNewPolicyView(context: NewPolicyNavContext): void {
  writeStoredPolicyMigrationContext(context);
  writePolicyMigrationView('new-policy');
  if (typeof window !== 'undefined' && window.__policyMigrationGoToNewPolicy) {
    window.__policyMigrationGoToNewPolicy(context);
    return;
  }
  navigatePolicyMigration(newPolicyLocation(context));
}

export function resolveBackContext(
  storedContext: NewPolicyNavContext | null,
  policyPath: string,
): NewPolicyNavContext {
  if (storedContext) return storedContext;

  const catalogEntry = devicePolicyCatalog.find((policy) => policy.path === policyPath);

  return {
    policyType: 'device',
    osTab: catalogEntry?.os[0] ?? 'windows',
  };
}
