import type { Meta, StoryObj } from '@storybook/vue3';
import UserAuthPage from './UserAuthPage.vue';

const meta: Meta<typeof UserAuthPage> = {
  title: 'AI Connector - Burak/User Portal/Full Demo/User Auth Page',
  component: UserAuthPage,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof UserAuthPage>;

export const Default: Story = {
  name: 'Overview',
  render: args => ({
    components: { UserAuthPage },
    setup() {
      return { args };
    },
    template: '<UserAuthPage v-bind="args" @authorize="() => {}" />',
  }),
};
