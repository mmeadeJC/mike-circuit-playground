import type { Meta, StoryObj } from '@storybook/vue3';
import Agent0Alt02Page from './Agent0Alt02Page.vue';

const meta: Meta<typeof Agent0Alt02Page> = {
  title: 'AI Connector - Burak/Admin Portal/Full Demo',
  component: Agent0Alt02Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0Alt02Page>;

export const Alt02: Story = {
  name: 'ALT 02',
};
