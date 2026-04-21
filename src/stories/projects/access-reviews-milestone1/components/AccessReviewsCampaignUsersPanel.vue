<script setup lang="ts">
import { computed, defineComponent, h, markRaw, ref } from 'vue';
import {
  DataTable,
  DataTableCellText,
  DataTableToolbar,
  FormField,
  MessageNotification,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import type {
  AccessReviewCampaign,
  CampaignReviewUserRow,
  CampaignUserRowDecision,
} from '../types';
import { mockCampaignReviewUserRows } from '../mockData';
import CampaignUserRowExpansionContent from './CampaignUserRowExpansionContent.vue';

defineOptions({ name: 'AccessReviewsCampaignUsersPanel' });

const props = defineProps<{
  campaign: AccessReviewCampaign;
}>();

type DecisionFilter = 'all' | CampaignUserRowDecision;

const searchQuery = ref('');
const showFilterDialog = ref(false);
const appliedDecision = ref<DecisionFilter>('all');
const draftDecision = ref<DecisionFilter>('all');

const sourceRows = computed(() => mockCampaignReviewUserRows(props.campaign));

const filteredRows = computed(() => {
  let rows = sourceRows.value;
  const q = searchQuery.value.trim().toLowerCase();
  if (q) {
    rows = rows.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q),
    );
  }
  if (appliedDecision.value !== 'all') {
    rows = rows.filter((r) => r.decision === appliedDecision.value);
  }
  return rows;
});

const draftFilterCount = computed(() => (draftDecision.value !== 'all' ? 1 : 0));

const activeFilterChips = computed(() => {
  if (appliedDecision.value === 'all') return [];
  const labels: Record<Exclude<DecisionFilter, 'all'>, string> = {
    keep: 'Approve',
    revoke: 'Revoke',
    pending: 'Pending',
  };
  return [
    {
      id: 'decision',
      key: 'Decision',
      operator: 'is',
      value: labels[appliedDecision.value],
    },
  ];
});

const decisionFilterOptions = [
  { label: 'All decisions', value: 'all' as const },
  { label: 'Approve', value: 'keep' as const },
  { label: 'Revoke', value: 'revoke' as const },
  { label: 'Pending', value: 'pending' as const },
];

function openFilterDialog() {
  draftDecision.value = appliedDecision.value;
  showFilterDialog.value = true;
}

function applyFilters() {
  appliedDecision.value = draftDecision.value;
  showFilterDialog.value = false;
}

function cancelFilterDialog() {
  showFilterDialog.value = false;
}

function clearDraftFilters() {
  draftDecision.value = 'all';
}

function clearAllFilters() {
  appliedDecision.value = 'all';
  draftDecision.value = 'all';
}

function removeFilterChip(chip: { id?: string }) {
  if (chip.id === 'decision') {
    appliedDecision.value = 'all';
  }
}

function decisionSeverity(d: CampaignUserRowDecision): 'success' | 'danger' | 'secondary' {
  if (d === 'keep') return 'success';
  if (d === 'revoke') return 'danger';
  return 'secondary';
}

function decisionLabel(d: CampaignUserRowDecision): string {
  if (d === 'keep') return 'Approve';
  if (d === 'revoke') return 'Revoke';
  return 'Pending';
}

const UserCell = markRaw(
  defineComponent({
    name: 'ArM1CampaignUserCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignReviewUserRow;
        return h('div', { class: 'flex flex-col gap-0 justify-center py-1 min-h-12 pl-md' }, [
          h('span', { class: 'text-body-md-bold text-neutral-base' }, row.name),
          h('span', { class: 'text-body-sm text-neutral-subtle' }, row.email),
        ]);
      };
    },
  }),
);

const GroupsCountCell = markRaw(
  defineComponent({
    name: 'ArM1GroupsCountCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignReviewUserRow;
        const n = row.groupsInReviewCount;
        const label = `${n} group${n === 1 ? '' : 's'}`;
        return h('span', { class: 'text-body-md text-neutral-base' }, label);
      };
    },
  }),
);

const DecisionCell = markRaw(
  defineComponent({
    name: 'ArM1DecisionCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignReviewUserRow;
        return h(Tag, {
          value: decisionLabel(row.decision),
          severity: decisionSeverity(row.decision),
        });
      };
    },
  }),
);

const ProgressCell = markRaw(
  defineComponent({
    name: 'ArM1ProgressCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignReviewUserRow;
        const label = `${row.groupsDecided} of ${row.groupsTotal} groups decided`;
        return h('span', { class: 'text-body-md text-neutral-base' }, label);
      };
    },
  }),
);

