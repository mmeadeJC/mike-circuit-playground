import type { Meta, StoryObj } from '@storybook/vue3';
import { RadioButtonWithLabel } from '@jumpcloud/circuit/components';

const meta: Meta<typeof RadioButtonWithLabel> = {
  title: 'Circuit DS/Components/RadioButtonWithLabel',
  component: RadioButtonWithLabel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioButtonWithLabel>;

export const Default: Story = {
  args: {},
};
