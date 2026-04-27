<script setup lang="ts">
import { computed, ref, type Component } from 'vue';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
import {
  DeviceGroupsIcon,
  DeviceManagementIcon,
  DynamicUserGroupIcon,
  OAuthPermissionIcon,
  SaasManagementIcon,
  SsoIcon,
} from '@jumpcloud/icons';
import Dialog from 'primevue/dialog';
import SelectButton from 'primevue/selectbutton';
import AiSearchHeader from './AiSearchHeader.vue';
import SectionHeader from './SectionHeader.vue';
import SuggestionRow from './SuggestionRow.vue';
import RecentResultItem from './recent-result-item/RecentResultItem.vue';
import AiSearchFooter from './AiSearchFooter.vue';

const props = withDefaults(
  defineProps<{
    /** Optional initial search text (e.g. Storybook “typing” state). */
    initialQuery?: string;
  }>(),
  {
    initialQuery: undefined,
  }
);

const visible = defineModel<boolean>('visible', { default: false });

const query = ref(props.initialQuery ?? '');

const scopeFilterOptions = [
  { value: 'all', label: 'All', count: 17 },
  { value: 'users', label: 'Users', count: 1 },
  { value: 'devices', label: 'Devices', count: 3 },
  { value: 'groups', label: 'Groups', count: 4 },
  { value: 'policies', label: 'Policies', count: 3 },
  { value: 'apps', label: 'Apps', count: 4 },
] as const;

const selectedScope = ref<(typeof scopeFilterOptions)[number]['value']>(
  scopeFilterOptions[0].value
);

/** Typing state: search has input; shows counts on scope options (mock). */
const isTyping = computed(() => query.value.trim().length > 0);

const recentItems = [
  {
    title: 'Show devices matching compliance policy…',
    subtitle: 'AI Result',
    timestamp: '2 min ago',
  },
  {
    title: 'List users in Engineering group',
    subtitle: 'AI Result',
    timestamp: '14 min ago',
  },
  {
    title: 'SSO apps with SAML errors',
    subtitle: 'AI Result',
    timestamp: '1 hr ago',
  },
  {
    title: 'JumpCloud Admin Portal navigation',
    subtitle: 'AI Result',
    timestamp: 'Yesterday',
  },
  {
    title: 'Device compliance policies overview',
    subtitle: 'AI Result',
    timestamp: 'Yesterday',
  },
  {
    title: 'MFA enrollment status by org',
    subtitle: 'AI Result',
    timestamp: '2 days ago',
  },
  {
    title: 'RADIUS server configuration',
    subtitle: 'AI Result',
    timestamp: '3 days ago',
  },
  {
    title: 'Directory insights export',
    subtitle: 'AI Result',
    timestamp: 'Last week',
  },
];

/** Mock result list for Slack-style search (design reference). */
const searchResultItems: {
  title: string;
  subtitle: string;
  leadingIcon: Component;
}[] = [
  {
    title: 'Slack',
    subtitle: 'SSO Application',
    leadingIcon: SsoIcon,
  },
  {
    title: 'Slack',
    subtitle: 'SaaS Management',
    leadingIcon: SaasManagementIcon,
  },
  {
    title: 'Slack-IT-Test-Mac',
    subtitle: 'Device',
    leadingIcon: DeviceManagementIcon,
  },
  {
    title: 'Slack-IT-Test-Mac',
    subtitle: 'Assets',
    leadingIcon: DeviceManagementIcon,
  },
  {
    title: 'SlackAdmins',
    subtitle: 'User Group',
    leadingIcon: DynamicUserGroupIcon,
  },
  {
    title: 'Slack-DevTeam',
    subtitle: 'User Group',
    leadingIcon: DynamicUserGroupIcon,
  },
  {
    title: 'Slack-Lab-Devices',
    subtitle: 'Device Group',
    leadingIcon: DeviceGroupsIcon,
  },
  {
    title: 'Slack Access Policy',
    subtitle: 'Policy',
    leadingIcon: OAuthPermissionIcon,
  },
];

const searchResults = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) {
    return [];
  }
  return searchResultItems.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q)
  );
});

