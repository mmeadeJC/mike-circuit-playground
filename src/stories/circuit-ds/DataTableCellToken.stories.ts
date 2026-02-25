import type { Meta, StoryObj } from '@storybook/vue3';
import { DataTableCellToken } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTableCellToken> = {
  title: 'Circuit DS/Components/DataTableCellToken',
  component: DataTableCellToken,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['Status', 'Tags', 'Chips'] },
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellToken>;

export const StatusType: Story = {
  args: {
    type: 'Status',
    statusLabel: 'Active',
  },
};

export const TagsType: Story = {
  args: {
    type: 'Tags',
    tags: ['Tag 01', 'Tag 02', 'Tag 03', 'Tag 04', 'Tag 05'],
    maxVisibleTags: 3,
  },
};

export const ChipsType: Story = {
  args: {
    type: 'Chips',
    chips: ['Chip 01', 'Chip 02', 'Chip 03'],
    maxVisibleChips: 3,
  },
};

export const SmallStatus: Story = {
  args: {
    type: 'Status',
    statusLabel: 'Active',
    size: 'small',
  },
};

export const SmallTags: Story = {
  args: {
    type: 'Tags',
    tags: ['Tag 01', 'Tag 02', 'Tag 03'],
    maxVisibleTags: 3,
    size: 'small',
  },
};
