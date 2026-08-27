import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { DatePicker, FormField } from '@jumpcloud/circuit/components';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { timezoneLabel } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof DatePicker> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Date Picker",
  component: DatePicker,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const TimeOnlyWithTimezone: Story = {
  name: 'Time only with timezone',
  render: () => ({
    components: { FormField, DatePicker, PvInputGroup: InputGroup, PvInputGroupAddon: InputGroupAddon },
    setup() {
      const dailyStartTime = ref<Date | null>(null);
      return { dailyStartTime, timezoneLabel };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Daily start time">
          <template #default="{ inputId }">
            <PvInputGroup class="w-full">
              <DatePicker
                :id="inputId"
                v-model="dailyStartTime"
                timeOnly
                fluid
                hourFormat="12"
                placeholder="Select time"
              />
              <PvInputGroupAddon>{{ timezoneLabel }}</PvInputGroupAddon>
            </PvInputGroup>
          </template>
        </FormField>
      </div>
    `,
  }),
};

export const DateRange: Story = {
  name: 'Date range',
  render: () => ({
    components: { FormField, DatePicker },
    setup() {
      const dateRange = ref<Date[] | null>(null);
      return { dateRange };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Maintenance window">
          <template #default="{ inputId }">
            <DatePicker
              :id="inputId"
              v-model="dateRange"
              selectionMode="range"
              fluid
              placeholder="Select date range"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};