const staticSuggestionLabels = [
  'JumpCloud Admin Portal',
  'Device compliance policies',
  'SSO application setup',
] as const;

const typingSuggestionLabels = computed(() => {
  const q = query.value.trim();
  return [
    `Show users who can access ${q}`,
    `List Devices where ${q} is installed`,
    `Show groups with ${q} permission assignments`,
  ];
});

function scopeButtonLabel(
  option: (typeof scopeFilterOptions)[number]
): string {
  if (isTyping.value) {
    return `${option.label} (${option.count})`;
  }
  return option.label;
}

const dialogPt = {
  root: {
    class:
      '!flex !max-h-[min(92vh,720px)] !flex-col !overflow-hidden !rounded-lg border border-neutral-default_solid bg-neutral-surface shadow-e100',
  },
  header: { class: '!shrink-0 !border-0 !p-0' },
  headerActions: { class: '!hidden' },
  content: {
    class:
      '!flex !min-h-0 !flex-1 !flex-col !overflow-hidden !bg-neutral-surface !p-0 !rounded-b-lg',
  },
};
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    :style="{ width: '560px' }"
    :pt="dialogPt"
    v-bind="$attrs"
  >
    <template #header>
      <div class="flex min-w-0 w-full items-center">
        <span class="sr-only">AI Search</span>
        <AiSearchHeader v-model="query" class="min-w-0 flex-1" />
      </div>
    </template>
    <div class="flex min-h-0 flex-1 flex-col">
      <div
        class="min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div class="flex flex-col gap-4 px-2 pb-2 pt-4">
          <div class="self-start px-2">
            <SelectButton
              v-model="selectedScope"
              :options="[...scopeFilterOptions]"
              option-label="label"
              option-value="value"
              size="small"
              :fluid="false"
              class="w-fit shrink-0"
            >
              <template #option="{ option }">
                <span>{{ scopeButtonLabel(option) }}</span>
              </template>
            </SelectButton>
          </div>
          <div v-show="!isTyping" class="flex flex-col">
            <SectionHeader
              title="Recent"
              :show-icon="false"
              :show-feedback="false"
            />
            <div class="flex flex-col gap-0">
              <RecentResultItem
                v-for="(item, index) in recentItems"
                :key="index"
                variant="recent"
                :title="item.title"
                :subtitle="item.subtitle"
                :timestamp="item.timestamp"
              />
            </div>
          </div>
          <div v-show="isTyping" class="flex flex-col">
            <SectionHeader
              title="Result"
              :show-icon="false"
              :show-feedback="false"
            />
            <div class="flex flex-col gap-0">
              <RecentResultItem
                v-for="(item, index) in searchResults"
                :key="`result-${index}`"
                variant="result"
                :title="item.title"
                :subtitle="item.subtitle"
                :search-query="query"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <template #icon>
                  <component
                    :is="item.leadingIcon"
                    class="size-4 shrink-0 text-icon-neutral-base"
                    aria-hidden="true"
                  />
                </template>
                <template #right>
                  <div
                    class="flex h-auto w-auto shrink-0 items-center justify-center"
                  >
                    <ArrowTopRightOnSquareIcon
                      class="size-3.5 text-icon-neutral-base"
                      aria-hidden="true"
                    />
                  </div>
                </template>
              </RecentResultItem>
            </div>
          </div>
          <div class="flex flex-col gap-0">
            <SectionHeader
              title="Suggestions"
              :show-icon="false"
              :show-feedback="false"
            />
            <div v-if="!isTyping" class="flex flex-col gap-0">
              <SuggestionRow
                v-for="(label, i) in staticSuggestionLabels"
                :key="`sugg-static-${i}`"
                :label="label"
              />
            </div>
            <div v-else class="flex flex-col gap-0">
              <SuggestionRow
                v-for="(label, i) in typingSuggestionLabels"
                :key="`sugg-typing-${i}`"
                :label="label"
                :search-query="query"
              />
            </div>
          </div>
        </div>
      </div>
      <AiSearchFooter variant="default" />
    </div>
  </Dialog>
</template>
