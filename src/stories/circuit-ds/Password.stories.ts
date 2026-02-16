import type { Meta, StoryObj } from '@storybook/vue3';
import { Password } from '@jumpcloud/circuit/components';

const meta: Meta<typeof Password> = {
  title: 'Circuit DS/Components/Password',
  component: Password,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Default: Story = {
  args: {},
};
