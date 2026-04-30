import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent } from 'vue';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline';
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';

const meta: Meta<typeof DetailsKeyValue> = {
  title: 'Circuit DS/Custom Components/DetailsKeyValue',
  component: DetailsKeyValue,
  argTypes: {
    label: {
      control: 'text',
      description: 'The key/label text displayed on the left',
    },
    value: {
      control: 'text',
      description: 'The value text displayed on the right (shows "--" when empty)',
    },
    testId: {
      control: 'text',
      description: 'Optional data-test-id attribute',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DetailsKeyValue>;

export const Default: Story = {
  args: {
    label: 'Operating System',
    value: 'macOS 15.3 Sequoia',
  },
};

export const EmptyValue: Story = {
  args: {
    label: 'Serial Number',
    value: undefined,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Status',
    value: 'Active',
    icon: CheckCircleIcon,
    iconColor: 'text-success-base',
  },
};

export const Multiple: Story = {
  render: () =>
    defineComponent({
      components: { DetailsKeyValue },
      setup() {
        const items = [
          { label: 'Display Name', value: 'Burak\'s MacBook Pro' },
          { label: 'Operating System', value: 'macOS 15.3 Sequoia' },
          { label: 'Status', value: 'Active', icon: CheckCircleIcon, iconColor: 'text-success-base' },
          { label: 'Serial Number', value: 'C02ZN1MDLVDM' },
          { label: 'Last Contact', value: '2 minutes ago' },
          { label: 'Enrollment Date', value: 'January 15, 2025' },
          { label: 'Risk Level', value: 'Medium', icon: ExclamationTriangleIcon, iconColor: 'text-warning-base' },
          { label: 'Notes', value: undefined },
        ];
        return { items };
      },
      template: `
        <div class="flex flex-col gap-3 p-6">
          <DetailsKeyValue
            v-for="(item, index) in items"
            :key="index"
            :label="item.label"
            :value="item.value"
            :icon="item.icon"
            :icon-color="item.iconColor"
          />
        </div>
      `,
    }),
};
