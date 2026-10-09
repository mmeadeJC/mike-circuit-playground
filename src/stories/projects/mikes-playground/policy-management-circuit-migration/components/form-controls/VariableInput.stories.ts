import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import VariableInput from '@/components/VariableInput.vue';

const meta: Meta<typeof VariableInput> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Variable Input",
  component: VariableInput,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof VariableInput>;

export const SingleLine: Story = {
  name: 'Single line',
  render: () => ({
    components: { FormField, VariableInput },
    setup() {
      const value = ref('{device.model}-{device.serialNumber}');
      return { value };
    },
    template: `
      <div class="max-w-2xl">
        <FormField label="Device name">
          <template #default="{ inputId }">
            <VariableInput :id="inputId" v-model="value" placeholder="Enter a value or insert a variable" />
          </template>
        </FormField>
      </div>
    `,
  }),
};

export const Multiline: Story = {
  render: () => ({
    components: { FormField, VariableInput },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <div class="max-w-2xl">
        <FormField label="Value">
          <template #default="{ inputId }">
            <VariableInput :id="inputId" v-model="value" multiline :rows="3" />
          </template>
        </FormField>
      </div>
    `,
  }),
};
