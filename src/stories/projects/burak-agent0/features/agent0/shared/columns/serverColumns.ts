import { markRaw } from 'vue';
import { DataTableCellText, DataTableCellLink, DataTableCellButton } from '@jumpcloud/circuit/components';
import Tag from 'primevue/tag';
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';

export const serverColumns = [
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
