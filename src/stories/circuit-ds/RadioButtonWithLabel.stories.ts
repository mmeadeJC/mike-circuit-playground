import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { RadioButtonWithLabel } from '@jumpcloud/circuit/components';

const meta: Meta<typeof RadioButtonWithLabel> = {
  title: 'Circuit DS/Components/RadioButtonWithLabel',
  component: RadioButtonWithLabel,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButtonWithLabel>;

export const Default: Story = {
  render: (args) => ({
    components: { RadioButtonWithLabel },
    setup() {
      const selected = ref<string | null>(null);
      return { args, selected };
    },
    template: `
      <RadioButtonWithLabel v-model="selected" value="option1" v-bind="args">
        <template #label>Option 1</template>
      </RadioButtonWithLabel>
    `,
  }),
  args: {},
};

export const WithDescription: Story = {
  render: (args) => ({
    components: { RadioButtonWithLabel },
    setup() {
      const selected = ref<string | null>(null);
      return { args, selected };
    },
    template: `
      <RadioButtonWithLabel v-model="selected" value="option1" v-bind="args">
        <template #label>Enable two-factor authentication</template>
        <template #description>Add an extra layer of security to your account.</template>
      </RadioButtonWithLabel>
    `,
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args) => ({
    components: { RadioButtonWithLabel },
    setup() {
      const selected = ref<string | null>('option1');
      return { args, selected };
    },
    template: `
      <RadioButtonWithLabel v-model="selected" value="option1" disabled v-bind="args">
        <template #label>This option is disabled</template>
        <template #description>You cannot change this setting.</template>
      </RadioButtonWithLabel>
    `,
  }),
  args: {},
};

export const RadioGroup: Story = {
  render: (args) => ({
    components: { RadioButtonWithLabel },
    setup() {
      const selected = ref<string | null>(null);
      return { args, selected };
    },
    template: `
      <div class="flex flex-col gap-4">
        <RadioButtonWithLabel v-model="selected" value="a" v-bind="args">
          <template #label>Option A</template>
        </RadioButtonWithLabel>
        <RadioButtonWithLabel v-model="selected" value="b" v-bind="args">
          <template #label>Option B</template>
        </RadioButtonWithLabel>
        <RadioButtonWithLabel v-model="selected" value="c" v-bind="args">
          <template #label>Option C</template>
        </RadioButtonWithLabel>
      </div>
    `,
  }),
  args: {},
};
