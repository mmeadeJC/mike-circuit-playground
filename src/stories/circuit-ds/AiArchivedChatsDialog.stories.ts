import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { AiArchivedChatsDialog } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AiArchivedChatsDialog> = {
  title: 'Circuit DS/Components/AiArchivedChatsDialog',
  component: AiArchivedChatsDialog,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    loading: { control: 'boolean' },
    searchLoading: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof AiArchivedChatsDialog>;

const archivedChats = [
  {
    id: '1',
    title: 'Old LDAP migration discussion',
    lastModified: new Date('2026-01-10T10:00:00'),
    archivedAt: new Date('2026-02-01T12:00:00'),
  },
  {
    id: '2',
    title: 'Legacy SSO troubleshooting',
    lastModified: new Date('2026-01-05T14:00:00'),
    archivedAt: new Date('2026-01-28T09:00:00'),
  },
  {
    id: '3',
    title: 'Deprecated API migration help',
    lastModified: new Date('2025-12-20T08:00:00'),
    archivedAt: new Date('2026-01-15T16:00:00'),
  },
];

export const Default: Story = {
  args: {
    visible: true,
    archivedChats,
  },
};

export const Loading: Story = {
  args: {
    visible: true,
    archivedChats: [],
    loading: true,
  },
};

export const WithSearchResults: Story = {
  args: {
    visible: true,
    archivedChats,
    searchResults: [archivedChats[0]],
  },
};

export const Empty: Story = {
  args: {
    visible: true,
    archivedChats: [],
  },
};
