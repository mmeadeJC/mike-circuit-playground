import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { FilterModal } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';

const meta: Meta<typeof FilterModal> = {
  title: 'Circuit DS/Data Table/FilterModal',
  component: FilterModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FilterModal>;

const basicFilters = [
  {
    id: 'name',
    label: 'Name',
    type: 'text' as const,
    placeholder: 'Enter name...',
  },
  {
    id: 'status',
    label: 'Status',
    type: 'singleSelect' as const,
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ],
  },
];

export const Default: Story = {
  render: (args) => ({
    components: { FilterModal, Button },
    setup() {
      const visible = ref(false);
      return { args, visible, basicFilters };
    },
    template: `
      <div>
        <Button label="Open Filters" @click="visible = true" />
        <FilterModal
          v-model:visible="visible"
          :basicFilters="basicFilters"
          v-bind="args"
          @apply="visible = false"
          @cancel="visible = false"
        />
      </div>
    `,
  }),
  args: {},
};
