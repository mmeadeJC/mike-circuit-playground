<script setup lang="ts">
import { computed, defineComponent, h, markRaw } from 'vue';
import { DataTable } from '@jumpcloud/circuit/components';
import Tag from 'primevue/tag';
import type { CampaignScopeGroupTableRow } from '../types';
import CampaignScopeGroupExpansionContent from './CampaignScopeGroupExpansionContent.vue';

defineOptions({ name: 'CampaignScopeSelectedGroupsTable' });

const props = withDefaults(
  defineProps<{
    rows: CampaignScopeGroupTableRow[];
    /** When true, show row checkboxes and sync selection with v-model. When false (e.g. group-membership preview), table is read-only. */
    selectable?: boolean;
  }>(),
  { selectable: true },
);

/** Selected group names (application scope). Omit v-model when `selectable` is false. */
const selectedGroupNames = defineModel<string[]>({ default: () => [] });

const tableData = computed(() => props.rows);

const isSelectable = computed(() => props.selectable);

const intro = computed(() => {
  if (!isSelectable.value) {
    return props.rows.length > 1
      ? 'Review the resources linked to these user groups. The campaign will cover the paths below when expanded.'
      : 'Review the resources linked to this user group. The campaign will cover the access paths below when expanded.';
  }
  return 'These directory groups have access to the selected application. Use the checkboxes to choose which groups to include, then expand a row to review linked resources.';
});

const selectedRows = computed(() => {
  if (!isSelectable.value) return undefined;
  return props.rows.filter((r) => selectedGroupNames.value.includes(r.groupName));
});

function onSelectionUpdate(sel: CampaignScopeGroupTableRow[] | null) {
  if (!isSelectable.value) return;
  selectedGroupNames.value = (sel ?? []).map((r) => r.groupName);
}

const GroupNameCell = markRaw(
  defineComponent({
    name: 'ArM1ScopeGroupNameCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignScopeGroupTableRow;
        return h(
          'div',
          { class: 'pl-md min-w-0 text-body-md text-neutral-base break-words' },
          row.groupName,
        );
      };
    },
  }),
);

const GroupTypeCell = markRaw(
  defineComponent({
    name: 'ArM1ScopeGroupTypeCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignScopeGroupTableRow;
        const isDyn = row.userGroupType === 'dynamic';
        return h(Tag, {
          value: isDyn ? 'Dynamic' : 'Static',
          severity: isDyn ? 'info' : 'secondary',
          class: '!normal-case',
        });
      };
    },
  }),
);

const UsersCountCell = markRaw(
  defineComponent({
    name: 'ArM1ScopeUsersCountCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignScopeGroupTableRow;
        return h('span', { class: 'text-body-md text-neutral-base tabular-nums' }, String(row.usersCount));
      };
    },
  }),
);

const OtherResourcesCell = markRaw(
  defineComponent({
    name: 'ArM1ScopeOtherResourcesCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(p) {
      return () => {
        const row = p.data as CampaignScopeGroupTableRow;
        return h(
          'span',
          { class: 'text-body-md text-neutral-base tabular-nums pr-md block text-right' },
          String(row.otherResourcesCount),
        );
      };
    },
  }),
);

const columns = markRaw([
  {
    field: 'groupName',
    header: 'User group',
    sortable: true,
    component: GroupNameCell,
    componentProps: (sp: { data: CampaignScopeGroupTableRow }) => ({ data: sp.data }),
  },
  {
    field: 'userGroupType',
    header: 'User Group Type',
    sortable: true,
    width: '140px',
    component: GroupTypeCell,
    componentProps: (sp: { data: CampaignScopeGroupTableRow }) => ({ data: sp.data }),
  },
  {
    field: 'usersCount',
    header: 'Users',
    sortable: true,
    width: '100px',
    component: UsersCountCell,
    componentProps: (sp: { data: CampaignScopeGroupTableRow }) => ({ data: sp.data }),
  },
  {
    field: 'otherResourcesCount',
    header: 'Group resources',
    sortable: true,
    width: '200px',
    component: OtherResourcesCell,
    componentProps: (sp: { data: CampaignScopeGroupTableRow }) => ({ data: sp.data }),
  },
]);
</script>

<template>
  <div v-if="rows.length > 0" class="flex flex-col gap-md w-full min-w-0 max-w-5xl">
    <p class="text-body-md text-neutral-subtle m-0">{{ intro }}</p>
    <div class="min-h-0 w-full min-w-0">
      <DataTable
        :data="tableData"
        :columns="columns"
        :loading="false"
        :paginator="false"
        data-key="id"
        expander
        :card="true"
        :selection="isSelectable ? selectedRows : null"
        :selection-mode="isSelectable ? 'multiple' : undefined"
        @update:selection="onSelectionUpdate"
      >
        <template #expansion="{ data }">
          <CampaignScopeGroupExpansionContent :sections="(data as CampaignScopeGroupTableRow).assigned" />
        </template>
      </DataTable>
    </div>
  </div>
</template>
