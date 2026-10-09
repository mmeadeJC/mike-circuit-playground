import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent } from 'vue';
import PamAdminShell from './components/PamAdminShell.vue';
import ResourceAssociationPage from './ResourceAssociationPage.vue';

/** PPB-1493 — clusters appear in the same Jump Server dropdown used today, tagged "Cluster". */
const AdminResource = defineComponent({
  name: 'AdminResource',
  components: { PamAdminShell, ResourceAssociationPage },
  props: {
    savedValue: { type: String, default: 'js-11' },
    initialValue: { type: String, default: undefined },
    openDropdown: { type: Boolean, default: false },
  },
  template: `
    <PamAdminShell active-primary-tab="resources">
      <ResourceAssociationPage v-bind="$props" />
    </PamAdminShell>
  `,
});

const meta: Meta = {
  title: "Projects/Mike's Playground/PAM - JumpServers/Resource Association",
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

const page = (name: string, args: Record<string, unknown>): Story => ({
  name,
  render: () => ({ components: { AdminResource }, setup: () => ({ args }), template: '<AdminResource v-bind="args" />' }),
});

export const Default = page('Single Jump Server (today)', {});
export const DropdownWithClusters = page('Dropdown with clusters', { openDropdown: true });
export const SwitchToCluster = page('Switch to a cluster', { initialValue: 'cl-1' });
