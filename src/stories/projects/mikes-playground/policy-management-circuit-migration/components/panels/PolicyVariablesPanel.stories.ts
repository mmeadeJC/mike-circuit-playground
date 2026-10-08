import type { Meta, StoryObj } from '@storybook/vue3';
import PolicyVariablesPanel from '@/components/PolicyVariablesPanel.vue';

const meta: Meta<typeof PolicyVariablesPanel> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Policy Variables Panel",
  component: PolicyVariablesPanel,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof PolicyVariablesPanel>;

export const Default: Story = {
  render: (args) => ({
    components: { PolicyVariablesPanel },
    setup: () => ({ args }),
    template: `
      <div class="max-w-4xl">
        <PolicyVariablesPanel v-bind="args" />
      </div>
    `,
  }),
};

export const WithVariablesInUse: Story = {
  name: 'With variables in use',
  args: {
    scanText: ['{device.model}-{device.serialNumber}-{user.username}', 'Owner: {user.fullName}'],
  },
  render: Default.render,
};
