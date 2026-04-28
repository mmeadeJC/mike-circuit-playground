<script setup lang="ts">
import { computed, markRaw, ref, type Component } from 'vue';
import {
  ArrowTopRightOnSquareIcon,
  InboxStackIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';
import {
  AiSearchIcon,
  DeviceGroupsIcon,
  DeviceManagementIcon,
  DynamicUserGroupIcon,
  OAuthPermissionIcon,
  SaasManagementIcon,
  SsoIcon,
} from '@jumpcloud/icons';
import { DataTable, DataTableCellText } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import AiSearchHeader from './parts/AiSearchHeader.vue';
import SectionHeader from './parts/SectionHeader.vue';
import SuggestionRow from './parts/SuggestionRow.vue';
import SearchItemRow from './parts/SearchItemRow.vue';
import AiSearchFooter from './parts/AiSearchFooter.vue';
import SearchScopeSelectButton from './parts/SearchScopeSelectButton.vue';
import type { SearchScopeValue } from './parts/searchScopeOptions';
import NoRecentSearches from './parts/empty-states/NoRecentSearches.vue';
import NoMatchesFound from './parts/empty-states/NoMatchesFound.vue';
import NoAiResults from './parts/empty-states/NoAiResults.vue';

const props = withDefaults(
  defineProps<{
    /** Optional initial search text (e.g. Storybook “typing” state). */
    initialQuery?: string;
    /** Demo prop: Start in AI result mode (for Storybook stories). */
    initialAiResultMode?: boolean;
    /** Demo prop: Set initial AI result data state (for Storybook stories). */
    initialHasAiResults?: boolean;
    /** When false, Recent shows empty-state copy instead of mock rows (Storybook). */
    initialHasRecentSearches?: boolean;
  }>(),
  {
    initialQuery: undefined,
    initialAiResultMode: false,
    initialHasAiResults: true,
    initialHasRecentSearches: true,
  }
);

const visible = defineModel<boolean>('visible', { default: false });

const query = ref(props.initialQuery ?? '');

const selectedScope = ref<SearchScopeValue>('all');

/** Typing state: search has input; shows counts on scope options (mock). */
const isTyping = computed(() => query.value.trim().length > 0);

/** AI Result Mode: tracks if we're in AI result state */
const isAiResultMode = ref(props.initialAiResultMode);

/** AI Result Query: stores the query that triggered the AI result */
const aiResultQuery = ref(props.initialQuery || '');

/** Has AI Results: determines if AI search returned data or is empty */
const hasAiResults = ref(props.initialHasAiResults);

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
    leadingIcon: markRaw(MagnifyingGlassIcon),
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
    leadingIcon: markRaw(InboxStackIcon),
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
    leadingIcon: InboxStackIcon,
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

/** No mock rows match the current query (typing only). */
const noSearchMatches = computed(
  () => isTyping.value && searchResults.value.length === 0
);

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

/** Sample AI result data for the table */
const aiResultData = [
  { user: 'Alice Johnson', status: 'Active', department: 'Engineering' },
  { user: 'Bob Smith', status: 'Inactive', department: 'Marketing' },
  { user: 'Carol Davis', status: 'Active', department: 'Sales' },
  { user: 'David Wilson', status: 'Active', department: 'Engineering' },
  { user: 'Emma Brown', status: 'Pending', department: 'HR' },
  { user: 'Frank Miller', status: 'Active', department: 'Finance' },
  { user: 'Grace Lee', status: 'Active', department: 'Engineering' },
];

type AiResultRow = (typeof aiResultData)[number];

const aiResultColumns = [
  {
    field: 'user',
    header: 'Users',
    sortable: false,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AiResultRow }) => ({
      label: sp.data.user,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: false,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AiResultRow }) => ({
      label: sp.data.status,
    }),
  },
  {
    field: 'department',
    header: 'Department',
    sortable: false,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AiResultRow }) => ({
      label: sp.data.department,
    }),
  },
];

/** Computed properties for new AI result states */
const showAiResultWithData = computed(() => isAiResultMode.value && hasAiResults.value);
/** Tag is for “no directory matches” while typing — hide in AI result mode (with or without data). */
const showHeaderAiSearchTag = computed(
  () => noSearchMatches.value && !isAiResultMode.value
);
const showAiResultEmpty = computed(() => isAiResultMode.value && !hasAiResults.value);
const showTypingResults = computed(() => isTyping.value && !isAiResultMode.value);
/** Empty query, not in AI mode: scope + Recent + Suggestions + default footer. */
const showHomeBrowseState = computed(
  () => !isTyping.value && !isAiResultMode.value
);
const showRecentList = computed(
  () => showHomeBrowseState.value && props.initialHasRecentSearches
);
const showNoRecentPlaceholder = computed(
  () => showHomeBrowseState.value && !props.initialHasRecentSearches
);
const showAiModeFooter = computed(
  () => isAiResultMode.value && hasAiResults.value
);

