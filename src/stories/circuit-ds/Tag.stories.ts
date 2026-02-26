import type { Meta, StoryObj } from '@storybook/vue3';
import Tag from 'primevue/tag';

const meta: Meta<typeof Tag> = {
  title: 'Circuit DS/Components/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: { value: 'Primary', severity: 'primary' },
};

export const Secondary: Story = {
  args: { value: 'Secondary', severity: 'secondary' },
};

export const Success: Story = {
  args: { value: 'Success', severity: 'success' },
};

export const Danger: Story = {
  args: { value: 'Danger', severity: 'danger' },
};

export const Warning: Story = {
  args: { value: 'Warning', severity: 'warn' },
};

export const Info: Story = {
  args: { value: 'Info', severity: 'info' },
};

export const AllSeverities: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex flex-wrap gap-sm">
        <Tag value="Primary" severity="primary" />
        <Tag value="Secondary" severity="secondary" />
        <Tag value="Success" severity="success" />
        <Tag value="Danger" severity="danger" />
        <Tag value="Warning" severity="warn" />
        <Tag value="Info" severity="info" />
        <Tag value="Contrast" severity="contrast" />
      </div>
    `,
  }),
};
