import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { CopyButton } from '@jumpcloud/circuit/components';

const meta: Meta<typeof CopyButton> = {
  title: 'Circuit DS/Components/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    text: 'Copy this text to clipboard',
  },
};

export const SmallSize: Story = {
  args: {
    text: 'user@example.com',
    size: 'small',
  },
};

export const LongText: Story = {
  args: {
    text: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0',
  },
};
