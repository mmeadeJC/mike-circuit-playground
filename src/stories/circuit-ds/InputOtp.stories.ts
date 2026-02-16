import type { Meta, StoryObj } from '@storybook/vue3';
import { InputOtp } from '@jumpcloud/circuit/components';

const meta: Meta<typeof InputOtp> = {
  title: 'Circuit DS/Components/InputOtp',
  component: InputOtp,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputOtp>;

export const Default: Story = {
  args: {},
};
