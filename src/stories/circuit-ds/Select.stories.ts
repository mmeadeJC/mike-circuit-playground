import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import Select from 'primevue/select';

const meta: Meta<typeof Select> = {
  title: 'Circuit DS/Components/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { name: 'Option 1', code: '1' },
  { name: 'Option 2', code: '2' },
  { name: 'Option 3', code: '3' },
];

const groupedOptions = [
  {
    label: 'Group A',
    items: [
      { name: 'A1', code: 'a1' },
      { name: 'A2', code: 'a2' },
    ],
  },
  {
    label: 'Group B',
    items: [
      { name: 'B1', code: 'b1' },
      { name: 'B2', code: 'b2' },
    ],
  },
];

export const Default: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref(null);
      return { args, value };
    },
    template: `
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Select an option"
        aria-label="Select an option"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `,
  }),
  args: { options },
};

export const SmallSize: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref(null);
      return { args, value };
    },
    template: `
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Small select"
        size="small"
        aria-label="Small select"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `,
  }),
  args: { options },
};

export const WithFilter: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref(null);
      return { args, value };
    },
    template: `
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Search options..."
        filter
        aria-label="Search options"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `,
  }),
  args: { options },
};

export const GroupedOptions: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref(null);
      return { args, value };
    },
    template: `
      <Select
        v-model="value"
        :options="args.options"
        optionGroupLabel="label"
        optionGroupChildren="items"
        optionLabel="name"
        placeholder="Select from groups"
        aria-label="Select from groups"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `,
  }),
  args: { options: groupedOptions },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref(null);
      return { args, value };
    },
    template: `
      <Select
        v-model="value"
        :options="args.options"
        optionLabel="name"
        placeholder="Disabled select"
        disabled
        aria-label="Disabled select"
        class="w-full max-w-[200px]"
        v-bind="args"
      />
    `,
  }),
  args: { options },
};
