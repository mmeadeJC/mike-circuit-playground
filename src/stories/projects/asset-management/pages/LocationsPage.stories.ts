import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';

const LocationsPage = defineComponent({
  name: 'LocationsPage',
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-semibold mb-4">Locations</h1>
      <p class="text-gray-500">This is an empty canvas for experimenting with the location management page layout.</p>
    </div>
  `,
});

const meta: Meta<typeof LocationsPage> = {
  title: 'Projects/Asset Management/Pages/Locations',
  component: LocationsPage,
};

export default meta;

type Story = StoryObj<typeof LocationsPage>;

export const Default: Story = {};
