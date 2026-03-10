import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw } from 'vue';
import {
  DataTable,
  DataTableCellText,
  DataTableCellLink,
  DataTableCellToken,
  DataTableCellButton,
} from '@jumpcloud/circuit/components';
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof DataTable> = {
  title: 'Circuit DS/Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

const products = [
  { code: '001', name: 'Product 1', category: 'Category A', quantity: 10, status: 'Active', tags: ['Tag A', 'Tag B'] },
  { code: '002', name: 'Product 2', category: 'Category B', quantity: 20, status: 'Inactive', tags: ['Tag B'] },
  { code: '003', name: 'Product 3', category: 'Category A', quantity: 15, status: 'Active', tags: ['Tag A', 'Tag B', 'Tag C'] },
  { code: '004', name: 'Product 4', category: 'Category C', quantity: 8, status: 'Pending', tags: ['Tag C'] },
  { code: '005', name: 'Product 5', category: 'Category B', quantity: 12, status: 'Active', tags: ['Tag A'] },
];

const defaultColumns = [
  { field: 'code', header: 'Code', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.code }) },
  { field: 'name', header: 'Name', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name }) },
  { field: 'category', header: 'Category', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.category }) },
  { field: 'quantity', header: 'Quantity', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.quantity }) },
];

export const Default: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, products, defaultColumns };
    },
    template: `
      <DataTable :columns="defaultColumns" :data="products" v-bind="args" />
    `,
  }),
  args: {},
};

const allCellTypesColumns = [
  { field: 'code', header: 'Code', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.code }) },
  { field: 'name', header: 'Name', sortable: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, href: '#' }) },
  { field: 'category', header: 'Category', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.category }) },
  { field: 'quantity', header: 'Qty', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.quantity }) },
  { field: 'status', header: 'Status', component: markRaw(DataTableCellToken), componentProps: (sp: { data: Record<string, unknown> }) => ({ type: 'Status', statusLabel: sp.data.status }) },
  { field: 'tags', header: 'Tags', component: markRaw(DataTableCellToken), componentProps: (sp: { data: Record<string, unknown> }) => ({ type: 'Tags', tags: sp.data.tags, maxVisibleTags: 3 }) },
  {
    field: 'actions',
    header: 'Actions',
    component: markRaw(DataTableCellButton),
    componentProps: () => ({
      type: 'Button Group',
      iconButtons: [
        { icon: markRaw(PencilSquareIcon), ariaLabel: 'Edit' },
        { icon: markRaw(TrashIcon), ariaLabel: 'Delete' },
      ],
      maxVisibleIconButtons: 3,
    }),
  },
];

export const AllCellTypes: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, products, allCellTypesColumns };
    },
    template: `
      <DataTable :columns="allCellTypesColumns" :data="products" v-bind="args" />
    `,
  }),
  args: {},
};

export const WithCardStyle: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, products, defaultColumns };
    },
    template: `
      <DataTable :columns="defaultColumns" :data="products" :card="true" v-bind="args" />
    `,
  }),
  args: {},
};

export const SmallSize: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, products, defaultColumns };
    },
    template: `
      <DataTable :columns="defaultColumns" :data="products" size="small" v-bind="args" />
    `,
  }),
  args: {},
};

export const WithExpansion: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, products, defaultColumns };
    },
    template: `
      <DataTable :columns="defaultColumns" :data="products" :expander="true" v-bind="args">
        <template #expansion="{ data }">
          <div class="p-4 text-body-md text-neutral-base">
            <p><strong>Product:</strong> {{ data.name }}</p>
            <p><strong>Category:</strong> {{ data.category }}</p>
            <p><strong>Tags:</strong> {{ data.tags?.join(', ') }}</p>
          </div>
        </template>
      </DataTable>
    `,
  }),
  args: {},
};

const manyProducts = Array.from({ length: 50 }, (_, i) => ({
  code: String(i + 1).padStart(3, '0'),
  name: `Product ${i + 1}`,
  category: `Category ${String.fromCharCode(65 + (i % 3))}`,
  quantity: 10 + (i % 20),
  status: ['Active', 'Inactive', 'Pending'][i % 3],
  tags: ['Tag A', 'Tag B', 'Tag C'].slice(0, (i % 3) + 1),
}));

export const WithPagination: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, manyProducts, defaultColumns };
    },
    template: `
      <DataTable :columns="defaultColumns" :data="manyProducts" :paginator="true" :rows="10" v-bind="args" />
    `,
  }),
  args: {},
};

export const WithSelection: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      const selection = ref<Record<string, unknown>[]>([]);
      return { args, products, defaultColumns, selection };
    },
    template: `
      <DataTable
        :columns="defaultColumns"
        :data="products"
        selectionMode="multiple"
        v-model:selection="selection"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const Loading: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, defaultColumns };
    },
    template: `
      <DataTable :columns="defaultColumns" :data="[]" :loading="true" v-bind="args" />
    `,
  }),
  args: {},
};
