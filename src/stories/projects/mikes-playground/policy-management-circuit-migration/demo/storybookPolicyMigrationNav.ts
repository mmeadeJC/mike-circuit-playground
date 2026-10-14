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
  "Projects/Mike's Playground/Policy Management - Circuit Migration/Policy Management",
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

const CANVAS_TITLE_PREFIX = "Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/";

/** Demo route path → Canvas story title (relative to the Canvas folder). */
const CANVAS_STORY_TITLES: Record<string, string> = {
  '/custom-registry-keys': 'Advanced: Custom Registry Keys',
  '/schedule-restart': 'Schedule Restart',
  '/application-restriction': 'Application Restriction',
  '/bluetooth-configuration': 'Bluetooth Configuration',
  '/custom-mdm-oma-uri': 'Custom MDM (OMA-URI)',
  '/google-chrome-extensions': 'Google Chrome Browser Force-Installed Extension List',
  '/install-certificate': 'Install Certificate',
  '/ms-edge-extensions': 'MS Edge Extensions',
  '/wifi-configuration': 'WiFi Configuration',
  '/allow-activation-lock': 'Allow Activation Lock',
  '/filevault-2': 'FileVault 2',
  '/filevault-tutorial-modal': 'FileVault Tutorial Modal',
  '/mdm-custom-configuration-profile': 'MDM Custom Configuration Profile',
  '/recovery-lock': 'Recovery Lock',
  '/software-update-enforcement': 'Software Update Enforcement',
  '/custom-payload': 'Custom Payload',
  '/kiosk-mode': 'Kiosk Mode',
  '/system-update': 'System Update',
  '/single-app-mode': 'Single App Mode',
  '/supervised-ios-restrictions': 'Supervised iOS Restrictions',
};

/** Jump to a policy's Canvas story in Storybook. Returns false if the path has no story. */
export function storybookNavigateToPolicy(path: string): boolean {
  const title = CANVAS_STORY_TITLES[path];
  if (!title) return false;
  linkTo(CANVAS_TITLE_PREFIX + title, 'Default')();
  return true;
}

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
