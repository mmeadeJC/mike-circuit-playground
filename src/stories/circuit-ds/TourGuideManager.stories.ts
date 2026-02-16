import type { Meta, StoryObj } from '@storybook/vue3';
import { TourGuideManager } from '@jumpcloud/circuit/components';

const meta: Meta<typeof TourGuideManager> = {
  title: 'Circuit DS/Components/TourGuideManager',
  component: TourGuideManager,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TourGuideManager>;

export const Default: Story = {
  args: {},
};
