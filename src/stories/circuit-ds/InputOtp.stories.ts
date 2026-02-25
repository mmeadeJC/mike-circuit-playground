import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { InputOtp } from '@jumpcloud/circuit/components';

const meta: Meta<typeof InputOtp> = {
  title: 'Circuit DS/Components/InputOtp',
  component: InputOtp,
  tags: ['autodocs'],
  argTypes: {
    digit: { control: 'select', options: ['4', '6', '3-3'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof InputOtp>;

export const FourDigit: Story = {
  render: (args) => ({
    components: { InputOtp },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <InputOtp v-model="value" digit="4" v-bind="args" />
    `,
  }),
  args: {},
};

export const SixDigit: Story = {
  render: (args) => ({
    components: { InputOtp },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <InputOtp v-model="value" digit="6" v-bind="args" />
    `,
  }),
  args: {},
};

export const ThreeThreeDigit: Story = {
  render: (args) => ({
    components: { InputOtp },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <InputOtp v-model="value" digit="3-3" v-bind="args" />
    `,
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args) => ({
    components: { InputOtp },
    setup() {
      const value = ref('1234');
      return { args, value };
    },
    template: `
      <InputOtp v-model="value" digit="4" disabled v-bind="args" />
    `,
  }),
  args: {},
};

export const Invalid: Story = {
  render: (args) => ({
    components: { InputOtp },
    setup() {
      const value = ref('12');
      return { args, value };
    },
    template: `
      <InputOtp v-model="value" digit="4" invalid v-bind="args" />
    `,
  }),
  args: {},
};
