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

export const SEVERITY_LEGEND: { key: SeverityKey; label: string; colorClass: string }[] = [
  { key: 'critical', label: 'Critical', colorClass: 'bg-error-base' },
  { key: 'high', label: 'High/Important', colorClass: 'bg-warning-base' },
  { key: 'security', label: 'Security/Medium', colorClass: 'bg-success-base' },
  { key: 'low', label: 'Low', colorClass: 'bg-info-base' },
  { key: 'none', label: 'None', colorClass: 'bg-neutral-muted' },
];

export const FLEET_SEVERITY_ROWS: FleetSeverityRow[] = [
  {
    platform: 'windows',
    label: 'Windows',
    pendingTotal: 16,
    segments: [
      { key: 'critical', count: 2, colorClass: 'bg-error-base' },
      { key: 'high', count: 4, colorClass: 'bg-warning-base' },
      { key: 'security', count: 6, colorClass: 'bg-success-base' },
      { key: 'low', count: 3, colorClass: 'bg-info-base' },
      { key: 'none', count: 1, colorClass: 'bg-neutral-muted' },
    ],
  },
  {
    platform: 'apple',
    label: 'Apple',
    pendingTotal: 2,
    segments: [
      { key: 'critical', count: 1, colorClass: 'bg-error-base' },
      { key: 'high', count: 1, colorClass: 'bg-warning-base' },
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
    { label: '1 - 30 days', patchCount: 1, percent: 6, barColorClass: 'bg-success-base' },
    { label: '31 - 60 days', patchCount: 2, percent: 12, barColorClass: 'bg-info-base' },
    { label: '61 - 90 days', patchCount: 1, percent: 6, barColorClass: 'bg-warning-base' },
    { label: '90+ days', patchCount: 12, percent: 75, barColorClass: 'bg-error-base' },
  ],
  apple: [
    { label: '1 - 30 days', patchCount: 0, percent: 0, barColorClass: 'bg-success-base' },
    { label: '31 - 60 days', patchCount: 1, percent: 50, barColorClass: 'bg-info-base' },
    { label: '61 - 90 days', patchCount: 0, percent: 0, barColorClass: 'bg-warning-base' },
    { label: '90+ days', patchCount: 1, percent: 50, barColorClass: 'bg-error-base' },
  ],
};

export function segmentWidthPercent(count: number, total: number): number {
  if (total <= 0 || count <= 0) return 0;
  return (count / total) * 100;
}
