import type { Meta, StoryObj } from '@storybook/vue3';
import { DataTableToolbar } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTableToolbar> = {
  title: 'Circuit DS/Data Table/DataTableToolbar',
  component: DataTableToolbar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
    loading: { control: 'boolean' },
    showAddButton: { control: 'boolean' },
    showFilterButton: { control: 'boolean' },
    showRefreshButton: { control: 'boolean' },
    showColumnsButton: { control: 'boolean' },
    showDownloadButton: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableToolbar>;

const sampleColumns = [
  { id: 'name', label: 'Name', visible: true, fixed: true },
  { id: 'email', label: 'Email', visible: true },
  { id: 'role', label: 'Role', visible: true },
  { id: 'status', label: 'Status', visible: true },
  { id: 'department', label: 'Department', visible: false },
  { id: 'location', label: 'Location', visible: false },
];

const sampleExportOptions = [
  { id: 'csv', label: 'Export as CSV' },
  { id: 'json', label: 'Export as JSON' },
  { id: 'pdf', label: 'Export as PDF' },
];

const sampleSavedViews = [
  { id: '1', label: 'Active Users', isFavorite: true },
  { id: '2', label: 'Admins Only', isFavorite: false },
  { id: '3', label: 'Recent Signups', isFavorite: false },
];

const sampleDefaultViews = [
  { id: 'default-all', label: 'All Users', editable: false, deletable: false },
  { id: 'default-active', label: 'Active', editable: false, deletable: false },
];

const sampleActiveFilters = [
  { key: 'Status', operator: 'is', value: 'Active' },
  { key: 'Role', operator: 'is', value: 'Admin' },
];

export const Default: Story = {
  args: {
    searchPlaceholder: 'Search users...',
    showAddButton: true,
    addButtonLabel: 'Add User',
    showFilterButton: true,
    showRefreshButton: true,
    showColumnsButton: true,
    showDownloadButton: true,
  },
};

export const WithColumns: Story = {
  args: {
    searchPlaceholder: 'Search users...',
    showColumnsButton: true,
    columns: sampleColumns,
    maxFixedColumns: 2,
  },
};

export const WithExport: Story = {
  args: {
    searchPlaceholder: 'Search...',
    showDownloadButton: true,
    exportOptions: sampleExportOptions,
  },
};

export const WithSavedViews: Story = {
  args: {
    searchPlaceholder: 'Search...',
    savedViews: sampleSavedViews,
    defaultViews: sampleDefaultViews,
    selectedViewId: 'default-all',
    showAddNewView: true,
  },
};

export const WithActiveFilters: Story = {
  args: {
    searchPlaceholder: 'Search users...',
    showFilterButton: true,
    activeFilters: sampleActiveFilters,
    maxVisibleFilters: 5,
  },
};

export const FullFeatured: Story = {
  args: {
    searchPlaceholder: 'Search users...',
    showAddButton: true,
    addButtonLabel: 'Add User',
    showFilterButton: true,
    showRefreshButton: true,
    showColumnsButton: true,
    showDownloadButton: true,
    columns: sampleColumns,
    maxFixedColumns: 2,
    exportOptions: sampleExportOptions,
    savedViews: sampleSavedViews,
    defaultViews: sampleDefaultViews,
    selectedViewId: 'default-all',
    showAddNewView: true,
    activeFilters: sampleActiveFilters,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    searchPlaceholder: 'Search...',
    showAddButton: true,
    addButtonLabel: 'Add',
    showFilterButton: true,
    showRefreshButton: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    searchPlaceholder: 'Search...',
    showAddButton: true,
    showFilterButton: true,
  },
};
