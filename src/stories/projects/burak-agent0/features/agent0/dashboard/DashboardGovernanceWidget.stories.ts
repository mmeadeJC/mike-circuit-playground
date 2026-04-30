import type { Meta, StoryObj } from '@storybook/vue3-vite';
import DashboardGovernanceWidget from './DashboardGovernanceWidget.vue';

const meta: Meta<typeof DashboardGovernanceWidget> = {
  title: 'AI Gateway - Burak/Admin Portal/Concept Parts/Dashboard/Governance Card',
  component: DashboardGovernanceWidget,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    () => ({ template: '<div style="width: 600px;"><story /></div>' }),
  ],
};

export default meta;

type Story = StoryObj<typeof DashboardGovernanceWidget>;

export const Alt01: Story = {
  name: 'ALT 01',
  args: {
    policies: [
      { name: 'Require managed devices' },
      { name: 'Contractor access restriction', profiles: ['Engineering Profile'] },
      { name: 'Trusted network only', profiles: ['Engineering Profile', 'Sales Profile'] },
    ],
  },
};

export const Alt02: Story = {
  name: 'ALT 02',
  args: {
    policies: [
      { name: 'Require managed devices' },
      { name: 'Contractor access restriction', servers: ['Engineering Server'] },
      { name: 'Trusted network only', servers: ['Engineering Server', 'Sales Server'] },
    ],
    scopeType: 'servers',
  },
};

export const EmptyState: Story = {
  name: 'Empty State',
  args: {
    policies: [],
  },
};
