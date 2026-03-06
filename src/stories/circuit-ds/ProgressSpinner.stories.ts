import type { Meta, StoryObj } from '@storybook/vue3';
import { ProgressSpinner } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ProgressSpinner> = {
  title: 'Circuit DS/Components/ProgressSpinner',
  component: ProgressSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: [16, 20, 24, 32, 40] },
    ariaLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressSpinner>;

export const Default: Story = {
  render: (args) => ({
    components: { ProgressSpinner },
    setup() {
      return { args };
    },
    template: `
      <ProgressSpinner v-bind="args" />
    `,
  }),
  args: { ariaLabel: 'Loading' },
};

export const Small: Story = {
  render: (args) => ({
    components: { ProgressSpinner },
    setup() {
      return { args };
    },
    template: `
      <ProgressSpinner size="16" ariaLabel="Loading" v-bind="args" />
    `,
  }),
  args: {},
};

export const Medium: Story = {
  render: (args) => ({
    components: { ProgressSpinner },
    setup() {
      return { args };
    },
    template: `
      <ProgressSpinner size="24" ariaLabel="Loading" v-bind="args" />
    `,
  }),
  args: {},
};

export const Large: Story = {
  render: (args) => ({
    components: { ProgressSpinner },
    setup() {
      return { args };
    },
    template: `
      <ProgressSpinner size="40" ariaLabel="Loading" v-bind="args" />
    `,
  }),
  args: {},
};

export const AllSizes: Story = {
  render: (args) => ({
    components: { ProgressSpinner },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center gap-8">
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner :size="16" ariaLabel="Loading 16px" />
          <span class="text-body-sm text-neutral-subtle">16</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner :size="20" ariaLabel="Loading 20px" />
          <span class="text-body-sm text-neutral-subtle">20</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner :size="24" ariaLabel="Loading 24px" />
          <span class="text-body-sm text-neutral-subtle">24</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner :size="32" ariaLabel="Loading 32px" />
          <span class="text-body-sm text-neutral-subtle">32</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner :size="40" ariaLabel="Loading 40px" />
          <span class="text-body-sm text-neutral-subtle">40</span>
        </div>
      </div>
    `,
  }),
  args: {},
};
