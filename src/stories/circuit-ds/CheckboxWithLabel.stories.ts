import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { CheckboxWithLabel } from '@jumpcloud/circuit/components';

const meta: Meta<typeof CheckboxWithLabel> = {
  title: 'Circuit DS/Components/CheckboxWithLabel',
  component: CheckboxWithLabel,
  tags: ['autodocs'],
  argTypes: {
    binary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    modelValue: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxWithLabel>;

export const WithDescription: Story = {
  render: (args) => ({
    components: { CheckboxWithLabel },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Enable two-factor authentication</template>
        <template #description>Add an extra layer of security to your account by requiring a second verification step.</template>
      </CheckboxWithLabel>
    `,
  }),
  args: {},
};

export const WithoutDescription: Story = {
  render: (args) => ({
    components: { CheckboxWithLabel },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Remember me</template>
      </CheckboxWithLabel>
    `,
  }),
  args: {},
};

export const Indeterminate: Story = {
  render: (args) => ({
    components: { CheckboxWithLabel },
    setup() {
      const checked = ref<boolean | null>(null);
      return { args, checked };
    },
    template: `
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label>Select all items (indeterminate when partially selected)</template>
      </CheckboxWithLabel>
    `,
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args) => ({
    components: { CheckboxWithLabel },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: `
      <CheckboxWithLabel v-model="checked" :binary="true" disabled>
        <template #label>This option is disabled</template>
        <template #description>You cannot change this setting.</template>
      </CheckboxWithLabel>
    `,
  }),
  args: {},
};

export const BoldLabel: Story = {
  render: (args) => ({
    components: { CheckboxWithLabel },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <CheckboxWithLabel v-model="checked" :binary="true">
        <template #label><strong>Important:</strong> I agree to the terms and conditions</template>
      </CheckboxWithLabel>
    `,
  }),
  args: {},
};

export const LongLabel: Story = {
  render: (args) => ({
    components: { CheckboxWithLabel },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <CheckboxWithLabel v-model="checked" :binary="true" class="max-w-md">
        <template #label>I understand that enabling this feature will apply changes to all users in my organization and may affect existing integrations with third-party services.</template>
        <template #description>This is a very long description that explains the implications of the checkbox in great detail. It may wrap to multiple lines depending on the container width.</template>
      </CheckboxWithLabel>
    `,
  }),
  args: {},
};
