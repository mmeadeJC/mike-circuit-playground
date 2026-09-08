import type { Component } from 'vue';
import { devicePolicyCatalog } from './devicePolicyCatalog';

export type PolicyMigrationRoute = {
  path: string;
  label: string;
  load: () => Promise<Component>;
};

const pageLoaders: Record<string, () => Promise<Component>> = {
  '/patch-management': () =>
    import('../../device-management/PatchManagement.stories').then((m) => m.PatchManagementPage),
  '/policy-groups': () =>
    import('../../device-management/PolicyGroups.stories').then((m) => m.PolicyGroupsPage),
  '/allow-activation-lock': () =>
    import('../AllowActivationLock.stories').then((m) => m.AllowActivationLockPage),
  '/application-restriction': () =>
    import('../ApplicationRestriction.stories').then((m) => m.ApplicationRestrictionPage),
  '/bluetooth-configuration': () =>
    import('../BluetoothConfiguration.stories').then((m) => m.BluetoothConfigurationPage),
  '/custom-mdm-oma-uri': () =>
    import('../CustomMdmOmaUri.stories').then((m) => m.CustomMdmOmaUriPage),
  '/custom-payload': () => import('../CustomPayload.stories').then((m) => m.CustomPayloadPage),
  '/custom-registry-keys': () =>
    import('../CustomRegistryKeys.stories').then((m) => m.CustomRegistryKeysPage),
  '/filevault-2': () => import('../FileVault2.stories').then((m) => m.FileVault2Page),
  '/filevault-tutorial-modal': () =>
    import('../FileVaultTutorialModal.stories').then((m) => m.FileVaultTutorialModalPage),
  '/google-chrome-extensions': () =>
    import('../GoogleChromeForceInstalledExtensionList.stories').then(
      (m) => m.GoogleChromeForceInstalledExtensionListPage,
    ),
  '/install-certificate': () =>
    import('../InstallCertificate.stories').then((m) => m.InstallCertificatePage),
  '/kiosk-mode': () => import('../KioskMode.stories').then((m) => m.KioskModePage),
  '/mdm-custom-configuration-profile': () =>
    import('../MdmCustomConfigurationProfile.stories').then(
      (m) => m.MdmCustomConfigurationProfilePage,
    ),
  '/ms-edge-extensions': () =>
    import('../MsEdgeExtensions.stories').then((m) => m.MsEdgeExtensionsPage),
  '/policy-details-tab': () =>
    import('../PolicyDetailsTab.stories').then((m) => m.PolicyDetailsTabPage),
  '/recovery-lock': () => import('../RecoveryLock.stories').then((m) => m.RecoveryLockPage),
  '/schedule-restart': () =>
    import('../ScheduleRestart.stories').then((m) => m.ScheduleRestartPage),
  '/single-app-mode': () => import('../SingleAppMode.stories').then((m) => m.SingleAppModePage),
  '/software-update-enforcement': () =>
    import('../SoftwareUpdateEnforcement.stories').then((m) => m.SoftwareUpdateEnforcementPage),
  '/supervised-ios-restrictions': () =>
    import('../SupervisedIosRestrictions.stories').then((m) => m.SupervisedIosRestrictionsPage),
  '/system-update': () => import('../SystemUpdate.stories').then((m) => m.SystemUpdatePage),
  '/wifi-configuration': () =>
    import('../WiFiConfiguration.stories').then((m) => m.WiFiConfigurationPage),
};

export const policyMigrationRoutes: PolicyMigrationRoute[] = [
  {
    path: '/patch-management',
    label: 'Patch Management',
    load: pageLoaders['/patch-management'],
  },
  {
    path: '/policy-groups',
    label: 'Policy Groups',
    load: pageLoaders['/policy-groups'],
  },
  ...devicePolicyCatalog.map((entry) => ({
    path: entry.path,
    label: entry.name,
    load: pageLoaders[entry.path],
  })),
];

export const policyManagementListRoute: PolicyMigrationRoute = {
  path: '/policy-management',
  label: 'Policy Management',
  load: () =>
    import('@/stories/projects/user-scoped-policies/pages/UserScopedPolicies.stories').then(
      (m) => m.UserScopedPoliciesPage,
    ),
};
