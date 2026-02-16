import type { Meta, StoryObj } from '@storybook/vue3';
import { ToggleSwitch } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Circuit DS/Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {},
};
