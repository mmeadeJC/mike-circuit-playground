import type { Meta, StoryObj } from '@storybook/vue3-vite';
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

export const WithAddButton: Story = {
  args: {
    searchPlaceholder: 'Search assets...',
    showAddButton: true,
    addButtonLabel: 'Add Asset',
    showFilterButton: true,
    showRefreshButton: true,
  },
};

export const SearchOnly: Story = {
  args: {
    searchPlaceholder: 'Search...',
    showAddButton: false,
    showFilterButton: false,
    showRefreshButton: true,
    showColumnsButton: false,
    showDownloadButton: false,
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    searchPlaceholder: 'Search...',
    showAddButton: true,
    addButtonLabel: 'Add',
    showFilterButton: true,
    showRefreshButton: true,
  },
};

export const Minimal: Story = {
  args: {
    searchPlaceholder: 'Search...',
    showAddButton: false,
    showFilterButton: false,
    showColumnsButton: false,
    showDownloadButton: false,
    showRefreshButton: true,
  },
};
