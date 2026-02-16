import type { Meta, StoryObj } from '@storybook/vue3';
import { Paginator } from '@jumpcloud/circuit/components';

const meta: Meta<typeof Paginator> = {
  title: 'Circuit DS/Components/Paginator',
  component: Paginator,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Paginator>;

export const Default: Story = {
  args: {},
};
