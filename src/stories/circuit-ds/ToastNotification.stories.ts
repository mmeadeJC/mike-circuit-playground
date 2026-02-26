import type { Meta, StoryObj } from '@storybook/vue3';
import { ToastNotification } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const meta: Meta<typeof ToastNotification> = {
  title: 'Circuit DS/Components/ToastNotification',
  component: ToastNotification,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToastNotification>;

export const AllSeverities: Story = {
  render: () => ({
    components: { ToastNotification, Button },
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
      const showSecondary = () => {
        toast.add({ severity: 'secondary', summary: 'Secondary', detail: 'Secondary message', life: 3000 });
      };
      return { showSuccess, showInfo, showWarn, showError, showSecondary };
    },
    template: `
      <div>
        <ToastNotification />
        <div class="flex flex-wrap gap-sm">
          <Button label="Success" severity="success" @click="showSuccess" />
          <Button label="Info" severity="info" @click="showInfo" />
          <Button label="Warn" severity="warn" @click="showWarn" />
          <Button label="Error" severity="danger" @click="showError" />
          <Button label="Secondary" severity="secondary" @click="showSecondary" />
        </div>
      </div>
    `,
  }),
  args: {},
};
