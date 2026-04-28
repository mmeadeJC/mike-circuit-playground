import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import Button from 'primevue/button';
import DefaultSearchDialogShell from './DefaultSearchDialogShell.vue';

const meta: Meta<typeof DefaultSearchDialogShell> = {
  title: 'Projects/sena-playground/Default Search Dialog',
  component: DefaultSearchDialogShell,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof DefaultSearchDialogShell>;

export const Default: Story = {
  name: 'Default',
  render: () => ({
    components: { DefaultSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open default search dialog" @click="visible = true" />
        <DefaultSearchDialogShell v-model:visible="visible" />
      </div>
    `,
  }),
};

/** Recent section lists mock searches; scope filter visible. */
export const NoRecentSearches: Story = {
  name: 'No recent searches',
  render: () => ({
    components: { DefaultSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open (empty recent)" @click="visible = true" />
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
    components: { DefaultSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open (typing: Slack)" @click="visible = true" />
        <DefaultSearchDialogShell v-model:visible="visible" initial-query="Slack" />
      </div>
    `,
  }),
};

/** Typing with no mock matches. */
export const TypingNoMatches: Story = {
  name: 'Typing, no matches',
  render: () => ({
    components: { DefaultSearchDialogShell, Button },
    setup() {
      const visible = ref(false);
      return { visible };
    },
    template: `
      <div class="flex min-h-[240px] w-full items-start p-md">
        <Button label="Open (typing: no matches)" @click="visible = true" />
        <DefaultSearchDialogShell v-model:visible="visible" initial-query="xyzabc" />
      </div>
    `,
  }),
};
