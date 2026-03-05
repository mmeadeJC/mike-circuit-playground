// Official Hina Playground Story
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { ToggleSwitch } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Projects/Hina Playground/Master Toggle',
  component: ToggleSwitch,
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: '<ToggleSwitch v-model="checked" label="AI Master Toggle" v-bind="args" />',
  }),
};