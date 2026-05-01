import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Skeleton from 'primevue/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Circuit DS/Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Rectangle: Story = {
  render: () => ({
    components: { Skeleton },
    template: `<Skeleton />`,
  }),
  args: {},
};

export const Square: Story = {
  render: () => ({
    components: { Skeleton },
    template: `<Skeleton shape="rectangle" width="100px" height="100px" />`,
  }),
  args: {},
};

export const Circle: Story = {
  render: () => ({
    components: { Skeleton },
    template: `<Skeleton shape="circle" size="50px" />`,
  }),
  args: {},
};

export const CustomDimensions: Story = {
  render: () => ({
    components: { Skeleton },
    template: `<Skeleton width="200px" height="20px" />`,
  }),
  args: {},
};

export const ContentPlaceholder: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex flex-col gap-md max-w-[300px]">
        <Skeleton width="100%" height="120px" />
        <Skeleton width="80%" height="1rem" />
        <Skeleton width="60%" height="1rem" />
        <Skeleton width="90%" height="1rem" />
      </div>
    `,
  }),
  args: {},
};
