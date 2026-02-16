import type { Meta, StoryObj } from '@storybook/vue3';
import { Chip } from '@jumpcloud/circuit/components';

const meta: Meta<typeof Chip> = {
  title: 'Circuit DS/Components/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {},
};
