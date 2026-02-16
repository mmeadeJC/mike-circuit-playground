import type { Meta, StoryObj } from '@storybook/vue3';
import { CheckboxWithLabel } from '@jumpcloud/circuit/components';

const meta: Meta<typeof CheckboxWithLabel> = {
  title: 'Circuit DS/Components/CheckboxWithLabel',
  component: CheckboxWithLabel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckboxWithLabel>;

export const Default: Story = {
  args: {},
};
