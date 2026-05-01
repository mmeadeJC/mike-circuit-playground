<script setup lang="ts">
import { computed, markRaw, ref } from 'vue';
import {
  DataTable,
  DataTableToolbar,
  DataTableCellText,
  CollapsiblePanel,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import {
  UserGroupIcon,
  BellAlertIcon,
  ChartBarSquareIcon,
} from '@heroicons/vue/24/outline';
import { DeviceListsIcon } from '@jumpcloud/icons';
import DashboardPageLayout from '@/components/layout/page-layouts/DashboardPageLayout.vue';
import DashboardStatCard from '@/stories/projects/burak-agent0/features/agent0/dashboard/DashboardStatCard.vue';

const tableOneSearch = ref('');
const tableTwoSearch = ref('');

const recentApplicationsStatic = [
  { id: '1', name: 'Salesforce', category: 'CRM', owner: 'Identity Ops', status: 'Connected' },
  { id: '2', name: 'Slack', category: 'Collaboration', owner: 'IT', status: 'Connected' },
  { id: '3', name: 'GitHub', category: 'Development', owner: 'Engineering', status: 'Connected' },
  { id: '4', name: 'Okta Preview', category: 'Identity', owner: 'Security', status: 'Pending' },
];

const directoryActivityStatic = [
  { id: '1', user: 'Alex Rivera', action: 'Password reset', target: 'Azure AD', time: '2 min ago' },
  { id: '2', user: 'Jordan Lee', action: 'Group membership change', target: 'Engineering', time: '12 min ago' },
  { id: '3', user: 'Sam Patel', action: 'Device enrolled', target: 'MacBook Pro', time: '18 min ago' },
  { id: '4', user: 'Taylor Morgan', action: 'SSO login', target: 'AWS Console', time: '24 min ago' },
  { id: '5', user: 'Riley Chen', action: 'MFA enrolled', target: 'User profile', time: '31 min ago' },
  { id: '6', user: 'Casey Brooks', action: 'Policy applied', target: 'Baseline — macOS', time: '44 min ago' },
  { id: '7', user: 'Morgan White', action: 'Failed login (locked)', target: 'VPN', time: '52 min ago' },
  { id: '8', user: 'Jamie Nguyen', action: 'Directory sync', target: 'Google Workspace', time: '1 hr ago' },
];

const recentApplications = computed(() => {
  const q = tableOneSearch.value.trim().toLowerCase();
  if (!q) return recentApplicationsStatic;
  return recentApplicationsStatic.filter(
    (r) =>
      r.name.toLowerCase().includes(q)
      || r.category.toLowerCase().includes(q)
      || r.owner.toLowerCase().includes(q)
      || r.status.toLowerCase().includes(q),
  );
});

const directoryActivity = computed(() => {
  const q = tableTwoSearch.value.trim().toLowerCase();
  if (!q) return directoryActivityStatic;
  return directoryActivityStatic.filter(
    (r) =>
      r.user.toLowerCase().includes(q)
      || r.action.toLowerCase().includes(q)
      || r.target.toLowerCase().includes(q)
      || r.time.toLowerCase().includes(q),
  );
});

const applicationsColumns = [
  {
    field: 'name',
    header: 'Application',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.name) }),
  },
  {
    field: 'category',
    header: 'Category',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.category) }),
  },
  {
    field: 'owner',
    header: 'Owner',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.owner) }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.status) }),
  },
];

const activityColumns = [
  {
    field: 'user',
    header: 'User',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.user) }),
  },
  {
    field: 'action',
    header: 'Action',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.action) }),
  },
  {
    field: 'target',
    header: 'Target',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.target) }),
  },
  {
    field: 'time',
    header: 'Time',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.time) }),
  },
];

function onTableOneSearch(q: string) {
  tableOneSearch.value = q;
}

function onTableTwoSearch(q: string) {
  tableTwoSearch.value = q;
}
</script>

<template>
  <div class="flex-1 overflow-hidden bg-neutral-surface">
    <DashboardPageLayout class="w-full! h-full!" max-width="1280">
      <div class="flex flex-col gap-4">
        <!-- Stat widgets — 16px gap between cards -->
        <div class="grid grid-cols-4 gap-4 min-w-0">
          <DashboardStatCard
            header="Total users"
            value="1,847"
            change-value="3.2%"
            change-label="vs last month"
            show-arrow
            :icon="UserGroupIcon"
          />
          <DashboardStatCard
            header="Resources"
            value="2,641"
            change-value="1.1%"
            change-label="vs last week"
            show-arrow
            :icon="DeviceListsIcon"
          />
          <DashboardStatCard
            header="Secrets"
            value="12"
            change-value="2 new"
            change-label="since yesterday"
            :icon="BellAlertIcon"
          />
          <DashboardStatCard
            header="Connectors"
            value="48"
            change-value="5%"
            change-label="vs last quarter"
            show-arrow
            :icon="ChartBarSquareIcon"
          />
        </div>

        <!-- Static panel: CollapsiblePanel without toggleable matches Vault-style panel (border, header row, no chevron). -->
        <CollapsiblePanel header="Most Connected Resources">
          <template #actions>
            <Button label="View all" severity="secondary" size="small" />
          </template>
          <div class="flex flex-col min-h-0 relative">
            <DataTable
              :columns="applicationsColumns"
              :data="recentApplications"
              :card="false"
              size="small"
              :paginator="false"
              scrollable
              scroll-height="flex"
            >
              <template #toolbar>
                <DataTableToolbar
                  add-button-label="Add application"
                  search-placeholder="Search applications..."
                  :show-filter-button="false"
                  :show-save-view-button="false"
                  :show-refresh-button="true"
                  :show-columns-button="false"
                  :show-download-button="false"
                  @search="onTableOneSearch"
                />
              </template>
              <template #empty>
                <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                  <span class="text-body-md">No applications match your search</span>
                </div>
              </template>
            </DataTable>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel header="Access Requests" class="pb-md">
          <template #actions>
            <Button label="View all" severity="secondary" size="small" />
          </template>
          <div class="flex flex-col min-h-0 relative">
            <DataTable
              :columns="activityColumns"
              :data="directoryActivity"
              :card="false"
              size="small"
              :paginator="false"
              scrollable
              scroll-height="flex"
            >
              <template #toolbar>
                <DataTableToolbar
                  add-button-label="Add entry"
                  search-placeholder="Search activity..."
                  :show-filter-button="false"
                  :show-save-view-button="false"
                  :show-refresh-button="true"
                  :show-columns-button="false"
                  :show-download-button="false"
                  @search="onTableTwoSearch"
                />
              </template>
              <template #empty>
                <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                  <span class="text-body-md">No activity matches your search</span>
                </div>
              </template>
            </DataTable>
          </div>
        </CollapsiblePanel>
      </div>
    </DashboardPageLayout>
  </div>
</template>
