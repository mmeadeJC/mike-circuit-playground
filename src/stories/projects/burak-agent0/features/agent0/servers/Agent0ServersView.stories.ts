import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, reactive, ref } from 'vue';
import Agent0ServersView from './Agent0ServersView.vue';
import { serversData, authStyleOptions } from '../shared/data';
import { serverColumns } from '../shared/columns';

const meta: Meta<typeof Agent0ServersView> = {
  title: 'Projects/Burak - Agent0/Servers',
  component: Agent0ServersView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ServersView>;

export const Default: Story = {
  render: () =>
    defineComponent({
      components: { Agent0ServersView },
      setup() {
        const selectedServers = ref([]);
        const selectedServer = ref(serversData[0]);
        const showServerDrawer = ref(true);
        const serverForm = reactive({
          targetId: serversData[0].slug,
          name: serversData[0].name,
          url: serversData[0].url,
          authStyle: serversData[0].connectionType,
          authConfig: serversData[0].authConfig,
        });
        return {
          selectedServers,
          selectedServer,
          showServerDrawer,
          serverForm,
          serversData,
          serverColumns,
          authStyleOptions,
        };
      },
      template: `
        <Agent0ServersView
          :serversData="serversData"
          :serverColumns="serverColumns"
          :selectedServers="selectedServers"
          :selectedServer="selectedServer"
          :showServerDrawer="showServerDrawer"
          :useInlinePanel="true"
          :authStyleOptions="authStyleOptions"
          :serverForm="serverForm"
          @update:selectedServers="selectedServers = $event"
          @update:showServerDrawer="showServerDrawer = $event"
        />
      `,
    }),
};
