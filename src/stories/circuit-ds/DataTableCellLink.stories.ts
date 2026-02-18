import type { Meta, StoryObj } from '@storybook/vue3';
import { DataTableCellLink } from '@jumpcloud/circuit/components';
import { UserIcon } from '@heroicons/vue/24/outline';
import { markRaw } from 'vue';

const meta: Meta<typeof DataTableCellLink> = {
  title: 'Circuit DS/Data Table/DataTableCellLink',
  component: DataTableCellLink,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
    target: { control: 'select', options: ['_self', '_blank'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellLink>;

export const Default: Story = {
  args: {
    label: 'Alice Johnson',
    href: '#',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Alice Johnson',
    description: 'alice@example.com',
    href: '#',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Alice Johnson',
    description: 'alice@example.com',
    icon: markRaw(UserIcon),
    href: '#',
  },
};

export const WithImage: Story = {
  args: {
    label: 'Alice Johnson',
    description: 'alice@example.com',
    image: 'https://i.pravatar.cc/56',
    imageAlt: 'Alice Johnson avatar',
    href: '#',
  },
};

export const ExternalLink: Story = {
  args: {
    label: 'View Documentation',
    href: 'https://example.com',
    target: '_blank',
  },
};

export const Small: Story = {
  args: {
    label: 'Alice Johnson',
    description: 'alice@example.com',
    icon: markRaw(UserIcon),
    href: '#',
    size: 'small',
  },
};
