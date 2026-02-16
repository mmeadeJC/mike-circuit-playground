import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';

const DeviceDetailPage = defineComponent({
  name: 'DeviceDetailPage',
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-semibold mb-4">Device Detail</h1>
      <p class="text-gray-500">This is an empty canvas for experimenting with the single device detail page layout.</p>
    </div>
  `,
});

const meta: Meta<typeof DeviceDetailPage> = {
  title: 'Projects/Asset Management/Pages/Device Detail',
  component: DeviceDetailPage,
};

export default meta;

type Story = StoryObj<typeof DeviceDetailPage>;

export const Default: Story = {};
