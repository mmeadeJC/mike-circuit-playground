import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';

const DeviceListPage = defineComponent({
  name: 'DeviceListPage',
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-semibold mb-4">Device List</h1>
      <p class="text-gray-500">This is an empty canvas for experimenting with the device list page layout.</p>
    </div>
  `,
});

const meta: Meta<typeof DeviceListPage> = {
  title: 'Projects/Asset Management/Pages/Device List',
  component: DeviceListPage,
};

export default meta;

type Story = StoryObj<typeof DeviceListPage>;

export const Default: Story = {};
