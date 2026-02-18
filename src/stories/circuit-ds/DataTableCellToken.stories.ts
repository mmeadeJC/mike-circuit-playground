import type { Meta, StoryObj } from '@storybook/vue3';
import { DataTableCellToken } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTableCellToken> = {
  title: 'Circuit DS/Data Table/DataTableCellToken',
  component: DataTableCellToken,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['Status', 'Tags', 'Chips'] },
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellToken>;

export const Status: Story = {
  args: {
    type: 'Status',
    statusLabel: 'Active',
  },
};

export const Tags: Story = {
  args: {
    type: 'Tags',
    tags: [
      { label: 'Engineering' },
      { label: 'Frontend' },
      { label: 'Remote' },
      { label: 'Full-time' },
    ],
    maxVisibleTags: 3,
  },
};

export const Chips: Story = {
  args: {
    type: 'Chips',
    chips: [
      { label: 'macOS' },
      { label: 'Windows' },
      { label: 'Linux' },
    ],
    maxVisibleChips: 3,
  },
};

export const TagsOverflow: Story = {
  args: {
    type: 'Tags',
    tags: [
      { label: 'Engineering' },
      { label: 'Frontend' },
      { label: 'Backend' },
      { label: 'DevOps' },
      { label: 'Design' },
      { label: 'QA' },
    ],
    maxVisibleTags: 2,
  },
};

export const Small: Story = {
  args: {
    type: 'Status',
    statusLabel: 'Active',
    size: 'small',
  },
};
