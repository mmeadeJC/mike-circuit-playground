import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Textarea from 'primevue/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Circuit DS/Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />',
  }),
  args: { placeholder: 'Enter text...', rows: 4, ariaLabel: 'Text area' },
};

export const SmallSize: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<Textarea v-bind="args" v-model="value" size="small" class="w-full max-w-[300px]" />',
  }),
  args: { placeholder: 'Small textarea', rows: 3, ariaLabel: 'Small text area' },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('Disabled textarea content');
      return { args, value };
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />',
  }),
  args: { disabled: true, rows: 4, ariaLabel: 'Disabled text area' },
};

export const Invalid: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('Invalid input');
      return { args, value };
    },
    template: '<Textarea v-bind="args" v-model="value" class="w-full max-w-[300px]" />',
  }),
  args: { invalid: true, rows: 4, ariaLabel: 'Invalid text area' },
};
