import type { Meta, StoryObj } from '@storybook/vue3';
import { ToastNotification } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ToastNotification> = {
  title: 'Circuit DS/Components/ToastNotification',
  component: ToastNotification,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToastNotification>;

export const Default: Story = {
  args: {},
};
