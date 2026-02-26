import type { Meta, StoryObj } from '@storybook/vue3';
import { markRaw } from 'vue';
import { DataTableCellButton } from '@jumpcloud/circuit/components';
import { PencilSquareIcon, Square2StackIcon, TrashIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof DataTableCellButton> = {
  title: 'Circuit DS/Components/DataTableCellButton',
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
      { icon: markRaw(PencilSquareIcon) },
      { icon: markRaw(Square2StackIcon) },
      { icon: markRaw(TrashIcon) },
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
      { icon: markRaw(PencilSquareIcon) },
      { icon: markRaw(Square2StackIcon) },
      { icon: markRaw(TrashIcon) },
    ],
    maxVisibleIconButtons: 3,
    size: 'small',
  },
};
