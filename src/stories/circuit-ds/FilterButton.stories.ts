import type { Meta, StoryObj } from '@storybook/vue3';
import { FilterButton } from '@jumpcloud/circuit/components';

const meta: Meta<typeof FilterButton> = {
  title: 'Circuit DS/Data Table/FilterButton',
  component: FilterButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['outlined', 'text'] },
    severity: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['default', 'small'] },
    showLabel: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

const basicFilters = [
  {
    id: 'status',
    label: 'Status',
    type: 'singleSelect' as const,
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ],
  },
  {
    id: 'role',
    label: 'Role',
    type: 'multiSelect' as const,
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
    ],
  },
];

export const Default: Story = {
  args: {
    basicFilters,
  },
};

export const WithLabel: Story = {
  args: {
    basicFilters,
    showLabel: true,
  },
};

export const WithActiveFilters: Story = {
  args: {
    basicFilters,
    appliedFilters: [
      { id: 'status', value: 'active' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    basicFilters,
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    basicFilters,
    size: 'small',
    showLabel: true,
  },
};
