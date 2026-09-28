/** Defaults for iOS/iPadOS DDM patch policy settings. */

import {
  ENFORCEMENT_TIMEZONE_LABEL,
  NOTIFICATIONS_OPTIONS,
  PROGRAM_ENROLLMENT_OPTIONS,
  RECOMMENDED_CADENCE_OPTIONS,
  TRI_STATE_OPTIONS,
  YES_NO_OPTIONS,
  createBetaProgramRow,
  type BetaProgramRow,
  type NotificationsValue,
  type ProgramEnrollmentValue,
  type RecommendedCadenceValue,
  type TriStateValue,
  type YesNoValue,
} from './macOsDdmPolicySettings';

export {
  ENFORCEMENT_TIMEZONE_LABEL,
  NOTIFICATIONS_OPTIONS,
  PROGRAM_ENROLLMENT_OPTIONS,
  RECOMMENDED_CADENCE_OPTIONS,
  TRI_STATE_OPTIONS,
  YES_NO_OPTIONS,
  createBetaProgramRow,
};

export type IosDdmPolicyProfile = 'early-adoption' | 'general-adoption' | 'vanguard';

export type IosDdmPolicySettings = {
  deferMajorOrMinorUpdatesDays: string;
  enforceAutomaticUpdates: boolean;
  gracePeriodDays: string;
  enforcementTime: Date | null;
  detailsUrl: string;
  notifications: NotificationsValue;
  recommendedCadence: RecommendedCadenceValue;
  downloadNewUpdatesWhenAvailable: TriStateValue;
  installIosUpdates: TriStateValue;
  installSecurityResponsesAndSystemFiles: TriStateValue;
  offerRsrsForUserInstallation: YesNoValue;
  offerRsrRollbacksToUser: YesNoValue;
  programEnrollment: ProgramEnrollmentValue;
  offeredPrograms: BetaProgramRow[];
};

export const IOS_DDM_POLICY_PROFILE_BY_NAME: Record<string, IosDdmPolicyProfile> = {
  'iOS Early Adoption Ring': 'early-adoption',
  'iOS General Adoption Ring': 'general-adoption',
  'iOS Vanguard Ring': 'vanguard',
};

export const AUTOMATIC_ACTION_FIELDS: {
  key: keyof Pick<
    IosDdmPolicySettings,
    'downloadNewUpdatesWhenAvailable' | 'installIosUpdates' | 'installSecurityResponsesAndSystemFiles'
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
    key: 'installIosUpdates',
    label: 'Install iOS Updates',
    tooltip: 'Controls whether iOS updates are installed automatically.',
  },
  {
    key: 'installSecurityResponsesAndSystemFiles',
    label: 'Install Security Responses and System Files',
    tooltip: 'Controls automatic installation of security responses and system files.',
  },
];

export const RAPID_SECURITY_RESPONSE_FIELDS: {
  key: keyof Pick<
    IosDdmPolicySettings,
    'offerRsrsForUserInstallation' | 'offerRsrRollbacksToUser'
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
    key: 'offerRsrRollbacksToUser',
    label: 'Offer RSR Rollbacks to the User',
    tooltip: 'Allows users to roll back installed Rapid Security Response updates.',
  },
];

function createDefaultEnforcementTime(): Date {
  const time = new Date();
  time.setHours(17, 0, 0, 0);
  return time;
}

function createDefaultOfferedPrograms(): BetaProgramRow[] {
  return [{ id: '1', description: '', token: '' }];
}

function createEarlyAdoptionSettings(): IosDdmPolicySettings {
  return {
    deferMajorOrMinorUpdatesDays: '7',
    enforceAutomaticUpdates: true,
    gracePeriodDays: '7',
    enforcementTime: createDefaultEnforcementTime(),
    detailsUrl: '',
    notifications: 'show-all',
    recommendedCadence: 'show-all',
    downloadNewUpdatesWhenAvailable: 'user-controlled',
    installIosUpdates: 'user-controlled',
    installSecurityResponsesAndSystemFiles: 'user-controlled',
    offerRsrsForUserInstallation: 'yes',
    offerRsrRollbacksToUser: 'yes',
    programEnrollment: 'always-off',
    offeredPrograms: createDefaultOfferedPrograms(),
  };
}

function createGeneralAdoptionSettings(): IosDdmPolicySettings {
  return {
    ...createEarlyAdoptionSettings(),
    deferMajorOrMinorUpdatesDays: '15',
    gracePeriodDays: '10',
    programEnrollment: 'user-allowed',
    offeredPrograms: createDefaultOfferedPrograms(),
  };
}

function createVanguardSettings(): IosDdmPolicySettings {
  return {
    ...createEarlyAdoptionSettings(),
    deferMajorOrMinorUpdatesDays: '1',
    gracePeriodDays: '3',
    programEnrollment: 'user-allowed',
  };
}

export function createIosDdmPolicySettingsForProfile(
  profile: IosDdmPolicyProfile,
): IosDdmPolicySettings {
  switch (profile) {
    case 'general-adoption':
      return createGeneralAdoptionSettings();
    case 'vanguard':
      return createVanguardSettings();
    case 'early-adoption':
    default:
      return createEarlyAdoptionSettings();
  }
}

export function cloneIosDdmPolicySettings(settings: IosDdmPolicySettings): IosDdmPolicySettings {
  return {
    ...settings,
    enforcementTime: settings.enforcementTime
      ? new Date(settings.enforcementTime.getTime())
      : null,
    offeredPrograms: settings.offeredPrograms.map((row) => ({ ...row })),
  };
}
