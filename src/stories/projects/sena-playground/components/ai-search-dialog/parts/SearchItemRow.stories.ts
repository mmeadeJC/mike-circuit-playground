import type { Meta, StoryObj } from '@storybook/vue3';
import { ArrowTopRightOnSquareIcon, UserIcon } from '@heroicons/vue/24/outline';
import SearchItemRow from './SearchItemRow.vue';

const meta: Meta<typeof SearchItemRow> = {
  title: 'Projects/sena-playground/AI Search Dialog/Parts/Search Item Row',
  component: SearchItemRow,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SearchItemRow>;

function storyCanvas(inner: string) {
  return `
    <div class="flex min-h-[200px] justify-center bg-neutral-base px-md py-xl">
      <div class="w-full max-w-[600px]">
        ${inner}
      </div>
    </div>
  `;
}

const storyArgs = {
  title: 'Show devices…',
  href: '#',
  subtitle: 'AI Result',
  timestamp: '5 minutes ago',
};

export const RecentVariant: Story = {
  name: 'Recent variant (timestamp)',
  render: (args) => ({
    components: { SearchItemRow },
    setup() {
      return { args };
    },
    template: storyCanvas(`<SearchItemRow v-bind="args" variant="recent" />`),
  }),
  args: { ...storyArgs },
};

export const CustomLeadingIcon: Story = {
  name: 'Custom leading icon',
  render: (args) => ({
    components: { SearchItemRow, UserIcon },
    setup() {
      return { args };
    },
    template: storyCanvas(`
      <SearchItemRow v-bind="args" variant="recent">
        <template #icon>
          <UserIcon class="size-4 shrink-0 text-neutral-subtle" aria-hidden="true" />
        </template>
      </SearchItemRow>
    `),
  }),
  args: { ...storyArgs, title: 'Show users matching…' },
};

export const ResultVariant: Story = {
  name: 'Result variant (external link)',
  render: (args) => ({
    components: { SearchItemRow, ArrowTopRightOnSquareIcon },
    setup() {
      return { args };
    },
    template: storyCanvas(`
      <SearchItemRow v-bind="args" variant="result" search-query="device">
        <template #right>
          <div class="flex h-auto w-auto shrink-0 items-center justify-center">
            <ArrowTopRightOnSquareIcon class="size-4 text-icon-neutral-base" aria-hidden="true" />
          </div>
        </template>
      </SearchItemRow>
    `),
  }),
  args: {
    title: 'Configure Slack app for your org',
    href: '#',
    subtitle: 'App',
  },
};

export const SearchHighlighting: Story = {
  name: 'Search highlighting',
  render: (args) => ({
    components: { SearchItemRow },
    setup() {
      return { args };
    },
    template: storyCanvas(`<SearchItemRow v-bind="args" variant="recent" />`),
  }),
  args: {
    title: 'Slack notification settings and SSO for Engineering',
    href: '#',
    subtitle: 'AI Result',
    timestamp: '2 min ago',
    searchQuery: 'Slack',
  },
};

export const AiSearchResult: Story = {
  name: 'Long title (truncation)',
  render: (args) => ({
    components: { SearchItemRow },
    setup() {
      return { args };
    },
    template: storyCanvas(`<SearchItemRow v-bind="args" variant="recent" />`),
  }),
  args: {
    ...storyArgs,
    title:
      'Show all devices assigned to the Engineering org unit that have not checked in for more than fourteen days',
  },
};