const DecidedAtCell = markRaw(
  defineComponent({
    name: 'ArM1DecidedAtCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignReviewUserRow;
        const label = row.decidedAtDisplay ?? '—';
        return h(
          'span',
          { class: row.decidedAtDisplay ? 'text-body-md text-neutral-base' : 'text-body-md text-neutral-subtle' },
          label,
        );
      };
    },
  }),
);

const userColumns = markRaw([
  {
    field: 'name',
    header: 'User',
    sortable: true,
    component: UserCell,
    componentProps: (sp: { data: CampaignReviewUserRow }) => ({ data: sp.data }),
  },
  {
    field: 'department',
    header: 'Department',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: CampaignReviewUserRow }) => ({
      label: sp.data.department,
    }),
  },
  {
    field: 'groupsInReviewCount',
    header: 'Groups',
    sortable: true,
    width: '120px',
    component: GroupsCountCell,
    componentProps: (sp: { data: CampaignReviewUserRow }) => ({ data: sp.data }),
  },
  {
    field: 'decision',
    header: 'Decision',
    sortable: true,
    width: '120px',
    component: DecisionCell,
    componentProps: (sp: { data: CampaignReviewUserRow }) => ({ data: sp.data }),
  },
  {
    field: 'groupsDecided',
    header: 'Review progress',
    sortable: false,
    width: '200px',
    component: ProgressCell,
    componentProps: (sp: { data: CampaignReviewUserRow }) => ({ data: sp.data }),
  },
  {
    field: 'decidedAtDisplay',
    header: 'Decided at',
    sortable: true,
    width: '140px',
    component: DecidedAtCell,
    componentProps: (sp: { data: CampaignReviewUserRow }) => ({ data: sp.data }),
  },
]);
</script>

<template>
  <div class="flex flex-col gap-md min-h-0">
    <MessageNotification
      severity="info"
      title="Admin actions available"
      detail="As an admin, you can decide on behalf of reviewers or override existing decisions. All admin actions require justification."
    />

    <div class="flex flex-col h-[min(560px,70vh)] min-h-[320px] relative">
      <DataTable
        :data="filteredRows"
        :columns="userColumns"
        :loading="false"
        :paginator="true"
        :rows="10"
        data-key="id"
        expander
        scrollable
        scroll-height="flex"
      >
        <template #toolbar>
          <DataTableToolbar
            searchPlaceholder="Search users…"
            :showAddButton="false"
            :showFilterButton="true"
            :showSaveViewButton="false"
            :showRefreshButton="true"
            :showColumnsButton="true"
            :showDownloadButton="true"
            :activeFilters="activeFilterChips"
            :maxVisibleFilters="5"
            @search="(q: string) => (searchQuery = q)"
            @filter="openFilterDialog"
            @clear-all="clearAllFilters"
            @filter-remove="removeFilterChip"
            @refresh="() => {}"
          />
        </template>
        <template #expansion="{ data }">
          <CampaignUserRowExpansionContent :row="data as CampaignReviewUserRow" />
        </template>
        <template #empty>
          <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
            <span class="text-body-md">No users match your filters</span>
            <span class="text-body-sm mt-1">Try adjusting search or filters</span>
          </div>
        </template>
        <template #initialEmpty>
          <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
            <span class="text-body-md">No users in scope</span>
          </div>
        </template>
      </DataTable>
    </div>

    <Dialog
      v-model:visible="showFilterDialog"
      :draggable="false"
      modal
      header="Apply filters"
      :style="{ width: '560px' }"
    >
      <template #closeicon><XMarkIcon /></template>

      <div class="flex flex-col gap-md">
        <FormField label="Decision">
          <template #default="{ inputId }">
            <SelectButton
              :id="inputId"
              v-model="draftDecision"
              :options="decisionFilterOptions"
              option-label="label"
              option-value="value"
              :allow-empty="false"
              class="flex-wrap"
            />
          </template>
        </FormField>
      </div>

      <template #footer>
        <div class="flex items-center flex-1 min-w-0">
          <span class="text-body-sm text-neutral-subtle">{{ draftFilterCount }} Filters applied</span>
        </div>
        <div class="flex gap-sm shrink-0">
          <Button label="Cancel" severity="secondary" variant="text" @click="cancelFilterDialog" />
          <Button label="Clear all" severity="secondary" variant="outlined" @click="clearDraftFilters" />
          <Button label="Apply" @click="applyFilters" />
        </div>
      </template>
    </Dialog>
  </div>
</template>
