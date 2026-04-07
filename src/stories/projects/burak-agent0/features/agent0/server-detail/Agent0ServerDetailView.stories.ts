import type { Meta, StoryObj } from '@storybook/vue3';
import { computed, defineComponent, ref } from 'vue';
import Button from 'primevue/button';
import Agent0ServerDetailView from './Agent0ServerDetailView.vue';
import {
  serversData,
  getServerUserGroups,
  serverDashboardStats,
  getServerRecentActivity,
  getServerMonthlyChartData,
  getServerActivityLogData,
} from '../shared/data';
import { useChartThemeOptions } from '../shared/composables';

const meta: Meta<typeof Agent0ServerDetailView> = {
  title: 'AI Connector - Burak/Admin Portal/Concept Parts/Server',
  component: Agent0ServerDetailView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ServerDetailView>;

export const ServerDetail: Story = {
  name: 'Server Detail',
  render: () =>
    defineComponent({
      components: { Agent0ServerDetailView, Button },
      setup() {
        const editingServer = ref(serversData[0]);
        const serverDetailTab = ref('overview');
        const { monthlyChartOptions } = useChartThemeOptions();

        const serverUserGroups = computed(() =>
          getServerUserGroups(editingServer.value.slug),
        );
        const currentServerDashboardStats = computed(() =>
          serverDashboardStats[editingServer.value.slug] ?? null,
        );
        const serverRecentActivity = computed(() =>
          getServerRecentActivity(editingServer.value.slug),
        );
        const serverMonthlyChartData = computed(() =>
          getServerMonthlyChartData(editingServer.value.slug),
        );
        const serverActivityData = computed(() =>
          getServerActivityLogData(editingServer.value.slug),
        );

        return {
          editingServer,
          serverDetailTab,
          serverUserGroups,
          currentServerDashboardStats,
          serverRecentActivity,
          serverMonthlyChartData,
          monthlyChartOptions,
          serverActivityData,
        };
      },
      template: `
        <div class="flex flex-col h-screen">
          <div class="p-4 border-b border-neutral-default_solid bg-neutral-surface">
            <div class="flex gap-2">
              <Button label="Overview" severity="secondary" variant="outlined" @click="serverDetailTab = 'overview'" />
              <Button :label="'User Groups (' + serverUserGroups.length + ')'" severity="secondary" variant="outlined" @click="serverDetailTab = 'server-user-groups'" />
              <Button label="Activity" severity="secondary" variant="outlined" @click="serverDetailTab = 'server-activity'" />
            </div>
          </div>
          <Agent0ServerDetailView
            :editingServer="editingServer"
            :serverDetailTab="serverDetailTab"
            :serverUserGroups="serverUserGroups"
            :serverDashboardStats="currentServerDashboardStats"
            :serverRecentActivity="serverRecentActivity"
            :serverMonthlyChartData="serverMonthlyChartData"
            :monthlyChartOptions="monthlyChartOptions"
            :serverActivityData="serverActivityData"
          />
        </div>
      `,
    }),
};
