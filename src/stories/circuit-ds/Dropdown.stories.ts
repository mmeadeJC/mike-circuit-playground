import type { Meta, StoryObj } from '@storybook/vue3';
import { Dropdown } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof Dropdown> = {
  title: 'Circuit DS/Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    filter: { control: 'boolean' },
    placement: { control: 'select', options: ['bottom', 'top', 'auto'] },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const defaultOptions = [
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Delete', value: 'delete' },
];

const groupedOptions = [
  {
    label: 'Actions',
    items: [
      { label: 'Edit', value: 'edit' },
      { label: 'Duplicate', value: 'duplicate' },
    ],
  },
  {
    label: 'Danger',
    items: [{ label: 'Delete', value: 'delete' }],
  },
];

export const Default: Story = {
  args: {
    label: 'Actions',
    options: defaultOptions,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Actions',
    options: defaultOptions,
    icon: EllipsisVerticalIcon,
  },
};

export const WithSearch: Story = {
  args: {
    label: 'Actions',
    options: defaultOptions,
    filter: true,
  },
};

export const CustomTrigger: Story = {
  render: (args) => ({
    components: { Dropdown, Button },
    setup() {
      return { args, defaultOptions };
    },
    template: `
      <Dropdown
        v-bind="args"
        :options="defaultOptions"
      >
        <template #trigger="{ isOpen, toggleDropdown }>
          <Button
            :label="isOpen ? 'Close' : 'Open'"
            @click="toggleDropdown"
          />
        </template>
      </Dropdown>
    `,
  }),
  args: {},
};

export const GroupedOptions: Story = {
  args: {
    label: 'Actions',
    groupedOptions,
  },
};
