<script setup lang="ts">
import { computed, markRaw, reactive, ref } from 'vue';
import { AppNavigation, PageHeader, SeverityDialog } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { Cog6ToothIcon, CpuChipIcon } from '@heroicons/vue/24/outline';
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
  useServerFilters,
  useProfileFilters,
  useChartThemeOptions,
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
  serverOptions,
  userGroupOptions,
  getProfileActivityLogData,
  getProfileRecentActivity,
  getProfileMonthlyChartData,
  getProfileTopServerUsage,
  profileDashboardStats,
} from '../features/agent0/shared/data';
import {
  getProfileColumns,
  activityLogColumns,
  profileServerColumns,
  profileUserGroupColumns,
} from '../features/agent0/shared/columns';

const cpuChipIcon = markRaw(CpuChipIcon);
const currentView = ref<'main' | 'settings' | 'profile-detail'>('main');
const activeTab = ref('dashboard');
const profileDetailTab = ref('overview');

const { monthlyChartOptions } = useChartThemeOptions();

const selectedServer = ref<Server | null>(null);
const selectedServers = ref<Server[]>([]);
const showServerDialog = ref(false);
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
  name: '',
  serverIds: [] as string[],
  userGroupIds: [] as string[],
});

const showDeleteDialog = ref(false);
const deleteTargetName = ref('');

const activityFilters = useActivityFilters(activityLogData);
const { filteredActivityData, handleActivitySearch } = activityFilters;

const serverFilters = useServerFilters(serversData);
const profileFilters = useProfileFilters(profilesData, serversData, userGroupsData, profileUserGroups);

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
  hasBindingChanges,
  isSaving: isBindingSaving,
  isSaved: isBindingSaved,
  handleSaveBindings,
  handleDiscardBindings,
} = useProfileDetailBindings(editingProfile, serversData, userGroupsData, profileUserGroups);

const currentProfileDashboardStats = computed(() =>
  editingProfile.value ? profileDashboardStats[editingProfile.value.profileId] ?? null : null,
);

const currentProfileTopServerUsage = computed(() =>
  editingProfile.value ? getProfileTopServerUsage(editingProfile.value.profileId) : [],
);

const currentProfileRecentActivity = computed(() =>
  editingProfile.value ? getProfileRecentActivity(editingProfile.value.profileId) : [],
);

const currentProfileMonthlyChartData = computed(() =>
  editingProfile.value ? getProfileMonthlyChartData(editingProfile.value.profileId) : { labels: [], datasets: [] },
);

const currentProfileActivityData = computed(() =>
  editingProfile.value ? getProfileActivityLogData(editingProfile.value.profileId) : [],
);

const pageTitle = computed(() => {
  if (currentView.value === 'profile-detail' && editingProfile.value) {
    return editingProfile.value.name;
  }
  return currentView.value === 'settings' ? 'AI Connector Settings' : 'AI Connector';
});

const pageTabs = computed(() =>
  currentView.value === 'profile-detail' ? profileDetailTabs : mainTabs,
);

const currentActiveTab = computed(() =>
  currentView.value === 'profile-detail' ? profileDetailTab.value : activeTab.value,
);

const profileColumns = computed(() => getProfileColumns(serversData, userGroupsData, profileUserGroups, profileDashboardStats));

function handleTabChange(tab: string) {
  if (currentView.value === 'profile-detail') {
    profileDetailTab.value = tab;
    return;
  }
  activeTab.value = tab;
}

function openSettings() { currentView.value = 'settings'; }
function backToMain() { currentView.value = 'main'; }

function openAddServer() {
  selectedServer.value = null;
  serverForm.targetId = '';
  serverForm.name = '';
  serverForm.url = '';
  serverForm.authStyle = 'OAuth';
  serverForm.authConfig = '';
  showServerDialog.value = true;
}

function openServerDetail(server: Server) {
  selectedServer.value = server;
  serverForm.targetId = server.slug;
  serverForm.name = server.name;
  serverForm.url = server.url;
  serverForm.authStyle = server.connectionType;
  serverForm.authConfig = server.authConfig;
  showServerDialog.value = true;
}

function backFromServerDetail() {
  showServerDialog.value = false;
  selectedServer.value = null;
}

function handleServerRowClick(event: { data: Server }) {
  openServerDetail(event.data);
}

