import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { AiInputChat } from '@jumpcloud/circuit/components';
import { DocumentIcon, ServerIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';
import { markRaw } from 'vue';

const meta: Meta<typeof AiInputChat> = {
  title: 'Circuit DS/Components/AiInputChat',
  component: AiInputChat,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    filterable: { control: 'boolean' },
    showDropdownButton: { control: 'boolean' },
    showToolsDropdown: { control: 'boolean' },
    showStopIcon: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof AiInputChat>;

const contextOptions = [
  {
    label: 'Resources',
    code: 'resources',
    items: [
      { label: 'Users', value: 'users', icon: markRaw(UserGroupIcon) },
      { label: 'Devices', value: 'devices', icon: markRaw(ServerIcon) },
      { label: 'Policies', value: 'policies', icon: markRaw(ShieldCheckIcon) },
    ],
  },
  {
    label: 'Documents',
    code: 'documents',
    items: [
      { label: 'Knowledge Base', value: 'kb', icon: markRaw(DocumentIcon) },
      { label: 'Release Notes', value: 'releases', icon: markRaw(DocumentIcon) },
    ],
  },
];

const toolsOptions = [
  { label: 'Search Users', value: 'search-users' },
  { label: 'Run Command', value: 'run-command' },
  { label: 'Generate Report', value: 'gen-report' },
];

export const Default: Story = {
  args: {
    placeholder: 'Type a message...',
  },
};

export const WithContextOptions: Story = {
  args: {
    placeholder: 'Ask about your resources...',
    contextOptions,
    showDropdownButton: true,
  },
};

export const WithToolsDropdown: Story = {
  args: {
    placeholder: 'Type a message...',
    toolsOptions,
    showToolsDropdown: true,
  },
};

export const WithSelectedItems: Story = {
  args: {
    placeholder: 'Type a message...',
    contextOptions,
    selectedItems: [
      { label: 'Users', value: 'users', icon: markRaw(UserGroupIcon) },
      { label: 'Devices', value: 'devices', icon: markRaw(ServerIcon) },
    ],
    showDropdownButton: true,
  },
};

export const WithInputValue: Story = {
  args: {
    placeholder: 'Type a message...',
    inputValue: 'How do I add a new user?',
  },
};

export const ShowStopIcon: Story = {
  args: {
    placeholder: 'Type a message...',
    showStopIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Chat is disabled',
    disabled: true,
  },
};
