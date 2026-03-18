import { computed, ref, watch, type Ref } from 'vue';
import type { Server, Profile, UserGroup } from '../types';

function arraysEqualAsSets(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const setB = new Set(b);
  return a.every((item) => setB.has(item));
}

export function useProfileDetailBindings(
  editingProfile: Ref<Profile | null>,
  serversData: Server[],
  userGroupsData: UserGroup[],
  profileUserGroupsMap: Record<string, string[]>,
) {
  const showBoundServersOnly = ref(false);
  const showBoundUserGroupsOnly = ref(false);
  const selectedProfileServerSlugs = ref<string[]>([]);
  const selectedProfileUserGroupSlugs = ref<string[]>([]);

  const originalServerSlugs = ref<string[]>([]);
  const originalUserGroupSlugs = ref<string[]>([]);

  const isSaving = ref(false);
  const isSaved = ref(false);

  const profileBoundServers = computed(() => {
    const ids = editingProfile.value?.serverIds || [];
    return serversData.filter((s) => ids.includes(s.slug));
  });

  const profileBoundUserGroups = computed(() => {
    const ids = editingProfile.value
      ? (profileUserGroupsMap[editingProfile.value.profileId] || [])
      : [];
    return userGroupsData.filter((g) => ids.includes(g.slug));
  });

  const profileServersTableData = computed(() => {
    const boundSlugs = editingProfile.value?.serverIds || [];
    const source = showBoundServersOnly.value ? profileBoundServers.value : serversData;
    return source
      .map((s) => ({ ...s, bound: boundSlugs.includes(s.slug) }))
      .sort((a, b) => Number(b.bound) - Number(a.bound));
  });

  const selectedProfileServers = computed({
    get: () => profileServersTableData.value.filter((s) => selectedProfileServerSlugs.value.includes(s.slug)),
    set: (val: Server[]) => {
      selectedProfileServerSlugs.value = val.map((s) => s.slug);
    },
  });

  const profileUserGroupsTableData = computed(() => {
    const boundSlugs = editingProfile.value
      ? (profileUserGroupsMap[editingProfile.value.profileId] || [])
      : [];
    const source = showBoundUserGroupsOnly.value ? profileBoundUserGroups.value : userGroupsData;
    return source
      .map((g) => ({ ...g, bound: boundSlugs.includes(g.slug) }))
      .sort((a, b) => Number(b.bound) - Number(a.bound));
  });

  const selectedProfileUserGroups = computed({
    get: () => profileUserGroupsTableData.value.filter((g) => selectedProfileUserGroupSlugs.value.includes(g.slug)),
    set: (val: { slug: string }[]) => {
      selectedProfileUserGroupSlugs.value = val.map((g) => g.slug);
    },
  });

  const hasBindingChanges = computed(() =>
    !arraysEqualAsSets(selectedProfileServerSlugs.value, originalServerSlugs.value) ||
    !arraysEqualAsSets(selectedProfileUserGroupSlugs.value, originalUserGroupSlugs.value),
  );

  function handleSaveBindings() {
    isSaving.value = true;
    setTimeout(() => {
      originalServerSlugs.value = [...selectedProfileServerSlugs.value];
      originalUserGroupSlugs.value = [...selectedProfileUserGroupSlugs.value];
      isSaving.value = false;
      isSaved.value = true;
      setTimeout(() => {
        isSaved.value = false;
      }, 2000);
    }, 1500);
  }

  function handleDiscardBindings() {
    selectedProfileServerSlugs.value = [...originalServerSlugs.value];
    selectedProfileUserGroupSlugs.value = [...originalUserGroupSlugs.value];
  }

  watch(editingProfile, () => {
    const serverSlugs = editingProfile.value?.serverIds || [];
    const ugSlugs = editingProfile.value
      ? (profileUserGroupsMap[editingProfile.value.profileId] || [])
      : [];
    selectedProfileServerSlugs.value = [...serverSlugs];
    selectedProfileUserGroupSlugs.value = [...ugSlugs];
    originalServerSlugs.value = [...serverSlugs];
    originalUserGroupSlugs.value = [...ugSlugs];
    isSaving.value = false;
    isSaved.value = false;
  }, { immediate: true });

  return {
    showBoundServersOnly,
    showBoundUserGroupsOnly,
    profileBoundServers,
    profileBoundUserGroups,
    profileServersTableData,
    profileUserGroupsTableData,
    selectedProfileServers,
    selectedProfileUserGroups,
    hasBindingChanges,
    isSaving,
    isSaved,
    handleSaveBindings,
    handleDiscardBindings,
  };
}
