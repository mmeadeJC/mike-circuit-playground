import type { Meta, StoryObj } from '@storybook/vue3';
import { AppNavigation } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AppNavigation> = {
  title: 'Circuit DS/Components/AppNavigation',
  component: AppNavigation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AppNavigation>;

export const Default: Story = {
  args: {},
};
