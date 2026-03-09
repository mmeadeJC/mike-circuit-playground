<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { AppNavigation, PageHeader, SeverityDialog } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';
import TopBar from '@/components/TopBar.vue';
import Agent0DashboardView from '../features/agent0/dashboard/Agent0DashboardView.vue';
import Agent0ServersView from '../features/agent0/servers/Agent0ServersView.vue';
import Agent0ProfilesView from '../features/agent0/profiles/Agent0ProfilesView.vue';
import Agent0ProfileDialog from '../features/agent0/profiles/Agent0ProfileDialog.vue';
import Agent0ActivityView from '../features/agent0/activity/Agent0ActivityView.vue';
import Agent0SettingsView from '../features/agent0/settings/Agent0SettingsView.vue';
import Agent0ProfileDetailView from '../features/agent0/profile-detail/Agent0ProfileDetailView.vue';
import {
  useActivityFilters,
  useChartThemeOptions,
  useResponsiveServerPanel,
  useProfileDetailBindings,
} from '../features/agent0/shared/composables';
import type { Server, Profile } from '../features/agent0/shared/types';
import {
  menuItems,
  profileMenuItems,
  serversData,
  profilesData,
  userGroupsData,
  profileUserGroups,
  recentActivity,
  topServerUsage,
  monthlyChartData,
  topUsers,
  llmProviders,
  defaultInstructions,
  authStyleOptions,
  mainTabs,
  profileDetailTabs,
  activityLogData,
  activityLogFilters,
  serverOptions,
} from '../features/agent0/shared/data';
import {
  serverColumns,
  getProfileColumns,
  activityLogColumns,
  profileServerColumns,
  profileUserGroupColumns,
} from '../features/agent0/shared/columns';

const currentView = ref<'main' | 'settings' | 'profile-detail'>('main');
const activeTab = ref('dashboard');
const profileDetailTab = ref('overview');

const { serversContainerRef, useInlinePanel } = useResponsiveServerPanel(1024);
const { monthlyChartOptions } = useChartThemeOptions();

const selectedServer = ref<Server | null>(null);
const selectedServers = ref<Server[]>([]);
const showServerDrawer = ref(false);
const serverForm = reactive({
  targetId: '',
  name: '',
  url: '',
  authStyle: 'OAuth',
  authConfig: '',
});

const showProfileDialog = ref(false);
const editingProfile = ref<Profile | null>(null);
const profileForm = reactive({
  profileId: '',
  label: '',
  serverIds: [] as string[],
});

const showDeleteDialog = ref(false);
const deleteTargetName = ref('');

const {
  activityFilters,
  filteredActivityData,
  clearActivityFilters,
  removeActivityFilter,
  handleActivitySearch,
} = useActivityFilters(activityLogData, activityLogFilters);

const selectedProvider = ref('bedrock');
const apiKey = ref('');
const apiKeyVisible = ref(false);
const modelId = ref('anthropic.claude-sonnet-4-5-20250929-v1:0');
const instructions = ref([...defaultInstructions]);

const {
  showBoundServersOnly,
  showBoundUserGroupsOnly,
  profileBoundServers,
  profileBoundUserGroups,
  profileServersTableData,
  profileUserGroupsTableData,
  selectedProfileServers,
  selectedProfileUserGroups,
} = useProfileDetailBindings(editingProfile, serversData, userGroupsData, profileUserGroups);

const pageTitle = computed(() => {
  if (currentView.value === 'profile-detail' && editingProfile.value) {
    return editingProfile.value.name;
  }
  return currentView.value === 'settings' ? 'Agent0 Settings' : 'Agent0';
});

const pageTabs = computed(() =>
  currentView.value === 'profile-detail' ? profileDetailTabs : mainTabs,
);

const currentActiveTab = computed(() =>
  currentView.value === 'profile-detail' ? profileDetailTab.value : activeTab.value,
);

const profileColumns = computed(() => getProfileColumns(serversData));

function handleTabChange(tab: string) {
  if (currentView.value === 'profile-detail') {
    profileDetailTab.value = tab;
    return;
  }
  activeTab.value = tab;
}

function openSettings() { currentView.value = 'settings'; }
function backToMain() { currentView.value = 'main'; }

function openServerDetail(server: Server) {
  selectedServer.value = server;
  serverForm.targetId = server.slug;
  serverForm.name = server.name;
  serverForm.url = server.url;
  serverForm.authStyle = server.connectionType;
  serverForm.authConfig = server.authConfig;
  showServerDrawer.value = true;
}

function backFromServerDetail() {
  showServerDrawer.value = false;
  selectedServer.value = null;
}

function handleServerRowClick(event: { data: Server }) {
  openServerDetail(event.data);
}

function openAddProfile() {
  editingProfile.value = null;
  profileForm.profileId = '';
  profileForm.label = '';
  profileForm.serverIds = [];
  showProfileDialog.value = true;
}

function openProfileDetail(profile: Profile) {
  editingProfile.value = profile;
  profileDetailTab.value = 'overview';
  currentView.value = 'profile-detail';
}

