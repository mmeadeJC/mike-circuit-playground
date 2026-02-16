import type { Meta, StoryObj } from '@storybook/vue3';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from 'vue';

const meta: Meta<typeof Dialog> = {
  title: 'Circuit DS/Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    modal: { control: 'boolean' },
    closable: { control: 'boolean' },
    draggable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog v-bind="args" v-model:visible="visible">
          <p>This is the dialog content. You can put any content here.</p>
        </Dialog>
      </div>
    `,
  }),
  args: {
    header: 'Sample Dialog',
    modal: true,
    closable: true,
    draggable: false,
  },
};
