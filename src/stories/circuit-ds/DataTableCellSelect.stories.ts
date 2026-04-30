import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { DataTableCellSelect } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTableCellSelect> = {
  title: 'Circuit DS/Components/DataTableCellSelect',
  component: DataTableCellSelect,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellSelect>;

export const Default: Story = {
  args: {
    modelValue: 'active',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Pending', value: 'pending' },
    ],
    placeholder: 'Select status',
  },
};

export const WithPlaceholder: Story = {
  args: {
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
      { label: 'Viewer', value: 'viewer' },
    ],
    placeholder: 'Select role',
  },
};

export const Disabled: Story = {
  args: {
    modelValue: 'active',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ],
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    modelValue: 'active',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ],
    size: 'small',
  },
};
