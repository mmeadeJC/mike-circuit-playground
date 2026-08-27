import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { PageSaveBar } from '@jumpcloud/circuit/components';
const meta: Meta<typeof PageSaveBar> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Page Save Bar",
  component: PageSaveBar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PageSaveBar>;

export const UnsavedChanges: Story = {
  name: 'Unsaved changes',
  render: () => ({
    components: { PageSaveBar },
    setup() {
      const isSaving = ref(false);
      const showSavedConfirmation = ref(false);

      async function handleSave() {
        isSaving.value = true;
        await new Promise((resolve) => setTimeout(resolve, 600));
        isSaving.value = false;
        showSavedConfirmation.value = true;
      }

      function handleDiscard() {
        showSavedConfirmation.value = false;
      }

      return {
        isSaving,
        showSavedConfirmation,
        handleSave,
        handleDiscard,
      };
    },
    template: `
      <div class="relative h-48 bg-neutral-surface">
        <PageSaveBar
          :visible="true"
          :saving="isSaving"
          :saved="showSavedConfirmation"
          message="You have unsaved changes"
          saveLabel="Save Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />
      </div>
    `,
  }),
};

export const SavedConfirmation: Story = {
  name: 'Saved confirmation',
  render: () => ({
    components: { PageSaveBar },
    template: `
      <div class="relative h-48 bg-neutral-surface">
        <PageSaveBar
          :visible="true"
          :saved="true"
          message="You have unsaved changes"
          saveLabel="Save Policy"
          discardLabel="Cancel"
        />
      </div>
    `,
  }),
};
