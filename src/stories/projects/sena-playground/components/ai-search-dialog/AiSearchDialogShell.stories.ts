import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import AiSearchDialogShell from './AiSearchDialogShell.vue';

const meta: Meta<typeof AiSearchDialogShell> = {
  title: 'Projects/sena-playground/AI Search Dialog',
  component: AiSearchDialogShell,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AiSearchDialogShell>;

export const Default: Story = {
  name: 'Default',
  render: () => ({
    components: { AiSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" />
      </div>
    `,
  }),
};

/** Scope chips + Recent placeholder + static Suggestions + default footer. */
export const NoRecentSearches: Story = {
  name: 'No recent searches',
  render: () => ({
    components: { AiSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell
          v-model:visible="visible"
          :initial-has-recent-searches="false"
        />
      </div>
    `,
  }),
};

/** Opens with a query: Recent hidden, Result + Suggestions, scope labels show mock counts. */
export const Typing: Story = {
  name: 'Typing state',
  render: () => ({
    components: { AiSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" initial-query="Slack" />
      </div>
    `,
  }),
};

/** Typing with no mock matches (query is not "Slack"); empty Result copy + header AI Search outline button. */
export const TypingNoMatches: Story = {
  name: 'Typing, no matches',
  render: () => ({
    components: { AiSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell v-model:visible="visible" initial-query="support" />
      </div>
    `,
  }),
};

/** AI Result state with data showing table and AI mode footer. */
export const AiResultWithData: Story = {
  name: 'AI Result with Data',
  render: () => ({
    components: { AiSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell 
          v-model:visible="visible" 
          initial-query="users in engineering"
          :initial-ai-result-mode="true"
          :initial-has-ai-results="true"
        />
      </div>
    `,
  }),
};

/** AI Result state with no data showing empty message and AI mode footer. */
export const AiResultEmpty: Story = {
  name: 'AI Result Empty',
  render: () => ({
    components: { AiSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <AiSearchDialogShell 
          v-model:visible="visible" 
          initial-query="empty query"
          :initial-ai-result-mode="true"
          :initial-has-ai-results="false"
        />
      </div>
    `,
  }),
};
