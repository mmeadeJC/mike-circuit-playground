<script setup lang="ts">
import { computed, defineComponent, markRaw, ref } from 'vue';
import {
  CollapsiblePanel,
  DataTable,
  DataTableCellLink,
  DataTableCellText,
  DataTableToolbar,
  FormField,
  PageSection,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import Tag from 'primevue/tag';
import { ChartBarSquareIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import {
  APPLE_DEPLOYMENT_ROWS,
  APPLE_OS_UPDATE_ROWS,
  APPLE_PLATFORM_FILTER_OPTIONS,
  appleSeverityTagSeverity,
  type AppleOsUpdateRow,
} from './data/unifiedPatchDashboardAppleData';

const deploymentCollapsed = ref(false);
const searchQuery = ref('');
const first = ref(0);
const rows = ref(10);
const showFilterDialog = ref(false);
const appliedPlatforms = ref<string[]>([]);
const draftPlatforms = ref<string[]>([]);

const AppleSeverityCell = markRaw(
  defineComponent({
    name: 'AppleSeverityCell',
    components: { Tag },
    props: {
      label: { type: String, default: '' },
    },
    setup(props) {
      const severity = computed(() =>
        appleSeverityTagSeverity(props.label as AppleOsUpdateRow['highestSeverity']),
      );
      return { severity };
    },
    template: `
      <Tag
        v-if="label && label !== 'None'"
        :value="label"
        :severity="severity"
      />
      <span v-else class="text-body-md text-neutral-subtle">—</span>
    `,
  }),
);

const AppleCveDetailsCell = markRaw({
  name: 'AppleCveDetailsCell',
  components: { DataTableCellLink, DataTableCellText },
  props: {
    href: { type: String, default: undefined },
  },
  template: `
    <DataTableCellLink v-if="href" label="View CVEs" :href="href" />
    <DataTableCellText v-else label="—" />
  `,
});

const columns = [
  {
    field: 'platform',
    header: 'Platform',
    sortable: true,
    width: '100px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: sp.data.platform }),
  },
  {
    field: 'osVersion',
    header: 'OS Version',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: sp.data.osVersion }),
  },
  {
    field: 'releaseDate',
    header: 'Release Date',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: sp.data.releaseDate }),
  },
  {
    field: 'cveCount',
    header: 'CVE Count',
    sortable: true,
    width: '110px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: String(sp.data.cveCount) }),
  },
  {
    field: 'highestSeverity',
    header: 'Highest Severity',
    sortable: true,
    width: '140px',
    component: AppleSeverityCell,
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: sp.data.highestSeverity }),
  },
  {
    field: 'cveDetails',
    header: 'CVE Details',
    width: '120px',
    component: AppleCveDetailsCell,
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ href: sp.data.cveDetailsHref }),
  },
  {
    field: 'targetedDevices',
    header: 'Targeted Devices',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: String(sp.data.targetedDevices) }),
  },
  {
    field: 'installedDevices',
    header: 'Installed Devices',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: String(sp.data.installedDevices) }),
  },
  {
    field: 'pendingDevices',
    header: 'Pending Devices',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: String(sp.data.pendingDevices) }),
  },
  {
    field: 'installingDevices',
    header: 'Installing Devices',
    sortable: true,
    width: '150px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: AppleOsUpdateRow }) => ({ label: String(sp.data.installingDevices) }),
  },
];

const filteredRows = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return APPLE_OS_UPDATE_ROWS.filter((row) => {
    const matchesSearch =
      !query
      || row.platform.toLowerCase().includes(query)
      || row.osVersion.toLowerCase().includes(query)
      || row.releaseDate.toLowerCase().includes(query);
    const matchesPlatform =
      appliedPlatforms.value.length === 0
      || appliedPlatforms.value.includes(row.platform);
    return matchesSearch && matchesPlatform;
  });
});

const currentPageRows = computed(() =>
  filteredRows.value.slice(first.value, first.value + rows.value),
);

const activeFilterChips = computed(() => {
  if (appliedPlatforms.value.length === 0) return [];
  const value = appliedPlatforms.value.length <= 2
    ? appliedPlatforms.value.join(', ')
    : `${appliedPlatforms.value.slice(0, 2).join(', ')}, +${appliedPlatforms.value.length - 2}`;
  return [{ id: 'platform', key: 'Platform', operator: 'is', value }];
});

function deploymentSummary(row: (typeof APPLE_DEPLOYMENT_ROWS)[number]) {
  if (row.total === 0) return '0 of 0 devices 0%';
  return `${row.deployed} of ${row.total} devices ${row.percent}%`;
}

function openFilterDialog() {
  draftPlatforms.value = [...appliedPlatforms.value];
  showFilterDialog.value = true;
}

