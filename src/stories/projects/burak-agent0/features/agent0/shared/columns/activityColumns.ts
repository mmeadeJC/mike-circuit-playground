import { markRaw } from 'vue';
import { DataTableCellText, DataTableCellLink, DataTableCellToken } from '@jumpcloud/circuit/components';
import Tag from 'primevue/tag';

export const activityLogColumns = [
  {
    field: 'timestamp',
    header: 'Time',
    sortable: true,
    width: '170px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.timestamp,
    }),
  },
  {
    field: 'user',
    header: 'User',
    sortable: true,
    width: '200px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.user,
      href: '#',
    }),
  },
  {
    field: 'action',
    header: 'Action',
    sortable: true,
    width: '160px',
    component: markRaw(Tag),
    componentProps: (sp: { data: Record<string, unknown> }) => {
      const category = sp.data.actionCategory as string;
      const severityMap: Record<string, string> = {
        mcp_usage: 'accent-aster',
        token: 'accent-yellow',
        spending: 'accent-moss',
      };
      return {
        value: sp.data.action,
        severity: severityMap[category] || 'neutral',
      };
    },
  },
  {
    field: 'server',
    header: 'Server',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.server,
    }),
  },
  {
    field: 'detail',
    header: 'Details',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.detail,
    }),
  },
  {
    field: 'tokensUsed',
    header: 'Tokens',
    sortable: true,
    width: '110px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => {
      const tokens = sp.data.tokensUsed as number;
      return {
        label: tokens > 0 ? tokens.toLocaleString() : '—',
      };
    },
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellToken),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      type: 'Status',
      statusLabel: sp.data.status,
    }),
  },
];
