import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { AiSidebar } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AiSidebar> = {
  title: 'Circuit DS/Components/AiSidebar',
  component: AiSidebar,
  tags: ['autodocs'],
  argTypes: {
    isCollapsed: { control: 'boolean' },
    loading: { control: 'boolean' },
    infiniteScroll: { control: 'boolean' },
    showChatSettings: { control: 'boolean' },
    disableNewChat: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof AiSidebar>;

const mockChats = [
  { id: '1', title: 'Help with device policies', lastModified: new Date('2026-02-18T10:00:00') },
  { id: '2', title: 'User provisioning questions', lastModified: new Date('2026-02-17T15:30:00') },
  { id: '3', title: 'SSO configuration support', lastModified: new Date('2026-02-16T09:00:00') },
  { id: '4', title: 'MFA setup assistance', lastModified: new Date('2026-02-15T14:00:00') },
  { id: '5', title: 'LDAP integration help', lastModified: new Date('2026-02-14T11:00:00') },
];

export const Default: Story = {
  args: {
    chats: mockChats,
    selectedChatId: '1',
  },
};

export const Empty: Story = {
  args: {
    chats: [],
  },
};

export const Loading: Story = {
  args: {
    chats: [],
    loading: true,
  },
};

export const Collapsed: Story = {
  args: {
    chats: mockChats,
    isCollapsed: true,
  },
};

export const WithInfiniteScroll: Story = {
  args: {
    chats: mockChats,
    infiniteScroll: true,
    hasMoreData: true,
  },
};

export const NewChatDisabled: Story = {
  args: {
    chats: mockChats,
    disableNewChat: true,
  },
};
