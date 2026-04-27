import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import Button from 'primevue/button';
import AiSearchDialogShell from './AiSearchDialogShell.vue';

const meta: Meta<typeof AiSearchDialogShell> = {
  title: 'Projects/sena-playground/Components/AI Search Dialog',
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
