<script setup lang="ts">
import { computed, ref } from 'vue';
import { DataTable as CircuitDataTable, DataTableToolbar, CollapsiblePanel, CopyButton, FormField } from '@jumpcloud/circuit/components';
import Chart from 'primevue/chart';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import DashboardPageLayout from '@/components/layout/page-layouts/DashboardPageLayout.vue';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';
import DashboardStatCard from '../dashboard/DashboardStatCard.vue';
import DashboardTopList from '../dashboard/DashboardTopList.vue';
import DashboardRecentActivity from '../dashboard/DashboardRecentActivity.vue';
import { useActivityFilters } from '../shared/composables';
import { activityLogColumns, profileUserGroupColumns } from '../shared/columns';
import { ChartBarSquareIcon, ChevronRightIcon, CommandLineIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import type { ActivityLogEntry, ServerDashboardStats } from '../shared/data';
import type { Server, UserGroup } from '../shared/types';

const props = defineProps<{
  editingServer: Server | null;
  serverDetailTab: string;
  serverUserGroups: UserGroup[];
  serverDashboardStats: ServerDashboardStats | null;
  serverRecentActivity: { user: string; server: string; time: string; event: string }[];
  serverMonthlyChartData: Record<string, unknown>;
  monthlyChartOptions: Record<string, unknown>;
  serverActivityData: ActivityLogEntry[];
}>();

const serverFilters = useActivityFilters(props.serverActivityData);
const { filteredActivityData: serverFilteredActivityData, handleActivitySearch: serverHandleActivitySearch } = serverFilters;

const mcpConfigJson = computed(() => {
  if (!props.editingServer) return '';
  const servers: Record<string, { url: string }> = {};
  servers[props.editingServer.slug] = { url: props.editingServer.url };
  return JSON.stringify({ mcpServers: servers }, null, 2);
});

const topUserItems = computed(() =>
  (props.serverDashboardStats?.topUsers ?? []).map((u) => ({ name: u.name, value: u.toolCalls, valueSuffix: 'tool calls' })),
);

const mcpConfigCollapsed = ref(true);
</script>

<template>
  <template v-if="editingServer">
    <!-- Overview Tab — Dashboard Layout -->
    <div v-if="serverDetailTab === 'overview'" class="flex-1 overflow-hidden bg-neutral-surface">
      <DashboardPageLayout class="w-full! h-full!">
        <div class="flex flex-col gap-6">
          <CollapsiblePanel
            header="MCP Server Configuration"
            toggleable
            v-model:collapsed="mcpConfigCollapsed"
          >
            <template #titleicon="iconProps">
              <CommandLineIcon :class="iconProps.class" />
            </template>
            <template #toggleicon="iconProps">
              <ChevronRightIcon :class="iconProps.class" />
            </template>
            <div class="relative bg-neutral-surface_deep rounded-md">
              <pre class="text-body-sm font-mono p-md overflow-x-auto whitespace-pre">{{ mcpConfigJson }}</pre>
              <div class="absolute top-4 right-4 z-10">
                <CopyButton :text="mcpConfigJson" />
              </div>
            </div>
          </CollapsiblePanel>

          <div v-if="serverDashboardStats" class="grid grid-cols-3 gap-6">
            <DashboardStatCard
              header="Bound User Groups"
              :value="serverDashboardStats.boundUserGroups"
              subtitle="Groups"
              changeLabel="Configured"
            />
            <DashboardStatCard
              header="Active Users"
              :value="serverDashboardStats.activeUsers"
              subtitle="Users"
              :changeValue="serverDashboardStats.activeUsersChange"
              changeLabel="vs last month"
              showArrow
            />
            <DashboardStatCard
              header="Total Requests (24h)"
              :value="serverDashboardStats.totalRequests"
              subtitle="Requests"
              :changeValue="serverDashboardStats.totalRequestsChange"
              changeLabel="vs last month"
              showArrow
            />
            <DashboardStatCard
              header="Avg Response Time"
              :value="serverDashboardStats.avgResponseTime"
              :changeValue="serverDashboardStats.avgResponseTimeChange"
              changeLabel="vs last month"
              showArrow
            />
            <DashboardStatCard
              header="Error Rate"
              :value="serverDashboardStats.errorRate"
              :changeValue="serverDashboardStats.errorRateChange"
              changeLabel="vs last month"
              showArrow
            />
          </div>

          <CollapsiblePanel header="Monthly Usage">
            <template #titleicon="iconProps">
              <ChartBarSquareIcon :class="iconProps.class" />
            </template>
            <Chart type="line" :data="serverMonthlyChartData" :options="monthlyChartOptions" />
          </CollapsiblePanel>

          <DashboardTopList
            header="Top Users"
            :items="topUserItems"
            summaryLabel="Active users"
            trendValue="8%"
            trendLabel="vs last month"
          />
        </div>

        <template #sidebar>
          <DashboardRecentActivity :activities="serverRecentActivity" />
        </template>
      </DashboardPageLayout>
    </div>

    <!-- User Groups Tab -->
    <div v-if="serverDetailTab === 'server-user-groups'" class="flex-1 flex flex-col overflow-hidden p-6 pb-0">
      <CircuitDataTable
        :columns="profileUserGroupColumns"
        :data="serverUserGroups"
        dataKey="slug"
        :paginator="true"
        :rows="10"
        scrollable
        scrollHeight="flex"
      >
        <template #toolbar>
          <DataTableToolbar
            searchPlaceholder="Search user groups..."
            :showAddButton="false"
            :showFilterButton="false"
            :showRefreshButton="false"
            :showColumnsButton="false"
            :showDownloadButton="false"
          >
            <template #saved-views>
              <div class="flex items-center gap-4 px-2 py-1.5 text-body-md">
                <p class="text-body-md text-neutral-base whitespace-nowrap">
                  <span class="font-semibold">{{ serverUserGroups.length }}</span> user groups bound
                </p>
              </div>
            </template>
          </DataTableToolbar>
        </template>
      </CircuitDataTable>
    </div>

    <!-- Activity Log Tab -->
    <div v-if="serverDetailTab === 'server-activity'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative">
      <ListPageLayout class="w-full! h-full!">
        <CircuitDataTable
          :columns="activityLogColumns"
          :data="serverFilteredActivityData"
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
              :activeFilters="serverFilters.activeFilterChips.value"
              :maxVisibleFilters="5"
              @search="serverHandleActivitySearch"
              @filter="serverFilters.openFilterDialog"
              @clear-all="serverFilters.clearAllFilters"
              @filter-remove="serverFilters.removeFilterChip"
            >
              <template #right-section>
                <span class="text-body-md text-neutral-subtle mr-md">{{ serverFilteredActivityData.length }} Events</span>
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
        :visible="serverFilters.showFilterDialog.value"
        :draggable="false"
        modal
        header="Apply filters"
        :style="{ width: '560px' }"
        @update:visible="!$event && serverFilters.cancelFilterDialog()"
      >
        <template #closeicon><XMarkIcon /></template>

        <div class="flex flex-col gap-md">
          <FormField label="User">
            <template #default="{ inputId }">
              <MultiSelect
                :id="inputId"
                v-model="serverFilters.draftUsers.value"
                :options="serverFilters.userOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="All users"
                :maxSelectedLabels="2"
                class="w-full"
              />
            </template>
          </FormField>

          <FormField label="Event Type">
            <template #default="{ inputId }">
              <MultiSelect
                :id="inputId"
                v-model="serverFilters.draftEventTypes.value"
                :options="serverFilters.eventTypeOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="All event types"
                :maxSelectedLabels="2"
                class="w-full"
              />
            </template>
          </FormField>

          <FormField label="Status">
            <template #default="{ inputId }">
              <SelectButton
                :id="inputId"
                v-model="serverFilters.draftStatus.value"
                :options="serverFilters.statusOptions"
                :allowEmpty="false"
              />
            </template>
          </FormField>
        </div>

        <template #footer>
          <div class="flex items-center flex-1 min-w-0">
            <span class="text-body-sm text-neutral-subtle">{{ serverFilters.activeFilterCount.value }} Filters applied</span>
          </div>
          <div class="flex gap-sm shrink-0">
            <Button
              label="Cancel"
              severity="secondary"
              variant="text"
              @click="serverFilters.cancelFilterDialog()"
            />
            <Button
              label="Clear All"
              severity="secondary"
              variant="outlined"
              @click="serverFilters.clearDraftFilters()"
            />
            <Button
              label="Apply"
              @click="serverFilters.applyFilters()"
            />
          </div>
        </template>
      </Dialog>
    </div>
  </template>
</template>
