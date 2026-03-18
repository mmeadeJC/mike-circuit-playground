<script setup lang="ts">
import { computed } from 'vue';
import { DataTable as CircuitDataTable, DataTableToolbar, FormField } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';
import Agent0ServerDetailPanel from './Agent0ServerDetailPanel.vue';
import type { ServerFormState } from '../shared/types';

const props = defineProps<{
  filteredServersData: unknown[];
  serverColumns: unknown[];
  selectedServers: unknown[];
  selectedServer: { name: string } | null;
  showServerDialog: boolean;
  authStyleOptions: { label: string; value: string }[];
  serverForm: ServerFormState;
  showFilterDialog: boolean;
  draftConnectionTypes: string[];
  draftStatus: string;
  connectionTypeOptions: { label: string; value: string }[];
  statusOptions: string[];
  activeFilterChips: { id: string; key: string; operator: string; value: string }[];
  activeFilterCount: number;
}>();

const emit = defineEmits<{
  'update:selectedServers': [unknown[]];
  'update:showServerDialog': [boolean];
  'row-click': [unknown];
  'add-server': [];
  'close-detail': [];
  'save-detail': [];
  search: [query: string];
  openFilterDialog: [];
  applyFilters: [];
  cancelFilterDialog: [];
  clearDraftFilters: [];
  clearAllFilters: [];
  removeFilterChip: [chip: { id?: string }];
  'update:draftConnectionTypes': [value: string[]];
  'update:draftStatus': [value: string];
}>();

const serverDialogVisible = computed({
  get: () => props.showServerDialog,
  set: (value: boolean) => emit('update:showServerDialog', value),
});

const serverDialogHeader = computed(() =>
  props.selectedServer ? props.selectedServer.name : 'Add Server',
);

const draftFilterCount = computed(() => {
  let count = 0;
  if (props.draftConnectionTypes.length > 0) count++;
  if (props.draftStatus !== 'All') count++;
  return count;
});
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
            :showFilterButton="true"
            :showRefreshButton="false"
            :showColumnsButton="false"
            :showDownloadButton="false"
            :showSaveViewButton="false"
            :activeFilters="activeFilterChips"
            :maxVisibleFilters="5"
            @add="emit('add-server')"
            @search="emit('search', $event)"
            @filter="emit('openFilterDialog')"
            @clear-all="emit('clearAllFilters')"
            @filter-remove="emit('removeFilterChip', $event)"
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

    <Dialog
      :visible="showFilterDialog"
      :draggable="false"
      modal
      header="Apply filters"
      :style="{ width: '560px' }"
      @update:visible="!$event && emit('cancelFilterDialog')"
    >
      <template #closeicon><XMarkIcon /></template>

      <div class="flex flex-col gap-md">
        <FormField label="Connection Type">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              :modelValue="draftConnectionTypes"
              :options="connectionTypeOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="All connection types"
              :maxSelectedLabels="2"
              class="w-full"
              @update:modelValue="emit('update:draftConnectionTypes', $event)"
            />
          </template>
        </FormField>

        <FormField label="Status">
          <template #default="{ inputId }">
            <SelectButton
              :id="inputId"
              :modelValue="draftStatus"
              :options="statusOptions"
              :allowEmpty="false"
              @update:modelValue="emit('update:draftStatus', $event)"
            />
          </template>
        </FormField>
      </div>

      <template #footer>
        <div class="flex items-center flex-1 min-w-0">
          <span class="text-body-sm text-neutral-subtle">{{ draftFilterCount }} Filters applied</span>
        </div>
        <div class="flex gap-sm shrink-0">
          <Button label="Cancel" severity="secondary" variant="text" @click="emit('cancelFilterDialog')" />
          <Button label="Clear All" severity="secondary" variant="outlined" @click="emit('clearDraftFilters')" />
          <Button label="Apply" @click="emit('applyFilters')" />
        </div>
      </template>
    </Dialog>
  </div>
</template>
