import type { Meta, StoryObj } from '@storybook/vue3';
import Message from 'primevue/message';

const meta: Meta<typeof Message> = {
  title: 'Circuit DS/Components/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warn', 'error', 'secondary', 'contrast'],
    },
    closable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Info: Story = {
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: '<Message v-bind="args">This is an informational message.</Message>',
  }),
  args: { severity: 'info' },
};

export const Success: Story = {
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: '<Message v-bind="args">Operation completed successfully.</Message>',
  }),
  args: { severity: 'success' },
};

export const Warning: Story = {
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: '<Message v-bind="args">Please review before proceeding.</Message>',
  }),
  args: { severity: 'warn' },
};

export const Error: Story = {
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: '<Message v-bind="args">An error occurred.</Message>',
  }),
  args: { severity: 'error' },
};
