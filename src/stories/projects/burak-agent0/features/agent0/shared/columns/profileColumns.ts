import { markRaw } from 'vue';
import { DataTableCellText, DataTableCellLink, DataTableCellStatus } from '@jumpcloud/circuit/components';
import type { Server, UserGroup } from '../types';
import type { ProfileDashboardStats } from '../data/mockData';

function formatUserGroupNames(
  profileId: string,
  userGroupsRef: UserGroup[],
  profileUserGroupsMap: Record<string, string[]>,
): string {
  const slugs = profileUserGroupsMap[profileId] ?? [];
  if (slugs.length === 0) return '—';

  const names = slugs
    .map((slug) => userGroupsRef.find((g) => g.slug === slug)?.name)
    .filter(Boolean) as string[];

  if (names.length === 0) return '—';
  if (names.length <= 2) return names.join(', ');
  return `${names[0]}, ${names[1]}, +${names.length - 2}`;
}

export function getProfileColumns(
  serversRef: Server[],
  userGroupsRef: UserGroup[],
  profileUserGroupsMap: Record<string, string[]>,
  dashboardStatsMap: Record<string, ProfileDashboardStats>,
) {
  return [
    {
      field: 'name',
      header: 'Name',
      sortable: true,
      component: markRaw(DataTableCellLink),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.name,
        href: '#',
      }),
    },
    {
      field: 'serverIds',
      header: 'Servers',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => {
        const ids = sp.data.serverIds as string[];
        const names = ids
          .map((slug) => serversRef.find((s) => s.slug === slug)?.name)
          .filter(Boolean) as string[];
        if (names.length === 0) return { label: '—' };
        if (names.length <= 2) return { label: names.join(', ') };
        return { label: `${names[0]}, ${names[1]}, +${names.length - 2}` };
      },
    },
    {
      field: 'userGroups',
      header: 'User Groups',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: formatUserGroupNames(
          sp.data.profileId as string,
          userGroupsRef,
          profileUserGroupsMap,
        ),
      }),
    },
    {
      field: 'totalRequests',
      header: 'Total Requests (24h)',
      width: '180px',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => {
        const stats = dashboardStatsMap[sp.data.profileId as string];
        return { label: stats?.totalRequests ?? '—' };
      },
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
  ];
}

export const profileServerColumns = [
  {
    field: 'name',
    header: 'Server Name',
    sortable: true,
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
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.url }),
  },
  {
    field: 'connectionType',
    header: 'Connection Type',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellStatus),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.connectionType,
      severity: sp.data.connectionTypeSeverity,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.status,
      class: sp.data.statusConnected ? 'text-status-success-base' : 'text-error-base',
    }),
  },
];

export const profileUserGroupColumns = [
  {
    field: 'name',
    header: 'Group Name',
    sortable: true,
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      href: '#',
    }),
  },
  {
    field: 'slug',
    header: 'Slug',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.slug }),
  },
  {
    field: 'memberCount',
    header: 'Members',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: String(sp.data.memberCount),
    }),
  },
  {
    field: 'createdAt',
    header: 'Created At',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.createdAt }),
  },
];
