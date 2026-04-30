import type { Meta, StoryObj } from '@storybook/vue3';
import NoRecentSearches from './NoRecentSearches.vue';

const meta: Meta<typeof NoRecentSearches> = {
  title:
    'Projects/sena-playground/AI Search Dialog/Parts/Empty States/No Recent Searches',
  component: NoRecentSearches,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof NoRecentSearches>;

export const Default: Story = {
  name: 'No recent searches yet.',
  render: () => ({
    components: { NoRecentSearches },
    template: `
      <div class="w-full max-w-xl bg-neutral-surface p-4">
        <NoRecentSearches />
      </div>
    `,
  }),
};

export const NarrowContainer: Story = {
  name: 'Narrow panel (320px)',
  render: () => ({
    components: { NoRecentSearches },
    template: `
      <div class="w-[320px] bg-neutral-surface p-4">
        <NoRecentSearches />
      </div>
    `,
  }),
};

export const DialogWidth: Story = {
  name: 'Dialog width (560px)',
  render: () => ({
    components: { NoRecentSearches },
    template: `
      <div class="w-[560px] bg-neutral-surface p-4">
        <NoRecentSearches />
      </div>
    `,
  }),
};
