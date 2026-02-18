import type { Meta, StoryObj } from '@storybook/vue3';
import { FilterModal } from '@jumpcloud/circuit/components';

const meta: Meta<typeof FilterModal> = {
  title: 'Circuit DS/Data Table/FilterModal',
  component: FilterModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FilterModal>;

const basicFilters = [
  {
    id: 'status',
    label: 'Status',
    type: 'singleSelect' as const,
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Pending', value: 'pending' },
    ],
  },
  {
    id: 'role',
    label: 'Role',
    type: 'multiSelect' as const,
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
      { label: 'Manager', value: 'manager' },
    ],
  },
  {
    id: 'name',
    label: 'Name',
    type: 'text' as const,
    placeholder: 'Enter name...',
    operators: [
      { label: 'Contains', value: 'contains' as const },
      { label: 'Equals', value: 'equals' as const },
      { label: 'Starts with', value: 'startsWith' as const },
    ],
  },
];

const additionalFilters = [
  {
    id: 'department',
    label: 'Department',
    type: 'singleSelectDropdown' as const,
    isAdditional: true,
    options: [
      { label: 'Engineering', value: 'engineering' },
      { label: 'Marketing', value: 'marketing' },
      { label: 'Sales', value: 'sales' },
    ],
  },
  {
    id: 'location',
    label: 'Location',
    type: 'multiSelectDropdown' as const,
    isAdditional: true,
    options: [
      { label: 'New York', value: 'ny' },
      { label: 'San Francisco', value: 'sf' },
      { label: 'London', value: 'london' },
    ],
  },
];

export const Default: Story = {
  args: {
    visible: true,
    basicFilters,
    additionalFilters,
  },
};

export const WithAppliedFilters: Story = {
  args: {
    visible: true,
    basicFilters,
    additionalFilters,
    appliedFilters: [
      { id: 'status', value: 'active' },
      { id: 'role', value: ['admin', 'manager'] },
    ],
  },
};
