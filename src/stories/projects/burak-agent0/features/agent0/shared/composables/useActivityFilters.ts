import { computed, ref } from 'vue';
import type { ActivityLogEntry, ActivityFilter } from '../types';

export function useActivityFilters(sourceData: ActivityLogEntry[], initialFilters: ActivityFilter[]) {
  const activityFilters = ref<ActivityFilter[]>([...initialFilters]);
  const activitySearchQuery = ref('');

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

    for (const filter of activityFilters.value) {
      const key = filter.key.toLowerCase();
      if (key === 'action') {
        data = data.filter((e) => e.action === filter.value);
      } else if (key === 'status') {
        data = data.filter((e) => e.status === filter.value);
      } else if (key === 'server') {
        data = data.filter((e) => e.server === filter.value);
      } else if (key === 'user') {
        data = data.filter((e) => e.user.includes(filter.value));
      } else if (key === 'category') {
        data = data.filter((e) => e.actionCategory === filter.value);
      }
    }

    return data;
  });

  function clearActivityFilters() {
    activityFilters.value = [];
  }

  function removeActivityFilter(filter: { id?: string | number; key: string }) {
    activityFilters.value = activityFilters.value.filter(
      (f) => (filter.id ? f.id !== filter.id : f.key !== filter.key),
    );
  }

  function handleActivitySearch(query: string) {
    activitySearchQuery.value = query;
  }

  return {
    activityFilters,
    activitySearchQuery,
    filteredActivityData,
    clearActivityFilters,
    removeActivityFilter,
    handleActivitySearch,
  };
}