function handleProfileRowClick(event: { data: Profile }) {
  openProfileDetail(event.data);
}

function backFromProfileDetail() {
  currentView.value = 'main';
  activeTab.value = 'profiles';
  profileDetailTab.value = 'overview';
}

function saveProfile() { showProfileDialog.value = false; }

function openDeleteDialog(name: string) {
  deleteTargetName.value = name;
  showDeleteDialog.value = true;
}
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <AppNavigation
      :menuItems="menuItems"
      :profileMenuItems="profileMenuItems"
      activeItem="settings"
      :collapsible="true"
      :topNavToggle="true"
    />
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <TopBar v-if="currentView === 'main'" />
      <TopBar
        v-if="currentView === 'settings'"
        showBackButton
        backButtonLabel="Agent0"
        @back="backToMain"
      />
      <TopBar
        v-if="currentView === 'profile-detail'"
        showBackButton
        backButtonLabel="Profiles"
        @back="backFromProfileDetail"
      />

      <PageHeader
        :title="pageTitle"
        :tabs="pageTabs"
        :activeTab="currentActiveTab"
        @update:activeTab="handleTabChange"
      >
        <template #actions>
          <Button
            v-if="currentView === 'main'"
            label="Agent0 Settings"
            severity="secondary"
            @click="openSettings"
          >
            <template #icon="iconProps">
              <Cog6ToothIcon :class="iconProps.class" />
            </template>
          </Button>
        </template>
      </PageHeader>

      <template v-if="currentView === 'main'">
        <Agent0DashboardView
          v-if="activeTab === 'dashboard'"
          :topServerUsage="topServerUsage"
          :topUsers="topUsers"
          :recentActivity="recentActivity"
          :monthlyChartData="monthlyChartData"
          :monthlyChartOptions="monthlyChartOptions"
          @navigate-tab="activeTab = $event"
        />

        <div
          v-if="activeTab === 'servers'"
          ref="serversContainerRef"
          class="flex-1 flex min-h-0 overflow-hidden bg-neutral-surface"
        >
          <Agent0ServersView
            :serversData="serversData"
            :serverColumns="serverColumns"
            :selectedServers="selectedServers"
            :selectedServer="selectedServer"
            :showServerDrawer="showServerDrawer"
            :useInlinePanel="useInlinePanel"
            :authStyleOptions="authStyleOptions"
            :serverForm="serverForm"
            @update:selectedServers="selectedServers = $event"
            @update:showServerDrawer="showServerDrawer = $event"
            @row-click="handleServerRowClick"
            @close-detail="backFromServerDetail"
            @save-detail="backFromServerDetail"
          />
        </div>

        <Agent0ProfilesView
          v-if="activeTab === 'profiles'"
          :profilesData="profilesData"
          :profileColumns="profileColumns"
          @row-click="handleProfileRowClick"
          @add-profile="openAddProfile"
        />

        <Agent0ActivityView
          v-if="activeTab === 'activity'"
          :activityLogColumns="activityLogColumns"
          :filteredActivityData="filteredActivityData"
          :activityFilters="activityFilters"
          @search="handleActivitySearch"
          @clear-filters="clearActivityFilters"
          @remove-filter="removeActivityFilter"
        />
      </template>

      <Agent0SettingsView
        v-if="currentView === 'settings'"
        :selectedProvider="selectedProvider"
        :apiKey="apiKey"
        :apiKeyVisible="apiKeyVisible"
        :modelId="modelId"
        :instructions="instructions"
        :llmProviders="llmProviders"
        @update:selectedProvider="selectedProvider = $event"
        @update:apiKey="apiKey = $event"
        @update:apiKeyVisible="apiKeyVisible = $event"
        @update:modelId="modelId = $event"
        @update:instructions="instructions = $event"
      />

      <Agent0ProfileDetailView
        v-if="currentView === 'profile-detail' && editingProfile"
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
        @update:selectedProfileServers="selectedProfileServers = $event"
        @update:selectedProfileUserGroups="selectedProfileUserGroups = $event"
        @update:showBoundServersOnly="showBoundServersOnly = $event"
        @update:showBoundUserGroupsOnly="showBoundUserGroupsOnly = $event"
      />

      <Agent0ProfileDialog
        :visible="showProfileDialog"
        :editingProfile="editingProfile"
        :profileForm="profileForm"
        :serverOptions="serverOptions"
        :serversData="serversData"
        @update:visible="showProfileDialog = $event"
        @save="saveProfile"
      />

      <SeverityDialog
        v-model:visible="showDeleteDialog"
        dialogTitle="Delete Server"
        variant="sev2"
        messageTitle="This action cannot be undone"
        messageContent="Deleting this server will remove it from all profiles that reference it."
        :showMessageIcon="true"
        :dialogContent="'Are you sure you want to delete **' + deleteTargetName + '**? All associated connections and profile references will be removed.'"
        actionText="Delete"
        cancelText="Cancel"
        @action="showDeleteDialog = false"
        @cancel="showDeleteDialog = false"
      />
    </div>
  </div>
</template>
