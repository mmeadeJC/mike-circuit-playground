import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Badge from 'primevue/badge';

const meta: Meta<typeof Badge> = {
  title: 'Circuit DS/Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => ({
    components: { Badge },
    template: `<Badge value="5" />`,
  }),
  args: {},
};

export const Severities: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-md">
        <Badge value="Primary" severity="primary" />
        <Badge value="Secondary" severity="secondary" />
        <Badge value="Success" severity="success" />
        <Badge value="Danger" severity="danger" />
        <Badge value="Warning" severity="warn" />
        <Badge value="Info" severity="info" />
      </div>
    `,
  }),
  args: {},
};

export const SmallSize: Story = {
  render: () => ({
    components: { Badge },
    template: `<Badge value="3" size="small" />`,
  }),
  args: {},
};
