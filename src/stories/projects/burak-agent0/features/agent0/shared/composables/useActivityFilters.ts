import { computed, ref } from 'vue';
import type { ActivityLogEntry } from '../types';

export interface ActivityFilterChip {
  id: string;
  key: string;
  operator: string;
  value: string;
}

function formatGroupedValues(values: string[], maxVisible = 2): string {
  if (values.length <= maxVisible) return values.join(', ');
  return `${values.slice(0, maxVisible).join(', ')}, +${values.length - maxVisible}`;
}

function getUniqueValues(data: ActivityLogEntry[], field: keyof ActivityLogEntry): string[] {
  return [...new Set(data.map((e) => String(e[field])))].filter(Boolean).sort();
}

export function useActivityFilters(sourceData: ActivityLogEntry[]) {
  const activitySearchQuery = ref('');
  const showFilterDialog = ref(false);

  // Applied filters (drive actual data filtering)
  const appliedUsers = ref<string[]>([]);
  const appliedEventTypes = ref<string[]>([]);
  const appliedServers = ref<string[]>([]);
  const appliedStatus = ref<string>('All');

  // Draft filters (edited inside the dialog before applying)
  const draftUsers = ref<string[]>([]);
  const draftEventTypes = ref<string[]>([]);
  const draftServers = ref<string[]>([]);
  const draftStatus = ref<string>('All');

  const uniqueUsers = getUniqueValues(sourceData, 'user');
  const uniqueActions = getUniqueValues(sourceData, 'action');
  const uniqueServers = getUniqueValues(sourceData, 'server').filter((s) => s !== '—');

  const userOptions = uniqueUsers.map((u) => ({ label: u, value: u }));
  const eventTypeOptions = uniqueActions.map((a) => ({ label: a, value: a }));
  const serverOptions = uniqueServers.map((s) => ({ label: s, value: s }));
  const statusOptions = ['All', 'Active', 'Inactive'];

  const activeStatuses = ['Success', 'Info', 'Warning'];
  const inactiveStatuses = ['Failed'];

  const activeFilterChips = computed<ActivityFilterChip[]>(() => {
    const chips: ActivityFilterChip[] = [];
    if (appliedUsers.value.length > 0) {
      chips.push({ id: 'user', key: 'User', operator: 'is', value: formatGroupedValues(appliedUsers.value) });
    }
    if (appliedEventTypes.value.length > 0) {
      chips.push({ id: 'eventType', key: 'Event Type', operator: 'is', value: formatGroupedValues(appliedEventTypes.value) });
    }
    if (appliedServers.value.length > 0) {
      chips.push({ id: 'server', key: 'Server', operator: 'is', value: formatGroupedValues(appliedServers.value) });
    }
    if (appliedStatus.value !== 'All') {
      chips.push({ id: 'status', key: 'Status', operator: 'is', value: appliedStatus.value });
    }
    return chips;
  });

  const activeFilterCount = computed(() => {
    let count = 0;
    if (appliedUsers.value.length > 0) count++;
    if (appliedEventTypes.value.length > 0) count++;
    if (appliedServers.value.length > 0) count++;
    if (appliedStatus.value !== 'All') count++;
    return count;
  });

  const filteredActivityData = computed(() => {
    let data = [...sourceData];

    if (activitySearchQuery.value) {
      const q = activitySearchQuery.value.toLowerCase();
      data = data.filter(
        (entry) =>
          entry.user.toLowerCase().includes(q) ||
          entry.action.toLowerCase().includes(q) ||
          entry.detail.toLowerCase().includes(q) ||
          entry.server.toLowerCase().includes(q),
      );
    }

    if (appliedUsers.value.length > 0) {
      data = data.filter((e) => appliedUsers.value.includes(e.user));
    }
    if (appliedEventTypes.value.length > 0) {
      data = data.filter((e) => appliedEventTypes.value.includes(e.action));
    }
    if (appliedServers.value.length > 0) {
      data = data.filter((e) => appliedServers.value.includes(e.server));
    }
    if (appliedStatus.value === 'Active') {
      data = data.filter((e) => activeStatuses.includes(e.status));
    } else if (appliedStatus.value === 'Inactive') {
      data = data.filter((e) => inactiveStatuses.includes(e.status));
    }

    return data;
  });

  function openFilterDialog() {
    draftUsers.value = [...appliedUsers.value];
    draftEventTypes.value = [...appliedEventTypes.value];
    draftServers.value = [...appliedServers.value];
    draftStatus.value = appliedStatus.value;
    showFilterDialog.value = true;
  }

  function applyFilters() {
    appliedUsers.value = [...draftUsers.value];
    appliedEventTypes.value = [...draftEventTypes.value];
    appliedServers.value = [...draftServers.value];
    appliedStatus.value = draftStatus.value;
    showFilterDialog.value = false;
  }

  function cancelFilterDialog() {
    showFilterDialog.value = false;
  }

  function clearDraftFilters() {
    draftUsers.value = [];
    draftEventTypes.value = [];
    draftServers.value = [];
    draftStatus.value = 'All';
  }

  function clearAllFilters() {
    appliedUsers.value = [];
    appliedEventTypes.value = [];
    appliedServers.value = [];
    appliedStatus.value = 'All';
  }

  function removeFilterChip(chip: { id?: string }) {
    const chipId = chip.id ?? '';
    if (chipId === 'user') {
      appliedUsers.value = [];
    } else if (chipId === 'eventType') {
      appliedEventTypes.value = [];
    } else if (chipId === 'server') {
      appliedServers.value = [];
    } else if (chipId === 'status') {
      appliedStatus.value = 'All';
    }
  }

  function handleActivitySearch(query: string) {
    activitySearchQuery.value = query;
  }

  return {
    showFilterDialog,
    draftUsers,
    draftEventTypes,
    draftServers,
    draftStatus,
    userOptions,
    eventTypeOptions,
    serverOptions,
    statusOptions,
    activeFilterChips,
    activeFilterCount,
    filteredActivityData,
    openFilterDialog,
    applyFilters,
    cancelFilterDialog,
    clearDraftFilters,
    clearAllFilters,
    removeFilterChip,
    handleActivitySearch,
  };
}
