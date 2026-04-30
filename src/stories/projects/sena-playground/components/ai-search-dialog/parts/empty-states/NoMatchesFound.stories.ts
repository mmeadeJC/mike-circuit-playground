import type { Meta, StoryObj } from '@storybook/vue3';
import NoMatchesFound from './NoMatchesFound.vue';

const meta: Meta<typeof NoMatchesFound> = {
  title:
    'Projects/sena-playground/AI Search Dialog/Parts/Empty States/No Matches Found',
  component: NoMatchesFound,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof NoMatchesFound>;

export const AiSearchDialogCopy: Story = {
  name: 'Try AI search for broader results',
  render: () => ({
    components: { NoMatchesFound },
    template: `
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <NoMatchesFound />
      </div>
    `,
  }),
};

export const ShortCopy: Story = {
  name: 'No matches found. (short)',
  render: () => ({
    components: { NoMatchesFound },
    template: `
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <NoMatchesFound message="No matches found." />
      </div>
    `,
  }),
};

export const NarrowContainer: Story = {
  name: 'Narrow panel (320px)',
  render: () => ({
    components: { NoMatchesFound },
    template: `
      <div class="w-[320px] bg-neutral-surface p-4">
        <NoMatchesFound />
      </div>
    `,
  }),
};
