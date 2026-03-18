import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, reactive, ref } from 'vue';
import Agent0ServersView from './Agent0ServersView.vue';
import { serversData, profilesData, userGroupsData, profileUserGroups, authStyleOptions } from '../shared/data';
import { getServerColumns } from '../shared/columns';
import { useServerFilters } from '../shared/composables';

const meta: Meta<typeof Agent0ServersView> = {
  title: 'Projects/Burak - AI Connector/Parts/Server',
  component: Agent0ServersView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ServersView>;

export const List: Story = {
  name: 'List',
  render: () =>
    defineComponent({
      components: { Agent0ServersView },
      setup() {
        const selectedServers = ref([]);
        const selectedServer = ref(serversData[0]);
        const showServerDialog = ref(false);
        const serverForm = reactive({
          targetId: serversData[0].slug,
          name: serversData[0].name,
          url: serversData[0].url,
          authStyle: serversData[0].connectionType,
          authConfig: serversData[0].authConfig,
        });
        const filters = useServerFilters(serversData);
        return {
          selectedServers,
          selectedServer,
          showServerDialog,
          serverForm,
          serverColumns: getServerColumns(profilesData, userGroupsData, profileUserGroups),
          authStyleOptions,
          ...filters,
        };
      },
      template: `
        <Agent0ServersView
          :filteredServersData="filteredData"
          :serverColumns="serverColumns"
          :selectedServers="selectedServers"
          :selectedServer="selectedServer"
          :showServerDialog="showServerDialog"
          :authStyleOptions="authStyleOptions"
          :serverForm="serverForm"
          :showFilterDialog="showFilterDialog"
          :draftConnectionTypes="draftConnectionTypes"
          :draftStatus="draftStatus"
          :connectionTypeOptions="connectionTypeOptions"
          :statusOptions="statusOptions"
          :activeFilterChips="activeFilterChips"
          :activeFilterCount="activeFilterCount"
          @update:selectedServers="selectedServers = $event"
          @update:showServerDialog="showServerDialog = $event"
          @search="handleSearch"
          @openFilterDialog="openFilterDialog"
          @applyFilters="applyFilters"
          @cancelFilterDialog="cancelFilterDialog"
          @clearDraftFilters="clearDraftFilters"
          @clearAllFilters="clearAllFilters"
          @removeFilterChip="removeFilterChip"
          @update:draftConnectionTypes="draftConnectionTypes = $event"
          @update:draftStatus="draftStatus = $event"
        />
      `,
    }),
};
