<script setup lang="ts">
import { computed } from 'vue';
import { DataTable as CircuitDataTable, DataTableToolbar, FormField, ListPageLayout } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
  activityLogColumns: unknown[];
  filteredActivityData: unknown[];
  showFilterDialog: boolean;
  draftUsers: string[];
  draftEventTypes: string[];
  draftServers: string[];
  draftStatus: string;
  userOptions: { label: string; value: string }[];
  eventTypeOptions: { label: string; value: string }[];
  serverOptions: { label: string; value: string }[];
  statusOptions: string[];
  activeFilterChips: { id: string; key: string; operator: string; value: string }[];
  activeFilterCount: number;
}>();

const emit = defineEmits<{
  search: [query: string];
  openFilterDialog: [];
  applyFilters: [];
  cancelFilterDialog: [];
  clearDraftFilters: [];
  clearAllFilters: [];
  removeFilterChip: [chip: { id?: string }];
  'update:draftUsers': [value: string[]];
  'update:draftEventTypes': [value: string[]];
  'update:draftServers': [value: string[]];
  'update:draftStatus': [value: string];
}>();

const draftFilterCount = computed(() => {
  let count = 0;
  if (props.draftUsers.length > 0) count++;
  if (props.draftEventTypes.length > 0) count++;
  if (props.draftServers.length > 0) count++;
  if (props.draftStatus !== 'All') count++;
  return count;
});
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative">
    <ListPageLayout class="w-full! h-full!">
      <CircuitDataTable
        :columns="activityLogColumns"
        :data="filteredActivityData"
        :card="true"
        size="default"
        :scrollable="true"
        scrollHeight="flex"
        :paginator="true"
        :rows="10"
      >
        <template #toolbar>
          <DataTableToolbar
            searchPlaceholder="Search activity..."
            :showAddButton="false"
            :showFilterButton="true"
            :showRefreshButton="true"
            :showDownloadButton="true"
            :showColumnsButton="false"
            :showSaveViewButton="false"
            :activeFilters="activeFilterChips"
            :maxVisibleFilters="5"
            @search="emit('search', $event)"
            @filter="emit('openFilterDialog')"
            @clear-all="emit('clearAllFilters')"
            @filter-remove="emit('removeFilterChip', $event)"
          >
            <template #right-section>
              <span class="text-body-md text-neutral-subtle mr-md">{{ filteredActivityData.length }} Events</span>
            </template>
          </DataTableToolbar>
        </template>

        <template #empty>
          <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
            <span class="text-body-md">No activity matches your filters</span>
            <span class="text-body-sm mt-1">Try adjusting your search or filter criteria</span>
          </div>
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
        <FormField label="User">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              :modelValue="draftUsers"
              :options="userOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="All users"
              :maxSelectedLabels="2"
              class="w-full"
              @update:modelValue="emit('update:draftUsers', $event)"
            />
          </template>
        </FormField>

        <FormField label="Event Type">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              :modelValue="draftEventTypes"
              :options="eventTypeOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="All event types"
              :maxSelectedLabels="2"
              class="w-full"
              @update:modelValue="emit('update:draftEventTypes', $event)"
            />
          </template>
        </FormField>

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
          <Button
            label="Cancel"
            severity="secondary"
            variant="text"
            @click="emit('cancelFilterDialog')"
          />
          <Button
            label="Clear All"
            severity="secondary"
            variant="outlined"
            @click="emit('clearDraftFilters')"
          />
          <Button
            label="Apply"
            @click="emit('applyFilters')"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>
