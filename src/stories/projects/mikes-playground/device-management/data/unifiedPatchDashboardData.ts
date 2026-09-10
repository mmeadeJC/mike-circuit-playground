export type SeverityKey = 'critical' | 'high' | 'security' | 'low' | 'none';

export type SeveritySegment = {
  key: SeverityKey;
  count: number;
  colorClass: string;
};

export type FleetSeverityRow = {
  platform: 'windows' | 'apple';
  label: string;
  pendingTotal: number;
  segments: SeveritySegment[];
};

export type DeviceMetricRow = {
  platform: 'windows' | 'apple';
  label: string;
  description: string;
  value: number;
};

export type AgeRangeRow = {
  label: string;
  patchCount: number;
  percent: number;
  barColorClass: string;
};

/**
 * Platform Home → Data Widgets chart palette (User Status & Health, Device Fleet,
 * MFA Overview, OS Distribution). Uses Circuit chart light/base tokens for the
 * pastel fills shown on the production home dashboard — not chart-dark or
 * notification background tints.
 *
 * Reference mapping from home widgets:
 * - chart-success-base — Active, Enrolled, Users with MFA Enabled
 * - chart-success-light — Encrypted
 * - chart-warning-light — Suspended, Users Without MFA
 * - chart-info-light — Staged, Windows, TOTP
 * - chart-branding-light — JumpCloud Protect
 * - chart-yellow-light — WebAuthn, iOS
 * - chart-danger-light — Linux, Unencrypted, Not Enrolled
 * - chart-purple-light — Android
 * - chart-violet-light — macOS
 */
export const PLATFORM_HOME_WIDGET_CHART_COLORS = {
  success: 'bg-chart-success-base',
  successMuted: 'bg-chart-success-light',
  warning: 'bg-chart-warning-light',
  info: 'bg-chart-info-light',
  branding: 'bg-chart-branding-light',
  yellow: 'bg-chart-yellow-light',
  danger: 'bg-chart-danger-light',
  purple: 'bg-chart-purple-light',
  violet: 'bg-chart-violet-light',
  neutral: 'bg-chart-aster-lightest',
} as const;

/** Patch severity bars — aligned to Platform Home widget semantics. */
export const PATCH_SEVERITY_CHART_COLORS = {
  critical: PLATFORM_HOME_WIDGET_CHART_COLORS.danger,
  high: PLATFORM_HOME_WIDGET_CHART_COLORS.warning,
  security: PLATFORM_HOME_WIDGET_CHART_COLORS.success,
  low: PLATFORM_HOME_WIDGET_CHART_COLORS.info,
  none: PLATFORM_HOME_WIDGET_CHART_COLORS.neutral,
} as const;

/** Age-of-update bars — same palette family, ordered by urgency. */
export const PATCH_AGE_CHART_COLORS = {
  recent: PLATFORM_HOME_WIDGET_CHART_COLORS.success,
  moderate: PLATFORM_HOME_WIDGET_CHART_COLORS.info,
  aging: PLATFORM_HOME_WIDGET_CHART_COLORS.warning,
  stale: PLATFORM_HOME_WIDGET_CHART_COLORS.danger,
} as const;

export const SEVERITY_LEGEND: { key: SeverityKey; label: string; colorClass: string }[] = [
  { key: 'critical', label: 'Critical', colorClass: PATCH_SEVERITY_CHART_COLORS.critical },
  { key: 'high', label: 'High/Important', colorClass: PATCH_SEVERITY_CHART_COLORS.high },
  { key: 'security', label: 'Security/Medium', colorClass: PATCH_SEVERITY_CHART_COLORS.security },
  { key: 'low', label: 'Low', colorClass: PATCH_SEVERITY_CHART_COLORS.low },
  { key: 'none', label: 'None', colorClass: PATCH_SEVERITY_CHART_COLORS.none },
];

export const FLEET_SEVERITY_ROWS: FleetSeverityRow[] = [
  {
    platform: 'windows',
    label: 'Windows',
    pendingTotal: 16,
    segments: [
      { key: 'critical', count: 2, colorClass: PATCH_SEVERITY_CHART_COLORS.critical },
      { key: 'high', count: 4, colorClass: PATCH_SEVERITY_CHART_COLORS.high },
      { key: 'security', count: 6, colorClass: PATCH_SEVERITY_CHART_COLORS.security },
      { key: 'low', count: 3, colorClass: PATCH_SEVERITY_CHART_COLORS.low },
      { key: 'none', count: 1, colorClass: PATCH_SEVERITY_CHART_COLORS.none },
    ],
  },
  {
    platform: 'apple',
    label: 'Apple',
    pendingTotal: 2,
    segments: [
      { key: 'critical', count: 1, colorClass: PATCH_SEVERITY_CHART_COLORS.critical },
      { key: 'high', count: 1, colorClass: PATCH_SEVERITY_CHART_COLORS.high },
    ],
  },
];

export const PENDING_DEVICE_ROWS: DeviceMetricRow[] = [
  {
    platform: 'windows',
    label: 'Windows',
    description: 'Pending KB installations',
    value: 8,
  },
  {
    platform: 'apple',
    label: 'Apple',
    description: 'Current OS version is behind target',
    value: 0,
  },
];

export const FAILURE_DEVICE_ROWS: DeviceMetricRow[] = [
  {
    platform: 'windows',
    label: 'Windows',
    description: 'Failed KB installation telemetry',
    value: 1,
  },
  {
    platform: 'apple',
    label: 'Apple',
    description: 'DDM install failures',
    value: 2,
  },
];

export const AGE_OF_MISSING_UPDATES: Record<'windows' | 'apple', AgeRangeRow[]> = {
  windows: [
    { label: '1 - 30 days', patchCount: 1, percent: 6, barColorClass: PATCH_AGE_CHART_COLORS.recent },
    { label: '31 - 60 days', patchCount: 2, percent: 12, barColorClass: PATCH_AGE_CHART_COLORS.moderate },
    { label: '61 - 90 days', patchCount: 1, percent: 6, barColorClass: PATCH_AGE_CHART_COLORS.aging },
    { label: '90+ days', patchCount: 12, percent: 75, barColorClass: PATCH_AGE_CHART_COLORS.stale },
  ],
  apple: [
    { label: '1 - 30 days', patchCount: 0, percent: 0, barColorClass: PATCH_AGE_CHART_COLORS.recent },
    { label: '31 - 60 days', patchCount: 1, percent: 50, barColorClass: PATCH_AGE_CHART_COLORS.moderate },
    { label: '61 - 90 days', patchCount: 0, percent: 0, barColorClass: PATCH_AGE_CHART_COLORS.aging },
    { label: '90+ days', patchCount: 1, percent: 50, barColorClass: PATCH_AGE_CHART_COLORS.stale },
  ],
};

export function segmentWidthPercent(count: number, total: number): number {
  if (total <= 0 || count <= 0) return 0;
  return (count / total) * 100;
}
