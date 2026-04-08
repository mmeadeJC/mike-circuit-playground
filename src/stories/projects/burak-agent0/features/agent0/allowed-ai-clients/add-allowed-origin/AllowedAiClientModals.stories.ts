import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';
import AddAllowedAiClientModal from './AddAllowedAiClientModal.vue';
import EditAllowedAiClientModal from './EditAllowedAiClientModal.vue';
import { allowedAiClientsData } from '../../shared/data';

/**
 * Single CSF keeps a stable sidebar group and predictable story IDs under
 * `.../allowed-ai-clients-add-allowed-origin--add|edit`.
 * If Storybook shows “couldn’t find story after HMR”, do a full reload — IDs change when `title` changes.
 */
const meta: Meta = {
  title: 'AI Gateway - Burak/Admin Portal/Phase 01 Parts/Allowed AI Clients/Add allowed origin',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type AddStory = StoryObj<typeof AddAllowedAiClientModal>;
type EditStory = StoryObj<typeof EditAllowedAiClientModal>;

export const Add: AddStory = {
  name: 'Add',
  render: () =>
    defineComponent({
      components: { AddAllowedAiClientModal },
      setup() {
        const visible = ref(true);
        return { visible };
      },
      template: `
        <div class="min-h-screen bg-neutral-surface p-md">
          <AddAllowedAiClientModal v-model:visible="visible" />
        </div>
      `,
    }),
};

export const Edit: EditStory = {
  name: 'Edit',
  render: () =>
    defineComponent({
      components: { EditAllowedAiClientModal },
      setup() {
        const visible = ref(true);
        return { visible, editingEntry: allowedAiClientsData[0] };
      },
      template: `
        <div class="min-h-screen bg-neutral-surface p-md">
          <EditAllowedAiClientModal v-model:visible="visible" :editing-entry="editingEntry" />
        </div>
      `,
    }),
};
