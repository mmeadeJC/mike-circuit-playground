import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { AiDeleteChatDialog } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AiDeleteChatDialog> = {
  title: 'Circuit DS/Components/AiDeleteChatDialog',
  component: AiDeleteChatDialog,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    chatTitle: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof AiDeleteChatDialog>;

export const Default: Story = {
  args: {
    visible: true,
    chatTitle: 'Help with device policies',
  },
};
