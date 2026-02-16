import type { Meta, StoryObj } from '@storybook/vue3';
import Textarea from 'primevue/textarea';
import { ref } from 'vue';

const meta: Meta<typeof Textarea> = {
  title: 'Circuit DS/Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    rows: { control: 'number' },
    autoResize: { control: 'boolean' },
  },
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
    template: '<Textarea v-bind="args" v-model="value" />',
  }),
  args: { placeholder: 'Enter text...', rows: 5 },
};

export const AutoResize: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<Textarea v-bind="args" v-model="value" />',
  }),
  args: { placeholder: 'Auto-resizing textarea', autoResize: true, rows: 3 },
};
