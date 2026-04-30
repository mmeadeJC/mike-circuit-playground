import type { Meta, StoryObj } from '@storybook/vue3';
import NoAiResults from './NoAiResults.vue';

const meta: Meta<typeof NoAiResults> = {
  title:
    'Projects/sena-playground/AI Search Dialog/Parts/Empty States/No AI Results',
  component: NoAiResults,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof NoAiResults>;

export const Default: Story = {
  name: 'No AI result matches found.',
  render: () => ({
    components: { NoAiResults },
    template: `
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <NoAiResults />
      </div>
    `,
  }),
};

export const NarrowContainer: Story = {
  name: 'Narrow panel (320px)',
  render: () => ({
    components: { NoAiResults },
    template: `
      <div class="w-[320px] bg-neutral-surface p-4">
        <NoAiResults />
      </div>
    `,
  }),
};

export const DialogWidth: Story = {
  name: 'Dialog width (560px)',
  render: () => ({
    components: { NoAiResults },
    template: `
      <div class="w-[560px] bg-neutral-surface p-4">
        <NoAiResults />
      </div>
    `,
  }),
};
