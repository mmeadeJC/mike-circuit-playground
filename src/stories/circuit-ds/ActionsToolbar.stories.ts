import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { ActionsToolbar } from '@jumpcloud/circuit/components';
import type { Action, SelectedItem } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ActionsToolbar> = {
  title: 'Circuit DS/Components/ActionsToolbar',
  component: ActionsToolbar,
  tags: ['autodocs'],
  argTypes: {
    actions: { control: 'object' },
    selectedItems: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof ActionsToolbar>;

const actionsWithFour: Action[] = [
  { id: 'edit', label: 'Edit' },
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'export', label: 'Export' },
  { id: 'delete', label: 'Delete' },
];

const overflowActions: Action[] = [
  { id: 'edit', label: 'Edit' },
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'export', label: 'Export' },
  { id: 'archive', label: 'Archive' },
  { id: 'restore', label: 'Restore' },
  { id: 'delete', label: 'Delete' },
];

const selectedItemsWithLabels: SelectedItem[] = [
  { id: '1', label: 'Device Alpha', description: 'Windows 11 • Online' },
  { id: '2', label: 'Device Beta', description: 'macOS Sonoma • Offline' },
  { id: '3', label: 'Device Gamma', description: 'Ubuntu 22.04 • Online' },
  { id: '4', label: 'Device Delta', description: 'Windows 10 • Online' },
];

export const WithActions: Story = {
  render: (args) => ({
    components: { ActionsToolbar },
    setup() {
      const selected = ref<SelectedItem[]>(selectedItemsWithLabels);
      const onAction = (action: Action) => {
        console.log('Action:', action);
      };
      const onDeselect = (item: SelectedItem) => {
        selected.value = selected.value.filter((s) => s.id !== item.id);
      };
      const onClose = () => {
        selected.value = [];
      };
      return {
        args,
        selected,
        actionsWithFour,
        onAction,
        onDeselect,
        onClose,
      };
    },
    template: `
      <div class="border border-neutral-default_solid rounded-md p-4">
        <ActionsToolbar
          :actions="actionsWithFour"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    `,
  }),
  args: {},
};

export const OverflowActions: Story = {
  render: (args) => ({
    components: { ActionsToolbar },
    setup() {
      const selected = ref<SelectedItem[]>([
        { id: '1', label: 'Item One', description: 'First selected' },
        { id: '2', label: 'Item Two', description: 'Second selected' },
      ]);
      const onAction = (action: Action) => {
        console.log('Action:', action);
      };
      const onDeselect = (item: SelectedItem) => {
        selected.value = selected.value.filter((s) => s.id !== item.id);
      };
      const onClose = () => {
        selected.value = [];
      };
      return {
        args,
        selected,
        overflowActions,
        onAction,
        onDeselect,
        onClose,
      };
    },
    template: `
      <div class="border border-neutral-default_solid rounded-md p-4">
        <ActionsToolbar
          :actions="overflowActions"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    `,
  }),
  args: {},
};

export const NoSelectedItems: Story = {
  render: (args) => ({
    components: { ActionsToolbar },
    setup() {
      const selected = ref<SelectedItem[]>([]);
      const onAction = (action: Action) => {
        console.log('Action:', action);
      };
      const onDeselect = (item: SelectedItem) => {
        selected.value = selected.value.filter((s) => s.id !== item.id);
      };
      const onClose = () => {
        selected.value = [];
      };
      return {
        args,
        selected,
        actionsWithFour,
        onAction,
        onDeselect,
        onClose,
      };
    },
    template: `
      <div class="border border-neutral-default_solid rounded-md p-4">
        <p class="text-body-md text-neutral-subtle mb-2">Toolbar is hidden when selectedItems is empty.</p>
        <ActionsToolbar
          :actions="actionsWithFour"
          :selectedItems="selected"
          @action="onAction"
          @deselect="onDeselect"
          @close="onClose"
        />
      </div>
    `,
  }),
  args: {},
};
