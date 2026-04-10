import type { Meta, StoryObj } from '@storybook/vue3';
import UserDemoNav from '@/components/Nav/UserDemoNav.vue';
import UserTopBar from '@/components/UserTopBar.vue';

const meta: Meta = {
  title: 'AI Gateway - Burak/User Portal/Full Demo/Overview',
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
    components: { UserDemoNav, UserTopBar },
    template: `
      <div class="flex h-screen overflow-hidden">
        <UserDemoNav active-item="ai gateway" />
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden bg-neutral-surface">
          <UserTopBar />
          <div class="flex-1 overflow-auto p-md">
            <p class="text-body-md text-neutral-base">
              User Portal — full demo (placeholder). Wire this story to a full page when the user-portal AI Gateway experience is ready.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};
