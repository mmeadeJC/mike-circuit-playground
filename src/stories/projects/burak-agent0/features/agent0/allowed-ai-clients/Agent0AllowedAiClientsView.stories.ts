import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent, ref } from 'vue';
import Agent0AllowedAiClientsView from './Agent0AllowedAiClientsView.vue';
import { allowedAiClientsData } from '../shared/data';
import { useAllowedAiClientFilters } from '../shared/composables';
import type { AllowedAiClientSubmitPayload } from '../shared/types';

const meta: Meta<typeof Agent0AllowedAiClientsView> = {
  title: 'AI Gateway - Burak/Admin Portal/Phase 01 Parts/Allowed AI Clients',
  component: Agent0AllowedAiClientsView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0AllowedAiClientsView>;

export const List: Story = {
  name: 'List',
  render: () =>
    defineComponent({
      components: { Agent0AllowedAiClientsView },
      setup() {
        const entries = ref([...allowedAiClientsData]);
        const filters = useAllowedAiClientFilters(entries);

        function nextId() {
          const ids = entries.value.map((e) => e.id);
          return ids.length === 0 ? 1 : Math.max(...ids) + 1;
        }

        function onAddEntry(payload: AllowedAiClientSubmitPayload) {
          entries.value = [
            ...entries.value,
            {
              id: nextId(),
              kind: payload.kind,
              origin: payload.origin,
              note: payload.note,
              createdAt: new Date().toISOString(),
              snapshot: payload.snapshot,
            },
          ];
        }

        function onUpdateEntry(payload: AllowedAiClientSubmitPayload) {
          if (payload.id == null) return;
          entries.value = entries.value.map((e) =>
            e.id === payload.id
              ? {
                  ...e,
                  kind: payload.kind,
                  origin: payload.origin,
                  note: payload.note,
                  snapshot: payload.snapshot,
                }
              : e,
          );
        }

        function onDeleteEntries(ids: number[]) {
          entries.value = entries.value.filter((e) => !ids.includes(e.id));
        }

        return {
          entries,
          onAddEntry,
          onUpdateEntry,
          onDeleteEntries,
          ...filters,
        };
      },
      template: `
        <div class="h-screen flex flex-col">
          <Agent0AllowedAiClientsView
            :filtered-entries="filteredAllowedAiClientsData"
            :show-filter-dialog="showFilterDialog"
            :draft-kinds="draftKinds"
            :kind-options="kindOptions"
            :active-filter-chips="activeFilterChips"
            :draft-filter-count="draftFilterCount"
            @search="handleSearch"
            @open-filter-dialog="openFilterDialog"
            @apply-filters="applyFilters"
            @cancel-filter-dialog="cancelFilterDialog"
            @clear-draft-filters="clearDraftFilters"
            @clear-all-filters="clearAllFilters"
            @remove-filter-chip="removeFilterChip"
            @update:draft-kinds="draftKinds = $event"
            @add-entry="onAddEntry"
            @update-entry="onUpdateEntry"
            @delete-entries="onDeleteEntries"
          />
        </div>
      `,
    }),
};
