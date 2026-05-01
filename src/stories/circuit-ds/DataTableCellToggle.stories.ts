import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { DataTableCellToggle } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTableCellToggle> = {
  title: 'Circuit DS/Components/DataTableCellToggle',
  component: DataTableCellToggle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DataTableCellToggle>;

export const Default: Story = {
  args: {
    modelValue: false,
  },
};

export const Enabled: Story = {
  args: {
    modelValue: true,
  },
};

export const WithLabel: Story = {
  args: {
    modelValue: true,
    label: 'Enabled',
  },
};

export const Disabled: Story = {
  args: {
    modelValue: false,
    disabled: true,
  },
};

export const WithAdvanceFilterLine: Story = {
  args: {
    modelValue: true,
    label: 'Active',
    advanceFilterLine: true,
  },
};
