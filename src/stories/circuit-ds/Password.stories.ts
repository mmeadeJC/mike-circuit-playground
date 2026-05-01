import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { Password, FormField } from '@jumpcloud/circuit/components';

const meta: Meta<typeof Password> = {
  title: 'Circuit DS/Components/Password',
  component: Password,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Default: Story = {
  render: (args) => ({
    components: { Password, FormField },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" toggleMask v-bind="args" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};

export const WithPlaceholder: Story = {
  render: (args) => ({
    components: { Password, FormField },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask v-bind="args" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Password, FormField },
    setup() {
      const value = ref('secret123');
      return { args, value };
    },
    template: `
      <FormField label="Password">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask disabled v-bind="args" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};

export const Invalid: Story = {
  render: (args) => ({
    components: { Password, FormField },
    setup() {
      const value = ref('short');
      return { args, value };
    },
    template: `
      <FormField label="Password" :invalid="true" invalidText="Password must be at least 8 characters">
        <template #default="{ inputId }">
          <Password :inputId="inputId" v-model="value" placeholder="Enter password" toggleMask invalid v-bind="args" />
        </template>
      </FormField>
    `,
  }),
  args: {},
};
