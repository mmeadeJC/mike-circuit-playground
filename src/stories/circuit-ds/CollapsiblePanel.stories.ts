import type { Meta, StoryObj } from '@storybook/vue3';
import { CollapsiblePanel } from '@jumpcloud/circuit/components';

const meta: Meta<typeof CollapsiblePanel> = {
  title: 'Circuit DS/Components/CollapsiblePanel',
  component: CollapsiblePanel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CollapsiblePanel>;

export const Default: Story = {
  args: {},
};
