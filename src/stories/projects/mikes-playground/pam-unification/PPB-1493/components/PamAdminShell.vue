<script setup lang="ts">
import { markRaw, ref, watch } from 'vue';
import { AppNavigation, PageHeader } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';
import AdminTopBar from '@/components/AdminTopBar.vue';
import { PamIcon } from '../../icons/PamIcon';
import {
  pamUnificationMenuItems,
  pamUnificationProfileMenuItems,
} from '../../pamUnificationNavData';

const props = withDefaults(
  defineProps<{
    activePrimaryTab?: string;
    title?: string;
    subtitleText?: string;
    /** Show the Back button in the top bar (detail pages). */
    showBackButton?: boolean;
    backButtonLabel?: string;
    /** Hide the PAM page header + tab group (detail pages). */
    hideHeader?: boolean;
  }>(),
  { activePrimaryTab: 'jump-servers', title: 'Privileged Access Management', showBackButton: false, backButtonLabel: 'Back', hideHeader: false }
);

const primaryTabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Privileged Resources', value: 'resources' },
  { label: 'Resource Managers', value: 'resource-managers' },
  { label: 'Blocking Rules', value: 'blocking-rules' },
  { label: 'Jump Servers', value: 'jump-servers' },
  { label: 'Session History', value: 'session-history' },
  { label: 'User Groups', value: 'user-groups' },
];

const emit = defineEmits<{ (e: 'update:activePrimaryTab', v: string): void; (e: 'back'): void }>();

const tab = ref(props.activePrimaryTab);
watch(
  () => props.activePrimaryTab,
  (v) => (tab.value = v)
);
watch(tab, (v) => emit('update:activePrimaryTab', v));

const pageIcon = markRaw(PamIcon);
const settingsIcon = markRaw(Cog6ToothIcon);
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-neutral-surface">
    <AppNavigation
      :menuItems="pamUnificationMenuItems"
      :profileMenuItems="pamUnificationProfileMenuItems"
      activeItem="privileged access mgmt"
      :collapsible="true"
      :topNavToggle="true"
    />
    <div class="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden">
      <AdminTopBar :show-back-button="showBackButton" :back-button-label="backButtonLabel" @back="emit('back')" />
      <PageHeader
        v-if="!hideHeader"
        :title="title"
        :subtitle-text="subtitleText"
        :icon="pageIcon"
        :tabs="primaryTabs"
        v-model:active-tab="tab"
      >
        <template #actions>
          <Button label="Settings" severity="secondary" variant="outlined">
            <template #icon="iconProps">
              <component :is="settingsIcon" :class="iconProps.class" />
            </template>
          </Button>
        </template>
      </PageHeader>
      <slot :active-primary-tab="tab" />
    </div>
  </div>
</template>
