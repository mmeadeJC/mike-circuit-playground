import type { Meta, StoryObj } from '@storybook/vue3';
import Button from 'primevue/button';

const meta: Meta = {
  title: 'Circuit DS/Components/Tooltip',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Top: Story = {
  render: () => ({
    components: { Button },
    template: `
      <Button label="Hover for tooltip" v-tooltip.top="'Tooltip text'" />
    `,
  }),
};

export const Right: Story = {
  render: () => ({
    components: { Button },
    template: `
      <Button label="Hover for tooltip" v-tooltip.right="'Tooltip on right'" />
    `,
  }),
};

export const Bottom: Story = {
  render: () => ({
    components: { Button },
    template: `
      <Button label="Hover for tooltip" v-tooltip.bottom="'Tooltip on bottom'" />
    `,
  }),
};

export const Left: Story = {
  render: () => ({
    components: { Button },
    template: `
      <Button label="Hover for tooltip" v-tooltip.left="'Tooltip on left'" />
    `,
  }),
};

export const OnButton: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex gap-4">
        <Button label="Success" severity="success" v-tooltip.top="'Success action'" />
        <Button label="Info" severity="info" v-tooltip.top="'Info message'" />
        <Button label="Danger" severity="danger" v-tooltip.top="'Destructive action'" />
      </div>
    `,
  }),
};
