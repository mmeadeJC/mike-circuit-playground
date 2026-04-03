import { computed, ref } from 'vue';
import type { Server } from '../types';

export function useServerFilters(sourceData: Server[]) {
  const searchQuery = ref('');

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

    return data;
  });

  function handleSearch(query: string) {
    searchQuery.value = query;
  }

  return {
    filteredData,
    handleSearch,
  };
}
