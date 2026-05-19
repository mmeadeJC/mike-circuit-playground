<script setup lang="ts">
import { DataTable, DataTableToolbar, ListPageLayout } from '@jumpcloud/circuit/components';
import {
  sessionHistoryColumns,
  sessionHistoryListData,
} from '../data/recordingsListData';
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative px-6 pt-6">
    <ListPageLayout class="w-full! h-full!">
      <DataTable
        :columns="sessionHistoryColumns"
        :data="sessionHistoryListData"
        :card="true"
        size="default"
        scrollable
        scroll-height="flex"
        :paginator="true"
        :rows="10"
        :rows-per-page-options="[
          { label: '10 Items per page', value: 10 },
          { label: '20 Items per page', value: 20 },
          { label: '50 Items per page', value: 50 },
        ]"
        :show-rows-per-page-options="true"
        :show-page-report="true"
        :pt="{
          root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
          tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
        }"
        :pt-options="{ mergeSections: true, mergeProps: true }"
      >
        <template #toolbar>
          <DataTableToolbar
            search-placeholder="Search session history..."
            :show-add-button="false"
            :show-filter-button="true"
            :show-refresh-button="true"
            :show-columns-button="true"
            :show-save-view-button="false"
          />
        </template>
      </DataTable>
    </ListPageLayout>
  </div>
</template>
