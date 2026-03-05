<script setup lang="ts">
import { DataTable as CircuitDataTable, DataTableToolbar } from '@jumpcloud/circuit/components';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';

defineProps<{
  activityLogColumns: unknown[];
  filteredActivityData: unknown[];
  activityFilters: unknown[];
}>();

const emit = defineEmits<{
  search: [string];
  'clear-filters': [];
  'remove-filter': [unknown];
}>();
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
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
            :activeFilters="activityFilters"
            :maxVisibleFilters="5"
            @search="emit('search', $event)"
            @clear-filters="emit('clear-filters')"
            @remove-filter="emit('remove-filter', $event)"
          >
            <template #saved-views>
              <span class="text-body-md text-neutral-subtle">{{ filteredActivityData.length }} Events</span>
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
  </div>
</template>
