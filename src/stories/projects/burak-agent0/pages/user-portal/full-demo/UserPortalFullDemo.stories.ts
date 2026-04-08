import type { Meta, StoryObj } from '@storybook/vue3';
import UserDemoNav from '@/components/Nav/UserDemoNav.vue';
import UserPortalTopBar from './UserPortalTopBar.vue';

const meta: Meta = {
  title: 'AI Connector - Burak/User Portal/Full Demo',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: 'Overview',
  render: () => ({
    components: { UserDemoNav, UserPortalTopBar },
    template: `
      <div class="flex h-screen overflow-hidden">
        <UserDemoNav active-item="ai connector" />
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden bg-neutral-surface">
          <UserPortalTopBar />
          <div class="flex-1 overflow-auto p-md">
            <p class="text-body-md text-neutral-base">
              User Portal — full demo (placeholder). Wire this story to a full page when the user-portal AI Connector experience is ready.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};
