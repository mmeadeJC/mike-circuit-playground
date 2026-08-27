import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import MultiSelect from 'primevue/multiselect';
import { targetOsVersionOptions } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof MultiSelect> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Multi Select",
  component: MultiSelect,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const TargetOsVersions: Story = {
  name: 'Target OS versions',
  render: () => ({
    components: { FormField, PvMultiSelect: MultiSelect },
    setup() {
      const targetOsVersion = ref<string[]>([]);
      return { targetOsVersion, targetOsVersionOptions };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Target OS version">
          <template #default="{ inputId }">
            <PvMultiSelect
              :id="inputId"
              v-model="targetOsVersion"
              :options="targetOsVersionOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select OS versions"
              :maxSelectedLabels="2"
              class="w-full"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};
