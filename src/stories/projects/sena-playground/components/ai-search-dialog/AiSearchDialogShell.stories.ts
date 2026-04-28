import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import Button from 'primevue/button';
import AiSearchDialogShell from './AiSearchDialogShell.vue';

const meta: Meta<typeof AiSearchDialogShell> = {
  title: 'Projects/sena-playground/AI Search Dialog',
  component: AiSearchDialogShell,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof AiSearchDialogShell>;

export const Default: Story = {
  name: 'Default',
  render: () => ({
    components: { AiSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open AI search dialog" @click="visible = true" />
        <AiSearchDialogShell v-model:visible="visible" />
      </div>
    `,
  }),
};

/** Scope chips + Recent placeholder + static Suggestions + default footer. */
export const NoRecentSearches: Story = {
  name: 'No recent searches',
  render: () => ({
    components: { AiSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open (no recent searches)" @click="visible = true" />
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
    components: { AiSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open (typing: Slack)" @click="visible = true" />
        <AiSearchDialogShell v-model:visible="visible" initial-query="Slack" />
      </div>
    `,
  }),
};

/** Typing with no mock matches (query is not "Slack"); empty Result copy + header AI Search tag. */
export const TypingNoMatches: Story = {
  name: 'Typing, no matches',
  render: () => ({
    components: { AiSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open (typing: no Slack matches)" @click="visible = true" />
        <AiSearchDialogShell v-model:visible="visible" initial-query="support" />
      </div>
    `,
  }),
};

/** AI Result state with data showing table and AI mode footer. */
export const AiResultWithData: Story = {
  name: 'AI Result with Data',
  render: () => ({
    components: { AiSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open AI Result (with data)" @click="visible = true" />
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
    components: { AiSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open AI Result (empty)" @click="visible = true" />
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
