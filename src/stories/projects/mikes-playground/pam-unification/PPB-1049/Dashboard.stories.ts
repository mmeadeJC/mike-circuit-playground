import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { linkTo } from '@storybook/addon-links';
import { markRaw, defineComponent } from 'vue';
import { AppNavigation, PageHeader } from '@jumpcloud/circuit/components';
import { HomeIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/outline';
import Button from 'primevue/button';
import AdminTopBar from '@/components/AdminTopBar.vue';
import {
  pamUnificationMenuItems,
  pamUnificationProfileMenuItems,
} from '../pamUnificationNavData';
import DashboardPage from './Dashboard.vue';

const storyBase = "Projects/Mike's Playground/PAM Unification/PPB-1049";

const DashboardPageStory = defineComponent({
  name: 'DashboardPageStory',
  components: {
    AppNavigation,
    PageHeader,
    AdminTopBar,
    DashboardPage,
    Button,
    HomeIcon,
    EllipsisHorizontalIcon,
  },
  setup() {
    const pageIcon = markRaw(HomeIcon);
    const goToJumpServers = linkTo(`${storyBase}/Jump Servers`, 'Default');
    const goToSessionHistory = linkTo(`${storyBase}/Session History`, 'Default');
    return {
      menuItems: pamUnificationMenuItems,
      profileMenuItems: pamUnificationProfileMenuItems,
      pageIcon,
      goToJumpServers,
      goToSessionHistory,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="security"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden">
        <AdminTopBar />
        <PageHeader title="Dashboard" :icon="pageIcon">
          <template #actions>
            <Button label="Export" severity="secondary" />
            <Button severity="secondary" aria-label="More actions">
              <template #icon="iconProps">
                <EllipsisHorizontalIcon :class="iconProps.class" />
              </template>
            </Button>
          </template>
        </PageHeader>
        <DashboardPage
          @view-all-jump-servers="goToJumpServers"
          @view-all-session-history="goToSessionHistory"
        />
      </div>
    </div>
  `,
});

const meta: Meta<typeof DashboardPageStory> = {
  title: "Projects/Mike's Playground/PAM Unification/PPB-1049/Dashboard",
  component: DashboardPageStory,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof DashboardPageStory>;

export const Default: Story = {};
