import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { markRaw } from 'vue';
import { DataTableCellAction } from '@jumpcloud/circuit/components';
import { PencilSquareIcon, Square2StackIcon, TrashIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof DataTableCellAction> = {
  title: 'Circuit DS/Components/DataTableCellAction',
  component: DataTableCellAction,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['Button', 'Button Group', 'More Button', 'Button & More'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellAction>;

export const ButtonType: Story = {
  args: {
    type: 'Button',
    actionButtons: [{ label: 'Action' }],
  },
};

export const ButtonGroupType: Story = {
  args: {
    type: 'Button Group',
    iconButtons: [
      { icon: markRaw(PencilSquareIcon), ariaLabel: 'Edit' },
      { icon: markRaw(Square2StackIcon), ariaLabel: 'Duplicate' },
      { icon: markRaw(TrashIcon), ariaLabel: 'Delete' },
    ],
    maxVisibleIconButtons: 3,
  },
};

export const MoreButtonType: Story = {
  args: {
    type: 'More Button',
  },
};

export const ButtonAndMore: Story = {
  args: {
    type: 'Button & More',
    actionButtons: [{ label: 'Action' }, { label: 'Secondary' }],
  },
};

export const SmallSize: Story = {
  args: {
    type: 'Button Group',
    iconButtons: [
      { icon: markRaw(PencilSquareIcon), ariaLabel: 'Edit' },
      { icon: markRaw(Square2StackIcon), ariaLabel: 'Duplicate' },
      { icon: markRaw(TrashIcon), ariaLabel: 'Delete' },
    ],
    maxVisibleIconButtons: 3,
    size: 'small',
  },
};
