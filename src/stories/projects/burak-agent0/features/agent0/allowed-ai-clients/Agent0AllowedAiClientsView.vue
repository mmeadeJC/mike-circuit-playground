<script setup lang="ts">
import { computed, markRaw, ref } from 'vue';
import {
  ActionsToolbar,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  FormField,
  ListPageLayout,
} from '@jumpcloud/circuit/components';
import type { Action, SelectedItem } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import { XMarkIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { getAllowedAiClientColumns } from '../shared/columns';
import type { AllowedAiClient, AllowedAiClientSubmitPayload } from '../shared/types';
import type { AllowedAiClientFilterChip } from '../shared/composables/useAllowedAiClientFilters';
import AddAllowedAiClientModal from './add-allowed-origin/AddAllowedAiClientModal.vue';
import EditAllowedAiClientModal from './add-allowed-origin/EditAllowedAiClientModal.vue';
import AllowedAiClientDeleteConfirmDialog from './AllowedAiClientDeleteConfirmDialog.vue';
import AllowedAiClientBulkDeleteConfirmDialog from './AllowedAiClientBulkDeleteConfirmDialog.vue';

const props = defineProps<{
  filteredEntries: AllowedAiClient[];
  showFilterDialog: boolean;
  draftKinds: string[];
  kindOptions: { label: string; value: string }[];
  activeFilterChips: AllowedAiClientFilterChip[];
  draftFilterCount: number;
}>();

const emit = defineEmits<{
  search: [query: string];
  openFilterDialog: [];
  applyFilters: [];
  cancelFilterDialog: [];
  clearDraftFilters: [];
  clearAllFilters: [];
  removeFilterChip: [chip: { id?: string }];
  'update:draftKinds': [value: string[]];
  addEntry: [payload: AllowedAiClientSubmitPayload];
  updateEntry: [payload: AllowedAiClientSubmitPayload];
  deleteEntries: [ids: number[]];
}>();

const selection = ref<AllowedAiClient[]>([]);

const showAddModal = ref(false);
const showEditModal = ref(false);
const editingEntry = ref<AllowedAiClient | null>(null);

const showRowDeleteConfirm = ref(false);
const pendingRowDelete = ref<AllowedAiClient | null>(null);

const showBulkDeleteConfirm = ref(false);

const bulkActions = computed<Action[]>(() => [
  {
    id: 'delete',
    label: 'Delete',
    icon: markRaw(TrashIcon),
    class: 'text-danger-base',
  },
]);

const selectedItems = computed<SelectedItem[]>(() =>
  selection.value.map((row) => ({
    id: String(row.id),
    label: row.origin,
    description: (row.note ?? '').trim() || 'Allowed AI client',
  })),
);

const allowedAiClientColumns = computed(() =>
  getAllowedAiClientColumns({
    onEdit: (row) => openEdit(row as unknown as AllowedAiClient),
    onDelete: (row) => queueRowDelete(row as unknown as AllowedAiClient),
  }),
);

function openAdd() {
  showAddModal.value = true;
}

function openEdit(entry: AllowedAiClient) {
  editingEntry.value = entry;
  showEditModal.value = true;
}

function closeEditModal() {
  showEditModal.value = false;
  editingEntry.value = null;
}

function handleRowClick(event: { data: AllowedAiClient }) {
  openEdit(event.data);
}

function queueRowDelete(entry: AllowedAiClient) {
  pendingRowDelete.value = entry;
  showRowDeleteConfirm.value = true;
}

function confirmRowDelete() {
  if (pendingRowDelete.value) {
    emit('deleteEntries', [pendingRowDelete.value.id]);
  }
  pendingRowDelete.value = null;
}

function handleBulkAction(action: Action) {
  if (action.id === 'delete' && selection.value.length > 0) {
    showBulkDeleteConfirm.value = true;
  }
}

function confirmBulkDelete() {
  const ids = selection.value.map((r) => r.id);
  emit('deleteEntries', ids);
  selection.value = [];
}

function clearSelection() {
  selection.value = [];
}

function handleSubmitPayload(payload: AllowedAiClientSubmitPayload) {
  if (payload.id != null) {
    emit('updateEntry', payload);
    editingEntry.value = null;
  } else {
    emit('addEntry', payload);
  }
}

const rowDeleteClientOrigin = computed(() => pendingRowDelete.value?.origin);
</script>

<template>
  <div class="flex flex-col flex-1 min-h-0 overflow-hidden bg-neutral-surface relative">
    <ListPageLayout class="w-full! h-full!">
      <CircuitDataTable
        :columns="allowedAiClientColumns"
        :data="filteredEntries"
        selection-mode="multiple"
        v-model:selection="selection"
        :card="true"
        size="default"
        :scrollable="true"
        scrollHeight="flex"
        :paginator="true"
        :rows="15"
        @row-click="handleRowClick"
      >
        <template #toolbar>
          <DataTableToolbar
            searchPlaceholder="Search"
            :showAddButton="true"
            addButtonLabel="Add AI client"
            :showFilterButton="true"
            :showRefreshButton="false"
            :showDownloadButton="false"
            :showColumnsButton="false"
            :showSaveViewButton="false"
            :activeFilters="activeFilterChips"
            :maxVisibleFilters="5"
            @add="openAdd"
            @search="emit('search', $event)"
            @filter="emit('openFilterDialog')"
            @clear-all="emit('clearAllFilters')"
            @filter-remove="emit('removeFilterChip', $event)"
          >
            <template #right-section>
              <span class="text-body-md text-neutral-subtle mr-md">{{ filteredEntries.length }} Clients</span>
            </template>
          </DataTableToolbar>
        </template>

        <template #empty>
          <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
            <span class="text-body-md">No AI clients match your filters</span>
            <span class="text-body-sm mt-1">Try adjusting search or filters</span>
          </div>
        </template>
      </CircuitDataTable>
    </ListPageLayout>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="selectedItems.length > 0"
        class="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
      >
        <ActionsToolbar
          :actions="bulkActions"
          :selected-items="selectedItems"
          :selection-label="selection.length === 1 ? 'client selected' : 'clients selected'"
          @action="handleBulkAction"
          @close="clearSelection"
        />
      </div>
    </Transition>

    <Dialog
      :visible="showFilterDialog"
      :draggable="false"
      modal
      header="Apply filters"
      :style="{ width: '560px' }"
      @update:visible="!$event && emit('cancelFilterDialog')"
    >
      <template #closeicon><XMarkIcon /></template>

      <div class="flex flex-col gap-md">
        <FormField label="Match type">
          <template #default="{ inputId }">
            <MultiSelect
              :id="inputId"
              :modelValue="draftKinds"
              :options="kindOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="All types"
              :maxSelectedLabels="2"
              class="w-full"
              @update:modelValue="emit('update:draftKinds', $event)"
            />
          </template>
        </FormField>
      </div>

      <template #footer>
        <div class="flex items-center flex-1 min-w-0">
          <span class="text-body-sm text-neutral-subtle">{{ draftFilterCount }} Filters applied</span>
        </div>
        <div class="flex gap-sm shrink-0">
          <Button label="Cancel" severity="secondary" variant="text" @click="emit('cancelFilterDialog')" />
          <Button label="Clear All" severity="secondary" variant="outlined" @click="emit('clearDraftFilters')" />
          <Button label="Apply" @click="emit('applyFilters')" />
        </div>
      </template>
    </Dialog>

    <AddAllowedAiClientModal
      v-model:visible="showAddModal"
      @cancel="showAddModal = false"
      @submit="handleSubmitPayload"
    />

    <EditAllowedAiClientModal
      v-model:visible="showEditModal"
      :editing-entry="editingEntry"
      @cancel="closeEditModal"
      @submit="handleSubmitPayload"
    />

    <AllowedAiClientDeleteConfirmDialog
      v-model:visible="showRowDeleteConfirm"
      :client-origin-label="rowDeleteClientOrigin"
      @confirm="confirmRowDelete"
      @cancel="pendingRowDelete = null"
    />

    <AllowedAiClientBulkDeleteConfirmDialog
      v-model:visible="showBulkDeleteConfirm"
      :count="selection.length"
      @confirm="confirmBulkDelete"
      @cancel="showBulkDeleteConfirm = false"
    />
  </div>
</template>
