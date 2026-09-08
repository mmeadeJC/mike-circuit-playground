import { computed } from 'vue';
import { linkTo } from '@storybook/addon-links';
import {
  readStoredPolicyMigrationContext,
  usePolicyMigrationNav,
  writePolicyMigrationView,
  writeStoredPolicyMigrationContext,
} from './policyMigrationNav';
import {
  resolveBackContext,
} from './policyMigrationRouter';

const storybookGoToPolicyManagement = linkTo(
  "Projects/Mike's Playground/User Scoped Policies/Pages/Policy Management",
  'Default',
);

const storybookGoToPolicyGroups = linkTo(
  "Projects/Mike's Playground/Device Management/Policy Groups",
  'Default',
);

const storybookGoToPatchManagement = linkTo(
  "Projects/Mike's Playground/Device Management/Patch Management",
  'Default',
);

export function storybookNavigateToPolicyManagementList(): void {
  storybookGoToPolicyManagement();
}

export function storybookNavigateToPolicyGroups(): void {
  storybookGoToPolicyGroups();
}

export function storybookNavigateToPatchManagement(): void {
  storybookGoToPatchManagement();
}

const OS_TAB_LABELS: Record<string, string> = {
  windows: 'Windows',
  mac: 'Mac',
  linux: 'Linux',
  ios: 'iOS',
  android: 'Android',
  recommended: 'Recommended',
};

export function osTabToLabel(osTab: string): string {
  return OS_TAB_LABELS[osTab] ?? osTab.charAt(0).toUpperCase() + osTab.slice(1);
}

/** Back to the New Policy OS tab in the demo; Policy Management list in Storybook. */
export function usePolicyMigrationBackNavigation(policyPath: string) {
  const policyMigrationNav = usePolicyMigrationNav();

  function getBackContext() {
    return resolveBackContext(readStoredPolicyMigrationContext(), policyPath);
  }

  const backButtonLabel = computed(() => osTabToLabel(getBackContext().osTab));

  function goBack() {
    const context = getBackContext();
    writeStoredPolicyMigrationContext(context);
    writePolicyMigrationView('new-policy');

    // Prefer window singleton — works across Vite async chunks.
    if (typeof window !== 'undefined' && window.__policyMigrationGoToNewPolicy) {
      window.__policyMigrationGoToNewPolicy(context);
      return;
    }

    if (policyMigrationNav) {
      policyMigrationNav.goToNewPolicy(context);
      return;
    }

    // Storybook: no demo router — jump to the Policy Management list story.
    storybookGoToPolicyManagement();
  }

  return { goBack, backButtonLabel };
}

/** @deprecated Prefer usePolicyMigrationBackNavigation */
export function createGoToPolicyManagement(): () => void {
  return usePolicyMigrationBackNavigation('/policy-management').goBack;
}
