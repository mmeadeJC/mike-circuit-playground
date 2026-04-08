import type { Meta, StoryObj } from '@storybook/vue3';
import UserAuthPageHeader from '../../../features/user-portal/phase-01-parts/UserAuthPageHeader.vue';

const meta: Meta<typeof UserAuthPageHeader> = {
  title: 'AI Gateway - Burak/User Portal/Phase 01 Parts',
  component: UserAuthPageHeader,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
  decorators: [
    story => ({
      components: { story },
      template:
        '<div class="min-h-screen bg-neutral-surface p-lg max-w-3xl"><story /></div>',
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof UserAuthPageHeader>;

export const UserAuthPageHeaderStory: Story = {
  name: 'User auth page header',
  args: {},
};
