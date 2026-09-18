<script setup lang="ts">
import { computed, markRaw, ref, type Component } from 'vue';
import { AppNavigation, PageHeader } from '@jumpcloud/circuit/components';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
import { ComputerDesktopIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';

import TopBar from '@/components/AdminTopBar.vue';
import {
  menuItems,
  profileMenuItems,
} from '../policy-management-circuit-migration/demo/policyMigrationMenuItems';

export type PatchPolicyEditTarget = {
  name: string;
  description: string;
  scope: 'os' | 'browser';
  os?: 'windows' | 'mac' | 'ios';
};

const props = defineProps<{
  policy: PatchPolicyEditTarget;
  editor: Component | null;
}>();

const emit = defineEmits<{
  back: [];
}>();

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const activeTab = ref('details');
const shieldIcon = markRaw(ShieldCheckIcon);

const activeTabLabel = computed(
  () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? '',
);

function handleBack() {
  activeTab.value = 'details';
  emit('back');
}
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <AppNavigation
      :menuItems="menuItems"
      :profileMenuItems="profileMenuItems"
      activeItem="device management"
      :collapsible="true"
      :topNavToggle="true"
    />

    <div class="relative flex min-w-0 flex-1 flex-col overflow-hidden">
      <TopBar
        showBackButton
        backButtonLabel="Patch Management"
        @back="handleBack"
      />

      <PageHeader
        :title="policy.name"
        :icon="shieldIcon"
        :tabs="detailTabs"
        :activeTab="activeTab"
        @update:activeTab="activeTab = $event"
      >
        <template #subtitle>
          <div class="flex items-center">
            <Tag value="Device" severity="accent-purple">
              <template #icon>
                <ComputerDesktopIcon class="size-3.5" />
              </template>
            </Tag>
            <Divider layout="vertical" />
            <span class="text-body-md text-neutral-subtle">
              Configure the policy below, then select the target groups and devices to apply it.
            </span>
          </div>
        </template>
      </PageHeader>

      <div class="patch-policy-edit-page-body min-h-0 flex-1 overflow-hidden bg-neutral-surface">
        <component
          :is="editor"
          v-if="activeTab === 'details' && editor"
          class="h-full min-h-0"
        />

        <div
          v-else-if="activeTab === 'details'"
          class="flex h-full flex-col items-center justify-center gap-sm p-md text-center text-neutral-subtle"
        >
          <span class="text-body-md">{{ policy.name }}</span>
          <span class="text-body-sm">
            This policy type has not been migrated to Circuit DS yet.
          </span>
        </div>

        <div
          v-else
          class="flex h-full flex-col items-center justify-center gap-sm p-md text-neutral-subtle"
        >
          <span class="text-body-md">{{ activeTabLabel }}</span>
          <span class="text-body-sm">
            Binding content is not included in this Details tab exploration.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
