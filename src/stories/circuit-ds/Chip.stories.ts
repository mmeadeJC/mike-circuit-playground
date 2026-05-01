import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { markRaw } from 'vue';
import { Chip } from '@jumpcloud/circuit/components';
import {
  UserIcon,
  TagIcon,
  ServerIcon,
} from '@heroicons/vue/24/outline';

const meta: Meta<typeof Chip> = {
  title: 'Circuit DS/Components/Chip',
  component: Chip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const WithIcon: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args, UserIcon: markRaw(UserIcon) };
    },
    template: `
      <Chip
        chipKey="User"
        value="John Doe"
        :icon="UserIcon"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const WithoutIcon: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip
        chipKey="Status"
        value="Active"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const Removable: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      const onRemove = () => {
        console.log('Chip removed');
      };
      return { args, onRemove };
    },
    template: `
      <Chip
        chipKey="Tag"
        value="Removable"
        removable
        @remove="onRemove"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const CompactSize: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip
        chipKey="Size"
        value="Compact"
        size="compact"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const KeyOnly: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args, TagIcon: markRaw(TagIcon) };
    },
    template: `
      <Chip
        chipKey="Important"
        :icon="TagIcon"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const ValueOnly: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip
        value="Active"
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      return { args };
    },
    template: `
      <Chip
        chipKey="Status"
        value="Disabled"
        disabled
        v-bind="args"
      />
    `,
  }),
  args: {},
};

export const CompactRemovable: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      const onRemove = () => {
        console.log('Compact chip removed');
      };
      return { args, onRemove, ServerIcon: markRaw(ServerIcon) };
    },
    template: `
      <Chip
        chipKey="Server"
        value="Compact & Removable"
        :icon="ServerIcon"
        size="compact"
        removable
        @remove="onRemove"
        v-bind="args"
      />
    `,
  }),
  args: {},
};
