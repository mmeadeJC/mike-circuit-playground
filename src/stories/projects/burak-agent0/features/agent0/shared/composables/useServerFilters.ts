import { computed, ref } from 'vue';
import type { Server } from '../types';

export interface ServerFilterChip {
  id: string;
  key: string;
  operator: string;
  value: string;
}

function formatGroupedValues(values: string[], maxVisible = 2): string {
  if (values.length <= maxVisible) return values.join(', ');
  return `${values.slice(0, maxVisible).join(', ')}, +${values.length - maxVisible}`;
}

function getUniqueValues(data: Server[], field: keyof Server): string[] {
  return [...new Set(data.map((e) => String(e[field])))].filter(Boolean).sort();
}

export function useServerFilters(sourceData: Server[]) {
  const searchQuery = ref('');
  const showFilterDialog = ref(false);

  const appliedConnectionTypes = ref<string[]>([]);
  const appliedStatus = ref<string>('All');

  const draftConnectionTypes = ref<string[]>([]);
  const draftStatus = ref<string>('All');

  const connectionTypeOptions = getUniqueValues(sourceData, 'connectionType').map((v) => ({ label: v, value: v }));
  const statusOptions = ['All', 'Connected', 'Not connected'];

  const activeFilterChips = computed<ServerFilterChip[]>(() => {
    const chips: ServerFilterChip[] = [];
    if (appliedConnectionTypes.value.length > 0) {
      chips.push({ id: 'connectionType', key: 'Connection Type', operator: 'is', value: formatGroupedValues(appliedConnectionTypes.value) });
    }
    if (appliedStatus.value !== 'All') {
      chips.push({ id: 'status', key: 'Status', operator: 'is', value: appliedStatus.value });
    }
    return chips;
  });

  const activeFilterCount = computed(() => {
    let count = 0;
    if (appliedConnectionTypes.value.length > 0) count++;
    if (appliedStatus.value !== 'All') count++;
    return count;
  });

  const filteredData = computed(() => {
    let data = [...sourceData];

    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      data = data.filter(
        (entry) =>
          entry.name.toLowerCase().includes(q) ||
          entry.url.toLowerCase().includes(q) ||
          entry.connectionType.toLowerCase().includes(q),
      );
    }

    if (appliedConnectionTypes.value.length > 0) {
      data = data.filter((e) => appliedConnectionTypes.value.includes(e.connectionType));
    }
    if (appliedStatus.value !== 'All') {
      data = data.filter((e) => e.status === appliedStatus.value);
    }

    return data;
  });

  function openFilterDialog() {
    draftConnectionTypes.value = [...appliedConnectionTypes.value];
    draftStatus.value = appliedStatus.value;
    showFilterDialog.value = true;
  }

  function applyFilters() {
    appliedConnectionTypes.value = [...draftConnectionTypes.value];
    appliedStatus.value = draftStatus.value;
    showFilterDialog.value = false;
  }

  function cancelFilterDialog() {
    showFilterDialog.value = false;
  }

  function clearDraftFilters() {
    draftConnectionTypes.value = [];
    draftStatus.value = 'All';
  }

  function clearAllFilters() {
    appliedConnectionTypes.value = [];
    appliedStatus.value = 'All';
  }

  function removeFilterChip(chip: { id?: string }) {
    const chipId = chip.id ?? '';
    if (chipId === 'connectionType') {
      appliedConnectionTypes.value = [];
    } else if (chipId === 'status') {
      appliedStatus.value = 'All';
    }
  }

  function handleSearch(query: string) {
    searchQuery.value = query;
  }

  return {
    showFilterDialog,
    draftConnectionTypes,
    draftStatus,
    connectionTypeOptions,
    statusOptions,
    activeFilterChips,
    activeFilterCount,
    filteredData,
    openFilterDialog,
    applyFilters,
    cancelFilterDialog,
    clearDraftFilters,
    clearAllFilters,
    removeFilterChip,
    handleSearch,
  };
}
