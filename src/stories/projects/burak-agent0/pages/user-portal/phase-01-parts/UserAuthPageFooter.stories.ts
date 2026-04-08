import type { Meta, StoryObj } from '@storybook/vue3';
import UserAuthPageFooter from '../../../features/user-portal/phase-01-parts/UserAuthPageFooter.vue';

const meta: Meta<typeof UserAuthPageFooter> = {
  title: 'AI Gateway - Burak/User Portal/Phase 01 Parts',
  component: UserAuthPageFooter,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
};

export default meta;

type Story = StoryObj<typeof UserAuthPageFooter>;

export const Default: Story = {
  name: 'Auth page footer',
  render: args => ({
    components: { UserAuthPageFooter },
    setup() {
      return { args };
    },
    template:
      '<div class="bg-neutral-surface p-lg"><div class="mx-auto max-w-3xl"><UserAuthPageFooter v-bind="args" @authorize="() => {}" /></div></div>',
  }),
};
