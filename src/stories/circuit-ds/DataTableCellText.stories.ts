import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { markRaw } from 'vue';
import { DataTableCellText } from '@jumpcloud/circuit/components';
import { DevicePhoneMobileIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof DataTableCellText> = {
  title: 'Circuit DS/Components/DataTableCellText',
  component: DataTableCellText,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;

type Story = StoryObj<typeof DataTableCellText>;

export const LabelOnly: Story = {
  args: {
    label: 'Label Cell',
  },
};

export const LabelWithIcon: Story = {
  args: {
    label: 'Label Cell',
    icon: markRaw(DevicePhoneMobileIcon),
  },
};

export const LabelWithDescription: Story = {
  args: {
    label: 'Label Cell',
    description: 'Description text below the label',
  },
};

export const LabelWithIconAndDescription: Story = {
  args: {
    label: 'Label Cell',
    description: 'Description text below the label',
    icon: markRaw(DevicePhoneMobileIcon),
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Label Cell',
    icon: markRaw(DevicePhoneMobileIcon),
    size: 'small',
  },
};
