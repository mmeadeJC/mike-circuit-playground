import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { ToggleSwitch } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Circuit DS/Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <ToggleSwitch v-model="checked" aria-label="Toggle option" v-bind="args" />
    `,
  }),
  args: {},
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <ToggleSwitch v-model="checked" label="Enable notifications" v-bind="args" />
    `,
  }),
  args: {},
};

export const WithDescription: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <ToggleSwitch
        v-model="checked"
        label="Enable notifications"
        description="When enabled, you will receive email notifications"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: `
      <ToggleSwitch
        v-model="checked"
        label="Disabled toggle"
        description="This toggle cannot be changed"
        disabled
        v-bind="args"
      />
    `,
  }),
  args: {},
};
