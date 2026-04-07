<script setup lang="ts">
import { markRaw, reactive, ref } from 'vue';
import { AppNavigation, PageHeader, ToastNotification } from '@jumpcloud/circuit/components';
import { CpuChipIcon } from '@heroicons/vue/24/outline';
import AdminTopBar from '@/components/AdminTopBar.vue';
import Agent0ServersView from '../../../features/agent0/servers/Agent0ServersView.vue';
import Agent0AllowedAiClientsView from '../../../features/agent0/allowed-ai-clients/Agent0AllowedAiClientsView.vue';
import Agent0ActivityView from '../../../features/agent0/activity/Agent0ActivityView.vue';
import ServerDialogPhase01 from '../../../features/agent0/servers/ServerDialogPhase01.vue';
import {
  useActivityFilters,
  useAllowedAiClientFilters,
  useServerFilters,
} from '../../../features/agent0/shared/composables';
import { prefixFromServerSlug } from '../../../features/agent0/shared/prefixFromName';
import type {
  AllowedAiClientSubmitPayload,
  Phase01ServerFormState,
  Server,
  ServerFormState,
} from '../../../features/agent0/shared/types';
import {
  menuItems,
  profileMenuItems,
  serversData,
  authStyleOptions,
  phase01AuthStyleOptions,
  phase01MainTabs,
  activityLogData,
  allowedAiClientsData,
} from '../../../features/agent0/shared/data';
import { activityLogColumns } from '../../../features/agent0/shared/columns';
import {
  pushAllowedAiClientAddedToast,
  pushAllowedAiClientRemovedToast,
  pushAllowedAiClientUpdatedToast,
} from '../../../features/agent0/shared/allowedAiClientToasts';
import {
  pushServerCreatedToast,
  pushServerDeletedToast,
  pushServerSavedToast,
} from '../../../features/agent0/shared/serverCreateToasts';
import { useToast } from 'primevue/usetoast';

const cpuChipIcon = markRaw(CpuChipIcon);
const activeTab = ref('servers');

/** Stub for Agent0ServersView legacy detail dialog (unused in Phase 01) */
const serversViewFormStub = reactive<ServerFormState>({
  targetId: '',
  name: '',
  url: '',
  authStyle: 'OAuth',
  authConfig: '',
});

const selectedServer = ref<Server | null>(null);
const selectedServers = ref<Server[]>([]);
const showServerDialog = ref(false);

const phase01ServerForm = reactive<Phase01ServerFormState>({
  prefix: '',
  name: '',
  url: '',
  authStyle: 'OAuth',
  apiDocumentationUrl: '',
  oauthClientId: '',
  oauthScope: '',
});

const showPhase01Dialog = ref(false);
const phase01DialogMode = ref<'add' | 'edit'>('add');
const editingServerForDialog = ref<Server | null>(null);

const activityFilters = useActivityFilters(activityLogData);
const { filteredActivityData, handleActivitySearch } = activityFilters;

const serverFilters = useServerFilters(serversData);

const allowedAiClients = ref([...allowedAiClientsData]);
const allowedAiClientFilters = useAllowedAiClientFilters(allowedAiClients);

const toast = useToast();

function handleTabChange(tab: string) {
  activeTab.value = tab;
}

/** Map table connection type to Phase 01 auth control */
function normalizePhase01AuthStyle(connectionType: string): string {
  if (connectionType === 'API Token') return 'API Token';
  return 'OAuth';
}

function openAddServer() {
  phase01DialogMode.value = 'add';
  editingServerForDialog.value = null;
  phase01ServerForm.prefix = '';
  phase01ServerForm.name = '';
  phase01ServerForm.url = '';
  phase01ServerForm.authStyle = 'OAuth';
  phase01ServerForm.apiDocumentationUrl = '';
  phase01ServerForm.oauthClientId = '';
  phase01ServerForm.oauthScope = '';
  showPhase01Dialog.value = true;
}

function openEditServer(server: Server) {
  phase01DialogMode.value = 'edit';
  editingServerForDialog.value = server;
  phase01ServerForm.name = server.name;
  phase01ServerForm.url = server.url;
  phase01ServerForm.authStyle = normalizePhase01AuthStyle(server.connectionType);
  phase01ServerForm.prefix = prefixFromServerSlug(server.slug);
  phase01ServerForm.apiDocumentationUrl = '';
  phase01ServerForm.oauthClientId = '';
  phase01ServerForm.oauthScope = '';
  showPhase01Dialog.value = true;
}

function handleServerRowClick(event: { data: Server }) {
  openEditServer(event.data);
}

