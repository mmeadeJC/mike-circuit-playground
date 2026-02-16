import type { Meta, StoryObj } from '@storybook/vue3';
import Panel from 'primevue/panel';

const meta: Meta<typeof Panel> = {
  title: 'Circuit DS/Components/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    toggleable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args };
    },
    template: `
      <Panel v-bind="args">
        <p>Panel content goes here.</p>
      </Panel>
    `,
  }),
  args: { header: 'Panel Header' },
};

export const Toggleable: Story = {
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args };
    },
    template: `
      <Panel v-bind="args">
        <p>This panel can be collapsed.</p>
      </Panel>
    `,
  }),
  args: { header: 'Toggleable Panel', toggleable: true },
};
