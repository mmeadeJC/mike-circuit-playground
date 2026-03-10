import type { Meta, StoryObj } from '@storybook/vue3';
import { ToggleSwitch } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Projects/Hina Playground/Master Toggle',
  component: ToggleSwitch,
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    label: 'AI Master Toggle',
    modelValue: true,
  },
};
