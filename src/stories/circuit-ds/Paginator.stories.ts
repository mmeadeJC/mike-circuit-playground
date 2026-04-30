import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Paginator } from '@jumpcloud/circuit/components';

const meta: Meta<typeof Paginator> = {
  title: 'Circuit DS/Components/Paginator',
  component: Paginator,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
    showRowsPerPageOptions: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Paginator>;

export const Default: Story = {
  args: {
    totalRecords: 100,
    rows: 10,
  },
};

export const SmallSize: Story = {
  args: {
    totalRecords: 200,
    rows: 10,
    size: 'small',
  },
};

export const WithRowsPerPage: Story = {
  args: {
    totalRecords: 100,
    rows: 10,
    showRowsPerPageOptions: true,
  },
};

export const CustomRowsPerPage: Story = {
  args: {
    totalRecords: 100,
    rows: 10,
    showRowsPerPageOptions: true,
    rowsPerPageOptions: [
      { label: '5 per page', value: 5 },
      { label: '10 per page', value: 10 },
      { label: '25 per page', value: 25 },
    ],
  },
};
