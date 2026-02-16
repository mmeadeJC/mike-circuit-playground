import type { Meta, StoryObj } from '@storybook/vue3';
import { CardButton } from '@jumpcloud/circuit/components';

const meta: Meta<typeof CardButton> = {
  title: 'Circuit DS/Components/CardButton',
  component: CardButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardButton>;

export const Default: Story = {
  args: {},
};
