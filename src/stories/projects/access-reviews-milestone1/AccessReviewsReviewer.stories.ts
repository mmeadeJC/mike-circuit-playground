import type { Meta, StoryObj } from '@storybook/vue3';
import AccessReviewsReviewerPage from './pages/AccessReviewsReviewerPage.vue';

const meta: Meta<typeof AccessReviewsReviewerPage> = {
  title: 'Projects/Access Reviews Milestone 1/Reviewer portal',
  component: AccessReviewsReviewerPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AccessReviewsReviewerPage>;

export const Default: Story = {};
