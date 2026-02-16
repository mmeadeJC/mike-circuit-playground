import type { Meta, StoryObj } from '@storybook/vue3';
import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
import { ref } from 'vue';

const meta: Meta<typeof TieredMenu> = {
  title: 'Circuit DS/Components/TieredMenu',
  component: TieredMenu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TieredMenu>;

const menuItems = [
  {
    label: 'File',
    items: [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Open', icon: 'pi pi-folder-open' },
      { separator: true },
      { label: 'Export', icon: 'pi pi-upload' },
    ],
  },
  {
    label: 'Edit',
    items: [
      { label: 'Undo', icon: 'pi pi-undo' },
      { label: 'Redo', icon: 'pi pi-refresh' },
    ],
  },
];

export const Inline: Story = {
  render: (args) => ({
    components: { TieredMenu },
    setup() {
      return { args, menuItems };
    },
    template: '<TieredMenu :model="menuItems" />',
  }),
};

export const Popup: Story = {
  render: (args) => ({
    components: { TieredMenu, Button },
    setup() {
      const menu = ref();
      const toggle = (event: Event) => menu.value.toggle(event);
      return { args, menuItems, menu, toggle };
    },
    template: `
      <div>
        <Button label="Show Menu" @click="toggle" />
        <TieredMenu ref="menu" :model="menuItems" popup />
      </div>
    `,
  }),
};
