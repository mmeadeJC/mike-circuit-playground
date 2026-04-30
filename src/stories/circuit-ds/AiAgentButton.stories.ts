import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { AiAgentButton } from '@jumpcloud/circuit/components';

const meta: Meta<typeof AiAgentButton> = {
  title: 'Circuit DS/Components/AiAgentButton',
  component: AiAgentButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof AiAgentButton>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
