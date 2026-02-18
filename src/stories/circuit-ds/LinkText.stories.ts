import type { Meta, StoryObj } from '@storybook/vue3';
import { LinkText } from '@jumpcloud/circuit/components';

const meta: Meta<typeof LinkText> = {
  title: 'Circuit DS/Components/LinkText',
  component: LinkText,
  tags: ['autodocs'],
  argTypes: {
    target: { control: 'select', options: ['_self', '_blank', '_parent', '_top'] },
  },
};

export default meta;

type Story = StoryObj<typeof LinkText>;

export const Default: Story = {
  args: {
    label: 'Learn more',
    href: '#',
  },
};

export const ExternalLink: Story = {
  args: {
    label: 'Visit documentation',
    href: 'https://example.com',
    target: '_blank',
  },
};

export const CustomClass: Story = {
  args: {
    label: 'Custom styled link',
    href: '#',
    customClass: 'text-body-md',
  },
};
