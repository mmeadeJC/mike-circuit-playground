<script setup lang="ts">
import { computed, markRaw, ref } from 'vue';
import {
  CollapsiblePanel,
  DataTable,
  DataTableCellLink,
  DataTableCellText,
  DataTableToolbar,
  FormField,
  PageSection,
  ToggleSwitch,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import { ChartBarSquareIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import {
  WINDOWS_KB_ROWS,
  WINDOWS_PATCH_INSIGHTS,
  WINDOWS_SEVERITY_FILTER_OPTIONS,
  type WindowsKbRow,
} from './data/unifiedPatchDashboardWindowsData';

const insightsCollapsed = ref(false);
const searchQuery = ref('');
const first = ref(0);
const rows = ref(10);
const selection = ref<WindowsKbRow[]>([]);
const hideSuperseded = ref(true);
const showFilterDialog = ref(false);
const allSeverityValues = WINDOWS_SEVERITY_FILTER_OPTIONS.map((option) => option.value);
const appliedSeverities = ref<string[]>([...allSeverityValues]);
const draftSeverities = ref<string[]>([]);

function normalizeSeverity(severity: string) {
  return severity === 'NONE' ? 'None' : severity;
}

const columns = [
  {
    field: 'patchId',
    header: 'Patch',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: WindowsKbRow }) => ({
      label: sp.data.patchId,
      href: '#',
    }),
  },
  {
    field: 'title',
    header: 'Title',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: WindowsKbRow }) => ({ label: sp.data.title }),
  },
  {
    field: 'classification',
    header: 'Classification',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: WindowsKbRow }) => ({ label: sp.data.classification }),
  },
  {
    field: 'cveDetails',
    header: 'CVE Details',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: WindowsKbRow }) => ({ label: sp.data.cveDetails }),
  },
  {
    field: 'severity',
    header: 'Severity',
    sortable: true,
    width: '110px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: WindowsKbRow }) => ({ label: sp.data.severity }),
  },
  {
    field: 'releaseDate',
    header: 'Release Date',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: WindowsKbRow }) => ({ label: sp.data.releaseDate }),
  },
  {
    field: 'superseded',
    header: 'Superseded',
    sortable: true,
    width: '110px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: WindowsKbRow }) => ({ label: sp.data.superseded }),
  },
  {
    field: 'applicable',
    header: 'Applicable',
    sortable: true,
    width: '110px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: WindowsKbRow }) => ({
      label: String(sp.data.applicable),
      href: '#',
    }),
  },
];

const filteredRows = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return WINDOWS_KB_ROWS.filter((row) => {
    const matchesSearch =
      !query
      || row.patchId.toLowerCase().includes(query)
      || row.title.toLowerCase().includes(query)
      || row.classification.toLowerCase().includes(query);
    const matchesSeverity =
      appliedSeverities.value.length === 0
      || appliedSeverities.value.includes(normalizeSeverity(row.severity));
    const matchesSuperseded = !hideSuperseded.value || row.superseded !== 'Yes';
    return matchesSearch && matchesSeverity && matchesSuperseded;
  });
});

const currentPageRows = computed(() =>
  filteredRows.value.slice(first.value, first.value + rows.value),
);

const activeFilterChips = computed(() => {
  const chips = [];
  if (
    appliedSeverities.value.length > 0
    && appliedSeverities.value.length < WINDOWS_SEVERITY_FILTER_OPTIONS.length
  ) {
    const value = appliedSeverities.value.length <= 2
      ? appliedSeverities.value.join(', ')
      : `${appliedSeverities.value.slice(0, 2).join(', ')}, +${appliedSeverities.value.length - 2}`;
    chips.push({ id: 'severity', key: 'Severity', operator: 'is', value });
  }
  return chips;
});

function openFilterDialog() {
  draftSeverities.value = [...appliedSeverities.value];
  showFilterDialog.value = true;
}

function applyFilters() {
  appliedSeverities.value = [...draftSeverities.value];
  showFilterDialog.value = false;
  first.value = 0;
}

function cancelFilterDialog() {
  showFilterDialog.value = false;
}

function clearDraftFilters() {
  draftSeverities.value = [];
}

