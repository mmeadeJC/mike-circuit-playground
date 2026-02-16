import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from 'primevue/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Circuit DS/Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    image: { control: 'text' },
    size: {
      control: 'select',
      options: ['normal', 'large', 'xlarge'],
    },
    shape: {
      control: 'select',
      options: ['square', 'circle'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithLabel: Story = {
  args: { label: 'JC', size: 'large', shape: 'circle' },
};

export const WithIcon: Story = {
  args: { icon: 'pi pi-user', size: 'large', shape: 'circle' },
};

export const Square: Story = {
  args: { label: 'AB', size: 'large', shape: 'square' },
};
