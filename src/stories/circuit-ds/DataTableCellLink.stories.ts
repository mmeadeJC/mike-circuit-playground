import type { Meta, StoryObj } from '@storybook/vue3';
import { markRaw } from 'vue';
import { DataTableCellLink } from '@jumpcloud/circuit/components';
import { UserIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof DataTableCellLink> = {
  title: 'Circuit DS/Components/DataTableCellLink',
  component: DataTableCellLink,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
    target: { control: 'select', options: ['_self', '_blank'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellLink>;

export const LabelOnly: Story = {
  args: {
    label: 'Table Link',
    href: '#',
  },
};

export const LabelWithIcon: Story = {
  args: {
    label: 'Table Link',
    href: '#',
    icon: markRaw(UserIcon),
  },
};

export const LabelWithDescription: Story = {
  args: {
    label: 'Table Link',
    description: 'Description text for the link',
    href: '#',
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Table Link',
    href: '#',
    size: 'small',
  },
};
