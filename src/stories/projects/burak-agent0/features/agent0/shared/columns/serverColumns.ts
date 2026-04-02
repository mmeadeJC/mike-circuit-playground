import { markRaw } from 'vue';
import {
  DataTableCellText,
  DataTableCellLink,
  DataTableCellAction,
  DataTableCellStatus,
} from '@jumpcloud/circuit/components';
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';

/** Severities accepted by DataTableCellStatus (mock data may use legacy Tag names). */
const DATA_TABLE_STATUS_SEVERITIES = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'contrast',
  'accent-purple',
  'accent-aster',
  'accent-coral',
  'accent-yellow',
] as const;

type DataTableStatusSeverity = (typeof DATA_TABLE_SEVERITIES)[number];

function toDataTableStatusSeverity(raw: string): DataTableStatusSeverity {
  if (DATA_TABLE_STATUS_SEVERITIES.includes(raw as DataTableStatusSeverity)) {
    return raw as DataTableStatusSeverity;
  }
  return 'secondary';
}

export interface ServerColumnHandlers {
  onEditServer?: (row: Record<string, unknown>) => void;
  onDeleteServer?: (row: Record<string, unknown>) => void;
}

export function getServerColumns(handlers?: ServerColumnHandlers) {
  return [
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
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.url,
      }),
    },
    {
      field: 'connectionType',
      header: 'Connection Type',
      width: '150px',
      component: markRaw(DataTableCellStatus),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: String(sp.data.connectionType ?? ''),
        severity: toDataTableStatusSeverity(String(sp.data.connectionTypeSeverity ?? 'secondary')),
        shouldShowDefaultIcon: false,
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
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        type: 'Button Group' as const,
        iconButtons: [
          {
            icon: markRaw(PencilSquareIcon),
            onClick: () => handlers?.onEditServer?.(sp.data),
          },
          {
            icon: markRaw(TrashIcon),
            onClick: () => handlers?.onDeleteServer?.(sp.data),
          },
        ],
      }),
    },
  ];
}