function clearAllFilters() {
  appliedSeverities.value = [];
  first.value = 0;
}

function removeFilterChip(chip: { id?: string }) {
  if (chip.id === 'severity') appliedSeverities.value = [];
}

function resetPageFilters() {
  appliedSeverities.value = [...allSeverityValues];
  hideSuperseded.value = true;
  searchQuery.value = '';
  first.value = 0;
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
    <div class="flex flex-wrap items-start justify-between gap-md">
      <span class="text-heading-4 text-neutral-base">Overview and Patch List</span>
      <div class="flex flex-wrap items-center gap-sm shrink-0">
        <Button
          label="Reset Page Filters"
          severity="secondary"
          variant="text"
          @click="resetPageFilters"
        />
        <MultiSelect
          v-model="appliedSeverities"
          :options="WINDOWS_SEVERITY_FILTER_OPTIONS"
          optionLabel="label"
          optionValue="value"
          placeholder="Severity"
          :maxSelectedLabels="2"
          class="w-56!"
          display="chip"
        />
      </div>
    </div>

    <CollapsiblePanel
      v-model:collapsed="insightsCollapsed"
      toggleable
      header="Patch Insights"
    >
      <template #titleicon="iconProps">
        <ChartBarSquareIcon :class="iconProps.class" />
      </template>
      <template #toggleicon="iconProps">
        <ChevronRightIcon :class="iconProps.class" />
      </template>

      <div class="flex flex-col gap-md">
        <div class="flex flex-wrap items-center gap-md">
          <div class="flex items-center gap-xs">
            <span
              class="size-2 rounded-full shrink-0"
              :class="WINDOWS_PATCH_INSIGHTS.deployedColorClass"
            />
            <span class="text-body-sm text-neutral-base">
              {{ WINDOWS_PATCH_INSIGHTS.deployedPercent }}% Patches Fully Deployed
            </span>
          </div>
          <div class="flex items-center gap-xs">
            <span
              class="size-2 rounded-full shrink-0"
              :class="WINDOWS_PATCH_INSIGHTS.pendingColorClass"
            />
            <span class="text-body-sm text-neutral-base">
              {{ WINDOWS_PATCH_INSIGHTS.pendingPercent }}% Pending Patches
            </span>
          </div>
        </div>

        <div class="flex h-4 min-w-0 rounded-xs bg-neutral-surface_deep gap-px p-px">
          <div
            class="h-full rounded-l-xs"
            :class="WINDOWS_PATCH_INSIGHTS.deployedColorClass"
            :style="{ width: `${WINDOWS_PATCH_INSIGHTS.deployedPercent}%` }"
          />
          <div
            class="h-full rounded-r-xs"
            :class="WINDOWS_PATCH_INSIGHTS.pendingColorClass"
            :style="{ width: `${WINDOWS_PATCH_INSIGHTS.pendingPercent}%` }"
          />
        </div>
      </div>
    </CollapsiblePanel>

    <PageSection title="KB List">
      <div class="flex flex-col min-h-120 relative">
        <DataTable
          v-model:selection="selection"
          :data="currentPageRows"
          :columns="columns"
          :card="false"
          selectionMode="multiple"
          dataKey="id"
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
              searchPlaceholder="Search"
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
            >
              <template #saved-views>
                <ToggleSwitch
                  v-model="hideSuperseded"
                  label="Hide superseded KBs"
                />
              </template>
            </DataTableToolbar>
          </template>

          <template #empty>
            <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
              <span class="text-body-md">No KBs match your search or filters</span>
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
        <FormField label="Severity">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              v-model="draftSeverities"
              :options="WINDOWS_SEVERITY_FILTER_OPTIONS"
              optionLabel="label"
              optionValue="value"
              placeholder="All severities"
              :maxSelectedLabels="2"
              class="w-full"
            />
          </template>
        </FormField>
      </div>

      <template #footer>
        <div class="flex items-center flex-1 min-w-0">
          <span class="text-body-sm text-neutral-subtle">
            {{ draftSeverities.length }} filter{{ draftSeverities.length === 1 ? '' : 's' }} applied
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
