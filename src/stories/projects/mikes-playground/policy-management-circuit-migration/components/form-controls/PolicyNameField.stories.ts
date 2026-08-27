import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
const meta: Meta<typeof FormField> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Name Field",
  component: FormField,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => ({
    components: { FormField, PvInputText: InputText },
    setup() {
      const policyName = ref('FileVault 2');
      return { policyName };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Policy Name" class="w-full">
          <template #default="{ inputId }">
            <PvInputText :id="inputId" v-model="policyName" class="w-full" />
          </template>
        </FormField>
      </div>
    `,
  }),
};
