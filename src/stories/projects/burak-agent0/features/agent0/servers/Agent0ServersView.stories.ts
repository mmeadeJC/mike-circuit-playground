import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, reactive, ref } from 'vue';
import Agent0ServersView from './Agent0ServersView.vue';
import { serversData, authStyleOptions } from '../shared/data';
import { useServerFilters } from '../shared/composables';

const meta: Meta<typeof Agent0ServersView> = {
  title: 'AI Connector - Burak/Admin Portal/Phase 01 Parts/Server',
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
        function onDeleteServer(row: Record<string, unknown>) {
          console.info('[Story] delete-server', row);
        }
        return {
          selectedServers,
          selectedServer,
          showServerDialog,
          serverForm,
          authStyleOptions,
          onDeleteServer,
          ...filters,
        };
      },
      template: `
        <Agent0ServersView
          :filteredServersData="filteredData"
          :selectedServers="selectedServers"
          :selectedServer="selectedServer"
          :showServerDialog="showServerDialog"
          :authStyleOptions="authStyleOptions"
          :serverForm="serverForm"
          @update:selectedServers="selectedServers = $event"
          @update:showServerDialog="showServerDialog = $event"
          @delete-server="onDeleteServer"
          @search="handleSearch"
        />
      `,
    }),
};
