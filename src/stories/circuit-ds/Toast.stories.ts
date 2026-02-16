import type { Meta, StoryObj } from '@storybook/vue3';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const meta: Meta<typeof Toast> = {
  title: 'Circuit DS/Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => ({
    components: { Toast, Button },
    setup() {
      const toast = useToast();
      const showSuccess = () => {
        toast.add({ severity: 'success', summary: 'Success', detail: 'Operation completed', life: 3000 });
      };
      const showInfo = () => {
        toast.add({ severity: 'info', summary: 'Info', detail: 'Informational message', life: 3000 });
      };
      const showWarn = () => {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Please review', life: 3000 });
      };
      const showError = () => {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong', life: 3000 });
      };
      return { showSuccess, showInfo, showWarn, showError };
    },
    template: `
      <div>
        <Toast />
        <div class="flex gap-2">
          <Button label="Success" severity="success" @click="showSuccess" />
          <Button label="Info" severity="info" @click="showInfo" />
          <Button label="Warn" severity="warn" @click="showWarn" />
          <Button label="Error" severity="danger" @click="showError" />
        </div>
      </div>
    `,
  }),
};
