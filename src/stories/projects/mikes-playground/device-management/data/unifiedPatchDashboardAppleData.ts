import { PLATFORM_HOME_WIDGET_CHART_COLORS } from './unifiedPatchDashboardData';

export type AppleDeploymentRow = {
  id: string;
  platform: 'macOS' | 'iOS' | 'iPadOS';
  version: string;
  deployed: number;
  total: number;
  percent: number;
  barColorClass: string;
};

export type AppleOsSeverity = 'Critical' | 'High' | 'Low' | 'None';

export type AppleOsUpdateRow = {
  id: string;
  platform: 'macOS' | 'iOS' | 'iPadOS';
  osVersion: string;
  releaseDate: string;
  cveCount: number;
  highestSeverity: AppleOsSeverity;
  cveDetailsHref?: string;
  targetedDevices: number;
  installedDevices: number;
  pendingDevices: number;
  installingDevices: number;
};

export const APPLE_DEPLOYMENT_ROWS: AppleDeploymentRow[] = [
  {
    id: 'macos',
    platform: 'macOS',
    version: 'macOS 13.5.4',
    deployed: 1,
    total: 1,
    percent: 100,
    barColorClass: 'bg-chart-info-base',
  },
  {
    id: 'ios',
    platform: 'iOS',
    version: '—',
    deployed: 0,
    total: 0,
    percent: 0,
    barColorClass: PLATFORM_HOME_WIDGET_CHART_COLORS.neutral,
  },
  {
    id: 'ipados',
    platform: 'iPadOS',
    version: 'iPadOS 16.1',
    deployed: 1,
    total: 1,
    percent: 100,
    barColorClass: PLATFORM_HOME_WIDGET_CHART_COLORS.success,
  },
];

export const APPLE_OS_UPDATE_ROWS: AppleOsUpdateRow[] = [
  {
    id: '1',
    platform: 'iOS',
    osVersion: '16.6.1',
    releaseDate: 'September 7, 2023',
    cveCount: 0,
    highestSeverity: 'Low',
    targetedDevices: 0,
    installedDevices: 0,
    pendingDevices: 0,
    installingDevices: 0,
  },
  {
    id: '2',
    platform: 'iPadOS',
    osVersion: '16.1',
    releaseDate: 'October 24, 2022',
    cveCount: 2,
    highestSeverity: 'High',
    cveDetailsHref: '#',
    targetedDevices: 1,
    installedDevices: 1,
    pendingDevices: 0,
    installingDevices: 0,
  },
  {
    id: '3',
    platform: 'macOS',
    osVersion: '13.5.4',
    releaseDate: 'September 11, 2023',
    cveCount: 1,
    highestSeverity: 'Critical',
    cveDetailsHref: '#',
    targetedDevices: 1,
    installedDevices: 1,
    pendingDevices: 0,
    installingDevices: 0,
  },
  {
    id: '4',
    platform: 'macOS',
    osVersion: '12.7.4',
    releaseDate: 'August 30, 2023',
    cveCount: 0,
    highestSeverity: 'None',
    targetedDevices: 0,
    installedDevices: 0,
    pendingDevices: 0,
    installingDevices: 0,
  },
  {
    id: '5',
    platform: 'iPadOS',
    osVersion: '16.6',
    releaseDate: 'July 24, 2023',
    cveCount: 3,
    highestSeverity: 'High',
    cveDetailsHref: '#',
    targetedDevices: 0,
    installedDevices: 0,
    pendingDevices: 0,
    installingDevices: 0,
  },
];

export const APPLE_PLATFORM_FILTER_OPTIONS = [
  { label: 'macOS', value: 'macOS' },
  { label: 'iOS', value: 'iOS' },
  { label: 'iPadOS', value: 'iPadOS' },
];

export function appleSeverityTagSeverity(severity: AppleOsSeverity): string {
  if (severity === 'Critical') return 'danger';
  if (severity === 'High') return 'success';
  if (severity === 'Low') return 'info';
  return 'secondary';
}
