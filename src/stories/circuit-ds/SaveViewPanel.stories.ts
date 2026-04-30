import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { SaveViewPanel } from '@jumpcloud/circuit/components';

const meta: Meta<typeof SaveViewPanel> = {
  title: 'Circuit DS/Data Table/SaveViewPanel',
  component: SaveViewPanel,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['save', 'edit'] },
    size: { control: 'select', options: ['default', 'small'] },
    sortOrder: { control: 'select', options: ['asc', 'desc'] },
    loading: { control: 'boolean' },
    isPrivate: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof SaveViewPanel>;

const sampleSortOptions = [
  { label: 'Name', value: 'name' },
  { label: 'Email', value: 'email' },
  { label: 'Created Date', value: 'created' },
  { label: 'Last Login', value: 'lastLogin' },
];

const sampleColumns = [
  { id: 'name', label: 'Name', visible: true, fixed: true },
  { id: 'email', label: 'Email', visible: true },
  { id: 'role', label: 'Role', visible: true },
  { id: 'status', label: 'Status', visible: true },
  { id: 'department', label: 'Department', visible: false },
];

const sampleFilters = [
  { key: 'Status', value: 'Active' },
  { key: 'Role', value: 'Admin' },
];

export const SaveMode: Story = {
  args: {
    mode: 'save',
    sortOptions: sampleSortOptions,
    sortField: 'name',
    sortOrder: 'asc',
    columns: sampleColumns,
    maxFixedColumns: 3,
    visibleColumnsCount: 4,
    filters: sampleFilters,
  },
};

export const EditMode: Story = {
  args: {
    mode: 'edit',
    viewName: 'Active Users',
    isPrivate: false,
    sortOptions: sampleSortOptions,
    sortField: 'name',
    sortOrder: 'asc',
    columns: sampleColumns,
    maxFixedColumns: 3,
    visibleColumnsCount: 4,
    filters: sampleFilters,
  },
};

export const Loading: Story = {
  args: {
    mode: 'save',
    loading: true,
    sortOptions: sampleSortOptions,
  },
};

export const Small: Story = {
  args: {
    mode: 'save',
    size: 'small',
    sortOptions: sampleSortOptions,
    columns: sampleColumns,
  },
};
