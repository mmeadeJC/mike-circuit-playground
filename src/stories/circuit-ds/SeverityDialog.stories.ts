import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { SeverityDialog } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';

const meta: Meta<typeof SeverityDialog> = {
  title: 'Circuit DS/Components/SeverityDialog',
  component: SeverityDialog,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['sev1', 'sev2', 'sev3'] },
    visible: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof SeverityDialog>;

export const Sev1: Story = {
  render: (args) => ({
    components: { SeverityDialog, Button },
    setup() {
      const visible = ref(false);
      const handleAction = () => {
        console.log('Action confirmed');
        visible.value = false;
      };
      return { args, visible, handleAction };
    },
    template: `
      <div>
        <Button label="Open Sev1 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev1"
          dialogTitle="Confirm Action"
          dialogContent="This will **permanently** remove the resource."
          actionText="Delete"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    `,
  }),
  args: {},
};

export const Sev2: Story = {
  render: (args) => ({
    components: { SeverityDialog, Button },
    setup() {
      const visible = ref(false);
      const handleAction = () => {
        console.log('Action confirmed');
        visible.value = false;
      };
      return { args, visible, handleAction };
    },
    template: `
      <div>
        <Button label="Open Sev2 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev2"
          dialogTitle="Critical Action"
          messageTitle="Impact Warning"
          messageContent="Service impact may extend to other systems."
          :showMessageIcon="true"
          dialogContent="Please review the **service impact** before continuing."
          actionText="Proceed"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    `,
  }),
  args: {},
};

export const Sev3: Story = {
  render: (args) => ({
    components: { SeverityDialog, Button },
    setup() {
      const visible = ref(false);
      const handleAction = () => {
        console.log('Action confirmed');
        visible.value = false;
      };
      return { args, visible, handleAction };
    },
    template: `
      <div>
        <Button label="Open Sev3 Dialog" @click="visible = true" />
        <SeverityDialog
          v-model:visible="visible"
          variant="sev3"
          dialogTitle="Delete Resource"
          messageTitle="Irreversible Action"
          messageContent="This cannot be undone."
          :showMessageIcon="true"
          :confirmationValue="'DELETE'"
          confirmationText="To proceed, enter <value>."
          acknowledgementText="I understand this action is _irreversible_."
          actionText="Delete"
          cancelText="Cancel"
          @action="handleAction"
          @cancel="visible = false"
          v-bind="args"
        />
      </div>
    `,
  }),
  args: {},
};
