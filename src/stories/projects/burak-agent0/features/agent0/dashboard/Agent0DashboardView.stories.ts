import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';
import Agent0DashboardView from './Agent0DashboardView.vue';
import Agent0DashboardViewAlt02 from './Agent0DashboardViewAlt02.vue';
import {
  topServerUsage,
  topUsers,
  recentActivity,
  monthlyChartData,
} from '../shared/data';
import { buildMonthlyChartOptions } from '../shared/composables';

const sharedArgs = {
  topServerUsage,
  topUsers,
  recentActivity,
  monthlyChartData,
  monthlyChartOptions: buildMonthlyChartOptions(),
  governancePolicies: [],
};

const meta: Meta<typeof Agent0DashboardView> = {
  title: 'Projects/Burak - AI Connector/Concept Parts/Dashboard',
  component: Agent0DashboardView,
  args: sharedArgs,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0DashboardView>;

export const Alt01: Story = {
  name: 'ALT 01',
  args: {
    governanceScopeType: 'profiles',
  },
};

export const Alt02: Story = {
  name: 'ALT 02',
  render: () =>
    defineComponent({
      components: { Agent0DashboardViewAlt02 },
      setup() {
        return { ...sharedArgs, governanceScopeType: 'servers' as const };
      },
      template: `
        <Agent0DashboardViewAlt02
          :topServerUsage="topServerUsage"
          :topUsers="topUsers"
          :recentActivity="recentActivity"
          :monthlyChartData="monthlyChartData"
          :monthlyChartOptions="monthlyChartOptions"
          :governancePolicies="governancePolicies"
          :governanceScopeType="governanceScopeType"
        />
      `,
    }),
};
