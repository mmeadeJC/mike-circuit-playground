/** Defaults for legacy Windows patch policy settings (Early Adoption and other rings). */

export type WindowsLegacyPolicyProfile = 'early-adoption' | 'vanguard' | 'general-adoption';

export type WindowsLegacyPolicySettings = {
  autoInstallMinorUpdates: boolean;
  autoInstallUpdates: boolean;
  automaticUpdatesBehavior: string;
  installDaysOfWeek: string;
  installTimeOfDay: string;
  installUpdatesFrequency: string;
  detectionFrequencyEnabled: boolean;
  detectionFrequencyHours: number;
  installDuringMaintenance: boolean;
  includeMicrosoftProducts: boolean;
  excludeDrivers: boolean;
  removePauseUpdates: boolean;
  removeAllUpdateFeatures: boolean;
  powerManagement: boolean;
  disableFeatureUpgrades: boolean;
  disableSafeguards: boolean;
  managePreviewBuilds: boolean;
  selectTarget: boolean;
  autoRestartRequiredNotification: boolean;
  autoRestartReminderNotification: boolean;
  autoRestartWarningNotification: boolean;
  nonAdminNotifications: boolean;
  displayNotificationOptions: boolean;
  updateNotificationOption: string;
  deferUpdates: boolean;
  deferUpdatesDays: string;
  pauseUpdatesStartDate: string;
  deferFeatureUpgrades: boolean;
  deferFeatureUpgradesDays: string;
  upgradeChannel: string;
  pauseFeatureUpgradesStartDate: string;
  deadlineForRestart: boolean;
  noAutoRestartLoggedOn: boolean;
  noRestartActiveHours: boolean;
  activeHoursRange: boolean;
  alwaysRestartScheduled: boolean;
  automaticUpdateDeadlines: boolean;
  qualityUpdateInstallationGracePeriod: string;
  qualityUpdateCommitRestartGracePeriod: string;
  featureUpdateInstallationGracePeriod: string;
  featureUpdateCommitRestartGracePeriod: string;
};

export const AUTOMATIC_UPDATES_BEHAVIOR_OPTIONS = [
  {
    label: 'Download the updates automatically and notify when they are ready to be installed',
    value: 'download-and-notify',
  },
  {
    label: 'Download the updates automatically and schedule installation',
    value: 'download-and-schedule',
  },
  {
    label: 'Notify before downloading updates',
    value: 'notify-before-download',
  },
];

export const INSTALL_DAYS_OF_WEEK_OPTIONS = [
  { label: 'Every Day', value: 'every-day' },
  { label: 'Sunday', value: 'sunday' },
  { label: 'Monday', value: 'monday' },
];

export const INSTALL_TIME_OF_DAY_OPTIONS = [
  { label: '00:00', value: '00:00' },
  { label: '03:00', value: '03:00' },
  { label: '12:00', value: '12:00' },
];

export const INSTALL_UPDATES_FREQUENCY_OPTIONS = [
  { label: 'Every week of every month', value: 'every-week-every-month' },
  { label: 'First week of every month', value: 'first-week-every-month' },
];

export const DETECTION_FREQUENCY_OPTIONS = Array.from({ length: 22 }, (_, index) => ({
  label: String(index + 1),
  value: index + 1,
}));

export const UPDATE_NOTIFICATION_OPTIONS = [
  {
    label: 'Use the default Windows Update notifications',
    value: 'default-windows-notifications',
  },
  {
    label: 'Turn off all notifications, including reboot notifications',
    value: 'turn-off-all',
  },
];

export const UPGRADE_CHANNEL_OPTIONS = [
  {
    label: 'Semi-Annual Channel/Current Branch for Business',
    value: 'semi-annual-cbb',
  },
  { label: 'Semi-Annual Channel', value: 'semi-annual' },
  { label: 'Windows Insider Program - Slow ring', value: 'insider-slow' },
];

export const UPDATE_INSTALLATION_GRACE_PERIOD_OPTIONS = [
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '5', value: '5' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
];

export const UPDATE_RESTART_GRACE_PERIOD_OPTIONS = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
];

export const WINDOWS_LEGACY_POLICY_PROFILE_BY_NAME: Record<string, WindowsLegacyPolicyProfile> = {
  'Windows Early Adoption Ring': 'early-adoption',
  'Windows General Adoption Ring': 'general-adoption',
};

function createEarlyAdoptionSettings(): WindowsLegacyPolicySettings {
  return {
    autoInstallMinorUpdates: true,
    autoInstallUpdates: true,
    automaticUpdatesBehavior: 'download-and-notify',
    installDaysOfWeek: 'every-day',
    installTimeOfDay: '00:00',
    installUpdatesFrequency: 'every-week-every-month',
    detectionFrequencyEnabled: true,
    detectionFrequencyHours: 1,
    installDuringMaintenance: true,
    includeMicrosoftProducts: false,
    excludeDrivers: false,
    removePauseUpdates: true,
    removeAllUpdateFeatures: false,
    powerManagement: true,
    disableFeatureUpgrades: false,
    disableSafeguards: false,
    managePreviewBuilds: false,
    selectTarget: false,
    autoRestartRequiredNotification: false,
    autoRestartReminderNotification: false,
    autoRestartWarningNotification: false,
    nonAdminNotifications: true,
    displayNotificationOptions: true,
    updateNotificationOption: 'default-windows-notifications',
    deferUpdates: true,
    deferUpdatesDays: '7',
    pauseUpdatesStartDate: '',
    deferFeatureUpgrades: true,
    deferFeatureUpgradesDays: '7',
    upgradeChannel: 'semi-annual-cbb',
    pauseFeatureUpgradesStartDate: '',
    deadlineForRestart: false,
    noAutoRestartLoggedOn: false,
    noRestartActiveHours: false,
    activeHoursRange: false,
    alwaysRestartScheduled: false,
    automaticUpdateDeadlines: true,
    qualityUpdateInstallationGracePeriod: '5',
    qualityUpdateCommitRestartGracePeriod: '2',
    featureUpdateInstallationGracePeriod: '5',
    featureUpdateCommitRestartGracePeriod: '2',
  };
}

function createGeneralAdoptionSettings(): WindowsLegacyPolicySettings {
  return {
    ...createEarlyAdoptionSettings(),
    deferUpdatesDays: '15',
    deferFeatureUpgradesDays: '15',
    qualityUpdateInstallationGracePeriod: '8',
    qualityUpdateCommitRestartGracePeriod: '2',
    featureUpdateInstallationGracePeriod: '8',
    featureUpdateCommitRestartGracePeriod: '2',
  };
}

function createVanguardSettings(): WindowsLegacyPolicySettings {
  return {
    ...createEarlyAdoptionSettings(),
    deferUpdates: false,
    deferUpdatesDays: '0',
    deferFeatureUpgrades: false,
    deferFeatureUpgradesDays: '0',
    automaticUpdateDeadlines: false,
  };
}

export function createWindowsLegacyPolicySettingsForProfile(
  profile: WindowsLegacyPolicyProfile,
): WindowsLegacyPolicySettings {
  if (profile === 'early-adoption') {
    return createEarlyAdoptionSettings();
  }

  if (profile === 'general-adoption') {
    return createGeneralAdoptionSettings();
  }

  return createVanguardSettings();
}

export function cloneWindowsLegacyPolicySettings(
  settings: WindowsLegacyPolicySettings,
): WindowsLegacyPolicySettings {
  return { ...settings };
}
