import type { Meta, StoryObj } from '@storybook/vue3';
import { MessageNotification } from '@jumpcloud/circuit/components';

const meta: Meta<typeof MessageNotification> = {
  title: 'Circuit DS/Components/MessageNotification',
  component: MessageNotification,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MessageNotification>;

export const Default: Story = {
  args: {},
};
