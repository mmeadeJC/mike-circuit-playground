import type { Meta, StoryObj } from '@storybook/vue3';
import { AiSearchDialog } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AiSearchDialog> = {
  title: 'Circuit DS/Components/AiSearchDialog',
  component: AiSearchDialog,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    searchLoading: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof AiSearchDialog>;

const recentChats = [
  { id: '1', title: 'Help with device policies', lastModified: new Date('2026-02-18T10:00:00') },
  { id: '2', title: 'User provisioning questions', lastModified: new Date('2026-02-17T15:30:00') },
  { id: '3', title: 'SSO configuration support', lastModified: new Date('2026-02-16T09:00:00') },
];

const searchResults = [
  { id: '4', title: 'MFA setup for LDAP users', lastModified: new Date('2026-02-10T14:00:00') },
  { id: '5', title: 'RADIUS integration walkthrough', lastModified: new Date('2026-02-08T11:00:00') },
];

export const Default: Story = {
  args: {
    visible: true,
    recentChats,
  },
};

export const WithSearchResults: Story = {
  args: {
    visible: true,
    recentChats,
    searchResults,
  },
};

export const SearchLoading: Story = {
  args: {
    visible: true,
    recentChats,
    searchLoading: true,
  },
};
