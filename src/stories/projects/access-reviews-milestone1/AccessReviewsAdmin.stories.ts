import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AccessReviewsAdminPage from './pages/AccessReviewsAdminPage.vue';

const meta: Meta<typeof AccessReviewsAdminPage> = {
  title: 'Projects/Access Reviews Milestone 1/Admin',
  component: AccessReviewsAdminPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AccessReviewsAdminPage>;

export const Default: Story = {};
