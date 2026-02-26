import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof InputText> = {
  title: 'Circuit DS/Components/InputText',
  component: InputText,
  tags: ['autodocs'],
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
    template: '<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />',
  }),
  args: { placeholder: 'Enter text...' },
};

export const SmallSize: Story = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: '<InputText v-bind="args" v-model="value" size="small" class="w-full max-w-[200px]" />',
  }),
  args: { placeholder: 'Small input' },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const value = ref('Disabled input');
      return { args, value };
    },
    template: '<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />',
  }),
  args: { disabled: true },
};

export const Invalid: Story = {
  render: (args) => ({
    components: { InputText },
    setup() {
      const value = ref('Invalid input');
      return { args, value };
    },
    template: '<InputText v-bind="args" v-model="value" class="w-full max-w-[200px]" />',
  }),
  args: { invalid: true },
};

export const WithIconField: Story = {
  render: (args) => ({
    components: { InputText, IconField, InputIcon, MagnifyingGlassIcon },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <IconField class="w-full max-w-[200px]">
        <InputIcon>
          <MagnifyingGlassIcon class="size-4" />
        </InputIcon>
        <InputText v-bind="args" v-model="value" placeholder="Search..." />
      </IconField>
    `,
  }),
  args: {},
};
