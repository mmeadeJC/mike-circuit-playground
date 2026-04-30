import type { Meta, StoryObj } from '@storybook/vue3';
import EmptyStateContainer from './EmptyStateContainer.vue';

const meta: Meta<typeof EmptyStateContainer> = {
  title:
    'Projects/sena-playground/AI Search Dialog/Parts/Empty States/Empty State Container',
  component: EmptyStateContainer,
  parameters: {
    layout: 'padded',
  },
  args: {
    message: 'Custom empty state message.',
  },
};

export default meta;

type Story = StoryObj<typeof EmptyStateContainer>;

export const Default: Story = {
  name: 'Custom illustration slot',
  render: (args) => ({
    components: { EmptyStateContainer },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    `,
  }),
};

export const NarrowWidth: Story = {
  name: 'Narrow container (320px)',
  args: {
    message: 'Short message.',
  },
  render: (args) => ({
    components: { EmptyStateContainer },
    setup() {
      return { args };
    },
    template: `
      <div class="w-[320px] bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    `,
  }),
};

export const LongMessageWraps: Story = {
  name: 'Long message wraps',
  args: {
    message:
      'This is a longer status message so we can confirm wrapping and alignment inside the dashed container look correct at typical dialog widths.',
  },
  render: (args) => ({
    components: { EmptyStateContainer },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <EmptyStateContainer :message="args.message">
          <template #illustration>
            <div
              class="flex h-16 w-[100px] items-center justify-center rounded-md border border-dashed border-neutral-strong_solid bg-neutral-base text-body-sm text-neutral-muted"
            >
              Slot
            </div>
          </template>
        </EmptyStateContainer>
      </div>
    `,
  }),
};
