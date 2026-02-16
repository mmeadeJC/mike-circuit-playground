import type { Meta, StoryObj } from '@storybook/vue3';
import { ProgressSpinner } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ProgressSpinner> = {
  title: 'Circuit DS/Components/ProgressSpinner',
  component: ProgressSpinner,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProgressSpinner>;

export const Default: Story = {
  args: {},
};
