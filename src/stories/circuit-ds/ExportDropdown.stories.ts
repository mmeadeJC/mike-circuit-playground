import type { Meta, StoryObj } from '@storybook/vue3';
import { ExportDropdown } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ExportDropdown> = {
  title: 'Circuit DS/Data Table/ExportDropdown',
  component: ExportDropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof ExportDropdown>;

export const Default: Story = {
  args: {
    options: [
      { id: 'csv', label: 'Export as CSV' },
      { id: 'json', label: 'Export as JSON' },
      { id: 'pdf', label: 'Export as PDF' },
    ],
  },
};

export const WithGroups: Story = {
  args: {
    options: [
      { id: 'csv', label: 'CSV', group: 'Download', groupOrder: 1 },
      { id: 'json', label: 'JSON', group: 'Download', groupOrder: 1 },
      { id: 'pdf', label: 'PDF', group: 'Download', groupOrder: 1 },
      { id: 'sheets', label: 'Google Sheets', group: 'External', groupOrder: 2, isExternal: true },
      { id: 'excel', label: 'Microsoft Excel', group: 'External', groupOrder: 2, isExternal: true },
    ],
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { id: 'csv', label: 'Export as CSV' },
      { id: 'json', label: 'Export as JSON' },
      { id: 'pdf', label: 'Export as PDF', disabled: true },
    ],
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { id: 'csv', label: 'Export as CSV' },
    ],
    disabled: true,
  },
};
