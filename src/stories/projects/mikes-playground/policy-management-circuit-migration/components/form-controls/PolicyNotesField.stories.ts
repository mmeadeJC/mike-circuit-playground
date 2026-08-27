import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import Textarea from 'primevue/textarea';
const meta: Meta<typeof FormField> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Policy Notes Field",
  component: FormField,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => ({
    components: { FormField, PvTextarea: Textarea },
    setup() {
      const policyNotes = ref('');
      return { policyNotes };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Policy Notes" class="w-full">
          <template #default="{ inputId }">
            <PvTextarea
              :id="inputId"
              v-model="policyNotes"
              rows="3"
              autoResize
              class="w-full"
              placeholder="Add notes about this policy"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};
