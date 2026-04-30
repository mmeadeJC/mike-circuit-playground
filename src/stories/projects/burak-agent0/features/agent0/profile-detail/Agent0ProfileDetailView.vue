<script setup lang="ts">
import { computed, ref } from 'vue';
import { DataTable as CircuitDataTable, DataTableToolbar, CollapsiblePanel, CheckboxWithLabel, FormField, CopyButton, DashboardPageLayout, ListPageLayout, PageSaveBar } from '@jumpcloud/circuit/components';
import Chart from 'primevue/chart';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import DashboardStatCard from '../dashboard/DashboardStatCard.vue';
import DashboardTopList from '../dashboard/DashboardTopList.vue';
import DashboardRecentActivity from '../dashboard/DashboardRecentActivity.vue';
import { useActivityFilters } from '../shared/composables';
import { activityLogColumns } from '../shared/columns';
import { ChartBarSquareIcon, ChevronRightIcon, CommandLineIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import type { ActivityLogEntry, ProfileDashboardStats } from '../shared/data';
import type { Server } from '../shared/types';

const props = defineProps<{
  editingProfile: {
    profileId: string;
    label: string;
    createdAt: string;
  } | null;
  profileDetailTab: string;
  profileBoundServers: Server[];
  profileBoundUserGroups: unknown[];
  profileServerColumns: unknown[];
  profileUserGroupColumns: unknown[];
  profileServersTableData: unknown[];
  profileUserGroupsTableData: unknown[];
  selectedProfileServers: unknown[];
  selectedProfileUserGroups: unknown[];
  showBoundServersOnly: boolean;
  showBoundUserGroupsOnly: boolean;
  serversDataLength: number;
  userGroupsDataLength: number;
  profileDashboardStats?: ProfileDashboardStats | null;
  profileTopServerUsage?: { name: string; requests: number }[];
  profileRecentActivity?: { user: string; server: string; time: string; event: string }[];
  profileMonthlyChartData?: Record<string, unknown>;
  monthlyChartOptions?: Record<string, unknown>;
  profileActivityData?: ActivityLogEntry[];
  hasBindingChanges?: boolean;
  isSaving?: boolean;
  isSaved?: boolean;
}>();

const emit = defineEmits<{
  'update:selectedProfileServers': [unknown[]];
  'update:selectedProfileUserGroups': [unknown[]];
  'update:showBoundServersOnly': [boolean];
  'update:showBoundUserGroupsOnly': [boolean];
  saveBindings: [];
  discardBindings: [];
}>();

const showBoundServersOnlyModel = computed({
  get: () => props.showBoundServersOnly,
  set: (value: boolean) => emit('update:showBoundServersOnly', value),
});

const showBoundUserGroupsOnlyModel = computed({
  get: () => props.showBoundUserGroupsOnly,
  set: (value: boolean) => emit('update:showBoundUserGroupsOnly', value),
});

const profileFilters = useActivityFilters(props.profileActivityData ?? []);
const { filteredActivityData: profileFilteredActivityData, handleActivitySearch: profileHandleActivitySearch } = profileFilters;

const mcpConfigCollapsed = ref(true);

const mcpConfigJson = computed(() => {
  const servers: Record<string, { url: string }> = {};
  for (const server of props.profileBoundServers) {
    servers[server.slug] = { url: server.url };
  }
  return JSON.stringify({ mcpServers: servers }, null, 2);
});

const topServerItems = computed(() =>
  (props.profileTopServerUsage ?? []).map((s) => ({ name: s.name, value: s.requests, valueSuffix: 'requests' })),
);

const topUserItems = computed(() =>
  (props.profileDashboardStats?.topUsers ?? []).map((u) => ({ name: u.name, value: u.toolCalls, valueSuffix: 'tool calls' })),
);
</script>

<template>
  <template v-if="editingProfile">
    <!-- Overview Tab — Dashboard Layout -->
    <div v-if="profileDetailTab === 'overview'" class="flex-1 overflow-hidden bg-neutral-surface">
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

          <div v-if="profileDashboardStats" class="grid grid-cols-3 gap-6">
            <DashboardStatCard
              header="Bound User Groups"
              :value="String(profileBoundUserGroups.length)"
              subtitle="Groups"
              changeLabel="Configured"
            />
            <DashboardStatCard
              header="Active Users"
              :value="profileDashboardStats.activeUsers"
              subtitle="Users"
              :changeValue="profileDashboardStats.activeUsersChange"
              changeLabel="vs last month"
              showArrow
            />
            <DashboardStatCard
              header="Active Servers"
              :value="profileDashboardStats.activeServers"
              subtitle="Servers"
              :changeValue="profileDashboardStats.activeServersPercent"
              changeLabel="active"
            />
            <DashboardStatCard
              header="Total Requests (24h)"
              :value="profileDashboardStats.totalRequests"
              subtitle="Requests"
              :changeValue="profileDashboardStats.totalRequestsChange"
              changeLabel="vs last month"
              showArrow
            />
            <DashboardStatCard
              header="Avg Response Time"
              :value="profileDashboardStats.avgResponseTime"
              :changeValue="profileDashboardStats.avgResponseTimeChange"
              changeLabel="vs last month"
              showArrow
            />
            <DashboardStatCard
              header="Error Rate"
              :value="profileDashboardStats.errorRate"
              :changeValue="profileDashboardStats.errorRateChange"
              changeLabel="vs last month"
              showArrow
            />
          </div>

          <CollapsiblePanel header="Monthly Usage by Server">
            <template #titleicon="iconProps">
              <ChartBarSquareIcon :class="iconProps.class" />
            </template>
            <Chart type="line" :data="profileMonthlyChartData" :options="monthlyChartOptions" />
          </CollapsiblePanel>

          <div class="grid grid-cols-2 gap-6">
            <DashboardTopList
              header="Top Servers"
              :items="topServerItems"
              summaryLabel="Active servers"
              trendValue="12%"
              trendLabel="vs last month"
            />
            <DashboardTopList
              header="Top Users"
              :items="topUserItems"
              summaryLabel="Active users"
              trendValue="8%"
              trendLabel="vs last month"
            />
          </div>
        </div>

        <template #sidebar>
          <DashboardRecentActivity :activities="profileRecentActivity ?? []" />
        </template>
      </DashboardPageLayout>
    </div>

    <!-- Servers Tab -->
    <div v-if="profileDetailTab === 'profile-servers'" class="flex-1 flex flex-col overflow-hidden p-6 pb-0">
      <CircuitDataTable
        :columns="profileServerColumns"
        :data="profileServersTableData"
        dataKey="slug"
        selectionMode="multiple"
        :selection="selectedProfileServers"
        @update:selection="emit('update:selectedProfileServers', $event)"
        :paginator="true"
        :rows="10"
        scrollable
        scrollHeight="flex"
      >
        <template #toolbar>
          <DataTableToolbar
            searchPlaceholder="Search servers..."
            :showAddButton="false"
            :showFilterButton="false"
            :showRefreshButton="false"
            :showColumnsButton="false"
            :showDownloadButton="false"
          >
            <template #saved-views>
              <div class="flex items-center gap-4 px-2 py-1.5 text-body-md">
                <CheckboxWithLabel v-model="showBoundServersOnlyModel" :binary="true">
                  <template #label>show bound servers ({{ profileBoundServers.length }})</template>
                </CheckboxWithLabel>
                <div class="border-l border-neutral-default_solid h-5 shrink-0" />
                <p class="text-body-md text-neutral-base whitespace-nowrap">
                  <span class="font-semibold">{{ profileBoundServers.length }} of {{ serversDataLength }}</span> servers bound
                </p>
              </div>
            </template>
          </DataTableToolbar>
        </template>
      </CircuitDataTable>
    </div>

    <!-- User Groups Tab -->
    <div v-if="profileDetailTab === 'profile-user-groups'" class="flex-1 flex flex-col overflow-hidden p-6 pb-0">
      <CircuitDataTable
        :columns="profileUserGroupColumns"
        :data="profileUserGroupsTableData"
        dataKey="slug"
        selectionMode="multiple"
        :selection="selectedProfileUserGroups"
        @update:selection="emit('update:selectedProfileUserGroups', $event)"
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
                <CheckboxWithLabel v-model="showBoundUserGroupsOnlyModel" :binary="true">
                  <template #label>show bound user groups ({{ profileBoundUserGroups.length }})</template>
                </CheckboxWithLabel>
                <div class="border-l border-neutral-default_solid h-5 shrink-0" />
                <p class="text-body-md text-neutral-base whitespace-nowrap">
                  <span class="font-semibold">{{ profileBoundUserGroups.length }} of {{ userGroupsDataLength }}</span> user groups bound
                </p>
              </div>
            </template>
          </DataTableToolbar>
        </template>
      </CircuitDataTable>
    </div>

    <!-- Activity Log Tab -->
    <div v-if="profileDetailTab === 'profile-activity'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative">
      <ListPageLayout class="w-full! h-full!">
        <CircuitDataTable
          :columns="activityLogColumns"
          :data="profileFilteredActivityData"
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
              :activeFilters="profileFilters.activeFilterChips.value"
              :maxVisibleFilters="5"
              @search="profileHandleActivitySearch"
              @filter="profileFilters.openFilterDialog"
              @clear-all="profileFilters.clearAllFilters"
              @filter-remove="profileFilters.removeFilterChip"
            >
              <template #right-section>
                <span class="text-body-md text-neutral-subtle mr-md">{{ profileFilteredActivityData.length }} Events</span>
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
        :visible="profileFilters.showFilterDialog.value"
        :draggable="false"
        modal
        header="Apply filters"
        :style="{ width: '560px' }"
        @update:visible="!$event && profileFilters.cancelFilterDialog()"
      >
        <template #closeicon><XMarkIcon /></template>

        <div class="flex flex-col gap-md">
          <FormField label="User">
            <template #default="{ inputId }">
              <MultiSelect
                :id="inputId"
                v-model="profileFilters.draftUsers.value"
                :options="profileFilters.userOptions"
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
                v-model="profileFilters.draftEventTypes.value"
                :options="profileFilters.eventTypeOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="All event types"
                :maxSelectedLabels="2"
                class="w-full"
              />
            </template>
          </FormField>

          <FormField label="Server">
            <template #default="{ inputId }">
              <MultiSelect
                :id="inputId"
                v-model="profileFilters.draftServers.value"
                :options="profileFilters.serverOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="All servers"
                :maxSelectedLabels="2"
                class="w-full"
              />
            </template>
          </FormField>

          <FormField label="Status">
            <template #default="{ inputId }">
              <SelectButton
                :id="inputId"
                v-model="profileFilters.draftStatus.value"
                :options="profileFilters.statusOptions"
                :allowEmpty="false"
              />
            </template>
          </FormField>
        </div>

        <template #footer>
          <div class="flex items-center flex-1 min-w-0">
            <span class="text-body-sm text-neutral-subtle">{{ profileFilters.activeFilterCount.value }} Filters applied</span>
          </div>
          <div class="flex gap-sm shrink-0">
            <Button
              label="Cancel"
              severity="secondary"
              variant="text"
              @click="profileFilters.cancelFilterDialog()"
            />
            <Button
              label="Clear All"
              severity="secondary"
              variant="outlined"
              @click="profileFilters.clearDraftFilters()"
            />
            <Button
              label="Apply"
              @click="profileFilters.applyFilters()"
            />
          </div>
        </template>
      </Dialog>
    </div>

    <PageSaveBar
      :visible="hasBindingChanges ?? false"
      :saving="isSaving ?? false"
      :saved="isSaved ?? false"
      message="You have unsaved binding changes"
      saveLabel="Save bindings"
      discardLabel="Discard changes"
      @save="emit('saveBindings')"
      @discard="emit('discardBindings')"
    />
  </template>
</template>