function applyFilters() {
  appliedPlatforms.value = [...draftPlatforms.value];
  showFilterDialog.value = false;
  first.value = 0;
}

function cancelFilterDialog() {
  showFilterDialog.value = false;
}

function clearDraftFilters() {
  draftPlatforms.value = [];
}

function clearAllFilters() {
  appliedPlatforms.value = [];
  first.value = 0;
}

function removeFilterChip(chip: { id?: string }) {
  if (chip.id === 'platform') appliedPlatforms.value = [];
}

function handleSearch(query: string) {
  searchQuery.value = query;
  first.value = 0;
}

function handlePageChange(event: { first: number; rows: number }) {
  first.value = event.first;
  rows.value = event.rows;
}
</script>

<template>
  <div class="flex flex-col gap-md min-h-0">
    <PageSection title="Apple Update Summary">
      <CollapsiblePanel
        v-model:collapsed="deploymentCollapsed"
        toggleable
        header="OS Deployment Progress"
      >
        <template #titleicon="iconProps">
          <ChartBarSquareIcon :class="iconProps.class" />
        </template>
        <template #toggleicon="iconProps">
          <ChevronRightIcon :class="iconProps.class" />
        </template>

        <div class="grid grid-cols-1 gap-md min-[720px]:grid-cols-3">
          <div
            v-for="row in APPLE_DEPLOYMENT_ROWS"
            :key="row.id"
            class="rounded-sm border border-neutral-default_solid bg-neutral-surface p-md flex flex-col gap-sm"
          >
            <span class="text-body-md-semi-bold text-neutral-base">{{ row.platform }}</span>
            <span class="text-body-sm text-neutral-subtle">{{ row.version }}</span>
            <div class="h-2 rounded-xs bg-neutral-surface_deep overflow-hidden">
              <div
                class="h-full rounded-xs"
                :class="row.barColorClass"
                :style="{ width: `${Math.max(row.percent, row.percent > 0 ? 4 : 0)}%` }"
              />
            </div>
            <span class="text-body-sm text-neutral-subtle">{{ deploymentSummary(row) }}</span>
          </div>
        </div>
      </CollapsiblePanel>
    </PageSection>

    <PageSection title="Apple OS Update Listing">
      <template #subtitle>
        <span class="text-body-md text-neutral-subtle">
          List of macOS, iOS, and iPadOS versions targeted by active supported App update policy.
        </span>
      </template>

      <div class="flex flex-col min-h-120 relative">
        <DataTable
          :data="currentPageRows"
          :columns="columns"
          :card="false"
          :paginator="true"
          :rows="rows"
          :first="first"
          :totalRecords="filteredRows.length"
          :lazy="true"
          :showRowsPerPageOptions="true"
          :showPageReport="true"
          scrollable
          scrollHeight="flex"
          @update:first="first = $event"
          @update:rows="rows = $event"
          @page-change="handlePageChange"
        >
          <template #toolbar>
            <DataTableToolbar
              searchPlaceholder="Search OS versions..."
              :showAddButton="false"
              :showFilterButton="true"
              :showRefreshButton="true"
              :showDownloadButton="true"
              :showColumnsButton="false"
              :showSaveViewButton="false"
              :activeFilters="activeFilterChips"
              @search="handleSearch"
              @filter="openFilterDialog"
              @filter-remove="removeFilterChip"
              @clear-all="clearAllFilters"
            />
          </template>

          <template #empty>
            <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
              <span class="text-body-md">No OS versions match your search or filters</span>
            </div>
          </template>
        </DataTable>
      </div>
    </PageSection>

    <Dialog
      v-model:visible="showFilterDialog"
      :draggable="false"
      modal
      header="Apply filters"
      :style="{ width: '560px' }"
      @update:visible="!$event && cancelFilterDialog()"
    >
      <template #closeicon><XMarkIcon /></template>

      <div class="flex flex-col gap-md">
        <FormField label="Platform">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              v-model="draftPlatforms"
              :options="APPLE_PLATFORM_FILTER_OPTIONS"
              optionLabel="label"
              optionValue="value"
              placeholder="All platforms"
              :maxSelectedLabels="2"
              class="w-full"
            />
          </template>
        </FormField>
      </div>

      <template #footer>
        <div class="flex items-center flex-1 min-w-0">
          <span class="text-body-sm text-neutral-subtle">
            {{ draftPlatforms.length }} filter{{ draftPlatforms.length === 1 ? '' : 's' }} applied
          </span>
        </div>
        <div class="flex gap-sm shrink-0">
          <Button label="Cancel" severity="secondary" variant="text" @click="cancelFilterDialog" />
          <Button label="Clear All" severity="secondary" variant="outlined" @click="clearDraftFilters" />
          <Button label="Apply" @click="applyFilters" />
        </div>
      </template>
    </Dialog>
  </div>
</template>
