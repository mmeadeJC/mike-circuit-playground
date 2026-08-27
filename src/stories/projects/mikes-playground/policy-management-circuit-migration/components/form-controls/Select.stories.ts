import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import Select from 'primevue/select';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { certificateTypeOptions } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof Select> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Select",
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const CertificateType: Story = {
  name: 'Certificate type',
  render: () => ({
    components: { FormField, PvSelect: Select, MagnifyingGlassIcon },
    setup() {
      const certificateType = ref('ROOT');
      return { certificateType, certificateTypeOptions };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Certificate type">
          <template #default="{ inputId }">
            <PvSelect
              :id="inputId"
              v-model="certificateType"
              :options="certificateTypeOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select certificate type"
              filter
              filterPlaceholder="Search..."
              class="w-full!"
            >
              <template #filtericon>
                <MagnifyingGlassIcon />
              </template>
            </PvSelect>
          </template>
        </FormField>
      </div>
    `,
  }),
};
