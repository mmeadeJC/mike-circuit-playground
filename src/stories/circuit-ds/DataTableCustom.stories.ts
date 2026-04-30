import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { DataTable } from '@jumpcloud/circuit/components';

const meta: Meta<typeof DataTable> = {
  title: 'Circuit DS/Data Table/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    card: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'small'] },
    paginator: { control: 'boolean' },
    loading: { control: 'boolean' },
    selectionMode: { control: 'select', options: [undefined, 'single', 'multiple'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTable>;

const sampleColumns = [
  { field: 'name', header: 'Name', width: '200px' },
  { field: 'email', header: 'Email', width: '250px' },
  { field: 'role', header: 'Role', width: '150px' },
  { field: 'status', header: 'Status', width: '120px' },
];

const sampleData = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active' },
  { name: 'Carol White', email: 'carol@example.com', role: 'Manager', status: 'Inactive' },
  { name: 'Dave Brown', email: 'dave@example.com', role: 'User', status: 'Active' },
  { name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'Pending' },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

export const Card: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    card: true,
  },
};

export const Small: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    size: 'small',
  },
};

export const WithPagination: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    paginator: true,
    rows: 3,
    rowsPerPageOptions: [
      { label: '3', value: 3 },
      { label: '5', value: 5 },
      { label: '10', value: 10 },
    ],
    showRowsPerPageOptions: true,
    showPageReport: true,
  },
};

export const WithSelection: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    selectionMode: 'multiple',
    selection: [],
  },
};

export const Loading: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    loading: true,
  },
};
