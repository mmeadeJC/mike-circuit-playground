import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { SelectWithSlots } from '@jumpcloud/circuit/components';
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';
import Button from 'primevue/button';

const meta: Meta<typeof SelectWithSlots> = {
  title: 'Circuit DS/Components/SelectWithSlots',
  component: SelectWithSlots,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof SelectWithSlots>;

const defaultOptions = [
  { name: 'Option 1', code: '1' },
  { name: 'Option 2', code: '2' },
  { name: 'Option 3', code: '3' },
];

export const Default: Story = {
  render: (args) => ({
    components: { SelectWithSlots },
    setup() {
      const selected = ref<{ name: string; code: string } | null>(null);
      return { args, selected, defaultOptions };
    },
    template: `
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const WithIconSlot: Story = {
  render: (args) => ({
    components: { SelectWithSlots, Cog6ToothIcon },
    setup() {
      const selected = ref<{ name: string; code: string } | null>(null);
      return { args, selected, defaultOptions };
    },
    template: `
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        v-bind="args"
      >
        <template #icon="{ iconClass }">
          <Cog6ToothIcon :class="iconClass" />
        </template>
      </SelectWithSlots>
    `,
  }),
  args: {},
};

export const WithFooterSlot: Story = {
  render: (args) => ({
    components: { SelectWithSlots, Button },
    setup() {
      const selected = ref<{ name: string; code: string } | null>(null);
      return { args, selected, defaultOptions };
    },
    template: `
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        v-bind="args"
      >
        <template #footer>
          <Button label="Add new option" variant="text" severity="secondary" class="w-full justify-center" />
        </template>
      </SelectWithSlots>
    `,
  }),
  args: {},
};

export const WithIconAndFooter: Story = {
  render: (args) => ({
    components: { SelectWithSlots, Cog6ToothIcon, Button },
    setup() {
      const selected = ref<{ name: string; code: string } | null>(null);
      return { args, selected, defaultOptions };
    },
    template: `
      <SelectWithSlots
        v-model="selected"
        :options="defaultOptions"
        optionLabel="name"
        placeholder="Select an option"
        v-bind="args"
      >
        <template #icon="{ iconClass }">
          <Cog6ToothIcon :class="iconClass" />
        </template>
        <template #footer>
          <Button label="Add new option" variant="text" severity="secondary" class="w-full justify-center" />
        </template>
      </SelectWithSlots>
    `,
  }),
  args: {},
};
