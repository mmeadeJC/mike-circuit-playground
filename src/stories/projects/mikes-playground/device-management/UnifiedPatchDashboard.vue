<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { DashboardPageLayout } from '@jumpcloud/circuit/components';
import SelectButton from 'primevue/selectbutton';
import {
  AGE_OF_MISSING_UPDATES,
  FLEET_SEVERITY_ROWS,
  FAILURE_DEVICE_ROWS,
  PENDING_DEVICE_ROWS,
  SEVERITY_LEGEND,
  segmentWidthPercent,
  type DeviceMetricRow,
  type FleetSeverityRow,
} from './data/unifiedPatchDashboardData';

const WindowsIcon = defineComponent({
  name: 'WindowsIcon',
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 shrink-0"><path d="M3 5.548l7.065-0.966v6.822H3V5.548zm0 12.904l7.065 0.966v-6.822H3v5.856zm7.937 1.085L21 21v-7.596H10.937v-0.001 8.133zm0-15.074v8.133H21V3L10.937 4.463z"/></svg>`,
});

const AppleIcon = defineComponent({
  name: 'AppleIcon',
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 shrink-0"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
});

const dashboardScopeTab = ref<'overview' | 'apple' | 'windows'>('overview');
const agePlatformTab = ref<'windows' | 'apple'>('windows');

const dashboardScopeOptions = [
  { label: 'Overview', value: 'overview' },
  { label: 'Apple', value: 'apple' },
  { label: 'Windows', value: 'windows' },
];

const agePlatformOptions = [
  { label: 'Windows', value: 'windows' },
  { label: 'Apple', value: 'apple' },
];

const visibleFleetRows = computed(() => {
  if (dashboardScopeTab.value === 'apple') {
    return FLEET_SEVERITY_ROWS.filter((row) => row.platform === 'apple');
  }
  if (dashboardScopeTab.value === 'windows') {
    return FLEET_SEVERITY_ROWS.filter((row) => row.platform === 'windows');
  }
  return FLEET_SEVERITY_ROWS;
});

function filterDeviceRows(rows: DeviceMetricRow[]) {
  if (dashboardScopeTab.value === 'apple') {
    return rows.filter((row) => row.platform === 'apple');
  }
  if (dashboardScopeTab.value === 'windows') {
    return rows.filter((row) => row.platform === 'windows');
  }
  return rows;
}

const visiblePendingRows = computed(() => filterDeviceRows(PENDING_DEVICE_ROWS));
const visibleFailureRows = computed(() => filterDeviceRows(FAILURE_DEVICE_ROWS));
const ageRows = computed(() => AGE_OF_MISSING_UPDATES[agePlatformTab.value]);

function platformIcon(platform: FleetSeverityRow['platform']) {
  return platform === 'windows' ? WindowsIcon : AppleIcon;
}

function pendingUpdatesLabel(total: number) {
  return `${total} pending update${total === 1 ? '' : 's'}`;
}

function ageStatLabel(row: { patchCount: number; percent: number }) {
  const patchLabel = row.patchCount === 1 ? 'patch' : 'patches';
  return `${row.patchCount} ${patchLabel} - ${row.percent}%`;
}
</script>

