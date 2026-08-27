import { inject, type InjectionKey } from 'vue';

export type NewPolicyNavContext = {
  policyType: 'device' | 'user';
  osTab: string;
};

export type PolicyMigrationNav = {
  goToList: () => void;
  goToPolicy: (path: string, context?: NewPolicyNavContext) => void;
  goToNewPolicy: (context?: NewPolicyNavContext) => void;
  getNewPolicyContext: () => NewPolicyNavContext;
};

/** String key avoids Symbol duplication across Vite chunks in the demo build. */
export const POLICY_MIGRATION_NAV_KEY: InjectionKey<PolicyMigrationNav> = 'policyMigrationNav';

export const POLICY_MIGRATION_CONTEXT_STORAGE_KEY = 'th-1769-policy-migration-context';
export const POLICY_MIGRATION_VIEW_STORAGE_KEY = 'th-1769-policy-migration-view';

export type PolicyMigrationView = 'list' | 'new-policy';

export function usePolicyMigrationNav(): PolicyMigrationNav | null {
  return inject(POLICY_MIGRATION_NAV_KEY, null);
}

export function readPolicyMigrationView(): PolicyMigrationView {
  if (typeof sessionStorage === 'undefined') return 'list';
  return sessionStorage.getItem(POLICY_MIGRATION_VIEW_STORAGE_KEY) === 'new-policy'
    ? 'new-policy'
    : 'list';
}

export function writePolicyMigrationView(view: PolicyMigrationView): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.setItem(POLICY_MIGRATION_VIEW_STORAGE_KEY, view);
}

export function readStoredPolicyMigrationContext(): NewPolicyNavContext | null {
  if (typeof sessionStorage === 'undefined') return null;

  try {
    const raw = sessionStorage.getItem(POLICY_MIGRATION_CONTEXT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as NewPolicyNavContext;
  } catch {
    return null;
  }
}

export function writeStoredPolicyMigrationContext(context: NewPolicyNavContext): void {
  if (typeof sessionStorage === 'undefined') return;
  sessionStorage.setItem(POLICY_MIGRATION_CONTEXT_STORAGE_KEY, JSON.stringify(context));
}
