import type { Meta, StoryObj } from '@storybook/vue3';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const meta: Meta<typeof InputText> = {
  title: 'Circuit DS/Components/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<InputText v-bind="args" v-model="value" />',
  }),
  args: { placeholder: 'Enter text...' },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const value = ref('Disabled input');
      return { args, value };
    },
    template: '<InputText v-bind="args" v-model="value" />',
  }),
  args: { disabled: true },
};
