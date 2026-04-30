import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { AiSidebarItem } from '@jumpcloud/circuit/components';
import { ChatBubbleLeftIcon } from '@heroicons/vue/24/outline';
import { markRaw } from 'vue';

const meta: Meta<typeof AiSidebarItem> = {
  title: 'Circuit DS/Components/AiSidebarItem',
  component: AiSidebarItem,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['recent-chat', 'side-panel-button', 'icon-only'],
    },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    dropdownDisabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof AiSidebarItem>;

export const RecentChat: Story = {
  args: {
    label: 'Help with device policies',
    variant: 'recent-chat',
  },
};

export const RecentChatSelected: Story = {
  args: {
    label: 'Help with device policies',
    variant: 'recent-chat',
    selected: true,
  },
};

export const SidePanelButton: Story = {
  args: {
    label: 'New Chat',
    variant: 'side-panel-button',
    icon: markRaw(ChatBubbleLeftIcon),
  },
};

export const IconOnly: Story = {
  args: {
    label: 'Settings',
    variant: 'icon-only',
    icon: markRaw(ChatBubbleLeftIcon),
  },
};

export const WithShortcut: Story = {
  args: {
    label: 'New Chat',
    variant: 'side-panel-button',
    shortcut: '⌘N',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Archived chat',
    variant: 'recent-chat',
    disabled: true,
  },
};
