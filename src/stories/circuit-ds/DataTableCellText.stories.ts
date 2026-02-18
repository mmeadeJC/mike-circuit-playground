import type { Meta, StoryObj } from '@storybook/vue3';
import { DataTableCellText } from '@jumpcloud/circuit/components';
import { ComputerDesktopIcon } from '@heroicons/vue/24/outline';
import { markRaw } from 'vue';

const meta: Meta<typeof DataTableCellText> = {
  title: 'Circuit DS/Data Table/DataTableCellText',
  component: DataTableCellText,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellText>;

export const Default: Story = {
  args: {
    label: 'MacBook Pro 16"',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'MacBook Pro 16"',
    description: 'Serial: C02ZN1ABCD',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'MacBook Pro 16"',
    description: 'Serial: C02ZN1ABCD',
    icon: markRaw(ComputerDesktopIcon),
  },
};

export const WithImage: Story = {
  args: {
    label: 'MacBook Pro 16"',
    description: 'Serial: C02ZN1ABCD',
    image: 'https://i.pravatar.cc/56',
    imageAlt: 'Device image',
  },
};

export const Small: Story = {
  args: {
    label: 'MacBook Pro 16"',
    description: 'Serial: C02ZN1ABCD',
    icon: markRaw(ComputerDesktopIcon),
    size: 'small',
  },
};
