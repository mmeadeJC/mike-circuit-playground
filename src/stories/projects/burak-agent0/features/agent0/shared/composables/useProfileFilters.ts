import { computed, ref } from 'vue';
import type { Profile, Server, UserGroup } from '../types';

export interface ProfileFilterChip {
  id: string;
  key: string;
  operator: string;
  value: string;
}

function formatGroupedValues(values: string[], maxVisible = 2): string {
  if (values.length <= maxVisible) return values.join(', ');
  return `${values.slice(0, maxVisible).join(', ')}, +${values.length - maxVisible}`;
}

export function useProfileFilters(
  sourceData: Profile[],
  serversRef: Server[],
  userGroupsRef: UserGroup[],
  profileUserGroupsMap: Record<string, string[]>,
) {
  const searchQuery = ref('');
  const showFilterDialog = ref(false);

  const appliedServers = ref<string[]>([]);
  const appliedUserGroups = ref<string[]>([]);

  const draftServers = ref<string[]>([]);
  const draftUserGroups = ref<string[]>([]);

  const serverOptions = serversRef.map((s) => ({ label: s.name, value: s.slug }));
  const userGroupOptions = userGroupsRef.map((g) => ({ label: g.name, value: g.slug }));

  const activeFilterChips = computed<ProfileFilterChip[]>(() => {
    const chips: ProfileFilterChip[] = [];
    if (appliedServers.value.length > 0) {
      const names = appliedServers.value.map((slug) => serversRef.find((s) => s.slug === slug)?.name ?? slug);
      chips.push({ id: 'server', key: 'Server', operator: 'is', value: formatGroupedValues(names) });
    }
    if (appliedUserGroups.value.length > 0) {
      const names = appliedUserGroups.value.map((slug) => userGroupsRef.find((g) => g.slug === slug)?.name ?? slug);
      chips.push({ id: 'userGroup', key: 'User Group', operator: 'is', value: formatGroupedValues(names) });
    }
    return chips;
  });

  const activeFilterCount = computed(() => {
    let count = 0;
    if (appliedServers.value.length > 0) count++;
    if (appliedUserGroups.value.length > 0) count++;
    return count;
  });

  const filteredData = computed(() => {
    let data = [...sourceData];

    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      data = data.filter((entry) => entry.name.toLowerCase().includes(q));
    }

    if (appliedServers.value.length > 0) {
      data = data.filter((p) => p.serverIds.some((sid) => appliedServers.value.includes(sid)));
    }

    if (appliedUserGroups.value.length > 0) {
      data = data.filter((p) => {
        const groupSlugs = profileUserGroupsMap[p.profileId] ?? [];
        return groupSlugs.some((slug) => appliedUserGroups.value.includes(slug));
      });
    }

    return data;
  });

  function openFilterDialog() {
    draftServers.value = [...appliedServers.value];
    draftUserGroups.value = [...appliedUserGroups.value];
    showFilterDialog.value = true;
  }

  function applyFilters() {
    appliedServers.value = [...draftServers.value];
    appliedUserGroups.value = [...draftUserGroups.value];
    showFilterDialog.value = false;
  }

  function cancelFilterDialog() {
    showFilterDialog.value = false;
  }

  function clearDraftFilters() {
    draftServers.value = [];
    draftUserGroups.value = [];
  }

  function clearAllFilters() {
    appliedServers.value = [];
    appliedUserGroups.value = [];
  }

  function removeFilterChip(chip: { id?: string }) {
    const chipId = chip.id ?? '';
    if (chipId === 'server') {
      appliedServers.value = [];
    } else if (chipId === 'userGroup') {
      appliedUserGroups.value = [];
    }
  }

  function handleSearch(query: string) {
    searchQuery.value = query;
  }

  return {
    showFilterDialog,
    draftServers,
    draftUserGroups,
    serverOptions,
    userGroupOptions,
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