/** Event handlers for AI result triggers */
function handleEnterKey() {
  if (noSearchMatches.value) {
    triggerAiResult(query.value);
  }
}

function handleSuggestionClick(suggestionLabel: string) {
  triggerAiResult(suggestionLabel);
}

function triggerAiResult(searchQuery: string) {
  isAiResultMode.value = true;
  aiResultQuery.value = searchQuery;
  // Simulate AI result logic - for demo, some queries return empty results
  hasAiResults.value = simulateAiResultsExist(searchQuery);
}

function simulateAiResultsExist(queryText: string): boolean {
  // Mock logic: queries containing "empty" or "none" return no results
  return !queryText.toLowerCase().includes('empty') && !queryText.toLowerCase().includes('none');
}


const dialogPt = {
  root: {
    class:
      '!flex !max-h-[70vh] !flex-col !overflow-hidden !rounded-lg border border-neutral-default_solid bg-neutral-surface shadow-e100',
  },
  header: { class: '!shrink-0 !border-0 !p-0' },
  headerActions: { class: '!hidden' },
  content: {
    class:
      '!flex !min-h-0 !flex-1 !flex-col !overflow-hidden !bg-neutral-surface !p-0 !rounded-b-lg',
    style: 'height: auto',
  },
};
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    position="top"
    :closable="false"
    :draggable="false"
    :style="{
      width: '560px',
      marginTop: '10vh',
      marginBottom: '10%',
    }"
    :pt="dialogPt"
    v-bind="$attrs"
  >
    <template #header>
      <div class="flex min-w-0 w-full items-center">
        <span class="sr-only">AI Search</span>
        <AiSearchHeader
          v-model="query"
          class="min-w-0 flex-1"
          :show-ai-search-tag="showHeaderAiSearchTag"
          @enter-key="handleEnterKey"
        />
      </div>
    </template>
    <div class="flex min-h-0 flex-1 flex-col">
      <div
        class="min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div class="flex flex-col gap-4 px-2 pb-4 pt-4">
          <div class="flex flex-col gap-2">
            <div v-show="!isAiResultMode" class="self-start px-2">
              <SearchScopeSelectButton
                v-model="selectedScope"
                :show-counts="isTyping"
                :show-zero-counts="noSearchMatches"
              />
            </div>
            <div class="flex flex-col gap-4">
          <div v-show="showRecentList" class="flex flex-col">
            <SectionHeader
              title="Recent"
              :show-icon="false"
              :show-feedback="false"
            />
            <div class="flex flex-col gap-0">
              <SearchItemRow
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
              </SearchItemRow>
            </div>
          </div>
          <div v-show="showNoRecentPlaceholder" class="flex flex-col">
            <SectionHeader
              title="Recent"
              :show-icon="false"
              :show-feedback="false"
            />
            <NoRecentSearches />
          </div>
          <div v-show="showTypingResults" class="flex flex-col">
            <SectionHeader
              title="Result"
              :show-icon="false"
              :show-feedback="false"
            />
            <div class="flex flex-col gap-0">
              <NoMatchesFound v-if="noSearchMatches" />
              <template v-else>
                <SearchItemRow
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
                </SearchItemRow>
              </template>
            </div>
          </div>
          <!-- AI Result with Data Section -->
          <div v-show="showAiResultWithData" class="flex flex-col flex-grow min-h-0">
            <SectionHeader
              title="AI Result"
              :show-icon="true"
              :show-feedback="true"
            />
            <div class="flex flex-col flex-grow min-h-0 px-2 pt-[2px] pb-2">
              <DataTable
                :data="aiResultData"
                :columns="aiResultColumns"
                data-key="user"
                :paginator="false"
                scrollable
                scroll-height="flex"
                class="w-full h-full"
              />
            </div>
          </div>
          <!-- AI Result Empty Section -->
          <div v-show="showAiResultEmpty" class="flex flex-col">
            <SectionHeader
              title="AI Result"
              :show-icon="true"
              :show-feedback="false"
            />
            <NoAiResults />
          </div>
          <div v-show="!isAiResultMode" class="flex flex-col gap-0">
            <SectionHeader
              title="Suggestions"
              :show-icon="false"
              :show-feedback="false"
            />
            <div v-if="showHomeBrowseState" class="flex flex-col gap-0">
              <SuggestionRow
                v-for="(label, i) in staticSuggestionLabels"
                :key="`sugg-static-${i}`"
                :label="label"
                @click="handleSuggestionClick"
              />
            </div>
            <div v-if="showTypingResults" class="flex flex-col gap-0">
              <SuggestionRow
                v-for="(label, i) in typingSuggestionLabels"
                :key="`sugg-typing-${i}`"
                :label="label"
                :search-query="query"
                @click="handleSuggestionClick"
              />
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <AiSearchFooter :variant="showAiModeFooter ? 'ai-mode' : 'default'" />
    </div>
  </Dialog>
</template>
