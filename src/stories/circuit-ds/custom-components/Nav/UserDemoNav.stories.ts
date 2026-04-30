import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UserDemoNav from '@/components/Nav/UserDemoNav.vue';

const meta: Meta<typeof UserDemoNav> = {
  title: 'Circuit DS/Custom Components/Nav/UserDemoNav',
  component: UserDemoNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => ({
      template: '<div class="h-screen flex"><story /></div>',
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof UserDemoNav>;

export const Default: Story = {
  args: {
    activeItem: 'my assets',
    userName: 'Barış Ermut',
    userEmail: 'baris.ermut@company.com',
    userInitials: 'BE',
  },
};
