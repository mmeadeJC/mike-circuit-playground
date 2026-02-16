import type { Meta, StoryObj } from '@storybook/vue3';
import Button from 'primevue/button';

const meta: Meta = {
  title: 'Circuit DS/Components/Tooltip',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex gap-4">
        <Button label="Top" v-tooltip.top="'Tooltip on top'" />
        <Button label="Right" v-tooltip.right="'Tooltip on right'" />
        <Button label="Bottom" v-tooltip.bottom="'Tooltip on bottom'" />
        <Button label="Left" v-tooltip.left="'Tooltip on left'" />
      </div>
    `,
  }),
};
