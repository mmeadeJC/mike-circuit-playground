import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent, ref } from 'vue';
import PamAdminShell from './components/PamAdminShell.vue';
import JumpServersClustersSection from './JumpServersClustersSection.vue';

/**
 * PPB-1493 — Jump Server Clusters (parent: PPB-110 PAM Jump Server High Availability).
 * Jump Servers tab with a SelectButton toggle (All Jump Servers | Clusters) directly under the primary tabs.
 */
const AdminJumpServers = defineComponent({
  name: 'AdminJumpServers',
  components: { PamAdminShell, JumpServersClustersSection },
  props: {
    initialView: { type: String, default: 'servers' },
    initialDetailId: { type: String, default: null },
    initialDialog: { type: String, default: null },
    dialogClusterId: { type: String, default: null },
    showAlerts: { type: Boolean, default: true },
  },
  setup() {
    // Detail pages move "back" into the top bar (AdminTopBar), so the shell needs to know when a detail is open.
    const detailOpen = ref(false);
    const section = ref<InstanceType<typeof JumpServersClustersSection> | null>(null);
    return { detailOpen, section };
  },
  template: `
    <PamAdminShell active-primary-tab="jump-servers" :show-back-button="detailOpen" :hide-header="detailOpen" back-button-label="Clusters" @back="section?.closeDetail()">
      <JumpServersClustersSection ref="section" v-bind="$props" @detail-change="detailOpen = $event" />
    </PamAdminShell>
  `,
});

const meta: Meta = {
  title: "Projects/Mike's Playground/PAM - JumpServers/Servers - Clusters",
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

const admin = (name: string, args: Record<string, unknown>): Story => ({
  name,
  render: () => ({
    components: { AdminJumpServers },
    setup: () => ({ args }),
    template: '<AdminJumpServers v-bind="args" />',
  }),
});

// Default: the toggle prototype — switch between All Jump Servers and Clusters, create / edit / delete clusters.
export const Default: Story = admin('Default', { initialView: 'servers' });
export const ClustersList = admin('Clusters list', { initialView: 'clusters' });
export const CreateCluster = admin('Create cluster', { initialView: 'clusters', initialDialog: 'create' });
export const EditClusterPrimaryFailover = admin('Edit cluster (Primary with Failover)', { initialView: 'clusters', initialDialog: 'edit', dialogClusterId: 'cl-2' });
export const ClusterDetail = admin('Cluster detail', { initialView: 'clusters', initialDetailId: 'cl-1' });
export const ClusterDetailUnavailable = admin('Cluster detail — no eligible Jump Servers', { initialView: 'clusters', initialDetailId: 'cl-2' });
export const DeleteCluster = admin('Delete cluster', { initialView: 'clusters', initialDialog: 'delete' });
export const DeleteBlockedByResources = admin('Delete blocked — resources associated', { initialView: 'clusters', initialDialog: 'delete-blocked', dialogClusterId: 'cl-1' });
