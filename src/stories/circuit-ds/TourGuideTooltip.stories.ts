import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { TourGuideTooltip } from '@jumpcloud/circuit/components';

const meta: Meta<typeof TourGuideTooltip> = {
  title: 'Circuit DS/Components/TourGuideTooltip',
  component: TourGuideTooltip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TourGuideTooltip>;

export const Default: Story = {
  args: {},
};
