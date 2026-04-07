<script setup lang="ts">
import { computed, ref } from 'vue';
import { DataTable as CircuitDataTable, DataTableToolbar } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';
import Agent0ServerDetailPanel from './Agent0ServerDetailPanel.vue';
import ServerDeleteConfirmDialog from './ServerDeleteConfirmDialog.vue';
import { getServerColumns } from '../shared/columns';
import type { ServerFormState } from '../shared/types';

const props = defineProps<{
  filteredServersData: unknown[];
  selectedServers: unknown[];
  selectedServer: { name: string } | null;
  showServerDialog: boolean;
  authStyleOptions: { label: string; value: string }[];
  serverForm: ServerFormState;
}>();

const emit = defineEmits<{
  'update:selectedServers': [unknown[]];
  'update:showServerDialog': [boolean];
  'row-click': [unknown];
  'add-server': [];
  'close-detail': [];
  'save-detail': [];
  'delete-server': [row: Record<string, unknown>];
  search: [query: string];
}>();

const serverDialogVisible = computed({
  get: () => props.showServerDialog,
  set: (value: boolean) => emit('update:showServerDialog', value),
});

const serverDialogHeader = computed(() =>
  props.selectedServer ? props.selectedServer.name : 'Add Server',
);

const showDeleteConfirm = ref(false);
const serverPendingDelete = ref<Record<string, unknown> | null>(null);

const serverColumns = computed(() =>
  getServerColumns({
    onEditServer: (row) => emit('row-click', { data: row }),
    onDeleteServer: (row) => {
      serverPendingDelete.value = row;
      showDeleteConfirm.value = true;
    },
  }),
);

const pendingDeleteServerName = computed(() => {
  const row = serverPendingDelete.value;
  const name = row?.name;
  return typeof name === 'string' ? name : undefined;
});

function confirmDeleteServer() {
  if (serverPendingDelete.value) {
    emit('delete-server', serverPendingDelete.value);
  }
  serverPendingDelete.value = null;
}

function cancelDeleteServer() {
  serverPendingDelete.value = null;
}
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative">
    <ListPageLayout class="w-full! h-full!">
      <CircuitDataTable
        :columns="serverColumns"
        :data="filteredServersData"
        @row-click="emit('row-click', $event)"
        :card="true"
        size="default"
        :scrollable="true"
        scrollHeight="flex"
        :paginator="true"
        :rows="10"
      >
        <template #toolbar>
          <DataTableToolbar
            searchPlaceholder="Search servers..."
            :showAddButton="true"
            addButtonLabel="Add Server"
            :showFilterButton="false"
            :showRefreshButton="false"
            :showColumnsButton="false"
            :showDownloadButton="false"
            :showSaveViewButton="false"
            @add="emit('add-server')"
            @search="emit('search', $event)"
          />
        </template>
      </CircuitDataTable>
    </ListPageLayout>

    <Dialog
      v-model:visible="serverDialogVisible"
      :draggable="false"
      modal
      :header="serverDialogHeader"
      :style="{ width: '560px' }"
    >
      <template #closeicon><XMarkIcon /></template>
      <Agent0ServerDetailPanel
        :serverForm="serverForm"
        :authStyleOptions="authStyleOptions"
        :isAddMode="!selectedServer"
        @cancel="emit('close-detail')"
        @save="emit('save-detail')"
      />
    </Dialog>

    <ServerDeleteConfirmDialog
      v-model:visible="showDeleteConfirm"
      :server-name="pendingDeleteServerName"
      @confirm="confirmDeleteServer"
      @cancel="cancelDeleteServer"
    />
  </div>
</template>
