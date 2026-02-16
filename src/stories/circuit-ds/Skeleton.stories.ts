import type { Meta, StoryObj } from '@storybook/vue3';
import Skeleton from 'primevue/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Circuit DS/Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    shape: {
      control: 'select',
      options: ['rectangle', 'circle'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Rectangle: Story = {
  args: { width: '100%', height: '2rem' },
};

export const Circle: Story = {
  args: { shape: 'circle', width: '4rem', height: '4rem' },
};

export const Card: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex flex-col gap-3" style="width: 300px;">
        <Skeleton width="100%" height="150px" />
        <Skeleton width="80%" height="1rem" />
        <Skeleton width="60%" height="1rem" />
      </div>
    `,
  }),
};
