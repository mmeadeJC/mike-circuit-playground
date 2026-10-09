<script setup lang="ts">
import { computed, markRaw, ref } from 'vue';
import {
  DataTable,
  DataTableCellText,
  DataTableToolbar,
  ListPageLayout,
  MessageNotification,
} from '@jumpcloud/circuit/components';
import Tag from 'primevue/tag';
import { defineComponent, h } from 'vue';
import { sessionRows, type SessionRow } from './data/clusterData';

const StatusCell = defineComponent({
  props: { status: { type: String, required: true } },
  setup(p) {
    const sev: Record<string, 'success' | 'secondary' | 'danger'> = {
      Active: 'success',
      Ended: 'secondary',
      Failed: 'danger',
    };
    return () => h(Tag, { value: p.status, severity: sev[p.status], class: '!normal-case' });
  },
});

const search = ref('');
const rows = computed(() => {
  const q = search.value.trim().toLowerCase();
  return sessionRows.filter(
    (r) => !q || [r.user, r.resource, r.jumpServer ?? '', r.cluster ?? ''].some((v) => v.toLowerCase().includes(q))
  );
});

const t = (label: string) => ({ label });
const columns = [
  { field: 'user', header: 'User', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: SessionRow }) => t(sp.data.user) },
  { field: 'resource', header: 'Resource', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: SessionRow }) => t(sp.data.resource) },
  // NEW (PPB-110): which Jump Server served each session
  { field: 'jumpServer', header: 'Jump Server', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: SessionRow }) => t(sp.data.jumpServer ?? (sp.data.status === 'Failed' ? 'None available' : '—')) },
  { field: 'cluster', header: 'Cluster', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: SessionRow }) => t(sp.data.cluster ?? '—') },
  { field: 'protocol', header: 'Protocol', component: markRaw(DataTableCellText), componentProps: (sp: { data: SessionRow }) => t(sp.data.protocol) },
  { field: 'startedAt', header: 'Started', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: SessionRow }) => t(sp.data.startedAt) },
  { field: 'duration', header: 'Duration', component: markRaw(DataTableCellText), componentProps: (sp: { data: SessionRow }) => t(sp.data.duration) },
  { field: 'status', header: 'Status', sortable: true, component: markRaw(StatusCell), componentProps: (sp: { data: SessionRow }) => ({ status: sp.data.status }) },
];
</script>

<template>
  <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
    <div class="px-6 pt-4">
      <MessageNotification
        severity="info"
        title="Session History now shows the Jump Server that served each session"
        detail="For resources that use a cluster, the Cluster column shows which cluster routed the connection. Failed sessions with no eligible server show “None available”."
      />
    </div>
    <!-- ListPageLayout adds 24px of padding on every side → table sits 24px below the banner and flush-left with it -->
    <div class="flex-1 flex flex-col min-h-0">
      <ListPageLayout class="w-full! h-full!">
        <DataTable
          :columns="columns"
          :data="rows"
          :card="true"
          size="default"
          scrollable
          scroll-height="flex"
          :paginator="true"
          :rows="10"
          :rows-per-page-options="[{ label: '10 Items per page', value: 10 }, { label: '20 Items per page', value: 20 }]"
          :show-rows-per-page-options="true"
          :show-page-report="true"
          :pt="{ root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' }, tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' } }"
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
              @search="(q: string) => (search = q)"
            />
          </template>
        </DataTable>
      </ListPageLayout>
    </div>
  </div>
</template>
