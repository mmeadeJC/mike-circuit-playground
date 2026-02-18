import type { Meta, StoryObj } from '@storybook/vue3';
import { PageHeader } from '@jumpcloud/circuit/components';
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';
import { markRaw } from 'vue';

const meta: Meta<typeof PageHeader> = {
  title: 'Circuit DS/Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitleText: { control: 'text' },
    tabsScrollable: { control: 'boolean' },
    tabsWithPadding: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

const sampleTabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Settings', value: 'settings' },
  { label: 'Members', value: 'members' },
  { label: 'Activity', value: 'activity', disabled: true },
];

const sampleDropdownItems = [
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Delete', value: 'delete' },
];

export const Default: Story = {
  args: {
    title: 'Users',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Users',
    subtitleText: 'Manage all users in your organization',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Settings',
    subtitleText: 'Configure your workspace',
    icon: markRaw(Cog6ToothIcon),
  },
};

export const WithTabs: Story = {
  args: {
    title: 'Device Policies',
    tabs: sampleTabs,
    activeTab: 'overview',
  },
};

export const WithDropdown: Story = {
  args: {
    title: 'User Details',
    subtitleText: 'alice@example.com',
    dropdownItems: sampleDropdownItems,
  },
};

export const FullFeatured: Story = {
  args: {
    title: 'Device Policies',
    subtitleText: '12 policies configured',
    icon: markRaw(Cog6ToothIcon),
    tabs: sampleTabs,
    activeTab: 'overview',
    dropdownItems: sampleDropdownItems,
  },
};
