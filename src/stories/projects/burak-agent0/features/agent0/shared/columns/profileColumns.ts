import { markRaw } from 'vue';
import { DataTableCellText, DataTableCellLink, DataTableCellButton, DataTableCellToken } from '@jumpcloud/circuit/components';
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';
import type { Server } from '../types';

export function getProfileColumns(serversRef: Server[]) {
  return [
    {
      field: 'name',
      header: 'Name',
      sortable: true,
      component: markRaw(DataTableCellLink),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.name,
        description: sp.data.profileId,
        href: '#',
      }),
    },
    {
      field: 'serverIds',
      header: 'Servers',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => {
        const ids = sp.data.serverIds as string[];
        if (ids.length === 1) {
          const server = serversRef.find((s) => s.slug === ids[0]);
          return { label: server ? server.name : ids[0] };
        }
        return { label: `${ids.length} servers` };
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
    {
      field: 'actions',
      header: '',
      width: '100px',
      component: markRaw(DataTableCellButton),
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
    component: markRaw(DataTableCellToken),
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
