import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent } from 'vue';
import PamAdminShell from './components/PamAdminShell.vue';
import SessionHistoryClustersPage from './SessionHistoryClustersPage.vue';

/** PPB-1493 — Session History shows which Jump Server (and cluster) served each session. */
const AdminSessionHistory = defineComponent({
  name: 'AdminSessionHistory',
  components: { PamAdminShell, SessionHistoryClustersPage },
  template: `
    <PamAdminShell active-primary-tab="session-history">
      <SessionHistoryClustersPage />
    </PamAdminShell>
  `,
});

const meta: Meta = {
  title: "Projects/Mike's Playground/PAM - JumpServers/Session History",
  component: AdminSessionHistory,
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default: StoryObj = { name: 'With Jump Server column' };
