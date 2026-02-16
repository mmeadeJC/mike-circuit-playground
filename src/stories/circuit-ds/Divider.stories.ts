import type { Meta, StoryObj } from '@storybook/vue3';
import Divider from 'primevue/divider';

const meta: Meta<typeof Divider> = {
  title: 'Circuit DS/Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    type: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'top', 'bottom'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p>Content above</p>
        <Divider v-bind="args" />
        <p>Content below</p>
      </div>
    `,
  }),
  args: { layout: 'horizontal' },
};

export const Dashed: Story = {
  render: (args) => ({
    components: { Divider },
    setup() {
      return { args };
    },
    template: `
      <div>
        <p>Content above</p>
        <Divider v-bind="args" />
        <p>Content below</p>
      </div>
    `,
  }),
  args: { layout: 'horizontal', type: 'dashed' },
};
