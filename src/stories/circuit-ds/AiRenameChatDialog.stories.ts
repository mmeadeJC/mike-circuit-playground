import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { AiRenameChatDialog } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AiRenameChatDialog> = {
  title: 'Circuit DS/Components/AiRenameChatDialog',
  component: AiRenameChatDialog,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    currentTitle: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof AiRenameChatDialog>;

export const Default: Story = {
  args: {
    visible: true,
    currentTitle: 'Help with device policies',
  },
};

export const EmptyTitle: Story = {
  args: {
    visible: true,
    currentTitle: '',
  },
};
