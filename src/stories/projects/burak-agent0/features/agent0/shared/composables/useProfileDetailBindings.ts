import { computed, ref, watch, type Ref } from 'vue';
import type { Server, Profile, UserGroup } from '../types';

export function useProfileDetailBindings(
  editingProfile: Ref<Profile | null>,
  serversData: Server[],
  userGroupsData: UserGroup[],
  profileUserGroupsMap: Record<string, string[]>,
) {
  const showBoundServersOnly = ref(false);
  const showBoundUserGroupsOnly = ref(false);
  const selectedProfileServerSlugs = ref<Set<string>>(new Set());
  const selectedProfileUserGroupSlugs = ref<Set<string>>(new Set());

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
    get: () => profileServersTableData.value.filter((s) => selectedProfileServerSlugs.value.has(s.slug)),
    set: (val: Server[]) => {
      selectedProfileServerSlugs.value = new Set(val.map((s) => s.slug));
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
    get: () => profileUserGroupsTableData.value.filter((g) => selectedProfileUserGroupSlugs.value.has(g.slug)),
    set: (val: { slug: string }[]) => {
      selectedProfileUserGroupSlugs.value = new Set(val.map((g) => g.slug));
    },
  });

  watch(editingProfile, () => {
    selectedProfileServerSlugs.value = new Set(editingProfile.value?.serverIds || []);
    const ugSlugs = editingProfile.value
      ? (profileUserGroupsMap[editingProfile.value.profileId] || [])
      : [];
    selectedProfileUserGroupSlugs.value = new Set(ugSlugs);
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
  };
}
