import type { Meta, StoryObj } from '@storybook/vue3';
import { SavedViewsDropdown } from '@jumpcloud/circuit/components';

const meta: Meta<typeof SavedViewsDropdown> = {
  title: 'Circuit DS/Data Table/SavedViewsDropdown',
  component: SavedViewsDropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    showAddNewView: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof SavedViewsDropdown>;

const savedViews = [
  { id: '1', label: 'Active Users', isFavorite: true },
  { id: '2', label: 'Admins Only', isFavorite: false },
  { id: '3', label: 'Recent Signups', isFavorite: true },
  { id: '4', label: 'Inactive Accounts', isFavorite: false },
];

const defaultViews = [
  { id: 'all', label: 'All Users', editable: false, deletable: false },
  { id: 'active', label: 'Active', editable: false, deletable: false },
  { id: 'inactive', label: 'Inactive', editable: false, deletable: false },
];

export const Default: Story = {
  args: {
    savedViews,
    defaultViews,
    selectedViewId: 'all',
  },
};

export const WithAddNewView: Story = {
  args: {
    savedViews,
    defaultViews,
    selectedViewId: 'all',
    showAddNewView: true,
    addNewViewLabel: 'Create New View',
  },
};

export const EmptySavedViews: Story = {
  args: {
    savedViews: [],
    defaultViews,
    selectedViewId: 'all',
    showAddNewView: true,
  },
};

export const Disabled: Story = {
  args: {
    savedViews,
    defaultViews,
    disabled: true,
  },
};
