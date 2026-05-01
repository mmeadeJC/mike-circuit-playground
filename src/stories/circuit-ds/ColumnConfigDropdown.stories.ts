import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ColumnConfigDropdown } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ColumnConfigDropdown> = {
  title: 'Circuit DS/Data Table/ColumnConfigDropdown',
  component: ColumnConfigDropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof ColumnConfigDropdown>;

const sampleColumns = [
  { id: 'name', label: 'Name', visible: true, fixed: true, isDefault: true },
  { id: 'email', label: 'Email', visible: true, fixed: true },
  { id: 'role', label: 'Role', visible: true },
  { id: 'status', label: 'Status', visible: true },
  { id: 'department', label: 'Department', visible: false },
  { id: 'location', label: 'Location', visible: false },
  { id: 'created', label: 'Created Date', visible: false },
  { id: 'lastLogin', label: 'Last Login', visible: false },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    maxFixedColumns: 3,
  },
};

export const WithLabel: Story = {
  args: {
    columns: sampleColumns,
    maxFixedColumns: 3,
    showLabel: true,
  },
};

export const Small: Story = {
  args: {
    columns: sampleColumns,
    maxFixedColumns: 2,
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    columns: sampleColumns,
    disabled: true,
  },
};
