import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from 'primevue/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Circuit DS/Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithLabel: Story = {
  args: { label: 'AB', shape: 'circle' },
};

export const WithImage: Story = {
  args: {
    image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    shape: 'circle',
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-end gap-md">
        <Avatar label="M" shape="circle" />
        <Avatar label="L" size="large" shape="circle" />
        <Avatar label="XL" size="xlarge" shape="circle" />
      </div>
    `,
  }),
  args: {},
};
