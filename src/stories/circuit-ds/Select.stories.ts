import type { Meta, StoryObj } from '@storybook/vue3';
import Select from 'primevue/select';
import { ref } from 'vue';

const meta: Meta<typeof Select> = {
  title: 'Circuit DS/Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const sampleOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
  { label: 'Option D', value: 'd' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    optionLabel: 'label',
    optionValue: 'value',
    placeholder: 'Select an option',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    optionLabel: 'label',
    optionValue: 'value',
    placeholder: 'Disabled select',
    disabled: true,
  },
};
