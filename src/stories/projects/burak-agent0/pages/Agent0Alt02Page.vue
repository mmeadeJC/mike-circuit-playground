<script setup lang="ts">
import { computed, markRaw, reactive, ref } from 'vue';
import { AppNavigation, PageHeader } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { Cog6ToothIcon, SparklesIcon } from '@heroicons/vue/24/outline';
import TopBar from '@/components/TopBar.vue';
import Agent0DashboardView from '../features/agent0/dashboard/Agent0DashboardViewAlt02.vue';
import Agent0ServersView from '../features/agent0/servers/Agent0ServersView.vue';
import Agent0ActivityView from '../features/agent0/activity/Agent0ActivityView.vue';
import Agent0SettingsView from '../features/agent0/settings/Agent0SettingsView.vue';
import Agent0ServerDetailView from '../features/agent0/server-detail/Agent0ServerDetailView.vue';
import {
  useActivityFilters,
  useServerFilters,
  useChartThemeOptions,
} from '../features/agent0/shared/composables';
import type { Server } from '../features/agent0/shared/types';
import {
  menuItems,
  profileMenuItems,
  serversData,
  userGroupsData,
  profileUserGroups,
  recentActivity,
  topServerUsage,
  monthlyChartData,
  topUsers,
  llmProviders,
  defaultInstructions,
  authStyleOptions,
  serverDetailTabs,
  alt02MainTabs,
  activityLogData,
  getServerActivityLogData,
  getServerRecentActivity,
  getServerMonthlyChartData,
  getServerUserGroups,
  serverDashboardStats,
} from '../features/agent0/shared/data';
import {
  getServerColumns,
  activityLogColumns,
} from '../features/agent0/shared/columns';

const sparklesIcon = markRaw(SparklesIcon);
const currentView = ref<'main' | 'settings' | 'server-detail'>('main');
const activeTab = ref('dashboard');
const serverDetailTab = ref('overview');

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

const activityFilters = useActivityFilters(activityLogData);
const { filteredActivityData, handleActivitySearch } = activityFilters;

const serverFilters = useServerFilters(serversData);

const selectedProvider = ref('bedrock');
const apiKey = ref('');
const apiKeyVisible = ref(false);
const modelId = ref('anthropic.claude-sonnet-4-5-20250929-v1:0');
const instructions = ref([...defaultInstructions]);

const editingServer = ref<Server | null>(null);

const currentServerDashboardStats = computed(() =>
  editingServer.value ? serverDashboardStats[editingServer.value.slug] ?? null : null,
);

const currentServerRecentActivity = computed(() =>
  editingServer.value ? getServerRecentActivity(editingServer.value.slug) : [],
);

const currentServerMonthlyChartData = computed(() =>
  editingServer.value ? getServerMonthlyChartData(editingServer.value.slug) : { labels: [], datasets: [] },
);

const currentServerActivityData = computed(() =>
  editingServer.value ? getServerActivityLogData(editingServer.value.slug) : [],
);

const currentServerUserGroups = computed(() =>
  editingServer.value ? getServerUserGroups(editingServer.value.slug) : [],
);

const pageTitle = computed(() => {
  if (currentView.value === 'server-detail' && editingServer.value) {
    return editingServer.value.name;
  }
  return currentView.value === 'settings' ? 'AI Connector Settings' : 'AI Connector';
});

const pageTabs = computed(() =>
  currentView.value === 'server-detail' ? serverDetailTabs : alt02MainTabs,
);

const currentActiveTab = computed(() =>
  currentView.value === 'server-detail' ? serverDetailTab.value : activeTab.value,
);

const serverColumns = computed(() => getServerColumns([], userGroupsData, profileUserGroups));

function handleTabChange(tab: string) {
  if (currentView.value === 'server-detail') {
    serverDetailTab.value = tab;
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
  editingServer.value = server;
  serverDetailTab.value = 'overview';
  currentView.value = 'server-detail';
}

function backFromServerDetail() {
  currentView.value = 'main';
  activeTab.value = 'servers';
  serverDetailTab.value = 'overview';
}

function handleServerRowClick(event: { data: Server }) {
  openServerDetail(event.data);
}

const alt02DashboardTopServerUsage = topServerUsage;
const alt02DashboardTopUsers = topUsers;
const alt02DashboardRecentActivity = recentActivity;
const alt02DashboardMonthlyChartData = monthlyChartData;
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
        backButtonLabel="AI Connector"
        @back="backToMain"
      />
      <TopBar
        v-if="currentView === 'server-detail'"
        showBackButton
        backButtonLabel="AI Connector"
        @back="backFromServerDetail"
      />

      <PageHeader
        :title="pageTitle"
        :icon="currentView === 'main' ? sparklesIcon : undefined"
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
          :topServerUsage="alt02DashboardTopServerUsage"
          :topUsers="alt02DashboardTopUsers"
          :recentActivity="alt02DashboardRecentActivity"
          :monthlyChartData="alt02DashboardMonthlyChartData"
          :monthlyChartOptions="monthlyChartOptions"
          @navigate-tab="activeTab = $event"
        />

        <Agent0ServersView
          v-if="activeTab === 'servers'"
          :filteredServersData="serverFilters.filteredData.value"
          :serverColumns="serverColumns"
          :selectedServers="selectedServers"
          :selectedServer="selectedServer"
          :showServerDialog="showServerDialog"
          :authStyleOptions="authStyleOptions"
          :serverForm="serverForm"
          :showFilterDialog="serverFilters.showFilterDialog.value"
          :draftConnectionTypes="serverFilters.draftConnectionTypes.value"
          :draftStatus="serverFilters.draftStatus.value"
          :connectionTypeOptions="serverFilters.connectionTypeOptions"
          :statusOptions="serverFilters.statusOptions"
          :activeFilterChips="serverFilters.activeFilterChips.value"
          :activeFilterCount="serverFilters.activeFilterCount.value"
          @update:selectedServers="selectedServers = $event"
          @update:showServerDialog="showServerDialog = $event"
          @row-click="handleServerRowClick"
          @add-server="openAddServer"
          @close-detail="showServerDialog = false"
          @save-detail="showServerDialog = false"
          @search="serverFilters.handleSearch"
          @openFilterDialog="serverFilters.openFilterDialog"
          @applyFilters="serverFilters.applyFilters"
          @cancelFilterDialog="serverFilters.cancelFilterDialog"
          @clearDraftFilters="serverFilters.clearDraftFilters"
          @clearAllFilters="serverFilters.clearAllFilters"
          @removeFilterChip="serverFilters.removeFilterChip"
          @update:draftConnectionTypes="serverFilters.draftConnectionTypes.value = $event"
          @update:draftStatus="serverFilters.draftStatus.value = $event"
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

      <Agent0ServerDetailView
        v-if="currentView === 'server-detail' && editingServer"
        :key="editingServer.slug"
        :editingServer="editingServer"
        :serverDetailTab="serverDetailTab"
        :serverUserGroups="currentServerUserGroups"
        :serverDashboardStats="currentServerDashboardStats"
        :serverRecentActivity="currentServerRecentActivity"
        :serverMonthlyChartData="currentServerMonthlyChartData"
        :monthlyChartOptions="monthlyChartOptions"
        :serverActivityData="currentServerActivityData"
      />

    </div>
  </div>
</template>
