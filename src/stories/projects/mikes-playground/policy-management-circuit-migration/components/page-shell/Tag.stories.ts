import type { Meta, StoryObj } from '@storybook/vue3';
import Tag from 'primevue/tag';
import { ComputerDesktopIcon } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof Tag> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Tag",
  component: Tag,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const DeviceTag: Story = {
  name: 'Device policy tag',
  render: () => ({
    components: { PvTag: Tag, ComputerDesktopIcon },
    template: `
      <PvTag value="Device" severity="accent-purple">
        <template #icon>
          <ComputerDesktopIcon class="w-3.5 h-3.5" />
        </template>
      </PvTag>
    `,
  }),
};
