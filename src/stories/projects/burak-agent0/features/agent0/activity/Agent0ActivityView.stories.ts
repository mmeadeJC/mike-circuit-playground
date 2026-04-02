import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import Agent0ActivityView from './Agent0ActivityView.vue';
import { activityLogColumns } from '../shared/columns';
import { activityLogData } from '../shared/data';
import { useActivityFilters } from '../shared/composables';

const meta: Meta<typeof Agent0ActivityView> = {
  title: 'Projects/Burak - AI Connector/Phase 01 Parts/Recent Activity',
  component: Agent0ActivityView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ActivityView>;

export const RecentActivity: Story = {
  name: 'Recent Activity',
  render: () =>
    defineComponent({
      components: { Agent0ActivityView },
      setup() {
        const filters = useActivityFilters(activityLogData);
        return { activityLogColumns, ...filters };
      },
      template: `
        <Agent0ActivityView
          :activityLogColumns="activityLogColumns"
          :filteredActivityData="filteredActivityData"
          :showFilterDialog="showFilterDialog"
          :draftUsers="draftUsers"
          :draftEventTypes="draftEventTypes"
          :draftServers="draftServers"
          :draftStatus="draftStatus"
          :userOptions="userOptions"
          :eventTypeOptions="eventTypeOptions"
          :serverOptions="serverOptions"
          :statusOptions="statusOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @search="handleActivitySearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftUsers="draftUsers = $event"
          @update:draftEventTypes="draftEventTypes = $event"
          @update:draftServers="draftServers = $event"
          @update:draftStatus="draftStatus = $event"
        />
      `,
    }),
};
