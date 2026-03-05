import type { Meta, StoryObj } from '@storybook/vue3';
import Agent0DashboardView from './Agent0DashboardView.vue';
import {
  topServerUsage,
  topUsers,
  recentActivity,
  monthlyChartData,
} from '../shared/data';
import { buildMonthlyChartOptions } from '../shared/composables';

const meta: Meta<typeof Agent0DashboardView> = {
  title: 'Projects/Burak - Agent0/Dashboard',
  component: Agent0DashboardView,
  args: {
    topServerUsage,
    topUsers,
    recentActivity,
    monthlyChartData,
    monthlyChartOptions: buildMonthlyChartOptions(),
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0DashboardView>;

export const Default: Story = {};
