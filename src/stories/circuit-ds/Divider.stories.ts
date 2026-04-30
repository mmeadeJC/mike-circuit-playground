import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Divider from 'primevue/divider';

const meta: Meta<typeof Divider> = {
  title: 'Circuit DS/Components/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p class="text-body-md text-neutral-base">Content above</p>
        <Divider v-bind="args" />
        <p class="text-body-md text-neutral-base">Content below</p>
      </div>
    `,
  }),
  args: { layout: 'horizontal' },
};

export const Vertical: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center gap-md" style="height: 80px;">
        <span class="text-body-md text-neutral-base">Left</span>
        <Divider v-bind="args" />
        <span class="text-body-md text-neutral-base">Right</span>
      </div>
    `,
  }),
  args: { layout: 'vertical' },
};

export const SmallSize: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p class="text-body-md text-neutral-base">Content above</p>
        <Divider v-bind="args" />
        <p class="text-body-md text-neutral-base">Content below</p>
      </div>
    `,
  }),
  args: { layout: 'horizontal', size: 'small' },
};

export const Dashed: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p class="text-body-md text-neutral-base">Content above</p>
        <Divider v-bind="args" />
        <p class="text-body-md text-neutral-base">Content below</p>
      </div>
    `,
  }),
  args: { layout: 'horizontal', type: 'dashed' },
};

export const Dotted: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p class="text-body-md text-neutral-base">Content above</p>
        <Divider v-bind="args" />
        <p class="text-body-md text-neutral-base">Content below</p>
      </div>
    `,
  }),
  args: { layout: 'horizontal', type: 'dotted' },
};
