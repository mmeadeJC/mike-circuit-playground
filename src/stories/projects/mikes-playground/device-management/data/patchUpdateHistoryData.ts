import type { StackedBarBucket, StackedBarSeries } from '@/components/StackedBarChart.vue';

/** Mock Update History data for the Patch Management card. Deterministic so the chart is stable between renders. */

export type UpdateHistoryRange = '7-days' | '30-days' | '90-days';
export type UpdateHistoryOs = 'all' | 'mac' | 'windows' | 'ios';
export type UpdateHistoryEventType = 'all' | 'installed' | 'failed';

export const UPDATE_HISTORY_SERIES: StackedBarSeries[] = [
  { key: 'installed', label: 'Installed', barClass: 'bg-chart-success-lightest', swatchClass: 'bg-chart-success-lightest' },
  { key: 'failed', label: 'Failed', barClass: 'bg-chart-danger-lightest', swatchClass: 'bg-chart-danger-lightest' },
];

const OS_KEYS = ['mac', 'windows', 'ios'] as const;
const DAYS_OF_HISTORY = 90;
/** Relative event volume per OS. */
const OS_VOLUME: Record<(typeof OS_KEYS)[number], number> = { mac: 9, windows: 14, ios: 5 };

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

function formatLabel(date: Date) {
  return `${MONTHS[date.getMonth()]} ${pad(date.getDate())}`;
}

function formatTime(date: Date, time: string) {
  return `${MONTHS[date.getMonth()]} ${pad(date.getDate())}, ${date.getFullYear()} ${time}`;
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

type DayCounts = { installed: number; failed: number };

/** Counts for one day and OS. Weekends are quieter; a few days are spikes (patch Tuesday, etc.). */
function dayCounts(daysAgo: number, os: (typeof OS_KEYS)[number], osIndex: number, date: Date): DayCounts {
  const seed = daysAgo * 7 + osIndex * 131;
  const weekend = date.getDay() === 0 || date.getDay() === 6;
  const spike = seededRandom(seed + 3) > 0.9 ? 2.4 : 1;
  const base = OS_VOLUME[os] * (weekend ? 0.25 : 1) * spike * (0.4 + seededRandom(seed) * 1.2);
  const installed = Math.round(base);
  const failed = installed > 0 ? Math.round(installed * (0.04 + seededRandom(seed + 11) * 0.14)) : 0;
  return { installed, failed };
}

export function buildUpdateHistory(
  range: UpdateHistoryRange,
  os: UpdateHistoryOs,
  eventType: UpdateHistoryEventType,
  today = new Date(),
) {
  const rangeDays = range === '7-days' ? 7 : range === '30-days' ? 30 : 90;
  const byWeek = range === '90-days';
  const bucketDays = byWeek ? 7 : 1;
  const osKeys = os === 'all' ? [...OS_KEYS] : [os];
  const end = startOfDay(today);

  const buckets: StackedBarBucket[] = [];
  for (let offset = rangeDays; offset > 0; offset -= bucketDays) {
    const length = Math.min(bucketDays, offset);
    const values = { installed: 0, failed: 0 };
    let first: Date | null = null;
    let last: Date | null = null;

    for (let d = 0; d < length; d++) {
      const daysAgo = offset - 1 - d;
      if (daysAgo >= DAYS_OF_HISTORY) continue;
      const date = new Date(end);
      date.setDate(end.getDate() - daysAgo);
      first ??= date;
      last = date;
      for (const key of osKeys) {
        const counts = dayCounts(daysAgo, key, OS_KEYS.indexOf(key), date);
        values.installed += counts.installed;
        values.failed += counts.failed;
      }
    }

    if (!first || !last) continue;
    buckets.push({
      id: first.toISOString(),
      label: formatLabel(first),
      startTime: formatTime(first, '00:00:00'),
      endTime: formatTime(last, '23:59:59'),
      values: {
        installed: eventType === 'failed' ? 0 : values.installed,
        failed: eventType === 'installed' ? 0 : values.failed,
      },
    });
  }

  const hasData = buckets.some((bucket) => bucket.values.installed + bucket.values.failed > 0);
  return {
    buckets,
    hasData,
    series: UPDATE_HISTORY_SERIES.filter(
      (series) => eventType === 'all' || series.key === eventType,
    ),
    xAxisTitle: byWeek ? 'Time Range by Week' : 'Time Range by Day',
    labelEvery: range === '30-days' ? 5 : byWeek ? 2 : 1,
  };
}