function closePhase01Dialog() {
  showPhase01Dialog.value = false;
  editingServerForDialog.value = null;
}

function handlePhase01Create() {
  closePhase01Dialog();
  pushServerCreatedToast((m) => toast.add(m));
}

function handlePhase01Save() {
  closePhase01Dialog();
  pushServerSavedToast((m) => toast.add(m));
}

function handleDeleteServer() {
  pushServerDeletedToast((m) => toast.add(m));
}

function nextAllowedAiClientId() {
  const ids = allowedAiClients.value.map((e) => e.id);
  return ids.length === 0 ? 1 : Math.max(...ids) + 1;
}

function handleAllowedAiClientAdd(payload: AllowedAiClientSubmitPayload) {
  allowedAiClients.value = [
    ...allowedAiClients.value,
    {
      id: nextAllowedAiClientId(),
      kind: payload.kind,
      origin: payload.origin,
      note: payload.note,
      createdAt: new Date().toISOString(),
      snapshot: payload.snapshot,
    },
  ];
  pushAllowedAiClientAddedToast((m) => toast.add(m));
}

function handleAllowedAiClientUpdate(payload: AllowedAiClientSubmitPayload) {
  if (payload.id == null) return;
  allowedAiClients.value = allowedAiClients.value.map((e) =>
    e.id === payload.id
      ? {
          ...e,
          kind: payload.kind,
          origin: payload.origin,
          note: payload.note,
          snapshot: payload.snapshot,
        }
      : e,
  );
  pushAllowedAiClientUpdatedToast((m) => toast.add(m));
}

function handleAllowedAiClientDelete(ids: number[]) {
  allowedAiClients.value = allowedAiClients.value.filter((e) => !ids.includes(e.id));
  pushAllowedAiClientRemovedToast((m) => toast.add(m));
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
      <AdminTopBar />

      <PageHeader
        title="AI Connector"
        :icon="cpuChipIcon"
        :tabs="phase01MainTabs"
        :activeTab="activeTab"
        @update:activeTab="handleTabChange"
      />

      <Agent0ServersView
          v-if="activeTab === 'servers'"
          :filteredServersData="serverFilters.filteredData.value"
          :selectedServers="selectedServers"
          :selectedServer="selectedServer"
          :showServerDialog="showServerDialog"
          :authStyleOptions="authStyleOptions"
          :serverForm="serversViewFormStub"
          @update:selectedServers="selectedServers = $event"
          @update:showServerDialog="showServerDialog = $event"
          @row-click="handleServerRowClick"
          @add-server="openAddServer"
          @close-detail="showServerDialog = false"
          @save-detail="showServerDialog = false"
          @delete-server="handleDeleteServer"
          @search="serverFilters.handleSearch"
        />

      <Agent0AllowedAiClientsView
        v-if="activeTab === 'allowed-ai-clients'"
        :filtered-entries="allowedAiClientFilters.filteredAllowedAiClientsData.value"
        :show-filter-dialog="allowedAiClientFilters.showFilterDialog.value"
        :draft-kinds="allowedAiClientFilters.draftKinds.value"
        :kind-options="allowedAiClientFilters.kindOptions"
        :active-filter-chips="allowedAiClientFilters.activeFilterChips.value"
        :draft-filter-count="allowedAiClientFilters.draftFilterCount.value"
        @search="allowedAiClientFilters.handleSearch"
        @open-filter-dialog="allowedAiClientFilters.openFilterDialog"
        @apply-filters="allowedAiClientFilters.applyFilters"
        @cancel-filter-dialog="allowedAiClientFilters.cancelFilterDialog"
        @clear-draft-filters="allowedAiClientFilters.clearDraftFilters"
        @clear-all-filters="allowedAiClientFilters.clearAllFilters"
        @remove-filter-chip="allowedAiClientFilters.removeFilterChip"
        @update:draft-kinds="allowedAiClientFilters.draftKinds.value = $event"
        @add-entry="handleAllowedAiClientAdd"
        @update-entry="handleAllowedAiClientUpdate"
        @delete-entries="handleAllowedAiClientDelete"
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

      <ServerDialogPhase01
        v-model:visible="showPhase01Dialog"
        :mode="phase01DialogMode"
        :editing-server-slug="editingServerForDialog?.slug"
        :editing-server-name="editingServerForDialog?.name"
        :server-form="phase01ServerForm"
        :auth-style-options="phase01AuthStyleOptions"
        @cancel="closePhase01Dialog"
        @create="handlePhase01Create"
        @save="handlePhase01Save"
      />

      <ToastNotification />
    </div>
  </div>
</template>
