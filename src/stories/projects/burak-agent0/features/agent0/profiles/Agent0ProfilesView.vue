<script setup lang="ts">
import { DataTable as CircuitDataTable, DataTableToolbar } from '@jumpcloud/circuit/components';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';

defineProps<{
  profilesData: unknown[];
  profileColumns: unknown[];
}>();

const emit = defineEmits<{
  'row-click': [unknown];
  'add-profile': [];
}>();
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
    <ListPageLayout class="w-full! h-full!">
      <CircuitDataTable
        :columns="profileColumns"
        :data="profilesData"
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
            @add="emit('add-profile')"
            :showFilterButton="false"
            :showRefreshButton="false"
            :showColumnsButton="false"
            :showDownloadButton="false"
          />
        </template>
      </CircuitDataTable>
    </ListPageLayout>
  </div>
</template>
