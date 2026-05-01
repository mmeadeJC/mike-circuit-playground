import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import DefaultSearchDialogShell from './DefaultSearchDialogShell.vue';

const meta: Meta<typeof DefaultSearchDialogShell> = {
  title: 'Projects/sena-playground/Default Search Dialog',
  component: DefaultSearchDialogShell,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DefaultSearchDialogShell>;

export const Default: Story = {
  name: 'Default',
  render: () => ({
    components: { DefaultSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" />
      </div>
    `,
  }),
};

/** Recent section lists mock searches; scope filter visible. */
export const NoRecentSearches: Story = {
  name: 'No recent searches',
  render: () => ({
    components: { DefaultSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell
          v-model:visible="visible"
          :initial-has-recent-searches="false"
        />
      </div>
    `,
  }),
};

/** Opens with query matching mock directory rows. */
export const Typing: Story = {
  name: 'Typing state',
  render: () => ({
    components: { DefaultSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" initial-query="Slack" />
      </div>
    `,
  }),
};

/** Typing with no mock matches. */
export const TypingNoMatches: Story = {
  name: 'Typing, no matches',
  render: () => ({
    components: { DefaultSearchDialogShell },
    setup() {
      const visible = ref(true);
      return { visible };
    },
    template: `
      <div class="flex min-h-screen w-full items-start py-[10vh]">
        <DefaultSearchDialogShell v-model:visible="visible" initial-query="xyzabc" />
      </div>
    `,
  }),
};
