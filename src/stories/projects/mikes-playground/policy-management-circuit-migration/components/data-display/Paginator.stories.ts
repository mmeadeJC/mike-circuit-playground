import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { Paginator } from '@jumpcloud/circuit/components';
import { sampleAppList } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof Paginator> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Data Display/Paginator",
  component: Paginator,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Paginator>;

export const Default: Story = {
  render: () => ({
    components: { Paginator },
    setup() {
      const first = ref(0);
      const rows = ref(10);
      return { first, rows, totalRecords: sampleAppList.length };
    },
    template: `
      <Paginator
        v-model:first="first"
        v-model:rows="rows"
        :totalRecords="totalRecords"
        pageReportTemplate="{first} - {last} of {totalRecords}"
        :rowsPerPageOptions="[
          { label: '10 Items per page', value: 10 },
          { label: '25 Items per page', value: 25 },
          { label: '50 Items per page', value: 50 },
        ]"
      />
    `,
  }),
};
