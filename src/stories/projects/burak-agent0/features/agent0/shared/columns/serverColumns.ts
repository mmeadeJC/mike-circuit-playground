import { markRaw } from 'vue';
import { DataTableCellText, DataTableCellLink, DataTableCellAction } from '@jumpcloud/circuit/components';
import Tag from 'primevue/tag';
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';
import type { Profile, UserGroup } from '../types';

function formatServerUserGroupNames(
  serverSlug: string,
  profilesRef: Profile[],
  userGroupsRef: UserGroup[],
  profileUserGroupsMap: Record<string, string[]>,
): string {
  const profilesWithServer = profilesRef.filter((p) => p.serverIds.includes(serverSlug));
  const groupSlugsSet = new Set<string>();
  for (const profile of profilesWithServer) {
    const slugs = profileUserGroupsMap[profile.profileId] ?? [];
    for (const slug of slugs) groupSlugsSet.add(slug);
  }
  if (groupSlugsSet.size === 0) return '—';

  const names = [...groupSlugsSet]
    .map((slug) => userGroupsRef.find((g) => g.slug === slug)?.name)
    .filter(Boolean) as string[];

  if (names.length === 0) return '—';
  if (names.length <= 2) return names.join(', ');
  return `${names[0]}, ${names[1]}, +${names.length - 2}`;
}

export function getServerColumns(
  profilesRef: Profile[],
  userGroupsRef: UserGroup[],
  profileUserGroupsMap: Record<string, string[]>,
) {
  return [
    {
      field: 'name',
      header: 'Server Name',
      sortable: true,
      width: '180px',
      component: markRaw(DataTableCellLink),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.name,
        href: '#',
      }),
    },
    {
      field: 'url',
      header: 'URL',
      sortable: true,
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.url,
      }),
    },
    {
      field: 'connectionType',
      header: 'Connection Type',
      width: '150px',
      component: markRaw(Tag),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        value: sp.data.connectionType,
        severity: sp.data.connectionTypeSeverity,
      }),
    },
    {
      field: 'status',
      header: 'Status',
      sortable: true,
      width: '180px',
      component: markRaw(Tag),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        value: sp.data.status,
        severity: sp.data.statusConnected ? 'success' : 'danger',
      }),
    },
    {
      field: 'userGroups',
      header: 'User Groups',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: formatServerUserGroupNames(
          sp.data.slug as string,
          profilesRef,
          userGroupsRef,
          profileUserGroupsMap,
        ),
      }),
    },
    {
      field: 'createdAt',
      header: 'Created At',
      sortable: true,
      width: '140px',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.createdAt,
      }),
    },
    {
      field: 'actions',
      header: '',
      width: '100px',
      component: markRaw(DataTableCellAction),
      componentProps: () => ({
        type: 'Button Group' as const,
        iconButtons: [
          { icon: markRaw(PencilSquareIcon) },
          { icon: markRaw(TrashIcon) },
        ],
      }),
    },
  ];
}
