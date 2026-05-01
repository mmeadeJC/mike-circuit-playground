<script setup lang="ts">
import { markRaw, ref } from 'vue';
import { CardButton, CollapsiblePanel, MessageNotification } from '@jumpcloud/circuit/components';
import {
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  RectangleStackIcon,
} from '@heroicons/vue/24/outline';

defineOptions({ name: 'AccessReviewsCampaignTemplatesPanel' });

const collapsed = ref(false);

const templateFlash = ref('');

const templates = [
  {
    id: 'tmpl_quarterly_app',
    title: 'Quarterly application access',
    description:
      'Recurring SSO application review with manager and resource-owner approvers, weekly reminders.',
    icon: markRaw(ClipboardDocumentListIcon),
  },
  {
    id: 'tmpl_contractor_groups',
    title: 'Contractor group membership',
    description:
      'One-time review of contractor directory groups with group-owner approval and mandatory justification.',
    icon: markRaw(RectangleStackIcon),
  },
  {
    id: 'tmpl_high_risk',
    title: 'High-risk application — dual approval',
    description:
      'Sequential approvers (manager then app owner), semi-annual cadence, scheduled remediation batch.',
    icon: markRaw(ClipboardDocumentListIcon),
  },
];

function onTemplateClick(id: string) {
  templateFlash.value = `Template “${id}” would start a guided campaign (playground).`;
  window.setTimeout(() => {
    templateFlash.value = '';
  }, 4000);
}
</script>

<template>
  <div class="flex flex-col gap-md h-full min-h-0 px-6 pb-6 overflow-y-auto">
    <MessageNotification
      v-if="templateFlash"
      severity="info"
      title="Templates"
      :detail="templateFlash"
      class="shrink-0"
    />

    <p class="text-body-md text-neutral-subtle m-0 max-w-3xl">
      Reuse saved scope, schedule, and reviewer policies. Selecting a template here is a playground
      preview — a full flow would open the campaign wizard with fields pre-filled.
    </p>

    <CollapsiblePanel
      v-model:collapsed="collapsed"
      header="Campaign templates"
      toggleable
      class="min-h-0"
    >
      <template #titleicon="iconProps">
        <RectangleStackIcon :class="iconProps.class" />
      </template>
      <template #toggleicon="iconProps">
        <ChevronRightIcon :class="iconProps.class" />
      </template>
      <div class="grid grid-cols-1 gap-md min-[640px]:grid-cols-2">
        <CardButton
          v-for="t in templates"
          :key="t.id"
          :title="t.title"
          :content="t.description"
          :trailing-icon="ChevronRightIcon"
          @click="onTemplateClick(t.id)"
        >
          <template #leading>
            <component :is="t.icon" class="size-5 text-neutral-base shrink-0" />
          </template>
        </CardButton>
      </div>
    </CollapsiblePanel>
  </div>
</template>
