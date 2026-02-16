import type { Meta, StoryObj } from '@storybook/vue3';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const meta: Meta<typeof DataTable> = {
  title: 'Circuit DS/Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

const sampleData = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
  { name: 'Carol White', email: 'carol@example.com', role: 'Manager' },
  { name: 'Dave Brown', email: 'dave@example.com', role: 'User' },
];

export const Default: Story = {
  render: (args) => ({
    components: { DataTable, Column },
    setup() {
      return { args, data: sampleData };
    },
    template: `
      <DataTable :value="data" v-bind="args">
        <Column field="name" header="Name" />
        <Column field="email" header="Email" />
        <Column field="role" header="Role" />
      </DataTable>
    `,
  }),
  args: {},
};

export const Striped: Story = {
  render: (args) => ({
    components: { DataTable, Column },
    setup() {
      return { args, data: sampleData };
    },
    template: `
      <DataTable :value="data" v-bind="args" stripedRows>
        <Column field="name" header="Name" />
        <Column field="email" header="Email" />
        <Column field="role" header="Role" />
      </DataTable>
    `,
  }),
  args: {},
};
