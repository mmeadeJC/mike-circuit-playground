import { PLATFORM_HOME_WIDGET_CHART_COLORS } from './unifiedPatchDashboardData';

export type WindowsKbRow = {
  id: string;
  patchId: string;
  title: string;
  classification: string;
  cveDetails: string;
  severity: string;
  releaseDate: string;
  superseded: 'Yes' | 'No';
  applicable: number;
};

export const WINDOWS_PATCH_INSIGHTS = {
  deployedPercent: 90,
  pendingPercent: 10,
  deployedColorClass: PLATFORM_HOME_WIDGET_CHART_COLORS.success,
  pendingColorClass: PLATFORM_HOME_WIDGET_CHART_COLORS.danger,
};

export const WINDOWS_SEVERITY_FILTER_OPTIONS = [
  { label: 'Critical', value: 'Critical' },
  { label: 'Important', value: 'Important' },
  { label: 'Moderate', value: 'Moderate' },
  { label: 'Low', value: 'Low' },
  { label: 'None', value: 'None' },
];

export const WINDOWS_KB_ROWS: WindowsKbRow[] = [
  {
    id: '1',
    patchId: 'KB2267602',
    title: 'Security Intelligence Update for Microsoft Defender Antivirus - KB2267602 (Version 1.413.405.0) - Current Channel (Broad)',
    classification: 'Definition Updates',
    cveDetails: 'NONE',
    severity: 'NONE',
    releaseDate: 'August 8, 2024',
    superseded: 'Yes',
    applicable: 1,
  },
  {
    id: '2',
    patchId: 'KB5041580',
    title: '2024-08 Cumulative Update for Windows 11 Version 23H2 for x64-based Systems (KB5041580)',
    classification: 'Security Updates',
    cveDetails: 'CVE-2024-38178',
    severity: 'Critical',
    releaseDate: 'August 13, 2024',
    superseded: 'No',
    applicable: 12,
  },
  {
    id: '3',
    patchId: 'KB5040435',
    title: '2024-07 Cumulative Update for Windows 10 Version 22H2 for x64-based Systems (KB5040435)',
    classification: 'Security Updates',
    cveDetails: 'CVE-2024-38080',
    severity: 'Important',
    releaseDate: 'July 9, 2024',
    superseded: 'Yes',
    applicable: 8,
  },
  {
    id: '4',
    patchId: 'KB5039212',
    title: '2024-06 Cumulative Update for Microsoft .NET Framework 3.5 and 4.8.1 for Windows 11 (KB5039212)',
    classification: 'Updates',
    cveDetails: 'NONE',
    severity: 'Moderate',
    releaseDate: 'June 11, 2024',
    superseded: 'No',
    applicable: 3,
  },
  {
    id: '5',
    patchId: 'KB5037846',
    title: '2024-05 Servicing Stack Update for Windows 11 Version 23H2 for x64-based Systems (KB5037846)',
    classification: 'Updates',
    cveDetails: 'NONE',
    severity: 'Low',
    releaseDate: 'May 14, 2024',
    superseded: 'Yes',
    applicable: 0,
  },
];