<template>
  <div class="flex-1 overflow-hidden bg-neutral-mid min-h-0">
    <DashboardPageLayout class="w-full! h-full! [&_.layout-main]:!pt-md" max-width="1280">
      <div class="flex flex-col gap-md min-h-0">
        <div class="shrink-0 overflow-visible border-b border-neutral-default_solid pb-md">
          <div class="p-px overflow-visible">
            <SelectButton
              v-model="dashboardScopeTab"
              :options="dashboardScopeOptions"
              optionLabel="label"
              optionValue="value"
              :allowEmpty="false"
            />
          </div>
        </div>

        <div class="rounded-sm border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md">
          <div class="flex flex-col gap-xs">
            <span class="text-heading-4 text-neutral-base">Fleet Update Summary</span>
            <span class="text-body-md text-neutral-subtle">
              Missing updates on your Windows and Apple devices in your fleet.
            </span>
          </div>

          <div class="flex flex-col gap-sm">
            <span class="text-body-md-semi-bold text-neutral-base">Pending Updates by Severity</span>

            <div
              v-for="row in visibleFleetRows"
              :key="row.platform"
              class="grid grid-cols-[auto_1fr_auto] items-center gap-md"
            >
              <div class="flex items-center gap-sm min-w-24">
                <component :is="platformIcon(row.platform)" />
                <span class="text-body-md text-neutral-base">{{ row.label }}</span>
              </div>

              <div class="flex h-3 min-w-0 rounded-xs overflow-hidden bg-neutral-surface_deep">
                <div
                  v-for="segment in row.segments"
                  :key="segment.key"
                  :class="segment.colorClass"
                  :style="{ width: `${segmentWidthPercent(segment.count, row.pendingTotal)}%` }"
                  :title="`${segment.count}`"
                />
              </div>

              <span class="text-body-md text-neutral-subtle whitespace-nowrap">
                {{ pendingUpdatesLabel(row.pendingTotal) }}
              </span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-md pt-xs">
            <div
              v-for="item in SEVERITY_LEGEND"
              :key="item.key"
              class="flex items-center gap-xs"
            >
              <span class="size-2 rounded-full shrink-0" :class="item.colorClass" />
              <span class="text-body-xs text-neutral-subtle">{{ item.label }}</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-md min-w-0">
          <div class="rounded-sm border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md">
            <span class="text-heading-4 text-neutral-base">Devices With Pending Updates</span>

            <div
              v-for="row in visiblePendingRows"
              :key="row.platform"
              class="flex items-center justify-between gap-md border-b border-neutral-default_solid pb-md last:border-b-0 last:pb-0"
            >
              <div class="flex items-start gap-sm min-w-0">
                <div class="mt-0.5 shrink-0">
                  <component :is="platformIcon(row.platform)" />
                </div>
                <div class="flex flex-col gap-xs min-w-0">
                  <span class="text-body-md-semi-bold text-neutral-base">{{ row.label }}</span>
                  <span class="text-body-sm text-neutral-subtle">{{ row.description }}</span>
                </div>
              </div>
              <span class="text-heading-2 text-neutral-base shrink-0">{{ row.value }}</span>
            </div>
          </div>

          <div class="rounded-sm border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md">
            <span class="text-heading-4 text-neutral-base">Devices With Update Failures</span>

            <div
              v-for="row in visibleFailureRows"
              :key="row.platform"
              class="flex items-center justify-between gap-md border-b border-neutral-default_solid pb-md last:border-b-0 last:pb-0"
            >
              <div class="flex items-start gap-sm min-w-0">
                <div class="mt-0.5 shrink-0">
                  <component :is="platformIcon(row.platform)" />
                </div>
                <div class="flex flex-col gap-xs min-w-0">
                  <span class="text-body-md-semi-bold text-neutral-base">{{ row.label }}</span>
                  <span class="text-body-sm text-neutral-subtle">{{ row.description }}</span>
                </div>
              </div>
              <span class="text-heading-2 text-neutral-base shrink-0">{{ row.value }}</span>
            </div>
          </div>
        </div>

        <div class="rounded-sm border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-md">
          <div class="flex items-start justify-between gap-md">
            <span class="text-heading-4 text-neutral-base">Age of Missing Updates</span>
            <div class="p-px overflow-visible shrink-0">
              <SelectButton
                v-model="agePlatformTab"
                :options="agePlatformOptions"
                optionLabel="label"
                optionValue="value"
                :allowEmpty="false"
              />
            </div>
          </div>

          <div class="flex flex-col gap-md">
            <div
              v-for="row in ageRows"
              :key="row.label"
              class="grid grid-cols-[max-content_1fr_auto] items-center gap-md"
            >
              <span class="text-body-md text-neutral-base">{{ row.label }}</span>
              <div class="h-3 min-w-0 rounded-xs bg-neutral-surface_deep overflow-hidden">
                <div
                  class="h-full rounded-xs"
                  :class="row.barColorClass"
                  :style="{ width: `${Math.max(row.percent, row.percent > 0 ? 2 : 0)}%` }"
                />
              </div>
              <span class="text-body-md text-neutral-subtle whitespace-nowrap">
                {{ ageStatLabel(row) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardPageLayout>
  </div>
</template>
