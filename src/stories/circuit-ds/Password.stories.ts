import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Password } from '@jumpcloud/circuit/components';

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
    components: { Password },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <Password v-model="value" toggleMask v-bind="args" />
    `,
  }),
  args: {},
};

export const WithPlaceholder: Story = {
  render: (args) => ({
    components: { Password },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <Password v-model="value" placeholder="Enter password" toggleMask v-bind="args" />
    `,
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Password },
    setup() {
      const value = ref('secret123');
      return { args, value };
    },
    template: `
      <Password v-model="value" placeholder="Enter password" toggleMask disabled v-bind="args" />
    `,
  }),
  args: {},
};

export const Invalid: Story = {
  render: (args) => ({
    components: { Password },
    setup() {
      const value = ref('short');
      return { args, value };
    },
    template: `
      <Password v-model="value" placeholder="Enter password" toggleMask invalid v-bind="args" />
    `,
  }),
  args: {},
};
