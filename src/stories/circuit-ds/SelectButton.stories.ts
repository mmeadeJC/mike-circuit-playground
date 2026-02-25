import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import SelectButton from 'primevue/selectbutton';

const meta: Meta<typeof SelectButton> = {
  title: 'Circuit DS/Components/SelectButton',
  component: SelectButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectButton>;

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
];

export const Default: Story = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const value = ref(1);
      return { args, value };
    },
    template: `
      <SelectButton v-bind="args" v-model="value" />
    `,
  }),
  args: { options },
};

export const SmallSize: Story = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const value = ref(1);
      return { args, value };
    },
    template: `
      <SelectButton v-bind="args" v-model="value" size="small" />
    `,
  }),
  args: { options },
};

export const Multiple: Story = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const value = ref([1]);
      return { args, value };
    },
    template: `
      <SelectButton v-bind="args" v-model="value" :multiple="true" />
    `,
  }),
  args: { options },
};

export const BarVariant: Story = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const value = ref(1);
      return { args, value };
    },
    template: `
      <div class="px-6 py-3 border-b border-neutral-default_solid">
        <SelectButton v-bind="args" v-model="value" />
      </div>
    `,
  }),
  args: { options },
};
