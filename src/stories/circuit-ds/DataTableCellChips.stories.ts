import type { Meta, StoryObj } from '@storybook/vue3';
import { DataTableCellChips } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTableCellChips> = {
  title: 'Circuit DS/Components/DataTableCellChips',
  component: DataTableCellChips,
  tags: ['autodocs'],
  argTypes: {
    maxVisibleChips: { control: 'number' },
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellChips>;

export const Default: Story = {
  args: {
    chips: ['Chip 01', 'Chip 02', 'Chip 03'],
  },
};

export const WithOverflow: Story = {
  args: {
    chips: ['Chip 01', 'Chip 02', 'Chip 03', 'Chip 04', 'Chip 05'],
    maxVisibleChips: 3,
  },
};

export const SingleChip: Story = {
  args: {
    chips: ['Admin'],
  },
};

export const SmallSize: Story = {
  args: {
    chips: ['Chip 01', 'Chip 02', 'Chip 03'],
    size: 'small',
  },
};

export const WithAdvanceFilterLine: Story = {
  args: {
    chips: ['Chip 01', 'Chip 02'],
    advanceFilterLine: true,
  },
};
