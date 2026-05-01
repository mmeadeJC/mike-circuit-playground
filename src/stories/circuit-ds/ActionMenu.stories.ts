import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, markRaw } from 'vue';
// TODO: ActionMenu is not yet exported from @jumpcloud/circuit/components.
// Uncomment the import below once it's added to package exports:
// import { ActionMenu } from '@jumpcloud/circuit/components';
const ActionMenu = {} as any;
import Button from 'primevue/button';
import {
  PencilIcon,
  DocumentDuplicateIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline';

const meta: Meta<typeof ActionMenu> = {
  title: 'Circuit DS/Components/ActionMenu',
  component: ActionMenu,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    popup: { control: 'boolean' },
    menuClass: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ActionMenu>;

const basicItems = [
  { id: 'edit', label: 'Edit' },
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'delete', label: 'Delete' },
];

const itemsWithIcons = [
  { id: 'edit', label: 'Edit', icon: markRaw(PencilIcon) },
  { id: 'duplicate', label: 'Duplicate', icon: markRaw(DocumentDuplicateIcon) },
  { id: 'delete', label: 'Delete', icon: markRaw(TrashIcon), iconSeverity: 'danger' as const },
];

const groupedItems = [
  { id: 'suspend', label: 'Suspend User', group: 'User', groupOrder: 1 },
  { id: 'reset-mfa', label: 'Reset MFA', group: 'User', groupOrder: 1 },
  { id: 'run-command', label: 'Run a Command', group: 'Device', groupOrder: 2 },
  { id: 'restart', label: 'Restart Devices', group: 'Device', groupOrder: 2 },
];

const externalLinkItems = [
  { id: 'csv', label: 'Export as CSV' },
  { id: 'api-docs', label: 'API Documentation', isExternal: true, url: 'https://docs.example.com' },
];

const disabledItems = [
  { id: 'edit', label: 'Edit' },
  { id: 'duplicate', label: 'Duplicate', disabled: true },
  { id: 'delete', label: 'Delete' },
];

const longLabelItems = [
  { id: 'edit', label: 'Edit this item with a very long label that might wrap' },
  { id: 'duplicate', label: 'Duplicate and create a copy' },
  { id: 'delete', label: 'Delete permanently' },
];

export const Basic: Story = {
  render: (args) => ({
    components: { ActionMenu, Button },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: { id: string; label: string }) => {
        console.log('Selected:', item);
      };
      return { args, menuRef, basicItems, onSelect };
    },
    template: `
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="basicItems" @select="onSelect" />
      </div>
    `,
  }),
  args: {},
};

export const WithIcons: Story = {
  render: (args) => ({
    components: { ActionMenu, Button },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: { id: string; label: string }) => {
        console.log('Selected:', item);
      };
      return { args, menuRef, itemsWithIcons, onSelect };
    },
    template: `
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="itemsWithIcons" @select="onSelect" />
      </div>
    `,
  }),
  args: {},
};

export const GroupedItems: Story = {
  render: (args) => ({
    components: { ActionMenu, Button },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: { id: string; label: string }) => {
        console.log('Selected:', item);
      };
      return { args, menuRef, groupedItems, onSelect };
    },
    template: `
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="groupedItems" @select="onSelect" />
      </div>
    `,
  }),
  args: {},
};

export const ExternalLinks: Story = {
  render: (args) => ({
    components: { ActionMenu, Button },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: { id: string; label: string }) => {
        console.log('Selected:', item);
      };
      return { args, menuRef, externalLinkItems, onSelect };
    },
    template: `
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="externalLinkItems" @select="onSelect" />
      </div>
    `,
  }),
  args: {},
};

export const DisabledItems: Story = {
  render: (args) => ({
    components: { ActionMenu, Button },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: { id: string; label: string }) => {
        console.log('Selected:', item);
      };
      return { args, menuRef, disabledItems, onSelect };
    },
    template: `
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="disabledItems" @select="onSelect" />
      </div>
    `,
  }),
  args: {},
};

export const LongLabels: Story = {
  render: (args) => ({
    components: { ActionMenu, Button },
    setup() {
      const menuRef = ref<InstanceType<typeof ActionMenu> | null>(null);
      const onSelect = (item: { id: string; label: string }) => {
        console.log('Selected:', item);
      };
      return { args, menuRef, longLabelItems, onSelect };
    },
    template: `
      <div>
        <Button label="Actions" severity="secondary" variant="outlined" @click="menuRef?.toggle($event)" />
        <ActionMenu ref="menuRef" :items="longLabelItems" menuClass="w-[180px]" @select="onSelect" />
      </div>
    `,
  }),
  args: {},
};