function openAddProfile() {
  editingProfile.value = null;
  profileForm.name = '';
  profileForm.serverIds = [];
  profileForm.userGroupIds = [];
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
      activeItem="ai connector"
      :collapsible="true"
      :topNavToggle="true"
    />
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <TopBar v-if="currentView === 'main'" />
      <TopBar
        v-if="currentView === 'settings'"
        showBackButton
        backButtonLabel="AI Connector"
        @back="backToMain"
      />
      <TopBar
        v-if="currentView === 'profile-detail'"
        showBackButton
        backButtonLabel="AI Connector"
        @back="backFromProfileDetail"
      />

      <PageHeader
        :title="pageTitle"
        :icon="currentView === 'main' ? cpuChipIcon : undefined"
        :tabs="pageTabs"
        :activeTab="currentActiveTab"
        @update:activeTab="handleTabChange"
      >
        <template #actions>
          <Button
            v-if="currentView === 'main'"
            label="AI Connector Settings"
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

        <Agent0ServersView
          v-if="activeTab === 'servers'"
          :filteredServersData="serverFilters.filteredData.value"
          :selectedServers="selectedServers"
          :selectedServer="selectedServer"
          :showServerDialog="showServerDialog"
          :authStyleOptions="authStyleOptions"
          :serverForm="serverForm"
          @update:selectedServers="selectedServers = $event"
          @update:showServerDialog="showServerDialog = $event"
          @row-click="handleServerRowClick"
          @add-server="openAddServer"
          @close-detail="backFromServerDetail"
          @save-detail="backFromServerDetail"
          @search="serverFilters.handleSearch"
        />

        <Agent0ProfilesView
          v-if="activeTab === 'profiles'"
          :filteredProfilesData="profileFilters.filteredData.value"
          :profileColumns="profileColumns"
          :showFilterDialog="profileFilters.showFilterDialog.value"
          :draftServers="profileFilters.draftServers.value"
          :draftUserGroups="profileFilters.draftUserGroups.value"
          :serverOptions="profileFilters.serverOptions"
          :userGroupOptions="profileFilters.userGroupOptions"
          :activeFilterChips="profileFilters.activeFilterChips.value"
          :activeFilterCount="profileFilters.activeFilterCount.value"
          @row-click="handleProfileRowClick"
          @add-profile="openAddProfile"
          @search="profileFilters.handleSearch"
          @openFilterDialog="profileFilters.openFilterDialog"
          @applyFilters="profileFilters.applyFilters"
          @cancelFilterDialog="profileFilters.cancelFilterDialog"
          @clearDraftFilters="profileFilters.clearDraftFilters"
          @clearAllFilters="profileFilters.clearAllFilters"
          @removeFilterChip="profileFilters.removeFilterChip"
          @update:draftServers="profileFilters.draftServers.value = $event"
          @update:draftUserGroups="profileFilters.draftUserGroups.value = $event"
        />

        <Agent0ActivityView
          v-if="activeTab === 'activity'"
          :activityLogColumns="activityLogColumns"
          :filteredActivityData="filteredActivityData"
          :showFilterDialog="activityFilters.showFilterDialog.value"
          :draftUsers="activityFilters.draftUsers.value"
          :draftEventTypes="activityFilters.draftEventTypes.value"
          :draftServers="activityFilters.draftServers.value"
          :draftStatus="activityFilters.draftStatus.value"
          :userOptions="activityFilters.userOptions"
          :eventTypeOptions="activityFilters.eventTypeOptions"
          :serverOptions="activityFilters.serverOptions"
          :statusOptions="activityFilters.statusOptions"
          :activeFilterChips="activityFilters.activeFilterChips.value"
          :activeFilterCount="activityFilters.activeFilterCount.value"
          @search="handleActivitySearch"
          @openFilterDialog="activityFilters.openFilterDialog"
          @applyFilters="activityFilters.applyFilters"
          @cancelFilterDialog="activityFilters.cancelFilterDialog"
          @clearDraftFilters="activityFilters.clearDraftFilters"
          @clearAllFilters="activityFilters.clearAllFilters"
          @removeFilterChip="activityFilters.removeFilterChip"
          @update:draftUsers="activityFilters.draftUsers.value = $event"
          @update:draftEventTypes="activityFilters.draftEventTypes.value = $event"
          @update:draftServers="activityFilters.draftServers.value = $event"
          @update:draftStatus="activityFilters.draftStatus.value = $event"
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
        :key="editingProfile.profileId"
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
        :profileDashboardStats="currentProfileDashboardStats"
        :profileTopServerUsage="currentProfileTopServerUsage"
        :profileRecentActivity="currentProfileRecentActivity"
        :profileMonthlyChartData="currentProfileMonthlyChartData"
        :monthlyChartOptions="monthlyChartOptions"
        :profileActivityData="currentProfileActivityData"
        :hasBindingChanges="hasBindingChanges"
        :isSaving="isBindingSaving"
        :isSaved="isBindingSaved"
        @update:selectedProfileServers="selectedProfileServers = $event"
        @update:selectedProfileUserGroups="selectedProfileUserGroups = $event"
        @update:showBoundServersOnly="showBoundServersOnly = $event"
        @update:showBoundUserGroupsOnly="showBoundUserGroupsOnly = $event"
        @saveBindings="handleSaveBindings"
        @discardBindings="handleDiscardBindings"
      />

      <Agent0ProfileDialog
        :visible="showProfileDialog"
        :editingProfile="editingProfile"
        :profileForm="profileForm"
        :serverOptions="serverOptions"
        :userGroupOptions="userGroupOptions"
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
