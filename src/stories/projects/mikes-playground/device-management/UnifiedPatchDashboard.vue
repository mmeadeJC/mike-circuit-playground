<script setup lang="ts">
import { ref } from 'vue';
import { DashboardPageLayout } from '@jumpcloud/circuit/components';
import SelectButton from 'primevue/selectbutton';
import UnifiedPatchDashboardAppleTab from './UnifiedPatchDashboardAppleTab.vue';
import UnifiedPatchDashboardOverviewTab from './UnifiedPatchDashboardOverviewTab.vue';
import UnifiedPatchDashboardWindowsTab from './UnifiedPatchDashboardWindowsTab.vue';

const props = withDefaults(
  defineProps<{
    initialScopeTab?: 'overview' | 'apple' | 'windows';
  }>(),
  {
    initialScopeTab: 'overview',
  },
);

const dashboardScopeTab = ref(props.initialScopeTab);

const dashboardScopeOptions = [
  { label: 'Overview', value: 'overview' },
  { label: 'Apple', value: 'apple' },
  { label: 'Windows', value: 'windows' },
];
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

        <UnifiedPatchDashboardOverviewTab v-if="dashboardScopeTab === 'overview'" />
        <UnifiedPatchDashboardAppleTab v-else-if="dashboardScopeTab === 'apple'" />
        <UnifiedPatchDashboardWindowsTab v-else />
      </div>
    </DashboardPageLayout>
  </div>
</template>
