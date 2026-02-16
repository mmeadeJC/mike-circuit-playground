import type { Meta, StoryObj } from '@storybook/vue3';
import Tag from 'primevue/tag';

const meta: Meta<typeof Tag> = {
  title: 'Circuit DS/Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    severity: {
      control: 'select',
      options: ['primary', 'success', 'info', 'warn', 'danger', 'secondary', 'contrast'],
    },
    rounded: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { value: 'Active' },
};

export const Success: Story = {
  args: { value: 'Success', severity: 'success' },
};

export const Warning: Story = {
  args: { value: 'Warning', severity: 'warn' },
};

export const Danger: Story = {
  args: { value: 'Danger', severity: 'danger' },
};

export const Rounded: Story = {
  args: { value: 'Rounded', rounded: true },
};
