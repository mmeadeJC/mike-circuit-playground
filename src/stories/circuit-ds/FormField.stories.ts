import type { Meta, StoryObj } from '@storybook/vue3';
import { FormField } from '@jumpcloud/circuit/components';

const meta: Meta<typeof FormField> = {
  title: 'Circuit DS/Components/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {},
};
