import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AccessRestrictedPage from './AccessRestrictedPage.vue';
import UserAuthPage from './UserAuthPage.vue';

const meta: Meta<typeof UserAuthPage> = {
  title: 'AI Gateway - Burak/User Portal/Full Demo/User Auth',
  component: UserAuthPage,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof UserAuthPage>;
type AccessRestrictedStory = StoryObj<typeof AccessRestrictedPage>;

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

export const AccessRestricted: AccessRestrictedStory = {
  name: 'Access restricted',
  render: args => ({
    components: { AccessRestrictedPage },
    setup() {
      return { args };
    },
    template: '<AccessRestrictedPage v-bind="args" @logout="() => {}" />',
  }),
};
