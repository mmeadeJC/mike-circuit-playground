import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { DataTableCellStatus } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTableCellStatus> = {
  title: 'Circuit DS/Components/DataTableCellStatus',
  component: DataTableCellStatus,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellStatus>;

export const Default: Story = {
  args: {
    label: 'Active',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Active',
    description: 'Last seen 2 hours ago',
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Active',
    size: 'small',
  },
};

export const WithAdvanceFilterLine: Story = {
  args: {
    label: 'Active',
    advanceFilterLine: true,
  },
};
