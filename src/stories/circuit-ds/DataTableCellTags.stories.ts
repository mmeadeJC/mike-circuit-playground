import type { Meta, StoryObj } from '@storybook/vue3';
import { DataTableCellTags } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTableCellTags> = {
  title: 'Circuit DS/Components/DataTableCellTags',
  component: DataTableCellTags,
  tags: ['autodocs'],
  argTypes: {
    maxVisibleTags: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellTags>;

export const Default: Story = {
  args: {
    tags: ['Tag 01', 'Tag 02', 'Tag 03'],
  },
};

export const WithOverflow: Story = {
  args: {
    tags: ['Tag 01', 'Tag 02', 'Tag 03', 'Tag 04', 'Tag 05'],
    maxVisibleTags: 3,
  },
};

export const SingleTag: Story = {
  args: {
    tags: ['Production'],
  },
};

export const WithAdvanceFilterLine: Story = {
  args: {
    tags: ['Tag 01', 'Tag 02', 'Tag 03'],
    advanceFilterLine: true,
  },
};
