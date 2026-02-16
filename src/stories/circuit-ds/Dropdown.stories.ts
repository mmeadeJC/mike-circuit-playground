import type { Meta, StoryObj } from '@storybook/vue3';
import { Dropdown } from '@jumpcloud/circuit/components';

const meta: Meta<typeof Dropdown> = {
  title: 'Circuit DS/Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
};
