/** Defaults for macOS DDM patch policy settings (General Adoption Ring). */

export type TriStateValue = 'user-controlled' | 'always-on' | 'always-off';

export type YesNoValue = 'yes' | 'no';

export type ProgramEnrollmentValue = 'user-allowed' | 'always-on' | 'always-off';

export type UpdatePermissionsValue = 'standard-users' | 'administrators-only';

export type NotificationsValue = 'show-all' | 'notify-one-hour';

export type RecommendedCadenceValue = 'show-all' | 'oldest-only' | 'newest-only';

export type BetaProgramRow = {
  id: string;
  description: string;
  token: string;
};

export type MacOsDdmPolicySettings = {
  deferMajorOsUpgradesDays: string;
  deferMinorOsUpdatesDays: string;
  deferSystemNonOsUpdatesDays: string;
  enforceAutomaticUpdates: boolean;
  gracePeriodDays: string;
  enforcementTime: Date | null;
  detailsUrl: string;
  updatePermissions: UpdatePermissionsValue;
  notifications: NotificationsValue;
  recommendedCadence: RecommendedCadenceValue;
  downloadNewUpdatesWhenAvailable: TriStateValue;
  installMacOsUpdates: TriStateValue;
  installSecurityResponsesAndSystemFiles: TriStateValue;
  offerRsrsForUserInstallation: YesNoValue;
  allowUsersToRollbackRsrs: YesNoValue;
  programEnrollment: ProgramEnrollmentValue;
  offeredPrograms: BetaProgramRow[];
};

export const TRI_STATE_OPTIONS: { label: string; value: TriStateValue }[] = [
  { label: 'User Controlled', value: 'user-controlled' },
  { label: 'Always On', value: 'always-on' },
  { label: 'Always Off', value: 'always-off' },
];

export const YES_NO_OPTIONS: { label: string; value: YesNoValue }[] = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

export const PROGRAM_ENROLLMENT_OPTIONS: { label: string; value: ProgramEnrollmentValue }[] = [
  { label: 'User Allowed', value: 'user-allowed' },
  { label: 'Always On', value: 'always-on' },
  { label: 'Always Off', value: 'always-off' },
];

export const UPDATE_PERMISSIONS_OPTIONS: { label: string; value: UpdatePermissionsValue }[] = [
  { label: 'Allow Standard Users', value: 'standard-users' },
  { label: 'Only Administrators', value: 'administrators-only' },
];

export const NOTIFICATIONS_OPTIONS: { label: string; value: NotificationsValue }[] = [
  { label: 'Show All Notifications', value: 'show-all' },
  { label: 'Notify One Hour Before Deadline', value: 'notify-one-hour' },
];

export const RECOMMENDED_CADENCE_OPTIONS: { label: string; value: RecommendedCadenceValue }[] = [
  { label: 'Show All Versions', value: 'show-all' },
  { label: 'Show Only Oldest Version', value: 'oldest-only' },
  { label: 'Show Only Newest Version', value: 'newest-only' },
];

export const AUTOMATIC_ACTION_FIELDS: {
  key: keyof Pick<
    MacOsDdmPolicySettings,
    'downloadNewUpdatesWhenAvailable' | 'installMacOsUpdates' | 'installSecurityResponsesAndSystemFiles'
  >;
  label: string;
  tooltip: string;
}[] = [
  {
    key: 'downloadNewUpdatesWhenAvailable',
    label: 'Download New Updates When Available',
    tooltip: 'Controls whether available updates are downloaded automatically.',
  },
  {
    key: 'installMacOsUpdates',
    label: 'Install macOS Updates',
    tooltip: 'Controls whether macOS updates are installed automatically.',
  },
  {
    key: 'installSecurityResponsesAndSystemFiles',
    label: 'Install Security Responses and System Files',
    tooltip: 'Controls automatic installation of security responses and system files.',
  },
];

export const RAPID_SECURITY_RESPONSE_FIELDS: {
  key: keyof Pick<
    MacOsDdmPolicySettings,
    'offerRsrsForUserInstallation' | 'allowUsersToRollbackRsrs'
  >;
  label: string;
  tooltip: string;
}[] = [
  {
    key: 'offerRsrsForUserInstallation',
    label: 'Offer RSRs for User Installation',
    tooltip: 'Allows users to install Rapid Security Response updates when offered.',
  },
  {
    key: 'allowUsersToRollbackRsrs',
    label: 'Allow Users to Rollback RSRs',
    tooltip: 'Permits users to roll back installed Rapid Security Response updates.',
  },
];

export const ENFORCEMENT_TIMEZONE_LABEL = 'America/New_York';

function createDefaultEnforcementTime(): Date {
  const time = new Date();
  time.setHours(17, 0, 0, 0);
  return time;
}

function createDefaultOfferedPrograms(): BetaProgramRow[] {
  return [{ id: '1', description: '', token: '' }];
}

export function createDefaultMacOsDdmPolicySettings(): MacOsDdmPolicySettings {
  return {
    deferMajorOsUpgradesDays: '15',
    deferMinorOsUpdatesDays: '15',
    deferSystemNonOsUpdatesDays: '15',
    enforceAutomaticUpdates: true,
    gracePeriodDays: '10',
    enforcementTime: createDefaultEnforcementTime(),
    detailsUrl: '',
    updatePermissions: 'standard-users',
    notifications: 'show-all',
    recommendedCadence: 'show-all',
    downloadNewUpdatesWhenAvailable: 'user-controlled',
    installMacOsUpdates: 'user-controlled',
    installSecurityResponsesAndSystemFiles: 'user-controlled',
    offerRsrsForUserInstallation: 'yes',
    allowUsersToRollbackRsrs: 'yes',
    programEnrollment: 'user-allowed',
    offeredPrograms: createDefaultOfferedPrograms(),
  };
}

export function cloneMacOsDdmPolicySettings(
  settings: MacOsDdmPolicySettings,
): MacOsDdmPolicySettings {
  return {
    ...settings,
    enforcementTime: settings.enforcementTime
      ? new Date(settings.enforcementTime.getTime())
      : null,
    offeredPrograms: settings.offeredPrograms.map((row) => ({ ...row })),
  };
}

let nextBetaProgramRowId = 2;

export function createBetaProgramRow(): BetaProgramRow {
  return {
    id: String(nextBetaProgramRowId++),
    description: '',
    token: '',
  };
}
