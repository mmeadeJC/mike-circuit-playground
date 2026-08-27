import type { Meta, StoryObj } from '@storybook/vue3';
import Button from 'primevue/button';
import { PlusIcon, TrashIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof Button> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Button",
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: 'Primary action',
  render: () => ({
    components: { PvButton: Button },
    template: `
      <PvButton label="Save Policy" />
    `,
  }),
};

export const SecondaryOutlined: Story = {
  name: 'Secondary outlined',
  render: () => ({
    components: { PvButton: Button },
    template: `
      <PvButton label="Add row" severity="secondary" variant="outlined" size="small" />
    `,
  }),
};

export const IconOnly: Story = {
  name: 'Icon only row actions',
  render: () => ({
    components: { PvButton: Button, PlusIcon, TrashIcon },
    template: `
      <div class="flex items-center gap-sm">
        <PvButton severity="secondary" variant="text" size="small" aria-label="Add row">
          <template #icon="iconProps">
            <PlusIcon :class="iconProps.class" />
          </template>
        </PvButton>
        <PvButton severity="secondary" variant="text" size="small" aria-label="Remove row">
          <template #icon="iconProps">
            <TrashIcon :class="iconProps.class" />
          </template>
        </PvButton>
      </div>
    `,
  }),
};
