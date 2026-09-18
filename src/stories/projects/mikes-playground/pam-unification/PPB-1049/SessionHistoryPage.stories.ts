import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { linkTo } from '@storybook/addon-links';
import { markRaw, defineComponent } from 'vue';
import { AppNavigation, PageHeader } from '@jumpcloud/circuit/components';
import { FilmIcon } from '@heroicons/vue/24/outline';
import AdminTopBar from '@/components/AdminTopBar.vue';
import {
  pamUnificationMenuItems,
  pamUnificationProfileMenuItems,
} from '../pamUnificationNavData';
import SessionHistoryPage from './SessionHistoryPage.vue';

const storyBase = "Projects/Mike's Playground/PAM Unification/PPB-1049";

const SessionHistoryPageStory = defineComponent({
  name: 'SessionHistoryPageStory',
  components: {
    AppNavigation,
    PageHeader,
    AdminTopBar,
    SessionHistoryPage,
  },
  setup() {
    const pageIcon = markRaw(FilmIcon);
    const goBackToDashboard = linkTo(`${storyBase}/Dashboard`, 'Default');
    return {
      menuItems: pamUnificationMenuItems,
      profileMenuItems: pamUnificationProfileMenuItems,
      pageIcon,
      goBackToDashboard,
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
        <AdminTopBar show-back-button back-button-label="Back" @back="goBackToDashboard" />
        <PageHeader title="Session History" :icon="pageIcon" />
        <SessionHistoryPage />
      </div>
    </div>
  `,
});

const meta: Meta<typeof SessionHistoryPageStory> = {
  title: "Projects/Mike's Playground/PAM Unification/PPB-1049/Session History",
  component: SessionHistoryPageStory,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SessionHistoryPageStory>;

export const Default: Story = {};
