import type { Meta, StoryObj } from '@storybook/vue3';
import UserTopBar from '@/components/UserTopBar.vue';

const meta: Meta<typeof UserTopBar> = {
  title: 'Circuit DS/Custom Components/Top bar/UserTopBar',
  component: UserTopBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    adminPortalHref: { control: 'text', description: 'URL for Launch Admin Portal' },
    learnMoreHref: { control: 'text', description: 'URL for Learn more' },
    adminPortalLabel: { control: 'text', description: 'Label for admin portal link' },
    learnMoreLabel: { control: 'text', description: 'Label for learn-more link' },
  },
};

export default meta;

type Story = StoryObj<typeof UserTopBar>;

export const Default: Story = {};
