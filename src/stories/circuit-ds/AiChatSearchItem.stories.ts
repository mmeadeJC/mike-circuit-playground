import type { Meta, StoryObj } from '@storybook/vue3';
import { AiChatSearchItem } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AiChatSearchItem> = {
  title: 'Circuit DS/Components/AiChatSearchItem',
  component: AiChatSearchItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AiChatSearchItem>;

export const Default: Story = {
  args: {
    chat: {
      id: '1',
      title: 'Help with device policies',
      lastModified: new Date('2026-02-18T10:00:00'),
    },
  },
};

export const LongTitle: Story = {
  args: {
    chat: {
      id: '2',
      title: 'How do I configure SSO with SAML for multiple identity providers and set up conditional access policies?',
      lastModified: new Date('2026-02-15T08:30:00'),
    },
  },
};
