import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { MessageNotification } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';

const meta: Meta<typeof MessageNotification> = {
  title: 'Circuit DS/Components/MessageNotification',
  component: MessageNotification,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MessageNotification>;

export const Success: Story = {
  args: {
    severity: 'success',
    detail: 'Success message',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    detail: 'Info message',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warn',
    detail: 'Warning message',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    detail: 'Error message',
  },
};

export const Secondary: Story = {
  args: {
    severity: 'secondary',
    detail: 'Secondary message',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Message Title',
    detail: 'Message detail content goes here.',
    severity: 'info',
  },
};

export const WithButton: Story = {
  render: (args) => ({
    components: { MessageNotification, Button },
    setup() {
      return { args };
    },
    template: `
      <MessageNotification severity="info" detail="This message includes an action button." v-bind="args">
        <template #button>
          <Button label="Action" size="small" variant="outlined" severity="secondary" />
        </template>
      </MessageNotification>
    `,
  }),
  args: {},
};

export const NonDismissible: Story = {
  args: {
    severity: 'info',
    detail: 'This message cannot be dismissed.',
    closable: false,
  },
};
