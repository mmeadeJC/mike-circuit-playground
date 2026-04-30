import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AdminDemoNav from '@/components/Nav/AdminDemoNav.vue';

const meta: Meta<typeof AdminDemoNav> = {
  title: 'Circuit DS/Custom Components/Nav/AdminDemoNav',
  component: AdminDemoNav,
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

type Story = StoryObj<typeof AdminDemoNav>;

export const Default: Story = {
  args: {
    activeItem: 'home',
    userName: 'Burak',
    userEmail: 'burak.basci+afc@jumpcloud.com',
    userInitials: 'B',
    collapsible: true,
    topNavToggle: true,
  },
};

export const Collapsible: Story = {
  args: {
    activeItem: 'home',
    userName: 'Burak',
    userEmail: 'burak.basci+afc@jumpcloud.com',
    userInitials: 'B',
    collapsible: true,
    topNavToggle: false,
  },
};
