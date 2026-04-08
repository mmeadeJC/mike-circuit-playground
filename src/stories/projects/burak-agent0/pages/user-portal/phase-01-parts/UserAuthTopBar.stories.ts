import type { Meta, StoryObj } from '@storybook/vue3';
import UserAuthTopBar from '../../../features/user-portal/phase-01-parts/UserAuthTopBar.vue';

const meta: Meta<typeof UserAuthTopBar> = {
  title: 'AI Gateway - Burak/User Portal/Phase 01 Parts',
  component: UserAuthTopBar,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof UserAuthTopBar>;

export const UserAuthTopBarStory: Story = {
  name: 'User auth top bar',
  render: args => ({
    components: { UserAuthTopBar },
    setup() {
      return { args };
    },
    template:
      '<div class="bg-neutral-surface"><UserAuthTopBar v-bind="args" @logout="() => {}" /></div>',
  }),
};
