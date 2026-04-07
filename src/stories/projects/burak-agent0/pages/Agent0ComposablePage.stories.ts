import type { Meta, StoryObj } from '@storybook/vue3';
import Agent0ComposablePage from './Agent0ComposablePage.vue';

const meta: Meta<typeof Agent0ComposablePage> = {
  title: 'Projects/Burak - AI Connector/Full Demo',
  component: Agent0ComposablePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ComposablePage>;

export const Alt01: Story = {
  name: 'ALT 01',
};
