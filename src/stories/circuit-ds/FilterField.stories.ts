import type { Meta, StoryObj } from '@storybook/vue3';
import { FilterField } from '@jumpcloud/circuit/components';

const meta: Meta<typeof FilterField> = {
  title: 'Circuit DS/Data Table/FilterField',
  component: FilterField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FilterField>;

export const SingleSelect: Story = {
  args: {
    filter: {
      id: 'status',
      label: 'Status',
      type: 'singleSelect',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Pending', value: 'pending' },
      ],
    },
    modelValue: null,
  },
};

export const MultiSelect: Story = {
  args: {
    filter: {
      id: 'role',
      label: 'Role',
      type: 'multiSelect',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Manager', value: 'manager' },
      ],
    },
    modelValue: ['admin'],
  },
};

export const TextFilter: Story = {
  args: {
    filter: {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter name...',
      operators: [
        { label: 'Contains', value: 'contains' as const },
        { label: 'Equals', value: 'equals' as const },
        { label: 'Starts with', value: 'startsWith' as const },
      ],
    },
    modelValue: { operator: 'contains' as const, value: '' },
  },
};

export const Removable: Story = {
  args: {
    filter: {
      id: 'department',
      label: 'Department',
      type: 'singleSelectDropdown',
      isAdditional: true,
      options: [
        { label: 'Engineering', value: 'engineering' },
        { label: 'Marketing', value: 'marketing' },
      ],
    },
    modelValue: null,
    removable: true,
  },
};
