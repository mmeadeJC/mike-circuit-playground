import type { Meta, StoryObj } from '@storybook/vue3';
import UserDemoNav from '@/components/Nav/UserDemoNav.vue';

const meta: Meta = {
  title: 'AI Connector - Burak/User Portal/Phase 01 Parts',
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
    components: { UserDemoNav },
    template: `
      <div class="flex h-screen overflow-hidden">
        <UserDemoNav active-item="ai connector" />
        <div class="flex-1 flex flex-col min-w-0 overflow-auto p-md bg-neutral-surface">
          <p class="text-body-md text-neutral-base">
            User Portal — Phase 01 parts (placeholder). Replace this canvas with real flows when ready.
          </p>
        </div>
      </div>
    `,
  }),
};
