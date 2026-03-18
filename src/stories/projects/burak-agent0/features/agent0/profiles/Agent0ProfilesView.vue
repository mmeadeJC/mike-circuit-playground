<script setup lang="ts">
import { computed } from 'vue';
import { DataTable as CircuitDataTable, DataTableToolbar, FormField } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';

const props = defineProps<{
  filteredProfilesData: unknown[];
  profileColumns: unknown[];
  showFilterDialog: boolean;
  draftServers: string[];
  draftUserGroups: string[];
  serverOptions: { label: string; value: string }[];
  userGroupOptions: { label: string; value: string }[];
  activeFilterChips: { id: string; key: string; operator: string; value: string }[];
  activeFilterCount: number;
}>();

const emit = defineEmits<{
  'row-click': [unknown];
  'add-profile': [];
  search: [query: string];
  openFilterDialog: [];
  applyFilters: [];
  cancelFilterDialog: [];
  clearDraftFilters: [];
  clearAllFilters: [];
  removeFilterChip: [chip: { id?: string }];
  'update:draftServers': [value: string[]];
  'update:draftUserGroups': [value: string[]];
}>();

const draftFilterCount = computed(() => {
  let count = 0;
  if (props.draftServers.length > 0) count++;
  if (props.draftUserGroups.length > 0) count++;
  return count;
});
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative">
    <ListPageLayout class="w-full! h-full!">
      <CircuitDataTable
        :columns="profileColumns"
        :data="filteredProfilesData"
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
            searchPlaceholder="Search profiles..."
            :showAddButton="true"
            addButtonLabel="Add Profile"
            :showFilterButton="true"
            :showRefreshButton="false"
            :showColumnsButton="false"
            :showDownloadButton="false"
            :showSaveViewButton="false"
            :activeFilters="activeFilterChips"
            :maxVisibleFilters="5"
            @add="emit('add-profile')"
            @search="emit('search', $event)"
            @filter="emit('openFilterDialog')"
            @clear-all="emit('clearAllFilters')"
            @filter-remove="emit('removeFilterChip', $event)"
          />
        </template>
      </CircuitDataTable>
    </ListPageLayout>

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
        <FormField label="Server">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              :modelValue="draftServers"
              :options="serverOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="All servers"
              :maxSelectedLabels="2"
              class="w-full"
              @update:modelValue="emit('update:draftServers', $event)"
            />
          </template>
        </FormField>

        <FormField label="User Group">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              :modelValue="draftUserGroups"
              :options="userGroupOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="All user groups"
              :maxSelectedLabels="2"
              class="w-full"
              @update:modelValue="emit('update:draftUserGroups', $event)"
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
