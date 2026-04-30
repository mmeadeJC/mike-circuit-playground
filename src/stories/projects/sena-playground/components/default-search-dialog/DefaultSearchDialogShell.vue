<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';
import Dialog from 'primevue/dialog';
import AiSearchFooter from '../ai-search-dialog/parts/AiSearchFooter.vue';
import AiSearchHeader from '../ai-search-dialog/parts/AiSearchHeader.vue';
import SectionHeader from '../ai-search-dialog/parts/SectionHeader.vue';
import SearchItemRow from '../ai-search-dialog/parts/SearchItemRow.vue';
import SearchScopeSelectButton from '../ai-search-dialog/parts/SearchScopeSelectButton.vue';
import type { SearchScopeValue } from '../ai-search-dialog/parts/searchScopeOptions';
import NoRecentSearches from '../ai-search-dialog/parts/empty-states/NoRecentSearches.vue';
import NoMatchesFound from '../ai-search-dialog/parts/empty-states/NoMatchesFound.vue';
import {
  mockRecentItems as recentItems,
  mockSearchResultItems as searchResultItems,
} from '../searchDialogMockData';

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
        <span class="sr-only">Default Search</span>
        <AiSearchHeader
          v-model="query"
          class="min-w-0 flex-1"
          :enable-enter-key="false"
        >
          <template #leading>
            <MagnifyingGlassIcon
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
        <div class="flex flex-col gap-4 px-2 pb-4 pt-4">
          <div class="flex flex-col gap-2">
            <div class="self-start px-2">
              <SearchScopeSelectButton
                v-model="selectedScope"
                :show-counts="isTyping"
                :show-zero-counts="noSearchMatches"
              />
            </div>

            <div class="flex flex-col gap-4">
          <div v-show="showRecentResults" class="flex flex-col">
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

          <div v-show="isTyping" class="flex flex-col">
            <SectionHeader
              title="Result"
              :show-icon="false"
              :show-feedback="false"
            />
            <div class="flex flex-col gap-0">
              <NoMatchesFound
                v-if="noSearchMatches"
                message="No matches found."
              />
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
          </div>
          </div>
        </div>
      </div>
      <AiSearchFooter variant="default" />
    </div>
  </Dialog>
</template>
