import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import SelectButton from 'primevue/selectbutton';
import { systemUpdateModeOptions } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof SelectButton> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select Button",
  component: SelectButton,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof SelectButton>;

export const SystemUpdateMode: Story = {
  name: 'System update mode',
  render: () => ({
    components: { FormField, PvSelectButton: SelectButton },
    setup() {
      const systemUpdateMode = ref('scheduled');
      return { systemUpdateMode, systemUpdateModeOptions };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="System update mode">
          <template #default="{ inputId }">
            <PvSelectButton
              :id="inputId"
              v-model="systemUpdateMode"
              :options="systemUpdateModeOptions"
              optionLabel="label"
              optionValue="value"
              :allowEmpty="false"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};
