import type { Meta, StoryObj } from '@storybook/vue3';
import { SelectWithSlots } from '@jumpcloud/circuit/components';

const meta: Meta<typeof SelectWithSlots> = {
  title: 'Circuit DS/Components/SelectWithSlots',
  component: SelectWithSlots,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectWithSlots>;

export const Default: Story = {
  args: {},
};
