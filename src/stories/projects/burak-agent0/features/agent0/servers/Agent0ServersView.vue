<script setup lang="ts">
import { computed } from 'vue';
import { DataTable as CircuitDataTable, DataTableToolbar } from '@jumpcloud/circuit/components';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import Agent0ServerDetailPanel from './Agent0ServerDetailPanel.vue';
import type { ServerFormState } from '../shared/types';

const props = defineProps<{
  serversData: unknown[];
  serverColumns: unknown[];
  selectedServers: unknown[];
  selectedServer: { name: string } | null;
  showServerDrawer: boolean;
  useInlinePanel: boolean;
  authStyleOptions: { label: string; value: string }[];
  serverForm: ServerFormState;
}>();

const emit = defineEmits<{
  'update:selectedServers': [unknown[]];
  'update:showServerDrawer': [boolean];
  'row-click': [unknown];
  'close-detail': [];
  'save-detail': [];
}>();

const drawerVisible = computed({
  get: () => props.showServerDrawer,
  set: (value: boolean) => emit('update:showServerDrawer', value),
});
</script>

<template>
  <div class="flex-1 flex min-h-0 overflow-hidden bg-neutral-surface">
    <ListPageLayout class="flex-1 min-w-0 h-full! transition-all duration-300 ease-in-out">
      <CircuitDataTable
        :columns="serverColumns"
        :data="serversData"
        selectionMode="multiple"
        :selection="selectedServers"
        @update:selection="emit('update:selectedServers', $event)"
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
          />
        </template>
      </CircuitDataTable>
    </ListPageLayout>

    <div
      v-if="useInlinePanel"
      class="shrink-0 border-l border-neutral-default_solid bg-neutral-base flex flex-col h-full overflow-hidden transition-[width] duration-300 ease-in-out"
      :class="showServerDrawer && selectedServer ? 'w-[480px]' : 'w-0 border-l-0'"
    >
      <template v-if="selectedServer">
        <div class="flex items-center justify-between p-4 shrink-0 min-w-[480px]">
          <span class="text-heading-3 text-neutral-base">{{ selectedServer.name }}</span>
          <Button severity="secondary" variant="text" size="small" @click="emit('close-detail')">
            <template #icon><XMarkIcon class="w-5 h-5" /></template>
          </Button>
        </div>
        <div class="min-w-[480px] flex-1 min-h-0">
          <Agent0ServerDetailPanel
            :serverForm="serverForm"
            :authStyleOptions="authStyleOptions"
            @cancel="emit('close-detail')"
            @save="emit('save-detail')"
          />
        </div>
      </template>
    </div>
  </div>

  <Drawer
    v-if="!useInlinePanel"
    v-model:visible="drawerVisible"
    :header="selectedServer?.name || 'Server Configuration'"
    position="right"
    size="lg"
    modal
  >
    <template #closebutton="btnProps">
      <Button severity="secondary" variant="text" size="small" @click="btnProps.closeCallback">
        <template #icon><XMarkIcon class="w-5 h-5" /></template>
      </Button>
    </template>
    <Agent0ServerDetailPanel
      :serverForm="serverForm"
      :authStyleOptions="authStyleOptions"
      @cancel="emit('close-detail')"
      @save="emit('save-detail')"
    />
  </Drawer>
</template>
