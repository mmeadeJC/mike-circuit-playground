import type { Meta, StoryObj } from '@storybook/vue3';
import { DataTableCellButton } from '@jumpcloud/circuit/components';
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/vue/24/outline';
import { markRaw } from 'vue';

const meta: Meta<typeof DataTableCellButton> = {
  title: 'Circuit DS/Data Table/DataTableCellButton',
  component: DataTableCellButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['Button', 'Button Group', 'More Button', 'Button & More'],
    },
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellButton>;

export const Button: Story = {
  args: {
    type: 'Button',
    actionButtons: [
      { label: 'Edit' },
    ],
  },
};

export const ButtonGroup: Story = {
  args: {
    type: 'Button Group',
    iconButtons: [
      { icon: markRaw(EyeIcon) },
      { icon: markRaw(PencilIcon) },
      { icon: markRaw(TrashIcon) },
    ],
    maxVisibleIconButtons: 3,
  },
};

export const MoreButton: Story = {
  args: {
    type: 'More Button',
    actionButtons: [
      { label: 'Edit' },
      { label: 'Duplicate' },
      { label: 'Delete' },
    ],
  },
};

export const ButtonAndMore: Story = {
  args: {
    type: 'Button & More',
    actionButtons: [
      { label: 'View' },
      { label: 'Edit' },
      { label: 'Delete' },
    ],
  },
};

export const Small: Story = {
  args: {
    type: 'Button Group',
    iconButtons: [
      { icon: markRaw(EyeIcon) },
      { icon: markRaw(PencilIcon) },
    ],
    size: 'small',
  },
};
