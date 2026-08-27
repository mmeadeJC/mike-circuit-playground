import type { Meta, StoryObj } from '@storybook/vue3';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
import { ComputerDesktopIcon, policyHeaderSubtitle } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof Divider> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Divider",
  component: Divider,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const HeaderSubtitleDivider: Story = {
  name: 'Header subtitle divider',
  render: () => ({
    components: { PvDivider: Divider, PvTag: Tag, ComputerDesktopIcon },
    setup() {
      return { policyHeaderSubtitle };
    },
    template: `
      <div class="flex items-center gap-sm">
        <PvTag value="Device" severity="accent-purple">
          <template #icon>
            <ComputerDesktopIcon class="w-3.5 h-3.5" />
          </template>
        </PvTag>
        <PvDivider layout="vertical" />
        <span class="text-body-md text-neutral-subtle">{{ policyHeaderSubtitle }}</span>
      </div>
    `,
  }),
};
