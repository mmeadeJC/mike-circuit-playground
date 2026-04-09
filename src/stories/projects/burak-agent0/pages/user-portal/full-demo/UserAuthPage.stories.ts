import type { Meta, StoryObj } from '@storybook/vue3';
import UserAuthPage from './UserAuthPage.vue';

const meta: Meta<typeof UserAuthPage> = {
  title: 'AI Gateway - Burak/User Portal/Full Demo',
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
  name: 'User Auth Page',
  render: args => ({
    components: { UserAuthPage },
    setup() {
      return { args };
    },
    template:
      '<UserAuthPage v-bind="args" @authorize="() => {}" @logout="() => {}" />',
  }),
};
