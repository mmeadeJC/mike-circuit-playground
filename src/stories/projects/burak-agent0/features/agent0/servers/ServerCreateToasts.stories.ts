import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent } from 'vue';
import { ToastNotification } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';
import {
  pushServerCreateFailedToast,
  pushServerCreatedToast,
  pushServerDeletedToast,
  pushServerSavedToast,
} from '../shared/serverCreateToasts';

const meta: Meta = {
  title: 'AI Gateway - Burak/Admin Portal/Phase 01 Parts/Server/Server create toasts',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

export const SuccessAndErrorDemo: Story = {
  name: 'Success and error messages',
  render: () =>
    defineComponent({
      components: { ToastNotification, Button },
      setup() {
        const toast = useToast();
        const showCreated = () => pushServerCreatedToast((m) => toast.add(m));
        const showSaved = () => pushServerSavedToast((m) => toast.add(m));
        const showDeleted = () => pushServerDeletedToast((m) => toast.add(m));
        const showError = () => pushServerCreateFailedToast((m) => toast.add(m));
        return { showCreated, showSaved, showDeleted, showError };
      },
      template: `
        <div class="flex min-h-screen flex-col items-center justify-center gap-md bg-neutral-surface p-lg">
          <ToastNotification />
          <div class="flex flex-wrap justify-center gap-sm">
            <Button label="Server created" severity="success" @click="showCreated" />
            <Button label="Server saved" severity="success" @click="showSaved" />
            <Button label="Server deleted" severity="success" @click="showDeleted" />
            <Button label="Create failed" severity="danger" @click="showError" />
          </div>
        </div>
      `,
    }),
};
