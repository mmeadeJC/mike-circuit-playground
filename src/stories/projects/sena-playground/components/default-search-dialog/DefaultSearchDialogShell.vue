<script setup lang="ts">
import { computed, markRaw, ref, type Component } from 'vue';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
import {
  AiSearchIcon,
  DeviceGroupsIcon,
  DeviceManagementIcon,
  DynamicUserGroupIcon,
  OAuthPermissionIcon,
  SaasManagementIcon,
  SsoIcon,
} from '@jumpcloud/icons';
import Dialog from 'primevue/dialog';
import AiSearchHeader from '../ai-search-dialog/parts/AiSearchHeader.vue';
import PlaceholderIcon from '../ai-search-dialog/parts/PlaceholderIcon.vue';
import SectionHeader from '../ai-search-dialog/parts/SectionHeader.vue';
import RecentResultItem from '../ai-search-dialog/parts/RecentResultItem.vue';
import SearchScopeSelectButton from '../ai-search-dialog/parts/SearchScopeSelectButton.vue';
import type { SearchScopeValue } from '../ai-search-dialog/parts/searchScopeOptions';

const props = withDefaults(
  defineProps<{
    /** Optional initial search text (e.g. Storybook typing state). */
    initialQuery?: string;
    /** When false, Recent shows empty-state copy instead of mock rows. */
    initialHasRecentSearches?: boolean;
  }>(),
  {
    initialQuery: undefined,
    initialHasRecentSearches: true,
  }
);

const visible = defineModel<boolean>('visible', { default: false });

const query = ref(props.initialQuery ?? '');

const selectedScope = ref<SearchScopeValue>('all');

const isTyping = computed(() => query.value.trim().length > 0);

const recentItems: {
  title: string;
  subtitle: string;
  timestamp: string;
  leadingIcon: Component;
}[] = [
  {
    title: 'Show devices with failed login attempts',
    subtitle: 'AI Result',
    timestamp: '5 minutes ago',
    leadingIcon: markRaw(AiSearchIcon),
  },
  {
    title: 'Left nav – first round',
    subtitle: 'Search',
    timestamp: '7 minutes ago',
    leadingIcon: markRaw(PlaceholderIcon),
  },
  {
    title: 'Find users without MFA',
    subtitle: 'AI Result',
    timestamp: '12 minutes ago',
    leadingIcon: markRaw(AiSearchIcon),
  },
  {
    title: 'MacBook Pro M2',
    subtitle: 'Assets',
    timestamp: '20 minutes ago',
    leadingIcon: markRaw(PlaceholderIcon),
  },
  {
    title: 'Sarah Mitchell',
    subtitle: 'User',
    timestamp: '3 days ago',
    leadingIcon: markRaw(DynamicUserGroupIcon),
  },
  {
    title: 'MacBook Pro M2',
    subtitle: 'Device',
    timestamp: '3 days ago',
    leadingIcon: markRaw(DeviceManagementIcon),
  },
  {
    title: 'Salesforce',
    subtitle: 'SSO Application',
    timestamp: '1 week ago',
    leadingIcon: markRaw(SsoIcon),
  },
  {
    title: 'MFA Enforcement Policy',
    subtitle: 'Policy',
    timestamp: '2 weeks ago',
    leadingIcon: markRaw(OAuthPermissionIcon),
  },
];

/** Mock directory results (same pattern as AI Search dialog). */
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

const noSearchMatches = computed(
  () => isTyping.value && searchResults.value.length === 0
);

const showRecentResults = computed(
  () => !isTyping.value && props.initialHasRecentSearches
);

const showNoRecentPlaceholder = computed(
  () => !isTyping.value && !props.initialHasRecentSearches
);

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
        <span class="sr-only">Search</span>
        <AiSearchHeader
          v-model="query"
          class="min-w-0 flex-1"
          :enable-enter-key="false"
        >
          <template #leading>
            <PlaceholderIcon
              class="size-4 shrink-0 text-neutral-base"
              aria-hidden="true"
            />
          </template>
        </AiSearchHeader>
      </div>
    </template>
    <div class="flex min-h-0 flex-1 flex-col">
      <div
        class="min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div class="flex flex-col gap-4 px-2 pb-2 pt-4">
          <div class="self-start px-2">
            <SearchScopeSelectButton
              v-model="selectedScope"
              :show-counts="isTyping"
            />
          </div>

          <div v-show="showRecentResults" class="flex flex-col">
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
              >
                <template #icon>
                  <component
                    :is="item.leadingIcon"
                    class="size-4 shrink-0 text-icon-neutral-base"
                    aria-hidden="true"
                  />
                </template>
              </RecentResultItem>
            </div>
          </div>

          <div v-show="showNoRecentPlaceholder" class="flex flex-col">
            <SectionHeader
              title="Recent"
              :show-icon="false"
              :show-feedback="false"
            />
            <div class="px-2">
              <p class="m-0 text-body-sm text-neutral-subtle" role="status">
                No recent searches yet.
              </p>
            </div>
          </div>

          <div v-show="isTyping" class="flex flex-col">
            <SectionHeader
              title="Result"
              :show-icon="false"
              :show-feedback="false"
            />
            <div class="flex flex-col gap-0">
              <div v-if="noSearchMatches" class="px-2">
                <p class="m-0 text-body-sm text-neutral-subtle" role="status">
                  No matches found.
                </p>
              </div>
              <template v-else>
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
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>
