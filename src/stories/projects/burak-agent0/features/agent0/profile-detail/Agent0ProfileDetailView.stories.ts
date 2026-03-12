import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';
import Button from 'primevue/button';
import Agent0ProfileDetailView from './Agent0ProfileDetailView.vue';
import {
  profilesData,
  profileUserGroups,
  serversData,
  userGroupsData,
} from '../shared/data';
import { profileServerColumns, profileUserGroupColumns } from '../shared/columns';
import { useProfileDetailBindings } from '../shared/composables';

const meta: Meta<typeof Agent0ProfileDetailView> = {
  title: 'Projects/Burak - AI Connector/Parts/Profile',
  component: Agent0ProfileDetailView,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0ProfileDetailView>;

export const ProfileDetail: Story = {
  name: 'Profile Detail',
  render: () =>
    defineComponent({
      components: { Agent0ProfileDetailView, Button },
      setup() {
        const editingProfile = ref(profilesData[0]);
        const profileDetailTab = ref('overview');

        const {
          showBoundServersOnly,
          showBoundUserGroupsOnly,
          profileBoundServers,
          profileBoundUserGroups,
          profileServersTableData,
          profileUserGroupsTableData,
          selectedProfileServers,
          selectedProfileUserGroups,
          hasBindingChanges,
          isSaving,
          isSaved,
          handleSaveBindings,
          handleDiscardBindings,
        } = useProfileDetailBindings(editingProfile, serversData, userGroupsData, profileUserGroups);

        return {
          editingProfile,
          profileDetailTab,
          profileBoundServers,
          profileBoundUserGroups,
          profileServerColumns,
          profileUserGroupColumns,
          profileServersTableData,
          profileUserGroupsTableData,
          selectedProfileServers,
          selectedProfileUserGroups,
          showBoundServersOnly,
          showBoundUserGroupsOnly,
          serversData,
          userGroupsData,
          hasBindingChanges,
          isSaving,
          isSaved,
          handleSaveBindings,
          handleDiscardBindings,
        };
      },
      template: `
        <div class="flex flex-col h-screen">
          <div class="p-4 border-b border-neutral-default_solid bg-neutral-surface">
            <div class="flex gap-2">
              <Button label="Overview" severity="secondary" variant="outlined" @click="profileDetailTab = 'overview'" />
              <Button label="Servers" severity="secondary" variant="outlined" @click="profileDetailTab = 'profile-servers'" />
              <Button label="User Groups" severity="secondary" variant="outlined" @click="profileDetailTab = 'profile-user-groups'" />
            </div>
          </div>
          <Agent0ProfileDetailView
            :editingProfile="editingProfile"
            :profileDetailTab="profileDetailTab"
            :profileBoundServers="profileBoundServers"
            :profileBoundUserGroups="profileBoundUserGroups"
            :profileServerColumns="profileServerColumns"
            :profileUserGroupColumns="profileUserGroupColumns"
            :profileServersTableData="profileServersTableData"
            :profileUserGroupsTableData="profileUserGroupsTableData"
            :selectedProfileServers="selectedProfileServers"
            :selectedProfileUserGroups="selectedProfileUserGroups"
            :showBoundServersOnly="showBoundServersOnly"
            :showBoundUserGroupsOnly="showBoundUserGroupsOnly"
            :serversDataLength="serversData.length"
            :userGroupsDataLength="userGroupsData.length"
            :hasBindingChanges="hasBindingChanges"
            :isSaving="isSaving"
            :isSaved="isSaved"
            @update:selectedProfileServers="selectedProfileServers = $event"
            @update:selectedProfileUserGroups="selectedProfileUserGroups = $event"
            @update:showBoundServersOnly="showBoundServersOnly = $event"
            @update:showBoundUserGroupsOnly="showBoundUserGroupsOnly = $event"
            @saveBindings="handleSaveBindings"
            @discardBindings="handleDiscardBindings"
          />
        </div>
      `,
    }),
};
