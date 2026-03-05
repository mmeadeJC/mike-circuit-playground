<script setup lang="ts">
import { computed } from 'vue';
import { DataTable as CircuitDataTable, DataTableToolbar, CollapsiblePanel, CheckboxWithLabel } from '@jumpcloud/circuit/components';

const props = defineProps<{
  editingProfile: {
    profileId: string;
    label: string;
    createdAt: string;
  } | null;
  profileDetailTab: string;
  profileBoundServers: unknown[];
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
}>();

const emit = defineEmits<{
  'update:selectedProfileServers': [unknown[]];
  'update:selectedProfileUserGroups': [unknown[]];
  'update:showBoundServersOnly': [boolean];
  'update:showBoundUserGroupsOnly': [boolean];
}>();

const showBoundServersOnlyModel = computed({
  get: () => props.showBoundServersOnly,
  set: (value: boolean) => emit('update:showBoundServersOnly', value),
});

const showBoundUserGroupsOnlyModel = computed({
  get: () => props.showBoundUserGroupsOnly,
  set: (value: boolean) => emit('update:showBoundUserGroupsOnly', value),
});
</script>

<template>
  <template v-if="editingProfile">
    <div v-if="profileDetailTab === 'overview'" class="flex-1 overflow-auto p-6">
      <div class="max-w-2xl flex flex-col gap-6">
        <CollapsiblePanel header="Profile Information">
          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between py-2 border-b border-neutral-default_solid">
              <span class="text-body-md text-neutral-subtle">Profile ID</span>
              <span class="text-body-md-semi-bold text-neutral-base">{{ editingProfile.profileId }}</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-neutral-default_solid">
              <span class="text-body-md text-neutral-subtle">Label</span>
              <span class="text-body-md-semi-bold text-neutral-base">{{ editingProfile.label }}</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-neutral-default_solid">
              <span class="text-body-md text-neutral-subtle">Bound Servers</span>
              <span class="text-body-md-semi-bold text-neutral-base">{{ profileBoundServers.length }}</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-neutral-default_solid">
              <span class="text-body-md text-neutral-subtle">Bound User Groups</span>
              <span class="text-body-md-semi-bold text-neutral-base">{{ profileBoundUserGroups.length }}</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <span class="text-body-md text-neutral-subtle">Created At</span>
              <span class="text-body-md-semi-bold text-neutral-base">{{ editingProfile.createdAt }}</span>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    </div>

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
  </template>
</template>
