import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent, ref } from 'vue';
import Button from 'primevue/button';
import ServerDeleteConfirmDialog from './ServerDeleteConfirmDialog.vue';

const meta: Meta<typeof ServerDeleteConfirmDialog> = {
  title: 'AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Delete server confirmation',
  component: ServerDeleteConfirmDialog,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ServerDeleteConfirmDialog>;

export const Default: Story = {
  name: 'Dialog (banner + details)',
  render: () =>
    defineComponent({
      components: { ServerDeleteConfirmDialog, Button },
      setup() {
        const visible = ref(false);
        return { visible };
      },
      template: `
        <div class="flex flex-col items-center gap-md p-lg">
          <Button label="Open delete confirmation" @click="visible = true" />
          <ServerDeleteConfirmDialog
            v-model:visible="visible"
            server-name="GitHub"
            @confirm="visible = false"
            @cancel="visible = false"
          />
        </div>
      `,
    }),
};
