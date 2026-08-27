import type { Meta, StoryObj } from '@storybook/vue3';
import ComponentInventoryPage from './ComponentInventoryPage.vue';

const meta: Meta<typeof ComponentInventoryPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Component Inventory",
  component: ComponentInventoryPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<typeof ComponentInventoryPage> = {};
