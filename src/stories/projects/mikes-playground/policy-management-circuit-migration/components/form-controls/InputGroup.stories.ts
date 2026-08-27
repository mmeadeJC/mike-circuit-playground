import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { DatePicker, FormField } from '@jumpcloud/circuit/components';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { timezoneLabel } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof InputGroup> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Group",
  component: InputGroup,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const WithTimezoneAddon: Story = {
  name: 'With timezone addon',
  render: () => ({
    components: {
      FormField,
      DatePicker,
      PvInputGroup: InputGroup,
      PvInputGroupAddon: InputGroupAddon,
    },
    setup() {
      const enforcementDeadline = ref<Date | null>(null);
      return { enforcementDeadline, timezoneLabel };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Enforcement deadline">
          <template #default="{ inputId }">
            <PvInputGroup class="w-full">
              <DatePicker
                :id="inputId"
                v-model="enforcementDeadline"
                fluid
                showTime
                hourFormat="12"
                placeholder="Select deadline"
              />
              <PvInputGroupAddon>{{ timezoneLabel }}</PvInputGroupAddon>
            </PvInputGroup>
          </template>
        </FormField>
      </div>
    `,
  }),
};
