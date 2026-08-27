import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { PageHeader } from '@jumpcloud/circuit/components';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import {
  ComputerDesktopIcon,
  policyDetailTabs,
  policyHeaderSubtitle,
  policyShieldIcon,
} from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof PageHeader> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Page Header",
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const WithDeviceTag: Story = {
  name: 'With device tag',
  render: () => ({
    components: { PageHeader, PvTag: Tag, PvDivider: Divider, ComputerDesktopIcon },
    setup() {
      const activeTab = ref('details');
      return {
        activeTab,
        detailTabs: policyDetailTabs,
        shieldIcon: policyShieldIcon,
        policyHeaderSubtitle,
      };
    },
    template: `
      <div class="bg-neutral-surface">
        <PageHeader
          title="FileVault 2"
          :icon="shieldIcon"
          :tabs="detailTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag value="Device" severity="accent-purple">
                <template #icon>
                  <ComputerDesktopIcon class="w-3.5 h-3.5" />
                </template>
              </PvTag>
              <PvDivider layout="vertical" />
              <span class="text-body-md text-neutral-subtle">{{ policyHeaderSubtitle }}</span>
            </div>
          </template>
        </PageHeader>
      </div>
    `,
  }),
};
