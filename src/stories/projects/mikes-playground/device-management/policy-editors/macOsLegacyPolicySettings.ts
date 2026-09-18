/** Shared defaults for legacy macOS patch policy settings (Vanguard / Early Adoption rings). */

export type AutomaticActionValue = 'do-nothing' | 'download' | 'install';

export type NotificationPreviewTab = 'latest-update' | 'minor-update';

export type MacOsMajorVersionKey =
  | 'macos26'
  | 'macos15'
  | 'macos14'
  | 'macos13'
  | 'macos12'
  | 'macos11';

export const AUTOMATIC_ACTION_OPTIONS: { label: string; value: AutomaticActionValue }[] = [
  { label: 'Do nothing', value: 'do-nothing' },
  { label: 'Download', value: 'download' },
  { label: 'Install', value: 'install' },
];

export const MACOS_MAJOR_VERSION_FIELDS: {
  key: MacOsMajorVersionKey;
  label: string;
  tooltip: string;
}[] = [
  {
    key: 'macos26',
    label: 'Automatic action for devices running macOS 26 Tahoe',
    tooltip: 'Action taken when a device on macOS 26 Tahoe receives a major upgrade.',
  },
  {
    key: 'macos15',
    label: 'Automatic action for devices running macOS 15 Sequoia',
    tooltip: 'Action taken when a device on macOS 15 Sequoia receives a major upgrade.',
  },
  {
    key: 'macos14',
    label: 'Automatic action for devices running macOS 14 Sonoma',
    tooltip: 'Action taken when a device on macOS 14 Sonoma receives a major upgrade.',
  },
  {
    key: 'macos13',
    label: 'Automatic action for devices running macOS 13 Ventura',
    tooltip: 'Action taken when a device on macOS 13 Ventura receives a major upgrade.',
  },
  {
    key: 'macos12',
    label: 'Automatic action for devices running macOS 12 Monterey',
    tooltip: 'Action taken when a device on macOS 12 Monterey receives a major upgrade.',
  },
  {
    key: 'macos11',
    label: 'Automatic action for devices running macOS 11 Big Sur',
    tooltip: 'Action taken when a device on macOS 11 Big Sur receives a major upgrade.',
  },
];

export const NOTIFICATION_PREVIEW_OPTIONS: { label: string; value: NotificationPreviewTab }[] = [
  { label: 'Latest Update', value: 'latest-update' },
  { label: 'Minor Update', value: 'minor-update' },
];

export type MacOsLegacyPolicySettings = {
  deferUpgradeReleases: boolean;
  majorUpgradeActions: Record<MacOsMajorVersionKey, AutomaticActionValue>;
  deferUpdateReleases: boolean;
  deferralLengthDays: string;
  enforceAutomaticUpdates: boolean;
  installationDeadlineDays: string;
  deferNonOsUpdates: boolean;
  enableCustomMinorUpdateNotifications: boolean;
  notificationMessage: string;
  notificationPreviewTab: NotificationPreviewTab;
};

export type MacOsLegacyPolicyProfile = 'vanguard' | 'early-adoption';

function createDefaultMajorUpgradeActions(): Record<MacOsMajorVersionKey, AutomaticActionValue> {
  return Object.fromEntries(
    MACOS_MAJOR_VERSION_FIELDS.map((field) => [field.key, 'do-nothing']),
  ) as Record<MacOsMajorVersionKey, AutomaticActionValue>;
}

export function createDefaultMacOsLegacyPolicySettings(): MacOsLegacyPolicySettings {
  return createMacOsLegacyPolicySettingsForProfile('vanguard');
}

export function createMacOsLegacyPolicySettingsForProfile(
  profile: MacOsLegacyPolicyProfile,
): MacOsLegacyPolicySettings {
  const base: MacOsLegacyPolicySettings = {
    deferUpgradeReleases: false,
    majorUpgradeActions: createDefaultMajorUpgradeActions(),
    deferUpdateReleases: false,
    deferralLengthDays: '7',
    enforceAutomaticUpdates: true,
    installationDeadlineDays: '3',
    deferNonOsUpdates: false,
    enableCustomMinorUpdateNotifications: true,
    notificationMessage: 'Your device requires a security update',
    notificationPreviewTab: 'latest-update',
  };

  if (profile === 'early-adoption') {
    return {
      ...base,
      deferUpdateReleases: true,
      deferralLengthDays: '7',
      installationDeadlineDays: '7',
    };
  }

  return base;
}

export const MACOS_LEGACY_POLICY_PROFILE_BY_NAME: Record<string, MacOsLegacyPolicyProfile> = {
  'macOS Vanguard Ring': 'vanguard',
  'macOS Early Adoption Ring': 'early-adoption',
};

export function cloneMacOsLegacyPolicySettings(
  settings: MacOsLegacyPolicySettings,
): MacOsLegacyPolicySettings {
  return {
    ...settings,
    majorUpgradeActions: { ...settings.majorUpgradeActions },
  };
}
