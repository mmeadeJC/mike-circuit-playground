import type { Meta, StoryObj } from '@storybook/vue3';
import SuggestionRow from './SuggestionRow.vue';

const meta: Meta<typeof SuggestionRow> = {
  title: 'Projects/sena-playground/AI Search Dialog/Parts/Suggestion Row',
  component: SuggestionRow,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SuggestionRow>;

function storyCanvas(inner: string) {
  return `
    <div class="flex min-h-[160px] justify-center bg-neutral-base px-md py-xl">
      <div class="w-full max-w-[600px]">
        ${inner}
      </div>
    </div>
  `;
}

export const Default: Story = {
  name: 'Default',
  render: (args) => ({
    components: { SuggestionRow },
    setup() {
      return { args };
    },
    template: storyCanvas(`<SuggestionRow v-bind="args" />`),
  }),
  args: {
    label: 'Search for users named Alex',
  },
};

export const WithSearchHighlight: Story = {
  name: 'Search highlight (typing)',
  render: (args) => ({
    components: { SuggestionRow },
    setup() {
      return { args };
    },
    template: storyCanvas(`<SuggestionRow v-bind="args" />`),
  }),
  args: {
    label: 'Show users who can access Slack',
    searchQuery: 'Slack',
  },
};

export const Hover: Story = {
  name: 'Hover (bg-state-hover)',
  parameters: {
    docs: {
      description: {
        story:
          'Move the pointer over the row. Background uses `hover:bg-state-hover` only.',
      },
    },
  },
  render: (args) => ({
    components: { SuggestionRow },
    setup() {
      return { args };
    },
    template: `
      <div class="flex min-h-[160px] justify-center bg-neutral-base px-md py-xl">
        <div class="w-full max-w-[600px] rounded-md bg-neutral-surface p-sm">
          <SuggestionRow v-bind="args" />
        </div>
      </div>
    `,
  }),
  args: {
    label: 'Search for users named Alex',
  },
};
