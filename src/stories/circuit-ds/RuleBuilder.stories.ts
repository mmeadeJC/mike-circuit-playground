import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { RuleBuilder } from '@jumpcloud/circuit/components';

const meta: Meta<typeof RuleBuilder> = {
  title: 'Circuit DS/Components/RuleBuilder',
  component: RuleBuilder,
  tags: ['autodocs'],
  argTypes: {
    matchMode: { control: 'select', options: ['all', 'any'] },
    bordered: { control: 'boolean' },
    showMatchModeSelector: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RuleBuilder>;

const keyOptions = [
  { label: 'OS', value: 'os' },
  { label: 'Department', value: 'department' },
  { label: 'Location', value: 'location' },
  { label: 'Device Type', value: 'device_type' },
];

const operatorOptions = [
  { label: 'is', value: 'eq' },
  { label: 'is not', value: 'neq' },
  { label: 'contains', value: 'contains' },
  { label: 'starts with', value: 'starts_with' },
];

export const Default: Story = {
  args: {
    modelValue: [],
    keyOptions,
    operatorOptions,
    matchMode: 'all',
  },
};

export const WithExistingRules: Story = {
  args: {
    modelValue: [
      { id: '1', key: 'os', operator: 'eq', values: ['macOS'] },
      { id: '2', key: 'department', operator: 'contains', values: ['Engineering'] },
    ],
    keyOptions,
    operatorOptions,
    matchMode: 'all',
  },
};

export const AnyMatchMode: Story = {
  args: {
    modelValue: [
      { id: '1', key: 'location', operator: 'eq', values: ['US'] },
    ],
    keyOptions,
    operatorOptions,
    matchMode: 'any',
  },
};

export const NoBorder: Story = {
  args: {
    modelValue: [],
    keyOptions,
    operatorOptions,
    bordered: false,
  },
};

export const WithoutMatchModeSelector: Story = {
  args: {
    modelValue: [
      { id: '1', key: 'os', operator: 'eq', values: ['Windows'] },
    ],
    keyOptions,
    operatorOptions,
    showMatchModeSelector: false,
  },
};
