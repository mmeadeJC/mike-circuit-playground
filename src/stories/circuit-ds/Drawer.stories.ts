import type { Meta, StoryObj } from '@storybook/vue3';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import { ref } from 'vue';

const meta: Meta<typeof Drawer> = {
  title: 'Circuit DS/Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p>Drawer content goes here.</p>
        </Drawer>
      </div>
    `,
  }),
  args: { header: 'Drawer', position: 'right' },
};
