import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import Agent0ActivityView from './Agent0ActivityView.vue';
import { activityLogColumns } from '../shared/columns';
import { activityLogData, activityLogFilters } from '../shared/data';
import { useActivityFilters } from '../shared/composables';

const meta: Meta<typeof Agent0ActivityView> = {
  title: 'Projects/Burak - Agent0/Activity',
  component: Agent0ActivityView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ActivityView>;

export const Default: Story = {
  render: () =>
    defineComponent({
      components: { Agent0ActivityView },
      setup() {
        const {
          activityFilters,
          filteredActivityData,
          clearActivityFilters,
          removeActivityFilter,
          handleActivitySearch,
        } = useActivityFilters(activityLogData, activityLogFilters);

        return {
          activityLogColumns,
          activityFilters,
          filteredActivityData,
          clearActivityFilters,
          removeActivityFilter,
          handleActivitySearch,
        };
      },
      template: `
        <Agent0ActivityView
          :activityLogColumns="activityLogColumns"
          :filteredActivityData="filteredActivityData"
          :activityFilters="activityFilters"
          @search="handleActivitySearch"
          @clear-filters="clearActivityFilters"
          @remove-filter="removeActivityFilter"
        />
      `,
    }),
};
