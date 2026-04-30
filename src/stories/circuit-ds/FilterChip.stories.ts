import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { FilterChip } from '@jumpcloud/circuit/components';

const meta: Meta<typeof FilterChip> = {
  title: 'Circuit DS/Data Table/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
    removable: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof FilterChip>;

export const Default: Story = {
  args: {
    chipKey: 'Status',
    operator: 'is',
    value: 'Active',
  },
};

export const Removable: Story = {
  args: {
    chipKey: 'Status',
    operator: 'is',
    value: 'Active',
    removable: true,
  },
};

export const Disabled: Story = {
  args: {
    chipKey: 'Status',
    operator: 'is',
    value: 'Active',
    disabled: true,
  },
};

export const CompactSize: Story = {
  args: {
    chipKey: 'Status',
    operator: 'is',
    value: 'Active',
    removable: true,
    size: 'small',
  },
};
